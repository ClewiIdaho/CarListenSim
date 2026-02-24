(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function m0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var jc={exports:{}},_a={},qc={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Av(){if($p)return Tt;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(k,fe,We){this.props=k,this.context=fe,this.refs=T,this.updater=We||M}y.prototype.isReactComponent={},y.prototype.setState=function(k,fe){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,fe,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(k,fe,We){this.props=k,this.context=fe,this.refs=T,this.updater=We||M}var L=D.prototype=new g;L.constructor=D,E(L,y.prototype),L.isPureReactComponent=!0;var b=Array.isArray,K=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(k,fe,We){var re,ye={},Ie=null,Re=null;if(fe!=null)for(re in fe.ref!==void 0&&(Re=fe.ref),fe.key!==void 0&&(Ie=""+fe.key),fe)K.call(fe,re)&&!F.hasOwnProperty(re)&&(ye[re]=fe[re]);var Be=arguments.length-2;if(Be===1)ye.children=We;else if(1<Be){for(var Xe=Array(Be),lt=0;lt<Be;lt++)Xe[lt]=arguments[lt+2];ye.children=Xe}if(k&&k.defaultProps)for(re in Be=k.defaultProps,Be)ye[re]===void 0&&(ye[re]=Be[re]);return{$$typeof:s,type:k,key:Ie,ref:Re,props:ye,_owner:z.current}}function P(k,fe){return{$$typeof:s,type:k.type,key:fe,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function V(k){var fe={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(We){return fe[We]})}var le=/\/+/g;function ee(k,fe){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):fe.toString(36)}function ve(k,fe,We,re,ye){var Ie=typeof k;(Ie==="undefined"||Ie==="boolean")&&(k=null);var Re=!1;if(k===null)Re=!0;else switch(Ie){case"string":case"number":Re=!0;break;case"object":switch(k.$$typeof){case s:case e:Re=!0}}if(Re)return Re=k,ye=ye(Re),k=re===""?"."+ee(Re,0):re,b(ye)?(We="",k!=null&&(We=k.replace(le,"$&/")+"/"),ve(ye,fe,We,"",function(lt){return lt})):ye!=null&&(C(ye)&&(ye=P(ye,We+(!ye.key||Re&&Re.key===ye.key?"":(""+ye.key).replace(le,"$&/")+"/")+k)),fe.push(ye)),1;if(Re=0,re=re===""?".":re+":",b(k))for(var Be=0;Be<k.length;Be++){Ie=k[Be];var Xe=re+ee(Ie,Be);Re+=ve(Ie,fe,We,Xe,ye)}else if(Xe=x(k),typeof Xe=="function")for(k=Xe.call(k),Be=0;!(Ie=k.next()).done;)Ie=Ie.value,Xe=re+ee(Ie,Be++),Re+=ve(Ie,fe,We,Xe,ye);else if(Ie==="object")throw fe=String(k),Error("Objects are not valid as a React child (found: "+(fe==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":fe)+"). If you meant to render a collection of children, use an array instead.");return Re}function xe(k,fe,We){if(k==null)return k;var re=[],ye=0;return ve(k,re,"","",function(Ie){return fe.call(We,Ie,ye++)}),re}function pe(k){if(k._status===-1){var fe=k._result;fe=fe(),fe.then(function(We){(k._status===0||k._status===-1)&&(k._status=1,k._result=We)},function(We){(k._status===0||k._status===-1)&&(k._status=2,k._result=We)}),k._status===-1&&(k._status=0,k._result=fe)}if(k._status===1)return k._result.default;throw k._result}var he={current:null},W={transition:null},_e={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:W,ReactCurrentOwner:z};function ge(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:xe,forEach:function(k,fe,We){xe(k,function(){fe.apply(this,arguments)},We)},count:function(k){var fe=0;return xe(k,function(){fe++}),fe},toArray:function(k){return xe(k,function(fe){return fe})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Tt.Component=y,Tt.Fragment=n,Tt.Profiler=a,Tt.PureComponent=D,Tt.StrictMode=r,Tt.Suspense=h,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Tt.act=ge,Tt.cloneElement=function(k,fe,We){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var re=E({},k.props),ye=k.key,Ie=k.ref,Re=k._owner;if(fe!=null){if(fe.ref!==void 0&&(Ie=fe.ref,Re=z.current),fe.key!==void 0&&(ye=""+fe.key),k.type&&k.type.defaultProps)var Be=k.type.defaultProps;for(Xe in fe)K.call(fe,Xe)&&!F.hasOwnProperty(Xe)&&(re[Xe]=fe[Xe]===void 0&&Be!==void 0?Be[Xe]:fe[Xe])}var Xe=arguments.length-2;if(Xe===1)re.children=We;else if(1<Xe){Be=Array(Xe);for(var lt=0;lt<Xe;lt++)Be[lt]=arguments[lt+2];re.children=Be}return{$$typeof:s,type:k.type,key:ye,ref:Ie,props:re,_owner:Re}},Tt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Tt.createElement=G,Tt.createFactory=function(k){var fe=G.bind(null,k);return fe.type=k,fe},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(k){return{$$typeof:d,render:k}},Tt.isValidElement=C,Tt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:pe}},Tt.memo=function(k,fe){return{$$typeof:m,type:k,compare:fe===void 0?null:fe}},Tt.startTransition=function(k){var fe=W.transition;W.transition={};try{k()}finally{W.transition=fe}},Tt.unstable_act=ge,Tt.useCallback=function(k,fe){return he.current.useCallback(k,fe)},Tt.useContext=function(k){return he.current.useContext(k)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(k){return he.current.useDeferredValue(k)},Tt.useEffect=function(k,fe){return he.current.useEffect(k,fe)},Tt.useId=function(){return he.current.useId()},Tt.useImperativeHandle=function(k,fe,We){return he.current.useImperativeHandle(k,fe,We)},Tt.useInsertionEffect=function(k,fe){return he.current.useInsertionEffect(k,fe)},Tt.useLayoutEffect=function(k,fe){return he.current.useLayoutEffect(k,fe)},Tt.useMemo=function(k,fe){return he.current.useMemo(k,fe)},Tt.useReducer=function(k,fe,We){return he.current.useReducer(k,fe,We)},Tt.useRef=function(k){return he.current.useRef(k)},Tt.useState=function(k){return he.current.useState(k)},Tt.useSyncExternalStore=function(k,fe,We){return he.current.useSyncExternalStore(k,fe,We)},Tt.useTransition=function(){return he.current.useTransition()},Tt.version="18.3.1",Tt}var Kp;function yd(){return Kp||(Kp=1,qc.exports=Av()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Cv(){if(Zp)return _a;Zp=1;var s=yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var _,v={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:M,props:v,_owner:a.current}}return _a.Fragment=n,_a.jsx=c,_a.jsxs=c,_a}var Qp;function Rv(){return Qp||(Qp=1,jc.exports=Cv()),jc.exports}var qe=Rv(),Ft=yd();const bv=m0(Ft);var Ul={},Yc={exports:{}},li={},$c={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Pv(){return Jp||(Jp=1,(function(s){function e(W,_e){var ge=W.length;W.push(_e);e:for(;0<ge;){var k=ge-1>>>1,fe=W[k];if(0<a(fe,_e))W[k]=_e,W[ge]=fe,ge=k;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var _e=W[0],ge=W.pop();if(ge!==_e){W[0]=ge;e:for(var k=0,fe=W.length,We=fe>>>1;k<We;){var re=2*(k+1)-1,ye=W[re],Ie=re+1,Re=W[Ie];if(0>a(ye,ge))Ie<fe&&0>a(Re,ye)?(W[k]=Re,W[Ie]=ge,k=Ie):(W[k]=ye,W[re]=ge,k=re);else if(Ie<fe&&0>a(Re,ge))W[k]=Re,W[Ie]=ge,k=Ie;else break e}}return _e}function a(W,_e){var ge=W.sortIndex-_e.sortIndex;return ge!==0?ge:W.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],_=1,v=null,x=3,M=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(W){for(var _e=n(m);_e!==null;){if(_e.callback===null)r(m);else if(_e.startTime<=W)r(m),_e.sortIndex=_e.expirationTime,e(h,_e);else break;_e=n(m)}}function b(W){if(T=!1,L(W),!E)if(n(h)!==null)E=!0,pe(K);else{var _e=n(m);_e!==null&&he(b,_e.startTime-W)}}function K(W,_e){E=!1,T&&(T=!1,g(G),G=-1),M=!0;var ge=x;try{for(L(_e),v=n(h);v!==null&&(!(v.expirationTime>_e)||W&&!V());){var k=v.callback;if(typeof k=="function"){v.callback=null,x=v.priorityLevel;var fe=k(v.expirationTime<=_e);_e=s.unstable_now(),typeof fe=="function"?v.callback=fe:v===n(h)&&r(h),L(_e)}else r(h);v=n(h)}if(v!==null)var We=!0;else{var re=n(m);re!==null&&he(b,re.startTime-_e),We=!1}return We}finally{v=null,x=ge,M=!1}}var z=!1,F=null,G=-1,P=5,C=-1;function V(){return!(s.unstable_now()-C<P)}function le(){if(F!==null){var W=s.unstable_now();C=W;var _e=!0;try{_e=F(!0,W)}finally{_e?ee():(z=!1,F=null)}}else z=!1}var ee;if(typeof D=="function")ee=function(){D(le)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,xe=ve.port2;ve.port1.onmessage=le,ee=function(){xe.postMessage(null)}}else ee=function(){y(le,0)};function pe(W){F=W,z||(z=!0,ee())}function he(W,_e){G=y(function(){W(s.unstable_now())},_e)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,pe(K))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(W){switch(x){case 1:case 2:case 3:var _e=3;break;default:_e=x}var ge=x;x=_e;try{return W()}finally{x=ge}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,_e){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ge=x;x=W;try{return _e()}finally{x=ge}},s.unstable_scheduleCallback=function(W,_e,ge){var k=s.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?k+ge:k):ge=k,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ge+fe,W={id:_++,callback:_e,priorityLevel:W,startTime:ge,expirationTime:fe,sortIndex:-1},ge>k?(W.sortIndex=ge,e(m,W),n(h)===null&&W===n(m)&&(T?(g(G),G=-1):T=!0,he(b,ge-k))):(W.sortIndex=fe,e(h,W),E||M||(E=!0,pe(K))),W},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(W){var _e=x;return function(){var ge=x;x=_e;try{return W.apply(this,arguments)}finally{x=ge}}}})(Kc)),Kc}var em;function Lv(){return em||(em=1,$c.exports=Pv()),$c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Dv(){if(tm)return li;tm=1;var s=yd(),e=Lv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,u){if(i===null||typeof i>"u"||M(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,u,f,p,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),W=Symbol.iterator;function _e(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,k;function fe(t){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var We=!1;function re(t,i){if(!t||We)return"";We=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var u=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){u=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){u=ce}t()}}catch(ce){if(ce&&u&&typeof ce.stack=="string"){for(var f=ce.stack.split(`
`),p=u.stack.split(`
`),S=f.length-1,N=p.length-1;1<=S&&0<=N&&f[S]!==p[N];)N--;for(;1<=S&&0<=N;S--,N--)if(f[S]!==p[N]){if(S!==1||N!==1)do if(S--,N--,0>N||f[S]!==p[N]){var H=`
`+f[S].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=S&&0<=N);break}}}finally{We=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?fe(t):""}function ye(t){switch(t.tag){case 5:return fe(t.type);case 16:return fe("Lazy");case 13:return fe("Suspense");case 19:return fe("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function Ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case P:return"Profiler";case G:return"StrictMode";case ee:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xe:return i=t.displayName||null,i!==null?i:Ie(t.type)||"Memo";case pe:i=t._payload,t=t._init;try{return Ie(t(i))}catch{}}return null}function Re(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ie(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function lt(t){var i=Xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){u=""+S,p.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(S){u=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ot(t){t._valueTracker||(t._valueTracker=lt(t))}function St(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Xe(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Z(t,i){var o=i.checked;return ge({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Cn(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Be(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Et(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function _t(t,i){Et(t,i);var o=Be(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Nt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Nt(t,i.type,Be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function at(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Nt(t,i,o){(i!=="number"||Ht(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var rt=Array.isArray;function U(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Be(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ge({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ae(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(rt(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Be(o)}}function Ee(t,i){var o=Be(i.value),u=Be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Te(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Je(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var A,O=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(A=A||document.createElement("div"),A.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=A.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function I(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var X={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J=["Webkit","ms","Moz","O"];Object.keys(X).forEach(function(t){J.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),X[i]=X[t]})});function de(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||X.hasOwnProperty(t)&&X[t]?(""+i).trim():i+"px"}function se(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=de(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var we=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(t,i){if(i){if(we[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function He(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,ne=null,me=null;function ke(t){if(t=ia(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=$a(i),De(t.stateNode,t.type,i))}}function Oe(t){ne?me?me.push(t):me=[t]:ne=t}function ot(){if(ne){var t=ne,i=me;if(me=ne=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function te(t,i){return t(i)}function et(){}var je=!1;function It(t,i,o){if(je)return t(i,o);je=!0;try{return te(t,i,o)}finally{je=!1,(ne!==null||me!==null)&&(et(),ot())}}function Gt(t,i){var o=t.stateNode;if(o===null)return null;var u=$a(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Zn=!1;if(d)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){Zn=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{Zn=!1}function Rn(t,i,o,u,f,p,S,N,H){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(o,ce)}catch(Ce){this.onError(Ce)}}var Lt=!1,un=null,Qn=!1,qt=null,kr={onError:function(t){Lt=!0,un=t}};function Hn(t,i,o,u,f,p,S,N,H){Lt=!1,un=null,Rn.apply(kr,arguments)}function cr(t,i,o,u,f,p,S,N,H){if(Hn.apply(this,arguments),Lt){if(Lt){var ce=un;Lt=!1,un=null}else throw Error(n(198));Qn||(Qn=!0,qt=ce)}}function Ei(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Bs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function fr(t){if(Ei(t)!==t)throw Error(n(188))}function Jn(t){var i=t.alternate;if(!i){if(i=Ei(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return fr(f),t;if(p===u)return fr(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=p;else{for(var S=!1,N=f.child;N;){if(N===o){S=!0,o=f,u=p;break}if(N===u){S=!0,u=f,o=p;break}N=N.sibling}if(!S){for(N=p.child;N;){if(N===o){S=!0,o=p,u=f;break}if(N===u){S=!0,u=p,o=f;break}N=N.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function R(t){return t=Jn(t),t!==null?$(t):null}function $(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=$(t);if(i!==null)return i;t=t.sibling}return null}var ue=e.unstable_scheduleCallback,oe=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Ne=e.unstable_requestPaint,Pe=e.unstable_now,Ke=e.unstable_getCurrentPriorityLevel,Ye=e.unstable_ImmediatePriority,ft=e.unstable_UserBlockingPriority,dt=e.unstable_NormalPriority,Ze=e.unstable_LowPriority,wt=e.unstable_IdlePriority,bt=null,yt=null;function pn(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Ct,tt=Math.log,Dn=Math.LN2;function Ct(t){return t>>>=0,t===0?32:31-(tt(t)/Dn|0)|0}var mn=64,ei=4194304;function tn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hi(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,S=o&268435455;if(S!==0){var N=S&~f;N!==0?u=tn(N):(p&=S,p!==0&&(u=tn(p)))}else S=o&~f,S!==0?u=tn(S):p!==0&&(u=tn(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-vt(i),f=1<<o,u|=t[o],i&=~f;return u}function zt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var S=31-vt(p),N=1<<S,H=f[S];H===-1?((N&o)===0||(N&u)!==0)&&(f[S]=zt(N,i)):H<=i&&(t.expiredLanes|=N),p&=~N}}function ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yn(){var t=mn;return mn<<=1,(mn&4194240)===0&&(mn=64),t}function In(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-vt(i),t[i]=o}function fs(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-vt(o),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~p}}function Vs(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-vt(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var ht=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Go,dr,Ji,Oa,Wo,Hs=!1,hr=[],wi=null,Gn=null,ni=null,mi=new Map,Br=new Map,Ni=[],za="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(t,i){switch(t){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":mi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(i.pointerId)}}function Un(t,i,o,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ia(i),i!==null&&dr(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function ka(t,i,o,u,f){switch(i){case"focusin":return wi=Un(wi,t,i,o,u,f),!0;case"dragenter":return Gn=Un(Gn,t,i,o,u,f),!0;case"mouseover":return ni=Un(ni,t,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return mi.set(p,Un(mi.get(p)||null,t,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Br.set(p,Un(Br.get(p)||null,t,i,o,u,f)),!0}return!1}function er(t){var i=gs(t.target);if(i!==null){var o=Ei(i);if(o!==null){if(i=o.tag,i===13){if(i=Bs(o),i!==null){t.blockedOn=i,Wo(t.priority,function(){Ji(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gs(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=mr(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);st=u,o.target.dispatchEvent(u),st=null}else return i=ia(o),i!==null&&dr(i),t.blockedOn=o,!1;i.shift()}return!0}function Ba(t,i,o){Gs(t)&&o.delete(i)}function Ws(){Hs=!1,wi!==null&&Gs(wi)&&(wi=null),Gn!==null&&Gs(Gn)&&(Gn=null),ni!==null&&Gs(ni)&&(ni=null),mi.forEach(Ba),Br.forEach(Ba)}function rn(t,i){t.blockedOn===i&&(t.blockedOn=null,Hs||(Hs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ws)))}function tr(t){function i(f){return rn(f,t)}if(0<hr.length){rn(hr[0],t);for(var o=1;o<hr.length;o++){var u=hr[o];u.blockedOn===t&&(u.blockedOn=null)}}for(wi!==null&&rn(wi,t),Gn!==null&&rn(Gn,t),ni!==null&&rn(ni,t),mi.forEach(i),Br.forEach(i),o=0;o<Ni.length;o++)u=Ni[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Ni.length&&(o=Ni[0],o.blockedOn===null);)er(o),o.blockedOn===null&&Ni.shift()}var Fi=b.ReactCurrentBatchConfig,Oi=!0;function Eu(t,i,o,u){var f=ht,p=Fi.transition;Fi.transition=null;try{ht=1,pr(t,i,o,u)}finally{ht=f,Fi.transition=p}}function Va(t,i,o,u){var f=ht,p=Fi.transition;Fi.transition=null;try{ht=4,pr(t,i,o,u)}finally{ht=f,Fi.transition=p}}function pr(t,i,o,u){if(Oi){var f=mr(t,i,o,u);if(f===null)Fu(t,i,u,ds,o),Xo(t,u);else if(ka(f,t,i,o,u))u.stopPropagation();else if(Xo(t,u),i&4&&-1<za.indexOf(t)){for(;f!==null;){var p=ia(f);if(p!==null&&Go(p),p=mr(t,i,o,u),p===null&&Fu(t,i,u,ds,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Fu(t,i,u,null,o)}}var ds=null;function mr(t,i,o,u){if(ds=null,t=B(u),t=gs(t),t!==null)if(i=Ei(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Bs(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ds=t,null}function jo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case Ye:return 1;case ft:return 4;case dt:case Ze:return 16;case wt:return 536870912;default:return 16}default:return 16}}var zi=null,Xs=null,nr=null;function Vr(){if(nr)return nr;var t,i=Xs,o=i.length,u,f="value"in zi?zi.value:zi.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(u=1;u<=S&&i[o-u]===f[p-u];u++);return nr=f.slice(t,1<u?1-u:void 0)}function hs(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ps(){return!0}function qo(){return!1}function Wn(t){function i(o,u,f,p,S){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ps:qo,this.isPropagationStopped=qo,this}return ge(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),i}var Se={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ue=Wn(Se),At=ge({},Se,{view:0,detail:0}),kt=Wn(At),Qt,ki,Ti,ms=ge({},At,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Qt=t.screenX-Ti.screenX,ki=t.screenY-Ti.screenY):ki=Qt=0,Ti=t),Qt)},movementY:function(t){return"movementY"in t?t.movementY:ki}}),zd=Wn(ms),eg=ge({},ms,{dataTransfer:0}),tg=Wn(eg),ng=ge({},At,{relatedTarget:0}),wu=Wn(ng),ig=ge({},Se,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Wn(ig),sg=ge({},Se,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=Wn(sg),ag=ge({},Se,{data:0}),kd=Wn(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=cg[t])?!!i[t]:!1}function Tu(){return fg}var dg=ge({},At,{key:function(t){if(t.key){var i=lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=hs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?hs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hg=Wn(dg),pg=ge({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Wn(pg),mg=ge({},At,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),gg=Wn(mg),vg=ge({},Se,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Wn(vg),xg=ge({},ms,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Wn(xg),Mg=[9,13,27,32],Au=d&&"CompositionEvent"in window,Yo=null;d&&"documentMode"in document&&(Yo=document.documentMode);var Sg=d&&"TextEvent"in window&&!Yo,Vd=d&&(!Au||Yo&&8<Yo&&11>=Yo),Hd=" ",Gd=!1;function Wd(t,i){switch(t){case"keyup":return Mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function Eg(t,i){switch(t){case"compositionend":return Xd(i);case"keypress":return i.which!==32?null:(Gd=!0,Hd);case"textInput":return t=i.data,t===Hd&&Gd?null:t;default:return null}}function wg(t,i){if(js)return t==="compositionend"||!Au&&Wd(t,i)?(t=Vr(),nr=Xs=zi=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vd&&i.locale!=="ko"?null:i.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Tg[t.type]:i==="textarea"}function qd(t,i,o,u){Oe(u),i=ja(i,"onChange"),0<i.length&&(o=new Ue("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var $o=null,Ko=null;function Ag(t){fh(t,0)}function Ha(t){var i=Zs(t);if(St(i))return t}function Cg(t,i){if(t==="change")return i}var Yd=!1;if(d){var Cu;if(d){var Ru="oninput"in document;if(!Ru){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Ru=typeof $d.oninput=="function"}Cu=Ru}else Cu=!1;Yd=Cu&&(!document.documentMode||9<document.documentMode)}function Kd(){$o&&($o.detachEvent("onpropertychange",Zd),Ko=$o=null)}function Zd(t){if(t.propertyName==="value"&&Ha(Ko)){var i=[];qd(i,Ko,t,B(t)),It(Ag,i)}}function Rg(t,i,o){t==="focusin"?(Kd(),$o=i,Ko=o,$o.attachEvent("onpropertychange",Zd)):t==="focusout"&&Kd()}function bg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ha(Ko)}function Pg(t,i){if(t==="click")return Ha(i)}function Lg(t,i){if(t==="input"||t==="change")return Ha(i)}function Dg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Bi=typeof Object.is=="function"?Object.is:Dg;function Zo(t,i){if(Bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!Bi(t[f],i[f]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jd(t,i){var o=Qd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function eh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?eh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function th(){for(var t=window,i=Ht();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ht(t.document)}return i}function bu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ig(t){var i=th(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(u!==null&&bu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=Jd(o,p);var S=Jd(o,u);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ug=d&&"documentMode"in document&&11>=document.documentMode,qs=null,Pu=null,Qo=null,Lu=!1;function nh(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Lu||qs==null||qs!==Ht(u)||(u=qs,"selectionStart"in u&&bu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Qo&&Zo(Qo,u)||(Qo=u,u=ja(Pu,"onSelect"),0<u.length&&(i=new Ue("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=qs)))}function Ga(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ys={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Du={},ih={};d&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Wa(t){if(Du[t])return Du[t];if(!Ys[t])return t;var i=Ys[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ih)return Du[t]=i[o];return t}var rh=Wa("animationend"),sh=Wa("animationiteration"),oh=Wa("animationstart"),ah=Wa("transitionend"),lh=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,i){lh.set(t,i),l(i,[t])}for(var Iu=0;Iu<uh.length;Iu++){var Uu=uh[Iu],Ng=Uu.toLowerCase(),Fg=Uu[0].toUpperCase()+Uu.slice(1);Hr(Ng,"on"+Fg)}Hr(rh,"onAnimationEnd"),Hr(sh,"onAnimationIteration"),Hr(oh,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function ch(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,cr(u,i,void 0,t),t.currentTarget=null}function fh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var S=u.length-1;0<=S;S--){var N=u[S],H=N.instance,ce=N.currentTarget;if(N=N.listener,H!==p&&f.isPropagationStopped())break e;ch(f,N,ce),p=H}else for(S=0;S<u.length;S++){if(N=u[S],H=N.instance,ce=N.currentTarget,N=N.listener,H!==p&&f.isPropagationStopped())break e;ch(f,N,ce),p=H}}}if(Qn)throw t=qt,Qn=!1,qt=null,t}function Yt(t,i){var o=i[Hu];o===void 0&&(o=i[Hu]=new Set);var u=t+"__bubble";o.has(u)||(dh(i,t,2,!1),o.add(u))}function Nu(t,i,o){var u=0;i&&(u|=4),dh(o,t,u,i)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ea(t){if(!t[Xa]){t[Xa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Og.has(o)||Nu(o,!1,t),Nu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Xa]||(i[Xa]=!0,Nu("selectionchange",!1,i))}}function dh(t,i,o,u){switch(jo(i)){case 1:var f=Eu;break;case 4:f=Va;break;default:f=pr}o=f.bind(null,i,o,t),f=void 0,!Zn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Fu(t,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var S=u.tag;if(S===3||S===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(S===4)for(S=u.return;S!==null;){var H=S.tag;if((H===3||H===4)&&(H=S.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;S=S.return}for(;N!==null;){if(S=gs(N),S===null)return;if(H=S.tag,H===5||H===6){u=p=S;continue e}N=N.parentNode}}u=u.return}It(function(){var ce=p,Ce=B(o),Le=[];e:{var Ae=lh.get(t);if(Ae!==void 0){var Ge=Ue,Qe=t;switch(t){case"keypress":if(hs(o)===0)break e;case"keydown":case"keyup":Ge=hg;break;case"focusin":Qe="focus",Ge=wu;break;case"focusout":Qe="blur",Ge=wu;break;case"beforeblur":case"afterblur":Ge=wu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=gg;break;case rh:case sh:case oh:Ge=rg;break;case ah:Ge=_g;break;case"scroll":Ge=kt;break;case"wheel":Ge=yg;break;case"copy":case"cut":case"paste":Ge=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Bd}var nt=(i&4)!==0,on=!nt&&t==="scroll",Q=nt?Ae!==null?Ae+"Capture":null:Ae;nt=[];for(var j=ce,ie;j!==null;){ie=j;var Fe=ie.stateNode;if(ie.tag===5&&Fe!==null&&(ie=Fe,Q!==null&&(Fe=Gt(j,Q),Fe!=null&&nt.push(ta(j,Fe,ie)))),on)break;j=j.return}0<nt.length&&(Ae=new Ge(Ae,Qe,null,o,Ce),Le.push({event:Ae,listeners:nt}))}}if((i&7)===0){e:{if(Ae=t==="mouseover"||t==="pointerover",Ge=t==="mouseout"||t==="pointerout",Ae&&o!==st&&(Qe=o.relatedTarget||o.fromElement)&&(gs(Qe)||Qe[gr]))break e;if((Ge||Ae)&&(Ae=Ce.window===Ce?Ce:(Ae=Ce.ownerDocument)?Ae.defaultView||Ae.parentWindow:window,Ge?(Qe=o.relatedTarget||o.toElement,Ge=ce,Qe=Qe?gs(Qe):null,Qe!==null&&(on=Ei(Qe),Qe!==on||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Ge=null,Qe=ce),Ge!==Qe)){if(nt=zd,Fe="onMouseLeave",Q="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Bd,Fe="onPointerLeave",Q="onPointerEnter",j="pointer"),on=Ge==null?Ae:Zs(Ge),ie=Qe==null?Ae:Zs(Qe),Ae=new nt(Fe,j+"leave",Ge,o,Ce),Ae.target=on,Ae.relatedTarget=ie,Fe=null,gs(Ce)===ce&&(nt=new nt(Q,j+"enter",Qe,o,Ce),nt.target=ie,nt.relatedTarget=on,Fe=nt),on=Fe,Ge&&Qe)t:{for(nt=Ge,Q=Qe,j=0,ie=nt;ie;ie=$s(ie))j++;for(ie=0,Fe=Q;Fe;Fe=$s(Fe))ie++;for(;0<j-ie;)nt=$s(nt),j--;for(;0<ie-j;)Q=$s(Q),ie--;for(;j--;){if(nt===Q||Q!==null&&nt===Q.alternate)break t;nt=$s(nt),Q=$s(Q)}nt=null}else nt=null;Ge!==null&&hh(Le,Ae,Ge,nt,!1),Qe!==null&&on!==null&&hh(Le,on,Qe,nt,!0)}}e:{if(Ae=ce?Zs(ce):window,Ge=Ae.nodeName&&Ae.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Ae.type==="file")var it=Cg;else if(jd(Ae))if(Yd)it=Lg;else{it=bg;var ut=Rg}else(Ge=Ae.nodeName)&&Ge.toLowerCase()==="input"&&(Ae.type==="checkbox"||Ae.type==="radio")&&(it=Pg);if(it&&(it=it(t,ce))){qd(Le,it,o,Ce);break e}ut&&ut(t,Ae,ce),t==="focusout"&&(ut=Ae._wrapperState)&&ut.controlled&&Ae.type==="number"&&Nt(Ae,"number",Ae.value)}switch(ut=ce?Zs(ce):window,t){case"focusin":(jd(ut)||ut.contentEditable==="true")&&(qs=ut,Pu=ce,Qo=null);break;case"focusout":Qo=Pu=qs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,nh(Le,o,Ce);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":nh(Le,o,Ce)}var ct;if(Au)e:{switch(t){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else js?Wd(t,o)&&(gt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(Vd&&o.locale!=="ko"&&(js||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&js&&(ct=Vr()):(zi=Ce,Xs="value"in zi?zi.value:zi.textContent,js=!0)),ut=ja(ce,gt),0<ut.length&&(gt=new kd(gt,t,null,o,Ce),Le.push({event:gt,listeners:ut}),ct?gt.data=ct:(ct=Xd(o),ct!==null&&(gt.data=ct)))),(ct=Sg?Eg(t,o):wg(t,o))&&(ce=ja(ce,"onBeforeInput"),0<ce.length&&(Ce=new kd("onBeforeInput","beforeinput",null,o,Ce),Le.push({event:Ce,listeners:ce}),Ce.data=ct))}fh(Le,i)})}function ta(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ja(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Gt(t,o),p!=null&&u.unshift(ta(t,p,f)),p=Gt(t,i),p!=null&&u.push(ta(t,p,f))),t=t.return}return u}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hh(t,i,o,u,f){for(var p=i._reactName,S=[];o!==null&&o!==u;){var N=o,H=N.alternate,ce=N.stateNode;if(H!==null&&H===u)break;N.tag===5&&ce!==null&&(N=ce,f?(H=Gt(o,p),H!=null&&S.unshift(ta(o,H,N))):f||(H=Gt(o,p),H!=null&&S.push(ta(o,H,N)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var zg=/\r\n?/g,kg=/\u0000|\uFFFD/g;function ph(t){return(typeof t=="string"?t:""+t).replace(zg,`
`).replace(kg,"")}function qa(t,i,o){if(i=ph(i),ph(t)!==i&&o)throw Error(n(425))}function Ya(){}var Ou=null,zu=null;function ku(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(Hg)}:Bu;function Hg(t){setTimeout(function(){throw t})}function Vu(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),tr(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);tr(i)}function Gr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ir="__reactFiber$"+Ks,na="__reactProps$"+Ks,gr="__reactContainer$"+Ks,Hu="__reactEvents$"+Ks,Gg="__reactListeners$"+Ks,Wg="__reactHandles$"+Ks;function gs(t){var i=t[ir];if(i)return i;for(var o=t.parentNode;o;){if(i=o[gr]||o[ir]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=gh(t);t!==null;){if(o=t[ir])return o;t=gh(t)}return i}t=o,o=t.parentNode}return null}function ia(t){return t=t[ir]||t[gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function $a(t){return t[na]||null}var Gu=[],Qs=-1;function Wr(t){return{current:t}}function $t(t){0>Qs||(t.current=Gu[Qs],Gu[Qs]=null,Qs--)}function Xt(t,i){Qs++,Gu[Qs]=t.current,t.current=i}var Xr={},Nn=Wr(Xr),ii=Wr(!1),vs=Xr;function Js(t,i){var o=t.type.contextTypes;if(!o)return Xr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function ri(t){return t=t.childContextTypes,t!=null}function Ka(){$t(ii),$t(Nn)}function vh(t,i,o){if(Nn.current!==Xr)throw Error(n(168));Xt(Nn,i),Xt(ii,o)}function _h(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,Re(t)||"Unknown",f));return ge({},o,u)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,vs=Nn.current,Xt(Nn,t),Xt(ii,ii.current),!0}function xh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=_h(t,i,vs),u.__reactInternalMemoizedMergedChildContext=t,$t(ii),$t(Nn),Xt(Nn,t)):$t(ii),Xt(ii,o)}var vr=null,Qa=!1,Wu=!1;function yh(t){vr===null?vr=[t]:vr.push(t)}function Xg(t){Qa=!0,yh(t)}function jr(){if(!Wu&&vr!==null){Wu=!0;var t=0,i=ht;try{var o=vr;for(ht=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}vr=null,Qa=!1}catch(f){throw vr!==null&&(vr=vr.slice(t+1)),ue(Ye,jr),f}finally{ht=i,Wu=!1}}return null}var eo=[],to=0,Ja=null,el=0,Ai=[],Ci=0,_s=null,_r=1,xr="";function xs(t,i){eo[to++]=el,eo[to++]=Ja,Ja=t,el=i}function Mh(t,i,o){Ai[Ci++]=_r,Ai[Ci++]=xr,Ai[Ci++]=_s,_s=t;var u=_r;t=xr;var f=32-vt(u)-1;u&=~(1<<f),o+=1;var p=32-vt(i)+f;if(30<p){var S=f-f%5;p=(u&(1<<S)-1).toString(32),u>>=S,f-=S,_r=1<<32-vt(i)+f|o<<f|u,xr=p+t}else _r=1<<p|o<<f|u,xr=t}function Xu(t){t.return!==null&&(xs(t,1),Mh(t,1,0))}function ju(t){for(;t===Ja;)Ja=eo[--to],eo[to]=null,el=eo[--to],eo[to]=null;for(;t===_s;)_s=Ai[--Ci],Ai[Ci]=null,xr=Ai[--Ci],Ai[Ci]=null,_r=Ai[--Ci],Ai[Ci]=null}var gi=null,vi=null,Zt=!1,Vi=null;function Sh(t,i){var o=Li(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,gi=t,vi=Gr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,gi=t,vi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=_s!==null?{id:_r,overflow:xr}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Li(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,gi=t,vi=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(Zt){var i=vi;if(i){var o=i;if(!Eh(t,i)){if(qu(t))throw Error(n(418));i=Gr(o.nextSibling);var u=gi;i&&Eh(t,i)?Sh(u,o):(t.flags=t.flags&-4097|2,Zt=!1,gi=t)}}else{if(qu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Zt=!1,gi=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gi=t}function tl(t){if(t!==gi)return!1;if(!Zt)return wh(t),Zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ku(t.type,t.memoizedProps)),i&&(i=vi)){if(qu(t))throw Th(),Error(n(418));for(;i;)Sh(t,i),i=Gr(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){vi=Gr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}vi=null}}else vi=gi?Gr(t.stateNode.nextSibling):null;return!0}function Th(){for(var t=vi;t;)t=Gr(t.nextSibling)}function no(){vi=gi=null,Zt=!1}function $u(t){Vi===null?Vi=[t]:Vi.push(t)}var jg=b.ReactCurrentBatchConfig;function ra(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(S){var N=f.refs;S===null?delete N[p]:N[p]=S},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function nl(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ah(t){var i=t._init;return i(t._payload)}function Ch(t){function i(Q,j){if(t){var ie=Q.deletions;ie===null?(Q.deletions=[j],Q.flags|=16):ie.push(j)}}function o(Q,j){if(!t)return null;for(;j!==null;)i(Q,j),j=j.sibling;return null}function u(Q,j){for(Q=new Map;j!==null;)j.key!==null?Q.set(j.key,j):Q.set(j.index,j),j=j.sibling;return Q}function f(Q,j){return Q=es(Q,j),Q.index=0,Q.sibling=null,Q}function p(Q,j,ie){return Q.index=ie,t?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<j?(Q.flags|=2,j):ie):(Q.flags|=2,j)):(Q.flags|=1048576,j)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function N(Q,j,ie,Fe){return j===null||j.tag!==6?(j=Bc(ie,Q.mode,Fe),j.return=Q,j):(j=f(j,ie),j.return=Q,j)}function H(Q,j,ie,Fe){var it=ie.type;return it===F?Ce(Q,j,ie.props.children,Fe,ie.key):j!==null&&(j.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&Ah(it)===j.type)?(Fe=f(j,ie.props),Fe.ref=ra(Q,j,ie),Fe.return=Q,Fe):(Fe=Al(ie.type,ie.key,ie.props,null,Q.mode,Fe),Fe.ref=ra(Q,j,ie),Fe.return=Q,Fe)}function ce(Q,j,ie,Fe){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Vc(ie,Q.mode,Fe),j.return=Q,j):(j=f(j,ie.children||[]),j.return=Q,j)}function Ce(Q,j,ie,Fe,it){return j===null||j.tag!==7?(j=Cs(ie,Q.mode,Fe,it),j.return=Q,j):(j=f(j,ie),j.return=Q,j)}function Le(Q,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Bc(""+j,Q.mode,ie),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return ie=Al(j.type,j.key,j.props,null,Q.mode,ie),ie.ref=ra(Q,null,j),ie.return=Q,ie;case z:return j=Vc(j,Q.mode,ie),j.return=Q,j;case pe:var Fe=j._init;return Le(Q,Fe(j._payload),ie)}if(rt(j)||_e(j))return j=Cs(j,Q.mode,ie,null),j.return=Q,j;nl(Q,j)}return null}function Ae(Q,j,ie,Fe){var it=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return it!==null?null:N(Q,j,""+ie,Fe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case K:return ie.key===it?H(Q,j,ie,Fe):null;case z:return ie.key===it?ce(Q,j,ie,Fe):null;case pe:return it=ie._init,Ae(Q,j,it(ie._payload),Fe)}if(rt(ie)||_e(ie))return it!==null?null:Ce(Q,j,ie,Fe,null);nl(Q,ie)}return null}function Ge(Q,j,ie,Fe,it){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return Q=Q.get(ie)||null,N(j,Q,""+Fe,it);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case K:return Q=Q.get(Fe.key===null?ie:Fe.key)||null,H(j,Q,Fe,it);case z:return Q=Q.get(Fe.key===null?ie:Fe.key)||null,ce(j,Q,Fe,it);case pe:var ut=Fe._init;return Ge(Q,j,ie,ut(Fe._payload),it)}if(rt(Fe)||_e(Fe))return Q=Q.get(ie)||null,Ce(j,Q,Fe,it,null);nl(j,Fe)}return null}function Qe(Q,j,ie,Fe){for(var it=null,ut=null,ct=j,gt=j=0,En=null;ct!==null&&gt<ie.length;gt++){ct.index>gt?(En=ct,ct=null):En=ct.sibling;var Ut=Ae(Q,ct,ie[gt],Fe);if(Ut===null){ct===null&&(ct=En);break}t&&ct&&Ut.alternate===null&&i(Q,ct),j=p(Ut,j,gt),ut===null?it=Ut:ut.sibling=Ut,ut=Ut,ct=En}if(gt===ie.length)return o(Q,ct),Zt&&xs(Q,gt),it;if(ct===null){for(;gt<ie.length;gt++)ct=Le(Q,ie[gt],Fe),ct!==null&&(j=p(ct,j,gt),ut===null?it=ct:ut.sibling=ct,ut=ct);return Zt&&xs(Q,gt),it}for(ct=u(Q,ct);gt<ie.length;gt++)En=Ge(ct,Q,gt,ie[gt],Fe),En!==null&&(t&&En.alternate!==null&&ct.delete(En.key===null?gt:En.key),j=p(En,j,gt),ut===null?it=En:ut.sibling=En,ut=En);return t&&ct.forEach(function(ts){return i(Q,ts)}),Zt&&xs(Q,gt),it}function nt(Q,j,ie,Fe){var it=_e(ie);if(typeof it!="function")throw Error(n(150));if(ie=it.call(ie),ie==null)throw Error(n(151));for(var ut=it=null,ct=j,gt=j=0,En=null,Ut=ie.next();ct!==null&&!Ut.done;gt++,Ut=ie.next()){ct.index>gt?(En=ct,ct=null):En=ct.sibling;var ts=Ae(Q,ct,Ut.value,Fe);if(ts===null){ct===null&&(ct=En);break}t&&ct&&ts.alternate===null&&i(Q,ct),j=p(ts,j,gt),ut===null?it=ts:ut.sibling=ts,ut=ts,ct=En}if(Ut.done)return o(Q,ct),Zt&&xs(Q,gt),it;if(ct===null){for(;!Ut.done;gt++,Ut=ie.next())Ut=Le(Q,Ut.value,Fe),Ut!==null&&(j=p(Ut,j,gt),ut===null?it=Ut:ut.sibling=Ut,ut=Ut);return Zt&&xs(Q,gt),it}for(ct=u(Q,ct);!Ut.done;gt++,Ut=ie.next())Ut=Ge(ct,Q,gt,Ut.value,Fe),Ut!==null&&(t&&Ut.alternate!==null&&ct.delete(Ut.key===null?gt:Ut.key),j=p(Ut,j,gt),ut===null?it=Ut:ut.sibling=Ut,ut=Ut);return t&&ct.forEach(function(Tv){return i(Q,Tv)}),Zt&&xs(Q,gt),it}function on(Q,j,ie,Fe){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case K:e:{for(var it=ie.key,ut=j;ut!==null;){if(ut.key===it){if(it=ie.type,it===F){if(ut.tag===7){o(Q,ut.sibling),j=f(ut,ie.props.children),j.return=Q,Q=j;break e}}else if(ut.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&Ah(it)===ut.type){o(Q,ut.sibling),j=f(ut,ie.props),j.ref=ra(Q,ut,ie),j.return=Q,Q=j;break e}o(Q,ut);break}else i(Q,ut);ut=ut.sibling}ie.type===F?(j=Cs(ie.props.children,Q.mode,Fe,ie.key),j.return=Q,Q=j):(Fe=Al(ie.type,ie.key,ie.props,null,Q.mode,Fe),Fe.ref=ra(Q,j,ie),Fe.return=Q,Q=Fe)}return S(Q);case z:e:{for(ut=ie.key;j!==null;){if(j.key===ut)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){o(Q,j.sibling),j=f(j,ie.children||[]),j.return=Q,Q=j;break e}else{o(Q,j);break}else i(Q,j);j=j.sibling}j=Vc(ie,Q.mode,Fe),j.return=Q,Q=j}return S(Q);case pe:return ut=ie._init,on(Q,j,ut(ie._payload),Fe)}if(rt(ie))return Qe(Q,j,ie,Fe);if(_e(ie))return nt(Q,j,ie,Fe);nl(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(o(Q,j.sibling),j=f(j,ie),j.return=Q,Q=j):(o(Q,j),j=Bc(ie,Q.mode,Fe),j.return=Q,Q=j),S(Q)):o(Q,j)}return on}var io=Ch(!0),Rh=Ch(!1),il=Wr(null),rl=null,ro=null,Ku=null;function Zu(){Ku=ro=rl=null}function Qu(t){var i=il.current;$t(il),t._currentValue=i}function Ju(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function so(t,i){rl=t,Ku=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(si=!0),t.firstContext=null)}function Ri(t){var i=t._currentValue;if(Ku!==t)if(t={context:t,memoizedValue:i,next:null},ro===null){if(rl===null)throw Error(n(308));ro=t,rl.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return i}var ys=null;function ec(t){ys===null?ys=[t]:ys.push(t)}function bh(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,ec(i)):(o.next=f.next,f.next=o),i.interleaved=o,yr(t,u)}function yr(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var qr=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Yr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Dt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,yr(t,o)}return f=u.interleaved,f===null?(i.next=i,ec(u)):(i.next=f.next,f.next=i),u.interleaved=i,yr(t,o)}function sl(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Vs(t,o)}}function Lh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=S:p=p.next=S,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ol(t,i,o,u){var f=t.updateQueue;qr=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var H=N,ce=H.next;H.next=null,S===null?p=ce:S.next=ce,S=H;var Ce=t.alternate;Ce!==null&&(Ce=Ce.updateQueue,N=Ce.lastBaseUpdate,N!==S&&(N===null?Ce.firstBaseUpdate=ce:N.next=ce,Ce.lastBaseUpdate=H))}if(p!==null){var Le=f.baseState;S=0,Ce=ce=H=null,N=p;do{var Ae=N.lane,Ge=N.eventTime;if((u&Ae)===Ae){Ce!==null&&(Ce=Ce.next={eventTime:Ge,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Qe=t,nt=N;switch(Ae=i,Ge=o,nt.tag){case 1:if(Qe=nt.payload,typeof Qe=="function"){Le=Qe.call(Ge,Le,Ae);break e}Le=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=nt.payload,Ae=typeof Qe=="function"?Qe.call(Ge,Le,Ae):Qe,Ae==null)break e;Le=ge({},Le,Ae);break e;case 2:qr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,Ae=f.effects,Ae===null?f.effects=[N]:Ae.push(N))}else Ge={eventTime:Ge,lane:Ae,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Ce===null?(ce=Ce=Ge,H=Le):Ce=Ce.next=Ge,S|=Ae;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Ae=N,N=Ae.next,Ae.next=null,f.lastBaseUpdate=Ae,f.shared.pending=null}}while(!0);if(Ce===null&&(H=Le),f.baseState=H,f.firstBaseUpdate=ce,f.lastBaseUpdate=Ce,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Es|=S,t.lanes=S,t.memoizedState=Le}}function Dh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var sa={},rr=Wr(sa),oa=Wr(sa),aa=Wr(sa);function Ms(t){if(t===sa)throw Error(n(174));return t}function nc(t,i){switch(Xt(aa,i),Xt(oa,t),Xt(rr,sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Je(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Je(i,t)}$t(rr),Xt(rr,i)}function oo(){$t(rr),$t(oa),$t(aa)}function Ih(t){Ms(aa.current);var i=Ms(rr.current),o=Je(i,t.type);i!==o&&(Xt(oa,t),Xt(rr,o))}function ic(t){oa.current===t&&($t(rr),$t(oa))}var Jt=Wr(0);function al(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rc=[];function sc(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var ll=b.ReactCurrentDispatcher,oc=b.ReactCurrentBatchConfig,Ss=0,en=null,gn=null,Mn=null,ul=!1,la=!1,ua=0,qg=0;function Fn(){throw Error(n(321))}function ac(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Bi(t[o],i[o]))return!1;return!0}function lc(t,i,o,u,f,p){if(Ss=p,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ll.current=t===null||t.memoizedState===null?Zg:Qg,t=o(u,f),la){p=0;do{if(la=!1,ua=0,25<=p)throw Error(n(301));p+=1,Mn=gn=null,i.updateQueue=null,ll.current=Jg,t=o(u,f)}while(la)}if(ll.current=dl,i=gn!==null&&gn.next!==null,Ss=0,Mn=gn=en=null,ul=!1,i)throw Error(n(300));return t}function uc(){var t=ua!==0;return ua=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?en.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function bi(){if(gn===null){var t=en.alternate;t=t!==null?t.memoizedState:null}else t=gn.next;var i=Mn===null?en.memoizedState:Mn.next;if(i!==null)Mn=i,gn=t;else{if(t===null)throw Error(n(310));gn=t,t={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},Mn===null?en.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function ca(t,i){return typeof i=="function"?i(t):i}function cc(t){var i=bi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=gn,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var N=S=null,H=null,ce=p;do{var Ce=ce.lane;if((Ss&Ce)===Ce)H!==null&&(H=H.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),u=ce.hasEagerState?ce.eagerState:t(u,ce.action);else{var Le={lane:Ce,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};H===null?(N=H=Le,S=u):H=H.next=Le,en.lanes|=Ce,Es|=Ce}ce=ce.next}while(ce!==null&&ce!==p);H===null?S=u:H.next=N,Bi(u,i.memoizedState)||(si=!0),i.memoizedState=u,i.baseState=S,i.baseQueue=H,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do p=f.lane,en.lanes|=p,Es|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(t){var i=bi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);Bi(p,i.memoizedState)||(si=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Uh(){}function Nh(t,i){var o=en,u=bi(),f=i(),p=!Bi(u.memoizedState,f);if(p&&(u.memoizedState=f,si=!0),u=u.queue,dc(zh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,fa(9,Oh.bind(null,o,u,f,i),void 0,null),Sn===null)throw Error(n(349));(Ss&30)!==0||Fh(o,i,f)}return f}function Fh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Oh(t,i,o,u){i.value=o,i.getSnapshot=u,kh(i)&&Bh(t)}function zh(t,i,o){return o(function(){kh(i)&&Bh(t)})}function kh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Bi(t,o)}catch{return!0}}function Bh(t){var i=yr(t,1);i!==null&&Xi(i,t,1,-1)}function Vh(t){var i=sr();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},i.queue=t,t=t.dispatch=Kg.bind(null,en,t),[i.memoizedState,t]}function fa(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Hh(){return bi().memoizedState}function cl(t,i,o,u){var f=sr();en.flags|=t,f.memoizedState=fa(1|i,o,void 0,u===void 0?null:u)}function fl(t,i,o,u){var f=bi();u=u===void 0?null:u;var p=void 0;if(gn!==null){var S=gn.memoizedState;if(p=S.destroy,u!==null&&ac(u,S.deps)){f.memoizedState=fa(i,o,p,u);return}}en.flags|=t,f.memoizedState=fa(1|i,o,p,u)}function Gh(t,i){return cl(8390656,8,t,i)}function dc(t,i){return fl(2048,8,t,i)}function Wh(t,i){return fl(4,2,t,i)}function Xh(t,i){return fl(4,4,t,i)}function jh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,fl(4,4,jh.bind(null,i,t),o)}function hc(){}function Yh(t,i){var o=bi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=bi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Kh(t,i,o){return(Ss&21)===0?(t.baseState&&(t.baseState=!1,si=!0),t.memoizedState=o):(Bi(o,i)||(o=yn(),en.lanes|=o,Es|=o,t.baseState=!0),i)}function Yg(t,i){var o=ht;ht=o!==0&&4>o?o:4,t(!0);var u=oc.transition;oc.transition={};try{t(!1),i()}finally{ht=o,oc.transition=u}}function Zh(){return bi().memoizedState}function $g(t,i,o){var u=Qr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(t))Jh(i,o);else if(o=bh(t,i,o,u),o!==null){var f=jn();Xi(o,t,u,f),ep(o,i,u)}}function Kg(t,i,o){var u=Qr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(t))Jh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var S=i.lastRenderedState,N=p(S,o);if(f.hasEagerState=!0,f.eagerState=N,Bi(N,S)){var H=i.interleaved;H===null?(f.next=f,ec(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=bh(t,i,f,u),o!==null&&(f=jn(),Xi(o,t,u,f),ep(o,i,u))}}function Qh(t){var i=t.alternate;return t===en||i!==null&&i===en}function Jh(t,i){la=ul=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ep(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Vs(t,o)}}var dl={readContext:Ri,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},Zg={readContext:Ri,useCallback:function(t,i){return sr().memoizedState=[t,i===void 0?null:i],t},useContext:Ri,useEffect:Gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,cl(4194308,4,jh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return cl(4194308,4,t,i)},useInsertionEffect:function(t,i){return cl(4,2,t,i)},useMemo:function(t,i){var o=sr();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=sr();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=$g.bind(null,en,t),[u.memoizedState,t]},useRef:function(t){var i=sr();return t={current:t},i.memoizedState=t},useState:Vh,useDebugValue:hc,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=Vh(!1),i=t[0];return t=Yg.bind(null,t[1]),sr().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=en,f=sr();if(Zt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Sn===null)throw Error(n(349));(Ss&30)!==0||Fh(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Gh(zh.bind(null,u,p,t),[t]),u.flags|=2048,fa(9,Oh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=sr(),i=Sn.identifierPrefix;if(Zt){var o=xr,u=_r;o=(u&~(1<<32-vt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=ua++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=qg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Qg={readContext:Ri,useCallback:Yh,useContext:Ri,useEffect:dc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:cc,useRef:Hh,useState:function(){return cc(ca)},useDebugValue:hc,useDeferredValue:function(t){var i=bi();return Kh(i,gn.memoizedState,t)},useTransition:function(){var t=cc(ca)[0],i=bi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Zh,unstable_isNewReconciler:!1},Jg={readContext:Ri,useCallback:Yh,useContext:Ri,useEffect:dc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:fc,useRef:Hh,useState:function(){return fc(ca)},useDebugValue:hc,useDeferredValue:function(t){var i=bi();return gn===null?i.memoizedState=t:Kh(i,gn.memoizedState,t)},useTransition:function(){var t=fc(ca)[0],i=bi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Zh,unstable_isNewReconciler:!1};function Hi(t,i){if(t&&t.defaultProps){i=ge({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function pc(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:ge({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var hl={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=jn(),f=Qr(t),p=Mr(u,f);p.payload=i,o!=null&&(p.callback=o),i=Yr(t,p,f),i!==null&&(Xi(i,t,f,u),sl(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=jn(),f=Qr(t),p=Mr(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Yr(t,p,f),i!==null&&(Xi(i,t,f,u),sl(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=jn(),u=Qr(t),f=Mr(o,u);f.tag=2,i!=null&&(f.callback=i),i=Yr(t,f,u),i!==null&&(Xi(i,t,u,o),sl(i,t,u))}};function tp(t,i,o,u,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,S):i.prototype&&i.prototype.isPureReactComponent?!Zo(o,u)||!Zo(f,p):!0}function np(t,i,o){var u=!1,f=Xr,p=i.contextType;return typeof p=="object"&&p!==null?p=Ri(p):(f=ri(i)?vs:Nn.current,u=i.contextTypes,p=(u=u!=null)?Js(t,f):Xr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hl,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function ip(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&hl.enqueueReplaceState(i,i.state,null)}function mc(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},tc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Ri(p):(p=ri(i)?vs:Nn.current,f.context=Js(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(pc(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&hl.enqueueReplaceState(f,f.state,null),ol(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,i){try{var o="",u=i;do o+=ye(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function gc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function rp(t,i,o){o=Mr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){yl||(yl=!0,Dc=u),vc(t,i)},o}function sp(t,i,o){o=Mr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){vc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){vc(t,i),typeof u!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function op(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new ev;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=pv.bind(null,t,i,o),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function lp(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Mr(-1,1),i.tag=2,Yr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var tv=b.ReactCurrentOwner,si=!1;function Xn(t,i,o,u){i.child=t===null?Rh(i,null,o,u):io(i,t.child,o,u)}function up(t,i,o,u,f){o=o.render;var p=i.ref;return so(i,f),u=lc(t,i,o,u,p,f),o=uc(),t!==null&&!si?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Sr(t,i,f)):(Zt&&o&&Xu(i),i.flags|=1,Xn(t,i,u,f),i.child)}function cp(t,i,o,u,f){if(t===null){var p=o.type;return typeof p=="function"&&!kc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,fp(t,i,p,u,f)):(t=Al(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var S=p.memoizedProps;if(o=o.compare,o=o!==null?o:Zo,o(S,u)&&t.ref===i.ref)return Sr(t,i,f)}return i.flags|=1,t=es(p,u),t.ref=i.ref,t.return=i,i.child=t}function fp(t,i,o,u,f){if(t!==null){var p=t.memoizedProps;if(Zo(p,u)&&t.ref===i.ref)if(si=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(si=!0);else return i.lanes=t.lanes,Sr(t,i,f)}return _c(t,i,o,u,f)}function dp(t,i,o){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(uo,_i),_i|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Xt(uo,_i),_i|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Xt(uo,_i),_i|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Xt(uo,_i),_i|=u;return Xn(t,i,f,o),i.child}function hp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function _c(t,i,o,u,f){var p=ri(o)?vs:Nn.current;return p=Js(i,p),so(i,f),o=lc(t,i,o,u,p,f),u=uc(),t!==null&&!si?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Sr(t,i,f)):(Zt&&u&&Xu(i),i.flags|=1,Xn(t,i,o,f),i.child)}function pp(t,i,o,u,f){if(ri(o)){var p=!0;Za(i)}else p=!1;if(so(i,f),i.stateNode===null)ml(t,i),np(i,o,u),mc(i,o,u,f),u=!0;else if(t===null){var S=i.stateNode,N=i.memoizedProps;S.props=N;var H=S.context,ce=o.contextType;typeof ce=="object"&&ce!==null?ce=Ri(ce):(ce=ri(o)?vs:Nn.current,ce=Js(i,ce));var Ce=o.getDerivedStateFromProps,Le=typeof Ce=="function"||typeof S.getSnapshotBeforeUpdate=="function";Le||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==u||H!==ce)&&ip(i,S,u,ce),qr=!1;var Ae=i.memoizedState;S.state=Ae,ol(i,u,S,f),H=i.memoizedState,N!==u||Ae!==H||ii.current||qr?(typeof Ce=="function"&&(pc(i,o,Ce,u),H=i.memoizedState),(N=qr||tp(i,o,N,u,Ae,H,ce))?(Le||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),S.props=u,S.state=H,S.context=ce,u=N):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{S=i.stateNode,Ph(t,i),N=i.memoizedProps,ce=i.type===i.elementType?N:Hi(i.type,N),S.props=ce,Le=i.pendingProps,Ae=S.context,H=o.contextType,typeof H=="object"&&H!==null?H=Ri(H):(H=ri(o)?vs:Nn.current,H=Js(i,H));var Ge=o.getDerivedStateFromProps;(Ce=typeof Ge=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==Le||Ae!==H)&&ip(i,S,u,H),qr=!1,Ae=i.memoizedState,S.state=Ae,ol(i,u,S,f);var Qe=i.memoizedState;N!==Le||Ae!==Qe||ii.current||qr?(typeof Ge=="function"&&(pc(i,o,Ge,u),Qe=i.memoizedState),(ce=qr||tp(i,o,ce,u,Ae,Qe,H)||!1)?(Ce||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(u,Qe,H),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(u,Qe,H)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Qe),S.props=u,S.state=Qe,S.context=H,u=ce):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=1024),u=!1)}return xc(t,i,o,u,p,f)}function xc(t,i,o,u,f,p){hp(t,i);var S=(i.flags&128)!==0;if(!u&&!S)return f&&xh(i,o,!1),Sr(t,i,p);u=i.stateNode,tv.current=i;var N=S&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&S?(i.child=io(i,t.child,null,p),i.child=io(i,null,N,p)):Xn(t,i,N,p),i.memoizedState=u.state,f&&xh(i,o,!0),i.child}function mp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),nc(t,i.containerInfo)}function gp(t,i,o,u,f){return no(),$u(f),i.flags|=256,Xn(t,i,o,u),i.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var u=i.pendingProps,f=Jt.current,p=!1,S=(i.flags&128)!==0,N;if((N=S)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Xt(Jt,f&1),t===null)return Yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=u.children,t=u.fallback,p?(u=i.mode,p=i.child,S={mode:"hidden",children:S},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=S):p=Cl(S,u,0,null),t=Cs(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Mc(o),i.memoizedState=yc,t):Sc(i,S));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return nv(t,i,S,u,N,f,o);if(p){p=u.fallback,S=i.mode,f=t.child,N=f.sibling;var H={mode:"hidden",children:u.children};return(S&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=es(f,H),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=es(N,p):(p=Cs(p,S,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,S=t.child.memoizedState,S=S===null?Mc(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},p.memoizedState=S,p.childLanes=t.childLanes&~o,i.memoizedState=yc,u}return p=t.child,t=p.sibling,u=es(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function Sc(t,i){return i=Cl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function pl(t,i,o,u){return u!==null&&$u(u),io(i,t.child,null,o),t=Sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function nv(t,i,o,u,f,p,S){if(o)return i.flags&256?(i.flags&=-257,u=gc(Error(n(422))),pl(t,i,S,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=Cl({mode:"visible",children:u.children},f,0,null),p=Cs(p,f,S,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&io(i,t.child,null,S),i.child.memoizedState=Mc(S),i.memoizedState=yc,p);if((i.mode&1)===0)return pl(t,i,S,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,p=Error(n(419)),u=gc(p,u,void 0),pl(t,i,S,u)}if(N=(S&t.childLanes)!==0,si||N){if(u=Sn,u!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|S))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,yr(t,f),Xi(u,t,f,-1))}return zc(),u=gc(Error(n(421))),pl(t,i,S,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=mv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,vi=Gr(f.nextSibling),gi=i,Zt=!0,Vi=null,t!==null&&(Ai[Ci++]=_r,Ai[Ci++]=xr,Ai[Ci++]=_s,_r=t.id,xr=t.overflow,_s=i),i=Sc(i,u.children),i.flags|=4096,i)}function _p(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Ju(t.return,i,o)}function Ec(t,i,o,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function xp(t,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(Xn(t,i,u.children,o),u=Jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,o,i);else if(t.tag===19)_p(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Xt(Jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&al(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ec(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&al(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Ec(i,!0,o,null,p);break;case"together":Ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ml(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Sr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Es|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=es(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=es(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function iv(t,i,o){switch(i.tag){case 3:mp(i),no();break;case 5:Ih(i);break;case 1:ri(i.type)&&Za(i);break;case 4:nc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Xt(il,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Xt(Jt,Jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(t,i,o):(Xt(Jt,Jt.current&1),t=Sr(t,i,o),t!==null?t.sibling:null);Xt(Jt,Jt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return xp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Xt(Jt,Jt.current),u)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,o)}return Sr(t,i,o)}var yp,wc,Mp,Sp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wc=function(){},Mp=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Ms(rr.current);var p=null;switch(o){case"input":f=Z(t,f),u=Z(t,u),p=[];break;case"select":f=ge({},f,{value:void 0}),u=ge({},u,{value:void 0}),p=[];break;case"textarea":f=w(t,f),u=w(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ya)}be(o,u);var S;o=null;for(ce in f)if(!u.hasOwnProperty(ce)&&f.hasOwnProperty(ce)&&f[ce]!=null)if(ce==="style"){var N=f[ce];for(S in N)N.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?p||(p=[]):(p=p||[]).push(ce,null));for(ce in u){var H=u[ce];if(N=f!=null?f[ce]:void 0,u.hasOwnProperty(ce)&&H!==N&&(H!=null||N!=null))if(ce==="style")if(N){for(S in N)!N.hasOwnProperty(S)||H&&H.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in H)H.hasOwnProperty(S)&&N[S]!==H[S]&&(o||(o={}),o[S]=H[S])}else o||(p||(p=[]),p.push(ce,o)),o=H;else ce==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(p=p||[]).push(ce,H)):ce==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ce,""+H):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(H!=null&&ce==="onScroll"&&Yt("scroll",t),p||N===H||(p=[])):(p=p||[]).push(ce,H))}o&&(p=p||[]).push("style",o);var ce=p;(i.updateQueue=ce)&&(i.flags|=4)}},Sp=function(t,i,o,u){o!==u&&(i.flags|=4)};function da(t,i){if(!Zt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function On(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function rv(t,i,o){var u=i.pendingProps;switch(ju(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(i),null;case 1:return ri(i.type)&&Ka(),On(i),null;case 3:return u=i.stateNode,oo(),$t(ii),$t(Nn),sc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(tl(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vi!==null&&(Nc(Vi),Vi=null))),wc(t,i),On(i),null;case 5:ic(i);var f=Ms(aa.current);if(o=i.type,t!==null&&i.stateNode!=null)Mp(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return On(i),null}if(t=Ms(rr.current),tl(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[ir]=i,u[na]=p,t=(i.mode&1)!==0,o){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(f=0;f<Jo.length;f++)Yt(Jo[f],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":Cn(u,p),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Yt("invalid",u);break;case"textarea":ae(u,p),Yt("invalid",u)}be(o,p),f=null;for(var S in p)if(p.hasOwnProperty(S)){var N=p[S];S==="children"?typeof N=="string"?u.textContent!==N&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,N,t),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(S)&&N!=null&&S==="onScroll"&&Yt("scroll",u)}switch(o){case"input":Ot(u),at(u,p,!0);break;case"textarea":Ot(u),Te(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ya)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=S.createElement(o,{is:u.is}):(t=S.createElement(o),o==="select"&&(S=t,u.multiple?S.multiple=!0:u.size&&(S.size=u.size))):t=S.createElementNS(t,o),t[ir]=i,t[na]=u,yp(t,i,!1,!1),i.stateNode=t;e:{switch(S=He(o,u),o){case"dialog":Yt("cancel",t),Yt("close",t),f=u;break;case"iframe":case"object":case"embed":Yt("load",t),f=u;break;case"video":case"audio":for(f=0;f<Jo.length;f++)Yt(Jo[f],t);f=u;break;case"source":Yt("error",t),f=u;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),f=u;break;case"details":Yt("toggle",t),f=u;break;case"input":Cn(t,u),f=Z(t,u),Yt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=ge({},u,{value:void 0}),Yt("invalid",t);break;case"textarea":ae(t,u),f=w(t,u),Yt("invalid",t);break;default:f=u}be(o,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var H=N[p];p==="style"?se(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&O(t,H)):p==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&I(t,H):typeof H=="number"&&I(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Yt("scroll",t):H!=null&&L(t,p,H,S))}switch(o){case"input":Ot(t),at(t,u,!1);break;case"textarea":Ot(t),Te(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Be(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?U(t,!!u.multiple,p,!1):u.defaultValue!=null&&U(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return On(i),null;case 6:if(t&&i.stateNode!=null)Sp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ms(aa.current),Ms(rr.current),tl(i)){if(u=i.stateNode,o=i.memoizedProps,u[ir]=i,(p=u.nodeValue!==o)&&(t=gi,t!==null))switch(t.tag){case 3:qa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[ir]=i,i.stateNode=u}return On(i),null;case 13:if($t(Jt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Zt&&vi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),no(),i.flags|=98560,p=!1;else if(p=tl(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ir]=i}else no(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;On(i),p=!1}else Vi!==null&&(Nc(Vi),Vi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Jt.current&1)!==0?vn===0&&(vn=3):zc())),i.updateQueue!==null&&(i.flags|=4),On(i),null);case 4:return oo(),wc(t,i),t===null&&ea(i.stateNode.containerInfo),On(i),null;case 10:return Qu(i.type._context),On(i),null;case 17:return ri(i.type)&&Ka(),On(i),null;case 19:if($t(Jt),p=i.memoizedState,p===null)return On(i),null;if(u=(i.flags&128)!==0,S=p.rendering,S===null)if(u)da(p,!1);else{if(vn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=al(t),S!==null){for(i.flags|=128,da(p,!1),u=S.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,S=p.alternate,S===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=S.childLanes,p.lanes=S.lanes,p.child=S.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=S.memoizedProps,p.memoizedState=S.memoizedState,p.updateQueue=S.updateQueue,p.type=S.type,t=S.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Xt(Jt,Jt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Pe()>co&&(i.flags|=128,u=!0,da(p,!1),i.lanes=4194304)}else{if(!u)if(t=al(S),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),da(p,!0),p.tail===null&&p.tailMode==="hidden"&&!S.alternate&&!Zt)return On(i),null}else 2*Pe()-p.renderingStartTime>co&&o!==1073741824&&(i.flags|=128,u=!0,da(p,!1),i.lanes=4194304);p.isBackwards?(S.sibling=i.child,i.child=S):(o=p.last,o!==null?o.sibling=S:i.child=S,p.last=S)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Pe(),i.sibling=null,o=Jt.current,Xt(Jt,u?o&1|2:o&1),i):(On(i),null);case 22:case 23:return Oc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(_i&1073741824)!==0&&(On(i),i.subtreeFlags&6&&(i.flags|=8192)):On(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function sv(t,i){switch(ju(i),i.tag){case 1:return ri(i.type)&&Ka(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return oo(),$t(ii),$t(Nn),sc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return ic(i),null;case 13:if($t(Jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));no()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $t(Jt),null;case 4:return oo(),null;case 10:return Qu(i.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var gl=!1,zn=!1,ov=typeof WeakSet=="function"?WeakSet:Set,$e=null;function lo(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){sn(t,i,u)}else o.current=null}function Tc(t,i,o){try{o()}catch(u){sn(t,i,u)}}var Ep=!1;function av(t,i){if(Ou=Oi,t=th(),bu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var S=0,N=-1,H=-1,ce=0,Ce=0,Le=t,Ae=null;t:for(;;){for(var Ge;Le!==o||f!==0&&Le.nodeType!==3||(N=S+f),Le!==p||u!==0&&Le.nodeType!==3||(H=S+u),Le.nodeType===3&&(S+=Le.nodeValue.length),(Ge=Le.firstChild)!==null;)Ae=Le,Le=Ge;for(;;){if(Le===t)break t;if(Ae===o&&++ce===f&&(N=S),Ae===p&&++Ce===u&&(H=S),(Ge=Le.nextSibling)!==null)break;Le=Ae,Ae=Le.parentNode}Le=Ge}o=N===-1||H===-1?null:{start:N,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(zu={focusedElem:t,selectionRange:o},Oi=!1,$e=i;$e!==null;)if(i=$e,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,$e=t;else for(;$e!==null;){i=$e;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var nt=Qe.memoizedProps,on=Qe.memoizedState,Q=i.stateNode,j=Q.getSnapshotBeforeUpdate(i.elementType===i.type?nt:Hi(i.type,nt),on);Q.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Fe){sn(i,i.return,Fe)}if(t=i.sibling,t!==null){t.return=i.return,$e=t;break}$e=i.return}return Qe=Ep,Ep=!1,Qe}function ha(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Tc(i,o,p)}f=f.next}while(f!==u)}}function vl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ac(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ir],delete i[na],delete i[Hu],delete i[Gg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ya));else if(u!==4&&(t=t.child,t!==null))for(Cc(t,i,o),t=t.sibling;t!==null;)Cc(t,i,o),t=t.sibling}function Rc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Rc(t,i,o),t=t.sibling;t!==null;)Rc(t,i,o),t=t.sibling}var Pn=null,Gi=!1;function $r(t,i,o){for(o=o.child;o!==null;)Cp(t,i,o),o=o.sibling}function Cp(t,i,o){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:zn||lo(o,i);case 6:var u=Pn,f=Gi;Pn=null,$r(t,i,o),Pn=u,Gi=f,Pn!==null&&(Gi?(t=Pn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Pn.removeChild(o.stateNode));break;case 18:Pn!==null&&(Gi?(t=Pn,o=o.stateNode,t.nodeType===8?Vu(t.parentNode,o):t.nodeType===1&&Vu(t,o),tr(t)):Vu(Pn,o.stateNode));break;case 4:u=Pn,f=Gi,Pn=o.stateNode.containerInfo,Gi=!0,$r(t,i,o),Pn=u,Gi=f;break;case 0:case 11:case 14:case 15:if(!zn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,S=p.destroy;p=p.tag,S!==void 0&&((p&2)!==0||(p&4)!==0)&&Tc(o,i,S),f=f.next}while(f!==u)}$r(t,i,o);break;case 1:if(!zn&&(lo(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){sn(o,i,N)}$r(t,i,o);break;case 21:$r(t,i,o);break;case 22:o.mode&1?(zn=(u=zn)||o.memoizedState!==null,$r(t,i,o),zn=u):$r(t,i,o);break;default:$r(t,i,o)}}function Rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ov),i.forEach(function(u){var f=gv.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function Wi(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=t,S=i,N=S;e:for(;N!==null;){switch(N.tag){case 5:Pn=N.stateNode,Gi=!1;break e;case 3:Pn=N.stateNode.containerInfo,Gi=!0;break e;case 4:Pn=N.stateNode.containerInfo,Gi=!0;break e}N=N.return}if(Pn===null)throw Error(n(160));Cp(p,S,f),Pn=null,Gi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ce){sn(f,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bp(i,t),i=i.sibling}function bp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wi(i,t),or(t),u&4){try{ha(3,t,t.return),vl(3,t)}catch(nt){sn(t,t.return,nt)}try{ha(5,t,t.return)}catch(nt){sn(t,t.return,nt)}}break;case 1:Wi(i,t),or(t),u&512&&o!==null&&lo(o,o.return);break;case 5:if(Wi(i,t),or(t),u&512&&o!==null&&lo(o,o.return),t.flags&32){var f=t.stateNode;try{I(f,"")}catch(nt){sn(t,t.return,nt)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,S=o!==null?o.memoizedProps:p,N=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&Et(f,p),He(N,S);var ce=He(N,p);for(S=0;S<H.length;S+=2){var Ce=H[S],Le=H[S+1];Ce==="style"?se(f,Le):Ce==="dangerouslySetInnerHTML"?O(f,Le):Ce==="children"?I(f,Le):L(f,Ce,Le,ce)}switch(N){case"input":_t(f,p);break;case"textarea":Ee(f,p);break;case"select":var Ae=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ge=p.value;Ge!=null?U(f,!!p.multiple,Ge,!1):Ae!==!!p.multiple&&(p.defaultValue!=null?U(f,!!p.multiple,p.defaultValue,!0):U(f,!!p.multiple,p.multiple?[]:"",!1))}f[na]=p}catch(nt){sn(t,t.return,nt)}}break;case 6:if(Wi(i,t),or(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(nt){sn(t,t.return,nt)}}break;case 3:if(Wi(i,t),or(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{tr(i.containerInfo)}catch(nt){sn(t,t.return,nt)}break;case 4:Wi(i,t),or(t);break;case 13:Wi(i,t),or(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Lc=Pe())),u&4&&Rp(t);break;case 22:if(Ce=o!==null&&o.memoizedState!==null,t.mode&1?(zn=(ce=zn)||Ce,Wi(i,t),zn=ce):Wi(i,t),or(t),u&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!Ce&&(t.mode&1)!==0)for($e=t,Ce=t.child;Ce!==null;){for(Le=$e=Ce;$e!==null;){switch(Ae=$e,Ge=Ae.child,Ae.tag){case 0:case 11:case 14:case 15:ha(4,Ae,Ae.return);break;case 1:lo(Ae,Ae.return);var Qe=Ae.stateNode;if(typeof Qe.componentWillUnmount=="function"){u=Ae,o=Ae.return;try{i=u,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(nt){sn(u,o,nt)}}break;case 5:lo(Ae,Ae.return);break;case 22:if(Ae.memoizedState!==null){Dp(Le);continue}}Ge!==null?(Ge.return=Ae,$e=Ge):Dp(Le)}Ce=Ce.sibling}e:for(Ce=null,Le=t;;){if(Le.tag===5){if(Ce===null){Ce=Le;try{f=Le.stateNode,ce?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Le.stateNode,H=Le.memoizedProps.style,S=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=de("display",S))}catch(nt){sn(t,t.return,nt)}}}else if(Le.tag===6){if(Ce===null)try{Le.stateNode.nodeValue=ce?"":Le.memoizedProps}catch(nt){sn(t,t.return,nt)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===t)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===t)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===t)break e;Ce===Le&&(Ce=null),Le=Le.return}Ce===Le&&(Ce=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Wi(i,t),or(t),u&4&&Rp(t);break;case 21:break;default:Wi(i,t),or(t)}}function or(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(I(f,""),u.flags&=-33);var p=Ap(t);Rc(t,p,f);break;case 3:case 4:var S=u.stateNode.containerInfo,N=Ap(t);Cc(t,N,S);break;default:throw Error(n(161))}}catch(H){sn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function lv(t,i,o){$e=t,Pp(t)}function Pp(t,i,o){for(var u=(t.mode&1)!==0;$e!==null;){var f=$e,p=f.child;if(f.tag===22&&u){var S=f.memoizedState!==null||gl;if(!S){var N=f.alternate,H=N!==null&&N.memoizedState!==null||zn;N=gl;var ce=zn;if(gl=S,(zn=H)&&!ce)for($e=f;$e!==null;)S=$e,H=S.child,S.tag===22&&S.memoizedState!==null?Ip(f):H!==null?(H.return=S,$e=H):Ip(f);for(;p!==null;)$e=p,Pp(p),p=p.sibling;$e=f,gl=N,zn=ce}Lp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,$e=p):Lp(t)}}function Lp(t){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zn||vl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!zn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Hi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Dh(i,p,u);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dh(i,S,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Ce=ce.memoizedState;if(Ce!==null){var Le=Ce.dehydrated;Le!==null&&tr(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}zn||i.flags&512&&Ac(i)}catch(Ae){sn(i,i.return,Ae)}}if(i===t){$e=null;break}if(o=i.sibling,o!==null){o.return=i.return,$e=o;break}$e=i.return}}function Dp(t){for(;$e!==null;){var i=$e;if(i===t){$e=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$e=o;break}$e=i.return}}function Ip(t){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{vl(4,i)}catch(H){sn(i,o,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(H){sn(i,f,H)}}var p=i.return;try{Ac(i)}catch(H){sn(i,p,H)}break;case 5:var S=i.return;try{Ac(i)}catch(H){sn(i,S,H)}}}catch(H){sn(i,i.return,H)}if(i===t){$e=null;break}var N=i.sibling;if(N!==null){N.return=i.return,$e=N;break}$e=i.return}}var uv=Math.ceil,_l=b.ReactCurrentDispatcher,bc=b.ReactCurrentOwner,Pi=b.ReactCurrentBatchConfig,Dt=0,Sn=null,cn=null,Ln=0,_i=0,uo=Wr(0),vn=0,pa=null,Es=0,xl=0,Pc=0,ma=null,oi=null,Lc=0,co=1/0,Er=null,yl=!1,Dc=null,Kr=null,Ml=!1,Zr=null,Sl=0,ga=0,Ic=null,El=-1,wl=0;function jn(){return(Dt&6)!==0?Pe():El!==-1?El:El=Pe()}function Qr(t){return(t.mode&1)===0?1:(Dt&2)!==0&&Ln!==0?Ln&-Ln:jg.transition!==null?(wl===0&&(wl=yn()),wl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:jo(t.type)),t)}function Xi(t,i,o,u){if(50<ga)throw ga=0,Ic=null,Error(n(185));nn(t,o,u),((Dt&2)===0||t!==Sn)&&(t===Sn&&((Dt&2)===0&&(xl|=o),vn===4&&Jr(t,Ln)),ai(t,u),o===1&&Dt===0&&(i.mode&1)===0&&(co=Pe()+500,Qa&&jr()))}function ai(t,i){var o=t.callbackNode;bn(t,i);var u=hi(t,t===Sn?Ln:0);if(u===0)o!==null&&oe(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&oe(o),i===1)t.tag===0?Xg(Np.bind(null,t)):yh(Np.bind(null,t)),Vg(function(){(Dt&6)===0&&jr()}),o=null;else{switch(pi(u)){case 1:o=Ye;break;case 4:o=ft;break;case 16:o=dt;break;case 536870912:o=wt;break;default:o=dt}o=Gp(o,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Up(t,i){if(El=-1,wl=0,(Dt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(fo()&&t.callbackNode!==o)return null;var u=hi(t,t===Sn?Ln:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Tl(t,u);else{i=u;var f=Dt;Dt|=2;var p=Op();(Sn!==t||Ln!==i)&&(Er=null,co=Pe()+500,Ts(t,i));do try{dv();break}catch(N){Fp(t,N)}while(!0);Zu(),_l.current=p,Dt=f,cn!==null?i=0:(Sn=null,Ln=0,i=vn)}if(i!==0){if(i===2&&(f=ti(t),f!==0&&(u=f,i=Uc(t,f))),i===1)throw o=pa,Ts(t,0),Jr(t,u),ai(t,Pe()),o;if(i===6)Jr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!cv(f)&&(i=Tl(t,u),i===2&&(p=ti(t),p!==0&&(u=p,i=Uc(t,p))),i===1))throw o=pa,Ts(t,0),Jr(t,u),ai(t,Pe()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:As(t,oi,Er);break;case 3:if(Jr(t,u),(u&130023424)===u&&(i=Lc+500-Pe(),10<i)){if(hi(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){jn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Bu(As.bind(null,t,oi,Er),i);break}As(t,oi,Er);break;case 4:if(Jr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var S=31-vt(u);p=1<<S,S=i[S],S>f&&(f=S),u&=~p}if(u=f,u=Pe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*uv(u/1960))-u,10<u){t.timeoutHandle=Bu(As.bind(null,t,oi,Er),u);break}As(t,oi,Er);break;case 5:As(t,oi,Er);break;default:throw Error(n(329))}}}return ai(t,Pe()),t.callbackNode===o?Up.bind(null,t):null}function Uc(t,i){var o=ma;return t.current.memoizedState.isDehydrated&&(Ts(t,i).flags|=256),t=Tl(t,i),t!==2&&(i=oi,oi=o,i!==null&&Nc(i)),t}function Nc(t){oi===null?oi=t:oi.push.apply(oi,t)}function cv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!Bi(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Jr(t,i){for(i&=~Pc,i&=~xl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-vt(i),u=1<<o;t[o]=-1,i&=~u}}function Np(t){if((Dt&6)!==0)throw Error(n(327));fo();var i=hi(t,0);if((i&1)===0)return ai(t,Pe()),null;var o=Tl(t,i);if(t.tag!==0&&o===2){var u=ti(t);u!==0&&(i=u,o=Uc(t,u))}if(o===1)throw o=pa,Ts(t,0),Jr(t,i),ai(t,Pe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,As(t,oi,Er),ai(t,Pe()),null}function Fc(t,i){var o=Dt;Dt|=1;try{return t(i)}finally{Dt=o,Dt===0&&(co=Pe()+500,Qa&&jr())}}function ws(t){Zr!==null&&Zr.tag===0&&(Dt&6)===0&&fo();var i=Dt;Dt|=1;var o=Pi.transition,u=ht;try{if(Pi.transition=null,ht=1,t)return t()}finally{ht=u,Pi.transition=o,Dt=i,(Dt&6)===0&&jr()}}function Oc(){_i=uo.current,$t(uo)}function Ts(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Bg(o)),cn!==null)for(o=cn.return;o!==null;){var u=o;switch(ju(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ka();break;case 3:oo(),$t(ii),$t(Nn),sc();break;case 5:ic(u);break;case 4:oo();break;case 13:$t(Jt);break;case 19:$t(Jt);break;case 10:Qu(u.type._context);break;case 22:case 23:Oc()}o=o.return}if(Sn=t,cn=t=es(t.current,null),Ln=_i=i,vn=0,pa=null,Pc=xl=Es=0,oi=ma=null,ys!==null){for(i=0;i<ys.length;i++)if(o=ys[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var S=p.next;p.next=f,u.next=S}o.pending=u}ys=null}return t}function Fp(t,i){do{var o=cn;try{if(Zu(),ll.current=dl,ul){for(var u=en.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}ul=!1}if(Ss=0,Mn=gn=en=null,la=!1,ua=0,bc.current=null,o===null||o.return===null){vn=1,pa=i,cn=null;break}e:{var p=t,S=o.return,N=o,H=i;if(i=Ln,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ce=H,Ce=N,Le=Ce.tag;if((Ce.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ae=Ce.alternate;Ae?(Ce.updateQueue=Ae.updateQueue,Ce.memoizedState=Ae.memoizedState,Ce.lanes=Ae.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var Ge=ap(S);if(Ge!==null){Ge.flags&=-257,lp(Ge,S,N,p,i),Ge.mode&1&&op(p,ce,i),i=Ge,H=ce;var Qe=i.updateQueue;if(Qe===null){var nt=new Set;nt.add(H),i.updateQueue=nt}else Qe.add(H);break e}else{if((i&1)===0){op(p,ce,i),zc();break e}H=Error(n(426))}}else if(Zt&&N.mode&1){var on=ap(S);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),lp(on,S,N,p,i),$u(ao(H,N));break e}}p=H=ao(H,N),vn!==4&&(vn=2),ma===null?ma=[p]:ma.push(p),p=S;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Q=rp(p,H,i);Lh(p,Q);break e;case 1:N=H;var j=p.type,ie=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Kr===null||!Kr.has(ie)))){p.flags|=65536,i&=-i,p.lanes|=i;var Fe=sp(p,N,i);Lh(p,Fe);break e}}p=p.return}while(p!==null)}kp(o)}catch(it){i=it,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function Op(){var t=_l.current;return _l.current=dl,t===null?dl:t}function zc(){(vn===0||vn===3||vn===2)&&(vn=4),Sn===null||(Es&268435455)===0&&(xl&268435455)===0||Jr(Sn,Ln)}function Tl(t,i){var o=Dt;Dt|=2;var u=Op();(Sn!==t||Ln!==i)&&(Er=null,Ts(t,i));do try{fv();break}catch(f){Fp(t,f)}while(!0);if(Zu(),Dt=o,_l.current=u,cn!==null)throw Error(n(261));return Sn=null,Ln=0,vn}function fv(){for(;cn!==null;)zp(cn)}function dv(){for(;cn!==null&&!Y();)zp(cn)}function zp(t){var i=Hp(t.alternate,t,_i);t.memoizedProps=t.pendingProps,i===null?kp(t):cn=i,bc.current=null}function kp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=rv(o,i,_i),o!==null){cn=o;return}}else{if(o=sv(o,i),o!==null){o.flags&=32767,cn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=t}while(i!==null);vn===0&&(vn=5)}function As(t,i,o){var u=ht,f=Pi.transition;try{Pi.transition=null,ht=1,hv(t,i,o,u)}finally{Pi.transition=f,ht=u}return null}function hv(t,i,o,u){do fo();while(Zr!==null);if((Dt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(fs(t,p),t===Sn&&(cn=Sn=null,Ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ml||(Ml=!0,Gp(dt,function(){return fo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Pi.transition,Pi.transition=null;var S=ht;ht=1;var N=Dt;Dt|=4,bc.current=null,av(t,o),bp(o,t),Ig(zu),Oi=!!Ou,zu=Ou=null,t.current=o,lv(o),Ne(),Dt=N,ht=S,Pi.transition=p}else t.current=o;if(Ml&&(Ml=!1,Zr=t,Sl=f),p=t.pendingLanes,p===0&&(Kr=null),pn(o.stateNode),ai(t,Pe()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(yl)throw yl=!1,t=Dc,Dc=null,t;return(Sl&1)!==0&&t.tag!==0&&fo(),p=t.pendingLanes,(p&1)!==0?t===Ic?ga++:(ga=0,Ic=t):ga=0,jr(),null}function fo(){if(Zr!==null){var t=pi(Sl),i=Pi.transition,o=ht;try{if(Pi.transition=null,ht=16>t?16:t,Zr===null)var u=!1;else{if(t=Zr,Zr=null,Sl=0,(Dt&6)!==0)throw Error(n(331));var f=Dt;for(Dt|=4,$e=t.current;$e!==null;){var p=$e,S=p.child;if(($e.flags&16)!==0){var N=p.deletions;if(N!==null){for(var H=0;H<N.length;H++){var ce=N[H];for($e=ce;$e!==null;){var Ce=$e;switch(Ce.tag){case 0:case 11:case 15:ha(8,Ce,p)}var Le=Ce.child;if(Le!==null)Le.return=Ce,$e=Le;else for(;$e!==null;){Ce=$e;var Ae=Ce.sibling,Ge=Ce.return;if(wp(Ce),Ce===ce){$e=null;break}if(Ae!==null){Ae.return=Ge,$e=Ae;break}$e=Ge}}}var Qe=p.alternate;if(Qe!==null){var nt=Qe.child;if(nt!==null){Qe.child=null;do{var on=nt.sibling;nt.sibling=null,nt=on}while(nt!==null)}}$e=p}}if((p.subtreeFlags&2064)!==0&&S!==null)S.return=p,$e=S;else e:for(;$e!==null;){if(p=$e,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ha(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,$e=Q;break e}$e=p.return}}var j=t.current;for($e=j;$e!==null;){S=$e;var ie=S.child;if((S.subtreeFlags&2064)!==0&&ie!==null)ie.return=S,$e=ie;else e:for(S=j;$e!==null;){if(N=$e,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:vl(9,N)}}catch(it){sn(N,N.return,it)}if(N===S){$e=null;break e}var Fe=N.sibling;if(Fe!==null){Fe.return=N.return,$e=Fe;break e}$e=N.return}}if(Dt=f,jr(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(bt,t)}catch{}u=!0}return u}finally{ht=o,Pi.transition=i}}return!1}function Bp(t,i,o){i=ao(o,i),i=rp(t,i,1),t=Yr(t,i,1),i=jn(),t!==null&&(nn(t,1,i),ai(t,i))}function sn(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Kr===null||!Kr.has(u))){t=ao(o,t),t=sp(i,t,1),i=Yr(i,t,1),t=jn(),i!==null&&(nn(i,1,t),ai(i,t));break}}i=i.return}}function pv(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=jn(),t.pingedLanes|=t.suspendedLanes&o,Sn===t&&(Ln&o)===o&&(vn===4||vn===3&&(Ln&130023424)===Ln&&500>Pe()-Lc?Ts(t,0):Pc|=o),ai(t,i)}function Vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var o=jn();t=yr(t,i),t!==null&&(nn(t,i,o),ai(t,o))}function mv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(t,o)}function gv(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Vp(t,o)}var Hp;Hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ii.current)si=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return si=!1,iv(t,i,o);si=(t.flags&131072)!==0}else si=!1,Zt&&(i.flags&1048576)!==0&&Mh(i,el,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ml(t,i),t=i.pendingProps;var f=Js(i,Nn.current);so(i,o),f=lc(null,i,u,t,f,o);var p=uc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ri(u)?(p=!0,Za(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,tc(i),f.updater=hl,i.stateNode=f,f._reactInternals=i,mc(i,u,t,o),i=xc(null,i,u,!0,p,o)):(i.tag=0,Zt&&p&&Xu(i),Xn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ml(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=_v(u),t=Hi(u,t),f){case 0:i=_c(null,i,u,t,o);break e;case 1:i=pp(null,i,u,t,o);break e;case 11:i=up(null,i,u,t,o);break e;case 14:i=cp(null,i,u,Hi(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),_c(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),pp(t,i,u,f,o);case 3:e:{if(mp(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Ph(t,i),ol(i,u,null,o);var S=i.memoizedState;if(u=S.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ao(Error(n(423)),i),i=gp(t,i,u,o,f);break e}else if(u!==f){f=ao(Error(n(424)),i),i=gp(t,i,u,o,f);break e}else for(vi=Gr(i.stateNode.containerInfo.firstChild),gi=i,Zt=!0,Vi=null,o=Rh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(no(),u===f){i=Sr(t,i,o);break e}Xn(t,i,u,o)}i=i.child}return i;case 5:return Ih(i),t===null&&Yu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,S=f.children,ku(u,f)?S=null:p!==null&&ku(u,p)&&(i.flags|=32),hp(t,i),Xn(t,i,S,o),i.child;case 6:return t===null&&Yu(i),null;case 13:return vp(t,i,o);case 4:return nc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=io(i,null,u,o):Xn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),up(t,i,u,f,o);case 7:return Xn(t,i,i.pendingProps,o),i.child;case 8:return Xn(t,i,i.pendingProps.children,o),i.child;case 12:return Xn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,S=f.value,Xt(il,u._currentValue),u._currentValue=S,p!==null)if(Bi(p.value,S)){if(p.children===f.children&&!ii.current){i=Sr(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){S=p.child;for(var H=N.firstContext;H!==null;){if(H.context===u){if(p.tag===1){H=Mr(-1,o&-o),H.tag=2;var ce=p.updateQueue;if(ce!==null){ce=ce.shared;var Ce=ce.pending;Ce===null?H.next=H:(H.next=Ce.next,Ce.next=H),ce.pending=H}}p.lanes|=o,H=p.alternate,H!==null&&(H.lanes|=o),Ju(p.return,o,i),N.lanes|=o;break}H=H.next}}else if(p.tag===10)S=p.type===i.type?null:p.child;else if(p.tag===18){if(S=p.return,S===null)throw Error(n(341));S.lanes|=o,N=S.alternate,N!==null&&(N.lanes|=o),Ju(S,o,i),S=p.sibling}else S=p.child;if(S!==null)S.return=p;else for(S=p;S!==null;){if(S===i){S=null;break}if(p=S.sibling,p!==null){p.return=S.return,S=p;break}S=S.return}p=S}Xn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,so(i,o),f=Ri(f),u=u(f),i.flags|=1,Xn(t,i,u,o),i.child;case 14:return u=i.type,f=Hi(u,i.pendingProps),f=Hi(u.type,f),cp(t,i,u,f,o);case 15:return fp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Hi(u,f),ml(t,i),i.tag=1,ri(u)?(t=!0,Za(i)):t=!1,so(i,o),np(i,u,f),mc(i,u,f,o),xc(null,i,u,!0,t,o);case 19:return xp(t,i,o);case 22:return dp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return ue(t,i)}function vv(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(t,i,o,u){return new vv(t,i,o,u)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _v(t){if(typeof t=="function")return kc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===xe)return 14}return 2}function es(t,i){var o=t.alternate;return o===null?(o=Li(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Al(t,i,o,u,f,p){var S=2;if(u=t,typeof t=="function")kc(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case F:return Cs(o.children,f,p,i);case G:S=8,f|=8;break;case P:return t=Li(12,o,i,f|2),t.elementType=P,t.lanes=p,t;case ee:return t=Li(13,o,i,f),t.elementType=ee,t.lanes=p,t;case ve:return t=Li(19,o,i,f),t.elementType=ve,t.lanes=p,t;case he:return Cl(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:S=10;break e;case V:S=9;break e;case le:S=11;break e;case xe:S=14;break e;case pe:S=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Li(S,o,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function Cs(t,i,o,u){return t=Li(7,t,u,i),t.lanes=o,t}function Cl(t,i,o,u){return t=Li(22,t,u,i),t.elementType=he,t.lanes=o,t.stateNode={isHidden:!1},t}function Bc(t,i,o){return t=Li(6,t,null,i),t.lanes=o,t}function Vc(t,i,o){return i=Li(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function xv(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hc(t,i,o,u,f,p,S,N,H){return t=new xv(t,i,o,N,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Li(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(p),t}function yv(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Wp(t){if(!t)return Xr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ri(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ri(o))return _h(t,o,i)}return i}function Xp(t,i,o,u,f,p,S,N,H){return t=Hc(o,u,!0,t,f,p,S,N,H),t.context=Wp(null),o=t.current,u=jn(),f=Qr(o),p=Mr(u,f),p.callback=i??null,Yr(o,p,f),t.current.lanes=f,nn(t,f,u),ai(t,u),t}function Rl(t,i,o,u){var f=i.current,p=jn(),S=Qr(f);return o=Wp(o),i.context===null?i.context=o:i.pendingContext=o,i=Mr(p,S),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Yr(f,i,S),t!==null&&(Xi(t,f,S,p),sl(t,f,S)),S}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Gc(t,i){jp(t,i),(t=t.alternate)&&jp(t,i)}function Mv(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wc(t){this._internalRoot=t}Pl.prototype.render=Wc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Rl(t,i,null,null)},Pl.prototype.unmount=Wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ws(function(){Rl(null,t,null,null)}),i[gr]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oa();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ni.length&&i!==0&&i<Ni[o].priority;o++);Ni.splice(o,0,t),o===0&&er(t)}};function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function Sv(t,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ce=bl(S);p.call(ce)}}var S=Xp(i,u,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=S,t[gr]=S.current,ea(t.nodeType===8?t.parentNode:t),ws(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var ce=bl(H);N.call(ce)}}var H=Hc(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=H,t[gr]=H.current,ea(t.nodeType===8?t.parentNode:t),ws(function(){Rl(i,H,o,u)}),H}function Dl(t,i,o,u,f){var p=o._reactRootContainer;if(p){var S=p;if(typeof f=="function"){var N=f;f=function(){var H=bl(S);N.call(H)}}Rl(i,S,t,f)}else S=Sv(o,i,t,f,u);return bl(S)}Go=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=tn(i.pendingLanes);o!==0&&(Vs(i,o|1),ai(i,Pe()),(Dt&6)===0&&(co=Pe()+500,jr()))}break;case 13:ws(function(){var u=yr(t,1);if(u!==null){var f=jn();Xi(u,t,1,f)}}),Gc(t,1)}},dr=function(t){if(t.tag===13){var i=yr(t,134217728);if(i!==null){var o=jn();Xi(i,t,134217728,o)}Gc(t,134217728)}},Ji=function(t){if(t.tag===13){var i=Qr(t),o=yr(t,i);if(o!==null){var u=jn();Xi(o,t,i,u)}Gc(t,i)}},Oa=function(){return ht},Wo=function(t,i){var o=ht;try{return ht=t,i()}finally{ht=o}},De=function(t,i,o){switch(i){case"input":if(_t(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=$a(u);if(!f)throw Error(n(90));St(u),_t(u,f)}}}break;case"textarea":Ee(t,o);break;case"select":i=o.value,i!=null&&U(t,!!o.multiple,i,!1)}},te=Fc,et=ws;var Ev={usingClientEntryPoint:!1,Events:[ia,Zs,$a,Oe,ot,Fc]},va={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{bt=Il.inject(wv),yt=Il}catch{}}return li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,li.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(i))throw Error(n(200));return yv(t,i,null,o)},li.createRoot=function(t,i){if(!Xc(t))throw Error(n(299));var o=!1,u="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hc(t,1,!1,null,null,o,!1,u,f),t[gr]=i.current,ea(t.nodeType===8?t.parentNode:t),new Wc(i)},li.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},li.flushSync=function(t){return ws(t)},li.hydrate=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!0,o)},li.hydrateRoot=function(t,i,o){if(!Xc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",S=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=Xp(i,null,t,1,o??null,f,!1,p,S),t[gr]=i.current,ea(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Pl(i)},li.render=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!1,o)},li.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(n(40));return t._reactRootContainer?(ws(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[gr]=null})}),!0):!1},li.unstable_batchedUpdates=Fc,li.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!Ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Dl(t,i,o,!1,u)},li.version="18.3.1-next-f1338f8080-20240426",li}var nm;function Iv(){if(nm)return Yc.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yc.exports=Dv(),Yc.exports}var im;function Uv(){if(im)return Ul;im=1;var s=Iv();return Ul.createRoot=s.createRoot,Ul.hydrateRoot=s.hydrateRoot,Ul}var Nv=Uv();const Fv=m0(Nv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="170",Ov=0,rm=1,zv=2,g0=1,v0=2,br=3,cs=0,$n=1,Mi=2,Ur=0,bo=1,Lf=2,sm=3,om=4,kv=5,Fs=100,Bv=101,Vv=102,Hv=103,Gv=104,Wv=200,Xv=201,jv=202,qv=203,Df=204,If=205,Yv=206,$v=207,Kv=208,Zv=209,Qv=210,Jv=211,e_=212,t_=213,n_=214,Uf=0,Nf=1,Ff=2,Do=3,Of=4,zf=5,kf=6,Bf=7,_u=0,i_=1,r_=2,us=0,_0=1,x0=2,y0=3,Sd=4,s_=5,M0=6,S0=7,E0=300,Io=301,Uo=302,Vf=303,Hf=304,xu=306,Lr=1e3,zs=1001,Gf=1002,Zi=1003,o_=1004,Nl=1005,Si=1006,Zc=1007,ur=1008,Or=1009,w0=1010,T0=1011,Pa=1012,Ed=1013,ks=1014,Dr=1015,Nr=1016,wd=1017,Td=1018,No=1020,A0=35902,C0=1021,R0=1022,Ki=1023,b0=1024,P0=1025,Po=1026,Fo=1027,L0=1028,Ad=1029,D0=1030,Cd=1031,Rd=1033,ou=33776,au=33777,lu=33778,uu=33779,Wf=35840,Xf=35841,jf=35842,qf=35843,Yf=36196,$f=37492,Kf=37496,Zf=37808,Qf=37809,Jf=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,ud=37820,cd=37821,cu=36492,fd=36494,dd=36495,I0=36283,hd=36284,pd=36285,md=36286,a_=3200,l_=3201,yu=0,u_=1,ls="",Ii="srgb",ko="srgb-linear",Mu="linear",Vt="srgb",ho=7680,am=519,c_=512,f_=513,d_=514,U0=515,h_=516,p_=517,m_=518,g_=519,lm=35044,um="300 es",Ir=2e3,du=2001;class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,hu=180/Math.PI;function Da(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[n&63|128]+kn[n>>8&255]+"-"+kn[n>>16&255]+kn[n>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function fi(s,e,n){return Math.max(e,Math.min(n,s))}function v_(s,e){return(s%e+e)%e}function Jc(s,e,n){return(1-n)*s+n*e}function xa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(fi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,n,r,a,l,c,d,h,m){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m)}set(e,n,r,a,l,c,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],M=r[5],E=r[8],T=a[0],y=a[3],g=a[6],D=a[1],L=a[4],b=a[7],K=a[2],z=a[5],F=a[8];return l[0]=c*T+d*D+h*K,l[3]=c*y+d*L+h*z,l[6]=c*g+d*b+h*F,l[1]=m*T+_*D+v*K,l[4]=m*y+_*L+v*z,l[7]=m*g+_*b+v*F,l[2]=x*T+M*D+E*K,l[5]=x*y+M*L+E*z,l[8]=x*g+M*b+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*l*_+r*d*h+a*l*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=_*c-d*m,x=d*h-_*l,M=m*l-c*h,E=n*v+r*x+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*c)*T,e[3]=x*T,e[4]=(_*n-a*h)*T,e[5]=(a*l-d*n)*T,e[6]=M*T,e[7]=(r*h-m*n)*T,e[8]=(c*n-r*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ef.makeScale(e,n)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,n){return this.premultiply(ef.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new xt;function N0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function __(){const s=pu("canvas");return s.style.display="block",s}const cm={};function Ca(s){s in cm||(cm[s]=!0,console.warn(s))}function x_(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function y_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function M_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pt={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Vt&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Vt&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?Mu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fm=[.64,.33,.3,.6,.15,.06],dm=[.2126,.7152,.0722],hm=[.3127,.329],pm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pt.define({[ko]:{primaries:fm,whitePoint:hm,transfer:Mu,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,workingColorSpaceConfig:{unpackColorSpace:Ii},outputColorSpaceConfig:{drawingBufferColorSpace:Ii}},[Ii]:{primaries:fm,whitePoint:hm,transfer:Vt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,outputColorSpaceConfig:{drawingBufferColorSpace:Ii}}});let po;class S_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{po===void 0&&(po=pu("canvas")),po.width=e.width,po.height=e.height;const r=po.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=po}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Fr(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fr(n[r]/255)*255):n[r]=Fr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E_=0;class F0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(tf(a[c].image)):l.push(tf(a[c]))}else l=tf(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function tf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?S_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w_=0;class Kn extends Bo{constructor(e=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,r=zs,a=zs,l=Si,c=ur,d=Ki,h=Or,m=Kn.DEFAULT_ANISOTROPY,_=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Da(),this.name="",this.source=new F0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case zs:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case zs:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=E0;Kn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],M=h[5],E=h[9],T=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,b=(M+1)/2,K=(g+1)/2,z=(_+x)/4,F=(v+T)/4,G=(E+y)/4;return L>b&&L>K?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=z/r,l=F/r):b>K?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=z/a,l=G/a):K<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(K),r=F/l,a=G/l),this.set(r,a,l,n),this}let D=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(v-T)/D,this.z=(x-_)/D,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T_ extends Bo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Kn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new F0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends T_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class O0 extends Kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends Kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,d){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=l[c+0],M=l[c+1],E=l[c+2],T=l[c+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=E,e[n+3]=T;return}if(v!==T||h!==x||m!==M||_!==E){let y=1-d;const g=h*x+m*M+_*E+v*T,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const K=Math.sqrt(L),z=Math.atan2(K,g*D);y=Math.sin(y*z)/K,d=Math.sin(d*z)/K}const b=d*D;if(h=h*y+x*b,m=m*y+M*b,_=_*y+E*b,v=v*y+T*b,y===1-d){const K=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=K,m*=K,_*=K,v*=K}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,c){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=l[c],x=l[c+1],M=l[c+2],E=l[c+3];return e[n]=d*E+_*v+h*M-m*x,e[n+1]=h*E+_*x+m*v-d*M,e[n+2]=m*E+_*M+d*x-h*v,e[n+3]=_*E-d*v-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),v=d(l/2),x=h(r/2),M=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"YZX":this._x=x*_*v+m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v-x*M*E;break;case"XZY":this._x=x*_*v-m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],d=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-h)*M,this._y=(l-m)*M,this._z=(c-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-h)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-m)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(c-a)/M,this._x=(l+m)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fi(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-l*h,this._y=a*_+c*h+l*d-r*m,this._z=l*_+c*m+r*h-a*d,this._w=c*_-r*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*c+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),_=2*(d*n-l*a),v=2*(l*r-c*n);return this.x=n+h*m+c*v-d*_,this.y=r+h*_+d*m-l*v,this.z=a+h*v+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-l*d,this.y=l*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(fi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nf=new q,gm=new Ia;class Ua{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ji):ji.fromBufferAttribute(l,c),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Ol.subVectors(this.max,ya),mo.subVectors(e.a,ya),go.subVectors(e.b,ya),vo.subVectors(e.c,ya),ns.subVectors(go,mo),is.subVectors(vo,go),Rs.subVectors(mo,vo);let n=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Rs.z,Rs.y,ns.z,0,-ns.x,is.z,0,-is.x,Rs.z,0,-Rs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Rs.y,Rs.x,0];return!rf(n,mo,go,vo,Ol)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,mo,go,vo,Ol))?!1:(zl.crossVectors(ns,is),n=[zl.x,zl.y,zl.z],rf(n,mo,go,vo,Ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new q,new q,new q,new q,new q,new q,new q,new q],ji=new q,Fl=new Ua,mo=new q,go=new q,vo=new q,ns=new q,is=new q,Rs=new q,ya=new q,Ol=new q,zl=new q,bs=new q;function rf(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){bs.fromArray(s,l);const d=a.x*Math.abs(bs.x)+a.y*Math.abs(bs.y)+a.z*Math.abs(bs.z),h=e.dot(bs),m=n.dot(bs),_=r.dot(bs);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const C_=new Ua,Ma=new q,sf=new q;class Na{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):C_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const n=Ma.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ma,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(sf)),this.expandByPoint(Ma.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tr=new q,of=new q,kl=new q,rs=new q,af=new q,Bl=new q,lf=new q;class bd{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Tr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,n),Tr.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){of.copy(e).add(n).multiplyScalar(.5),kl.copy(n).sub(e).normalize(),rs.copy(this.origin).sub(of);const l=e.distanceTo(n)*.5,c=-this.direction.dot(kl),d=rs.dot(this.direction),h=-rs.dot(kl),m=rs.lengthSq(),_=Math.abs(1-c*c);let v,x,M,E;if(_>0)if(v=c*h-d,x=c*d-h,E=l*_,v>=0)if(x>=-E)if(x<=E){const T=1/_;v*=T,x*=T,M=v*(v+c*x+2*d)+x*(c*v+x+2*h)+m}else x=l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-c*l+d)),x=v>0?-l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+m):(v=Math.max(0,-(c*l+d)),x=v>0?l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(of).addScaledVector(kl,x),M}intersectSphere(e,n){Tr.subVectors(e.center,this.origin);const r=Tr.dot(this.direction),a=Tr.dot(Tr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,d,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,n,r,a,l){af.subVectors(n,e),Bl.subVectors(r,e),lf.crossVectors(af,Bl);let c=this.direction.dot(lf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;rs.subVectors(this.origin,e);const h=d*this.direction.dot(Bl.crossVectors(rs,Bl));if(h<0)return null;const m=d*this.direction.dot(af.cross(rs));if(m<0||h+m>c)return null;const _=-d*rs.dot(lf);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y)}set(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/_o.setFromMatrixColumn(e,0).length(),l=1/_o.setFromMatrixColumn(e,1).length(),c=1/_o.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-d*h,n[2]=T-x*m,n[6]=E+M*m,n[10]=c*h}else if(e.order==="YXZ"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x+T*d,n[4]=E*d-M,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-d,n[2]=M*d-E,n[6]=T+x*d,n[10]=c*h}else if(e.order==="ZXY"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x-T*d,n[4]=-c*v,n[8]=E+M*d,n[1]=M+E*d,n[5]=c*_,n[9]=T-x*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=h*_,n[4]=E*m-M,n[8]=x*m+T,n[1]=h*v,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const x=c*h,M=c*m,E=d*h,T=d*m;n[0]=h*_,n[4]=T-x*v,n[8]=E*v+M,n[1]=v,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*v+E,n[10]=x-T*v}else if(e.order==="XZY"){const x=c*h,M=c*m,E=d*h,T=d*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=c*_,n[9]=M*v-E,n[2]=E*v-M,n[6]=d*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,b_)}lookAt(e,n,r){const a=this.elements;return xi.subVectors(e,n),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),ss.crossVectors(r,xi),ss.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),ss.crossVectors(r,xi)),ss.normalize(),Vl.crossVectors(xi,ss),a[0]=ss.x,a[4]=Vl.x,a[8]=xi.x,a[1]=ss.y,a[5]=Vl.y,a[9]=xi.y,a[2]=ss.z,a[6]=Vl.z,a[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],M=r[13],E=r[2],T=r[6],y=r[10],g=r[14],D=r[3],L=r[7],b=r[11],K=r[15],z=a[0],F=a[4],G=a[8],P=a[12],C=a[1],V=a[5],le=a[9],ee=a[13],ve=a[2],xe=a[6],pe=a[10],he=a[14],W=a[3],_e=a[7],ge=a[11],k=a[15];return l[0]=c*z+d*C+h*ve+m*W,l[4]=c*F+d*V+h*xe+m*_e,l[8]=c*G+d*le+h*pe+m*ge,l[12]=c*P+d*ee+h*he+m*k,l[1]=_*z+v*C+x*ve+M*W,l[5]=_*F+v*V+x*xe+M*_e,l[9]=_*G+v*le+x*pe+M*ge,l[13]=_*P+v*ee+x*he+M*k,l[2]=E*z+T*C+y*ve+g*W,l[6]=E*F+T*V+y*xe+g*_e,l[10]=E*G+T*le+y*pe+g*ge,l[14]=E*P+T*ee+y*he+g*k,l[3]=D*z+L*C+b*ve+K*W,l[7]=D*F+L*V+b*xe+K*_e,l[11]=D*G+L*le+b*pe+K*ge,l[15]=D*P+L*ee+b*he+K*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],M=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+l*h*v-a*m*v-l*d*x+r*m*x+a*d*M-r*h*M)+T*(+n*h*M-n*m*x+l*c*x-a*c*M+a*m*_-l*h*_)+y*(+n*m*v-n*d*M-l*c*v+r*c*M+l*d*_-r*m*_)+g*(-a*d*_-n*h*v+n*d*x+a*c*v-r*c*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],M=e[11],E=e[12],T=e[13],y=e[14],g=e[15],D=v*y*m-T*x*m+T*h*M-d*y*M-v*h*g+d*x*g,L=E*x*m-_*y*m-E*h*M+c*y*M+_*h*g-c*x*g,b=_*T*m-E*v*m+E*d*M-c*T*M-_*d*g+c*v*g,K=E*v*h-_*T*h-E*d*x+c*T*x+_*d*y-c*v*y,z=n*D+r*L+a*b+l*K;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=D*F,e[1]=(T*x*l-v*y*l-T*a*M+r*y*M+v*a*g-r*x*g)*F,e[2]=(d*y*l-T*h*l+T*a*m-r*y*m-d*a*g+r*h*g)*F,e[3]=(v*h*l-d*x*l-v*a*m+r*x*m+d*a*M-r*h*M)*F,e[4]=L*F,e[5]=(_*y*l-E*x*l+E*a*M-n*y*M-_*a*g+n*x*g)*F,e[6]=(E*h*l-c*y*l-E*a*m+n*y*m+c*a*g-n*h*g)*F,e[7]=(c*x*l-_*h*l+_*a*m-n*x*m-c*a*M+n*h*M)*F,e[8]=b*F,e[9]=(E*v*l-_*T*l-E*r*M+n*T*M+_*r*g-n*v*g)*F,e[10]=(c*T*l-E*d*l+E*r*m-n*T*m-c*r*g+n*d*g)*F,e[11]=(_*d*l-c*v*l-_*r*m+n*v*m+c*r*M-n*d*M)*F,e[12]=K*F,e[13]=(_*T*a-E*v*a+E*r*x-n*T*x-_*r*y+n*v*y)*F,e[14]=(E*d*a-c*T*a-E*r*h+n*T*h+c*r*y-n*d*y)*F,e[15]=(c*v*a-_*d*a+_*r*h-n*v*h-c*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,d=e.y,h=e.z,m=l*c,_=l*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*c,0,m*h-a*d,_*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,d=n._z,h=n._w,m=l+l,_=c+c,v=d+d,x=l*m,M=l*_,E=l*v,T=c*_,y=c*v,g=d*v,D=h*m,L=h*_,b=h*v,K=r.x,z=r.y,F=r.z;return a[0]=(1-(T+g))*K,a[1]=(M+b)*K,a[2]=(E-L)*K,a[3]=0,a[4]=(M-b)*z,a[5]=(1-(x+g))*z,a[6]=(y+D)*z,a[7]=0,a[8]=(E+L)*F,a[9]=(y-D)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=_o.set(a[0],a[1],a[2]).length();const c=_o.set(a[4],a[5],a[6]).length(),d=_o.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],qi.copy(this);const m=1/l,_=1/c,v=1/d;return qi.elements[0]*=m,qi.elements[1]*=m,qi.elements[2]*=m,qi.elements[4]*=_,qi.elements[5]*=_,qi.elements[6]*=_,qi.elements[8]*=v,qi.elements[9]*=v,qi.elements[10]*=v,n.setFromRotationMatrix(qi),r.x=l,r.y=c,r.z=d,this}makePerspective(e,n,r,a,l,c,d=Ir){const h=this.elements,m=2*l/(n-e),_=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let M,E;if(d===Ir)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===du)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,d=Ir){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-l),x=(n+e)*m,M=(r+a)*_;let E,T;if(d===Ir)E=(c+l)*v,T=-2*v;else if(d===du)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const _o=new q,qi=new Kt,R_=new q(0,0,0),b_=new q(1,1,1),ss=new q,Vl=new q,xi=new q,vm=new Kt,_m=new Ia;class Ui{constructor(e=0,n=0,r=0,a=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(fi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-fi(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(fi(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-fi(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(fi(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-fi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P_=0;const xm=new q,xo=new Ia,Ar=new Kt,Hl=new q,Sa=new q,L_=new q,D_=new Ia,ym=new q(1,0,0),Mm=new q(0,1,0),Sm=new q(0,0,1),Em={type:"added"},I_={type:"removed"},yo={type:"childadded",child:null},uf={type:"childremoved",child:null};class ln extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new q,n=new Ui,r=new Ia,a=new q(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new xt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xo.setFromAxisAngle(e,n),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,n){return xo.setFromAxisAngle(e,n),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Hl.copy(e):Hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Sa,Hl,this.up):Ar.lookAt(Hl,Sa,this.up),this.quaternion.setFromRotationMatrix(Ar),a&&(Ar.extractRotation(a.matrixWorld),xo.setFromRotationMatrix(Ar),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I_),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,L_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new q(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new q,Cr=new q,cf=new q,Rr=new q,Mo=new q,So=new q,wm=new q,ff=new q,df=new q,hf=new q,pf=new Wt,mf=new Wt,gf=new Wt;class $i{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Yi.subVectors(e,n),a.cross(Yi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){Yi.subVectors(a,n),Cr.subVectors(r,n),cf.subVectors(e,n);const c=Yi.dot(Yi),d=Yi.dot(Cr),h=Yi.dot(cf),m=Cr.dot(Cr),_=Cr.dot(cf),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const x=1/v,M=(m*h-d*_)*x,E=(c*_-d*h)*x;return l.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,n,r,a,l,c,d,h){return this.getBarycoord(e,n,r,a,Rr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Rr.x),h.addScaledVector(c,Rr.y),h.addScaledVector(d,Rr.z),h)}static getInterpolatedAttribute(e,n,r,a,l,c){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,n),mf.fromBufferAttribute(e,r),gf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(pf,l.x),c.addScaledVector(mf,l.y),c.addScaledVector(gf,l.z),c}static isFrontFacing(e,n,r,a){return Yi.subVectors(r,n),Cr.subVectors(e,n),Yi.cross(Cr).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Yi.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return $i.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,d;Mo.subVectors(a,r),So.subVectors(l,r),ff.subVectors(e,r);const h=Mo.dot(ff),m=So.dot(ff);if(h<=0&&m<=0)return n.copy(r);df.subVectors(e,a);const _=Mo.dot(df),v=So.dot(df);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(Mo,c);hf.subVectors(e,l);const M=Mo.dot(hf),E=So.dot(hf);if(E>=0&&M<=E)return n.copy(l);const T=M*m-h*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(So,d);const y=_*E-M*v;if(y<=0&&v-_>=0&&M-E>=0)return wm.subVectors(l,a),d=(v-_)/(v-_+(M-E)),n.copy(a).addScaledVector(wm,d);const g=1/(y+T+x);return c=T*g,d=x*g,n.copy(r).addScaledVector(Mo,c).addScaledVector(So,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function vf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Pt.workingColorSpace){if(e=v_(e,1),n=fi(n,0,1),r=fi(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=vf(c,l,e+1/3),this.g=vf(c,l,e),this.b=vf(c,l,e-1/3)}return Pt.toWorkingColorSpace(this,a),this}setStyle(e,n=Ii){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ii){const r=k0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return Pt.fromWorkingColorSpace(Bn.copy(this),e),Math.round(fi(Bn.r*255,0,255))*65536+Math.round(fi(Bn.g*255,0,255))*256+Math.round(fi(Bn.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Bn.copy(this),n);const r=Bn.r,a=Bn.g,l=Bn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let h,m;const _=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Bn.copy(this),n),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Ii){Pt.fromWorkingColorSpace(Bn.copy(this),e);const n=Bn.r,r=Bn.g,a=Bn.b;return e!==Ii?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(os),this.setHSL(os.h+e,os.s+n,os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(os),e.getHSL(Gl);const r=Jc(os.h,Gl.h,n),a=Jc(os.s,Gl.s,n),l=Jc(os.l,Gl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new mt;mt.NAMES=k0;let U_=0;class zr extends Bo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Da(),this.name="",this.blending=bo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=If,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==cs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Df&&(r.blendSrc=this.blendSrc),this.blendDst!==If&&(r.blendDst=this.blendDst),this.blendEquation!==Fs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends zr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new q,Wl=new pt;class Yn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=lm,this.updateRanges=[],this.gpuType=Dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=xa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ui(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xa(n,this.array)),n}setX(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xa(n,this.array)),n}setY(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xa(n,this.array)),n}setW(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),r=ui(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),r=ui(r,this.array),a=ui(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),r=ui(r,this.array),a=ui(a,this.array),l=ui(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class B0 extends Yn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class V0 extends Yn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jt extends Yn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let N_=0;const Di=new Kt,_f=new ln,Eo=new q,yi=new Ua,Ea=new Ua,wn=new q;class dn extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?V0:B0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,n,r){return Di.makeTranslation(e,n,r),this.applyMatrix4(Di),this}scale(e,n,r){return Di.makeScale(e,n,r),this.applyMatrix4(Di),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new jt(r,3))}else{for(let r=0,a=n.count;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];Ea.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(yi.min,Ea.min),yi.expandByPoint(wn),wn.addVectors(yi.max,Ea.max),yi.expandByPoint(wn)):(yi.expandByPoint(Ea.min),yi.expandByPoint(Ea.max))}yi.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)wn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(wn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)wn.fromBufferAttribute(d,m),h&&(Eo.fromBufferAttribute(e,m),wn.add(Eo)),a=Math.max(a,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let G=0;G<r.count;G++)d[G]=new q,h[G]=new q;const m=new q,_=new q,v=new q,x=new pt,M=new pt,E=new pt,T=new q,y=new q;function g(G,P,C){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,C),x.fromBufferAttribute(l,G),M.fromBufferAttribute(l,P),E.fromBufferAttribute(l,C),_.sub(m),v.sub(m),M.sub(x),E.sub(x);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(V),d[G].add(T),d[P].add(T),d[C].add(T),h[G].add(y),h[P].add(y),h[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,P=D.length;G<P;++G){const C=D[G],V=C.start,le=C.count;for(let ee=V,ve=V+le;ee<ve;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new q,b=new q,K=new q,z=new q;function F(G){K.fromBufferAttribute(a,G),z.copy(K);const P=d[G];L.copy(P),L.sub(K.multiplyScalar(K.dot(P))).normalize(),b.crossVectors(z,P);const V=b.dot(h[G])<0?-1:1;c.setXYZW(G,L.x,L.y,L.z,V)}for(let G=0,P=D.length;G<P;++G){const C=D[G],V=C.start,le=C.count;for(let ee=V,ve=V+le;ee<ve;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new q,l=new q,c=new q,d=new q,h=new q,m=new q,_=new q,v=new q;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(h.length*_);let M=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?M=h[T]*d.data.stride+d.offset:M=h[T]*_;for(let g=0;g<_;g++)x[E++]=m[M++]}return new Yn(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],M=e(x,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new Kt,Ps=new bd,Xl=new Na,Am=new q,jl=new q,ql=new q,Yl=new q,xf=new q,$l=new q,Cm=new q,Kl=new q;class ze extends ln{constructor(e=new dn,n=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){$l.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=d[h],v=l[h];_!==0&&(xf.fromBufferAttribute(v,e),c?$l.addScaledVector(xf,_):$l.addScaledVector(xf.sub(n),_))}n.add($l)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(l),Ps.copy(e.ray).recast(e.near),!(Xl.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Xl,Am)===null||Ps.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),Ps.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&Ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ps)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,x=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],D=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let b=D,K=L;b<K;b+=3){const z=d.getX(b),F=d.getX(b+1),G=d.getX(b+2);a=Zl(this,g,e,r,m,_,v,z,F,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=d.getX(y),L=d.getX(y+1),b=d.getX(y+2);a=Zl(this,c,e,r,m,_,v,D,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],D=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let b=D,K=L;b<K;b+=3){const z=b,F=b+1,G=b+2;a=Zl(this,g,e,r,m,_,v,z,F,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=y,L=y+1,b=y+2;a=Zl(this,c,e,r,m,_,v,D,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function F_(s,e,n,r,a,l,c,d){let h;if(e.side===$n?h=r.intersectTriangle(c,l,a,!0,d):h=r.intersectTriangle(a,l,c,e.side===cs,d),h===null)return null;Kl.copy(d),Kl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Kl);return m<n.near||m>n.far?null:{distance:m,point:Kl.clone(),object:s}}function Zl(s,e,n,r,a,l,c,d,h,m){s.getVertexPosition(d,jl),s.getVertexPosition(h,ql),s.getVertexPosition(m,Yl);const _=F_(s,e,n,r,jl,ql,Yl,Cm);if(_){const v=new q;$i.getBarycoord(Cm,jl,ql,Yl,v),a&&(_.uv=$i.getInterpolatedAttribute(a,d,h,m,v,new pt)),l&&(_.uv1=$i.getInterpolatedAttribute(l,d,h,m,v,new pt)),c&&(_.normal=$i.getInterpolatedAttribute(c,d,h,m,v,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new q,materialIndex:0};$i.getNormal(jl,ql,Yl,x.normal),_.face=x,_.barycoord=v}return _}class Bt extends dn{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,r,n,e,c,l,0),E("z","y","x",1,-1,r,n,-e,c,l,1),E("x","z","y",1,1,e,r,n,a,c,2),E("x","z","y",1,-1,e,r,-n,a,c,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(v,2));function E(T,y,g,D,L,b,K,z,F,G,P){const C=b/F,V=K/G,le=b/2,ee=K/2,ve=z/2,xe=F+1,pe=G+1;let he=0,W=0;const _e=new q;for(let ge=0;ge<pe;ge++){const k=ge*V-ee;for(let fe=0;fe<xe;fe++){const We=fe*C-le;_e[T]=We*D,_e[y]=k*L,_e[g]=ve,m.push(_e.x,_e.y,_e.z),_e[T]=0,_e[y]=0,_e[g]=z>0?1:-1,_.push(_e.x,_e.y,_e.z),v.push(fe/F),v.push(1-ge/G),he+=1}}for(let ge=0;ge<G;ge++)for(let k=0;k<F;k++){const fe=x+k+xe*ge,We=x+k+xe*(ge+1),re=x+(k+1)+xe*(ge+1),ye=x+(k+1)+xe*ge;h.push(fe,We,ye),h.push(We,re,ye),W+=6}d.addGroup(M,W,P),M+=W,x+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function qn(s){const e={};for(let n=0;n<s.length;n++){const r=Oo(s[n]);for(const a in r)e[a]=r[a]}return e}function O_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function H0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const La={clone:Oo,merge:qn};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends zr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=k_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=O_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class G0 extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ir}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new q,Rm=new pt,bm=new pt;class di extends G0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,bm),n.subVectors(bm,Rm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,To=1;class B_ extends ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new di(wo,To,e,n);a.layers=this.layers,this.add(a);const l=new di(wo,To,e,n);l.layers=this.layers,this.add(l);const c=new di(wo,To,e,n);c.layers=this.layers,this.add(c);const d=new di(wo,To,e,n);d.layers=this.layers,this.add(d);const h=new di(wo,To,e,n);h.layers=this.layers,this.add(h);const m=new di(wo,To,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,d,h]=n;for(const m of n)this.remove(m);if(e===Ir)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===du)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class W0 extends Kn{constructor(e,n,r,a,l,c,d,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Io,super(e,n,r,a,l,c,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V_ extends Qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new W0(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Bt(5,5,5),l=new An({name:"CubemapFromEquirect",uniforms:Oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:Ur});l.uniforms.tEquirect.value=n;const c=new ze(a,l),d=n.minFilter;return n.minFilter===ur&&(n.minFilter=Si),new B_(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}const yf=new q,H_=new q,G_=new xt;class Us{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=yf.subVectors(r,n).cross(H_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(yf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||G_.getNormalMatrix(e),a=this.coplanarPoint(yf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Na,Ql=new q;class Pd{constructor(e=new Us,n=new Us,r=new Us,a=new Us,l=new Us,c=new Us){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ir){const r=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],M=a[8],E=a[9],T=a[10],y=a[11],g=a[12],D=a[13],L=a[14],b=a[15];if(r[0].setComponents(h-l,x-m,y-M,b-g).normalize(),r[1].setComponents(h+l,x+m,y+M,b+g).normalize(),r[2].setComponents(h+c,x+_,y+E,b+D).normalize(),r[3].setComponents(h-c,x-_,y-E,b-D).normalize(),r[4].setComponents(h-d,x-v,y-T,b-L).normalize(),n===Ir)r[5].setComponents(h+d,x+v,y+T,b+L).normalize();else if(n===du)r[5].setComponents(d,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Ql.x=a.normal.x>0?e.max.x:e.min.x,Ql.y=a.normal.y>0?e.max.y:e.min.y,Ql.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X0(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function W_(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],T=v[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const T=v[M];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:c}}class Vn extends dn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,v=e/d,x=n/h,M=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*x-c;for(let L=0;L<m;L++){const b=L*v-l;E.push(b,-D,0),T.push(0,0,1),y.push(L/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<d;D++){const L=D+m*g,b=D+m*(g+1),K=D+1+m*(g+1),z=D+1+m*g;M.push(L,b,z),M.push(b,K,z)}this.setIndex(M),this.setAttribute("position",new jt(E,3)),this.setAttribute("normal",new jt(T,3)),this.setAttribute("uv",new jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var X_=`#ifdef USE_ALPHAHASH
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
}`,Mt={alphahash_fragment:X_,alphahash_pars_fragment:j_,alphamap_fragment:q_,alphamap_pars_fragment:Y_,alphatest_fragment:$_,alphatest_pars_fragment:K_,aomap_fragment:Z_,aomap_pars_fragment:Q_,batching_pars_vertex:J_,batching_vertex:ex,begin_vertex:tx,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:lx,clipping_planes_vertex:ux,color_fragment:cx,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:hx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:vx,displacementmap_vertex:_x,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:Mx,colorspace_pars_fragment:Sx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Ox,envmap_vertex:Cx,fog_vertex:Rx,fog_pars_vertex:bx,fog_fragment:Px,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Nx,lights_pars_begin:Fx,lights_toon_fragment:zx,lights_toon_pars_fragment:kx,lights_phong_fragment:Bx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:jx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:Kx,map_fragment:Zx,map_pars_fragment:Qx,map_particle_fragment:Jx,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:ry,morphnormal_vertex:sy,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:ly,normal_fragment_maps:uy,normal_pars_fragment:cy,normal_pars_vertex:fy,normal_vertex:dy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:vy,opaque_fragment:_y,packing:xy,premultiplied_alpha_fragment:yy,project_vertex:My,dithering_fragment:Sy,dithering_pars_fragment:Ey,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:by,skinbase_vertex:Py,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Iy,specularmap_fragment:Uy,specularmap_pars_fragment:Ny,tonemapping_fragment:Fy,tonemapping_pars_fragment:Oy,transmission_fragment:zy,transmission_pars_fragment:ky,uv_pars_fragment:By,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:jy,backgroundCube_frag:qy,cube_vert:Yy,cube_frag:$y,depth_vert:Ky,depth_frag:Zy,distanceRGBA_vert:Qy,distanceRGBA_frag:Jy,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:oM,meshlambert_frag:aM,meshmatcap_vert:lM,meshmatcap_frag:uM,meshnormal_vert:cM,meshnormal_frag:fM,meshphong_vert:dM,meshphong_frag:hM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:vM,points_vert:_M,points_frag:xM,shadow_vert:yM,shadow_frag:MM,sprite_vert:SM,sprite_frag:EM},Ve={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},lr={basic:{uniforms:qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new mt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:qn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:qn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:qn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new mt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:qn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:qn([Ve.points,Ve.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:qn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:qn([Ve.common,Ve.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:qn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:qn([Ve.sprite,Ve.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:qn([Ve.common,Ve.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:qn([Ve.lights,Ve.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};lr.physical={uniforms:qn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Jl={r:0,b:0,g:0},Ds=new Ui,wM=new Kt;function TM(s,e,n,r,a,l,c){const d=new mt(0);let h=l===!0?0:1,m,_,v=null,x=0,M=null;function E(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:e).get(L)),L}function T(D){let L=!1;const b=E(D);b===null?g(d,h):b&&b.isColor&&(g(b,1),L=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,c):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,L){const b=E(L);b&&(b.isCubeTexture||b.mapping===xu)?(_===void 0&&(_=new ze(new Bt(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Oo(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(K,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Ds.copy(L.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),_.material.uniforms.envMap.value=b,_.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Ds)),_.material.toneMapped=Pt.getTransfer(b.colorSpace)!==Vt,(v!==b||x!==b.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=b,x=b.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new ze(new Vn(2,2),new An({name:"BackgroundMaterial",uniforms:Oo(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(b.colorSpace)!==Vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||x!==b.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=b,x=b.version,M=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,L){D.getRGB(Jl,H0(s)),r.buffers.color.setClear(Jl.r,Jl.g,Jl.b,L,c)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),h=L,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:T,addToRenderList:y}}function AM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function d(C,V,le,ee,ve){let xe=!1;const pe=v(ee,le,V);l!==pe&&(l=pe,m(l.object)),xe=M(C,ee,le,ve),xe&&E(C,ee,le,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(xe||c)&&(c=!1,b(C,V,le,ee),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function v(C,V,le){const ee=le.wireframe===!0;let ve=r[C.id];ve===void 0&&(ve={},r[C.id]=ve);let xe=ve[V.id];xe===void 0&&(xe={},ve[V.id]=xe);let pe=xe[ee];return pe===void 0&&(pe=x(h()),xe[ee]=pe),pe}function x(C){const V=[],le=[],ee=[];for(let ve=0;ve<n;ve++)V[ve]=0,le[ve]=0,ee[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:le,attributeDivisors:ee,object:C,attributes:{},index:null}}function M(C,V,le,ee){const ve=l.attributes,xe=V.attributes;let pe=0;const he=le.getAttributes();for(const W in he)if(he[W].location>=0){const ge=ve[W];let k=xe[W];if(k===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),ge===void 0||ge.attribute!==k||k&&ge.data!==k.data)return!0;pe++}return l.attributesNum!==pe||l.index!==ee}function E(C,V,le,ee){const ve={},xe=V.attributes;let pe=0;const he=le.getAttributes();for(const W in he)if(he[W].location>=0){let ge=xe[W];ge===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor));const k={};k.attribute=ge,ge&&ge.data&&(k.data=ge.data),ve[W]=k,pe++}l.attributes=ve,l.attributesNum=pe,l.index=ee}function T(){const C=l.newAttributes;for(let V=0,le=C.length;V<le;V++)C[V]=0}function y(C){g(C,0)}function g(C,V){const le=l.newAttributes,ee=l.enabledAttributes,ve=l.attributeDivisors;le[C]=1,ee[C]===0&&(s.enableVertexAttribArray(C),ee[C]=1),ve[C]!==V&&(s.vertexAttribDivisor(C,V),ve[C]=V)}function D(){const C=l.newAttributes,V=l.enabledAttributes;for(let le=0,ee=V.length;le<ee;le++)V[le]!==C[le]&&(s.disableVertexAttribArray(le),V[le]=0)}function L(C,V,le,ee,ve,xe,pe){pe===!0?s.vertexAttribIPointer(C,V,le,ve,xe):s.vertexAttribPointer(C,V,le,ee,ve,xe)}function b(C,V,le,ee){T();const ve=ee.attributes,xe=le.getAttributes(),pe=V.defaultAttributeValues;for(const he in xe){const W=xe[he];if(W.location>=0){let _e=ve[he];if(_e===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor)),_e!==void 0){const ge=_e.normalized,k=_e.itemSize,fe=e.get(_e);if(fe===void 0)continue;const We=fe.buffer,re=fe.type,ye=fe.bytesPerElement,Ie=re===s.INT||re===s.UNSIGNED_INT||_e.gpuType===Ed;if(_e.isInterleavedBufferAttribute){const Re=_e.data,Be=Re.stride,Xe=_e.offset;if(Re.isInstancedInterleavedBuffer){for(let lt=0;lt<W.locationSize;lt++)g(W.location+lt,Re.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let lt=0;lt<W.locationSize;lt++)y(W.location+lt);s.bindBuffer(s.ARRAY_BUFFER,We);for(let lt=0;lt<W.locationSize;lt++)L(W.location+lt,k/W.locationSize,re,ge,Be*ye,(Xe+k/W.locationSize*lt)*ye,Ie)}else{if(_e.isInstancedBufferAttribute){for(let Re=0;Re<W.locationSize;Re++)g(W.location+Re,_e.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Re=0;Re<W.locationSize;Re++)y(W.location+Re);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Re=0;Re<W.locationSize;Re++)L(W.location+Re,k/W.locationSize,re,ge,k*ye,k/W.locationSize*Re*ye,Ie)}}else if(pe!==void 0){const ge=pe[he];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(W.location,ge);break;case 3:s.vertexAttrib3fv(W.location,ge);break;case 4:s.vertexAttrib4fv(W.location,ge);break;default:s.vertexAttrib1fv(W.location,ge)}}}}D()}function K(){G();for(const C in r){const V=r[C];for(const le in V){const ee=V[le];for(const ve in ee)_(ee[ve].object),delete ee[ve];delete V[le]}delete r[C]}}function z(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const le in V){const ee=V[le];for(const ve in ee)_(ee[ve].object),delete ee[ve];delete V[le]}delete r[C.id]}function F(C){for(const V in r){const le=r[V];if(le[C.id]===void 0)continue;const ee=le[C.id];for(const ve in ee)_(ee[ve].object),delete ee[ve];delete le[C.id]}}function G(){P(),c=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:P,dispose:K,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function CM(s,e,n){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];n.update(M,r,1)}function h(m,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)c(m[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=_[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function RM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Ki&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const G=F===Nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Or&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Dr&&!G)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:K,maxSamples:z}}function bM(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Us,d=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||a;return a=x,r=v.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||E===null||E.length===0||l&&!y)l?_(null):m();else{const D=l?0:r,L=D*4;let b=g.clippingState||null;h.value=b,b=_(E,x,L,M);for(let K=0;K!==L;++K)b[K]=n[K];g.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const g=M+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,b=M;L!==T;++L,b+=4)c.copy(v[L]).applyMatrix4(D,d),c.normal.toArray(y,b),y[b+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function PM(s){let e=new WeakMap;function n(c,d){return d===Vf?c.mapping=Io:d===Hf&&(c.mapping=Uo),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===Vf||d===Hf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new V_(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Ld extends G0{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=4,Pm=[.125,.215,.35,.446,.526,.582],Os=20,Mf=new Ld,Lm=new mt;let Sf=null,Ef=0,wf=0,Tf=!1;const Ns=(1+Math.sqrt(5))/2,Ao=1/Ns,Dm=[new q(-Ns,Ao,0),new q(Ns,Ao,0),new q(-Ao,0,Ns),new q(Ao,0,Ns),new q(0,Ns,-Ao),new q(0,Ns,Ao),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Ef,wf),this._renderer.xr.enabled=Tf,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Nr,format:Ki,colorSpace:ko,depthBuffer:!1},a=Um(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(l)),this._blurMaterial=DM(l,e,n)}return a}_compileMaterial(e){const n=new ze(this._lodPlanes[0],e);this._renderer.compile(n,Mf)}_sceneToCubeUV(e,n,r,a){const d=new di(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Lm),_.toneMapping=us,_.autoClear=!1;const M=new ci({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),E=new ze(new Bt,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(Lm),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;eu(a,D*L,g>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Io||e.mapping===Uo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ze(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;eu(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,Mf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Dm[(a-l-1)%Dm.length];this._blur(e,l-1,l,c,d)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new ze(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Os-1),T=l/E,y=isFinite(l)?1+Math.floor(_*T):Os;y>Os&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const g=[];let D=0;for(let F=0;F<Os;++F){const G=F/T,P=Math.exp(-G*G/2);g.push(P),F===0?D+=P:F<y&&(D+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const b=this._sizeLods[a],K=3*b*(a>L-Co?a-L+Co:0),z=4*(this._cubeSize-b);eu(n,K,z,3*b,2*b),h.setRenderTarget(n),h.render(v,Mf)}}function LM(s){const e=[],n=[],r=[];let a=s;const l=s-Co+1+Pm.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);n.push(d);let h=1/d;c>s-Co?h=Pm[c-s+Co-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,T=3,y=2,g=1,D=new Float32Array(T*E*M),L=new Float32Array(y*E*M),b=new Float32Array(g*E*M);for(let z=0;z<M;z++){const F=z%3*2/3-1,G=z>2?0:-1,P=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];D.set(P,T*E*z),L.set(x,y*E*z);const C=[z,z,z,z,z,z];b.set(C,g*E*z)}const K=new dn;K.setAttribute("position",new Yn(D,T)),K.setAttribute("uv",new Yn(L,y)),K.setAttribute("faceIndex",new Yn(b,g)),e.push(K),a>Co&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Um(s,e,n){const r=new Qi(s,e,n);return r.texture.mapping=xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function eu(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function DM(s,e,n){const r=new Float32Array(Os),a=new q(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Nm(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Fm(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function IM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===Vf||h===Hf,_=h===Io||h===Uo;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function UM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ca("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function NM(s,e,n,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",c),delete a[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(v){const x=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let L=0,b=D.length;L<b;L+=3){const K=D[L+0],z=D[L+1],F=D[L+2];x.push(K,z,z,F,F,K)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,b=D.length/3-1;L<b;L+=3){const K=L+0,z=L+1,F=L+2;x.push(K,z,z,F,F,K)}}else return;const y=new(N0(x)?V0:B0)(x,1);y.version=T;const g=l.get(v);g&&e.remove(g),l.set(v,y)}function _(v){const x=l.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function FM(s,e,n){let r;function a(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,M){s.drawElements(r,M,l,x*c),n.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,x*c,E),n.update(M,r,E))}function _(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];n.update(y,r,1)}function v(x,M,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/c,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,x,0,T,0,E);let g=0;for(let D=0;D<E;D++)g+=M[D]*T[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function OM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function zM(s,e,n){const r=new WeakMap,a=new Wt;function l(c,d,h){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),y===!0&&(b=3);let K=d.attributes.position.count*b,z=1;K>e.maxTextureSize&&(z=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const F=new Float32Array(K*z*4*v),G=new O0(F,K,z,v);G.type=Dr,G.needsUpdate=!0;const P=b*4;for(let V=0;V<v;V++){const le=g[V],ee=D[V],ve=L[V],xe=K*z*4*V;for(let pe=0;pe<le.count;pe++){const he=pe*P;E===!0&&(a.fromBufferAttribute(le,pe),F[xe+he+0]=a.x,F[xe+he+1]=a.y,F[xe+he+2]=a.z,F[xe+he+3]=0),T===!0&&(a.fromBufferAttribute(ee,pe),F[xe+he+4]=a.x,F[xe+he+5]=a.y,F[xe+he+6]=a.z,F[xe+he+7]=0),y===!0&&(a.fromBufferAttribute(ve,pe),F[xe+he+8]=a.x,F[xe+he+9]=a.y,F[xe+he+10]=a.z,F[xe+he+11]=ve.itemSize===4?a.w:1)}}x={count:v,texture:G,size:new pt(K,z)},r.set(d,x),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function kM(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:c}}class j0 extends Kn{constructor(e,n,r,a,l,c,d,h,m,_=Po){if(_!==Po&&_!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Po&&(r=ks),r===void 0&&_===Fo&&(r=No),super(null,a,l,c,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Zi,this.minFilter=h!==void 0?h:Zi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const q0=new Kn,Om=new j0(1,1),Y0=new O0,$0=new A_,K0=new W0,zm=[],km=[],Bm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Vo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=zm[a];if(l===void 0&&(l=new Float32Array(a),zm[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function _n(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function xn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Su(s,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;s.uniform2fv(this.addr,e),xn(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;s.uniform3fv(this.addr,e),xn(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;s.uniform4fv(this.addr,e),xn(n,e)}}function WM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),xn(n,r)}}function XM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),xn(n,r)}}function jM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),xn(n,r)}}function qM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;s.uniform2iv(this.addr,e),xn(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;s.uniform3iv(this.addr,e),xn(n,e)}}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;s.uniform4iv(this.addr,e),xn(n,e)}}function ZM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;s.uniform2uiv(this.addr,e),xn(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;s.uniform3uiv(this.addr,e),xn(n,e)}}function eS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;s.uniform4uiv(this.addr,e),xn(n,e)}}function tS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Om.compareFunction=U0,l=Om):l=q0,n.setTexture2D(e||l,a)}function nS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$0,a)}function iS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||K0,a)}function rS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Y0,a)}function sS(s){switch(s){case 5126:return BM;case 35664:return VM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return QM;case 36295:return JM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function oS(s,e){s.uniform1fv(this.addr,e)}function aS(s,e){const n=Vo(e,this.size,2);s.uniform2fv(this.addr,n)}function lS(s,e){const n=Vo(e,this.size,3);s.uniform3fv(this.addr,n)}function uS(s,e){const n=Vo(e,this.size,4);s.uniform4fv(this.addr,n)}function cS(s,e){const n=Vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function fS(s,e){const n=Vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dS(s,e){const n=Vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function hS(s,e){s.uniform1iv(this.addr,e)}function pS(s,e){s.uniform2iv(this.addr,e)}function mS(s,e){s.uniform3iv(this.addr,e)}function gS(s,e){s.uniform4iv(this.addr,e)}function vS(s,e){s.uniform1uiv(this.addr,e)}function _S(s,e){s.uniform2uiv(this.addr,e)}function xS(s,e){s.uniform3uiv(this.addr,e)}function yS(s,e){s.uniform4uiv(this.addr,e)}function MS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);_n(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||q0,l[c])}function SS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);_n(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||$0,l[c])}function ES(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);_n(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||K0,l[c])}function wS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);_n(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Y0,l[c])}function TS(s){switch(s){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return uS;case 35674:return cS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return hS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return _S;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return wS}}class AS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=sS(n.type)}}class CS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TS(n.type)}}class RS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function Gm(s,e){s.seq.push(e),s.map[e.id]=e}function bS(s,e,n){const r=s.name,a=r.length;for(Af.lastIndex=0;;){const l=Af.exec(r),c=Af.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){Gm(n,m===void 0?new AS(d,s,e):new CS(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new RS(d),Gm(n,v)),n=v}}}class fu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);bS(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Wm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const PS=37297;let LS=0;function DS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Xm=new xt;function IS(s){Pt._getMatrix(Xm,Pt.workingColorSpace,s);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Mu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+DS(s.getShaderSource(e),c)}else return a}function US(s,e){const n=IS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function NS(s,e){let n;switch(e){case _0:n="Linear";break;case x0:n="Reinhard";break;case y0:n="Cineon";break;case Sd:n="ACESFilmic";break;case M0:n="AgX";break;case S0:n="Neutral";break;case s_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tu=new q;function FS(){Pt.getLuminanceCoefficients(tu);const s=tu.x.toFixed(4),e=tu.y.toFixed(4),n=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function zS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function kS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Ra(s){return s!==""}function qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(BS,HS)}const VS=new Map;function HS(s,e){let n=Mt[e];if(n===void 0){const r=VS.get(e);if(r!==void 0)n=Mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gd(n)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(GS,WS)}function WS(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function XS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function jS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function YS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case i_:e="ENVMAP_BLENDING_MIX";break;case r_:e="ENVMAP_BLENDING_ADD";break}return e}function $S(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function KS(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=XS(n),m=jS(n),_=qS(n),v=YS(n),x=$S(n),M=OS(n),E=zS(l),T=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ra).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ra).join(`
`),g.length>0&&(g+=`
`)):(y=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),g=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==us?"#define TONE_MAPPING":"",n.toneMapping!==us?Mt.tonemapping_pars_fragment:"",n.toneMapping!==us?NS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,US("linearToOutputTexel",n.outputColorSpace),FS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ra).join(`
`)),c=gd(c),c=qm(c,n),c=Ym(c,n),d=gd(d),d=qm(d,n),d=Ym(d,n),c=$m(c),d=$m(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+y+c,b=D+g+d,K=Wm(a,a.VERTEX_SHADER,L),z=Wm(a,a.FRAGMENT_SHADER,b);a.attachShader(T,K),a.attachShader(T,z),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(V){if(s.debug.checkShaderErrors){const le=a.getProgramInfoLog(T).trim(),ee=a.getShaderInfoLog(K).trim(),ve=a.getShaderInfoLog(z).trim();let xe=!0,pe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(xe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,K,z);else{const he=jm(a,K,"vertex"),W=jm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+he+`
`+W)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ee===""||ve==="")&&(pe=!1);pe&&(V.diagnostics={runnable:xe,programLog:le,vertexShader:{log:ee,prefix:y},fragmentShader:{log:ve,prefix:g}})}a.deleteShader(K),a.deleteShader(z),G=new fu(a,T),P=kS(a,T)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,PS)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=K,this.fragmentShader=z,this}let ZS=0;class QS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new JS(e),n.set(e,r)),r}}class JS{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function e1(s,e,n,r,a,l,c){const d=new z0,h=new QS,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,C,V,le,ee){const ve=le.fog,xe=ee.geometry,pe=P.isMeshStandardMaterial?le.environment:null,he=(P.isMeshStandardMaterial?n:e).get(P.envMap||pe),W=he&&he.mapping===xu?he.image.height:null,_e=E[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ge=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,k=ge!==void 0?ge.length:0;let fe=0;xe.morphAttributes.position!==void 0&&(fe=1),xe.morphAttributes.normal!==void 0&&(fe=2),xe.morphAttributes.color!==void 0&&(fe=3);let We,re,ye,Ie;if(_e){const je=lr[_e];We=je.vertexShader,re=je.fragmentShader}else We=P.vertexShader,re=P.fragmentShader,h.update(P),ye=h.getVertexShaderID(P),Ie=h.getFragmentShaderID(P);const Re=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),Xe=ee.isInstancedMesh===!0,lt=ee.isBatchedMesh===!0,Ot=!!P.map,St=!!P.matcap,Ht=!!he,Z=!!P.aoMap,Cn=!!P.lightMap,Et=!!P.bumpMap,_t=!!P.normalMap,at=!!P.displacementMap,Nt=!!P.emissiveMap,rt=!!P.metalnessMap,U=!!P.roughnessMap,w=P.anisotropy>0,ae=P.clearcoat>0,Ee=P.dispersion>0,Te=P.iridescence>0,Me=P.sheen>0,Je=P.transmission>0,A=w&&!!P.anisotropyMap,O=ae&&!!P.clearcoatMap,I=ae&&!!P.clearcoatNormalMap,X=ae&&!!P.clearcoatRoughnessMap,J=Te&&!!P.iridescenceMap,de=Te&&!!P.iridescenceThicknessMap,se=Me&&!!P.sheenColorMap,we=Me&&!!P.sheenRoughnessMap,be=!!P.specularMap,He=!!P.specularColorMap,st=!!P.specularIntensityMap,B=Je&&!!P.transmissionMap,De=Je&&!!P.thicknessMap,ne=!!P.gradientMap,me=!!P.alphaMap,ke=P.alphaTest>0,Oe=!!P.alphaHash,ot=!!P.extensions;let te=us;P.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(te=s.toneMapping);const et={shaderID:_e,shaderType:P.type,shaderName:P.name,vertexShader:We,fragmentShader:re,defines:P.defines,customVertexShaderID:ye,customFragmentShaderID:Ie,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:lt,batchingColor:lt&&ee._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ee.instanceColor!==null,instancingMorph:Xe&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ko,alphaToCoverage:!!P.alphaToCoverage,map:Ot,matcap:St,envMap:Ht,envMapMode:Ht&&he.mapping,envMapCubeUVHeight:W,aoMap:Z,lightMap:Cn,bumpMap:Et,normalMap:_t,displacementMap:x&&at,emissiveMap:Nt,normalMapObjectSpace:_t&&P.normalMapType===u_,normalMapTangentSpace:_t&&P.normalMapType===yu,metalnessMap:rt,roughnessMap:U,anisotropy:w,anisotropyMap:A,clearcoat:ae,clearcoatMap:O,clearcoatNormalMap:I,clearcoatRoughnessMap:X,dispersion:Ee,iridescence:Te,iridescenceMap:J,iridescenceThicknessMap:de,sheen:Me,sheenColorMap:se,sheenRoughnessMap:we,specularMap:be,specularColorMap:He,specularIntensityMap:st,transmission:Je,transmissionMap:B,thicknessMap:De,gradientMap:ne,opaque:P.transparent===!1&&P.blending===bo&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:ke,alphaHash:Oe,combine:P.combine,mapUv:Ot&&T(P.map.channel),aoMapUv:Z&&T(P.aoMap.channel),lightMapUv:Cn&&T(P.lightMap.channel),bumpMapUv:Et&&T(P.bumpMap.channel),normalMapUv:_t&&T(P.normalMap.channel),displacementMapUv:at&&T(P.displacementMap.channel),emissiveMapUv:Nt&&T(P.emissiveMap.channel),metalnessMapUv:rt&&T(P.metalnessMap.channel),roughnessMapUv:U&&T(P.roughnessMap.channel),anisotropyMapUv:A&&T(P.anisotropyMap.channel),clearcoatMapUv:O&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:I&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:se&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:we&&T(P.sheenRoughnessMap.channel),specularMapUv:be&&T(P.specularMap.channel),specularColorMapUv:He&&T(P.specularColorMap.channel),specularIntensityMapUv:st&&T(P.specularIntensityMap.channel),transmissionMapUv:B&&T(P.transmissionMap.channel),thicknessMapUv:De&&T(P.thicknessMap.channel),alphaMapUv:me&&T(P.alphaMap.channel),vertexTangents:!!xe.attributes.tangent&&(_t||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!xe.attributes.uv&&(Ot||me),fog:!!ve,useFog:P.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Be,skinning:ee.isSkinnedMesh===!0,morphTargets:xe.morphAttributes.position!==void 0,morphNormals:xe.morphAttributes.normal!==void 0,morphColors:xe.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:Ot&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Vt,decodeVideoTextureEmissive:Nt&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Vt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Mi,flipSided:P.side===$n,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||lt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return et.vertexUv1s=m.has(1),et.vertexUv2s=m.has(2),et.vertexUv3s=m.has(3),m.clear(),et}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(D(C,P),L(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function b(P){const C=E[P.type];let V;if(C){const le=lr[C];V=La.clone(le.uniforms)}else V=P.uniforms;return V}function K(P,C){let V;for(let le=0,ee=_.length;le<ee;le++){const ve=_[le];if(ve.cacheKey===C){V=ve,++V.usedTimes;break}}return V===void 0&&(V=new KS(s,C,P,l),_.push(V)),V}function z(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function F(P){h.remove(P)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:K,releaseProgram:z,releaseShaderCache:F,programs:_,dispose:G}}function t1(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function n1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,M,E,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function d(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function h(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||n1),r.length>1&&r.sort(x||Zm),a.length>1&&a.sort(x||Zm)}function _(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:_,sort:m}}function i1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Qm,s.set(r,[c])):a>=l.length?(c=new Qm,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function r1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new mt};break;case"SpotLight":n={position:new q,direction:new q,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=n,n}}}function s1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let o1=0;function a1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function l1(s){const e=new r1,n=s1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const a=new q,l=new Kt,c=new Kt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,E=0,T=0,y=0,g=0,D=0,L=0,b=0,K=0,z=0,F=0;m.sort(a1);for(let P=0,C=m.length;P<C;P++){const V=m[P],le=V.color,ee=V.intensity,ve=V.distance,xe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=le.r*ee,v+=le.g*ee,x+=le.b*ee;else if(V.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(V.sh.coefficients[pe],ee);F++}else if(V.isDirectionalLight){const pe=e.get(V);if(pe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const he=V.shadow,W=n.get(V);W.shadowIntensity=he.intensity,W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=xe,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=pe,M++}else if(V.isSpotLight){const pe=e.get(V);pe.position.setFromMatrixPosition(V.matrixWorld),pe.color.copy(le).multiplyScalar(ee),pe.distance=ve,pe.coneCos=Math.cos(V.angle),pe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),pe.decay=V.decay,r.spot[T]=pe;const he=V.shadow;if(V.map&&(r.spotLightMap[K]=V.map,K++,he.updateMatrices(V),V.castShadow&&z++),r.spotLightMatrix[T]=he.matrix,V.castShadow){const W=n.get(V);W.shadowIntensity=he.intensity,W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=xe,b++}T++}else if(V.isRectAreaLight){const pe=e.get(V);pe.color.copy(le).multiplyScalar(ee),pe.halfWidth.set(V.width*.5,0,0),pe.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=pe,y++}else if(V.isPointLight){const pe=e.get(V);if(pe.color.copy(V.color).multiplyScalar(V.intensity),pe.distance=V.distance,pe.decay=V.decay,V.castShadow){const he=V.shadow,W=n.get(V);W.shadowIntensity=he.intensity,W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,W.shadowCameraNear=he.camera.near,W.shadowCameraFar=he.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=xe,r.pointShadowMatrix[E]=V.shadow.matrix,L++}r.point[E]=pe,E++}else if(V.isHemisphereLight){const pe=e.get(V);pe.skyColor.copy(V.color).multiplyScalar(ee),pe.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[g]=pe,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==M||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==D||G.numPointShadows!==L||G.numSpotShadows!==b||G.numSpotMaps!==K||G.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+K-z,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,G.directionalLength=M,G.pointLength=E,G.spotLength=T,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=D,G.numPointShadows=L,G.numSpotShadows=b,G.numSpotMaps=K,G.numLightProbes=F,r.version=o1++)}function h(m,_){let v=0,x=0,M=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),v++}else if(L.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const b=r.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function Jm(s){const e=new l1(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function u1(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Jm(s),e.set(a,[d])):l>=c.length?(d=new Jm(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class c1 extends zr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends zr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d1=`void main() {
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
}`;function p1(s,e,n){let r=new Pd;const a=new pt,l=new pt,c=new Wt,d=new c1({depthPacking:l_}),h=new f1,m={},_=n.maxTextureSize,v={[cs]:$n,[$n]:cs,[Mi]:Mi},x=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:d1,fragmentShader:h1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new dn;E.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ze(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let g=this.type;this.render=function(z,F,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Ur),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ee=g!==br&&this.type===br,ve=g===br&&this.type!==br;for(let xe=0,pe=z.length;xe<pe;xe++){const he=z[xe],W=he.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const _e=W.getFrameExtents();if(a.multiply(_e),l.copy(W.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/_e.x),a.x=l.x*_e.x,W.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/_e.y),a.y=l.y*_e.y,W.mapSize.y=l.y)),W.map===null||ee===!0||ve===!0){const k=this.type!==br?{minFilter:Zi,magFilter:Zi}:{};W.map!==null&&W.map.dispose(),W.map=new Qi(a.x,a.y,k),W.map.texture.name=he.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ge=W.getViewportCount();for(let k=0;k<ge;k++){const fe=W.getViewport(k);c.set(l.x*fe.x,l.y*fe.y,l.x*fe.z,l.y*fe.w),le.viewport(c),W.updateMatrices(he,k),r=W.getFrustum(),b(F,G,W.camera,he,this.type)}W.isPointLightShadow!==!0&&this.type===br&&D(W,G),W.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,C,V)};function D(z,F){const G=e.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Qi(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,G,x,T,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,G,M,T,null)}function L(z,F,G,P){let C=null;const V=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)C=V;else if(C=G.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const le=C.uuid,ee=F.uuid;let ve=m[le];ve===void 0&&(ve={},m[le]=ve);let xe=ve[ee];xe===void 0&&(xe=C.clone(),ve[ee]=xe,F.addEventListener("dispose",K)),C=xe}if(C.visible=F.visible,C.wireframe=F.wireframe,P===br?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=s.properties.get(C);le.light=G}return C}function b(z,F,G,P,C){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===br)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const ee=e.update(z),ve=z.material;if(Array.isArray(ve)){const xe=ee.groups;for(let pe=0,he=xe.length;pe<he;pe++){const W=xe[pe],_e=ve[W.materialIndex];if(_e&&_e.visible){const ge=L(z,_e,P,C);z.onBeforeShadow(s,z,F,G,ee,ge,W),s.renderBufferDirect(G,null,ee,ge,z,W),z.onAfterShadow(s,z,F,G,ee,ge,W)}}}else if(ve.visible){const xe=L(z,ve,P,C);z.onBeforeShadow(s,z,F,G,ee,xe,null),s.renderBufferDirect(G,null,ee,xe,z,null),z.onAfterShadow(s,z,F,G,ee,xe,null)}}const le=z.children;for(let ee=0,ve=le.length;ee<ve;ee++)b(le[ee],F,G,P,C)}function K(z){z.target.removeEventListener("dispose",K);for(const G in m){const P=m[G],C=z.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const m1={[Uf]:Nf,[Ff]:kf,[Of]:Bf,[Do]:zf,[Nf]:Uf,[kf]:Ff,[Bf]:Of,[zf]:Do};function g1(s,e){function n(){let B=!1;const De=new Wt;let ne=null;const me=new Wt(0,0,0,0);return{setMask:function(ke){ne!==ke&&!B&&(s.colorMask(ke,ke,ke,ke),ne=ke)},setLocked:function(ke){B=ke},setClear:function(ke,Oe,ot,te,et){et===!0&&(ke*=te,Oe*=te,ot*=te),De.set(ke,Oe,ot,te),me.equals(De)===!1&&(s.clearColor(ke,Oe,ot,te),me.copy(De))},reset:function(){B=!1,ne=null,me.set(-1,0,0,0)}}}function r(){let B=!1,De=!1,ne=null,me=null,ke=null;return{setReversed:function(Oe){if(De!==Oe){const ot=e.get("EXT_clip_control");De?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const te=ke;ke=null,this.setClear(te)}De=Oe},getReversed:function(){return De},setTest:function(Oe){Oe?Re(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Oe){ne!==Oe&&!B&&(s.depthMask(Oe),ne=Oe)},setFunc:function(Oe){if(De&&(Oe=m1[Oe]),me!==Oe){switch(Oe){case Uf:s.depthFunc(s.NEVER);break;case Nf:s.depthFunc(s.ALWAYS);break;case Ff:s.depthFunc(s.LESS);break;case Do:s.depthFunc(s.LEQUAL);break;case Of:s.depthFunc(s.EQUAL);break;case zf:s.depthFunc(s.GEQUAL);break;case kf:s.depthFunc(s.GREATER);break;case Bf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Oe}},setLocked:function(Oe){B=Oe},setClear:function(Oe){ke!==Oe&&(De&&(Oe=1-Oe),s.clearDepth(Oe),ke=Oe)},reset:function(){B=!1,ne=null,me=null,ke=null,De=!1}}}function a(){let B=!1,De=null,ne=null,me=null,ke=null,Oe=null,ot=null,te=null,et=null;return{setTest:function(je){B||(je?Re(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(je){De!==je&&!B&&(s.stencilMask(je),De=je)},setFunc:function(je,It,Gt){(ne!==je||me!==It||ke!==Gt)&&(s.stencilFunc(je,It,Gt),ne=je,me=It,ke=Gt)},setOp:function(je,It,Gt){(Oe!==je||ot!==It||te!==Gt)&&(s.stencilOp(je,It,Gt),Oe=je,ot=It,te=Gt)},setLocked:function(je){B=je},setClear:function(je){et!==je&&(s.clearStencil(je),et=je)},reset:function(){B=!1,De=null,ne=null,me=null,ke=null,Oe=null,ot=null,te=null,et=null}}}const l=new n,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,L=null,b=null,K=null,z=null,F=new mt(0,0,0),G=0,P=!1,C=null,V=null,le=null,ee=null,ve=null;const xe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,he=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(W)[1]),pe=he>=1):W.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),pe=he>=2);let _e=null,ge={};const k=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),We=new Wt().fromArray(k),re=new Wt().fromArray(fe);function ye(B,De,ne,me){const ke=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(B,Oe),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<ne;ot++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(De+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Oe}const Ie={};Ie[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ie[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ie[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Re(s.DEPTH_TEST),c.setFunc(Do),Et(!1),_t(rm),Re(s.CULL_FACE),Z(Ur);function Re(B){_[B]!==!0&&(s.enable(B),_[B]=!0)}function Be(B){_[B]!==!1&&(s.disable(B),_[B]=!1)}function Xe(B,De){return v[B]!==De?(s.bindFramebuffer(B,De),v[B]=De,B===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),B===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function lt(B,De){let ne=M,me=!1;if(B){ne=x.get(De),ne===void 0&&(ne=[],x.set(De,ne));const ke=B.textures;if(ne.length!==ke.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,ot=ke.length;Oe<ot;Oe++)ne[Oe]=s.COLOR_ATTACHMENT0+Oe;ne.length=ke.length,me=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,me=!0);me&&s.drawBuffers(ne)}function Ot(B){return E!==B?(s.useProgram(B),E=B,!0):!1}const St={[Fs]:s.FUNC_ADD,[Bv]:s.FUNC_SUBTRACT,[Vv]:s.FUNC_REVERSE_SUBTRACT};St[Hv]=s.MIN,St[Gv]=s.MAX;const Ht={[Wv]:s.ZERO,[Xv]:s.ONE,[jv]:s.SRC_COLOR,[Df]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Kv]:s.DST_COLOR,[Yv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[If]:s.ONE_MINUS_SRC_ALPHA,[Zv]:s.ONE_MINUS_DST_COLOR,[$v]:s.ONE_MINUS_DST_ALPHA,[Jv]:s.CONSTANT_COLOR,[e_]:s.ONE_MINUS_CONSTANT_COLOR,[t_]:s.CONSTANT_ALPHA,[n_]:s.ONE_MINUS_CONSTANT_ALPHA};function Z(B,De,ne,me,ke,Oe,ot,te,et,je){if(B===Ur){T===!0&&(Be(s.BLEND),T=!1);return}if(T===!1&&(Re(s.BLEND),T=!0),B!==kv){if(B!==y||je!==P){if((g!==Fs||b!==Fs)&&(s.blendEquation(s.FUNC_ADD),g=Fs,b=Fs),je)switch(B){case bo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.ONE,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}D=null,L=null,K=null,z=null,F.set(0,0,0),G=0,y=B,P=je}return}ke=ke||De,Oe=Oe||ne,ot=ot||me,(De!==g||ke!==b)&&(s.blendEquationSeparate(St[De],St[ke]),g=De,b=ke),(ne!==D||me!==L||Oe!==K||ot!==z)&&(s.blendFuncSeparate(Ht[ne],Ht[me],Ht[Oe],Ht[ot]),D=ne,L=me,K=Oe,z=ot),(te.equals(F)===!1||et!==G)&&(s.blendColor(te.r,te.g,te.b,et),F.copy(te),G=et),y=B,P=!1}function Cn(B,De){B.side===Mi?Be(s.CULL_FACE):Re(s.CULL_FACE);let ne=B.side===$n;De&&(ne=!ne),Et(ne),B.blending===bo&&B.transparent===!1?Z(Ur):Z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);const me=B.stencilWrite;d.setTest(me),me&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(B){C!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),C=B)}function _t(B){B!==Ov?(Re(s.CULL_FACE),B!==V&&(B===rm?s.cullFace(s.BACK):B===zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),V=B}function at(B){B!==le&&(pe&&s.lineWidth(B),le=B)}function Nt(B,De,ne){B?(Re(s.POLYGON_OFFSET_FILL),(ee!==De||ve!==ne)&&(s.polygonOffset(De,ne),ee=De,ve=ne)):Be(s.POLYGON_OFFSET_FILL)}function rt(B){B?Re(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function U(B){B===void 0&&(B=s.TEXTURE0+xe-1),_e!==B&&(s.activeTexture(B),_e=B)}function w(B,De,ne){ne===void 0&&(_e===null?ne=s.TEXTURE0+xe-1:ne=_e);let me=ge[ne];me===void 0&&(me={type:void 0,texture:void 0},ge[ne]=me),(me.type!==B||me.texture!==De)&&(_e!==ne&&(s.activeTexture(ne),_e=ne),s.bindTexture(B,De||Ie[B]),me.type=B,me.texture=De)}function ae(){const B=ge[_e];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function A(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(B){We.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),We.copy(B))}function we(B){re.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function be(B,De){let ne=m.get(De);ne===void 0&&(ne=new WeakMap,m.set(De,ne));let me=ne.get(B);me===void 0&&(me=s.getUniformBlockIndex(De,B.name),ne.set(B,me))}function He(B,De){const me=m.get(De).get(B);h.get(De)!==me&&(s.uniformBlockBinding(De,me,B.__bindingPointIndex),h.set(De,me))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},_e=null,ge={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,L=null,b=null,K=null,z=null,F=new mt(0,0,0),G=0,P=!1,C=null,V=null,le=null,ee=null,ve=null,We.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:Re,disable:Be,bindFramebuffer:Xe,drawBuffers:lt,useProgram:Ot,setBlending:Z,setMaterial:Cn,setFlipSided:Et,setCullFace:_t,setLineWidth:at,setPolygonOffset:Nt,setScissorTest:rt,activeTexture:U,bindTexture:w,unbindTexture:ae,compressedTexImage2D:Ee,compressedTexImage3D:Te,texImage2D:J,texImage3D:de,updateUBOMapping:be,uniformBlockBinding:He,texStorage2D:I,texStorage3D:X,texSubImage2D:Me,texSubImage3D:Je,compressedTexSubImage2D:A,compressedTexSubImage3D:O,scissor:se,viewport:we,reset:st}}function e0(s,e,n,r){const a=v1(r);switch(n){case C0:return s*e;case b0:return s*e;case P0:return s*e*2;case L0:return s*e/a.components*a.byteLength;case Ad:return s*e/a.components*a.byteLength;case D0:return s*e*2/a.components*a.byteLength;case Cd:return s*e*2/a.components*a.byteLength;case R0:return s*e*3/a.components*a.byteLength;case Ki:return s*e*4/a.components*a.byteLength;case Rd:return s*e*4/a.components*a.byteLength;case ou:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lu:case uu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xf:case qf:return Math.max(s,16)*Math.max(e,8)/4;case Wf:case jf:return Math.max(s,8)*Math.max(e,8)/2;case Yf:case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ud:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cu:case fd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case I0:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v1(s){switch(s){case Or:case w0:return{byteLength:1,components:1};case Pa:case T0:case Nr:return{byteLength:2,components:1};case wd:case Td:return{byteLength:2,components:4};case ks:case Ed:case Dr:return{byteLength:4,components:1};case A0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _1(s,e,n,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,w){return M?new OffscreenCanvas(U,w):pu("canvas")}function T(U,w,ae){let Ee=1;const Te=rt(U);if((Te.width>ae||Te.height>ae)&&(Ee=ae/Math.max(Te.width,Te.height)),Ee<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(Ee*Te.width),Je=Math.floor(Ee*Te.height);v===void 0&&(v=E(Me,Je));const A=w?E(Me,Je):v;return A.width=Me,A.height=Je,A.getContext("2d").drawImage(U,0,0,Me,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Me+"x"+Je+")."),A}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){s.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(U,w,ae,Ee,Te=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Me=w;if(w===s.RED&&(ae===s.FLOAT&&(Me=s.R32F),ae===s.HALF_FLOAT&&(Me=s.R16F),ae===s.UNSIGNED_BYTE&&(Me=s.R8)),w===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Me=s.R8UI),ae===s.UNSIGNED_SHORT&&(Me=s.R16UI),ae===s.UNSIGNED_INT&&(Me=s.R32UI),ae===s.BYTE&&(Me=s.R8I),ae===s.SHORT&&(Me=s.R16I),ae===s.INT&&(Me=s.R32I)),w===s.RG&&(ae===s.FLOAT&&(Me=s.RG32F),ae===s.HALF_FLOAT&&(Me=s.RG16F),ae===s.UNSIGNED_BYTE&&(Me=s.RG8)),w===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Me=s.RG8UI),ae===s.UNSIGNED_SHORT&&(Me=s.RG16UI),ae===s.UNSIGNED_INT&&(Me=s.RG32UI),ae===s.BYTE&&(Me=s.RG8I),ae===s.SHORT&&(Me=s.RG16I),ae===s.INT&&(Me=s.RG32I)),w===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Me=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(Me=s.RGB16UI),ae===s.UNSIGNED_INT&&(Me=s.RGB32UI),ae===s.BYTE&&(Me=s.RGB8I),ae===s.SHORT&&(Me=s.RGB16I),ae===s.INT&&(Me=s.RGB32I)),w===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Me=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(Me=s.RGBA16UI),ae===s.UNSIGNED_INT&&(Me=s.RGBA32UI),ae===s.BYTE&&(Me=s.RGBA8I),ae===s.SHORT&&(Me=s.RGBA16I),ae===s.INT&&(Me=s.RGBA32I)),w===s.RGB&&ae===s.UNSIGNED_INT_5_9_9_9_REV&&(Me=s.RGB9_E5),w===s.RGBA){const Je=Te?Mu:Pt.getTransfer(Ee);ae===s.FLOAT&&(Me=s.RGBA32F),ae===s.HALF_FLOAT&&(Me=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(Me=Je===Vt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)}return(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function b(U,w){let ae;return U?w===null||w===ks||w===No?ae=s.DEPTH24_STENCIL8:w===Dr?ae=s.DEPTH32F_STENCIL8:w===Pa&&(ae=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ks||w===No?ae=s.DEPTH_COMPONENT24:w===Dr?ae=s.DEPTH_COMPONENT32F:w===Pa&&(ae=s.DEPTH_COMPONENT16),ae}function K(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Zi&&U.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function z(U){const w=U.target;w.removeEventListener("dispose",z),G(w),w.isVideoTexture&&_.delete(w)}function F(U){const w=U.target;w.removeEventListener("dispose",F),C(w)}function G(U){const w=r.get(U);if(w.__webglInit===void 0)return;const ae=U.source,Ee=x.get(ae);if(Ee){const Te=Ee[w.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&P(U),Object.keys(Ee).length===0&&x.delete(ae)}r.remove(U)}function P(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const ae=U.source,Ee=x.get(ae);delete Ee[w.__cacheKey],c.memory.textures--}function C(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(w.__webglFramebuffer[Ee]))for(let Te=0;Te<w.__webglFramebuffer[Ee].length;Te++)s.deleteFramebuffer(w.__webglFramebuffer[Ee][Te]);else s.deleteFramebuffer(w.__webglFramebuffer[Ee]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let Ee=0;Ee<w.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(w.__webglFramebuffer[Ee]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Ee=0;Ee<w.__webglColorRenderbuffer.length;Ee++)w.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Ee]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ae=U.textures;for(let Ee=0,Te=ae.length;Ee<Te;Ee++){const Me=r.get(ae[Ee]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(ae[Ee])}r.remove(U)}let V=0;function le(){V=0}function ee(){const U=V;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),V+=1,U}function ve(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function xe(U,w){const ae=r.get(U);if(U.isVideoTexture&&at(U),U.isRenderTargetTexture===!1&&U.version>0&&ae.__version!==U.version){const Ee=U.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(ae,U,w);return}}n.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+w)}function pe(U,w){const ae=r.get(U);if(U.version>0&&ae.__version!==U.version){re(ae,U,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+w)}function he(U,w){const ae=r.get(U);if(U.version>0&&ae.__version!==U.version){re(ae,U,w);return}n.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+w)}function W(U,w){const ae=r.get(U);if(U.version>0&&ae.__version!==U.version){ye(ae,U,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+w)}const _e={[Lr]:s.REPEAT,[zs]:s.CLAMP_TO_EDGE,[Gf]:s.MIRRORED_REPEAT},ge={[Zi]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[Nl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Zc]:s.LINEAR_MIPMAP_NEAREST,[ur]:s.LINEAR_MIPMAP_LINEAR},k={[c_]:s.NEVER,[g_]:s.ALWAYS,[f_]:s.LESS,[U0]:s.LEQUAL,[d_]:s.EQUAL,[m_]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function fe(U,w){if(w.type===Dr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Zc||w.magFilter===Nl||w.magFilter===ur||w.minFilter===Si||w.minFilter===Zc||w.minFilter===Nl||w.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,_e[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,_e[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,_e[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ge[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Zi||w.minFilter!==Nl&&w.minFilter!==ur||w.type===Dr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function We(U,w){let ae=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",z));const Ee=w.source;let Te=x.get(Ee);Te===void 0&&(Te={},x.set(Ee,Te));const Me=ve(w);if(Me!==U.__cacheKey){Te[Me]===void 0&&(Te[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ae=!0),Te[Me].usedTimes++;const Je=Te[U.__cacheKey];Je!==void 0&&(Te[U.__cacheKey].usedTimes--,Je.usedTimes===0&&P(w)),U.__cacheKey=Me,U.__webglTexture=Te[Me].texture}return ae}function re(U,w,ae){let Ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ee=s.TEXTURE_3D);const Te=We(U,w),Me=w.source;n.bindTexture(Ee,U.__webglTexture,s.TEXTURE0+ae);const Je=r.get(Me);if(Me.version!==Je.__version||Te===!0){n.activeTexture(s.TEXTURE0+ae);const A=Pt.getPrimaries(Pt.workingColorSpace),O=w.colorSpace===ls?null:Pt.getPrimaries(w.colorSpace),I=w.colorSpace===ls||A===O?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);let X=T(w.image,!1,a.maxTextureSize);X=Nt(w,X);const J=l.convert(w.format,w.colorSpace),de=l.convert(w.type);let se=L(w.internalFormat,J,de,w.colorSpace,w.isVideoTexture);fe(Ee,w);let we;const be=w.mipmaps,He=w.isVideoTexture!==!0,st=Je.__version===void 0||Te===!0,B=Me.dataReady,De=K(w,X);if(w.isDepthTexture)se=b(w.format===Fo,w.type),st&&(He?n.texStorage2D(s.TEXTURE_2D,1,se,X.width,X.height):n.texImage2D(s.TEXTURE_2D,0,se,X.width,X.height,0,J,de,null));else if(w.isDataTexture)if(be.length>0){He&&st&&n.texStorage2D(s.TEXTURE_2D,De,se,be[0].width,be[0].height);for(let ne=0,me=be.length;ne<me;ne++)we=be[ne],He?B&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,J,de,we.data):n.texImage2D(s.TEXTURE_2D,ne,se,we.width,we.height,0,J,de,we.data);w.generateMipmaps=!1}else He?(st&&n.texStorage2D(s.TEXTURE_2D,De,se,X.width,X.height),B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,X.width,X.height,J,de,X.data)):n.texImage2D(s.TEXTURE_2D,0,se,X.width,X.height,0,J,de,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,se,be[0].width,be[0].height,X.depth);for(let ne=0,me=be.length;ne<me;ne++)if(we=be[ne],w.format!==Ki)if(J!==null)if(He){if(B)if(w.layerUpdates.size>0){const ke=e0(we.width,we.height,w.format,w.type);for(const Oe of w.layerUpdates){const ot=we.data.subarray(Oe*ke/we.data.BYTES_PER_ELEMENT,(Oe+1)*ke/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Oe,we.width,we.height,1,J,ot)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,X.depth,J,we.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,se,we.width,we.height,X.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?B&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,X.depth,J,de,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ne,se,we.width,we.height,X.depth,0,J,de,we.data)}else{He&&st&&n.texStorage2D(s.TEXTURE_2D,De,se,be[0].width,be[0].height);for(let ne=0,me=be.length;ne<me;ne++)we=be[ne],w.format!==Ki?J!==null?He?B&&n.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,J,we.data):n.compressedTexImage2D(s.TEXTURE_2D,ne,se,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?B&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,J,de,we.data):n.texImage2D(s.TEXTURE_2D,ne,se,we.width,we.height,0,J,de,we.data)}else if(w.isDataArrayTexture)if(He){if(st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,se,X.width,X.height,X.depth),B)if(w.layerUpdates.size>0){const ne=e0(X.width,X.height,w.format,w.type);for(const me of w.layerUpdates){const ke=X.data.subarray(me*ne/X.data.BYTES_PER_ELEMENT,(me+1)*ne/X.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,X.width,X.height,1,J,de,ke)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,J,de,X.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,se,X.width,X.height,X.depth,0,J,de,X.data);else if(w.isData3DTexture)He?(st&&n.texStorage3D(s.TEXTURE_3D,De,se,X.width,X.height,X.depth),B&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,J,de,X.data)):n.texImage3D(s.TEXTURE_3D,0,se,X.width,X.height,X.depth,0,J,de,X.data);else if(w.isFramebufferTexture){if(st)if(He)n.texStorage2D(s.TEXTURE_2D,De,se,X.width,X.height);else{let ne=X.width,me=X.height;for(let ke=0;ke<De;ke++)n.texImage2D(s.TEXTURE_2D,ke,se,ne,me,0,J,de,null),ne>>=1,me>>=1}}else if(be.length>0){if(He&&st){const ne=rt(be[0]);n.texStorage2D(s.TEXTURE_2D,De,se,ne.width,ne.height)}for(let ne=0,me=be.length;ne<me;ne++)we=be[ne],He?B&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,J,de,we):n.texImage2D(s.TEXTURE_2D,ne,se,J,de,we);w.generateMipmaps=!1}else if(He){if(st){const ne=rt(X);n.texStorage2D(s.TEXTURE_2D,De,se,ne.width,ne.height)}B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,J,de,X)}else n.texImage2D(s.TEXTURE_2D,0,se,J,de,X);y(w)&&g(Ee),Je.__version=Me.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ye(U,w,ae){if(w.image.length!==6)return;const Ee=We(U,w),Te=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ae);const Me=r.get(Te);if(Te.version!==Me.__version||Ee===!0){n.activeTexture(s.TEXTURE0+ae);const Je=Pt.getPrimaries(Pt.workingColorSpace),A=w.colorSpace===ls?null:Pt.getPrimaries(w.colorSpace),O=w.colorSpace===ls||Je===A?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const I=w.isCompressedTexture||w.image[0].isCompressedTexture,X=w.image[0]&&w.image[0].isDataTexture,J=[];for(let me=0;me<6;me++)!I&&!X?J[me]=T(w.image[me],!0,a.maxCubemapSize):J[me]=X?w.image[me].image:w.image[me],J[me]=Nt(w,J[me]);const de=J[0],se=l.convert(w.format,w.colorSpace),we=l.convert(w.type),be=L(w.internalFormat,se,we,w.colorSpace),He=w.isVideoTexture!==!0,st=Me.__version===void 0||Ee===!0,B=Te.dataReady;let De=K(w,de);fe(s.TEXTURE_CUBE_MAP,w);let ne;if(I){He&&st&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,be,de.width,de.height);for(let me=0;me<6;me++){ne=J[me].mipmaps;for(let ke=0;ke<ne.length;ke++){const Oe=ne[ke];w.format!==Ki?se!==null?He?B&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Oe.width,Oe.height,se,Oe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,be,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Oe.width,Oe.height,se,we,Oe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,be,Oe.width,Oe.height,0,se,we,Oe.data)}}}else{if(ne=w.mipmaps,He&&st){ne.length>0&&De++;const me=rt(J[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,be,me.width,me.height)}for(let me=0;me<6;me++)if(X){He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,J[me].width,J[me].height,se,we,J[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,be,J[me].width,J[me].height,0,se,we,J[me].data);for(let ke=0;ke<ne.length;ke++){const ot=ne[ke].image[me].image;He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,ot.width,ot.height,se,we,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,be,ot.width,ot.height,0,se,we,ot.data)}}else{He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,se,we,J[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,be,se,we,J[me]);for(let ke=0;ke<ne.length;ke++){const Oe=ne[ke];He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,se,we,Oe.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,be,se,we,Oe.image[me])}}}y(w)&&g(s.TEXTURE_CUBE_MAP),Me.__version=Te.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Ie(U,w,ae,Ee,Te,Me){const Je=l.convert(ae.format,ae.colorSpace),A=l.convert(ae.type),O=L(ae.internalFormat,Je,A,ae.colorSpace),I=r.get(w),X=r.get(ae);if(X.__renderTarget=w,!I.__hasExternalTextures){const J=Math.max(1,w.width>>Me),de=Math.max(1,w.height>>Me);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?n.texImage3D(Te,Me,O,J,de,w.depth,0,Je,A,null):n.texImage2D(Te,Me,O,J,de,0,Je,A,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),_t(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Te,X.__webglTexture,0,Et(w)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Te,X.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(U,w,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const Ee=w.depthTexture,Te=Ee&&Ee.isDepthTexture?Ee.type:null,Me=b(w.stencilBuffer,Te),Je=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,A=Et(w);_t(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,A,Me,w.width,w.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,A,Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Je,s.RENDERBUFFER,U)}else{const Ee=w.textures;for(let Te=0;Te<Ee.length;Te++){const Me=Ee[Te],Je=l.convert(Me.format,Me.colorSpace),A=l.convert(Me.type),O=L(Me.internalFormat,Je,A,Me.colorSpace),I=Et(w);ae&&_t(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,I,O,w.width,w.height):_t(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I,O,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,O,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(w.depthTexture);Ee.__renderTarget=w,(!Ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),xe(w.depthTexture,0);const Te=Ee.__webglTexture,Me=Et(w);if(w.depthTexture.format===Po)_t(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0);else if(w.depthTexture.format===Fo)_t(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function Xe(U){const w=r.get(U),ae=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const Ee=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ee){const Te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ee.removeEventListener("dispose",Te)};Ee.addEventListener("dispose",Te),w.__depthDisposeCallback=Te}w.__boundDepthTexture=Ee}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Be(w.__webglFramebuffer,U)}else if(ae){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]===void 0)w.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Re(w.__webglDepthbuffer[Ee],U,!1);else{const Te=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Re(w.__webglDepthbuffer,U,!1);else{const Ee=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,Te)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(U,w,ae){const Ee=r.get(U);w!==void 0&&Ie(Ee.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Xe(U)}function Ot(U){const w=U.texture,ae=r.get(U),Ee=r.get(w);U.addEventListener("dispose",F);const Te=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Je=Te.length>1;if(Je||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=w.version,c.memory.textures++),Me){ae.__webglFramebuffer=[];for(let A=0;A<6;A++)if(w.mipmaps&&w.mipmaps.length>0){ae.__webglFramebuffer[A]=[];for(let O=0;O<w.mipmaps.length;O++)ae.__webglFramebuffer[A][O]=s.createFramebuffer()}else ae.__webglFramebuffer[A]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ae.__webglFramebuffer=[];for(let A=0;A<w.mipmaps.length;A++)ae.__webglFramebuffer[A]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Je)for(let A=0,O=Te.length;A<O;A++){const I=r.get(Te[A]);I.__webglTexture===void 0&&(I.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&_t(U)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let A=0;A<Te.length;A++){const O=Te[A];ae.__webglColorRenderbuffer[A]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[A]);const I=l.convert(O.format,O.colorSpace),X=l.convert(O.type),J=L(O.internalFormat,I,X,O.colorSpace,U.isXRRenderTarget===!0),de=Et(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,J,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+A,s.RENDERBUFFER,ae.__webglColorRenderbuffer[A])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(ae.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),fe(s.TEXTURE_CUBE_MAP,w);for(let A=0;A<6;A++)if(w.mipmaps&&w.mipmaps.length>0)for(let O=0;O<w.mipmaps.length;O++)Ie(ae.__webglFramebuffer[A][O],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+A,O);else Ie(ae.__webglFramebuffer[A],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);y(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Je){for(let A=0,O=Te.length;A<O;A++){const I=Te[A],X=r.get(I);n.bindTexture(s.TEXTURE_2D,X.__webglTexture),fe(s.TEXTURE_2D,I),Ie(ae.__webglFramebuffer,U,I,s.COLOR_ATTACHMENT0+A,s.TEXTURE_2D,0),y(I)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let A=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(A=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(A,Ee.__webglTexture),fe(A,w),w.mipmaps&&w.mipmaps.length>0)for(let O=0;O<w.mipmaps.length;O++)Ie(ae.__webglFramebuffer[O],U,w,s.COLOR_ATTACHMENT0,A,O);else Ie(ae.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,A,0);y(w)&&g(A),n.unbindTexture()}U.depthBuffer&&Xe(U)}function St(U){const w=U.textures;for(let ae=0,Ee=w.length;ae<Ee;ae++){const Te=w[ae];if(y(Te)){const Me=D(U),Je=r.get(Te).__webglTexture;n.bindTexture(Me,Je),g(Me),n.unbindTexture()}}}const Ht=[],Z=[];function Cn(U){if(U.samples>0){if(_t(U)===!1){const w=U.textures,ae=U.width,Ee=U.height;let Te=s.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Je=r.get(U),A=w.length>1;if(A)for(let O=0;O<w.length;O++)n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let O=0;O<w.length;O++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),A){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Je.__webglColorRenderbuffer[O]);const I=r.get(w[O]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,ae,Ee,0,0,ae,Ee,Te,s.NEAREST),h===!0&&(Ht.length=0,Z.length=0,Ht.push(s.COLOR_ATTACHMENT0+O),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ht.push(Me),Z.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),A)for(let O=0;O<w.length;O++){n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.RENDERBUFFER,Je.__webglColorRenderbuffer[O]);const I=r.get(w[O]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.TEXTURE_2D,I,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Et(U){return Math.min(a.maxSamples,U.samples)}function _t(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(U){const w=c.render.frame;_.get(U)!==w&&(_.set(U,w),U.update())}function Nt(U,w){const ae=U.colorSpace,Ee=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ae!==ko&&ae!==ls&&(Pt.getTransfer(ae)===Vt?(Ee!==Ki||Te!==Or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),w}function rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=le,this.setTexture2D=xe,this.setTexture2DArray=pe,this.setTexture3D=he,this.setTextureCube=W,this.rebindTextures=lt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=_t}function x1(s,e){function n(r,a=ls){let l;const c=Pt.getTransfer(a);if(r===Or)return s.UNSIGNED_BYTE;if(r===wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===A0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===w0)return s.BYTE;if(r===T0)return s.SHORT;if(r===Pa)return s.UNSIGNED_SHORT;if(r===Ed)return s.INT;if(r===ks)return s.UNSIGNED_INT;if(r===Dr)return s.FLOAT;if(r===Nr)return s.HALF_FLOAT;if(r===C0)return s.ALPHA;if(r===R0)return s.RGB;if(r===Ki)return s.RGBA;if(r===b0)return s.LUMINANCE;if(r===P0)return s.LUMINANCE_ALPHA;if(r===Po)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===L0)return s.RED;if(r===Ad)return s.RED_INTEGER;if(r===D0)return s.RG;if(r===Cd)return s.RG_INTEGER;if(r===Rd)return s.RGBA_INTEGER;if(r===ou||r===au||r===lu||r===uu)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ou)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ou)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===au)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wf||r===Xf||r===jf||r===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Wf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf||r===$f||r===Kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Yf||r===$f)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Kf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zf||r===Qf||r===Jf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===ud||r===cd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Zf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===td)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===id)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ad)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ld)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ud)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cu||r===fd||r===dd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cu)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===I0||r===hd||r===pd||r===md)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===cu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===md)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class y1 extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class an extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new an;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const S1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Kn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new An({vertexShader:S1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ze(new Vn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Bo{constructor(e,n){super();const r=this;let a=null,l=1,c=null,d="local-floor",h=1,m=null,_=null,v=null,x=null,M=null,E=null;const T=new w1,y=n.getContextAttributes();let g=null,D=null;const L=[],b=[],K=new pt;let z=null;const F=new di;F.viewport=new Wt;const G=new di;G.viewport=new Wt;const P=[F,G],C=new y1;let V=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=L[re];return ye===void 0&&(ye=new Cf,L[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=L[re];return ye===void 0&&(ye=new Cf,L[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=L[re];return ye===void 0&&(ye=new Cf,L[re]=ye),ye.getHandSpace()};function ee(re){const ye=b.indexOf(re.inputSource);if(ye===-1)return;const Ie=L[ye];Ie!==void 0&&(Ie.update(re.inputSource,re.frame,m||c),Ie.dispatchEvent({type:re.type,data:re.inputSource}))}function ve(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ve),a.removeEventListener("inputsourceschange",xe);for(let re=0;re<L.length;re++){const ye=b[re];ye!==null&&(b[re]=null,L[re].disconnect(ye))}V=null,le=null,T.reset(),e.setRenderTarget(g),M=null,x=null,v=null,a=null,D=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ve),a.addEventListener("inputsourceschange",xe),y.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(K),a.renderState.layers===void 0){const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Qi(M.framebufferWidth,M.framebufferHeight,{format:Ki,type:Or,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ye=null,Ie=null,Re=null;y.depth&&(Re=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=y.stencil?Fo:Po,Ie=y.stencil?No:ks);const Be={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Be),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Qi(x.textureWidth,x.textureHeight,{format:Ki,type:Or,depthTexture:new j0(x.textureWidth,x.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),We.setContext(a),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function xe(re){for(let ye=0;ye<re.removed.length;ye++){const Ie=re.removed[ye],Re=b.indexOf(Ie);Re>=0&&(b[Re]=null,L[Re].disconnect(Ie))}for(let ye=0;ye<re.added.length;ye++){const Ie=re.added[ye];let Re=b.indexOf(Ie);if(Re===-1){for(let Xe=0;Xe<L.length;Xe++)if(Xe>=b.length){b.push(Ie),Re=Xe;break}else if(b[Xe]===null){b[Xe]=Ie,Re=Xe;break}if(Re===-1)break}const Be=L[Re];Be&&Be.connect(Ie)}}const pe=new q,he=new q;function W(re,ye,Ie){pe.setFromMatrixPosition(ye.matrixWorld),he.setFromMatrixPosition(Ie.matrixWorld);const Re=pe.distanceTo(he),Be=ye.projectionMatrix.elements,Xe=Ie.projectionMatrix.elements,lt=Be[14]/(Be[10]-1),Ot=Be[14]/(Be[10]+1),St=(Be[9]+1)/Be[5],Ht=(Be[9]-1)/Be[5],Z=(Be[8]-1)/Be[0],Cn=(Xe[8]+1)/Xe[0],Et=lt*Z,_t=lt*Cn,at=Re/(-Z+Cn),Nt=at*-Z;if(ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Nt),re.translateZ(at),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Be[10]===-1)re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const rt=lt+at,U=Ot+at,w=Et-Nt,ae=_t+(Re-Nt),Ee=St*Ot/U*rt,Te=Ht*Ot/U*rt;re.projectionMatrix.makePerspective(w,ae,Ee,Te,rt,U),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function _e(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let ye=re.near,Ie=re.far;T.texture!==null&&(T.depthNear>0&&(ye=T.depthNear),T.depthFar>0&&(Ie=T.depthFar)),C.near=G.near=F.near=ye,C.far=G.far=F.far=Ie,(V!==C.near||le!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,le=C.far),F.layers.mask=re.layers.mask|2,G.layers.mask=re.layers.mask|4,C.layers.mask=F.layers.mask|G.layers.mask;const Re=re.parent,Be=C.cameras;_e(C,Re);for(let Xe=0;Xe<Be.length;Xe++)_e(Be[Xe],Re);Be.length===2?W(C,F,G):C.projectionMatrix.copy(F.projectionMatrix),ge(re,C,Re)};function ge(re,ye,Ie){Ie===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(Ie.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=hu*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(re){h=re,x!==null&&(x.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let k=null;function fe(re,ye){if(_=ye.getViewerPose(m||c),E=ye,_!==null){const Ie=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Re=!1;Ie.length!==C.cameras.length&&(C.cameras.length=0,Re=!0);for(let Xe=0;Xe<Ie.length;Xe++){const lt=Ie[Xe];let Ot=null;if(M!==null)Ot=M.getViewport(lt);else{const Ht=v.getViewSubImage(x,lt);Ot=Ht.viewport,Xe===0&&(e.setRenderTargetTextures(D,Ht.colorTexture,x.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(D))}let St=P[Xe];St===void 0&&(St=new di,St.layers.enable(Xe),St.viewport=new Wt,P[Xe]=St),St.matrix.fromArray(lt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(lt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Xe===0&&(C.matrix.copy(St.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Re===!0&&C.cameras.push(St)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Xe=v.getDepthInformation(Ie[0]);Xe&&Xe.isValid&&Xe.texture&&T.init(e,Xe,a.renderState)}}for(let Ie=0;Ie<L.length;Ie++){const Re=b[Ie],Be=L[Ie];Re!==null&&Be!==void 0&&Be.update(Re,ye,m||c)}k&&k(re,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const We=new X0;We.setAnimationLoop(fe),this.setAnimationLoop=function(re){k=re},this.dispose=function(){}}}const Is=new Ui,A1=new Kt;function C1(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,H0(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,L,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),v(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,b)):g.isMeshMatcapMaterial?(l(y,g),E(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),T(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,D,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===$n&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===$n&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,b=D.envMapRotation;L&&(y.envMap.value=L,Is.copy(b),Is.x*=-1,Is.y*=-1,Is.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),y.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Is)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,D,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$n&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function R1(s,e,n,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const b=L.program;r.uniformBlockBinding(D,b)}function m(D,L){let b=a[D.id];b===void 0&&(E(D),b=_(D),a[D.id]=b,D.addEventListener("dispose",y));const K=L.program;r.updateUBOMapping(D,K);const z=e.render.frame;l[D.id]!==z&&(x(D),l[D.id]=z)}function _(D){const L=v();D.__bindingPointIndex=L;const b=s.createBuffer(),K=D.__size,z=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,K,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function v(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],b=D.uniforms,K=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let z=0,F=b.length;z<F;z++){const G=Array.isArray(b[z])?b[z]:[b[z]];for(let P=0,C=G.length;P<C;P++){const V=G[P];if(M(V,z,P,K)===!0){const le=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let ve=0;for(let xe=0;xe<ee.length;xe++){const pe=ee[xe],he=T(pe);typeof pe=="number"||typeof pe=="boolean"?(V.__data[0]=pe,s.bufferSubData(s.UNIFORM_BUFFER,le+ve,V.__data)):pe.isMatrix3?(V.__data[0]=pe.elements[0],V.__data[1]=pe.elements[1],V.__data[2]=pe.elements[2],V.__data[3]=0,V.__data[4]=pe.elements[3],V.__data[5]=pe.elements[4],V.__data[6]=pe.elements[5],V.__data[7]=0,V.__data[8]=pe.elements[6],V.__data[9]=pe.elements[7],V.__data[10]=pe.elements[8],V.__data[11]=0):(pe.toArray(V.__data,ve),ve+=he.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,L,b,K){const z=D.value,F=L+"_"+b;if(K[F]===void 0)return typeof z=="number"||typeof z=="boolean"?K[F]=z:K[F]=z.clone(),!0;{const G=K[F];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return K[F]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function E(D){const L=D.uniforms;let b=0;const K=16;for(let F=0,G=L.length;F<G;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,V=P.length;C<V;C++){const le=P[C],ee=Array.isArray(le.value)?le.value:[le.value];for(let ve=0,xe=ee.length;ve<xe;ve++){const pe=ee[ve],he=T(pe),W=b%K,_e=W%he.boundary,ge=W+_e;b+=_e,ge!==0&&K-ge<he.storage&&(b+=K-ge),le.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=b,b+=he.storage}}}const z=b%K;return z>0&&(b+=K-z),D.__size=b,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:m,dispose:g}}class b1{constructor(e={}){const{canvas:n=__(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ii,this.toneMapping=us,this.toneMappingExposure=1;const b=this;let K=!1,z=0,F=0,G=null,P=-1,C=null;const V=new Wt,le=new Wt;let ee=null;const ve=new mt(0);let xe=0,pe=n.width,he=n.height,W=1,_e=null,ge=null;const k=new Wt(0,0,pe,he),fe=new Wt(0,0,pe,he);let We=!1;const re=new Pd;let ye=!1,Ie=!1;const Re=new Kt,Be=new Kt,Xe=new q,lt=new Wt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Ht(){return G===null?W:1}let Z=r;function Cn(R,$){return n.getContext(R,$)}try{const R={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Md}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),Z===null){const $="webgl2";if(Z=Cn($,R),Z===null)throw Cn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Et,_t,at,Nt,rt,U,w,ae,Ee,Te,Me,Je,A,O,I,X,J,de,se,we,be,He,st,B;function De(){Et=new UM(Z),Et.init(),He=new x1(Z,Et),_t=new RM(Z,Et,e,He),at=new g1(Z,Et),_t.reverseDepthBuffer&&x&&at.buffers.depth.setReversed(!0),Nt=new OM(Z),rt=new t1,U=new _1(Z,Et,at,rt,_t,He,Nt),w=new PM(b),ae=new IM(b),Ee=new W_(Z),st=new AM(Z,Ee),Te=new NM(Z,Ee,Nt,st),Me=new kM(Z,Te,Ee,Nt),se=new zM(Z,_t,U),X=new bM(rt),Je=new e1(b,w,ae,Et,_t,st,X),A=new C1(b,rt),O=new i1,I=new u1(Et),de=new TM(b,w,ae,at,Me,M,h),J=new p1(b,Me,_t),B=new R1(Z,Nt,_t,at),we=new CM(Z,Et,Nt),be=new FM(Z,Et,Nt),Nt.programs=Je.programs,b.capabilities=_t,b.extensions=Et,b.properties=rt,b.renderLists=O,b.shadowMap=J,b.state=at,b.info=Nt}De();const ne=new T1(b,Z);this.xr=ne,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(pe,he,!1))},this.getSize=function(R){return R.set(pe,he)},this.setSize=function(R,$,ue=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=R,he=$,n.width=Math.floor(R*W),n.height=Math.floor($*W),ue===!0&&(n.style.width=R+"px",n.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(pe*W,he*W).floor()},this.setDrawingBufferSize=function(R,$,ue){pe=R,he=$,W=ue,n.width=Math.floor(R*ue),n.height=Math.floor($*ue),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,$,ue,oe){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,$,ue,oe),at.viewport(V.copy(k).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,$,ue,oe){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,$,ue,oe),at.scissor(le.copy(fe).multiplyScalar(W).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(R){at.setScissorTest(We=R)},this.setOpaqueSort=function(R){_e=R},this.setTransparentSort=function(R){ge=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(R=!0,$=!0,ue=!0){let oe=0;if(R){let Y=!1;if(G!==null){const Ne=G.texture.format;Y=Ne===Rd||Ne===Cd||Ne===Ad}if(Y){const Ne=G.texture.type,Pe=Ne===Or||Ne===ks||Ne===Pa||Ne===No||Ne===wd||Ne===Td,Ke=de.getClearColor(),Ye=de.getClearAlpha(),ft=Ke.r,dt=Ke.g,Ze=Ke.b;Pe?(E[0]=ft,E[1]=dt,E[2]=Ze,E[3]=Ye,Z.clearBufferuiv(Z.COLOR,0,E)):(T[0]=ft,T[1]=dt,T[2]=Ze,T[3]=Ye,Z.clearBufferiv(Z.COLOR,0,T))}else oe|=Z.COLOR_BUFFER_BIT}$&&(oe|=Z.DEPTH_BUFFER_BIT),ue&&(oe|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),O.dispose(),I.dispose(),rt.dispose(),w.dispose(),ae.dispose(),Me.dispose(),st.dispose(),B.dispose(),Je.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Zn),ne.removeEventListener("sessionend",hn),Rn.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const R=Nt.autoReset,$=J.enabled,ue=J.autoUpdate,oe=J.needsUpdate,Y=J.type;De(),Nt.autoReset=R,J.enabled=$,J.autoUpdate=ue,J.needsUpdate=oe,J.type=Y}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const $=R.target;$.removeEventListener("dispose",ot),te($)}function te(R){et(R),rt.remove(R)}function et(R){const $=rt.get(R).programs;$!==void 0&&($.forEach(function(ue){Je.releaseProgram(ue)}),R.isShaderMaterial&&Je.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ue,oe,Y,Ne){$===null&&($=Ot);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ke=Bs(R,$,ue,oe,Y);at.setMaterial(oe,Pe);let Ye=ue.index,ft=1;if(oe.wireframe===!0){if(Ye=Te.getWireframeAttribute(ue),Ye===void 0)return;ft=2}const dt=ue.drawRange,Ze=ue.attributes.position;let wt=dt.start*ft,bt=(dt.start+dt.count)*ft;Ne!==null&&(wt=Math.max(wt,Ne.start*ft),bt=Math.min(bt,(Ne.start+Ne.count)*ft)),Ye!==null?(wt=Math.max(wt,0),bt=Math.min(bt,Ye.count)):Ze!=null&&(wt=Math.max(wt,0),bt=Math.min(bt,Ze.count));const yt=bt-wt;if(yt<0||yt===1/0)return;st.setup(Y,oe,Ke,ue,Ye);let pn,vt=we;if(Ye!==null&&(pn=Ee.get(Ye),vt=be,vt.setIndex(pn)),Y.isMesh)oe.wireframe===!0?(at.setLineWidth(oe.wireframeLinewidth*Ht()),vt.setMode(Z.LINES)):vt.setMode(Z.TRIANGLES);else if(Y.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),at.setLineWidth(tt*Ht()),Y.isLineSegments?vt.setMode(Z.LINES):Y.isLineLoop?vt.setMode(Z.LINE_LOOP):vt.setMode(Z.LINE_STRIP)}else Y.isPoints?vt.setMode(Z.POINTS):Y.isSprite&&vt.setMode(Z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const tt=Y._multiDrawStarts,Dn=Y._multiDrawCounts,Ct=Y._multiDrawCount,mn=Ye?Ee.get(Ye).bytesPerElement:1,ei=rt.get(oe).currentProgram.getUniforms();for(let tn=0;tn<Ct;tn++)ei.setValue(Z,"_gl_DrawID",tn),vt.render(tt[tn]/mn,Dn[tn])}else if(Y.isInstancedMesh)vt.renderInstances(wt,yt,Y.count);else if(ue.isInstancedBufferGeometry){const tt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Dn=Math.min(ue.instanceCount,tt);vt.renderInstances(wt,yt,Dn)}else vt.render(wt,yt)};function je(R,$,ue){R.transparent===!0&&R.side===Mi&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,Hn(R,$,ue),R.side=cs,R.needsUpdate=!0,Hn(R,$,ue),R.side=Mi):Hn(R,$,ue)}this.compile=function(R,$,ue=null){ue===null&&(ue=R),g=I.get(ue),g.init($),L.push(g),ue.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==ue&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const oe=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let Pe=0;Pe<Ne.length;Pe++){const Ke=Ne[Pe];je(Ke,ue,Y),oe.add(Ke)}else je(Ne,ue,Y),oe.add(Ne)}),L.pop(),g=null,oe},this.compileAsync=function(R,$,ue=null){const oe=this.compile(R,$,ue);return new Promise(Y=>{function Ne(){if(oe.forEach(function(Pe){rt.get(Pe).currentProgram.isReady()&&oe.delete(Pe)}),oe.size===0){Y(R);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let It=null;function Gt(R){It&&It(R)}function Zn(){Rn.stop()}function hn(){Rn.start()}const Rn=new X0;Rn.setAnimationLoop(Gt),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(R){It=R,ne.setAnimationLoop(R),R===null?Rn.stop():Rn.start()},ne.addEventListener("sessionstart",Zn),ne.addEventListener("sessionend",hn),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera($),$=ne.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,$,G),g=I.get(R,L.length),g.init($),L.push(g),Be.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),re.setFromProjectionMatrix(Be),Ie=this.localClippingEnabled,ye=X.init(this.clippingPlanes,Ie),y=O.get(R,D.length),y.init(),D.push(y),ne.enabled===!0&&ne.isPresenting===!0){const Ne=b.xr.getDepthSensingMesh();Ne!==null&&Lt(Ne,$,-1/0,b.sortObjects)}Lt(R,$,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(_e,ge),St=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,St&&de.addToRenderList(y,R),this.info.render.frame++,ye===!0&&X.beginShadows();const ue=g.state.shadowsArray;J.render(ue,R,$),ye===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=y.opaque,Y=y.transmissive;if(g.setupLights(),$.isArrayCamera){const Ne=$.cameras;if(Y.length>0)for(let Pe=0,Ke=Ne.length;Pe<Ke;Pe++){const Ye=Ne[Pe];Qn(oe,Y,R,Ye)}St&&de.render(R);for(let Pe=0,Ke=Ne.length;Pe<Ke;Pe++){const Ye=Ne[Pe];un(y,R,Ye,Ye.viewport)}}else Y.length>0&&Qn(oe,Y,R,$),St&&de.render(R),un(y,R,$);G!==null&&(U.updateMultisampleRenderTarget(G),U.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(b,R,$),st.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ye===!0&&X.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Lt(R,$,ue,oe){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){oe&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);const Pe=Me.update(R),Ke=R.material;Ke.visible&&y.push(R,Pe,Ke,ue,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Pe=Me.update(R),Ke=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),lt.copy(Pe.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(Ke)){const Ye=Pe.groups;for(let ft=0,dt=Ye.length;ft<dt;ft++){const Ze=Ye[ft],wt=Ke[Ze.materialIndex];wt&&wt.visible&&y.push(R,Pe,wt,ue,lt.z,Ze)}}else Ke.visible&&y.push(R,Pe,Ke,ue,lt.z,null)}}const Ne=R.children;for(let Pe=0,Ke=Ne.length;Pe<Ke;Pe++)Lt(Ne[Pe],$,ue,oe)}function un(R,$,ue,oe){const Y=R.opaque,Ne=R.transmissive,Pe=R.transparent;g.setupLightsView(ue),ye===!0&&X.setGlobalState(b.clippingPlanes,ue),oe&&at.viewport(V.copy(oe)),Y.length>0&&qt(Y,$,ue),Ne.length>0&&qt(Ne,$,ue),Pe.length>0&&qt(Pe,$,ue),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Qn(R,$,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[oe.id]===void 0&&(g.state.transmissionRenderTarget[oe.id]=new Qi(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Nr:Or,minFilter:ur,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ne=g.state.transmissionRenderTarget[oe.id],Pe=oe.viewport||V;Ne.setSize(Pe.z,Pe.w);const Ke=b.getRenderTarget();b.setRenderTarget(Ne),b.getClearColor(ve),xe=b.getClearAlpha(),xe<1&&b.setClearColor(16777215,.5),b.clear(),St&&de.render(ue);const Ye=b.toneMapping;b.toneMapping=us;const ft=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),g.setupLightsView(oe),ye===!0&&X.setGlobalState(b.clippingPlanes,oe),qt(R,ue,oe),U.updateMultisampleRenderTarget(Ne),U.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ze=0,wt=$.length;Ze<wt;Ze++){const bt=$[Ze],yt=bt.object,pn=bt.geometry,vt=bt.material,tt=bt.group;if(vt.side===Mi&&yt.layers.test(oe.layers)){const Dn=vt.side;vt.side=$n,vt.needsUpdate=!0,kr(yt,ue,oe,pn,vt,tt),vt.side=Dn,vt.needsUpdate=!0,dt=!0}}dt===!0&&(U.updateMultisampleRenderTarget(Ne),U.updateRenderTargetMipmap(Ne))}b.setRenderTarget(Ke),b.setClearColor(ve,xe),ft!==void 0&&(oe.viewport=ft),b.toneMapping=Ye}function qt(R,$,ue){const oe=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Ne=R.length;Y<Ne;Y++){const Pe=R[Y],Ke=Pe.object,Ye=Pe.geometry,ft=oe===null?Pe.material:oe,dt=Pe.group;Ke.layers.test(ue.layers)&&kr(Ke,$,ue,Ye,ft,dt)}}function kr(R,$,ue,oe,Y,Ne){R.onBeforeRender(b,$,ue,oe,Y,Ne),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(b,$,ue,oe,R,Ne),Y.transparent===!0&&Y.side===Mi&&Y.forceSinglePass===!1?(Y.side=$n,Y.needsUpdate=!0,b.renderBufferDirect(ue,$,oe,Y,R,Ne),Y.side=cs,Y.needsUpdate=!0,b.renderBufferDirect(ue,$,oe,Y,R,Ne),Y.side=Mi):b.renderBufferDirect(ue,$,oe,Y,R,Ne),R.onAfterRender(b,$,ue,oe,Y,Ne)}function Hn(R,$,ue){$.isScene!==!0&&($=Ot);const oe=rt.get(R),Y=g.state.lights,Ne=g.state.shadowsArray,Pe=Y.state.version,Ke=Je.getParameters(R,Y.state,Ne,$,ue),Ye=Je.getProgramCacheKey(Ke);let ft=oe.programs;oe.environment=R.isMeshStandardMaterial?$.environment:null,oe.fog=$.fog,oe.envMap=(R.isMeshStandardMaterial?ae:w).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,ft===void 0&&(R.addEventListener("dispose",ot),ft=new Map,oe.programs=ft);let dt=ft.get(Ye);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===Pe)return Ei(R,Ke),dt}else Ke.uniforms=Je.getUniforms(R),R.onBeforeCompile(Ke,b),dt=Je.acquireProgram(Ke,Ye),ft.set(Ye,dt),oe.uniforms=Ke.uniforms;const Ze=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=X.uniform),Ei(R,Ke),oe.needsLights=Jn(R),oe.lightsStateVersion=Pe,oe.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),oe.currentProgram=dt,oe.uniformsList=null,dt}function cr(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=fu.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Ei(R,$){const ue=rt.get(R);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Bs(R,$,ue,oe,Y){$.isScene!==!0&&($=Ot),U.resetTextureUnits();const Ne=$.fog,Pe=oe.isMeshStandardMaterial?$.environment:null,Ke=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ko,Ye=(oe.isMeshStandardMaterial?ae:w).get(oe.envMap||Pe),ft=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,dt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!ue.morphAttributes.position,wt=!!ue.morphAttributes.normal,bt=!!ue.morphAttributes.color;let yt=us;oe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(yt=b.toneMapping);const pn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,vt=pn!==void 0?pn.length:0,tt=rt.get(oe),Dn=g.state.lights;if(ye===!0&&(Ie===!0||R!==C)){const yn=R===C&&oe.id===P;X.setState(oe,R,yn)}let Ct=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Dn.state.version||tt.outputColorSpace!==Ke||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isBatchedMesh&&tt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&tt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&tt.instancingMorph===!1&&Y.morphTexture!==null||tt.envMap!==Ye||oe.fog===!0&&tt.fog!==Ne||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==X.numPlanes||tt.numIntersection!==X.numIntersection)||tt.vertexAlphas!==ft||tt.vertexTangents!==dt||tt.morphTargets!==Ze||tt.morphNormals!==wt||tt.morphColors!==bt||tt.toneMapping!==yt||tt.morphTargetsCount!==vt)&&(Ct=!0):(Ct=!0,tt.__version=oe.version);let mn=tt.currentProgram;Ct===!0&&(mn=Hn(oe,$,Y));let ei=!1,tn=!1,hi=!1;const zt=mn.getUniforms(),bn=tt.uniforms;if(at.useProgram(mn.program)&&(ei=!0,tn=!0,hi=!0),oe.id!==P&&(P=oe.id,tn=!0),ei||C!==R){at.buffers.depth.getReversed()?(Re.copy(R.projectionMatrix),y_(Re),M_(Re),zt.setValue(Z,"projectionMatrix",Re)):zt.setValue(Z,"projectionMatrix",R.projectionMatrix),zt.setValue(Z,"viewMatrix",R.matrixWorldInverse);const In=zt.map.cameraPosition;In!==void 0&&In.setValue(Z,Xe.setFromMatrixPosition(R.matrixWorld)),_t.logarithmicDepthBuffer&&zt.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,tn=!0,hi=!0)}if(Y.isSkinnedMesh){zt.setOptional(Z,Y,"bindMatrix"),zt.setOptional(Z,Y,"bindMatrixInverse");const yn=Y.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),zt.setValue(Z,"boneTexture",yn.boneTexture,U))}Y.isBatchedMesh&&(zt.setOptional(Z,Y,"batchingTexture"),zt.setValue(Z,"batchingTexture",Y._matricesTexture,U),zt.setOptional(Z,Y,"batchingIdTexture"),zt.setValue(Z,"batchingIdTexture",Y._indirectTexture,U),zt.setOptional(Z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(Z,"batchingColorTexture",Y._colorsTexture,U));const ti=ue.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&se.update(Y,ue,mn),(tn||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,zt.setValue(Z,"receiveShadow",Y.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(bn.envMap.value=Ye,bn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&$.environment!==null&&(bn.envMapIntensity.value=$.environmentIntensity),tn&&(zt.setValue(Z,"toneMappingExposure",b.toneMappingExposure),tt.needsLights&&fr(bn,hi),Ne&&oe.fog===!0&&A.refreshFogUniforms(bn,Ne),A.refreshMaterialUniforms(bn,oe,W,he,g.state.transmissionRenderTarget[R.id]),fu.upload(Z,cr(tt),bn,U)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(fu.upload(Z,cr(tt),bn,U),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(Z,"center",Y.center),zt.setValue(Z,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(Z,"normalMatrix",Y.normalMatrix),zt.setValue(Z,"modelMatrix",Y.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const yn=oe.uniformsGroups;for(let In=0,nn=yn.length;In<nn;In++){const fs=yn[In];B.update(fs,mn),B.bind(fs,mn)}}return mn}function fr(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Jn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,$,ue){rt.get(R.texture).__webglTexture=$,rt.get(R.depthTexture).__webglTexture=ue;const oe=rt.get(R);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ue===void 0,oe.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const ue=rt.get(R);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,ue=0){G=R,z=$,F=ue;let oe=!0,Y=null,Ne=!1,Pe=!1;if(R){const Ye=rt.get(R);if(Ye.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(Z.FRAMEBUFFER,null),oe=!1;else if(Ye.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Ye.__hasExternalTextures)U.rebindTextures(R,rt.get(R.texture).__webglTexture,rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Ye.__boundDepthTexture!==Ze){if(Ze!==null&&rt.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const ft=R.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Pe=!0);const dt=rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(dt[$])?Y=dt[$][ue]:Y=dt[$],Ne=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?Y=rt.get(R).__webglMultisampledFramebuffer:Array.isArray(dt)?Y=dt[ue]:Y=dt,V.copy(R.viewport),le.copy(R.scissor),ee=R.scissorTest}else V.copy(k).multiplyScalar(W).floor(),le.copy(fe).multiplyScalar(W).floor(),ee=We;if(at.bindFramebuffer(Z.FRAMEBUFFER,Y)&&oe&&at.drawBuffers(R,Y),at.viewport(V),at.scissor(le),at.setScissorTest(ee),Ne){const Ye=rt.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ye.__webglTexture,ue)}else if(Pe){const Ye=rt.get(R.texture),ft=$||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ye.__webglTexture,ue||0,ft)}P=-1},this.readRenderTargetPixels=function(R,$,ue,oe,Y,Ne,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ke=Ke[Pe]),Ke){at.bindFramebuffer(Z.FRAMEBUFFER,Ke);try{const Ye=R.texture,ft=Ye.format,dt=Ye.type;if(!_t.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-oe&&ue>=0&&ue<=R.height-Y&&Z.readPixels($,ue,oe,Y,He.convert(ft),He.convert(dt),Ne)}finally{const Ye=G!==null?rt.get(G).__webglFramebuffer:null;at.bindFramebuffer(Z.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,$,ue,oe,Y,Ne,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ke=Ke[Pe]),Ke){const Ye=R.texture,ft=Ye.format,dt=Ye.type;if(!_t.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-oe&&ue>=0&&ue<=R.height-Y){at.bindFramebuffer(Z.FRAMEBUFFER,Ke);const Ze=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ne.byteLength,Z.STREAM_READ),Z.readPixels($,ue,oe,Y,He.convert(ft),He.convert(dt),0);const wt=G!==null?rt.get(G).__webglFramebuffer:null;at.bindFramebuffer(Z.FRAMEBUFFER,wt);const bt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await x_(Z,bt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ne),Z.deleteBuffer(Ze),Z.deleteSync(bt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,ue=0){R.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const oe=Math.pow(2,-ue),Y=Math.floor(R.image.width*oe),Ne=Math.floor(R.image.height*oe),Pe=$!==null?$.x:0,Ke=$!==null?$.y:0;U.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ue,0,0,Pe,Ke,Y,Ne),at.unbindTexture()},this.copyTextureToTexture=function(R,$,ue=null,oe=null,Y=0){R.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,R=arguments[1],$=arguments[2],Y=arguments[3]||0,ue=null);let Ne,Pe,Ke,Ye,ft,dt,Ze,wt,bt;const yt=R.isCompressedTexture?R.mipmaps[Y]:R.image;ue!==null?(Ne=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,Ke=ue.isBox3?ue.max.z-ue.min.z:1,Ye=ue.min.x,ft=ue.min.y,dt=ue.isBox3?ue.min.z:0):(Ne=yt.width,Pe=yt.height,Ke=yt.depth||1,Ye=0,ft=0,dt=0),oe!==null?(Ze=oe.x,wt=oe.y,bt=oe.z):(Ze=0,wt=0,bt=0);const pn=He.convert($.format),vt=He.convert($.type);let tt;$.isData3DTexture?(U.setTexture3D($,0),tt=Z.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(U.setTexture2DArray($,0),tt=Z.TEXTURE_2D_ARRAY):(U.setTexture2D($,0),tt=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,$.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,$.unpackAlignment);const Dn=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ct=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),mn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),ei=Z.getParameter(Z.UNPACK_SKIP_ROWS),tn=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,yt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,yt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ye),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ft),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,dt);const hi=R.isDataArrayTexture||R.isData3DTexture,zt=$.isDataArrayTexture||$.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const bn=rt.get(R),ti=rt.get($),yn=rt.get(bn.__renderTarget),In=rt.get(ti.__renderTarget);at.bindFramebuffer(Z.READ_FRAMEBUFFER,yn.__webglFramebuffer),at.bindFramebuffer(Z.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let nn=0;nn<Ke;nn++)hi&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get(R).__webglTexture,Y,dt+nn),R.isDepthTexture?(zt&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get($).__webglTexture,Y,bt+nn),Z.blitFramebuffer(Ye,ft,Ne,Pe,Ze,wt,Ne,Pe,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):zt?Z.copyTexSubImage3D(tt,Y,Ze,wt,bt+nn,Ye,ft,Ne,Pe):Z.copyTexSubImage2D(tt,Y,Ze,wt,bt+nn,Ye,ft,Ne,Pe);at.bindFramebuffer(Z.READ_FRAMEBUFFER,null),at.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(tt,Y,Ze,wt,bt,Ne,Pe,Ke,pn,vt,yt.data):$.isCompressedArrayTexture?Z.compressedTexSubImage3D(tt,Y,Ze,wt,bt,Ne,Pe,Ke,pn,yt.data):Z.texSubImage3D(tt,Y,Ze,wt,bt,Ne,Pe,Ke,pn,vt,yt):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Y,Ze,wt,Ne,Pe,pn,vt,yt.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Y,Ze,wt,yt.width,yt.height,pn,yt.data):Z.texSubImage2D(Z.TEXTURE_2D,Y,Ze,wt,Ne,Pe,pn,vt,yt);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Dn),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ct),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,mn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ei),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,tn),Y===0&&$.generateMipmaps&&Z.generateMipmap(tt),at.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ue=null,oe=null,Y=0){return R.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,oe=arguments[1]||null,R=arguments[2],$=arguments[3],Y=arguments[4]||0),Ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,ue,oe,Y)},this.initRenderTarget=function(R){rt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),at.unbindTexture()},this.resetState=function(){z=0,F=0,G=null,at.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}class Id{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=n,this.far=r}clone(){return new Id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class P1 extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vd extends zr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new q,gu=new q,t0=new Kt,wa=new bd,nu=new Na,Rf=new q,n0=new q;class Z0 extends ln{constructor(e=new dn,n=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)mu.fromBufferAttribute(n,a-1),gu.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new jt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(a),nu.radius+=l,e.ray.intersectsSphere(nu)===!1)return;t0.copy(a).invert(),wa.copy(e.ray).applyMatrix4(t0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=_.getX(T),D=_.getX(T+1),L=iu(this,e,wa,h,g,D);L&&n.push(L)}if(this.isLineLoop){const T=_.getX(E-1),y=_.getX(M),g=iu(this,e,wa,h,T,y);g&&n.push(g)}}else{const M=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=iu(this,e,wa,h,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=iu(this,e,wa,h,E-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function iu(s,e,n,r,a,l){const c=s.geometry.attributes.position;if(mu.fromBufferAttribute(c,a),gu.fromBufferAttribute(c,l),n.distanceSqToSegment(mu,gu,Rf,n0)>r)return;Rf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Rf);if(!(h<e.near||h>e.far))return{distance:h,point:n0.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const i0=new q,r0=new q;class L1 extends Z0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)i0.fromBufferAttribute(n,a),r0.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+i0.distanceTo(r0);e.setAttribute("lineDistance",new jt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d extends zr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new Kt,xd=new bd,ru=new Na,su=new q;class o0 extends ln{constructor(e=new dn,n=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(a),ru.radius+=l,e.ray.intersectsSphere(ru)===!1)return;s0.copy(a).invert(),xd.copy(e.ray).applyMatrix4(s0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,T=M;E<T;E++){const y=m.getX(E);su.fromBufferAttribute(v,y),a0(su,y,h,a,e,n,this)}}else{const x=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=x,T=M;E<T;E++)su.fromBufferAttribute(v,E),a0(su,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function a0(s,e,n,r,a,l,c){const d=xd.distanceSqToPoint(s);if(d<n){const h=new q;xd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Ta extends Kn{constructor(e,n,r,a,l,c,d,h,m){super(e,n,r,a,l,c,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ro extends dn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const l=[],c=[],d=[],h=[],m=new q,_=new pt;c.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const M=r+v/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),c.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(c[x]/e+1)/2,_.y=(c[x+1]/e+1)/2,h.push(_.x,_.y)}for(let v=1;v<=n;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tn extends dn{constructor(e=1,n=1,r=1,a=32,l=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const _=[],v=[],x=[],M=[];let E=0;const T=[],y=r/2;let g=0;D(),c===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(M,2));function D(){const b=new q,K=new q;let z=0;const F=(n-e)/r;for(let G=0;G<=l;G++){const P=[],C=G/l,V=C*(n-e)+e;for(let le=0;le<=a;le++){const ee=le/a,ve=ee*h+d,xe=Math.sin(ve),pe=Math.cos(ve);K.x=V*xe,K.y=-C*r+y,K.z=V*pe,v.push(K.x,K.y,K.z),b.set(xe,F,pe).normalize(),x.push(b.x,b.y,b.z),M.push(ee,1-C),P.push(E++)}T.push(P)}for(let G=0;G<a;G++)for(let P=0;P<l;P++){const C=T[P][G],V=T[P+1][G],le=T[P+1][G+1],ee=T[P][G+1];(e>0||P!==0)&&(_.push(C,V,ee),z+=3),(n>0||P!==l-1)&&(_.push(V,le,ee),z+=3)}m.addGroup(g,z,0),g+=z}function L(b){const K=E,z=new pt,F=new q;let G=0;const P=b===!0?e:n,C=b===!0?1:-1;for(let le=1;le<=a;le++)v.push(0,y*C,0),x.push(0,C,0),M.push(.5,.5),E++;const V=E;for(let le=0;le<=a;le++){const ve=le/a*h+d,xe=Math.cos(ve),pe=Math.sin(ve);F.x=P*pe,F.y=y*C,F.z=P*xe,v.push(F.x,F.y,F.z),x.push(0,C,0),z.x=xe*.5+.5,z.y=pe*.5*C+.5,M.push(z.x,z.y),E++}for(let le=0;le<a;le++){const ee=K+le,ve=V+le;b===!0?_.push(ve,ve+1,ee):_.push(ve+1,ve,ee),G+=3}m.addGroup(g,G,b===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vu extends Tn{constructor(e=1,n=1,r=32,a=1,l=!1,c=0,d=Math.PI*2){super(0,e,n,r,a,l,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:d}}static fromJSON(e){return new vu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ud extends dn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],c=[];d(a),m(r),_(),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(l.slice(),3)),this.setAttribute("uv",new jt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const L=new q,b=new q,K=new q;for(let z=0;z<n.length;z+=3)M(n[z+0],L),M(n[z+1],b),M(n[z+2],K),h(L,b,K,D)}function h(D,L,b,K){const z=K+1,F=[];for(let G=0;G<=z;G++){F[G]=[];const P=D.clone().lerp(b,G/z),C=L.clone().lerp(b,G/z),V=z-G;for(let le=0;le<=V;le++)le===0&&G===z?F[G][le]=P:F[G][le]=P.clone().lerp(C,le/V)}for(let G=0;G<z;G++)for(let P=0;P<2*(z-G)-1;P++){const C=Math.floor(P/2);P%2===0?(x(F[G][C+1]),x(F[G+1][C]),x(F[G][C])):(x(F[G][C+1]),x(F[G+1][C+1]),x(F[G+1][C]))}}function m(D){const L=new q;for(let b=0;b<l.length;b+=3)L.x=l[b+0],L.y=l[b+1],L.z=l[b+2],L.normalize().multiplyScalar(D),l[b+0]=L.x,l[b+1]=L.y,l[b+2]=L.z}function _(){const D=new q;for(let L=0;L<l.length;L+=3){D.x=l[L+0],D.y=l[L+1],D.z=l[L+2];const b=y(D)/2/Math.PI+.5,K=g(D)/Math.PI+.5;c.push(b,1-K)}E(),v()}function v(){for(let D=0;D<c.length;D+=6){const L=c[D+0],b=c[D+2],K=c[D+4],z=Math.max(L,b,K),F=Math.min(L,b,K);z>.9&&F<.1&&(L<.2&&(c[D+0]+=1),b<.2&&(c[D+2]+=1),K<.2&&(c[D+4]+=1))}}function x(D){l.push(D.x,D.y,D.z)}function M(D,L){const b=D*3;L.x=e[b+0],L.y=e[b+1],L.z=e[b+2]}function E(){const D=new q,L=new q,b=new q,K=new q,z=new pt,F=new pt,G=new pt;for(let P=0,C=0;P<l.length;P+=9,C+=6){D.set(l[P+0],l[P+1],l[P+2]),L.set(l[P+3],l[P+4],l[P+5]),b.set(l[P+6],l[P+7],l[P+8]),z.set(c[C+0],c[C+1]),F.set(c[C+2],c[C+3]),G.set(c[C+4],c[C+5]),K.copy(D).add(L).add(b).divideScalar(3);const V=y(K);T(z,C+0,D,V),T(F,C+2,L,V),T(G,C+4,b,V)}}function T(D,L,b,K){K<0&&D.x===1&&(c[L]=D.x-1),b.x===0&&b.z===0&&(c[L]=K/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.vertices,e.indices,e.radius,e.details)}}class Nd extends Ud{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,c,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Nd(e.radius,e.detail)}}class ar extends dn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let m=0;const _=[],v=new q,x=new q,M=[],E=[],T=[],y=[];for(let g=0;g<=r;g++){const D=[],L=g/r;let b=0;g===0&&c===0?b=.5/n:g===r&&h===Math.PI&&(b=-.5/n);for(let K=0;K<=n;K++){const z=K/n;v.x=-e*Math.cos(a+z*l)*Math.sin(c+L*d),v.y=e*Math.cos(c+L*d),v.z=e*Math.sin(a+z*l)*Math.sin(c+L*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(z+b,1-L),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const L=_[g][D+1],b=_[g][D],K=_[g+1][D],z=_[g+1][D+1];(g!==0||c>0)&&M.push(L,b,z),(g!==r-1||h<Math.PI)&&M.push(b,K,z)}this.setIndex(M),this.setAttribute("position",new jt(E,3)),this.setAttribute("normal",new jt(T,3)),this.setAttribute("uv",new jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pr extends dn{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],m=[],_=new q,v=new q,x=new q;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const T=E/a*l,y=M/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),d.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),h.push(x.x,x.y,x.z),m.push(E/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const T=(a+1)*M+E-1,y=(a+1)*(M-1)+E-1,g=(a+1)*(M-1)+E,D=(a+1)*M+E;c.push(T,y,D),c.push(y,g,D)}this.setIndex(c),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class D1 extends An{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Rt extends zr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I1 extends zr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U1 extends zr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fa extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class N1 extends Fa{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const bf=new Kt,l0=new q,u0=new q;class Fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),n.position.copy(l0),u0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(u0),n.updateMatrixWorld(),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class F1 extends Fd{constructor(){super(new di(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=hu*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||n.far;(r!==n.fov||a!==n.aspect||l!==n.far)&&(n.fov=r,n.aspect=a,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class c0 extends Fa{constructor(e,n,r=0,a=Math.PI/3,l=0,c=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=r,this.angle=a,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new F1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const f0=new Kt,Aa=new q,Pf=new q;class O1 extends Fd{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),r.position.copy(Aa),Pf.copy(r.position),Pf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Pf),r.updateMatrixWorld(),a.makeTranslation(-Aa.x,-Aa.y,-Aa.z),f0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(f0)}}class d0 extends Fa{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z1 extends Fd{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k1 extends Fa{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new z1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B1 extends Fa{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Q0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=h0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=h0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function h0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);const J0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ho{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V1=new Ld(-1,1,1,-1,0,1);class H1 extends dn{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}const G1=new H1;class Od{constructor(e){this._mesh=new ze(G1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ba extends Ho{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=La.clone(e.uniforms),this.material=new An({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Od(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class p0 extends Ho{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,d;this.inverse?(c=0,d=1):(c=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,c,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class W1 extends Ho{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class X1{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const r=e.getSize(new pt);this._width=r.width,this._height=r.height,n=new Qi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ba(J0),this.copyPass.material.blending=Ur,this.clock=new Q0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const c=this.passes[a];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),c.needsSwap){if(r){const d=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}p0!==void 0&&(c instanceof p0?r=!0:c instanceof W1&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j1 extends Ho{constructor(e,n,r=null,a=null,l=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(e,n,r){const a=e.autoClear;e.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=a}}const q1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class zo extends Ho{constructor(e,n,r,a){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new pt(e.x,e.y):new pt(256,256),this.clearColor=new mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Qi(l,c,{type:Nr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const x=new Qi(l,c,{type:Nr});x.texture.name="UnrealBloomPass.h"+v,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const M=new Qi(l,c,{type:Nr});M.texture.name="UnrealBloomPass.v"+v,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),l=Math.round(l/2),c=Math.round(c/2)}const d=q1;this.highPassUniforms=La.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new An({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new pt(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const _=J0;this.copyUniforms=La.clone(_.uniforms),this.blendMaterial=new An({uniforms:this.copyUniforms,vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,blending:Lf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new mt,this.oldClearAlpha=1,this.basic=new ci,this.fsQuad=new Od(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(r,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,a),this.renderTargetsVertical[l].setSize(r,a),this.separableBlurMaterials[l].uniforms.invSize.value=new pt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,n,r,a,l){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let d=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[h].uniforms.direction.value=zo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=zo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),d=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}getSeperableBlurMaterial(e){const n=[];for(let r=0;r<e;r++)n.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new An({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}}zo.BlurDirectionX=new pt(1,0);zo.BlurDirectionY=new pt(0,1);const Y1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $1 extends Ho{constructor(){super();const e=Y1;this.uniforms=La.clone(e.uniforms),this.material=new D1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Od(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===x0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===y0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===M0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===S0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function K1(){var Je;const s=Ft.useRef(null),[e,n]=Ft.useState(!0),[r,a]=Ft.useState([]),[l,c]=Ft.useState(0),[d,h]=Ft.useState(!1),[m,_]=Ft.useState("day"),[v,x]=Ft.useState("forest"),[M,E]=Ft.useState(0),[T,y]=Ft.useState(0),[g,D]=Ft.useState(0),[L,b]=Ft.useState(!0),[K,z]=Ft.useState(null),F=Ft.useRef(null),G=Ft.useRef(null),P=Ft.useRef({}),C=Ft.useRef(new Q0),V=Ft.useRef({}),le=Ft.useRef({speed:0,steering:0,posX:0,angle:0}),ee=Ft.useRef(0),ve=Ft.useRef(!0),xe=Ft.useRef(0),pe=Ft.useRef(0),he=Ft.useRef([]),W=()=>{if(F.current)return F.current;const A=new(window.AudioContext||window.webkitAudioContext),O=A.sampleRate,I=Math.floor(O*.35),X=A.createBuffer(2,I,O);for(let qt=0;qt<2;qt++){const kr=X.getChannelData(qt);for(let Hn=0;Hn<I;Hn++){const cr=Hn/O;kr[Hn]=(Math.random()*2-1)*Math.exp(-cr*12)*(Hn<O*.02?.6:1)*.4}}const J=A.createConvolver();J.buffer=X;const de=A.createBiquadFilter();de.type="peaking",de.frequency.value=80,de.gain.value=6,de.Q.value=1.2;const se=A.createBiquadFilter();se.type="lowpass",se.frequency.value=8e3,se.Q.value=.7;const we=A.createDelay(.01);we.delayTime.value=3e-4;const be=A.createDelay(.01);be.delayTime.value=6e-4;const He=A.createStereoPanner();He.pan.value=-.6;const st=A.createStereoPanner();st.pan.value=.6;const B=A.createGain();B.gain.value=.7;const De=A.createGain();De.gain.value=.35;const ne=A.createGain();ne.gain.value=1,de.connect(se),se.connect(we).connect(He).connect(B),se.connect(be).connect(st).connect(B),B.connect(ne),J.connect(De),De.connect(ne),ne.connect(A.destination);const me=A.createBufferSource(),ke=A.createBuffer(1,Math.floor(O*2),O),Oe=ke.getChannelData(0);for(let qt=0;qt<Oe.length;qt++)Oe[qt]=Math.random()*2-1;me.buffer=ke,me.loop=!0;const ot=A.createBiquadFilter();ot.type="lowpass",ot.frequency.value=250,ot.Q.value=.5;const te=A.createGain();te.gain.value=0,me.connect(ot).connect(te).connect(A.destination),me.start();const et=A.createOscillator();et.type="sawtooth",et.frequency.value=35;const je=A.createOscillator();je.type="triangle",je.frequency.value=70;const It=A.createBiquadFilter();It.type="lowpass",It.frequency.value=120,It.Q.value=1.5;const Gt=A.createGain();Gt.gain.value=0,et.connect(It),je.connect(It),It.connect(Gt).connect(A.destination),et.start(),je.start();const Zn=A.createBufferSource(),hn=A.createBuffer(1,Math.floor(O*2),O),Rn=hn.getChannelData(0);for(let qt=0;qt<Rn.length;qt++)Rn[qt]=Math.random()*2-1;Zn.buffer=hn,Zn.loop=!0;const Lt=A.createBiquadFilter();Lt.type="highpass",Lt.frequency.value=2500,Lt.Q.value=.3;const un=A.createBiquadFilter();un.type="lowpass",un.frequency.value=6e3,un.Q.value=.5;const Qn=A.createGain();return Qn.gain.value=0,Zn.connect(Lt).connect(un).connect(Qn).connect(A.destination),Zn.start(),F.current={ctx:A,convolver:J,bassBoost:de,noiseGain:te,engOsc1:et,engOsc2:je,engLPF:It,engGain:Gt,windGain:Qn,activeSource:null},F.current},_e=()=>{const A=F.current;if(!A)return;const O=A.ctx,I=O.currentTime,X=O.createOscillator();X.type="sine",X.frequency.setValueAtTime(988,I),X.frequency.setValueAtTime(1319,I+.07);const J=O.createOscillator();J.type="sine",J.frequency.setValueAtTime(1568,I+.04);const de=O.createGain();de.gain.setValueAtTime(.18,I),de.gain.exponentialRampToValueAtTime(.001,I+.22);const se=O.createGain();se.gain.setValueAtTime(.001,I),se.gain.linearRampToValueAtTime(.1,I+.04),se.gain.exponentialRampToValueAtTime(.001,I+.2),X.connect(de).connect(O.destination),J.connect(se).connect(O.destination),X.start(I),X.stop(I+.25),J.start(I+.03),J.stop(I+.25)},ge=()=>{const A=F.current;if(!A)return;const O=A.ctx,I=O.currentTime,X=O.createOscillator();X.type="sawtooth",X.frequency.setValueAtTime(90,I),X.frequency.exponentialRampToValueAtTime(20,I+.35);const J=O.createBuffer(1,Math.floor(O.sampleRate*.4),O.sampleRate),de=J.getChannelData(0);for(let B=0;B<de.length;B++)de[B]=Math.random()*2-1;const se=O.createBufferSource();se.buffer=J;const we=O.createBiquadFilter();we.type="bandpass",we.frequency.value=900,we.Q.value=1.5;const be=O.createWaveShaper(),He=new Float32Array(256);for(let B=0;B<256;B++){const De=B/128-1;He[B]=(Math.PI+3.5)*De/(Math.PI+3.5*Math.abs(De))}be.curve=He;const st=O.createGain();st.gain.setValueAtTime(.35,I),st.gain.exponentialRampToValueAtTime(.001,I+.45),X.connect(st).connect(O.destination),se.connect(we).connect(be).connect(st),X.start(I),X.stop(I+.5),se.start(I),se.stop(I+.45)},k=A=>{const O=W();if(O.activeSource)try{O.activeSource.disconnect()}catch{}A.source||(A.source=O.ctx.createMediaElementSource(A.audio)),A.source.connect(O.bassBoost),A.source.connect(O.convolver),O.activeSource=A.source},fe=A=>{if(he.current.length>=3)return;const O=new Audio(URL.createObjectURL(A));O.crossOrigin="anonymous";const I={name:A.name.replace(/\.[^/.]+$/,""),audio:O,source:null};O.addEventListener("ended",()=>{const X=he.current,J=X.indexOf(I);J>=0&&J<X.length-1?re(J+1):X.length>0&&re(0)}),he.current=[...he.current,I],a([...he.current])},We=A=>{var I;const O=he.current;if((I=O[A])!=null&&I.audio&&(O[A].audio.pause(),O[A].source))try{O[A].source.disconnect()}catch{}he.current=O.filter((X,J)=>J!==A),a([...he.current]),l>=he.current.length&&c(Math.max(0,he.current.length-1)),he.current.length===0&&h(!1)},re=A=>{const O=he.current;if(!O.length)return;O.forEach(J=>J.audio.pause());const I=O[A%O.length];k(I);const X=F.current;X&&X.ctx.state==="suspended"&&X.ctx.resume(),I.audio.currentTime=0,I.audio.play(),c(A%O.length),h(!0)},ye=()=>{const A=he.current;if(!A.length)return;const O=F.current;O&&O.ctx.state==="suspended"&&O.ctx.resume();const I=A[l];I&&(d?(I.audio.pause(),h(!1)):((!(O!=null&&O.activeSource)||O.activeSource!==I.source)&&k(I),I.audio.play(),h(!0)))},Ie=()=>{const A=he.current;A.length<2||re((l+1)%A.length)},Re=()=>{const A=he.current;A.length<2||re((l-1+A.length)%A.length)},Be=()=>{W(),n(!1),he.current.length>0&&re(0)},Xe=()=>{const A=P.current;ve.current=!0,b(!0),ee.current=0,y(0),le.current={speed:0,steering:0,posX:0,angle:0},A.records&&A.records.forEach((O,I)=>{O.visible=!0,O.position.z=-40-I*35,O.position.x=(Math.random()-.5)*10}),A.labels&&A.labels.forEach((O,I)=>{O.visible=!0,O.position.z=-60-I*50,O.position.x=(Math.random()-.5)*10}),A.explosion&&(A.explosion.visible=!1),A.roadGroup&&(A.roadGroup.position.x=0)},lt=(A,O)=>{const I=new an;return I.add(new ze(new Tn(.3,.5,5),new Rt({color:6044190,roughness:.9}))),[1731388,2262858,1003826].forEach((X,J)=>{const de=new ze(new vu(2.5-J*.6,4,7),new Rt({color:X,roughness:.8}));de.position.y=3.5+J*2.2,de.castShadow=!0,I.add(de)}),I.position.set(A,2.5,O),I.scale.setScalar(.8+Math.random()*.8),I},Ot=(A,O)=>{const I=new ze(new Nd(1+Math.random()*2,1),new Rt({color:7829367,roughness:.85,metalness:.05}));return I.position.set(A,.5,O),I.rotation.set(Math.random(),Math.random(),0),I},St=(A,O,I)=>{const X=I||30+Math.random()*60,J=new ze(new vu(X,X*1.5,8),new Rt({color:5598037,roughness:.9}));return J.position.set(A,X*.6,O),J.userData={isMountain:!0,radius:X},J},Ht=(A,O)=>{const I=new an;I.add(new ze(new Tn(.15,.3,4),new Rt({color:4860437,roughness:.85})));for(let X=0;X<4;X++){const J=new ze(new Tn(.06,.1,2.5,6),new Rt({color:4860437,roughness:.85}));J.position.set(Math.sin(X*1.6)*.8,2.5+X*.3,Math.cos(X*1.6)*.8),J.rotation.z=Math.sin(X*1.6)*.6,I.add(J)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(X=>{const J=new ze(new ar(1.2+Math.random()*1.5,8,7),new Rt({color:X,roughness:.6,transparent:!0,opacity:.85}));J.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),I.add(J)}),I.position.set(A,2,O),I.scale.setScalar(.7+Math.random()*.7),I},Z=(A,O)=>{const I=new an,X=new Rt({color:13378082,roughness:.4,metalness:.1});[-1.5,1.5].forEach(se=>{const we=new ze(new Tn(.2,.25,7,8),X);we.position.set(se,3.5,0),I.add(we)});const J=new ze(new Bt(5,.35,.35),X);J.position.y=7,I.add(J);const de=new ze(new Bt(4,.25,.25),X);return de.position.y=6,I.add(de),I.position.set(A,0,O),I},Cn=(A,O)=>{const I=new an,X=4+Math.random()*8,J=10+Math.random()*50,de=4+Math.random()*8;I.add((()=>{const be=new ze(new Bt(X,J,de),new Rt({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)],roughness:.7,metalness:.3}));return be.position.y=J/2,be.castShadow=!0,be})());const se=new Rt({color:16772778,emissive:16768392,emissiveIntensity:.6,roughness:.3}),we=new Rt({color:2241348,roughness:.8});for(let be=0;be<Math.floor(J/2.5);be++)for(let He=0;He<Math.floor(X/1.8);He++){const st=new ze(new Vn(.8,1.2),Math.random()>.35?se:we);st.position.set(-X/2+1+He*(X/Math.floor(X/1.8)),2+be*2.5,de/2+.01),I.add(st);const B=st.clone();B.position.z=-de/2-.01,B.rotation.y=Math.PI,I.add(B)}return I.position.set(A,0,O),I.userData={isMountain:!0,radius:Math.max(X,de)},I},Et=(A,O)=>{const I=new an,X=new ze(new Tn(.08,.1,8,8),new Rt({color:5592405,roughness:.4,metalness:.6}));X.position.y=4,I.add(X);const J=new ze(new Tn(.04,.04,2.5,6),new Rt({color:5592405,roughness:.4,metalness:.6}));J.rotation.z=Math.PI/2,J.position.set(A>0?-1.2:1.2,8,0),I.add(J);const de=new ze(new ar(.2,8,6),new Rt({color:16777130,emissive:16768358,emissiveIntensity:.8}));return de.position.set(A>0?-2:2,7.8,0),I.add(de),I.position.set(A,0,O),I},_t=Ft.useCallback((A,O,I,X)=>{I.forEach(de=>A.remove(de)),I.length=0;const J=()=>Math.random()>.5?1:-1;if(O==="forest"){for(let de=0;de<200;de++){const se=J();I.push((Math.random()<.7?lt:Ot)(se*(14+Math.random()*80),-Math.random()*X))}for(let de=0;de<40;de++){const se=J(),we=30+Math.random()*60;I.push(St(se*(we+25+Math.random()*120),-Math.random()*X,we))}}else if(O==="sakura"){for(let de=0;de<200;de++)I.push(Ht(J()*(12+Math.random()*70),-Math.random()*X));for(let de=0;de<10;de++)I.push(Z(J()*(9+Math.random()*6),-de*90-30));for(let de=0;de<20;de++){const se=40+Math.random()*50,we=St(J()*(se+40+Math.random()*100),-Math.random()*X,se);we.material.color.set(6715306),I.push(we)}}else if(O==="city"){for(let de=0;de<120;de++)I.push(Cn(J()*(12+Math.random()*60),-Math.random()*X));for(let de=0;de<50;de++)I.push(Et(J()*9,-de*20))}I.forEach(de=>A.add(de))},[]),at=()=>{const A=new an;A.add(new ze(new Tn(.8,.8,.05,24),new Rt({color:1118481,roughness:.15,metalness:.3}))),[.3,.5,.65].forEach(I=>{const X=new ze(new Pr(I,.008,4,24),new ci({color:2236962}));X.rotation.x=Math.PI/2,A.add(X)}),A.add(new ze(new Tn(.22,.22,.06,16),new Rt({color:16729156,roughness:.3,metalness:.1}))),A.add(new ze(new Tn(.04,.04,.08,8),new ci({color:0})));const O=new ze(new Pr(.85,.04,8,24),new Rt({color:16768256,emissive:16755200,emissiveIntensity:.8,transparent:!0,opacity:.7}));return O.rotation.x=Math.PI/2,A.add(O),A},Nt=()=>{const A=new an,O=new Rt({color:4473924,roughness:.25,metalness:.3,emissive:16720384,emissiveIntensity:.15}),I=new ze(new Bt(1.2,1.6,.3),O);I.position.y=.8,A.add(I);const X=new Rt({color:14526976,roughness:.1,metalness:.9,emissive:16755200,emissiveIntensity:.3}),J=new ze(new Bt(.8,.8,.02),X);J.position.set(0,.9,.17),A.add(J);const de=new Rt({color:16720384,roughness:.3,metalness:.1,emissive:16711680,emissiveIntensity:.6}),se=new ze(new Bt(1.3,.15,.32),de);se.position.set(0,1.65,0),A.add(se),[-.7,.7].forEach(He=>{for(let st=0;st<3;st++){const B=new ze(new Pr(.08,.02,6,8),new Rt({color:13421772,roughness:.1,metalness:.95}));B.position.set(He,.4+st*.25,0),B.rotation.y=Math.PI/2,B.rotation.x=st%2===0?0:Math.PI/2,A.add(B)}});const we=new ze(new Pr(1,.06,8,24),new ci({color:16729088,transparent:!0,opacity:.6}));we.rotation.x=Math.PI/2,we.position.y=.05,A.add(we);const be=new ze(new ar(.18,10,8),new Rt({color:16711680,emissive:16711680,emissiveIntensity:2,transparent:!0,opacity:.9}));return be.position.set(0,1.85,0),A.add(be),A.userData={type:"label",light:be,bodyMat:O,stripeMat:de,plateMat:X,ring:we},A},rt=()=>{const A=new an,O=[16729088,16746496,16763904,16720384];for(let I=0;I<12;I++){const X=new ze(new ar(.5+Math.random()*1.5,8,6),new ci({color:O[I%4],transparent:!0,opacity:.8}));X.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),X.userData.speed=1+Math.random()*2,A.add(X)}for(let I=0;I<6;I++){const X=new ze(new ar(1+Math.random(),6,5),new ci({color:3355443,transparent:!0,opacity:.5}));X.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),A.add(X)}return A.visible=!1,A},U={uniforms:{tDiffuse:{value:null},darkness:{value:.4},offset:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float darkness; uniform float offset; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); vec2 uv=(vUv-0.5)*2.0; float vig=1.0-dot(uv,uv)*darkness*0.35; c.rgb*=clamp(vig,0.0,1.0); gl_FragColor=c; }`},w={uniforms:{tDiffuse:{value:null},amount:{value:3e-4}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
      void main(){ vec2 d=(vUv-0.5)*amount; float r=texture2D(tDiffuse,vUv+d).r; float g=texture2D(tDiffuse,vUv).g; float b=texture2D(tDiffuse,vUv-d).b; gl_FragColor=vec4(r,g,b,1.0); }`},ae={uniforms:{tDiffuse:{value:null},warmth:{value:.02},contrast:{value:1.04}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float warmth; uniform float contrast; varying vec2 vUv;
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
      }`},Te=Ft.useCallback(A=>{const O=A.clientWidth,I=A.clientHeight,X=new b1({antialias:!0,powerPreference:"high-performance"});X.setSize(O,I),X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.shadowMap.enabled=!0,X.shadowMap.type=v0,X.toneMapping=Sd,X.toneMappingExposure=1.1,A.appendChild(X.domElement);const J=new P1,de=new di(68,O/I,.1,2e3);de.position.set(0,3.5,.5),de.lookAt(0,2.5,-50);const se=new X1(X);se.addPass(new j1(J,de));const we=new zo(new pt(O,I),.15,.4,.92);se.addPass(we);const be=new ba(U);se.addPass(be);const He=new ba(w),st=new ba(ae);se.addPass(st);const B=new ba(Ee);se.addPass(B),se.addPass(new $1);const De={day:8900331,sunset:16739125,night:529448,retro:2097216},ne={day:13166325,sunset:16746581,night:396830,retro:1572912},me={day:8952234,sunset:5583650,night:1712708,retro:8913100},ke={day:16777200,sunset:16742195,night:3364266,retro:16729343},Oe=new ar(900,32,16),ot=new An({side:$n,depthWrite:!1,uniforms:{topColor:{value:new mt(4491468)},midColor:{value:new mt(8900331)},bottomColor:{value:new mt(13166325)},sunColor:{value:new mt(16777198)},sunDir:{value:new q(.3,.4,-.8).normalize()},sunSize:{value:.04}},vertexShader:"varying vec3 vWorldPos; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorldPos=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform vec3 topColor; uniform vec3 midColor; uniform vec3 bottomColor; uniform vec3 sunColor; uniform vec3 sunDir; uniform float sunSize; varying vec3 vWorldPos;
        void main(){ vec3 d=normalize(vWorldPos); float y=d.y;
          vec3 c=y>0.0?mix(midColor,topColor,pow(y,0.6)):mix(midColor,bottomColor,pow(-y,0.4));
          float sunDot=max(dot(d,sunDir),0.0); c+=sunColor*pow(sunDot,256.0/sunSize)*0.8;
          c+=sunColor*pow(sunDot,8.0)*0.15; gl_FragColor=vec4(c,1.0); }`}),te=new ze(Oe,ot);J.add(te),J.fog=new Id(ne.day,80,600);const et=new B1(me.day,.7);J.add(et);const je=new k1(ke.day,1);je.position.set(30,50,-30),je.castShadow=!0,je.shadow.mapSize.width=2048,je.shadow.mapSize.height=2048,je.shadow.camera.near=1,je.shadow.camera.far=200,je.shadow.camera.left=-30,je.shadow.camera.right=30,je.shadow.camera.top=30,je.shadow.camera.bottom=-30,je.shadow.bias=-.001,J.add(je);const It=new d0(4482730,.4,10);It.position.set(0,4,-1),J.add(It);const Gt=new d0(16777215,.2,6);Gt.position.set(0,2.5,-1.5),J.add(Gt);const Zn=new N1(8961023,4478242,.3);J.add(Zn);const hn=new an;J.add(hn);const Rn=document.createElement("canvas");Rn.width=512,Rn.height=512;const Lt=Rn.getContext("2d");Lt.fillStyle="#333333",Lt.fillRect(0,0,512,512);for(let Se=0;Se<200;Se++){const Ue=Math.random()*512,At=Math.random()*512,kt=8+Math.random()*24,Qt=Math.floor(42+Math.random()*20);Lt.fillStyle=`rgba(${Qt},${Qt},${Qt},0.15)`,Lt.beginPath(),Lt.arc(Ue,At,kt,0,Math.PI*2),Lt.fill()}for(let Se=0;Se<100;Se++){const Ue=Math.random()*512,At=Math.random()*512,kt=4+Math.random()*12,Qt=Math.floor(36+Math.random()*22);Lt.fillStyle=`rgba(${Qt},${Qt},${Qt},0.1)`,Lt.beginPath(),Lt.arc(Ue,At,kt,0,Math.PI*2),Lt.fill()}Lt.strokeStyle="rgba(25,25,25,0.15)",Lt.lineWidth=.8;for(let Se=0;Se<5;Se++){Lt.beginPath(),Lt.moveTo(Math.random()*512,Math.random()*512);for(let Ue=0;Ue<4;Ue++)Lt.lineTo(Lt.canvas.width*Math.random(),Lt.canvas.height*Math.random());Lt.stroke()}const un=new Ta(Rn);un.wrapS=Lr,un.wrapT=Lr,un.repeat.set(4,200),un.anisotropy=X.capabilities.getMaxAnisotropy(),un.minFilter=ur,un.magFilter=Si;const Qn=new Rt({map:un,roughness:.85,metalness:.02}),qt=new ze(new Vn(14,4e3),Qn);qt.rotation.x=-Math.PI/2,qt.position.set(0,.01,-1900),qt.receiveShadow=!0,hn.add(qt);const kr=60,Hn=12,cr=[],Ei=new Rt({color:14540236,roughness:.6,metalness:0});for(let Se=0;Se<kr;Se++){const Ue=new ze(new Vn(.2,4),Ei);Ue.rotation.x=-Math.PI/2,Ue.position.set(0,.02,-Se*Hn),hn.add(Ue),cr.push(Ue)}const Bs=new Rt({color:13421755,roughness:.5});for(let Se of[-6.8,6.8]){const Ue=new ze(new Vn(.15,4e3),Bs);Ue.rotation.x=-Math.PI/2,Ue.position.set(Se,.02,-1900),hn.add(Ue)}const fr=document.createElement("canvas");fr.width=256,fr.height=256;const Jn=fr.getContext("2d");Jn.fillStyle="#6a5d4a",Jn.fillRect(0,0,256,256);for(let Se=0;Se<120;Se++){const Ue=70+Math.random()*35,At=6+Math.random()*16;Jn.fillStyle=`rgba(${Ue+15},${Ue+8},${Ue},0.2)`,Jn.beginPath(),Jn.arc(Math.random()*256,Math.random()*256,At,0,Math.PI*2),Jn.fill()}for(let Se=0;Se<60;Se++){const Ue=68+Math.random()*30,At=4+Math.random()*10;Jn.fillStyle=`rgba(${Ue+12},${Ue+6},${Ue},0.12)`,Jn.beginPath(),Jn.arc(Math.random()*256,Math.random()*256,At,0,Math.PI*2),Jn.fill()}const R=new Ta(fr);R.wrapS=Lr,R.wrapT=Lr,R.repeat.set(3,200),R.anisotropy=X.capabilities.getMaxAnisotropy(),R.minFilter=ur,R.magFilter=Si;const $=new Rt({map:R,roughness:.95,metalness:0});for(let Se of[-9.5,9.5]){const Ue=new ze(new Vn(5,4e3),$);Ue.rotation.x=-Math.PI/2,Ue.position.set(Se,.005,-1900),Ue.receiveShadow=!0,hn.add(Ue)}const ue=document.createElement("canvas");ue.width=256,ue.height=256;const oe=ue.getContext("2d");oe.fillStyle="#3d7030",oe.fillRect(0,0,256,256);for(let Se=0;Se<150;Se++){const Ue=50+Math.random()*45,At=8+Math.random()*20;oe.fillStyle=`rgba(${Ue-5},${Ue+25},${Ue-10},0.18)`,oe.beginPath(),oe.arc(Math.random()*256,Math.random()*256,At,0,Math.PI*2),oe.fill()}for(let Se=0;Se<80;Se++){const Ue=48+Math.random()*40,At=5+Math.random()*14;oe.fillStyle=`rgba(${Ue-3},${Ue+20},${Ue-8},0.12)`,oe.beginPath(),oe.arc(Math.random()*256,Math.random()*256,At,0,Math.PI*2),oe.fill()}const Y=new Ta(ue);Y.wrapS=Lr,Y.wrapT=Lr,Y.anisotropy=X.capabilities.getMaxAnisotropy(),Y.minFilter=ur,Y.magFilter=Si,Y.repeat.set(80,80);const Ne=new Rt({map:Y,roughness:.95,metalness:0}),Pe=new ze(new Vn(4e3,4e3),Ne);Pe.rotation.x=-Math.PI/2,Pe.receiveShadow=!0,hn.add(Pe);const Ke=new ze(new Ro(80,48),new An({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv;void main(){
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
      }`,transparent:!0,side:Mi,depthWrite:!1}));Ke.position.set(0,35,-700),Ke.visible=!1,J.add(Ke);const Ye=new ze(new Vn(1200,1200,60,60),new ci({color:16729343,wireframe:!0,transparent:!0,opacity:.35}));Ye.rotation.x=-Math.PI/2,Ye.position.set(0,.05,-500),Ye.visible=!1,J.add(Ye);const ft=new dn,dt=900,Ze=new Float32Array(dt*3),wt=new Float32Array(dt);for(let Se=0;Se<dt;Se++)Ze[Se*3]=(Math.random()-.5)*1600,Ze[Se*3+1]=20+Math.random()*250,Ze[Se*3+2]=-50-Math.random()*900,wt[Se]=.4+Math.random()*1.2;ft.setAttribute("position",new Yn(Ze,3)),ft.setAttribute("size",new Yn(wt,1));const bt=new _d({color:16777215,size:1,transparent:!0,opacity:.9,sizeAttenuation:!0}),yt=new o0(ft,bt);yt.visible=!1,J.add(yt);const pn=[];for(let Se=0;Se<20;Se++){const Ue=new an;for(let At=0;At<3+Math.floor(Math.random()*4);At++){const kt=new ze(new ar(3+Math.random()*5,8,6),new U1({color:16777215,transparent:!0,opacity:.7}));kt.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),kt.scale.y=.4+Math.random()*.3,Ue.add(kt)}Ue.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Ue.userData.drift=2+Math.random()*4,J.add(Ue),pn.push(Ue)}const vt=40,tt=new dn,Dn=new Float32Array(vt*3),Ct=[];for(let Se=0;Se<vt;Se++)Dn[Se*3]=(Math.random()-.5)*60,Dn[Se*3+1]=2+Math.random()*15,Dn[Se*3+2]=-5-Math.random()*50,Ct.push({x:(Math.random()-.5)*1.5,y:-.3-Math.random()*.8,z:Math.random()*.3,ph:Math.random()*Math.PI*2});tt.setAttribute("position",new Yn(Dn,3));const mn=new _d({color:16758725,size:1.2,transparent:!0,opacity:.5,sizeAttenuation:!0}),ei=new o0(tt,mn);J.add(ei);const tn=[];for(let Se=0;Se<3;Se++){const Ue=[];for(let Qt=0;Qt<8;Qt++)Ue.push(Qt*-2,Qt*-.3,0);const At=new dn;At.setAttribute("position",new Yn(new Float32Array(Ue),3));const kt=new Z0(At,new vd({color:16777215,transparent:!0,opacity:0}));kt.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),kt.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},J.add(kt),tn.push(kt)}const hi=[];for(let Se=0;Se<8;Se++){const Ue=new an,At=new ze(new Vn(1.2,.15),new ci({color:2236962,side:Mi}));At.position.x=-.5,At.rotation.z=.3,Ue.add(At);const kt=new ze(new Vn(1.2,.15),new ci({color:2236962,side:Mi}));kt.position.x=.5,kt.rotation.z=-.3,Ue.add(kt),Ue.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Ue.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:At,wR:kt,baseY:Ue.position.y},J.add(Ue),hi.push(Ue)}const zt=new An({transparent:!0,depthWrite:!1,side:Mi,uniforms:{intensity:{value:0},color:{value:new q(1,1,.85)}},vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float intensity; uniform vec3 color; varying vec3 vPos;
        void main(){ float d=length(vPos.xz)*0.03; float a=max(0.0,1.0-d)*0.18*intensity; float fade=1.0-smoothstep(0.0,40.0,abs(vPos.z)); gl_FragColor=vec4(color,a*fade); }`}),bn=new ze(new Vn(8,80),zt.clone());bn.rotation.x=-Math.PI/2,bn.position.set(-1.5,.08,-42),J.add(bn);const ti=new ze(new Vn(8,80),zt.clone());ti.rotation.x=-Math.PI/2,ti.position.set(1.5,.08,-42),J.add(ti);const yn=80,In=new dn,nn=new Float32Array(yn*6);new dn;for(let Se=0;Se<yn;Se++){const Ue=(Math.random()-.5)*30,At=Math.random()*8,kt=-Math.random()*60;nn[Se*6]=Ue,nn[Se*6+1]=At,nn[Se*6+2]=kt,nn[Se*6+3]=Ue,nn[Se*6+4]=At,nn[Se*6+5]=kt+2}In.setAttribute("position",new Yn(nn,3));const fs=new vd({color:16777215,transparent:!0,opacity:0}),Vs=new L1(In,fs);J.add(Vs);const ht=new an;J.add(ht);const pi=new Rt({color:1710618,roughness:.8,metalness:.05}),Go=new Rt({color:1118481,roughness:.9,metalness:.02}),dr=new Rt({color:1579032,roughness:.6,metalness:.1}),Ji=new Rt({color:12303291,roughness:.15,metalness:.9}),Oa=new Rt({color:3359829,roughness:.05,metalness:.1,transparent:!0,opacity:.18}),Wo=new ze(new Bt(5.8,.7,2.2),pi);Wo.position.set(0,1.5,-2.6),ht.add(Wo);const Hs=new ze(new Bt(5.6,.12,1.8),dr);Hs.position.set(0,1.9,-2.5),ht.add(Hs);const hr=new ze(new Tn(.35,.35,5.6,16,1,!0,0,Math.PI),pi);hr.rotation.z=Math.PI/2,hr.rotation.x=Math.PI/2,hr.position.set(0,1.15,-3.1),ht.add(hr);const wi=new ze(new Bt(1,.9,.15),Go);wi.position.set(-.88,2.18,-2.32),wi.rotation.x=-.25,ht.add(wi);const Gn=new an;Gn.position.set(.5,1.85,-2.35),Gn.add(new ze(new Bt(1.5,.85,.12),pi));const ni=document.createElement("canvas");ni.width=256,ni.height=64;const mi=ni.getContext("2d");mi.fillStyle="#020a04",mi.fillRect(0,0,256,64),mi.fillStyle="#0a6",mi.font="bold 16px monospace",mi.textAlign="center",mi.fillText("NO DISC",128,38);const Br=new Ta(ni),Ni=new ze(new Bt(1.3,.55,.01),new ci({map:Br}));Ni.position.set(0,.06,.07),Gn.add(Ni),[-.62,.62].forEach(Se=>{const Ue=new ze(new ar(.07,12,10),Ji);Ue.position.set(Se,-.05,.07),Gn.add(Ue)});for(let Se=0;Se<4;Se++){const Ue=new ze(new Tn(.035,.035,.02,10),Ji);Ue.rotation.x=Math.PI/2,Ue.position.set(-.3+Se*.2,-.32,.07),Gn.add(Ue)}ht.add(Gn);const za=new ze(new Bt(.85,.5,3.2),pi);za.position.set(0,1.25,0),ht.add(za);const Xo=new ze(new Bt(.8,.15,1.1),dr);Xo.position.set(0,1.58,.8),ht.add(Xo);const Un=new an;Un.add(new ze(new Pr(.45,.035,16,36),dr));const ka=new ze(new Bt(.55,.04,.04),Ji);ka.position.y=-.4,Un.add(ka),[-.8,0,.8].forEach(Se=>{const Ue=new ze(new Tn(.015,.025,.38,8),pi);Ue.position.set(Math.sin(Se)*.19,Math.cos(Se)*.19,0),Ue.rotation.z=-Se,Un.add(Ue)}),Un.add(new ze(new Tn(.11,.11,.04,20),pi)),Un.add(new ze(new Pr(.11,.005,8,24),Ji)),[-.5,.5].forEach(Se=>{const Ue=new ze(new Bt(.12,.035,.1),Ji);Ue.position.set(Se,.08,-.06),Un.add(Ue)}),Un.position.set(-.85,2.1,-1.8),Un.rotation.x=-.38,ht.add(Un);const er=new an,Gs=new ze(new Ro(.38,32),new I1({color:657930,shininess:40}));er.add(Gs);const Ba=new ze(new Pr(.38,.02,12,32),Ji);er.add(Ba);const Ws=document.createElement("canvas");Ws.width=256,Ws.height=256;const rn=Ws.getContext("2d");rn.clearRect(0,0,256,256);const tr=128,Fi=128,Oi=105;for(let Se=0;Se<=120;Se+=10){const Ue=Se/120,At=Math.PI*.75+Ue*Math.PI*1.5,kt=Math.cos(At),Qt=Math.sin(At),ki=Se%20===0,Ti=ki?Oi-20:Oi-12;rn.strokeStyle=ki?"#ffffff":"#888888",rn.lineWidth=ki?2.5:1.2,rn.beginPath(),rn.moveTo(tr+Ti*kt,Fi+Ti*Qt),rn.lineTo(tr+Oi*kt,Fi+Oi*Qt),rn.stroke(),ki&&(rn.fillStyle="#ffffff",rn.font="bold 16px monospace",rn.textAlign="center",rn.textBaseline="middle",rn.fillText(String(Se),tr+(Oi-32)*kt,Fi+(Oi-32)*Qt))}rn.fillStyle="#4ade80",rn.font="bold 10px monospace",rn.textAlign="center",rn.fillText("MPH",tr,Fi+40);const Eu=new Ta(Ws),Va=new ze(new Ro(.36,32),new ci({map:Eu,transparent:!0}));Va.position.z=.005,er.add(Va);const pr=new an,ds=new ze(new Bt(.012,.28,.008),new Rt({color:16724787,emissive:4456448,roughness:.3,metalness:.5}));ds.position.y=.12,pr.add(ds),pr.add(new ze(new Ro(.03,12),new Rt({color:13369344,roughness:.2,metalness:.8}))),pr.position.z=.01,er.add(pr),er.position.set(-.88,2.18,-2.25),er.rotation.x=-.25,ht.add(er);const mr=new an,jo=new ze(new Tn(.02,.03,.45,8),pi);jo.position.y=.25,mr.add(jo),mr.add(new ze(new Bt(1.2,.28,.06),pi));const zi=new ze(new Bt(1.15,.24,.01),new Rt({color:1714746,roughness:.05,metalness:.95,transparent:!0,opacity:.75}));zi.position.z=.035,mr.add(zi),mr.position.set(0,4.6,-2),ht.add(mr),[-2.6,2.6].forEach(Se=>{const Ue=new ze(new Tn(.04,.06,3.2,10),pi);Ue.position.set(Se,3.5,-2.2),Ue.rotation.z=Se>0?-.2:.2,ht.add(Ue)});const Xs=new ze(new Bt(5.8,.08,4),Go);Xs.position.set(0,5.2,-.5),ht.add(Xs),[-2.75,2.75].forEach(Se=>{const Ue=Se>0?1:-1,At=new ze(new Bt(.08,2.2,2.8),pi);At.position.set(Se,2.3,-.8),ht.add(At);const kt=new ze(new Bt(.06,.5,2.4),dr);kt.position.set(Se>0?Se-.04:Se+.04,3,-.8),ht.add(kt);const Qt=new ze(new Bt(.18,.1,1.2),dr);Qt.position.set(Se>0?Se-.08:Se+.08,2.4,-.6),ht.add(Qt);const ki=new ze(new Bt(.03,.035,.35),Ji);ki.position.set(Se>0?Se-.05:Se+.05,2.55,-.5),ht.add(ki);const Ti=new ze(new Vn(2,1.5),Oa);Ti.position.set(Se>0?Se-.01:Se+.01,3.8,-.8),Ti.rotation.y=Math.PI/2*Ue,ht.add(Ti);const ms=new ze(new Bt(.01,.015,2.4),new ci({color:2245802,transparent:!0,opacity:.5}));ms.position.set(Se>0?Se-.03:Se+.03,1.9,-.8),ht.add(ms)});const nr=new c0(16777164,0,80,.4,.5);nr.position.set(-1.5,2,-3),nr.target.position.set(-2,0,-80),J.add(nr),J.add(nr.target);const Vr=new c0(16777164,0,80,.4,.5);Vr.position.set(1.5,2,-3),Vr.target.position.set(2,0,-80),J.add(Vr),J.add(Vr.target);const hs=[];for(let Se=0;Se<15;Se++){const Ue=at();Ue.position.set((Math.random()-.5)*10,1.2,-40-Se*35),Ue.rotation.x=Math.PI/2,Ue.userData.bobPhase=Math.random()*Math.PI*2,J.add(Ue),hs.push(Ue)}const ps=[];for(let Se=0;Se<10;Se++){const Ue=Nt();Ue.position.set((Math.random()-.5)*10,0,-60-Se*50),J.add(Ue),ps.push(Ue)}const qo=rt();J.add(qo);const Wn=[];return P.current={renderer:X,composer:se,scene:J,camera:de,sceneryPool:Wn,spawnRange:1e3,amb:et,dir:je,hemiL:Zn,skyC:De,fogC:ne,ambC:me,dirC:ke,wGrp:Un,hlL:nr,hlR:Vr,interior:ht,sCanvas:ni,sCtx:mi,sTex:Br,gndMat:Ne,roadMat:Qn,retroSun:Ke,retroGrid:Ye,fillL:It,dashL:Gt,records:hs,labels:ps,explosion:qo,roadGroup:hn,dashes:cr,DS:Hn,stars:yt,starMat:bt,clouds:pn,ptcls:ei,pGeo:tt,pVel:Ct,pMat:mn,shooters:tn,birds:hi,speedoNeedle:pr,skyMat:ot,bloomPass:we,chromaPass:He,colorPass:st,speedLinesPass:B,vignettePass:be,hlConeL:bn,hlConeR:ti,speedLines:Vs,slGeo:In,slMat:fs},X},[]);Ft.useEffect(()=>{const A=I=>{V.current[I.code]=!0},O=I=>{V.current[I.code]=!1};return window.addEventListener("keydown",A),window.addEventListener("keyup",O),()=>{window.removeEventListener("keydown",A),window.removeEventListener("keyup",O)}},[]),Ft.useEffect(()=>{if(!s.current)return;const A=s.current,O=Te(A),I=P.current;_t(I.scene,v,I.sceneryPool,I.spawnRange);const X=()=>{const se=A.clientWidth,we=A.clientHeight;I.camera.aspect=se/we,I.camera.updateProjectionMatrix(),O.setSize(se,we),I.composer.setSize(se,we)};window.addEventListener("resize",X);let J=0;const de=()=>{G.current=requestAnimationFrame(de);const se=Math.min(C.current.getDelta(),.05),we=V.current,be=le.current,He=Date.now();if(!ve.current){I.explosion&&I.explosion.visible&&I.explosion.children.forEach(te=>{te.position.y+=(te.userData.speed||2)*se,te.scale.multiplyScalar(1+se*.5),te.material.opacity>.01&&(te.material.opacity-=se*.4)}),I.composer.render();return}we.ShiftLeft||we.ShiftRight?be.speed=Math.min(be.speed+40*se,120):we.Space?be.speed=Math.max(be.speed-80*se,0):be.speed=Math.max(be.speed-10*se,0);const st=we.KeyA||we.ArrowLeft?-.6:we.KeyD||we.ArrowRight?.6:0;be.steering+=(st-be.steering)*5*se;const De=be.steering*(be.speed/60)*15*se;be.posX=Math.max(-20,Math.min(20,be.posX+De)),be.angle+=(be.steering*.08-be.angle)*4*se,E(Math.round(be.speed));const ne=be.speed;I.roadGroup.position.x=-be.posX,J+=ne*se,J>=I.DS&&(J-=I.DS),I.dashes.forEach((te,et)=>{te.position.z=-(et*I.DS)+J}),I.sceneryPool.forEach(te=>{if(te.position.z+=ne*se,te.position.x-=De,te.position.z>60){te.position.z-=I.spawnRange;const et=Math.random()>.5?1:-1,je=te.userData.isMountain;te.position.x=et*((je?(te.userData.radius||50)+20:14)+Math.random()*(je?120:80))-be.posX}}),I.records.forEach(te=>{te.visible&&(te.position.z+=ne*se,te.position.x-=De,te.rotation.z+=se*3,te.position.y=1.2+Math.sin(He*.003+te.userData.bobPhase)*.3,te.position.z>30&&(te.position.z=-300-Math.random()*200,te.position.x=(Math.random()-.5)*10-be.posX,te.visible=!0),Math.abs(te.position.x)<1.8&&Math.abs(te.position.z)<2.5&&(te.visible=!1,ee.current+=100,y(ee.current),_e(),z("record"),setTimeout(()=>z(null),300),setTimeout(()=>{te.visible=!0,te.position.z=-300-Math.random()*200,te.position.x=(Math.random()-.5)*10-be.posX},2e3)))}),I.labels.forEach(te=>{te.visible&&(te.position.z+=ne*se,te.position.x-=De,te.rotation.y+=se*1.5,te.userData.light&&(te.userData.light.material.opacity=Math.sin(He*.01)>0?1:.2),te.position.z>30&&(te.position.z=-350-Math.random()*250,te.position.x=(Math.random()-.5)*10-be.posX,te.visible=!0),Math.abs(te.position.x)<1.5&&Math.abs(te.position.z)<2&&(ve.current=!1,b(!1),z("boom"),ee.current>xe.current&&(xe.current=ee.current,D(ee.current)),I.explosion&&(I.explosion.position.copy(te.position),I.explosion.visible=!0,I.explosion.children.forEach(et=>{et.material.opacity=.8,et.scale.set(1,1,1)})),te.visible=!1,be.speed=0,pe.current=.12,ge()))}),I.retroGrid&&I.retroGrid.visible&&(I.retroGrid.position.x=-be.posX),I.clouds.forEach(te=>{te.position.x+=te.userData.drift*se,te.position.x>350&&(te.position.x=-350)});const me=I.pGeo.attributes.position.array;for(let te=0;te<I.pVel.length;te++){const et=I.pVel[te];me[te*3]+=(et.x+Math.sin(He*.001+et.ph)*.5)*se,me[te*3+1]+=et.y*se,me[te*3+2]+=ne*se*.3+et.z*se,(me[te*3+1]<0||me[te*3+2]>20)&&(me[te*3]=(Math.random()-.5)*80-be.posX,me[te*3+1]=5+Math.random()*20,me[te*3+2]=-20-Math.random()*80)}I.pGeo.attributes.position.needsUpdate=!0,I.shooters.forEach(te=>{te.userData.timer+=se*60,!te.userData.on&&te.userData.timer>te.userData.interval&&(te.userData.on=!0,te.userData.timer=0,te.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),te.material.opacity=1),te.userData.on&&(te.position.x+=te.userData.spd*se,te.position.y-=te.userData.spd*.3*se,te.material.opacity-=se*.8,te.material.opacity<=0&&(te.userData.on=!1,te.userData.interval=300+Math.random()*600,te.material.opacity=0))}),I.birds.forEach(te=>{te.position.x+=te.userData.fs*se,te.position.y=te.userData.baseY+Math.sin(He*.002+te.userData.wp)*2,te.position.z+=ne*se*.1;const et=Math.sin(He*.008+te.userData.wp);if(te.userData.wL&&(te.userData.wL.rotation.z=.3+et*.4),te.userData.wR&&(te.userData.wR.rotation.z=-.3-et*.4),te.position.x>250||te.position.z>50){const je=25+Math.random()*40;te.userData.baseY=je,te.position.set(-200-Math.random()*100,je,-50-Math.random()*300)}}),I.wGrp&&(I.wGrp.rotation.z=be.steering*1.2+Math.sin(He*.001)*.008);const ke=be.speed/120;if(I.camera.position.y=3.5+Math.sin(He*.004)*.02*ke,I.camera.position.x=0,I.camera.rotation.y=be.angle*.5,pe.current>.001?pe.current*=Math.exp(-8*se):pe.current=0,I.camera.rotation.z=be.angle*-.15+Math.sin(He*.002)*.003*ke+Math.sin(He*.03)*pe.current,I.interior&&(I.interior.rotation.y=be.angle*.5),I.speedoNeedle){const te=Math.min(be.speed/120,1),et=Math.PI*.75-te*(Math.PI*1.5);I.speedoNeedle.rotation.z+=(et-I.speedoNeedle.rotation.z)*(1-Math.exp(-6*se))}if(F.current){const te=F.current,et=Math.min(be.speed/120,1),je=1-Math.exp(-5*se);te.noiseGain.gain.value+=(et*.05-te.noiseGain.gain.value)*je;const It=35+et*80;te.engOsc1.frequency.value+=(It-te.engOsc1.frequency.value)*je,te.engOsc2.frequency.value+=(It*2-te.engOsc2.frequency.value)*je,te.engGain.gain.value+=(.012+et*.035-te.engGain.gain.value)*je,te.engLPF.frequency.value+=(80+et*200-te.engLPF.frequency.value)*je;const Gt=Math.max(0,(et-.25)/.75)*.04;te.windGain.gain.value+=(Gt-te.windGain.gain.value)*je}const Oe=Math.min(be.speed/120,1);if(I.speedLinesPass&&(I.speedLinesPass.uniforms.intensity.value=Math.max(0,(Oe-.6)*2.5)*.5,I.speedLinesPass.uniforms.time.value=He*.001),I.slMat&&(I.slMat.opacity=Math.max(0,(Oe-.75)*4)*.15),I.slGeo&&Oe>.4){const te=I.slGeo.attributes.position.array;for(let et=0;et<te.length/6;et++)if(te[et*6+2]+=ne*se*1.5,te[et*6+5]+=ne*se*1.5,te[et*6+2]>10){const je=(Math.random()-.5)*30,It=Math.random()*8,Gt=-30-Math.random()*40;te[et*6]=je,te[et*6+1]=It,te[et*6+2]=Gt,te[et*6+3]=je,te[et*6+4]=It,te[et*6+5]=Gt+1+Oe*3}I.slGeo.attributes.position.needsUpdate=!0}if(I.chromaPass&&(I.chromaPass.uniforms.amount.value=3e-4+Oe*.001),I.bloomPass){const te=I.bloomPass._themeStrength||.15;I.bloomPass.strength=te+Oe*.15}const ot=I.hlL.intensity>0?I.hlL.intensity>2.5?1.5:1:0;I.hlConeL&&(I.hlConeL.material.uniforms.intensity.value=ot,I.hlConeL.material.uniforms.color.value.set(I.hlL.color.r,I.hlL.color.g,I.hlL.color.b)),I.hlConeR&&(I.hlConeR.material.uniforms.intensity.value=ot,I.hlConeR.material.uniforms.color.value.set(I.hlR.color.r,I.hlR.color.g,I.hlR.color.b)),I.composer.render()};return de(),()=>{window.removeEventListener("resize",X),cancelAnimationFrame(G.current),A.contains(O.domElement)&&A.removeChild(O.domElement),O.dispose()}},[Te,_t]),Ft.useEffect(()=>{const A=P.current;A.scene&&(_t(A.scene,v,A.sceneryPool,A.spawnRange),A.gndMat&&A.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[v]||4880954))},[v,_t]),Ft.useEffect(()=>{const A=P.current;if(!A.scene)return;const O=m==="night",I=m==="retro";A.scene.fog.color.set(A.fogC[m]),A.amb.color.set(A.ambC[m]),A.dir.color.set(A.dirC[m]),A.dir.intensity={day:1,sunset:.6,night:.3,retro:.5}[m],A.amb.intensity={day:.7,sunset:.5,night:.35,retro:.4}[m];const X=m!=="day";A.hlL.intensity=X?O?3:I?2.5:2:0,A.hlR.intensity=X?O?3:I?2.5:2:0;const J=I?16729343:O?14544639:16777164;if(A.hlL.color.set(J),A.hlR.color.set(J),A.skyMat){const se={day:{top:2254506,mid:8900331,bottom:13166325,sun:16777200,sunDir:[.3,.5,-.8],sunSize:.04},sunset:{top:1708096,mid:16739125,bottom:16746581,sun:16768324,sunDir:[0,.08,-1],sunSize:.08},night:{top:199194,mid:529448,bottom:793136,sun:13426175,sunDir:[.4,.35,-.7],sunSize:.025},retro:{top:524314,mid:2097216,bottom:4456533,sun:16724940,sunDir:[0,.15,-1],sunSize:.08}}[m];A.skyMat.uniforms.topColor.value.set(se.top),A.skyMat.uniforms.midColor.value.set(se.mid),A.skyMat.uniforms.bottomColor.value.set(se.bottom),A.skyMat.uniforms.sunColor.value.set(se.sun),A.skyMat.uniforms.sunDir.value.set(...se.sunDir).normalize(),A.skyMat.uniforms.sunSize.value=se.sunSize}if(A.colorPass){const de={day:{warmth:.02,contrast:1.04},sunset:{warmth:.06,contrast:1.06},night:{warmth:-.04,contrast:1.12},retro:{warmth:.03,contrast:1.2}};A.colorPass.uniforms.warmth.value=de[m].warmth,A.colorPass.uniforms.contrast.value=de[m].contrast}if(A.bloomPass){A.bloomPass.threshold={day:.92,sunset:.85,night:.72,retro:.55}[m];const de={day:.15,sunset:.2,night:.3,retro:.6}[m];A.bloomPass.strength=de,A.bloomPass._themeStrength=de,A.bloomPass.radius={day:.4,sunset:.4,night:.5,retro:.7}[m]}if(A.hemiL){const se={day:[8961023,4478242,.3],sunset:[16746564,3351057,.25],night:[1714773,657941,.18],retro:[8913100,1703987,.25]}[m];A.hemiL.color.set(se[0]),A.hemiL.groundColor.set(se[1]),A.hemiL.intensity=se[2]}A.vignettePass&&(A.vignettePass.uniforms.darkness.value={day:.4,sunset:.5,night:.65,retro:.55}[m]),A.renderer&&(A.renderer.toneMappingExposure={day:1.1,sunset:1,night:.9,retro:1}[m]),A.gndMat&&(I?A.gndMat.color.set(655392):O?A.gndMat.color.set({forest:1714712,sakura:1714714,city:1710618}[v]||1714712):A.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[v]||4880954)),A.roadMat&&A.roadMat.color.set(I?1114146:O?2236979:3355443),A.retroSun&&(A.retroSun.visible=I),A.retroGrid&&(A.retroGrid.visible=I,I&&(A.retroGrid.material.opacity=.35)),A.fillL&&(A.fillL.intensity={day:.4,sunset:.3,night:.6,retro:.8}[m],A.fillL.color.set(I?8913100:O?3364266:4482730)),A.dashL&&(A.dashL.intensity={day:.2,sunset:.15,night:.4,retro:.5}[m],A.dashL.color.set(I?16729343:O?6719692:16777215)),A.stars&&(A.stars.visible=O||I,A.starMat.color.set(I?16746751:14544639),A.starMat.opacity=I?.7:.9,A.starMat.size=I?.8:1),A.clouds&&A.clouds.forEach(de=>{de.visible=m==="day"||m==="sunset",de.children.forEach(se=>{m==="sunset"?(se.material.color.set(16755319),se.material.opacity=.6):(se.material.color.set(16777215),se.material.opacity=.7)})}),A.shooters&&A.shooters.forEach(de=>{de.visible=O}),A.birds&&A.birds.forEach(de=>{de.visible=m==="day"||m==="sunset"}),A.pMat&&(v==="sakura"?(A.pMat.color.set(O?16755404:I?16738013:16758725),A.pMat.size=I?.6:.5,A.pMat.opacity=O?.5:.8):v==="city"?(A.pMat.color.set(I?16729343:O?8956620:11184810),A.pMat.size=.2,A.pMat.opacity=.4):(A.pMat.color.set(O?6737066:I?16729343:10079351),A.pMat.size=O?.35:.25,A.pMat.opacity=O?.5:.3)),A.labels&&A.labels.forEach(de=>{const se=de.userData;se.bodyMat&&(se.bodyMat.emissive.set(I?16711935:O?2245802:16720384),se.bodyMat.emissiveIntensity=O?.25:I?.35:.15),se.stripeMat&&(se.stripeMat.emissive.set(I?16711935:16711680),se.stripeMat.emissiveIntensity=O?.8:I?1:.6),se.plateMat&&(se.plateMat.emissive.set(I?16729343:16755200),se.plateMat.emissiveIntensity=O?.5:I?.6:.3),se.ring&&(se.ring.material.color.set(I?16711935:O?4491519:16729088),se.ring.material.opacity=O?.8:I?.9:.6)})},[m,v]),Ft.useEffect(()=>{var we;const A=P.current;if(!A.sCtx)return;const O=A.sCtx,I=A.sCanvas.width,X=A.sCanvas.height;let J;const de=((we=r[l])==null?void 0:we.name)||"",se=()=>{if(O.fillStyle="#020a04",O.fillRect(0,0,I,X),!de)O.fillStyle="#0a6",O.font="bold 16px monospace",O.textAlign="center",O.fillText("NO DISC",I/2,X/2+5);else{const be=d,He=be?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";O.fillStyle=He,O.font="bold 14px monospace";const st=de.toUpperCase(),B=O.measureText(st).width;if(B>I-20&&be?(O.textAlign="left",O.fillText(st,I-Date.now()*.03%(B+80),22)):(O.textAlign="center",O.fillText(st.length>18?st.slice(0,18)+"…":st,I/2,22)),O.fillStyle="#073",O.font="9px monospace",O.textAlign="left",O.fillText(`${l+1}/${r.length}`,6,46),O.fillStyle=be?"#0f4":"#073",O.font="11px monospace",O.textAlign="center",O.fillText(be?"▶ PLAYING":"❚❚ PAUSED",I/2,46),be){const De=Date.now()*.004;for(let ne=0;ne<8;ne++){O.fillStyle=He;const me=4+(Math.sin(De*(1.2+ne*.4)+ne*1.8)*.5+.5)*12+Math.sin(De*(.7+ne*.3)+ne*2.5)*2;O.fillRect(I-18-ne*6,X-4-me,4,me)}}}A.sTex&&(A.sTex.needsUpdate=!0),J=requestAnimationFrame(se)};return se(),()=>cancelAnimationFrame(J)},[r,l,d]);const Me=((Je=r[l])==null?void 0:Je.name)||"";return qe.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[qe.jsx("style",{children:`
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
      `}),qe.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),e&&qe.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 40%, rgba(10,20,30,0.85) 0%, rgba(0,0,0,0.95) 100%)",backdropFilter:"blur(6px)",zIndex:10},children:[qe.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg, #4ade80, #60a5fa, #a78bfa, #f472b6, #4ade80)",backgroundSize:"200% 100%",animation:"gradientShift 4s ease infinite"}}),qe.jsxs("div",{style:{animation:"fadeSlideUp 0.8s ease both",textAlign:"center",marginBottom:8},children:[qe.jsx("div",{style:{fontSize:14,letterSpacing:6,color:"rgba(255,255,255,0.3)",fontWeight:500,marginBottom:8},children:"WELCOME TO"}),qe.jsx("div",{style:{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,letterSpacing:3,color:"#fff",animation:"lobbyGlow 3s ease-in-out infinite",lineHeight:1.1},children:"AERA CAR TESTER"}),qe.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.35)",marginTop:8,letterSpacing:2},children:"SPATIAL AUDIO DRIVING EXPERIENCE"})]}),qe.jsx("div",{style:{display:"flex",gap:16,marginTop:28,flexWrap:"wrap",justifyContent:"center",maxWidth:600,padding:"0 16px"},children:[{icon:"💿",text:"Collect records, avoid Labels",color:"#ffdd00",delay:"0.3s"},{icon:"📝",text:"Avoid getting Signed",color:"#ff6b6b",delay:"0.5s"},{icon:"🔊",text:"Test your track with spatial audio",color:"#4ade80",delay:"0.7s"}].map(({icon:A,text:O,color:I,delay:X})=>qe.jsxs("div",{style:{animation:`fadeSlideUp 0.7s ease ${X} both`,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10,minWidth:170},children:[qe.jsx("span",{style:{fontSize:22},children:A}),qe.jsx("span",{style:{fontSize:13,color:I,fontWeight:600},children:O})]},O))}),qe.jsxs("div",{style:{animation:"fadeSlideUp 0.7s ease 0.9s both",marginTop:36,textAlign:"center"},children:[qe.jsx("div",{style:{fontSize:11,letterSpacing:3,color:"rgba(255,255,255,0.3)",marginBottom:12},children:"LOAD YOUR TRACKS (UP TO 3)"}),qe.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[0,1,2].map(A=>{const O=r[A];return qe.jsx("div",{style:{width:160,height:80,borderRadius:14,border:O?"1px solid rgba(74,222,128,0.3)":"2px dashed rgba(255,255,255,0.12)",background:O?"rgba(74,222,128,0.06)":"rgba(255,255,255,0.02)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",transition:"all 0.3s"},children:O?qe.jsxs(qe.Fragment,{children:[qe.jsx("div",{style:{fontSize:11,color:"#4ade80",fontWeight:700,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"},children:O.name}),qe.jsxs("div",{style:{fontSize:9,color:"rgba(255,255,255,0.3)",marginTop:4},children:["Track ",A+1]}),qe.jsx("button",{onClick:()=>We(A),style:{position:"absolute",top:4,right:6,background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:14,cursor:"pointer",padding:0,lineHeight:1},children:"x"})]}):qe.jsxs("label",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,width:"100%",height:"100%",justifyContent:"center"},children:[qe.jsx("div",{style:{fontSize:22,opacity:.3},children:"+"}),qe.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.25)"},children:"Add Track"}),qe.jsx("input",{type:"file",accept:"audio/*",onChange:I=>{I.target.files[0]&&fe(I.target.files[0]),I.target.value=""},style:{display:"none"}})]})},A)})})]}),qe.jsx("button",{onClick:Be,style:{animation:"fadeSlideUp 0.7s ease 1.1s both, lobbyPulse 2.5s ease-in-out 2s infinite",marginTop:36,background:"linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",border:"1px solid rgba(74,222,128,0.3)",borderRadius:16,padding:"16px 56px",color:"#4ade80",fontSize:20,fontWeight:800,cursor:"pointer",letterSpacing:4},onMouseEnter:A=>{A.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.3), rgba(96,165,250,0.3))",A.target.style.borderColor="rgba(74,222,128,0.6)"},onMouseLeave:A=>{A.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",A.target.style.borderColor="rgba(74,222,128,0.3)"},children:"START"}),qe.jsx("div",{style:{animation:"fadeSlideUp 0.7s ease 1.3s both",fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:12},children:"Tracks are optional — you can drive without music"})]}),!e&&qe.jsxs(qe.Fragment,{children:[qe.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:K==="record"?"radial-gradient(circle at 50% 50%, rgba(255,215,0,0.35), rgba(255,215,0,0) 70%)":K==="boom"?"radial-gradient(circle at 50% 60%, rgba(255,0,0,0.5), rgba(255,0,0,0) 70%)":"transparent",opacity:K?1:0,transition:"opacity 0.3s ease-out"}}),qe.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:12,alignItems:"center",animation:"hudSlideIn 0.5s ease both"},children:[qe.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 22px",color:"#fff",border:"1px solid rgba(255,255,255,0.08)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[qe.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"SCORE"}),qe.jsx("div",{style:{fontSize:30,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ffdd00",textShadow:"0 0 20px rgba(255,221,0,0.3)",letterSpacing:1,lineHeight:1.1},children:T})]}),g>0&&qe.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 16px",color:"#fff",border:"1px solid rgba(255,215,0,0.12)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[qe.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"BEST"}),qe.jsx("div",{style:{fontSize:24,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ff8800",textShadow:"0 0 15px rgba(255,136,0,0.3)",lineHeight:1.1},children:g})]})]}),!L&&qe.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 45%, rgba(40,0,0,0.7), rgba(0,0,0,0.8))",backdropFilter:"blur(6px)",animation:"fadeSlideUp 0.4s ease both"},children:[qe.jsx("div",{style:{fontSize:"clamp(48px, 8vw, 72px)",fontWeight:900,color:"#ff3333",textShadow:"0 0 40px rgba(255,0,0,0.6), 0 0 80px rgba(255,0,0,0.2)",letterSpacing:6},children:"SIGNED"}),qe.jsx("div",{style:{fontSize:15,color:"rgba(255,255,255,0.5)",marginTop:8,fontWeight:500,letterSpacing:1},children:"The label got you..."}),qe.jsxs("div",{style:{fontSize:22,color:"#fff",marginTop:16,fontWeight:600},children:["Score: ",qe.jsx("span",{style:{color:"#ffdd00",fontWeight:800,textShadow:"0 0 15px rgba(255,221,0,0.4)"},children:T})]}),T>=g&&T>0&&qe.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:8,fontWeight:700,textShadow:"0 0 20px rgba(255,136,0,0.4)",animation:"glowPulse 1.5s ease infinite"},children:"NEW HIGH SCORE!"}),qe.jsx("button",{onClick:Xe,style:{marginTop:28,background:"rgba(255,255,255,0.08)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:14,padding:"14px 40px",color:"#fff",fontSize:17,fontWeight:700,cursor:"pointer",letterSpacing:3,transition:"all 0.25s ease",boxShadow:"0 4px 20px rgba(0,0,0,0.3)"},onMouseEnter:A=>{A.target.style.background="rgba(255,255,255,0.18)",A.target.style.transform="scale(1.05)",A.target.style.boxShadow="0 6px 30px rgba(0,0,0,0.4)"},onMouseLeave:A=>{A.target.style.background="rgba(255,255,255,0.08)",A.target.style.transform="scale(1)",A.target.style.boxShadow="0 4px 20px rgba(0,0,0,0.3)"},children:"RESTART"})]}),r.length>0&&qe.jsxs("div",{style:{position:"absolute",bottom:16,left:16,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:14,padding:"10px 16px",color:"#fff",display:"flex",alignItems:"center",gap:10,maxWidth:300,border:"1px solid rgba(255,255,255,0.08)",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",animation:"hudSlideIn 0.5s ease 0.2s both"},children:[r.length>1&&qe.jsx("button",{onClick:Re,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"2px 4px",opacity:.5,transition:"opacity 0.2s"},onMouseEnter:A=>A.target.style.opacity=1,onMouseLeave:A=>A.target.style.opacity=.5,children:"⏮"}),qe.jsx("button",{onClick:ye,style:{background:"rgba(255,255,255,0.08)",border:"none",color:"#fff",fontSize:16,cursor:"pointer",padding:"4px 8px",borderRadius:8,transition:"background 0.2s"},onMouseEnter:A=>A.target.style.background="rgba(255,255,255,0.18)",onMouseLeave:A=>A.target.style.background="rgba(255,255,255,0.08)",children:d?"⏸":"▶"}),r.length>1&&qe.jsx("button",{onClick:Ie,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"2px 4px",opacity:.5,transition:"opacity 0.2s"},onMouseEnter:A=>A.target.style.opacity=1,onMouseLeave:A=>A.target.style.opacity=.5,children:"⏭"}),qe.jsxs("div",{style:{flex:1,minWidth:0,marginLeft:4},children:[qe.jsx("div",{style:{fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:700,letterSpacing:.3},children:Me}),qe.jsxs("div",{style:{fontSize:9,opacity:.3,fontWeight:500},children:["Track ",l+1," of ",r.length]})]})]}),qe.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end",animation:"hudSlideIn 0.5s ease 0.1s both"},children:[qe.jsxs("div",{style:{background:"rgba(0,0,0,0.6)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"12px 20px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.08)",minWidth:95,boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[qe.jsx("div",{style:{fontSize:36,fontWeight:800,fontFamily:"'Inter', monospace",color:M>80?"#ff6b6b":"#4ade80",textShadow:M>80?"0 0 20px rgba(255,107,107,0.4)":"0 0 15px rgba(74,222,128,0.3)",transition:"color 0.3s ease, text-shadow 0.3s ease",letterSpacing:-1,lineHeight:1},children:M}),qe.jsx("div",{style:{fontSize:9,opacity:.35,letterSpacing:3,fontWeight:600,marginTop:2},children:"MPH"})]}),qe.jsx("div",{style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:12,padding:"5px 6px",color:"#fff",display:"flex",gap:2,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:A,i:O})=>qe.jsx("button",{onClick:()=>_(A),style:{background:m===A?"rgba(255,255,255,0.15)":"transparent",border:"none",borderRadius:8,padding:"5px 10px",color:"#fff",fontSize:15,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:I=>{m!==A&&(I.target.style.background="rgba(255,255,255,0.08)")},onMouseLeave:I=>{m!==A&&(I.target.style.background="transparent")},children:O},A))}),qe.jsx("div",{style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:12,padding:"5px 6px",color:"#fff",display:"flex",gap:2,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:A,i:O,l:I})=>qe.jsxs("button",{onClick:()=>x(A),style:{background:v===A?"rgba(255,255,255,0.15)":"transparent",border:"none",borderRadius:8,padding:"5px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontWeight:600,transition:"all 0.2s ease"},onMouseEnter:X=>{v!==A&&(X.target.style.background="rgba(255,255,255,0.08)")},onMouseLeave:X=>{v!==A&&(X.target.style.background="transparent")},children:[qe.jsx("span",{style:{fontSize:15},children:O}),I]},A))})]}),qe.jsx("div",{style:{position:"absolute",bottom:16,right:16,background:"rgba(0,0,0,0.45)",backdropFilter:"blur(16px) saturate(1.3)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)",animation:"hudSlideIn 0.5s ease 0.3s both"},children:qe.jsxs("div",{style:{fontSize:11,opacity:.5,lineHeight:1.6,fontWeight:500,letterSpacing:.3},children:[qe.jsx("span",{style:{color:"#4ade80",fontWeight:700},children:"SHIFT"})," go · ",qe.jsx("span",{style:{color:"#fbbf24",fontWeight:700},children:"SPACE"})," brake · ",qe.jsx("span",{style:{color:"#60a5fa",fontWeight:700},children:"A/D"})," steer"]})})]})]})}function Z1(){return qe.jsx(K1,{})}Fv.createRoot(document.getElementById("root")).render(qe.jsx(bv.StrictMode,{children:qe.jsx(Z1,{})}));
