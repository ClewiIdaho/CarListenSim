(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var jc={exports:{}},xa={},qc={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Av(){if($p)return At;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(k,fe,We){this.props=k,this.context=fe,this.refs=T,this.updater=We||M}y.prototype.isReactComponent={},y.prototype.setState=function(k,fe){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,fe,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function g(){}g.prototype=y.prototype;function I(k,fe,We){this.props=k,this.context=fe,this.refs=T,this.updater=We||M}var D=I.prototype=new g;D.constructor=I,E(D,y.prototype),D.isPureReactComponent=!0;var R=Array.isArray,$=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function H(k,fe,We){var ie,xe={},De=null,be=null;if(fe!=null)for(ie in fe.ref!==void 0&&(be=fe.ref),fe.key!==void 0&&(De=""+fe.key),fe)$.call(fe,ie)&&!F.hasOwnProperty(ie)&&(xe[ie]=fe[ie]);var Be=arguments.length-2;if(Be===1)xe.children=We;else if(1<Be){for(var Xe=Array(Be),lt=0;lt<Be;lt++)Xe[lt]=arguments[lt+2];xe.children=Xe}if(k&&k.defaultProps)for(ie in Be=k.defaultProps,Be)xe[ie]===void 0&&(xe[ie]=Be[ie]);return{$$typeof:s,type:k,key:De,ref:be,props:xe,_owner:O.current}}function P(k,fe){return{$$typeof:s,type:k.type,key:fe,ref:k.ref,props:k.props,_owner:k._owner}}function A(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var fe={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(We){return fe[We]})}var oe=/\/+/g;function ee(k,fe){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):fe.toString(36)}function ge(k,fe,We,ie,xe){var De=typeof k;(De==="undefined"||De==="boolean")&&(k=null);var be=!1;if(k===null)be=!0;else switch(De){case"string":case"number":be=!0;break;case"object":switch(k.$$typeof){case s:case e:be=!0}}if(be)return be=k,xe=xe(be),k=ie===""?"."+ee(be,0):ie,R(xe)?(We="",k!=null&&(We=k.replace(oe,"$&/")+"/"),ge(xe,fe,We,"",function(lt){return lt})):xe!=null&&(A(xe)&&(xe=P(xe,We+(!xe.key||be&&be.key===xe.key?"":(""+xe.key).replace(oe,"$&/")+"/")+k)),fe.push(xe)),1;if(be=0,ie=ie===""?".":ie+":",R(k))for(var Be=0;Be<k.length;Be++){De=k[Be];var Xe=ie+ee(De,Be);be+=ge(De,fe,We,Xe,xe)}else if(Xe=x(k),typeof Xe=="function")for(k=Xe.call(k),Be=0;!(De=k.next()).done;)De=De.value,Xe=ie+ee(De,Be++),be+=ge(De,fe,We,Xe,xe);else if(De==="object")throw fe=String(k),Error("Objects are not valid as a React child (found: "+(fe==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":fe)+"). If you meant to render a collection of children, use an array instead.");return be}function _e(k,fe,We){if(k==null)return k;var ie=[],xe=0;return ge(k,ie,"","",function(De){return fe.call(We,De,xe++)}),ie}function pe(k){if(k._status===-1){var fe=k._result;fe=fe(),fe.then(function(We){(k._status===0||k._status===-1)&&(k._status=1,k._result=We)},function(We){(k._status===0||k._status===-1)&&(k._status=2,k._result=We)}),k._status===-1&&(k._status=0,k._result=fe)}if(k._status===1)return k._result.default;throw k._result}var he={current:null},G={transition:null},ve={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:G,ReactCurrentOwner:O};function me(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:_e,forEach:function(k,fe,We){_e(k,function(){fe.apply(this,arguments)},We)},count:function(k){var fe=0;return _e(k,function(){fe++}),fe},toArray:function(k){return _e(k,function(fe){return fe})||[]},only:function(k){if(!A(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},At.Component=y,At.Fragment=n,At.Profiler=a,At.PureComponent=I,At.StrictMode=r,At.Suspense=h,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,At.act=me,At.cloneElement=function(k,fe,We){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ie=E({},k.props),xe=k.key,De=k.ref,be=k._owner;if(fe!=null){if(fe.ref!==void 0&&(De=fe.ref,be=O.current),fe.key!==void 0&&(xe=""+fe.key),k.type&&k.type.defaultProps)var Be=k.type.defaultProps;for(Xe in fe)$.call(fe,Xe)&&!F.hasOwnProperty(Xe)&&(ie[Xe]=fe[Xe]===void 0&&Be!==void 0?Be[Xe]:fe[Xe])}var Xe=arguments.length-2;if(Xe===1)ie.children=We;else if(1<Xe){Be=Array(Xe);for(var lt=0;lt<Xe;lt++)Be[lt]=arguments[lt+2];ie.children=Be}return{$$typeof:s,type:k.type,key:xe,ref:De,props:ie,_owner:be}},At.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},At.createElement=H,At.createFactory=function(k){var fe=H.bind(null,k);return fe.type=k,fe},At.createRef=function(){return{current:null}},At.forwardRef=function(k){return{$$typeof:d,render:k}},At.isValidElement=A,At.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:pe}},At.memo=function(k,fe){return{$$typeof:m,type:k,compare:fe===void 0?null:fe}},At.startTransition=function(k){var fe=G.transition;G.transition={};try{k()}finally{G.transition=fe}},At.unstable_act=me,At.useCallback=function(k,fe){return he.current.useCallback(k,fe)},At.useContext=function(k){return he.current.useContext(k)},At.useDebugValue=function(){},At.useDeferredValue=function(k){return he.current.useDeferredValue(k)},At.useEffect=function(k,fe){return he.current.useEffect(k,fe)},At.useId=function(){return he.current.useId()},At.useImperativeHandle=function(k,fe,We){return he.current.useImperativeHandle(k,fe,We)},At.useInsertionEffect=function(k,fe){return he.current.useInsertionEffect(k,fe)},At.useLayoutEffect=function(k,fe){return he.current.useLayoutEffect(k,fe)},At.useMemo=function(k,fe){return he.current.useMemo(k,fe)},At.useReducer=function(k,fe,We){return he.current.useReducer(k,fe,We)},At.useRef=function(k){return he.current.useRef(k)},At.useState=function(k){return he.current.useState(k)},At.useSyncExternalStore=function(k,fe,We){return he.current.useSyncExternalStore(k,fe,We)},At.useTransition=function(){return he.current.useTransition()},At.version="18.3.1",At}var Kp;function yd(){return Kp||(Kp=1,qc.exports=Av()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Cv(){if(Zp)return xa;Zp=1;var s=yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var _,v={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:M,props:v,_owner:a.current}}return xa.Fragment=n,xa.jsx=c,xa.jsxs=c,xa}var Qp;function Rv(){return Qp||(Qp=1,jc.exports=Cv()),jc.exports}var je=Rv(),Ut=yd();const bv=mg(Ut);var Ul={},Yc={exports:{}},ai={},$c={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Pv(){return Jp||(Jp=1,(function(s){function e(G,ve){var me=G.length;G.push(ve);e:for(;0<me;){var k=me-1>>>1,fe=G[k];if(0<a(fe,ve))G[k]=ve,G[me]=fe,me=k;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ve=G[0],me=G.pop();if(me!==ve){G[0]=me;e:for(var k=0,fe=G.length,We=fe>>>1;k<We;){var ie=2*(k+1)-1,xe=G[ie],De=ie+1,be=G[De];if(0>a(xe,me))De<fe&&0>a(be,xe)?(G[k]=be,G[De]=me,k=De):(G[k]=xe,G[ie]=me,k=ie);else if(De<fe&&0>a(be,me))G[k]=be,G[De]=me,k=De;else break e}}return ve}function a(G,ve){var me=G.sortIndex-ve.sortIndex;return me!==0?me:G.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],_=1,v=null,x=3,M=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(G){for(var ve=n(m);ve!==null;){if(ve.callback===null)r(m);else if(ve.startTime<=G)r(m),ve.sortIndex=ve.expirationTime,e(h,ve);else break;ve=n(m)}}function R(G){if(T=!1,D(G),!E)if(n(h)!==null)E=!0,pe($);else{var ve=n(m);ve!==null&&he(R,ve.startTime-G)}}function $(G,ve){E=!1,T&&(T=!1,g(H),H=-1),M=!0;var me=x;try{for(D(ve),v=n(h);v!==null&&(!(v.expirationTime>ve)||G&&!z());){var k=v.callback;if(typeof k=="function"){v.callback=null,x=v.priorityLevel;var fe=k(v.expirationTime<=ve);ve=s.unstable_now(),typeof fe=="function"?v.callback=fe:v===n(h)&&r(h),D(ve)}else r(h);v=n(h)}if(v!==null)var We=!0;else{var ie=n(m);ie!==null&&he(R,ie.startTime-ve),We=!1}return We}finally{v=null,x=me,M=!1}}var O=!1,F=null,H=-1,P=5,A=-1;function z(){return!(s.unstable_now()-A<P)}function oe(){if(F!==null){var G=s.unstable_now();A=G;var ve=!0;try{ve=F(!0,G)}finally{ve?ee():(O=!1,F=null)}}else O=!1}var ee;if(typeof I=="function")ee=function(){I(oe)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,_e=ge.port2;ge.port1.onmessage=oe,ee=function(){_e.postMessage(null)}}else ee=function(){y(oe,0)};function pe(G){F=G,O||(O=!0,ee())}function he(G,ve){H=y(function(){G(s.unstable_now())},ve)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,pe($))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(G){switch(x){case 1:case 2:case 3:var ve=3;break;default:ve=x}var me=x;x=ve;try{return G()}finally{x=me}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,ve){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var me=x;x=G;try{return ve()}finally{x=me}},s.unstable_scheduleCallback=function(G,ve,me){var k=s.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?k+me:k):me=k,G){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=me+fe,G={id:_++,callback:ve,priorityLevel:G,startTime:me,expirationTime:fe,sortIndex:-1},me>k?(G.sortIndex=me,e(m,G),n(h)===null&&G===n(m)&&(T?(g(H),H=-1):T=!0,he(R,me-k))):(G.sortIndex=fe,e(h,G),E||M||(E=!0,pe($))),G},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(G){var ve=x;return function(){var me=x;x=ve;try{return G.apply(this,arguments)}finally{x=me}}}})(Kc)),Kc}var em;function Lv(){return em||(em=1,$c.exports=Pv()),$c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Dv(){if(tm)return ai;tm=1;var s=yd(),e=Lv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,u){if(i===null||typeof i>"u"||M(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,u,f,p,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),G=Symbol.iterator;function ve(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,k;function fe(t){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var We=!1;function ie(t,i){if(!t||We)return"";We=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var u=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){u=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){u=ce}t()}}catch(ce){if(ce&&u&&typeof ce.stack=="string"){for(var f=ce.stack.split(`
`),p=u.stack.split(`
`),S=f.length-1,N=p.length-1;1<=S&&0<=N&&f[S]!==p[N];)N--;for(;1<=S&&0<=N;S--,N--)if(f[S]!==p[N]){if(S!==1||N!==1)do if(S--,N--,0>N||f[S]!==p[N]){var V=`
`+f[S].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=S&&0<=N);break}}}finally{We=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?fe(t):""}function xe(t){switch(t.tag){case 5:return fe(t.type);case 16:return fe("Lazy");case 13:return fe("Suspense");case 19:return fe("SuspenseList");case 0:case 2:case 15:return t=ie(t.type,!1),t;case 11:return t=ie(t.type.render,!1),t;case 1:return t=ie(t.type,!0),t;default:return""}}function De(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case P:return"Profiler";case H:return"StrictMode";case ee:return"Suspense";case ge:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _e:return i=t.displayName||null,i!==null?i:De(t.type)||"Memo";case pe:i=t._payload,t=t._init;try{return De(t(i))}catch{}}return null}function be(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function lt(t){var i=Xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){u=""+S,p.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(S){u=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Nt(t){t._valueTracker||(t._valueTracker=lt(t))}function wt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Xe(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function K(t,i){var o=i.checked;return me({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Tn(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Be(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Tt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function _t(t,i){Tt(t,i);var o=Be(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?It(t,i.type,o):i.hasOwnProperty("defaultValue")&&It(t,i.type,Be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function at(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function It(t,i,o){(i!=="number"||Vt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var it=Array.isArray;function U(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Be(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return me({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function re(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(it(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Be(o)}}function Se(t,i){var o=Be(i.value),u=Be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Ee(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ye(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ve,b=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ve=Ve||document.createElement("div"),Ve.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ve.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function q(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var L={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z=["Webkit","ms","Moz","O"];Object.keys(L).forEach(function(t){Z.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),L[i]=L[t]})});function J(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||L.hasOwnProperty(t)&&L[t]?(""+i).trim():i+"px"}function Me(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=J(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var le=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(t,i){if(i){if(le[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,se=null,de=null;function Ie(t){if(t=ra(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=$a(i),Ce(t.stateNode,t.type,i))}}function Fe(t){se?de?de.push(t):de=[t]:se=t}function st(){if(se){var t=se,i=de;if(de=se=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function te(t,i){return t(i)}function tt(){}var ot=!1;function Ot(t,i,o){if(ot)return t(i,o);ot=!0;try{return te(t,i,o)}finally{ot=!1,(se!==null||de!==null)&&(tt(),st())}}function xt(t,i){var o=t.stateNode;if(o===null)return null;var u=$a(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qn=!1;if(d)try{var An={};Object.defineProperty(An,"passive",{get:function(){Qn=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Qn=!1}function Hn(t,i,o,u,f,p,S,N,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(o,ce)}catch(Re){this.onError(Re)}}var an=!1,Cn=null,jt=!1,Rn=null,fn={onError:function(t){an=!0,Cn=t}};function di(t,i,o,u,f,p,S,N,V){an=!1,Cn=null,Hn.apply(fn,arguments)}function Ei(t,i,o,u,f,p,S,N,V){if(di.apply(this,arguments),an){if(an){var ce=Cn;an=!1,Cn=null}else throw Error(n(198));jt||(jt=!0,Rn=ce)}}function Gn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ls(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function zs(t){if(Gn(t)!==t)throw Error(n(188))}function Go(t){var i=t.alternate;if(!i){if(i=Gn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return zs(f),t;if(p===u)return zs(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=p;else{for(var S=!1,N=f.child;N;){if(N===o){S=!0,o=f,u=p;break}if(N===u){S=!0,u=f,o=p;break}N=N.sibling}if(!S){for(N=p.child;N;){if(N===o){S=!0,o=p,u=f;break}if(N===u){S=!0,u=p,o=f;break}N=N.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function C(t){return t=Go(t),t!==null?j(t):null}function j(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=j(t);if(i!==null)return i;t=t.sibling}return null}var ae=e.unstable_scheduleCallback,ue=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Ue=e.unstable_requestPaint,Pe=e.unstable_now,Ke=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,ut=e.unstable_UserBlockingPriority,ct=e.unstable_NormalPriority,Ze=e.unstable_LowPriority,Mt=e.unstable_IdlePriority,bt=null,St=null;function dn(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Ct,Je=Math.log,Dn=Math.LN2;function Ct(t){return t>>>=0,t===0?32:31-(Je(t)/Dn|0)|0}var hn=64,Jn=4194304;function Jt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hi(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,S=o&268435455;if(S!==0){var N=S&~f;N!==0?u=Jt(N):(p&=S,p!==0&&(u=Jt(p)))}else S=o&~f,S!==0?u=Jt(S):p!==0&&(u=Jt(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-vt(i),f=1<<o,u|=t[o],i&=~f;return u}function Ft(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var S=31-vt(p),N=1<<S,V=f[S];V===-1?((N&o)===0||(N&u)!==0)&&(f[S]=Ft(N,i)):V<=i&&(t.expiredLanes|=N),p&=~N}}function ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _n(){var t=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),t}function In(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function en(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-vt(i),t[i]=o}function us(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-vt(o),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~p}}function Bs(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-vt(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var ht=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Wo,cr,Ji,Oa,Xo,Vs=!1,fr=[],wi=null,Wn=null,ti=null,mi=new Map,Fr=new Map,Ni=[],ka="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jo(t,i){switch(t){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":mi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(i.pointerId)}}function Un(t,i,o,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ra(i),i!==null&&cr(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function za(t,i,o,u,f){switch(i){case"focusin":return wi=Un(wi,t,i,o,u,f),!0;case"dragenter":return Wn=Un(Wn,t,i,o,u,f),!0;case"mouseover":return ti=Un(ti,t,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return mi.set(p,Un(mi.get(p)||null,t,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Fr.set(p,Un(Fr.get(p)||null,t,i,o,u,f)),!0}return!1}function er(t){var i=ps(t.target);if(i!==null){var o=Gn(i);if(o!==null){if(i=o.tag,i===13){if(i=ls(o),i!==null){t.blockedOn=i,Xo(t.priority,function(){Ji(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hs(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=hr(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);rt=u,o.target.dispatchEvent(u),rt=null}else return i=ra(o),i!==null&&cr(i),t.blockedOn=o,!1;i.shift()}return!0}function Ba(t,i,o){Hs(t)&&o.delete(i)}function Gs(){Vs=!1,wi!==null&&Hs(wi)&&(wi=null),Wn!==null&&Hs(Wn)&&(Wn=null),ti!==null&&Hs(ti)&&(ti=null),mi.forEach(Ba),Fr.forEach(Ba)}function tn(t,i){t.blockedOn===i&&(t.blockedOn=null,Vs||(Vs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gs)))}function tr(t){function i(f){return tn(f,t)}if(0<fr.length){tn(fr[0],t);for(var o=1;o<fr.length;o++){var u=fr[o];u.blockedOn===t&&(u.blockedOn=null)}}for(wi!==null&&tn(wi,t),Wn!==null&&tn(Wn,t),ti!==null&&tn(ti,t),mi.forEach(i),Fr.forEach(i),o=0;o<Ni.length;o++)u=Ni[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Ni.length&&(o=Ni[0],o.blockedOn===null);)er(o),o.blockedOn===null&&Ni.shift()}var Fi=R.ReactCurrentBatchConfig,Oi=!0;function Eu(t,i,o,u){var f=ht,p=Fi.transition;Fi.transition=null;try{ht=1,dr(t,i,o,u)}finally{ht=f,Fi.transition=p}}function Va(t,i,o,u){var f=ht,p=Fi.transition;Fi.transition=null;try{ht=4,dr(t,i,o,u)}finally{ht=f,Fi.transition=p}}function dr(t,i,o,u){if(Oi){var f=hr(t,i,o,u);if(f===null)Fu(t,i,u,cs,o),jo(t,u);else if(za(f,t,i,o,u))u.stopPropagation();else if(jo(t,u),i&4&&-1<ka.indexOf(t)){for(;f!==null;){var p=ra(f);if(p!==null&&Wo(p),p=hr(t,i,o,u),p===null&&Fu(t,i,u,cs,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Fu(t,i,u,null,o)}}var cs=null;function hr(t,i,o,u){if(cs=null,t=B(u),t=ps(t),t!==null)if(i=Gn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ls(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return cs=t,null}function qo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case qe:return 1;case ut:return 4;case ct:case Ze:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var ki=null,Ws=null,nr=null;function Or(){if(nr)return nr;var t,i=Ws,o=i.length,u,f="value"in ki?ki.value:ki.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(u=1;u<=S&&i[o-u]===f[p-u];u++);return nr=f.slice(t,1<u?1-u:void 0)}function fs(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ds(){return!0}function Yo(){return!1}function Xn(t){function i(o,u,f,p,S){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ds:Yo,this.isPropagationStopped=Yo,this}return me(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),i}var we={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oe=Xn(we),Gt=me({},we,{view:0,detail:0}),kt=Xn(Gt),jn,zi,Ti,hs=me({},Gt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(jn=t.screenX-Ti.screenX,zi=t.screenY-Ti.screenY):zi=jn=0,Ti=t),jn)},movementY:function(t){return"movementY"in t?t.movementY:zi}}),kd=Xn(hs),e0=me({},hs,{dataTransfer:0}),t0=Xn(e0),n0=me({},Gt,{relatedTarget:0}),wu=Xn(n0),i0=me({},we,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Xn(i0),s0=me({},we,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o0=Xn(s0),a0=me({},we,{data:0}),zd=Xn(a0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=c0[t])?!!i[t]:!1}function Tu(){return f0}var d0=me({},Gt,{key:function(t){if(t.key){var i=l0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=fs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?fs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h0=Xn(d0),p0=me({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Xn(p0),m0=me({},Gt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),g0=Xn(m0),v0=me({},we,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=Xn(v0),x0=me({},hs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=Xn(x0),M0=[9,13,27,32],Au=d&&"CompositionEvent"in window,$o=null;d&&"documentMode"in document&&($o=document.documentMode);var S0=d&&"TextEvent"in window&&!$o,Vd=d&&(!Au||$o&&8<$o&&11>=$o),Hd=" ",Gd=!1;function Wd(t,i){switch(t){case"keyup":return M0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function E0(t,i){switch(t){case"compositionend":return Xd(i);case"keypress":return i.which!==32?null:(Gd=!0,Hd);case"textInput":return t=i.data,t===Hd&&Gd?null:t;default:return null}}function w0(t,i){if(Xs)return t==="compositionend"||!Au&&Wd(t,i)?(t=Or(),nr=Ws=ki=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vd&&i.locale!=="ko"?null:i.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!T0[t.type]:i==="textarea"}function qd(t,i,o,u){Fe(u),i=ja(i,"onChange"),0<i.length&&(o=new Oe("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Ko=null,Zo=null;function A0(t){fh(t,0)}function Ha(t){var i=Ks(t);if(wt(i))return t}function C0(t,i){if(t==="change")return i}var Yd=!1;if(d){var Cu;if(d){var Ru="oninput"in document;if(!Ru){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Ru=typeof $d.oninput=="function"}Cu=Ru}else Cu=!1;Yd=Cu&&(!document.documentMode||9<document.documentMode)}function Kd(){Ko&&(Ko.detachEvent("onpropertychange",Zd),Zo=Ko=null)}function Zd(t){if(t.propertyName==="value"&&Ha(Zo)){var i=[];qd(i,Zo,t,B(t)),Ot(A0,i)}}function R0(t,i,o){t==="focusin"?(Kd(),Ko=i,Zo=o,Ko.attachEvent("onpropertychange",Zd)):t==="focusout"&&Kd()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ha(Zo)}function P0(t,i){if(t==="click")return Ha(i)}function L0(t,i){if(t==="input"||t==="change")return Ha(i)}function D0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Bi=typeof Object.is=="function"?Object.is:D0;function Qo(t,i){if(Bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!Bi(t[f],i[f]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jd(t,i){var o=Qd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function eh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?eh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function th(){for(var t=window,i=Vt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Vt(t.document)}return i}function bu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function I0(t){var i=th(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(u!==null&&bu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=Jd(o,p);var S=Jd(o,u);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U0=d&&"documentMode"in document&&11>=document.documentMode,js=null,Pu=null,Jo=null,Lu=!1;function nh(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Lu||js==null||js!==Vt(u)||(u=js,"selectionStart"in u&&bu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Jo&&Qo(Jo,u)||(Jo=u,u=ja(Pu,"onSelect"),0<u.length&&(i=new Oe("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=js)))}function Ga(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var qs={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Du={},ih={};d&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Wa(t){if(Du[t])return Du[t];if(!qs[t])return t;var i=qs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ih)return Du[t]=i[o];return t}var rh=Wa("animationend"),sh=Wa("animationiteration"),oh=Wa("animationstart"),ah=Wa("transitionend"),lh=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,i){lh.set(t,i),l(i,[t])}for(var Iu=0;Iu<uh.length;Iu++){var Uu=uh[Iu],N0=Uu.toLowerCase(),F0=Uu[0].toUpperCase()+Uu.slice(1);kr(N0,"on"+F0)}kr(rh,"onAnimationEnd"),kr(sh,"onAnimationIteration"),kr(oh,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function ch(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,Ei(u,i,void 0,t),t.currentTarget=null}function fh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var S=u.length-1;0<=S;S--){var N=u[S],V=N.instance,ce=N.currentTarget;if(N=N.listener,V!==p&&f.isPropagationStopped())break e;ch(f,N,ce),p=V}else for(S=0;S<u.length;S++){if(N=u[S],V=N.instance,ce=N.currentTarget,N=N.listener,V!==p&&f.isPropagationStopped())break e;ch(f,N,ce),p=V}}}if(jt)throw t=Rn,jt=!1,Rn=null,t}function qt(t,i){var o=i[Hu];o===void 0&&(o=i[Hu]=new Set);var u=t+"__bubble";o.has(u)||(dh(i,t,2,!1),o.add(u))}function Nu(t,i,o){var u=0;i&&(u|=4),dh(o,t,u,i)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Xa]){t[Xa]=!0,r.forEach(function(o){o!=="selectionchange"&&(O0.has(o)||Nu(o,!1,t),Nu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Xa]||(i[Xa]=!0,Nu("selectionchange",!1,i))}}function dh(t,i,o,u){switch(qo(i)){case 1:var f=Eu;break;case 4:f=Va;break;default:f=dr}o=f.bind(null,i,o,t),f=void 0,!Qn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Fu(t,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var S=u.tag;if(S===3||S===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(S===4)for(S=u.return;S!==null;){var V=S.tag;if((V===3||V===4)&&(V=S.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;S=S.return}for(;N!==null;){if(S=ps(N),S===null)return;if(V=S.tag,V===5||V===6){u=p=S;continue e}N=N.parentNode}}u=u.return}Ot(function(){var ce=p,Re=B(o),Le=[];e:{var Te=lh.get(t);if(Te!==void 0){var Ge=Oe,$e=t;switch(t){case"keypress":if(fs(o)===0)break e;case"keydown":case"keyup":Ge=h0;break;case"focusin":$e="focus",Ge=wu;break;case"focusout":$e="blur",Ge=wu;break;case"beforeblur":case"afterblur":Ge=wu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=g0;break;case rh:case sh:case oh:Ge=r0;break;case ah:Ge=_0;break;case"scroll":Ge=kt;break;case"wheel":Ge=y0;break;case"copy":case"cut":case"paste":Ge=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Bd}var et=(i&4)!==0,rn=!et&&t==="scroll",Q=et?Te!==null?Te+"Capture":null:Te;et=[];for(var W=ce,ne;W!==null;){ne=W;var Ne=ne.stateNode;if(ne.tag===5&&Ne!==null&&(ne=Ne,Q!==null&&(Ne=xt(W,Q),Ne!=null&&et.push(na(W,Ne,ne)))),rn)break;W=W.return}0<et.length&&(Te=new Ge(Te,$e,null,o,Re),Le.push({event:Te,listeners:et}))}}if((i&7)===0){e:{if(Te=t==="mouseover"||t==="pointerover",Ge=t==="mouseout"||t==="pointerout",Te&&o!==rt&&($e=o.relatedTarget||o.fromElement)&&(ps($e)||$e[pr]))break e;if((Ge||Te)&&(Te=Re.window===Re?Re:(Te=Re.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ge?($e=o.relatedTarget||o.toElement,Ge=ce,$e=$e?ps($e):null,$e!==null&&(rn=Gn($e),$e!==rn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ge=null,$e=ce),Ge!==$e)){if(et=kd,Ne="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(et=Bd,Ne="onPointerLeave",Q="onPointerEnter",W="pointer"),rn=Ge==null?Te:Ks(Ge),ne=$e==null?Te:Ks($e),Te=new et(Ne,W+"leave",Ge,o,Re),Te.target=rn,Te.relatedTarget=ne,Ne=null,ps(Re)===ce&&(et=new et(Q,W+"enter",$e,o,Re),et.target=ne,et.relatedTarget=rn,Ne=et),rn=Ne,Ge&&$e)t:{for(et=Ge,Q=$e,W=0,ne=et;ne;ne=Ys(ne))W++;for(ne=0,Ne=Q;Ne;Ne=Ys(Ne))ne++;for(;0<W-ne;)et=Ys(et),W--;for(;0<ne-W;)Q=Ys(Q),ne--;for(;W--;){if(et===Q||Q!==null&&et===Q.alternate)break t;et=Ys(et),Q=Ys(Q)}et=null}else et=null;Ge!==null&&hh(Le,Te,Ge,et,!1),$e!==null&&rn!==null&&hh(Le,rn,$e,et,!0)}}e:{if(Te=ce?Ks(ce):window,Ge=Te.nodeName&&Te.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Te.type==="file")var nt=C0;else if(jd(Te))if(Yd)nt=L0;else{nt=b0;var ft=R0}else(Ge=Te.nodeName)&&Ge.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(nt=P0);if(nt&&(nt=nt(t,ce))){qd(Le,nt,o,Re);break e}ft&&ft(t,Te,ce),t==="focusout"&&(ft=Te._wrapperState)&&ft.controlled&&Te.type==="number"&&It(Te,"number",Te.value)}switch(ft=ce?Ks(ce):window,t){case"focusin":(jd(ft)||ft.contentEditable==="true")&&(js=ft,Pu=ce,Jo=null);break;case"focusout":Jo=Pu=js=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,nh(Le,o,Re);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":nh(Le,o,Re)}var dt;if(Au)e:{switch(t){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Xs?Wd(t,o)&&(gt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(Vd&&o.locale!=="ko"&&(Xs||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Xs&&(dt=Or()):(ki=Re,Ws="value"in ki?ki.value:ki.textContent,Xs=!0)),ft=ja(ce,gt),0<ft.length&&(gt=new zd(gt,t,null,o,Re),Le.push({event:gt,listeners:ft}),dt?gt.data=dt:(dt=Xd(o),dt!==null&&(gt.data=dt)))),(dt=S0?E0(t,o):w0(t,o))&&(ce=ja(ce,"onBeforeInput"),0<ce.length&&(Re=new zd("onBeforeInput","beforeinput",null,o,Re),Le.push({event:Re,listeners:ce}),Re.data=dt))}fh(Le,i)})}function na(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ja(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=xt(t,o),p!=null&&u.unshift(na(t,p,f)),p=xt(t,i),p!=null&&u.push(na(t,p,f))),t=t.return}return u}function Ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hh(t,i,o,u,f){for(var p=i._reactName,S=[];o!==null&&o!==u;){var N=o,V=N.alternate,ce=N.stateNode;if(V!==null&&V===u)break;N.tag===5&&ce!==null&&(N=ce,f?(V=xt(o,p),V!=null&&S.unshift(na(o,V,N))):f||(V=xt(o,p),V!=null&&S.push(na(o,V,N)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var k0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function ph(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(z0,"")}function qa(t,i,o){if(i=ph(i),ph(t)!==i&&o)throw Error(n(425))}function Ya(){}var Ou=null,ku=null;function zu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(H0)}:Bu;function H0(t){setTimeout(function(){throw t})}function Vu(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),tr(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);tr(i)}function zr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),ir="__reactFiber$"+$s,ia="__reactProps$"+$s,pr="__reactContainer$"+$s,Hu="__reactEvents$"+$s,G0="__reactListeners$"+$s,W0="__reactHandles$"+$s;function ps(t){var i=t[ir];if(i)return i;for(var o=t.parentNode;o;){if(i=o[pr]||o[ir]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=gh(t);t!==null;){if(o=t[ir])return o;t=gh(t)}return i}t=o,o=t.parentNode}return null}function ra(t){return t=t[ir]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function $a(t){return t[ia]||null}var Gu=[],Zs=-1;function Br(t){return{current:t}}function Yt(t){0>Zs||(t.current=Gu[Zs],Gu[Zs]=null,Zs--)}function Wt(t,i){Zs++,Gu[Zs]=t.current,t.current=i}var Vr={},Nn=Br(Vr),ni=Br(!1),ms=Vr;function Qs(t,i){var o=t.type.contextTypes;if(!o)return Vr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function ii(t){return t=t.childContextTypes,t!=null}function Ka(){Yt(ni),Yt(Nn)}function vh(t,i,o){if(Nn.current!==Vr)throw Error(n(168));Wt(Nn,i),Wt(ni,o)}function _h(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,be(t)||"Unknown",f));return me({},o,u)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,ms=Nn.current,Wt(Nn,t),Wt(ni,ni.current),!0}function xh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=_h(t,i,ms),u.__reactInternalMemoizedMergedChildContext=t,Yt(ni),Yt(Nn),Wt(Nn,t)):Yt(ni),Wt(ni,o)}var mr=null,Qa=!1,Wu=!1;function yh(t){mr===null?mr=[t]:mr.push(t)}function X0(t){Qa=!0,yh(t)}function Hr(){if(!Wu&&mr!==null){Wu=!0;var t=0,i=ht;try{var o=mr;for(ht=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}mr=null,Qa=!1}catch(f){throw mr!==null&&(mr=mr.slice(t+1)),ae(qe,Hr),f}finally{ht=i,Wu=!1}}return null}var Js=[],eo=0,Ja=null,el=0,Ai=[],Ci=0,gs=null,gr=1,vr="";function vs(t,i){Js[eo++]=el,Js[eo++]=Ja,Ja=t,el=i}function Mh(t,i,o){Ai[Ci++]=gr,Ai[Ci++]=vr,Ai[Ci++]=gs,gs=t;var u=gr;t=vr;var f=32-vt(u)-1;u&=~(1<<f),o+=1;var p=32-vt(i)+f;if(30<p){var S=f-f%5;p=(u&(1<<S)-1).toString(32),u>>=S,f-=S,gr=1<<32-vt(i)+f|o<<f|u,vr=p+t}else gr=1<<p|o<<f|u,vr=t}function Xu(t){t.return!==null&&(vs(t,1),Mh(t,1,0))}function ju(t){for(;t===Ja;)Ja=Js[--eo],Js[eo]=null,el=Js[--eo],Js[eo]=null;for(;t===gs;)gs=Ai[--Ci],Ai[Ci]=null,vr=Ai[--Ci],Ai[Ci]=null,gr=Ai[--Ci],Ai[Ci]=null}var gi=null,vi=null,Kt=!1,Vi=null;function Sh(t,i){var o=Li(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,gi=t,vi=zr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,gi=t,vi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=gs!==null?{id:gr,overflow:vr}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Li(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,gi=t,vi=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(Kt){var i=vi;if(i){var o=i;if(!Eh(t,i)){if(qu(t))throw Error(n(418));i=zr(o.nextSibling);var u=gi;i&&Eh(t,i)?Sh(u,o):(t.flags=t.flags&-4097|2,Kt=!1,gi=t)}}else{if(qu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Kt=!1,gi=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gi=t}function tl(t){if(t!==gi)return!1;if(!Kt)return wh(t),Kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!zu(t.type,t.memoizedProps)),i&&(i=vi)){if(qu(t))throw Th(),Error(n(418));for(;i;)Sh(t,i),i=zr(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){vi=zr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}vi=null}}else vi=gi?zr(t.stateNode.nextSibling):null;return!0}function Th(){for(var t=vi;t;)t=zr(t.nextSibling)}function to(){vi=gi=null,Kt=!1}function $u(t){Vi===null?Vi=[t]:Vi.push(t)}var j0=R.ReactCurrentBatchConfig;function sa(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(S){var N=f.refs;S===null?delete N[p]:N[p]=S},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function nl(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ah(t){var i=t._init;return i(t._payload)}function Ch(t){function i(Q,W){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[W],Q.flags|=16):ne.push(W)}}function o(Q,W){if(!t)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function u(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function f(Q,W){return Q=Kr(Q,W),Q.index=0,Q.sibling=null,Q}function p(Q,W,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<W?(Q.flags|=2,W):ne):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function N(Q,W,ne,Ne){return W===null||W.tag!==6?(W=Bc(ne,Q.mode,Ne),W.return=Q,W):(W=f(W,ne),W.return=Q,W)}function V(Q,W,ne,Ne){var nt=ne.type;return nt===F?Re(Q,W,ne.props.children,Ne,ne.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===pe&&Ah(nt)===W.type)?(Ne=f(W,ne.props),Ne.ref=sa(Q,W,ne),Ne.return=Q,Ne):(Ne=Al(ne.type,ne.key,ne.props,null,Q.mode,Ne),Ne.ref=sa(Q,W,ne),Ne.return=Q,Ne)}function ce(Q,W,ne,Ne){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Vc(ne,Q.mode,Ne),W.return=Q,W):(W=f(W,ne.children||[]),W.return=Q,W)}function Re(Q,W,ne,Ne,nt){return W===null||W.tag!==7?(W=Ts(ne,Q.mode,Ne,nt),W.return=Q,W):(W=f(W,ne),W.return=Q,W)}function Le(Q,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Bc(""+W,Q.mode,ne),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case $:return ne=Al(W.type,W.key,W.props,null,Q.mode,ne),ne.ref=sa(Q,null,W),ne.return=Q,ne;case O:return W=Vc(W,Q.mode,ne),W.return=Q,W;case pe:var Ne=W._init;return Le(Q,Ne(W._payload),ne)}if(it(W)||ve(W))return W=Ts(W,Q.mode,ne,null),W.return=Q,W;nl(Q,W)}return null}function Te(Q,W,ne,Ne){var nt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return nt!==null?null:N(Q,W,""+ne,Ne);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:return ne.key===nt?V(Q,W,ne,Ne):null;case O:return ne.key===nt?ce(Q,W,ne,Ne):null;case pe:return nt=ne._init,Te(Q,W,nt(ne._payload),Ne)}if(it(ne)||ve(ne))return nt!==null?null:Re(Q,W,ne,Ne,null);nl(Q,ne)}return null}function Ge(Q,W,ne,Ne,nt){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return Q=Q.get(ne)||null,N(W,Q,""+Ne,nt);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case $:return Q=Q.get(Ne.key===null?ne:Ne.key)||null,V(W,Q,Ne,nt);case O:return Q=Q.get(Ne.key===null?ne:Ne.key)||null,ce(W,Q,Ne,nt);case pe:var ft=Ne._init;return Ge(Q,W,ne,ft(Ne._payload),nt)}if(it(Ne)||ve(Ne))return Q=Q.get(ne)||null,Re(W,Q,Ne,nt,null);nl(W,Ne)}return null}function $e(Q,W,ne,Ne){for(var nt=null,ft=null,dt=W,gt=W=0,Mn=null;dt!==null&&gt<ne.length;gt++){dt.index>gt?(Mn=dt,dt=null):Mn=dt.sibling;var Dt=Te(Q,dt,ne[gt],Ne);if(Dt===null){dt===null&&(dt=Mn);break}t&&dt&&Dt.alternate===null&&i(Q,dt),W=p(Dt,W,gt),ft===null?nt=Dt:ft.sibling=Dt,ft=Dt,dt=Mn}if(gt===ne.length)return o(Q,dt),Kt&&vs(Q,gt),nt;if(dt===null){for(;gt<ne.length;gt++)dt=Le(Q,ne[gt],Ne),dt!==null&&(W=p(dt,W,gt),ft===null?nt=dt:ft.sibling=dt,ft=dt);return Kt&&vs(Q,gt),nt}for(dt=u(Q,dt);gt<ne.length;gt++)Mn=Ge(dt,Q,gt,ne[gt],Ne),Mn!==null&&(t&&Mn.alternate!==null&&dt.delete(Mn.key===null?gt:Mn.key),W=p(Mn,W,gt),ft===null?nt=Mn:ft.sibling=Mn,ft=Mn);return t&&dt.forEach(function(Zr){return i(Q,Zr)}),Kt&&vs(Q,gt),nt}function et(Q,W,ne,Ne){var nt=ve(ne);if(typeof nt!="function")throw Error(n(150));if(ne=nt.call(ne),ne==null)throw Error(n(151));for(var ft=nt=null,dt=W,gt=W=0,Mn=null,Dt=ne.next();dt!==null&&!Dt.done;gt++,Dt=ne.next()){dt.index>gt?(Mn=dt,dt=null):Mn=dt.sibling;var Zr=Te(Q,dt,Dt.value,Ne);if(Zr===null){dt===null&&(dt=Mn);break}t&&dt&&Zr.alternate===null&&i(Q,dt),W=p(Zr,W,gt),ft===null?nt=Zr:ft.sibling=Zr,ft=Zr,dt=Mn}if(Dt.done)return o(Q,dt),Kt&&vs(Q,gt),nt;if(dt===null){for(;!Dt.done;gt++,Dt=ne.next())Dt=Le(Q,Dt.value,Ne),Dt!==null&&(W=p(Dt,W,gt),ft===null?nt=Dt:ft.sibling=Dt,ft=Dt);return Kt&&vs(Q,gt),nt}for(dt=u(Q,dt);!Dt.done;gt++,Dt=ne.next())Dt=Ge(dt,Q,gt,Dt.value,Ne),Dt!==null&&(t&&Dt.alternate!==null&&dt.delete(Dt.key===null?gt:Dt.key),W=p(Dt,W,gt),ft===null?nt=Dt:ft.sibling=Dt,ft=Dt);return t&&dt.forEach(function(Tv){return i(Q,Tv)}),Kt&&vs(Q,gt),nt}function rn(Q,W,ne,Ne){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:e:{for(var nt=ne.key,ft=W;ft!==null;){if(ft.key===nt){if(nt=ne.type,nt===F){if(ft.tag===7){o(Q,ft.sibling),W=f(ft,ne.props.children),W.return=Q,Q=W;break e}}else if(ft.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===pe&&Ah(nt)===ft.type){o(Q,ft.sibling),W=f(ft,ne.props),W.ref=sa(Q,ft,ne),W.return=Q,Q=W;break e}o(Q,ft);break}else i(Q,ft);ft=ft.sibling}ne.type===F?(W=Ts(ne.props.children,Q.mode,Ne,ne.key),W.return=Q,Q=W):(Ne=Al(ne.type,ne.key,ne.props,null,Q.mode,Ne),Ne.ref=sa(Q,W,ne),Ne.return=Q,Q=Ne)}return S(Q);case O:e:{for(ft=ne.key;W!==null;){if(W.key===ft)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){o(Q,W.sibling),W=f(W,ne.children||[]),W.return=Q,Q=W;break e}else{o(Q,W);break}else i(Q,W);W=W.sibling}W=Vc(ne,Q.mode,Ne),W.return=Q,Q=W}return S(Q);case pe:return ft=ne._init,rn(Q,W,ft(ne._payload),Ne)}if(it(ne))return $e(Q,W,ne,Ne);if(ve(ne))return et(Q,W,ne,Ne);nl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(o(Q,W.sibling),W=f(W,ne),W.return=Q,Q=W):(o(Q,W),W=Bc(ne,Q.mode,Ne),W.return=Q,Q=W),S(Q)):o(Q,W)}return rn}var no=Ch(!0),Rh=Ch(!1),il=Br(null),rl=null,io=null,Ku=null;function Zu(){Ku=io=rl=null}function Qu(t){var i=il.current;Yt(il),t._currentValue=i}function Ju(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function ro(t,i){rl=t,Ku=io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ri=!0),t.firstContext=null)}function Ri(t){var i=t._currentValue;if(Ku!==t)if(t={context:t,memoizedValue:i,next:null},io===null){if(rl===null)throw Error(n(308));io=t,rl.dependencies={lanes:0,firstContext:t}}else io=io.next=t;return i}var _s=null;function ec(t){_s===null?_s=[t]:_s.push(t)}function bh(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,ec(i)):(o.next=f.next,f.next=o),i.interleaved=o,_r(t,u)}function _r(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Gr=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Wr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Lt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,_r(t,o)}return f=u.interleaved,f===null?(i.next=i,ec(u)):(i.next=f.next,f.next=i),u.interleaved=i,_r(t,o)}function sl(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Bs(t,o)}}function Lh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=S:p=p.next=S,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ol(t,i,o,u){var f=t.updateQueue;Gr=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var V=N,ce=V.next;V.next=null,S===null?p=ce:S.next=ce,S=V;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,N=Re.lastBaseUpdate,N!==S&&(N===null?Re.firstBaseUpdate=ce:N.next=ce,Re.lastBaseUpdate=V))}if(p!==null){var Le=f.baseState;S=0,Re=ce=V=null,N=p;do{var Te=N.lane,Ge=N.eventTime;if((u&Te)===Te){Re!==null&&(Re=Re.next={eventTime:Ge,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var $e=t,et=N;switch(Te=i,Ge=o,et.tag){case 1:if($e=et.payload,typeof $e=="function"){Le=$e.call(Ge,Le,Te);break e}Le=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=et.payload,Te=typeof $e=="function"?$e.call(Ge,Le,Te):$e,Te==null)break e;Le=me({},Le,Te);break e;case 2:Gr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,Te=f.effects,Te===null?f.effects=[N]:Te.push(N))}else Ge={eventTime:Ge,lane:Te,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Re===null?(ce=Re=Ge,V=Le):Re=Re.next=Ge,S|=Te;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Te=N,N=Te.next,Te.next=null,f.lastBaseUpdate=Te,f.shared.pending=null}}while(!0);if(Re===null&&(V=Le),f.baseState=V,f.firstBaseUpdate=ce,f.lastBaseUpdate=Re,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Ms|=S,t.lanes=S,t.memoizedState=Le}}function Dh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var oa={},rr=Br(oa),aa=Br(oa),la=Br(oa);function xs(t){if(t===oa)throw Error(n(174));return t}function nc(t,i){switch(Wt(la,i),Wt(aa,t),Wt(rr,oa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Qe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Qe(i,t)}Yt(rr),Wt(rr,i)}function so(){Yt(rr),Yt(aa),Yt(la)}function Ih(t){xs(la.current);var i=xs(rr.current),o=Qe(i,t.type);i!==o&&(Wt(aa,t),Wt(rr,o))}function ic(t){aa.current===t&&(Yt(rr),Yt(aa))}var Zt=Br(0);function al(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rc=[];function sc(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var ll=R.ReactCurrentDispatcher,oc=R.ReactCurrentBatchConfig,ys=0,Qt=null,pn=null,xn=null,ul=!1,ua=!1,ca=0,q0=0;function Fn(){throw Error(n(321))}function ac(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Bi(t[o],i[o]))return!1;return!0}function lc(t,i,o,u,f,p){if(ys=p,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ll.current=t===null||t.memoizedState===null?Z0:Q0,t=o(u,f),ua){p=0;do{if(ua=!1,ca=0,25<=p)throw Error(n(301));p+=1,xn=pn=null,i.updateQueue=null,ll.current=J0,t=o(u,f)}while(ua)}if(ll.current=dl,i=pn!==null&&pn.next!==null,ys=0,xn=pn=Qt=null,ul=!1,i)throw Error(n(300));return t}function uc(){var t=ca!==0;return ca=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Qt.memoizedState=xn=t:xn=xn.next=t,xn}function bi(){if(pn===null){var t=Qt.alternate;t=t!==null?t.memoizedState:null}else t=pn.next;var i=xn===null?Qt.memoizedState:xn.next;if(i!==null)xn=i,pn=t;else{if(t===null)throw Error(n(310));pn=t,t={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},xn===null?Qt.memoizedState=xn=t:xn=xn.next=t}return xn}function fa(t,i){return typeof i=="function"?i(t):i}function cc(t){var i=bi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=pn,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var N=S=null,V=null,ce=p;do{var Re=ce.lane;if((ys&Re)===Re)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),u=ce.hasEagerState?ce.eagerState:t(u,ce.action);else{var Le={lane:Re,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(N=V=Le,S=u):V=V.next=Le,Qt.lanes|=Re,Ms|=Re}ce=ce.next}while(ce!==null&&ce!==p);V===null?S=u:V.next=N,Bi(u,i.memoizedState)||(ri=!0),i.memoizedState=u,i.baseState=S,i.baseQueue=V,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do p=f.lane,Qt.lanes|=p,Ms|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(t){var i=bi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);Bi(p,i.memoizedState)||(ri=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Uh(){}function Nh(t,i){var o=Qt,u=bi(),f=i(),p=!Bi(u.memoizedState,f);if(p&&(u.memoizedState=f,ri=!0),u=u.queue,dc(kh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||xn!==null&&xn.memoizedState.tag&1){if(o.flags|=2048,da(9,Oh.bind(null,o,u,f,i),void 0,null),yn===null)throw Error(n(349));(ys&30)!==0||Fh(o,i,f)}return f}function Fh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Oh(t,i,o,u){i.value=o,i.getSnapshot=u,zh(i)&&Bh(t)}function kh(t,i,o){return o(function(){zh(i)&&Bh(t)})}function zh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Bi(t,o)}catch{return!0}}function Bh(t){var i=_r(t,1);i!==null&&Xi(i,t,1,-1)}function Vh(t){var i=sr();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},i.queue=t,t=t.dispatch=K0.bind(null,Qt,t),[i.memoizedState,t]}function da(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Hh(){return bi().memoizedState}function cl(t,i,o,u){var f=sr();Qt.flags|=t,f.memoizedState=da(1|i,o,void 0,u===void 0?null:u)}function fl(t,i,o,u){var f=bi();u=u===void 0?null:u;var p=void 0;if(pn!==null){var S=pn.memoizedState;if(p=S.destroy,u!==null&&ac(u,S.deps)){f.memoizedState=da(i,o,p,u);return}}Qt.flags|=t,f.memoizedState=da(1|i,o,p,u)}function Gh(t,i){return cl(8390656,8,t,i)}function dc(t,i){return fl(2048,8,t,i)}function Wh(t,i){return fl(4,2,t,i)}function Xh(t,i){return fl(4,4,t,i)}function jh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,fl(4,4,jh.bind(null,i,t),o)}function hc(){}function Yh(t,i){var o=bi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=bi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Kh(t,i,o){return(ys&21)===0?(t.baseState&&(t.baseState=!1,ri=!0),t.memoizedState=o):(Bi(o,i)||(o=_n(),Qt.lanes|=o,Ms|=o,t.baseState=!0),i)}function Y0(t,i){var o=ht;ht=o!==0&&4>o?o:4,t(!0);var u=oc.transition;oc.transition={};try{t(!1),i()}finally{ht=o,oc.transition=u}}function Zh(){return bi().memoizedState}function $0(t,i,o){var u=Yr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(t))Jh(i,o);else if(o=bh(t,i,o,u),o!==null){var f=Yn();Xi(o,t,u,f),ep(o,i,u)}}function K0(t,i,o){var u=Yr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(t))Jh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var S=i.lastRenderedState,N=p(S,o);if(f.hasEagerState=!0,f.eagerState=N,Bi(N,S)){var V=i.interleaved;V===null?(f.next=f,ec(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}o=bh(t,i,f,u),o!==null&&(f=Yn(),Xi(o,t,u,f),ep(o,i,u))}}function Qh(t){var i=t.alternate;return t===Qt||i!==null&&i===Qt}function Jh(t,i){ua=ul=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ep(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Bs(t,o)}}var dl={readContext:Ri,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},Z0={readContext:Ri,useCallback:function(t,i){return sr().memoizedState=[t,i===void 0?null:i],t},useContext:Ri,useEffect:Gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,cl(4194308,4,jh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return cl(4194308,4,t,i)},useInsertionEffect:function(t,i){return cl(4,2,t,i)},useMemo:function(t,i){var o=sr();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=sr();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=$0.bind(null,Qt,t),[u.memoizedState,t]},useRef:function(t){var i=sr();return t={current:t},i.memoizedState=t},useState:Vh,useDebugValue:hc,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=Vh(!1),i=t[0];return t=Y0.bind(null,t[1]),sr().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Qt,f=sr();if(Kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),yn===null)throw Error(n(349));(ys&30)!==0||Fh(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Gh(kh.bind(null,u,p,t),[t]),u.flags|=2048,da(9,Oh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=sr(),i=yn.identifierPrefix;if(Kt){var o=vr,u=gr;o=(u&~(1<<32-vt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=ca++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=q0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Q0={readContext:Ri,useCallback:Yh,useContext:Ri,useEffect:dc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:cc,useRef:Hh,useState:function(){return cc(fa)},useDebugValue:hc,useDeferredValue:function(t){var i=bi();return Kh(i,pn.memoizedState,t)},useTransition:function(){var t=cc(fa)[0],i=bi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Zh,unstable_isNewReconciler:!1},J0={readContext:Ri,useCallback:Yh,useContext:Ri,useEffect:dc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:fc,useRef:Hh,useState:function(){return fc(fa)},useDebugValue:hc,useDeferredValue:function(t){var i=bi();return pn===null?i.memoizedState=t:Kh(i,pn.memoizedState,t)},useTransition:function(){var t=fc(fa)[0],i=bi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Zh,unstable_isNewReconciler:!1};function Hi(t,i){if(t&&t.defaultProps){i=me({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function pc(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:me({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var hl={isMounted:function(t){return(t=t._reactInternals)?Gn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=Yn(),f=Yr(t),p=xr(u,f);p.payload=i,o!=null&&(p.callback=o),i=Wr(t,p,f),i!==null&&(Xi(i,t,f,u),sl(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=Yn(),f=Yr(t),p=xr(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Wr(t,p,f),i!==null&&(Xi(i,t,f,u),sl(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Yn(),u=Yr(t),f=xr(o,u);f.tag=2,i!=null&&(f.callback=i),i=Wr(t,f,u),i!==null&&(Xi(i,t,u,o),sl(i,t,u))}};function tp(t,i,o,u,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,S):i.prototype&&i.prototype.isPureReactComponent?!Qo(o,u)||!Qo(f,p):!0}function np(t,i,o){var u=!1,f=Vr,p=i.contextType;return typeof p=="object"&&p!==null?p=Ri(p):(f=ii(i)?ms:Nn.current,u=i.contextTypes,p=(u=u!=null)?Qs(t,f):Vr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hl,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function ip(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&hl.enqueueReplaceState(i,i.state,null)}function mc(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},tc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Ri(p):(p=ii(i)?ms:Nn.current,f.context=Qs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(pc(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&hl.enqueueReplaceState(f,f.state,null),ol(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,i){try{var o="",u=i;do o+=xe(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function gc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function rp(t,i,o){o=xr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){yl||(yl=!0,Dc=u),vc(t,i)},o}function sp(t,i,o){o=xr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){vc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){vc(t,i),typeof u!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function op(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new ev;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=pv.bind(null,t,i,o),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function lp(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=xr(-1,1),i.tag=2,Wr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var tv=R.ReactCurrentOwner,ri=!1;function qn(t,i,o,u){i.child=t===null?Rh(i,null,o,u):no(i,t.child,o,u)}function up(t,i,o,u,f){o=o.render;var p=i.ref;return ro(i,f),u=lc(t,i,o,u,p,f),o=uc(),t!==null&&!ri?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,yr(t,i,f)):(Kt&&o&&Xu(i),i.flags|=1,qn(t,i,u,f),i.child)}function cp(t,i,o,u,f){if(t===null){var p=o.type;return typeof p=="function"&&!zc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,fp(t,i,p,u,f)):(t=Al(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var S=p.memoizedProps;if(o=o.compare,o=o!==null?o:Qo,o(S,u)&&t.ref===i.ref)return yr(t,i,f)}return i.flags|=1,t=Kr(p,u),t.ref=i.ref,t.return=i,i.child=t}function fp(t,i,o,u,f){if(t!==null){var p=t.memoizedProps;if(Qo(p,u)&&t.ref===i.ref)if(ri=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(ri=!0);else return i.lanes=t.lanes,yr(t,i,f)}return _c(t,i,o,u,f)}function dp(t,i,o){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(lo,_i),_i|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Wt(lo,_i),_i|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Wt(lo,_i),_i|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Wt(lo,_i),_i|=u;return qn(t,i,f,o),i.child}function hp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function _c(t,i,o,u,f){var p=ii(o)?ms:Nn.current;return p=Qs(i,p),ro(i,f),o=lc(t,i,o,u,p,f),u=uc(),t!==null&&!ri?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,yr(t,i,f)):(Kt&&u&&Xu(i),i.flags|=1,qn(t,i,o,f),i.child)}function pp(t,i,o,u,f){if(ii(o)){var p=!0;Za(i)}else p=!1;if(ro(i,f),i.stateNode===null)ml(t,i),np(i,o,u),mc(i,o,u,f),u=!0;else if(t===null){var S=i.stateNode,N=i.memoizedProps;S.props=N;var V=S.context,ce=o.contextType;typeof ce=="object"&&ce!==null?ce=Ri(ce):(ce=ii(o)?ms:Nn.current,ce=Qs(i,ce));var Re=o.getDerivedStateFromProps,Le=typeof Re=="function"||typeof S.getSnapshotBeforeUpdate=="function";Le||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==u||V!==ce)&&ip(i,S,u,ce),Gr=!1;var Te=i.memoizedState;S.state=Te,ol(i,u,S,f),V=i.memoizedState,N!==u||Te!==V||ni.current||Gr?(typeof Re=="function"&&(pc(i,o,Re,u),V=i.memoizedState),(N=Gr||tp(i,o,N,u,Te,V,ce))?(Le||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),S.props=u,S.state=V,S.context=ce,u=N):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{S=i.stateNode,Ph(t,i),N=i.memoizedProps,ce=i.type===i.elementType?N:Hi(i.type,N),S.props=ce,Le=i.pendingProps,Te=S.context,V=o.contextType,typeof V=="object"&&V!==null?V=Ri(V):(V=ii(o)?ms:Nn.current,V=Qs(i,V));var Ge=o.getDerivedStateFromProps;(Re=typeof Ge=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==Le||Te!==V)&&ip(i,S,u,V),Gr=!1,Te=i.memoizedState,S.state=Te,ol(i,u,S,f);var $e=i.memoizedState;N!==Le||Te!==$e||ni.current||Gr?(typeof Ge=="function"&&(pc(i,o,Ge,u),$e=i.memoizedState),(ce=Gr||tp(i,o,ce,u,Te,$e,V)||!1)?(Re||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(u,$e,V),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(u,$e,V)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$e),S.props=u,S.state=$e,S.context=V,u=ce):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),u=!1)}return xc(t,i,o,u,p,f)}function xc(t,i,o,u,f,p){hp(t,i);var S=(i.flags&128)!==0;if(!u&&!S)return f&&xh(i,o,!1),yr(t,i,p);u=i.stateNode,tv.current=i;var N=S&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&S?(i.child=no(i,t.child,null,p),i.child=no(i,null,N,p)):qn(t,i,N,p),i.memoizedState=u.state,f&&xh(i,o,!0),i.child}function mp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),nc(t,i.containerInfo)}function gp(t,i,o,u,f){return to(),$u(f),i.flags|=256,qn(t,i,o,u),i.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var u=i.pendingProps,f=Zt.current,p=!1,S=(i.flags&128)!==0,N;if((N=S)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Wt(Zt,f&1),t===null)return Yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=u.children,t=u.fallback,p?(u=i.mode,p=i.child,S={mode:"hidden",children:S},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=S):p=Cl(S,u,0,null),t=Ts(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Mc(o),i.memoizedState=yc,t):Sc(i,S));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return nv(t,i,S,u,N,f,o);if(p){p=u.fallback,S=i.mode,f=t.child,N=f.sibling;var V={mode:"hidden",children:u.children};return(S&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=Kr(f,V),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=Kr(N,p):(p=Ts(p,S,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,S=t.child.memoizedState,S=S===null?Mc(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},p.memoizedState=S,p.childLanes=t.childLanes&~o,i.memoizedState=yc,u}return p=t.child,t=p.sibling,u=Kr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function Sc(t,i){return i=Cl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function pl(t,i,o,u){return u!==null&&$u(u),no(i,t.child,null,o),t=Sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function nv(t,i,o,u,f,p,S){if(o)return i.flags&256?(i.flags&=-257,u=gc(Error(n(422))),pl(t,i,S,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=Cl({mode:"visible",children:u.children},f,0,null),p=Ts(p,f,S,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&no(i,t.child,null,S),i.child.memoizedState=Mc(S),i.memoizedState=yc,p);if((i.mode&1)===0)return pl(t,i,S,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,p=Error(n(419)),u=gc(p,u,void 0),pl(t,i,S,u)}if(N=(S&t.childLanes)!==0,ri||N){if(u=yn,u!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|S))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,_r(t,f),Xi(u,t,f,-1))}return kc(),u=gc(Error(n(421))),pl(t,i,S,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=mv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,vi=zr(f.nextSibling),gi=i,Kt=!0,Vi=null,t!==null&&(Ai[Ci++]=gr,Ai[Ci++]=vr,Ai[Ci++]=gs,gr=t.id,vr=t.overflow,gs=i),i=Sc(i,u.children),i.flags|=4096,i)}function _p(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Ju(t.return,i,o)}function Ec(t,i,o,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function xp(t,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(qn(t,i,u.children,o),u=Zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,o,i);else if(t.tag===19)_p(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Wt(Zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&al(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ec(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&al(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Ec(i,!0,o,null,p);break;case"together":Ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ml(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function yr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ms|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Kr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Kr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function iv(t,i,o){switch(i.tag){case 3:mp(i),to();break;case 5:Ih(i);break;case 1:ii(i.type)&&Za(i);break;case 4:nc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Wt(il,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Wt(Zt,Zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(t,i,o):(Wt(Zt,Zt.current&1),t=yr(t,i,o),t!==null?t.sibling:null);Wt(Zt,Zt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return xp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Wt(Zt,Zt.current),u)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,o)}return yr(t,i,o)}var yp,wc,Mp,Sp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wc=function(){},Mp=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,xs(rr.current);var p=null;switch(o){case"input":f=K(t,f),u=K(t,u),p=[];break;case"select":f=me({},f,{value:void 0}),u=me({},u,{value:void 0}),p=[];break;case"textarea":f=w(t,f),u=w(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ya)}ze(o,u);var S;o=null;for(ce in f)if(!u.hasOwnProperty(ce)&&f.hasOwnProperty(ce)&&f[ce]!=null)if(ce==="style"){var N=f[ce];for(S in N)N.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?p||(p=[]):(p=p||[]).push(ce,null));for(ce in u){var V=u[ce];if(N=f!=null?f[ce]:void 0,u.hasOwnProperty(ce)&&V!==N&&(V!=null||N!=null))if(ce==="style")if(N){for(S in N)!N.hasOwnProperty(S)||V&&V.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in V)V.hasOwnProperty(S)&&N[S]!==V[S]&&(o||(o={}),o[S]=V[S])}else o||(p||(p=[]),p.push(ce,o)),o=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,N=N?N.__html:void 0,V!=null&&N!==V&&(p=p||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(p=p||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&qt("scroll",t),p||N===V||(p=[])):(p=p||[]).push(ce,V))}o&&(p=p||[]).push("style",o);var ce=p;(i.updateQueue=ce)&&(i.flags|=4)}},Sp=function(t,i,o,u){o!==u&&(i.flags|=4)};function ha(t,i){if(!Kt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function On(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function rv(t,i,o){var u=i.pendingProps;switch(ju(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(i),null;case 1:return ii(i.type)&&Ka(),On(i),null;case 3:return u=i.stateNode,so(),Yt(ni),Yt(Nn),sc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(tl(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vi!==null&&(Nc(Vi),Vi=null))),wc(t,i),On(i),null;case 5:ic(i);var f=xs(la.current);if(o=i.type,t!==null&&i.stateNode!=null)Mp(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return On(i),null}if(t=xs(rr.current),tl(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[ir]=i,u[ia]=p,t=(i.mode&1)!==0,o){case"dialog":qt("cancel",u),qt("close",u);break;case"iframe":case"object":case"embed":qt("load",u);break;case"video":case"audio":for(f=0;f<ea.length;f++)qt(ea[f],u);break;case"source":qt("error",u);break;case"img":case"image":case"link":qt("error",u),qt("load",u);break;case"details":qt("toggle",u);break;case"input":Tn(u,p),qt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},qt("invalid",u);break;case"textarea":re(u,p),qt("invalid",u)}ze(o,p),f=null;for(var S in p)if(p.hasOwnProperty(S)){var N=p[S];S==="children"?typeof N=="string"?u.textContent!==N&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,N,t),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(S)&&N!=null&&S==="onScroll"&&qt("scroll",u)}switch(o){case"input":Nt(u),at(u,p,!0);break;case"textarea":Nt(u),Ee(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ya)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=S.createElement(o,{is:u.is}):(t=S.createElement(o),o==="select"&&(S=t,u.multiple?S.multiple=!0:u.size&&(S.size=u.size))):t=S.createElementNS(t,o),t[ir]=i,t[ia]=u,yp(t,i,!1,!1),i.stateNode=t;e:{switch(S=Ae(o,u),o){case"dialog":qt("cancel",t),qt("close",t),f=u;break;case"iframe":case"object":case"embed":qt("load",t),f=u;break;case"video":case"audio":for(f=0;f<ea.length;f++)qt(ea[f],t);f=u;break;case"source":qt("error",t),f=u;break;case"img":case"image":case"link":qt("error",t),qt("load",t),f=u;break;case"details":qt("toggle",t),f=u;break;case"input":Tn(t,u),f=K(t,u),qt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=me({},u,{value:void 0}),qt("invalid",t);break;case"textarea":re(t,u),f=w(t,u),qt("invalid",t);break;default:f=u}ze(o,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var V=N[p];p==="style"?Me(t,V):p==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&b(t,V)):p==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&q(t,V):typeof V=="number"&&q(t,""+V):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?V!=null&&p==="onScroll"&&qt("scroll",t):V!=null&&D(t,p,V,S))}switch(o){case"input":Nt(t),at(t,u,!1);break;case"textarea":Nt(t),Ee(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Be(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?U(t,!!u.multiple,p,!1):u.defaultValue!=null&&U(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return On(i),null;case 6:if(t&&i.stateNode!=null)Sp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=xs(la.current),xs(rr.current),tl(i)){if(u=i.stateNode,o=i.memoizedProps,u[ir]=i,(p=u.nodeValue!==o)&&(t=gi,t!==null))switch(t.tag){case 3:qa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[ir]=i,i.stateNode=u}return On(i),null;case 13:if(Yt(Zt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Kt&&vi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),to(),i.flags|=98560,p=!1;else if(p=tl(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ir]=i}else to(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;On(i),p=!1}else Vi!==null&&(Nc(Vi),Vi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Zt.current&1)!==0?mn===0&&(mn=3):kc())),i.updateQueue!==null&&(i.flags|=4),On(i),null);case 4:return so(),wc(t,i),t===null&&ta(i.stateNode.containerInfo),On(i),null;case 10:return Qu(i.type._context),On(i),null;case 17:return ii(i.type)&&Ka(),On(i),null;case 19:if(Yt(Zt),p=i.memoizedState,p===null)return On(i),null;if(u=(i.flags&128)!==0,S=p.rendering,S===null)if(u)ha(p,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=al(t),S!==null){for(i.flags|=128,ha(p,!1),u=S.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,S=p.alternate,S===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=S.childLanes,p.lanes=S.lanes,p.child=S.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=S.memoizedProps,p.memoizedState=S.memoizedState,p.updateQueue=S.updateQueue,p.type=S.type,t=S.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Wt(Zt,Zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Pe()>uo&&(i.flags|=128,u=!0,ha(p,!1),i.lanes=4194304)}else{if(!u)if(t=al(S),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ha(p,!0),p.tail===null&&p.tailMode==="hidden"&&!S.alternate&&!Kt)return On(i),null}else 2*Pe()-p.renderingStartTime>uo&&o!==1073741824&&(i.flags|=128,u=!0,ha(p,!1),i.lanes=4194304);p.isBackwards?(S.sibling=i.child,i.child=S):(o=p.last,o!==null?o.sibling=S:i.child=S,p.last=S)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Pe(),i.sibling=null,o=Zt.current,Wt(Zt,u?o&1|2:o&1),i):(On(i),null);case 22:case 23:return Oc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(_i&1073741824)!==0&&(On(i),i.subtreeFlags&6&&(i.flags|=8192)):On(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function sv(t,i){switch(ju(i),i.tag){case 1:return ii(i.type)&&Ka(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return so(),Yt(ni),Yt(Nn),sc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return ic(i),null;case 13:if(Yt(Zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));to()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Yt(Zt),null;case 4:return so(),null;case 10:return Qu(i.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var gl=!1,kn=!1,ov=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ao(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){nn(t,i,u)}else o.current=null}function Tc(t,i,o){try{o()}catch(u){nn(t,i,u)}}var Ep=!1;function av(t,i){if(Ou=Oi,t=th(),bu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var S=0,N=-1,V=-1,ce=0,Re=0,Le=t,Te=null;t:for(;;){for(var Ge;Le!==o||f!==0&&Le.nodeType!==3||(N=S+f),Le!==p||u!==0&&Le.nodeType!==3||(V=S+u),Le.nodeType===3&&(S+=Le.nodeValue.length),(Ge=Le.firstChild)!==null;)Te=Le,Le=Ge;for(;;){if(Le===t)break t;if(Te===o&&++ce===f&&(N=S),Te===p&&++Re===u&&(V=S),(Ge=Le.nextSibling)!==null)break;Le=Te,Te=Le.parentNode}Le=Ge}o=N===-1||V===-1?null:{start:N,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(ku={focusedElem:t,selectionRange:o},Oi=!1,Ye=i;Ye!==null;)if(i=Ye,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ye=t;else for(;Ye!==null;){i=Ye;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var et=$e.memoizedProps,rn=$e.memoizedState,Q=i.stateNode,W=Q.getSnapshotBeforeUpdate(i.elementType===i.type?et:Hi(i.type,et),rn);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ne){nn(i,i.return,Ne)}if(t=i.sibling,t!==null){t.return=i.return,Ye=t;break}Ye=i.return}return $e=Ep,Ep=!1,$e}function pa(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Tc(i,o,p)}f=f.next}while(f!==u)}}function vl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ac(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ir],delete i[ia],delete i[Hu],delete i[G0],delete i[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ya));else if(u!==4&&(t=t.child,t!==null))for(Cc(t,i,o),t=t.sibling;t!==null;)Cc(t,i,o),t=t.sibling}function Rc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Rc(t,i,o),t=t.sibling;t!==null;)Rc(t,i,o),t=t.sibling}var Pn=null,Gi=!1;function Xr(t,i,o){for(o=o.child;o!==null;)Cp(t,i,o),o=o.sibling}function Cp(t,i,o){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:kn||ao(o,i);case 6:var u=Pn,f=Gi;Pn=null,Xr(t,i,o),Pn=u,Gi=f,Pn!==null&&(Gi?(t=Pn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Pn.removeChild(o.stateNode));break;case 18:Pn!==null&&(Gi?(t=Pn,o=o.stateNode,t.nodeType===8?Vu(t.parentNode,o):t.nodeType===1&&Vu(t,o),tr(t)):Vu(Pn,o.stateNode));break;case 4:u=Pn,f=Gi,Pn=o.stateNode.containerInfo,Gi=!0,Xr(t,i,o),Pn=u,Gi=f;break;case 0:case 11:case 14:case 15:if(!kn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,S=p.destroy;p=p.tag,S!==void 0&&((p&2)!==0||(p&4)!==0)&&Tc(o,i,S),f=f.next}while(f!==u)}Xr(t,i,o);break;case 1:if(!kn&&(ao(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){nn(o,i,N)}Xr(t,i,o);break;case 21:Xr(t,i,o);break;case 22:o.mode&1?(kn=(u=kn)||o.memoizedState!==null,Xr(t,i,o),kn=u):Xr(t,i,o);break;default:Xr(t,i,o)}}function Rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ov),i.forEach(function(u){var f=gv.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function Wi(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=t,S=i,N=S;e:for(;N!==null;){switch(N.tag){case 5:Pn=N.stateNode,Gi=!1;break e;case 3:Pn=N.stateNode.containerInfo,Gi=!0;break e;case 4:Pn=N.stateNode.containerInfo,Gi=!0;break e}N=N.return}if(Pn===null)throw Error(n(160));Cp(p,S,f),Pn=null,Gi=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(ce){nn(f,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bp(i,t),i=i.sibling}function bp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wi(i,t),or(t),u&4){try{pa(3,t,t.return),vl(3,t)}catch(et){nn(t,t.return,et)}try{pa(5,t,t.return)}catch(et){nn(t,t.return,et)}}break;case 1:Wi(i,t),or(t),u&512&&o!==null&&ao(o,o.return);break;case 5:if(Wi(i,t),or(t),u&512&&o!==null&&ao(o,o.return),t.flags&32){var f=t.stateNode;try{q(f,"")}catch(et){nn(t,t.return,et)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,S=o!==null?o.memoizedProps:p,N=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&Tt(f,p),Ae(N,S);var ce=Ae(N,p);for(S=0;S<V.length;S+=2){var Re=V[S],Le=V[S+1];Re==="style"?Me(f,Le):Re==="dangerouslySetInnerHTML"?b(f,Le):Re==="children"?q(f,Le):D(f,Re,Le,ce)}switch(N){case"input":_t(f,p);break;case"textarea":Se(f,p);break;case"select":var Te=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ge=p.value;Ge!=null?U(f,!!p.multiple,Ge,!1):Te!==!!p.multiple&&(p.defaultValue!=null?U(f,!!p.multiple,p.defaultValue,!0):U(f,!!p.multiple,p.multiple?[]:"",!1))}f[ia]=p}catch(et){nn(t,t.return,et)}}break;case 6:if(Wi(i,t),or(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(et){nn(t,t.return,et)}}break;case 3:if(Wi(i,t),or(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{tr(i.containerInfo)}catch(et){nn(t,t.return,et)}break;case 4:Wi(i,t),or(t);break;case 13:Wi(i,t),or(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Lc=Pe())),u&4&&Rp(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(kn=(ce=kn)||Re,Wi(i,t),kn=ce):Wi(i,t),or(t),u&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!Re&&(t.mode&1)!==0)for(Ye=t,Re=t.child;Re!==null;){for(Le=Ye=Re;Ye!==null;){switch(Te=Ye,Ge=Te.child,Te.tag){case 0:case 11:case 14:case 15:pa(4,Te,Te.return);break;case 1:ao(Te,Te.return);var $e=Te.stateNode;if(typeof $e.componentWillUnmount=="function"){u=Te,o=Te.return;try{i=u,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(et){nn(u,o,et)}}break;case 5:ao(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Dp(Le);continue}}Ge!==null?(Ge.return=Te,Ye=Ge):Dp(Le)}Re=Re.sibling}e:for(Re=null,Le=t;;){if(Le.tag===5){if(Re===null){Re=Le;try{f=Le.stateNode,ce?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Le.stateNode,V=Le.memoizedProps.style,S=V!=null&&V.hasOwnProperty("display")?V.display:null,N.style.display=J("display",S))}catch(et){nn(t,t.return,et)}}}else if(Le.tag===6){if(Re===null)try{Le.stateNode.nodeValue=ce?"":Le.memoizedProps}catch(et){nn(t,t.return,et)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===t)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===t)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===t)break e;Re===Le&&(Re=null),Le=Le.return}Re===Le&&(Re=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Wi(i,t),or(t),u&4&&Rp(t);break;case 21:break;default:Wi(i,t),or(t)}}function or(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(q(f,""),u.flags&=-33);var p=Ap(t);Rc(t,p,f);break;case 3:case 4:var S=u.stateNode.containerInfo,N=Ap(t);Cc(t,N,S);break;default:throw Error(n(161))}}catch(V){nn(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function lv(t,i,o){Ye=t,Pp(t)}function Pp(t,i,o){for(var u=(t.mode&1)!==0;Ye!==null;){var f=Ye,p=f.child;if(f.tag===22&&u){var S=f.memoizedState!==null||gl;if(!S){var N=f.alternate,V=N!==null&&N.memoizedState!==null||kn;N=gl;var ce=kn;if(gl=S,(kn=V)&&!ce)for(Ye=f;Ye!==null;)S=Ye,V=S.child,S.tag===22&&S.memoizedState!==null?Ip(f):V!==null?(V.return=S,Ye=V):Ip(f);for(;p!==null;)Ye=p,Pp(p),p=p.sibling;Ye=f,gl=N,kn=ce}Lp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Ye=p):Lp(t)}}function Lp(t){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:kn||vl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!kn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Hi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Dh(i,p,u);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dh(i,S,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Re=ce.memoizedState;if(Re!==null){var Le=Re.dehydrated;Le!==null&&tr(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}kn||i.flags&512&&Ac(i)}catch(Te){nn(i,i.return,Te)}}if(i===t){Ye=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function Dp(t){for(;Ye!==null;){var i=Ye;if(i===t){Ye=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function Ip(t){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{vl(4,i)}catch(V){nn(i,o,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(V){nn(i,f,V)}}var p=i.return;try{Ac(i)}catch(V){nn(i,p,V)}break;case 5:var S=i.return;try{Ac(i)}catch(V){nn(i,S,V)}}}catch(V){nn(i,i.return,V)}if(i===t){Ye=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ye=N;break}Ye=i.return}}var uv=Math.ceil,_l=R.ReactCurrentDispatcher,bc=R.ReactCurrentOwner,Pi=R.ReactCurrentBatchConfig,Lt=0,yn=null,ln=null,Ln=0,_i=0,lo=Br(0),mn=0,ma=null,Ms=0,xl=0,Pc=0,ga=null,si=null,Lc=0,uo=1/0,Mr=null,yl=!1,Dc=null,jr=null,Ml=!1,qr=null,Sl=0,va=0,Ic=null,El=-1,wl=0;function Yn(){return(Lt&6)!==0?Pe():El!==-1?El:El=Pe()}function Yr(t){return(t.mode&1)===0?1:(Lt&2)!==0&&Ln!==0?Ln&-Ln:j0.transition!==null?(wl===0&&(wl=_n()),wl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:qo(t.type)),t)}function Xi(t,i,o,u){if(50<va)throw va=0,Ic=null,Error(n(185));en(t,o,u),((Lt&2)===0||t!==yn)&&(t===yn&&((Lt&2)===0&&(xl|=o),mn===4&&$r(t,Ln)),oi(t,u),o===1&&Lt===0&&(i.mode&1)===0&&(uo=Pe()+500,Qa&&Hr()))}function oi(t,i){var o=t.callbackNode;bn(t,i);var u=hi(t,t===yn?Ln:0);if(u===0)o!==null&&ue(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&ue(o),i===1)t.tag===0?X0(Np.bind(null,t)):yh(Np.bind(null,t)),V0(function(){(Lt&6)===0&&Hr()}),o=null;else{switch(pi(u)){case 1:o=qe;break;case 4:o=ut;break;case 16:o=ct;break;case 536870912:o=Mt;break;default:o=ct}o=Gp(o,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Up(t,i){if(El=-1,wl=0,(Lt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(co()&&t.callbackNode!==o)return null;var u=hi(t,t===yn?Ln:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Tl(t,u);else{i=u;var f=Lt;Lt|=2;var p=Op();(yn!==t||Ln!==i)&&(Mr=null,uo=Pe()+500,Es(t,i));do try{dv();break}catch(N){Fp(t,N)}while(!0);Zu(),_l.current=p,Lt=f,ln!==null?i=0:(yn=null,Ln=0,i=mn)}if(i!==0){if(i===2&&(f=ei(t),f!==0&&(u=f,i=Uc(t,f))),i===1)throw o=ma,Es(t,0),$r(t,u),oi(t,Pe()),o;if(i===6)$r(t,u);else{if(f=t.current.alternate,(u&30)===0&&!cv(f)&&(i=Tl(t,u),i===2&&(p=ei(t),p!==0&&(u=p,i=Uc(t,p))),i===1))throw o=ma,Es(t,0),$r(t,u),oi(t,Pe()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:ws(t,si,Mr);break;case 3:if($r(t,u),(u&130023424)===u&&(i=Lc+500-Pe(),10<i)){if(hi(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Yn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Bu(ws.bind(null,t,si,Mr),i);break}ws(t,si,Mr);break;case 4:if($r(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var S=31-vt(u);p=1<<S,S=i[S],S>f&&(f=S),u&=~p}if(u=f,u=Pe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*uv(u/1960))-u,10<u){t.timeoutHandle=Bu(ws.bind(null,t,si,Mr),u);break}ws(t,si,Mr);break;case 5:ws(t,si,Mr);break;default:throw Error(n(329))}}}return oi(t,Pe()),t.callbackNode===o?Up.bind(null,t):null}function Uc(t,i){var o=ga;return t.current.memoizedState.isDehydrated&&(Es(t,i).flags|=256),t=Tl(t,i),t!==2&&(i=si,si=o,i!==null&&Nc(i)),t}function Nc(t){si===null?si=t:si.push.apply(si,t)}function cv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!Bi(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $r(t,i){for(i&=~Pc,i&=~xl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-vt(i),u=1<<o;t[o]=-1,i&=~u}}function Np(t){if((Lt&6)!==0)throw Error(n(327));co();var i=hi(t,0);if((i&1)===0)return oi(t,Pe()),null;var o=Tl(t,i);if(t.tag!==0&&o===2){var u=ei(t);u!==0&&(i=u,o=Uc(t,u))}if(o===1)throw o=ma,Es(t,0),$r(t,i),oi(t,Pe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,ws(t,si,Mr),oi(t,Pe()),null}function Fc(t,i){var o=Lt;Lt|=1;try{return t(i)}finally{Lt=o,Lt===0&&(uo=Pe()+500,Qa&&Hr())}}function Ss(t){qr!==null&&qr.tag===0&&(Lt&6)===0&&co();var i=Lt;Lt|=1;var o=Pi.transition,u=ht;try{if(Pi.transition=null,ht=1,t)return t()}finally{ht=u,Pi.transition=o,Lt=i,(Lt&6)===0&&Hr()}}function Oc(){_i=lo.current,Yt(lo)}function Es(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,B0(o)),ln!==null)for(o=ln.return;o!==null;){var u=o;switch(ju(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ka();break;case 3:so(),Yt(ni),Yt(Nn),sc();break;case 5:ic(u);break;case 4:so();break;case 13:Yt(Zt);break;case 19:Yt(Zt);break;case 10:Qu(u.type._context);break;case 22:case 23:Oc()}o=o.return}if(yn=t,ln=t=Kr(t.current,null),Ln=_i=i,mn=0,ma=null,Pc=xl=Ms=0,si=ga=null,_s!==null){for(i=0;i<_s.length;i++)if(o=_s[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var S=p.next;p.next=f,u.next=S}o.pending=u}_s=null}return t}function Fp(t,i){do{var o=ln;try{if(Zu(),ll.current=dl,ul){for(var u=Qt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}ul=!1}if(ys=0,xn=pn=Qt=null,ua=!1,ca=0,bc.current=null,o===null||o.return===null){mn=1,ma=i,ln=null;break}e:{var p=t,S=o.return,N=o,V=i;if(i=Ln,N.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,Re=N,Le=Re.tag;if((Re.mode&1)===0&&(Le===0||Le===11||Le===15)){var Te=Re.alternate;Te?(Re.updateQueue=Te.updateQueue,Re.memoizedState=Te.memoizedState,Re.lanes=Te.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Ge=ap(S);if(Ge!==null){Ge.flags&=-257,lp(Ge,S,N,p,i),Ge.mode&1&&op(p,ce,i),i=Ge,V=ce;var $e=i.updateQueue;if($e===null){var et=new Set;et.add(V),i.updateQueue=et}else $e.add(V);break e}else{if((i&1)===0){op(p,ce,i),kc();break e}V=Error(n(426))}}else if(Kt&&N.mode&1){var rn=ap(S);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),lp(rn,S,N,p,i),$u(oo(V,N));break e}}p=V=oo(V,N),mn!==4&&(mn=2),ga===null?ga=[p]:ga.push(p),p=S;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Q=rp(p,V,i);Lh(p,Q);break e;case 1:N=V;var W=p.type,ne=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(jr===null||!jr.has(ne)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ne=sp(p,N,i);Lh(p,Ne);break e}}p=p.return}while(p!==null)}zp(o)}catch(nt){i=nt,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function Op(){var t=_l.current;return _l.current=dl,t===null?dl:t}function kc(){(mn===0||mn===3||mn===2)&&(mn=4),yn===null||(Ms&268435455)===0&&(xl&268435455)===0||$r(yn,Ln)}function Tl(t,i){var o=Lt;Lt|=2;var u=Op();(yn!==t||Ln!==i)&&(Mr=null,Es(t,i));do try{fv();break}catch(f){Fp(t,f)}while(!0);if(Zu(),Lt=o,_l.current=u,ln!==null)throw Error(n(261));return yn=null,Ln=0,mn}function fv(){for(;ln!==null;)kp(ln)}function dv(){for(;ln!==null&&!Y();)kp(ln)}function kp(t){var i=Hp(t.alternate,t,_i);t.memoizedProps=t.pendingProps,i===null?zp(t):ln=i,bc.current=null}function zp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=rv(o,i,_i),o!==null){ln=o;return}}else{if(o=sv(o,i),o!==null){o.flags&=32767,ln=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=t}while(i!==null);mn===0&&(mn=5)}function ws(t,i,o){var u=ht,f=Pi.transition;try{Pi.transition=null,ht=1,hv(t,i,o,u)}finally{Pi.transition=f,ht=u}return null}function hv(t,i,o,u){do co();while(qr!==null);if((Lt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(us(t,p),t===yn&&(ln=yn=null,Ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ml||(Ml=!0,Gp(ct,function(){return co(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Pi.transition,Pi.transition=null;var S=ht;ht=1;var N=Lt;Lt|=4,bc.current=null,av(t,o),bp(o,t),I0(ku),Oi=!!Ou,ku=Ou=null,t.current=o,lv(o),Ue(),Lt=N,ht=S,Pi.transition=p}else t.current=o;if(Ml&&(Ml=!1,qr=t,Sl=f),p=t.pendingLanes,p===0&&(jr=null),dn(o.stateNode),oi(t,Pe()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(yl)throw yl=!1,t=Dc,Dc=null,t;return(Sl&1)!==0&&t.tag!==0&&co(),p=t.pendingLanes,(p&1)!==0?t===Ic?va++:(va=0,Ic=t):va=0,Hr(),null}function co(){if(qr!==null){var t=pi(Sl),i=Pi.transition,o=ht;try{if(Pi.transition=null,ht=16>t?16:t,qr===null)var u=!1;else{if(t=qr,qr=null,Sl=0,(Lt&6)!==0)throw Error(n(331));var f=Lt;for(Lt|=4,Ye=t.current;Ye!==null;){var p=Ye,S=p.child;if((Ye.flags&16)!==0){var N=p.deletions;if(N!==null){for(var V=0;V<N.length;V++){var ce=N[V];for(Ye=ce;Ye!==null;){var Re=Ye;switch(Re.tag){case 0:case 11:case 15:pa(8,Re,p)}var Le=Re.child;if(Le!==null)Le.return=Re,Ye=Le;else for(;Ye!==null;){Re=Ye;var Te=Re.sibling,Ge=Re.return;if(wp(Re),Re===ce){Ye=null;break}if(Te!==null){Te.return=Ge,Ye=Te;break}Ye=Ge}}}var $e=p.alternate;if($e!==null){var et=$e.child;if(et!==null){$e.child=null;do{var rn=et.sibling;et.sibling=null,et=rn}while(et!==null)}}Ye=p}}if((p.subtreeFlags&2064)!==0&&S!==null)S.return=p,Ye=S;else e:for(;Ye!==null;){if(p=Ye,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:pa(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,Ye=Q;break e}Ye=p.return}}var W=t.current;for(Ye=W;Ye!==null;){S=Ye;var ne=S.child;if((S.subtreeFlags&2064)!==0&&ne!==null)ne.return=S,Ye=ne;else e:for(S=W;Ye!==null;){if(N=Ye,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:vl(9,N)}}catch(nt){nn(N,N.return,nt)}if(N===S){Ye=null;break e}var Ne=N.sibling;if(Ne!==null){Ne.return=N.return,Ye=Ne;break e}Ye=N.return}}if(Lt=f,Hr(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(bt,t)}catch{}u=!0}return u}finally{ht=o,Pi.transition=i}}return!1}function Bp(t,i,o){i=oo(o,i),i=rp(t,i,1),t=Wr(t,i,1),i=Yn(),t!==null&&(en(t,1,i),oi(t,i))}function nn(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(jr===null||!jr.has(u))){t=oo(o,t),t=sp(i,t,1),i=Wr(i,t,1),t=Yn(),i!==null&&(en(i,1,t),oi(i,t));break}}i=i.return}}function pv(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=Yn(),t.pingedLanes|=t.suspendedLanes&o,yn===t&&(Ln&o)===o&&(mn===4||mn===3&&(Ln&130023424)===Ln&&500>Pe()-Lc?Es(t,0):Pc|=o),oi(t,i)}function Vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jn,Jn<<=1,(Jn&130023424)===0&&(Jn=4194304)));var o=Yn();t=_r(t,i),t!==null&&(en(t,i,o),oi(t,o))}function mv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(t,o)}function gv(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Vp(t,o)}var Hp;Hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ri=!1,iv(t,i,o);ri=(t.flags&131072)!==0}else ri=!1,Kt&&(i.flags&1048576)!==0&&Mh(i,el,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ml(t,i),t=i.pendingProps;var f=Qs(i,Nn.current);ro(i,o),f=lc(null,i,u,t,f,o);var p=uc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(u)?(p=!0,Za(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,tc(i),f.updater=hl,i.stateNode=f,f._reactInternals=i,mc(i,u,t,o),i=xc(null,i,u,!0,p,o)):(i.tag=0,Kt&&p&&Xu(i),qn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ml(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=_v(u),t=Hi(u,t),f){case 0:i=_c(null,i,u,t,o);break e;case 1:i=pp(null,i,u,t,o);break e;case 11:i=up(null,i,u,t,o);break e;case 14:i=cp(null,i,u,Hi(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),_c(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),pp(t,i,u,f,o);case 3:e:{if(mp(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Ph(t,i),ol(i,u,null,o);var S=i.memoizedState;if(u=S.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=oo(Error(n(423)),i),i=gp(t,i,u,o,f);break e}else if(u!==f){f=oo(Error(n(424)),i),i=gp(t,i,u,o,f);break e}else for(vi=zr(i.stateNode.containerInfo.firstChild),gi=i,Kt=!0,Vi=null,o=Rh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(to(),u===f){i=yr(t,i,o);break e}qn(t,i,u,o)}i=i.child}return i;case 5:return Ih(i),t===null&&Yu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,S=f.children,zu(u,f)?S=null:p!==null&&zu(u,p)&&(i.flags|=32),hp(t,i),qn(t,i,S,o),i.child;case 6:return t===null&&Yu(i),null;case 13:return vp(t,i,o);case 4:return nc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=no(i,null,u,o):qn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),up(t,i,u,f,o);case 7:return qn(t,i,i.pendingProps,o),i.child;case 8:return qn(t,i,i.pendingProps.children,o),i.child;case 12:return qn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,S=f.value,Wt(il,u._currentValue),u._currentValue=S,p!==null)if(Bi(p.value,S)){if(p.children===f.children&&!ni.current){i=yr(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){S=p.child;for(var V=N.firstContext;V!==null;){if(V.context===u){if(p.tag===1){V=xr(-1,o&-o),V.tag=2;var ce=p.updateQueue;if(ce!==null){ce=ce.shared;var Re=ce.pending;Re===null?V.next=V:(V.next=Re.next,Re.next=V),ce.pending=V}}p.lanes|=o,V=p.alternate,V!==null&&(V.lanes|=o),Ju(p.return,o,i),N.lanes|=o;break}V=V.next}}else if(p.tag===10)S=p.type===i.type?null:p.child;else if(p.tag===18){if(S=p.return,S===null)throw Error(n(341));S.lanes|=o,N=S.alternate,N!==null&&(N.lanes|=o),Ju(S,o,i),S=p.sibling}else S=p.child;if(S!==null)S.return=p;else for(S=p;S!==null;){if(S===i){S=null;break}if(p=S.sibling,p!==null){p.return=S.return,S=p;break}S=S.return}p=S}qn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,ro(i,o),f=Ri(f),u=u(f),i.flags|=1,qn(t,i,u,o),i.child;case 14:return u=i.type,f=Hi(u,i.pendingProps),f=Hi(u.type,f),cp(t,i,u,f,o);case 15:return fp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),ml(t,i),i.tag=1,ii(u)?(t=!0,Za(i)):t=!1,ro(i,o),np(i,u,f),mc(i,u,f,o),xc(null,i,u,!0,t,o);case 19:return xp(t,i,o);case 22:return dp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return ae(t,i)}function vv(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(t,i,o,u){return new vv(t,i,o,u)}function zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _v(t){if(typeof t=="function")return zc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===_e)return 14}return 2}function Kr(t,i){var o=t.alternate;return o===null?(o=Li(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Al(t,i,o,u,f,p){var S=2;if(u=t,typeof t=="function")zc(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case F:return Ts(o.children,f,p,i);case H:S=8,f|=8;break;case P:return t=Li(12,o,i,f|2),t.elementType=P,t.lanes=p,t;case ee:return t=Li(13,o,i,f),t.elementType=ee,t.lanes=p,t;case ge:return t=Li(19,o,i,f),t.elementType=ge,t.lanes=p,t;case he:return Cl(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case z:S=9;break e;case oe:S=11;break e;case _e:S=14;break e;case pe:S=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Li(S,o,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function Ts(t,i,o,u){return t=Li(7,t,u,i),t.lanes=o,t}function Cl(t,i,o,u){return t=Li(22,t,u,i),t.elementType=he,t.lanes=o,t.stateNode={isHidden:!1},t}function Bc(t,i,o){return t=Li(6,t,null,i),t.lanes=o,t}function Vc(t,i,o){return i=Li(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function xv(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hc(t,i,o,u,f,p,S,N,V){return t=new xv(t,i,o,N,V),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Li(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(p),t}function yv(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Wp(t){if(!t)return Vr;t=t._reactInternals;e:{if(Gn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ii(o))return _h(t,o,i)}return i}function Xp(t,i,o,u,f,p,S,N,V){return t=Hc(o,u,!0,t,f,p,S,N,V),t.context=Wp(null),o=t.current,u=Yn(),f=Yr(o),p=xr(u,f),p.callback=i??null,Wr(o,p,f),t.current.lanes=f,en(t,f,u),oi(t,u),t}function Rl(t,i,o,u){var f=i.current,p=Yn(),S=Yr(f);return o=Wp(o),i.context===null?i.context=o:i.pendingContext=o,i=xr(p,S),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Wr(f,i,S),t!==null&&(Xi(t,f,S,p),sl(t,f,S)),S}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Gc(t,i){jp(t,i),(t=t.alternate)&&jp(t,i)}function Mv(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wc(t){this._internalRoot=t}Pl.prototype.render=Wc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Rl(t,i,null,null)},Pl.prototype.unmount=Wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ss(function(){Rl(null,t,null,null)}),i[pr]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oa();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ni.length&&i!==0&&i<Ni[o].priority;o++);Ni.splice(o,0,t),o===0&&er(t)}};function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function Sv(t,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ce=bl(S);p.call(ce)}}var S=Xp(i,u,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=S,t[pr]=S.current,ta(t.nodeType===8?t.parentNode:t),Ss(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var ce=bl(V);N.call(ce)}}var V=Hc(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=V,t[pr]=V.current,ta(t.nodeType===8?t.parentNode:t),Ss(function(){Rl(i,V,o,u)}),V}function Dl(t,i,o,u,f){var p=o._reactRootContainer;if(p){var S=p;if(typeof f=="function"){var N=f;f=function(){var V=bl(S);N.call(V)}}Rl(i,S,t,f)}else S=Sv(o,i,t,f,u);return bl(S)}Wo=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Jt(i.pendingLanes);o!==0&&(Bs(i,o|1),oi(i,Pe()),(Lt&6)===0&&(uo=Pe()+500,Hr()))}break;case 13:Ss(function(){var u=_r(t,1);if(u!==null){var f=Yn();Xi(u,t,1,f)}}),Gc(t,1)}},cr=function(t){if(t.tag===13){var i=_r(t,134217728);if(i!==null){var o=Yn();Xi(i,t,134217728,o)}Gc(t,134217728)}},Ji=function(t){if(t.tag===13){var i=Yr(t),o=_r(t,i);if(o!==null){var u=Yn();Xi(o,t,i,u)}Gc(t,i)}},Oa=function(){return ht},Xo=function(t,i){var o=ht;try{return ht=t,i()}finally{ht=o}},Ce=function(t,i,o){switch(i){case"input":if(_t(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=$a(u);if(!f)throw Error(n(90));wt(u),_t(u,f)}}}break;case"textarea":Se(t,o);break;case"select":i=o.value,i!=null&&U(t,!!o.multiple,i,!1)}},te=Fc,tt=Ss;var Ev={usingClientEntryPoint:!1,Events:[ra,Ks,$a,Fe,st,Fc]},_a={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{bt=Il.inject(wv),St=Il}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,ai.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(i))throw Error(n(200));return yv(t,i,null,o)},ai.createRoot=function(t,i){if(!Xc(t))throw Error(n(299));var o=!1,u="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hc(t,1,!1,null,null,o,!1,u,f),t[pr]=i.current,ta(t.nodeType===8?t.parentNode:t),new Wc(i)},ai.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},ai.flushSync=function(t){return Ss(t)},ai.hydrate=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!0,o)},ai.hydrateRoot=function(t,i,o){if(!Xc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",S=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=Xp(i,null,t,1,o??null,f,!1,p,S),t[pr]=i.current,ta(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Pl(i)},ai.render=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!1,o)},ai.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(n(40));return t._reactRootContainer?(Ss(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1},ai.unstable_batchedUpdates=Fc,ai.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!Ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Dl(t,i,o,!1,u)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var nm;function Iv(){if(nm)return Yc.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yc.exports=Dv(),Yc.exports}var im;function Uv(){if(im)return Ul;im=1;var s=Iv();return Ul.createRoot=s.createRoot,Ul.hydrateRoot=s.hydrateRoot,Ul}var Nv=Uv();const Fv=mg(Nv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="170",Ov=0,rm=1,kv=2,gg=1,vg=2,Cr=3,as=0,Kn=1,Si=2,Lr=0,bo=1,Lf=2,sm=3,om=4,zv=5,Us=100,Bv=101,Vv=102,Hv=103,Gv=104,Wv=200,Xv=201,jv=202,qv=203,Df=204,If=205,Yv=206,$v=207,Kv=208,Zv=209,Qv=210,Jv=211,e_=212,t_=213,n_=214,Uf=0,Nf=1,Ff=2,Do=3,Of=4,kf=5,zf=6,Bf=7,_u=0,i_=1,r_=2,os=0,_g=1,xg=2,yg=3,Sd=4,s_=5,Mg=6,Sg=7,Eg=300,Io=301,Uo=302,Vf=303,Hf=304,xu=306,Rr=1e3,Fs=1001,Gf=1002,Zi=1003,o_=1004,Nl=1005,ur=1006,Zc=1007,Os=1008,Ur=1009,wg=1010,Tg=1011,Pa=1012,Ed=1013,ks=1014,br=1015,Dr=1016,wd=1017,Td=1018,No=1020,Ag=35902,Cg=1021,Rg=1022,Ki=1023,bg=1024,Pg=1025,Po=1026,Fo=1027,Lg=1028,Ad=1029,Dg=1030,Cd=1031,Rd=1033,ou=33776,au=33777,lu=33778,uu=33779,Wf=35840,Xf=35841,jf=35842,qf=35843,Yf=36196,$f=37492,Kf=37496,Zf=37808,Qf=37809,Jf=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,ud=37820,cd=37821,cu=36492,fd=36494,dd=36495,Ig=36283,hd=36284,pd=36285,md=36286,a_=3200,l_=3201,yu=0,u_=1,ss="",Ii="srgb",zo="srgb-linear",Mu="linear",Bt="srgb",fo=7680,am=519,c_=512,f_=513,d_=514,Ug=515,h_=516,p_=517,m_=518,g_=519,lm=35044,um="300 es",Pr=2e3,du=2001;class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,hu=180/Math.PI;function Da(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function ui(s,e,n){return Math.max(e,Math.min(n,s))}function v_(s,e){return(s%e+e)%e}function Jc(s,e,n){return(1-n)*s+n*e}function ya(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ui(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,n,r,a,l,c,d,h,m){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m)}set(e,n,r,a,l,c,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],M=r[5],E=r[8],T=a[0],y=a[3],g=a[6],I=a[1],D=a[4],R=a[7],$=a[2],O=a[5],F=a[8];return l[0]=c*T+d*I+h*$,l[3]=c*y+d*D+h*O,l[6]=c*g+d*R+h*F,l[1]=m*T+_*I+v*$,l[4]=m*y+_*D+v*O,l[7]=m*g+_*R+v*F,l[2]=x*T+M*I+E*$,l[5]=x*y+M*D+E*O,l[8]=x*g+M*R+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*l*_+r*d*h+a*l*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=_*c-d*m,x=d*h-_*l,M=m*l-c*h,E=n*v+r*x+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*c)*T,e[3]=x*T,e[4]=(_*n-a*h)*T,e[5]=(a*l-d*n)*T,e[6]=M*T,e[7]=(r*h-m*n)*T,e[8]=(c*n-r*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ef.makeScale(e,n)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,n){return this.premultiply(ef.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new yt;function Ng(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function __(){const s=pu("canvas");return s.style.display="block",s}const cm={};function Ra(s){s in cm||(cm[s]=!0,console.warn(s))}function x_(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function y_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function M_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pt={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Bt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Bt&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Mu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fm=[.64,.33,.3,.6,.15,.06],dm=[.2126,.7152,.0722],hm=[.3127,.329],pm=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pt.define({[zo]:{primaries:fm,whitePoint:hm,transfer:Mu,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,workingColorSpaceConfig:{unpackColorSpace:Ii},outputColorSpaceConfig:{drawingBufferColorSpace:Ii}},[Ii]:{primaries:fm,whitePoint:hm,transfer:Bt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,outputColorSpaceConfig:{drawingBufferColorSpace:Ii}}});let ho;class S_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=pu("canvas")),ho.width=e.width,ho.height=e.height;const r=ho.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Ir(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ir(n[r]/255)*255):n[r]=Ir(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E_=0;class Fg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(tf(a[c].image)):l.push(tf(a[c]))}else l=tf(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function tf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?S_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w_=0;class Zn extends Bo{constructor(e=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,r=Fs,a=Fs,l=ur,c=Os,d=Ki,h=Ur,m=Zn.DEFAULT_ANISOTROPY,_=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Da(),this.name="",this.source=new Fg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case Fs:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case Fs:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Eg;Zn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],M=h[5],E=h[9],T=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,R=(M+1)/2,$=(g+1)/2,O=(_+x)/4,F=(v+T)/4,H=(E+y)/4;return D>R&&D>$?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=O/r,l=F/r):R>$?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=O/a,l=H/a):$<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt($),r=F/l,a=H/l),this.set(r,a,l,n),this}let I=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(v-T)/I,this.z=(x-_)/I,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T_ extends Bo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ur,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Zn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends T_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Og extends Zn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends Zn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,d){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=l[c+0],M=l[c+1],E=l[c+2],T=l[c+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=E,e[n+3]=T;return}if(v!==T||h!==x||m!==M||_!==E){let y=1-d;const g=h*x+m*M+_*E+v*T,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const $=Math.sqrt(D),O=Math.atan2($,g*I);y=Math.sin(y*O)/$,d=Math.sin(d*O)/$}const R=d*I;if(h=h*y+x*R,m=m*y+M*R,_=_*y+E*R,v=v*y+T*R,y===1-d){const $=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=$,m*=$,_*=$,v*=$}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,c){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=l[c],x=l[c+1],M=l[c+2],E=l[c+3];return e[n]=d*E+_*v+h*M-m*x,e[n+1]=h*E+_*x+m*v-d*M,e[n+2]=m*E+_*M+d*x-h*v,e[n+3]=_*E-d*v-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),v=d(l/2),x=h(r/2),M=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"YZX":this._x=x*_*v+m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v-x*M*E;break;case"XZY":this._x=x*_*v-m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],d=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-h)*M,this._y=(l-m)*M,this._z=(c-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-h)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-m)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(c-a)/M,this._x=(l+m)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ui(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-l*h,this._y=a*_+c*h+l*d-r*m,this._z=l*_+c*m+r*h-a*d,this._w=c*_-r*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*c+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),_=2*(d*n-l*a),v=2*(l*r-c*n);return this.x=n+h*m+c*v-d*_,this.y=r+h*_+d*m-l*v,this.z=a+h*v+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-l*d,this.y=l*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ui(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nf=new X,gm=new Ia;class Ua{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ji):ji.fromBufferAttribute(l,c),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Ol.subVectors(this.max,Ma),po.subVectors(e.a,Ma),mo.subVectors(e.b,Ma),go.subVectors(e.c,Ma),Qr.subVectors(mo,po),Jr.subVectors(go,mo),As.subVectors(po,go);let n=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-As.z,As.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,As.z,0,-As.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-As.y,As.x,0];return!rf(n,po,mo,go,Ol)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,po,mo,go,Ol))?!1:(kl.crossVectors(Qr,Jr),n=[kl.x,kl.y,kl.z],rf(n,po,mo,go,Ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new X,new X,new X,new X,new X,new X,new X,new X],ji=new X,Fl=new Ua,po=new X,mo=new X,go=new X,Qr=new X,Jr=new X,As=new X,Ma=new X,Ol=new X,kl=new X,Cs=new X;function rf(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Cs.fromArray(s,l);const d=a.x*Math.abs(Cs.x)+a.y*Math.abs(Cs.y)+a.z*Math.abs(Cs.z),h=e.dot(Cs),m=n.dot(Cs),_=r.dot(Cs);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const C_=new Ua,Sa=new X,sf=new X;class Na{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):C_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Sa,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(sf)),this.expandByPoint(Sa.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Er=new X,of=new X,zl=new X,es=new X,af=new X,Bl=new X,lf=new X;class bd{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,n),Er.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){of.copy(e).add(n).multiplyScalar(.5),zl.copy(n).sub(e).normalize(),es.copy(this.origin).sub(of);const l=e.distanceTo(n)*.5,c=-this.direction.dot(zl),d=es.dot(this.direction),h=-es.dot(zl),m=es.lengthSq(),_=Math.abs(1-c*c);let v,x,M,E;if(_>0)if(v=c*h-d,x=c*d-h,E=l*_,v>=0)if(x>=-E)if(x<=E){const T=1/_;v*=T,x*=T,M=v*(v+c*x+2*d)+x*(c*v+x+2*h)+m}else x=l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-c*l+d)),x=v>0?-l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+m):(v=Math.max(0,-(c*l+d)),x=v>0?l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(of).addScaledVector(zl,x),M}intersectSphere(e,n){Er.subVectors(e.center,this.origin);const r=Er.dot(this.direction),a=Er.dot(Er)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,d,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,n,r,a,l){af.subVectors(n,e),Bl.subVectors(r,e),lf.crossVectors(af,Bl);let c=this.direction.dot(lf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;es.subVectors(this.origin,e);const h=d*this.direction.dot(Bl.crossVectors(es,Bl));if(h<0)return null;const m=d*this.direction.dot(af.cross(es));if(m<0||h+m>c)return null;const _=-d*es.dot(lf);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y)}set(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/vo.setFromMatrixColumn(e,0).length(),l=1/vo.setFromMatrixColumn(e,1).length(),c=1/vo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-d*h,n[2]=T-x*m,n[6]=E+M*m,n[10]=c*h}else if(e.order==="YXZ"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x+T*d,n[4]=E*d-M,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-d,n[2]=M*d-E,n[6]=T+x*d,n[10]=c*h}else if(e.order==="ZXY"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x-T*d,n[4]=-c*v,n[8]=E+M*d,n[1]=M+E*d,n[5]=c*_,n[9]=T-x*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=h*_,n[4]=E*m-M,n[8]=x*m+T,n[1]=h*v,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const x=c*h,M=c*m,E=d*h,T=d*m;n[0]=h*_,n[4]=T-x*v,n[8]=E*v+M,n[1]=v,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*v+E,n[10]=x-T*v}else if(e.order==="XZY"){const x=c*h,M=c*m,E=d*h,T=d*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=c*_,n[9]=M*v-E,n[2]=E*v-M,n[6]=d*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,b_)}lookAt(e,n,r){const a=this.elements;return xi.subVectors(e,n),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),ts.crossVectors(r,xi),ts.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),ts.crossVectors(r,xi)),ts.normalize(),Vl.crossVectors(xi,ts),a[0]=ts.x,a[4]=Vl.x,a[8]=xi.x,a[1]=ts.y,a[5]=Vl.y,a[9]=xi.y,a[2]=ts.z,a[6]=Vl.z,a[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],M=r[13],E=r[2],T=r[6],y=r[10],g=r[14],I=r[3],D=r[7],R=r[11],$=r[15],O=a[0],F=a[4],H=a[8],P=a[12],A=a[1],z=a[5],oe=a[9],ee=a[13],ge=a[2],_e=a[6],pe=a[10],he=a[14],G=a[3],ve=a[7],me=a[11],k=a[15];return l[0]=c*O+d*A+h*ge+m*G,l[4]=c*F+d*z+h*_e+m*ve,l[8]=c*H+d*oe+h*pe+m*me,l[12]=c*P+d*ee+h*he+m*k,l[1]=_*O+v*A+x*ge+M*G,l[5]=_*F+v*z+x*_e+M*ve,l[9]=_*H+v*oe+x*pe+M*me,l[13]=_*P+v*ee+x*he+M*k,l[2]=E*O+T*A+y*ge+g*G,l[6]=E*F+T*z+y*_e+g*ve,l[10]=E*H+T*oe+y*pe+g*me,l[14]=E*P+T*ee+y*he+g*k,l[3]=I*O+D*A+R*ge+$*G,l[7]=I*F+D*z+R*_e+$*ve,l[11]=I*H+D*oe+R*pe+$*me,l[15]=I*P+D*ee+R*he+$*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],M=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+l*h*v-a*m*v-l*d*x+r*m*x+a*d*M-r*h*M)+T*(+n*h*M-n*m*x+l*c*x-a*c*M+a*m*_-l*h*_)+y*(+n*m*v-n*d*M-l*c*v+r*c*M+l*d*_-r*m*_)+g*(-a*d*_-n*h*v+n*d*x+a*c*v-r*c*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],M=e[11],E=e[12],T=e[13],y=e[14],g=e[15],I=v*y*m-T*x*m+T*h*M-d*y*M-v*h*g+d*x*g,D=E*x*m-_*y*m-E*h*M+c*y*M+_*h*g-c*x*g,R=_*T*m-E*v*m+E*d*M-c*T*M-_*d*g+c*v*g,$=E*v*h-_*T*h-E*d*x+c*T*x+_*d*y-c*v*y,O=n*I+r*D+a*R+l*$;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=I*F,e[1]=(T*x*l-v*y*l-T*a*M+r*y*M+v*a*g-r*x*g)*F,e[2]=(d*y*l-T*h*l+T*a*m-r*y*m-d*a*g+r*h*g)*F,e[3]=(v*h*l-d*x*l-v*a*m+r*x*m+d*a*M-r*h*M)*F,e[4]=D*F,e[5]=(_*y*l-E*x*l+E*a*M-n*y*M-_*a*g+n*x*g)*F,e[6]=(E*h*l-c*y*l-E*a*m+n*y*m+c*a*g-n*h*g)*F,e[7]=(c*x*l-_*h*l+_*a*m-n*x*m-c*a*M+n*h*M)*F,e[8]=R*F,e[9]=(E*v*l-_*T*l-E*r*M+n*T*M+_*r*g-n*v*g)*F,e[10]=(c*T*l-E*d*l+E*r*m-n*T*m-c*r*g+n*d*g)*F,e[11]=(_*d*l-c*v*l-_*r*m+n*v*m+c*r*M-n*d*M)*F,e[12]=$*F,e[13]=(_*T*a-E*v*a+E*r*x-n*T*x-_*r*y+n*v*y)*F,e[14]=(E*d*a-c*T*a-E*r*h+n*T*h+c*r*y-n*d*y)*F,e[15]=(c*v*a-_*d*a+_*r*h-n*v*h-c*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,d=e.y,h=e.z,m=l*c,_=l*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*c,0,m*h-a*d,_*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,d=n._z,h=n._w,m=l+l,_=c+c,v=d+d,x=l*m,M=l*_,E=l*v,T=c*_,y=c*v,g=d*v,I=h*m,D=h*_,R=h*v,$=r.x,O=r.y,F=r.z;return a[0]=(1-(T+g))*$,a[1]=(M+R)*$,a[2]=(E-D)*$,a[3]=0,a[4]=(M-R)*O,a[5]=(1-(x+g))*O,a[6]=(y+I)*O,a[7]=0,a[8]=(E+D)*F,a[9]=(y-I)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=vo.set(a[0],a[1],a[2]).length();const c=vo.set(a[4],a[5],a[6]).length(),d=vo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],qi.copy(this);const m=1/l,_=1/c,v=1/d;return qi.elements[0]*=m,qi.elements[1]*=m,qi.elements[2]*=m,qi.elements[4]*=_,qi.elements[5]*=_,qi.elements[6]*=_,qi.elements[8]*=v,qi.elements[9]*=v,qi.elements[10]*=v,n.setFromRotationMatrix(qi),r.x=l,r.y=c,r.z=d,this}makePerspective(e,n,r,a,l,c,d=Pr){const h=this.elements,m=2*l/(n-e),_=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let M,E;if(d===Pr)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===du)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,d=Pr){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-l),x=(n+e)*m,M=(r+a)*_;let E,T;if(d===Pr)E=(c+l)*v,T=-2*v;else if(d===du)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const vo=new X,qi=new $t,R_=new X(0,0,0),b_=new X(1,1,1),ts=new X,Vl=new X,xi=new X,vm=new $t,_m=new Ia;class Ui{constructor(e=0,n=0,r=0,a=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(ui(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ui(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(ui(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-ui(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(ui(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ui(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P_=0;const xm=new X,_o=new Ia,wr=new $t,Hl=new X,Ea=new X,L_=new X,D_=new Ia,ym=new X(1,0,0),Mm=new X(0,1,0),Sm=new X(0,0,1),Em={type:"added"},I_={type:"removed"},xo={type:"childadded",child:null},uf={type:"childremoved",child:null};class on extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new X,n=new Ui,r=new Ia,a=new X(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new yt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,n){return _o.setFromAxisAngle(e,n),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Hl.copy(e):Hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(Ea,Hl,this.up):wr.lookAt(Hl,Ea,this.up),this.quaternion.setFromRotationMatrix(wr),a&&(wr.extractRotation(a.matrixWorld),_o.setFromRotationMatrix(wr),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),xo.child=e,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I_),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,L_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}on.DEFAULT_UP=new X(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new X,Tr=new X,cf=new X,Ar=new X,yo=new X,Mo=new X,wm=new X,ff=new X,df=new X,hf=new X,pf=new Ht,mf=new Ht,gf=new Ht;class $i{constructor(e=new X,n=new X,r=new X){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Yi.subVectors(e,n),a.cross(Yi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){Yi.subVectors(a,n),Tr.subVectors(r,n),cf.subVectors(e,n);const c=Yi.dot(Yi),d=Yi.dot(Tr),h=Yi.dot(cf),m=Tr.dot(Tr),_=Tr.dot(cf),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const x=1/v,M=(m*h-d*_)*x,E=(c*_-d*h)*x;return l.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,n,r,a,l,c,d,h){return this.getBarycoord(e,n,r,a,Ar)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ar.x),h.addScaledVector(c,Ar.y),h.addScaledVector(d,Ar.z),h)}static getInterpolatedAttribute(e,n,r,a,l,c){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,n),mf.fromBufferAttribute(e,r),gf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(pf,l.x),c.addScaledVector(mf,l.y),c.addScaledVector(gf,l.z),c}static isFrontFacing(e,n,r,a){return Yi.subVectors(r,n),Tr.subVectors(e,n),Yi.cross(Tr).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Yi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return $i.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,d;yo.subVectors(a,r),Mo.subVectors(l,r),ff.subVectors(e,r);const h=yo.dot(ff),m=Mo.dot(ff);if(h<=0&&m<=0)return n.copy(r);df.subVectors(e,a);const _=yo.dot(df),v=Mo.dot(df);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(yo,c);hf.subVectors(e,l);const M=yo.dot(hf),E=Mo.dot(hf);if(E>=0&&M<=E)return n.copy(l);const T=M*m-h*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Mo,d);const y=_*E-M*v;if(y<=0&&v-_>=0&&M-E>=0)return wm.subVectors(l,a),d=(v-_)/(v-_+(M-E)),n.copy(a).addScaledVector(wm,d);const g=1/(y+T+x);return c=T*g,d=x*g,n.copy(r).addScaledVector(yo,c).addScaledVector(Mo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function vf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Pt.workingColorSpace){if(e=v_(e,1),n=ui(n,0,1),r=ui(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=vf(c,l,e+1/3),this.g=vf(c,l,e),this.b=vf(c,l,e-1/3)}return Pt.toWorkingColorSpace(this,a),this}setStyle(e,n=Ii){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ii){const r=zg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return Pt.fromWorkingColorSpace(Bn.copy(this),e),Math.round(ui(Bn.r*255,0,255))*65536+Math.round(ui(Bn.g*255,0,255))*256+Math.round(ui(Bn.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Bn.copy(this),n);const r=Bn.r,a=Bn.g,l=Bn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let h,m;const _=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Bn.copy(this),n),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Ii){Pt.fromWorkingColorSpace(Bn.copy(this),e);const n=Bn.r,r=Bn.g,a=Bn.b;return e!==Ii?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+n,ns.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ns),e.getHSL(Gl);const r=Jc(ns.h,Gl.h,n),a=Jc(ns.s,Gl.s,n),l=Jc(ns.l,Gl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new mt;mt.NAMES=zg;let U_=0;class Nr extends Bo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Da(),this.name="",this.blending=bo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=If,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==as&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Df&&(r.blendSrc=this.blendSrc),this.blendDst!==If&&(r.blendDst=this.blendDst),this.blendEquation!==Us&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mi extends Nr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new X,Wl=new pt;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=lm,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ya(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=li(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),r=li(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),r=li(r,this.array),a=li(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),r=li(r,this.array),a=li(a,this.array),l=li(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class Bg extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xt extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let N_=0;const Di=new $t,_f=new on,So=new X,yi=new Ua,wa=new Ua,Sn=new X;class cn extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ng(e)?Vg:Bg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,n,r){return Di.makeTranslation(e,n,r),this.applyMatrix4(Di),this}scale(e,n,r){return Di.makeScale(e,n,r),this.applyMatrix4(Di),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xt(r,3))}else{for(let r=0,a=n.count;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];wa.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(yi.min,wa.min),yi.expandByPoint(Sn),Sn.addVectors(yi.max,wa.max),yi.expandByPoint(Sn)):(yi.expandByPoint(wa.min),yi.expandByPoint(wa.max))}yi.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)Sn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(Sn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Sn.fromBufferAttribute(d,m),h&&(So.fromBufferAttribute(e,m),Sn.add(So)),a=Math.max(a,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let H=0;H<r.count;H++)d[H]=new X,h[H]=new X;const m=new X,_=new X,v=new X,x=new pt,M=new pt,E=new pt,T=new X,y=new X;function g(H,P,A){m.fromBufferAttribute(r,H),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,H),M.fromBufferAttribute(l,P),E.fromBufferAttribute(l,A),_.sub(m),v.sub(m),M.sub(x),E.sub(x);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(z),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(z),d[H].add(T),d[P].add(T),d[A].add(T),h[H].add(y),h[P].add(y),h[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let H=0,P=I.length;H<P;++H){const A=I[H],z=A.start,oe=A.count;for(let ee=z,ge=z+oe;ee<ge;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new X,R=new X,$=new X,O=new X;function F(H){$.fromBufferAttribute(a,H),O.copy($);const P=d[H];D.copy(P),D.sub($.multiplyScalar($.dot(P))).normalize(),R.crossVectors(O,P);const z=R.dot(h[H])<0?-1:1;c.setXYZW(H,D.x,D.y,D.z,z)}for(let H=0,P=I.length;H<P;++H){const A=I[H],z=A.start,oe=A.count;for(let ee=z,ge=z+oe;ee<ge;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new X,l=new X,c=new X,d=new X,h=new X,m=new X,_=new X,v=new X;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Sn.fromBufferAttribute(e,n),Sn.normalize(),e.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(h.length*_);let M=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?M=h[T]*d.data.stride+d.offset:M=h[T]*_;for(let g=0;g<_;g++)x[E++]=m[M++]}return new fi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],M=e(x,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new $t,Rs=new bd,Xl=new Na,Am=new X,jl=new X,ql=new X,Yl=new X,xf=new X,$l=new X,Cm=new X,Kl=new X;class ke extends on{constructor(e=new cn,n=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){$l.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=d[h],v=l[h];_!==0&&(xf.fromBufferAttribute(v,e),c?$l.addScaledVector(xf,_):$l.addScaledVector(xf.sub(n),_))}n.add($l)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(l),Rs.copy(e.ray).recast(e.near),!(Xl.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Xl,Am)===null||Rs.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),Rs.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&Rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Rs)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,x=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],I=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=I,$=D;R<$;R+=3){const O=d.getX(R),F=d.getX(R+1),H=d.getX(R+2);a=Zl(this,g,e,r,m,_,v,O,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const I=d.getX(y),D=d.getX(y+1),R=d.getX(y+2);a=Zl(this,c,e,r,m,_,v,I,D,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],I=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let R=I,$=D;R<$;R+=3){const O=R,F=R+1,H=R+2;a=Zl(this,g,e,r,m,_,v,O,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const I=y,D=y+1,R=y+2;a=Zl(this,c,e,r,m,_,v,I,D,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function F_(s,e,n,r,a,l,c,d){let h;if(e.side===Kn?h=r.intersectTriangle(c,l,a,!0,d):h=r.intersectTriangle(a,l,c,e.side===as,d),h===null)return null;Kl.copy(d),Kl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Kl);return m<n.near||m>n.far?null:{distance:m,point:Kl.clone(),object:s}}function Zl(s,e,n,r,a,l,c,d,h,m){s.getVertexPosition(d,jl),s.getVertexPosition(h,ql),s.getVertexPosition(m,Yl);const _=F_(s,e,n,r,jl,ql,Yl,Cm);if(_){const v=new X;$i.getBarycoord(Cm,jl,ql,Yl,v),a&&(_.uv=$i.getInterpolatedAttribute(a,d,h,m,v,new pt)),l&&(_.uv1=$i.getInterpolatedAttribute(l,d,h,m,v,new pt)),c&&(_.normal=$i.getInterpolatedAttribute(c,d,h,m,v,new X),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new X,materialIndex:0};$i.getNormal(jl,ql,Yl,x.normal),_.face=x,_.barycoord=v}return _}class zt extends cn{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,r,n,e,c,l,0),E("z","y","x",1,-1,r,n,-e,c,l,1),E("x","z","y",1,1,e,r,n,a,c,2),E("x","z","y",1,-1,e,r,-n,a,c,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(v,2));function E(T,y,g,I,D,R,$,O,F,H,P){const A=R/F,z=$/H,oe=R/2,ee=$/2,ge=O/2,_e=F+1,pe=H+1;let he=0,G=0;const ve=new X;for(let me=0;me<pe;me++){const k=me*z-ee;for(let fe=0;fe<_e;fe++){const We=fe*A-oe;ve[T]=We*I,ve[y]=k*D,ve[g]=ge,m.push(ve.x,ve.y,ve.z),ve[T]=0,ve[y]=0,ve[g]=O>0?1:-1,_.push(ve.x,ve.y,ve.z),v.push(fe/F),v.push(1-me/H),he+=1}}for(let me=0;me<H;me++)for(let k=0;k<F;k++){const fe=x+k+_e*me,We=x+k+_e*(me+1),ie=x+(k+1)+_e*(me+1),xe=x+(k+1)+_e*me;h.push(fe,We,xe),h.push(We,ie,xe),G+=6}d.addGroup(M,G,P),M+=G,x+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function $n(s){const e={};for(let n=0;n<s.length;n++){const r=Oo(s[n]);for(const a in r)e[a]=r[a]}return e}function O_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const La={clone:Oo,merge:$n};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Nr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=O_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Gg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Pr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new X,Rm=new pt,bm=new pt;class ci extends Gg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,bm),n.subVectors(bm,Rm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Eo=-90,wo=1;class B_ extends on{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(Eo,wo,e,n);a.layers=this.layers,this.add(a);const l=new ci(Eo,wo,e,n);l.layers=this.layers,this.add(l);const c=new ci(Eo,wo,e,n);c.layers=this.layers,this.add(c);const d=new ci(Eo,wo,e,n);d.layers=this.layers,this.add(d);const h=new ci(Eo,wo,e,n);h.layers=this.layers,this.add(h);const m=new ci(Eo,wo,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,d,h]=n;for(const m of n)this.remove(m);if(e===Pr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===du)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Wg extends Zn{constructor(e,n,r,a,l,c,d,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Io,super(e,n,r,a,l,c,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V_ extends Qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Wg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ur}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new zt(5,5,5),l=new wn({name:"CubemapFromEquirect",uniforms:Oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:Lr});l.uniforms.tEquirect.value=n;const c=new ke(a,l),d=n.minFilter;return n.minFilter===Os&&(n.minFilter=ur),new B_(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}const yf=new X,H_=new X,G_=new yt;class Ds{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=yf.subVectors(r,n).cross(H_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(yf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||G_.getNormalMatrix(e),a=this.coplanarPoint(yf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Na,Ql=new X;class Pd{constructor(e=new Ds,n=new Ds,r=new Ds,a=new Ds,l=new Ds,c=new Ds){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Pr){const r=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],M=a[8],E=a[9],T=a[10],y=a[11],g=a[12],I=a[13],D=a[14],R=a[15];if(r[0].setComponents(h-l,x-m,y-M,R-g).normalize(),r[1].setComponents(h+l,x+m,y+M,R+g).normalize(),r[2].setComponents(h+c,x+_,y+E,R+I).normalize(),r[3].setComponents(h-c,x-_,y-E,R-I).normalize(),r[4].setComponents(h-d,x-v,y-T,R-D).normalize(),n===Pr)r[5].setComponents(h+d,x+v,y+T,R+D).normalize();else if(n===du)r[5].setComponents(d,v,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Ql.x=a.normal.x>0?e.max.x:e.min.x,Ql.y=a.normal.y>0?e.max.y:e.min.y,Ql.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xg(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function W_(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],T=v[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const T=v[M];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:c}}class Vn extends cn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,v=e/d,x=n/h,M=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const I=g*x-c;for(let D=0;D<m;D++){const R=D*v-l;E.push(R,-I,0),T.push(0,0,1),y.push(D/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<d;I++){const D=I+m*g,R=I+m*(g+1),$=I+1+m*(g+1),O=I+1+m*g;M.push(D,R,O),M.push(R,$,O)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var X_=`#ifdef USE_ALPHAHASH
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
}`,Et={alphahash_fragment:X_,alphahash_pars_fragment:j_,alphamap_fragment:q_,alphamap_pars_fragment:Y_,alphatest_fragment:$_,alphatest_pars_fragment:K_,aomap_fragment:Z_,aomap_pars_fragment:Q_,batching_pars_vertex:J_,batching_vertex:ex,begin_vertex:tx,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:lx,clipping_planes_vertex:ux,color_fragment:cx,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:hx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:vx,displacementmap_vertex:_x,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:Mx,colorspace_pars_fragment:Sx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Ox,envmap_vertex:Cx,fog_vertex:Rx,fog_pars_vertex:bx,fog_fragment:Px,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Nx,lights_pars_begin:Fx,lights_toon_fragment:kx,lights_toon_pars_fragment:zx,lights_phong_fragment:Bx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:jx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:Kx,map_fragment:Zx,map_pars_fragment:Qx,map_particle_fragment:Jx,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:ry,morphnormal_vertex:sy,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:ly,normal_fragment_maps:uy,normal_pars_fragment:cy,normal_pars_vertex:fy,normal_vertex:dy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:vy,opaque_fragment:_y,packing:xy,premultiplied_alpha_fragment:yy,project_vertex:My,dithering_fragment:Sy,dithering_pars_fragment:Ey,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:by,skinbase_vertex:Py,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Iy,specularmap_fragment:Uy,specularmap_pars_fragment:Ny,tonemapping_fragment:Fy,tonemapping_pars_fragment:Oy,transmission_fragment:ky,transmission_pars_fragment:zy,uv_pars_fragment:By,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:jy,backgroundCube_frag:qy,cube_vert:Yy,cube_frag:$y,depth_vert:Ky,depth_frag:Zy,distanceRGBA_vert:Qy,distanceRGBA_frag:Jy,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:oM,meshlambert_frag:aM,meshmatcap_vert:lM,meshmatcap_frag:uM,meshnormal_vert:cM,meshnormal_frag:fM,meshphong_vert:dM,meshphong_frag:hM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:vM,points_vert:_M,points_frag:xM,shadow_vert:yM,shadow_frag:MM,sprite_vert:SM,sprite_frag:EM},He={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},lr={basic:{uniforms:$n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:$n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new mt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:$n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:$n([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:$n([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new mt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:$n([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:$n([He.points,He.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:$n([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:$n([He.common,He.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:$n([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:$n([He.sprite,He.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:$n([He.common,He.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:$n([He.lights,He.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};lr.physical={uniforms:$n([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Jl={r:0,b:0,g:0},Ps=new Ui,wM=new $t;function TM(s,e,n,r,a,l,c){const d=new mt(0);let h=l===!0?0:1,m,_,v=null,x=0,M=null;function E(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?n:e).get(D)),D}function T(I){let D=!1;const R=E(I);R===null?g(d,h):R&&R.isColor&&(g(R,1),D=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,c):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,D){const R=E(D);R&&(R.isCubeTexture||R.mapping===xu)?(_===void 0&&(_=new ke(new zt(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Oo(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function($,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Ps.copy(D.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Ps)),_.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Bt,(v!==R||x!==R.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new ke(new Vn(2,2),new wn({name:"BackgroundMaterial",uniforms:Oo(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Bt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,D){I.getRGB(Jl,Hg(s)),r.buffers.color.setClear(Jl.r,Jl.g,Jl.b,D,c)}return{getClearColor:function(){return d},setClearColor:function(I,D=1){d.set(I),h=D,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,g(d,h)},render:T,addToRenderList:y}}function AM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function d(A,z,oe,ee,ge){let _e=!1;const pe=v(ee,oe,z);l!==pe&&(l=pe,m(l.object)),_e=M(A,ee,oe,ge),_e&&E(A,ee,oe,ge),ge!==null&&e.update(ge,s.ELEMENT_ARRAY_BUFFER),(_e||c)&&(c=!1,R(A,z,oe,ee),ge!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ge).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,z,oe){const ee=oe.wireframe===!0;let ge=r[A.id];ge===void 0&&(ge={},r[A.id]=ge);let _e=ge[z.id];_e===void 0&&(_e={},ge[z.id]=_e);let pe=_e[ee];return pe===void 0&&(pe=x(h()),_e[ee]=pe),pe}function x(A){const z=[],oe=[],ee=[];for(let ge=0;ge<n;ge++)z[ge]=0,oe[ge]=0,ee[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:ee,object:A,attributes:{},index:null}}function M(A,z,oe,ee){const ge=l.attributes,_e=z.attributes;let pe=0;const he=oe.getAttributes();for(const G in he)if(he[G].location>=0){const me=ge[G];let k=_e[G];if(k===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),me===void 0||me.attribute!==k||k&&me.data!==k.data)return!0;pe++}return l.attributesNum!==pe||l.index!==ee}function E(A,z,oe,ee){const ge={},_e=z.attributes;let pe=0;const he=oe.getAttributes();for(const G in he)if(he[G].location>=0){let me=_e[G];me===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(me=A.instanceColor));const k={};k.attribute=me,me&&me.data&&(k.data=me.data),ge[G]=k,pe++}l.attributes=ge,l.attributesNum=pe,l.index=ee}function T(){const A=l.newAttributes;for(let z=0,oe=A.length;z<oe;z++)A[z]=0}function y(A){g(A,0)}function g(A,z){const oe=l.newAttributes,ee=l.enabledAttributes,ge=l.attributeDivisors;oe[A]=1,ee[A]===0&&(s.enableVertexAttribArray(A),ee[A]=1),ge[A]!==z&&(s.vertexAttribDivisor(A,z),ge[A]=z)}function I(){const A=l.newAttributes,z=l.enabledAttributes;for(let oe=0,ee=z.length;oe<ee;oe++)z[oe]!==A[oe]&&(s.disableVertexAttribArray(oe),z[oe]=0)}function D(A,z,oe,ee,ge,_e,pe){pe===!0?s.vertexAttribIPointer(A,z,oe,ge,_e):s.vertexAttribPointer(A,z,oe,ee,ge,_e)}function R(A,z,oe,ee){T();const ge=ee.attributes,_e=oe.getAttributes(),pe=z.defaultAttributeValues;for(const he in _e){const G=_e[he];if(G.location>=0){let ve=ge[he];if(ve===void 0&&(he==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),he==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor)),ve!==void 0){const me=ve.normalized,k=ve.itemSize,fe=e.get(ve);if(fe===void 0)continue;const We=fe.buffer,ie=fe.type,xe=fe.bytesPerElement,De=ie===s.INT||ie===s.UNSIGNED_INT||ve.gpuType===Ed;if(ve.isInterleavedBufferAttribute){const be=ve.data,Be=be.stride,Xe=ve.offset;if(be.isInstancedInterleavedBuffer){for(let lt=0;lt<G.locationSize;lt++)g(G.location+lt,be.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let lt=0;lt<G.locationSize;lt++)y(G.location+lt);s.bindBuffer(s.ARRAY_BUFFER,We);for(let lt=0;lt<G.locationSize;lt++)D(G.location+lt,k/G.locationSize,ie,me,Be*xe,(Xe+k/G.locationSize*lt)*xe,De)}else{if(ve.isInstancedBufferAttribute){for(let be=0;be<G.locationSize;be++)g(G.location+be,ve.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let be=0;be<G.locationSize;be++)y(G.location+be);s.bindBuffer(s.ARRAY_BUFFER,We);for(let be=0;be<G.locationSize;be++)D(G.location+be,k/G.locationSize,ie,me,k*xe,k/G.locationSize*be*xe,De)}}else if(pe!==void 0){const me=pe[he];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(G.location,me);break;case 3:s.vertexAttrib3fv(G.location,me);break;case 4:s.vertexAttrib4fv(G.location,me);break;default:s.vertexAttrib1fv(G.location,me)}}}}I()}function $(){H();for(const A in r){const z=r[A];for(const oe in z){const ee=z[oe];for(const ge in ee)_(ee[ge].object),delete ee[ge];delete z[oe]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const oe in z){const ee=z[oe];for(const ge in ee)_(ee[ge].object),delete ee[ge];delete z[oe]}delete r[A.id]}function F(A){for(const z in r){const oe=r[z];if(oe[A.id]===void 0)continue;const ee=oe[A.id];for(const ge in ee)_(ee[ge].object),delete ee[ge];delete oe[A.id]}}function H(){P(),c=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:H,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:I}}function CM(s,e,n){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];n.update(M,r,1)}function h(m,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)c(m[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=_[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function RM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Ki&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const H=F===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ur&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==br&&!H)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:$,maxSamples:O}}function bM(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Ds,d=new yt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||a;return a=x,r=v.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||E===null||E.length===0||l&&!y)l?_(null):m();else{const I=l?0:r,D=I*4;let R=g.clippingState||null;h.value=R,R=_(E,x,D,M);for(let $=0;$!==D;++$)R[$]=n[$];g.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const g=M+T*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,R=M;D!==T;++D,R+=4)c.copy(v[D]).applyMatrix4(I,d),c.normal.toArray(y,R),y[R+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function PM(s){let e=new WeakMap;function n(c,d){return d===Vf?c.mapping=Io:d===Hf&&(c.mapping=Uo),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===Vf||d===Hf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new V_(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Ld extends Gg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=4,Pm=[.125,.215,.35,.446,.526,.582],Ns=20,Mf=new Ld,Lm=new mt;let Sf=null,Ef=0,wf=0,Tf=!1;const Is=(1+Math.sqrt(5))/2,To=1/Is,Dm=[new X(-Is,To,0),new X(Is,To,0),new X(-To,0,Is),new X(To,0,Is),new X(0,Is,-To),new X(0,Is,To),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Ef,wf),this._renderer.xr.enabled=Tf,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ur,minFilter:ur,generateMipmaps:!1,type:Dr,format:Ki,colorSpace:zo,depthBuffer:!1},a=Um(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(l)),this._blurMaterial=DM(l,e,n)}return a}_compileMaterial(e){const n=new ke(this._lodPlanes[0],e);this._renderer.compile(n,Mf)}_sceneToCubeUV(e,n,r,a){const d=new ci(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Lm),_.toneMapping=os,_.autoClear=!1;const M=new Mi({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),E=new ke(new zt,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(Lm),T=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;eu(a,I*D,g>2?D:0,D,D),_.setRenderTarget(a),T&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Io||e.mapping===Uo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ke(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;eu(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,Mf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Dm[(a-l-1)%Dm.length];this._blur(e,l-1,l,c,d)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new ke(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ns-1),T=l/E,y=isFinite(l)?1+Math.floor(_*T):Ns;y>Ns&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ns}`);const g=[];let I=0;for(let F=0;F<Ns;++F){const H=F/T,P=Math.exp(-H*H/2);g.push(P),F===0?I+=P:F<y&&(I+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-r;const R=this._sizeLods[a],$=3*R*(a>D-Co?a-D+Co:0),O=4*(this._cubeSize-R);eu(n,$,O,3*R,2*R),h.setRenderTarget(n),h.render(v,Mf)}}function LM(s){const e=[],n=[],r=[];let a=s;const l=s-Co+1+Pm.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);n.push(d);let h=1/d;c>s-Co?h=Pm[c-s+Co-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,T=3,y=2,g=1,I=new Float32Array(T*E*M),D=new Float32Array(y*E*M),R=new Float32Array(g*E*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,H=O>2?0:-1,P=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];I.set(P,T*E*O),D.set(x,y*E*O);const A=[O,O,O,O,O,O];R.set(A,g*E*O)}const $=new cn;$.setAttribute("position",new fi(I,T)),$.setAttribute("uv",new fi(D,y)),$.setAttribute("faceIndex",new fi(R,g)),e.push($),a>Co&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Um(s,e,n){const r=new Qi(s,e,n);return r.texture.mapping=xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function eu(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function DM(s,e,n){const r=new Float32Array(Ns),a=new X(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Nm(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Fm(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function IM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===Vf||h===Hf,_=h===Io||h===Uo;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function UM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ra("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function NM(s,e,n,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",c),delete a[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(v){const x=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const I=M.array;T=M.version;for(let D=0,R=I.length;D<R;D+=3){const $=I[D+0],O=I[D+1],F=I[D+2];x.push($,O,O,F,F,$)}}else if(E!==void 0){const I=E.array;T=E.version;for(let D=0,R=I.length/3-1;D<R;D+=3){const $=D+0,O=D+1,F=D+2;x.push($,O,O,F,F,$)}}else return;const y=new(Ng(x)?Vg:Bg)(x,1);y.version=T;const g=l.get(v);g&&e.remove(g),l.set(v,y)}function _(v){const x=l.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function FM(s,e,n){let r;function a(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,M){s.drawElements(r,M,l,x*c),n.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,x*c,E),n.update(M,r,E))}function _(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];n.update(y,r,1)}function v(x,M,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/c,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,x,0,T,0,E);let g=0;for(let I=0;I<E;I++)g+=M[I]*T[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function OM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function kM(s,e,n){const r=new WeakMap,a=new Ht;function l(c,d,h){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let $=d.attributes.position.count*R,O=1;$>e.maxTextureSize&&(O=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const F=new Float32Array($*O*4*v),H=new Og(F,$,O,v);H.type=br,H.needsUpdate=!0;const P=R*4;for(let z=0;z<v;z++){const oe=g[z],ee=I[z],ge=D[z],_e=$*O*4*z;for(let pe=0;pe<oe.count;pe++){const he=pe*P;E===!0&&(a.fromBufferAttribute(oe,pe),F[_e+he+0]=a.x,F[_e+he+1]=a.y,F[_e+he+2]=a.z,F[_e+he+3]=0),T===!0&&(a.fromBufferAttribute(ee,pe),F[_e+he+4]=a.x,F[_e+he+5]=a.y,F[_e+he+6]=a.z,F[_e+he+7]=0),y===!0&&(a.fromBufferAttribute(ge,pe),F[_e+he+8]=a.x,F[_e+he+9]=a.y,F[_e+he+10]=a.z,F[_e+he+11]=ge.itemSize===4?a.w:1)}}x={count:v,texture:H,size:new pt($,O)},r.set(d,x),d.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function zM(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:c}}class jg extends Zn{constructor(e,n,r,a,l,c,d,h,m,_=Po){if(_!==Po&&_!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Po&&(r=ks),r===void 0&&_===Fo&&(r=No),super(null,a,l,c,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Zi,this.minFilter=h!==void 0?h:Zi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qg=new Zn,Om=new jg(1,1),Yg=new Og,$g=new A_,Kg=new Wg,km=[],zm=[],Bm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Vo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=km[a];if(l===void 0&&(l=new Float32Array(a),km[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function gn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function vn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Su(s,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2fv(this.addr,e),vn(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;s.uniform3fv(this.addr,e),vn(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4fv(this.addr,e),vn(n,e)}}function WM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),vn(n,r)}}function XM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),vn(n,r)}}function jM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),vn(n,r)}}function qM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2iv(this.addr,e),vn(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;s.uniform3iv(this.addr,e),vn(n,e)}}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4iv(this.addr,e),vn(n,e)}}function ZM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2uiv(this.addr,e),vn(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;s.uniform3uiv(this.addr,e),vn(n,e)}}function eS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4uiv(this.addr,e),vn(n,e)}}function tS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Om.compareFunction=Ug,l=Om):l=qg,n.setTexture2D(e||l,a)}function nS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$g,a)}function iS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Kg,a)}function rS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Yg,a)}function sS(s){switch(s){case 5126:return BM;case 35664:return VM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return QM;case 36295:return JM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function oS(s,e){s.uniform1fv(this.addr,e)}function aS(s,e){const n=Vo(e,this.size,2);s.uniform2fv(this.addr,n)}function lS(s,e){const n=Vo(e,this.size,3);s.uniform3fv(this.addr,n)}function uS(s,e){const n=Vo(e,this.size,4);s.uniform4fv(this.addr,n)}function cS(s,e){const n=Vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function fS(s,e){const n=Vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dS(s,e){const n=Vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function hS(s,e){s.uniform1iv(this.addr,e)}function pS(s,e){s.uniform2iv(this.addr,e)}function mS(s,e){s.uniform3iv(this.addr,e)}function gS(s,e){s.uniform4iv(this.addr,e)}function vS(s,e){s.uniform1uiv(this.addr,e)}function _S(s,e){s.uniform2uiv(this.addr,e)}function xS(s,e){s.uniform3uiv(this.addr,e)}function yS(s,e){s.uniform4uiv(this.addr,e)}function MS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);gn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||qg,l[c])}function SS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);gn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||$g,l[c])}function ES(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);gn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Kg,l[c])}function wS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);gn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Yg,l[c])}function TS(s){switch(s){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return uS;case 35674:return cS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return hS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return _S;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return wS}}class AS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=sS(n.type)}}class CS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TS(n.type)}}class RS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function Gm(s,e){s.seq.push(e),s.map[e.id]=e}function bS(s,e,n){const r=s.name,a=r.length;for(Af.lastIndex=0;;){const l=Af.exec(r),c=Af.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){Gm(n,m===void 0?new AS(d,s,e):new CS(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new RS(d),Gm(n,v)),n=v}}}class fu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);bS(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Wm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const PS=37297;let LS=0;function DS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Xm=new yt;function IS(s){Pt._getMatrix(Xm,Pt.workingColorSpace,s);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Mu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+DS(s.getShaderSource(e),c)}else return a}function US(s,e){const n=IS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function NS(s,e){let n;switch(e){case _g:n="Linear";break;case xg:n="Reinhard";break;case yg:n="Cineon";break;case Sd:n="ACESFilmic";break;case Mg:n="AgX";break;case Sg:n="Neutral";break;case s_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tu=new X;function FS(){Pt.getLuminanceCoefficients(tu);const s=tu.x.toFixed(4),e=tu.y.toFixed(4),n=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function kS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function zS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function ba(s){return s!==""}function qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(BS,HS)}const VS=new Map;function HS(s,e){let n=Et[e];if(n===void 0){const r=VS.get(e);if(r!==void 0)n=Et[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gd(n)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(GS,WS)}function WS(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function XS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function jS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function YS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case i_:e="ENVMAP_BLENDING_MIX";break;case r_:e="ENVMAP_BLENDING_ADD";break}return e}function $S(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function KS(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=XS(n),m=jS(n),_=qS(n),v=YS(n),x=$S(n),M=OS(n),E=kS(l),T=a.createProgram();let y,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ba).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ba).join(`
`),g.length>0&&(g+=`
`)):(y=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),g=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==os?"#define TONE_MAPPING":"",n.toneMapping!==os?Et.tonemapping_pars_fragment:"",n.toneMapping!==os?NS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,US("linearToOutputTexel",n.outputColorSpace),FS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ba).join(`
`)),c=gd(c),c=qm(c,n),c=Ym(c,n),d=gd(d),d=qm(d,n),d=Ym(d,n),c=$m(c),d=$m(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+y+c,R=I+g+d,$=Wm(a,a.VERTEX_SHADER,D),O=Wm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,$),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(z){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),ee=a.getShaderInfoLog($).trim(),ge=a.getShaderInfoLog(O).trim();let _e=!0,pe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(_e=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,$,O);else{const he=jm(a,$,"vertex"),G=jm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+he+`
`+G)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||ge==="")&&(pe=!1);pe&&(z.diagnostics={runnable:_e,programLog:oe,vertexShader:{log:ee,prefix:y},fragmentShader:{log:ge,prefix:g}})}a.deleteShader($),a.deleteShader(O),H=new fu(a,T),P=zS(a,T)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,PS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=$,this.fragmentShader=O,this}let ZS=0;class QS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new JS(e),n.set(e,r)),r}}class JS{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function e1(s,e,n,r,a,l,c){const d=new kg,h=new QS,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,z,oe,ee){const ge=oe.fog,_e=ee.geometry,pe=P.isMeshStandardMaterial?oe.environment:null,he=(P.isMeshStandardMaterial?n:e).get(P.envMap||pe),G=he&&he.mapping===xu?he.image.height:null,ve=E[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const me=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,k=me!==void 0?me.length:0;let fe=0;_e.morphAttributes.position!==void 0&&(fe=1),_e.morphAttributes.normal!==void 0&&(fe=2),_e.morphAttributes.color!==void 0&&(fe=3);let We,ie,xe,De;if(ve){const ot=lr[ve];We=ot.vertexShader,ie=ot.fragmentShader}else We=P.vertexShader,ie=P.fragmentShader,h.update(P),xe=h.getVertexShaderID(P),De=h.getFragmentShaderID(P);const be=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),Xe=ee.isInstancedMesh===!0,lt=ee.isBatchedMesh===!0,Nt=!!P.map,wt=!!P.matcap,Vt=!!he,K=!!P.aoMap,Tn=!!P.lightMap,Tt=!!P.bumpMap,_t=!!P.normalMap,at=!!P.displacementMap,It=!!P.emissiveMap,it=!!P.metalnessMap,U=!!P.roughnessMap,w=P.anisotropy>0,re=P.clearcoat>0,Se=P.dispersion>0,Ee=P.iridescence>0,ye=P.sheen>0,Qe=P.transmission>0,Ve=w&&!!P.anisotropyMap,b=re&&!!P.clearcoatMap,q=re&&!!P.clearcoatNormalMap,L=re&&!!P.clearcoatRoughnessMap,Z=Ee&&!!P.iridescenceMap,J=Ee&&!!P.iridescenceThicknessMap,Me=ye&&!!P.sheenColorMap,le=ye&&!!P.sheenRoughnessMap,ze=!!P.specularMap,Ae=!!P.specularColorMap,rt=!!P.specularIntensityMap,B=Qe&&!!P.transmissionMap,Ce=Qe&&!!P.thicknessMap,se=!!P.gradientMap,de=!!P.alphaMap,Ie=P.alphaTest>0,Fe=!!P.alphaHash,st=!!P.extensions;let te=os;P.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(te=s.toneMapping);const tt={shaderID:ve,shaderType:P.type,shaderName:P.name,vertexShader:We,fragmentShader:ie,defines:P.defines,customVertexShaderID:xe,customFragmentShaderID:De,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:lt,batchingColor:lt&&ee._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ee.instanceColor!==null,instancingMorph:Xe&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:zo,alphaToCoverage:!!P.alphaToCoverage,map:Nt,matcap:wt,envMap:Vt,envMapMode:Vt&&he.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:Tn,bumpMap:Tt,normalMap:_t,displacementMap:x&&at,emissiveMap:It,normalMapObjectSpace:_t&&P.normalMapType===u_,normalMapTangentSpace:_t&&P.normalMapType===yu,metalnessMap:it,roughnessMap:U,anisotropy:w,anisotropyMap:Ve,clearcoat:re,clearcoatMap:b,clearcoatNormalMap:q,clearcoatRoughnessMap:L,dispersion:Se,iridescence:Ee,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:ye,sheenColorMap:Me,sheenRoughnessMap:le,specularMap:ze,specularColorMap:Ae,specularIntensityMap:rt,transmission:Qe,transmissionMap:B,thicknessMap:Ce,gradientMap:se,opaque:P.transparent===!1&&P.blending===bo&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:Fe,combine:P.combine,mapUv:Nt&&T(P.map.channel),aoMapUv:K&&T(P.aoMap.channel),lightMapUv:Tn&&T(P.lightMap.channel),bumpMapUv:Tt&&T(P.bumpMap.channel),normalMapUv:_t&&T(P.normalMap.channel),displacementMapUv:at&&T(P.displacementMap.channel),emissiveMapUv:It&&T(P.emissiveMap.channel),metalnessMapUv:it&&T(P.metalnessMap.channel),roughnessMapUv:U&&T(P.roughnessMap.channel),anisotropyMapUv:Ve&&T(P.anisotropyMap.channel),clearcoatMapUv:b&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:q&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:J&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:le&&T(P.sheenRoughnessMap.channel),specularMapUv:ze&&T(P.specularMap.channel),specularColorMapUv:Ae&&T(P.specularColorMap.channel),specularIntensityMapUv:rt&&T(P.specularIntensityMap.channel),transmissionMapUv:B&&T(P.transmissionMap.channel),thicknessMapUv:Ce&&T(P.thicknessMap.channel),alphaMapUv:de&&T(P.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(_t||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!_e.attributes.uv&&(Nt||de),fog:!!ge,useFog:P.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Be,skinning:ee.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:Nt&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Bt,decodeVideoTextureEmissive:It&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Si,flipSided:P.side===Kn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||lt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tt.vertexUv1s=m.has(1),tt.vertexUv2s=m.has(2),tt.vertexUv3s=m.has(3),m.clear(),tt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)A.push(z),A.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(I(A,P),D(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function I(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function D(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const A=E[P.type];let z;if(A){const oe=lr[A];z=La.clone(oe.uniforms)}else z=P.uniforms;return z}function $(P,A){let z;for(let oe=0,ee=_.length;oe<ee;oe++){const ge=_[oe];if(ge.cacheKey===A){z=ge,++z.usedTimes;break}}return z===void 0&&(z=new KS(s,A,P,l),_.push(z)),z}function O(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function F(P){h.remove(P)}function H(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:$,releaseProgram:O,releaseShaderCache:F,programs:_,dispose:H}}function t1(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function n1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,M,E,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function d(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function h(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||n1),r.length>1&&r.sort(x||Zm),a.length>1&&a.sort(x||Zm)}function _(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:_,sort:m}}function i1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Qm,s.set(r,[c])):a>=l.length?(c=new Qm,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function r1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new mt};break;case"SpotLight":n={position:new X,direction:new X,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=n,n}}}function s1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let o1=0;function a1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function l1(s){const e=new r1,n=s1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new X);const a=new X,l=new $t,c=new $t;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,E=0,T=0,y=0,g=0,I=0,D=0,R=0,$=0,O=0,F=0;m.sort(a1);for(let P=0,A=m.length;P<A;P++){const z=m[P],oe=z.color,ee=z.intensity,ge=z.distance,_e=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=oe.r*ee,v+=oe.g*ee,x+=oe.b*ee;else if(z.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(z.sh.coefficients[pe],ee);F++}else if(z.isDirectionalLight){const pe=e.get(z);if(pe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const he=z.shadow,G=n.get(z);G.shadowIntensity=he.intensity,G.shadowBias=he.bias,G.shadowNormalBias=he.normalBias,G.shadowRadius=he.radius,G.shadowMapSize=he.mapSize,r.directionalShadow[M]=G,r.directionalShadowMap[M]=_e,r.directionalShadowMatrix[M]=z.shadow.matrix,I++}r.directional[M]=pe,M++}else if(z.isSpotLight){const pe=e.get(z);pe.position.setFromMatrixPosition(z.matrixWorld),pe.color.copy(oe).multiplyScalar(ee),pe.distance=ge,pe.coneCos=Math.cos(z.angle),pe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),pe.decay=z.decay,r.spot[T]=pe;const he=z.shadow;if(z.map&&(r.spotLightMap[$]=z.map,$++,he.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[T]=he.matrix,z.castShadow){const G=n.get(z);G.shadowIntensity=he.intensity,G.shadowBias=he.bias,G.shadowNormalBias=he.normalBias,G.shadowRadius=he.radius,G.shadowMapSize=he.mapSize,r.spotShadow[T]=G,r.spotShadowMap[T]=_e,R++}T++}else if(z.isRectAreaLight){const pe=e.get(z);pe.color.copy(oe).multiplyScalar(ee),pe.halfWidth.set(z.width*.5,0,0),pe.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=pe,y++}else if(z.isPointLight){const pe=e.get(z);if(pe.color.copy(z.color).multiplyScalar(z.intensity),pe.distance=z.distance,pe.decay=z.decay,z.castShadow){const he=z.shadow,G=n.get(z);G.shadowIntensity=he.intensity,G.shadowBias=he.bias,G.shadowNormalBias=he.normalBias,G.shadowRadius=he.radius,G.shadowMapSize=he.mapSize,G.shadowCameraNear=he.camera.near,G.shadowCameraFar=he.camera.far,r.pointShadow[E]=G,r.pointShadowMap[E]=_e,r.pointShadowMatrix[E]=z.shadow.matrix,D++}r.point[E]=pe,E++}else if(z.isHemisphereLight){const pe=e.get(z);pe.skyColor.copy(z.color).multiplyScalar(ee),pe.groundColor.copy(z.groundColor).multiplyScalar(ee),r.hemi[g]=pe,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==y||H.hemiLength!==g||H.numDirectionalShadows!==I||H.numPointShadows!==D||H.numSpotShadows!==R||H.numSpotMaps!==$||H.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+$-O,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,H.directionalLength=M,H.pointLength=E,H.spotLength=T,H.rectAreaLength=y,H.hemiLength=g,H.numDirectionalShadows=I,H.numPointShadows=D,H.numSpotShadows=R,H.numSpotMaps=$,H.numLightProbes=F,r.version=o1++)}function h(m,_){let v=0,x=0,M=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const D=m[g];if(D.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(D.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(D.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function Jm(s){const e=new l1(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function u1(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Jm(s),e.set(a,[d])):l>=c.length?(d=new Jm(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class c1 extends Nr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends Nr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d1=`void main() {
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
}`;function p1(s,e,n){let r=new Pd;const a=new pt,l=new pt,c=new Ht,d=new c1({depthPacking:l_}),h=new f1,m={},_=n.maxTextureSize,v={[as]:Kn,[Kn]:as,[Si]:Si},x=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:d1,fragmentShader:h1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new cn;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ke(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let g=this.type;this.render=function(O,F,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(Lr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=g!==Cr&&this.type===Cr,ge=g===Cr&&this.type!==Cr;for(let _e=0,pe=O.length;_e<pe;_e++){const he=O[_e],G=he.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const ve=G.getFrameExtents();if(a.multiply(ve),l.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ve.x),a.x=l.x*ve.x,G.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ve.y),a.y=l.y*ve.y,G.mapSize.y=l.y)),G.map===null||ee===!0||ge===!0){const k=this.type!==Cr?{minFilter:Zi,magFilter:Zi}:{};G.map!==null&&G.map.dispose(),G.map=new Qi(a.x,a.y,k),G.map.texture.name=he.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const me=G.getViewportCount();for(let k=0;k<me;k++){const fe=G.getViewport(k);c.set(l.x*fe.x,l.y*fe.y,l.x*fe.z,l.y*fe.w),oe.viewport(c),G.updateMatrices(he,k),r=G.getFrustum(),R(F,H,G.camera,he,this.type)}G.isPointLightShadow!==!0&&this.type===Cr&&I(G,H),G.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,z)};function I(O,F){const H=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qi(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,H,x,T,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,H,M,T,null)}function D(O,F,H,P){let A=null;const z=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)A=z;else if(A=H.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const oe=A.uuid,ee=F.uuid;let ge=m[oe];ge===void 0&&(ge={},m[oe]=ge);let _e=ge[ee];_e===void 0&&(_e=A.clone(),ge[ee]=_e,F.addEventListener("dispose",$)),A=_e}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Cr?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=s.properties.get(A);oe.light=H}return A}function R(O,F,H,P,A){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===Cr)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),ge=O.material;if(Array.isArray(ge)){const _e=ee.groups;for(let pe=0,he=_e.length;pe<he;pe++){const G=_e[pe],ve=ge[G.materialIndex];if(ve&&ve.visible){const me=D(O,ve,P,A);O.onBeforeShadow(s,O,F,H,ee,me,G),s.renderBufferDirect(H,null,ee,me,O,G),O.onAfterShadow(s,O,F,H,ee,me,G)}}}else if(ge.visible){const _e=D(O,ge,P,A);O.onBeforeShadow(s,O,F,H,ee,_e,null),s.renderBufferDirect(H,null,ee,_e,O,null),O.onAfterShadow(s,O,F,H,ee,_e,null)}}const oe=O.children;for(let ee=0,ge=oe.length;ee<ge;ee++)R(oe[ee],F,H,P,A)}function $(O){O.target.removeEventListener("dispose",$);for(const H in m){const P=m[H],A=O.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const m1={[Uf]:Nf,[Ff]:zf,[Of]:Bf,[Do]:kf,[Nf]:Uf,[zf]:Ff,[Bf]:Of,[kf]:Do};function g1(s,e){function n(){let B=!1;const Ce=new Ht;let se=null;const de=new Ht(0,0,0,0);return{setMask:function(Ie){se!==Ie&&!B&&(s.colorMask(Ie,Ie,Ie,Ie),se=Ie)},setLocked:function(Ie){B=Ie},setClear:function(Ie,Fe,st,te,tt){tt===!0&&(Ie*=te,Fe*=te,st*=te),Ce.set(Ie,Fe,st,te),de.equals(Ce)===!1&&(s.clearColor(Ie,Fe,st,te),de.copy(Ce))},reset:function(){B=!1,se=null,de.set(-1,0,0,0)}}}function r(){let B=!1,Ce=!1,se=null,de=null,Ie=null;return{setReversed:function(Fe){if(Ce!==Fe){const st=e.get("EXT_clip_control");Ce?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const te=Ie;Ie=null,this.setClear(te)}Ce=Fe},getReversed:function(){return Ce},setTest:function(Fe){Fe?be(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Fe){se!==Fe&&!B&&(s.depthMask(Fe),se=Fe)},setFunc:function(Fe){if(Ce&&(Fe=m1[Fe]),de!==Fe){switch(Fe){case Uf:s.depthFunc(s.NEVER);break;case Nf:s.depthFunc(s.ALWAYS);break;case Ff:s.depthFunc(s.LESS);break;case Do:s.depthFunc(s.LEQUAL);break;case Of:s.depthFunc(s.EQUAL);break;case kf:s.depthFunc(s.GEQUAL);break;case zf:s.depthFunc(s.GREATER);break;case Bf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Fe}},setLocked:function(Fe){B=Fe},setClear:function(Fe){Ie!==Fe&&(Ce&&(Fe=1-Fe),s.clearDepth(Fe),Ie=Fe)},reset:function(){B=!1,se=null,de=null,Ie=null,Ce=!1}}}function a(){let B=!1,Ce=null,se=null,de=null,Ie=null,Fe=null,st=null,te=null,tt=null;return{setTest:function(ot){B||(ot?be(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(ot){Ce!==ot&&!B&&(s.stencilMask(ot),Ce=ot)},setFunc:function(ot,Ot,xt){(se!==ot||de!==Ot||Ie!==xt)&&(s.stencilFunc(ot,Ot,xt),se=ot,de=Ot,Ie=xt)},setOp:function(ot,Ot,xt){(Fe!==ot||st!==Ot||te!==xt)&&(s.stencilOp(ot,Ot,xt),Fe=ot,st=Ot,te=xt)},setLocked:function(ot){B=ot},setClear:function(ot){tt!==ot&&(s.clearStencil(ot),tt=ot)},reset:function(){B=!1,Ce=null,se=null,de=null,Ie=null,Fe=null,st=null,te=null,tt=null}}}const l=new n,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,I=null,D=null,R=null,$=null,O=null,F=new mt(0,0,0),H=0,P=!1,A=null,z=null,oe=null,ee=null,ge=null;const _e=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,he=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(G)[1]),pe=he>=1):G.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),pe=he>=2);let ve=null,me={};const k=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),We=new Ht().fromArray(k),ie=new Ht().fromArray(fe);function xe(B,Ce,se,de){const Ie=new Uint8Array(4),Fe=s.createTexture();s.bindTexture(B,Fe),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<se;st++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ce+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Fe}const De={};De[s.TEXTURE_2D]=xe(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[s.TEXTURE_2D_ARRAY]=xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),be(s.DEPTH_TEST),c.setFunc(Do),Tt(!1),_t(rm),be(s.CULL_FACE),K(Lr);function be(B){_[B]!==!0&&(s.enable(B),_[B]=!0)}function Be(B){_[B]!==!1&&(s.disable(B),_[B]=!1)}function Xe(B,Ce){return v[B]!==Ce?(s.bindFramebuffer(B,Ce),v[B]=Ce,B===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),B===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function lt(B,Ce){let se=M,de=!1;if(B){se=x.get(Ce),se===void 0&&(se=[],x.set(Ce,se));const Ie=B.textures;if(se.length!==Ie.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Fe=0,st=Ie.length;Fe<st;Fe++)se[Fe]=s.COLOR_ATTACHMENT0+Fe;se.length=Ie.length,de=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,de=!0);de&&s.drawBuffers(se)}function Nt(B){return E!==B?(s.useProgram(B),E=B,!0):!1}const wt={[Us]:s.FUNC_ADD,[Bv]:s.FUNC_SUBTRACT,[Vv]:s.FUNC_REVERSE_SUBTRACT};wt[Hv]=s.MIN,wt[Gv]=s.MAX;const Vt={[Wv]:s.ZERO,[Xv]:s.ONE,[jv]:s.SRC_COLOR,[Df]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Kv]:s.DST_COLOR,[Yv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[If]:s.ONE_MINUS_SRC_ALPHA,[Zv]:s.ONE_MINUS_DST_COLOR,[$v]:s.ONE_MINUS_DST_ALPHA,[Jv]:s.CONSTANT_COLOR,[e_]:s.ONE_MINUS_CONSTANT_COLOR,[t_]:s.CONSTANT_ALPHA,[n_]:s.ONE_MINUS_CONSTANT_ALPHA};function K(B,Ce,se,de,Ie,Fe,st,te,tt,ot){if(B===Lr){T===!0&&(Be(s.BLEND),T=!1);return}if(T===!1&&(be(s.BLEND),T=!0),B!==zv){if(B!==y||ot!==P){if((g!==Us||R!==Us)&&(s.blendEquation(s.FUNC_ADD),g=Us,R=Us),ot)switch(B){case bo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.ONE,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}I=null,D=null,$=null,O=null,F.set(0,0,0),H=0,y=B,P=ot}return}Ie=Ie||Ce,Fe=Fe||se,st=st||de,(Ce!==g||Ie!==R)&&(s.blendEquationSeparate(wt[Ce],wt[Ie]),g=Ce,R=Ie),(se!==I||de!==D||Fe!==$||st!==O)&&(s.blendFuncSeparate(Vt[se],Vt[de],Vt[Fe],Vt[st]),I=se,D=de,$=Fe,O=st),(te.equals(F)===!1||tt!==H)&&(s.blendColor(te.r,te.g,te.b,tt),F.copy(te),H=tt),y=B,P=!1}function Tn(B,Ce){B.side===Si?Be(s.CULL_FACE):be(s.CULL_FACE);let se=B.side===Kn;Ce&&(se=!se),Tt(se),B.blending===bo&&B.transparent===!1?K(Lr):K(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);const de=B.stencilWrite;d.setTest(de),de&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),It(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(B){A!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),A=B)}function _t(B){B!==Ov?(be(s.CULL_FACE),B!==z&&(B===rm?s.cullFace(s.BACK):B===kv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),z=B}function at(B){B!==oe&&(pe&&s.lineWidth(B),oe=B)}function It(B,Ce,se){B?(be(s.POLYGON_OFFSET_FILL),(ee!==Ce||ge!==se)&&(s.polygonOffset(Ce,se),ee=Ce,ge=se)):Be(s.POLYGON_OFFSET_FILL)}function it(B){B?be(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function U(B){B===void 0&&(B=s.TEXTURE0+_e-1),ve!==B&&(s.activeTexture(B),ve=B)}function w(B,Ce,se){se===void 0&&(ve===null?se=s.TEXTURE0+_e-1:se=ve);let de=me[se];de===void 0&&(de={type:void 0,texture:void 0},me[se]=de),(de.type!==B||de.texture!==Ce)&&(ve!==se&&(s.activeTexture(se),ve=se),s.bindTexture(B,Ce||De[B]),de.type=B,de.texture=Ce)}function re(){const B=me[ve];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function b(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(B){We.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),We.copy(B))}function le(B){ie.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function ze(B,Ce){let se=m.get(Ce);se===void 0&&(se=new WeakMap,m.set(Ce,se));let de=se.get(B);de===void 0&&(de=s.getUniformBlockIndex(Ce,B.name),se.set(B,de))}function Ae(B,Ce){const de=m.get(Ce).get(B);h.get(Ce)!==de&&(s.uniformBlockBinding(Ce,de,B.__bindingPointIndex),h.set(Ce,de))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ve=null,me={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,I=null,D=null,R=null,$=null,O=null,F=new mt(0,0,0),H=0,P=!1,A=null,z=null,oe=null,ee=null,ge=null,We.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:be,disable:Be,bindFramebuffer:Xe,drawBuffers:lt,useProgram:Nt,setBlending:K,setMaterial:Tn,setFlipSided:Tt,setCullFace:_t,setLineWidth:at,setPolygonOffset:It,setScissorTest:it,activeTexture:U,bindTexture:w,unbindTexture:re,compressedTexImage2D:Se,compressedTexImage3D:Ee,texImage2D:Z,texImage3D:J,updateUBOMapping:ze,uniformBlockBinding:Ae,texStorage2D:q,texStorage3D:L,texSubImage2D:ye,texSubImage3D:Qe,compressedTexSubImage2D:Ve,compressedTexSubImage3D:b,scissor:Me,viewport:le,reset:rt}}function eg(s,e,n,r){const a=v1(r);switch(n){case Cg:return s*e;case bg:return s*e;case Pg:return s*e*2;case Lg:return s*e/a.components*a.byteLength;case Ad:return s*e/a.components*a.byteLength;case Dg:return s*e*2/a.components*a.byteLength;case Cd:return s*e*2/a.components*a.byteLength;case Rg:return s*e*3/a.components*a.byteLength;case Ki:return s*e*4/a.components*a.byteLength;case Rd:return s*e*4/a.components*a.byteLength;case ou:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lu:case uu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xf:case qf:return Math.max(s,16)*Math.max(e,8)/4;case Wf:case jf:return Math.max(s,8)*Math.max(e,8)/2;case Yf:case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ud:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cu:case fd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ig:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v1(s){switch(s){case Ur:case wg:return{byteLength:1,components:1};case Pa:case Tg:case Dr:return{byteLength:2,components:1};case wd:case Td:return{byteLength:2,components:4};case ks:case Ed:case br:return{byteLength:4,components:1};case Ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _1(s,e,n,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,w){return M?new OffscreenCanvas(U,w):pu("canvas")}function T(U,w,re){let Se=1;const Ee=it(U);if((Ee.width>re||Ee.height>re)&&(Se=re/Math.max(Ee.width,Ee.height)),Se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ye=Math.floor(Se*Ee.width),Qe=Math.floor(Se*Ee.height);v===void 0&&(v=E(ye,Qe));const Ve=w?E(ye,Qe):v;return Ve.width=ye,Ve.height=Qe,Ve.getContext("2d").drawImage(U,0,0,ye,Qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+ye+"x"+Qe+")."),Ve}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){s.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,w,re,Se,Ee=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ye=w;if(w===s.RED&&(re===s.FLOAT&&(ye=s.R32F),re===s.HALF_FLOAT&&(ye=s.R16F),re===s.UNSIGNED_BYTE&&(ye=s.R8)),w===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.R8UI),re===s.UNSIGNED_SHORT&&(ye=s.R16UI),re===s.UNSIGNED_INT&&(ye=s.R32UI),re===s.BYTE&&(ye=s.R8I),re===s.SHORT&&(ye=s.R16I),re===s.INT&&(ye=s.R32I)),w===s.RG&&(re===s.FLOAT&&(ye=s.RG32F),re===s.HALF_FLOAT&&(ye=s.RG16F),re===s.UNSIGNED_BYTE&&(ye=s.RG8)),w===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.RG8UI),re===s.UNSIGNED_SHORT&&(ye=s.RG16UI),re===s.UNSIGNED_INT&&(ye=s.RG32UI),re===s.BYTE&&(ye=s.RG8I),re===s.SHORT&&(ye=s.RG16I),re===s.INT&&(ye=s.RG32I)),w===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.RGB8UI),re===s.UNSIGNED_SHORT&&(ye=s.RGB16UI),re===s.UNSIGNED_INT&&(ye=s.RGB32UI),re===s.BYTE&&(ye=s.RGB8I),re===s.SHORT&&(ye=s.RGB16I),re===s.INT&&(ye=s.RGB32I)),w===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(ye=s.RGBA16UI),re===s.UNSIGNED_INT&&(ye=s.RGBA32UI),re===s.BYTE&&(ye=s.RGBA8I),re===s.SHORT&&(ye=s.RGBA16I),re===s.INT&&(ye=s.RGBA32I)),w===s.RGB&&re===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),w===s.RGBA){const Qe=Ee?Mu:Pt.getTransfer(Se);re===s.FLOAT&&(ye=s.RGBA32F),re===s.HALF_FLOAT&&(ye=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ye=Qe===Bt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function R(U,w){let re;return U?w===null||w===ks||w===No?re=s.DEPTH24_STENCIL8:w===br?re=s.DEPTH32F_STENCIL8:w===Pa&&(re=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ks||w===No?re=s.DEPTH_COMPONENT24:w===br?re=s.DEPTH_COMPONENT32F:w===Pa&&(re=s.DEPTH_COMPONENT16),re}function $(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Zi&&U.minFilter!==ur?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function O(U){const w=U.target;w.removeEventListener("dispose",O),H(w),w.isVideoTexture&&_.delete(w)}function F(U){const w=U.target;w.removeEventListener("dispose",F),A(w)}function H(U){const w=r.get(U);if(w.__webglInit===void 0)return;const re=U.source,Se=x.get(re);if(Se){const Ee=Se[w.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&P(U),Object.keys(Se).length===0&&x.delete(re)}r.remove(U)}function P(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const re=U.source,Se=x.get(re);delete Se[w.__cacheKey],c.memory.textures--}function A(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(w.__webglFramebuffer[Se]))for(let Ee=0;Ee<w.__webglFramebuffer[Se].length;Ee++)s.deleteFramebuffer(w.__webglFramebuffer[Se][Ee]);else s.deleteFramebuffer(w.__webglFramebuffer[Se]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Se])}else{if(Array.isArray(w.__webglFramebuffer))for(let Se=0;Se<w.__webglFramebuffer.length;Se++)s.deleteFramebuffer(w.__webglFramebuffer[Se]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Se=0;Se<w.__webglColorRenderbuffer.length;Se++)w.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Se]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const re=U.textures;for(let Se=0,Ee=re.length;Se<Ee;Se++){const ye=r.get(re[Se]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),c.memory.textures--),r.remove(re[Se])}r.remove(U)}let z=0;function oe(){z=0}function ee(){const U=z;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),z+=1,U}function ge(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function _e(U,w){const re=r.get(U);if(U.isVideoTexture&&at(U),U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){const Se=U.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(re,U,w);return}}n.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+w)}function pe(U,w){const re=r.get(U);if(U.version>0&&re.__version!==U.version){ie(re,U,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+w)}function he(U,w){const re=r.get(U);if(U.version>0&&re.__version!==U.version){ie(re,U,w);return}n.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+w)}function G(U,w){const re=r.get(U);if(U.version>0&&re.__version!==U.version){xe(re,U,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+w)}const ve={[Rr]:s.REPEAT,[Fs]:s.CLAMP_TO_EDGE,[Gf]:s.MIRRORED_REPEAT},me={[Zi]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[Nl]:s.NEAREST_MIPMAP_LINEAR,[ur]:s.LINEAR,[Zc]:s.LINEAR_MIPMAP_NEAREST,[Os]:s.LINEAR_MIPMAP_LINEAR},k={[c_]:s.NEVER,[g_]:s.ALWAYS,[f_]:s.LESS,[Ug]:s.LEQUAL,[d_]:s.EQUAL,[m_]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function fe(U,w){if(w.type===br&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ur||w.magFilter===Zc||w.magFilter===Nl||w.magFilter===Os||w.minFilter===ur||w.minFilter===Zc||w.minFilter===Nl||w.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ve[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ve[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ve[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,me[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,me[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Zi||w.minFilter!==Nl&&w.minFilter!==Os||w.type===br&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function We(U,w){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",O));const Se=w.source;let Ee=x.get(Se);Ee===void 0&&(Ee={},x.set(Se,Ee));const ye=ge(w);if(ye!==U.__cacheKey){Ee[ye]===void 0&&(Ee[ye]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,re=!0),Ee[ye].usedTimes++;const Qe=Ee[U.__cacheKey];Qe!==void 0&&(Ee[U.__cacheKey].usedTimes--,Qe.usedTimes===0&&P(w)),U.__cacheKey=ye,U.__webglTexture=Ee[ye].texture}return re}function ie(U,w,re){let Se=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Se=s.TEXTURE_3D);const Ee=We(U,w),ye=w.source;n.bindTexture(Se,U.__webglTexture,s.TEXTURE0+re);const Qe=r.get(ye);if(ye.version!==Qe.__version||Ee===!0){n.activeTexture(s.TEXTURE0+re);const Ve=Pt.getPrimaries(Pt.workingColorSpace),b=w.colorSpace===ss?null:Pt.getPrimaries(w.colorSpace),q=w.colorSpace===ss||Ve===b?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let L=T(w.image,!1,a.maxTextureSize);L=It(w,L);const Z=l.convert(w.format,w.colorSpace),J=l.convert(w.type);let Me=D(w.internalFormat,Z,J,w.colorSpace,w.isVideoTexture);fe(Se,w);let le;const ze=w.mipmaps,Ae=w.isVideoTexture!==!0,rt=Qe.__version===void 0||Ee===!0,B=ye.dataReady,Ce=$(w,L);if(w.isDepthTexture)Me=R(w.format===Fo,w.type),rt&&(Ae?n.texStorage2D(s.TEXTURE_2D,1,Me,L.width,L.height):n.texImage2D(s.TEXTURE_2D,0,Me,L.width,L.height,0,Z,J,null));else if(w.isDataTexture)if(ze.length>0){Ae&&rt&&n.texStorage2D(s.TEXTURE_2D,Ce,Me,ze[0].width,ze[0].height);for(let se=0,de=ze.length;se<de;se++)le=ze[se],Ae?B&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,le.width,le.height,Z,J,le.data):n.texImage2D(s.TEXTURE_2D,se,Me,le.width,le.height,0,Z,J,le.data);w.generateMipmaps=!1}else Ae?(rt&&n.texStorage2D(s.TEXTURE_2D,Ce,Me,L.width,L.height),B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,L.width,L.height,Z,J,L.data)):n.texImage2D(s.TEXTURE_2D,0,Me,L.width,L.height,0,Z,J,L.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ae&&rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Me,ze[0].width,ze[0].height,L.depth);for(let se=0,de=ze.length;se<de;se++)if(le=ze[se],w.format!==Ki)if(Z!==null)if(Ae){if(B)if(w.layerUpdates.size>0){const Ie=eg(le.width,le.height,w.format,w.type);for(const Fe of w.layerUpdates){const st=le.data.subarray(Fe*Ie/le.data.BYTES_PER_ELEMENT,(Fe+1)*Ie/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Fe,le.width,le.height,1,Z,st)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,le.width,le.height,L.depth,Z,le.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Me,le.width,le.height,L.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?B&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,le.width,le.height,L.depth,Z,J,le.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,Me,le.width,le.height,L.depth,0,Z,J,le.data)}else{Ae&&rt&&n.texStorage2D(s.TEXTURE_2D,Ce,Me,ze[0].width,ze[0].height);for(let se=0,de=ze.length;se<de;se++)le=ze[se],w.format!==Ki?Z!==null?Ae?B&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,le.width,le.height,Z,le.data):n.compressedTexImage2D(s.TEXTURE_2D,se,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?B&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,le.width,le.height,Z,J,le.data):n.texImage2D(s.TEXTURE_2D,se,Me,le.width,le.height,0,Z,J,le.data)}else if(w.isDataArrayTexture)if(Ae){if(rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Me,L.width,L.height,L.depth),B)if(w.layerUpdates.size>0){const se=eg(L.width,L.height,w.format,w.type);for(const de of w.layerUpdates){const Ie=L.data.subarray(de*se/L.data.BYTES_PER_ELEMENT,(de+1)*se/L.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,L.width,L.height,1,Z,J,Ie)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,Z,J,L.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,L.width,L.height,L.depth,0,Z,J,L.data);else if(w.isData3DTexture)Ae?(rt&&n.texStorage3D(s.TEXTURE_3D,Ce,Me,L.width,L.height,L.depth),B&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,Z,J,L.data)):n.texImage3D(s.TEXTURE_3D,0,Me,L.width,L.height,L.depth,0,Z,J,L.data);else if(w.isFramebufferTexture){if(rt)if(Ae)n.texStorage2D(s.TEXTURE_2D,Ce,Me,L.width,L.height);else{let se=L.width,de=L.height;for(let Ie=0;Ie<Ce;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,Me,se,de,0,Z,J,null),se>>=1,de>>=1}}else if(ze.length>0){if(Ae&&rt){const se=it(ze[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Me,se.width,se.height)}for(let se=0,de=ze.length;se<de;se++)le=ze[se],Ae?B&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Z,J,le):n.texImage2D(s.TEXTURE_2D,se,Me,Z,J,le);w.generateMipmaps=!1}else if(Ae){if(rt){const se=it(L);n.texStorage2D(s.TEXTURE_2D,Ce,Me,se.width,se.height)}B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Z,J,L)}else n.texImage2D(s.TEXTURE_2D,0,Me,Z,J,L);y(w)&&g(Se),Qe.__version=ye.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function xe(U,w,re){if(w.image.length!==6)return;const Se=We(U,w),Ee=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+re);const ye=r.get(Ee);if(Ee.version!==ye.__version||Se===!0){n.activeTexture(s.TEXTURE0+re);const Qe=Pt.getPrimaries(Pt.workingColorSpace),Ve=w.colorSpace===ss?null:Pt.getPrimaries(w.colorSpace),b=w.colorSpace===ss||Qe===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);const q=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let de=0;de<6;de++)!q&&!L?Z[de]=T(w.image[de],!0,a.maxCubemapSize):Z[de]=L?w.image[de].image:w.image[de],Z[de]=It(w,Z[de]);const J=Z[0],Me=l.convert(w.format,w.colorSpace),le=l.convert(w.type),ze=D(w.internalFormat,Me,le,w.colorSpace),Ae=w.isVideoTexture!==!0,rt=ye.__version===void 0||Se===!0,B=Ee.dataReady;let Ce=$(w,J);fe(s.TEXTURE_CUBE_MAP,w);let se;if(q){Ae&&rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ze,J.width,J.height);for(let de=0;de<6;de++){se=Z[de].mipmaps;for(let Ie=0;Ie<se.length;Ie++){const Fe=se[Ie];w.format!==Ki?Me!==null?Ae?B&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Fe.width,Fe.height,Me,Fe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,ze,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Fe.width,Fe.height,Me,le,Fe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,ze,Fe.width,Fe.height,0,Me,le,Fe.data)}}}else{if(se=w.mipmaps,Ae&&rt){se.length>0&&Ce++;const de=it(Z[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ze,de.width,de.height)}for(let de=0;de<6;de++)if(L){Ae?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Z[de].width,Z[de].height,Me,le,Z[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ze,Z[de].width,Z[de].height,0,Me,le,Z[de].data);for(let Ie=0;Ie<se.length;Ie++){const st=se[Ie].image[de].image;Ae?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,st.width,st.height,Me,le,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,ze,st.width,st.height,0,Me,le,st.data)}}else{Ae?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Me,le,Z[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ze,Me,le,Z[de]);for(let Ie=0;Ie<se.length;Ie++){const Fe=se[Ie];Ae?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Me,le,Fe.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,ze,Me,le,Fe.image[de])}}}y(w)&&g(s.TEXTURE_CUBE_MAP),ye.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function De(U,w,re,Se,Ee,ye){const Qe=l.convert(re.format,re.colorSpace),Ve=l.convert(re.type),b=D(re.internalFormat,Qe,Ve,re.colorSpace),q=r.get(w),L=r.get(re);if(L.__renderTarget=w,!q.__hasExternalTextures){const Z=Math.max(1,w.width>>ye),J=Math.max(1,w.height>>ye);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?n.texImage3D(Ee,ye,b,Z,J,w.depth,0,Qe,Ve,null):n.texImage2D(Ee,ye,b,Z,J,0,Qe,Ve,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),_t(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,Ee,L.__webglTexture,0,Tt(w)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,Ee,L.__webglTexture,ye),n.bindFramebuffer(s.FRAMEBUFFER,null)}function be(U,w,re){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const Se=w.depthTexture,Ee=Se&&Se.isDepthTexture?Se.type:null,ye=R(w.stencilBuffer,Ee),Qe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=Tt(w);_t(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve,ye,w.width,w.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,ye,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ye,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Qe,s.RENDERBUFFER,U)}else{const Se=w.textures;for(let Ee=0;Ee<Se.length;Ee++){const ye=Se[Ee],Qe=l.convert(ye.format,ye.colorSpace),Ve=l.convert(ye.type),b=D(ye.internalFormat,Qe,Ve,ye.colorSpace),q=Tt(w);re&&_t(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,b,w.width,w.height):_t(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,b,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,b,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(w.depthTexture);Se.__renderTarget=w,(!Se.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),_e(w.depthTexture,0);const Ee=Se.__webglTexture,ye=Tt(w);if(w.depthTexture.format===Po)_t(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(w.depthTexture.format===Fo)_t(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Xe(U){const w=r.get(U),re=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const Se=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Se){const Ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Se.removeEventListener("dispose",Ee)};Se.addEventListener("dispose",Ee),w.__depthDisposeCallback=Ee}w.__boundDepthTexture=Se}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Be(w.__webglFramebuffer,U)}else if(re){w.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Se]),w.__webglDepthbuffer[Se]===void 0)w.__webglDepthbuffer[Se]=s.createRenderbuffer(),be(w.__webglDepthbuffer[Se],U,!1);else{const Ee=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,ye)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),be(w.__webglDepthbuffer,U,!1);else{const Se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Ee)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(U,w,re){const Se=r.get(U);w!==void 0&&De(Se.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Xe(U)}function Nt(U){const w=U.texture,re=r.get(U),Se=r.get(w);U.addEventListener("dispose",F);const Ee=U.textures,ye=U.isWebGLCubeRenderTarget===!0,Qe=Ee.length>1;if(Qe||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=w.version,c.memory.textures++),ye){re.__webglFramebuffer=[];for(let Ve=0;Ve<6;Ve++)if(w.mipmaps&&w.mipmaps.length>0){re.__webglFramebuffer[Ve]=[];for(let b=0;b<w.mipmaps.length;b++)re.__webglFramebuffer[Ve][b]=s.createFramebuffer()}else re.__webglFramebuffer[Ve]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)re.__webglFramebuffer[Ve]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Qe)for(let Ve=0,b=Ee.length;Ve<b;Ve++){const q=r.get(Ee[Ve]);q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&_t(U)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ve=0;Ve<Ee.length;Ve++){const b=Ee[Ve];re.__webglColorRenderbuffer[Ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Ve]);const q=l.convert(b.format,b.colorSpace),L=l.convert(b.type),Z=D(b.internalFormat,q,L,b.colorSpace,U.isXRRenderTarget===!0),J=Tt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,Z,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,re.__webglColorRenderbuffer[Ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),be(re.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){n.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),fe(s.TEXTURE_CUBE_MAP,w);for(let Ve=0;Ve<6;Ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let b=0;b<w.mipmaps.length;b++)De(re.__webglFramebuffer[Ve][b],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,b);else De(re.__webglFramebuffer[Ve],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0);y(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Qe){for(let Ve=0,b=Ee.length;Ve<b;Ve++){const q=Ee[Ve],L=r.get(q);n.bindTexture(s.TEXTURE_2D,L.__webglTexture),fe(s.TEXTURE_2D,q),De(re.__webglFramebuffer,U,q,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,0),y(q)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ve=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ve=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ve,Se.__webglTexture),fe(Ve,w),w.mipmaps&&w.mipmaps.length>0)for(let b=0;b<w.mipmaps.length;b++)De(re.__webglFramebuffer[b],U,w,s.COLOR_ATTACHMENT0,Ve,b);else De(re.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,Ve,0);y(w)&&g(Ve),n.unbindTexture()}U.depthBuffer&&Xe(U)}function wt(U){const w=U.textures;for(let re=0,Se=w.length;re<Se;re++){const Ee=w[re];if(y(Ee)){const ye=I(U),Qe=r.get(Ee).__webglTexture;n.bindTexture(ye,Qe),g(ye),n.unbindTexture()}}}const Vt=[],K=[];function Tn(U){if(U.samples>0){if(_t(U)===!1){const w=U.textures,re=U.width,Se=U.height;let Ee=s.COLOR_BUFFER_BIT;const ye=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Qe=r.get(U),Ve=w.length>1;if(Ve)for(let b=0;b<w.length;b++)n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+b,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+b,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let b=0;b<w.length;b++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[b]);const q=r.get(w[b]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,q,0)}s.blitFramebuffer(0,0,re,Se,0,0,re,Se,Ee,s.NEAREST),h===!0&&(Vt.length=0,K.length=0,Vt.push(s.COLOR_ATTACHMENT0+b),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Vt.push(ye),K.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,K)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ve)for(let b=0;b<w.length;b++){n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+b,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[b]);const q=r.get(w[b]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+b,s.TEXTURE_2D,q,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Tt(U){return Math.min(a.maxSamples,U.samples)}function _t(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(U){const w=c.render.frame;_.get(U)!==w&&(_.set(U,w),U.update())}function It(U,w){const re=U.colorSpace,Se=U.format,Ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==zo&&re!==ss&&(Pt.getTransfer(re)===Bt?(Se!==Ki||Ee!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),w}function it(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=_e,this.setTexture2DArray=pe,this.setTexture3D=he,this.setTextureCube=G,this.rebindTextures=lt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=_t}function x1(s,e){function n(r,a=ss){let l;const c=Pt.getTransfer(a);if(r===Ur)return s.UNSIGNED_BYTE;if(r===wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ag)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===wg)return s.BYTE;if(r===Tg)return s.SHORT;if(r===Pa)return s.UNSIGNED_SHORT;if(r===Ed)return s.INT;if(r===ks)return s.UNSIGNED_INT;if(r===br)return s.FLOAT;if(r===Dr)return s.HALF_FLOAT;if(r===Cg)return s.ALPHA;if(r===Rg)return s.RGB;if(r===Ki)return s.RGBA;if(r===bg)return s.LUMINANCE;if(r===Pg)return s.LUMINANCE_ALPHA;if(r===Po)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===Lg)return s.RED;if(r===Ad)return s.RED_INTEGER;if(r===Dg)return s.RG;if(r===Cd)return s.RG_INTEGER;if(r===Rd)return s.RGBA_INTEGER;if(r===ou||r===au||r===lu||r===uu)if(c===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ou)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ou)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===au)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wf||r===Xf||r===jf||r===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Wf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf||r===$f||r===Kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Yf||r===$f)return c===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Kf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zf||r===Qf||r===Jf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===ud||r===cd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Zf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===td)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===id)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ad)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ld)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ud)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cu||r===fd||r===dd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cu)return c===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ig||r===hd||r===pd||r===md)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===cu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===md)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class y1 extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sn extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new sn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const S1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Zn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wn({vertexShader:S1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ke(new Vn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Bo{constructor(e,n){super();const r=this;let a=null,l=1,c=null,d="local-floor",h=1,m=null,_=null,v=null,x=null,M=null,E=null;const T=new w1,y=n.getContextAttributes();let g=null,I=null;const D=[],R=[],$=new pt;let O=null;const F=new ci;F.viewport=new Ht;const H=new ci;H.viewport=new Ht;const P=[F,H],A=new y1;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=D[ie];return xe===void 0&&(xe=new Cf,D[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=D[ie];return xe===void 0&&(xe=new Cf,D[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=D[ie];return xe===void 0&&(xe=new Cf,D[ie]=xe),xe.getHandSpace()};function ee(ie){const xe=R.indexOf(ie.inputSource);if(xe===-1)return;const De=D[xe];De!==void 0&&(De.update(ie.inputSource,ie.frame,m||c),De.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ge(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ge),a.removeEventListener("inputsourceschange",_e);for(let ie=0;ie<D.length;ie++){const xe=R[ie];xe!==null&&(R[ie]=null,D[ie].disconnect(xe))}z=null,oe=null,T.reset(),e.setRenderTarget(g),M=null,x=null,v=null,a=null,I=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ge),a.addEventListener("inputsourceschange",_e),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,xe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Qi(M.framebufferWidth,M.framebufferHeight,{format:Ki,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let xe=null,De=null,be=null;y.depth&&(be=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=y.stencil?Fo:Po,De=y.stencil?No:ks);const Be={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Be),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Qi(x.textureWidth,x.textureHeight,{format:Ki,type:Ur,depthTexture:new jg(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),We.setContext(a),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function _e(ie){for(let xe=0;xe<ie.removed.length;xe++){const De=ie.removed[xe],be=R.indexOf(De);be>=0&&(R[be]=null,D[be].disconnect(De))}for(let xe=0;xe<ie.added.length;xe++){const De=ie.added[xe];let be=R.indexOf(De);if(be===-1){for(let Xe=0;Xe<D.length;Xe++)if(Xe>=R.length){R.push(De),be=Xe;break}else if(R[Xe]===null){R[Xe]=De,be=Xe;break}if(be===-1)break}const Be=D[be];Be&&Be.connect(De)}}const pe=new X,he=new X;function G(ie,xe,De){pe.setFromMatrixPosition(xe.matrixWorld),he.setFromMatrixPosition(De.matrixWorld);const be=pe.distanceTo(he),Be=xe.projectionMatrix.elements,Xe=De.projectionMatrix.elements,lt=Be[14]/(Be[10]-1),Nt=Be[14]/(Be[10]+1),wt=(Be[9]+1)/Be[5],Vt=(Be[9]-1)/Be[5],K=(Be[8]-1)/Be[0],Tn=(Xe[8]+1)/Xe[0],Tt=lt*K,_t=lt*Tn,at=be/(-K+Tn),It=at*-K;if(xe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(It),ie.translateZ(at),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Be[10]===-1)ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const it=lt+at,U=Nt+at,w=Tt-It,re=_t+(be-It),Se=wt*Nt/U*it,Ee=Vt*Nt/U*it;ie.projectionMatrix.makePerspective(w,re,Se,Ee,it,U),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ve(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let xe=ie.near,De=ie.far;T.texture!==null&&(T.depthNear>0&&(xe=T.depthNear),T.depthFar>0&&(De=T.depthFar)),A.near=H.near=F.near=xe,A.far=H.far=F.far=De,(z!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,oe=A.far),F.layers.mask=ie.layers.mask|2,H.layers.mask=ie.layers.mask|4,A.layers.mask=F.layers.mask|H.layers.mask;const be=ie.parent,Be=A.cameras;ve(A,be);for(let Xe=0;Xe<Be.length;Xe++)ve(Be[Xe],be);Be.length===2?G(A,F,H):A.projectionMatrix.copy(F.projectionMatrix),me(ie,A,be)};function me(ie,xe,De){De===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(De.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=hu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(ie){h=ie,x!==null&&(x.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let k=null;function fe(ie,xe){if(_=xe.getViewerPose(m||c),E=xe,_!==null){const De=_.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let be=!1;De.length!==A.cameras.length&&(A.cameras.length=0,be=!0);for(let Xe=0;Xe<De.length;Xe++){const lt=De[Xe];let Nt=null;if(M!==null)Nt=M.getViewport(lt);else{const Vt=v.getViewSubImage(x,lt);Nt=Vt.viewport,Xe===0&&(e.setRenderTargetTextures(I,Vt.colorTexture,x.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(I))}let wt=P[Xe];wt===void 0&&(wt=new ci,wt.layers.enable(Xe),wt.viewport=new Ht,P[Xe]=wt),wt.matrix.fromArray(lt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(lt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Xe===0&&(A.matrix.copy(wt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),be===!0&&A.cameras.push(wt)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Xe=v.getDepthInformation(De[0]);Xe&&Xe.isValid&&Xe.texture&&T.init(e,Xe,a.renderState)}}for(let De=0;De<D.length;De++){const be=R[De],Be=D[De];be!==null&&Be!==void 0&&Be.update(be,xe,m||c)}k&&k(ie,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const We=new Xg;We.setAnimationLoop(fe),this.setAnimationLoop=function(ie){k=ie},this.dispose=function(){}}}const Ls=new Ui,A1=new $t;function C1(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Hg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,I,D,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),v(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,R)):g.isMeshMatcapMaterial?(l(y,g),E(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),T(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,I,D):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,R=I.envMapRotation;D&&(y.envMap.value=D,Ls.copy(R),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),y.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Ls)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,I,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=D*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const I=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function R1(s,e,n,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,D){const R=D.program;r.uniformBlockBinding(I,R)}function m(I,D){let R=a[I.id];R===void 0&&(E(I),R=_(I),a[I.id]=R,I.addEventListener("dispose",y));const $=D.program;r.updateUBOMapping(I,$);const O=e.render.frame;l[I.id]!==O&&(x(I),l[I.id]=O)}function _(I){const D=v();I.__bindingPointIndex=D;const R=s.createBuffer(),$=I.__size,O=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,$,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function v(){for(let I=0;I<d;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=a[I.id],R=I.uniforms,$=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,F=R.length;O<F;O++){const H=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,A=H.length;P<A;P++){const z=H[P];if(M(z,O,P,$)===!0){const oe=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let ge=0;for(let _e=0;_e<ee.length;_e++){const pe=ee[_e],he=T(pe);typeof pe=="number"||typeof pe=="boolean"?(z.__data[0]=pe,s.bufferSubData(s.UNIFORM_BUFFER,oe+ge,z.__data)):pe.isMatrix3?(z.__data[0]=pe.elements[0],z.__data[1]=pe.elements[1],z.__data[2]=pe.elements[2],z.__data[3]=0,z.__data[4]=pe.elements[3],z.__data[5]=pe.elements[4],z.__data[6]=pe.elements[5],z.__data[7]=0,z.__data[8]=pe.elements[6],z.__data[9]=pe.elements[7],z.__data[10]=pe.elements[8],z.__data[11]=0):(pe.toArray(z.__data,ge),ge+=he.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(I,D,R,$){const O=I.value,F=D+"_"+R;if($[F]===void 0)return typeof O=="number"||typeof O=="boolean"?$[F]=O:$[F]=O.clone(),!0;{const H=$[F];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return $[F]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function E(I){const D=I.uniforms;let R=0;const $=16;for(let F=0,H=D.length;F<H;F++){const P=Array.isArray(D[F])?D[F]:[D[F]];for(let A=0,z=P.length;A<z;A++){const oe=P[A],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let ge=0,_e=ee.length;ge<_e;ge++){const pe=ee[ge],he=T(pe),G=R%$,ve=G%he.boundary,me=G+ve;R+=ve,me!==0&&$-me<he.storage&&(R+=$-me),oe.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=he.storage}}}const O=R%$;return O>0&&(R+=$-O),I.__size=R,I.__cache={},this}function T(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function y(I){const D=I.target;D.removeEventListener("dispose",y);const R=c.indexOf(D.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);c=[],a={},l={}}return{bind:h,update:m,dispose:g}}class b1{constructor(e={}){const{canvas:n=__(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ii,this.toneMapping=os,this.toneMappingExposure=1;const R=this;let $=!1,O=0,F=0,H=null,P=-1,A=null;const z=new Ht,oe=new Ht;let ee=null;const ge=new mt(0);let _e=0,pe=n.width,he=n.height,G=1,ve=null,me=null;const k=new Ht(0,0,pe,he),fe=new Ht(0,0,pe,he);let We=!1;const ie=new Pd;let xe=!1,De=!1;const be=new $t,Be=new $t,Xe=new X,lt=new Ht,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Vt(){return H===null?G:1}let K=r;function Tn(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Md}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),K===null){const j="webgl2";if(K=Tn(j,C),K===null)throw Tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Tt,_t,at,It,it,U,w,re,Se,Ee,ye,Qe,Ve,b,q,L,Z,J,Me,le,ze,Ae,rt,B;function Ce(){Tt=new UM(K),Tt.init(),Ae=new x1(K,Tt),_t=new RM(K,Tt,e,Ae),at=new g1(K,Tt),_t.reverseDepthBuffer&&x&&at.buffers.depth.setReversed(!0),It=new OM(K),it=new t1,U=new _1(K,Tt,at,it,_t,Ae,It),w=new PM(R),re=new IM(R),Se=new W_(K),rt=new AM(K,Se),Ee=new NM(K,Se,It,rt),ye=new zM(K,Ee,Se,It),Me=new kM(K,_t,U),L=new bM(it),Qe=new e1(R,w,re,Tt,_t,rt,L),Ve=new C1(R,it),b=new i1,q=new u1(Tt),J=new TM(R,w,re,at,ye,M,h),Z=new p1(R,ye,_t),B=new R1(K,It,_t,at),le=new CM(K,Tt,It),ze=new FM(K,Tt,It),It.programs=Qe.programs,R.capabilities=_t,R.extensions=Tt,R.properties=it,R.renderLists=b,R.shadowMap=Z,R.state=at,R.info=It}Ce();const se=new T1(R,K);this.xr=se,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=Tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(pe,he,!1))},this.getSize=function(C){return C.set(pe,he)},this.setSize=function(C,j,ae=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=C,he=j,n.width=Math.floor(C*G),n.height=Math.floor(j*G),ae===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(pe*G,he*G).floor()},this.setDrawingBufferSize=function(C,j,ae){pe=C,he=j,G=ae,n.width=Math.floor(C*ae),n.height=Math.floor(j*ae),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,j,ae,ue){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,j,ae,ue),at.viewport(z.copy(k).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,j,ae,ue){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,j,ae,ue),at.scissor(oe.copy(fe).multiplyScalar(G).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(C){at.setScissorTest(We=C)},this.setOpaqueSort=function(C){ve=C},this.setTransparentSort=function(C){me=C},this.getClearColor=function(C){return C.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(C=!0,j=!0,ae=!0){let ue=0;if(C){let Y=!1;if(H!==null){const Ue=H.texture.format;Y=Ue===Rd||Ue===Cd||Ue===Ad}if(Y){const Ue=H.texture.type,Pe=Ue===Ur||Ue===ks||Ue===Pa||Ue===No||Ue===wd||Ue===Td,Ke=J.getClearColor(),qe=J.getClearAlpha(),ut=Ke.r,ct=Ke.g,Ze=Ke.b;Pe?(E[0]=ut,E[1]=ct,E[2]=Ze,E[3]=qe,K.clearBufferuiv(K.COLOR,0,E)):(T[0]=ut,T[1]=ct,T[2]=Ze,T[3]=qe,K.clearBufferiv(K.COLOR,0,T))}else ue|=K.COLOR_BUFFER_BIT}j&&(ue|=K.DEPTH_BUFFER_BIT),ae&&(ue|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),b.dispose(),q.dispose(),it.dispose(),w.dispose(),re.dispose(),ye.dispose(),rt.dispose(),B.dispose(),Qe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Qn),se.removeEventListener("sessionend",An),Hn.stop()};function de(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const C=It.autoReset,j=Z.enabled,ae=Z.autoUpdate,ue=Z.needsUpdate,Y=Z.type;Ce(),It.autoReset=C,Z.enabled=j,Z.autoUpdate=ae,Z.needsUpdate=ue,Z.type=Y}function Fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const j=C.target;j.removeEventListener("dispose",st),te(j)}function te(C){tt(C),it.remove(C)}function tt(C){const j=it.get(C).programs;j!==void 0&&(j.forEach(function(ae){Qe.releaseProgram(ae)}),C.isShaderMaterial&&Qe.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ae,ue,Y,Ue){j===null&&(j=Nt);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ke=ls(C,j,ae,ue,Y);at.setMaterial(ue,Pe);let qe=ae.index,ut=1;if(ue.wireframe===!0){if(qe=Ee.getWireframeAttribute(ae),qe===void 0)return;ut=2}const ct=ae.drawRange,Ze=ae.attributes.position;let Mt=ct.start*ut,bt=(ct.start+ct.count)*ut;Ue!==null&&(Mt=Math.max(Mt,Ue.start*ut),bt=Math.min(bt,(Ue.start+Ue.count)*ut)),qe!==null?(Mt=Math.max(Mt,0),bt=Math.min(bt,qe.count)):Ze!=null&&(Mt=Math.max(Mt,0),bt=Math.min(bt,Ze.count));const St=bt-Mt;if(St<0||St===1/0)return;rt.setup(Y,ue,Ke,ae,qe);let dn,vt=le;if(qe!==null&&(dn=Se.get(qe),vt=ze,vt.setIndex(dn)),Y.isMesh)ue.wireframe===!0?(at.setLineWidth(ue.wireframeLinewidth*Vt()),vt.setMode(K.LINES)):vt.setMode(K.TRIANGLES);else if(Y.isLine){let Je=ue.linewidth;Je===void 0&&(Je=1),at.setLineWidth(Je*Vt()),Y.isLineSegments?vt.setMode(K.LINES):Y.isLineLoop?vt.setMode(K.LINE_LOOP):vt.setMode(K.LINE_STRIP)}else Y.isPoints?vt.setMode(K.POINTS):Y.isSprite&&vt.setMode(K.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Je=Y._multiDrawStarts,Dn=Y._multiDrawCounts,Ct=Y._multiDrawCount,hn=qe?Se.get(qe).bytesPerElement:1,Jn=it.get(ue).currentProgram.getUniforms();for(let Jt=0;Jt<Ct;Jt++)Jn.setValue(K,"_gl_DrawID",Jt),vt.render(Je[Jt]/hn,Dn[Jt])}else if(Y.isInstancedMesh)vt.renderInstances(Mt,St,Y.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Dn=Math.min(ae.instanceCount,Je);vt.renderInstances(Mt,St,Dn)}else vt.render(Mt,St)};function ot(C,j,ae){C.transparent===!0&&C.side===Si&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,di(C,j,ae),C.side=as,C.needsUpdate=!0,di(C,j,ae),C.side=Si):di(C,j,ae)}this.compile=function(C,j,ae=null){ae===null&&(ae=C),g=q.get(ae),g.init(j),D.push(g),ae.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),C!==ae&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ue=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ue=Y.material;if(Ue)if(Array.isArray(Ue))for(let Pe=0;Pe<Ue.length;Pe++){const Ke=Ue[Pe];ot(Ke,ae,Y),ue.add(Ke)}else ot(Ue,ae,Y),ue.add(Ue)}),D.pop(),g=null,ue},this.compileAsync=function(C,j,ae=null){const ue=this.compile(C,j,ae);return new Promise(Y=>{function Ue(){if(ue.forEach(function(Pe){it.get(Pe).currentProgram.isReady()&&ue.delete(Pe)}),ue.size===0){Y(C);return}setTimeout(Ue,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ot=null;function xt(C){Ot&&Ot(C)}function Qn(){Hn.stop()}function An(){Hn.start()}const Hn=new Xg;Hn.setAnimationLoop(xt),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(C){Ot=C,se.setAnimationLoop(C),C===null?Hn.stop():Hn.start()},se.addEventListener("sessionstart",Qn),se.addEventListener("sessionend",An),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,H),g=q.get(C,D.length),g.init(j),D.push(g),Be.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ie.setFromProjectionMatrix(Be),De=this.localClippingEnabled,xe=L.init(this.clippingPlanes,De),y=b.get(C,I.length),y.init(),I.push(y),se.enabled===!0&&se.isPresenting===!0){const Ue=R.xr.getDepthSensingMesh();Ue!==null&&an(Ue,j,-1/0,R.sortObjects)}an(C,j,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ve,me),wt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,wt&&J.addToRenderList(y,C),this.info.render.frame++,xe===!0&&L.beginShadows();const ae=g.state.shadowsArray;Z.render(ae,C,j),xe===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=y.opaque,Y=y.transmissive;if(g.setupLights(),j.isArrayCamera){const Ue=j.cameras;if(Y.length>0)for(let Pe=0,Ke=Ue.length;Pe<Ke;Pe++){const qe=Ue[Pe];jt(ue,Y,C,qe)}wt&&J.render(C);for(let Pe=0,Ke=Ue.length;Pe<Ke;Pe++){const qe=Ue[Pe];Cn(y,C,qe,qe.viewport)}}else Y.length>0&&jt(ue,Y,C,j),wt&&J.render(C),Cn(y,C,j);H!==null&&(U.updateMultisampleRenderTarget(H),U.updateRenderTargetMipmap(H)),C.isScene===!0&&C.onAfterRender(R,C,j),rt.resetDefaultState(),P=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],xe===!0&&L.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function an(C,j,ae,ue){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){ue&&lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Be);const Pe=ye.update(C),Ke=C.material;Ke.visible&&y.push(C,Pe,Ke,ae,lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ie.intersectsObject(C))){const Pe=ye.update(C),Ke=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),lt.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),lt.copy(Pe.boundingSphere.center)),lt.applyMatrix4(C.matrixWorld).applyMatrix4(Be)),Array.isArray(Ke)){const qe=Pe.groups;for(let ut=0,ct=qe.length;ut<ct;ut++){const Ze=qe[ut],Mt=Ke[Ze.materialIndex];Mt&&Mt.visible&&y.push(C,Pe,Mt,ae,lt.z,Ze)}}else Ke.visible&&y.push(C,Pe,Ke,ae,lt.z,null)}}const Ue=C.children;for(let Pe=0,Ke=Ue.length;Pe<Ke;Pe++)an(Ue[Pe],j,ae,ue)}function Cn(C,j,ae,ue){const Y=C.opaque,Ue=C.transmissive,Pe=C.transparent;g.setupLightsView(ae),xe===!0&&L.setGlobalState(R.clippingPlanes,ae),ue&&at.viewport(z.copy(ue)),Y.length>0&&Rn(Y,j,ae),Ue.length>0&&Rn(Ue,j,ae),Pe.length>0&&Rn(Pe,j,ae),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function jt(C,j,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ue.id]===void 0&&(g.state.transmissionRenderTarget[ue.id]=new Qi(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?Dr:Ur,minFilter:Os,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ue=g.state.transmissionRenderTarget[ue.id],Pe=ue.viewport||z;Ue.setSize(Pe.z,Pe.w);const Ke=R.getRenderTarget();R.setRenderTarget(Ue),R.getClearColor(ge),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),wt&&J.render(ae);const qe=R.toneMapping;R.toneMapping=os;const ut=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),g.setupLightsView(ue),xe===!0&&L.setGlobalState(R.clippingPlanes,ue),Rn(C,ae,ue),U.updateMultisampleRenderTarget(Ue),U.updateRenderTargetMipmap(Ue),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ze=0,Mt=j.length;Ze<Mt;Ze++){const bt=j[Ze],St=bt.object,dn=bt.geometry,vt=bt.material,Je=bt.group;if(vt.side===Si&&St.layers.test(ue.layers)){const Dn=vt.side;vt.side=Kn,vt.needsUpdate=!0,fn(St,ae,ue,dn,vt,Je),vt.side=Dn,vt.needsUpdate=!0,ct=!0}}ct===!0&&(U.updateMultisampleRenderTarget(Ue),U.updateRenderTargetMipmap(Ue))}R.setRenderTarget(Ke),R.setClearColor(ge,_e),ut!==void 0&&(ue.viewport=ut),R.toneMapping=qe}function Rn(C,j,ae){const ue=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Ue=C.length;Y<Ue;Y++){const Pe=C[Y],Ke=Pe.object,qe=Pe.geometry,ut=ue===null?Pe.material:ue,ct=Pe.group;Ke.layers.test(ae.layers)&&fn(Ke,j,ae,qe,ut,ct)}}function fn(C,j,ae,ue,Y,Ue){C.onBeforeRender(R,j,ae,ue,Y,Ue),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,j,ae,ue,C,Ue),Y.transparent===!0&&Y.side===Si&&Y.forceSinglePass===!1?(Y.side=Kn,Y.needsUpdate=!0,R.renderBufferDirect(ae,j,ue,Y,C,Ue),Y.side=as,Y.needsUpdate=!0,R.renderBufferDirect(ae,j,ue,Y,C,Ue),Y.side=Si):R.renderBufferDirect(ae,j,ue,Y,C,Ue),C.onAfterRender(R,j,ae,ue,Y,Ue)}function di(C,j,ae){j.isScene!==!0&&(j=Nt);const ue=it.get(C),Y=g.state.lights,Ue=g.state.shadowsArray,Pe=Y.state.version,Ke=Qe.getParameters(C,Y.state,Ue,j,ae),qe=Qe.getProgramCacheKey(Ke);let ut=ue.programs;ue.environment=C.isMeshStandardMaterial?j.environment:null,ue.fog=j.fog,ue.envMap=(C.isMeshStandardMaterial?re:w).get(C.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ut===void 0&&(C.addEventListener("dispose",st),ut=new Map,ue.programs=ut);let ct=ut.get(qe);if(ct!==void 0){if(ue.currentProgram===ct&&ue.lightsStateVersion===Pe)return Gn(C,Ke),ct}else Ke.uniforms=Qe.getUniforms(C),C.onBeforeCompile(Ke,R),ct=Qe.acquireProgram(Ke,qe),ut.set(qe,ct),ue.uniforms=Ke.uniforms;const Ze=ue.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=L.uniform),Gn(C,Ke),ue.needsLights=Go(C),ue.lightsStateVersion=Pe,ue.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),ue.currentProgram=ct,ue.uniformsList=null,ct}function Ei(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=fu.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Gn(C,j){const ae=it.get(C);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function ls(C,j,ae,ue,Y){j.isScene!==!0&&(j=Nt),U.resetTextureUnits();const Ue=j.fog,Pe=ue.isMeshStandardMaterial?j.environment:null,Ke=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:zo,qe=(ue.isMeshStandardMaterial?re:w).get(ue.envMap||Pe),ut=ue.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,bt=!!ae.morphAttributes.color;let St=os;ue.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(St=R.toneMapping);const dn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,vt=dn!==void 0?dn.length:0,Je=it.get(ue),Dn=g.state.lights;if(xe===!0&&(De===!0||C!==A)){const _n=C===A&&ue.id===P;L.setState(ue,C,_n)}let Ct=!1;ue.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Dn.state.version||Je.outputColorSpace!==Ke||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==qe||ue.fog===!0&&Je.fog!==Ue||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==L.numPlanes||Je.numIntersection!==L.numIntersection)||Je.vertexAlphas!==ut||Je.vertexTangents!==ct||Je.morphTargets!==Ze||Je.morphNormals!==Mt||Je.morphColors!==bt||Je.toneMapping!==St||Je.morphTargetsCount!==vt)&&(Ct=!0):(Ct=!0,Je.__version=ue.version);let hn=Je.currentProgram;Ct===!0&&(hn=di(ue,j,Y));let Jn=!1,Jt=!1,hi=!1;const Ft=hn.getUniforms(),bn=Je.uniforms;if(at.useProgram(hn.program)&&(Jn=!0,Jt=!0,hi=!0),ue.id!==P&&(P=ue.id,Jt=!0),Jn||A!==C){at.buffers.depth.getReversed()?(be.copy(C.projectionMatrix),y_(be),M_(be),Ft.setValue(K,"projectionMatrix",be)):Ft.setValue(K,"projectionMatrix",C.projectionMatrix),Ft.setValue(K,"viewMatrix",C.matrixWorldInverse);const In=Ft.map.cameraPosition;In!==void 0&&In.setValue(K,Xe.setFromMatrixPosition(C.matrixWorld)),_t.logarithmicDepthBuffer&&Ft.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ft.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Jt=!0,hi=!0)}if(Y.isSkinnedMesh){Ft.setOptional(K,Y,"bindMatrix"),Ft.setOptional(K,Y,"bindMatrixInverse");const _n=Y.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ft.setValue(K,"boneTexture",_n.boneTexture,U))}Y.isBatchedMesh&&(Ft.setOptional(K,Y,"batchingTexture"),Ft.setValue(K,"batchingTexture",Y._matricesTexture,U),Ft.setOptional(K,Y,"batchingIdTexture"),Ft.setValue(K,"batchingIdTexture",Y._indirectTexture,U),Ft.setOptional(K,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ft.setValue(K,"batchingColorTexture",Y._colorsTexture,U));const ei=ae.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Me.update(Y,ae,hn),(Jt||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,Ft.setValue(K,"receiveShadow",Y.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(bn.envMap.value=qe,bn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),Jt&&(Ft.setValue(K,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&zs(bn,hi),Ue&&ue.fog===!0&&Ve.refreshFogUniforms(bn,Ue),Ve.refreshMaterialUniforms(bn,ue,G,he,g.state.transmissionRenderTarget[C.id]),fu.upload(K,Ei(Je),bn,U)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(fu.upload(K,Ei(Je),bn,U),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ft.setValue(K,"center",Y.center),Ft.setValue(K,"modelViewMatrix",Y.modelViewMatrix),Ft.setValue(K,"normalMatrix",Y.normalMatrix),Ft.setValue(K,"modelMatrix",Y.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const _n=ue.uniformsGroups;for(let In=0,en=_n.length;In<en;In++){const us=_n[In];B.update(us,hn),B.bind(us,hn)}}return hn}function zs(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Go(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,j,ae){it.get(C.texture).__webglTexture=j,it.get(C.depthTexture).__webglTexture=ae;const ue=it.get(C);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ae===void 0,ue.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const ae=it.get(C);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ae=0){H=C,O=j,F=ae;let ue=!0,Y=null,Ue=!1,Pe=!1;if(C){const qe=it.get(C);if(qe.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(K.FRAMEBUFFER,null),ue=!1;else if(qe.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(qe.__hasExternalTextures)U.rebindTextures(C,it.get(C.texture).__webglTexture,it.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(qe.__boundDepthTexture!==Ze){if(Ze!==null&&it.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const ut=C.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Pe=!0);const ct=it.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[j])?Y=ct[j][ae]:Y=ct[j],Ue=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?Y=it.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?Y=ct[ae]:Y=ct,z.copy(C.viewport),oe.copy(C.scissor),ee=C.scissorTest}else z.copy(k).multiplyScalar(G).floor(),oe.copy(fe).multiplyScalar(G).floor(),ee=We;if(at.bindFramebuffer(K.FRAMEBUFFER,Y)&&ue&&at.drawBuffers(C,Y),at.viewport(z),at.scissor(oe),at.setScissorTest(ee),Ue){const qe=it.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+j,qe.__webglTexture,ae)}else if(Pe){const qe=it.get(C.texture),ut=j||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,qe.__webglTexture,ae||0,ut)}P=-1},this.readRenderTargetPixels=function(C,j,ae,ue,Y,Ue,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ke=Ke[Pe]),Ke){at.bindFramebuffer(K.FRAMEBUFFER,Ke);try{const qe=C.texture,ut=qe.format,ct=qe.type;if(!_t.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ue&&ae>=0&&ae<=C.height-Y&&K.readPixels(j,ae,ue,Y,Ae.convert(ut),Ae.convert(ct),Ue)}finally{const qe=H!==null?it.get(H).__webglFramebuffer:null;at.bindFramebuffer(K.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,j,ae,ue,Y,Ue,Pe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ke=Ke[Pe]),Ke){const qe=C.texture,ut=qe.format,ct=qe.type;if(!_t.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-ue&&ae>=0&&ae<=C.height-Y){at.bindFramebuffer(K.FRAMEBUFFER,Ke);const Ze=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Ze),K.bufferData(K.PIXEL_PACK_BUFFER,Ue.byteLength,K.STREAM_READ),K.readPixels(j,ae,ue,Y,Ae.convert(ut),Ae.convert(ct),0);const Mt=H!==null?it.get(H).__webglFramebuffer:null;at.bindFramebuffer(K.FRAMEBUFFER,Mt);const bt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await x_(K,bt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Ze),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ue),K.deleteBuffer(Ze),K.deleteSync(bt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,ae=0){C.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const ue=Math.pow(2,-ae),Y=Math.floor(C.image.width*ue),Ue=Math.floor(C.image.height*ue),Pe=j!==null?j.x:0,Ke=j!==null?j.y:0;U.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,ae,0,0,Pe,Ke,Y,Ue),at.unbindTexture()},this.copyTextureToTexture=function(C,j,ae=null,ue=null,Y=0){C.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,C=arguments[1],j=arguments[2],Y=arguments[3]||0,ae=null);let Ue,Pe,Ke,qe,ut,ct,Ze,Mt,bt;const St=C.isCompressedTexture?C.mipmaps[Y]:C.image;ae!==null?(Ue=ae.max.x-ae.min.x,Pe=ae.max.y-ae.min.y,Ke=ae.isBox3?ae.max.z-ae.min.z:1,qe=ae.min.x,ut=ae.min.y,ct=ae.isBox3?ae.min.z:0):(Ue=St.width,Pe=St.height,Ke=St.depth||1,qe=0,ut=0,ct=0),ue!==null?(Ze=ue.x,Mt=ue.y,bt=ue.z):(Ze=0,Mt=0,bt=0);const dn=Ae.convert(j.format),vt=Ae.convert(j.type);let Je;j.isData3DTexture?(U.setTexture3D(j,0),Je=K.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(U.setTexture2DArray(j,0),Je=K.TEXTURE_2D_ARRAY):(U.setTexture2D(j,0),Je=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,j.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,j.unpackAlignment);const Dn=K.getParameter(K.UNPACK_ROW_LENGTH),Ct=K.getParameter(K.UNPACK_IMAGE_HEIGHT),hn=K.getParameter(K.UNPACK_SKIP_PIXELS),Jn=K.getParameter(K.UNPACK_SKIP_ROWS),Jt=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,St.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,St.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,qe),K.pixelStorei(K.UNPACK_SKIP_ROWS,ut),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ct);const hi=C.isDataArrayTexture||C.isData3DTexture,Ft=j.isDataArrayTexture||j.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const bn=it.get(C),ei=it.get(j),_n=it.get(bn.__renderTarget),In=it.get(ei.__renderTarget);at.bindFramebuffer(K.READ_FRAMEBUFFER,_n.__webglFramebuffer),at.bindFramebuffer(K.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let en=0;en<Ke;en++)hi&&K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,it.get(C).__webglTexture,Y,ct+en),C.isDepthTexture?(Ft&&K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,it.get(j).__webglTexture,Y,bt+en),K.blitFramebuffer(qe,ut,Ue,Pe,Ze,Mt,Ue,Pe,K.DEPTH_BUFFER_BIT,K.NEAREST)):Ft?K.copyTexSubImage3D(Je,Y,Ze,Mt,bt+en,qe,ut,Ue,Pe):K.copyTexSubImage2D(Je,Y,Ze,Mt,bt+en,qe,ut,Ue,Pe);at.bindFramebuffer(K.READ_FRAMEBUFFER,null),at.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ft?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(Je,Y,Ze,Mt,bt,Ue,Pe,Ke,dn,vt,St.data):j.isCompressedArrayTexture?K.compressedTexSubImage3D(Je,Y,Ze,Mt,bt,Ue,Pe,Ke,dn,St.data):K.texSubImage3D(Je,Y,Ze,Mt,bt,Ue,Pe,Ke,dn,vt,St):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Y,Ze,Mt,Ue,Pe,dn,vt,St.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Y,Ze,Mt,St.width,St.height,dn,St.data):K.texSubImage2D(K.TEXTURE_2D,Y,Ze,Mt,Ue,Pe,dn,vt,St);K.pixelStorei(K.UNPACK_ROW_LENGTH,Dn),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ct),K.pixelStorei(K.UNPACK_SKIP_PIXELS,hn),K.pixelStorei(K.UNPACK_SKIP_ROWS,Jn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Jt),Y===0&&j.generateMipmaps&&K.generateMipmap(Je),at.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ae=null,ue=null,Y=0){return C.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ue=arguments[1]||null,C=arguments[2],j=arguments[3],Y=arguments[4]||0),Ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,ae,ue,Y)},this.initRenderTarget=function(C){it.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),at.unbindTexture()},this.resetState=function(){O=0,F=0,H=null,at.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}class Id{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=n,this.far=r}clone(){return new Id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class P1 extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vd extends Nr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new X,gu=new X,tg=new $t,Ta=new bd,nu=new Na,Rf=new X,ng=new X;class Zg extends on{constructor(e=new cn,n=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)mu.fromBufferAttribute(n,a-1),gu.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(a),nu.radius+=l,e.ray.intersectsSphere(nu)===!1)return;tg.copy(a).invert(),Ta.copy(e.ray).applyMatrix4(tg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=_.getX(T),I=_.getX(T+1),D=iu(this,e,Ta,h,g,I);D&&n.push(D)}if(this.isLineLoop){const T=_.getX(E-1),y=_.getX(M),g=iu(this,e,Ta,h,T,y);g&&n.push(g)}}else{const M=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=iu(this,e,Ta,h,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=iu(this,e,Ta,h,E-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function iu(s,e,n,r,a,l){const c=s.geometry.attributes.position;if(mu.fromBufferAttribute(c,a),gu.fromBufferAttribute(c,l),n.distanceSqToSegment(mu,gu,Rf,ng)>r)return;Rf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Rf);if(!(h<e.near||h>e.far))return{distance:h,point:ng.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const ig=new X,rg=new X;class L1 extends Zg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)ig.fromBufferAttribute(n,a),rg.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+ig.distanceTo(rg);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d extends Nr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sg=new $t,xd=new bd,ru=new Na,su=new X;class og extends on{constructor(e=new cn,n=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(a),ru.radius+=l,e.ray.intersectsSphere(ru)===!1)return;sg.copy(a).invert(),xd.copy(e.ray).applyMatrix4(sg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,T=M;E<T;E++){const y=m.getX(E);su.fromBufferAttribute(v,y),ag(su,y,h,a,e,n,this)}}else{const x=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=x,T=M;E<T;E++)su.fromBufferAttribute(v,E),ag(su,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function ag(s,e,n,r,a,l,c){const d=xd.distanceSqToPoint(s);if(d<n){const h=new X;xd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Aa extends Zn{constructor(e,n,r,a,l,c,d,h,m){super(e,n,r,a,l,c,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ro extends cn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const l=[],c=[],d=[],h=[],m=new X,_=new pt;c.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const M=r+v/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),c.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(c[x]/e+1)/2,_.y=(c[x+1]/e+1)/2,h.push(_.x,_.y)}for(let v=1;v<=n;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class En extends cn{constructor(e=1,n=1,r=1,a=32,l=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const _=[],v=[],x=[],M=[];let E=0;const T=[],y=r/2;let g=0;I(),c===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(M,2));function I(){const R=new X,$=new X;let O=0;const F=(n-e)/r;for(let H=0;H<=l;H++){const P=[],A=H/l,z=A*(n-e)+e;for(let oe=0;oe<=a;oe++){const ee=oe/a,ge=ee*h+d,_e=Math.sin(ge),pe=Math.cos(ge);$.x=z*_e,$.y=-A*r+y,$.z=z*pe,v.push($.x,$.y,$.z),R.set(_e,F,pe).normalize(),x.push(R.x,R.y,R.z),M.push(ee,1-A),P.push(E++)}T.push(P)}for(let H=0;H<a;H++)for(let P=0;P<l;P++){const A=T[P][H],z=T[P+1][H],oe=T[P+1][H+1],ee=T[P][H+1];(e>0||P!==0)&&(_.push(A,z,ee),O+=3),(n>0||P!==l-1)&&(_.push(z,oe,ee),O+=3)}m.addGroup(g,O,0),g+=O}function D(R){const $=E,O=new pt,F=new X;let H=0;const P=R===!0?e:n,A=R===!0?1:-1;for(let oe=1;oe<=a;oe++)v.push(0,y*A,0),x.push(0,A,0),M.push(.5,.5),E++;const z=E;for(let oe=0;oe<=a;oe++){const ge=oe/a*h+d,_e=Math.cos(ge),pe=Math.sin(ge);F.x=P*pe,F.y=y*A,F.z=P*_e,v.push(F.x,F.y,F.z),x.push(0,A,0),O.x=_e*.5+.5,O.y=pe*.5*A+.5,M.push(O.x,O.y),E++}for(let oe=0;oe<a;oe++){const ee=$+oe,ge=z+oe;R===!0?_.push(ge,ge+1,ee):_.push(ge+1,ge,ee),H+=3}m.addGroup(g,H,R===!0?1:2),g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vu extends En{constructor(e=1,n=1,r=32,a=1,l=!1,c=0,d=Math.PI*2){super(0,e,n,r,a,l,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:d}}static fromJSON(e){return new vu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ud extends cn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],c=[];d(a),m(r),_(),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(l.slice(),3)),this.setAttribute("uv",new Xt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(I){const D=new X,R=new X,$=new X;for(let O=0;O<n.length;O+=3)M(n[O+0],D),M(n[O+1],R),M(n[O+2],$),h(D,R,$,I)}function h(I,D,R,$){const O=$+1,F=[];for(let H=0;H<=O;H++){F[H]=[];const P=I.clone().lerp(R,H/O),A=D.clone().lerp(R,H/O),z=O-H;for(let oe=0;oe<=z;oe++)oe===0&&H===O?F[H][oe]=P:F[H][oe]=P.clone().lerp(A,oe/z)}for(let H=0;H<O;H++)for(let P=0;P<2*(O-H)-1;P++){const A=Math.floor(P/2);P%2===0?(x(F[H][A+1]),x(F[H+1][A]),x(F[H][A])):(x(F[H][A+1]),x(F[H+1][A+1]),x(F[H+1][A]))}}function m(I){const D=new X;for(let R=0;R<l.length;R+=3)D.x=l[R+0],D.y=l[R+1],D.z=l[R+2],D.normalize().multiplyScalar(I),l[R+0]=D.x,l[R+1]=D.y,l[R+2]=D.z}function _(){const I=new X;for(let D=0;D<l.length;D+=3){I.x=l[D+0],I.y=l[D+1],I.z=l[D+2];const R=y(I)/2/Math.PI+.5,$=g(I)/Math.PI+.5;c.push(R,1-$)}E(),v()}function v(){for(let I=0;I<c.length;I+=6){const D=c[I+0],R=c[I+2],$=c[I+4],O=Math.max(D,R,$),F=Math.min(D,R,$);O>.9&&F<.1&&(D<.2&&(c[I+0]+=1),R<.2&&(c[I+2]+=1),$<.2&&(c[I+4]+=1))}}function x(I){l.push(I.x,I.y,I.z)}function M(I,D){const R=I*3;D.x=e[R+0],D.y=e[R+1],D.z=e[R+2]}function E(){const I=new X,D=new X,R=new X,$=new X,O=new pt,F=new pt,H=new pt;for(let P=0,A=0;P<l.length;P+=9,A+=6){I.set(l[P+0],l[P+1],l[P+2]),D.set(l[P+3],l[P+4],l[P+5]),R.set(l[P+6],l[P+7],l[P+8]),O.set(c[A+0],c[A+1]),F.set(c[A+2],c[A+3]),H.set(c[A+4],c[A+5]),$.copy(I).add(D).add(R).divideScalar(3);const z=y($);T(O,A+0,I,z),T(F,A+2,D,z),T(H,A+4,R,z)}}function T(I,D,R,$){$<0&&I.x===1&&(c[D]=I.x-1),R.x===0&&R.z===0&&(c[D]=$/2/Math.PI+.5)}function y(I){return Math.atan2(I.z,-I.x)}function g(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.vertices,e.indices,e.radius,e.details)}}class Nd extends Ud{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,c,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Nd(e.radius,e.detail)}}class ar extends cn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let m=0;const _=[],v=new X,x=new X,M=[],E=[],T=[],y=[];for(let g=0;g<=r;g++){const I=[],D=g/r;let R=0;g===0&&c===0?R=.5/n:g===r&&h===Math.PI&&(R=-.5/n);for(let $=0;$<=n;$++){const O=$/n;v.x=-e*Math.cos(a+O*l)*Math.sin(c+D*d),v.y=e*Math.cos(c+D*d),v.z=e*Math.sin(a+O*l)*Math.sin(c+D*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(O+R,1-D),I.push(m++)}_.push(I)}for(let g=0;g<r;g++)for(let I=0;I<n;I++){const D=_[g][I+1],R=_[g][I],$=_[g+1][I],O=_[g+1][I+1];(g!==0||c>0)&&M.push(D,R,O),(g!==r-1||h<Math.PI)&&M.push(R,$,O)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rs extends cn{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],m=[],_=new X,v=new X,x=new X;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const T=E/a*l,y=M/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),d.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),h.push(x.x,x.y,x.z),m.push(E/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const T=(a+1)*M+E-1,y=(a+1)*(M-1)+E-1,g=(a+1)*(M-1)+E,I=(a+1)*M+E;c.push(T,y,I),c.push(y,g,I)}this.setIndex(c),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class D1 extends wn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Rt extends Nr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I1 extends Nr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U1 extends Nr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fa extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class N1 extends Fa{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const bf=new $t,lg=new X,ug=new X;class Fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),n.position.copy(lg),ug.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ug),n.updateMatrixWorld(),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class F1 extends Fd{constructor(){super(new ci(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=hu*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||n.far;(r!==n.fov||a!==n.aspect||l!==n.far)&&(n.fov=r,n.aspect=a,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cg extends Fa{constructor(e,n,r=0,a=Math.PI/3,l=0,c=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=r,this.angle=a,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new F1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fg=new $t,Ca=new X,Pf=new X;class O1 extends Fd{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ca),Pf.copy(r.position),Pf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Pf),r.updateMatrixWorld(),a.makeTranslation(-Ca.x,-Ca.y,-Ca.z),fg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fg)}}class dg extends Fa{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class k1 extends Fd{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z1 extends Fa{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new k1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B1 extends Fa{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=hg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function hg(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);const Jg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ho{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V1=new Ld(-1,1,1,-1,0,1);class H1 extends cn{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const G1=new H1;class Od{constructor(e){this._mesh=new ke(G1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ao extends Ho{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=La.clone(e.uniforms),this.material=new wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Od(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pg extends Ho{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,d;this.inverse?(c=0,d=1):(c=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,c,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class W1 extends Ho{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class X1{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const r=e.getSize(new pt);this._width=r.width,this._height=r.height,n=new Qi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ao(Jg),this.copyPass.material.blending=Lr,this.clock=new Qg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const c=this.passes[a];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),c.needsSwap){if(r){const d=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}pg!==void 0&&(c instanceof pg?r=!0:c instanceof W1&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j1 extends Ho{constructor(e,n,r=null,a=null,l=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(e,n,r){const a=e.autoClear;e.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=a}}const q1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ko extends Ho{constructor(e,n,r,a){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new pt(e.x,e.y):new pt(256,256),this.clearColor=new mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Qi(l,c,{type:Dr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const x=new Qi(l,c,{type:Dr});x.texture.name="UnrealBloomPass.h"+v,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const M=new Qi(l,c,{type:Dr});M.texture.name="UnrealBloomPass.v"+v,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),l=Math.round(l/2),c=Math.round(c/2)}const d=q1;this.highPassUniforms=La.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new pt(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const _=Jg;this.copyUniforms=La.clone(_.uniforms),this.blendMaterial=new wn({uniforms:this.copyUniforms,vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,blending:Lf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new mt,this.oldClearAlpha=1,this.basic=new Mi,this.fsQuad=new Od(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(r,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,a),this.renderTargetsVertical[l].setSize(r,a),this.separableBlurMaterials[l].uniforms.invSize.value=new pt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,n,r,a,l){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let d=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[h].uniforms.direction.value=ko.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=ko.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),d=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}getSeperableBlurMaterial(e){const n=[];for(let r=0;r<e;r++)n.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new wn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new wn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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

		}`};class $1 extends Ho{constructor(){super();const e=Y1;this.uniforms=La.clone(e.uniforms),this.material=new D1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Od(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_g?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function K1(){var Ve;const s=Ut.useRef(null),[e,n]=Ut.useState(!0),[r,a]=Ut.useState([]),[l,c]=Ut.useState(0),[d,h]=Ut.useState(!1),[m,_]=Ut.useState("day"),[v,x]=Ut.useState("forest"),[M,E]=Ut.useState(0),[T,y]=Ut.useState(0),[g,I]=Ut.useState(0),[D,R]=Ut.useState(!0),[$,O]=Ut.useState(null),F=Ut.useRef(null),H=Ut.useRef(null),P=Ut.useRef({}),A=Ut.useRef(new Qg),z=Ut.useRef({}),oe=Ut.useRef({speed:0,steering:0,posX:0,angle:0}),ee=Ut.useRef(0),ge=Ut.useRef(!0),_e=Ut.useRef(0),pe=Ut.useRef(0),he=Ut.useRef([]),G=()=>{if(F.current)return F.current;const b=new(window.AudioContext||window.webkitAudioContext),q=b.sampleRate,L=Math.floor(q*.35),Z=b.createBuffer(2,L,q);for(let fn=0;fn<2;fn++){const di=Z.getChannelData(fn);for(let Ei=0;Ei<L;Ei++){const Gn=Ei/q;di[Ei]=(Math.random()*2-1)*Math.exp(-Gn*12)*(Ei<q*.02?.6:1)*.4}}const J=b.createConvolver();J.buffer=Z;const Me=b.createBiquadFilter();Me.type="peaking",Me.frequency.value=80,Me.gain.value=6,Me.Q.value=1.2;const le=b.createBiquadFilter();le.type="lowpass",le.frequency.value=8e3,le.Q.value=.7;const ze=b.createDelay(.01);ze.delayTime.value=3e-4;const Ae=b.createDelay(.01);Ae.delayTime.value=6e-4;const rt=b.createStereoPanner();rt.pan.value=-.6;const B=b.createStereoPanner();B.pan.value=.6;const Ce=b.createGain();Ce.gain.value=.7;const se=b.createGain();se.gain.value=.35;const de=b.createGain();de.gain.value=1,Me.connect(le),le.connect(ze).connect(rt).connect(Ce),le.connect(Ae).connect(B).connect(Ce),Ce.connect(de),J.connect(se),se.connect(de),de.connect(b.destination);const Ie=b.createBufferSource(),Fe=b.createBuffer(1,Math.floor(q*2),q),st=Fe.getChannelData(0);for(let fn=0;fn<st.length;fn++)st[fn]=Math.random()*2-1;Ie.buffer=Fe,Ie.loop=!0;const te=b.createBiquadFilter();te.type="lowpass",te.frequency.value=250,te.Q.value=.5;const tt=b.createGain();tt.gain.value=0,Ie.connect(te).connect(tt).connect(b.destination),Ie.start();const ot=b.createOscillator();ot.type="sawtooth",ot.frequency.value=35;const Ot=b.createOscillator();Ot.type="triangle",Ot.frequency.value=70;const xt=b.createBiquadFilter();xt.type="lowpass",xt.frequency.value=120,xt.Q.value=1.5;const Qn=b.createGain();Qn.gain.value=0,ot.connect(xt),Ot.connect(xt),xt.connect(Qn).connect(b.destination),ot.start(),Ot.start();const An=b.createBufferSource(),Hn=b.createBuffer(1,Math.floor(q*2),q),an=Hn.getChannelData(0);for(let fn=0;fn<an.length;fn++)an[fn]=Math.random()*2-1;An.buffer=Hn,An.loop=!0;const Cn=b.createBiquadFilter();Cn.type="highpass",Cn.frequency.value=2500,Cn.Q.value=.3;const jt=b.createBiquadFilter();jt.type="lowpass",jt.frequency.value=6e3,jt.Q.value=.5;const Rn=b.createGain();return Rn.gain.value=0,An.connect(Cn).connect(jt).connect(Rn).connect(b.destination),An.start(),F.current={ctx:b,convolver:J,bassBoost:Me,noiseGain:tt,engOsc1:ot,engOsc2:Ot,engLPF:xt,engGain:Qn,windGain:Rn,activeSource:null},F.current},ve=()=>{const b=F.current;if(!b)return;const q=b.ctx,L=q.currentTime,Z=q.createOscillator();Z.type="sine",Z.frequency.setValueAtTime(988,L),Z.frequency.setValueAtTime(1319,L+.07);const J=q.createOscillator();J.type="sine",J.frequency.setValueAtTime(1568,L+.04);const Me=q.createGain();Me.gain.setValueAtTime(.18,L),Me.gain.exponentialRampToValueAtTime(.001,L+.22);const le=q.createGain();le.gain.setValueAtTime(.001,L),le.gain.linearRampToValueAtTime(.1,L+.04),le.gain.exponentialRampToValueAtTime(.001,L+.2),Z.connect(Me).connect(q.destination),J.connect(le).connect(q.destination),Z.start(L),Z.stop(L+.25),J.start(L+.03),J.stop(L+.25)},me=()=>{const b=F.current;if(!b)return;const q=b.ctx,L=q.currentTime,Z=q.createOscillator();Z.type="sawtooth",Z.frequency.setValueAtTime(90,L),Z.frequency.exponentialRampToValueAtTime(20,L+.35);const J=q.createBuffer(1,Math.floor(q.sampleRate*.4),q.sampleRate),Me=J.getChannelData(0);for(let Ce=0;Ce<Me.length;Ce++)Me[Ce]=Math.random()*2-1;const le=q.createBufferSource();le.buffer=J;const ze=q.createBiquadFilter();ze.type="bandpass",ze.frequency.value=900,ze.Q.value=1.5;const Ae=q.createWaveShaper(),rt=new Float32Array(256);for(let Ce=0;Ce<256;Ce++){const se=Ce/128-1;rt[Ce]=(Math.PI+3.5)*se/(Math.PI+3.5*Math.abs(se))}Ae.curve=rt;const B=q.createGain();B.gain.setValueAtTime(.35,L),B.gain.exponentialRampToValueAtTime(.001,L+.45),Z.connect(B).connect(q.destination),le.connect(ze).connect(Ae).connect(B),Z.start(L),Z.stop(L+.5),le.start(L),le.stop(L+.45)},k=b=>{const q=G();if(q.activeSource)try{q.activeSource.disconnect()}catch{}b.source||(b.source=q.ctx.createMediaElementSource(b.audio)),b.source.connect(q.bassBoost),b.source.connect(q.convolver),q.activeSource=b.source},fe=b=>{if(he.current.length>=3)return;const q=new Audio(URL.createObjectURL(b));q.crossOrigin="anonymous";const L={name:b.name.replace(/\.[^/.]+$/,""),audio:q,source:null};q.addEventListener("ended",()=>{const Z=he.current,J=Z.indexOf(L);J>=0&&J<Z.length-1?ie(J+1):Z.length>0&&ie(0)}),he.current=[...he.current,L],a([...he.current])},We=b=>{var L;const q=he.current;if((L=q[b])!=null&&L.audio&&(q[b].audio.pause(),q[b].source))try{q[b].source.disconnect()}catch{}he.current=q.filter((Z,J)=>J!==b),a([...he.current]),l>=he.current.length&&c(Math.max(0,he.current.length-1)),he.current.length===0&&h(!1)},ie=b=>{const q=he.current;if(!q.length)return;q.forEach(J=>J.audio.pause());const L=q[b%q.length];k(L);const Z=F.current;Z&&Z.ctx.state==="suspended"&&Z.ctx.resume(),L.audio.currentTime=0,L.audio.play(),c(b%q.length),h(!0)},xe=()=>{const b=he.current;if(!b.length)return;const q=F.current;q&&q.ctx.state==="suspended"&&q.ctx.resume();const L=b[l];L&&(d?(L.audio.pause(),h(!1)):((!(q!=null&&q.activeSource)||q.activeSource!==L.source)&&k(L),L.audio.play(),h(!0)))},De=()=>{const b=he.current;b.length<2||ie((l+1)%b.length)},be=()=>{const b=he.current;b.length<2||ie((l-1+b.length)%b.length)},Be=()=>{G(),n(!1),he.current.length>0&&ie(0)},Xe=()=>{const b=P.current;ge.current=!0,R(!0),ee.current=0,y(0),oe.current={speed:0,steering:0,posX:0,angle:0},b.records&&b.records.forEach((q,L)=>{q.visible=!0,q.position.z=-40-L*35,q.position.x=(Math.random()-.5)*10}),b.labels&&b.labels.forEach((q,L)=>{q.visible=!0,q.position.z=-60-L*50,q.position.x=(Math.random()-.5)*10}),b.explosion&&(b.explosion.visible=!1),b.roadGroup&&(b.roadGroup.position.x=0)},lt=(b,q)=>{const L=new sn;return L.add(new ke(new En(.3,.5,5),new Rt({color:6044190,roughness:.9}))),[1731388,2262858,1003826].forEach((Z,J)=>{const Me=new ke(new vu(2.5-J*.6,4,7),new Rt({color:Z,roughness:.8}));Me.position.y=3.5+J*2.2,Me.castShadow=!0,L.add(Me)}),L.position.set(b,2.5,q),L.scale.setScalar(.8+Math.random()*.8),L},Nt=(b,q)=>{const L=new ke(new Nd(1+Math.random()*2,1),new Rt({color:7829367,roughness:.85,metalness:.05}));return L.position.set(b,.5,q),L.rotation.set(Math.random(),Math.random(),0),L},wt=(b,q,L)=>{const Z=L||30+Math.random()*60,J=new ke(new vu(Z,Z*1.5,8),new Rt({color:5598037,roughness:.9}));return J.position.set(b,Z*.6,q),J.userData={isMountain:!0,radius:Z},J},Vt=(b,q)=>{const L=new sn;L.add(new ke(new En(.15,.3,4),new Rt({color:4860437,roughness:.85})));for(let Z=0;Z<4;Z++){const J=new ke(new En(.06,.1,2.5,6),new Rt({color:4860437,roughness:.85}));J.position.set(Math.sin(Z*1.6)*.8,2.5+Z*.3,Math.cos(Z*1.6)*.8),J.rotation.z=Math.sin(Z*1.6)*.6,L.add(J)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(Z=>{const J=new ke(new ar(1.2+Math.random()*1.5,8,7),new Rt({color:Z,roughness:.6,transparent:!0,opacity:.85}));J.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),L.add(J)}),L.position.set(b,2,q),L.scale.setScalar(.7+Math.random()*.7),L},K=(b,q)=>{const L=new sn,Z=new Rt({color:13378082,roughness:.4,metalness:.1});[-1.5,1.5].forEach(le=>{const ze=new ke(new En(.2,.25,7,8),Z);ze.position.set(le,3.5,0),L.add(ze)});const J=new ke(new zt(5,.35,.35),Z);J.position.y=7,L.add(J);const Me=new ke(new zt(4,.25,.25),Z);return Me.position.y=6,L.add(Me),L.position.set(b,0,q),L},Tn=(b,q)=>{const L=new sn,Z=4+Math.random()*8,J=10+Math.random()*50,Me=4+Math.random()*8;L.add((()=>{const Ae=new ke(new zt(Z,J,Me),new Rt({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)],roughness:.7,metalness:.3}));return Ae.position.y=J/2,Ae.castShadow=!0,Ae})());const le=new Rt({color:16772778,emissive:16768392,emissiveIntensity:.6,roughness:.3}),ze=new Rt({color:2241348,roughness:.8});for(let Ae=0;Ae<Math.floor(J/2.5);Ae++)for(let rt=0;rt<Math.floor(Z/1.8);rt++){const B=new ke(new Vn(.8,1.2),Math.random()>.35?le:ze);B.position.set(-Z/2+1+rt*(Z/Math.floor(Z/1.8)),2+Ae*2.5,Me/2+.01),L.add(B);const Ce=B.clone();Ce.position.z=-Me/2-.01,Ce.rotation.y=Math.PI,L.add(Ce)}return L.position.set(b,0,q),L.userData={isMountain:!0,radius:Math.max(Z,Me)},L},Tt=(b,q)=>{const L=new sn,Z=new ke(new En(.08,.1,8,8),new Rt({color:5592405,roughness:.4,metalness:.6}));Z.position.y=4,L.add(Z);const J=new ke(new En(.04,.04,2.5,6),new Rt({color:5592405,roughness:.4,metalness:.6}));J.rotation.z=Math.PI/2,J.position.set(b>0?-1.2:1.2,8,0),L.add(J);const Me=new ke(new ar(.2,8,6),new Rt({color:16777130,emissive:16768358,emissiveIntensity:.8}));return Me.position.set(b>0?-2:2,7.8,0),L.add(Me),L.position.set(b,0,q),L},_t=Ut.useCallback((b,q,L,Z)=>{L.forEach(Me=>b.remove(Me)),L.length=0;const J=()=>Math.random()>.5?1:-1;if(q==="forest"){for(let Me=0;Me<200;Me++){const le=J();L.push((Math.random()<.7?lt:Nt)(le*(14+Math.random()*80),-Math.random()*Z))}for(let Me=0;Me<40;Me++){const le=J(),ze=30+Math.random()*60;L.push(wt(le*(ze+25+Math.random()*120),-Math.random()*Z,ze))}}else if(q==="sakura"){for(let Me=0;Me<200;Me++)L.push(Vt(J()*(12+Math.random()*70),-Math.random()*Z));for(let Me=0;Me<10;Me++)L.push(K(J()*(9+Math.random()*6),-Me*90-30));for(let Me=0;Me<20;Me++){const le=40+Math.random()*50,ze=wt(J()*(le+40+Math.random()*100),-Math.random()*Z,le);ze.material.color.set(6715306),L.push(ze)}}else if(q==="city"){for(let Me=0;Me<120;Me++)L.push(Tn(J()*(12+Math.random()*60),-Math.random()*Z));for(let Me=0;Me<50;Me++)L.push(Tt(J()*9,-Me*20))}L.forEach(Me=>b.add(Me))},[]),at=()=>{const b=new sn;b.add(new ke(new En(.8,.8,.05,24),new Rt({color:1118481,roughness:.15,metalness:.3}))),[.3,.5,.65].forEach(L=>{const Z=new ke(new rs(L,.008,4,24),new Mi({color:2236962}));Z.rotation.x=Math.PI/2,b.add(Z)}),b.add(new ke(new En(.22,.22,.06,16),new Rt({color:16729156,roughness:.3,metalness:.1}))),b.add(new ke(new En(.04,.04,.08,8),new Mi({color:0})));const q=new ke(new rs(.85,.04,8,24),new Rt({color:16768256,emissive:16755200,emissiveIntensity:.8,transparent:!0,opacity:.7}));return q.rotation.x=Math.PI/2,b.add(q),b},It=()=>{const b=new sn,q=new ke(new zt(1.2,1.6,.3),new Rt({color:2236962,roughness:.3,metalness:.2}));q.position.y=.8,b.add(q);const L=new ke(new zt(.8,.8,.02),new Rt({color:13408512,roughness:.15,metalness:.85}));L.position.set(0,.9,.17),b.add(L);const Z=new ke(new zt(1.3,.15,.32),new Rt({color:13369344,roughness:.4,metalness:.1}));Z.position.set(0,1.65,0),b.add(Z),[-.7,.7].forEach(Me=>{for(let le=0;le<3;le++){const ze=new ke(new rs(.08,.02,6,8),new Rt({color:8947848,roughness:.15,metalness:.9}));ze.position.set(Me,.4+le*.25,0),ze.rotation.y=Math.PI/2,ze.rotation.x=le%2===0?0:Math.PI/2,b.add(ze)}});const J=new ke(new ar(.15,8,6),new Rt({color:16711680,emissive:16711680,emissiveIntensity:1}));return J.position.set(0,1.85,0),b.add(J),b.userData={type:"label",light:J},b},it=()=>{const b=new sn,q=[16729088,16746496,16763904,16720384];for(let L=0;L<12;L++){const Z=new ke(new ar(.5+Math.random()*1.5,8,6),new Mi({color:q[L%4],transparent:!0,opacity:.8}));Z.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),Z.userData.speed=1+Math.random()*2,b.add(Z)}for(let L=0;L<6;L++){const Z=new ke(new ar(1+Math.random(),6,5),new Mi({color:3355443,transparent:!0,opacity:.5}));Z.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),b.add(Z)}return b.visible=!1,b},U={uniforms:{tDiffuse:{value:null},darkness:{value:.7},offset:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float darkness; uniform float offset; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); vec2 uv=(vUv-0.5)*2.0; float vig=1.0-dot(uv,uv)*darkness*0.35; c.rgb*=clamp(vig,0.0,1.0); gl_FragColor=c; }`},w={uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.012}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time; uniform float intensity; varying vec2 vUv;
      float rand(vec2 co){ return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453); }
      void main(){ vec4 c=texture2D(tDiffuse,vUv); float g=rand(vUv+fract(time))*2.0-1.0; c.rgb+=vec3(g*intensity); gl_FragColor=c; }`},re={uniforms:{tDiffuse:{value:null},amount:{value:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
      void main(){ vec2 d=(vUv-0.5)*amount; float r=texture2D(tDiffuse,vUv+d).r; float g=texture2D(tDiffuse,vUv).g; float b=texture2D(tDiffuse,vUv-d).b; gl_FragColor=vec4(r,g,b,1.0); }`},Se={uniforms:{tDiffuse:{value:null},warmth:{value:.06},contrast:{value:1.08}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float warmth; uniform float contrast; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); c.rgb=(c.rgb-0.5)*contrast+0.5; c.r+=warmth*0.5; c.g+=warmth*0.2; c.b-=warmth*0.15; gl_FragColor=c; }`},Ee={uniforms:{tDiffuse:{value:null},intensity:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float intensity; uniform float time; varying vec2 vUv;
      float rand(vec2 co){ return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453); }
      void main(){
        vec4 c=texture2D(tDiffuse,vUv);
        if(intensity>0.01){
          vec2 center=vec2(0.5,0.5); vec2 dir=vUv-center; float dist=length(dir);
          float streak=rand(vec2(atan(dir.y,dir.x)*20.0,floor(time*10.0)))*dist*intensity;
          vec2 blurUv=vUv-normalize(dir)*streak*0.02;
          c=mix(c,texture2D(tDiffuse,blurUv),min(streak*2.0,0.4));
          c.rgb+=vec3(streak*0.15);
        }
        gl_FragColor=c;
      }`},ye=Ut.useCallback(b=>{const q=b.clientWidth,L=b.clientHeight,Z=new b1({antialias:!0,powerPreference:"high-performance"});Z.setSize(q,L),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.shadowMap.enabled=!0,Z.shadowMap.type=vg,Z.toneMapping=Sd,Z.toneMappingExposure=1.3,b.appendChild(Z.domElement);const J=new P1,Me=new ci(68,q/L,.1,2e3);Me.position.set(0,3.5,.5),Me.lookAt(0,2.5,-50);const le=new X1(Z);le.addPass(new j1(J,Me));const ze=new ko(new pt(q,L),.15,.4,.92);le.addPass(ze);const Ae=new Ao(U);le.addPass(Ae);const rt=new Ao(re);le.addPass(rt);const B=new Ao(w);le.addPass(B);const Ce=new Ao(Se);le.addPass(Ce);const se=new Ao(Ee);le.addPass(se),le.addPass(new $1);const de={day:8900331,sunset:16739125,night:657966,retro:1703987},Ie={day:13166325,sunset:16746581,night:328992,retro:2228292},Fe={day:8952234,sunset:5583650,night:1118515,retro:6684808},st={day:16777200,sunset:16742195,night:2241365,retro:16711935},te=new ar(900,32,16),tt=new wn({side:Kn,depthWrite:!1,uniforms:{topColor:{value:new mt(4491468)},midColor:{value:new mt(8900331)},bottomColor:{value:new mt(13166325)},sunColor:{value:new mt(16777198)},sunDir:{value:new X(.3,.4,-.8).normalize()},sunSize:{value:.04}},vertexShader:"varying vec3 vWorldPos; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorldPos=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform vec3 topColor; uniform vec3 midColor; uniform vec3 bottomColor; uniform vec3 sunColor; uniform vec3 sunDir; uniform float sunSize; varying vec3 vWorldPos;
        void main(){ vec3 d=normalize(vWorldPos); float y=d.y;
          vec3 c=y>0.0?mix(midColor,topColor,pow(y,0.6)):mix(midColor,bottomColor,pow(-y,0.4));
          float sunDot=max(dot(d,sunDir),0.0); c+=sunColor*pow(sunDot,256.0/sunSize)*0.8;
          c+=sunColor*pow(sunDot,8.0)*0.15; gl_FragColor=vec4(c,1.0); }`}),ot=new ke(te,tt);J.add(ot),J.fog=new Id(Ie.day,80,600);const Ot=new B1(Fe.day,.7);J.add(Ot);const xt=new z1(st.day,1);xt.position.set(30,50,-30),xt.castShadow=!0,xt.shadow.mapSize.width=2048,xt.shadow.mapSize.height=2048,xt.shadow.camera.near=1,xt.shadow.camera.far=200,xt.shadow.camera.left=-30,xt.shadow.camera.right=30,xt.shadow.camera.top=30,xt.shadow.camera.bottom=-30,xt.shadow.bias=-.001,J.add(xt);const Qn=new dg(4482730,.4,10);Qn.position.set(0,4,-1),J.add(Qn);const An=new dg(16777215,.2,6);An.position.set(0,2.5,-1.5),J.add(An);const Hn=new N1(8961023,4478242,.3);J.add(Hn);const an=new sn;J.add(an);const Cn=document.createElement("canvas");Cn.width=512,Cn.height=512;const jt=Cn.getContext("2d");jt.fillStyle="#2a2a2a",jt.fillRect(0,0,512,512);for(let we=0;we<4e4;we++){const Oe=Math.random()*512,Gt=Math.random()*512,kt=Math.floor(30+Math.random()*30);jt.fillStyle=`rgb(${kt},${kt},${kt})`,jt.fillRect(Oe,Gt,1+Math.random(),1+Math.random())}jt.strokeStyle="rgba(20,20,20,0.3)",jt.lineWidth=.5;for(let we=0;we<8;we++){jt.beginPath(),jt.moveTo(Math.random()*512,Math.random()*512);for(let Oe=0;Oe<5;Oe++)jt.lineTo(jt.canvas.width*Math.random(),jt.canvas.height*Math.random());jt.stroke()}const Rn=new Aa(Cn);Rn.wrapS=Rr,Rn.wrapT=Rr,Rn.repeat.set(4,200);const fn=new Rt({map:Rn,roughness:.85,metalness:.02}),di=new ke(new Vn(14,4e3),fn);di.rotation.x=-Math.PI/2,di.position.set(0,.01,-1900),di.receiveShadow=!0,an.add(di);const Ei=60,Gn=12,ls=[],zs=new Rt({color:14540236,roughness:.6,metalness:0});for(let we=0;we<Ei;we++){const Oe=new ke(new Vn(.2,4),zs);Oe.rotation.x=-Math.PI/2,Oe.position.set(0,.02,-we*Gn),an.add(Oe),ls.push(Oe)}const Go=new Rt({color:13421755,roughness:.5});for(let we of[-6.8,6.8]){const Oe=new ke(new Vn(.15,4e3),Go);Oe.rotation.x=-Math.PI/2,Oe.position.set(we,.02,-1900),an.add(Oe)}const C=document.createElement("canvas");C.width=256,C.height=256;const j=C.getContext("2d");j.fillStyle="#5a5040",j.fillRect(0,0,256,256);for(let we=0;we<15e3;we++){const Oe=60+Math.random()*50;j.fillStyle=`rgb(${Oe+20},${Oe+10},${Oe})`,j.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}const ae=new Aa(C);ae.wrapS=Rr,ae.wrapT=Rr,ae.repeat.set(3,200);const ue=new Rt({map:ae,roughness:.95,metalness:0});for(let we of[-9.5,9.5]){const Oe=new ke(new Vn(5,4e3),ue);Oe.rotation.x=-Math.PI/2,Oe.position.set(we,.005,-1900),Oe.receiveShadow=!0,an.add(Oe)}const Y=document.createElement("canvas");Y.width=256,Y.height=256;const Ue=Y.getContext("2d");Ue.fillStyle="#3a6a2a",Ue.fillRect(0,0,256,256);for(let we=0;we<2e4;we++){const Oe=40+Math.random()*60;Ue.fillStyle=`rgb(${Oe-10},${Oe+30},${Oe-15})`,Ue.fillRect(Math.random()*256,Math.random()*256,1,1+Math.random()*3)}const Pe=new Aa(Y);Pe.wrapS=Rr,Pe.wrapT=Rr,Pe.repeat.set(80,80);const Ke=new Rt({map:Pe,roughness:.95,metalness:0}),qe=new ke(new Vn(4e3,4e3),Ke);qe.rotation.x=-Math.PI/2,qe.receiveShadow=!0,an.add(qe);const ut=new ke(new Ro(60,32),new wn({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}",transparent:!0,side:Si}));ut.position.set(0,40,-800),ut.visible=!1,J.add(ut);const ct=new ke(new Vn(800,800,40,40),new Mi({color:16711935,wireframe:!0,transparent:!0,opacity:.25}));ct.rotation.x=-Math.PI/2,ct.position.set(0,.05,-350),ct.visible=!1,J.add(ct);const Ze=new cn,Mt=new Float32Array(500*3);for(let we=0;we<500;we++)Mt[we*3]=(Math.random()-.5)*1200,Mt[we*3+1]=30+Math.random()*200,Mt[we*3+2]=-100-Math.random()*800;Ze.setAttribute("position",new fi(Mt,3));const bt=new _d({color:16777215,size:.8,transparent:!0,opacity:.8}),St=new og(Ze,bt);St.visible=!1,J.add(St);const dn=[];for(let we=0;we<20;we++){const Oe=new sn;for(let Gt=0;Gt<3+Math.floor(Math.random()*4);Gt++){const kt=new ke(new ar(3+Math.random()*5,8,6),new U1({color:16777215,transparent:!0,opacity:.7}));kt.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),kt.scale.y=.4+Math.random()*.3,Oe.add(kt)}Oe.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Oe.userData.drift=2+Math.random()*4,J.add(Oe),dn.push(Oe)}const vt=150,Je=new cn,Dn=new Float32Array(vt*3),Ct=[];for(let we=0;we<vt;we++)Dn[we*3]=(Math.random()-.5)*80,Dn[we*3+1]=Math.random()*20,Dn[we*3+2]=-Math.random()*100,Ct.push({x:(Math.random()-.5)*2,y:-.5-Math.random()*1.5,z:Math.random()*.5,ph:Math.random()*Math.PI*2});Je.setAttribute("position",new fi(Dn,3));const hn=new _d({color:16758725,size:.4,transparent:!0,opacity:.8}),Jn=new og(Je,hn);J.add(Jn);const Jt=[];for(let we=0;we<3;we++){const Oe=[];for(let jn=0;jn<8;jn++)Oe.push(jn*-2,jn*-.3,0);const Gt=new cn;Gt.setAttribute("position",new fi(new Float32Array(Oe),3));const kt=new Zg(Gt,new vd({color:16777215,transparent:!0,opacity:0}));kt.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),kt.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},J.add(kt),Jt.push(kt)}const hi=[];for(let we=0;we<8;we++){const Oe=new sn,Gt=new ke(new Vn(1.2,.15),new Mi({color:2236962,side:Si}));Gt.position.x=-.5,Gt.rotation.z=.3,Oe.add(Gt);const kt=new ke(new Vn(1.2,.15),new Mi({color:2236962,side:Si}));kt.position.x=.5,kt.rotation.z=-.3,Oe.add(kt),Oe.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Oe.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:Gt,wR:kt,baseY:Oe.position.y},J.add(Oe),hi.push(Oe)}const Ft=new wn({transparent:!0,depthWrite:!1,side:Si,uniforms:{intensity:{value:0}},vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float intensity; varying vec3 vPos;
        void main(){ float d=length(vPos.xz)*0.03; float a=max(0.0,1.0-d)*0.12*intensity; float fade=1.0-smoothstep(0.0,40.0,abs(vPos.z)); gl_FragColor=vec4(1.0,1.0,0.85,a*fade); }`}),bn=new ke(new Vn(8,80),Ft.clone());bn.rotation.x=-Math.PI/2,bn.position.set(-1.5,.08,-42),J.add(bn);const ei=new ke(new Vn(8,80),Ft.clone());ei.rotation.x=-Math.PI/2,ei.position.set(1.5,.08,-42),J.add(ei);const _n=80,In=new cn,en=new Float32Array(_n*6);new cn;for(let we=0;we<_n;we++){const Oe=(Math.random()-.5)*30,Gt=Math.random()*8,kt=-Math.random()*60;en[we*6]=Oe,en[we*6+1]=Gt,en[we*6+2]=kt,en[we*6+3]=Oe,en[we*6+4]=Gt,en[we*6+5]=kt+2}In.setAttribute("position",new fi(en,3));const us=new vd({color:16777215,transparent:!0,opacity:0}),Bs=new L1(In,us);J.add(Bs);const ht=new sn;J.add(ht);const pi=new Rt({color:1710618,roughness:.8,metalness:.05}),Wo=new Rt({color:1118481,roughness:.9,metalness:.02}),cr=new Rt({color:1579032,roughness:.6,metalness:.1}),Ji=new Rt({color:12303291,roughness:.15,metalness:.9}),Oa=new Rt({color:3359829,roughness:.05,metalness:.1,transparent:!0,opacity:.18}),Xo=new ke(new zt(5.8,.7,2.2),pi);Xo.position.set(0,1.5,-2.6),ht.add(Xo);const Vs=new ke(new zt(5.6,.12,1.8),cr);Vs.position.set(0,1.9,-2.5),ht.add(Vs);const fr=new ke(new En(.35,.35,5.6,16,1,!0,0,Math.PI),pi);fr.rotation.z=Math.PI/2,fr.rotation.x=Math.PI/2,fr.position.set(0,1.15,-3.1),ht.add(fr);const wi=new ke(new zt(1,.9,.15),Wo);wi.position.set(-.88,2.18,-2.32),wi.rotation.x=-.25,ht.add(wi);const Wn=new sn;Wn.position.set(.5,1.85,-2.35),Wn.add(new ke(new zt(1.5,.85,.12),pi));const ti=document.createElement("canvas");ti.width=256,ti.height=64;const mi=ti.getContext("2d");mi.fillStyle="#020a04",mi.fillRect(0,0,256,64),mi.fillStyle="#0a6",mi.font="bold 16px monospace",mi.textAlign="center",mi.fillText("NO DISC",128,38);const Fr=new Aa(ti),Ni=new ke(new zt(1.3,.55,.01),new Mi({map:Fr}));Ni.position.set(0,.06,.07),Wn.add(Ni),[-.62,.62].forEach(we=>{const Oe=new ke(new ar(.07,12,10),Ji);Oe.position.set(we,-.05,.07),Wn.add(Oe)});for(let we=0;we<4;we++){const Oe=new ke(new En(.035,.035,.02,10),Ji);Oe.rotation.x=Math.PI/2,Oe.position.set(-.3+we*.2,-.32,.07),Wn.add(Oe)}ht.add(Wn);const ka=new ke(new zt(.85,.5,3.2),pi);ka.position.set(0,1.25,0),ht.add(ka);const jo=new ke(new zt(.8,.15,1.1),cr);jo.position.set(0,1.58,.8),ht.add(jo);const Un=new sn;Un.add(new ke(new rs(.45,.035,16,36),cr));const za=new ke(new zt(.55,.04,.04),Ji);za.position.y=-.4,Un.add(za),[-.8,0,.8].forEach(we=>{const Oe=new ke(new En(.015,.025,.38,8),pi);Oe.position.set(Math.sin(we)*.19,Math.cos(we)*.19,0),Oe.rotation.z=-we,Un.add(Oe)}),Un.add(new ke(new En(.11,.11,.04,20),pi)),Un.add(new ke(new rs(.11,.005,8,24),Ji)),[-.5,.5].forEach(we=>{const Oe=new ke(new zt(.12,.035,.1),Ji);Oe.position.set(we,.08,-.06),Un.add(Oe)}),Un.position.set(-.85,2.1,-1.8),Un.rotation.x=-.38,ht.add(Un);const er=new sn,Hs=new ke(new Ro(.38,32),new I1({color:657930,shininess:40}));er.add(Hs);const Ba=new ke(new rs(.38,.02,12,32),Ji);er.add(Ba);const Gs=document.createElement("canvas");Gs.width=256,Gs.height=256;const tn=Gs.getContext("2d");tn.clearRect(0,0,256,256);const tr=128,Fi=128,Oi=105;for(let we=0;we<=120;we+=10){const Oe=we/120,Gt=Math.PI*.75+Oe*Math.PI*1.5,kt=Math.cos(Gt),jn=Math.sin(Gt),zi=we%20===0,Ti=zi?Oi-20:Oi-12;tn.strokeStyle=zi?"#ffffff":"#888888",tn.lineWidth=zi?2.5:1.2,tn.beginPath(),tn.moveTo(tr+Ti*kt,Fi+Ti*jn),tn.lineTo(tr+Oi*kt,Fi+Oi*jn),tn.stroke(),zi&&(tn.fillStyle="#ffffff",tn.font="bold 16px monospace",tn.textAlign="center",tn.textBaseline="middle",tn.fillText(String(we),tr+(Oi-32)*kt,Fi+(Oi-32)*jn))}tn.fillStyle="#4ade80",tn.font="bold 10px monospace",tn.textAlign="center",tn.fillText("MPH",tr,Fi+40);const Eu=new Aa(Gs),Va=new ke(new Ro(.36,32),new Mi({map:Eu,transparent:!0}));Va.position.z=.005,er.add(Va);const dr=new sn,cs=new ke(new zt(.012,.28,.008),new Rt({color:16724787,emissive:4456448,roughness:.3,metalness:.5}));cs.position.y=.12,dr.add(cs),dr.add(new ke(new Ro(.03,12),new Rt({color:13369344,roughness:.2,metalness:.8}))),dr.position.z=.01,er.add(dr),er.position.set(-.88,2.18,-2.25),er.rotation.x=-.25,ht.add(er);const hr=new sn,qo=new ke(new En(.02,.03,.45,8),pi);qo.position.y=.25,hr.add(qo),hr.add(new ke(new zt(1.2,.28,.06),pi));const ki=new ke(new zt(1.15,.24,.01),new Rt({color:1714746,roughness:.05,metalness:.95,transparent:!0,opacity:.75}));ki.position.z=.035,hr.add(ki),hr.position.set(0,4.6,-2),ht.add(hr),[-2.6,2.6].forEach(we=>{const Oe=new ke(new En(.04,.06,3.2,10),pi);Oe.position.set(we,3.5,-2.2),Oe.rotation.z=we>0?-.2:.2,ht.add(Oe)});const Ws=new ke(new zt(5.8,.08,4),Wo);Ws.position.set(0,5.2,-.5),ht.add(Ws),[-2.75,2.75].forEach(we=>{const Oe=we>0?1:-1,Gt=new ke(new zt(.08,2.2,2.8),pi);Gt.position.set(we,2.3,-.8),ht.add(Gt);const kt=new ke(new zt(.06,.5,2.4),cr);kt.position.set(we>0?we-.04:we+.04,3,-.8),ht.add(kt);const jn=new ke(new zt(.18,.1,1.2),cr);jn.position.set(we>0?we-.08:we+.08,2.4,-.6),ht.add(jn);const zi=new ke(new zt(.03,.035,.35),Ji);zi.position.set(we>0?we-.05:we+.05,2.55,-.5),ht.add(zi);const Ti=new ke(new Vn(2,1.5),Oa);Ti.position.set(we>0?we-.01:we+.01,3.8,-.8),Ti.rotation.y=Math.PI/2*Oe,ht.add(Ti);const hs=new ke(new zt(.01,.015,2.4),new Mi({color:2245802,transparent:!0,opacity:.5}));hs.position.set(we>0?we-.03:we+.03,1.9,-.8),ht.add(hs)});const nr=new cg(16777164,0,80,.4,.5);nr.position.set(-1.5,2,-3),nr.target.position.set(-2,0,-80),J.add(nr),J.add(nr.target);const Or=new cg(16777164,0,80,.4,.5);Or.position.set(1.5,2,-3),Or.target.position.set(2,0,-80),J.add(Or),J.add(Or.target);const fs=[];for(let we=0;we<15;we++){const Oe=at();Oe.position.set((Math.random()-.5)*10,1.2,-40-we*35),Oe.rotation.x=Math.PI/2,Oe.userData.bobPhase=Math.random()*Math.PI*2,J.add(Oe),fs.push(Oe)}const ds=[];for(let we=0;we<10;we++){const Oe=It();Oe.position.set((Math.random()-.5)*10,0,-60-we*50),J.add(Oe),ds.push(Oe)}const Yo=it();J.add(Yo);const Xn=[];return P.current={renderer:Z,composer:le,scene:J,camera:Me,sceneryPool:Xn,spawnRange:1e3,amb:Ot,dir:xt,hemiL:Hn,skyC:de,fogC:Ie,ambC:Fe,dirC:st,wGrp:Un,hlL:nr,hlR:Or,interior:ht,sCanvas:ti,sCtx:mi,sTex:Fr,gndMat:Ke,roadMat:fn,retroSun:ut,retroGrid:ct,fillL:Qn,dashL:An,records:fs,labels:ds,explosion:Yo,roadGroup:an,dashes:ls,DS:Gn,stars:St,starMat:bt,clouds:dn,ptcls:Jn,pGeo:Je,pVel:Ct,pMat:hn,shooters:Jt,birds:hi,speedoNeedle:dr,skyMat:tt,bloomPass:ze,grainPass:B,chromaPass:rt,colorPass:Ce,speedLinesPass:se,vignettePass:Ae,hlConeL:bn,hlConeR:ei,speedLines:Bs,slGeo:In,slMat:us},Z},[]);Ut.useEffect(()=>{const b=L=>{z.current[L.code]=!0},q=L=>{z.current[L.code]=!1};return window.addEventListener("keydown",b),window.addEventListener("keyup",q),()=>{window.removeEventListener("keydown",b),window.removeEventListener("keyup",q)}},[]),Ut.useEffect(()=>{if(!s.current)return;const b=s.current,q=ye(b),L=P.current;_t(L.scene,v,L.sceneryPool,L.spawnRange);const Z=()=>{const le=b.clientWidth,ze=b.clientHeight;L.camera.aspect=le/ze,L.camera.updateProjectionMatrix(),q.setSize(le,ze),L.composer.setSize(le,ze)};window.addEventListener("resize",Z);let J=0;const Me=()=>{H.current=requestAnimationFrame(Me);const le=Math.min(A.current.getDelta(),.05),ze=z.current,Ae=oe.current,rt=Date.now();if(L.grainPass&&(L.grainPass.uniforms.time.value=rt*.001),!ge.current){L.explosion&&L.explosion.visible&&L.explosion.children.forEach(te=>{te.position.y+=(te.userData.speed||2)*le,te.scale.multiplyScalar(1+le*.5),te.material.opacity>.01&&(te.material.opacity-=le*.4)}),L.composer.render();return}ze.ShiftLeft||ze.ShiftRight?Ae.speed=Math.min(Ae.speed+40*le,120):ze.Space?Ae.speed=Math.max(Ae.speed-80*le,0):Ae.speed=Math.max(Ae.speed-10*le,0);const B=ze.KeyA||ze.ArrowLeft?-.6:ze.KeyD||ze.ArrowRight?.6:0;Ae.steering+=(B-Ae.steering)*5*le;const se=Ae.steering*(Ae.speed/60)*15*le;Ae.posX=Math.max(-20,Math.min(20,Ae.posX+se)),Ae.angle+=(Ae.steering*.08-Ae.angle)*4*le,E(Math.round(Ae.speed));const de=Ae.speed;L.roadGroup.position.x=-Ae.posX,J+=de*le,J>=L.DS&&(J-=L.DS),L.dashes.forEach((te,tt)=>{te.position.z=-(tt*L.DS)+J}),L.sceneryPool.forEach(te=>{if(te.position.z+=de*le,te.position.x-=se,te.position.z>60){te.position.z-=L.spawnRange;const tt=Math.random()>.5?1:-1,ot=te.userData.isMountain;te.position.x=tt*((ot?(te.userData.radius||50)+20:14)+Math.random()*(ot?120:80))-Ae.posX}}),L.records.forEach(te=>{te.visible&&(te.position.z+=de*le,te.position.x-=se,te.rotation.z+=le*3,te.position.y=1.2+Math.sin(rt*.003+te.userData.bobPhase)*.3,te.position.z>30&&(te.position.z=-300-Math.random()*200,te.position.x=(Math.random()-.5)*10-Ae.posX,te.visible=!0),Math.abs(te.position.x)<1.8&&Math.abs(te.position.z)<2.5&&(te.visible=!1,ee.current+=100,y(ee.current),ve(),O("record"),setTimeout(()=>O(null),300),setTimeout(()=>{te.visible=!0,te.position.z=-300-Math.random()*200,te.position.x=(Math.random()-.5)*10-Ae.posX},2e3)))}),L.labels.forEach(te=>{te.visible&&(te.position.z+=de*le,te.position.x-=se,te.rotation.y+=le*1.5,te.userData.light&&(te.userData.light.material.opacity=Math.sin(rt*.01)>0?1:.2),te.position.z>30&&(te.position.z=-350-Math.random()*250,te.position.x=(Math.random()-.5)*10-Ae.posX,te.visible=!0),Math.abs(te.position.x)<1.5&&Math.abs(te.position.z)<2&&(ge.current=!1,R(!1),O("boom"),ee.current>_e.current&&(_e.current=ee.current,I(ee.current)),L.explosion&&(L.explosion.position.copy(te.position),L.explosion.visible=!0,L.explosion.children.forEach(tt=>{tt.material.opacity=.8,tt.scale.set(1,1,1)})),te.visible=!1,Ae.speed=0,pe.current=.12,me()))}),L.retroGrid&&L.retroGrid.visible&&(L.retroGrid.position.x=-Ae.posX),L.clouds.forEach(te=>{te.position.x+=te.userData.drift*le,te.position.x>350&&(te.position.x=-350)});const Ie=L.pGeo.attributes.position.array;for(let te=0;te<L.pVel.length;te++){const tt=L.pVel[te];Ie[te*3]+=(tt.x+Math.sin(rt*.001+tt.ph)*.5)*le,Ie[te*3+1]+=tt.y*le,Ie[te*3+2]+=de*le*.3+tt.z*le,(Ie[te*3+1]<0||Ie[te*3+2]>20)&&(Ie[te*3]=(Math.random()-.5)*80-Ae.posX,Ie[te*3+1]=5+Math.random()*20,Ie[te*3+2]=-20-Math.random()*80)}L.pGeo.attributes.position.needsUpdate=!0,L.shooters.forEach(te=>{te.userData.timer+=le*60,!te.userData.on&&te.userData.timer>te.userData.interval&&(te.userData.on=!0,te.userData.timer=0,te.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),te.material.opacity=1),te.userData.on&&(te.position.x+=te.userData.spd*le,te.position.y-=te.userData.spd*.3*le,te.material.opacity-=le*.8,te.material.opacity<=0&&(te.userData.on=!1,te.userData.interval=300+Math.random()*600,te.material.opacity=0))}),L.birds.forEach(te=>{te.position.x+=te.userData.fs*le,te.position.y=te.userData.baseY+Math.sin(rt*.002+te.userData.wp)*2,te.position.z+=de*le*.1;const tt=Math.sin(rt*.008+te.userData.wp);if(te.userData.wL&&(te.userData.wL.rotation.z=.3+tt*.4),te.userData.wR&&(te.userData.wR.rotation.z=-.3-tt*.4),te.position.x>250||te.position.z>50){const ot=25+Math.random()*40;te.userData.baseY=ot,te.position.set(-200-Math.random()*100,ot,-50-Math.random()*300)}}),L.wGrp&&(L.wGrp.rotation.z=Ae.steering*1.2+Math.sin(rt*.001)*.008);const Fe=Ae.speed/120;if(L.camera.position.y=3.5+Math.sin(rt*.004)*.02*Fe,L.camera.position.x=0,L.camera.rotation.y=Ae.angle*.5,pe.current>.001?pe.current*=Math.exp(-8*le):pe.current=0,L.camera.rotation.z=Ae.angle*-.15+Math.sin(rt*.002)*.003*Fe+Math.sin(rt*.03)*pe.current,L.interior&&(L.interior.rotation.y=Ae.angle*.5),L.speedoNeedle){const te=Math.min(Ae.speed/120,1),tt=Math.PI*.75-te*(Math.PI*1.5);L.speedoNeedle.rotation.z+=(tt-L.speedoNeedle.rotation.z)*(1-Math.exp(-6*le))}if(F.current){const te=F.current,tt=Math.min(Ae.speed/120,1),ot=1-Math.exp(-5*le);te.noiseGain.gain.value+=(tt*.05-te.noiseGain.gain.value)*ot;const Ot=35+tt*80;te.engOsc1.frequency.value+=(Ot-te.engOsc1.frequency.value)*ot,te.engOsc2.frequency.value+=(Ot*2-te.engOsc2.frequency.value)*ot,te.engGain.gain.value+=(.012+tt*.035-te.engGain.gain.value)*ot,te.engLPF.frequency.value+=(80+tt*200-te.engLPF.frequency.value)*ot;const xt=Math.max(0,(tt-.25)/.75)*.04;te.windGain.gain.value+=(xt-te.windGain.gain.value)*ot}const st=Math.min(Ae.speed/120,1);if(L.speedLinesPass&&(L.speedLinesPass.uniforms.intensity.value=Math.max(0,(st-.5)*2)*.8,L.speedLinesPass.uniforms.time.value=rt*.001),L.slMat&&(L.slMat.opacity=Math.max(0,(st-.4)*1.5)*.25),L.slGeo&&st>.4){const te=L.slGeo.attributes.position.array;for(let tt=0;tt<te.length/6;tt++)if(te[tt*6+2]+=de*le*1.5,te[tt*6+5]+=de*le*1.5,te[tt*6+2]>10){const ot=(Math.random()-.5)*30,Ot=Math.random()*8,xt=-30-Math.random()*40;te[tt*6]=ot,te[tt*6+1]=Ot,te[tt*6+2]=xt,te[tt*6+3]=ot,te[tt*6+4]=Ot,te[tt*6+5]=xt+1+st*3}L.slGeo.attributes.position.needsUpdate=!0}L.chromaPass&&(L.chromaPass.uniforms.amount.value=3e-4+st*.001),L.bloomPass&&(L.bloomPass.strength=.12+st*.12),L.hlConeL&&(L.hlConeL.material.uniforms.intensity.value=L.hlL.intensity>0?1:0),L.hlConeR&&(L.hlConeR.material.uniforms.intensity.value=L.hlR.intensity>0?1:0),L.composer.render()};return Me(),()=>{window.removeEventListener("resize",Z),cancelAnimationFrame(H.current),b.contains(q.domElement)&&b.removeChild(q.domElement),q.dispose()}},[ye,_t]),Ut.useEffect(()=>{const b=P.current;b.scene&&(_t(b.scene,v,b.sceneryPool,b.spawnRange),b.gndMat&&b.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[v]||4880954))},[v,_t]),Ut.useEffect(()=>{const b=P.current;if(!b.scene)return;b.scene.fog.color.set(b.fogC[m]),b.amb.color.set(b.ambC[m]),b.dir.color.set(b.dirC[m]),b.dir.intensity={day:1,sunset:.6,night:.2,retro:.4}[m],b.amb.intensity={day:.7,sunset:.5,night:.25,retro:.35}[m];const q=m!=="day";b.hlL.intensity=q?2:0,b.hlR.intensity=q?2:0;const L=m==="retro"?16711935:16777164;if(b.hlL.color.set(L),b.hlR.color.set(L),b.skyMat){const J={day:{top:2254506,mid:8900331,bottom:13166325,sun:16777200,sunDir:[.3,.5,-.8],sunSize:.04},sunset:{top:1708096,mid:16739125,bottom:16746581,sun:16768324,sunDir:[0,.08,-1],sunSize:.08},night:{top:133144,mid:657966,bottom:659488,sun:8947916,sunDir:[.5,-.3,-.8],sunSize:.01},retro:{top:655408,mid:1703987,bottom:2228292,sun:16711935,sunDir:[0,.2,-1],sunSize:.06}}[m];b.skyMat.uniforms.topColor.value.set(J.top),b.skyMat.uniforms.midColor.value.set(J.mid),b.skyMat.uniforms.bottomColor.value.set(J.bottom),b.skyMat.uniforms.sunColor.value.set(J.sun),b.skyMat.uniforms.sunDir.value.set(...J.sunDir).normalize(),b.skyMat.uniforms.sunSize.value=J.sunSize}if(b.colorPass){const Z={day:{warmth:.04,contrast:1.06},sunset:{warmth:.12,contrast:1.1},night:{warmth:-.03,contrast:1.15},retro:{warmth:.02,contrast:1.2}};b.colorPass.uniforms.warmth.value=Z[m].warmth,b.colorPass.uniforms.contrast.value=Z[m].contrast}if(b.bloomPass&&(b.bloomPass.threshold={day:.92,sunset:.85,night:.78,retro:.7}[m]),b.hemiL){const J={day:[8961023,4478242,.3],sunset:[16746564,3351057,.25],night:[1122884,1118481,.1],retro:[6684808,1114146,.2]}[m];b.hemiL.color.set(J[0]),b.hemiL.groundColor.set(J[1]),b.hemiL.intensity=J[2]}b.renderer&&(b.renderer.toneMappingExposure={day:1.3,sunset:1.1,night:.9,retro:1}[m]),b.gndMat&&b.gndMat.color.set(m==="retro"?655392:{forest:4880954,sakura:5933642,city:3815994}[v]||4880954),b.roadMat&&b.roadMat.color.set(m==="retro"?1114146:3355443),b.retroSun&&(b.retroSun.visible=m==="retro"),b.retroGrid&&(b.retroGrid.visible=m==="retro"),b.fillL&&(b.fillL.intensity={day:.4,sunset:.3,night:.5,retro:.6}[m],b.fillL.color.set(m==="retro"?6684842:4482730)),b.dashL&&(b.dashL.intensity={day:.2,sunset:.15,night:.3,retro:.2}[m]),b.stars&&(b.stars.visible=m==="night"||m==="retro",b.starMat.color.set(m==="retro"?16746751:16777215)),b.clouds&&b.clouds.forEach(Z=>{Z.visible=m==="day"||m==="sunset",Z.children.forEach(J=>{m==="sunset"?(J.material.color.set(16755319),J.material.opacity=.6):(J.material.color.set(16777215),J.material.opacity=.7)})}),b.shooters&&b.shooters.forEach(Z=>{Z.visible=m==="night"}),b.birds&&b.birds.forEach(Z=>{Z.visible=m==="day"||m==="sunset"}),b.pMat&&(v==="sakura"?(b.pMat.color.set(16758725),b.pMat.size=.5,b.pMat.opacity=.8):v==="city"?(b.pMat.color.set(m==="retro"?16729343:11184810),b.pMat.size=.2,b.pMat.opacity=.4):(b.pMat.color.set(m==="night"?8978346:m==="retro"?16729343:10079351),b.pMat.size=m==="night"?.3:.25,b.pMat.opacity=m==="night"?.7:.3))},[m,v]),Ut.useEffect(()=>{var ze;const b=P.current;if(!b.sCtx)return;const q=b.sCtx,L=b.sCanvas.width,Z=b.sCanvas.height;let J;const Me=((ze=r[l])==null?void 0:ze.name)||"",le=()=>{if(q.fillStyle="#020a04",q.fillRect(0,0,L,Z),!Me)q.fillStyle="#0a6",q.font="bold 16px monospace",q.textAlign="center",q.fillText("NO DISC",L/2,Z/2+5);else{const Ae=d,rt=Ae?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";q.fillStyle=rt,q.font="bold 14px monospace";const B=Me.toUpperCase(),Ce=q.measureText(B).width;if(Ce>L-20&&Ae?(q.textAlign="left",q.fillText(B,L-Date.now()*.03%(Ce+80),22)):(q.textAlign="center",q.fillText(B.length>18?B.slice(0,18)+"…":B,L/2,22)),q.fillStyle="#073",q.font="9px monospace",q.textAlign="left",q.fillText(`${l+1}/${r.length}`,6,46),q.fillStyle=Ae?"#0f4":"#073",q.font="11px monospace",q.textAlign="center",q.fillText(Ae?"▶ PLAYING":"❚❚ PAUSED",L/2,46),Ae){const se=Date.now()*.004;for(let de=0;de<8;de++){q.fillStyle=rt;const Ie=4+(Math.sin(se*(1.2+de*.4)+de*1.8)*.5+.5)*12+Math.sin(se*(.7+de*.3)+de*2.5)*2;q.fillRect(L-18-de*6,Z-4-Ie,4,Ie)}}}b.sTex&&(b.sTex.needsUpdate=!0),J=requestAnimationFrame(le)};return le(),()=>cancelAnimationFrame(J)},[r,l,d]);const Qe=((Ve=r[l])==null?void 0:Ve.name)||"";return je.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[je.jsx("style",{children:`
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
      `}),je.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),e&&je.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 40%, rgba(10,20,30,0.85) 0%, rgba(0,0,0,0.95) 100%)",backdropFilter:"blur(6px)",zIndex:10},children:[je.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg, #4ade80, #60a5fa, #a78bfa, #f472b6, #4ade80)",backgroundSize:"200% 100%",animation:"gradientShift 4s ease infinite"}}),je.jsxs("div",{style:{animation:"fadeSlideUp 0.8s ease both",textAlign:"center",marginBottom:8},children:[je.jsx("div",{style:{fontSize:14,letterSpacing:6,color:"rgba(255,255,255,0.3)",fontWeight:500,marginBottom:8},children:"WELCOME TO"}),je.jsx("div",{style:{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,letterSpacing:3,color:"#fff",animation:"lobbyGlow 3s ease-in-out infinite",lineHeight:1.1},children:"AERA CAR TESTER"}),je.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.35)",marginTop:8,letterSpacing:2},children:"SPATIAL AUDIO DRIVING EXPERIENCE"})]}),je.jsx("div",{style:{display:"flex",gap:16,marginTop:28,flexWrap:"wrap",justifyContent:"center",maxWidth:600,padding:"0 16px"},children:[{icon:"💿",text:"Collect records, avoid Labels",color:"#ffdd00",delay:"0.3s"},{icon:"📝",text:"Avoid getting Signed",color:"#ff6b6b",delay:"0.5s"},{icon:"🔊",text:"Test your track with spatial audio",color:"#4ade80",delay:"0.7s"}].map(({icon:b,text:q,color:L,delay:Z})=>je.jsxs("div",{style:{animation:`fadeSlideUp 0.7s ease ${Z} both`,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10,minWidth:170},children:[je.jsx("span",{style:{fontSize:22},children:b}),je.jsx("span",{style:{fontSize:13,color:L,fontWeight:600},children:q})]},q))}),je.jsxs("div",{style:{animation:"fadeSlideUp 0.7s ease 0.9s both",marginTop:36,textAlign:"center"},children:[je.jsx("div",{style:{fontSize:11,letterSpacing:3,color:"rgba(255,255,255,0.3)",marginBottom:12},children:"LOAD YOUR TRACKS (UP TO 3)"}),je.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[0,1,2].map(b=>{const q=r[b];return je.jsx("div",{style:{width:160,height:80,borderRadius:14,border:q?"1px solid rgba(74,222,128,0.3)":"2px dashed rgba(255,255,255,0.12)",background:q?"rgba(74,222,128,0.06)":"rgba(255,255,255,0.02)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",transition:"all 0.3s"},children:q?je.jsxs(je.Fragment,{children:[je.jsx("div",{style:{fontSize:11,color:"#4ade80",fontWeight:700,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"},children:q.name}),je.jsxs("div",{style:{fontSize:9,color:"rgba(255,255,255,0.3)",marginTop:4},children:["Track ",b+1]}),je.jsx("button",{onClick:()=>We(b),style:{position:"absolute",top:4,right:6,background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:14,cursor:"pointer",padding:0,lineHeight:1},children:"x"})]}):je.jsxs("label",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,width:"100%",height:"100%",justifyContent:"center"},children:[je.jsx("div",{style:{fontSize:22,opacity:.3},children:"+"}),je.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.25)"},children:"Add Track"}),je.jsx("input",{type:"file",accept:"audio/*",onChange:L=>{L.target.files[0]&&fe(L.target.files[0]),L.target.value=""},style:{display:"none"}})]})},b)})})]}),je.jsx("button",{onClick:Be,style:{animation:"fadeSlideUp 0.7s ease 1.1s both, lobbyPulse 2.5s ease-in-out 2s infinite",marginTop:36,background:"linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",border:"1px solid rgba(74,222,128,0.3)",borderRadius:16,padding:"16px 56px",color:"#4ade80",fontSize:20,fontWeight:800,cursor:"pointer",letterSpacing:4},onMouseEnter:b=>{b.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.3), rgba(96,165,250,0.3))",b.target.style.borderColor="rgba(74,222,128,0.6)"},onMouseLeave:b=>{b.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",b.target.style.borderColor="rgba(74,222,128,0.3)"},children:"START"}),je.jsx("div",{style:{animation:"fadeSlideUp 0.7s ease 1.3s both",fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:12},children:"Tracks are optional — you can drive without music"})]}),!e&&je.jsxs(je.Fragment,{children:[je.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:$==="record"?"radial-gradient(circle at 50% 50%, rgba(255,215,0,0.35), rgba(255,215,0,0) 70%)":$==="boom"?"radial-gradient(circle at 50% 60%, rgba(255,0,0,0.5), rgba(255,0,0,0) 70%)":"transparent",opacity:$?1:0,transition:"opacity 0.3s ease-out"}}),je.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:12,alignItems:"center",animation:"hudSlideIn 0.5s ease both"},children:[je.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 22px",color:"#fff",border:"1px solid rgba(255,255,255,0.08)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[je.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"SCORE"}),je.jsx("div",{style:{fontSize:30,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ffdd00",textShadow:"0 0 20px rgba(255,221,0,0.3)",letterSpacing:1,lineHeight:1.1},children:T})]}),g>0&&je.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 16px",color:"#fff",border:"1px solid rgba(255,215,0,0.12)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[je.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"BEST"}),je.jsx("div",{style:{fontSize:24,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ff8800",textShadow:"0 0 15px rgba(255,136,0,0.3)",lineHeight:1.1},children:g})]})]}),!D&&je.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 45%, rgba(40,0,0,0.7), rgba(0,0,0,0.8))",backdropFilter:"blur(6px)",animation:"fadeSlideUp 0.4s ease both"},children:[je.jsx("div",{style:{fontSize:"clamp(48px, 8vw, 72px)",fontWeight:900,color:"#ff3333",textShadow:"0 0 40px rgba(255,0,0,0.6), 0 0 80px rgba(255,0,0,0.2)",letterSpacing:6},children:"SIGNED"}),je.jsx("div",{style:{fontSize:15,color:"rgba(255,255,255,0.5)",marginTop:8,fontWeight:500,letterSpacing:1},children:"The label got you..."}),je.jsxs("div",{style:{fontSize:22,color:"#fff",marginTop:16,fontWeight:600},children:["Score: ",je.jsx("span",{style:{color:"#ffdd00",fontWeight:800,textShadow:"0 0 15px rgba(255,221,0,0.4)"},children:T})]}),T>=g&&T>0&&je.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:8,fontWeight:700,textShadow:"0 0 20px rgba(255,136,0,0.4)",animation:"glowPulse 1.5s ease infinite"},children:"NEW HIGH SCORE!"}),je.jsx("button",{onClick:Xe,style:{marginTop:28,background:"rgba(255,255,255,0.08)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:14,padding:"14px 40px",color:"#fff",fontSize:17,fontWeight:700,cursor:"pointer",letterSpacing:3,transition:"all 0.25s ease",boxShadow:"0 4px 20px rgba(0,0,0,0.3)"},onMouseEnter:b=>{b.target.style.background="rgba(255,255,255,0.18)",b.target.style.transform="scale(1.05)",b.target.style.boxShadow="0 6px 30px rgba(0,0,0,0.4)"},onMouseLeave:b=>{b.target.style.background="rgba(255,255,255,0.08)",b.target.style.transform="scale(1)",b.target.style.boxShadow="0 4px 20px rgba(0,0,0,0.3)"},children:"RESTART"})]}),r.length>0&&je.jsxs("div",{style:{position:"absolute",bottom:16,left:16,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:14,padding:"10px 16px",color:"#fff",display:"flex",alignItems:"center",gap:10,maxWidth:300,border:"1px solid rgba(255,255,255,0.08)",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",animation:"hudSlideIn 0.5s ease 0.2s both"},children:[r.length>1&&je.jsx("button",{onClick:be,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"2px 4px",opacity:.5,transition:"opacity 0.2s"},onMouseEnter:b=>b.target.style.opacity=1,onMouseLeave:b=>b.target.style.opacity=.5,children:"⏮"}),je.jsx("button",{onClick:xe,style:{background:"rgba(255,255,255,0.08)",border:"none",color:"#fff",fontSize:16,cursor:"pointer",padding:"4px 8px",borderRadius:8,transition:"background 0.2s"},onMouseEnter:b=>b.target.style.background="rgba(255,255,255,0.18)",onMouseLeave:b=>b.target.style.background="rgba(255,255,255,0.08)",children:d?"⏸":"▶"}),r.length>1&&je.jsx("button",{onClick:De,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"2px 4px",opacity:.5,transition:"opacity 0.2s"},onMouseEnter:b=>b.target.style.opacity=1,onMouseLeave:b=>b.target.style.opacity=.5,children:"⏭"}),je.jsxs("div",{style:{flex:1,minWidth:0,marginLeft:4},children:[je.jsx("div",{style:{fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:700,letterSpacing:.3},children:Qe}),je.jsxs("div",{style:{fontSize:9,opacity:.3,fontWeight:500},children:["Track ",l+1," of ",r.length]})]})]}),je.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end",animation:"hudSlideIn 0.5s ease 0.1s both"},children:[je.jsxs("div",{style:{background:"rgba(0,0,0,0.6)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"12px 20px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.08)",minWidth:95,boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[je.jsx("div",{style:{fontSize:36,fontWeight:800,fontFamily:"'Inter', monospace",color:M>80?"#ff6b6b":"#4ade80",textShadow:M>80?"0 0 20px rgba(255,107,107,0.4)":"0 0 15px rgba(74,222,128,0.3)",transition:"color 0.3s ease, text-shadow 0.3s ease",letterSpacing:-1,lineHeight:1},children:M}),je.jsx("div",{style:{fontSize:9,opacity:.35,letterSpacing:3,fontWeight:600,marginTop:2},children:"MPH"})]}),je.jsx("div",{style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:12,padding:"5px 6px",color:"#fff",display:"flex",gap:2,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:b,i:q})=>je.jsx("button",{onClick:()=>_(b),style:{background:m===b?"rgba(255,255,255,0.15)":"transparent",border:"none",borderRadius:8,padding:"5px 10px",color:"#fff",fontSize:15,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:L=>{m!==b&&(L.target.style.background="rgba(255,255,255,0.08)")},onMouseLeave:L=>{m!==b&&(L.target.style.background="transparent")},children:q},b))}),je.jsx("div",{style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:12,padding:"5px 6px",color:"#fff",display:"flex",gap:2,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:b,i:q,l:L})=>je.jsxs("button",{onClick:()=>x(b),style:{background:v===b?"rgba(255,255,255,0.15)":"transparent",border:"none",borderRadius:8,padding:"5px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontWeight:600,transition:"all 0.2s ease"},onMouseEnter:Z=>{v!==b&&(Z.target.style.background="rgba(255,255,255,0.08)")},onMouseLeave:Z=>{v!==b&&(Z.target.style.background="transparent")},children:[je.jsx("span",{style:{fontSize:15},children:q}),L]},b))})]}),je.jsx("div",{style:{position:"absolute",bottom:16,right:16,background:"rgba(0,0,0,0.45)",backdropFilter:"blur(16px) saturate(1.3)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)",animation:"hudSlideIn 0.5s ease 0.3s both"},children:je.jsxs("div",{style:{fontSize:11,opacity:.5,lineHeight:1.6,fontWeight:500,letterSpacing:.3},children:[je.jsx("span",{style:{color:"#4ade80",fontWeight:700},children:"SHIFT"})," go · ",je.jsx("span",{style:{color:"#fbbf24",fontWeight:700},children:"SPACE"})," brake · ",je.jsx("span",{style:{color:"#60a5fa",fontWeight:700},children:"A/D"})," steer"]})})]})]})}function Z1(){return je.jsx(K1,{})}Fv.createRoot(document.getElementById("root")).render(je.jsx(bv.StrictMode,{children:je.jsx(Z1,{})}));
