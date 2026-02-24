(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cu={exports:{}},$o={},bu={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function fv(){if(Up)return St;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(z,ue,He){this.props=z,this.context=ue,this.refs=T,this.updater=He||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,ue){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ue,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function g(){}g.prototype=y.prototype;function I(z,ue,He){this.props=z,this.context=ue,this.refs=T,this.updater=He||M}var D=I.prototype=new g;D.constructor=I,E(D,y.prototype),D.isPureReactComponent=!0;var C=Array.isArray,$=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function H(z,ue,He){var re,Me={},Ce=null,Te=null;if(ue!=null)for(re in ue.ref!==void 0&&(Te=ue.ref),ue.key!==void 0&&(Ce=""+ue.key),ue)$.call(ue,re)&&!O.hasOwnProperty(re)&&(Me[re]=ue[re]);var Ue=arguments.length-2;if(Ue===1)Me.children=He;else if(1<Ue){for(var Ge=Array(Ue),st=0;st<Ue;st++)Ge[st]=arguments[st+2];Me.children=Ge}if(z&&z.defaultProps)for(re in Ue=z.defaultProps,Ue)Me[re]===void 0&&(Me[re]=Ue[re]);return{$$typeof:s,type:z,key:Ce,ref:Te,props:Me,_owner:k.current}}function P(z,ue){return{$$typeof:s,type:z.type,key:ue,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function B(z){var ue={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(He){return ue[He]})}var oe=/\/+/g;function ne(z,ue){return typeof z=="object"&&z!==null&&z.key!=null?B(""+z.key):ue.toString(36)}function ve(z,ue,He,re,Me){var Ce=typeof z;(Ce==="undefined"||Ce==="boolean")&&(z=null);var Te=!1;if(z===null)Te=!0;else switch(Ce){case"string":case"number":Te=!0;break;case"object":switch(z.$$typeof){case s:case e:Te=!0}}if(Te)return Te=z,Me=Me(Te),z=re===""?"."+ne(Te,0):re,C(Me)?(He="",z!=null&&(He=z.replace(oe,"$&/")+"/"),ve(Me,ue,He,"",function(st){return st})):Me!=null&&(A(Me)&&(Me=P(Me,He+(!Me.key||Te&&Te.key===Me.key?"":(""+Me.key).replace(oe,"$&/")+"/")+z)),ue.push(Me)),1;if(Te=0,re=re===""?".":re+":",C(z))for(var Ue=0;Ue<z.length;Ue++){Ce=z[Ue];var Ge=re+ne(Ce,Ue);Te+=ve(Ce,ue,He,Ge,Me)}else if(Ge=x(z),typeof Ge=="function")for(z=Ge.call(z),Ue=0;!(Ce=z.next()).done;)Ce=Ce.value,Ge=re+ne(Ce,Ue++),Te+=ve(Ce,ue,He,Ge,Me);else if(Ce==="object")throw ue=String(z),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.");return Te}function ye(z,ue,He){if(z==null)return z;var re=[],Me=0;return ve(z,re,"","",function(Ce){return ue.call(He,Ce,Me++)}),re}function de(z){if(z._status===-1){var ue=z._result;ue=ue(),ue.then(function(He){(z._status===0||z._status===-1)&&(z._status=1,z._result=He)},function(He){(z._status===0||z._status===-1)&&(z._status=2,z._result=He)}),z._status===-1&&(z._status=0,z._result=ue)}if(z._status===1)return z._result.default;throw z._result}var fe={current:null},G={transition:null},_e={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:G,ReactCurrentOwner:k};function me(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:ye,forEach:function(z,ue,He){ye(z,function(){ue.apply(this,arguments)},He)},count:function(z){var ue=0;return ye(z,function(){ue++}),ue},toArray:function(z){return ye(z,function(ue){return ue})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},St.Component=y,St.Fragment=n,St.Profiler=a,St.PureComponent=I,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,St.act=me,St.cloneElement=function(z,ue,He){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var re=E({},z.props),Me=z.key,Ce=z.ref,Te=z._owner;if(ue!=null){if(ue.ref!==void 0&&(Ce=ue.ref,Te=k.current),ue.key!==void 0&&(Me=""+ue.key),z.type&&z.type.defaultProps)var Ue=z.type.defaultProps;for(Ge in ue)$.call(ue,Ge)&&!O.hasOwnProperty(Ge)&&(re[Ge]=ue[Ge]===void 0&&Ue!==void 0?Ue[Ge]:ue[Ge])}var Ge=arguments.length-2;if(Ge===1)re.children=He;else if(1<Ge){Ue=Array(Ge);for(var st=0;st<Ge;st++)Ue[st]=arguments[st+2];re.children=Ue}return{$$typeof:s,type:z.type,key:Me,ref:Ce,props:re,_owner:Te}},St.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:c,_context:z},z.Consumer=z},St.createElement=H,St.createFactory=function(z){var ue=H.bind(null,z);return ue.type=z,ue},St.createRef=function(){return{current:null}},St.forwardRef=function(z){return{$$typeof:d,render:z}},St.isValidElement=A,St.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:de}},St.memo=function(z,ue){return{$$typeof:m,type:z,compare:ue===void 0?null:ue}},St.startTransition=function(z){var ue=G.transition;G.transition={};try{z()}finally{G.transition=ue}},St.unstable_act=me,St.useCallback=function(z,ue){return fe.current.useCallback(z,ue)},St.useContext=function(z){return fe.current.useContext(z)},St.useDebugValue=function(){},St.useDeferredValue=function(z){return fe.current.useDeferredValue(z)},St.useEffect=function(z,ue){return fe.current.useEffect(z,ue)},St.useId=function(){return fe.current.useId()},St.useImperativeHandle=function(z,ue,He){return fe.current.useImperativeHandle(z,ue,He)},St.useInsertionEffect=function(z,ue){return fe.current.useInsertionEffect(z,ue)},St.useLayoutEffect=function(z,ue){return fe.current.useLayoutEffect(z,ue)},St.useMemo=function(z,ue){return fe.current.useMemo(z,ue)},St.useReducer=function(z,ue,He){return fe.current.useReducer(z,ue,He)},St.useRef=function(z){return fe.current.useRef(z)},St.useState=function(z){return fe.current.useState(z)},St.useSyncExternalStore=function(z,ue,He){return fe.current.useSyncExternalStore(z,ue,He)},St.useTransition=function(){return fe.current.useTransition()},St.version="18.3.1",St}var Np;function td(){return Np||(Np=1,bu.exports=fv()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function dv(){if(Fp)return $o;Fp=1;var s=td(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var v,_={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:M,props:_,_owner:a.current}}return $o.Fragment=n,$o.jsx=u,$o.jsxs=u,$o}var Op;function hv(){return Op||(Op=1,Cu.exports=dv()),Cu.exports}var We=hv(),Dt=td();const pv=Jm(Dt);var fl={},Pu={exports:{}},Jn={},Lu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function mv(){return kp||(kp=1,(function(s){function e(G,_e){var me=G.length;G.push(_e);e:for(;0<me;){var z=me-1>>>1,ue=G[z];if(0<a(ue,_e))G[z]=_e,G[me]=ue,me=z;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var _e=G[0],me=G.pop();if(me!==_e){G[0]=me;e:for(var z=0,ue=G.length,He=ue>>>1;z<He;){var re=2*(z+1)-1,Me=G[re],Ce=re+1,Te=G[Ce];if(0>a(Me,me))Ce<ue&&0>a(Te,Me)?(G[z]=Te,G[Ce]=me,z=Ce):(G[z]=Me,G[re]=me,z=re);else if(Ce<ue&&0>a(Te,me))G[z]=Te,G[Ce]=me,z=Ce;else break e}}return _e}function a(G,_e){var me=G.sortIndex-_e.sortIndex;return me!==0?me:G.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,_=null,x=3,M=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(G){for(var _e=n(m);_e!==null;){if(_e.callback===null)r(m);else if(_e.startTime<=G)r(m),_e.sortIndex=_e.expirationTime,e(p,_e);else break;_e=n(m)}}function C(G){if(T=!1,D(G),!E)if(n(p)!==null)E=!0,de($);else{var _e=n(m);_e!==null&&fe(C,_e.startTime-G)}}function $(G,_e){E=!1,T&&(T=!1,g(H),H=-1),M=!0;var me=x;try{for(D(_e),_=n(p);_!==null&&(!(_.expirationTime>_e)||G&&!B());){var z=_.callback;if(typeof z=="function"){_.callback=null,x=_.priorityLevel;var ue=z(_.expirationTime<=_e);_e=s.unstable_now(),typeof ue=="function"?_.callback=ue:_===n(p)&&r(p),D(_e)}else r(p);_=n(p)}if(_!==null)var He=!0;else{var re=n(m);re!==null&&fe(C,re.startTime-_e),He=!1}return He}finally{_=null,x=me,M=!1}}var k=!1,O=null,H=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function oe(){if(O!==null){var G=s.unstable_now();A=G;var _e=!0;try{_e=O(!0,G)}finally{_e?ne():(k=!1,O=null)}}else k=!1}var ne;if(typeof I=="function")ne=function(){I(oe)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ye=ve.port2;ve.port1.onmessage=oe,ne=function(){ye.postMessage(null)}}else ne=function(){y(oe,0)};function de(G){O=G,k||(k=!0,ne())}function fe(G,_e){H=y(function(){G(s.unstable_now())},_e)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,de($))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(G){switch(x){case 1:case 2:case 3:var _e=3;break;default:_e=x}var me=x;x=_e;try{return G()}finally{x=me}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,_e){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var me=x;x=G;try{return _e()}finally{x=me}},s.unstable_scheduleCallback=function(G,_e,me){var z=s.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?z+me:z):me=z,G){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=me+ue,G={id:v++,callback:_e,priorityLevel:G,startTime:me,expirationTime:ue,sortIndex:-1},me>z?(G.sortIndex=me,e(m,G),n(p)===null&&G===n(m)&&(T?(g(H),H=-1):T=!0,fe(C,me-z))):(G.sortIndex=ue,e(p,G),E||M||(E=!0,de($))),G},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(G){var _e=x;return function(){var me=x;x=_e;try{return G.apply(this,arguments)}finally{x=me}}}})(Du)),Du}var zp;function gv(){return zp||(zp=1,Lu.exports=mv()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function vv(){if(Bp)return Jn;Bp=1;var s=td(),e=gv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,f,h,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,l)&&(o=null),l||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),G=Symbol.iterator;function _e(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,z;function ue(t){if(z===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+t}var He=!1;function re(t,i){if(!t||He)return"";He=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var l=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){l=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){l=ce}t()}}catch(ce){if(ce&&l&&typeof ce.stack=="string"){for(var f=ce.stack.split(`
`),h=l.stack.split(`
`),S=f.length-1,N=h.length-1;1<=S&&0<=N&&f[S]!==h[N];)N--;for(;1<=S&&0<=N;S--,N--)if(f[S]!==h[N]){if(S!==1||N!==1)do if(S--,N--,0>N||f[S]!==h[N]){var V=`
`+f[S].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=S&&0<=N);break}}}finally{He=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ue(t):""}function Me(t){switch(t.tag){case 5:return ue(t.type);case 16:return ue("Lazy");case 13:return ue("Suspense");case 19:return ue("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function Ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case k:return"Portal";case P:return"Profiler";case H:return"StrictMode";case ne:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ye:return i=t.displayName||null,i!==null?i:Ce(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return Ce(t(i))}catch{}}return null}function Te(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ge(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function st(t){var i=Ge(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){l=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function It(t){t._valueTracker||(t._valueTracker=st(t))}function vt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ge(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Ot(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function K(t,i){var o=i.checked;return me({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function En(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ue(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ht(t,i){_t(t,i);var o=Ue(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Pt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Pt(t,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function it(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Pt(t,i,o){(i!=="number"||Ot(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var et=Array.isArray;function U(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ue(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return me({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function se(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(et(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ue(o)}}function b(t,i){var o=Ue(i.value),l=Ue(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function F(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function L(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?L(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Q,he=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Se(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xe=["Webkit","ms","Moz","O"];Object.keys(ge).forEach(function(t){xe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ge[i]=ge[t]})});function Ne(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ge.hasOwnProperty(t)&&ge[t]?(""+i).trim():i+"px"}function ze(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Ne(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var be=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(t,i){if(i){if(be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Xe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function X(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var W=null,ee=null,pe=null;function De(t){if(t=Uo(t)){if(typeof W!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Aa(i),W(t.stateNode,t.type,i))}}function Ie(t){ee?pe?pe.push(t):pe=[t]:ee=t}function nt(){if(ee){var t=ee,i=pe;if(pe=ee=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function At(t,i){return t(i)}function Ut(){}var xt=!1;function Jt(t,i,o){if(xt)return t(i,o);xt=!0;try{return At(t,i,o)}finally{xt=!1,(ee!==null||pe!==null)&&(Ut(),nt())}}function $t(t,i){var o=t.stateNode;if(o===null)return null;var l=Aa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var On=!1;if(d)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){On=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{On=!1}function jt(t,i,o,l,f,h,S,N,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(o,ce)}catch(we){this.onError(we)}}var zn=!1,gn=null,hi=!1,Ti=null,Gr={onError:function(t){zn=!0,gn=t}};function Xi(t,i,o,l,f,h,S,N,V){zn=!1,gn=null,jt.apply(Gr,arguments)}function Wr(t,i,o,l,f,h,S,N,V){if(Xi.apply(this,arguments),zn){if(zn){var ce=gn;zn=!1,gn=null}else throw Error(n(198));hi||(hi=!0,Ti=ce)}}function Lt(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Bn(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Xr(t){if(Lt(t)!==t)throw Error(n(188))}function ji(t){var i=t.alternate;if(!i){if(i=Lt(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return Xr(f),t;if(h===l)return Xr(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var S=!1,N=f.child;N;){if(N===o){S=!0,o=f,l=h;break}if(N===l){S=!0,l=f,o=h;break}N=N.sibling}if(!S){for(N=h.child;N;){if(N===o){S=!0,o=h,l=f;break}if(N===l){S=!0,l=h,o=f;break}N=N.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function R(t){return t=ji(t),t!==null?Y(t):null}function Y(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Y(t);if(i!==null)return i;t=t.sibling}return null}var ae=e.unstable_scheduleCallback,le=e.unstable_cancelCallback,q=e.unstable_shouldYield,Pe=e.unstable_requestPaint,Ae=e.unstable_now,je=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,lt=e.unstable_UserBlockingPriority,ct=e.unstable_NormalPriority,$e=e.unstable_LowPriority,Mt=e.unstable_IdlePriority,pt=null,yt=null;function qt(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(pt,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:ut,Ze=Math.log,Cn=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(Ze(t)/Cn|0)|0}var tn=64,bn=4194304;function Bt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,S=o&268435455;if(S!==0){var N=S&~f;N!==0?l=Bt(N):(h&=S,h!==0&&(l=Bt(h)))}else S=o&~f,S!==0?l=Bt(S):h!==0&&(l=Bt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-dt(i),f=1<<o,l|=t[o],i&=~f;return l}function Nt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var S=31-dt(h),N=1<<S,V=f[S];V===-1?((N&o)===0||(N&l)!==0)&&(f[S]=Nt(N,i)):V<=i&&(t.expiredLanes|=N),h&=~N}}function mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nn(){var t=tn;return tn<<=1,(tn&4194240)===0&&(tn=64),t}function Vn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function wn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-dt(i),t[i]=o}function jr(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-dt(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function qi(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-dt(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var Tt=0;function vo(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var _o,xs,fa,Oe,Qe,on=!1,Ht=[],an=null,Pn=null,Hn=null,pr=new Map,xo=new Map,mr=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(t,i){switch(t){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":pr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function yo(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Uo(i),i!==null&&xs(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ug(t,i,o,l,f){switch(i){case"focusin":return an=yo(an,t,i,o,l,f),!0;case"dragenter":return Pn=yo(Pn,t,i,o,l,f),!0;case"mouseover":return Hn=yo(Hn,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return pr.set(h,yo(pr.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,xo.set(h,yo(xo.get(h)||null,t,i,o,l,f)),!0}return!1}function _d(t){var i=qr(t.target);if(i!==null){var o=Lt(i);if(o!==null){if(i=o.tag,i===13){if(i=Bn(o),i!==null){t.blockedOn=i,Qe(t.priority,function(){fa(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function da(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);rt=l,o.target.dispatchEvent(l),rt=null}else return i=Uo(o),i!==null&&xs(i),t.blockedOn=o,!1;i.shift()}return!0}function xd(t,i,o){da(t)&&o.delete(i)}function Ng(){on=!1,an!==null&&da(an)&&(an=null),Pn!==null&&da(Pn)&&(Pn=null),Hn!==null&&da(Hn)&&(Hn=null),pr.forEach(xd),xo.forEach(xd)}function Mo(t,i){t.blockedOn===i&&(t.blockedOn=null,on||(on=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function So(t){function i(f){return Mo(f,t)}if(0<Ht.length){Mo(Ht[0],t);for(var o=1;o<Ht.length;o++){var l=Ht[o];l.blockedOn===t&&(l.blockedOn=null)}}for(an!==null&&Mo(an,t),Pn!==null&&Mo(Pn,t),Hn!==null&&Mo(Hn,t),pr.forEach(i),xo.forEach(i),o=0;o<mr.length;o++)l=mr[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<mr.length&&(o=mr[0],o.blockedOn===null);)_d(o),o.blockedOn===null&&mr.shift()}var ys=C.ReactCurrentBatchConfig,ha=!0;function Fg(t,i,o,l){var f=Tt,h=ys.transition;ys.transition=null;try{Tt=1,ec(t,i,o,l)}finally{Tt=f,ys.transition=h}}function Og(t,i,o,l){var f=Tt,h=ys.transition;ys.transition=null;try{Tt=4,ec(t,i,o,l)}finally{Tt=f,ys.transition=h}}function ec(t,i,o,l){if(ha){var f=tc(t,i,o,l);if(f===null)_c(t,i,l,pa,o),vd(t,l);else if(Ug(f,t,i,o,l))l.stopPropagation();else if(vd(t,l),i&4&&-1<Ig.indexOf(t)){for(;f!==null;){var h=Uo(f);if(h!==null&&_o(h),h=tc(t,i,o,l),h===null&&_c(t,i,l,pa,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else _c(t,i,l,null,o)}}var pa=null;function tc(t,i,o,l){if(pa=null,t=X(l),t=qr(t),t!==null)if(i=Lt(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Bn(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return pa=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(je()){case Be:return 1;case lt:return 4;case ct:case $e:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var gr=null,nc=null,ma=null;function Md(){if(ma)return ma;var t,i=nc,o=i.length,l,f="value"in gr?gr.value:gr.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(l=1;l<=S&&i[o-l]===f[h-l];l++);return ma=f.slice(t,1<l?1-l:void 0)}function ga(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function Sd(){return!1}function si(t){function i(o,l,f,h,S){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?va:Sd,this.isPropagationStopped=Sd,this}return me(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=si(Ms),Eo=me({},Ms,{view:0,detail:0}),kg=si(Eo),rc,sc,wo,_a=me({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(rc=t.screenX-wo.screenX,sc=t.screenY-wo.screenY):sc=rc=0,wo=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Ed=si(_a),zg=me({},_a,{dataTransfer:0}),Bg=si(zg),Vg=me({},Eo,{relatedTarget:0}),oc=si(Vg),Hg=me({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=si(Hg),Wg=me({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xg=si(Wg),jg=me({},Ms,{data:0}),wd=si(jg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$g[t])?!!i[t]:!1}function ac(){return Kg}var Zg=me({},Eo,{key:function(t){if(t.key){var i=qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qg=si(Zg),Jg=me({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=si(Jg),e0=me({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),t0=si(e0),n0=me({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=si(n0),r0=me({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=si(r0),o0=[9,13,27,32],lc=d&&"CompositionEvent"in window,To=null;d&&"documentMode"in document&&(To=document.documentMode);var a0=d&&"TextEvent"in window&&!To,Ad=d&&(!lc||To&&8<To&&11>=To),Rd=" ",Cd=!1;function bd(t,i){switch(t){case"keyup":return o0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function l0(t,i){switch(t){case"compositionend":return Pd(i);case"keypress":return i.which!==32?null:(Cd=!0,Rd);case"textInput":return t=i.data,t===Rd&&Cd?null:t;default:return null}}function c0(t,i){if(Ss)return t==="compositionend"||!lc&&bd(t,i)?(t=Md(),ma=nc=gr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!u0[t.type]:i==="textarea"}function Dd(t,i,o,l){Ie(l),i=Ea(i,"onChange"),0<i.length&&(o=new ic("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var Ao=null,Ro=null;function f0(t){Kd(t,0)}function xa(t){var i=Rs(t);if(vt(i))return t}function d0(t,i){if(t==="change")return i}var Id=!1;if(d){var cc;if(d){var uc="oninput"in document;if(!uc){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),uc=typeof Ud.oninput=="function"}cc=uc}else cc=!1;Id=cc&&(!document.documentMode||9<document.documentMode)}function Nd(){Ao&&(Ao.detachEvent("onpropertychange",Fd),Ro=Ao=null)}function Fd(t){if(t.propertyName==="value"&&xa(Ro)){var i=[];Dd(i,Ro,t,X(t)),Jt(f0,i)}}function h0(t,i,o){t==="focusin"?(Nd(),Ao=i,Ro=o,Ao.attachEvent("onpropertychange",Fd)):t==="focusout"&&Nd()}function p0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xa(Ro)}function m0(t,i){if(t==="click")return xa(i)}function g0(t,i){if(t==="input"||t==="change")return xa(i)}function v0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ai=typeof Object.is=="function"?Object.is:v0;function Co(t,i){if(Ai(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!Ai(t[f],i[f]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,i){var o=Od(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function zd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var t=window,i=Ot();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ot(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function _0(t){var i=Bd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&zd(o.ownerDocument.documentElement,o)){if(l!==null&&fc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=kd(o,h);var S=kd(o,l);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x0=d&&"documentMode"in document&&11>=document.documentMode,Es=null,dc=null,bo=null,hc=!1;function Vd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hc||Es==null||Es!==Ot(l)||(l=Es,"selectionStart"in l&&fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&Co(bo,l)||(bo=l,l=Ea(dc,"onSelect"),0<l.length&&(i=new ic("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Es)))}function ya(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ws={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},pc={},Hd={};d&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Ma(t){if(pc[t])return pc[t];if(!ws[t])return t;var i=ws[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Hd)return pc[t]=i[o];return t}var Gd=Ma("animationend"),Wd=Ma("animationiteration"),Xd=Ma("animationstart"),jd=Ma("transitionend"),qd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,i){qd.set(t,i),c(i,[t])}for(var mc=0;mc<Yd.length;mc++){var gc=Yd[mc],y0=gc.toLowerCase(),M0=gc[0].toUpperCase()+gc.slice(1);vr(y0,"on"+M0)}vr(Gd,"onAnimationEnd"),vr(Wd,"onAnimationIteration"),vr(Xd,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(jd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function $d(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Wr(l,i,void 0,t),t.currentTarget=null}function Kd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var N=l[S],V=N.instance,ce=N.currentTarget;if(N=N.listener,V!==h&&f.isPropagationStopped())break e;$d(f,N,ce),h=V}else for(S=0;S<l.length;S++){if(N=l[S],V=N.instance,ce=N.currentTarget,N=N.listener,V!==h&&f.isPropagationStopped())break e;$d(f,N,ce),h=V}}}if(hi)throw t=Ti,hi=!1,Ti=null,t}function Gt(t,i){var o=i[wc];o===void 0&&(o=i[wc]=new Set);var l=t+"__bubble";o.has(l)||(Zd(i,t,2,!1),o.add(l))}function vc(t,i,o){var l=0;i&&(l|=4),Zd(o,t,l,i)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[Sa]){t[Sa]=!0,r.forEach(function(o){o!=="selectionchange"&&(S0.has(o)||vc(o,!1,t),vc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Sa]||(i[Sa]=!0,vc("selectionchange",!1,i))}}function Zd(t,i,o,l){switch(yd(i)){case 1:var f=Fg;break;case 4:f=Og;break;default:f=ec}o=f.bind(null,i,o,t),f=void 0,!On||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function _c(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var N=l.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&(V=S.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;S=S.return}for(;N!==null;){if(S=qr(N),S===null)return;if(V=S.tag,V===5||V===6){l=h=S;continue e}N=N.parentNode}}l=l.return}Jt(function(){var ce=h,we=X(o),Re=[];e:{var Ee=qd.get(t);if(Ee!==void 0){var Ve=ic,Ye=t;switch(t){case"keypress":if(ga(o)===0)break e;case"keydown":case"keyup":Ve=Qg;break;case"focusin":Ye="focus",Ve=oc;break;case"focusout":Ye="blur",Ve=oc;break;case"beforeblur":case"afterblur":Ve=oc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=t0;break;case Gd:case Wd:case Xd:Ve=Gg;break;case jd:Ve=i0;break;case"scroll":Ve=kg;break;case"wheel":Ve=s0;break;case"copy":case"cut":case"paste":Ve=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Td}var Ke=(i&4)!==0,rn=!Ke&&t==="scroll",J=Ke?Ee!==null?Ee+"Capture":null:Ee;Ke=[];for(var j=ce,ie;j!==null;){ie=j;var Le=ie.stateNode;if(ie.tag===5&&Le!==null&&(ie=Le,J!==null&&(Le=$t(j,J),Le!=null&&Ke.push(Do(j,Le,ie)))),rn)break;j=j.return}0<Ke.length&&(Ee=new Ve(Ee,Ye,null,o,we),Re.push({event:Ee,listeners:Ke}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",Ee&&o!==rt&&(Ye=o.relatedTarget||o.fromElement)&&(qr(Ye)||Ye[Yi]))break e;if((Ve||Ee)&&(Ee=we.window===we?we:(Ee=we.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ve?(Ye=o.relatedTarget||o.toElement,Ve=ce,Ye=Ye?qr(Ye):null,Ye!==null&&(rn=Lt(Ye),Ye!==rn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Ve=null,Ye=ce),Ve!==Ye)){if(Ke=Ed,Le="onMouseLeave",J="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Ke=Td,Le="onPointerLeave",J="onPointerEnter",j="pointer"),rn=Ve==null?Ee:Rs(Ve),ie=Ye==null?Ee:Rs(Ye),Ee=new Ke(Le,j+"leave",Ve,o,we),Ee.target=rn,Ee.relatedTarget=ie,Le=null,qr(we)===ce&&(Ke=new Ke(J,j+"enter",Ye,o,we),Ke.target=ie,Ke.relatedTarget=rn,Le=Ke),rn=Le,Ve&&Ye)t:{for(Ke=Ve,J=Ye,j=0,ie=Ke;ie;ie=Ts(ie))j++;for(ie=0,Le=J;Le;Le=Ts(Le))ie++;for(;0<j-ie;)Ke=Ts(Ke),j--;for(;0<ie-j;)J=Ts(J),ie--;for(;j--;){if(Ke===J||J!==null&&Ke===J.alternate)break t;Ke=Ts(Ke),J=Ts(J)}Ke=null}else Ke=null;Ve!==null&&Qd(Re,Ee,Ve,Ke,!1),Ye!==null&&rn!==null&&Qd(Re,rn,Ye,Ke,!0)}}e:{if(Ee=ce?Rs(ce):window,Ve=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&Ee.type==="file")var Je=d0;else if(Ld(Ee))if(Id)Je=g0;else{Je=p0;var ot=h0}else(Ve=Ee.nodeName)&&Ve.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=m0);if(Je&&(Je=Je(t,ce))){Dd(Re,Je,o,we);break e}ot&&ot(t,Ee,ce),t==="focusout"&&(ot=Ee._wrapperState)&&ot.controlled&&Ee.type==="number"&&Pt(Ee,"number",Ee.value)}switch(ot=ce?Rs(ce):window,t){case"focusin":(Ld(ot)||ot.contentEditable==="true")&&(Es=ot,dc=ce,bo=null);break;case"focusout":bo=dc=Es=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Vd(Re,o,we);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Vd(Re,o,we)}var at;if(lc)e:{switch(t){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ss?bd(t,o)&&(ft="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ft="onCompositionStart");ft&&(Ad&&o.locale!=="ko"&&(Ss||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ss&&(at=Md()):(gr=we,nc="value"in gr?gr.value:gr.textContent,Ss=!0)),ot=Ea(ce,ft),0<ot.length&&(ft=new wd(ft,t,null,o,we),Re.push({event:ft,listeners:ot}),at?ft.data=at:(at=Pd(o),at!==null&&(ft.data=at)))),(at=a0?l0(t,o):c0(t,o))&&(ce=Ea(ce,"onBeforeInput"),0<ce.length&&(we=new wd("onBeforeInput","beforeinput",null,o,we),Re.push({event:we,listeners:ce}),we.data=at))}Kd(Re,i)})}function Do(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ea(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=$t(t,o),h!=null&&l.unshift(Do(t,h,f)),h=$t(t,i),h!=null&&l.push(Do(t,h,f))),t=t.return}return l}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,i,o,l,f){for(var h=i._reactName,S=[];o!==null&&o!==l;){var N=o,V=N.alternate,ce=N.stateNode;if(V!==null&&V===l)break;N.tag===5&&ce!==null&&(N=ce,f?(V=$t(o,h),V!=null&&S.unshift(Do(o,V,N))):f||(V=$t(o,h),V!=null&&S.push(Do(o,V,N)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var E0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(E0,`
`).replace(w0,"")}function wa(t,i,o){if(i=Jd(i),Jd(t)!==i&&o)throw Error(n(425))}function Ta(){}var xc=null,yc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(R0)}:Sc;function R0(t){setTimeout(function(){throw t})}function Ec(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),So(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);So(i)}function _r(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),zi="__reactFiber$"+As,Io="__reactProps$"+As,Yi="__reactContainer$"+As,wc="__reactEvents$"+As,C0="__reactListeners$"+As,b0="__reactHandles$"+As;function qr(t){var i=t[zi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Yi]||o[zi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=th(t);t!==null;){if(o=t[zi])return o;t=th(t)}return i}t=o,o=t.parentNode}return null}function Uo(t){return t=t[zi]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Aa(t){return t[Io]||null}var Tc=[],Cs=-1;function xr(t){return{current:t}}function Wt(t){0>Cs||(t.current=Tc[Cs],Tc[Cs]=null,Cs--)}function Vt(t,i){Cs++,Tc[Cs]=t.current,t.current=i}var yr={},Ln=xr(yr),Yn=xr(!1),Yr=yr;function bs(t,i){var o=t.type.contextTypes;if(!o)return yr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function $n(t){return t=t.childContextTypes,t!=null}function Ra(){Wt(Yn),Wt(Ln)}function nh(t,i,o){if(Ln.current!==yr)throw Error(n(168));Vt(Ln,i),Vt(Yn,o)}function ih(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Te(t)||"Unknown",f));return me({},o,l)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Yr=Ln.current,Vt(Ln,t),Vt(Yn,Yn.current),!0}function rh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ih(t,i,Yr),l.__reactInternalMemoizedMergedChildContext=t,Wt(Yn),Wt(Ln),Vt(Ln,t)):Wt(Yn),Vt(Yn,o)}var $i=null,ba=!1,Ac=!1;function sh(t){$i===null?$i=[t]:$i.push(t)}function P0(t){ba=!0,sh(t)}function Mr(){if(!Ac&&$i!==null){Ac=!0;var t=0,i=Tt;try{var o=$i;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}$i=null,ba=!1}catch(f){throw $i!==null&&($i=$i.slice(t+1)),ae(Be,Mr),f}finally{Tt=i,Ac=!1}}return null}var Ps=[],Ls=0,Pa=null,La=0,gi=[],vi=0,$r=null,Ki=1,Zi="";function Kr(t,i){Ps[Ls++]=La,Ps[Ls++]=Pa,Pa=t,La=i}function oh(t,i,o){gi[vi++]=Ki,gi[vi++]=Zi,gi[vi++]=$r,$r=t;var l=Ki;t=Zi;var f=32-dt(l)-1;l&=~(1<<f),o+=1;var h=32-dt(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Ki=1<<32-dt(i)+f|o<<f|l,Zi=h+t}else Ki=1<<h|o<<f|l,Zi=t}function Rc(t){t.return!==null&&(Kr(t,1),oh(t,1,0))}function Cc(t){for(;t===Pa;)Pa=Ps[--Ls],Ps[Ls]=null,La=Ps[--Ls],Ps[Ls]=null;for(;t===$r;)$r=gi[--vi],gi[vi]=null,Zi=gi[--vi],gi[vi]=null,Ki=gi[--vi],gi[vi]=null}var oi=null,ai=null,Yt=!1,Ri=null;function ah(t,i){var o=Mi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,oi=t,ai=_r(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,oi=t,ai=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=$r!==null?{id:Ki,overflow:Zi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Mi(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,oi=t,ai=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(Yt){var i=ai;if(i){var o=i;if(!lh(t,i)){if(bc(t))throw Error(n(418));i=_r(o.nextSibling);var l=oi;i&&lh(t,i)?ah(l,o):(t.flags=t.flags&-4097|2,Yt=!1,oi=t)}}else{if(bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Yt=!1,oi=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;oi=t}function Da(t){if(t!==oi)return!1;if(!Yt)return ch(t),Yt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=ai)){if(bc(t))throw uh(),Error(n(418));for(;i;)ah(t,i),i=_r(i.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){ai=_r(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}ai=null}}else ai=oi?_r(t.stateNode.nextSibling):null;return!0}function uh(){for(var t=ai;t;)t=_r(t.nextSibling)}function Ds(){ai=oi=null,Yt=!1}function Lc(t){Ri===null?Ri=[t]:Ri.push(t)}var L0=C.ReactCurrentBatchConfig;function No(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(S){var N=f.refs;S===null?delete N[h]:N[h]=S},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ia(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function dh(t){function i(J,j){if(t){var ie=J.deletions;ie===null?(J.deletions=[j],J.flags|=16):ie.push(j)}}function o(J,j){if(!t)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function l(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function f(J,j){return J=br(J,j),J.index=0,J.sibling=null,J}function h(J,j,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<j?(J.flags|=2,j):ie):(J.flags|=2,j)):(J.flags|=1048576,j)}function S(J){return t&&J.alternate===null&&(J.flags|=2),J}function N(J,j,ie,Le){return j===null||j.tag!==6?(j=Su(ie,J.mode,Le),j.return=J,j):(j=f(j,ie),j.return=J,j)}function V(J,j,ie,Le){var Je=ie.type;return Je===O?we(J,j,ie.props.children,Le,ie.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===de&&fh(Je)===j.type)?(Le=f(j,ie.props),Le.ref=No(J,j,ie),Le.return=J,Le):(Le=il(ie.type,ie.key,ie.props,null,J.mode,Le),Le.ref=No(J,j,ie),Le.return=J,Le)}function ce(J,j,ie,Le){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Eu(ie,J.mode,Le),j.return=J,j):(j=f(j,ie.children||[]),j.return=J,j)}function we(J,j,ie,Le,Je){return j===null||j.tag!==7?(j=rs(ie,J.mode,Le,Je),j.return=J,j):(j=f(j,ie),j.return=J,j)}function Re(J,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Su(""+j,J.mode,ie),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case $:return ie=il(j.type,j.key,j.props,null,J.mode,ie),ie.ref=No(J,null,j),ie.return=J,ie;case k:return j=Eu(j,J.mode,ie),j.return=J,j;case de:var Le=j._init;return Re(J,Le(j._payload),ie)}if(et(j)||_e(j))return j=rs(j,J.mode,ie,null),j.return=J,j;Ia(J,j)}return null}function Ee(J,j,ie,Le){var Je=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:N(J,j,""+ie,Le);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case $:return ie.key===Je?V(J,j,ie,Le):null;case k:return ie.key===Je?ce(J,j,ie,Le):null;case de:return Je=ie._init,Ee(J,j,Je(ie._payload),Le)}if(et(ie)||_e(ie))return Je!==null?null:we(J,j,ie,Le,null);Ia(J,ie)}return null}function Ve(J,j,ie,Le,Je){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return J=J.get(ie)||null,N(j,J,""+Le,Je);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case $:return J=J.get(Le.key===null?ie:Le.key)||null,V(j,J,Le,Je);case k:return J=J.get(Le.key===null?ie:Le.key)||null,ce(j,J,Le,Je);case de:var ot=Le._init;return Ve(J,j,ie,ot(Le._payload),Je)}if(et(Le)||_e(Le))return J=J.get(ie)||null,we(j,J,Le,Je,null);Ia(j,Le)}return null}function Ye(J,j,ie,Le){for(var Je=null,ot=null,at=j,ft=j=0,yn=null;at!==null&&ft<ie.length;ft++){at.index>ft?(yn=at,at=null):yn=at.sibling;var bt=Ee(J,at,ie[ft],Le);if(bt===null){at===null&&(at=yn);break}t&&at&&bt.alternate===null&&i(J,at),j=h(bt,j,ft),ot===null?Je=bt:ot.sibling=bt,ot=bt,at=yn}if(ft===ie.length)return o(J,at),Yt&&Kr(J,ft),Je;if(at===null){for(;ft<ie.length;ft++)at=Re(J,ie[ft],Le),at!==null&&(j=h(at,j,ft),ot===null?Je=at:ot.sibling=at,ot=at);return Yt&&Kr(J,ft),Je}for(at=l(J,at);ft<ie.length;ft++)yn=Ve(at,J,ft,ie[ft],Le),yn!==null&&(t&&yn.alternate!==null&&at.delete(yn.key===null?ft:yn.key),j=h(yn,j,ft),ot===null?Je=yn:ot.sibling=yn,ot=yn);return t&&at.forEach(function(Pr){return i(J,Pr)}),Yt&&Kr(J,ft),Je}function Ke(J,j,ie,Le){var Je=_e(ie);if(typeof Je!="function")throw Error(n(150));if(ie=Je.call(ie),ie==null)throw Error(n(151));for(var ot=Je=null,at=j,ft=j=0,yn=null,bt=ie.next();at!==null&&!bt.done;ft++,bt=ie.next()){at.index>ft?(yn=at,at=null):yn=at.sibling;var Pr=Ee(J,at,bt.value,Le);if(Pr===null){at===null&&(at=yn);break}t&&at&&Pr.alternate===null&&i(J,at),j=h(Pr,j,ft),ot===null?Je=Pr:ot.sibling=Pr,ot=Pr,at=yn}if(bt.done)return o(J,at),Yt&&Kr(J,ft),Je;if(at===null){for(;!bt.done;ft++,bt=ie.next())bt=Re(J,bt.value,Le),bt!==null&&(j=h(bt,j,ft),ot===null?Je=bt:ot.sibling=bt,ot=bt);return Yt&&Kr(J,ft),Je}for(at=l(J,at);!bt.done;ft++,bt=ie.next())bt=Ve(at,J,ft,bt.value,Le),bt!==null&&(t&&bt.alternate!==null&&at.delete(bt.key===null?ft:bt.key),j=h(bt,j,ft),ot===null?Je=bt:ot.sibling=bt,ot=bt);return t&&at.forEach(function(uv){return i(J,uv)}),Yt&&Kr(J,ft),Je}function rn(J,j,ie,Le){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case $:e:{for(var Je=ie.key,ot=j;ot!==null;){if(ot.key===Je){if(Je=ie.type,Je===O){if(ot.tag===7){o(J,ot.sibling),j=f(ot,ie.props.children),j.return=J,J=j;break e}}else if(ot.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===de&&fh(Je)===ot.type){o(J,ot.sibling),j=f(ot,ie.props),j.ref=No(J,ot,ie),j.return=J,J=j;break e}o(J,ot);break}else i(J,ot);ot=ot.sibling}ie.type===O?(j=rs(ie.props.children,J.mode,Le,ie.key),j.return=J,J=j):(Le=il(ie.type,ie.key,ie.props,null,J.mode,Le),Le.ref=No(J,j,ie),Le.return=J,J=Le)}return S(J);case k:e:{for(ot=ie.key;j!==null;){if(j.key===ot)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){o(J,j.sibling),j=f(j,ie.children||[]),j.return=J,J=j;break e}else{o(J,j);break}else i(J,j);j=j.sibling}j=Eu(ie,J.mode,Le),j.return=J,J=j}return S(J);case de:return ot=ie._init,rn(J,j,ot(ie._payload),Le)}if(et(ie))return Ye(J,j,ie,Le);if(_e(ie))return Ke(J,j,ie,Le);Ia(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(o(J,j.sibling),j=f(j,ie),j.return=J,J=j):(o(J,j),j=Su(ie,J.mode,Le),j.return=J,J=j),S(J)):o(J,j)}return rn}var Is=dh(!0),hh=dh(!1),Ua=xr(null),Na=null,Us=null,Dc=null;function Ic(){Dc=Us=Na=null}function Uc(t){var i=Ua.current;Wt(Ua),t._currentValue=i}function Nc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Ns(t,i){Na=t,Dc=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Kn=!0),t.firstContext=null)}function _i(t){var i=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:i,next:null},Us===null){if(Na===null)throw Error(n(308));Us=t,Na.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return i}var Zr=null;function Fc(t){Zr===null?Zr=[t]:Zr.push(t)}function ph(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Fc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Qi(t,l)}function Qi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Sr=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ji(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Er(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Rt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Qi(t,o)}return f=l.interleaved,f===null?(i.next=i,Fc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Qi(t,o)}function Fa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,qi(t,o)}}function gh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=S:h=h.next=S,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Oa(t,i,o,l){var f=t.updateQueue;Sr=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var V=N,ce=V.next;V.next=null,S===null?h=ce:S.next=ce,S=V;var we=t.alternate;we!==null&&(we=we.updateQueue,N=we.lastBaseUpdate,N!==S&&(N===null?we.firstBaseUpdate=ce:N.next=ce,we.lastBaseUpdate=V))}if(h!==null){var Re=f.baseState;S=0,we=ce=V=null,N=h;do{var Ee=N.lane,Ve=N.eventTime;if((l&Ee)===Ee){we!==null&&(we=we.next={eventTime:Ve,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ye=t,Ke=N;switch(Ee=i,Ve=o,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Re=Ye.call(Ve,Re,Ee);break e}Re=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,Ee=typeof Ye=="function"?Ye.call(Ve,Re,Ee):Ye,Ee==null)break e;Re=me({},Re,Ee);break e;case 2:Sr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,Ee=f.effects,Ee===null?f.effects=[N]:Ee.push(N))}else Ve={eventTime:Ve,lane:Ee,tag:N.tag,payload:N.payload,callback:N.callback,next:null},we===null?(ce=we=Ve,V=Re):we=we.next=Ve,S|=Ee;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Ee=N,N=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);if(we===null&&(V=Re),f.baseState=V,f.firstBaseUpdate=ce,f.lastBaseUpdate=we,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);es|=S,t.lanes=S,t.memoizedState=Re}}function vh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Fo={},Bi=xr(Fo),Oo=xr(Fo),ko=xr(Fo);function Qr(t){if(t===Fo)throw Error(n(174));return t}function kc(t,i){switch(Vt(ko,i),Vt(Oo,t),Vt(Bi,Fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:te(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=te(i,t)}Wt(Bi),Vt(Bi,i)}function Fs(){Wt(Bi),Wt(Oo),Wt(ko)}function _h(t){Qr(ko.current);var i=Qr(Bi.current),o=te(i,t.type);i!==o&&(Vt(Oo,t),Vt(Bi,o))}function zc(t){Oo.current===t&&(Wt(Bi),Wt(Oo))}var Kt=xr(0);function ka(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function Vc(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var za=C.ReactCurrentDispatcher,Hc=C.ReactCurrentBatchConfig,Jr=0,Zt=null,fn=null,_n=null,Ba=!1,zo=!1,Bo=0,D0=0;function Dn(){throw Error(n(321))}function Gc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ai(t[o],i[o]))return!1;return!0}function Wc(t,i,o,l,f,h){if(Jr=h,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=t===null||t.memoizedState===null?F0:O0,t=o(l,f),zo){h=0;do{if(zo=!1,Bo=0,25<=h)throw Error(n(301));h+=1,_n=fn=null,i.updateQueue=null,za.current=k0,t=o(l,f)}while(zo)}if(za.current=Ga,i=fn!==null&&fn.next!==null,Jr=0,_n=fn=Zt=null,Ba=!1,i)throw Error(n(300));return t}function Xc(){var t=Bo!==0;return Bo=0,t}function Vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Zt.memoizedState=_n=t:_n=_n.next=t,_n}function xi(){if(fn===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var i=_n===null?Zt.memoizedState:_n.next;if(i!==null)_n=i,fn=t;else{if(t===null)throw Error(n(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},_n===null?Zt.memoizedState=_n=t:_n=_n.next=t}return _n}function Vo(t,i){return typeof i=="function"?i(t):i}function jc(t){var i=xi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=fn,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var N=S=null,V=null,ce=h;do{var we=ce.lane;if((Jr&we)===we)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),l=ce.hasEagerState?ce.eagerState:t(l,ce.action);else{var Re={lane:we,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(N=V=Re,S=l):V=V.next=Re,Zt.lanes|=we,es|=we}ce=ce.next}while(ce!==null&&ce!==h);V===null?S=l:V.next=N,Ai(l,i.memoizedState)||(Kn=!0),i.memoizedState=l,i.baseState=S,i.baseQueue=V,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,Zt.lanes|=h,es|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qc(t){var i=xi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);Ai(h,i.memoizedState)||(Kn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function xh(){}function yh(t,i){var o=Zt,l=xi(),f=i(),h=!Ai(l.memoizedState,f);if(h&&(l.memoizedState=f,Kn=!0),l=l.queue,Yc(Eh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Ho(9,Sh.bind(null,o,l,f,i),void 0,null),xn===null)throw Error(n(349));(Jr&30)!==0||Mh(o,i,f)}return f}function Mh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Sh(t,i,o,l){i.value=o,i.getSnapshot=l,wh(i)&&Th(t)}function Eh(t,i,o){return o(function(){wh(i)&&Th(t)})}function wh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ai(t,o)}catch{return!0}}function Th(t){var i=Qi(t,1);i!==null&&Li(i,t,1,-1)}function Ah(t){var i=Vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},i.queue=t,t=t.dispatch=N0.bind(null,Zt,t),[i.memoizedState,t]}function Ho(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return xi().memoizedState}function Va(t,i,o,l){var f=Vi();Zt.flags|=t,f.memoizedState=Ho(1|i,o,void 0,l===void 0?null:l)}function Ha(t,i,o,l){var f=xi();l=l===void 0?null:l;var h=void 0;if(fn!==null){var S=fn.memoizedState;if(h=S.destroy,l!==null&&Gc(l,S.deps)){f.memoizedState=Ho(i,o,h,l);return}}Zt.flags|=t,f.memoizedState=Ho(1|i,o,h,l)}function Ch(t,i){return Va(8390656,8,t,i)}function Yc(t,i){return Ha(2048,8,t,i)}function bh(t,i){return Ha(4,2,t,i)}function Ph(t,i){return Ha(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,o){return o=o!=null?o.concat([t]):null,Ha(4,4,Lh.bind(null,i,t),o)}function $c(){}function Ih(t,i){var o=xi();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Gc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Uh(t,i){var o=xi();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Gc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Nh(t,i,o){return(Jr&21)===0?(t.baseState&&(t.baseState=!1,Kn=!0),t.memoizedState=o):(Ai(o,i)||(o=nn(),Zt.lanes|=o,es|=o,t.baseState=!0),i)}function I0(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=Hc.transition;Hc.transition={};try{t(!1),i()}finally{Tt=o,Hc.transition=l}}function Fh(){return xi().memoizedState}function U0(t,i,o){var l=Rr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(t))kh(i,o);else if(o=ph(t,i,o,l),o!==null){var f=Wn();Li(o,t,l,f),zh(o,i,l)}}function N0(t,i,o){var l=Rr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))kh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,N=h(S,o);if(f.hasEagerState=!0,f.eagerState=N,Ai(N,S)){var V=i.interleaved;V===null?(f.next=f,Fc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}o=ph(t,i,f,l),o!==null&&(f=Wn(),Li(o,t,l,f),zh(o,i,l))}}function Oh(t){var i=t.alternate;return t===Zt||i!==null&&i===Zt}function kh(t,i){zo=Ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function zh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,qi(t,o)}}var Ga={readContext:_i,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},F0={readContext:_i,useCallback:function(t,i){return Vi().memoizedState=[t,i===void 0?null:i],t},useContext:_i,useEffect:Ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Va(4194308,4,Lh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Va(4194308,4,t,i)},useInsertionEffect:function(t,i){return Va(4,2,t,i)},useMemo:function(t,i){var o=Vi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Vi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=U0.bind(null,Zt,t),[l.memoizedState,t]},useRef:function(t){var i=Vi();return t={current:t},i.memoizedState=t},useState:Ah,useDebugValue:$c,useDeferredValue:function(t){return Vi().memoizedState=t},useTransition:function(){var t=Ah(!1),i=t[0];return t=I0.bind(null,t[1]),Vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Zt,f=Vi();if(Yt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),xn===null)throw Error(n(349));(Jr&30)!==0||Mh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Ch(Eh.bind(null,l,h,t),[t]),l.flags|=2048,Ho(9,Sh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=Vi(),i=xn.identifierPrefix;if(Yt){var o=Zi,l=Ki;o=(l&~(1<<32-dt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=D0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},O0={readContext:_i,useCallback:Ih,useContext:_i,useEffect:Yc,useImperativeHandle:Dh,useInsertionEffect:bh,useLayoutEffect:Ph,useMemo:Uh,useReducer:jc,useRef:Rh,useState:function(){return jc(Vo)},useDebugValue:$c,useDeferredValue:function(t){var i=xi();return Nh(i,fn.memoizedState,t)},useTransition:function(){var t=jc(Vo)[0],i=xi().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},k0={readContext:_i,useCallback:Ih,useContext:_i,useEffect:Yc,useImperativeHandle:Dh,useInsertionEffect:bh,useLayoutEffect:Ph,useMemo:Uh,useReducer:qc,useRef:Rh,useState:function(){return qc(Vo)},useDebugValue:$c,useDeferredValue:function(t){var i=xi();return fn===null?i.memoizedState=t:Nh(i,fn.memoizedState,t)},useTransition:function(){var t=qc(Vo)[0],i=xi().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function Ci(t,i){if(t&&t.defaultProps){i=me({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Kc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:me({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wa={isMounted:function(t){return(t=t._reactInternals)?Lt(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Wn(),f=Rr(t),h=Ji(l,f);h.payload=i,o!=null&&(h.callback=o),i=Er(t,h,f),i!==null&&(Li(i,t,f,l),Fa(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Wn(),f=Rr(t),h=Ji(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Er(t,h,f),i!==null&&(Li(i,t,f,l),Fa(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Wn(),l=Rr(t),f=Ji(o,l);f.tag=2,i!=null&&(f.callback=i),i=Er(t,f,l),i!==null&&(Li(i,t,l,o),Fa(i,t,l))}};function Bh(t,i,o,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!Co(o,l)||!Co(f,h):!0}function Vh(t,i,o){var l=!1,f=yr,h=i.contextType;return typeof h=="object"&&h!==null?h=_i(h):(f=$n(i)?Yr:Ln.current,l=i.contextTypes,h=(l=l!=null)?bs(t,f):yr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Hh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Wa.enqueueReplaceState(i,i.state,null)}function Zc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Oc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=_i(h):(h=$n(i)?Yr:Ln.current,f.context=bs(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Kc(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Wa.enqueueReplaceState(f,f.state,null),Oa(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,i){try{var o="",l=i;do o+=Me(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Jc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var z0=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=Ji(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Za||(Za=!0,pu=l),Jc(t,i)},o}function Wh(t,i,o){o=Ji(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Jc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Jc(t,i),typeof l!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function Xh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new z0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=J0.bind(null,t,i,o),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function qh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ji(-1,1),i.tag=2,Er(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var B0=C.ReactCurrentOwner,Kn=!1;function Gn(t,i,o,l){i.child=t===null?hh(i,null,o,l):Is(i,t.child,o,l)}function Yh(t,i,o,l,f){o=o.render;var h=i.ref;return Ns(i,f),l=Wc(t,i,o,l,h,f),o=Xc(),t!==null&&!Kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,er(t,i,f)):(Yt&&o&&Rc(i),i.flags|=1,Gn(t,i,l,f),i.child)}function $h(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Kh(t,i,h,l,f)):(t=il(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var S=h.memoizedProps;if(o=o.compare,o=o!==null?o:Co,o(S,l)&&t.ref===i.ref)return er(t,i,f)}return i.flags|=1,t=br(h,l),t.ref=i.ref,t.return=i,i.child=t}function Kh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(Co(h,l)&&t.ref===i.ref)if(Kn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Kn=!0);else return i.lanes=t.lanes,er(t,i,f)}return eu(t,i,o,l,f)}function Zh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(zs,li),li|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(zs,li),li|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Vt(zs,li),li|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Vt(zs,li),li|=l;return Gn(t,i,f,o),i.child}function Qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function eu(t,i,o,l,f){var h=$n(o)?Yr:Ln.current;return h=bs(i,h),Ns(i,f),o=Wc(t,i,o,l,h,f),l=Xc(),t!==null&&!Kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,er(t,i,f)):(Yt&&l&&Rc(i),i.flags|=1,Gn(t,i,o,f),i.child)}function Jh(t,i,o,l,f){if($n(o)){var h=!0;Ca(i)}else h=!1;if(Ns(i,f),i.stateNode===null)ja(t,i),Vh(i,o,l),Zc(i,o,l,f),l=!0;else if(t===null){var S=i.stateNode,N=i.memoizedProps;S.props=N;var V=S.context,ce=o.contextType;typeof ce=="object"&&ce!==null?ce=_i(ce):(ce=$n(o)?Yr:Ln.current,ce=bs(i,ce));var we=o.getDerivedStateFromProps,Re=typeof we=="function"||typeof S.getSnapshotBeforeUpdate=="function";Re||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==l||V!==ce)&&Hh(i,S,l,ce),Sr=!1;var Ee=i.memoizedState;S.state=Ee,Oa(i,l,S,f),V=i.memoizedState,N!==l||Ee!==V||Yn.current||Sr?(typeof we=="function"&&(Kc(i,o,we,l),V=i.memoizedState),(N=Sr||Bh(i,o,N,l,Ee,V,ce))?(Re||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),S.props=l,S.state=V,S.context=ce,l=N):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{S=i.stateNode,mh(t,i),N=i.memoizedProps,ce=i.type===i.elementType?N:Ci(i.type,N),S.props=ce,Re=i.pendingProps,Ee=S.context,V=o.contextType,typeof V=="object"&&V!==null?V=_i(V):(V=$n(o)?Yr:Ln.current,V=bs(i,V));var Ve=o.getDerivedStateFromProps;(we=typeof Ve=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==Re||Ee!==V)&&Hh(i,S,l,V),Sr=!1,Ee=i.memoizedState,S.state=Ee,Oa(i,l,S,f);var Ye=i.memoizedState;N!==Re||Ee!==Ye||Yn.current||Sr?(typeof Ve=="function"&&(Kc(i,o,Ve,l),Ye=i.memoizedState),(ce=Sr||Bh(i,o,ce,l,Ee,Ye,V)||!1)?(we||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(l,Ye,V),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(l,Ye,V)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ye),S.props=l,S.state=Ye,S.context=V,l=ce):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return tu(t,i,o,l,h,f)}function tu(t,i,o,l,f,h){Qh(t,i);var S=(i.flags&128)!==0;if(!l&&!S)return f&&rh(i,o,!1),er(t,i,h);l=i.stateNode,B0.current=i;var N=S&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&S?(i.child=Is(i,t.child,null,h),i.child=Is(i,null,N,h)):Gn(t,i,N,h),i.memoizedState=l.state,f&&rh(i,o,!0),i.child}function ep(t){var i=t.stateNode;i.pendingContext?nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(t,i.context,!1),kc(t,i.containerInfo)}function tp(t,i,o,l,f){return Ds(),Lc(f),i.flags|=256,Gn(t,i,o,l),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function np(t,i,o){var l=i.pendingProps,f=Kt.current,h=!1,S=(i.flags&128)!==0,N;if((N=S)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(Kt,f&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=l.children,t=l.fallback,h?(l=i.mode,h=i.child,S={mode:"hidden",children:S},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=S):h=rl(S,l,0,null),t=rs(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=iu(o),i.memoizedState=nu,t):ru(i,S));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return V0(t,i,S,l,N,f,o);if(h){h=l.fallback,S=i.mode,f=t.child,N=f.sibling;var V={mode:"hidden",children:l.children};return(S&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=V,i.deletions=null):(l=br(f,V),l.subtreeFlags=f.subtreeFlags&14680064),N!==null?h=br(N,h):(h=rs(h,S,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,S=t.child.memoizedState,S=S===null?iu(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},h.memoizedState=S,h.childLanes=t.childLanes&~o,i.memoizedState=nu,l}return h=t.child,t=h.sibling,l=br(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function ru(t,i){return i=rl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Xa(t,i,o,l){return l!==null&&Lc(l),Is(i,t.child,null,o),t=ru(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function V0(t,i,o,l,f,h,S){if(o)return i.flags&256?(i.flags&=-257,l=Qc(Error(n(422))),Xa(t,i,S,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=rl({mode:"visible",children:l.children},f,0,null),h=rs(h,f,S,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Is(i,t.child,null,S),i.child.memoizedState=iu(S),i.memoizedState=nu,h);if((i.mode&1)===0)return Xa(t,i,S,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=Qc(h,l,void 0),Xa(t,i,S,l)}if(N=(S&t.childLanes)!==0,Kn||N){if(l=xn,l!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|S))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Qi(t,f),Li(l,t,f,-1))}return yu(),l=Qc(Error(n(421))),Xa(t,i,S,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=ev.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,ai=_r(f.nextSibling),oi=i,Yt=!0,Ri=null,t!==null&&(gi[vi++]=Ki,gi[vi++]=Zi,gi[vi++]=$r,Ki=t.id,Zi=t.overflow,$r=i),i=ru(i,l.children),i.flags|=4096,i)}function ip(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Nc(t.return,i,o)}function su(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function rp(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(Gn(t,i,l.children,o),l=Kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,i);else if(t.tag===19)ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Vt(Kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&ka(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),su(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&ka(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}su(i,!0,o,null,h);break;case"together":su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function er(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),es|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=br(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=br(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function H0(t,i,o){switch(i.tag){case 3:ep(i),Ds();break;case 5:_h(i);break;case 1:$n(i.type)&&Ca(i);break;case 4:kc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Vt(Ua,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Vt(Kt,Kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(t,i,o):(Vt(Kt,Kt.current&1),t=er(t,i,o),t!==null?t.sibling:null);Vt(Kt,Kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return rp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(Kt,Kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Zh(t,i,o)}return er(t,i,o)}var sp,ou,op,ap;sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ou=function(){},op=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Qr(Bi.current);var h=null;switch(o){case"input":f=K(t,f),l=K(t,l),h=[];break;case"select":f=me({},f,{value:void 0}),l=me({},l,{value:void 0}),h=[];break;case"textarea":f=w(t,f),l=w(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ta)}tt(o,l);var S;o=null;for(ce in f)if(!l.hasOwnProperty(ce)&&f.hasOwnProperty(ce)&&f[ce]!=null)if(ce==="style"){var N=f[ce];for(S in N)N.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?h||(h=[]):(h=h||[]).push(ce,null));for(ce in l){var V=l[ce];if(N=f!=null?f[ce]:void 0,l.hasOwnProperty(ce)&&V!==N&&(V!=null||N!=null))if(ce==="style")if(N){for(S in N)!N.hasOwnProperty(S)||V&&V.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in V)V.hasOwnProperty(S)&&N[S]!==V[S]&&(o||(o={}),o[S]=V[S])}else o||(h||(h=[]),h.push(ce,o)),o=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,N=N?N.__html:void 0,V!=null&&N!==V&&(h=h||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(h=h||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&Gt("scroll",t),h||N===V||(h=[])):(h=h||[]).push(ce,V))}o&&(h=h||[]).push("style",o);var ce=h;(i.updateQueue=ce)&&(i.flags|=4)}},ap=function(t,i,o,l){o!==l&&(i.flags|=4)};function Go(t,i){if(!Yt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function In(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function G0(t,i,o){var l=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(i),null;case 1:return $n(i.type)&&Ra(),In(i),null;case 3:return l=i.stateNode,Fs(),Wt(Yn),Wt(Ln),Vc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ri!==null&&(vu(Ri),Ri=null))),ou(t,i),In(i),null;case 5:zc(i);var f=Qr(ko.current);if(o=i.type,t!==null&&i.stateNode!=null)op(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return In(i),null}if(t=Qr(Bi.current),Da(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[zi]=i,l[Io]=h,t=(i.mode&1)!==0,o){case"dialog":Gt("cancel",l),Gt("close",l);break;case"iframe":case"object":case"embed":Gt("load",l);break;case"video":case"audio":for(f=0;f<Po.length;f++)Gt(Po[f],l);break;case"source":Gt("error",l);break;case"img":case"image":case"link":Gt("error",l),Gt("load",l);break;case"details":Gt("toggle",l);break;case"input":En(l,h),Gt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Gt("invalid",l);break;case"textarea":se(l,h),Gt("invalid",l)}tt(o,h),f=null;for(var S in h)if(h.hasOwnProperty(S)){var N=h[S];S==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&wa(l.textContent,N,t),f=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&wa(l.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(S)&&N!=null&&S==="onScroll"&&Gt("scroll",l)}switch(o){case"input":It(l),it(l,h,!0);break;case"textarea":It(l),F(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Ta)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=S.createElement(o,{is:l.is}):(t=S.createElement(o),o==="select"&&(S=t,l.multiple?S.multiple=!0:l.size&&(S.size=l.size))):t=S.createElementNS(t,o),t[zi]=i,t[Io]=l,sp(t,i,!1,!1),i.stateNode=t;e:{switch(S=Xe(o,l),o){case"dialog":Gt("cancel",t),Gt("close",t),f=l;break;case"iframe":case"object":case"embed":Gt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Po.length;f++)Gt(Po[f],t);f=l;break;case"source":Gt("error",t),f=l;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=l;break;case"details":Gt("toggle",t),f=l;break;case"input":En(t,l),f=K(t,l),Gt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=me({},l,{value:void 0}),Gt("invalid",t);break;case"textarea":se(t,l),f=w(t,l),Gt("invalid",t);break;default:f=l}tt(o,f),N=f;for(h in N)if(N.hasOwnProperty(h)){var V=N[h];h==="style"?ze(t,V):h==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&he(t,V)):h==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&Se(t,V):typeof V=="number"&&Se(t,""+V):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?V!=null&&h==="onScroll"&&Gt("scroll",t):V!=null&&D(t,h,V,S))}switch(o){case"input":It(t),it(t,l,!1);break;case"textarea":It(t),F(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ue(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?U(t,!!l.multiple,h,!1):l.defaultValue!=null&&U(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return In(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Qr(ko.current),Qr(Bi.current),Da(i)){if(l=i.stateNode,o=i.memoizedProps,l[zi]=i,(h=l.nodeValue!==o)&&(t=oi,t!==null))switch(t.tag){case 3:wa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[zi]=i,i.stateNode=l}return In(i),null;case 13:if(Wt(Kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&ai!==null&&(i.mode&1)!==0&&(i.flags&128)===0)uh(),Ds(),i.flags|=98560,h=!1;else if(h=Da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[zi]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;In(i),h=!1}else Ri!==null&&(vu(Ri),Ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Kt.current&1)!==0?dn===0&&(dn=3):yu())),i.updateQueue!==null&&(i.flags|=4),In(i),null);case 4:return Fs(),ou(t,i),t===null&&Lo(i.stateNode.containerInfo),In(i),null;case 10:return Uc(i.type._context),In(i),null;case 17:return $n(i.type)&&Ra(),In(i),null;case 19:if(Wt(Kt),h=i.memoizedState,h===null)return In(i),null;if(l=(i.flags&128)!==0,S=h.rendering,S===null)if(l)Go(h,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=ka(t),S!==null){for(i.flags|=128,Go(h,!1),l=S.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,S=h.alternate,S===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=S.childLanes,h.lanes=S.lanes,h.child=S.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=S.memoizedProps,h.memoizedState=S.memoizedState,h.updateQueue=S.updateQueue,h.type=S.type,t=S.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Vt(Kt,Kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ae()>Bs&&(i.flags|=128,l=!0,Go(h,!1),i.lanes=4194304)}else{if(!l)if(t=ka(S),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Go(h,!0),h.tail===null&&h.tailMode==="hidden"&&!S.alternate&&!Yt)return In(i),null}else 2*Ae()-h.renderingStartTime>Bs&&o!==1073741824&&(i.flags|=128,l=!0,Go(h,!1),i.lanes=4194304);h.isBackwards?(S.sibling=i.child,i.child=S):(o=h.last,o!==null?o.sibling=S:i.child=S,h.last=S)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ae(),i.sibling=null,o=Kt.current,Vt(Kt,l?o&1|2:o&1),i):(In(i),null);case 22:case 23:return xu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(li&1073741824)!==0&&(In(i),i.subtreeFlags&6&&(i.flags|=8192)):In(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function W0(t,i){switch(Cc(i),i.tag){case 1:return $n(i.type)&&Ra(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Fs(),Wt(Yn),Wt(Ln),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(Wt(Kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt(Kt),null;case 4:return Fs(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var qa=!1,Un=!1,X0=typeof WeakSet=="function"?WeakSet:Set,qe=null;function ks(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){en(t,i,l)}else o.current=null}function au(t,i,o){try{o()}catch(l){en(t,i,l)}}var lp=!1;function j0(t,i){if(xc=ha,t=Bd(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var S=0,N=-1,V=-1,ce=0,we=0,Re=t,Ee=null;t:for(;;){for(var Ve;Re!==o||f!==0&&Re.nodeType!==3||(N=S+f),Re!==h||l!==0&&Re.nodeType!==3||(V=S+l),Re.nodeType===3&&(S+=Re.nodeValue.length),(Ve=Re.firstChild)!==null;)Ee=Re,Re=Ve;for(;;){if(Re===t)break t;if(Ee===o&&++ce===f&&(N=S),Ee===h&&++we===l&&(V=S),(Ve=Re.nextSibling)!==null)break;Re=Ee,Ee=Re.parentNode}Re=Ve}o=N===-1||V===-1?null:{start:N,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(yc={focusedElem:t,selectionRange:o},ha=!1,qe=i;qe!==null;)if(i=qe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,qe=t;else for(;qe!==null;){i=qe;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,rn=Ye.memoizedState,J=i.stateNode,j=J.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:Ci(i.type,Ke),rn);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Le){en(i,i.return,Le)}if(t=i.sibling,t!==null){t.return=i.return,qe=t;break}qe=i.return}return Ye=lp,lp=!1,Ye}function Wo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&au(i,o,h)}f=f.next}while(f!==l)}}function Ya(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function lu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function cp(t){var i=t.alternate;i!==null&&(t.alternate=null,cp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[zi],delete i[Io],delete i[wc],delete i[C0],delete i[b0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function up(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(l!==4&&(t=t.child,t!==null))for(cu(t,i,o),t=t.sibling;t!==null;)cu(t,i,o),t=t.sibling}function uu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}var Tn=null,bi=!1;function wr(t,i,o){for(o=o.child;o!==null;)dp(t,i,o),o=o.sibling}function dp(t,i,o){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(pt,o)}catch{}switch(o.tag){case 5:Un||ks(o,i);case 6:var l=Tn,f=bi;Tn=null,wr(t,i,o),Tn=l,bi=f,Tn!==null&&(bi?(t=Tn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(bi?(t=Tn,o=o.stateNode,t.nodeType===8?Ec(t.parentNode,o):t.nodeType===1&&Ec(t,o),So(t)):Ec(Tn,o.stateNode));break;case 4:l=Tn,f=bi,Tn=o.stateNode.containerInfo,bi=!0,wr(t,i,o),Tn=l,bi=f;break;case 0:case 11:case 14:case 15:if(!Un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,S=h.destroy;h=h.tag,S!==void 0&&((h&2)!==0||(h&4)!==0)&&au(o,i,S),f=f.next}while(f!==l)}wr(t,i,o);break;case 1:if(!Un&&(ks(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(N){en(o,i,N)}wr(t,i,o);break;case 21:wr(t,i,o);break;case 22:o.mode&1?(Un=(l=Un)||o.memoizedState!==null,wr(t,i,o),Un=l):wr(t,i,o);break;default:wr(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new X0),i.forEach(function(l){var f=tv.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function Pi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,S=i,N=S;e:for(;N!==null;){switch(N.tag){case 5:Tn=N.stateNode,bi=!1;break e;case 3:Tn=N.stateNode.containerInfo,bi=!0;break e;case 4:Tn=N.stateNode.containerInfo,bi=!0;break e}N=N.return}if(Tn===null)throw Error(n(160));dp(h,S,f),Tn=null,bi=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(ce){en(f,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,t),i=i.sibling}function pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pi(i,t),Hi(t),l&4){try{Wo(3,t,t.return),Ya(3,t)}catch(Ke){en(t,t.return,Ke)}try{Wo(5,t,t.return)}catch(Ke){en(t,t.return,Ke)}}break;case 1:Pi(i,t),Hi(t),l&512&&o!==null&&ks(o,o.return);break;case 5:if(Pi(i,t),Hi(t),l&512&&o!==null&&ks(o,o.return),t.flags&32){var f=t.stateNode;try{Se(f,"")}catch(Ke){en(t,t.return,Ke)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,S=o!==null?o.memoizedProps:h,N=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&_t(f,h),Xe(N,S);var ce=Xe(N,h);for(S=0;S<V.length;S+=2){var we=V[S],Re=V[S+1];we==="style"?ze(f,Re):we==="dangerouslySetInnerHTML"?he(f,Re):we==="children"?Se(f,Re):D(f,we,Re,ce)}switch(N){case"input":ht(f,h);break;case"textarea":b(f,h);break;case"select":var Ee=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ve=h.value;Ve!=null?U(f,!!h.multiple,Ve,!1):Ee!==!!h.multiple&&(h.defaultValue!=null?U(f,!!h.multiple,h.defaultValue,!0):U(f,!!h.multiple,h.multiple?[]:"",!1))}f[Io]=h}catch(Ke){en(t,t.return,Ke)}}break;case 6:if(Pi(i,t),Hi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ke){en(t,t.return,Ke)}}break;case 3:if(Pi(i,t),Hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(Ke){en(t,t.return,Ke)}break;case 4:Pi(i,t),Hi(t);break;case 13:Pi(i,t),Hi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(hu=Ae())),l&4&&hp(t);break;case 22:if(we=o!==null&&o.memoizedState!==null,t.mode&1?(Un=(ce=Un)||we,Pi(i,t),Un=ce):Pi(i,t),Hi(t),l&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!we&&(t.mode&1)!==0)for(qe=t,we=t.child;we!==null;){for(Re=qe=we;qe!==null;){switch(Ee=qe,Ve=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Wo(4,Ee,Ee.return);break;case 1:ks(Ee,Ee.return);var Ye=Ee.stateNode;if(typeof Ye.componentWillUnmount=="function"){l=Ee,o=Ee.return;try{i=l,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ke){en(l,o,Ke)}}break;case 5:ks(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){vp(Re);continue}}Ve!==null?(Ve.return=Ee,qe=Ve):vp(Re)}we=we.sibling}e:for(we=null,Re=t;;){if(Re.tag===5){if(we===null){we=Re;try{f=Re.stateNode,ce?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=Re.stateNode,V=Re.memoizedProps.style,S=V!=null&&V.hasOwnProperty("display")?V.display:null,N.style.display=Ne("display",S))}catch(Ke){en(t,t.return,Ke)}}}else if(Re.tag===6){if(we===null)try{Re.stateNode.nodeValue=ce?"":Re.memoizedProps}catch(Ke){en(t,t.return,Ke)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===t)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===t)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===t)break e;we===Re&&(we=null),Re=Re.return}we===Re&&(we=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Pi(i,t),Hi(t),l&4&&hp(t);break;case 21:break;default:Pi(i,t),Hi(t)}}function Hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(up(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Se(f,""),l.flags&=-33);var h=fp(t);uu(t,h,f);break;case 3:case 4:var S=l.stateNode.containerInfo,N=fp(t);cu(t,N,S);break;default:throw Error(n(161))}}catch(V){en(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function q0(t,i,o){qe=t,mp(t)}function mp(t,i,o){for(var l=(t.mode&1)!==0;qe!==null;){var f=qe,h=f.child;if(f.tag===22&&l){var S=f.memoizedState!==null||qa;if(!S){var N=f.alternate,V=N!==null&&N.memoizedState!==null||Un;N=qa;var ce=Un;if(qa=S,(Un=V)&&!ce)for(qe=f;qe!==null;)S=qe,V=S.child,S.tag===22&&S.memoizedState!==null?_p(f):V!==null?(V.return=S,qe=V):_p(f);for(;h!==null;)qe=h,mp(h),h=h.sibling;qe=f,qa=N,Un=ce}gp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,qe=h):gp(t)}}function gp(t){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Un||Ya(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Un)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Ci(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&vh(i,h,l);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}vh(i,S,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var we=ce.memoizedState;if(we!==null){var Re=we.dehydrated;Re!==null&&So(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Un||i.flags&512&&lu(i)}catch(Ee){en(i,i.return,Ee)}}if(i===t){qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,qe=o;break}qe=i.return}}function vp(t){for(;qe!==null;){var i=qe;if(i===t){qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,qe=o;break}qe=i.return}}function _p(t){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ya(4,i)}catch(V){en(i,o,V)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(V){en(i,f,V)}}var h=i.return;try{lu(i)}catch(V){en(i,h,V)}break;case 5:var S=i.return;try{lu(i)}catch(V){en(i,S,V)}}}catch(V){en(i,i.return,V)}if(i===t){qe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,qe=N;break}qe=i.return}}var Y0=Math.ceil,$a=C.ReactCurrentDispatcher,fu=C.ReactCurrentOwner,yi=C.ReactCurrentBatchConfig,Rt=0,xn=null,ln=null,An=0,li=0,zs=xr(0),dn=0,Xo=null,es=0,Ka=0,du=0,jo=null,Zn=null,hu=0,Bs=1/0,tr=null,Za=!1,pu=null,Tr=null,Qa=!1,Ar=null,Ja=0,qo=0,mu=null,el=-1,tl=0;function Wn(){return(Rt&6)!==0?Ae():el!==-1?el:el=Ae()}function Rr(t){return(t.mode&1)===0?1:(Rt&2)!==0&&An!==0?An&-An:L0.transition!==null?(tl===0&&(tl=nn()),tl):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function Li(t,i,o,l){if(50<qo)throw qo=0,mu=null,Error(n(185));wn(t,o,l),((Rt&2)===0||t!==xn)&&(t===xn&&((Rt&2)===0&&(Ka|=o),dn===4&&Cr(t,An)),Qn(t,l),o===1&&Rt===0&&(i.mode&1)===0&&(Bs=Ae()+500,ba&&Mr()))}function Qn(t,i){var o=t.callbackNode;vn(t,i);var l=pi(t,t===xn?An:0);if(l===0)o!==null&&le(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&le(o),i===1)t.tag===0?P0(yp.bind(null,t)):sh(yp.bind(null,t)),A0(function(){(Rt&6)===0&&Mr()}),o=null;else{switch(vo(l)){case 1:o=Be;break;case 4:o=lt;break;case 16:o=ct;break;case 536870912:o=Mt;break;default:o=ct}o=Cp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(el=-1,tl=0,(Rt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Vs()&&t.callbackNode!==o)return null;var l=pi(t,t===xn?An:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=nl(t,l);else{i=l;var f=Rt;Rt|=2;var h=Sp();(xn!==t||An!==i)&&(tr=null,Bs=Ae()+500,ns(t,i));do try{Z0();break}catch(N){Mp(t,N)}while(!0);Ic(),$a.current=h,Rt=f,ln!==null?i=0:(xn=null,An=0,i=dn)}if(i!==0){if(i===2&&(f=mi(t),f!==0&&(l=f,i=gu(t,f))),i===1)throw o=Xo,ns(t,0),Cr(t,l),Qn(t,Ae()),o;if(i===6)Cr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!$0(f)&&(i=nl(t,l),i===2&&(h=mi(t),h!==0&&(l=h,i=gu(t,h))),i===1))throw o=Xo,ns(t,0),Cr(t,l),Qn(t,Ae()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:is(t,Zn,tr);break;case 3:if(Cr(t,l),(l&130023424)===l&&(i=hu+500-Ae(),10<i)){if(pi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Wn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Sc(is.bind(null,t,Zn,tr),i);break}is(t,Zn,tr);break;case 4:if(Cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var S=31-dt(l);h=1<<S,S=i[S],S>f&&(f=S),l&=~h}if(l=f,l=Ae()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Y0(l/1960))-l,10<l){t.timeoutHandle=Sc(is.bind(null,t,Zn,tr),l);break}is(t,Zn,tr);break;case 5:is(t,Zn,tr);break;default:throw Error(n(329))}}}return Qn(t,Ae()),t.callbackNode===o?xp.bind(null,t):null}function gu(t,i){var o=jo;return t.current.memoizedState.isDehydrated&&(ns(t,i).flags|=256),t=nl(t,i),t!==2&&(i=Zn,Zn=o,i!==null&&vu(i)),t}function vu(t){Zn===null?Zn=t:Zn.push.apply(Zn,t)}function $0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!Ai(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Cr(t,i){for(i&=~du,i&=~Ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-dt(i),l=1<<o;t[o]=-1,i&=~l}}function yp(t){if((Rt&6)!==0)throw Error(n(327));Vs();var i=pi(t,0);if((i&1)===0)return Qn(t,Ae()),null;var o=nl(t,i);if(t.tag!==0&&o===2){var l=mi(t);l!==0&&(i=l,o=gu(t,l))}if(o===1)throw o=Xo,ns(t,0),Cr(t,i),Qn(t,Ae()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,is(t,Zn,tr),Qn(t,Ae()),null}function _u(t,i){var o=Rt;Rt|=1;try{return t(i)}finally{Rt=o,Rt===0&&(Bs=Ae()+500,ba&&Mr())}}function ts(t){Ar!==null&&Ar.tag===0&&(Rt&6)===0&&Vs();var i=Rt;Rt|=1;var o=yi.transition,l=Tt;try{if(yi.transition=null,Tt=1,t)return t()}finally{Tt=l,yi.transition=o,Rt=i,(Rt&6)===0&&Mr()}}function xu(){li=zs.current,Wt(zs)}function ns(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,T0(o)),ln!==null)for(o=ln.return;o!==null;){var l=o;switch(Cc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ra();break;case 3:Fs(),Wt(Yn),Wt(Ln),Vc();break;case 5:zc(l);break;case 4:Fs();break;case 13:Wt(Kt);break;case 19:Wt(Kt);break;case 10:Uc(l.type._context);break;case 22:case 23:xu()}o=o.return}if(xn=t,ln=t=br(t.current,null),An=li=i,dn=0,Xo=null,du=Ka=es=0,Zn=jo=null,Zr!==null){for(i=0;i<Zr.length;i++)if(o=Zr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var S=h.next;h.next=f,l.next=S}o.pending=l}Zr=null}return t}function Mp(t,i){do{var o=ln;try{if(Ic(),za.current=Ga,Ba){for(var l=Zt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ba=!1}if(Jr=0,_n=fn=Zt=null,zo=!1,Bo=0,fu.current=null,o===null||o.return===null){dn=1,Xo=i,ln=null;break}e:{var h=t,S=o.return,N=o,V=i;if(i=An,N.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,we=N,Re=we.tag;if((we.mode&1)===0&&(Re===0||Re===11||Re===15)){var Ee=we.alternate;Ee?(we.updateQueue=Ee.updateQueue,we.memoizedState=Ee.memoizedState,we.lanes=Ee.lanes):(we.updateQueue=null,we.memoizedState=null)}var Ve=jh(S);if(Ve!==null){Ve.flags&=-257,qh(Ve,S,N,h,i),Ve.mode&1&&Xh(h,ce,i),i=Ve,V=ce;var Ye=i.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(V),i.updateQueue=Ke}else Ye.add(V);break e}else{if((i&1)===0){Xh(h,ce,i),yu();break e}V=Error(n(426))}}else if(Yt&&N.mode&1){var rn=jh(S);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),qh(rn,S,N,h,i),Lc(Os(V,N));break e}}h=V=Os(V,N),dn!==4&&(dn=2),jo===null?jo=[h]:jo.push(h),h=S;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var J=Gh(h,V,i);gh(h,J);break e;case 1:N=V;var j=h.type,ie=h.stateNode;if((h.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Tr===null||!Tr.has(ie)))){h.flags|=65536,i&=-i,h.lanes|=i;var Le=Wh(h,N,i);gh(h,Le);break e}}h=h.return}while(h!==null)}wp(o)}catch(Je){i=Je,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function Sp(){var t=$a.current;return $a.current=Ga,t===null?Ga:t}function yu(){(dn===0||dn===3||dn===2)&&(dn=4),xn===null||(es&268435455)===0&&(Ka&268435455)===0||Cr(xn,An)}function nl(t,i){var o=Rt;Rt|=2;var l=Sp();(xn!==t||An!==i)&&(tr=null,ns(t,i));do try{K0();break}catch(f){Mp(t,f)}while(!0);if(Ic(),Rt=o,$a.current=l,ln!==null)throw Error(n(261));return xn=null,An=0,dn}function K0(){for(;ln!==null;)Ep(ln)}function Z0(){for(;ln!==null&&!q();)Ep(ln)}function Ep(t){var i=Rp(t.alternate,t,li);t.memoizedProps=t.pendingProps,i===null?wp(t):ln=i,fu.current=null}function wp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=G0(o,i,li),o!==null){ln=o;return}}else{if(o=W0(o,i),o!==null){o.flags&=32767,ln=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=t}while(i!==null);dn===0&&(dn=5)}function is(t,i,o){var l=Tt,f=yi.transition;try{yi.transition=null,Tt=1,Q0(t,i,o,l)}finally{yi.transition=f,Tt=l}return null}function Q0(t,i,o,l){do Vs();while(Ar!==null);if((Rt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(jr(t,h),t===xn&&(ln=xn=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qa||(Qa=!0,Cp(ct,function(){return Vs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=yi.transition,yi.transition=null;var S=Tt;Tt=1;var N=Rt;Rt|=4,fu.current=null,j0(t,o),pp(o,t),_0(yc),ha=!!xc,yc=xc=null,t.current=o,q0(o),Pe(),Rt=N,Tt=S,yi.transition=h}else t.current=o;if(Qa&&(Qa=!1,Ar=t,Ja=f),h=t.pendingLanes,h===0&&(Tr=null),qt(o.stateNode),Qn(t,Ae()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Za)throw Za=!1,t=pu,pu=null,t;return(Ja&1)!==0&&t.tag!==0&&Vs(),h=t.pendingLanes,(h&1)!==0?t===mu?qo++:(qo=0,mu=t):qo=0,Mr(),null}function Vs(){if(Ar!==null){var t=vo(Ja),i=yi.transition,o=Tt;try{if(yi.transition=null,Tt=16>t?16:t,Ar===null)var l=!1;else{if(t=Ar,Ar=null,Ja=0,(Rt&6)!==0)throw Error(n(331));var f=Rt;for(Rt|=4,qe=t.current;qe!==null;){var h=qe,S=h.child;if((qe.flags&16)!==0){var N=h.deletions;if(N!==null){for(var V=0;V<N.length;V++){var ce=N[V];for(qe=ce;qe!==null;){var we=qe;switch(we.tag){case 0:case 11:case 15:Wo(8,we,h)}var Re=we.child;if(Re!==null)Re.return=we,qe=Re;else for(;qe!==null;){we=qe;var Ee=we.sibling,Ve=we.return;if(cp(we),we===ce){qe=null;break}if(Ee!==null){Ee.return=Ve,qe=Ee;break}qe=Ve}}}var Ye=h.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var rn=Ke.sibling;Ke.sibling=null,Ke=rn}while(Ke!==null)}}qe=h}}if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,qe=S;else e:for(;qe!==null;){if(h=qe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Wo(9,h,h.return)}var J=h.sibling;if(J!==null){J.return=h.return,qe=J;break e}qe=h.return}}var j=t.current;for(qe=j;qe!==null;){S=qe;var ie=S.child;if((S.subtreeFlags&2064)!==0&&ie!==null)ie.return=S,qe=ie;else e:for(S=j;qe!==null;){if(N=qe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ya(9,N)}}catch(Je){en(N,N.return,Je)}if(N===S){qe=null;break e}var Le=N.sibling;if(Le!==null){Le.return=N.return,qe=Le;break e}qe=N.return}}if(Rt=f,Mr(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(pt,t)}catch{}l=!0}return l}finally{Tt=o,yi.transition=i}}return!1}function Tp(t,i,o){i=Os(o,i),i=Gh(t,i,1),t=Er(t,i,1),i=Wn(),t!==null&&(wn(t,1,i),Qn(t,i))}function en(t,i,o){if(t.tag===3)Tp(t,t,o);else for(;i!==null;){if(i.tag===3){Tp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tr===null||!Tr.has(l))){t=Os(o,t),t=Wh(i,t,1),i=Er(i,t,1),t=Wn(),i!==null&&(wn(i,1,t),Qn(i,t));break}}i=i.return}}function J0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Wn(),t.pingedLanes|=t.suspendedLanes&o,xn===t&&(An&o)===o&&(dn===4||dn===3&&(An&130023424)===An&&500>Ae()-hu?ns(t,0):du|=o),Qn(t,i)}function Ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=bn,bn<<=1,(bn&130023424)===0&&(bn=4194304)));var o=Wn();t=Qi(t,i),t!==null&&(wn(t,i,o),Qn(t,o))}function ev(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(t,o)}function tv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ap(t,o)}var Rp;Rp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Yn.current)Kn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Kn=!1,H0(t,i,o);Kn=(t.flags&131072)!==0}else Kn=!1,Yt&&(i.flags&1048576)!==0&&oh(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ja(t,i),t=i.pendingProps;var f=bs(i,Ln.current);Ns(i,o),f=Wc(null,i,l,t,f,o);var h=Xc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$n(l)?(h=!0,Ca(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Oc(i),f.updater=Wa,i.stateNode=f,f._reactInternals=i,Zc(i,l,t,o),i=tu(null,i,l,!0,h,o)):(i.tag=0,Yt&&h&&Rc(i),Gn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ja(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=iv(l),t=Ci(l,t),f){case 0:i=eu(null,i,l,t,o);break e;case 1:i=Jh(null,i,l,t,o);break e;case 11:i=Yh(null,i,l,t,o);break e;case 14:i=$h(null,i,l,Ci(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),eu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),Jh(t,i,l,f,o);case 3:e:{if(ep(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,mh(t,i),Oa(i,l,null,o);var S=i.memoizedState;if(l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Os(Error(n(423)),i),i=tp(t,i,l,o,f);break e}else if(l!==f){f=Os(Error(n(424)),i),i=tp(t,i,l,o,f);break e}else for(ai=_r(i.stateNode.containerInfo.firstChild),oi=i,Yt=!0,Ri=null,o=hh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ds(),l===f){i=er(t,i,o);break e}Gn(t,i,l,o)}i=i.child}return i;case 5:return _h(i),t===null&&Pc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,S=f.children,Mc(l,f)?S=null:h!==null&&Mc(l,h)&&(i.flags|=32),Qh(t,i),Gn(t,i,S,o),i.child;case 6:return t===null&&Pc(i),null;case 13:return np(t,i,o);case 4:return kc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Is(i,null,l,o):Gn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),Yh(t,i,l,f,o);case 7:return Gn(t,i,i.pendingProps,o),i.child;case 8:return Gn(t,i,i.pendingProps.children,o),i.child;case 12:return Gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,S=f.value,Vt(Ua,l._currentValue),l._currentValue=S,h!==null)if(Ai(h.value,S)){if(h.children===f.children&&!Yn.current){i=er(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){S=h.child;for(var V=N.firstContext;V!==null;){if(V.context===l){if(h.tag===1){V=Ji(-1,o&-o),V.tag=2;var ce=h.updateQueue;if(ce!==null){ce=ce.shared;var we=ce.pending;we===null?V.next=V:(V.next=we.next,we.next=V),ce.pending=V}}h.lanes|=o,V=h.alternate,V!==null&&(V.lanes|=o),Nc(h.return,o,i),N.lanes|=o;break}V=V.next}}else if(h.tag===10)S=h.type===i.type?null:h.child;else if(h.tag===18){if(S=h.return,S===null)throw Error(n(341));S.lanes|=o,N=S.alternate,N!==null&&(N.lanes|=o),Nc(S,o,i),S=h.sibling}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}Gn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Ns(i,o),f=_i(f),l=l(f),i.flags|=1,Gn(t,i,l,o),i.child;case 14:return l=i.type,f=Ci(l,i.pendingProps),f=Ci(l.type,f),$h(t,i,l,f,o);case 15:return Kh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),ja(t,i),i.tag=1,$n(l)?(t=!0,Ca(i)):t=!1,Ns(i,o),Vh(i,l,f),Zc(i,l,f,o),tu(null,i,l,!0,t,o);case 19:return rp(t,i,o);case 22:return Zh(t,i,o)}throw Error(n(156,i.tag))};function Cp(t,i){return ae(t,i)}function nv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,i,o,l){return new nv(t,i,o,l)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iv(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===ye)return 14}return 2}function br(t,i){var o=t.alternate;return o===null?(o=Mi(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function il(t,i,o,l,f,h){var S=2;if(l=t,typeof t=="function")Mu(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case O:return rs(o.children,f,h,i);case H:S=8,f|=8;break;case P:return t=Mi(12,o,i,f|2),t.elementType=P,t.lanes=h,t;case ne:return t=Mi(13,o,i,f),t.elementType=ne,t.lanes=h,t;case ve:return t=Mi(19,o,i,f),t.elementType=ve,t.lanes=h,t;case fe:return rl(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case B:S=9;break e;case oe:S=11;break e;case ye:S=14;break e;case de:S=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Mi(S,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function rs(t,i,o,l){return t=Mi(7,t,l,i),t.lanes=o,t}function rl(t,i,o,l){return t=Mi(22,t,l,i),t.elementType=fe,t.lanes=o,t.stateNode={isHidden:!1},t}function Su(t,i,o){return t=Mi(6,t,null,i),t.lanes=o,t}function Eu(t,i,o){return i=Mi(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function rv(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wu(t,i,o,l,f,h,S,N,V){return t=new rv(t,i,o,N,V),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Mi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(h),t}function sv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function bp(t){if(!t)return yr;t=t._reactInternals;e:{if(Lt(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if($n(o))return ih(t,o,i)}return i}function Pp(t,i,o,l,f,h,S,N,V){return t=wu(o,l,!0,t,f,h,S,N,V),t.context=bp(null),o=t.current,l=Wn(),f=Rr(o),h=Ji(l,f),h.callback=i??null,Er(o,h,f),t.current.lanes=f,wn(t,f,l),Qn(t,l),t}function sl(t,i,o,l){var f=i.current,h=Wn(),S=Rr(f);return o=bp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ji(h,S),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Er(f,i,S),t!==null&&(Li(t,f,S,h),Fa(t,f,S)),S}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Tu(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function ov(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}al.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));sl(t,i,null,null)},al.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ts(function(){sl(null,t,null,null)}),i[Yi]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oe();t={blockedOn:null,target:t,priority:i};for(var o=0;o<mr.length&&i!==0&&i<mr[o].priority;o++);mr.splice(o,0,t),o===0&&_d(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function av(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ce=ol(S);h.call(ce)}}var S=Pp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=S,t[Yi]=S.current,Lo(t.nodeType===8?t.parentNode:t),ts(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var N=l;l=function(){var ce=ol(V);N.call(ce)}}var V=wu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=V,t[Yi]=V.current,Lo(t.nodeType===8?t.parentNode:t),ts(function(){sl(i,V,o,l)}),V}function cl(t,i,o,l,f){var h=o._reactRootContainer;if(h){var S=h;if(typeof f=="function"){var N=f;f=function(){var V=ol(S);N.call(V)}}sl(i,S,t,f)}else S=av(o,i,t,f,l);return ol(S)}_o=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Bt(i.pendingLanes);o!==0&&(qi(i,o|1),Qn(i,Ae()),(Rt&6)===0&&(Bs=Ae()+500,Mr()))}break;case 13:ts(function(){var l=Qi(t,1);if(l!==null){var f=Wn();Li(l,t,1,f)}}),Tu(t,1)}},xs=function(t){if(t.tag===13){var i=Qi(t,134217728);if(i!==null){var o=Wn();Li(i,t,134217728,o)}Tu(t,134217728)}},fa=function(t){if(t.tag===13){var i=Rr(t),o=Qi(t,i);if(o!==null){var l=Wn();Li(o,t,i,l)}Tu(t,i)}},Oe=function(){return Tt},Qe=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},W=function(t,i,o){switch(i){case"input":if(ht(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=Aa(l);if(!f)throw Error(n(90));vt(l),ht(l,f)}}}break;case"textarea":b(t,o);break;case"select":i=o.value,i!=null&&U(t,!!o.multiple,i,!1)}},At=_u,Ut=ts;var lv={usingClientEntryPoint:!1,Events:[Uo,Rs,Aa,Ie,nt,_u]},Yo={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cv={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{pt=ul.inject(cv),yt=ul}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv,Jn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(n(200));return sv(t,i,null,o)},Jn.createRoot=function(t,i){if(!Ru(t))throw Error(n(299));var o=!1,l="",f=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=wu(t,1,!1,null,null,o,!1,l,f),t[Yi]=i.current,Lo(t.nodeType===8?t.parentNode:t),new Au(i)},Jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Jn.flushSync=function(t){return ts(t)},Jn.hydrate=function(t,i,o){if(!ll(i))throw Error(n(200));return cl(null,t,i,!0,o)},Jn.hydrateRoot=function(t,i,o){if(!Ru(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",S=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=Pp(i,null,t,1,o??null,f,!1,h,S),t[Yi]=i.current,Lo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new al(i)},Jn.render=function(t,i,o){if(!ll(i))throw Error(n(200));return cl(null,t,i,!1,o)},Jn.unmountComponentAtNode=function(t){if(!ll(t))throw Error(n(40));return t._reactRootContainer?(ts(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1},Jn.unstable_batchedUpdates=_u,Jn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,o,!1,l)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var Vp;function _v(){if(Vp)return Pu.exports;Vp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=vv(),Pu.exports}var Hp;function xv(){if(Hp)return fl;Hp=1;var s=_v();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var yv=xv();const Mv=Jm(yv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="170",Sv=0,Gp=1,Ev=2,eg=1,tg=2,ar=3,Vr=0,ri=1,wi=2,zr=0,ro=1,Wp=2,Xp=3,jp=4,wv=5,hs=100,Tv=101,Av=102,Rv=103,Cv=104,bv=200,Pv=201,Lv=202,Dv=203,hf=204,pf=205,Iv=206,Uv=207,Nv=208,Fv=209,Ov=210,kv=211,zv=212,Bv=213,Vv=214,mf=0,gf=1,vf=2,ao=3,_f=4,xf=5,yf=6,Mf=7,$l=0,Hv=1,Gv=2,Br=0,Wv=1,Xv=2,jv=3,ng=4,qv=5,Yv=6,$v=7,ig=300,lo=301,co=302,Sf=303,Ef=304,Kl=306,wf=1e3,ms=1001,Tf=1002,Oi=1003,Kv=1004,dl=1005,Wi=1006,Iu=1007,gs=1008,dr=1009,rg=1010,sg=1011,sa=1012,id=1013,vs=1014,cr=1015,oa=1016,rd=1017,sd=1018,uo=1020,og=35902,ag=1021,lg=1022,Fi=1023,cg=1024,ug=1025,so=1026,fo=1027,fg=1028,od=1029,dg=1030,ad=1031,ld=1033,Ol=33776,kl=33777,zl=33778,Bl=33779,Af=35840,Rf=35841,Cf=35842,bf=35843,Pf=36196,Lf=37492,Df=37496,If=37808,Uf=37809,Nf=37810,Ff=37811,Of=37812,kf=37813,zf=37814,Bf=37815,Vf=37816,Hf=37817,Gf=37818,Wf=37819,Xf=37820,jf=37821,Vl=36492,qf=36494,Yf=36495,hg=36283,$f=36284,Kf=36285,Zf=36286,Zv=3200,Qv=3201,cd=0,Jv=1,kr="",Ei="srgb",po="srgb-linear",Zl="linear",kt="srgb",Hs=7680,qp=519,e_=512,t_=513,n_=514,pg=515,i_=516,r_=517,s_=518,o_=519,Yp=35044,$p="300 es",ur=2e3,Gl=2001;class mo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Wl=180/Math.PI;function aa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function ni(s,e,n){return Math.max(e,Math.min(n,s))}function a_(s,e){return(s%e+e)%e}function Nu(s,e,n){return(1-n)*s+n*e}function Ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ni(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,n,r,a,c,u,d,p,m){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m)}set(e,n,r,a,c,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],x=r[2],M=r[5],E=r[8],T=a[0],y=a[3],g=a[6],I=a[1],D=a[4],C=a[7],$=a[2],k=a[5],O=a[8];return c[0]=u*T+d*I+p*$,c[3]=u*y+d*D+p*k,c[6]=u*g+d*C+p*O,c[1]=m*T+v*I+_*$,c[4]=m*y+v*D+_*k,c[7]=m*g+v*C+_*O,c[2]=x*T+M*I+E*$,c[5]=x*y+M*D+E*k,c[8]=x*g+M*C+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*c*v+r*d*p+a*c*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*u-d*m,x=d*p-v*c,M=m*c-u*p,E=n*_+r*x+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(a*m-v*r)*T,e[2]=(d*r-a*u)*T,e[3]=x*T,e[4]=(v*n-a*p)*T,e[5]=(a*c-d*n)*T,e[6]=M*T,e[7]=(r*p-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-a*m,a*p,-a*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new mt;function mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l_(){const s=Xl("canvas");return s.style.display="block",s}const Kp={};function ia(s){s in Kp||(Kp[s]=!0,console.warn(s))}function c_(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function u_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function f_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:po,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===kt&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===kt&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kr?Zl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Zp=[.64,.33,.3,.6,.15,.06],Qp=[.2126,.7152,.0722],Jp=[.3127,.329],em=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[po]:{primaries:Zp,whitePoint:Jp,transfer:Zl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:Zp,whitePoint:Jp,transfer:kt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}});let Gs;class d_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=Xl("canvas")),Gs.width=e.width,Gs.height=e.height;const r=Gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=fr(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(fr(n[r]/255)*255):n[r]=fr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h_=0;class gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?c.push(Ou(a[u].image)):c.push(Ou(a[u]))}else c=Ou(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Ou(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?d_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p_=0;class qn extends mo{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,r=ms,a=ms,c=Wi,u=gs,d=Fi,p=dr,m=qn.DEFAULT_ANISOTROPY,v=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=aa(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=ig;qn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],v=p[4],_=p[8],x=p[1],M=p[5],E=p[9],T=p[2],y=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,C=(M+1)/2,$=(g+1)/2,k=(v+x)/4,O=(_+T)/4,H=(E+y)/4;return D>C&&D>$?D<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(D),a=k/r,c=O/r):C>$?C<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(C),r=k/a,c=H/a):$<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt($),r=O/c,a=H/c),this.set(r,a,c,n),this}let I=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(_-T)/I,this.z=(x-v)/I,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m_ extends mo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new qn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends m_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class vg extends qn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g_ extends qn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,d){let p=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];const x=c[u+0],M=c[u+1],E=c[u+2],T=c[u+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=E,e[n+3]=T;return}if(_!==T||p!==x||m!==M||v!==E){let y=1-d;const g=p*x+m*M+v*E+_*T,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const $=Math.sqrt(D),k=Math.atan2($,g*I);y=Math.sin(y*k)/$,d=Math.sin(d*k)/$}const C=d*I;if(p=p*y+x*C,m=m*y+M*C,v=v*y+E*C,_=_*y+T*C,y===1-d){const $=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=$,m*=$,v*=$,_*=$}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,c,u){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],_=c[u],x=c[u+1],M=c[u+2],E=c[u+3];return e[n]=d*E+v*_+p*M-m*x,e[n+1]=p*E+v*x+m*_-d*M,e[n+2]=m*E+v*M+d*x-p*_,e[n+3]=v*E-d*_-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),_=d(c/2),x=p(r/2),M=p(a/2),E=p(c/2);switch(u){case"XYZ":this._x=x*v*_+m*M*E,this._y=m*M*_-x*v*E,this._z=m*v*E+x*M*_,this._w=m*v*_-x*M*E;break;case"YXZ":this._x=x*v*_+m*M*E,this._y=m*M*_-x*v*E,this._z=m*v*E-x*M*_,this._w=m*v*_+x*M*E;break;case"ZXY":this._x=x*v*_-m*M*E,this._y=m*M*_+x*v*E,this._z=m*v*E+x*M*_,this._w=m*v*_-x*M*E;break;case"ZYX":this._x=x*v*_-m*M*E,this._y=m*M*_+x*v*E,this._z=m*v*E-x*M*_,this._w=m*v*_+x*M*E;break;case"YZX":this._x=x*v*_+m*M*E,this._y=m*M*_+x*v*E,this._z=m*v*E-x*M*_,this._w=m*v*_-x*M*E;break;case"XZY":this._x=x*v*_-m*M*E,this._y=m*M*_-x*v*E,this._z=m*v*E+x*M*_,this._w=m*v*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],v=n[6],_=n[10],x=r+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-m)*M,this._z=(u-a)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(v-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(c+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(u-a)/M,this._x=(c+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+a*m-c*p,this._y=a*v+u*p+c*d-r*m,this._z=c*v+u*m+r*p-a*d,this._w=u*v-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),_=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=u*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*a-d*r),v=2*(d*n-c*a),_=2*(c*r-u*n);return this.x=n+p*m+u*_-d*v,this.y=r+p*v+d*m-c*_,this.z=a+p*_+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ni(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ku=new Z,nm=new la;class ca{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(c,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),pl.subVectors(this.max,Zo),Ws.subVectors(e.a,Zo),Xs.subVectors(e.b,Zo),js.subVectors(e.c,Zo),Lr.subVectors(Xs,Ws),Dr.subVectors(js,Xs),ss.subVectors(Ws,js);let n=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-ss.z,ss.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,ss.z,0,-ss.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-ss.y,ss.x,0];return!zu(n,Ws,Xs,js,pl)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,Ws,Xs,js,pl))?!1:(ml.crossVectors(Lr,Dr),n=[ml.x,ml.y,ml.z],zu(n,Ws,Xs,js,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Di=new Z,hl=new ca,Ws=new Z,Xs=new Z,js=new Z,Lr=new Z,Dr=new Z,ss=new Z,Zo=new Z,pl=new Z,ml=new Z,os=new Z;function zu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){os.fromArray(s,c);const d=a.x*Math.abs(os.x)+a.y*Math.abs(os.y)+a.z*Math.abs(os.z),p=e.dot(os),m=n.dot(os),v=r.dot(os);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const v_=new ca,Qo=new Z,Bu=new Z;class ua{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):v_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Qo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(Bu)),this.expandByPoint(Qo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new Z,Vu=new Z,gl=new Z,Ir=new Z,Hu=new Z,vl=new Z,Gu=new Z;class ud{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ir.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,n),ir.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Vu.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),Ir.copy(this.origin).sub(Vu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(gl),d=Ir.dot(this.direction),p=-Ir.dot(gl),m=Ir.lengthSq(),v=Math.abs(1-u*u);let _,x,M,E;if(v>0)if(_=u*p-d,x=u*d-p,E=c*v,_>=0)if(x>=-E)if(x<=E){const T=1/v;_*=T,x*=T,M=_*(_+u*x+2*d)+x*(u*_+x+2*p)+m}else x=c,_=Math.max(0,-(u*x+d)),M=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(u*x+d)),M=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),M=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Vu).addScaledVector(gl,x),M}intersectSphere(e,n){ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),a=ir.dot(ir)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,n,r,a,c){Hu.subVectors(n,e),vl.subVectors(r,e),Gu.crossVectors(Hu,vl);let u=this.direction.dot(Gu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ir.subVectors(this.origin,e);const p=d*this.direction.dot(vl.crossVectors(Ir,vl));if(p<0)return null;const m=d*this.direction.dot(Hu.cross(Ir));if(m<0||p+m>u)return null;const v=-d*Ir.dot(Gu);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,c,u,d,p,m,v,_,x,M,E,T,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m,v,_,x,M,E,T,y)}set(e,n,r,a,c,u,d,p,m,v,_,x,M,E,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=u,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=M,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/qs.setFromMatrixColumn(e,0).length(),c=1/qs.setFromMatrixColumn(e,1).length(),u=1/qs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*v,M=u*_,E=d*v,T=d*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=E+M*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*v,M=p*_,E=m*v,T=m*_;n[0]=x+T*d,n[4]=E*d-M,n[8]=u*m,n[1]=u*_,n[5]=u*v,n[9]=-d,n[2]=M*d-E,n[6]=T+x*d,n[10]=u*p}else if(e.order==="ZXY"){const x=p*v,M=p*_,E=m*v,T=m*_;n[0]=x-T*d,n[4]=-u*_,n[8]=E+M*d,n[1]=M+E*d,n[5]=u*v,n[9]=T-x*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const x=u*v,M=u*_,E=d*v,T=d*_;n[0]=p*v,n[4]=E*m-M,n[8]=x*m+T,n[1]=p*_,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,M=u*m,E=d*p,T=d*m;n[0]=p*v,n[4]=T-x*_,n[8]=E*_+M,n[1]=_,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=M*_+E,n[10]=x-T*_}else if(e.order==="XZY"){const x=u*p,M=u*m,E=d*p,T=d*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=x*_+T,n[5]=u*v,n[9]=M*_-E,n[2]=E*_-M,n[6]=d*v,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(__,e,x_)}lookAt(e,n,r){const a=this.elements;return ci.subVectors(e,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Ur.crossVectors(r,ci),Ur.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Ur.crossVectors(r,ci)),Ur.normalize(),_l.crossVectors(ci,Ur),a[0]=Ur.x,a[4]=_l.x,a[8]=ci.x,a[1]=Ur.y,a[5]=_l.y,a[9]=ci.y,a[2]=Ur.z,a[6]=_l.z,a[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],x=r[9],M=r[13],E=r[2],T=r[6],y=r[10],g=r[14],I=r[3],D=r[7],C=r[11],$=r[15],k=a[0],O=a[4],H=a[8],P=a[12],A=a[1],B=a[5],oe=a[9],ne=a[13],ve=a[2],ye=a[6],de=a[10],fe=a[14],G=a[3],_e=a[7],me=a[11],z=a[15];return c[0]=u*k+d*A+p*ve+m*G,c[4]=u*O+d*B+p*ye+m*_e,c[8]=u*H+d*oe+p*de+m*me,c[12]=u*P+d*ne+p*fe+m*z,c[1]=v*k+_*A+x*ve+M*G,c[5]=v*O+_*B+x*ye+M*_e,c[9]=v*H+_*oe+x*de+M*me,c[13]=v*P+_*ne+x*fe+M*z,c[2]=E*k+T*A+y*ve+g*G,c[6]=E*O+T*B+y*ye+g*_e,c[10]=E*H+T*oe+y*de+g*me,c[14]=E*P+T*ne+y*fe+g*z,c[3]=I*k+D*A+C*ve+$*G,c[7]=I*O+D*B+C*ye+$*_e,c[11]=I*H+D*oe+C*de+$*me,c[15]=I*P+D*ne+C*fe+$*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],x=e[10],M=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+c*p*_-a*m*_-c*d*x+r*m*x+a*d*M-r*p*M)+T*(+n*p*M-n*m*x+c*u*x-a*u*M+a*m*v-c*p*v)+y*(+n*m*_-n*d*M-c*u*_+r*u*M+c*d*v-r*m*v)+g*(-a*d*v-n*p*_+n*d*x+a*u*_-r*u*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],x=e[10],M=e[11],E=e[12],T=e[13],y=e[14],g=e[15],I=_*y*m-T*x*m+T*p*M-d*y*M-_*p*g+d*x*g,D=E*x*m-v*y*m-E*p*M+u*y*M+v*p*g-u*x*g,C=v*T*m-E*_*m+E*d*M-u*T*M-v*d*g+u*_*g,$=E*_*p-v*T*p-E*d*x+u*T*x+v*d*y-u*_*y,k=n*I+r*D+a*C+c*$;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=I*O,e[1]=(T*x*c-_*y*c-T*a*M+r*y*M+_*a*g-r*x*g)*O,e[2]=(d*y*c-T*p*c+T*a*m-r*y*m-d*a*g+r*p*g)*O,e[3]=(_*p*c-d*x*c-_*a*m+r*x*m+d*a*M-r*p*M)*O,e[4]=D*O,e[5]=(v*y*c-E*x*c+E*a*M-n*y*M-v*a*g+n*x*g)*O,e[6]=(E*p*c-u*y*c-E*a*m+n*y*m+u*a*g-n*p*g)*O,e[7]=(u*x*c-v*p*c+v*a*m-n*x*m-u*a*M+n*p*M)*O,e[8]=C*O,e[9]=(E*_*c-v*T*c-E*r*M+n*T*M+v*r*g-n*_*g)*O,e[10]=(u*T*c-E*d*c+E*r*m-n*T*m-u*r*g+n*d*g)*O,e[11]=(v*d*c-u*_*c-v*r*m+n*_*m+u*r*M-n*d*M)*O,e[12]=$*O,e[13]=(v*T*a-E*_*a+E*r*x-n*T*x-v*r*y+n*_*y)*O,e[14]=(E*d*a-u*T*a-E*r*p+n*T*p+u*r*y-n*d*y)*O,e[15]=(u*_*a-v*d*a+v*r*p-n*_*p-u*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,v=c*d;return this.set(m*u+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*u,0,m*p-a*d,v*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,v=u+u,_=d+d,x=c*m,M=c*v,E=c*_,T=u*v,y=u*_,g=d*_,I=p*m,D=p*v,C=p*_,$=r.x,k=r.y,O=r.z;return a[0]=(1-(T+g))*$,a[1]=(M+C)*$,a[2]=(E-D)*$,a[3]=0,a[4]=(M-C)*k,a[5]=(1-(x+g))*k,a[6]=(y+I)*k,a[7]=0,a[8]=(E+D)*O,a[9]=(y-I)*O,a[10]=(1-(x+T))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=qs.set(a[0],a[1],a[2]).length();const u=qs.set(a[4],a[5],a[6]).length(),d=qs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],Ii.copy(this);const m=1/c,v=1/u,_=1/d;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=v,Ii.elements[5]*=v,Ii.elements[6]*=v,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,n.setFromRotationMatrix(Ii),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,a,c,u,d=ur){const p=this.elements,m=2*c/(n-e),v=2*c/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let M,E;if(d===ur)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(d===Gl)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,u,d=ur){const p=this.elements,m=1/(n-e),v=1/(r-a),_=1/(u-c),x=(n+e)*m,M=(r+a)*v;let E,T;if(d===ur)E=(u+c)*_,T=-2*_;else if(d===Gl)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const qs=new Z,Ii=new Xt,__=new Z(0,0,0),x_=new Z(1,1,1),Ur=new Z,_l=new Z,ci=new Z,im=new Xt,rm=new la;class ki{constructor(e=0,n=0,r=0,a=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],d=a[8],p=a[1],m=a[5],v=a[9],_=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(ni(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ni(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ni(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(ni(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ni(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y_=0;const sm=new Z,Ys=new la,rr=new Xt,xl=new Z,Jo=new Z,M_=new Z,S_=new la,om=new Z(1,0,0),am=new Z(0,1,0),lm=new Z(0,0,1),cm={type:"added"},E_={type:"removed"},$s={type:"childadded",child:null},Wu={type:"childremoved",child:null};class un extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new Z,n=new ki,r=new la,a=new Z(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new mt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?xl.copy(e):xl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Jo,xl,this.up):rr.lookAt(xl,Jo,this.up),this.quaternion.setFromRotationMatrix(rr),a&&(rr.extractRotation(a.matrixWorld),Ys.setFromRotationMatrix(rr),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(E_),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,M_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,S_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),_=u(e.shapes),x=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}un.DEFAULT_UP=new Z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new Z,sr=new Z,Xu=new Z,or=new Z,Ks=new Z,Zs=new Z,um=new Z,ju=new Z,qu=new Z,Yu=new Z,$u=new zt,Ku=new zt,Zu=new zt;class Ni{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Ui.subVectors(e,n),a.cross(Ui);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){Ui.subVectors(a,n),sr.subVectors(r,n),Xu.subVectors(e,n);const u=Ui.dot(Ui),d=Ui.dot(sr),p=Ui.dot(Xu),m=sr.dot(sr),v=sr.dot(Xu),_=u*m-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*p-d*v)*x,E=(u*v-d*p)*x;return c.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,n,r,a,c,u,d,p){return this.getBarycoord(e,n,r,a,or)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,or.x),p.addScaledVector(u,or.y),p.addScaledVector(d,or.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return $u.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),$u.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector($u,c.x),u.addScaledVector(Ku,c.y),u.addScaledVector(Zu,c.z),u}static isFrontFacing(e,n,r,a){return Ui.subVectors(r,n),sr.subVectors(e,n),Ui.cross(sr).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ui.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return Ni.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,d;Ks.subVectors(a,r),Zs.subVectors(c,r),ju.subVectors(e,r);const p=Ks.dot(ju),m=Zs.dot(ju);if(p<=0&&m<=0)return n.copy(r);qu.subVectors(e,a);const v=Ks.dot(qu),_=Zs.dot(qu);if(v>=0&&_<=v)return n.copy(a);const x=p*_-v*m;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector(Ks,u);Yu.subVectors(e,c);const M=Ks.dot(Yu),E=Zs.dot(Yu);if(E>=0&&M<=E)return n.copy(c);const T=M*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Zs,d);const y=v*E-M*_;if(y<=0&&_-v>=0&&M-E>=0)return um.subVectors(c,a),d=(_-v)/(_-v+(M-E)),n.copy(a).addScaledVector(um,d);const g=1/(y+T+x);return u=T*g,d=x*g,n.copy(r).addScaledVector(Ks,u).addScaledVector(Zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Ct.workingColorSpace){if(e=a_(e,1),n=ni(n,0,1),r=ni(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Qu(u,c,e+1/3),this.g=Qu(u,c,e),this.b=Qu(u,c,e-1/3)}return Ct.toWorkingColorSpace(this,a),this}setStyle(e,n=Ei){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ei){const r=xg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return Ct.fromWorkingColorSpace(Fn.copy(this),e),Math.round(ni(Fn.r*255,0,255))*65536+Math.round(ni(Fn.g*255,0,255))*256+Math.round(ni(Fn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Fn.copy(this),n);const r=Fn.r,a=Fn.g,c=Fn.b,u=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const _=u-d;switch(m=v<=.5?_/(u+d):_/(2-u-d),u){case r:p=(a-c)/_+(a<c?6:0);break;case a:p=(c-r)/_+2;break;case c:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Ei){Ct.fromWorkingColorSpace(Fn.copy(this),e);const n=Fn.r,r=Fn.g,a=Fn.b;return e!==Ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+n,Nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Nr),e.getHSL(yl);const r=Nu(Nr.h,yl.h,n),a=Nu(Nr.s,yl.s,n),c=Nu(Nr.l,yl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Et;Et.NAMES=xg;let w_=0;class Hr extends mo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=aa(),this.name="",this.blending=ro,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(r.blending=this.blending),this.side!==Vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hf&&(r.blendSrc=this.blendSrc),this.blendDst!==pf&&(r.blendDst=this.blendDst),this.blendEquation!==hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends Hr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new Z,Ml=new wt;class di{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Yp,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ko(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),a=ei(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),a=ei(a,this.array),c=ei(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class yg extends di{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Mg extends di{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Qt extends di{constructor(e,n,r){super(new Float32Array(e),n,r)}}let T_=0;const Si=new Xt,Ju=new un,Qs=new Z,ui=new ca,ea=new ca,Mn=new Z;class Rn extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?Mg:yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,n,r){return Si.makeTranslation(e,n,r),this.applyMatrix4(Si),this}scale(e,n,r){return Si.makeScale(e,n,r),this.applyMatrix4(Si),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qt(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];ea.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ui.min,ea.min),ui.expandByPoint(Mn),Mn.addVectors(ui.max,ea.max),ui.expandByPoint(Mn)):(ui.expandByPoint(ea.min),ui.expandByPoint(ea.max))}ui.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)Mn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(Mn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Mn.fromBufferAttribute(d,m),p&&(Qs.fromBufferAttribute(e,m),Mn.add(Qs)),a=Math.max(a,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<r.count;H++)d[H]=new Z,p[H]=new Z;const m=new Z,v=new Z,_=new Z,x=new wt,M=new wt,E=new wt,T=new Z,y=new Z;function g(H,P,A){m.fromBufferAttribute(r,H),v.fromBufferAttribute(r,P),_.fromBufferAttribute(r,A),x.fromBufferAttribute(c,H),M.fromBufferAttribute(c,P),E.fromBufferAttribute(c,A),v.sub(m),_.sub(m),M.sub(x),E.sub(x);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(B),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(B),d[H].add(T),d[P].add(T),d[A].add(T),p[H].add(y),p[P].add(y),p[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let H=0,P=I.length;H<P;++H){const A=I[H],B=A.start,oe=A.count;for(let ne=B,ve=B+oe;ne<ve;ne+=3)g(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const D=new Z,C=new Z,$=new Z,k=new Z;function O(H){$.fromBufferAttribute(a,H),k.copy($);const P=d[H];D.copy(P),D.sub($.multiplyScalar($.dot(P))).normalize(),C.crossVectors(k,P);const B=C.dot(p[H])<0?-1:1;u.setXYZW(H,D.x,D.y,D.z,B)}for(let H=0,P=I.length;H<P;++H){const A=I[H],B=A.start,oe=A.count;for(let ne=B,ve=B+oe;ne<ve;ne+=3)O(e.getX(ne+0)),O(e.getX(ne+1)),O(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new Z,c=new Z,u=new Z,d=new Z,p=new Z,m=new Z,v=new Z,_=new Z;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),v.subVectors(u,c),_.subVectors(a,c),v.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(v),p.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,c),_.subVectors(a,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,x=new m.constructor(p.length*v);let M=0,E=0;for(let T=0,y=p.length;T<y;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*v;for(let g=0;g<v;g++)x[E++]=m[M++]}return new di(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,_=m.length;v<_;v++){const x=m[v],M=e(x,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,M=_.length;x<M;x++)v.push(_[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Xt,as=new ud,Sl=new ua,dm=new Z,El=new Z,wl=new Z,Tl=new Z,ef=new Z,Al=new Z,hm=new Z,Rl=new Z;class Fe extends un{constructor(e=new Rn,n=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){Al.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],_=c[p];v!==0&&(ef.fromBufferAttribute(_,e),u?Al.addScaledVector(ef,v):Al.addScaledVector(ef.sub(n),v))}n.add(Al)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(c),as.copy(e.ray).recast(e.near),!(Sl.containsPoint(as.origin)===!1&&(as.intersectSphere(Sl,dm)===null||as.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(c).invert(),as.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=u[y.materialIndex],I=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=I,$=D;C<$;C+=3){const k=d.getX(C),O=d.getX(C+1),H=d.getX(C+2);a=Cl(this,g,e,r,m,v,_,k,O,H),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const I=d.getX(y),D=d.getX(y+1),C=d.getX(y+2);a=Cl(this,u,e,r,m,v,_,I,D,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=u[y.materialIndex],I=Math.max(y.start,M.start),D=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=I,$=D;C<$;C+=3){const k=C,O=C+1,H=C+2;a=Cl(this,g,e,r,m,v,_,k,O,H),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const I=y,D=y+1,C=y+2;a=Cl(this,u,e,r,m,v,_,I,D,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function A_(s,e,n,r,a,c,u,d){let p;if(e.side===ri?p=r.intersectTriangle(u,c,a,!0,d):p=r.intersectTriangle(a,c,u,e.side===Vr,d),p===null)return null;Rl.copy(d),Rl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Rl);return m<n.near||m>n.far?null:{distance:m,point:Rl.clone(),object:s}}function Cl(s,e,n,r,a,c,u,d,p,m){s.getVertexPosition(d,El),s.getVertexPosition(p,wl),s.getVertexPosition(m,Tl);const v=A_(s,e,n,r,El,wl,Tl,hm);if(v){const _=new Z;Ni.getBarycoord(hm,El,wl,Tl,_),a&&(v.uv=Ni.getInterpolatedAttribute(a,d,p,m,_,new wt)),c&&(v.uv1=Ni.getInterpolatedAttribute(c,d,p,m,_,new wt)),u&&(v.normal=Ni.getInterpolatedAttribute(u,d,p,m,_,new Z),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Z,materialIndex:0};Ni.getNormal(El,wl,Tl,x.normal),v.face=x,v.barycoord=_}return v}class Ft extends Rn{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const d=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,c,4),E("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(_,2));function E(T,y,g,I,D,C,$,k,O,H,P){const A=C/O,B=$/H,oe=C/2,ne=$/2,ve=k/2,ye=O+1,de=H+1;let fe=0,G=0;const _e=new Z;for(let me=0;me<de;me++){const z=me*B-ne;for(let ue=0;ue<ye;ue++){const He=ue*A-oe;_e[T]=He*I,_e[y]=z*D,_e[g]=ve,m.push(_e.x,_e.y,_e.z),_e[T]=0,_e[y]=0,_e[g]=k>0?1:-1,v.push(_e.x,_e.y,_e.z),_.push(ue/O),_.push(1-me/H),fe+=1}}for(let me=0;me<H;me++)for(let z=0;z<O;z++){const ue=x+z+ye*me,He=x+z+ye*(me+1),re=x+(z+1)+ye*(me+1),Me=x+(z+1)+ye*me;p.push(ue,He,Me),p.push(He,re,Me),G+=6}d.addGroup(M,G,P),M+=G,x+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function jn(s){const e={};for(let n=0;n<s.length;n++){const r=ho(s[n]);for(const a in r)e[a]=r[a]}return e}function R_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const C_={clone:ho,merge:jn};var b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Hr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eg extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ur}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new Z,pm=new wt,mm=new wt;class ii extends Eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wl*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Js=-90,eo=1;class L_ extends un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(Js,eo,e,n);a.layers=this.layers,this.add(a);const c=new ii(Js,eo,e,n);c.layers=this.layers,this.add(c);const u=new ii(Js,eo,e,n);u.layers=this.layers,this.add(u);const d=new ii(Js,eo,e,n);d.layers=this.layers,this.add(d);const p=new ii(Js,eo,e,n);p.layers=this.layers,this.add(p);const m=new ii(Js,eo,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===ur)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class wg extends qn{constructor(e,n,r,a,c,u,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:lo,super(e,n,r,a,c,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D_ extends _s{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new wg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ft(5,5,5),c=new hr({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:zr});c.uniforms.tEquirect.value=n;const u=new Fe(a,c),d=n.minFilter;return n.minFilter===gs&&(n.minFilter=Wi),new L_(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const tf=new Z,I_=new Z,U_=new mt;class fs{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=tf.subVectors(r,n).cross(I_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(tf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||U_.getNormalMatrix(e),a=this.coplanarPoint(tf).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new ua,bl=new Z;class fd{constructor(e=new fs,n=new fs,r=new fs,a=new fs,c=new fs,u=new fs){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ur){const r=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],p=a[3],m=a[4],v=a[5],_=a[6],x=a[7],M=a[8],E=a[9],T=a[10],y=a[11],g=a[12],I=a[13],D=a[14],C=a[15];if(r[0].setComponents(p-c,x-m,y-M,C-g).normalize(),r[1].setComponents(p+c,x+m,y+M,C+g).normalize(),r[2].setComponents(p+u,x+v,y+E,C+I).normalize(),r[3].setComponents(p-u,x-v,y-E,C-I).normalize(),r[4].setComponents(p-d,x-_,y-T,C-D).normalize(),n===ur)r[5].setComponents(p+d,x+_,y+T,C+D).normalize();else if(n===Gl)r[5].setComponents(d,_,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(bl.x=a.normal.x>0?e.max.x:e.min.x,bl.y=a.normal.y>0?e.max.y:e.min.y,bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tg(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function N_(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:u}}class fi extends Rn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,_=e/d,x=n/p,M=[],E=[],T=[],y=[];for(let g=0;g<v;g++){const I=g*x-u;for(let D=0;D<m;D++){const C=D*_-c;E.push(C,-I,0),T.push(0,0,1),y.push(D/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const D=I+m*g,C=I+m*(g+1),$=I+1+m*(g+1),k=I+1+m*g;M.push(D,C,k),M.push(C,$,k)}this.setIndex(M),this.setAttribute("position",new Qt(E,3)),this.setAttribute("normal",new Qt(T,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var F_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O_=`#ifdef USE_ALPHAHASH
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
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
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
#endif`,G_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W_=`#ifdef USE_BATCHING
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
#endif`,X_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$_=`#ifdef USE_IRIDESCENCE
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
#endif`,K_=`#ifdef USE_BUMPMAP
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
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
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,Vy=`#include <common>
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
}`,gt={alphahash_fragment:F_,alphahash_pars_fragment:O_,alphamap_fragment:k_,alphamap_pars_fragment:z_,alphatest_fragment:B_,alphatest_pars_fragment:V_,aomap_fragment:H_,aomap_pars_fragment:G_,batching_pars_vertex:W_,batching_vertex:X_,begin_vertex:j_,beginnormal_vertex:q_,bsdfs:Y_,iridescence_fragment:$_,bumpmap_pars_fragment:K_,clipping_planes_fragment:Z_,clipping_planes_pars_fragment:Q_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:rx,common:sx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:ax,displacementmap_pars_vertex:lx,displacementmap_vertex:cx,emissivemap_fragment:ux,emissivemap_pars_fragment:fx,colorspace_fragment:dx,colorspace_pars_fragment:hx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Cx,envmap_vertex:_x,fog_vertex:xx,fog_pars_vertex:yx,fog_fragment:Mx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:wx,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:bx,lights_toon_pars_fragment:Px,lights_phong_fragment:Lx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Ux,lights_fragment_begin:Nx,lights_fragment_maps:Fx,lights_fragment_end:Ox,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:Vx,map_fragment:Hx,map_pars_fragment:Gx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Yx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Qx,normal_fragment_begin:Jx,normal_fragment_maps:ey,normal_pars_fragment:ty,normal_pars_vertex:ny,normal_vertex:iy,normalmap_pars_fragment:ry,clearcoat_normal_fragment_begin:sy,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ay,iridescence_pars_fragment:ly,opaque_fragment:cy,packing:uy,premultiplied_alpha_fragment:fy,project_vertex:dy,dithering_fragment:hy,dithering_pars_fragment:py,roughnessmap_fragment:my,roughnessmap_pars_fragment:gy,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:_y,shadowmap_vertex:xy,shadowmask_pars_fragment:yy,skinbase_vertex:My,skinning_pars_vertex:Sy,skinning_vertex:Ey,skinnormal_vertex:wy,specularmap_fragment:Ty,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:by,transmission_pars_fragment:Py,uv_pars_fragment:Ly,uv_pars_vertex:Dy,uv_vertex:Iy,worldpos_vertex:Uy,background_vert:Ny,background_frag:Fy,backgroundCube_vert:Oy,backgroundCube_frag:ky,cube_vert:zy,cube_frag:By,depth_vert:Vy,depth_frag:Hy,distanceRGBA_vert:Gy,distanceRGBA_frag:Wy,equirect_vert:Xy,equirect_frag:jy,linedashed_vert:qy,linedashed_frag:Yy,meshbasic_vert:$y,meshbasic_frag:Ky,meshlambert_vert:Zy,meshlambert_frag:Qy,meshmatcap_vert:Jy,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:fM,shadow_frag:dM,sprite_vert:hM,sprite_frag:pM},ke={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Gi={basic:{uniforms:jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:jn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:jn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Et(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:jn([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:jn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:jn([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:jn([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:jn([ke.common,ke.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:jn([ke.lights,ke.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Gi.physical={uniforms:jn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Pl={r:0,b:0,g:0},cs=new ki,mM=new Xt;function gM(s,e,n,r,a,c,u){const d=new Et(0);let p=c===!0?0:1,m,v,_=null,x=0,M=null;function E(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?n:e).get(D)),D}function T(I){let D=!1;const C=E(I);C===null?g(d,p):C&&C.isColor&&(g(C,1),D=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,D){const C=E(D);C&&(C.isCubeTexture||C.mapping===Kl)?(v===void 0&&(v=new Fe(new Ft(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ho(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function($,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),cs.copy(D.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(cs)),v.material.toneMapped=Ct.getTransfer(C.colorSpace)!==kt,(_!==C||x!==C.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=C,x=C.version,M=s.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Fe(new fi(2,2),new hr({name:"BackgroundMaterial",uniforms:ho(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||x!==C.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=C,x=C.version,M=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,D){I.getRGB(Pl,Sg(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,D,u)}return{getClearColor:function(){return d},setClearColor:function(I,D=1){d.set(I),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(d,p)},render:T,addToRenderList:y}}function vM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,u=!1;function d(A,B,oe,ne,ve){let ye=!1;const de=_(ne,oe,B);c!==de&&(c=de,m(c.object)),ye=M(A,ne,oe,ve),ye&&E(A,ne,oe,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(ye||u)&&(u=!1,C(A,B,oe,ne),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function _(A,B,oe){const ne=oe.wireframe===!0;let ve=r[A.id];ve===void 0&&(ve={},r[A.id]=ve);let ye=ve[B.id];ye===void 0&&(ye={},ve[B.id]=ye);let de=ye[ne];return de===void 0&&(de=x(p()),ye[ne]=de),de}function x(A){const B=[],oe=[],ne=[];for(let ve=0;ve<n;ve++)B[ve]=0,oe[ve]=0,ne[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:ne,object:A,attributes:{},index:null}}function M(A,B,oe,ne){const ve=c.attributes,ye=B.attributes;let de=0;const fe=oe.getAttributes();for(const G in fe)if(fe[G].location>=0){const me=ve[G];let z=ye[G];if(z===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),me===void 0||me.attribute!==z||z&&me.data!==z.data)return!0;de++}return c.attributesNum!==de||c.index!==ne}function E(A,B,oe,ne){const ve={},ye=B.attributes;let de=0;const fe=oe.getAttributes();for(const G in fe)if(fe[G].location>=0){let me=ye[G];me===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(me=A.instanceColor));const z={};z.attribute=me,me&&me.data&&(z.data=me.data),ve[G]=z,de++}c.attributes=ve,c.attributesNum=de,c.index=ne}function T(){const A=c.newAttributes;for(let B=0,oe=A.length;B<oe;B++)A[B]=0}function y(A){g(A,0)}function g(A,B){const oe=c.newAttributes,ne=c.enabledAttributes,ve=c.attributeDivisors;oe[A]=1,ne[A]===0&&(s.enableVertexAttribArray(A),ne[A]=1),ve[A]!==B&&(s.vertexAttribDivisor(A,B),ve[A]=B)}function I(){const A=c.newAttributes,B=c.enabledAttributes;for(let oe=0,ne=B.length;oe<ne;oe++)B[oe]!==A[oe]&&(s.disableVertexAttribArray(oe),B[oe]=0)}function D(A,B,oe,ne,ve,ye,de){de===!0?s.vertexAttribIPointer(A,B,oe,ve,ye):s.vertexAttribPointer(A,B,oe,ne,ve,ye)}function C(A,B,oe,ne){T();const ve=ne.attributes,ye=oe.getAttributes(),de=B.defaultAttributeValues;for(const fe in ye){const G=ye[fe];if(G.location>=0){let _e=ve[fe];if(_e===void 0&&(fe==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),fe==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor)),_e!==void 0){const me=_e.normalized,z=_e.itemSize,ue=e.get(_e);if(ue===void 0)continue;const He=ue.buffer,re=ue.type,Me=ue.bytesPerElement,Ce=re===s.INT||re===s.UNSIGNED_INT||_e.gpuType===id;if(_e.isInterleavedBufferAttribute){const Te=_e.data,Ue=Te.stride,Ge=_e.offset;if(Te.isInstancedInterleavedBuffer){for(let st=0;st<G.locationSize;st++)g(G.location+st,Te.meshPerAttribute);A.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let st=0;st<G.locationSize;st++)y(G.location+st);s.bindBuffer(s.ARRAY_BUFFER,He);for(let st=0;st<G.locationSize;st++)D(G.location+st,z/G.locationSize,re,me,Ue*Me,(Ge+z/G.locationSize*st)*Me,Ce)}else{if(_e.isInstancedBufferAttribute){for(let Te=0;Te<G.locationSize;Te++)g(G.location+Te,_e.meshPerAttribute);A.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Te=0;Te<G.locationSize;Te++)y(G.location+Te);s.bindBuffer(s.ARRAY_BUFFER,He);for(let Te=0;Te<G.locationSize;Te++)D(G.location+Te,z/G.locationSize,re,me,z*Me,z/G.locationSize*Te*Me,Ce)}}else if(de!==void 0){const me=de[fe];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(G.location,me);break;case 3:s.vertexAttrib3fv(G.location,me);break;case 4:s.vertexAttrib4fv(G.location,me);break;default:s.vertexAttrib1fv(G.location,me)}}}}I()}function $(){H();for(const A in r){const B=r[A];for(const oe in B){const ne=B[oe];for(const ve in ne)v(ne[ve].object),delete ne[ve];delete B[oe]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const oe in B){const ne=B[oe];for(const ve in ne)v(ne[ve].object),delete ne[ve];delete B[oe]}delete r[A.id]}function O(A){for(const B in r){const oe=r[B];if(oe[A.id]===void 0)continue;const ne=oe[A.id];for(const ve in ne)v(ne[ve].object),delete ne[ve];delete oe[A.id]}}function H(){P(),u=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:H,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:I}}function _M(s,e,n){let r;function a(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),n.update(v,r,_))}function d(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=v[E];n.update(M,r,1)}function p(m,v,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)u(m[E],v[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=v[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function xM(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==Fi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const H=O===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==dr&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==cr&&!H)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:$,maxSamples:k}}function yM(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new fs,d=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||a;return a=x,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,g=s.get(_);if(!a||E===null||E.length===0||c&&!y)c?v(null):m();else{const I=c?0:r,D=I*4;let C=g.clippingState||null;p.value=C,C=v(E,x,D,M);for(let $=0;$!==D;++$)C[$]=n[$];g.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,M,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const g=M+T*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,C=M;D!==T;++D,C+=4)u.copy(_[D]).applyMatrix4(I,d),u.normal.toArray(y,C),y[C+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function MM(s){let e=new WeakMap;function n(u,d){return d===Sf?u.mapping=lo:d===Ef&&(u.mapping=co),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Sf||d===Ef)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new D_(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Ag extends Eg{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const no=4,gm=[.125,.215,.35,.446,.526,.582],ps=20,nf=new Ag,vm=new Et;let rf=null,sf=0,of=0,af=!1;const ds=(1+Math.sqrt(5))/2,to=1/ds,_m=[new Z(-ds,to,0),new Z(ds,to,0),new Z(-to,0,ds),new Z(to,0,ds),new Z(0,ds,-to),new Z(0,ds,to),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,sf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:oa,format:Fi,colorSpace:po,depthBuffer:!1},a=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SM(c)),this._blurMaterial=EM(c,e,n)}return a}_compileMaterial(e){const n=new Fe(this._lodPlanes[0],e);this._renderer.compile(n,nf)}_sceneToCubeUV(e,n,r,a){const d=new ii(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(vm),v.toneMapping=Br,v.autoClear=!1;const M=new hn({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),E=new Fe(new Ft,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(vm),T=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;Ll(a,I*D,g>2?D:0,D,D),v.setRenderTarget(a),T&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=_,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===lo||e.mapping===co;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Fe(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Ll(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,nf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=_m[(a-c-1)%_m.length];this._blur(e,c-1,c,u,d)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Fe(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ps-1),T=c/E,y=isFinite(c)?1+Math.floor(v*T):ps;y>ps&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ps}`);const g=[];let I=0;for(let O=0;O<ps;++O){const H=O/T,P=Math.exp(-H*H/2);g.push(P),O===0?I+=P:O<y&&(I+=2*P)}for(let O=0;O<g.length;O++)g[O]=g[O]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-r;const C=this._sizeLods[a],$=3*C*(a>D-no?a-D+no:0),k=4*(this._cubeSize-C);Ll(n,$,k,3*C,2*C),p.setRenderTarget(n),p.render(_,nf)}}function SM(s){const e=[],n=[],r=[];let a=s;const c=s-no+1+gm.length;for(let u=0;u<c;u++){const d=Math.pow(2,a);n.push(d);let p=1/d;u>s-no?p=gm[u-s+no-1]:u===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,T=3,y=2,g=1,I=new Float32Array(T*E*M),D=new Float32Array(y*E*M),C=new Float32Array(g*E*M);for(let k=0;k<M;k++){const O=k%3*2/3-1,H=k>2?0:-1,P=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];I.set(P,T*E*k),D.set(x,y*E*k);const A=[k,k,k,k,k,k];C.set(A,g*E*k)}const $=new Rn;$.setAttribute("position",new di(I,T)),$.setAttribute("uv",new di(D,y)),$.setAttribute("faceIndex",new di(C,g)),e.push($),a>no&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ym(s,e,n){const r=new _s(s,e,n);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function EM(s,e,n){const r=new Float32Array(ps),a=new Z(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:dd(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Mm(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Sm(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function dd(){return`

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
	`}function wM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Sf||p===Ef,v=p===lo||p===co;if(m||v){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new xm(s)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new xm(s)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function TM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ia("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function AM(s,e,n,r){const a={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",u),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const T=M[E];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(_){const x=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const I=M.array;T=M.version;for(let D=0,C=I.length;D<C;D+=3){const $=I[D+0],k=I[D+1],O=I[D+2];x.push($,k,k,O,O,$)}}else if(E!==void 0){const I=E.array;T=E.version;for(let D=0,C=I.length/3-1;D<C;D+=3){const $=D+0,k=D+1,O=D+2;x.push($,k,k,O,O,$)}}else return;const y=new(mg(x)?Mg:yg)(x,1);y.version=T;const g=c.get(_);g&&e.remove(g),c.set(_,y)}function v(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function RM(s,e,n){let r;function a(x){r=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function p(x,M){s.drawElements(r,M,c,x*u),n.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,x*u,E),n.update(M,r,E))}function v(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];n.update(y,r,1)}function _(x,M,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/u,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,T,0,E);let g=0;for(let I=0;I<E;I++)g+=M[I]*T[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function CM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function bM(s,e,n){const r=new WeakMap,a=new zt;function c(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let A=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let $=d.attributes.position.count*C,k=1;$>e.maxTextureSize&&(k=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*k*4*_),H=new vg(O,$,k,_);H.type=cr,H.needsUpdate=!0;const P=C*4;for(let B=0;B<_;B++){const oe=g[B],ne=I[B],ve=D[B],ye=$*k*4*B;for(let de=0;de<oe.count;de++){const fe=de*P;E===!0&&(a.fromBufferAttribute(oe,de),O[ye+fe+0]=a.x,O[ye+fe+1]=a.y,O[ye+fe+2]=a.z,O[ye+fe+3]=0),T===!0&&(a.fromBufferAttribute(ne,de),O[ye+fe+4]=a.x,O[ye+fe+5]=a.y,O[ye+fe+6]=a.z,O[ye+fe+7]=0),y===!0&&(a.fromBufferAttribute(ve,de),O[ye+fe+8]=a.x,O[ye+fe+9]=a.y,O[ye+fe+10]=a.z,O[ye+fe+11]=ve.itemSize===4?a.w:1)}}x={count:_,texture:H,size:new wt($,k)},r.set(d,x),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function PM(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function u(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Rg extends qn{constructor(e,n,r,a,c,u,d,p,m,v=so){if(v!==so&&v!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===so&&(r=vs),r===void 0&&v===fo&&(r=uo),super(null,a,c,u,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Oi,this.minFilter=p!==void 0?p:Oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cg=new qn,Em=new Rg(1,1),bg=new vg,Pg=new g_,Lg=new wg,wm=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function go(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=wm[a];if(c===void 0&&(c=new Float32Array(a),wm[a]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function pn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function mn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ql(s,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function LM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;s.uniform2fv(this.addr,e),mn(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(pn(n,e))return;s.uniform3fv(this.addr,e),mn(n,e)}}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;s.uniform4fv(this.addr,e),mn(n,e)}}function NM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(pn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),mn(n,r)}}function FM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(pn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),mn(n,r)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(pn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),mn(n,r)}}function kM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;s.uniform2iv(this.addr,e),mn(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;s.uniform3iv(this.addr,e),mn(n,e)}}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;s.uniform4iv(this.addr,e),mn(n,e)}}function HM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;s.uniform2uiv(this.addr,e),mn(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;s.uniform3uiv(this.addr,e),mn(n,e)}}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;s.uniform4uiv(this.addr,e),mn(n,e)}}function jM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=pg,c=Em):c=Cg,n.setTexture2D(e||c,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Pg,a)}function YM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Lg,a)}function $M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||bg,a)}function KM(s){switch(s){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return BM;case 35669:case 35673:return VM;case 5125:return HM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return $M}}function ZM(s,e){s.uniform1fv(this.addr,e)}function QM(s,e){const n=go(e,this.size,2);s.uniform2fv(this.addr,n)}function JM(s,e){const n=go(e,this.size,3);s.uniform3fv(this.addr,n)}function eS(s,e){const n=go(e,this.size,4);s.uniform4fv(this.addr,n)}function tS(s,e){const n=go(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function nS(s,e){const n=go(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function iS(s,e){const n=go(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function rS(s,e){s.uniform1iv(this.addr,e)}function sS(s,e){s.uniform2iv(this.addr,e)}function oS(s,e){s.uniform3iv(this.addr,e)}function aS(s,e){s.uniform4iv(this.addr,e)}function lS(s,e){s.uniform1uiv(this.addr,e)}function cS(s,e){s.uniform2uiv(this.addr,e)}function uS(s,e){s.uniform3uiv(this.addr,e)}function fS(s,e){s.uniform4uiv(this.addr,e)}function dS(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Cg,c[u])}function hS(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||Pg,c[u])}function pS(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Lg,c[u])}function mS(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||bg,c[u])}function gS(s){switch(s){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return eS;case 35674:return tS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return rS;case 35667:case 35671:return sS;case 35668:case 35672:return oS;case 35669:case 35673:return aS;case 5125:return lS;case 36294:return cS;case 36295:return uS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}class vS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=KM(n.type)}}class _S{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gS(n.type)}}class xS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function bm(s,e){s.seq.push(e),s.map[e.id]=e}function yS(s,e,n){const r=s.name,a=r.length;for(lf.lastIndex=0;;){const c=lf.exec(r),u=lf.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===a){bm(n,m===void 0?new vS(d,s,e):new _S(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new xS(d),bm(n,_)),n=_}}}class Hl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);yS(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const MS=37297;let SS=0;function ES(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Lm=new mt;function wS(s){Ct._getMatrix(Lm,Ct.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Zl:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+ES(s.getShaderSource(e),u)}else return a}function TS(s,e){const n=wS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AS(s,e){let n;switch(e){case Wv:n="Linear";break;case Xv:n="Reinhard";break;case jv:n="Cineon";break;case ng:n="ACESFilmic";break;case Yv:n="AgX";break;case $v:n="Neutral";break;case qv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new Z;function RS(){Ct.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function bS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function PS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function ra(s){return s!==""}function Im(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(s){return s.replace(LS,IS)}const DS=new Map;function IS(s,e){let n=gt[e];if(n===void 0){const r=DS.get(e);if(r!==void 0)n=gt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qf(n)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(US,NS)}function NS(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function FS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function OS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function zS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case Hv:e="ENVMAP_BLENDING_MIX";break;case Gv:e="ENVMAP_BLENDING_ADD";break}return e}function BS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function VS(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=FS(n),m=OS(n),v=kS(n),_=zS(n),x=BS(n),M=CS(n),E=bS(c),T=a.createProgram();let y,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ra).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ra).join(`
`),g.length>0&&(g+=`
`)):(y=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),g=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Br?"#define TONE_MAPPING":"",n.toneMapping!==Br?gt.tonemapping_pars_fragment:"",n.toneMapping!==Br?AS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,TS("linearToOutputTexel",n.outputColorSpace),RS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),u=Qf(u),u=Im(u,n),u=Um(u,n),d=Qf(d),d=Im(d,n),d=Um(d,n),u=Nm(u),d=Nm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+y+u,C=I+g+d,$=Pm(a,a.VERTEX_SHADER,D),k=Pm(a,a.FRAGMENT_SHADER,C);a.attachShader(T,$),a.attachShader(T,k),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function O(B){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),ne=a.getShaderInfoLog($).trim(),ve=a.getShaderInfoLog(k).trim();let ye=!0,de=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ye=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,$,k);else{const fe=Dm(a,$,"vertex"),G=Dm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+fe+`
`+G)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ne===""||ve==="")&&(de=!1);de&&(B.diagnostics={runnable:ye,programLog:oe,vertexShader:{log:ne,prefix:y},fragmentShader:{log:ve,prefix:g}})}a.deleteShader($),a.deleteShader(k),H=new Hl(a,T),P=PS(a,T)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,MS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=$,this.fragmentShader=k,this}let HS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new WS(e),n.set(e,r)),r}}class WS{constructor(e){this.id=HS++,this.code=e,this.usedTimes=0}}function XS(s,e,n,r,a,c,u){const d=new _g,p=new GS,m=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,B,oe,ne){const ve=oe.fog,ye=ne.geometry,de=P.isMeshStandardMaterial?oe.environment:null,fe=(P.isMeshStandardMaterial?n:e).get(P.envMap||de),G=fe&&fe.mapping===Kl?fe.image.height:null,_e=E[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const me=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,z=me!==void 0?me.length:0;let ue=0;ye.morphAttributes.position!==void 0&&(ue=1),ye.morphAttributes.normal!==void 0&&(ue=2),ye.morphAttributes.color!==void 0&&(ue=3);let He,re,Me,Ce;if(_e){const xt=Gi[_e];He=xt.vertexShader,re=xt.fragmentShader}else He=P.vertexShader,re=P.fragmentShader,p.update(P),Me=p.getVertexShaderID(P),Ce=p.getFragmentShaderID(P);const Te=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Ge=ne.isInstancedMesh===!0,st=ne.isBatchedMesh===!0,It=!!P.map,vt=!!P.matcap,Ot=!!fe,K=!!P.aoMap,En=!!P.lightMap,_t=!!P.bumpMap,ht=!!P.normalMap,it=!!P.displacementMap,Pt=!!P.emissiveMap,et=!!P.metalnessMap,U=!!P.roughnessMap,w=P.anisotropy>0,se=P.clearcoat>0,b=P.dispersion>0,F=P.iridescence>0,L=P.sheen>0,te=P.transmission>0,Q=w&&!!P.anisotropyMap,he=se&&!!P.clearcoatMap,Se=se&&!!P.clearcoatNormalMap,ge=se&&!!P.clearcoatRoughnessMap,xe=F&&!!P.iridescenceMap,Ne=F&&!!P.iridescenceThicknessMap,ze=L&&!!P.sheenColorMap,be=L&&!!P.sheenRoughnessMap,tt=!!P.specularMap,Xe=!!P.specularColorMap,rt=!!P.specularIntensityMap,X=te&&!!P.transmissionMap,W=te&&!!P.thicknessMap,ee=!!P.gradientMap,pe=!!P.alphaMap,De=P.alphaTest>0,Ie=!!P.alphaHash,nt=!!P.extensions;let At=Br;P.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(At=s.toneMapping);const Ut={shaderID:_e,shaderType:P.type,shaderName:P.name,vertexShader:He,fragmentShader:re,defines:P.defines,customVertexShaderID:Me,customFragmentShaderID:Ce,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:st,batchingColor:st&&ne._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&ne.instanceColor!==null,instancingMorph:Ge&&ne.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:po,alphaToCoverage:!!P.alphaToCoverage,map:It,matcap:vt,envMap:Ot,envMapMode:Ot&&fe.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:En,bumpMap:_t,normalMap:ht,displacementMap:x&&it,emissiveMap:Pt,normalMapObjectSpace:ht&&P.normalMapType===Jv,normalMapTangentSpace:ht&&P.normalMapType===cd,metalnessMap:et,roughnessMap:U,anisotropy:w,anisotropyMap:Q,clearcoat:se,clearcoatMap:he,clearcoatNormalMap:Se,clearcoatRoughnessMap:ge,dispersion:b,iridescence:F,iridescenceMap:xe,iridescenceThicknessMap:Ne,sheen:L,sheenColorMap:ze,sheenRoughnessMap:be,specularMap:tt,specularColorMap:Xe,specularIntensityMap:rt,transmission:te,transmissionMap:X,thicknessMap:W,gradientMap:ee,opaque:P.transparent===!1&&P.blending===ro&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Ie,combine:P.combine,mapUv:It&&T(P.map.channel),aoMapUv:K&&T(P.aoMap.channel),lightMapUv:En&&T(P.lightMap.channel),bumpMapUv:_t&&T(P.bumpMap.channel),normalMapUv:ht&&T(P.normalMap.channel),displacementMapUv:it&&T(P.displacementMap.channel),emissiveMapUv:Pt&&T(P.emissiveMap.channel),metalnessMapUv:et&&T(P.metalnessMap.channel),roughnessMapUv:U&&T(P.roughnessMap.channel),anisotropyMapUv:Q&&T(P.anisotropyMap.channel),clearcoatMapUv:he&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Se&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:be&&T(P.sheenRoughnessMap.channel),specularMapUv:tt&&T(P.specularMap.channel),specularColorMapUv:Xe&&T(P.specularColorMap.channel),specularIntensityMapUv:rt&&T(P.specularIntensityMap.channel),transmissionMapUv:X&&T(P.transmissionMap.channel),thicknessMapUv:W&&T(P.thicknessMap.channel),alphaMapUv:pe&&T(P.alphaMap.channel),vertexTangents:!!ye.attributes.tangent&&(ht||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ye.attributes.uv&&(It||pe),fog:!!ve,useFog:P.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ue,skinning:ne.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,decodeVideoTexture:It&&P.map.isVideoTexture===!0&&Ct.getTransfer(P.map.colorSpace)===kt,decodeVideoTextureEmissive:Pt&&P.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(P.emissiveMap.colorSpace)===kt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===wi,flipSided:P.side===ri,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:nt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&P.extensions.multiDraw===!0||st)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Ut.vertexUv1s=m.has(1),Ut.vertexUv2s=m.has(2),Ut.vertexUv3s=m.has(3),m.clear(),Ut}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(I(A,P),D(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function I(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function D(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const A=E[P.type];let B;if(A){const oe=Gi[A];B=C_.clone(oe.uniforms)}else B=P.uniforms;return B}function $(P,A){let B;for(let oe=0,ne=v.length;oe<ne;oe++){const ve=v[oe];if(ve.cacheKey===A){B=ve,++B.usedTimes;break}}return B===void 0&&(B=new VS(s,A,P,c),v.push(B)),B}function k(P){if(--P.usedTimes===0){const A=v.indexOf(P);v[A]=v[v.length-1],v.pop(),P.destroy()}}function O(P){p.remove(P)}function H(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:$,releaseProgram:k,releaseShaderCache:O,programs:v,dispose:H}}function jS(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function qS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function km(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(_,x,M,E,T,y){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=T,g.group=y),e++,g}function d(_,x,M,E,T,y){const g=u(_,x,M,E,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function p(_,x,M,E,T,y){const g=u(_,x,M,E,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(_,x){n.length>1&&n.sort(_||qS),r.length>1&&r.sort(x||Om),a.length>1&&a.sort(x||Om)}function v(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:p,finish:v,sort:m}}function YS(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new km,s.set(r,[u])):a>=c.length?(u=new km,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function $S(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Et};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function KS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let ZS=0;function QS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function JS(s){const e=new $S,n=KS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,c=new Xt,u=new Xt;function d(m){let v=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,E=0,T=0,y=0,g=0,I=0,D=0,C=0,$=0,k=0,O=0;m.sort(QS);for(let P=0,A=m.length;P<A;P++){const B=m[P],oe=B.color,ne=B.intensity,ve=B.distance,ye=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=oe.r*ne,_+=oe.g*ne,x+=oe.b*ne;else if(B.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(B.sh.coefficients[de],ne);O++}else if(B.isDirectionalLight){const de=e.get(B);if(de.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const fe=B.shadow,G=n.get(B);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,r.directionalShadow[M]=G,r.directionalShadowMap[M]=ye,r.directionalShadowMatrix[M]=B.shadow.matrix,I++}r.directional[M]=de,M++}else if(B.isSpotLight){const de=e.get(B);de.position.setFromMatrixPosition(B.matrixWorld),de.color.copy(oe).multiplyScalar(ne),de.distance=ve,de.coneCos=Math.cos(B.angle),de.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),de.decay=B.decay,r.spot[T]=de;const fe=B.shadow;if(B.map&&(r.spotLightMap[$]=B.map,$++,fe.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[T]=fe.matrix,B.castShadow){const G=n.get(B);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,r.spotShadow[T]=G,r.spotShadowMap[T]=ye,C++}T++}else if(B.isRectAreaLight){const de=e.get(B);de.color.copy(oe).multiplyScalar(ne),de.halfWidth.set(B.width*.5,0,0),de.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=de,y++}else if(B.isPointLight){const de=e.get(B);if(de.color.copy(B.color).multiplyScalar(B.intensity),de.distance=B.distance,de.decay=B.decay,B.castShadow){const fe=B.shadow,G=n.get(B);G.shadowIntensity=fe.intensity,G.shadowBias=fe.bias,G.shadowNormalBias=fe.normalBias,G.shadowRadius=fe.radius,G.shadowMapSize=fe.mapSize,G.shadowCameraNear=fe.camera.near,G.shadowCameraFar=fe.camera.far,r.pointShadow[E]=G,r.pointShadowMap[E]=ye,r.pointShadowMatrix[E]=B.shadow.matrix,D++}r.point[E]=de,E++}else if(B.isHemisphereLight){const de=e.get(B);de.skyColor.copy(B.color).multiplyScalar(ne),de.groundColor.copy(B.groundColor).multiplyScalar(ne),r.hemi[g]=de,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==y||H.hemiLength!==g||H.numDirectionalShadows!==I||H.numPointShadows!==D||H.numSpotShadows!==C||H.numSpotMaps!==$||H.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+$-k,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=O,H.directionalLength=M,H.pointLength=E,H.spotLength=T,H.rectAreaLength=y,H.hemiLength=g,H.numDirectionalShadows=I,H.numPointShadows=D,H.numSpotShadows=C,H.numSpotMaps=$,H.numLightProbes=O,r.version=ZS++)}function p(m,v){let _=0,x=0,M=0,E=0,T=0;const y=v.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const D=m[g];if(D.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),_++}else if(D.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(D.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:d,setupView:p,state:r}}function zm(s){const e=new JS(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function eE(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let d;return u===void 0?(d=new zm(s),e.set(a,[d])):c>=u.length?(d=new zm(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class tE extends Hr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nE extends Hr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iE=`void main() {
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
}`;function sE(s,e,n){let r=new fd;const a=new wt,c=new wt,u=new zt,d=new tE({depthPacking:Qv}),p=new nE,m={},v=n.maxTextureSize,_={[Vr]:ri,[ri]:Vr,[wi]:wi},x=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:iE,fragmentShader:rE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Rn;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fe(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let g=this.type;this.render=function(k,O,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(zr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=g!==ar&&this.type===ar,ve=g===ar&&this.type!==ar;for(let ye=0,de=k.length;ye<de;ye++){const fe=k[ye],G=fe.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const _e=G.getFrameExtents();if(a.multiply(_e),c.copy(G.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/_e.x),a.x=c.x*_e.x,G.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/_e.y),a.y=c.y*_e.y,G.mapSize.y=c.y)),G.map===null||ne===!0||ve===!0){const z=this.type!==ar?{minFilter:Oi,magFilter:Oi}:{};G.map!==null&&G.map.dispose(),G.map=new _s(a.x,a.y,z),G.map.texture.name=fe.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const me=G.getViewportCount();for(let z=0;z<me;z++){const ue=G.getViewport(z);u.set(c.x*ue.x,c.y*ue.y,c.x*ue.z,c.y*ue.w),oe.viewport(u),G.updateMatrices(fe,z),r=G.getFrustum(),C(O,H,G.camera,fe,this.type)}G.isPointLightShadow!==!0&&this.type===ar&&I(G,H),G.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,B)};function I(k,O){const H=e.update(T);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new _s(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(O,null,H,x,T,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(O,null,H,M,T,null)}function D(k,O,H,P){let A=null;const B=H.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)A=B;else if(A=H.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const oe=A.uuid,ne=O.uuid;let ve=m[oe];ve===void 0&&(ve={},m[oe]=ve);let ye=ve[ne];ye===void 0&&(ye=A.clone(),ve[ne]=ye,O.addEventListener("dispose",$)),A=ye}if(A.visible=O.visible,A.wireframe=O.wireframe,P===ar?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:_[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=s.properties.get(A);oe.light=H}return A}function C(k,O,H,P,A){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===ar)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,k.matrixWorld);const ne=e.update(k),ve=k.material;if(Array.isArray(ve)){const ye=ne.groups;for(let de=0,fe=ye.length;de<fe;de++){const G=ye[de],_e=ve[G.materialIndex];if(_e&&_e.visible){const me=D(k,_e,P,A);k.onBeforeShadow(s,k,O,H,ne,me,G),s.renderBufferDirect(H,null,ne,me,k,G),k.onAfterShadow(s,k,O,H,ne,me,G)}}}else if(ve.visible){const ye=D(k,ve,P,A);k.onBeforeShadow(s,k,O,H,ne,ye,null),s.renderBufferDirect(H,null,ne,ye,k,null),k.onAfterShadow(s,k,O,H,ne,ye,null)}}const oe=k.children;for(let ne=0,ve=oe.length;ne<ve;ne++)C(oe[ne],O,H,P,A)}function $(k){k.target.removeEventListener("dispose",$);for(const H in m){const P=m[H],A=k.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const oE={[mf]:gf,[vf]:yf,[_f]:Mf,[ao]:xf,[gf]:mf,[yf]:vf,[Mf]:_f,[xf]:ao};function aE(s,e){function n(){let X=!1;const W=new zt;let ee=null;const pe=new zt(0,0,0,0);return{setMask:function(De){ee!==De&&!X&&(s.colorMask(De,De,De,De),ee=De)},setLocked:function(De){X=De},setClear:function(De,Ie,nt,At,Ut){Ut===!0&&(De*=At,Ie*=At,nt*=At),W.set(De,Ie,nt,At),pe.equals(W)===!1&&(s.clearColor(De,Ie,nt,At),pe.copy(W))},reset:function(){X=!1,ee=null,pe.set(-1,0,0,0)}}}function r(){let X=!1,W=!1,ee=null,pe=null,De=null;return{setReversed:function(Ie){if(W!==Ie){const nt=e.get("EXT_clip_control");W?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const At=De;De=null,this.setClear(At)}W=Ie},getReversed:function(){return W},setTest:function(Ie){Ie?Te(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(Ie){ee!==Ie&&!X&&(s.depthMask(Ie),ee=Ie)},setFunc:function(Ie){if(W&&(Ie=oE[Ie]),pe!==Ie){switch(Ie){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case vf:s.depthFunc(s.LESS);break;case ao:s.depthFunc(s.LEQUAL);break;case _f:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ie}},setLocked:function(Ie){X=Ie},setClear:function(Ie){De!==Ie&&(W&&(Ie=1-Ie),s.clearDepth(Ie),De=Ie)},reset:function(){X=!1,ee=null,pe=null,De=null,W=!1}}}function a(){let X=!1,W=null,ee=null,pe=null,De=null,Ie=null,nt=null,At=null,Ut=null;return{setTest:function(xt){X||(xt?Te(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(xt){W!==xt&&!X&&(s.stencilMask(xt),W=xt)},setFunc:function(xt,Jt,$t){(ee!==xt||pe!==Jt||De!==$t)&&(s.stencilFunc(xt,Jt,$t),ee=xt,pe=Jt,De=$t)},setOp:function(xt,Jt,$t){(Ie!==xt||nt!==Jt||At!==$t)&&(s.stencilOp(xt,Jt,$t),Ie=xt,nt=Jt,At=$t)},setLocked:function(xt){X=xt},setClear:function(xt){Ut!==xt&&(s.clearStencil(xt),Ut=xt)},reset:function(){X=!1,W=null,ee=null,pe=null,De=null,Ie=null,nt=null,At=null,Ut=null}}}const c=new n,u=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,I=null,D=null,C=null,$=null,k=null,O=new Et(0,0,0),H=0,P=!1,A=null,B=null,oe=null,ne=null,ve=null;const ye=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,fe=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(G)[1]),de=fe>=1):G.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),de=fe>=2);let _e=null,me={};const z=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),He=new zt().fromArray(z),re=new zt().fromArray(ue);function Me(X,W,ee,pe){const De=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(X,Ie),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<ee;nt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(W,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(W+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Ie}const Ce={};Ce[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Te(s.DEPTH_TEST),u.setFunc(ao),_t(!1),ht(Gp),Te(s.CULL_FACE),K(zr);function Te(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ue(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function Ge(X,W){return _[X]!==W?(s.bindFramebuffer(X,W),_[X]=W,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=W),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=W),!0):!1}function st(X,W){let ee=M,pe=!1;if(X){ee=x.get(W),ee===void 0&&(ee=[],x.set(W,ee));const De=X.textures;if(ee.length!==De.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,nt=De.length;Ie<nt;Ie++)ee[Ie]=s.COLOR_ATTACHMENT0+Ie;ee.length=De.length,pe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ee)}function It(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const vt={[hs]:s.FUNC_ADD,[Tv]:s.FUNC_SUBTRACT,[Av]:s.FUNC_REVERSE_SUBTRACT};vt[Rv]=s.MIN,vt[Cv]=s.MAX;const Ot={[bv]:s.ZERO,[Pv]:s.ONE,[Lv]:s.SRC_COLOR,[hf]:s.SRC_ALPHA,[Ov]:s.SRC_ALPHA_SATURATE,[Nv]:s.DST_COLOR,[Iv]:s.DST_ALPHA,[Dv]:s.ONE_MINUS_SRC_COLOR,[pf]:s.ONE_MINUS_SRC_ALPHA,[Fv]:s.ONE_MINUS_DST_COLOR,[Uv]:s.ONE_MINUS_DST_ALPHA,[kv]:s.CONSTANT_COLOR,[zv]:s.ONE_MINUS_CONSTANT_COLOR,[Bv]:s.CONSTANT_ALPHA,[Vv]:s.ONE_MINUS_CONSTANT_ALPHA};function K(X,W,ee,pe,De,Ie,nt,At,Ut,xt){if(X===zr){T===!0&&(Ue(s.BLEND),T=!1);return}if(T===!1&&(Te(s.BLEND),T=!0),X!==wv){if(X!==y||xt!==P){if((g!==hs||C!==hs)&&(s.blendEquation(s.FUNC_ADD),g=hs,C=hs),xt)switch(X){case ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,D=null,$=null,k=null,O.set(0,0,0),H=0,y=X,P=xt}return}De=De||W,Ie=Ie||ee,nt=nt||pe,(W!==g||De!==C)&&(s.blendEquationSeparate(vt[W],vt[De]),g=W,C=De),(ee!==I||pe!==D||Ie!==$||nt!==k)&&(s.blendFuncSeparate(Ot[ee],Ot[pe],Ot[Ie],Ot[nt]),I=ee,D=pe,$=Ie,k=nt),(At.equals(O)===!1||Ut!==H)&&(s.blendColor(At.r,At.g,At.b,Ut),O.copy(At),H=Ut),y=X,P=!1}function En(X,W){X.side===wi?Ue(s.CULL_FACE):Te(s.CULL_FACE);let ee=X.side===ri;W&&(ee=!ee),_t(ee),X.blending===ro&&X.transparent===!1?K(zr):K(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const pe=X.stencilWrite;d.setTest(pe),pe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Pt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Te(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){A!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),A=X)}function ht(X){X!==Sv?(Te(s.CULL_FACE),X!==B&&(X===Gp?s.cullFace(s.BACK):X===Ev?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),B=X}function it(X){X!==oe&&(de&&s.lineWidth(X),oe=X)}function Pt(X,W,ee){X?(Te(s.POLYGON_OFFSET_FILL),(ne!==W||ve!==ee)&&(s.polygonOffset(W,ee),ne=W,ve=ee)):Ue(s.POLYGON_OFFSET_FILL)}function et(X){X?Te(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function U(X){X===void 0&&(X=s.TEXTURE0+ye-1),_e!==X&&(s.activeTexture(X),_e=X)}function w(X,W,ee){ee===void 0&&(_e===null?ee=s.TEXTURE0+ye-1:ee=_e);let pe=me[ee];pe===void 0&&(pe={type:void 0,texture:void 0},me[ee]=pe),(pe.type!==X||pe.texture!==W)&&(_e!==ee&&(s.activeTexture(ee),_e=ee),s.bindTexture(X,W||Ce[X]),pe.type=X,pe.texture=W)}function se(){const X=me[_e];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function F(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function L(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(X){He.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),He.copy(X))}function be(X){re.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),re.copy(X))}function tt(X,W){let ee=m.get(W);ee===void 0&&(ee=new WeakMap,m.set(W,ee));let pe=ee.get(X);pe===void 0&&(pe=s.getUniformBlockIndex(W,X.name),ee.set(X,pe))}function Xe(X,W){const pe=m.get(W).get(X);p.get(W)!==pe&&(s.uniformBlockBinding(W,pe,X.__bindingPointIndex),p.set(W,pe))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},_e=null,me={},_={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,I=null,D=null,C=null,$=null,k=null,O=new Et(0,0,0),H=0,P=!1,A=null,B=null,oe=null,ne=null,ve=null,He.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Te,disable:Ue,bindFramebuffer:Ge,drawBuffers:st,useProgram:It,setBlending:K,setMaterial:En,setFlipSided:_t,setCullFace:ht,setLineWidth:it,setPolygonOffset:Pt,setScissorTest:et,activeTexture:U,bindTexture:w,unbindTexture:se,compressedTexImage2D:b,compressedTexImage3D:F,texImage2D:xe,texImage3D:Ne,updateUBOMapping:tt,uniformBlockBinding:Xe,texStorage2D:Se,texStorage3D:ge,texSubImage2D:L,texSubImage3D:te,compressedTexSubImage2D:Q,compressedTexSubImage3D:he,scissor:ze,viewport:be,reset:rt}}function Bm(s,e,n,r){const a=lE(r);switch(n){case ag:return s*e;case cg:return s*e;case ug:return s*e*2;case fg:return s*e/a.components*a.byteLength;case od:return s*e/a.components*a.byteLength;case dg:return s*e*2/a.components*a.byteLength;case ad:return s*e*2/a.components*a.byteLength;case lg:return s*e*3/a.components*a.byteLength;case Fi:return s*e*4/a.components*a.byteLength;case ld:return s*e*4/a.components*a.byteLength;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:case bf:return Math.max(s,16)*Math.max(e,8)/4;case Af:case Cf:return Math.max(s,8)*Math.max(e,8)/2;case Pf:case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vl:case qf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hg:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lE(s){switch(s){case dr:case rg:return{byteLength:1,components:1};case sa:case sg:case oa:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case vs:case id:case cr:return{byteLength:4,components:1};case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function cE(s,e,n,r,a,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,v=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,w){return M?new OffscreenCanvas(U,w):Xl("canvas")}function T(U,w,se){let b=1;const F=et(U);if((F.width>se||F.height>se)&&(b=se/Math.max(F.width,F.height)),b<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const L=Math.floor(b*F.width),te=Math.floor(b*F.height);_===void 0&&(_=E(L,te));const Q=w?E(L,te):_;return Q.width=L,Q.height=te,Q.getContext("2d").drawImage(U,0,0,L,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+L+"x"+te+")."),Q}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){s.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,w,se,b,F=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let L=w;if(w===s.RED&&(se===s.FLOAT&&(L=s.R32F),se===s.HALF_FLOAT&&(L=s.R16F),se===s.UNSIGNED_BYTE&&(L=s.R8)),w===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(L=s.R8UI),se===s.UNSIGNED_SHORT&&(L=s.R16UI),se===s.UNSIGNED_INT&&(L=s.R32UI),se===s.BYTE&&(L=s.R8I),se===s.SHORT&&(L=s.R16I),se===s.INT&&(L=s.R32I)),w===s.RG&&(se===s.FLOAT&&(L=s.RG32F),se===s.HALF_FLOAT&&(L=s.RG16F),se===s.UNSIGNED_BYTE&&(L=s.RG8)),w===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(L=s.RG8UI),se===s.UNSIGNED_SHORT&&(L=s.RG16UI),se===s.UNSIGNED_INT&&(L=s.RG32UI),se===s.BYTE&&(L=s.RG8I),se===s.SHORT&&(L=s.RG16I),se===s.INT&&(L=s.RG32I)),w===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(L=s.RGB8UI),se===s.UNSIGNED_SHORT&&(L=s.RGB16UI),se===s.UNSIGNED_INT&&(L=s.RGB32UI),se===s.BYTE&&(L=s.RGB8I),se===s.SHORT&&(L=s.RGB16I),se===s.INT&&(L=s.RGB32I)),w===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(L=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(L=s.RGBA16UI),se===s.UNSIGNED_INT&&(L=s.RGBA32UI),se===s.BYTE&&(L=s.RGBA8I),se===s.SHORT&&(L=s.RGBA16I),se===s.INT&&(L=s.RGBA32I)),w===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(L=s.RGB9_E5),w===s.RGBA){const te=F?Zl:Ct.getTransfer(b);se===s.FLOAT&&(L=s.RGBA32F),se===s.HALF_FLOAT&&(L=s.RGBA16F),se===s.UNSIGNED_BYTE&&(L=te===kt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(L=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(L=s.RGB5_A1)}return(L===s.R16F||L===s.R32F||L===s.RG16F||L===s.RG32F||L===s.RGBA16F||L===s.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function C(U,w){let se;return U?w===null||w===vs||w===uo?se=s.DEPTH24_STENCIL8:w===cr?se=s.DEPTH32F_STENCIL8:w===sa&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vs||w===uo?se=s.DEPTH_COMPONENT24:w===cr?se=s.DEPTH_COMPONENT32F:w===sa&&(se=s.DEPTH_COMPONENT16),se}function $(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Oi&&U.minFilter!==Wi?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function k(U){const w=U.target;w.removeEventListener("dispose",k),H(w),w.isVideoTexture&&v.delete(w)}function O(U){const w=U.target;w.removeEventListener("dispose",O),A(w)}function H(U){const w=r.get(U);if(w.__webglInit===void 0)return;const se=U.source,b=x.get(se);if(b){const F=b[w.__cacheKey];F.usedTimes--,F.usedTimes===0&&P(U),Object.keys(b).length===0&&x.delete(se)}r.remove(U)}function P(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const se=U.source,b=x.get(se);delete b[w.__cacheKey],u.memory.textures--}function A(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(w.__webglFramebuffer[b]))for(let F=0;F<w.__webglFramebuffer[b].length;F++)s.deleteFramebuffer(w.__webglFramebuffer[b][F]);else s.deleteFramebuffer(w.__webglFramebuffer[b]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[b])}else{if(Array.isArray(w.__webglFramebuffer))for(let b=0;b<w.__webglFramebuffer.length;b++)s.deleteFramebuffer(w.__webglFramebuffer[b]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let b=0;b<w.__webglColorRenderbuffer.length;b++)w.__webglColorRenderbuffer[b]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[b]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const se=U.textures;for(let b=0,F=se.length;b<F;b++){const L=r.get(se[b]);L.__webglTexture&&(s.deleteTexture(L.__webglTexture),u.memory.textures--),r.remove(se[b])}r.remove(U)}let B=0;function oe(){B=0}function ne(){const U=B;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),B+=1,U}function ve(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function ye(U,w){const se=r.get(U);if(U.isVideoTexture&&it(U),U.isRenderTargetTexture===!1&&U.version>0&&se.__version!==U.version){const b=U.image;if(b===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(b.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(se,U,w);return}}n.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+w)}function de(U,w){const se=r.get(U);if(U.version>0&&se.__version!==U.version){re(se,U,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+w)}function fe(U,w){const se=r.get(U);if(U.version>0&&se.__version!==U.version){re(se,U,w);return}n.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+w)}function G(U,w){const se=r.get(U);if(U.version>0&&se.__version!==U.version){Me(se,U,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+w)}const _e={[wf]:s.REPEAT,[ms]:s.CLAMP_TO_EDGE,[Tf]:s.MIRRORED_REPEAT},me={[Oi]:s.NEAREST,[Kv]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[Wi]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[gs]:s.LINEAR_MIPMAP_LINEAR},z={[e_]:s.NEVER,[o_]:s.ALWAYS,[t_]:s.LESS,[pg]:s.LEQUAL,[n_]:s.EQUAL,[s_]:s.GEQUAL,[i_]:s.GREATER,[r_]:s.NOTEQUAL};function ue(U,w){if(w.type===cr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Wi||w.magFilter===Iu||w.magFilter===dl||w.magFilter===gs||w.minFilter===Wi||w.minFilter===Iu||w.minFilter===dl||w.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,_e[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,_e[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,_e[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,me[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,me[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Oi||w.minFilter!==dl&&w.minFilter!==gs||w.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function He(U,w){let se=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",k));const b=w.source;let F=x.get(b);F===void 0&&(F={},x.set(b,F));const L=ve(w);if(L!==U.__cacheKey){F[L]===void 0&&(F[L]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),F[L].usedTimes++;const te=F[U.__cacheKey];te!==void 0&&(F[U.__cacheKey].usedTimes--,te.usedTimes===0&&P(w)),U.__cacheKey=L,U.__webglTexture=F[L].texture}return se}function re(U,w,se){let b=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(b=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(b=s.TEXTURE_3D);const F=He(U,w),L=w.source;n.bindTexture(b,U.__webglTexture,s.TEXTURE0+se);const te=r.get(L);if(L.version!==te.__version||F===!0){n.activeTexture(s.TEXTURE0+se);const Q=Ct.getPrimaries(Ct.workingColorSpace),he=w.colorSpace===kr?null:Ct.getPrimaries(w.colorSpace),Se=w.colorSpace===kr||Q===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ge=T(w.image,!1,a.maxTextureSize);ge=Pt(w,ge);const xe=c.convert(w.format,w.colorSpace),Ne=c.convert(w.type);let ze=D(w.internalFormat,xe,Ne,w.colorSpace,w.isVideoTexture);ue(b,w);let be;const tt=w.mipmaps,Xe=w.isVideoTexture!==!0,rt=te.__version===void 0||F===!0,X=L.dataReady,W=$(w,ge);if(w.isDepthTexture)ze=C(w.format===fo,w.type),rt&&(Xe?n.texStorage2D(s.TEXTURE_2D,1,ze,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,ze,ge.width,ge.height,0,xe,Ne,null));else if(w.isDataTexture)if(tt.length>0){Xe&&rt&&n.texStorage2D(s.TEXTURE_2D,W,ze,tt[0].width,tt[0].height);for(let ee=0,pe=tt.length;ee<pe;ee++)be=tt[ee],Xe?X&&n.texSubImage2D(s.TEXTURE_2D,ee,0,0,be.width,be.height,xe,Ne,be.data):n.texImage2D(s.TEXTURE_2D,ee,ze,be.width,be.height,0,xe,Ne,be.data);w.generateMipmaps=!1}else Xe?(rt&&n.texStorage2D(s.TEXTURE_2D,W,ze,ge.width,ge.height),X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,xe,Ne,ge.data)):n.texImage2D(s.TEXTURE_2D,0,ze,ge.width,ge.height,0,xe,Ne,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xe&&rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,W,ze,tt[0].width,tt[0].height,ge.depth);for(let ee=0,pe=tt.length;ee<pe;ee++)if(be=tt[ee],w.format!==Fi)if(xe!==null)if(Xe){if(X)if(w.layerUpdates.size>0){const De=Bm(be.width,be.height,w.format,w.type);for(const Ie of w.layerUpdates){const nt=be.data.subarray(Ie*De/be.data.BYTES_PER_ELEMENT,(Ie+1)*De/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ie,be.width,be.height,1,xe,nt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ge.depth,xe,be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ze,be.width,be.height,ge.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?X&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ge.depth,xe,Ne,be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ee,ze,be.width,be.height,ge.depth,0,xe,Ne,be.data)}else{Xe&&rt&&n.texStorage2D(s.TEXTURE_2D,W,ze,tt[0].width,tt[0].height);for(let ee=0,pe=tt.length;ee<pe;ee++)be=tt[ee],w.format!==Fi?xe!==null?Xe?X&&n.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,be.width,be.height,xe,be.data):n.compressedTexImage2D(s.TEXTURE_2D,ee,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?X&&n.texSubImage2D(s.TEXTURE_2D,ee,0,0,be.width,be.height,xe,Ne,be.data):n.texImage2D(s.TEXTURE_2D,ee,ze,be.width,be.height,0,xe,Ne,be.data)}else if(w.isDataArrayTexture)if(Xe){if(rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,W,ze,ge.width,ge.height,ge.depth),X)if(w.layerUpdates.size>0){const ee=Bm(ge.width,ge.height,w.format,w.type);for(const pe of w.layerUpdates){const De=ge.data.subarray(pe*ee/ge.data.BYTES_PER_ELEMENT,(pe+1)*ee/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ge.width,ge.height,1,xe,Ne,De)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,xe,Ne,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,ge.width,ge.height,ge.depth,0,xe,Ne,ge.data);else if(w.isData3DTexture)Xe?(rt&&n.texStorage3D(s.TEXTURE_3D,W,ze,ge.width,ge.height,ge.depth),X&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,xe,Ne,ge.data)):n.texImage3D(s.TEXTURE_3D,0,ze,ge.width,ge.height,ge.depth,0,xe,Ne,ge.data);else if(w.isFramebufferTexture){if(rt)if(Xe)n.texStorage2D(s.TEXTURE_2D,W,ze,ge.width,ge.height);else{let ee=ge.width,pe=ge.height;for(let De=0;De<W;De++)n.texImage2D(s.TEXTURE_2D,De,ze,ee,pe,0,xe,Ne,null),ee>>=1,pe>>=1}}else if(tt.length>0){if(Xe&&rt){const ee=et(tt[0]);n.texStorage2D(s.TEXTURE_2D,W,ze,ee.width,ee.height)}for(let ee=0,pe=tt.length;ee<pe;ee++)be=tt[ee],Xe?X&&n.texSubImage2D(s.TEXTURE_2D,ee,0,0,xe,Ne,be):n.texImage2D(s.TEXTURE_2D,ee,ze,xe,Ne,be);w.generateMipmaps=!1}else if(Xe){if(rt){const ee=et(ge);n.texStorage2D(s.TEXTURE_2D,W,ze,ee.width,ee.height)}X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Ne,ge)}else n.texImage2D(s.TEXTURE_2D,0,ze,xe,Ne,ge);y(w)&&g(b),te.__version=L.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Me(U,w,se){if(w.image.length!==6)return;const b=He(U,w),F=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+se);const L=r.get(F);if(F.version!==L.__version||b===!0){n.activeTexture(s.TEXTURE0+se);const te=Ct.getPrimaries(Ct.workingColorSpace),Q=w.colorSpace===kr?null:Ct.getPrimaries(w.colorSpace),he=w.colorSpace===kr||te===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Se=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let pe=0;pe<6;pe++)!Se&&!ge?xe[pe]=T(w.image[pe],!0,a.maxCubemapSize):xe[pe]=ge?w.image[pe].image:w.image[pe],xe[pe]=Pt(w,xe[pe]);const Ne=xe[0],ze=c.convert(w.format,w.colorSpace),be=c.convert(w.type),tt=D(w.internalFormat,ze,be,w.colorSpace),Xe=w.isVideoTexture!==!0,rt=L.__version===void 0||b===!0,X=F.dataReady;let W=$(w,Ne);ue(s.TEXTURE_CUBE_MAP,w);let ee;if(Se){Xe&&rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,W,tt,Ne.width,Ne.height);for(let pe=0;pe<6;pe++){ee=xe[pe].mipmaps;for(let De=0;De<ee.length;De++){const Ie=ee[De];w.format!==Fi?ze!==null?Xe?X&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Ie.width,Ie.height,ze,Ie.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,tt,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Ie.width,Ie.height,ze,be,Ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,tt,Ie.width,Ie.height,0,ze,be,Ie.data)}}}else{if(ee=w.mipmaps,Xe&&rt){ee.length>0&&W++;const pe=et(xe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,W,tt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ge){Xe?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,xe[pe].width,xe[pe].height,ze,be,xe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,xe[pe].width,xe[pe].height,0,ze,be,xe[pe].data);for(let De=0;De<ee.length;De++){const nt=ee[De].image[pe].image;Xe?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,nt.width,nt.height,ze,be,nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,tt,nt.width,nt.height,0,ze,be,nt.data)}}else{Xe?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze,be,xe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,ze,be,xe[pe]);for(let De=0;De<ee.length;De++){const Ie=ee[De];Xe?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,ze,be,Ie.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,tt,ze,be,Ie.image[pe])}}}y(w)&&g(s.TEXTURE_CUBE_MAP),L.__version=F.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Ce(U,w,se,b,F,L){const te=c.convert(se.format,se.colorSpace),Q=c.convert(se.type),he=D(se.internalFormat,te,Q,se.colorSpace),Se=r.get(w),ge=r.get(se);if(ge.__renderTarget=w,!Se.__hasExternalTextures){const xe=Math.max(1,w.width>>L),Ne=Math.max(1,w.height>>L);F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?n.texImage3D(F,L,he,xe,Ne,w.depth,0,te,Q,null):n.texImage2D(F,L,he,xe,Ne,0,te,Q,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),ht(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,b,F,ge.__webglTexture,0,_t(w)):(F===s.TEXTURE_2D||F>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,b,F,ge.__webglTexture,L),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(U,w,se){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const b=w.depthTexture,F=b&&b.isDepthTexture?b.type:null,L=C(w.stencilBuffer,F),te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=_t(w);ht(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,L,w.width,w.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,L,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,L,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,U)}else{const b=w.textures;for(let F=0;F<b.length;F++){const L=b[F],te=c.convert(L.format,L.colorSpace),Q=c.convert(L.type),he=D(L.internalFormat,te,Q,L.colorSpace),Se=_t(w);se&&ht(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,he,w.width,w.height):ht(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const b=r.get(w.depthTexture);b.__renderTarget=w,(!b.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ye(w.depthTexture,0);const F=b.__webglTexture,L=_t(w);if(w.depthTexture.format===so)ht(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,F,0,L):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,F,0);else if(w.depthTexture.format===fo)ht(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,F,0,L):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ge(U){const w=r.get(U),se=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const b=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),b){const F=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,b.removeEventListener("dispose",F)};b.addEventListener("dispose",F),w.__depthDisposeCallback=F}w.__boundDepthTexture=b}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Ue(w.__webglFramebuffer,U)}else if(se){w.__webglDepthbuffer=[];for(let b=0;b<6;b++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[b]),w.__webglDepthbuffer[b]===void 0)w.__webglDepthbuffer[b]=s.createRenderbuffer(),Te(w.__webglDepthbuffer[b],U,!1);else{const F=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,L=w.__webglDepthbuffer[b];s.bindRenderbuffer(s.RENDERBUFFER,L),s.framebufferRenderbuffer(s.FRAMEBUFFER,F,s.RENDERBUFFER,L)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Te(w.__webglDepthbuffer,U,!1);else{const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,F),s.framebufferRenderbuffer(s.FRAMEBUFFER,b,s.RENDERBUFFER,F)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function st(U,w,se){const b=r.get(U);w!==void 0&&Ce(b.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Ge(U)}function It(U){const w=U.texture,se=r.get(U),b=r.get(w);U.addEventListener("dispose",O);const F=U.textures,L=U.isWebGLCubeRenderTarget===!0,te=F.length>1;if(te||(b.__webglTexture===void 0&&(b.__webglTexture=s.createTexture()),b.__version=w.version,u.memory.textures++),L){se.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps&&w.mipmaps.length>0){se.__webglFramebuffer[Q]=[];for(let he=0;he<w.mipmaps.length;he++)se.__webglFramebuffer[Q][he]=s.createFramebuffer()}else se.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){se.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)se.__webglFramebuffer[Q]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(te)for(let Q=0,he=F.length;Q<he;Q++){const Se=r.get(F[Q]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&ht(U)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Q=0;Q<F.length;Q++){const he=F[Q];se.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Q]);const Se=c.convert(he.format,he.colorSpace),ge=c.convert(he.type),xe=D(he.internalFormat,Se,ge,he.colorSpace,U.isXRRenderTarget===!0),Ne=_t(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,xe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,se.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(se.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(L){n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture),ue(s.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)Ce(se.__webglFramebuffer[Q][he],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he);else Ce(se.__webglFramebuffer[Q],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){for(let Q=0,he=F.length;Q<he;Q++){const Se=F[Q],ge=r.get(Se);n.bindTexture(s.TEXTURE_2D,ge.__webglTexture),ue(s.TEXTURE_2D,Se),Ce(se.__webglFramebuffer,U,Se,s.COLOR_ATTACHMENT0+Q,s.TEXTURE_2D,0),y(Se)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Q=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Q=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Q,b.__webglTexture),ue(Q,w),w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)Ce(se.__webglFramebuffer[he],U,w,s.COLOR_ATTACHMENT0,Q,he);else Ce(se.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,Q,0);y(w)&&g(Q),n.unbindTexture()}U.depthBuffer&&Ge(U)}function vt(U){const w=U.textures;for(let se=0,b=w.length;se<b;se++){const F=w[se];if(y(F)){const L=I(U),te=r.get(F).__webglTexture;n.bindTexture(L,te),g(L),n.unbindTexture()}}}const Ot=[],K=[];function En(U){if(U.samples>0){if(ht(U)===!1){const w=U.textures,se=U.width,b=U.height;let F=s.COLOR_BUFFER_BIT;const L=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=r.get(U),Q=w.length>1;if(Q)for(let he=0;he<w.length;he++)n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let he=0;he<w.length;he++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(F|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(F|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,te.__webglColorRenderbuffer[he]);const Se=r.get(w[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,se,b,0,0,se,b,F,s.NEAREST),p===!0&&(Ot.length=0,K.length=0,Ot.push(s.COLOR_ATTACHMENT0+he),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ot.push(L),K.push(L),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,K)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let he=0;he<w.length;he++){n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,te.__webglColorRenderbuffer[he]);const Se=r.get(w[he]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,Se,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function _t(U){return Math.min(a.maxSamples,U.samples)}function ht(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function it(U){const w=u.render.frame;v.get(U)!==w&&(v.set(U,w),U.update())}function Pt(U,w){const se=U.colorSpace,b=U.format,F=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||se!==po&&se!==kr&&(Ct.getTransfer(se)===kt?(b!==Fi||F!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),w}function et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=oe,this.setTexture2D=ye,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=G,this.rebindTextures=st,this.setupRenderTarget=It,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ht}function uE(s,e){function n(r,a=kr){let c;const u=Ct.getTransfer(a);if(r===dr)return s.UNSIGNED_BYTE;if(r===rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.BYTE;if(r===sg)return s.SHORT;if(r===sa)return s.UNSIGNED_SHORT;if(r===id)return s.INT;if(r===vs)return s.UNSIGNED_INT;if(r===cr)return s.FLOAT;if(r===oa)return s.HALF_FLOAT;if(r===ag)return s.ALPHA;if(r===lg)return s.RGB;if(r===Fi)return s.RGBA;if(r===cg)return s.LUMINANCE;if(r===ug)return s.LUMINANCE_ALPHA;if(r===so)return s.DEPTH_COMPONENT;if(r===fo)return s.DEPTH_STENCIL;if(r===fg)return s.RED;if(r===od)return s.RED_INTEGER;if(r===dg)return s.RG;if(r===ad)return s.RG_INTEGER;if(r===ld)return s.RGBA_INTEGER;if(r===Ol||r===kl||r===zl||r===Bl)if(u===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ol)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ol)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Af||r===Rf||r===Cf||r===bf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Af)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pf||r===Lf||r===Df)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Pf||r===Lf)return u===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Df)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===If||r===Uf||r===Nf||r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===jf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===If)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ff)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Of)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vl||r===qf||r===Yf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Vl)return u===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hg||r===$f||r===Kf||r===Zf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Vl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$f)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===uo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class fE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sn extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new sn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const hE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new qn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new hr({vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fe(new fi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends mo{constructor(e,n){super();const r=this;let a=null,c=1,u=null,d="local-floor",p=1,m=null,v=null,_=null,x=null,M=null,E=null;const T=new mE,y=n.getContextAttributes();let g=null,I=null;const D=[],C=[],$=new wt;let k=null;const O=new ii;O.viewport=new zt;const H=new ii;H.viewport=new zt;const P=[O,H],A=new fE;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Me=D[re];return Me===void 0&&(Me=new cf,D[re]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(re){let Me=D[re];return Me===void 0&&(Me=new cf,D[re]=Me),Me.getGripSpace()},this.getHand=function(re){let Me=D[re];return Me===void 0&&(Me=new cf,D[re]=Me),Me.getHandSpace()};function ne(re){const Me=C.indexOf(re.inputSource);if(Me===-1)return;const Ce=D[Me];Ce!==void 0&&(Ce.update(re.inputSource,re.frame,m||u),Ce.dispatchEvent({type:re.type,data:re.inputSource}))}function ve(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",ve),a.removeEventListener("inputsourceschange",ye);for(let re=0;re<D.length;re++){const Me=C[re];Me!==null&&(C[re]=null,D[re].disconnect(Me))}B=null,oe=null,T.reset(),e.setRenderTarget(g),M=null,x=null,_=null,a=null,I=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",ve),a.addEventListener("inputsourceschange",ye),y.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,Me),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new _s(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Me=null,Ce=null,Te=null;y.depth&&(Te=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=y.stencil?fo:so,Ce=y.stencil?uo:vs);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:c};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new _s(x.textureWidth,x.textureHeight,{format:Fi,type:dr,depthTexture:new Rg(x.textureWidth,x.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(d),He.setContext(a),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ye(re){for(let Me=0;Me<re.removed.length;Me++){const Ce=re.removed[Me],Te=C.indexOf(Ce);Te>=0&&(C[Te]=null,D[Te].disconnect(Ce))}for(let Me=0;Me<re.added.length;Me++){const Ce=re.added[Me];let Te=C.indexOf(Ce);if(Te===-1){for(let Ge=0;Ge<D.length;Ge++)if(Ge>=C.length){C.push(Ce),Te=Ge;break}else if(C[Ge]===null){C[Ge]=Ce,Te=Ge;break}if(Te===-1)break}const Ue=D[Te];Ue&&Ue.connect(Ce)}}const de=new Z,fe=new Z;function G(re,Me,Ce){de.setFromMatrixPosition(Me.matrixWorld),fe.setFromMatrixPosition(Ce.matrixWorld);const Te=de.distanceTo(fe),Ue=Me.projectionMatrix.elements,Ge=Ce.projectionMatrix.elements,st=Ue[14]/(Ue[10]-1),It=Ue[14]/(Ue[10]+1),vt=(Ue[9]+1)/Ue[5],Ot=(Ue[9]-1)/Ue[5],K=(Ue[8]-1)/Ue[0],En=(Ge[8]+1)/Ge[0],_t=st*K,ht=st*En,it=Te/(-K+En),Pt=it*-K;if(Me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Pt),re.translateZ(it),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ue[10]===-1)re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const et=st+it,U=It+it,w=_t-Pt,se=ht+(Te-Pt),b=vt*It/U*et,F=Ot*It/U*et;re.projectionMatrix.makePerspective(w,se,b,F,et,U),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function _e(re,Me){Me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let Me=re.near,Ce=re.far;T.texture!==null&&(T.depthNear>0&&(Me=T.depthNear),T.depthFar>0&&(Ce=T.depthFar)),A.near=H.near=O.near=Me,A.far=H.far=O.far=Ce,(B!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,oe=A.far),O.layers.mask=re.layers.mask|2,H.layers.mask=re.layers.mask|4,A.layers.mask=O.layers.mask|H.layers.mask;const Te=re.parent,Ue=A.cameras;_e(A,Te);for(let Ge=0;Ge<Ue.length;Ge++)_e(Ue[Ge],Te);Ue.length===2?G(A,O,H):A.projectionMatrix.copy(O.projectionMatrix),me(re,A,Te)};function me(re,Me,Ce){Ce===null?re.matrix.copy(Me.matrixWorld):(re.matrix.copy(Ce.matrixWorld),re.matrix.invert(),re.matrix.multiply(Me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Wl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(re){p=re,x!==null&&(x.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let z=null;function ue(re,Me){if(v=Me.getViewerPose(m||u),E=Me,v!==null){const Ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let Te=!1;Ce.length!==A.cameras.length&&(A.cameras.length=0,Te=!0);for(let Ge=0;Ge<Ce.length;Ge++){const st=Ce[Ge];let It=null;if(M!==null)It=M.getViewport(st);else{const Ot=_.getViewSubImage(x,st);It=Ot.viewport,Ge===0&&(e.setRenderTargetTextures(I,Ot.colorTexture,x.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(I))}let vt=P[Ge];vt===void 0&&(vt=new ii,vt.layers.enable(Ge),vt.viewport=new zt,P[Ge]=vt),vt.matrix.fromArray(st.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(st.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(It.x,It.y,It.width,It.height),Ge===0&&(A.matrix.copy(vt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Te===!0&&A.cameras.push(vt)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ge=_.getDepthInformation(Ce[0]);Ge&&Ge.isValid&&Ge.texture&&T.init(e,Ge,a.renderState)}}for(let Ce=0;Ce<D.length;Ce++){const Te=C[Ce],Ue=D[Ce];Te!==null&&Ue!==void 0&&Ue.update(Te,Me,m||u)}z&&z(re,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),E=null}const He=new Tg;He.setAnimationLoop(ue),this.setAnimationLoop=function(re){z=re},this.dispose=function(){}}}const us=new ki,vE=new Xt;function _E(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Sg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,I,D,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),v(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,C)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),T(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,I,D):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===ri&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===ri&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,C=I.envMapRotation;D&&(y.envMap.value=D,us.copy(C),us.x*=-1,us.y*=-1,us.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),y.envMapRotation.value.setFromMatrix4(vE.makeRotationFromEuler(us)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,I,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=D*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ri&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const I=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function xE(s,e,n,r){let a={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const C=D.program;r.uniformBlockBinding(I,C)}function m(I,D){let C=a[I.id];C===void 0&&(E(I),C=v(I),a[I.id]=C,I.addEventListener("dispose",y));const $=D.program;r.updateUBOMapping(I,$);const k=e.render.frame;c[I.id]!==k&&(x(I),c[I.id]=k)}function v(I){const D=_();I.__bindingPointIndex=D;const C=s.createBuffer(),$=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,$,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function _(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=a[I.id],C=I.uniforms,$=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let k=0,O=C.length;k<O;k++){const H=Array.isArray(C[k])?C[k]:[C[k]];for(let P=0,A=H.length;P<A;P++){const B=H[P];if(M(B,k,P,$)===!0){const oe=B.__offset,ne=Array.isArray(B.value)?B.value:[B.value];let ve=0;for(let ye=0;ye<ne.length;ye++){const de=ne[ye],fe=T(de);typeof de=="number"||typeof de=="boolean"?(B.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,oe+ve,B.__data)):de.isMatrix3?(B.__data[0]=de.elements[0],B.__data[1]=de.elements[1],B.__data[2]=de.elements[2],B.__data[3]=0,B.__data[4]=de.elements[3],B.__data[5]=de.elements[4],B.__data[6]=de.elements[5],B.__data[7]=0,B.__data[8]=de.elements[6],B.__data[9]=de.elements[7],B.__data[10]=de.elements[8],B.__data[11]=0):(de.toArray(B.__data,ve),ve+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(I,D,C,$){const k=I.value,O=D+"_"+C;if($[O]===void 0)return typeof k=="number"||typeof k=="boolean"?$[O]=k:$[O]=k.clone(),!0;{const H=$[O];if(typeof k=="number"||typeof k=="boolean"){if(H!==k)return $[O]=k,!0}else if(H.equals(k)===!1)return H.copy(k),!0}return!1}function E(I){const D=I.uniforms;let C=0;const $=16;for(let O=0,H=D.length;O<H;O++){const P=Array.isArray(D[O])?D[O]:[D[O]];for(let A=0,B=P.length;A<B;A++){const oe=P[A],ne=Array.isArray(oe.value)?oe.value:[oe.value];for(let ve=0,ye=ne.length;ve<ye;ve++){const de=ne[ve],fe=T(de),G=C%$,_e=G%fe.boundary,me=G+_e;C+=_e,me!==0&&$-me<fe.storage&&(C+=$-me),oe.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=fe.storage}}}const k=C%$;return k>0&&(C+=$-k),I.__size=C,I.__cache={},this}function T(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function y(I){const D=I.target;D.removeEventListener("dispose",y);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete c[D.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);u=[],a={},c={}}return{bind:p,update:m,dispose:g}}class yE{constructor(e={}){const{canvas:n=l_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this.toneMapping=Br,this.toneMappingExposure=1;const C=this;let $=!1,k=0,O=0,H=null,P=-1,A=null;const B=new zt,oe=new zt;let ne=null;const ve=new Et(0);let ye=0,de=n.width,fe=n.height,G=1,_e=null,me=null;const z=new zt(0,0,de,fe),ue=new zt(0,0,de,fe);let He=!1;const re=new fd;let Me=!1,Ce=!1;const Te=new Xt,Ue=new Xt,Ge=new Z,st=new zt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ot(){return H===null?G:1}let K=r;function En(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),K===null){const Y="webgl2";if(K=En(Y,R),K===null)throw En(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _t,ht,it,Pt,et,U,w,se,b,F,L,te,Q,he,Se,ge,xe,Ne,ze,be,tt,Xe,rt,X;function W(){_t=new TM(K),_t.init(),Xe=new uE(K,_t),ht=new xM(K,_t,e,Xe),it=new aE(K,_t),ht.reverseDepthBuffer&&x&&it.buffers.depth.setReversed(!0),Pt=new CM(K),et=new jS,U=new cE(K,_t,it,et,ht,Xe,Pt),w=new MM(C),se=new wM(C),b=new N_(K),rt=new vM(K,b),F=new AM(K,b,Pt,rt),L=new PM(K,F,b,Pt),ze=new bM(K,ht,U),ge=new yM(et),te=new XS(C,w,se,_t,ht,rt,ge),Q=new _E(C,et),he=new YS,Se=new eE(_t),Ne=new gM(C,w,se,it,L,M,p),xe=new sE(C,L,ht),X=new xE(K,Pt,ht,it),be=new _M(K,_t,Pt),tt=new RM(K,_t,Pt),Pt.programs=te.programs,C.capabilities=ht,C.extensions=_t,C.properties=et,C.renderLists=he,C.shadowMap=xe,C.state=it,C.info=Pt}W();const ee=new gE(C,K);this.xr=ee,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(de,fe,!1))},this.getSize=function(R){return R.set(de,fe)},this.setSize=function(R,Y,ae=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=R,fe=Y,n.width=Math.floor(R*G),n.height=Math.floor(Y*G),ae===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(de*G,fe*G).floor()},this.setDrawingBufferSize=function(R,Y,ae){de=R,fe=Y,G=ae,n.width=Math.floor(R*ae),n.height=Math.floor(Y*ae),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,Y,ae,le){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,Y,ae,le),it.viewport(B.copy(z).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,Y,ae,le){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,Y,ae,le),it.scissor(oe.copy(ue).multiplyScalar(G).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(R){it.setScissorTest(He=R)},this.setOpaqueSort=function(R){_e=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(R=!0,Y=!0,ae=!0){let le=0;if(R){let q=!1;if(H!==null){const Pe=H.texture.format;q=Pe===ld||Pe===ad||Pe===od}if(q){const Pe=H.texture.type,Ae=Pe===dr||Pe===vs||Pe===sa||Pe===uo||Pe===rd||Pe===sd,je=Ne.getClearColor(),Be=Ne.getClearAlpha(),lt=je.r,ct=je.g,$e=je.b;Ae?(E[0]=lt,E[1]=ct,E[2]=$e,E[3]=Be,K.clearBufferuiv(K.COLOR,0,E)):(T[0]=lt,T[1]=ct,T[2]=$e,T[3]=Be,K.clearBufferiv(K.COLOR,0,T))}else le|=K.COLOR_BUFFER_BIT}Y&&(le|=K.DEPTH_BUFFER_BIT),ae&&(le|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),he.dispose(),Se.dispose(),et.dispose(),w.dispose(),se.dispose(),L.dispose(),rt.dispose(),X.dispose(),te.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",On),ee.removeEventListener("sessionend",kn),jt.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const R=Pt.autoReset,Y=xe.enabled,ae=xe.autoUpdate,le=xe.needsUpdate,q=xe.type;W(),Pt.autoReset=R,xe.enabled=Y,xe.autoUpdate=ae,xe.needsUpdate=le,xe.type=q}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const Y=R.target;Y.removeEventListener("dispose",nt),At(Y)}function At(R){Ut(R),et.remove(R)}function Ut(R){const Y=et.get(R).programs;Y!==void 0&&(Y.forEach(function(ae){te.releaseProgram(ae)}),R.isShaderMaterial&&te.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ae,le,q,Pe){Y===null&&(Y=It);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,je=Bn(R,Y,ae,le,q);it.setMaterial(le,Ae);let Be=ae.index,lt=1;if(le.wireframe===!0){if(Be=F.getWireframeAttribute(ae),Be===void 0)return;lt=2}const ct=ae.drawRange,$e=ae.attributes.position;let Mt=ct.start*lt,pt=(ct.start+ct.count)*lt;Pe!==null&&(Mt=Math.max(Mt,Pe.start*lt),pt=Math.min(pt,(Pe.start+Pe.count)*lt)),Be!==null?(Mt=Math.max(Mt,0),pt=Math.min(pt,Be.count)):$e!=null&&(Mt=Math.max(Mt,0),pt=Math.min(pt,$e.count));const yt=pt-Mt;if(yt<0||yt===1/0)return;rt.setup(q,le,je,ae,Be);let qt,dt=be;if(Be!==null&&(qt=b.get(Be),dt=tt,dt.setIndex(qt)),q.isMesh)le.wireframe===!0?(it.setLineWidth(le.wireframeLinewidth*Ot()),dt.setMode(K.LINES)):dt.setMode(K.TRIANGLES);else if(q.isLine){let Ze=le.linewidth;Ze===void 0&&(Ze=1),it.setLineWidth(Ze*Ot()),q.isLineSegments?dt.setMode(K.LINES):q.isLineLoop?dt.setMode(K.LINE_LOOP):dt.setMode(K.LINE_STRIP)}else q.isPoints?dt.setMode(K.POINTS):q.isSprite&&dt.setMode(K.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)dt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ze=q._multiDrawStarts,Cn=q._multiDrawCounts,ut=q._multiDrawCount,tn=Be?b.get(Be).bytesPerElement:1,bn=et.get(le).currentProgram.getUniforms();for(let Bt=0;Bt<ut;Bt++)bn.setValue(K,"_gl_DrawID",Bt),dt.render(Ze[Bt]/tn,Cn[Bt])}else if(q.isInstancedMesh)dt.renderInstances(Mt,yt,q.count);else if(ae.isInstancedBufferGeometry){const Ze=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Cn=Math.min(ae.instanceCount,Ze);dt.renderInstances(Mt,yt,Cn)}else dt.render(Mt,yt)};function xt(R,Y,ae){R.transparent===!0&&R.side===wi&&R.forceSinglePass===!1?(R.side=ri,R.needsUpdate=!0,Xi(R,Y,ae),R.side=Vr,R.needsUpdate=!0,Xi(R,Y,ae),R.side=wi):Xi(R,Y,ae)}this.compile=function(R,Y,ae=null){ae===null&&(ae=R),g=Se.get(ae),g.init(Y),D.push(g),ae.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),R!==ae&&R.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const le=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Pe=q.material;if(Pe)if(Array.isArray(Pe))for(let Ae=0;Ae<Pe.length;Ae++){const je=Pe[Ae];xt(je,ae,q),le.add(je)}else xt(Pe,ae,q),le.add(Pe)}),D.pop(),g=null,le},this.compileAsync=function(R,Y,ae=null){const le=this.compile(R,Y,ae);return new Promise(q=>{function Pe(){if(le.forEach(function(Ae){et.get(Ae).currentProgram.isReady()&&le.delete(Ae)}),le.size===0){q(R);return}setTimeout(Pe,10)}_t.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Jt=null;function $t(R){Jt&&Jt(R)}function On(){jt.stop()}function kn(){jt.start()}const jt=new Tg;jt.setAnimationLoop($t),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(R){Jt=R,ee.setAnimationLoop(R),R===null?jt.stop():jt.start()},ee.addEventListener("sessionstart",On),ee.addEventListener("sessionend",kn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(Y),Y=ee.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,H),g=Se.get(R,D.length),g.init(Y),D.push(g),Ue.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),re.setFromProjectionMatrix(Ue),Ce=this.localClippingEnabled,Me=ge.init(this.clippingPlanes,Ce),y=he.get(R,I.length),y.init(),I.push(y),ee.enabled===!0&&ee.isPresenting===!0){const Pe=C.xr.getDepthSensingMesh();Pe!==null&&zn(Pe,Y,-1/0,C.sortObjects)}zn(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(_e,me),vt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,vt&&Ne.addToRenderList(y,R),this.info.render.frame++,Me===!0&&ge.beginShadows();const ae=g.state.shadowsArray;xe.render(ae,R,Y),Me===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=y.opaque,q=y.transmissive;if(g.setupLights(),Y.isArrayCamera){const Pe=Y.cameras;if(q.length>0)for(let Ae=0,je=Pe.length;Ae<je;Ae++){const Be=Pe[Ae];hi(le,q,R,Be)}vt&&Ne.render(R);for(let Ae=0,je=Pe.length;Ae<je;Ae++){const Be=Pe[Ae];gn(y,R,Be,Be.viewport)}}else q.length>0&&hi(le,q,R,Y),vt&&Ne.render(R),gn(y,R,Y);H!==null&&(U.updateMultisampleRenderTarget(H),U.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(C,R,Y),rt.resetDefaultState(),P=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],Me===!0&&ge.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function zn(R,Y,ae,le){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){le&&st.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const Ae=L.update(R),je=R.material;je.visible&&y.push(R,Ae,je,ae,st.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Ae=L.update(R),je=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),st.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),st.copy(Ae.boundingSphere.center)),st.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(je)){const Be=Ae.groups;for(let lt=0,ct=Be.length;lt<ct;lt++){const $e=Be[lt],Mt=je[$e.materialIndex];Mt&&Mt.visible&&y.push(R,Ae,Mt,ae,st.z,$e)}}else je.visible&&y.push(R,Ae,je,ae,st.z,null)}}const Pe=R.children;for(let Ae=0,je=Pe.length;Ae<je;Ae++)zn(Pe[Ae],Y,ae,le)}function gn(R,Y,ae,le){const q=R.opaque,Pe=R.transmissive,Ae=R.transparent;g.setupLightsView(ae),Me===!0&&ge.setGlobalState(C.clippingPlanes,ae),le&&it.viewport(B.copy(le)),q.length>0&&Ti(q,Y,ae),Pe.length>0&&Ti(Pe,Y,ae),Ae.length>0&&Ti(Ae,Y,ae),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function hi(R,Y,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[le.id]===void 0&&(g.state.transmissionRenderTarget[le.id]=new _s(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?oa:dr,minFilter:gs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Pe=g.state.transmissionRenderTarget[le.id],Ae=le.viewport||B;Pe.setSize(Ae.z,Ae.w);const je=C.getRenderTarget();C.setRenderTarget(Pe),C.getClearColor(ve),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),vt&&Ne.render(ae);const Be=C.toneMapping;C.toneMapping=Br;const lt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),g.setupLightsView(le),Me===!0&&ge.setGlobalState(C.clippingPlanes,le),Ti(R,ae,le),U.updateMultisampleRenderTarget(Pe),U.updateRenderTargetMipmap(Pe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let $e=0,Mt=Y.length;$e<Mt;$e++){const pt=Y[$e],yt=pt.object,qt=pt.geometry,dt=pt.material,Ze=pt.group;if(dt.side===wi&&yt.layers.test(le.layers)){const Cn=dt.side;dt.side=ri,dt.needsUpdate=!0,Gr(yt,ae,le,qt,dt,Ze),dt.side=Cn,dt.needsUpdate=!0,ct=!0}}ct===!0&&(U.updateMultisampleRenderTarget(Pe),U.updateRenderTargetMipmap(Pe))}C.setRenderTarget(je),C.setClearColor(ve,ye),lt!==void 0&&(le.viewport=lt),C.toneMapping=Be}function Ti(R,Y,ae){const le=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Pe=R.length;q<Pe;q++){const Ae=R[q],je=Ae.object,Be=Ae.geometry,lt=le===null?Ae.material:le,ct=Ae.group;je.layers.test(ae.layers)&&Gr(je,Y,ae,Be,lt,ct)}}function Gr(R,Y,ae,le,q,Pe){R.onBeforeRender(C,Y,ae,le,q,Pe),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(C,Y,ae,le,R,Pe),q.transparent===!0&&q.side===wi&&q.forceSinglePass===!1?(q.side=ri,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,le,q,R,Pe),q.side=Vr,q.needsUpdate=!0,C.renderBufferDirect(ae,Y,le,q,R,Pe),q.side=wi):C.renderBufferDirect(ae,Y,le,q,R,Pe),R.onAfterRender(C,Y,ae,le,q,Pe)}function Xi(R,Y,ae){Y.isScene!==!0&&(Y=It);const le=et.get(R),q=g.state.lights,Pe=g.state.shadowsArray,Ae=q.state.version,je=te.getParameters(R,q.state,Pe,Y,ae),Be=te.getProgramCacheKey(je);let lt=le.programs;le.environment=R.isMeshStandardMaterial?Y.environment:null,le.fog=Y.fog,le.envMap=(R.isMeshStandardMaterial?se:w).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",nt),lt=new Map,le.programs=lt);let ct=lt.get(Be);if(ct!==void 0){if(le.currentProgram===ct&&le.lightsStateVersion===Ae)return Lt(R,je),ct}else je.uniforms=te.getUniforms(R),R.onBeforeCompile(je,C),ct=te.acquireProgram(je,Be),lt.set(Be,ct),le.uniforms=je.uniforms;const $e=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=ge.uniform),Lt(R,je),le.needsLights=ji(R),le.lightsStateVersion=Ae,le.needsLights&&($e.ambientLightColor.value=q.state.ambient,$e.lightProbe.value=q.state.probe,$e.directionalLights.value=q.state.directional,$e.directionalLightShadows.value=q.state.directionalShadow,$e.spotLights.value=q.state.spot,$e.spotLightShadows.value=q.state.spotShadow,$e.rectAreaLights.value=q.state.rectArea,$e.ltc_1.value=q.state.rectAreaLTC1,$e.ltc_2.value=q.state.rectAreaLTC2,$e.pointLights.value=q.state.point,$e.pointLightShadows.value=q.state.pointShadow,$e.hemisphereLights.value=q.state.hemi,$e.directionalShadowMap.value=q.state.directionalShadowMap,$e.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$e.spotShadowMap.value=q.state.spotShadowMap,$e.spotLightMatrix.value=q.state.spotLightMatrix,$e.spotLightMap.value=q.state.spotLightMap,$e.pointShadowMap.value=q.state.pointShadowMap,$e.pointShadowMatrix.value=q.state.pointShadowMatrix),le.currentProgram=ct,le.uniformsList=null,ct}function Wr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Hl.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Lt(R,Y){const ae=et.get(R);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Bn(R,Y,ae,le,q){Y.isScene!==!0&&(Y=It),U.resetTextureUnits();const Pe=Y.fog,Ae=le.isMeshStandardMaterial?Y.environment:null,je=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:po,Be=(le.isMeshStandardMaterial?se:w).get(le.envMap||Ae),lt=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),$e=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,pt=!!ae.morphAttributes.color;let yt=Br;le.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(yt=C.toneMapping);const qt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,dt=qt!==void 0?qt.length:0,Ze=et.get(le),Cn=g.state.lights;if(Me===!0&&(Ce===!0||R!==A)){const nn=R===A&&le.id===P;ge.setState(le,R,nn)}let ut=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Cn.state.version||Ze.outputColorSpace!==je||q.isBatchedMesh&&Ze.batching===!1||!q.isBatchedMesh&&Ze.batching===!0||q.isBatchedMesh&&Ze.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ze.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ze.instancing===!1||!q.isInstancedMesh&&Ze.instancing===!0||q.isSkinnedMesh&&Ze.skinning===!1||!q.isSkinnedMesh&&Ze.skinning===!0||q.isInstancedMesh&&Ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ze.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ze.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ze.instancingMorph===!1&&q.morphTexture!==null||Ze.envMap!==Be||le.fog===!0&&Ze.fog!==Pe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ge.numPlanes||Ze.numIntersection!==ge.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==ct||Ze.morphTargets!==$e||Ze.morphNormals!==Mt||Ze.morphColors!==pt||Ze.toneMapping!==yt||Ze.morphTargetsCount!==dt)&&(ut=!0):(ut=!0,Ze.__version=le.version);let tn=Ze.currentProgram;ut===!0&&(tn=Xi(le,Y,q));let bn=!1,Bt=!1,pi=!1;const Nt=tn.getUniforms(),vn=Ze.uniforms;if(it.useProgram(tn.program)&&(bn=!0,Bt=!0,pi=!0),le.id!==P&&(P=le.id,Bt=!0),bn||A!==R){it.buffers.depth.getReversed()?(Te.copy(R.projectionMatrix),u_(Te),f_(Te),Nt.setValue(K,"projectionMatrix",Te)):Nt.setValue(K,"projectionMatrix",R.projectionMatrix),Nt.setValue(K,"viewMatrix",R.matrixWorldInverse);const Vn=Nt.map.cameraPosition;Vn!==void 0&&Vn.setValue(K,Ge.setFromMatrixPosition(R.matrixWorld)),ht.logarithmicDepthBuffer&&Nt.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Nt.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Bt=!0,pi=!0)}if(q.isSkinnedMesh){Nt.setOptional(K,q,"bindMatrix"),Nt.setOptional(K,q,"bindMatrixInverse");const nn=q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Nt.setValue(K,"boneTexture",nn.boneTexture,U))}q.isBatchedMesh&&(Nt.setOptional(K,q,"batchingTexture"),Nt.setValue(K,"batchingTexture",q._matricesTexture,U),Nt.setOptional(K,q,"batchingIdTexture"),Nt.setValue(K,"batchingIdTexture",q._indirectTexture,U),Nt.setOptional(K,q,"batchingColorTexture"),q._colorsTexture!==null&&Nt.setValue(K,"batchingColorTexture",q._colorsTexture,U));const mi=ae.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ze.update(q,ae,tn),(Bt||Ze.receiveShadow!==q.receiveShadow)&&(Ze.receiveShadow=q.receiveShadow,Nt.setValue(K,"receiveShadow",q.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(vn.envMap.value=Be,vn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Y.environment!==null&&(vn.envMapIntensity.value=Y.environmentIntensity),Bt&&(Nt.setValue(K,"toneMappingExposure",C.toneMappingExposure),Ze.needsLights&&Xr(vn,pi),Pe&&le.fog===!0&&Q.refreshFogUniforms(vn,Pe),Q.refreshMaterialUniforms(vn,le,G,fe,g.state.transmissionRenderTarget[R.id]),Hl.upload(K,Wr(Ze),vn,U)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Hl.upload(K,Wr(Ze),vn,U),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Nt.setValue(K,"center",q.center),Nt.setValue(K,"modelViewMatrix",q.modelViewMatrix),Nt.setValue(K,"normalMatrix",q.normalMatrix),Nt.setValue(K,"modelMatrix",q.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const nn=le.uniformsGroups;for(let Vn=0,wn=nn.length;Vn<wn;Vn++){const jr=nn[Vn];X.update(jr,tn),X.bind(jr,tn)}}return tn}function Xr(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ji(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,Y,ae){et.get(R.texture).__webglTexture=Y,et.get(R.depthTexture).__webglTexture=ae;const le=et.get(R);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const ae=et.get(R);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ae=0){H=R,k=Y,O=ae;let le=!0,q=null,Pe=!1,Ae=!1;if(R){const Be=et.get(R);if(Be.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(K.FRAMEBUFFER,null),le=!1;else if(Be.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Be.__hasExternalTextures)U.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&et.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ae=!0);const ct=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ct[Y])?q=ct[Y][ae]:q=ct[Y],Pe=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?q=et.get(R).__webglMultisampledFramebuffer:Array.isArray(ct)?q=ct[ae]:q=ct,B.copy(R.viewport),oe.copy(R.scissor),ne=R.scissorTest}else B.copy(z).multiplyScalar(G).floor(),oe.copy(ue).multiplyScalar(G).floor(),ne=He;if(it.bindFramebuffer(K.FRAMEBUFFER,q)&&le&&it.drawBuffers(R,q),it.viewport(B),it.scissor(oe),it.setScissorTest(ne),Pe){const Be=et.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,ae)}else if(Ae){const Be=et.get(R.texture),lt=Y||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Be.__webglTexture,ae||0,lt)}P=-1},this.readRenderTargetPixels=function(R,Y,ae,le,q,Pe,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(je=je[Ae]),je){it.bindFramebuffer(K.FRAMEBUFFER,je);try{const Be=R.texture,lt=Be.format,ct=Be.type;if(!ht.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-le&&ae>=0&&ae<=R.height-q&&K.readPixels(Y,ae,le,q,Xe.convert(lt),Xe.convert(ct),Pe)}finally{const Be=H!==null?et.get(H).__webglFramebuffer:null;it.bindFramebuffer(K.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ae,le,q,Pe,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(je=je[Ae]),je){const Be=R.texture,lt=Be.format,ct=Be.type;if(!ht.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-le&&ae>=0&&ae<=R.height-q){it.bindFramebuffer(K.FRAMEBUFFER,je);const $e=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,$e),K.bufferData(K.PIXEL_PACK_BUFFER,Pe.byteLength,K.STREAM_READ),K.readPixels(Y,ae,le,q,Xe.convert(lt),Xe.convert(ct),0);const Mt=H!==null?et.get(H).__webglFramebuffer:null;it.bindFramebuffer(K.FRAMEBUFFER,Mt);const pt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await c_(K,pt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,$e),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Pe),K.deleteBuffer($e),K.deleteSync(pt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,ae=0){R.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const le=Math.pow(2,-ae),q=Math.floor(R.image.width*le),Pe=Math.floor(R.image.height*le),Ae=Y!==null?Y.x:0,je=Y!==null?Y.y:0;U.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,ae,0,0,Ae,je,q,Pe),it.unbindTexture()},this.copyTextureToTexture=function(R,Y,ae=null,le=null,q=0){R.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,R=arguments[1],Y=arguments[2],q=arguments[3]||0,ae=null);let Pe,Ae,je,Be,lt,ct,$e,Mt,pt;const yt=R.isCompressedTexture?R.mipmaps[q]:R.image;ae!==null?(Pe=ae.max.x-ae.min.x,Ae=ae.max.y-ae.min.y,je=ae.isBox3?ae.max.z-ae.min.z:1,Be=ae.min.x,lt=ae.min.y,ct=ae.isBox3?ae.min.z:0):(Pe=yt.width,Ae=yt.height,je=yt.depth||1,Be=0,lt=0,ct=0),le!==null?($e=le.x,Mt=le.y,pt=le.z):($e=0,Mt=0,pt=0);const qt=Xe.convert(Y.format),dt=Xe.convert(Y.type);let Ze;Y.isData3DTexture?(U.setTexture3D(Y,0),Ze=K.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Ze=K.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Ze=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const Cn=K.getParameter(K.UNPACK_ROW_LENGTH),ut=K.getParameter(K.UNPACK_IMAGE_HEIGHT),tn=K.getParameter(K.UNPACK_SKIP_PIXELS),bn=K.getParameter(K.UNPACK_SKIP_ROWS),Bt=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,yt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,yt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Be),K.pixelStorei(K.UNPACK_SKIP_ROWS,lt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ct);const pi=R.isDataArrayTexture||R.isData3DTexture,Nt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const vn=et.get(R),mi=et.get(Y),nn=et.get(vn.__renderTarget),Vn=et.get(mi.__renderTarget);it.bindFramebuffer(K.READ_FRAMEBUFFER,nn.__webglFramebuffer),it.bindFramebuffer(K.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let wn=0;wn<je;wn++)pi&&K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,et.get(R).__webglTexture,q,ct+wn),R.isDepthTexture?(Nt&&K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,et.get(Y).__webglTexture,q,pt+wn),K.blitFramebuffer(Be,lt,Pe,Ae,$e,Mt,Pe,Ae,K.DEPTH_BUFFER_BIT,K.NEAREST)):Nt?K.copyTexSubImage3D(Ze,q,$e,Mt,pt+wn,Be,lt,Pe,Ae):K.copyTexSubImage2D(Ze,q,$e,Mt,pt+wn,Be,lt,Pe,Ae);it.bindFramebuffer(K.READ_FRAMEBUFFER,null),it.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Nt?R.isDataTexture||R.isData3DTexture?K.texSubImage3D(Ze,q,$e,Mt,pt,Pe,Ae,je,qt,dt,yt.data):Y.isCompressedArrayTexture?K.compressedTexSubImage3D(Ze,q,$e,Mt,pt,Pe,Ae,je,qt,yt.data):K.texSubImage3D(Ze,q,$e,Mt,pt,Pe,Ae,je,qt,dt,yt):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,q,$e,Mt,Pe,Ae,qt,dt,yt.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,q,$e,Mt,yt.width,yt.height,qt,yt.data):K.texSubImage2D(K.TEXTURE_2D,q,$e,Mt,Pe,Ae,qt,dt,yt);K.pixelStorei(K.UNPACK_ROW_LENGTH,Cn),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ut),K.pixelStorei(K.UNPACK_SKIP_PIXELS,tn),K.pixelStorei(K.UNPACK_SKIP_ROWS,bn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Bt),q===0&&Y.generateMipmaps&&K.generateMipmap(Ze),it.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ae=null,le=null,q=0){return R.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,le=arguments[1]||null,R=arguments[2],Y=arguments[3],q=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ae,le,q)},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),it.unbindTexture()},this.resetState=function(){k=0,O=0,H=null,it.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}class hd{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=n,this.far=r}clone(){return new hd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ME extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dg extends Hr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new Z,ql=new Z,Vm=new Xt,ta=new ud,Il=new ua,uf=new Z,Hm=new Z;class SE extends un{constructor(e=new Rn,n=new Dg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)jl.fromBufferAttribute(n,a-1),ql.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=jl.distanceTo(ql);e.setAttribute("lineDistance",new Qt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(a),Il.radius+=c,e.ray.intersectsSphere(Il)===!1)return;Vm.copy(a).invert(),ta.copy(e.ray).applyMatrix4(Vm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=M,y=E-1;T<y;T+=m){const g=v.getX(T),I=v.getX(T+1),D=Ul(this,e,ta,p,g,I);D&&n.push(D)}if(this.isLineLoop){const T=v.getX(E-1),y=v.getX(M),g=Ul(this,e,ta,p,T,y);g&&n.push(g)}}else{const M=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let T=M,y=E-1;T<y;T+=m){const g=Ul(this,e,ta,p,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=Ul(this,e,ta,p,E-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ul(s,e,n,r,a,c){const u=s.geometry.attributes.position;if(jl.fromBufferAttribute(u,a),ql.fromBufferAttribute(u,c),n.distanceSqToSegment(jl,ql,uf,Hm)>r)return;uf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(uf);if(!(p<e.near||p>e.far))return{distance:p,point:Hm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Jf extends Hr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Xt,ed=new ud,Nl=new ua,Fl=new Z;class Wm extends un{constructor(e=new Rn,n=new Jf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(a),Nl.radius+=c,e.ray.intersectsSphere(Nl)===!1)return;Gm.copy(a).invert(),ed.copy(e.ray).applyMatrix4(Gm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=x,T=M;E<T;E++){const y=m.getX(E);Fl.fromBufferAttribute(_,y),Xm(Fl,y,p,a,e,n,this)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=x,T=M;E<T;E++)Fl.fromBufferAttribute(_,E),Xm(Fl,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Xm(s,e,n,r,a,c,u){const d=ed.distanceSqToPoint(s);if(d<n){const p=new Z;ed.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class jm extends qn{constructor(e,n,r,a,c,u,d,p,m){super(e,n,r,a,c,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class io extends Rn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const c=[],u=[],d=[],p=[],m=new Z,v=new wt;u.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let _=0,x=3;_<=n;_++,x+=3){const M=r+_/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),u.push(m.x,m.y,m.z),d.push(0,0,1),v.x=(u[x]/e+1)/2,v.y=(u[x+1]/e+1)/2,p.push(v.x,v.y)}for(let _=1;_<=n;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sn extends Rn{constructor(e=1,n=1,r=1,a=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),c=Math.floor(c);const v=[],_=[],x=[],M=[];let E=0;const T=[],y=r/2;let g=0;I(),u===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(M,2));function I(){const C=new Z,$=new Z;let k=0;const O=(n-e)/r;for(let H=0;H<=c;H++){const P=[],A=H/c,B=A*(n-e)+e;for(let oe=0;oe<=a;oe++){const ne=oe/a,ve=ne*p+d,ye=Math.sin(ve),de=Math.cos(ve);$.x=B*ye,$.y=-A*r+y,$.z=B*de,_.push($.x,$.y,$.z),C.set(ye,O,de).normalize(),x.push(C.x,C.y,C.z),M.push(ne,1-A),P.push(E++)}T.push(P)}for(let H=0;H<a;H++)for(let P=0;P<c;P++){const A=T[P][H],B=T[P+1][H],oe=T[P+1][H+1],ne=T[P][H+1];(e>0||P!==0)&&(v.push(A,B,ne),k+=3),(n>0||P!==c-1)&&(v.push(B,oe,ne),k+=3)}m.addGroup(g,k,0),g+=k}function D(C){const $=E,k=new wt,O=new Z;let H=0;const P=C===!0?e:n,A=C===!0?1:-1;for(let oe=1;oe<=a;oe++)_.push(0,y*A,0),x.push(0,A,0),M.push(.5,.5),E++;const B=E;for(let oe=0;oe<=a;oe++){const ve=oe/a*p+d,ye=Math.cos(ve),de=Math.sin(ve);O.x=P*de,O.y=y*A,O.z=P*ye,_.push(O.x,O.y,O.z),x.push(0,A,0),k.x=ye*.5+.5,k.y=de*.5*A+.5,M.push(k.x,k.y),E++}for(let oe=0;oe<a;oe++){const ne=$+oe,ve=B+oe;C===!0?v.push(ve,ve+1,ne):v.push(ve+1,ve,ne),H+=3}m.addGroup(g,H,C===!0?1:2),g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yl extends Sn{constructor(e=1,n=1,r=32,a=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,r,a,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pd extends Rn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],u=[];d(a),m(r),v(),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(c.slice(),3)),this.setAttribute("uv",new Qt(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(I){const D=new Z,C=new Z,$=new Z;for(let k=0;k<n.length;k+=3)M(n[k+0],D),M(n[k+1],C),M(n[k+2],$),p(D,C,$,I)}function p(I,D,C,$){const k=$+1,O=[];for(let H=0;H<=k;H++){O[H]=[];const P=I.clone().lerp(C,H/k),A=D.clone().lerp(C,H/k),B=k-H;for(let oe=0;oe<=B;oe++)oe===0&&H===k?O[H][oe]=P:O[H][oe]=P.clone().lerp(A,oe/B)}for(let H=0;H<k;H++)for(let P=0;P<2*(k-H)-1;P++){const A=Math.floor(P/2);P%2===0?(x(O[H][A+1]),x(O[H+1][A]),x(O[H][A])):(x(O[H][A+1]),x(O[H+1][A+1]),x(O[H+1][A]))}}function m(I){const D=new Z;for(let C=0;C<c.length;C+=3)D.x=c[C+0],D.y=c[C+1],D.z=c[C+2],D.normalize().multiplyScalar(I),c[C+0]=D.x,c[C+1]=D.y,c[C+2]=D.z}function v(){const I=new Z;for(let D=0;D<c.length;D+=3){I.x=c[D+0],I.y=c[D+1],I.z=c[D+2];const C=y(I)/2/Math.PI+.5,$=g(I)/Math.PI+.5;u.push(C,1-$)}E(),_()}function _(){for(let I=0;I<u.length;I+=6){const D=u[I+0],C=u[I+2],$=u[I+4],k=Math.max(D,C,$),O=Math.min(D,C,$);k>.9&&O<.1&&(D<.2&&(u[I+0]+=1),C<.2&&(u[I+2]+=1),$<.2&&(u[I+4]+=1))}}function x(I){c.push(I.x,I.y,I.z)}function M(I,D){const C=I*3;D.x=e[C+0],D.y=e[C+1],D.z=e[C+2]}function E(){const I=new Z,D=new Z,C=new Z,$=new Z,k=new wt,O=new wt,H=new wt;for(let P=0,A=0;P<c.length;P+=9,A+=6){I.set(c[P+0],c[P+1],c[P+2]),D.set(c[P+3],c[P+4],c[P+5]),C.set(c[P+6],c[P+7],c[P+8]),k.set(u[A+0],u[A+1]),O.set(u[A+2],u[A+3]),H.set(u[A+4],u[A+5]),$.copy(I).add(D).add(C).divideScalar(3);const B=y($);T(k,A+0,I,B),T(O,A+2,D,B),T(H,A+4,C,B)}}function T(I,D,C,$){$<0&&I.x===1&&(u[D]=I.x-1),C.x===0&&C.z===0&&(u[D]=$/2/Math.PI+.5)}function y(I){return Math.atan2(I.z,-I.x)}function g(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.vertices,e.indices,e.radius,e.details)}}class md extends pd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,u,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new md(e.radius,e.detail)}}class lr extends Rn{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const v=[],_=new Z,x=new Z,M=[],E=[],T=[],y=[];for(let g=0;g<=r;g++){const I=[],D=g/r;let C=0;g===0&&u===0?C=.5/n:g===r&&p===Math.PI&&(C=-.5/n);for(let $=0;$<=n;$++){const k=$/n;_.x=-e*Math.cos(a+k*c)*Math.sin(u+D*d),_.y=e*Math.cos(u+D*d),_.z=e*Math.sin(a+k*c)*Math.sin(u+D*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),y.push(k+C,1-D),I.push(m++)}v.push(I)}for(let g=0;g<r;g++)for(let I=0;I<n;I++){const D=v[g][I+1],C=v[g][I],$=v[g+1][I],k=v[g+1][I+1];(g!==0||u>0)&&M.push(D,C,k),(g!==r-1||p<Math.PI)&&M.push(C,$,k)}this.setIndex(M),this.setAttribute("position",new Qt(E,3)),this.setAttribute("normal",new Qt(T,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Or extends Rn{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const u=[],d=[],p=[],m=[],v=new Z,_=new Z,x=new Z;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const T=E/a*c,y=M/r*Math.PI*2;_.x=(e+n*Math.cos(y))*Math.cos(T),_.y=(e+n*Math.cos(y))*Math.sin(T),_.z=n*Math.sin(y),d.push(_.x,_.y,_.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),x.subVectors(_,v).normalize(),p.push(x.x,x.y,x.z),m.push(E/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const T=(a+1)*M+E-1,y=(a+1)*(M-1)+E-1,g=(a+1)*(M-1)+E,I=(a+1)*M+E;u.push(T,y,I),u.push(y,g,I)}this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xn extends Hr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends Hr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jl extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ff=new Xt,qm=new Z,Ym=new Z;class gd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),Ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ym),n.updateMatrixWorld(),ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EE extends gd{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=Wl*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,c=e.distance||n.far;(r!==n.fov||a!==n.aspect||c!==n.far)&&(n.fov=r,n.aspect=a,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $m extends Jl{constructor(e,n,r=0,a=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.distance=r,this.angle=a,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new EE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Km=new Xt,na=new Z,df=new Z;class wE extends gd{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),r.position.copy(na),df.copy(r.position),df.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(df),r.updateMatrixWorld(),a.makeTranslation(-na.x,-na.y,-na.z),Km.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class Zm extends Jl{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TE extends gd{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AE extends Jl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new TE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RE extends Jl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);function bE(){var se;const s=Dt.useRef(null),[e,n]=Dt.useState(!0),[r,a]=Dt.useState([]),[c,u]=Dt.useState(0),[d,p]=Dt.useState(!1),[m,v]=Dt.useState("day"),[_,x]=Dt.useState("forest"),[M,E]=Dt.useState(0),[T,y]=Dt.useState(0),[g,I]=Dt.useState(0),[D,C]=Dt.useState(!0),[$,k]=Dt.useState(null),O=Dt.useRef(null),H=Dt.useRef(null),P=Dt.useRef({}),A=Dt.useRef(new CE),B=Dt.useRef({}),oe=Dt.useRef({speed:0,steering:0,posX:0,angle:0}),ne=Dt.useRef(0),ve=Dt.useRef(!0),ye=Dt.useRef(0),de=Dt.useRef(0),fe=Dt.useRef([]),G=()=>{if(O.current)return O.current;const b=new(window.AudioContext||window.webkitAudioContext),F=b.sampleRate,L=Math.floor(F*.35),te=b.createBuffer(2,L,F);for(let jt=0;jt<2;jt++){const zn=te.getChannelData(jt);for(let gn=0;gn<L;gn++){const hi=gn/F;zn[gn]=(Math.random()*2-1)*Math.exp(-hi*12)*(gn<F*.02?.6:1)*.4}}const Q=b.createConvolver();Q.buffer=te;const he=b.createBiquadFilter();he.type="peaking",he.frequency.value=80,he.gain.value=6,he.Q.value=1.2;const Se=b.createBiquadFilter();Se.type="lowpass",Se.frequency.value=8e3,Se.Q.value=.7;const ge=b.createDelay(.01);ge.delayTime.value=3e-4;const xe=b.createDelay(.01);xe.delayTime.value=6e-4;const Ne=b.createStereoPanner();Ne.pan.value=-.6;const ze=b.createStereoPanner();ze.pan.value=.6;const be=b.createGain();be.gain.value=.7;const tt=b.createGain();tt.gain.value=.35;const Xe=b.createGain();Xe.gain.value=1,he.connect(Se),Se.connect(ge).connect(Ne).connect(be),Se.connect(xe).connect(ze).connect(be),be.connect(Xe),Q.connect(tt),tt.connect(Xe),Xe.connect(b.destination);const rt=b.createBufferSource(),X=b.createBuffer(1,Math.floor(F*2),F),W=X.getChannelData(0);for(let jt=0;jt<W.length;jt++)W[jt]=Math.random()*2-1;rt.buffer=X,rt.loop=!0;const ee=b.createBiquadFilter();ee.type="lowpass",ee.frequency.value=250,ee.Q.value=.5;const pe=b.createGain();pe.gain.value=0,rt.connect(ee).connect(pe).connect(b.destination),rt.start();const De=b.createOscillator();De.type="sawtooth",De.frequency.value=35;const Ie=b.createOscillator();Ie.type="triangle",Ie.frequency.value=70;const nt=b.createBiquadFilter();nt.type="lowpass",nt.frequency.value=120,nt.Q.value=1.5;const At=b.createGain();At.gain.value=0,De.connect(nt),Ie.connect(nt),nt.connect(At).connect(b.destination),De.start(),Ie.start();const Ut=b.createBufferSource(),xt=b.createBuffer(1,Math.floor(F*2),F),Jt=xt.getChannelData(0);for(let jt=0;jt<Jt.length;jt++)Jt[jt]=Math.random()*2-1;Ut.buffer=xt,Ut.loop=!0;const $t=b.createBiquadFilter();$t.type="highpass",$t.frequency.value=2500,$t.Q.value=.3;const On=b.createBiquadFilter();On.type="lowpass",On.frequency.value=6e3,On.Q.value=.5;const kn=b.createGain();return kn.gain.value=0,Ut.connect($t).connect(On).connect(kn).connect(b.destination),Ut.start(),O.current={ctx:b,convolver:Q,bassBoost:he,noiseGain:pe,engOsc1:De,engOsc2:Ie,engLPF:nt,engGain:At,windGain:kn,activeSource:null},O.current},_e=()=>{const b=O.current;if(!b)return;const F=b.ctx,L=F.currentTime,te=F.createOscillator();te.type="sine",te.frequency.setValueAtTime(988,L),te.frequency.setValueAtTime(1319,L+.07);const Q=F.createOscillator();Q.type="sine",Q.frequency.setValueAtTime(1568,L+.04);const he=F.createGain();he.gain.setValueAtTime(.18,L),he.gain.exponentialRampToValueAtTime(.001,L+.22);const Se=F.createGain();Se.gain.setValueAtTime(.001,L),Se.gain.linearRampToValueAtTime(.1,L+.04),Se.gain.exponentialRampToValueAtTime(.001,L+.2),te.connect(he).connect(F.destination),Q.connect(Se).connect(F.destination),te.start(L),te.stop(L+.25),Q.start(L+.03),Q.stop(L+.25)},me=()=>{const b=O.current;if(!b)return;const F=b.ctx,L=F.currentTime,te=F.createOscillator();te.type="sawtooth",te.frequency.setValueAtTime(90,L),te.frequency.exponentialRampToValueAtTime(20,L+.35);const Q=F.createBuffer(1,Math.floor(F.sampleRate*.4),F.sampleRate),he=Q.getChannelData(0);for(let be=0;be<he.length;be++)he[be]=Math.random()*2-1;const Se=F.createBufferSource();Se.buffer=Q;const ge=F.createBiquadFilter();ge.type="bandpass",ge.frequency.value=900,ge.Q.value=1.5;const xe=F.createWaveShaper(),Ne=new Float32Array(256);for(let be=0;be<256;be++){const tt=be/128-1;Ne[be]=(Math.PI+3.5)*tt/(Math.PI+3.5*Math.abs(tt))}xe.curve=Ne;const ze=F.createGain();ze.gain.setValueAtTime(.35,L),ze.gain.exponentialRampToValueAtTime(.001,L+.45),te.connect(ze).connect(F.destination),Se.connect(ge).connect(xe).connect(ze),te.start(L),te.stop(L+.5),Se.start(L),Se.stop(L+.45)},z=b=>{const F=G();if(F.activeSource)try{F.activeSource.disconnect()}catch{}b.source||(b.source=F.ctx.createMediaElementSource(b.audio)),b.source.connect(F.bassBoost),b.source.connect(F.convolver),F.activeSource=b.source},ue=b=>{if(fe.current.length>=3)return;const F=new Audio(URL.createObjectURL(b));F.crossOrigin="anonymous";const L={name:b.name.replace(/\.[^/.]+$/,""),audio:F,source:null};F.addEventListener("ended",()=>{const te=fe.current,Q=te.indexOf(L);Q>=0&&Q<te.length-1?re(Q+1):te.length>0&&re(0)}),fe.current=[...fe.current,L],a([...fe.current])},He=b=>{var L;const F=fe.current;if((L=F[b])!=null&&L.audio&&(F[b].audio.pause(),F[b].source))try{F[b].source.disconnect()}catch{}fe.current=F.filter((te,Q)=>Q!==b),a([...fe.current]),c>=fe.current.length&&u(Math.max(0,fe.current.length-1)),fe.current.length===0&&p(!1)},re=b=>{const F=fe.current;if(!F.length)return;F.forEach(Q=>Q.audio.pause());const L=F[b%F.length];z(L);const te=O.current;te&&te.ctx.state==="suspended"&&te.ctx.resume(),L.audio.currentTime=0,L.audio.play(),u(b%F.length),p(!0)},Me=()=>{const b=fe.current;if(!b.length)return;const F=O.current;F&&F.ctx.state==="suspended"&&F.ctx.resume();const L=b[c];L&&(d?(L.audio.pause(),p(!1)):((!(F!=null&&F.activeSource)||F.activeSource!==L.source)&&z(L),L.audio.play(),p(!0)))},Ce=()=>{const b=fe.current;b.length<2||re((c+1)%b.length)},Te=()=>{const b=fe.current;b.length<2||re((c-1+b.length)%b.length)},Ue=()=>{G(),n(!1),fe.current.length>0&&re(0)},Ge=()=>{const b=P.current;ve.current=!0,C(!0),ne.current=0,y(0),oe.current={speed:0,steering:0,posX:0,angle:0},b.records&&b.records.forEach((F,L)=>{F.visible=!0,F.position.z=-40-L*35,F.position.x=(Math.random()-.5)*10}),b.labels&&b.labels.forEach((F,L)=>{F.visible=!0,F.position.z=-60-L*50,F.position.x=(Math.random()-.5)*10}),b.explosion&&(b.explosion.visible=!1),b.roadGroup&&(b.roadGroup.position.x=0)},st=(b,F)=>{const L=new sn;return L.add(new Fe(new Sn(.3,.5,5),new ti({color:6044190}))),[1731388,2262858,1003826].forEach((te,Q)=>{const he=new Fe(new Yl(2.5-Q*.6,4,7),new ti({color:te}));he.position.y=3.5+Q*2.2,he.castShadow=!0,L.add(he)}),L.position.set(b,2.5,F),L.scale.setScalar(.8+Math.random()*.8),L},It=(b,F)=>{const L=new Fe(new md(1+Math.random()*2,1),new ti({color:7829367}));return L.position.set(b,.5,F),L.rotation.set(Math.random(),Math.random(),0),L},vt=(b,F,L)=>{const te=L||30+Math.random()*60,Q=new Fe(new Yl(te,te*1.5,8),new ti({color:5598037}));return Q.position.set(b,te*.6,F),Q.userData={isMountain:!0,radius:te},Q},Ot=(b,F)=>{const L=new sn;L.add(new Fe(new Sn(.15,.3,4),new ti({color:4860437})));for(let te=0;te<4;te++){const Q=new Fe(new Sn(.06,.1,2.5,6),new ti({color:4860437}));Q.position.set(Math.sin(te*1.6)*.8,2.5+te*.3,Math.cos(te*1.6)*.8),Q.rotation.z=Math.sin(te*1.6)*.6,L.add(Q)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(te=>{const Q=new Fe(new lr(1.2+Math.random()*1.5,8,7),new ti({color:te,transparent:!0,opacity:.85}));Q.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),L.add(Q)}),L.position.set(b,2,F),L.scale.setScalar(.7+Math.random()*.7),L},K=(b,F)=>{const L=new sn,te=new ti({color:13378082});[-1.5,1.5].forEach(Se=>{const ge=new Fe(new Sn(.2,.25,7,8),te);ge.position.set(Se,3.5,0),L.add(ge)});const Q=new Fe(new Ft(5,.35,.35),te);Q.position.y=7,L.add(Q);const he=new Fe(new Ft(4,.25,.25),te);return he.position.y=6,L.add(he),L.position.set(b,0,F),L},En=(b,F)=>{const L=new sn,te=4+Math.random()*8,Q=10+Math.random()*50,he=4+Math.random()*8;L.add((()=>{const xe=new Fe(new Ft(te,Q,he),new ti({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)]}));return xe.position.y=Q/2,xe.castShadow=!0,xe})());const Se=new hn({color:16772778,transparent:!0,opacity:.7}),ge=new hn({color:3359829});for(let xe=0;xe<Math.floor(Q/2.5);xe++)for(let Ne=0;Ne<Math.floor(te/1.8);Ne++){const ze=new Fe(new fi(.8,1.2),Math.random()>.35?Se:ge);ze.position.set(-te/2+1+Ne*(te/Math.floor(te/1.8)),2+xe*2.5,he/2+.01),L.add(ze);const be=ze.clone();be.position.z=-he/2-.01,be.rotation.y=Math.PI,L.add(be)}return L.position.set(b,0,F),L.userData={isMountain:!0,radius:Math.max(te,he)},L},_t=(b,F)=>{const L=new sn,te=new Fe(new Sn(.08,.1,8,8),new ti({color:4473924}));te.position.y=4,L.add(te);const Q=new Fe(new Sn(.04,.04,2.5,6),new ti({color:4473924}));Q.rotation.z=Math.PI/2,Q.position.set(b>0?-1.2:1.2,8,0),L.add(Q);const he=new Fe(new lr(.2,8,6),new hn({color:16777130}));return he.position.set(b>0?-2:2,7.8,0),L.add(he),L.position.set(b,0,F),L},ht=Dt.useCallback((b,F,L,te)=>{L.forEach(he=>b.remove(he)),L.length=0;const Q=()=>Math.random()>.5?1:-1;if(F==="forest"){for(let he=0;he<200;he++){const Se=Q();L.push((Math.random()<.7?st:It)(Se*(14+Math.random()*80),-Math.random()*te))}for(let he=0;he<40;he++){const Se=Q(),ge=30+Math.random()*60;L.push(vt(Se*(ge+25+Math.random()*120),-Math.random()*te,ge))}}else if(F==="sakura"){for(let he=0;he<200;he++)L.push(Ot(Q()*(12+Math.random()*70),-Math.random()*te));for(let he=0;he<10;he++)L.push(K(Q()*(9+Math.random()*6),-he*90-30));for(let he=0;he<20;he++){const Se=40+Math.random()*50,ge=vt(Q()*(Se+40+Math.random()*100),-Math.random()*te,Se);ge.material.color.set(6715306),L.push(ge)}}else if(F==="city"){for(let he=0;he<120;he++)L.push(En(Q()*(12+Math.random()*60),-Math.random()*te));for(let he=0;he<50;he++)L.push(_t(Q()*9,-he*20))}L.forEach(he=>b.add(he))},[]),it=()=>{const b=new sn;b.add(new Fe(new Sn(.8,.8,.05,24),new Xn({color:1118481,shininess:100}))),[.3,.5,.65].forEach(L=>{const te=new Fe(new Or(L,.008,4,24),new hn({color:2236962}));te.rotation.x=Math.PI/2,b.add(te)}),b.add(new Fe(new Sn(.22,.22,.06,16),new Xn({color:16729156,shininess:80}))),b.add(new Fe(new Sn(.04,.04,.08,8),new hn({color:0})));const F=new Fe(new Or(.85,.04,8,24),new hn({color:16768256,transparent:!0,opacity:.6}));return F.rotation.x=Math.PI/2,b.add(F),b},Pt=()=>{const b=new sn,F=new Fe(new Ft(1.2,1.6,.3),new Xn({color:2236962,shininess:80}));F.position.y=.8,b.add(F);const L=new Fe(new Ft(.8,.8,.02),new Xn({color:13408512,shininess:150,specular:16768256}));L.position.set(0,.9,.17),b.add(L);const te=new Fe(new Ft(1.3,.15,.32),new Xn({color:13369344,shininess:60}));te.position.set(0,1.65,0),b.add(te),[-.7,.7].forEach(he=>{for(let Se=0;Se<3;Se++){const ge=new Fe(new Or(.08,.02,6,8),new Xn({color:8947848,shininess:200}));ge.position.set(he,.4+Se*.25,0),ge.rotation.y=Math.PI/2,ge.rotation.x=Se%2===0?0:Math.PI/2,b.add(ge)}});const Q=new Fe(new lr(.15,8,6),new hn({color:16711680}));return Q.position.set(0,1.85,0),b.add(Q),b.userData={type:"label",light:Q},b},et=()=>{const b=new sn,F=[16729088,16746496,16763904,16720384];for(let L=0;L<12;L++){const te=new Fe(new lr(.5+Math.random()*1.5,8,6),new hn({color:F[L%4],transparent:!0,opacity:.8}));te.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),te.userData.speed=1+Math.random()*2,b.add(te)}for(let L=0;L<6;L++){const te=new Fe(new lr(1+Math.random(),6,5),new hn({color:3355443,transparent:!0,opacity:.5}));te.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),b.add(te)}return b.visible=!1,b},U=Dt.useCallback(b=>{const F=b.clientWidth,L=b.clientHeight,te=new yE({antialias:!0});te.setSize(F,L),te.setPixelRatio(Math.min(window.devicePixelRatio,2)),te.shadowMap.enabled=!0,te.shadowMap.type=tg,te.toneMapping=ng,te.toneMappingExposure=1.2,b.appendChild(te.domElement);const Q=new ME,he=new ii(68,F/L,.1,2e3);he.position.set(0,3.5,.5),he.lookAt(0,2.5,-50);const Se={day:8900331,sunset:16739125,night:657966,retro:1703987},ge={day:13166325,sunset:16746581,night:328992,retro:2228292},xe={day:8952234,sunset:5583650,night:1118515,retro:6684808},Ne={day:16777200,sunset:16742195,night:2241365,retro:16711935};Q.background=new Et(Se.day),Q.fog=new hd(ge.day,80,600);const ze=new RE(xe.day,.7);Q.add(ze);const be=new AE(Ne.day,1);be.position.set(30,50,-30),be.castShadow=!0,Q.add(be);const tt=new Zm(4482730,.4,10);tt.position.set(0,4,-1),Q.add(tt);const Xe=new Zm(16777215,.2,6);Xe.position.set(0,2.5,-1.5),Q.add(Xe);const rt=new sn;Q.add(rt);const X=new ti({color:3355443}),W=new Fe(new fi(14,4e3),X);W.rotation.x=-Math.PI/2,W.position.set(0,.01,-1900),W.receiveShadow=!0,rt.add(W);const ee=60,pe=12,De=[];for(let Oe=0;Oe<ee;Oe++){const Qe=new Fe(new fi(.2,4),new hn({color:16777215}));Qe.rotation.x=-Math.PI/2,Qe.position.set(0,.02,-Oe*pe),rt.add(Qe),De.push(Qe)}for(let Oe of[-6.8,6.8]){const Qe=new Fe(new fi(.15,4e3),new hn({color:15658734}));Qe.rotation.x=-Math.PI/2,Qe.position.set(Oe,.02,-1900),rt.add(Qe)}const Ie=new ti({color:4880954}),nt=new Fe(new fi(4e3,4e3),Ie);nt.rotation.x=-Math.PI/2,nt.receiveShadow=!0,rt.add(nt);const At=new Fe(new io(60,32),new hr({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}",transparent:!0,side:wi}));At.position.set(0,40,-800),At.visible=!1,Q.add(At);const Ut=new Fe(new fi(800,800,40,40),new hn({color:16711935,wireframe:!0,transparent:!0,opacity:.25}));Ut.rotation.x=-Math.PI/2,Ut.position.set(0,.05,-350),Ut.visible=!1,Q.add(Ut);const xt=new Rn,Jt=new Float32Array(500*3);for(let Oe=0;Oe<500;Oe++)Jt[Oe*3]=(Math.random()-.5)*1200,Jt[Oe*3+1]=30+Math.random()*200,Jt[Oe*3+2]=-100-Math.random()*800;xt.setAttribute("position",new di(Jt,3));const $t=new Jf({color:16777215,size:.8,transparent:!0,opacity:.8}),On=new Wm(xt,$t);On.visible=!1,Q.add(On);const kn=[];for(let Oe=0;Oe<20;Oe++){const Qe=new sn;for(let on=0;on<3+Math.floor(Math.random()*4);on++){const Ht=new Fe(new lr(3+Math.random()*5,8,6),new ti({color:16777215,transparent:!0,opacity:.7}));Ht.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),Ht.scale.y=.4+Math.random()*.3,Qe.add(Ht)}Qe.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Qe.userData.drift=2+Math.random()*4,Q.add(Qe),kn.push(Qe)}const jt=150,zn=new Rn,gn=new Float32Array(jt*3),hi=[];for(let Oe=0;Oe<jt;Oe++)gn[Oe*3]=(Math.random()-.5)*80,gn[Oe*3+1]=Math.random()*20,gn[Oe*3+2]=-Math.random()*100,hi.push({x:(Math.random()-.5)*2,y:-.5-Math.random()*1.5,z:Math.random()*.5,ph:Math.random()*Math.PI*2});zn.setAttribute("position",new di(gn,3));const Ti=new Jf({color:16758725,size:.4,transparent:!0,opacity:.8}),Gr=new Wm(zn,Ti);Q.add(Gr);const Xi=[];for(let Oe=0;Oe<3;Oe++){const Qe=[];for(let an=0;an<8;an++)Qe.push(an*-2,an*-.3,0);const on=new Rn;on.setAttribute("position",new di(new Float32Array(Qe),3));const Ht=new SE(on,new Dg({color:16777215,transparent:!0,opacity:0}));Ht.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),Ht.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},Q.add(Ht),Xi.push(Ht)}const Wr=[];for(let Oe=0;Oe<8;Oe++){const Qe=new sn,on=new Fe(new fi(1.2,.15),new hn({color:2236962,side:wi}));on.position.x=-.5,on.rotation.z=.3,Qe.add(on);const Ht=new Fe(new fi(1.2,.15),new hn({color:2236962,side:wi}));Ht.position.x=.5,Ht.rotation.z=-.3,Qe.add(Ht),Qe.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Qe.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:on,wR:Ht,baseY:Qe.position.y},Q.add(Qe),Wr.push(Qe)}const Lt=new sn;Q.add(Lt);const Bn=new Xn({color:1710618,shininess:60}),Xr=new Xn({color:1118481,shininess:30}),ji=new Xn({color:1381653,shininess:10}),R=new Xn({color:11184810,shininess:200,specular:16777215}),Y=new Xn({color:2241348,shininess:300,specular:5596791,transparent:!0,opacity:.15}),ae=new Fe(new Ft(5.8,.7,2.2),Bn);ae.position.set(0,1.5,-2.6),Lt.add(ae);const le=new Fe(new Ft(5.6,.12,1.8),ji);le.position.set(0,1.9,-2.5),Lt.add(le);const q=new Fe(new Sn(.35,.35,5.6,16,1,!0,0,Math.PI),Bn);q.rotation.z=Math.PI/2,q.rotation.x=Math.PI/2,q.position.set(0,1.15,-3.1),Lt.add(q);const Pe=new Fe(new Ft(1,.9,.15),Xr);Pe.position.set(-.88,2.18,-2.32),Pe.rotation.x=-.25,Lt.add(Pe);const Ae=new sn;Ae.position.set(.5,1.85,-2.35),Ae.add(new Fe(new Ft(1.5,.85,.12),Bn));const je=document.createElement("canvas");je.width=256,je.height=64;const Be=je.getContext("2d");Be.fillStyle="#020a04",Be.fillRect(0,0,256,64),Be.fillStyle="#0a6",Be.font="bold 16px monospace",Be.textAlign="center",Be.fillText("NO DISC",128,38);const lt=new jm(je),ct=new Fe(new Ft(1.3,.55,.01),new hn({map:lt}));ct.position.set(0,.06,.07),Ae.add(ct),[-.62,.62].forEach(Oe=>{const Qe=new Fe(new lr(.07,12,10),R);Qe.position.set(Oe,-.05,.07),Ae.add(Qe)});for(let Oe=0;Oe<4;Oe++){const Qe=new Fe(new Sn(.035,.035,.02,10),R);Qe.rotation.x=Math.PI/2,Qe.position.set(-.3+Oe*.2,-.32,.07),Ae.add(Qe)}Lt.add(Ae);const $e=new Fe(new Ft(.85,.5,3.2),Bn);$e.position.set(0,1.25,0),Lt.add($e);const Mt=new Fe(new Ft(.8,.15,1.1),ji);Mt.position.set(0,1.58,.8),Lt.add(Mt);const pt=new sn;pt.add(new Fe(new Or(.45,.035,16,36),ji));const yt=new Fe(new Ft(.55,.04,.04),R);yt.position.y=-.4,pt.add(yt),[-.8,0,.8].forEach(Oe=>{const Qe=new Fe(new Sn(.015,.025,.38,8),Bn);Qe.position.set(Math.sin(Oe)*.19,Math.cos(Oe)*.19,0),Qe.rotation.z=-Oe,pt.add(Qe)}),pt.add(new Fe(new Sn(.11,.11,.04,20),Bn)),pt.add(new Fe(new Or(.11,.005,8,24),R)),[-.5,.5].forEach(Oe=>{const Qe=new Fe(new Ft(.12,.035,.1),R);Qe.position.set(Oe,.08,-.06),pt.add(Qe)}),pt.position.set(-.85,2.1,-1.8),pt.rotation.x=-.38,Lt.add(pt);const qt=new sn,dt=new Fe(new io(.38,32),new Xn({color:657930,shininess:40}));qt.add(dt);const Ze=new Fe(new Or(.38,.02,12,32),R);qt.add(Ze);const Cn=document.createElement("canvas");Cn.width=256,Cn.height=256;const ut=Cn.getContext("2d");ut.clearRect(0,0,256,256);const tn=128,bn=128,Bt=105;for(let Oe=0;Oe<=120;Oe+=10){const Qe=Oe/120,on=Math.PI*.75+Qe*Math.PI*1.5,Ht=Math.cos(on),an=Math.sin(on),Pn=Oe%20===0,Hn=Pn?Bt-20:Bt-12;ut.strokeStyle=Pn?"#ffffff":"#888888",ut.lineWidth=Pn?2.5:1.2,ut.beginPath(),ut.moveTo(tn+Hn*Ht,bn+Hn*an),ut.lineTo(tn+Bt*Ht,bn+Bt*an),ut.stroke(),Pn&&(ut.fillStyle="#ffffff",ut.font="bold 16px monospace",ut.textAlign="center",ut.textBaseline="middle",ut.fillText(String(Oe),tn+(Bt-32)*Ht,bn+(Bt-32)*an))}ut.fillStyle="#4ade80",ut.font="bold 10px monospace",ut.textAlign="center",ut.fillText("MPH",tn,bn+40);const pi=new jm(Cn),Nt=new Fe(new io(.36,32),new hn({map:pi,transparent:!0}));Nt.position.z=.005,qt.add(Nt);const vn=new sn,mi=new Fe(new Ft(.012,.28,.008),new Xn({color:16724787,emissive:4456448}));mi.position.y=.12,vn.add(mi),vn.add(new Fe(new io(.03,12),new Xn({color:13369344,shininess:100}))),vn.position.z=.01,qt.add(vn),qt.position.set(-.88,2.18,-2.25),qt.rotation.x=-.25,Lt.add(qt);const nn=new sn,Vn=new Fe(new Sn(.02,.03,.45,8),Bn);Vn.position.y=.25,nn.add(Vn),nn.add(new Fe(new Ft(1.2,.28,.06),Bn));const wn=new Fe(new Ft(1.15,.24,.01),new Xn({color:1714746,shininess:300,specular:7833753,transparent:!0,opacity:.75}));wn.position.z=.035,nn.add(wn),nn.position.set(0,4.6,-2),Lt.add(nn),[-2.6,2.6].forEach(Oe=>{const Qe=new Fe(new Sn(.04,.06,3.2,10),Bn);Qe.position.set(Oe,3.5,-2.2),Qe.rotation.z=Oe>0?-.2:.2,Lt.add(Qe)});const jr=new Fe(new Ft(5.8,.08,4),Xr);jr.position.set(0,5.2,-.5),Lt.add(jr),[-2.75,2.75].forEach(Oe=>{const Qe=Oe>0?1:-1,on=new Fe(new Ft(.08,2.2,2.8),Bn);on.position.set(Oe,2.3,-.8),Lt.add(on);const Ht=new Fe(new Ft(.06,.5,2.4),ji);Ht.position.set(Oe>0?Oe-.04:Oe+.04,3,-.8),Lt.add(Ht);const an=new Fe(new Ft(.18,.1,1.2),ji);an.position.set(Oe>0?Oe-.08:Oe+.08,2.4,-.6),Lt.add(an);const Pn=new Fe(new Ft(.03,.035,.35),R);Pn.position.set(Oe>0?Oe-.05:Oe+.05,2.55,-.5),Lt.add(Pn);const Hn=new Fe(new fi(2,1.5),Y);Hn.position.set(Oe>0?Oe-.01:Oe+.01,3.8,-.8),Hn.rotation.y=Math.PI/2*Qe,Lt.add(Hn);const pr=new Fe(new Ft(.01,.015,2.4),new hn({color:2245802,transparent:!0,opacity:.5}));pr.position.set(Oe>0?Oe-.03:Oe+.03,1.9,-.8),Lt.add(pr)});const qi=new $m(16777164,0,80,.4,.5);qi.position.set(-1.5,2,-3),qi.target.position.set(-2,0,-80),Q.add(qi),Q.add(qi.target);const Tt=new $m(16777164,0,80,.4,.5);Tt.position.set(1.5,2,-3),Tt.target.position.set(2,0,-80),Q.add(Tt),Q.add(Tt.target);const vo=[];for(let Oe=0;Oe<15;Oe++){const Qe=it();Qe.position.set((Math.random()-.5)*10,1.2,-40-Oe*35),Qe.rotation.x=Math.PI/2,Qe.userData.bobPhase=Math.random()*Math.PI*2,Q.add(Qe),vo.push(Qe)}const _o=[];for(let Oe=0;Oe<10;Oe++){const Qe=Pt();Qe.position.set((Math.random()-.5)*10,0,-60-Oe*50),Q.add(Qe),_o.push(Qe)}const xs=et();Q.add(xs);const fa=[];return P.current={renderer:te,scene:Q,camera:he,sceneryPool:fa,spawnRange:1e3,amb:ze,dir:be,skyC:Se,fogC:ge,ambC:xe,dirC:Ne,wGrp:pt,hlL:qi,hlR:Tt,interior:Lt,sCanvas:je,sCtx:Be,sTex:lt,gndMat:Ie,roadMat:X,retroSun:At,retroGrid:Ut,fillL:tt,dashL:Xe,records:vo,labels:_o,explosion:xs,roadGroup:rt,dashes:De,DS:pe,stars:On,starMat:$t,clouds:kn,ptcls:Gr,pGeo:zn,pVel:hi,pMat:Ti,shooters:Xi,birds:Wr,speedoNeedle:vn},te},[]);Dt.useEffect(()=>{const b=L=>{B.current[L.code]=!0},F=L=>{B.current[L.code]=!1};return window.addEventListener("keydown",b),window.addEventListener("keyup",F),()=>{window.removeEventListener("keydown",b),window.removeEventListener("keyup",F)}},[]),Dt.useEffect(()=>{if(!s.current)return;const b=s.current,F=U(b),L=P.current;ht(L.scene,_,L.sceneryPool,L.spawnRange);const te=()=>{L.camera.aspect=b.clientWidth/b.clientHeight,L.camera.updateProjectionMatrix(),F.setSize(b.clientWidth,b.clientHeight)};window.addEventListener("resize",te);let Q=0;const he=()=>{H.current=requestAnimationFrame(he);const Se=Math.min(A.current.getDelta(),.05),ge=B.current,xe=oe.current,Ne=Date.now();if(!ve.current){L.explosion&&L.explosion.visible&&L.explosion.children.forEach(W=>{W.position.y+=(W.userData.speed||2)*Se,W.scale.multiplyScalar(1+Se*.5),W.material.opacity>.01&&(W.material.opacity-=Se*.4)}),F.render(L.scene,L.camera);return}ge.ShiftLeft||ge.ShiftRight?xe.speed=Math.min(xe.speed+40*Se,120):ge.Space?xe.speed=Math.max(xe.speed-80*Se,0):xe.speed=Math.max(xe.speed-10*Se,0);const ze=ge.KeyA||ge.ArrowLeft?-.6:ge.KeyD||ge.ArrowRight?.6:0;xe.steering+=(ze-xe.steering)*5*Se;const tt=xe.steering*(xe.speed/60)*15*Se;xe.posX=Math.max(-20,Math.min(20,xe.posX+tt)),xe.angle+=(xe.steering*.08-xe.angle)*4*Se,E(Math.round(xe.speed));const Xe=xe.speed;L.roadGroup.position.x=-xe.posX,Q+=Xe*Se,Q>=L.DS&&(Q-=L.DS),L.dashes.forEach((W,ee)=>{W.position.z=-(ee*L.DS)+Q}),L.sceneryPool.forEach(W=>{if(W.position.z+=Xe*Se,W.position.x-=tt,W.position.z>60){W.position.z-=L.spawnRange;const ee=Math.random()>.5?1:-1,pe=W.userData.isMountain;W.position.x=ee*((pe?(W.userData.radius||50)+20:14)+Math.random()*(pe?120:80))-xe.posX}}),L.records.forEach(W=>{W.visible&&(W.position.z+=Xe*Se,W.position.x-=tt,W.rotation.z+=Se*3,W.position.y=1.2+Math.sin(Ne*.003+W.userData.bobPhase)*.3,W.position.z>30&&(W.position.z=-300-Math.random()*200,W.position.x=(Math.random()-.5)*10-xe.posX,W.visible=!0),Math.abs(W.position.x)<1.8&&Math.abs(W.position.z)<2.5&&(W.visible=!1,ne.current+=100,y(ne.current),_e(),k("record"),setTimeout(()=>k(null),300),setTimeout(()=>{W.visible=!0,W.position.z=-300-Math.random()*200,W.position.x=(Math.random()-.5)*10-xe.posX},2e3)))}),L.labels.forEach(W=>{W.visible&&(W.position.z+=Xe*Se,W.position.x-=tt,W.rotation.y+=Se*1.5,W.userData.light&&(W.userData.light.material.opacity=Math.sin(Ne*.01)>0?1:.2),W.position.z>30&&(W.position.z=-350-Math.random()*250,W.position.x=(Math.random()-.5)*10-xe.posX,W.visible=!0),Math.abs(W.position.x)<1.5&&Math.abs(W.position.z)<2&&(ve.current=!1,C(!1),k("boom"),ne.current>ye.current&&(ye.current=ne.current,I(ne.current)),L.explosion&&(L.explosion.position.copy(W.position),L.explosion.visible=!0,L.explosion.children.forEach(ee=>{ee.material.opacity=.8,ee.scale.set(1,1,1)})),W.visible=!1,xe.speed=0,de.current=.12,me()))}),L.retroGrid&&L.retroGrid.visible&&(L.retroGrid.position.x=-xe.posX),L.clouds.forEach(W=>{W.position.x+=W.userData.drift*Se,W.position.x>350&&(W.position.x=-350)});const rt=L.pGeo.attributes.position.array;for(let W=0;W<L.pVel.length;W++){const ee=L.pVel[W];rt[W*3]+=(ee.x+Math.sin(Ne*.001+ee.ph)*.5)*Se,rt[W*3+1]+=ee.y*Se,rt[W*3+2]+=Xe*Se*.3+ee.z*Se,(rt[W*3+1]<0||rt[W*3+2]>20)&&(rt[W*3]=(Math.random()-.5)*80-xe.posX,rt[W*3+1]=5+Math.random()*20,rt[W*3+2]=-20-Math.random()*80)}L.pGeo.attributes.position.needsUpdate=!0,L.shooters.forEach(W=>{W.userData.timer+=Se*60,!W.userData.on&&W.userData.timer>W.userData.interval&&(W.userData.on=!0,W.userData.timer=0,W.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),W.material.opacity=1),W.userData.on&&(W.position.x+=W.userData.spd*Se,W.position.y-=W.userData.spd*.3*Se,W.material.opacity-=Se*.8,W.material.opacity<=0&&(W.userData.on=!1,W.userData.interval=300+Math.random()*600,W.material.opacity=0))}),L.birds.forEach(W=>{W.position.x+=W.userData.fs*Se,W.position.y=W.userData.baseY+Math.sin(Ne*.002+W.userData.wp)*2,W.position.z+=Xe*Se*.1;const ee=Math.sin(Ne*.008+W.userData.wp);if(W.userData.wL&&(W.userData.wL.rotation.z=.3+ee*.4),W.userData.wR&&(W.userData.wR.rotation.z=-.3-ee*.4),W.position.x>250||W.position.z>50){const pe=25+Math.random()*40;W.userData.baseY=pe,W.position.set(-200-Math.random()*100,pe,-50-Math.random()*300)}}),L.wGrp&&(L.wGrp.rotation.z=xe.steering*1.2+Math.sin(Ne*.001)*.008);const X=xe.speed/120;if(L.camera.position.y=3.5+Math.sin(Ne*.004)*.02*X,L.camera.position.x=0,L.camera.rotation.y=xe.angle*.5,de.current>.001?de.current*=Math.exp(-8*Se):de.current=0,L.camera.rotation.z=xe.angle*-.15+Math.sin(Ne*.002)*.003*X+Math.sin(Ne*.03)*de.current,L.interior&&(L.interior.rotation.y=xe.angle*.5),L.speedoNeedle){const W=Math.min(xe.speed/120,1),ee=Math.PI*.75-W*(Math.PI*1.5);L.speedoNeedle.rotation.z+=(ee-L.speedoNeedle.rotation.z)*(1-Math.exp(-6*Se))}if(O.current){const W=O.current,ee=Math.min(xe.speed/120,1),pe=1-Math.exp(-5*Se);W.noiseGain.gain.value+=(ee*.05-W.noiseGain.gain.value)*pe;const De=35+ee*80;W.engOsc1.frequency.value+=(De-W.engOsc1.frequency.value)*pe,W.engOsc2.frequency.value+=(De*2-W.engOsc2.frequency.value)*pe,W.engGain.gain.value+=(.012+ee*.035-W.engGain.gain.value)*pe,W.engLPF.frequency.value+=(80+ee*200-W.engLPF.frequency.value)*pe;const Ie=Math.max(0,(ee-.25)/.75)*.04;W.windGain.gain.value+=(Ie-W.windGain.gain.value)*pe}F.render(L.scene,L.camera)};return he(),()=>{window.removeEventListener("resize",te),cancelAnimationFrame(H.current),b.contains(F.domElement)&&b.removeChild(F.domElement),F.dispose()}},[U,ht]),Dt.useEffect(()=>{const b=P.current;b.scene&&(ht(b.scene,_,b.sceneryPool,b.spawnRange),b.gndMat&&b.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[_]||4880954))},[_,ht]),Dt.useEffect(()=>{const b=P.current;if(!b.scene)return;b.scene.background.set(b.skyC[m]),b.scene.fog.color.set(b.fogC[m]),b.amb.color.set(b.ambC[m]),b.dir.color.set(b.dirC[m]),b.dir.intensity={day:1,sunset:.6,night:.2,retro:.4}[m],b.amb.intensity={day:.7,sunset:.5,night:.25,retro:.35}[m];const F=m!=="day";b.hlL.intensity=F?2:0,b.hlR.intensity=F?2:0;const L=m==="retro"?16711935:16777164;b.hlL.color.set(L),b.hlR.color.set(L),b.gndMat&&b.gndMat.color.set(m==="retro"?655392:{forest:4880954,sakura:5933642,city:3815994}[_]||4880954),b.roadMat&&b.roadMat.color.set(m==="retro"?1114146:3355443),b.retroSun&&(b.retroSun.visible=m==="retro"),b.retroGrid&&(b.retroGrid.visible=m==="retro"),b.fillL&&(b.fillL.intensity={day:.4,sunset:.3,night:.5,retro:.6}[m],b.fillL.color.set(m==="retro"?6684842:4482730)),b.dashL&&(b.dashL.intensity={day:.2,sunset:.15,night:.3,retro:.2}[m]),b.stars&&(b.stars.visible=m==="night"||m==="retro",b.starMat.color.set(m==="retro"?16746751:16777215)),b.clouds&&b.clouds.forEach(te=>{te.visible=m==="day"||m==="sunset",te.children.forEach(Q=>{m==="sunset"?(Q.material.color.set(16755319),Q.material.opacity=.6):(Q.material.color.set(16777215),Q.material.opacity=.7)})}),b.shooters&&b.shooters.forEach(te=>{te.visible=m==="night"}),b.birds&&b.birds.forEach(te=>{te.visible=m==="day"||m==="sunset"}),b.pMat&&(_==="sakura"?(b.pMat.color.set(16758725),b.pMat.size=.5,b.pMat.opacity=.8):_==="city"?(b.pMat.color.set(m==="retro"?16729343:11184810),b.pMat.size=.2,b.pMat.opacity=.4):(b.pMat.color.set(m==="night"?8978346:m==="retro"?16729343:10079351),b.pMat.size=m==="night"?.3:.25,b.pMat.opacity=m==="night"?.7:.3))},[m,_]),Dt.useEffect(()=>{var ge;const b=P.current;if(!b.sCtx)return;const F=b.sCtx,L=b.sCanvas.width,te=b.sCanvas.height;let Q;const he=((ge=r[c])==null?void 0:ge.name)||"",Se=()=>{if(F.fillStyle="#020a04",F.fillRect(0,0,L,te),!he)F.fillStyle="#0a6",F.font="bold 16px monospace",F.textAlign="center",F.fillText("NO DISC",L/2,te/2+5);else{const xe=d,Ne=xe?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";F.fillStyle=Ne,F.font="bold 14px monospace";const ze=he.toUpperCase(),be=F.measureText(ze).width;if(be>L-20&&xe?(F.textAlign="left",F.fillText(ze,L-Date.now()*.03%(be+80),22)):(F.textAlign="center",F.fillText(ze.length>18?ze.slice(0,18)+"…":ze,L/2,22)),F.fillStyle="#073",F.font="9px monospace",F.textAlign="left",F.fillText(`${c+1}/${r.length}`,6,46),F.fillStyle=xe?"#0f4":"#073",F.font="11px monospace",F.textAlign="center",F.fillText(xe?"▶ PLAYING":"❚❚ PAUSED",L/2,46),xe){const tt=Date.now()*.004;for(let Xe=0;Xe<8;Xe++){F.fillStyle=Ne;const rt=4+(Math.sin(tt*(1.2+Xe*.4)+Xe*1.8)*.5+.5)*12+Math.sin(tt*(.7+Xe*.3)+Xe*2.5)*2;F.fillRect(L-18-Xe*6,te-4-rt,4,rt)}}}b.sTex&&(b.sTex.needsUpdate=!0),Q=requestAnimationFrame(Se)};return Se(),()=>cancelAnimationFrame(Q)},[r,c,d]);const w=((se=r[c])==null?void 0:se.name)||"";return We.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[We.jsx("style",{children:`
        @keyframes lobbyGlow { 0%,100%{text-shadow:0 0 20px rgba(74,222,128,0.3),0 0 60px rgba(74,222,128,0.1)} 50%{text-shadow:0 0 40px rgba(74,222,128,0.6),0 0 100px rgba(74,222,128,0.2)} }
        @keyframes lobbyPulse { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(74,222,128,0.4)} 50%{transform:scale(1.03);box-shadow:0 0 30px 4px rgba(74,222,128,0.15)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatVinyl { 0%,100%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}),We.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),e&&We.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 40%, rgba(10,20,30,0.85) 0%, rgba(0,0,0,0.95) 100%)",backdropFilter:"blur(6px)",zIndex:10},children:[We.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg, #4ade80, #60a5fa, #a78bfa, #f472b6, #4ade80)",backgroundSize:"200% 100%",animation:"gradientShift 4s ease infinite"}}),We.jsxs("div",{style:{animation:"fadeSlideUp 0.8s ease both",textAlign:"center",marginBottom:8},children:[We.jsx("div",{style:{fontSize:14,letterSpacing:6,color:"rgba(255,255,255,0.3)",fontWeight:500,marginBottom:8},children:"WELCOME TO"}),We.jsx("div",{style:{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,letterSpacing:3,color:"#fff",animation:"lobbyGlow 3s ease-in-out infinite",lineHeight:1.1},children:"AERA CAR TESTER"}),We.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.35)",marginTop:8,letterSpacing:2},children:"SPATIAL AUDIO DRIVING EXPERIENCE"})]}),We.jsx("div",{style:{display:"flex",gap:16,marginTop:28,flexWrap:"wrap",justifyContent:"center",maxWidth:600,padding:"0 16px"},children:[{icon:"💿",text:"Collect records, avoid Labels",color:"#ffdd00",delay:"0.3s"},{icon:"📝",text:"Avoid getting Signed",color:"#ff6b6b",delay:"0.5s"},{icon:"🔊",text:"Test your track with spatial audio",color:"#4ade80",delay:"0.7s"}].map(({icon:b,text:F,color:L,delay:te})=>We.jsxs("div",{style:{animation:`fadeSlideUp 0.7s ease ${te} both`,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10,minWidth:170},children:[We.jsx("span",{style:{fontSize:22},children:b}),We.jsx("span",{style:{fontSize:13,color:L,fontWeight:600},children:F})]},F))}),We.jsxs("div",{style:{animation:"fadeSlideUp 0.7s ease 0.9s both",marginTop:36,textAlign:"center"},children:[We.jsx("div",{style:{fontSize:11,letterSpacing:3,color:"rgba(255,255,255,0.3)",marginBottom:12},children:"LOAD YOUR TRACKS (UP TO 3)"}),We.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[0,1,2].map(b=>{const F=r[b];return We.jsx("div",{style:{width:160,height:80,borderRadius:14,border:F?"1px solid rgba(74,222,128,0.3)":"2px dashed rgba(255,255,255,0.12)",background:F?"rgba(74,222,128,0.06)":"rgba(255,255,255,0.02)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",transition:"all 0.3s"},children:F?We.jsxs(We.Fragment,{children:[We.jsx("div",{style:{fontSize:11,color:"#4ade80",fontWeight:700,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"},children:F.name}),We.jsxs("div",{style:{fontSize:9,color:"rgba(255,255,255,0.3)",marginTop:4},children:["Track ",b+1]}),We.jsx("button",{onClick:()=>He(b),style:{position:"absolute",top:4,right:6,background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:14,cursor:"pointer",padding:0,lineHeight:1},children:"x"})]}):We.jsxs("label",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,width:"100%",height:"100%",justifyContent:"center"},children:[We.jsx("div",{style:{fontSize:22,opacity:.3},children:"+"}),We.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.25)"},children:"Add Track"}),We.jsx("input",{type:"file",accept:"audio/*",onChange:L=>{L.target.files[0]&&ue(L.target.files[0]),L.target.value=""},style:{display:"none"}})]})},b)})})]}),We.jsx("button",{onClick:Ue,style:{animation:"fadeSlideUp 0.7s ease 1.1s both, lobbyPulse 2.5s ease-in-out 2s infinite",marginTop:36,background:"linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",border:"1px solid rgba(74,222,128,0.3)",borderRadius:16,padding:"16px 56px",color:"#4ade80",fontSize:20,fontWeight:800,cursor:"pointer",letterSpacing:4},onMouseEnter:b=>{b.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.3), rgba(96,165,250,0.3))",b.target.style.borderColor="rgba(74,222,128,0.6)"},onMouseLeave:b=>{b.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",b.target.style.borderColor="rgba(74,222,128,0.3)"},children:"START"}),We.jsx("div",{style:{animation:"fadeSlideUp 0.7s ease 1.3s both",fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:12},children:"Tracks are optional — you can drive without music"})]}),!e&&We.jsxs(We.Fragment,{children:[We.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:$==="record"?"rgba(255,215,0,0.25)":$==="boom"?"rgba(255,0,0,0.35)":"transparent",opacity:$?1:0,transition:"opacity 0.3s ease-out"}}),We.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:16,alignItems:"center"},children:[We.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 18px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},children:[We.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"SCORE"}),We.jsx("div",{style:{fontSize:28,fontWeight:700,fontFamily:"monospace",color:"#ffdd00"},children:T})]}),g>0&&We.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,215,0,0.15)",textAlign:"center"},children:[We.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"HIGH"}),We.jsx("div",{style:{fontSize:22,fontWeight:700,fontFamily:"monospace",color:"#ff8800"},children:g})]})]}),!D&&We.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"},children:[We.jsx("div",{style:{fontSize:56,fontWeight:900,color:"#ff3333",textShadow:"0 0 30px rgba(255,0,0,0.5)",letterSpacing:4},children:"SIGNED"}),We.jsx("div",{style:{fontSize:16,color:"#fff",marginTop:6,opacity:.5},children:"The label got you..."}),We.jsxs("div",{style:{fontSize:20,color:"#fff",marginTop:12,opacity:.8},children:["Score: ",We.jsx("span",{style:{color:"#ffdd00",fontWeight:700},children:T})]}),T>=g&&T>0&&We.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:6},children:"NEW HIGH SCORE!"}),We.jsx("button",{onClick:Ge,style:{marginTop:24,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:12,padding:"12px 32px",color:"#fff",fontSize:18,fontWeight:700,cursor:"pointer",letterSpacing:2},onMouseEnter:b=>b.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:b=>b.target.style.background="rgba(255,255,255,0.12)",children:"RESTART"})]}),r.length>0&&We.jsxs("div",{style:{position:"absolute",bottom:12,left:16,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",display:"flex",alignItems:"center",gap:8,maxWidth:280,border:"1px solid rgba(255,255,255,0.06)"},children:[r.length>1&&We.jsx("button",{onClick:Te,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"0 2px",opacity:.6},children:"⏮"}),We.jsx("button",{onClick:Me,style:{background:"none",border:"none",color:"#fff",fontSize:18,cursor:"pointer",padding:0},children:d?"⏸":"▶"}),r.length>1&&We.jsx("button",{onClick:Ce,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"0 2px",opacity:.6},children:"⏭"}),We.jsxs("div",{style:{flex:1,minWidth:0,marginLeft:4},children:[We.jsx("div",{style:{fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:600},children:w}),We.jsxs("div",{style:{fontSize:9,opacity:.35},children:["Track ",c+1," of ",r.length]})]})]}),We.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"},children:[We.jsxs("div",{style:{background:"rgba(0,0,0,0.78)",backdropFilter:"blur(12px)",borderRadius:14,padding:"12px 18px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.05)",minWidth:90},children:[We.jsx("div",{style:{fontSize:32,fontWeight:700,fontFamily:"monospace",color:M>80?"#ff6b6b":"#4ade80"},children:M}),We.jsx("div",{style:{fontSize:10,opacity:.35,letterSpacing:2},children:"MPH"})]}),We.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:b,i:F})=>We.jsx("button",{onClick:()=>v(b),style:{background:m===b?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:16,cursor:"pointer"},children:F},b))}),We.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:b,i:F,l:L})=>We.jsxs("button",{onClick:()=>x(b),style:{background:_===b?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[We.jsx("span",{style:{fontSize:16},children:F}),L]},b))})]}),We.jsx("div",{style:{position:"absolute",bottom:12,right:16,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(12px)",borderRadius:10,padding:"8px 12px",color:"#fff",border:"1px solid rgba(255,255,255,0.04)"},children:We.jsxs("div",{style:{fontSize:11,opacity:.4,lineHeight:1.6},children:[We.jsx("span",{style:{color:"#4ade80"},children:"SHIFT"})," go · ",We.jsx("span",{style:{color:"#fbbf24"},children:"SPACE"})," brake · ",We.jsx("span",{style:{color:"#60a5fa"},children:"A/D"})," steer"]})})]})]})}function PE(){return We.jsx(bE,{})}Mv.createRoot(document.getElementById("root")).render(We.jsx(pv.StrictMode,{children:We.jsx(PE,{})}));
