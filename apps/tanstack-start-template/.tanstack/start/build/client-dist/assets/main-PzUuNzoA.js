const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sandbox-9i_kViuc.js","assets/utils-DEz_iieQ.js","assets/button-CX__d95m.js","assets/input-lfDgITMj.js","assets/index-CP2W7lFh.js","assets/index-D7IHsiKy.js","assets/index-Bcp2qJ53.js","assets/createLucideIcon-CNDy2lND.js","assets/_navbar-DzcfMZ3B.js","assets/index-B62k-rH5.js","assets/index-lzJ_ZsAT.js","assets/signup-RL0W0qxu.js","assets/index-CE-W_Ix2.js","assets/password-reset-kO5d7GMI.js","assets/password-forgot-DptWxm09.js","assets/login-DFHXHo9l.js","assets/new-C3VPhW3C.js","assets/_sidebar-CUQSjSFU.js","assets/index-Bu9Zfe2s.js","assets/_recipeId-D89y1CYw.js"])))=>i.map(i=>d[i]);
function JS(e,n){for(var r=0;r<n.length;r++){const i=n[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const c=Object.getOwnPropertyDescriptor(i,s);c&&Object.defineProperty(e,s,c.get?c:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function Pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lh={exports:{}},Ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function e2(){if(v0)return Ls;v0=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(i,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var f in s)f!=="key"&&(c[f]=s[f])}else c=s;return s=c.ref,{$$typeof:e,type:i,key:u,ref:s!==void 0?s:null,props:c}}return Ls.Fragment=n,Ls.jsx=r,Ls.jsxs=r,Ls}var y0;function t2(){return y0||(y0=1,lh.exports=e2()),lh.exports}var se=t2();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai, Million Software, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n2="0.3.9",$p=`bippy-${n2}`,b0=Object.defineProperty,r2=Object.prototype.hasOwnProperty,ch=()=>{},Dw=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},Lw=(e=pi())=>"getFiberRoots"in e,jw=!1,w0=void 0,Jh=(e=pi())=>jw?!0:(typeof e.inject=="function"&&(w0=e.inject.toString()),!!w0?.includes("(injected)")),tu=new Set,a2=e=>{const n=new Map;let r=0,i={checkDCE:Dw,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:n,onCommitFiberRoot:ch,onCommitFiberUnmount:ch,onPostCommitFiberRoot:ch,inject(s){const c=++r;return n.set(c,s),i._instrumentationIsActive||(i._instrumentationIsActive=!0,tu.forEach(u=>u())),c},_instrumentationSource:$p,_instrumentationIsActive:!1};try{b0(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return i},set(u){if(u&&typeof u=="object"){const f=i.renderers;i=u,f.size>0&&(f.forEach((h,p)=>{u.renderers.set(p,h)}),ep(e))}},configurable:!0,enumerable:!0});const s=window.hasOwnProperty;let c=!1;b0(window,"hasOwnProperty",{value:function(){try{if(!c&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,c=!0,-0}catch{}return s.apply(this,arguments)},configurable:!0,writable:!0})}catch{ep(e)}return i},ep=e=>{e&&tu.add(e);try{const n=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!n)return;if(!n._instrumentationSource){if(n.checkDCE=Dw,n.supportsFiber=!0,n.supportsFlight=!0,n.hasUnsupportedRendererAttached=!1,n._instrumentationSource=$p,n._instrumentationIsActive=!1,n.renderers.size){n._instrumentationIsActive=!0,tu.forEach(i=>i());return}const r=n.inject;Jh(n)&&!Lw()&&(jw=!0,n.inject({scheduleRefresh(){}})&&(n._instrumentationIsActive=!0)),n.inject=i=>{const s=r(i);return n._instrumentationIsActive=!0,tu.forEach(c=>c()),s}}(n.renderers.size||n._instrumentationIsActive||Jh())&&e?.()}catch{}},i2=()=>r2.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),pi=e=>i2()?(ep(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):a2(e),o2=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),s2=()=>{try{o2()&&pi()}catch{}},Uu=0,bi=1,Uw=3,l2=5,c2=6,u2=7,d2=9,Hu=11,Bu=13,ml=14,gl=15,f2=18,h2=22,p2=23,m2=26,g2=27,v2=60111,y2="Symbol(react.concurrent_mode)",b2="Symbol(react.async_mode)",x0=1,w2=2,x2=4096,_2=4,_0=8,S2=16,k2=32,T2=1024,E2=8192,S0=w2|_2|S2|k2|x2|E2|T2,el=e=>{switch(e.tag){case l2:case m2:case g2:return!0;default:return typeof e.type=="string"}},Fu=e=>{switch(e.tag){case Uu:case bi:case gl:case ml:case Hu:return!0;default:return!1}},C2=(e,n)=>{try{const r=e.dependencies,i=e.alternate?.dependencies;if(!r||!i||typeof r!="object"||!("firstContext"in r)||typeof i!="object"||!("firstContext"in i))return!1;let s=r.firstContext,c=i.firstContext;for(;s&&typeof s=="object"&&"memoizedValue"in s||c&&typeof c=="object"&&"memoizedValue"in c;){if(n(s,c)===!0)return!0;s=s?.next,c=c?.next}}catch{}return!1},Ip=e=>{const n=e.memoizedProps,r=e.alternate?.memoizedProps||{},i=e.flags??e.effectTag??0;switch(e.tag){case bi:case Uu:case d2:case Hu:case ml:case gl:return(i&x0)===x0;default:return e.alternate?r!==n||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},Vp=e=>(e.flags&(S0|_0))!==0||(e.subtreeFlags&(S0|_0))!==0,R2=e=>{const n=[],r=[e];for(;r.length;){const i=r.pop();i&&(el(i)&&Vp(i)&&Ip(i)&&n.push(i),i.child&&r.push(i.child),i.sibling&&r.push(i.sibling))}return n},qp=e=>{switch(e.tag){case f2:return!0;case c2:case u2:case p2:case h2:return!0;case Uw:return!1;default:{const n=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof n=="symbol"?n.toString():n){case v2:case y2:case b2:return!0;default:return!1}}}},N2=e=>{const n=[],r=[];for(el(e)?n.push(e):e.child&&r.push(e.child);r.length;){const i=r.pop();if(!i)break;el(i)?n.push(i):i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return n},Yp=(e,n,r=!1)=>{if(!e)return null;if(n(e)===!0)return e;let i=r?e.return:e.child;for(;i;){const s=Yp(i,n,r);if(s)return s;i=r?null:i.sibling}return null},si=e=>{const n=e?.actualDuration??0;let r=n,i=e?.child??null;for(;n>0&&i!=null;)r-=i.actualDuration??0,i=i.sibling;return{selfTime:r,totalTime:n}},tl=e=>!!e.updateQueue?.memoCache,wi=e=>{const n=e;return typeof n=="function"?n:typeof n=="object"&&n?wi(n.type||n.render):null},qt=e=>{const n=e;if(typeof n=="string")return n;if(typeof n!="function"&&!(typeof n=="object"&&n))return null;const r=n.displayName||n.name||null;if(r)return r;const i=wi(n);return i&&(i.displayName||i.name)||null},A2=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},O2=()=>!!pi()._instrumentationIsActive||Lw()||Jh(),Hw=0,Ro=new WeakMap,M2=(e,n=Hw++)=>{Ro.set(e,n)},Oa=e=>{let n=Ro.get(e);return!n&&e.alternate&&(n=Ro.get(e.alternate)),n||(n=Hw++,M2(e,n)),n},Ra=(e,n,r)=>{let i=n;for(;i!=null;){if(Ro.has(i)||Oa(i),!qp(i)&&Ip(i)&&e(i,"mount"),i.tag===Bu)if(i.memoizedState!==null){const u=i.child,f=u?u.sibling:null;if(f){const h=f.child;h!==null&&Ra(e,h,!1)}}else{let u=null;i.child!==null&&(u=i.child.child),u!==null&&Ra(e,u,!1)}else i.child!=null&&Ra(e,i.child,!0);i=r?i.sibling:null}},tp=(e,n,r,i)=>{if(Ro.has(n)||Oa(n),!r)return;Ro.has(r)||Oa(r);const s=n.tag===Bu;!qp(n)&&Ip(n)&&e(n,"update");const u=s&&r.memoizedState!==null,f=s&&n.memoizedState!==null;if(u&&f){const h=n.child?.sibling??null,p=r.child?.sibling??null;h!==null&&p!==null&&tp(e,h,p)}else if(u&&!f){const h=n.child;h!==null&&Ra(e,h,!0)}else if(!u&&f){Bw(e,r);const h=n.child?.sibling??null;h!==null&&Ra(e,h,!0)}else if(n.child!==r.child){let h=n.child;for(;h;){if(h.alternate){const p=h.alternate;tp(e,h,p)}else Ra(e,h,!1);h=h.sibling}}},np=(e,n)=>{(n.tag===Uw||!qp(n))&&e(n,"unmount")},Bw=(e,n)=>{const r=n.tag===Bu&&n.memoizedState!==null;let i=n.child;for(r&&(i=(n.child?.sibling??null)?.child??null);i!==null;)i.return!==null&&(np(e,i),Bw(e,i)),i=i.sibling},z2=0,k0=new WeakMap,D2=(e,n)=>{const r="current"in e?e.current:e;let i=k0.get(e);i||(i={prevFiber:null,id:z2++},k0.set(e,i));const{prevFiber:s}=i;if(!r)np(n,r);else if(s!==null){const c=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!c&&u?Ra(n,r,!1):c&&u?tp(n,r,r.alternate):c&&!u&&np(n,r)}else Ra(n,r,!0);i.prevFiber=r},L2=e=>pi(()=>{const n=pi();e.onActive?.(),n._instrumentationSource=e.name??$p;const r=n.onCommitFiberRoot;e.onCommitFiberRoot&&(n.onCommitFiberRoot=(c,u,f)=>{r&&r(c,u,f),e.onCommitFiberRoot?.(c,u,f)});const i=n.onCommitFiberUnmount;e.onCommitFiberUnmount&&(n.onCommitFiberUnmount=(c,u)=>{i&&i(c,u),e.onCommitFiberUnmount?.(c,u)});const s=n.onPostCommitFiberRoot;e.onPostCommitFiberRoot&&(n.onPostCommitFiberRoot=(c,u)=>{s&&s(c,u),e.onPostCommitFiberRoot?.(c,u)})});/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai, Million Software, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */s2();var Pu,Me,Fw,Pw,oi,T0,$w,Iw,Vw,Xp,rp,ap,qw,nl={},Yw=[],j2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,vl=Array.isArray;function qr(e,n){for(var r in n)e[r]=n[r];return e}function Gp(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function mi(e,n,r){var i,s,c,u={};for(c in n)c=="key"?i=n[c]:c=="ref"?s=n[c]:u[c]=n[c];if(arguments.length>2&&(u.children=arguments.length>3?Pu.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(c in e.defaultProps)u[c]==null&&(u[c]=e.defaultProps[c]);return nu(e,u,i,s,null)}function nu(e,n,r,i,s){var c={type:e,props:n,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Fw,__i:-1,__u:0};return s==null&&Me.vnode!=null&&Me.vnode(c),c}function qe(e){return e.children}function Gn(e,n){this.props=e,this.context=n}function No(e,n){if(n==null)return e.__?No(e.__,e.__i+1):null;for(var r;n<e.__k.length;n++)if((r=e.__k[n])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?No(e):null}function Xw(e){var n,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((r=e.__k[n])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Xw(e)}}function ip(e){(!e.__d&&(e.__d=!0)&&oi.push(e)&&!du.__r++||T0!=Me.debounceRendering)&&((T0=Me.debounceRendering)||$w)(du)}function du(){for(var e,n,r,i,s,c,u,f=1;oi.length;)oi.length>f&&oi.sort(Iw),e=oi.shift(),f=oi.length,e.__d&&(r=void 0,s=(i=(n=e).__v).__e,c=[],u=[],n.__P&&((r=qr({},i)).__v=i.__v+1,Me.vnode&&Me.vnode(r),Zp(n.__P,r,i,n.__n,n.__P.namespaceURI,32&i.__u?[s]:null,c,s??No(i),!!(32&i.__u),u),r.__v=i.__v,r.__.__k[r.__i]=r,Qw(c,r,u),r.__e!=s&&Xw(r)));du.__r=0}function Gw(e,n,r,i,s,c,u,f,h,p,y){var m,b,w,S,T,R,E=i&&i.__k||Yw,A=n.length;for(h=U2(r,n,E,h,A),m=0;m<A;m++)(w=r.__k[m])!=null&&(b=w.__i==-1?nl:E[w.__i]||nl,w.__i=m,R=Zp(e,w,b,s,c,u,f,h,p,y),S=w.__e,w.ref&&b.ref!=w.ref&&(b.ref&&Qp(b.ref,null,w),y.push(w.ref,w.__c||S,w)),T==null&&S!=null&&(T=S),4&w.__u||b.__k===w.__k?h=Zw(w,h,e):typeof w.type=="function"&&R!==void 0?h=R:S&&(h=S.nextSibling),w.__u&=-7);return r.__e=T,h}function U2(e,n,r,i,s){var c,u,f,h,p,y=r.length,m=y,b=0;for(e.__k=new Array(s),c=0;c<s;c++)(u=n[c])!=null&&typeof u!="boolean"&&typeof u!="function"?(h=c+b,(u=e.__k[c]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?nu(null,u,null,null,null):vl(u)?nu(qe,{children:u},null,null,null):u.constructor==null&&u.__b>0?nu(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,f=null,(p=u.__i=H2(u,r,h,m))!=-1&&(m--,(f=r[p])&&(f.__u|=2)),f==null||f.__v==null?(p==-1&&(s>y?b--:s<y&&b++),typeof u.type!="function"&&(u.__u|=4)):p!=h&&(p==h-1?b--:p==h+1?b++:(p>h?b--:b++,u.__u|=4))):e.__k[c]=null;if(m)for(c=0;c<y;c++)(f=r[c])!=null&&(2&f.__u)==0&&(f.__e==i&&(i=No(f)),Kw(f,f));return i}function Zw(e,n,r){var i,s;if(typeof e.type=="function"){for(i=e.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=e,n=Zw(i[s],n,r));return n}e.__e!=n&&(n&&e.type&&!r.contains(n)&&(n=No(e)),r.insertBefore(e.__e,n||null),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function fu(e,n){return n=n||[],e==null||typeof e=="boolean"||(vl(e)?e.some(function(r){fu(r,n)}):n.push(e)),n}function H2(e,n,r,i){var s,c,u=e.key,f=e.type,h=n[r];if(h===null&&e.key==null||h&&u==h.key&&f==h.type&&(2&h.__u)==0)return r;if(i>(h!=null&&(2&h.__u)==0?1:0))for(s=r-1,c=r+1;s>=0||c<n.length;){if(s>=0){if((h=n[s])&&(2&h.__u)==0&&u==h.key&&f==h.type)return s;s--}if(c<n.length){if((h=n[c])&&(2&h.__u)==0&&u==h.key&&f==h.type)return c;c++}}return-1}function E0(e,n,r){n[0]=="-"?e.setProperty(n,r??""):e[n]=r==null?"":typeof r!="number"||j2.test(n)?r:r+"px"}function Hc(e,n,r,i,s){var c;e:if(n=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(n in i)r&&n in r||E0(e.style,n,"");if(r)for(n in r)i&&r[n]==i[n]||E0(e.style,n,r[n])}else if(n[0]=="o"&&n[1]=="n")c=n!=(n=n.replace(Vw,"$1")),n=n.toLowerCase()in e||n=="onFocusOut"||n=="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+c]=r,r?i?r.u=i.u:(r.u=Xp,e.addEventListener(n,c?ap:rp,c)):e.removeEventListener(n,c?ap:rp,c);else{if(s=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in e)try{e[n]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&n[4]!="-"?e.removeAttribute(n):e.setAttribute(n,n=="popover"&&r==1?"":r))}}function C0(e){return function(n){if(this.l){var r=this.l[n.type+e];if(n.t==null)n.t=Xp++;else if(n.t<r.u)return;return r(Me.event?Me.event(n):n)}}}function Zp(e,n,r,i,s,c,u,f,h,p){var y,m,b,w,S,T,R,E,A,L,U,F,B,ee,W,Z,J,re=n.type;if(n.constructor!=null)return null;128&r.__u&&(h=!!(32&r.__u),c=[f=n.__e=r.__e]),(y=Me.__b)&&y(n);e:if(typeof re=="function")try{if(E=n.props,A="prototype"in re&&re.prototype.render,L=(y=re.contextType)&&i[y.__c],U=y?L?L.props.value:y.__:i,r.__c?R=(m=n.__c=r.__c).__=m.__E:(A?n.__c=m=new re(E,U):(n.__c=m=new Gn(E,U),m.constructor=re,m.render=F2),L&&L.sub(m),m.props=E,m.state||(m.state={}),m.context=U,m.__n=i,b=m.__d=!0,m.__h=[],m._sb=[]),A&&m.__s==null&&(m.__s=m.state),A&&re.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=qr({},m.__s)),qr(m.__s,re.getDerivedStateFromProps(E,m.__s))),w=m.props,S=m.state,m.__v=n,b)A&&re.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),A&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(A&&re.getDerivedStateFromProps==null&&E!==w&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(E,U),!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(E,m.__s,U)===!1||n.__v==r.__v){for(n.__v!=r.__v&&(m.props=E,m.state=m.__s,m.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(te){te&&(te.__=n)}),F=0;F<m._sb.length;F++)m.__h.push(m._sb[F]);m._sb=[],m.__h.length&&u.push(m);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(E,m.__s,U),A&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(w,S,T)})}if(m.context=U,m.props=E,m.__P=e,m.__e=!1,B=Me.__r,ee=0,A){for(m.state=m.__s,m.__d=!1,B&&B(n),y=m.render(m.props,m.state,m.context),W=0;W<m._sb.length;W++)m.__h.push(m._sb[W]);m._sb=[]}else do m.__d=!1,B&&B(n),y=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++ee<25);m.state=m.__s,m.getChildContext!=null&&(i=qr(qr({},i),m.getChildContext())),A&&!b&&m.getSnapshotBeforeUpdate!=null&&(T=m.getSnapshotBeforeUpdate(w,S)),Z=y,y!=null&&y.type===qe&&y.key==null&&(Z=Ww(y.props.children)),f=Gw(e,vl(Z)?Z:[Z],n,r,i,s,c,u,f,h,p),m.base=n.__e,n.__u&=-161,m.__h.length&&u.push(m),R&&(m.__E=m.__=null)}catch(te){if(n.__v=null,h||c!=null)if(te.then){for(n.__u|=h?160:128;f&&f.nodeType==8&&f.nextSibling;)f=f.nextSibling;c[c.indexOf(f)]=null,n.__e=f}else for(J=c.length;J--;)Gp(c[J]);else n.__e=r.__e,n.__k=r.__k;Me.__e(te,n,r)}else c==null&&n.__v==r.__v?(n.__k=r.__k,n.__e=r.__e):f=n.__e=B2(r.__e,n,r,i,s,c,u,h,p);return(y=Me.diffed)&&y(n),128&n.__u?void 0:f}function Qw(e,n,r){for(var i=0;i<r.length;i++)Qp(r[i],r[++i],r[++i]);Me.__c&&Me.__c(n,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(c){c.call(s)})}catch(c){Me.__e(c,s.__v)}})}function Ww(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:vl(e)?e.map(Ww):qr({},e)}function B2(e,n,r,i,s,c,u,f,h){var p,y,m,b,w,S,T,R=r.props,E=n.props,A=n.type;if(A=="svg"?s="http://www.w3.org/2000/svg":A=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),c!=null){for(p=0;p<c.length;p++)if((w=c[p])&&"setAttribute"in w==!!A&&(A?w.localName==A:w.nodeType==3)){e=w,c[p]=null;break}}if(e==null){if(A==null)return document.createTextNode(E);e=document.createElementNS(s,A,E.is&&E),f&&(Me.__m&&Me.__m(n,c),f=!1),c=null}if(A==null)R===E||f&&e.data==E||(e.data=E);else{if(c=c&&Pu.call(e.childNodes),R=r.props||nl,!f&&c!=null)for(R={},p=0;p<e.attributes.length;p++)R[(w=e.attributes[p]).name]=w.value;for(p in R)if(w=R[p],p!="children"){if(p=="dangerouslySetInnerHTML")m=w;else if(!(p in E)){if(p=="value"&&"defaultValue"in E||p=="checked"&&"defaultChecked"in E)continue;Hc(e,p,null,w,s)}}for(p in E)w=E[p],p=="children"?b=w:p=="dangerouslySetInnerHTML"?y=w:p=="value"?S=w:p=="checked"?T=w:f&&typeof w!="function"||R[p]===w||Hc(e,p,w,R[p],s);if(y)f||m&&(y.__html==m.__html||y.__html==e.innerHTML)||(e.innerHTML=y.__html),n.__k=[];else if(m&&(e.innerHTML=""),Gw(n.type=="template"?e.content:e,vl(b)?b:[b],n,r,i,A=="foreignObject"?"http://www.w3.org/1999/xhtml":s,c,u,c?c[0]:r.__k&&No(r,0),f,h),c!=null)for(p=c.length;p--;)Gp(c[p]);f||(p="value",A=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[p]||A=="progress"&&!S||A=="option"&&S!=R[p])&&Hc(e,p,S,R[p],s),p="checked",T!=null&&T!=e[p]&&Hc(e,p,T,R[p],s))}return e}function Qp(e,n,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&n==null||(e.__u=e(n))}else e.current=n}catch(s){Me.__e(s,r)}}function Kw(e,n,r){var i,s;if(Me.unmount&&Me.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||Qp(i,null,n)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(c){Me.__e(c,n)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&Kw(i[s],n,r||typeof e.type!="function");r||Gp(e.__e),e.__c=e.__=e.__e=void 0}function F2(e,n,r){return this.constructor(e,r)}function Zs(e,n,r){var i,s,c,u;n==document&&(n=document.documentElement),Me.__&&Me.__(e,n),s=(i=!1)?null:n.__k,c=[],u=[],Zp(n,e=n.__k=mi(qe,null,[e]),s||nl,nl,n.namespaceURI,s?null:n.firstChild?Pu.call(n.childNodes):null,c,s?s.__e:n.firstChild,i,u),Qw(c,e,u)}function Jw(e){function n(r){var i,s;return this.getChildContext||(i=new Set,(s={})[n.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(c){this.props.value!=c.value&&i.forEach(function(u){u.__e=!0,ip(u)})},this.sub=function(c){i.add(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){i&&i.delete(c),u&&u.call(c)}}),r.children}return n.__c="__cC"+qw++,n.__=e,n.Provider=n.__l=(n.Consumer=function(r,i){return r.children(i)}).contextType=n,n}Pu=Yw.slice,Me={__e:function(e,n,r,i){for(var s,c,u;n=n.__;)if((s=n.__c)&&!s.__)try{if((c=s.constructor)&&c.getDerivedStateFromError!=null&&(s.setState(c.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),u=s.__d),u)return s.__E=s}catch(f){e=f}throw e}},Fw=0,Pw=function(e){return e!=null&&e.constructor==null},Gn.prototype.setState=function(e,n){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=qr({},this.state),typeof e=="function"&&(e=e(qr({},r),this.props)),e&&qr(r,e),e!=null&&this.__v&&(n&&this._sb.push(n),ip(this))},Gn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ip(this))},Gn.prototype.render=qe,oi=[],$w=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Iw=function(e,n){return e.__v.__b-n.__v.__b},du.__r=0,Vw=/(PointerCapture)$|Capture$/i,Xp=0,rp=C0(!1),ap=C0(!0),qw=0;var gi,mt,uh,R0,rl=0,ex=[],Rt=Me,N0=Rt.__b,A0=Rt.__r,O0=Rt.diffed,M0=Rt.__c,z0=Rt.unmount,D0=Rt.__;function yl(e,n){Rt.__h&&Rt.__h(mt,e,rl||n),rl=0;var r=mt.__H||(mt.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Be(e){return rl=1,P2(tx,e)}function P2(e,n,r){var i=yl(gi++,2);if(i.t=e,!i.__c&&(i.__=[r?r(n):tx(void 0,n),function(f){var h=i.__N?i.__N[0]:i.__[0],p=i.t(h,f);h!==p&&(i.__N=[p,i.__[1]],i.__c.setState({}))}],i.__c=mt,!mt.__f)){var s=function(f,h,p){if(!i.__c.__H)return!0;var y=i.__c.__H.__.filter(function(b){return!!b.__c});if(y.every(function(b){return!b.__N}))return!c||c.call(this,f,h,p);var m=i.__c.props!==f;return y.forEach(function(b){if(b.__N){var w=b.__[0];b.__=b.__N,b.__N=void 0,w!==b.__[0]&&(m=!0)}}),c&&c.call(this,f,h,p)||m};mt.__f=!0;var c=mt.shouldComponentUpdate,u=mt.componentWillUpdate;mt.componentWillUpdate=function(f,h,p){if(this.__e){var y=c;c=void 0,s(f,h,p),c=y}u&&u.call(this,f,h,p)},mt.shouldComponentUpdate=s}return i.__N||i.__}function je(e,n){var r=yl(gi++,3);!Rt.__s&&Jp(r.__H,n)&&(r.__=e,r.u=n,mt.__H.__h.push(r))}function Wp(e,n){var r=yl(gi++,4);!Rt.__s&&Jp(r.__H,n)&&(r.__=e,r.u=n,mt.__h.push(r))}function ke(e){return rl=5,cr(function(){return{current:e}},[])}function cr(e,n){var r=yl(gi++,7);return Jp(r.__H,n)&&(r.__=e(),r.__H=n,r.__h=e),r.__}function Ct(e,n){return rl=8,cr(function(){return e},n)}function Kp(e){var n=mt.context[e.__c],r=yl(gi++,9);return r.c=e,n?(r.__==null&&(r.__=!0,n.sub(mt)),n.props.value):e.__}function $2(){for(var e;e=ex.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ru),e.__H.__h.forEach(op),e.__H.__h=[]}catch(n){e.__H.__h=[],Rt.__e(n,e.__v)}}Rt.__b=function(e){mt=null,N0&&N0(e)},Rt.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),D0&&D0(e,n)},Rt.__r=function(e){A0&&A0(e),gi=0;var n=(mt=e.__c).__H;n&&(uh===mt?(n.__h=[],mt.__h=[],n.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(n.__h.forEach(ru),n.__h.forEach(op),n.__h=[],gi=0)),uh=mt},Rt.diffed=function(e){O0&&O0(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(ex.push(n)!==1&&R0===Rt.requestAnimationFrame||((R0=Rt.requestAnimationFrame)||I2)($2)),n.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),uh=mt=null},Rt.__c=function(e,n){n.some(function(r){try{r.__h.forEach(ru),r.__h=r.__h.filter(function(i){return!i.__||op(i)})}catch(i){n.some(function(s){s.__h&&(s.__h=[])}),n=[],Rt.__e(i,r.__v)}}),M0&&M0(e,n)},Rt.unmount=function(e){z0&&z0(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{ru(i)}catch(s){n=s}}),r.__H=void 0,n&&Rt.__e(n,r.__v))};var L0=typeof requestAnimationFrame=="function";function I2(e){var n,r=function(){clearTimeout(i),L0&&cancelAnimationFrame(n),setTimeout(e)},i=setTimeout(r,100);L0&&(n=requestAnimationFrame(r))}function ru(e){var n=mt,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),mt=n}function op(e){var n=mt;e.__c=e.__(),mt=n}function Jp(e,n){return!e||e.length!==n.length||n.some(function(r,i){return r!==e[i]})}function tx(e,n){return typeof n=="function"?n(e):n}var V2=Symbol.for("preact-signals");function em(){if(wo>1)wo--;else{for(var e,n=!1;Qs!==void 0;){var r=Qs;for(Qs=void 0,lp++;r!==void 0;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&rx(r))try{r.c()}catch(s){n||(e=s,n=!0)}r=i}}if(lp=0,wo--,n)throw e}}var Je=void 0;function sp(e){var n=Je;Je=void 0;try{return e()}finally{Je=n}}var Qs=void 0,wo=0,lp=0,hu=0;function nx(e){if(Je!==void 0){var n=e.n;if(n===void 0||n.t!==Je)return n={i:0,S:e,p:Je.s,n:void 0,t:Je,e:void 0,x:void 0,r:n},Je.s!==void 0&&(Je.s.n=n),Je.s=n,e.n=n,32&Je.f&&e.S(n),n;if(n.i===-1)return n.i=0,n.n!==void 0&&(n.n.p=n.p,n.p!==void 0&&(n.p.n=n.n),n.p=Je.s,n.n=void 0,Je.s.n=n,Je.s=n),n}}function Jt(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}Jt.prototype.brand=V2;Jt.prototype.h=function(){return!0};Jt.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};Jt.prototype.U=function(e){if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r)}};Jt.prototype.subscribe=function(e){var n=this;return $u(function(){var r=n.value,i=Je;Je=void 0;try{e(r)}finally{Je=i}})};Jt.prototype.valueOf=function(){return this.value};Jt.prototype.toString=function(){return this.value+""};Jt.prototype.toJSON=function(){return this.value};Jt.prototype.peek=function(){var e=Je;Je=void 0;try{return this.value}finally{Je=e}};Object.defineProperty(Jt.prototype,"value",{get:function(){var e=nx(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(lp>100)throw new Error("Cycle detected");this.v=e,this.i++,hu++,wo++;try{for(var n=this.t;n!==void 0;n=n.x)n.t.N()}finally{em()}}}});function Bt(e){return new Jt(e)}function rx(e){for(var n=e.s;n!==void 0;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function ax(e){for(var n=e.s;n!==void 0;n=n.n){var r=n.S.n;if(r!==void 0&&(n.r=r),n.S.n=n,n.i=-1,n.n===void 0){e.s=n;break}}}function ix(e){for(var n=e.s,r=void 0;n!==void 0;){var i=n.p;n.i===-1?(n.S.U(n),i!==void 0&&(i.n=n.n),n.n!==void 0&&(n.n.p=i)):r=n,n.S.n=n.r,n.r!==void 0&&(n.r=void 0),n=i}e.s=r}function jo(e){Jt.call(this,void 0),this.x=e,this.s=void 0,this.g=hu-1,this.f=4}(jo.prototype=new Jt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===hu))return!0;if(this.g=hu,this.f|=1,this.i>0&&!rx(this))return this.f&=-2,!0;var e=Je;try{ax(this),Je=this;var n=this.x();(16&this.f||this.v!==n||this.i===0)&&(this.v=n,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return Je=e,ix(this),this.f&=-2,!0};jo.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var n=this.s;n!==void 0;n=n.n)n.S.S(n)}Jt.prototype.S.call(this,e)};jo.prototype.U=function(e){if(this.t!==void 0&&(Jt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var n=this.s;n!==void 0;n=n.n)n.S.U(n)}};jo.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(jo.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=nx(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function xi(e){return new jo(e)}function ox(e){var n=e.u;if(e.u=void 0,typeof n=="function"){wo++;var r=Je;Je=void 0;try{n()}catch(i){throw e.f&=-2,e.f|=8,tm(e),i}finally{Je=r,em()}}}function tm(e){for(var n=e.s;n!==void 0;n=n.n)n.S.U(n);e.x=void 0,e.s=void 0,ox(e)}function q2(e){if(Je!==this)throw new Error("Out-of-order effect");ix(this),Je=e,this.f&=-2,8&this.f&&tm(this),em()}function bl(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}bl.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var n=this.x();typeof n=="function"&&(this.u=n)}finally{e()}};bl.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ox(this),ax(this),wo++;var e=Je;return Je=this,q2.bind(this,e)};bl.prototype.N=function(){2&this.f||(this.f|=2,this.o=Qs,Qs=this)};bl.prototype.d=function(){this.f|=8,1&this.f||tm(this)};function $u(e){var n=new bl(e);try{n.c()}catch(r){throw n.d(),r}return n.d.bind(n)}var dh;function Uo(e,n){Me[e]=n.bind(null,Me[e]||function(){})}function pu(e){dh&&dh(),dh=e&&e.S()}function sx(e){var n=this,r=e.data,i=X2(r);i.value=r;var s=cr(function(){for(var c=n.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}return n.__$u.c=function(){var u,f=n.__$u.S(),h=s.value;f(),Pw(h)||((u=n.base)==null?void 0:u.nodeType)!==3?(n.__$f|=1,n.setState({})):n.base.data=h},xi(function(){var u=i.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}sx.displayName="_st";Object.defineProperties(Jt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:sx},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Uo("__b",function(e,n){if(typeof n.type=="string"){var r,i=n.props;for(var s in i)if(s!=="children"){var c=i[s];c instanceof Jt&&(r||(n.__np=r={}),r[s]=c,i[s]=c.peek())}}e(n)});Uo("__r",function(e,n){pu();var r,i=n.__c;i&&(i.__$f&=-2,(r=i.__$u)===void 0&&(i.__$u=r=function(s){var c;return $u(function(){c=this}),c.c=function(){i.__$f|=1,i.setState({})},c}())),pu(r),e(n)});Uo("__e",function(e,n,r,i){pu(),e(n,r,i)});Uo("diffed",function(e,n){pu();var r;if(typeof n.type=="string"&&(r=n.__e)){var i=n.__np,s=n.props;if(i){var c=r.U;if(c)for(var u in c){var f=c[u];f!==void 0&&!(u in i)&&(f.d(),c[u]=void 0)}else r.U=c={};for(var h in i){var p=c[h],y=i[h];p===void 0?(p=Y2(r,h,y,s),c[h]=p):p.o(y,s)}}}e(n)});function Y2(e,n,r,i){var s=n in e&&e.ownerSVGElement===void 0,c=Bt(r);return{o:function(u,f){c.value=u,i=f},d:$u(function(){var u=c.value.value;i[n]!==u&&(i[n]=u,s?e[n]=u:u?e.setAttribute(n,u):e.removeAttribute(n))})}}Uo("unmount",function(e,n){if(typeof n.type=="string"){var r=n.__e;if(r){var i=r.U;if(i){r.U=void 0;for(var s in i){var c=i[s];c&&c.d()}}}}else{var u=n.__c;if(u){var f=u.__$u;f&&(u.__$u=void 0,f.d())}}e(n)});Uo("__h",function(e,n,r,i){(i<3||i===9)&&(n.__$f|=2),e(n,r,i)});Gn.prototype.shouldComponentUpdate=function(e,n){var r=this.__$u,i=r&&r.s!==void 0;for(var s in n)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var c in e)if(c!=="__source"&&e[c]!==this.props[c])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function X2(e){return cr(function(){return Bt(e)},[])}function al(e){var n=ke(e);n.current=e,je(function(){return $u(function(){return n.current()})},[])}function lx(e,n){for(var r in n)e[r]=n[r];return e}function cp(e,n){for(var r in e)if(r!=="__source"&&!(r in n))return!0;for(var i in n)if(i!=="__source"&&e[i]!==n[i])return!0;return!1}function G2(e,n){var r=n(),i=Be({t:{__:r,u:n}}),s=i[0].t,c=i[1];return Wp(function(){s.__=r,s.u=n,fh(s)&&c({t:s})},[e,r,n]),je(function(){return fh(s)&&c({t:s}),e(function(){fh(s)&&c({t:s})})},[e]),r}function fh(e){var n,r,i=e.u,s=e.__;try{var c=i();return!((n=s)===(r=c)&&(n!==0||1/n==1/r)||n!=n&&r!=r)}catch{return!0}}function j0(e,n){this.props=e,this.context=n}function Iu(e,n){function r(s){var c=this.props.ref,u=c==s.ref;return!u&&c&&(c.call?c(null):c.current=null),n?!n(this.props,s)||!u:cp(this.props,s)}function i(s){return this.shouldComponentUpdate=r,mi(e,s)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(j0.prototype=new Gn).isPureReactComponent=!0,j0.prototype.shouldComponentUpdate=function(e,n){return cp(this.props,e)||cp(this.state,n)};var U0=Me.__b;Me.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),U0&&U0(e)};var Z2=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function nm(e){function n(r){var i=lx({},r);return delete i.ref,e(i,r.ref||null)}return n.$$typeof=Z2,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var Q2=Me.__e;Me.__e=function(e,n,r,i){if(e.then){for(var s,c=n;c=c.__;)if((s=c.__c)&&s.__c)return n.__e==null&&(n.__e=r.__e,n.__k=r.__k),s.__c(e,n)}Q2(e,n,r,i)};var H0=Me.unmount;function cx(e,n,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=lx({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=n),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return cx(i,n,r)})),e}function ux(e,n,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return ux(i,n,r)}),e.__c&&e.__c.__P===n&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function hh(){this.__u=0,this.o=null,this.__b=null}function dx(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function Bc(){this.i=null,this.l=null}Me.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&32&e.__u&&(e.type=null),H0&&H0(e)},(hh.prototype=new Gn).__c=function(e,n){var r=n.__c,i=this;i.o==null&&(i.o=[]),i.o.push(r);var s=dx(i.__v),c=!1,u=function(){c||(c=!0,r.__R=null,s?s(f):f())};r.__R=u;var f=function(){if(!--i.__u){if(i.state.__a){var h=i.state.__a;i.__v.__k[0]=ux(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__a:i.__b=null});p=i.o.pop();)p.forceUpdate()}};i.__u++||32&n.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(u,u)},hh.prototype.componentWillUnmount=function(){this.o=[]},hh.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=cx(this.__b,r,i.__O=i.__P)}this.__b=null}var s=n.__a&&mi(qe,null,e.fallback);return s&&(s.__u&=-33),[mi(qe,null,n.__a?null:e.children),s]};var B0=function(e,n,r){if(++r[1]===r[0]&&e.l.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function W2(e){return this.getChildContext=function(){return e.context},e.children}function K2(e){var n=this,r=e.h;n.componentWillUnmount=function(){Zs(null,n.v),n.v=null,n.h=null},n.h&&n.h!==r&&n.componentWillUnmount(),n.v||(n.h=r,n.v={nodeType:1,parentNode:r,childNodes:[],contains:function(){return!0},appendChild:function(i){this.childNodes.push(i),n.h.appendChild(i)},insertBefore:function(i,s){this.childNodes.push(i),n.h.insertBefore(i,s)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),n.h.removeChild(i)}}),Zs(mi(W2,{context:n.context},e.__v),n.v)}function J2(e,n){var r=mi(K2,{__v:e,h:n});return r.containerInfo=n,r}(Bc.prototype=new Gn).__a=function(e){var n=this,r=dx(n.__v),i=n.l.get(e);return i[0]++,function(s){var c=function(){n.props.revealOrder?(i.push(s),B0(n,e,i)):s()};r?r(c):c()}},Bc.prototype.render=function(e){this.i=null,this.l=new Map;var n=fu(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var r=n.length;r--;)this.l.set(n[r],this.i=[1,0,this.i]);return e.children},Bc.prototype.componentDidUpdate=Bc.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(n,r){B0(e,r,n)})};var ek=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,tk=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,nk=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,rk=/[A-Z0-9]/g,ak=typeof document<"u",ik=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Gn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Gn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var F0=Me.event;function ok(){}function sk(){return this.cancelBubble}function lk(){return this.defaultPrevented}Me.event=function(e){return F0&&(e=F0(e)),e.persist=ok,e.isPropagationStopped=sk,e.isDefaultPrevented=lk,e.nativeEvent=e};var ck={enumerable:!1,configurable:!0,get:function(){return this.class}},P0=Me.vnode;Me.vnode=function(e){typeof e.type=="string"&&function(n){var r=n.props,i=n.type,s={},c=i.indexOf("-")===-1;for(var u in r){var f=r[u];if(!(u==="value"&&"defaultValue"in r&&f==null||ak&&u==="children"&&i==="noscript"||u==="class"||u==="className")){var h=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&f===!0?f="":h==="translate"&&f==="no"?f=!1:h[0]==="o"&&h[1]==="n"?h==="ondoubleclick"?u="ondblclick":h!=="onchange"||i!=="input"&&i!=="textarea"||ik(r.type)?h==="onfocus"?u="onfocusin":h==="onblur"?u="onfocusout":nk.test(u)&&(u=h):h=u="oninput":c&&tk.test(u)?u=u.replace(rk,"-$&").toLowerCase():f===null&&(f=void 0),h==="oninput"&&s[u=h]&&(u="oninputCapture"),s[u]=f}}i=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=fu(r.children).forEach(function(p){p.props.selected=s.value.indexOf(p.props.value)!=-1})),i=="select"&&s.defaultValue!=null&&(s.value=fu(r.children).forEach(function(p){p.props.selected=s.multiple?s.defaultValue.indexOf(p.props.value)!=-1:s.defaultValue==p.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",ck)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),n.props=s}(e),e.$$typeof=ek,P0&&P0(e)};var $0=Me.__r;Me.__r=function(e){$0&&$0(e),e.__c};var I0=Me.diffed;Me.diffed=function(e){I0&&I0(e);var n=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in n&&n.value!==r.value&&(r.value=n.value==null?"":n.value)};var uk=0;function v(e,n,r,i,s,c){n||(n={});var u,f,h=n;if("ref"in h)for(f in h={},n)f=="ref"?u=n[f]:h[f]=n[f];var p={type:e,props:h,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--uk,__i:-1,__u:0,__source:s,__self:c};if(typeof e=="function"&&(u=e.defaultProps))for(f in u)h[f]===void 0&&(h[f]=u[f]);return Me.vnode&&Me.vnode(p),p}var ph={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function dk(){if(V0)return De;V0=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.iterator;function b(C){return C===null||typeof C!="object"?null:(C=m&&C[m]||C["@@iterator"],typeof C=="function"?C:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function R(C,z,$){this.props=C,this.context=z,this.refs=T,this.updater=$||w}R.prototype.isReactComponent={},R.prototype.setState=function(C,z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,z,"setState")},R.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function E(){}E.prototype=R.prototype;function A(C,z,$){this.props=C,this.context=z,this.refs=T,this.updater=$||w}var L=A.prototype=new E;L.constructor=A,S(L,R.prototype),L.isPureReactComponent=!0;var U=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function ee(C,z,$,q,I,ie){return $=ie.ref,{$$typeof:e,type:C,key:z,ref:$!==void 0?$:null,props:ie}}function W(C,z){return ee(C.type,z,void 0,void 0,void 0,C.props)}function Z(C){return typeof C=="object"&&C!==null&&C.$$typeof===e}function J(C){var z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function($){return z[$]})}var re=/\/+/g;function te(C,z){return typeof C=="object"&&C!==null&&C.key!=null?J(""+C.key):z.toString(36)}function le(){}function fe(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(le,le):(C.status="pending",C.then(function(z){C.status==="pending"&&(C.status="fulfilled",C.value=z)},function(z){C.status==="pending"&&(C.status="rejected",C.reason=z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function j(C,z,$,q,I){var ie=typeof C;(ie==="undefined"||ie==="boolean")&&(C=null);var K=!1;if(C===null)K=!0;else switch(ie){case"bigint":case"string":case"number":K=!0;break;case"object":switch(C.$$typeof){case e:case n:K=!0;break;case y:return K=C._init,j(K(C._payload),z,$,q,I)}}if(K)return I=I(C),K=q===""?"."+te(C,0):q,U(I)?($="",K!=null&&($=K.replace(re,"$&/")+"/"),j(I,z,$,"",function(be){return be})):I!=null&&(Z(I)&&(I=W(I,$+(I.key==null||C&&C.key===I.key?"":(""+I.key).replace(re,"$&/")+"/")+K)),z.push(I)),1;K=0;var he=q===""?".":q+":";if(U(C))for(var ue=0;ue<C.length;ue++)q=C[ue],ie=he+te(q,ue),K+=j(q,z,$,ie,I);else if(ue=b(C),typeof ue=="function")for(C=ue.call(C),ue=0;!(q=C.next()).done;)q=q.value,ie=he+te(q,ue++),K+=j(q,z,$,ie,I);else if(ie==="object"){if(typeof C.then=="function")return j(fe(C),z,$,q,I);throw z=String(C),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return K}function x(C,z,$){if(C==null)return C;var q=[],I=0;return j(C,q,"","",function(ie){return z.call($,ie,I++)}),q}function N(C){if(C._status===-1){var z=C._result;z=z(),z.then(function($){(C._status===0||C._status===-1)&&(C._status=1,C._result=$)},function($){(C._status===0||C._status===-1)&&(C._status=2,C._result=$)}),C._status===-1&&(C._status=0,C._result=z)}if(C._status===1)return C._result.default;throw C._result}var M=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function V(){}return De.Children={map:x,forEach:function(C,z,$){x(C,function(){z.apply(this,arguments)},$)},count:function(C){var z=0;return x(C,function(){z++}),z},toArray:function(C){return x(C,function(z){return z})||[]},only:function(C){if(!Z(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},De.Component=R,De.Fragment=r,De.Profiler=s,De.PureComponent=A,De.StrictMode=i,De.Suspense=h,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return F.H.useMemoCache(C)}},De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cloneElement=function(C,z,$){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var q=S({},C.props),I=C.key,ie=void 0;if(z!=null)for(K in z.ref!==void 0&&(ie=void 0),z.key!==void 0&&(I=""+z.key),z)!B.call(z,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&z.ref===void 0||(q[K]=z[K]);var K=arguments.length-2;if(K===1)q.children=$;else if(1<K){for(var he=Array(K),ue=0;ue<K;ue++)he[ue]=arguments[ue+2];q.children=he}return ee(C.type,I,void 0,void 0,ie,q)},De.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},De.createElement=function(C,z,$){var q,I={},ie=null;if(z!=null)for(q in z.key!==void 0&&(ie=""+z.key),z)B.call(z,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(I[q]=z[q]);var K=arguments.length-2;if(K===1)I.children=$;else if(1<K){for(var he=Array(K),ue=0;ue<K;ue++)he[ue]=arguments[ue+2];I.children=he}if(C&&C.defaultProps)for(q in K=C.defaultProps,K)I[q]===void 0&&(I[q]=K[q]);return ee(C,ie,void 0,void 0,null,I)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:f,render:C}},De.isValidElement=Z,De.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:N}},De.memo=function(C,z){return{$$typeof:p,type:C,compare:z===void 0?null:z}},De.startTransition=function(C){var z=F.T,$={};F.T=$;try{var q=C(),I=F.S;I!==null&&I($,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(V,M)}catch(ie){M(ie)}finally{F.T=z}},De.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},De.use=function(C){return F.H.use(C)},De.useActionState=function(C,z,$){return F.H.useActionState(C,z,$)},De.useCallback=function(C,z){return F.H.useCallback(C,z)},De.useContext=function(C){return F.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,z){return F.H.useDeferredValue(C,z)},De.useEffect=function(C,z,$){var q=F.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(C,z)},De.useId=function(){return F.H.useId()},De.useImperativeHandle=function(C,z,$){return F.H.useImperativeHandle(C,z,$)},De.useInsertionEffect=function(C,z){return F.H.useInsertionEffect(C,z)},De.useLayoutEffect=function(C,z){return F.H.useLayoutEffect(C,z)},De.useMemo=function(C,z){return F.H.useMemo(C,z)},De.useOptimistic=function(C,z){return F.H.useOptimistic(C,z)},De.useReducer=function(C,z,$){return F.H.useReducer(C,z,$)},De.useRef=function(C){return F.H.useRef(C)},De.useState=function(C){return F.H.useState(C)},De.useSyncExternalStore=function(C,z,$){return F.H.useSyncExternalStore(C,z,$)},De.useTransition=function(){return F.H.useTransition()},De.version="19.1.0",De}var q0;function wl(){return q0||(q0=1,ph.exports=dk()),ph.exports}var we=wl();const de=Pp(we),eO=JS({__proto__:null,default:de},[we]);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function fk(e,n){return n-e}function hk(e){let n=e[0].name;const r=e.length,i=Math.min(4,r);for(let s=1;s<i;s++)n+=`, ${e[s].name}`;return n}function pk(e){let n=e[0].time;for(let r=1,i=e.length;r<i;r++)n+=e[r].time;return n}function mk(e){for(let n=0,r=e.length;n<r;n++)if(e[n].forget)return!0;return!1}var gk=e=>{let n="";const r=new Map;for(const u of e){const{forget:f,time:h,aggregatedCount:p,name:y}=u;r.has(p)||r.set(p,[]);const m=r.get(p);m&&m.push({name:y,forget:f,time:h??0})}const i=Array.from(r.keys()).sort(fk),s=[];let c=0;for(const u of i){const f=r.get(u);if(!f)continue;let h=hk(f);const p=pk(f),y=mk(f);c+=p,f.length>4&&(h+="…"),u>1&&(h+=` × ${u}`),y&&(h=`✨${h}`),s.push(h)}return n=s.join(", "),n.length?(n.length>40&&(n=`${n.slice(0,40)}…`),c>=.01&&(n+=` (${Number(c.toFixed(2))}ms)`),n):null};function Ma(e,n){return e===n||e!==e&&n!==n}var rm=e=>{const n=e.createOscillator(),r=e.createGain();n.connect(r),r.connect(e.destination);const i={type:"sine",freq:[392,600],duration:.3,gain:.12},s=i.freq,c=i.duration/s.length;s.forEach((u,f)=>{n.frequency.setValueAtTime(u,e.currentTime+f*c)}),n.type=i.type,r.gain.setValueAtTime(i.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+i.duration*.7,.05),n.start(),n.stop(e.currentTime+i.duration)},vk=e=>new Promise(n=>{const r=new Map,i=new IntersectionObserver(s=>{for(const c of s){const u=c.target,f=c.boundingClientRect;r.set(u,f)}i.disconnect(),n(r)});for(const s of e)i.observe(s)}),yk={mount:1,update:2,unmount:4},wt=nm(({size:e=15,name:n,fill:r="currentColor",stroke:i="currentColor",className:s,externalURL:c="",style:u},f)=>{const h=Array.isArray(e)?e[0]:e,p=Array.isArray(e)?e[1]||e[0]:e,y=`${c}#${n}`;return v("svg",{ref:f,width:`${h}px`,height:`${p}px`,fill:r,stroke:i,className:s,style:{...u,minWidth:`${h}px`,maxWidth:`${h}px`,minHeight:`${p}px`,maxHeight:`${p}px`},children:[v("title",{children:n}),v("use",{href:y})]})}),Re=24,Dt={width:550,height:350,initialHeight:400},sr=240,Yr="react-scan-widget-settings-v2",au="react-scan-widget-collapsed-v1",uo="react-scan-widget-last-view-v1",Tr=typeof window<"u";function fx(e){var n,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(r=fx(e[n]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function bk(){for(var e,n,r=0,i="",s=arguments.length;r<s;r++)(e=arguments[r])&&(n=fx(e))&&(i&&(i+=" "),i+=n);return i}var am="-",wk=e=>{const n=_k(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:u=>{const f=u.split(am);return f[0]===""&&f.length!==1&&f.shift(),hx(f,n)||xk(u)},getConflictingClassGroupIds:(u,f)=>{const h=r[u]||[];return f&&i[u]?[...h,...i[u]]:h}}},hx=(e,n)=>{if(e.length===0)return n.classGroupId;const r=e[0],i=n.nextPart.get(r),s=i?hx(e.slice(1),i):void 0;if(s)return s;if(n.validators.length===0)return;const c=e.join(am);return n.validators.find(({validator:u})=>u(c))?.classGroupId},Y0=/^\[(.+)\]$/,xk=e=>{if(Y0.test(e)){const n=Y0.exec(e)[1],r=n?.substring(0,n.indexOf(":"));if(r)return"arbitrary.."+r}},_k=e=>{const{theme:n,prefix:r}=e,i={nextPart:new Map,validators:[]};return kk(Object.entries(e.classGroups),r).forEach(([c,u])=>{up(u,i,c,n)}),i},up=(e,n,r,i)=>{e.forEach(s=>{if(typeof s=="string"){const c=s===""?n:X0(n,s);c.classGroupId=r;return}if(typeof s=="function"){if(Sk(s)){up(s(i),n,r,i);return}n.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([c,u])=>{up(u,X0(n,c),r,i)})})},X0=(e,n)=>{let r=e;return n.split(am).forEach(i=>{r.nextPart.has(i)||r.nextPart.set(i,{nextPart:new Map,validators:[]}),r=r.nextPart.get(i)}),r},Sk=e=>e.isThemeGetter,kk=(e,n)=>n?e.map(([r,i])=>{const s=i.map(c=>typeof c=="string"?n+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([u,f])=>[n+u,f])):c);return[r,s]}):e,Tk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,r=new Map,i=new Map;const s=(c,u)=>{r.set(c,u),n++,n>e&&(n=0,i=r,r=new Map)};return{get(c){let u=r.get(c);if(u!==void 0)return u;if((u=i.get(c))!==void 0)return s(c,u),u},set(c,u){r.has(c)?r.set(c,u):s(c,u)}}},px="!",Ek=e=>{const{separator:n,experimentalParseClassName:r}=e,i=n.length===1,s=n[0],c=n.length,u=f=>{const h=[];let p=0,y=0,m;for(let R=0;R<f.length;R++){let E=f[R];if(p===0){if(E===s&&(i||f.slice(R,R+c)===n)){h.push(f.slice(y,R)),y=R+c;continue}if(E==="/"){m=R;continue}}E==="["?p++:E==="]"&&p--}const b=h.length===0?f:f.substring(y),w=b.startsWith(px),S=w?b.substring(1):b,T=m&&m>y?m-y:void 0;return{modifiers:h,hasImportantModifier:w,baseClassName:S,maybePostfixModifierPosition:T}};return r?f=>r({className:f,parseClassName:u}):u},Ck=e=>{if(e.length<=1)return e;const n=[];let r=[];return e.forEach(i=>{i[0]==="["?(n.push(...r.sort(),i),r=[]):r.push(i)}),n.push(...r.sort()),n},Rk=e=>({cache:Tk(e.cacheSize),parseClassName:Ek(e),...wk(e)}),Nk=/\s+/,Ak=(e,n)=>{const{parseClassName:r,getClassGroupId:i,getConflictingClassGroupIds:s}=n,c=[],u=e.trim().split(Nk);let f="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{modifiers:y,hasImportantModifier:m,baseClassName:b,maybePostfixModifierPosition:w}=r(p);let S=!!w,T=i(S?b.substring(0,w):b);if(!T){if(!S){f=p+(f.length>0?" "+f:f);continue}if(T=i(b),!T){f=p+(f.length>0?" "+f:f);continue}S=!1}const R=Ck(y).join(":"),E=m?R+px:R,A=E+T;if(c.includes(A))continue;c.push(A);const L=s(T,S);for(let U=0;U<L.length;++U){const F=L[U];c.push(E+F)}f=p+(f.length>0?" "+f:f)}return f};function Ok(){let e=0,n,r,i="";for(;e<arguments.length;)(n=arguments[e++])&&(r=mx(n))&&(i&&(i+=" "),i+=r);return i}var mx=e=>{if(typeof e=="string")return e;let n,r="";for(let i=0;i<e.length;i++)e[i]&&(n=mx(e[i]))&&(r&&(r+=" "),r+=n);return r};function Mk(e,...n){let r,i,s,c=u;function u(h){const p=n.reduce((y,m)=>m(y),e());return r=Rk(p),i=r.cache.get,s=r.cache.set,c=f,f(h)}function f(h){const p=i(h);if(p)return p;const y=Ak(h,r);return s(h,y),y}return function(){return c(Ok.apply(null,arguments))}}var ft=e=>{const n=r=>r[e]||[];return n.isThemeGetter=!0,n},gx=/^\[(?:([a-z-]+):)?(.+)\]$/i,zk=/^\d+\/\d+$/,Dk=new Set(["px","full","screen"]),Lk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Uk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Hk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Bk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ir=e=>xo(e)||Dk.has(e)||zk.test(e),xa=e=>Ho(e,"length",Xk),xo=e=>!!e&&!Number.isNaN(Number(e)),mh=e=>Ho(e,"number",xo),js=e=>!!e&&Number.isInteger(Number(e)),Fk=e=>e.endsWith("%")&&xo(e.slice(0,-1)),Le=e=>gx.test(e),_a=e=>Lk.test(e),Pk=new Set(["length","size","percentage"]),$k=e=>Ho(e,Pk,vx),Ik=e=>Ho(e,"position",vx),Vk=new Set(["image","url"]),qk=e=>Ho(e,Vk,Zk),Yk=e=>Ho(e,"",Gk),Us=()=>!0,Ho=(e,n,r)=>{const i=gx.exec(e);return i?i[1]?typeof n=="string"?i[1]===n:n.has(i[1]):r(i[2]):!1},Xk=e=>jk.test(e)&&!Uk.test(e),vx=()=>!1,Gk=e=>Hk.test(e),Zk=e=>Bk.test(e),Qk=()=>{const e=ft("colors"),n=ft("spacing"),r=ft("blur"),i=ft("brightness"),s=ft("borderColor"),c=ft("borderRadius"),u=ft("borderSpacing"),f=ft("borderWidth"),h=ft("contrast"),p=ft("grayscale"),y=ft("hueRotate"),m=ft("invert"),b=ft("gap"),w=ft("gradientColorStops"),S=ft("gradientColorStopPositions"),T=ft("inset"),R=ft("margin"),E=ft("opacity"),A=ft("padding"),L=ft("saturate"),U=ft("scale"),F=ft("sepia"),B=ft("skew"),ee=ft("space"),W=ft("translate"),Z=()=>["auto","contain","none"],J=()=>["auto","hidden","clip","visible","scroll"],re=()=>["auto",Le,n],te=()=>[Le,n],le=()=>["",Ir,xa],fe=()=>["auto",xo,Le],j=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],x=()=>["solid","dashed","dotted","double","none"],N=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],M=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",Le],C=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>[xo,Le];return{cacheSize:500,separator:":",theme:{colors:[Us],spacing:[Ir,xa],blur:["none","",_a,Le],brightness:z(),borderColor:[e],borderRadius:["none","","full",_a,Le],borderSpacing:te(),borderWidth:le(),contrast:z(),grayscale:V(),hueRotate:z(),invert:V(),gap:te(),gradientColorStops:[e],gradientColorStopPositions:[Fk,xa],inset:re(),margin:re(),opacity:z(),padding:te(),saturate:z(),scale:z(),sepia:V(),skew:z(),space:te(),translate:te()},classGroups:{aspect:[{aspect:["auto","square","video",Le]}],container:["container"],columns:[{columns:[_a]}],"break-after":[{"break-after":C()}],"break-before":[{"break-before":C()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...j(),Le]}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:Z()}],"overscroll-x":[{"overscroll-x":Z()}],"overscroll-y":[{"overscroll-y":Z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",js,Le]}],basis:[{basis:re()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Le]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",js,Le]}],"grid-cols":[{"grid-cols":[Us]}],"col-start-end":[{col:["auto",{span:["full",js,Le]},Le]}],"col-start":[{"col-start":fe()}],"col-end":[{"col-end":fe()}],"grid-rows":[{"grid-rows":[Us]}],"row-start-end":[{row:["auto",{span:[js,Le]},Le]}],"row-start":[{"row-start":fe()}],"row-end":[{"row-end":fe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Le]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Le]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...M()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...M(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...M(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Le,n]}],"min-w":[{"min-w":[Le,n,"min","max","fit"]}],"max-w":[{"max-w":[Le,n,"none","full","min","max","fit","prose",{screen:[_a]},_a]}],h:[{h:[Le,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Le,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Le,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Le,n,"auto","min","max","fit"]}],"font-size":[{text:["base",_a,xa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mh]}],"font-family":[{font:[Us]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Le]}],"line-clamp":[{"line-clamp":["none",xo,mh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ir,Le]}],"list-image":[{"list-image":["none",Le]}],"list-style-type":[{list:["none","disc","decimal",Le]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...x(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ir,xa]}],"underline-offset":[{"underline-offset":["auto",Ir,Le]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:te()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...j(),Ik]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$k]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qk]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...x(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:x()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...x()]}],"outline-offset":[{"outline-offset":[Ir,Le]}],"outline-w":[{outline:[Ir,xa]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[Ir,xa]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",_a,Yk]}],"shadow-color":[{shadow:[Us]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...N(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":N()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",_a,Le]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[m]}],saturate:[{saturate:[L]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Le]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",Le]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",Le]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[js,Le]}],"translate-x":[{"translate-x":[W]}],"translate-y":[{"translate-y":[W]}],"skew-x":[{"skew-x":[B]}],"skew-y":[{"skew-y":[B]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Le]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Le]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":te()}],"scroll-mx":[{"scroll-mx":te()}],"scroll-my":[{"scroll-my":te()}],"scroll-ms":[{"scroll-ms":te()}],"scroll-me":[{"scroll-me":te()}],"scroll-mt":[{"scroll-mt":te()}],"scroll-mr":[{"scroll-mr":te()}],"scroll-mb":[{"scroll-mb":te()}],"scroll-ml":[{"scroll-ml":te()}],"scroll-p":[{"scroll-p":te()}],"scroll-px":[{"scroll-px":te()}],"scroll-py":[{"scroll-py":te()}],"scroll-ps":[{"scroll-ps":te()}],"scroll-pe":[{"scroll-pe":te()}],"scroll-pt":[{"scroll-pt":te()}],"scroll-pr":[{"scroll-pr":te()}],"scroll-pb":[{"scroll-pb":te()}],"scroll-pl":[{"scroll-pl":te()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Le]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ir,xa,mh]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Wk=Mk(Qk),H=(...e)=>Wk(bk(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var yx=(e,n)=>{let r=0;return i=>{const s=Date.now();if(s-r>=n)return r=s,e(i)}},Gr=e=>{if(!Tr)return null;try{const n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}},bn=(e,n)=>{if(Tr)try{window.localStorage.setItem(e,JSON.stringify(n))}catch{}},G0=e=>{if(Tr)try{window.localStorage.removeItem(e)}catch{}},Kk=24,Jk=12,il=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:n,type:r,elementType:i}=e;let s=qt(r);const c=[],u=[];if(tl(e)||n===gl||n===ml||r?.$$typeof===Symbol.for("react.memo")||i?.$$typeof===Symbol.for("react.memo")){const f=tl(e);u.push({type:"memo",title:f?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:f})}if(n===Kk&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),n===Bu&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),n===Jk&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const f=/^(\w+)\((.*)\)$/;let h=s;for(;f.test(h);){const p=h.match(f);if(p?.[1]&&p?.[2])c.unshift(p[1]),h=p[2];else break}s=h}return{name:s||"Unknown",wrappers:c,wrapperTypes:u}},Vu=Bt(!1),dp=Bt(null),yr={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:Dt.width,height:Dt.height,position:{x:Re,y:Re}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:Dt.width,height:Dt.height,position:{x:Re,y:Re}},componentsTree:{width:sr}},eT=()=>{const e=Gr(Yr);return e?{corner:e.corner??yr.corner,dimensions:e.dimensions??yr.dimensions,lastDimensions:e.lastDimensions??e.dimensions??yr.lastDimensions,componentsTree:e.componentsTree??yr.componentsTree}:(bn(Yr,{corner:yr.corner,dimensions:yr.dimensions,lastDimensions:yr.lastDimensions,componentsTree:yr.componentsTree}),yr)},ve=Bt(eT()),gh=()=>{if(!Tr)return;const{dimensions:e}=ve.value,{width:n,height:r,position:i}=e;ve.value={...ve.value,dimensions:{isFullWidth:n>=window.innerWidth-Re*2,isFullHeight:r>=window.innerHeight-Re*2,width:n,height:r,position:i}}},ut=Bt({view:"none"}),tT=Gr(au),An=Bt(tT??null);function nT(){return!1}function im(e){function n(r){return this.shouldComponentUpdate=nT,mi(e,r)}return n.displayName=`Memo(${e.displayName||e.name})`,n.prototype.isReactComponent=!0,n._forwarded=!0,n}var rT=e=>{const{count:n,getScrollElement:r,estimateSize:i,overscan:s=5}=e,[c,u]=Be(0),[f,h]=Be(0),p=ke(),y=ke(null),m=ke(null),b=i(),w=Ct(E=>{if(!y.current)return;const A=E?.[0]?.contentRect.height??y.current.getBoundingClientRect().height;h(A)},[]),S=Ct(()=>{m.current!==null&&cancelAnimationFrame(m.current),m.current=requestAnimationFrame(()=>{w(),m.current=null})},[w]);je(()=>{const E=r();if(!E)return;y.current=E;const A=()=>{y.current&&u(y.current.scrollTop)};w(),p.current||(p.current=new ResizeObserver(()=>{S()})),p.current.observe(E),E.addEventListener("scroll",A,{passive:!0});const L=new MutationObserver(S);return L.observe(E,{attributes:!0,childList:!0,subtree:!0}),()=>{E.removeEventListener("scroll",A),p.current&&p.current.disconnect(),L.disconnect(),m.current!==null&&cancelAnimationFrame(m.current)}},[r,w,S]);const T=cr(()=>{const E=Math.floor(c/b),A=Math.ceil(f/b);return{start:Math.max(0,E-s),end:Math.min(n,E+A+s)}},[c,b,f,n,s]);return{virtualItems:cr(()=>{const E=[];for(let A=T.start;A<T.end;A++)E.push({key:A,index:A,start:A*b});return E},[T,b]),totalSize:n*b,scrollTop:c,containerHeight:f}};Gr("react-scann-pinned");var aT=e=>{const n=[];let r=e;for(;r;){const i=r.elementType,s=typeof i=="function"?i.displayName||i.name:typeof i=="string"?i:"Unknown",c=r.index!==void 0?`[${r.index}]`:"";n.unshift(`${s}${c}`),r=r.return??null}return n.join("::")},ri=new WeakMap,iT=(e,n)=>{const r=n.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},oT={activeFlashes:new Map,create(e){const n=e.querySelector(".react-scan-flash-overlay"),r=n instanceof HTMLElement?n:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const c=iT(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:c}),s})(),i=ri.get(r);i&&(clearTimeout(i),ri.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const c=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u?.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),ri.delete(r)},150);ri.set(r,c)},300);ri.set(r,s)})},cleanup(e){const n=this.activeFlashes.get(e);if(n){const r=ri.get(n.overlay);r&&(clearTimeout(r),ri.delete(n.overlay)),n.overlay.parentNode&&n.overlay.parentNode.removeChild(n.overlay),n.scrollCleanup&&n.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},Z0=1e3,bx={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},sn=Bt(bx),om=Bt(0),li=[],ai=null,sT=()=>{if(li.length===0)return;const e=[...li],{updates:n,totalUpdates:r,currentIndex:i,isViewingHistory:s}=sn.value,c=[...n];let u=r;for(const{update:y}of e)c.length>=Z0&&c.shift(),c.push(y),u++;const f=Math.max(0,u-Z0);let h;s?i===r-1?h=c.length-1:i===0?h=0:f===0?h=i:h=i-1:h=c.length-1;const p=e[e.length-1];sn.value={...sn.value,latestFiber:p.fiber,updates:c,totalUpdates:u,windowOffset:f,currentIndex:h,isViewingHistory:s},li=li.slice(e.length)},wx={showTimeline:()=>{sn.value={...sn.value,isVisible:!0}},hideTimeline:()=>{sn.value={...sn.value,isVisible:!1,currentIndex:sn.value.updates.length-1}},updateFrame:(e,n)=>{sn.value={...sn.value,currentIndex:e,isViewingHistory:n}},updatePlaybackSpeed:e=>{sn.value={...sn.value,playbackSpeed:e}},addUpdate:(e,n)=>{if(li.push({update:e,fiber:n}),!ai){const r=()=>{sT(),ai=null,li.length>0&&(ai=setTimeout(r,96))};ai=setTimeout(r,96)}},reset:()=>{ai&&(clearTimeout(ai),ai=null),li=[],sn.value=bx}},nn=Bt({query:"",matches:[],currentMatchIndex:-1}),vh=Bt(!1),xx=(e,n=0,r=null)=>e.reduce((i,s,c)=>{const u=s.element?aT(s.fiber):`${r}-${c}`,f=s.fiber?.type?zx(s.fiber):void 0,h={...s,depth:n,nodeId:u,parentId:r,fiber:s.fiber,renderData:f};return i.push(h),s.children?.length&&i.push(...xx(s.children,n+1,u)),i},[]),lT=e=>e.reduce((n,r)=>Math.max(n,r.depth),0),cT=(e,n)=>{if(n<=0)return 24;const c=Math.max(0,e-sr);if(c<24)return 0;const f=Math.min(c*.3,n*24)/n;return Math.max(0,Math.min(24,f))},uT=["memo","forwardRef","lazy","suspense"],_x=e=>{const n=e.match(/\[(.*?)\]/);if(!n)return null;const r=[],i=n[1].split(",");for(const s of i){const c=s.trim().toLowerCase();c&&r.push(c)}return r},dT=e=>{if(e.length===0)return!1;for(const n of e){let r=!1;for(const i of uT)if(i.toLowerCase().includes(n)){r=!0;break}if(!r)return!1}return!0},Sx=(e,n)=>{if(e.length===0)return!0;if(!n.length)return!1;for(const r of e){let i=!1;for(const s of n)if(s.type.toLowerCase().includes(r)){i=!0;break}if(!i)return!1}return!0},fT=(e,n)=>cr(()=>{const{query:r,matches:i}=n,s=i.some(p=>p.nodeId===e.nodeId),c=_x(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:v("span",{className:"truncate",children:e.label}),typeHighlight:!1};let f=!0;if(c.length>0)if(!e.fiber)f=!1;else{const{wrapperTypes:p}=il(e.fiber);f=Sx(c,p)}let h=v("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const p=u.slice(1,-1),y=new RegExp(`(${p})`,"i"),m=e.label.split(y);h=v("span",{className:"tree-node-search-highlight",children:m.map((b,w)=>y.test(b)?v("span",{className:H("regex",{start:y.test(b)&&w===0,middle:y.test(b)&&w%2===1,end:y.test(b)&&w===m.length-1,"!ml-0":w===1}),children:b},`${e.nodeId}-${b}`):b)})}else{const p=e.label.toLowerCase(),y=u.toLowerCase(),m=p.indexOf(y);m>=0&&(h=v("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,m),v("span",{className:"single",children:e.label.slice(m,m+u.length)}),e.label.slice(m+u.length)]}))}}catch{}return{highlightedText:h,typeHighlight:f&&c.length>0}},[e.label,e.nodeId,e.fiber,n]),Q0=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",hT=({node:e,nodeIndex:n,hasChildren:r,isCollapsed:i,handleTreeNodeClick:s,handleTreeNodeToggle:c,searchValue:u})=>{const f=ke(null),h=ke(e.renderData?.renderCount??0),{highlightedText:p,typeHighlight:y}=fT(e,u);je(()=>{const w=e.renderData?.renderCount,S=f.current;!S||!h.current||!w||h.current===w||(S.classList.remove("count-flash"),S.offsetWidth,S.classList.add("count-flash"),h.current=w)},[e.renderData?.renderCount]);const m=cr(()=>{if(!e.renderData)return null;const{selfTime:w,totalTime:S,renderCount:T}=e.renderData;return T?v("span",{className:H("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:v("span",{ref:f,title:`Self time: ${Q0(w)}ms
Total time: ${Q0(S)}ms`,className:"count-badge",children:["×",T]})}):null},[e.renderData]),b=cr(()=>{if(!e.fiber)return null;const{wrapperTypes:w}=il(e.fiber),S=w[0];return v("span",{className:H("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[S&&v(qe,{children:[v("span",{title:S?.title,className:H("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",S.type==="memo"&&"bg-[#8e61e3] text-white",y&&"bg-yellow-300 text-black"),children:S.type},S.type),S.compiler&&v("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),w.length>1&&`×${w.length}`,m]})},[e.fiber,y,m]);return v("button",{type:"button",title:e.title,"data-index":n,className:H("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[v("button",{type:"button","data-index":n,onClick:c,className:H("w-6 h-6 flex items-center justify-center","text-left"),children:r&&v(wt,{name:"icon-chevron-right",size:12,className:H("transition-transform",!i&&"rotate-90")})}),p,b]})},pT=()=>{const e=ke(null),n=ke(null),r=ke(null),i=ke(null),s=ke(null),c=ke(0),u=ke(!1),f=ke(!1),h=ke(null),[p,y]=Be([]),[m,b]=Be(new Set),[w,S]=Be(void 0),[T,R]=Be(nn.value),E=cr(()=>{const x=[],N=p,M=new Map(N.map(V=>[V.nodeId,V]));for(const V of N){let C=!0,z=V;for(;z.parentId;){const $=M.get(z.parentId);if(!$)break;if(m.has($.nodeId)){C=!1;break}z=$}C&&x.push(V)}return x},[m,p]),A=28,{virtualItems:L,totalSize:U}=rT({count:E.length,getScrollElement:()=>e.current,estimateSize:()=>A,overscan:5}),F=Ct(x=>{u.current=!0,i.current?.blur(),vh.value=!0;const{parentCompositeFiber:N}=ci(x);if(!N)return;ge.inspectState.value={kind:"focused",focusedDomElement:x,fiber:N};const M=E.findIndex(V=>V.element===x);if(M!==-1){S(M);const V=M*A,C=e.current;if(C){const z=C.clientHeight,$=C.scrollTop;(V<$||V+A>$+z)&&C.scrollTo({top:Math.max(0,V-z/2),behavior:"instant"})}}},[E]),B=Ct(x=>{const N=x.currentTarget,M=Number(N.dataset.index);if(Number.isNaN(M))return;const V=E[M].element;V&&F(V)},[E,F]),ee=Ct(x=>{b(N=>{const M=new Set(N);return M.has(x)?M.delete(x):M.add(x),M})},[]),W=Ct(x=>{x.stopPropagation();const N=x.target,M=Number(N.dataset.index);if(Number.isNaN(M))return;const V=E[M].nodeId;ee(V)},[E,ee]),Z=Ct(x=>{r.current?.classList.remove("!border-red-500");const N=[];if(!x){nn.value={query:x,matches:N,currentMatchIndex:-1};return}if(x.includes("[")&&!x.includes("]")&&x.length>x.indexOf("[")+1){r.current?.classList.add("!border-red-500");return}const M=_x(x)||[];if(x.includes("[")&&!dT(M)){r.current?.classList.add("!border-red-500");return}const V=x.replace(/\[.*?\]/,"").trim(),C=/^\/.*\/$/.test(V);let z=$=>!1;if(V.startsWith("/")&&!C&&V.length>1){r.current?.classList.add("!border-red-500");return}if(C)try{const $=V.slice(1,-1),q=new RegExp($,"i");z=I=>q.test(I)}catch{r.current?.classList.add("!border-red-500");return}else if(V){const $=V.toLowerCase();z=q=>q.toLowerCase().includes($)}for(const $ of p){let q=!0;if(V&&(q=z($.label)),q&&M.length>0)if(!$.fiber)q=!1;else{const{wrapperTypes:I}=il($.fiber);q=Sx(M,I)}q&&N.push($)}if(nn.value={query:x,matches:N,currentMatchIndex:N.length>0?0:-1},N.length>0){const $=N[0],q=E.findIndex(I=>I.nodeId===$.nodeId);if(q!==-1){const I=q*A,ie=e.current;if(ie){const K=ie.clientHeight;ie.scrollTo({top:Math.max(0,I-K/2),behavior:"instant"})}}}},[p,E]),J=Ct(x=>{const N=x.currentTarget;N&&Z(N.value)},[Z]),re=Ct(x=>{const{matches:N,currentMatchIndex:M}=nn.value;if(N.length===0)return;const V=x==="next"?(M+1)%N.length:(M-1+N.length)%N.length;nn.value={...nn.value,currentMatchIndex:V};const C=N[V],z=E.findIndex($=>$.nodeId===C.nodeId);if(z!==-1){S(z);const $=z*A,q=e.current;if(q){const I=q.clientHeight;q.scrollTo({top:Math.max(0,$-I/2),behavior:"instant"})}}},[E]),te=Ct(x=>{if(n.current&&(n.current.style.width=`${x}px`),e.current){e.current.style.width=`${x}px`;const N=cT(x,c.current);e.current.style.setProperty("--indentation-size",`${N}px`)}},[]),le=Ct(x=>{if(!h.current)return;const N=ve.value.dimensions.width,M=Math.floor(N-sr/2);h.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),x<=sr?h.current.classList.add("cursor-w-resize"):x>=M?h.current.classList.add("cursor-e-resize"):h.current.classList.add("cursor-ew-resize")},[]),fe=Ct(x=>{if(x.preventDefault(),x.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),f.current=!0;const N=x.clientX,M=e.current.offsetWidth,V=ve.value.dimensions.width,C=Math.floor(V-sr/2);le(M);const z=q=>{const I=N-q.clientX,ie=M+I;le(ie);const K=Math.min(C,Math.max(sr,ie));te(K)},$=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",z),document.removeEventListener("pointerup",$),ve.value={...ve.value,componentsTree:{...ve.value.componentsTree,width:e.current.offsetWidth}},bn(Yr,ve.value),f.current=!1)};document.addEventListener("pointermove",z),document.addEventListener("pointerup",$)},[te,le]);je(()=>{if(!e.current)return;const x=e.current.offsetWidth;return le(x),ve.subscribe(()=>{e.current&&le(e.current.offsetWidth)})},[le]);const j=Ct(()=>{u.current=!1},[]);return je(()=>{let x=!0;const N=$=>{const q=new Map,I=[];for(const{element:ie,name:K,fiber:he}of $){if(!ie)continue;let ue=K;const{name:be,wrappers:me}=il(he);be&&(me.length>0?ue=`${me.join("(")}(${be})${")".repeat(me.length)}`:ue=be),q.set(ie,{label:be||K,title:ue,children:[],element:ie,fiber:he})}for(const{element:ie,depth:K}of $){if(!ie)continue;const he=q.get(ie);if(he)if(K===0)I.push(he);else{let ue=ie.parentElement;for(;ue;){const be=q.get(ue);if(be){be.children=be.children||[],be.children.push(he);break}ue=ue.parentElement}}}return I},M=()=>{const $=s.current;if(!$)return;const q=DT(),I=N(q);if(I.length>0){const ie=xx(I),K=lT(ie);if(c.current=K,te(ve.value.componentsTree.width),y(ie),x){x=!1;const he=ie.findIndex(ue=>ue.element===$);if(he!==-1){const ue=he*A,be=e.current;be&&setTimeout(()=>{be.scrollTo({top:ue,behavior:"instant"})},96)}}}},V=ge.inspectState.subscribe($=>{if($.kind==="focused"){if(vh.value)return;Z(""),s.current=$.focusedDomElement,M()}});let C=0;const z=om.subscribe(()=>{if(ge.inspectState.value.kind==="focused"){if(cancelAnimationFrame(C),f.current)return;C=requestAnimationFrame(()=>{vh.value=!1,M()})}});return()=>{V(),z(),nn.value={query:"",matches:[],currentMatchIndex:-1}}},[]),je(()=>{const x=N=>{if(u.current&&w)switch(N.key){case"ArrowUp":{if(N.preventDefault(),N.stopPropagation(),w>0){const M=E[w-1];M?.element&&F(M.element)}return}case"ArrowDown":{if(N.preventDefault(),N.stopPropagation(),w<E.length-1){const M=E[w+1];M?.element&&F(M.element)}return}case"ArrowLeft":{N.preventDefault(),N.stopPropagation();const M=E[w];M?.nodeId&&ee(M.nodeId);return}case"ArrowRight":{N.preventDefault(),N.stopPropagation();const M=E[w];M?.nodeId&&ee(M.nodeId);return}}};return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[w,E,F,ee]),je(()=>nn.subscribe(R),[]),je(()=>ve.subscribe(N=>{n.current?.style.setProperty("transition","width 0.1s"),te(N.componentsTree.width),setTimeout(()=>{n.current?.style.removeProperty("transition")},500)}),[]),v("div",{className:"react-scan-components-tree flex",children:[v("div",{ref:h,onPointerDown:fe,className:"relative resize-v-line",children:v("span",{children:v(wt,{name:"icon-ellipsis",size:18})})}),v("div",{ref:n,className:"flex flex-col h-full",children:[v("div",{className:"p-2 border-b border-[#1e1e1e]",children:v("div",{ref:r,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:H("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[v(wt,{name:"icon-search",size:12,className:" text-neutral-500"}),v("div",{className:"relative flex-1 h-7 overflow-hidden",children:v("input",{ref:i,type:"text",value:nn.value.query,onClick:x=>{x.stopPropagation(),x.currentTarget.focus()},onPointerDown:x=>{x.stopPropagation()},onKeyDown:x=>{x.key==="Escape"&&x.currentTarget.blur(),nn.value.matches.length&&(x.key==="Enter"&&x.shiftKey?re("prev"):x.key==="Enter"&&(x.metaKey||x.ctrlKey?(x.preventDefault(),x.stopPropagation(),F(nn.value.matches[nn.value.currentMatchIndex].element),x.currentTarget.focus()):re("next")))},onChange:J,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),nn.value.query?v(qe,{children:[v("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[nn.value.currentMatchIndex+1,"|",nn.value.matches.length]}),!!nn.value.matches.length&&v(qe,{children:[v("button",{type:"button",onClick:x=>{x.stopPropagation(),re("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(wt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),v("button",{type:"button",onClick:x=>{x.stopPropagation(),re("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(wt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),v("button",{type:"button",onClick:x=>{x.stopPropagation(),Z("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(wt,{name:"icon-close",size:12})})]}):!!p.length&&v("span",{className:"text-xs text-neutral-500",children:p.length})]})}),v("div",{className:"flex-1 overflow-hidden",children:v("div",{ref:e,onPointerLeave:j,className:"tree h-full overflow-auto will-change-transform",children:v("div",{className:"relative w-full",style:{height:U},children:L.map(x=>{const N=E[x.index];if(!N)return null;const M=ge.inspectState.value.kind==="focused"&&N.element===ge.inspectState.value.focusedDomElement,V=x.index===w;return v("div",{className:H("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(M||V)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:x.start,height:A},children:v("div",{className:"w-full h-full",style:{paddingLeft:`calc(${N.depth} * var(--indentation-size))`},children:v(hT,{node:N,nodeIndex:x.index,hasChildren:!!N.children?.length,isCollapsed:m.has(N.nodeId),handleTreeNodeClick:B,handleTreeNodeToggle:W,searchValue:T})})},N.nodeId)})})})})]})]})},mu=Iu(({text:e,children:n,onCopy:r,className:i,iconSize:s=14})=>{const[c,u]=Be(!1);je(()=>{if(c){const p=setTimeout(()=>u(!1),600);return()=>{clearTimeout(p)}}},[c]);const f=Ct(p=>{p.preventDefault(),p.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r?.(!0,e)},()=>{r?.(!1,e)})},[e,r]),h=v("button",{onClick:f,type:"button",className:H("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,i),children:v(wt,{name:`icon-${c?"check":"copy"}`,size:[s],className:H(c&&"text-green-500")})});return n?n({ClipboardIcon:h,onClick:f}):h}),mT=({length:e,expanded:n,onToggle:r,isNegative:i})=>v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:v(wt,{name:"icon-chevron-right",size:12,className:H("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",n&&"rotate-90")})}),v("span",{children:["Array(",e,")"]})]}),fp=({value:e,path:n,isNegative:r})=>{const[i,s]=Be(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return v("div",{className:"flex items-center gap-1",children:[v("span",{className:"text-gray-500",children:[n,":"]}),v("span",{className:"truncate",children:bu(e)})]});const u=Object.entries(e);return v("div",{className:"flex flex-col",children:[v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:()=>s(!i),className:"flex items-center p-0 opacity-50",children:v(wt,{name:"icon-chevron-right",size:12,className:H("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),v("span",{className:"text-gray-500",children:[n,":"]}),!i&&v("span",{className:"truncate",children:e instanceof Date?bu(e):`{${Object.keys(e).join(", ")}}`})]}),i&&v("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([f,h])=>v(fp,{value:h,path:f,isNegative:r},f))})]})},gu=({value:e,expanded:n,onToggle:r,isNegative:i})=>{const{value:s,error:c}=UT(e);return c?v("span",{className:"text-gray-500 font-italic",children:c}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?v("div",{className:"flex flex-col gap-1 relative",children:[v(mT,{length:s.length,expanded:n,onToggle:r,isNegative:i}),n&&v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((f,h)=>v(fp,{value:f,path:h.toString(),isNegative:i},h.toString()))}),v(mu,{text:tb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:f})=>v(qe,{children:f})})]}):v("div",{className:"flex items-start gap-1 relative",children:[v("button",{type:"button",onClick:r,className:H("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:v(wt,{name:"icon-chevron-right",size:12,className:H("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",n&&"rotate-90")})}),v("div",{className:"flex-1",children:n?v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([f,h])=>v(fp,{value:h,path:f,isNegative:i},f))}):v("span",{children:bu(s)})}),v(mu,{text:tb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:f})=>v(qe,{children:f})})]}):v("span",{children:bu(s)})},gT=50,hp=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},W0=(e,n)=>{for(const r of e){const i=n.get(r.name);if(i){n.set(i.name,{count:i.count+1,currentValue:r.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:r.prevValue});continue}n.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},vT=(e,n)=>{for(const r of e){const i=n.contextChanges.get(r.contextType);if(i){if(Ma(hp(i),r.value))continue;if(i.kind==="partially-initialized"){n.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.value}});continue}n.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.changes.currentValue}});continue}n.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},yT=e=>{const n={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{vT(r.contextChanges,n),W0(r.stateChanges,n.stateChanges),W0(r.propsChanges,n.propsChanges)}),n},K0=(e,n)=>{const r=new Map;return e.forEach((i,s)=>{r.set(s,i)}),n.forEach((i,s)=>{const c=r.get(s);if(!c){r.set(s,i);return}r.set(s,{count:c.count+i.count,currentValue:i.currentValue,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:i.previousValue})}),r},bT=(e,n)=>{const r=new Map;return e.contextChanges.forEach((i,s)=>{r.set(s,i)}),n.contextChanges.forEach((i,s)=>{const c=r.get(s);if(!c){r.set(s,i);return}if(hp(i)!==hp(c))switch(c.kind){case"initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...i.changes,count:i.changes.count+c.changes.count+1,currentValue:i.changes.currentValue,previousValue:i.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:c.changes.count+1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:c.changes.currentValue}});return}}case"partially-initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:i.changes.currentValue,id:i.changes.id,lastUpdated:i.changes.lastUpdated,name:i.changes.name,previousValue:c.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:c.value}});return}}}}),r},wT=(e,n)=>{const r=bT(e,n),i=K0(e.propsChanges,n.propsChanges),s=K0(e.stateChanges,n.stateChanges);return{contextChanges:r,propsChanges:i,stateChanges:s}},pp=e=>Array.from(e.propsChanges.values()).reduce((n,r)=>n+r.count,0)+Array.from(e.stateChanges.values()).reduce((n,r)=>n+r.count,0)+Array.from(e.contextChanges.values()).filter(n=>n.kind==="initialized").reduce((n,r)=>n+r.changes.count,0),xT=e=>{const n=ke({queue:[]}),[r,i]=Be({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ge.inspectState.value.kind==="focused"?ge.inspectState.value.fiber:null,c=s?Oa(s):null;return je(()=>{const u=setInterval(()=>{n.current.queue.length!==0&&(i(f=>{const h=yT(n.current.queue),p=wT(f,h);return pp(f),pp(p),p}),n.current.queue=[])},gT);return()=>{clearInterval(u)}},[s]),je(()=>{if(!c)return;const u=h=>{n.current?.queue.push(h)};let f=ge.changesListeners.get(c);return f||(f=[],ge.changesListeners.set(c,f)),f.push(u),()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),n.current.queue=[],ge.changesListeners.set(c,ge.changesListeners.get(c)?.filter(h=>h!==u)??[])}},[c]),je(()=>()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),n.current.queue=[]},[c]),r},vu=e=>{if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(So(e))return{value:"Promise"};try{const n=Object.getPrototypeOf(e);return n===Promise.prototype||n?.constructor?.name==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},_T=Iu(()=>{const[e,n]=Be(!0),r=xT(),[i,s]=Be(!1),c=pp(r)>0;je(()=>{if(!i&&c){const h=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{n(!0)})},0);return()=>clearTimeout(h)}},[i,c]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,h])=>h.kind==="initialized").map(([h,p])=>[h,p.kind==="partially-initialized"?null:p.changes])),f=ge.inspectState.value.kind==="focused"?ge.inspectState.value.fiber:null;if(f)return v(qe,{children:[v(kT,{}),v("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[v("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[v("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",v("span",{className:"text-[#A855F7]",children:qt(f)})," ","render?"]}),!c&&v("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[v("div",{children:"No changes detected since selecting"}),v("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),v("div",{className:H("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[v(yh,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),v(yh,{renderName:h=>ST(h,qt(wi(f))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),v(yh,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),ST=(e,n)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return v("span",{className:"truncate",children:[v("span",{className:"text-white",children:[r,(s=>{const c=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(c){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),v("span",{style:{color:"#666"},children:["called in ",v("i",{className:"text-[#A855F7] truncate",children:n})]})]})},kT=Iu(()=>{const e=ke(null),n=ke(null),r=ke(null),i=ke({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return je(()=>{const s=yx(()=>{const u=[];e.current?.dataset.flash==="true"&&u.push(e.current),n.current?.dataset.flash==="true"&&u.push(n.current),r.current?.dataset.flash==="true"&&u.push(r.current);for(const f of u)f.classList.remove("count-flash-white"),f.offsetWidth,f.classList.add("count-flash-white")},400);return sn.subscribe(u=>{if(!e.current||!n.current||!r.current)return;const{currentIndex:f,updates:h}=u,p=h[f];!p||f===0||(s(),i.current={isPropsChanged:(p.props?.changes?.size??0)>0,isStateChanged:(p.state?.changes?.size??0)>0,isContextChanged:(p.context?.changes?.size??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=i.current.isPropsChanged.toString()),n.current.dataset.flash!=="true"&&(n.current.dataset.flash=i.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=i.current.isContextChanged.toString()))})},[]),v("button",{type:"button",className:H("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:v("div",{className:H("flex-1 react-scan-expandable"),children:v("div",{className:"overflow-hidden",children:v("div",{className:"flex items-center whitespace-nowrap",children:[v("div",{className:"flex items-center gap-x-2",children:"What changed?"}),v("div",{className:H("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[v("div",{ref:e,children:"props"}),v("div",{ref:n,children:"state"}),v("div",{ref:r,children:"context"})]})]})})})})}),TT=e=>e,yh=Iu(({title:e,changes:n,renderName:r=TT})=>{const[i,s]=Be(new Set),[c,u]=Be(new Set),f=Array.from(n.entries());return n.size===0?null:v("div",{children:[v("div",{className:"text-xs text-[#888] mb-1.5",children:e}),v("div",{className:"flex flex-col gap-2",children:f.map(([h,p])=>{const y=c.has(String(h)),{value:m,error:b}=vu(p.previousValue),{value:w,error:S}=vu(p.currentValue),T=Cx(m,w);return v("div",{children:[v("button",{onClick:()=>{u(R=>{const E=new Set(R);return E.has(String(h))?E.delete(String(h)):E.add(String(h)),E})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:v("div",{className:"flex items-center gap-1.5 flex-1",children:[v(wt,{name:"icon-chevron-right",size:12,className:H("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":y})}),v("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(p.name),v(NT,{count:p.count,isFunction:typeof p.currentValue=="function",showWarning:T.changes.length===0,forceFlash:!0})]})]})}),v("div",{className:H("react-scan-expandable",{"react-scan-expanded":y}),children:v("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:v("div",{className:"flex flex-col gap-0.5",children:b||S?v(ET,{currError:S,prevError:b}):T.changes.length>0?v(CT,{change:p,diff:T,expandedFns:i,renderName:r,setExpandedFns:s,title:e}):v(RT,{currValue:w,entryKey:h,expandedFns:i,prevValue:m,setExpandedFns:s})})})})]},h)})})]})}),ET=({prevError:e,currError:n})=>v(qe,{children:[e&&v("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),n&&v("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:n})]}),CT=({diff:e,title:n,renderName:r,change:i,expandedFns:s,setExpandedFns:c})=>e.changes.map((u,f)=>{const{value:h,error:p}=vu(u.prevValue),{value:y,error:m}=vu(u.currentValue),b=typeof h=="function"||typeof y=="function";let w;return n==="Props"&&(w=u.path.length>0?`${r(String(i.name))}.${nr(u.path)}`:void 0),n==="State"&&u.path.length>0&&(w=`state.${nr(u.path)}`),w||(w=nr(u.path)),v("div",{className:H("flex flex-col gap-y-1",f<e.changes.length-1&&"mb-4"),children:[w&&v("div",{className:"text-[#666] text-[10px]",children:w}),v("button",{type:"button",className:H("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${nr(u.path)}-prev`;c(T=>{const R=new Set(T);return R.has(S)?R.delete(S):R.add(S),R})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 whitespace-nowrap font-mono",children:p?v("span",{className:"italic text-[#f87171]",children:p}):b?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1 max-h-40",children:gp(h,s.has(`${nr(u.path)}-prev`))}),typeof h=="function"&&v(mu,{text:h.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(qe,{children:S})})]}),h?.toString()===y?.toString()&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(gu,{value:h,expanded:s.has(`${nr(u.path)}-prev`),onToggle:()=>{const S=`${nr(u.path)}-prev`;c(T=>{const R=new Set(T);return R.has(S)?R.delete(S):R.add(S),R})},isNegative:!0})})]}),v("button",{type:"button",className:H("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${nr(u.path)}-current`;c(T=>{const R=new Set(T);return R.has(S)?R.delete(S):R.add(S),R})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:m?v("span",{className:"italic text-[#4ade80]",children:m}):b?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1",children:gp(y,s.has(`${nr(u.path)}-current`))}),typeof y=="function"&&v(mu,{text:y.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(qe,{children:S})})]}),h?.toString()===y?.toString()&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(gu,{value:y,expanded:s.has(`${nr(u.path)}-current`),onToggle:()=>{const S=`${nr(u.path)}-current`;c(T=>{const R=new Set(T);return R.has(S)?R.delete(S):R.add(S),R})},isNegative:!1})})]})]},`${w}-${i.name}-${f}`)}),RT=({prevValue:e,currValue:n,entryKey:r,expandedFns:i,setExpandedFns:s})=>v(qe,{children:[v("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(gu,{value:e,expanded:i.has(`${String(r)}-prev`),onToggle:()=>{const c=`${String(r)}-prev`;s(u=>{const f=new Set(u);return f.has(c)?f.delete(c):f.add(c),f})},isNegative:!0})})]}),v("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(gu,{value:n,expanded:i.has(`${String(r)}-current`),onToggle:()=>{const c=`${String(r)}-current`;s(u=>{const f=new Set(u);return f.has(c)?f.delete(c):f.add(c),f})},isNegative:!1})})]}),typeof n=="object"&&n!==null&&v("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[v(wt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),v("span",{children:"Reference changed but objects are structurally the same"})]})]}),NT=({count:e,forceFlash:n,isFunction:r,showWarning:i})=>{const s=ke(!0),c=ke(null),u=ke(e);return je(()=>{const f=c.current;!f||u.current===e||(f.classList.remove("count-flash"),f.offsetWidth,f.classList.add("count-flash"),u.current=e)},[e]),je(()=>{if(s.current){s.current=!1;return}if(n){let f=setTimeout(()=>{c.current?.classList.add("count-flash-white"),f=setTimeout(()=>{c.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(f)}}},[n]),v("div",{ref:c,className:"count-badge",children:[i&&v(wt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&v(wt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},Ea={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Ea.lastRendered.clear(),Ea.expandedPaths.clear(),oT.cleanupAll(),PT(),wx.reset()}},kx=class extends Gn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Ea.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?v("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[v("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[v(wt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),v("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},AT=xi(()=>H("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Vu.value&&"opacity-100 delay-300 pointer-events-auto")),OT=im(()=>{const e=ke(null),n=r=>{if(!r)return;e.current=r;const{data:i,shouldUpdate:s}=IT(r);if(s){const c={timestamp:Date.now(),fiberInfo:HT(r),props:i.fiberProps,state:i.fiberState,context:i.fiberContext,stateNames:FT(r)};wx.addUpdate(c,r)}};return al(()=>{const r=ge.inspectState.value;sp(()=>{if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Ea.cleanup();return}r.kind==="focused"&&(Vu.value=!1);const{parentCompositeFiber:i}=eb(r.focusedDomElement,r.fiber);if(!i){ge.inspectState.value={kind:"inspect-off"},ut.value={view:"none"};return}e.current?.type!==i.type&&(e.current=i,Ea.cleanup(),n(i))})}),al(()=>{om.value,sp(()=>{const r=ge.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Ea.cleanup();return}const{parentCompositeFiber:i}=eb(r.focusedDomElement,r.fiber);if(!i){ge.inspectState.value={kind:"inspect-off"},ut.value={view:"none"};return}n(i),r.focusedDomElement.isConnected||(e.current=null,Ea.cleanup(),ge.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),je(()=>()=>{Ea.cleanup()},[]),v(kx,{children:v("div",{className:AT,children:v("div",{className:"w-full h-full",children:v(_T,{})})})})}),MT=im(()=>ge.inspectState.value.kind!=="focused"?null:v(kx,{children:[v(OT,{}),v(pT,{})]})),Tx=e=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!n?.renderers)return null;for(const[,r]of Array.from(n.renderers))try{const i=r.findFiberByHostInstance?.(e);if(i)return i}catch{}}if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child??null;for(const n in e)if(n.startsWith("__reactInternalInstance$")||n.startsWith("__reactFiber"))return e[n];return null},sm=e=>{let n=e;for(;n;){if(n.stateNode instanceof Element)return n.stateNode;if(!n.child)break;n=n.child}for(;n;){if(n.stateNode instanceof Element)return n.stateNode;if(!n.return)break;n=n.return}return null},lm=e=>{if(!e)return null;try{const n=Tx(e);if(!n)return null;const r=_o(n);return r?r[0]:null}catch{return null}},_o=e=>{let n=e,r=null;for(;n;){if(Fu(n))return[n,r];el(n)&&!r&&(r=n),n=n.return}return null},J0=(e,n)=>!!Yp(n,i=>i===e),zT=async e=>{const n=lm(e);if(!n)return null;const r=sm(n);if(!r)return null;const i=(await vk([r])).get(r);return i||null},ci=e=>{const n=lm(e);if(!n)return{};if(!sm(n))return{};const i=_o(n);if(!i)return{};const[s]=i;return{parentCompositeFiber:s}},eb=(e,n)=>{if(!e.isConnected)return{};let r=n??lm(e);if(!r)return{};let i=r,s=null,c=null;for(;i;){if(!i.stateNode){i=i.return;continue}if(Xe.instrumentation?.fiberRoots.has(i.stateNode)){s=i,c=i.stateNode.current;break}i=i.return}if(!s||!c)return{};if(r=J0(r,c)?r:r.alternate??r,!r)return{};if(!sm(r))return{};const u=_o(r)?.[0];return u?{parentCompositeFiber:J0(u,c)?u:u.alternate??u}:{}},Ex=e=>{const n=e.memoizedProps??{},r=e.alternate?.memoizedProps??{},i=[];for(const s in n){if(s==="children")continue;const c=n[s],u=r[s];Ma(c,u)||i.push({name:s,value:c,prevValue:u,type:1})}return i},mp=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),yu=(e,n=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const i=e.stateNode;return n&&i.tagName&&mp.has(i.tagName.toLowerCase())?null:i}let r=e.child;for(;r;){const i=yu(r,n);if(i)return i;r=r.sibling}return null},DT=(e=document.body)=>{const n=[],r=s=>{if(!s)return null;const{parentCompositeFiber:c}=ci(s);return c&&yu(c)===s?s:null},i=(s,c=0)=>{const u=r(s);if(u){const{parentCompositeFiber:f}=ci(u);if(!f)return;n.push({element:u,depth:c,name:qt(f.type)??"Unknown",fiber:f})}for(const f of Array.from(s.children))i(f,u?c+1:c)};return i(e),n},tb=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(So(e))return"Promise";if(typeof e=="function"){const n=e.toString();try{return n.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return n}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},LT=(e,n)=>{try{return typeof e!="function"||typeof n!="function"?!1:e.toString()===n.toString()}catch{return!1}},Cx=(e,n,r=[],i=new WeakSet)=>{if(e===n)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof n=="function"){const p=LT(e,n);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:n,sameFunction:p}],hasDeepChanges:!p}}if(e===null||n===null||e===void 0||n===void 0||typeof e!="object"||typeof n!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:n}],hasDeepChanges:!0};if(i.has(e)||i.has(n))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};i.add(e),i.add(n);const s=e,c=n,u=new Set([...Object.keys(s),...Object.keys(c)]),f=[];let h=!1;for(const p of u){const y=s[p],m=c[p];if(y!==m)if(typeof y=="object"&&typeof m=="object"&&y!==null&&m!==null){const b=Cx(y,m,[...r,p],i);f.push(...b.changes),b.hasDeepChanges&&(h=!0)}else f.push({path:[...r,p],prevValue:y,currentValue:m}),h=!0}return{type:"object",changes:f,hasDeepChanges:h}},nr=e=>e.length===0?"":e.reduce((n,r,i)=>/^\d+$/.test(r)?`${n}[${r}]`:i===0?r:`${n}.${r}`,"");function jT(e){const n=e.replace(/\s+/g," ").trim(),r=[];let i="";for(let E=0;E<n.length;E++){const A=n[E];if(A==="="&&n[E+1]===">"){i.trim()&&r.push(i.trim()),r.push("=>"),i="",E++;continue}/[(){}[\];,<>:\?!]/.test(A)?(i.trim()&&r.push(i.trim()),r.push(A),i=""):/\s/.test(A)?(i.trim()&&r.push(i.trim()),i=""):i+=A}i.trim()&&r.push(i.trim());const s=[];for(let E=0;E<r.length;E++){const A=r[E],L=r[E+1];A==="("&&L===")"||A==="["&&L==="]"||A==="{"&&L==="}"||A==="<"&&L===">"?(s.push(A+L),E++):s.push(A)}const c=new Set,u=new Set;function f(E,A,L){let U=0;for(let F=L;F<s.length;F++){const B=s[F];if(B===E)U++;else if(B===A&&(U--,U===0))return F}return-1}for(let E=0;E<s.length;E++)if(s[E]==="("){const L=f("(",")",E);if(L!==-1&&s[L+1]==="=>")for(let U=E;U<=L;U++)c.add(U)}for(let E=1;E<s.length;E++){const A=s[E-1],L=s[E];if(/^[a-zA-Z0-9_$]+$/.test(A)&&L==="<"){const U=f("<",">",E);if(U!==-1)for(let F=E;F<=U;F++)u.add(F)}}let h=0;const p="  ",y=[];let m="";function b(){m.trim()&&y.push(m.replace(/\s+$/,"")),m=""}function w(){b(),m=p.repeat(h)}const S=[];function T(){return S.length?S[S.length-1]:null}function R(E,A=!1){m.trim()?A||/^[),;:\].}>]$/.test(E)?m+=E:m+=` ${E}`:m+=E}for(let E=0;E<s.length;E++){const A=s[E],L=s[E+1]||"";if(["(","{","[","<"].includes(A)){if(R(A),S.push(A),A==="{")h++,w();else if((A==="("||A==="["||A==="<")&&!(c.has(E)&&A==="("||u.has(E)&&A==="<")){const U={"(":")","[":"]","<":">"}[A];L!==U&&L!=="()"&&L!=="[]"&&L!=="<>"&&(h++,w())}}else if([")","}","]",">"].includes(A)){const U=T();A===")"&&U==="("||A==="]"&&U==="["||A===">"&&U==="<"?!(c.has(E)&&A===")")&&!(u.has(E)&&A===">")&&(h=Math.max(h-1,0),w()):A==="}"&&U==="{"&&(h=Math.max(h-1,0),w()),S.pop(),R(A),A==="}"&&w()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(A))R(A);else if(A==="=>")R(A);else if(A===";")R(A,!0),w();else if(A===","){R(A,!0);const U=T();!(c.has(E)&&U==="(")&&!(u.has(E)&&U==="<")&&U&&["{","[","(","<"].includes(U)&&w()}else R(A)}return b(),y.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var gp=(e,n=!1)=>{try{const r=e.toString(),i=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!i)return"ƒ";const c=(i[1]||i[2]||"").replace(/\s+/g,"");return n?jT(r):`ƒ (${c}) => ...`}catch{return"ƒ"}},bu=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return gp(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const n=Object.keys(e);return`{${n.length>2?`${n.slice(0,2).join(", ")}, ...`:n.join(", ")}}`}return String(e)},UT=e=>{if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const n=Object.getPrototypeOf(e);return n===Promise.prototype||n?.constructor?.name==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},So=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),HT=e=>{const n=si(e);return{displayName:qt(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:n?.selfTime??null,totalTime:n?.totalTime??null}},cm=new Map,Rx=new Map,um=new Map,vp=null,BT=/\[(?<name>\w+),\s*set\w+\]/g,FT=e=>{const n=e.type?.toString?.()||"";return n?Array.from(n.matchAll(BT),r=>r.groups?.name??""):[]},PT=()=>{cm.clear(),Rx.clear(),um.clear(),vp=null},$T=e=>{const n=e.type!==vp;return vp=e.type,n},bh=(e,n,r,i)=>{const s=e.get(n),c=e===cm||e===um,u=!Ma(r,i);if(!s)return e.set(n,{count:u&&c?1:0,currentValue:r,previousValue:i,lastUpdated:Date.now()}),{hasChanged:u,count:u&&c?1:c?0:1};if(!Ma(s.currentValue,r)){const f=s.count+1;return e.set(n,{count:f,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:f}}return{hasChanged:!1,count:s.count}},nb=e=>{if(!e)return{};if(e.tag===Uu||e.tag===Hu||e.tag===gl||e.tag===ml){let n=e.memoizedState;const r={};let i=0;for(;n;)n.queue&&n.memoizedState!==void 0&&(r[i]=n.memoizedState),n=n.next,i++;return r}return e.tag===bi?e.memoizedState||{}:{}},dm=e=>{const n=e.memoizedProps||{},r=e.alternate?.memoizedProps||{},i={},s={},c=Object.keys(n);for(const f of c)f in n&&(i[f]=n[f],s[f]=r[f]);const u=Ex(e).map(f=>({name:f.name,value:f.value,prevValue:f.prevValue}));return{current:i,prev:s,changes:u}},fm=e=>{const n=nb(e),r=e.alternate?nb(e.alternate):{},i=[];for(const[s,c]of Object.entries(n)){const u=e.tag===bi?s:Number(s);e.alternate&&!Ma(r[s],c)&&i.push({name:u,value:c,prevValue:r[s]})}return{current:n,prev:r,changes:i}},hm=e=>{const n=ab(e),r=e.alternate?ab(e.alternate):new Map,i={},s={},c=[],u=new Set;for(const[f,h]of n){const p=h.displayName,y=f;if(u.has(y))continue;u.add(y),i[p]=h.value;const m=r.get(f);m&&(s[p]=m.value,Ma(m.value,h.value)||c.push({name:p,value:h.value,prevValue:m.value,contextType:f}))}return{current:i,prev:s,changes:c}},IT=e=>{const n=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:n(),fiberState:n(),fiberContext:n()},shouldUpdate:!1};let r=!1;const i=$T(e),s=n();if(e.memoizedProps){const{current:m,changes:b}=dm(e);for(const[w,S]of Object.entries(m))s.current.push({name:w,value:So(S)?{type:"promise",displayValue:"Promise"}:S});for(const w of b){const{hasChanged:S,count:T}=bh(cm,w.name,w.value,w.prevValue);S&&(r=!0,s.changes.add(w.name),s.changesCounts.set(w.name,T))}}const c=n(),{current:u,changes:f}=fm(e);for(const[m,b]of Object.entries(u)){const w=e.tag===bi?m:Number(m);c.current.push({name:w,value:b})}for(const m of f){const{hasChanged:b,count:w}=bh(Rx,m.name,m.value,m.prevValue);b&&(r=!0,c.changes.add(m.name),c.changesCounts.set(m.name,w))}const h=n(),{current:p,changes:y}=hm(e);for(const[m,b]of Object.entries(p))h.current.push({name:m,value:b});if(!i)for(const m of y){const{hasChanged:b,count:w}=bh(um,m.name,m.value,m.prevValue);b&&(r=!0,h.changes.add(m.name),h.changesCounts.set(m.name,w))}return!r&&!i&&(s.changes.clear(),c.changes.clear(),h.changes.clear()),{data:{fiberProps:s,fiberState:c,fiberContext:h},shouldUpdate:r||i}},rb=new WeakMap,ab=e=>{if(!e)return new Map;const n=rb.get(e);if(n)return n;const r=new Map;let i=e;for(;i;){const s=i.dependencies;if(s?.firstContext){let c=s.firstContext;for(;c;){const u=c.memoizedValue,f=c.context?.displayName;if(r.has(u)||r.set(c.context,{value:u,displayName:f??"UnnamedContext",contextType:null}),c===c.next)break;c=c.next}}i=i.return}return rb.set(e,r),r},ib=e=>{const n=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:n(),fiberState:n(),fiberContext:n()};const r=n();if(e.memoizedProps){const{current:f,changes:h}=dm(e);for(const[p,y]of Object.entries(f))r.current.push({name:p,value:So(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)r.changes.add(p.name),r.changesCounts.set(p.name,1)}const i=n();if(e.memoizedState){const{current:f,changes:h}=fm(e);for(const[p,y]of Object.entries(f))i.current.push({name:p,value:So(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)i.changes.add(p.name),i.changesCounts.set(p.name,1)}const s=n(),{current:c,changes:u}=hm(e);for(const[f,h]of Object.entries(c))s.current.push({name:f,value:So(h)?{type:"promise",displayValue:"Promise"}:h});for(const f of u)s.changes.add(f.name),s.changesCounts.set(f.name,1);return{fiberProps:r,fiberState:i,fiberContext:s}},yp=0,ob=performance.now(),wh=0,sb=!1,Nx=()=>{wh++;const e=performance.now();e-ob>=1e3&&(yp=wh,wh=0,ob=e),requestAnimationFrame(Nx)},Ax=()=>(sb||(sb=!0,Nx(),yp=60),yp),VT=e=>{if(!e)return[];const n=[];if(e.tag===Uu||e.tag===Hu||e.tag===gl||e.tag===ml){let r=e.memoizedState,i=e.alternate?.memoizedState,s=0;for(;r;){if(r.queue&&r.memoizedState!==void 0){const c={type:2,name:s.toString(),value:r.memoizedState,prevValue:i?.memoizedState};Ma(c.prevValue,c.value)||n.push(c)}r=r.next,i=i?.next,s++}return n}if(e.tag===bi){const r={type:3,name:"state",value:e.memoizedState,prevValue:e.alternate?.memoizedState};return Ma(r.prevValue,r.value)||n.push(r),n}return n},xh=0,lb=new WeakMap,qT=e=>{const n=lb.get(e);return n||(xh++,lb.set(e,xh),xh)};function YT(e,n){if(!e||!n)return;const r=e.memoizedValue,i={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:qT(e.context)};this.push(i)}var XT=e=>{const n=[];return C2(e,YT.bind(n)),n},Ox=new Map,cb=!1,_h=()=>Array.from(Ox.values()),GT=16,bp=new WeakMap;function Mx(e){return String(Oa(e))}function zx(e){const n=Mx(e),r=bp.get(wi(e));if(r)return r.get(n)}function ZT(e,n){const r=wi(e.type),i=Mx(e);let s=bp.get(r);s||(s=new Map,bp.set(r,s)),s.set(i,n)}var QT=(e,n,r,i,s)=>{const c=Date.now(),u=zx(e);if((i||s)&&(!u||c-(u.lastRenderTimestamp||0)>GT)){const f=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:c};f.renderCount=(f.renderCount||0)+1,f.selfTime=n||0,f.totalTime=r||0,f.lastRenderTimestamp=c,ZT(e,{...f})}},WT=(e,n)=>{const r={isPaused:Bt(!Xe.options.value.enabled),fiberRoots:new WeakSet};return Ox.set(e,{key:e,config:n,instrumentation:r}),cb||(cb=!0,L2({name:"react-scan",onActive:n.onActive,onCommitFiberRoot(i,s){r.fiberRoots.add(s);const c=_h();for(const u of c)u.config.onCommitStart();D2(s.current,(u,f)=>{const h=wi(u.type);if(!h)return null;const p=_h(),y=[];for(let A=0,L=p.length;A<L;A++)p[A].config.isValidFiber(u)&&y.push(A);if(!y.length)return null;const m=[];if(p.some(A=>A.config.trackChanges)){const A=dm(u).changes,L=fm(u).changes,U=hm(u).changes;m.push.apply(null,A.map(F=>({type:1,name:F.name,value:F.value})));for(const F of L)u.tag===bi?m.push({type:3,name:F.name.toString(),value:F.value}):m.push({type:2,name:F.name.toString(),value:F.value});m.push.apply(null,U.map(F=>({type:4,name:F.name,value:F.value,contextType:Number(F.contextType)})))}const{selfTime:b,totalTime:w}=si(u),S=Ax(),T={phase:yk[f],componentName:qt(h),count:1,changes:m,time:b,forget:tl(u),unnecessary:null,didCommit:Vp(u),fps:S},R=m.length>0,E=R2(u).length>0;f==="update"&&QT(u,b,w,R,E);for(let A=0,L=y.length;A<L;A++){const U=y[A];p[U].config.onRender(u,[T])}});for(const u of c)u.config.onCommitFinish()},onPostCommitFiberRoot(){const i=_h();for(const s of i)s.config.onPostCommitFiberRoot()}})),r},KT=e=>{const n=new Map;for(let r=0,i=e.length;r<i;r++){const s=e[r];if(!s.componentName)continue;const c=n.get(s.componentName)??[],u=gk([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((p,y)=>p|y.type,0),unstable:s.changes.some(p=>p.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let f=null,h=null;if(s.changes)for(let p=0,y=s.changes.length;p<y;p++){const{name:m,prevValue:b,nextValue:w,unstable:S,type:T}=s.changes[p];T===1?(f??={},h??={},f[`${S?"⚠️":""}${m} (prev)`]=b,h[`${S?"⚠️":""}${m} (next)`]=w):c.push({prev:b,next:w,type:T===4?"context":"state",unstable:S??!1})}f&&h&&c.push({prev:f,next:h,type:"props",unstable:!1}),n.set(u,c)}for(const[r,i]of Array.from(n.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:c,next:u,unstable:f}of i)console.log(`${s}:`,f?"⚠️":"",c,"!==",u);console.groupEnd()}},JT=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},ub=7,eE="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",tE=.1,Fc=(e,n)=>Math.floor(e+(n-e)*tE),nE=4,wu=40,Sh=45,kh="115,97,230";function rE(e,n){return n[0]-e[0]}function aE(e){return[...e.entries()].sort(rE)}function db([e,n]){let r=`${n.slice(0,nE).join(", ")} ×${e}`;return r.length>wu&&(r=`${r.slice(0,wu)}…`),r}var fb=e=>{const n=new Map;for(const{name:c,count:u}of e)n.set(c,(n.get(c)||0)+u);const r=new Map;for(const[c,u]of n){const f=r.get(u);f?f.push(c):r.set(u,[c])}const i=aE(r);let s=db(i[0]);for(let c=1,u=i.length;c<u;c++)s+=", "+db(i[c]);return s.length>wu?`${s.slice(0,wu)}…`:s},hb=e=>{let n=0;for(const r of e)n+=r.width*r.height;return n},iE=(e,n)=>{for(const{id:r,name:i,count:s,x:c,y:u,width:f,height:h,didCommit:p}of n){const y={id:r,name:i,count:s,x:c,y:u,width:f,height:h,frame:0,targetX:c,targetY:u,targetWidth:f,targetHeight:h,didCommit:p},m=String(y.id),b=e.get(m);b?(b.count++,b.frame=0,b.targetX=c,b.targetY=u,b.targetWidth=f,b.targetHeight=h,b.didCommit=p):e.set(m,y)}},oE=(e,n,r)=>{for(const i of e.values()){const s=i.x-n,c=i.y-r;i.targetX=s,i.targetY=c}},sE=(e,n)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},lE=(e,n,r,i)=>{e.clearRect(0,0,n.width/r,n.height/r);const s=new Map,c=new Map;for(const h of i.values()){const{x:p,y,width:m,height:b,targetX:w,targetY:S,targetWidth:T,targetHeight:R,frame:E}=h;w!==p&&(h.x=Fc(p,w)),S!==y&&(h.y=Fc(y,S)),T!==m&&(h.width=Fc(m,T)),R!==b&&(h.height=Fc(b,R));const A=`${w??p},${S??y}`,L=`${A},${T??m},${R??b}`,U=s.get(A);U?U.push(h):s.set(A,[h]);const F=1-E/Sh;h.frame++;const B=c.get(L)||{x:p,y,width:m,height:b,alpha:F};F>B.alpha&&(B.alpha=F),c.set(L,B)}for(const{x:h,y:p,width:y,height:m,alpha:b}of c.values())e.strokeStyle=`rgba(${kh},${b})`,e.lineWidth=1,e.beginPath(),e.rect(h,p,y,m),e.stroke(),e.fillStyle=`rgba(${kh},${b*.1})`,e.fill();e.font=`11px ${eE}`;const u=new Map;e.textRendering="optimizeSpeed";for(const h of s.values()){const p=h[0],{x:y,y:m,frame:b}=p,w=1-b/Sh,S=fb(h),{width:T}=e.measureText(S);if(u.set(`${y},${m},${T},${S}`,{text:S,width:T,height:11,alpha:w,x:y,y:m,outlines:h}),b>Sh)for(const E of h)i.delete(String(E.id))}const f=Array.from(u.entries()).sort(([h,p],[y,m])=>hb(m.outlines)-hb(p.outlines));for(const[h,p]of f)if(u.has(h))for(const[y,m]of u.entries()){if(h===y)continue;const{x:b,y:w,width:S,height:T}=p,{x:R,y:E,width:A,height:L}=m;b+S>R&&R+A>b&&w+T>E&&E+L>w&&(p.text=fb(p.outlines.concat(m.outlines)),p.width=e.measureText(p.text).width,u.delete(y))}for(const h of u.values()){const{x:p,y,alpha:m,width:b,height:w,text:S}=h;let T=y-w-4;T<0&&(T=0),e.fillStyle=`rgba(${kh},${m})`,e.fillRect(p,T,b+4,w+4),e.fillStyle=`rgba(255,255,255,${m})`,e.fillText(S,p+2,T+w)}return i.size>0},cE='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',wr=null,xu=null,ui=null,qn=1,_u=null,pm=new Map,Ws=new Map,bo=new Set,uE=e=>{if(!Fu(e))return;const n=typeof e.type=="string"?e.type:qt(e);if(!n)return;const r=Ws.get(e),i=N2(e),s=Vp(e);r?r.count++:(Ws.set(e,{name:n,count:1,elements:i.map(c=>c.stateNode),didCommit:s?1:0}),bo.add(e))},dE=e=>{const n=e[0];if(e.length===1)return n;let r,i,s,c;for(let u=0,f=e.length;u<f;u++){const h=e[u];r=r==null?h.x:Math.min(r,h.x),i=i==null?h.y:Math.min(i,h.y),s=s==null?h.x+h.width:Math.max(s,h.x+h.width),c=c==null?h.y+h.height:Math.max(c,h.y+h.height)}return r==null||i==null||s==null||c==null?e[0]:new DOMRect(r,i,s-r,c-i)};function fE(e,n){const r=[];for(const i of e){const s=i.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(i))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(n.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var Dx=async function*(e){const n={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(fE.bind(n));for(const i of n.uniqueElements)r.observe(i);for(;!n.done;){const i=await new Promise(s=>{n.resolveNext=s});i.length>0&&(yield i)}},hE=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,pE=async()=>{const e=[];for(const r of bo){const i=Ws.get(r);if(i)for(let s=0;s<i.elements.length;s++)i.elements[s]instanceof Element&&e.push(i.elements[s])}const n=new Map;for await(const r of Dx(e)){for(const u of r){const f=u.target,h=u.intersectionRect;u.isIntersecting&&h.width&&h.height&&n.set(f,h)}const i=[],s=[],c=[];for(const u of bo){const f=Ws.get(u);if(!f)continue;const h=[];for(let p=0;p<f.elements.length;p++){const y=f.elements[p],m=n.get(y);m&&h.push(m)}h.length&&(i.push(f),s.push(dE(h)),c.push(Oa(u)))}if(i.length>0){const u=new hE(i.length*ub*4),f=new Float32Array(u),h=new Array(i.length);let p;for(let y=0,m=i.length;y<m;y++){const b=i[y],w=c[y],{x:S,y:T,width:R,height:E}=s[y],{count:A,name:L,didCommit:U}=b;if(wr){const F=y*ub;f[F]=w,f[F+1]=A,f[F+2]=S,f[F+3]=T,f[F+4]=R,f[F+5]=E,f[F+6]=U,h[y]=L}else p||=new Array(i.length),p[y]={id:w,name:L,count:A,x:S,y:T,width:R,height:E,didCommit:U}}wr?wr.postMessage({type:"draw-outlines",data:u,names:h}):xu&&ui&&p&&(iE(pm,p),_u||(_u=requestAnimationFrame(mm)))}}for(const r of bo)Ws.delete(r),bo.delete(r)},mm=()=>{if(!ui||!xu)return;lE(ui,xu,qn,pm)?_u=requestAnimationFrame(mm):_u=null},mE=typeof OffscreenCanvas<"u"&&typeof Worker<"u",pb=()=>Math.min(window.devicePixelRatio||1,2),gE=()=>{vE();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const n=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),n.appendChild(r),!r)return null;qn=pb(),xu=r;const{innerWidth:i,innerHeight:s}=window;r.style.width=`${i}px`,r.style.height=`${s}px`;const c=i*qn,u=s*qn;if(r.width=c,r.height=u,mE&&!window.__REACT_SCAN_EXTENSION__)try{wr=new Worker(URL.createObjectURL(new Blob([cE],{type:"application/javascript"})));const m=r.transferControlToOffscreen();wr?.postMessage({type:"init",canvas:m,width:r.width,height:r.height,dpr:qn},[m])}catch(m){console.warn("Failed to initialize OffscreenCanvas worker:",m)}wr||(ui=sE(r,qn));let f=!1;window.addEventListener("resize",()=>{f||(f=!0,setTimeout(()=>{const m=window.innerWidth,b=window.innerHeight;qn=pb(),r.style.width=`${m}px`,r.style.height=`${b}px`,wr?wr.postMessage({type:"resize",width:m,height:b,dpr:qn}):(r.width=m*qn,r.height=b*qn,ui&&(ui.resetTransform(),ui.scale(qn,qn)),mm()),f=!1}))});let h=window.scrollX,p=window.scrollY,y=!1;return window.addEventListener("scroll",()=>{y||(y=!0,setTimeout(()=>{const{scrollX:m,scrollY:b}=window,w=m-h,S=b-p;h=m,p=b,wr?wr.postMessage({type:"scroll",deltaX:w,deltaY:S}):requestAnimationFrame(oE.bind(null,pm,w,S)),y=!1},16*2))}),setInterval(()=>{bo.size&&requestAnimationFrame(pE)},16*2),n.appendChild(r),e},mb=()=>globalThis.__REACT_SCAN_STOP__,vE=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},yE=e=>{if(Fu(e)&&Xe.options.value.showToolbar!==!1&&ge.inspectState.value.kind==="focused"){const n=e,{selfTime:r}=si(e),i=qt(e.type),s=Oa(n),c=ge.reportData.get(s),u=c?.count??0,f=c?.time??0,h=[],p=ge.changesListeners.get(Oa(e));if(p?.length){const m=Ex(e).map(T=>({type:1,name:T.name,value:T.value,prevValue:T.prevValue,unstable:!1})),b=VT(e),S=XT(e).map(T=>({name:T.name,type:4,value:T.value,contextType:T.contextType}));p.forEach(T=>{T({propsChanges:m,stateChanges:b,contextChanges:S})})}const y={count:u+1,time:f+r||0,renders:[],displayName:i,type:wi(e.type)||null,changes:h};ge.reportData.set(s,y),wp=!0}},wp=!1,gb,bE=()=>{clearInterval(gb),gb=setInterval(()=>{wp&&(ge.lastReportTime.value=Date.now(),wp=!1)},50)},wE=e=>!fR.has(e.memoizedProps),xE=e=>{if(mb())return;let n,r=!1;const i=()=>{r||(n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{r=!0;const c=gE();c&&document.documentElement.appendChild(c),e()}))},s=WT("react-scan-devtools-0.1.0",{onCommitStart:()=>{Xe.options.value.onCommitStart?.()},onActive:()=>{mb()||(i(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Xe}),bE(),JT())},onError:()=>{},isValidFiber:wE,onRender:(c,u)=>{Fu(c)&&ge.interactionListeningForRenders?.(c,u);const f=Xe.instrumentation?.isPaused.value,h=ge.inspectState.value.kind==="inspect-off"||ge.inspectState.value.kind==="uninitialized";f&&h||(f||uE(c),Xe.options.value.log&&KT(u),ge.inspectState.value.kind==="focused"&&(om.value=Date.now()),h||yE(c),Xe.options.value.onRender?.(c,u))},onCommitFinish:()=>{i(),Xe.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){i()},trackChanges:!1});Xe.instrumentation=s},_E=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,SE=(e,n,r=n)=>{const[i,s]=Be(e);return je(()=>{if(e===i)return;const u=setTimeout(()=>s(e),e?n:r);return()=>clearTimeout(u)},[e,n,r]),i},kE=xi(()=>H("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Vu.value&&"-translate-y-[200%]")),TE=()=>{const e=ke(null),n=ke(null),[r,i]=Be(null);al(()=>{const c=ge.inspectState.value;c.kind==="focused"&&i(c.fiber)}),al(()=>{const c=sn.value;sp(()=>{if(ge.inspectState.value.kind!=="focused"||!e.current||!n.current)return;const{totalUpdates:u,currentIndex:f,updates:h,isVisible:p,windowOffset:y}=c,m=Math.max(0,u-1),b=p?`#${y+f} Re-render`:m>0?`×${m}`:"";let w;if(m>0&&f>=0&&f<h.length){const S=h[f]?.fiberInfo?.selfTime;w=S>0?S<.1-Number.EPSILON?"< 0.1ms":`${Number(S.toFixed(1))}ms`:void 0}e.current.dataset.text=b?` • ${b}`:"",n.current.dataset.text=w?` • ${w}`:""})});const s=cr(()=>{if(!r)return null;const{name:c,wrappers:u,wrapperTypes:f}=il(r),h=u.length?`${u.join("(")}(${c})${")".repeat(u.length)}`:c??"",p=f[0];return v("span",{title:h,className:"flex items-center gap-x-1",children:[c??"Unknown",v("span",{title:p?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!p&&v(qe,{children:[v("span",{className:H("rounded py-[1px] px-1","truncate",p.compiler&&"bg-purple-800 text-neutral-400",!p.compiler&&"bg-neutral-700 text-neutral-300",p.type==="memo"&&"bg-[#5f3f9a] text-white"),children:p.type},p.type),p.compiler&&v("span",{className:"text-yellow-300",children:"✨"})]})}),f.length>1&&v("span",{className:"text-[10px] text-neutral-400",children:["×",f.length-1]})]})},[r]);return v("div",{className:kE,children:[s,v("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[v("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),v("span",{ref:n,className:"with-data-text !overflow-visible"})]})]})},EE=()=>{const e=SE(ge.inspectState.value.kind==="focused",150,0),n=()=>{ut.value={view:"none"},ge.inspectState.value={kind:"inspect-off"}};if(ut.value.view!=="notifications")return v("div",{className:"react-scan-header",children:[v("div",{className:"relative flex-1 h-full",children:v("div",{className:H("react-scan-header-item is-visible",!e&&"!duration-0"),children:v(TE,{})})}),v("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:n,children:v(wt,{name:"icon-close"})})]})},CE=({className:e,...n})=>v("div",{className:H("react-scan-toggle",e),children:[v("input",{type:"checkbox",...n}),v("div",{})]}),RE=({fps:e})=>{const n=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return v("div",{className:H("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[v("div",{style:{color:n(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),v("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},NE=()=>{const[e,n]=Be(null);return je(()=>{const r=setInterval(()=>{n(Ax())},200);return()=>clearInterval(r)},[]),v("div",{className:H("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?v(qe,{children:"️"}):v(RE,{fps:e})})},ar=()=>Tr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",lr=e=>e(),Ht=class Lx extends Array{constructor(n=25){super(),this.capacity=n}push(...n){const r=super.push(...n);for(;this.length>this.capacity;)this.shift();return r}static fromArray(n,r){const i=new Lx(r);return i.push(...n),i}},AE=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(n=>n(e))}getCurrentState(){return this.currentValue}},jx=150,vb=new AE(new Ht(jx)),br=50,OE=class{constructor(){this.channels={}}publish(e,n,r=!0){const i=this.channels[n];if(!i){if(!r)return;this.channels[n]={callbacks:new Ht(br),state:new Ht(br)},this.channels[n].state.push(e);return}i.state.push(e),i.callbacks.forEach(s=>s(e))}getAvailableChannels(){return Ht.fromArray(Object.keys(this.channels),br)}subscribe(e,n,r=!1){const i=()=>(r||this.channels[e].state.forEach(c=>{n(c)}),()=>{const c=this.channels[e].callbacks.filter(u=>u!==n);this.channels[e].callbacks=Ht.fromArray(c,br)}),s=this.channels[e];return s?(s.callbacks.push(n),i()):(this.channels[e]={callbacks:new Ht(br),state:new Ht(br)},this.channels[e].callbacks.push(n),i())}updateChannelState(e,n,r=!0){const i=this.channels[e];if(!i){if(!r)return;const s=new Ht(br),c={callbacks:new Ht(br),state:s};this.channels[e]=c,c.state=n(s);return}i.state=n(i.state)}getChannelState(e){return this.channels[e].state??new Ht(br)}},Su=new OE,Ux={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Hs={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},ME=(e,n=Ux)=>{const r=[];return n.skipProviders&&r.push(...Hs.providers),n.skipHocs&&r.push(...Hs.hocs),n.skipContainers&&r.push(...Hs.containers),n.skipUtilities&&r.push(...Hs.utilities),n.skipBoundaries&&r.push(...Hs.boundaries),!r.some(i=>i.test(e))},yb=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],zE=e=>{for(let c=0;c<yb.length;c++)if(yb[c].test(e))return!0;const n=!/[aeiou]/i.test(e),r=(e.match(/\d/g)?.length??0)>e.length/2,i=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(n)+Number(r)+Number(i)+Number(s)>=2},DE=(e,n=Ux)=>{if(!e)return[];if(!qt(e.type))return[];const i=new Array;let s=e;for(;s.return;){const u=LE(s.type);u&&!zE(u)&&ME(u,n)&&u.toLowerCase()!==u&&i.push(u),s=s.return}const c=new Array(i.length);for(let u=0;u<i.length;u++)c[u]=i[i.length-u-1];return c},LE=e=>{const n=qt(e);return n?n.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},jE=(e,n=()=>!0)=>{let r=e;for(;r;){const i=qt(r.type);if(i&&n(i))return i;r=r.return}return null},bb,xp="never-hidden",UE=()=>{bb?.();const e=()=>{document.hidden&&(xp=Date.now())};document.addEventListener("visibilitychange",e),bb=()=>{document.removeEventListener("visibilitychange",e)}},HE=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),Th=null,BE=e=>{UE();const n=new Map,r=new Map,i=c=>{if(!c.interactionId)return;if(c.interactionId&&c.target&&!r.has(c.interactionId)&&r.set(c.interactionId,c.target),c.target){let f=c.target;for(;f;){if(f.id==="react-scan-toolbar-root"||f.id==="react-scan-root")return;f=f.parentElement}}const u=n.get(c.interactionId);if(u)c.duration>u.latency?(u.entries=[c],u.latency=c.duration):c.duration===u.latency&&c.startTime===u.entries[0].startTime&&u.entries.push(c);else{const f=HE(c.name);if(!f)return;const h={id:c.interactionId,latency:c.duration,entries:[c],target:c.target,type:f,startTime:c.startTime,endTime:Date.now(),processingStart:c.processingStart,processingEnd:c.processingEnd,duration:c.duration,inputDelay:c.processingStart-c.startTime,processingDuration:c.processingEnd-c.processingStart,presentationDelay:c.duration-(c.processingEnd-c.startTime),timestamp:Date.now(),timeSinceTabInactive:xp==="never-hidden"?"never-hidden":Date.now()-xp,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};n.set(h.id,h),Th||(Th=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(n.get(h.id)),Th=null})}))}},s=new PerformanceObserver(c=>{const u=c.getEntries();for(let f=0,h=u.length;f<h;f++){const p=u[f];i(p)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},FE=()=>BE(e=>{Su.publish({kind:"entry-received",entry:e},"recording")}),iu=25,Vr=new Ht(iu),PE=(e,n)=>{let r=null;for(const i of n){if(i.type!==e.type)continue;if(r===null){r=i;continue}const s=(c,u)=>Math.abs(c.startDateTime)-(u.startTime+u.timeOrigin);s(i,e)<s(r,e)&&(r=i)}return r},$E=e=>Su.subscribe("recording",r=>{const i=r.kind==="auto-complete-race"?Vr.find(c=>c.interactionUUID===r.interactionUUID):PE(r.entry,Vr);if(!i)return;const s=i.completeInteraction(r);e(s)}),IE=({onMicroTask:e,onRAF:n,onTimeout:r,abort:i})=>{queueMicrotask(()=>{i?.()!==!0&&e()&&requestAnimationFrame(()=>{i?.()!==!0&&n()&&setTimeout(()=>{i?.()!==!0&&r()},0)})})},VE=e=>{const n=Tx(e);if(!n)return;let r=n?qt(n?.type):"N/A";return r||(r=jE(n,s=>s.length>2)??"N/A"),r?{componentPath:DE(n),childrenTree:{},componentName:r,elementFiber:n}:void 0},wb=(e,n)=>{let r=null;const i=h=>{switch(e){case"pointer":return h.phase==="start"?"pointerup":h.target instanceof HTMLInputElement||h.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return h.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:ar(),stageStart:Date.now(),interactionType:e}},c=h=>{if(h.composedPath().some(T=>T instanceof Element&&T.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:ar(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const y=performance.now();n?.onStart?.(s.current.interactionUUID);const m=VE(h.target);if(!m){n?.onError?.(s.current.interactionUUID);return}const b={},w=Hx(b);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:m.childrenTree,componentName:m.componentName,componentPath:m.componentPath,fiberRenders:b,kind:"interaction-start",interactionStartDetail:y,stopListeningForRenders:w};const S=i({phase:"end",target:h.target});document.addEventListener(S,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(S,u)})};document.addEventListener(i({phase:"start"}),c,{capture:!0});const u=(h,p,y)=>{if(s.current.kind!=="interaction-start"&&p===r){if(e==="pointer"&&h.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:ar(),stageStart:Date.now(),interactionType:e};return}n?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:ar(),stageStart:Date.now(),interactionType:e};return}r=p,IE({abort:y,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?(n?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:ar(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(s.current.kind!=="raf-stage"){n?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:ar(),stageStart:Date.now(),interactionType:e};return}const m=Date.now(),b=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:m,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:ar(),stageStart:m,interactionType:e};let w=!1;const S=R=>{w=!0;const E=R.kind==="auto-complete-race"?R.detailedTiming.commitEnd-R.detailedTiming.interactionStartDetail:R.entry.latency,A={detailedTiming:b,latency:E,completedAt:Date.now(),flushNeeded:!0};n?.onComplete?.(b.interactionUUID,A,R);const L=Vr.filter(U=>U.interactionUUID!==b.interactionUUID);return Vr=Ht.fromArray(L,iu),A},T={completeInteraction:S,endDateTime:Date.now(),startDateTime:b.blockingTimeStart,type:e,interactionUUID:b.interactionUUID};if(Vr.push(T),qE())setTimeout(()=>{if(w)return;S({kind:"auto-complete-race",detailedTiming:b,interactionUUID:b.interactionUUID});const R=Vr.filter(E=>E.interactionUUID!==b.interactionUUID);Vr=Ht.fromArray(R,iu)},1e3);else{const R=Vr.filter(E=>E.interactionUUID!==b.interactionUUID);Vr=Ht.fromArray(R,iu),S({kind:"auto-complete-race",detailedTiming:b,interactionUUID:b.interactionUUID})}}})},f=h=>{const p=ar();u(h,p,()=>p!==r)};return e==="keyboard"&&document.addEventListener("keypress",f),()=>{document.removeEventListener(i({phase:"start"}),c,{capture:!0}),document.removeEventListener("keypress",f)}},xb=e=>Yp(e,n=>{if(el(n))return!0})?.stateNode,qE=()=>"PerformanceEventTiming"in globalThis,Hx=e=>{const n=r=>{const i=qt(r.type);if(!i)return;const s=e[i];if(!s){const y=new Set,m=r.return&&_o(r.return),b=m&&qt(m[0]);b&&y.add(b);const{selfTime:w,totalTime:S}=si(r),T=ib(r),R={current:[],changes:new Set,changesCounts:new Map},E={fiberProps:T.fiberProps||R,fiberState:T.fiberState||R,fiberContext:T.fiberContext||R};e[i]={renderCount:1,hasMemoCache:tl(r),wasFiberRenderMount:_b(r),parents:y,selfTime:w,totalTime:S,nodeInfo:[{element:xb(r),name:qt(r.type)??"Unknown",selfTime:si(r).selfTime}],changes:E};return}if(_o(r)?.[0]?.type){const y=r.return&&_o(r.return),m=y&&qt(y[0]);m&&s.parents.add(m)}const{selfTime:u,totalTime:f}=si(r),h=ib(r);if(!h)return;const p={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||_b(r),s.hasMemoCache=s.hasMemoCache||tl(r),s.changes={fiberProps:Eh(s.changes?.fiberProps||p,h.fiberProps||p),fiberState:Eh(s.changes?.fiberState||p,h.fiberState||p),fiberContext:Eh(s.changes?.fiberContext||p,h.fiberContext||p)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=f,s.nodeInfo.push({element:xb(r),name:qt(r.type)??"Unknown",selfTime:si(r).selfTime})};return ge.interactionListeningForRenders=n,()=>{ge.interactionListeningForRenders===n&&(ge.interactionListeningForRenders=null)}},Eh=(e,n)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const i of n.current)r.current.some(s=>s.name===i.name)||r.current.push(i);for(const i of n.changes)if(typeof i=="string"||typeof i=="number"){r.changes.add(i);const s=e.changesCounts.get(i)||0,c=n.changesCounts.get(i)||0;r.changesCounts.set(i,s+c)}return r},_b=e=>{if(!e.alternate)return!0;const n=e.alternate,r=n&&n.memoizedState!=null&&n.memoizedState.element!=null&&n.memoizedState.isDehydrated!==!0,i=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&i},YE=e=>{let n;const r=new Set,i=(p,y)=>{const m=typeof p=="function"?p(n):p;if(!Object.is(m,n)){const b=n;n=y??(typeof m!="object"||m===null)?m:Object.assign({},n,m),r.forEach(w=>w(n,b))}},s=()=>n,f={setState:i,getState:s,getInitialState:()=>h,subscribe:(p,y)=>{let m,b;y?(m=p,b=y):b=p;let w=m?m(n):void 0;const S=(T,R)=>{if(m){const E=m(T),A=m(R);Object.is(w,E)||(w=E,b(E,A))}else b(T,R)};return r.add(S),()=>r.delete(S)}},h=n=e(i,s,f);return f},Bx=e=>YE,Pc=null;Bx()(e=>({state:{events:[]},actions:{addEvent:n=>{e(r=>({state:{events:[...r.state.events,n]}}))},clear:()=>{e({state:{events:[]}})}}}));var Ch=200,ol=Bx()((e,n)=>{const r=new Set;return{state:{events:new Ht(Ch)},actions:{addEvent:i=>{r.forEach(h=>h(i));const s=[...n().state.events,i],c=(h,p)=>{const y=s.find(m=>{if(m.kind!=="long-render"&&m.id!==h.id&&(h.data.startAt<=m.data.startAt&&h.data.endAt<=m.data.endAt&&h.data.endAt>=m.data.startAt||m.data.startAt<=h.data.startAt&&m.data.endAt>=h.data.startAt||h.data.startAt<=m.data.startAt&&h.data.endAt>=m.data.endAt))return!0});y&&p(y)},u=new Set;s.forEach(h=>{h.kind!=="interaction"&&c(h,()=>{u.add(h.id)})});const f=s.filter(h=>!u.has(h.id));e(()=>({state:{events:Ht.fromArray(f,Ch)}}))},addListener:i=>(r.add(i),()=>{r.delete(i)}),clear:()=>{e({state:{events:new Ht(Ch)}})}}}}),XE=()=>G2(ol.subscribe,ol.getState),ou=null,su=null,Rh=null,_p,GE=()=>{const e=n=>{_p=n.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),Rh=e,()=>{Rh&&document.removeEventListener("mouseover",Rh)}},ZE=()=>{const e=()=>{ou=performance.now(),su=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},Fx=150,Nh=[];function QE(){let e,n;function r(){let s=null;Pc=null,Pc={},s=Hx(Pc);const c=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{n=setTimeout(()=>{const f=performance.now(),h=f-u,p=performance.timeOrigin;Nh.push(f+p);const y=Nh.filter(S=>f+p-S<=1e3),m=y.length;Nh=y;const b=ou!==null&&su!==null?f+p-(su+ou)<100:null,w=_p!==null&&_p;if(h>Fx&&!b&&document.visibilityState==="visible"&&!w){const S=p+f,T=u+c;ol.getState().actions.addEvent({kind:"long-render",id:ar(),data:{endAt:S,startAt:T,meta:{fiberRenders:Pc,latency:h,fps:m}}})}ou=null,su=null,s?.(),r()},0)}),s}const i=r();return()=>{i(),cancelAnimationFrame(e),clearTimeout(n)}}var WE=()=>{const e=FE(),n=GE(),r=ZE(),i=QE(),s=async(h,p,y)=>{ol.getState().actions.addEvent({kind:"interaction",id:ar(),data:{startAt:p.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...p,kind:y.kind}}});const m=Su.getChannelState("recording");p.detailedTiming.stopListeningForRenders(),m.length&&Su.updateChannelState("recording",()=>new Ht(br))},c=wb("pointer",{onComplete:s}),u=wb("keyboard",{onComplete:s}),f=$E(h=>{vb.setState(Ht.fromArray(vb.getCurrentState().concat(h),jx))});return()=>{n(),r(),i(),e(),c(),f(),u()}},sl=e=>{const n=e.filter(r=>r.length>2);return n.length===0?e.at(-1)??"Unknown":n.at(-1)},Yt=e=>{switch(e.kind){case"interaction":{const{renderTime:n,otherJSTime:r,framePreparation:i,frameConstruction:s,frameDraw:c}=e;return n+r+i+s+(c??0)}case"dropped-frames":return e.otherTime+e.renderTime}},KE=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,xl=e=>{const n=Yt(e.timing);switch(e.kind){case"interaction":return n<200?"low":n<500?"needs-improvement":"high";case"dropped-frames":return n<50?"low":n<Fx?"needs-improvement":"high"}},Dn=()=>Kp(Px),Px=Jw(null),$x=({size:e=24,className:n})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:H(["lucide lucide-chevron-right",n]),children:v("path",{d:"m9 18 6-6-6-6"})}),JE=({className:e="",size:n=24,events:r=[]})=>{const i=r.includes(!0),s=r.filter(f=>f).length,c=s>99?">99":s,u=i?Math.max(n*.6,14):Math.max(n*.4,6);return v("div",{className:"relative",children:[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[v("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),v("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&Xe.options.value.showNotificationCount&&v("div",{className:H(["absolute",i?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",i?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:i?"0.5px":"0"},children:i&&c})]})},ku=({className:e="",size:n=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M18 6 6 18"}),v("path",{d:"m6 6 12 12"})]}),eC=({className:e="",size:n=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),v("path",{d:"M16 9a5 5 0 0 1 0 6"}),v("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),tC=({className:e="",size:n=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),v("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),v("path",{d:"m2 2 20 20"}),v("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),v("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),nC=({size:e=24,className:n})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:H(["lucide lucide-arrow-left",n]),children:[v("path",{d:"m12 19-7-7 7-7"}),v("path",{d:"M19 12H5"})]}),rC=({className:e="",size:n=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M14 4.1 12 6"}),v("path",{d:"m5.1 8-2.9-.8"}),v("path",{d:"m6 12-1.9 2"}),v("path",{d:"M7.2 2.2 8 5.1"}),v("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),aC=({className:e="",size:n=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M10 8h.01"}),v("path",{d:"M12 12h.01"}),v("path",{d:"M14 8h.01"}),v("path",{d:"M16 12h.01"}),v("path",{d:"M18 8h.01"}),v("path",{d:"M6 8h.01"}),v("path",{d:"M7 16h10"}),v("path",{d:"M8 12h.01"}),v("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),iC=({className:e="",size:n=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[v("circle",{cx:"12",cy:"12",r:"10"}),v("path",{d:"m4.9 4.9 14.2 14.2"})]}),oC=({className:e="",size:n=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[v("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),v("polyline",{points:"16 17 22 17 22 11"})]}),Ix=({children:e,triggerContent:n,wrapperProps:r})=>{const[i,s]=Be("closed"),[c,u]=Be(null),[f,h]=Be({width:window.innerWidth,height:window.innerHeight}),p=ke(null),y=ke(null),m=Kp(gm),b=ke(!1);je(()=>{const E=()=>{h({width:window.innerWidth,height:window.innerHeight}),w()};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const w=()=>{if(p.current&&m){const E=p.current.getBoundingClientRect(),A=m.getBoundingClientRect(),L=E.left+E.width/2,U=E.top,F=new DOMRect(L-A.left,U-A.top,E.width,E.height);u(F)}};je(()=>{w()},[p.current]),je(()=>{if(i==="opening"){const E=setTimeout(()=>s("open"),120);return()=>clearTimeout(E)}else if(i==="closing"){const E=setTimeout(()=>s("closed"),120);return()=>clearTimeout(E)}},[i]),je(()=>{const E=setInterval(()=>{!b.current&&i!=="closed"&&s("closing")},1e3);return()=>clearInterval(E)},[i]);const S=()=>{b.current=!0,w(),s("opening")},T=()=>{b.current=!1,w(),s("closing")},R=()=>{if(!c||!m)return{top:0,left:0};const E=m.getBoundingClientRect(),A=175,L=y.current?.offsetHeight||40,U=5,F=c.x+E.left,B=c.y+E.top;let ee=F,W=B-4;return ee-A/2<U?ee=U+A/2:ee+A/2>f.width-U&&(ee=f.width-U-A/2),W-L<U&&(W=B+c.height+4),{top:W-E.top,left:ee-E.left}};return v(qe,{children:[m&&c&&i!=="closed"&&J2(v("div",{ref:y,className:H(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",i==="opening"||i==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:R().top+"px",left:R().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),m),v("div",{ref:p,onMouseEnter:S,onMouseLeave:T,...r,children:n})]})},sC=({selectedEvent:e})=>{const{notificationState:n,setNotificationState:r,setRoute:i}=Dn();return v("div",{className:H(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[v("div",{className:H(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[v("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:H(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",n.route==="render-visualization"||n.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),v("button",{onClick:()=>{i({route:"other-visualization",routeMessage:null})},className:H(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",n.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),v("button",{onClick:()=>{i({route:"optimize",routeMessage:null})},className:H(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",n.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:v("span",{children:"Prompts"})})]}),v(Ix,{triggerContent:v("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const c=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!c));const u=new AudioContext;return s.audioNotificationsOptions.enabled||rm(u),c&&u.close(),{...s,audioNotificationsOptions:c?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:v("div",{className:H(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[v("span",{children:"Alerts"}),n.audioNotificationsOptions.enabled?v(eC,{size:16,className:"text-[#6E6E77]"}):v(tC,{size:16,className:"text-[#6E6E77]"})]})}),children:v(qe,{children:"Play a chime when a slowdown is recorded"})})]})},fo=e=>{let n="";return e.toSorted((i,s)=>s.totalTime-i.totalTime).slice(0,30).filter(i=>i.totalTime>5).forEach(i=>{let s="";s+="Component Name:",s+=i.name,s+=`
`,s+=`Rendered: ${i.count} times
`,s+=`Sum of self times for ${i.name} is ${i.totalTime.toFixed(0)}ms
`,i.changes.props.length>0&&(s+=`Changed props for all ${i.name} instances ("name:count" pairs)
`,i.changes.props.forEach(c=>{s+=`${c.name}:${c.count}x
`})),i.changes.state.length>0&&(s+=`Changed state for all ${i.name} instances ("hook index:count" pairs)
`,i.changes.state.forEach(c=>{s+=`${c.index}:${c.count}x
`})),i.changes.context.length>0&&(s+=`Changed context for all ${i.name} instances ("context display name (if exists):count" pairs)
`,i.changes.context.forEach(c=>{s+=`${c.name}:${c.count}x
`})),n+=s,n+=`
`}),n},lC=({renderTime:e,eHandlerTimeExcludingRenders:n,toRafTime:r,commitTime:i,framePresentTime:s,formattedReactData:c})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${n.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${i.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${c}`,cC=({interactionType:e,name:n,componentPath:r,time:i,renderTime:s,eHandlerTimeExcludingRenders:c,toRafTime:u,commitTime:f,framePresentTime:h,formattedReactData:p})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${n}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${i.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${s.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${c.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${u.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${f.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${h===null?"":`- how long it took from dom commit for the frame to be presented: ${h.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${p}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,uC=({renderTime:e,otherTime:n,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${n}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,dC=({renderTime:e,otherTime:n,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${n}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,fC=({renderTime:e,otherTime:n,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${n}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,hC=({interactionType:e,name:n,time:r,renderTime:i,eHandlerTimeExcludingRenders:s,toRafTime:c,commitTime:u,framePresentTime:f,formattedReactData:h})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${n}. This means, roughly, the component that handled the ${e} event was named ${n}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${s.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${c.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${u.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${f===null?"":`- how long it took from dom commit for the frame to be presented: ${f.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${h}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Sp=(e,n)=>lr(()=>{switch(e){case"data":switch(n.kind){case"dropped-frames":return fC({formattedReactData:fo(n.groupedFiberRenders),renderTime:n.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:n.timing.otherTime});case"interaction":return lC({commitTime:n.timing.frameConstruction,eHandlerTimeExcludingRenders:n.timing.otherJSTime,formattedReactData:fo(n.groupedFiberRenders),framePresentTime:n.timing.frameDraw,renderTime:n.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),toRafTime:n.timing.framePreparation})}case"explanation":switch(n.kind){case"dropped-frames":return dC({formattedReactData:fo(n.groupedFiberRenders),renderTime:n.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:n.timing.otherTime});case"interaction":return hC({commitTime:n.timing.frameConstruction,eHandlerTimeExcludingRenders:n.timing.otherJSTime,formattedReactData:fo(n.groupedFiberRenders),framePresentTime:n.timing.frameDraw,interactionType:n.type,name:sl(n.componentPath),renderTime:n.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Yt(n.timing),toRafTime:n.timing.framePreparation})}case"fix":switch(n.kind){case"dropped-frames":return uC({formattedReactData:fo(n.groupedFiberRenders),renderTime:n.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:n.timing.otherTime});case"interaction":return cC({commitTime:n.timing.frameConstruction,componentPath:n.componentPath.join(">"),eHandlerTimeExcludingRenders:n.timing.otherJSTime,formattedReactData:fo(n.groupedFiberRenders),framePresentTime:n.timing.frameDraw,interactionType:n.type,name:sl(n.componentPath),renderTime:n.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Yt(n.timing),toRafTime:n.timing.framePreparation})}}}),pC=({selectedEvent:e})=>{const[n,r]=Be("fix"),[i,s]=Be(!1);return v("div",{className:H(["w-full h-full"]),children:[v("div",{className:H(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[v("div",{className:H(["bg-[#18181B] p-1 rounded-t-sm"]),children:v("div",{className:H(["flex items-center gap-x-1"]),children:[v("button",{onClick:()=>r("fix"),className:H(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",n==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),v("button",{onClick:()=>r("explanation"),className:H(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",n==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),v("button",{onClick:()=>r("data"),className:H(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",n==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),v("div",{className:H(["overflow-y-auto h-full"]),children:v("pre",{className:H(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Sp(n,e)})})]}),v("button",{onClick:async()=>{const c=Sp(n,e);await navigator.clipboard.writeText(c),s(!0),setTimeout(()=>s(!1),1e3)},className:H(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[v("span",{children:i?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:H(["transition-transform duration-200",i&&"scale-110"]),children:i?v("path",{d:"M20 6L9 17l-5-5"}):v(qe,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},mC=(e,n)=>{switch(e.kind){case"dropped-frames":return[...n?[{name:"Total Processing Time",time:Yt(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...n?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:n?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:Yt(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},gC=({selectedEvent:e})=>{const[n]=Be(qu()??!1),{notificationState:r}=Dn(),[i,s]=Be(r.routeMessage?.name?[r.routeMessage.name]:[]),c=mC(e,n),u=Kp(gm);je(()=>{if(r.routeMessage?.name){const h=u?.querySelector("#overview-scroll-container"),p=u?.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(h&&p){const y=p.getBoundingClientRect().top,m=h.getBoundingClientRect().top,b=y-m;h.scrollTop=h.scrollTop+b}}},[r.route]),je(()=>{r.route==="other-visualization"&&s(h=>r.routeMessage?.name?[r.routeMessage.name]:h)},[r.route]);const f=c.reduce((h,p)=>h+p.time,0);return v("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[v("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:v("div",{className:"flex items-center justify-between",children:[v("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),v("span",{className:"text-xs text-zinc-400",children:["Total: ",f.toFixed(0),"ms"]})]})}),v("div",{className:"divide-y divide-zinc-800",children:c.map(h=>{const p=i.includes(h.kind);return v("div",{id:`react-scan-overview-bar-${h.kind}`,children:[v("button",{onClick:()=>s(y=>y.includes(h.kind)?y.filter(m=>m!==h.kind):[...y,h.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:v("div",{className:"flex-1",children:[v("div",{className:"flex items-center justify-between mb-2",children:[v("div",{className:"flex items-center gap-0.5",children:[v("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${p?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),v("span",{className:"font-medium flex items-center text-left",children:h.name})]}),v("span",{className:" text-zinc-400",children:[h.time.toFixed(0),"ms"]})]}),v("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:v("div",{className:`h-full ${h.color} transition-all`,style:{width:`${h.time/f*100}%`}})})]})}),p&&v("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:v("p",{className:" text-zinc-400 mb-4 text-xs",children:lr(()=>{switch(e.kind){case"interaction":switch(h.kind){case"render":return v(ho,{input:yC(e)});case"other-javascript":return v(ho,{input:bC(e)});case"other-not-javascript":return v(ho,{input:vC(e)})}case"dropped-frames":switch(h.kind){case"total-processing-time":return v(ho,{input:{kind:"total-processing",data:{time:Yt(e.timing)}}});case"render":return v(qe,{children:v(ho,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((y,m)=>m.totalTime-y.totalTime).slice(0,3).map(y=>({name:y.name,percentage:y.totalTime/Yt(e.timing)}))}}})});case"other-frame-drop":return v(ho,{input:{kind:"other"}})}}})})})]},h.kind)})})]})},vC=e=>{const n=e.groupedFiberRenders.reduce((c,u)=>c+u.count,0),r=e.timing.renderTime,i=Yt(e.timing),s=r/i*100;return n>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:n,percentageOfTotal:s,copyButton:v(Sb,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:v(Sb,{})}}},Sb=()=>{const[e,n]=Be(!1),{notificationState:r}=Dn();return v("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(Sp("explanation",r.selectedEvent)),n(!0),setTimeout(()=>n(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[v("span",{children:e?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:H(["transition-transform duration-200",e&&"scale-110"]),children:e?v("path",{d:"M20 6L9 17l-5-5"}):v(qe,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},yC=e=>e.timing.renderTime/Yt(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((n,r)=>r.totalTime-n.totalTime).slice(0,3).map(n=>({percentage:n.totalTime/Yt(e.timing),name:n.name}))}}:{kind:"other"},bC=e=>{const n=e.groupedFiberRenders.reduce((r,i)=>r+i.count,0);return e.timing.otherJSTime/Yt(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,i)=>r+i.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:n,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,i)=>i.count-r.count).slice(0,3)}}:e.timing.otherJSTime/Yt(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:n}}:{kind:"js-explanation-base"}},ho=({input:e})=>{switch(e.kind){case"total-processing":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),v("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),v("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),v("p",{children:["To understand precisely what caused the slowdown while in production, use the ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),v("p",{})]});case"render":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),v("div",{className:H(["flex flex-col"]),children:[v("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(n=>v("div",{children:[v("strong",{children:n.name}),":"," ",(n.percentage*100).toFixed(0),"% of total"]},n.name))]}),v("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),v("p",{children:'The "Ranked" tab shows the render times of every component.'}),v("p",{children:"The render times of the same components are grouped together into one bar."}),v("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",v("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",v("code",{children:"'onclick'"}),", ",v("code",{children:"'onchange'"}),") that performed expensive computation."]}),v("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),v("p",{children:["You should profile your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?v(qe,{children:[v("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),v("p",{children:["You should try to reproduce the slowdown while profiling your website with the",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):v(qe,{children:[" ",v("p",{children:["There were ",v("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",v("code",{children:"useEffects"}),"."]}),v("div",{className:H(["flex flex-col"]),children:[v("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(n=>v("div",{children:["- ",v("strong",{children:n.name})," (rendered ",n.count,"x)"]},n.name))]}),"and then checking if the problem still exists.",v("p",{children:["You can also try profiling your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["There were only ",v("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",v("code",{children:"useEffect"}),"/",v("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),v("p",{children:["To understand precisely what caused the slowdown, use the"," ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:["During this interaction, there were"," ",v("strong",{children:e.data.count})," renders, which was"," ",v("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),v("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),v("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return v("div",{className:H(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",v("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),v("p",{children:["To get a better picture of what happened, profile your app using the"," ",v("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},pt=null,Et=null,st=Bt({kind:"idle",current:null}),Ah=null,ko=()=>{Ah&&cancelAnimationFrame(Ah),Ah=requestAnimationFrame(()=>{if(!pt||!Et)return;Et.clearRect(0,0,pt.width,pt.height);const e="hsl(271, 76%, 53%)",n=st.value,{alpha:r,current:i}=lr(()=>{switch(n.kind){case"transition":{const s=n.current?.alpha&&n.current.alpha>0?n.current:n.transitionTo;return{alpha:s?s.alpha:0,current:s}}case"move-out":return{alpha:n.current?.alpha??0,current:n.current};case"idle":return{alpha:1,current:n.current}}});switch(i?.rects.forEach(s=>{Et&&(Et.shadowColor=e,Et.shadowBlur=6,Et.strokeStyle=e,Et.lineWidth=2,Et.globalAlpha=r,Et.beginPath(),Et.rect(s.left,s.top,s.width,s.height),Et.stroke(),Et.shadowBlur=0,Et.beginPath(),Et.rect(s.left,s.top,s.width,s.height),Et.stroke())}),n.kind){case"move-out":{if(n.current.alpha===0){st.value={kind:"idle",current:null};return}n.current.alpha<=.01&&(n.current.alpha=0),n.current.alpha=Math.max(0,n.current.alpha-.03),ko();return}case"transition":{if(n.current&&n.current.alpha>0){n.current.alpha=Math.max(0,n.current.alpha-.03),ko();return}if(n.transitionTo.alpha===1){st.value={kind:"idle",current:n.transitionTo};return}n.transitionTo.alpha=Math.min(n.transitionTo.alpha+.03,1),ko()}case"idle":return}})},Oh=null,wC=e=>{if(pt=document.createElement("canvas"),Et=pt.getContext("2d",{alpha:!0}),!Et)return null;const n=window.devicePixelRatio||1,{innerWidth:r,innerHeight:i}=window;pt.style.width=`${r}px`,pt.style.height=`${i}px`,pt.width=r*n,pt.height=i*n,pt.style.position="fixed",pt.style.left="0",pt.style.top="0",pt.style.pointerEvents="none",pt.style.zIndex="2147483600",Et.scale(n,n),e.appendChild(pt),Oh&&window.removeEventListener("resize",Oh);const s=()=>{if(!pt||!Et)return;const c=window.devicePixelRatio||1,{innerWidth:u,innerHeight:f}=window;pt.style.width=`${u}px`,pt.style.height=`${f}px`,pt.width=u*c,pt.height=f*c,Et.scale(c,c),ko()};return Oh=s,window.addEventListener("resize",s),st.subscribe(()=>{requestAnimationFrame(()=>{ko()})}),xC};function xC(){pt?.parentNode&&pt.parentNode.removeChild(pt),pt=null,Et=null}var Vs=()=>{const e=st.value.current?st.value.current:st.value.kind==="transition"?st.value.transitionTo:null;if(e){if(st.value.kind==="transition"){st.value={kind:"move-out",current:st.value.current?.alpha===0?st.value.transitionTo:st.value.current??st.value.transitionTo};return}st.value={kind:"move-out",current:{alpha:0,...e}}}},_C=({selectedEvent:e})=>{const n=Yt(e.timing),r=n-e.timing.renderTime,[i]=Be(qu()),c=e.groupedFiberRenders.map(p=>({event:p,kind:"render",totalTime:i?p.count:p.totalTime})),u=lr(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/n<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/n<.2}});e.kind==="interaction"&&!i&&c.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!i&&(e.kind==="interaction"?c.push({kind:"other-not-javascript",totalTime:Yt(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):c.push({kind:"other-frame-drop",totalTime:r}));const f=ke({lastCallAt:null,timer:null}),h=c.reduce((p,y)=>p+y.totalTime,0);return v("div",{className:H(["flex flex-col h-full w-full gap-y-1"]),children:[lr(()=>{if(i&&c.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),v("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(c.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),v("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),c.toSorted((p,y)=>y.totalTime-p.totalTime).map(p=>v(Vx,{bars:c,bar:p,debouncedMouseEnter:f,totalBarTime:h,isProduction:i},p.kind==="render"?p.event.id:p.kind))]})},SC=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",Vx=({bar:e,debouncedMouseEnter:n,totalBarTime:r,isProduction:i,bars:s,depth:c=0})=>{const{setNotificationState:u,setRoute:f}=Dn(),[h,p]=Be(!1),y=e.kind==="render"?e.event.parents.size===0:!0,m=s.filter(S=>S.kind==="render"&&e.kind==="render"?e.event.parents.has(S.event.name)&&S.event.name!==e.event.name:!1),b=e.kind==="render"?Array.from(e.event.parents).filter(S=>!s.some(T=>T.kind==="render"&&T.event.name===S)):[],w=()=>{e.kind==="render"?(u(S=>({...S,selectedFiber:e.event})),f({route:"render-explanation",routeMessage:null})):f({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return v("div",{className:"w-full",children:[v("div",{className:H(["w-full flex items-center relative text-xs min-w-0"]),children:[v("button",{onMouseLeave:()=>{n.current.timer&&clearTimeout(n.current.timer),Vs()},onMouseEnter:async()=>{const S=async()=>{if(n.current.lastCallAt=Date.now(),e.kind!=="render"){const L=st.value.current?st.value.current:st.value.kind==="transition"?st.value.transitionTo:null;if(!L){st.value={kind:"idle",current:null};return}st.value={kind:"move-out",current:{alpha:0,...L}};return}const T=st.value,R=lr(()=>{switch(T.kind){case"transition":return T.transitionTo;case"idle":case"move-out":return T.current}}),E=[];if(T.kind==="transition"){const L=SC(T);lr(()=>{switch(L){case"fading-in":{st.value={kind:"transition",current:T.transitionTo,transitionTo:{rects:E,alpha:0,name:e.event.name}};return}case"fading-out":{st.value={kind:"transition",current:st.value.current?{alpha:0,...st.value.current}:null,transitionTo:{rects:E,alpha:0,name:e.event.name}};return}}})}else st.value={kind:"transition",transitionTo:{rects:E,alpha:0,name:e.event.name},current:R?{alpha:0,...R}:null};const A=e.event.elements.filter(L=>L instanceof Element);for await(const L of Dx(A))L.forEach(({boundingClientRect:U})=>{E.push(U)}),ko()};if(n.current.lastCallAt&&Date.now()-n.current.lastCallAt<200){n.current.timer&&clearTimeout(n.current.timer),n.current.timer=setTimeout(()=>{S()},200);return}S()},onClick:w,className:H(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[v("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:H(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),v("div",{className:H(["absolute inset-0 flex items-center px-2","min-w-0"]),children:v("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[v("span",{className:H(["truncate"]),children:lr(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&KE(e.event)&&v("div",{style:{lineHeight:"10px"},className:H(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),v("button",{onClick:()=>e.kind==="render"&&!y&&p(!h),className:H(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!y&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!y?"cursor-pointer":"cursor-default"]),children:[v("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!y&&v($x,{className:H("transition-transform",h&&"rotate-90"),size:16})}),v("div",{style:{minWidth:y?"fit-content":i?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&v("span",{className:H(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!i)&&v("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),c===0&&v("div",{className:H(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),h&&(m.length>0||b.length>0)&&v("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[m.toSorted((S,T)=>T.totalTime-S.totalTime).map((S,T)=>v(Vx,{depth:c+1,bar:S,debouncedMouseEnter:n,totalBarTime:r,isProduction:i,bars:s},T)),b.map(S=>v("div",{className:"w-full",children:v("div",{className:"w-full flex items-center relative text-xs",children:v("div",{className:"h-full w-full flex items-center relative",children:[v("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),v("div",{className:"absolute inset-0 flex items-center px-2",children:v("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:S})})]})})},S))]})]})},kC=({selectedEvent:e,selectedFiber:n})=>{const{setRoute:r}=Dn(),[i,s]=Be(!0),[c]=Be(qu());Wp(()=>{const f=localStorage.getItem("react-scan-tip-shown"),h=f==="true"?!0:f==="false"?!1:null;if(h===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}h||s(!1)},[]);const u=n.changes.context.length===0&&n.changes.props.length===0&&n.changes.state.length===0;return v("div",{className:H(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[v("div",{className:H(["flex items-start gap-x-4 "]),children:[v("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:H(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[v(nC,{size:14})," ",v("span",{children:"Overview"})]}),v("div",{className:H(["flex flex-col gap-y-1"]),children:[v("div",{className:H(["text-sm font-bold text-white overflow-x-hidden"]),children:v("div",{className:"flex items-center gap-x-2 truncate",children:n.name})}),v("div",{className:H(["flex gap-x-2"]),children:[!c&&v(qe,{children:v("div",{className:H(["text-xs text-gray-400"]),children:["• Render time: ",n.totalTime.toFixed(0),"ms"]})}),v("div",{className:H(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",n.count,"x"]})]})]})]}),i&&!u&&v("div",{className:H(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[v("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:H(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:v(ku,{size:12})}),v("div",{className:H(["w-1 bg-[#d36cff]"])}),v("div",{className:H(["flex-1"]),children:[v("div",{className:H(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),v("div",{className:H(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&v("div",{className:H(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[v("div",{className:H(["w-1 bg-[#d36cff]"])}),v("div",{className:H(["flex-1"]),children:[v("div",{className:H(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),v("div",{className:H(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),v("div",{className:H(["flex w-full"]),children:[v("div",{className:H(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[v("div",{className:H(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),n.changes.props.length>0?n.changes.props.toSorted((f,h)=>h.count-f.count).map(f=>v("div",{className:H(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:H(["text-white "]),children:f.name}),v("div",{className:H([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[f.count,"/",n.count,"x"]})]},f.name)):v("div",{className:H(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:H(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[v("div",{className:H([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),n.changes.state.length>0?n.changes.state.toSorted((f,h)=>h.count-f.count).map(f=>v("div",{className:H(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:H(["text-white "]),children:["index ",f.index]}),v("div",{className:H(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[f.count,"/",n.count,"x"]})]},f.index)):v("div",{className:H(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:H(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[v("div",{className:H([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),n.changes.context.length>0?n.changes.context.toSorted((f,h)=>h.count-f.count).map(f=>v("div",{className:H(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[v("span",{className:H(["text-white "]),children:f.name}),v("div",{className:H(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[f.count,"/",n.count,"x"]})]},f.name)):v("div",{className:H(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},TC=()=>{const{notificationState:e,setNotificationState:n}=Dn(),[r,i]=Be("..."),s=ke(null);if(je(()=>{const c=setInterval(()=>{i(u=>u==="..."?"":u+".")},500);return()=>clearInterval(c)},[]),!e.selectedEvent)return v("div",{ref:s,className:H(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[v("div",{className:H(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:v("button",{onClick:()=>{ut.value={view:"none"}},children:v(ku,{size:18,className:"text-[#6F6F78]"})})}),v("div",{className:H(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:v("div",{className:H(["flex flex-col items-start gap-y-4"]),children:[v("div",{className:H(["flex items-center"]),children:v("span",{className:H(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&v("p",{className:H(["text-xs"]),children:["Click on an item in the"," ",v("span",{className:H(["text-purple-400"]),children:"History"})," list to get started"]}),v("p",{className:H(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),v("p",{className:H(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),v("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){n(u=>(u.audioNotificationsOptions.audioContext?.state!=="closed"&&u.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const c=new AudioContext;rm(c),n(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:c}}))},className:H(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?v(qe,{children:v("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):v(qe,{children:v("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return v($c,{children:v(_C,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return v($c,{children:v(kC,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return v($c,{children:v("div",{className:H(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:v(gC,{selectedEvent:e.selectedEvent})})});case"optimize":return v($c,{children:v(pC,{selectedEvent:e.selectedEvent})})}e.route},$c=({children:e})=>{const{notificationState:n}=Dn();if(!n.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return v("div",{className:H(["w-full h-full flex flex-col gap-y-2"]),children:[v("div",{className:H(["h-[50px] w-full"]),children:v(sC,{selectedEvent:n.selectedEvent})}),v("div",{className:H(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},EC=({selectedEvent:e})=>{const n=xl(e);switch(e.kind){case"interaction":return v("div",{className:H(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:H(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:H(["flex items-center gap-x-2 "]),children:[v("span",{className:H(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),v("span",{children:sl(e.componentPath)}),v("div",{className:H(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",n==="low"&&"bg-green-500/50",n==="needs-improvement"&&"bg-[#b77116]",n==="high"&&"bg-[#b94040]"]),children:[Yt(e.timing).toFixed(0),"ms processing time"]})]}),v("div",{className:H(["flex items-center gap-x-2  justify-end ml-auto"]),children:v("div",{className:H(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{ut.value={view:"none"}},title:"Close",children:v(ku,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return v("div",{className:H(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:H(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:H(["flex items-center gap-x-2 "]),children:["FPS Drop",v("div",{className:H(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",n==="low"&&"bg-green-500/50",n==="needs-improvement"&&"bg-[#b77116]",n==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),v("div",{className:H(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:v("div",{className:H(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{ut.value={view:"none"}},children:v(ku,{size:18,className:"text-[#6F6F78]"})})})})]})})}},CC=({flashingItemsCount:e,totalEvents:n})=>{const[r,i]=Be(!1),s=ke(0),c=ke(0);return je(()=>{if(s.current>=n)return;const u=Date.now(),f=250,h=u-c.current;if(h>=f){i(!1);const p=setTimeout(()=>{s.current=n,c.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50);return()=>clearTimeout(p)}else{const p=f-h,y=setTimeout(()=>{i(!1),setTimeout(()=>{s.current=n,c.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50)},p);return()=>clearTimeout(y)}},[e]),r},kb=({item:e,shouldFlash:n})=>{const[r,i]=Be(!1),s=e.events.map(xl).reduce((f,h)=>{switch(h){case"high":return"high";case"needs-improvement":return f==="high"?"high":"needs-improvement";case"low":return f}},"low"),c=e.events.reduce((f,h)=>n(h.id)?f+1:f,0),u=CC({flashingItemsCount:c,totalEvents:e.events.length});return v("div",{className:H(["flex flex-col gap-y-0.5"]),children:[v("button",{onClick:()=>i(f=>!f),className:H(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:H(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[v("span",{className:H(["min-w-fit"]),children:v($x,{className:H(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),v("span",{className:H(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":sl(e.events.at(0)?.componentPath??[])})]}),v("div",{className:H(["ml-auto min-w-fit flex justify-end items-center"]),children:v("div",{style:{lineHeight:"10px"},className:H(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&v(RC,{children:e.events.toSorted((f,h)=>h.timestamp-f.timestamp).map(f=>v(qx,{event:f,shouldFlash:n(f.id)}))})]})},RC=({children:e})=>v("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[v("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),NC=e=>{const n=ke([]),[r,i]=Be(new Set),s=ke(!0);return je(()=>{if(s.current){s.current=!1,n.current=e;return}const c=new Set(e.map(h=>h.id)),u=new Set(n.current.map(h=>h.id)),f=new Set;c.forEach(h=>{u.has(h)||f.add(h)}),f.size>0&&(i(f),setTimeout(()=>{i(new Set)},2e3)),n.current=e},[e]),c=>r.has(c)},AC=({shouldFlash:e})=>{const[n,r]=Be(e);return je(()=>{if(e){r(!0);const i=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(i)}},[e]),n},qx=({event:e,shouldFlash:n})=>{const{notificationState:r,setNotificationState:i}=Dn(),s=xl(e),c=AC({shouldFlash:n});switch(e.kind){case"interaction":return v("button",{onClick:()=>{i(u=>({...u,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:H(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===r.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:H(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[v("span",{className:H(["min-w-fit text-xs"]),children:lr(()=>{switch(e.type){case"click":return v(rC,{size:14});case"keyboard":return v(aC,{size:14})}})}),v("span",{className:H(["text-xs pr-1 truncate"]),children:sl(e.componentPath)})]}),v("div",{className:H([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:H(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:v("div",{style:{lineHeight:"10px"},className:H(["text-[10px] text-white flex items-end"]),children:[Yt(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return v("button",{onClick:()=>{i(u=>({...u,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:H(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===r.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:H(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[v(oC,{size:14,className:"mr-1.5"})," FPS Drop"]}),v("div",{className:H([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:H(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},OC=e=>e.reduce((r,i)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:i,timestamp:i.timestamp}];switch(s.kind){case"collapsed-keyboard":return i.kind==="interaction"&&i.type==="keyboard"&&i.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&i.kind==="interaction"&&i.type==="keyboard"&&s.event.componentPath.join("-")===i.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:s.event.kind==="dropped-frames"&&i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"collapsed-frame-drops":return i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}]}},[]),Yx=(e=150)=>{const{notificationState:n}=Dn(),[r,i]=Be(n.events);return je(()=>{setTimeout(()=>{i(n.events)},e)},[n.events]),[r,i]},MC=()=>{const{notificationState:e,setNotificationState:n}=Dn(),r=NC(e.events),[i,s]=Yx(),c=OC(i).toSorted((u,f)=>f.timestamp-u.timestamp);return v("div",{className:H(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[v("div",{className:H(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[v("span",{children:"History"}),v(Ix,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:v("button",{className:H(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{ol.getState().actions.clear(),n(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:v(iC,{className:H([""]),size:16})}),children:v("div",{className:H(["w-full flex justify-center"]),children:"Clear all events"})})]}),v("div",{className:H(["flex flex-col px-1 gap-y-1"]),children:[c.length===0&&v("div",{className:H(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),c.map(u=>lr(()=>{switch(u.kind){case"collapsed-keyboard":return v(kb,{shouldFlash:r,item:u});case"single":return v(qx,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return v(kb,{shouldFlash:r,item:u})}}))]})]})},zC=e=>Object.values(e).map(r=>({id:ar(),totalTime:r.nodeInfo.reduce((i,s)=>i+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(i=>i.element),changes:{context:r.changes.fiberContext.current.filter(i=>r.changes.fiberContext.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberContext.changesCounts.get(i.name)??0})),props:r.changes.fiberProps.current.filter(i=>r.changes.fiberProps.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberProps.changesCounts.get(i.name)??0})),state:r.changes.fiberState.current.filter(i=>r.changes.fiberState.changesCounts.get(Number(i.name))).map(i=>({index:i.name,count:r.changes.fiberState.changesCounts.get(Number(i.name))??0}))}})),DC=e=>{je(()=>{const r=setInterval(()=>{e.forEach(i=>{i.groupedFiberRenders&&i.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const c=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&c>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},Xx=()=>{const e=XE(),n=[];return DC(n),e.state.events.forEach(r=>{const i=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=zC(i),c=s.reduce((u,f)=>u+f.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:f,interactionStartDetail:h,rafStart:p}=r.data.meta.detailedTiming,y=Math.max(0,f-h-c),m=Math.max(r.data.meta.latency-(u-h),0);n.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:c,kind:"interaction",otherJSTime:y,framePreparation:p-f,frameConstruction:u-p,frameDraw:m}});return}case"long-render":{n.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:c,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),n},LC=1e3,jC=()=>{const{notificationState:e,setNotificationState:n}=Dn(),r=ke(null),i=ke(null),s=ke(0),[c]=Yx(),u=c.filter(f=>xl(f)==="high").length;return je(()=>{const f=localStorage.getItem("react-scan-notifications-audio");if(f!=="false"&&f!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(f!=="false"){n(p=>p.audioNotificationsOptions.enabled?p:{...p,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),je(()=>{const{audioNotificationsOptions:f}=e;if(!f.enabled||u===0||r.current&&r.current>=u)return;i.current&&clearTimeout(i.current);const p=Date.now()-s.current,y=Math.max(0,LC-p);i.current=setTimeout(()=>{rm(f.audioContext),r.current=u,s.current=Date.now(),i.current=null},y)},[u]),je(()=>{u===0&&(r.current=null)},[u]),je(()=>()=>{i.current&&clearTimeout(i.current)},[]),null},UC=nm((e,n)=>{const r=Xx(),[i,s]=Be({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((c,u)=>c.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=r,v(Px.Provider,{value:{notificationState:i,setNotificationState:s,setRoute:({route:c,routeMessage:u})=>{s(f=>{const h={...f,route:c,routeMessage:u};switch(c){case"render-visualization":return Vs(),{...h,selectedFiber:null};case"optimize":return Vs(),{...h,selectedFiber:null};case"other-visualization":return Vs(),{...h,selectedFiber:null};case"render-explanation":return Vs(),h}})}},children:[v(jC,{}),v(HC,{ref:n})]})}),HC=nm((e,n)=>{const{notificationState:r}=Dn();return v("div",{ref:n,className:H(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&v("div",{className:H(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[v(EC,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&v(BC,{})]}),v("div",{className:H(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&r.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[v("div",{className:H(["h-full min-w-[200px]"]),children:v(MC,{})}),v("div",{className:H(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:v(TC,{})})]})]})}),BC=()=>{const{notificationState:e}=Dn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const n=e.selectedEvent;return v("div",{className:H(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",n.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:v("div",{className:H(["flex flex-col gap-y-4 h-full"]),children:lr(()=>{switch(n.kind){case"interaction":return v(qe,{children:[v("div",{className:H(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:n.type==="click"?"Clicked component location":"Typed in component location"}),v("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:n.componentPath.toReversed().map((r,i)=>v(qe,{children:[v("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),i<n.componentPath.length-1&&v("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),v("div",{className:H(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Yt(n.timing).toFixed(0),"ms"]})]}),v("div",{className:H(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-n.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return v(qe,{children:[v("div",{className:H(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Yt(n.timing).toFixed(0),"ms"]})]}),v("div",{className:H(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-n.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},FC=im(()=>{const e=Xx(),[n,r]=Be(e);je(()=>{const b=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(b)}},[e]);const i=ge.inspectState,s=i.value.kind==="inspecting",c=i.value.kind==="focused",[u,f]=Be([]),h=Ct(()=>{switch(ge.inspectState.value.kind){case"inspecting":{ut.value={view:"none"},ge.inspectState.value={kind:"inspect-off"};return}case"focused":{ut.value={view:"inspector"},ge.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{ut.value={view:"none"},ge.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),p=Ct(b=>{if(b.preventDefault(),b.stopPropagation(),!Xe.instrumentation)return;const w=!Xe.instrumentation.isPaused.value;Xe.instrumentation.isPaused.value=w;const S=Gr("react-scan-options");bn("react-scan-options",{...S,enabled:!w})},[]);al(()=>{ge.inspectState.value.kind==="uninitialized"&&(ge.inspectState.value={kind:"inspect-off"})});let y=null,m="#999";return s?(y=v(wt,{name:"icon-inspect"}),m="#8e61e3"):c?(y=v(wt,{name:"icon-focus"}),m="#8e61e3"):(y=v(wt,{name:"icon-inspect"}),m="#999"),Wp(()=>{if(ut.value.view!=="notifications")return;const b=new Set(e.map(w=>w.id));f([...b.values()])},[e.length,ut.value.view]),v("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[v("div",{className:"h-full flex items-center min-w-fit",children:v("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:h,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:m},children:y})}),v("div",{className:"h-full flex items-center justify-center",children:v("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ge.inspectState.value.kind!=="inspect-off"&&(ge.inspectState.value={kind:"inspect-off"}),ut.value.view){case"inspector":{ge.inspectState.value={kind:"inspect-off"};const b=new Set(e.map(w=>w.id));f([...b.values()]),ut.value={view:"notifications"};return}case"notifications":{ut.value={view:"none"};return}case"none":{const b=new Set(e.map(w=>w.id));f([...b.values()]),ut.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:m},children:v(JE,{events:n.filter(b=>!u.includes(b.id)).map(b=>xl(b)==="high"),size:16,className:H(["text-[#999]",ut.value.view==="notifications"&&"text-[#8E61E3]"])})})}),v(CE,{checked:!Xe.instrumentation?.isPaused.value,onChange:p,className:"place-self-center",title:"Outline Re-renders"}),Xe.options.value.showFPS&&v(NE,{})]})}),PC=xi(()=>ge.inspectState.value.kind==="inspecting"),$C=xi(()=>H("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",PC.value&&"opacity-0 duration-0 delay-0")),IC=xi(()=>ut.value.view==="inspector"),VC=xi(()=>ut.value.view==="notifications"),qC=()=>v("div",{className:H("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[v("div",{className:$C,children:[v(EE,{}),v("div",{className:H("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[v(Tb,{isOpen:IC,children:v(MT,{})}),v(Tb,{isOpen:VC,children:v(UC,{})})]})]}),v(FC,{})]}),Tb=({isOpen:e,children:n})=>v("div",{className:H("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:v("div",{className:"absolute inset-0 flex",children:n})}),Ic=(e,n,r)=>e+(n-e)*r,Mh={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},po=Tr&&window.devicePixelRatio||1,YC=()=>{const e=ke(null),n=ke(null),r=ke(null),i=ke(null),s=ke(null),c=ke(0),u=ke(),f=ke(new Map),h=ke(!1),p=ke(0),y=(x,N,M,V)=>{x.save(),x.strokeStyle="white",x.fillStyle="white",x.lineWidth=1.5;const C=V*.6,z=V*.5,$=N+(V-C)/2,q=M;x.beginPath(),x.arc($+C/2,q+z/2,C/2,Math.PI,0,!1),x.stroke();const I=V*.8,ie=V*.5,K=N+(V-I)/2,he=M+z/2;x.fillRect(K,he,I,ie),x.restore()},m=(x,N,M,V)=>{if(!V)return;const C=24,z=8,q=(V?.type&&qt(V.type))??"Unknown";x.save(),x.font="12px system-ui, -apple-system, sans-serif";const ie=x.measureText(q).width,K=M==="locked"?14:0,he=M==="locked"?6:0,ue=ie+z*2+K+he,be=N.left,me=N.top-C-4;if(x.fillStyle="rgb(37, 37, 38, .75)",x.beginPath(),x.roundRect(be,me,ue,C,3),x.fill(),M==="locked"){const Ve=be+z,dt=me+(C-K)/2+2;y(x,Ve,dt,K),i.current={x:Ve,y:dt,width:K,height:K}}else i.current=null;x.fillStyle="white",x.textBaseline="middle";const Ue=be+z+(M==="locked"?K+he:0);x.fillText(q,Ue,me+C/2),x.restore()},b=(x,N,M,V)=>{if(!r.current)return;const C=r.current;N.clearRect(0,0,x.width,x.height),N.strokeStyle="rgba(142, 97, 227, 0.5)",N.fillStyle="rgba(173, 97, 230, 0.10)",M==="locked"?N.setLineDash([]):N.setLineDash([4]),N.lineWidth=1,N.fillRect(C.left,C.top,C.width,C.height),N.strokeRect(C.left,C.top,C.width,C.height),m(N,C,M,V)},w=(x,N,M,V,C,z)=>{const $=Xe.options.value.animationSpeed,q=Mh.speeds[$]??Mh.speeds.off,I=ie=>{if(ie-p.current<Mh.frameInterval){c.current=requestAnimationFrame(I);return}if(p.current=ie,!r.current){cancelAnimationFrame(c.current);return}r.current={left:Ic(r.current.left,M.left,q),top:Ic(r.current.top,M.top,q),width:Ic(r.current.width,M.width,q),height:Ic(r.current.height,M.height,q)},b(x,N,V,C),Math.abs(r.current.left-M.left)>.1||Math.abs(r.current.top-M.top)>.1||Math.abs(r.current.width-M.width)>.1||Math.abs(r.current.height-M.height)>.1?c.current=requestAnimationFrame(I):(r.current=M,b(x,N,V,C),cancelAnimationFrame(c.current),N.restore())};cancelAnimationFrame(c.current),clearTimeout(u.current),c.current=requestAnimationFrame(I),u.current=setTimeout(()=>{cancelAnimationFrame(c.current),r.current=M,b(x,N,V,C),N.restore()},1e3)},S=(x,N,M,V,C)=>{if(N.save(),!r.current){r.current=M,b(x,N,V,C),N.restore();return}w(x,N,M,V,C)},T=async(x,N,M,V)=>{if(!x||!N||!M)return;const{parentCompositeFiber:C}=ci(x),z=await zT(x);!C||!z||S(N,M,z,V,C)},R=()=>{for(const x of f.current.values())x?.()},E=x=>{const N=x.getContext("2d");N&&N.clearRect(0,0,x.width,x.height),r.current=null,i.current=null,s.current=null,x.classList.remove("fade-in"),h.current=!1},A=x=>{if(!e.current||h.current)return;const N=V=>{!e.current||V.propertyName!=="opacity"||!h.current||(e.current.removeEventListener("transitionend",N),E(e.current),x?.())},M=f.current.get("fade-out");M&&(M(),f.current.delete("fade-out")),e.current.addEventListener("transitionend",N),f.current.set("fade-out",()=>{e.current?.removeEventListener("transitionend",N)}),h.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{e.current?.classList.add("fade-out")})},L=()=>{e.current&&(h.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{e.current?.classList.add("fade-in")}))},U=x=>{x!==s.current&&(s.current=x,mp.has(x.tagName)?A():L(),ge.inspectState.value={kind:"inspecting",hoveredDomElement:x})},F=()=>{!r.current||!e.current||h.current||A()},B=yx(x=>{if(ge.inspectState.peek().kind!=="inspecting"||!n.current)return;n.current.style.pointerEvents="none";const M=document.elementFromPoint(x?.clientX??0,x?.clientY??0);if(n.current.style.removeProperty("pointer-events"),clearTimeout(u.current),M&&M!==e.current){const{parentCompositeFiber:V}=ci(M);if(V){const C=yu(V);if(C){U(C);return}}}F()},32),ee=(x,N)=>{const M=i.current;if(!M)return!1;const V=N.getBoundingClientRect(),C=N.width/V.width,z=N.height/V.height,$=(x.clientX-V.left)*C,q=(x.clientY-V.top)*z,I=$/po,ie=q/po;return I>=M.x&&I<=M.x+M.width&&ie>=M.y&&ie<=M.y+M.height},W=x=>{x.kind==="focused"&&(ge.inspectState.value={kind:"inspecting",hoveredDomElement:x.focusedDomElement})},Z=x=>{const N=["react-scan-inspect-element","react-scan-power"];if(x.target instanceof HTMLElement&&N.includes(x.target.id))return;const M=s.current?.tagName;if(M&&mp.has(M))return;x.preventDefault(),x.stopPropagation();const V=s.current??document.elementFromPoint(x.clientX,x.clientY);if(!V)return;const C=x.composedPath().at(0);if(C instanceof HTMLElement&&N.includes(C.id)){const q=new MouseEvent(x.type,x);q.__reactScanSyntheticEvent=!0,C.dispatchEvent(q);return}const{parentCompositeFiber:z}=ci(V);if(!z)return;const $=yu(z);if(!$){s.current=null,ge.inspectState.value={kind:"inspect-off"};return}ge.inspectState.value={kind:"focused",focusedDomElement:$,fiber:z}},J=x=>{if(x.__reactScanSyntheticEvent)return;const N=ge.inspectState.peek(),M=e.current;if(!(!M||!n.current)){if(ee(x,M)){x.preventDefault(),x.stopPropagation(),W(N);return}N.kind==="inspecting"&&Z(x)}},re=x=>{if(x.key!=="Escape")return;const N=ge.inspectState.peek();if(e.current&&document.activeElement?.id!=="react-scan-root"&&(ut.value={view:"none"},N.kind==="focused"||N.kind==="inspecting"))switch(x.preventDefault(),x.stopPropagation(),N.kind){case"focused":{L(),r.current=null,s.current=N.focusedDomElement,ge.inspectState.value={kind:"inspecting",hoveredDomElement:N.focusedDomElement};break}case"inspecting":{A(()=>{Vu.value=!1,ge.inspectState.value={kind:"inspect-off"}});break}}},te=(x,N,M)=>{f.current.get(x.kind)?.(),n.current&&x.kind!=="inspecting"&&(n.current.style.pointerEvents="none"),c.current&&cancelAnimationFrame(c.current);let V;switch(x.kind){case"inspect-off":A();return;case"inspecting":T(x.hoveredDomElement,N,M,"inspecting");break;case"focused":if(!x.focusedDomElement)return;s.current!==x.focusedDomElement&&(s.current=x.focusedDomElement),ut.value={view:"inspector"},T(x.focusedDomElement,N,M,"locked"),V=ge.lastReportTime.subscribe(()=>{if(c.current&&r.current){const{parentCompositeFiber:C}=ci(x.focusedDomElement);C&&T(x.focusedDomElement,N,M,"locked")}}),V&&f.current.set(x.kind,V);break}},le=(x,N)=>{const M=x.getBoundingClientRect();x.width=M.width*po,x.height=M.height*po,N.scale(po,po),N.save()},fe=()=>{const x=ge.inspectState.peek(),N=e.current;if(!N)return;const M=N?.getContext("2d");M&&(cancelAnimationFrame(c.current),clearTimeout(u.current),le(N,M),r.current=null,x.kind==="focused"&&x.focusedDomElement?T(x.focusedDomElement,N,M,"locked"):x.kind==="inspecting"&&x.hoveredDomElement&&T(x.hoveredDomElement,N,M,"inspecting"))},j=x=>{const N=ge.inspectState.peek(),M=e.current;M&&(N.kind==="inspecting"||ee(x,M))&&(x.preventDefault(),x.stopPropagation(),x.stopImmediatePropagation())};return je(()=>{const x=e.current;if(!x)return;const N=x?.getContext("2d");if(!N)return;le(x,N);const M=ge.inspectState.subscribe(V=>{te(V,x,N)});return window.addEventListener("scroll",fe,{passive:!0}),window.addEventListener("resize",fe,{passive:!0}),document.addEventListener("pointermove",B,{passive:!0,capture:!0}),document.addEventListener("pointerdown",j,{capture:!0}),document.addEventListener("click",J,{capture:!0}),document.addEventListener("keydown",re,{capture:!0}),()=>{R(),M(),window.removeEventListener("scroll",fe),window.removeEventListener("resize",fe),document.removeEventListener("pointermove",B,{capture:!0}),document.removeEventListener("click",J,{capture:!0}),document.removeEventListener("pointerdown",j,{capture:!0}),document.removeEventListener("keydown",re,{capture:!0}),c.current&&cancelAnimationFrame(c.current),clearTimeout(u.current)}},[]),v(qe,{children:[v("div",{ref:n,className:H("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),v("canvas",{ref:e,dir:"ltr",className:H("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},XC=class{constructor(e,n){this.width=e,this.height=n,this.maxWidth=e-Re*2,this.maxHeight=n-Re*2}rightEdge(e){return this.width-e-Re}bottomEdge(e){return this.height-e-Re}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},mo,ll=()=>{const e=window.innerWidth,n=window.innerHeight;return mo&&mo.width===e&&mo.height===n||(mo=new XC(e,n)),mo},GC=(e,n,r,i,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[c,u]=n.split("-");if(e==="left")return`${c}-right`;if(e==="right")return`${c}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(i){if(e==="left")return`${n.split("-")[0]}-right`;if(e==="right")return`${n.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${n.split("-")[1]}`;if(e==="bottom")return`top-${n.split("-")[1]}`}return n},Ks=(e,n,r)=>{const i=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,c=window.innerHeight,u=n===Dt.width,f=u?n:Math.min(n,s-Re*2),h=u?r:Math.min(r,c-Re*2);let p,y,m=Re,b=s-f-Re,w=Re,S=c-h-Re;switch(e){case"top-right":p=i?-m:b,y=w;break;case"bottom-right":p=i?-m:b,y=S;break;case"bottom-left":p=i?-b:m,y=S;break;case"top-left":p=i?-b:m,y=w;break;default:p=m,y=w;break}return u&&(i?p=Math.min(-m,Math.max(p,-b)):p=Math.max(m,Math.min(p,b)),y=Math.max(w,Math.min(y,S))),{x:p,y}},ZC=(e,n)=>{const[r,i]=n.split("-");return e!==r&&e!==i},QC=(e,n,r,i)=>r&&i?!0:!r&&!i?ZC(e,n):r?e!==n.split("-")[0]:i?e!==n.split("-")[1]:!1,Vc=(e,n,r)=>{const i=r?Dt.width:Dt.initialHeight,s=r?ll().maxWidth:ll().maxHeight,c=e+n;return Math.min(Math.max(i,c),s)},WC=(e,n,r,i,s)=>{const c=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-Re*2,f=window.innerHeight-Re*2;let h=n.width,p=n.height,y=r.x,m=r.y;if(c&&e.includes("right")){const R=-r.x+n.width-Re,E=Math.min(n.width+i,R);h=Math.min(u,Math.max(Dt.width,E)),y=r.x+(h-n.width)}if(c&&e.includes("left")){const R=window.innerWidth-r.x-Re,E=Math.min(n.width-i,R);h=Math.min(u,Math.max(Dt.width,E))}if(!c&&e.includes("right")){const R=window.innerWidth-r.x-Re,E=Math.min(n.width+i,R);h=Math.min(u,Math.max(Dt.width,E))}if(!c&&e.includes("left")){const R=r.x+n.width-Re,E=Math.min(n.width-i,R);h=Math.min(u,Math.max(Dt.width,E)),y=r.x-(h-n.width)}if(e.includes("bottom")){const R=window.innerHeight-r.y-Re,E=Math.min(n.height+s,R);p=Math.min(f,Math.max(Dt.initialHeight,E))}if(e.includes("top")){const R=r.y+n.height-Re,E=Math.min(n.height-s,R);p=Math.min(f,Math.max(Dt.initialHeight,E)),m=r.y-(p-n.height)}let b=Re,w=window.innerWidth-Re-h,S=Re,T=window.innerHeight-Re-p;return c?y=Math.min(-b,Math.max(y,-w)):y=Math.max(b,Math.min(y,w)),m=Math.max(S,Math.min(m,T)),{newSize:{width:h,height:p},newPosition:{x:y,y:m}}},KC=e=>{const n=ll(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(n.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,n.maxHeight-e.y),"bottom-right":Math.hypot(n.maxWidth-e.x,n.maxHeight-e.y)};let i="top-left";for(const s in r)r[s]<r[i]&&(i=s);return i},JC=(e,n,r,i,s=100)=>{const c=r!==void 0?e-r:0,u=i!==void 0?n-i:0,f=window.innerWidth/2,h=window.innerHeight/2,p=c>s,y=c<-s,m=u>s,b=u<-s;if(p||y){const w=n>h;return p?w?"bottom-right":"top-right":w?"bottom-left":"top-left"}if(m||b){const w=e>f;return m?w?"bottom-right":"bottom-left":w?"top-right":"top-left"}return e>f?n>h?"bottom-right":"top-right":n>h?"bottom-left":"top-left"},qc=({position:e})=>{const n=ke(null),r=ke(null),i=ke(null),s=ke(null);je(()=>{const f=n.current;if(!f)return;const h=()=>{f.classList.remove("pointer-events-none");const m=ge.inspectState.value.kind==="focused",b=ut.value.view!=="none";(m||b)&&QC(e,ve.value.corner,ve.value.dimensions.isFullWidth,ve.value.dimensions.isFullHeight)?f.classList.remove("hidden","pointer-events-none","opacity-0"):f.classList.add("hidden","pointer-events-none","opacity-0")},p=ve.subscribe(m=>{r.current!==null&&i.current!==null&&s.current!==null&&m.dimensions.width===r.current&&m.dimensions.height===i.current&&m.corner===s.current||(h(),r.current=m.dimensions.width,i.current=m.dimensions.height,s.current=m.corner)}),y=ge.inspectState.subscribe(()=>{h()});return()=>{p(),y(),r.current=null,i.current=null,s.current=null}},[]);const c=Ct(f=>{f.preventDefault(),f.stopPropagation();const h=dp.value;if(!h)return;const p=h.style,{dimensions:y}=ve.value,m=f.clientX,b=f.clientY,w=y.width,S=y.height,T=y.position;ve.value={...ve.value,dimensions:{...y,isFullWidth:!1,isFullHeight:!1,width:w,height:S,position:T}};let R=null;const E=L=>{R||(p.transition="none",R=requestAnimationFrame(()=>{const{newSize:U,newPosition:F}=WC(e,{width:w,height:S},T,L.clientX-m,L.clientY-b);p.transform=`translate3d(${F.x}px, ${F.y}px, 0)`,p.width=`${U.width}px`,p.height=`${U.height}px`;const B=Math.floor(U.width-sr/2),ee=ve.value.componentsTree.width,W=Math.min(B,Math.max(sr,ee));ve.value={...ve.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:U.width,height:U.height,position:F},componentsTree:{...ve.value.componentsTree,width:W}},R=null}))},A=()=>{R&&(cancelAnimationFrame(R),R=null),document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",A);const{dimensions:L,corner:U}=ve.value,F=ll(),B=F.isFullWidth(L.width),ee=F.isFullHeight(L.height),W=B&&ee;let Z=U;(W||B||ee)&&(Z=KC(L.position));const J=Ks(Z,L.width,L.height),re=()=>{h.removeEventListener("transitionend",re)};h.addEventListener("transitionend",re),p.transform=`translate3d(${J.x}px, ${J.y}px, 0)`,ve.value={...ve.value,corner:Z,dimensions:{isFullWidth:B,isFullHeight:ee,width:L.width,height:L.height,position:J},lastDimensions:{isFullWidth:B,isFullHeight:ee,width:L.width,height:L.height,position:J}},bn(Yr,{corner:Z,dimensions:ve.value.dimensions,lastDimensions:ve.value.lastDimensions,componentsTree:ve.value.componentsTree})};document.addEventListener("pointermove",E,{passive:!0}),document.addEventListener("pointerup",A)},[]),u=Ct(f=>{f.preventDefault(),f.stopPropagation();const h=dp.value;if(!h)return;const p=h.style,{dimensions:y,corner:m}=ve.value,b=ll(),w=b.isFullWidth(y.width),S=b.isFullHeight(y.height),T=w&&S,R=(w||S)&&!T;let E=y.width,A=y.height;const L=GC(e,m,T,w,S);e==="left"||e==="right"?(E=w?y.width:b.maxWidth,R&&(E=w?Dt.width:b.maxWidth)):(A=S?y.height:b.maxHeight,R&&(A=S?Dt.initialHeight:b.maxHeight)),T&&(e==="left"||e==="right"?E=Dt.width:A=Dt.initialHeight);const U=Ks(L,E,A),F={isFullWidth:b.isFullWidth(E),isFullHeight:b.isFullHeight(A),width:E,height:A,position:U},B=Math.floor(E-Dt.width/2),ee=ve.value.componentsTree.width,W=Math.floor(E*.3),Z=w?sr:(e==="left"||e==="right")&&!w?Math.min(B,Math.max(sr,W)):Math.min(B,Math.max(sr,ee));requestAnimationFrame(()=>{ve.value={corner:L,dimensions:F,lastDimensions:y,componentsTree:{...ve.value.componentsTree,width:Z}},p.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",p.width=`${E}px`,p.height=`${A}px`,p.transform=`translate3d(${U.x}px, ${U.y}px, 0)`}),bn(Yr,{corner:L,dimensions:F,lastDimensions:y,componentsTree:{...ve.value.componentsTree,width:Z}})},[]);return v("div",{ref:n,onPointerDown:c,onDblClick:u,className:H("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:v("span",{className:"resize-line-wrapper",children:v("span",{className:"resize-line",children:v(wt,{name:"icon-ellipsis",size:18,className:H("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},Eb={horizontal:{width:20,height:48},vertical:{width:48,height:20}},eR=()=>{const e=ke(null),n=ke(!1),r=ke(0),i=ke(0),s=ke(!1),c=Ct((b=!0)=>{if(!e.current)return;const{corner:w}=ve.value;let S,T;if(An.value){const Z=An.value.orientation||"horizontal",J=Eb[Z];S=J.width,T=J.height}else if(n.current){const Z=ve.value.lastDimensions;S=Vc(Z.width,0,!0),T=Vc(Z.height,0,!1),s.current&&(s.current=!1)}else S=r.current,T=i.current;let E=Ks(w,S,T);if(An.value){const{corner:Z,orientation:J="horizontal"}=An.value,re=Eb[J];switch(Z){case"top-left":E=J==="horizontal"?{x:-1,y:Re}:{x:Re,y:-1};break;case"bottom-left":E=J==="horizontal"?{x:-1,y:window.innerHeight-re.height-Re}:{x:Re,y:window.innerHeight-re.height+1};break;case"top-right":E=J==="horizontal"?{x:window.innerWidth-re.width+1,y:Re}:{x:window.innerWidth-re.width-Re,y:-1};break;case"bottom-right":default:E=J==="horizontal"?{x:window.innerWidth-re.width+1,y:window.innerHeight-re.height-Re}:{x:window.innerWidth-re.width-Re,y:window.innerHeight-re.height+1};break}}const A=S<Dt.width||T<Dt.initialHeight,L=b&&!A,U=e.current,F=U.style;let B=null;const ee=()=>{gh(),U.removeEventListener("transitionend",ee),B&&(cancelAnimationFrame(B),B=null)};U.addEventListener("transitionend",ee),F.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",B=requestAnimationFrame(()=>{F.width=`${S}px`,F.height=`${T}px`,F.transform=`translate3d(${E.x}px, ${E.y}px, 0)`,B=null});const W={isFullWidth:S>=window.innerWidth-Re*2,isFullHeight:T>=window.innerHeight-Re*2,width:S,height:T,position:E};ve.value={corner:w,dimensions:W,lastDimensions:n?ve.value.lastDimensions:S>r.current?W:ve.value.lastDimensions,componentsTree:ve.value.componentsTree},L&&bn(Yr,{corner:ve.value.corner,dimensions:ve.value.dimensions,lastDimensions:ve.value.lastDimensions,componentsTree:ve.value.componentsTree}),gh()},[]),u=Ct(b=>{if(b.preventDefault(),!e.current||b.target.closest("button"))return;const w=e.current,S=w.style,{dimensions:T}=ve.value,R=b.clientX,E=b.clientY,A=T.position.x,L=T.position.y;let U=A,F=L,B=null,ee=!1,W=R,Z=E;const J=te=>{B||(ee=!0,W=te.clientX,Z=te.clientY,B=requestAnimationFrame(()=>{const le=W-R,fe=Z-E;U=Number(A)+le,F=Number(L)+fe,S.transition="none",S.transform=`translate3d(${U}px, ${F}px, 0)`;const j=U+T.width,x=F+T.height,N=Math.max(0,-U),M=Math.max(0,j-window.innerWidth),V=Math.max(0,-F),C=Math.max(0,x-window.innerHeight),z=Math.min(T.width,N+M),$=Math.min(T.height,V+C),q=z*T.height+$*T.width-z*$,I=T.width*T.height;let ie=q>I*.35;if(!ie&&Xe.options.value.showFPS){const K=U+T.width,he=K-100;ie=K<=0||he>=window.innerWidth||F+T.height<=0||F>=window.innerHeight}if(ie){const K=U+T.width/2,he=F+T.height/2,ue=window.innerWidth/2,be=window.innerHeight/2;let me;K<ue?me=he<be?"top-left":"bottom-left":me=he<be?"top-right":"bottom-right";let Ue;const Ve=Math.max(N,M),dt=Math.max(V,C);Ue=Ve>dt?"horizontal":"vertical",ve.value={...ve.value,corner:me,lastDimensions:{...T,position:Ks(me,T.width,T.height)}};const gt={corner:me,orientation:Ue};An.value=gt,bn(au,gt),bn(Yr,ve.value),c(!1),document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",re),B&&(cancelAnimationFrame(B),B=null)}B=null}))},re=()=>{if(!w)return;B&&(cancelAnimationFrame(B),B=null),document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",re);const te=Math.abs(W-R),le=Math.abs(Z-E),fe=Math.sqrt(te*te+le*le);if(!ee||fe<60)return;const j=JC(W,Z,R,E,ge.inspectState.value.kind==="focused"?80:40);if(j===ve.value.corner){S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const M=ve.value.dimensions.position;requestAnimationFrame(()=>{S.transform=`translate3d(${M.x}px, ${M.y}px, 0)`});return}const x=Ks(j,T.width,T.height);if(U===A&&F===L)return;const N=()=>{S.transition="none",gh(),w.removeEventListener("transitionend",N),B&&(cancelAnimationFrame(B),B=null)};w.addEventListener("transitionend",N),S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{S.transform=`translate3d(${x.x}px, ${x.y}px, 0)`}),ve.value={corner:j,dimensions:{isFullWidth:T.isFullWidth,isFullHeight:T.isFullHeight,width:T.width,height:T.height,position:x},lastDimensions:ve.value.lastDimensions,componentsTree:ve.value.componentsTree},bn(Yr,{corner:j,dimensions:ve.value.dimensions,lastDimensions:ve.value.lastDimensions,componentsTree:ve.value.componentsTree})};document.addEventListener("pointermove",J),document.addEventListener("pointerup",re)},[]),f=Ct(b=>{if(b.preventDefault(),!e.current||!An.value)return;const{corner:w,orientation:S="horizontal"}=An.value,T=b.clientX,R=b.clientY;let E=null,A=!1;const L=50,U=B=>{if(A||E)return;const ee=B.clientX-T,W=B.clientY-R;let Z=!1;if(S==="horizontal"?(w.endsWith("left")&&ee>L||w.endsWith("right")&&ee<-L)&&(Z=!0):(w.startsWith("top")&&W>L||w.startsWith("bottom")&&W<-L)&&(Z=!0),Z){if(A=!0,An.value=null,bn(au,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const J=e.current.offsetWidth;r.current=J||300;const re=ve.value.lastDimensions,te=Vc(re.width,0,!0),le=Vc(re.height,0,!1);let fe=B.clientX-te/2,j=B.clientY-le/2;fe=Math.max(Re,Math.min(fe,window.innerWidth-te-Re)),j=Math.max(Re,Math.min(j,window.innerHeight-le-Re)),ve.value={...ve.value,dimensions:{...ve.value.dimensions,position:{x:fe,y:j}}},c(!0);const x=Gr(uo);ut.value=x||{view:"none"},setTimeout(()=>{if(e.current){const N=new PointerEvent("pointerdown",{clientX:B.clientX,clientY:B.clientY,pointerId:B.pointerId,bubbles:!0});e.current.dispatchEvent(N)}},100)}});else{c(!0);const J=Gr(uo);ut.value=J||{view:"none"}}document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",F)}},F=()=>{document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",F)};document.addEventListener("pointermove",U),document.addEventListener("pointerup",F)},[]);je(()=>{if(!e.current)return;G0(uo),An.value?(i.current=36,r.current=0):(e.current.style.width="min-content",i.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${Re*2}px)`,e.current.style.maxHeight=`calc(100vh - ${Re*2}px)`,c(),ge.inspectState.value.kind!=="focused"&&!An.value&&!s.current&&(ve.value={...ve.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:i.current,position:ve.value.dimensions.position}}),dp.value=e.current;const b=ve.subscribe(R=>{if(!e.current)return;const{x:E,y:A}=R.dimensions.position,{width:L,height:U}=R.dimensions,F=e.current;requestAnimationFrame(()=>{F.style.transform=`translate3d(${E}px, ${A}px, 0)`,F.style.width=`${L}px`,F.style.height=`${U}px`})}),w=ut.subscribe(R=>{n.current=R.view!=="none",c(),An.value||(R.view!=="none"?bn(uo,R):G0(uo))}),S=ge.inspectState.subscribe(R=>{n.current=R.kind==="focused",c()}),T=()=>{c(!0)};return window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("resize",T),w(),S(),b(),bn(Yr,{...yr,corner:ve.value.corner})}},[]);const[h,p]=Be(!1);je(()=>{p(!0)},[]);const y=An.value;let m="";if(y){const{orientation:b="horizontal",corner:w}=y;b==="horizontal"?m=w?.endsWith("right")?"rotate-180":"":m=w?.startsWith("bottom")?"-rotate-90":"rotate-90"}return v(qe,{children:[v(YC,{}),v(gm.Provider,{value:e.current,children:v("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:y?f:u,className:H("fixed inset-0",y?(()=>{const{orientation:b="horizontal",corner:w}=y;return b==="horizontal"?w?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":w?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",y?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:y?v("button",{type:"button",onClick:()=>{An.value=null,bn(au,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const w=e.current.offsetWidth;r.current=w||300,c(!0)}});const b=Gr(uo);ut.value=b||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:v(wt,{name:"icon-chevron-right",size:16,className:H("transition-transform",m)})}):v(qe,{children:[v(qc,{position:"top"}),v(qc,{position:"bottom"}),v(qc,{position:"left"}),v(qc,{position:"right"}),v(qC,{})]})})})]})},gm=Jw(null),tR=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[v("title",{children:"React Scan Icons"}),v("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M5 3a2 2 0 0 0-2 2"}),v("path",{d:"M19 3a2 2 0 0 1 2 2"}),v("path",{d:"M5 21a2 2 0 0 1-2-2"}),v("path",{d:"M9 3h1"}),v("path",{d:"M9 21h2"}),v("path",{d:"M14 3h1"}),v("path",{d:"M3 9v1"}),v("path",{d:"M21 9v2"}),v("path",{d:"M3 14v1"})]}),v("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),v("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),v("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),v("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),v("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),v("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),v("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),v("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),v("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),v("circle",{cx:"12",cy:"12",r:"1"}),v("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),v("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"12",cy:"12",r:"1"}),v("circle",{cx:"19",cy:"12",r:"1"}),v("circle",{cx:"5",cy:"12",r:"1"})]}),v("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),v("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M20 6 9 17l-5-5"})}),v("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"m9 18 6-6-6-6"})}),v("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),v("circle",{cx:"12",cy:"12",r:"3"})]}),v("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:v("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),v("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),v("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),v("path",{d:"M9 11.2h5.7"})]}),v("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),v("path",{d:"M12 9v4"}),v("path",{d:"M12 17h.01"})]}),v("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 7v10"}),v("path",{d:"M6 5v14"}),v("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),v("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"11",cy:"11",r:"8"}),v("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),v("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),v("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),v("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),v("circle",{cx:"10",cy:"13",r:"8"}),v("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),v("path",{d:"M18 3 19.1 5.2"})]})]}),nR=class extends Gn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?v("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:v("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[v("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[v(wt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),v("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},rR=e=>{const n=document.createElement("div");n.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=n,e.appendChild(n),Zs(v(nR,{children:v(qe,{children:[v(tR,{}),v(eR,{})]})}),n);const r=n.remove.bind(n);return n.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,n.hasChildNodes()&&(Zs(null,n),Zs(null,n)),r()},n},aR={version:"0.4.3"},ii=null,Bs=null,iR=()=>{if(ii&&Bs)return{rootContainer:ii,shadowRoot:Bs};ii=document.createElement("div"),ii.id="react-scan-root",Bs=ii.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=_E,Bs.appendChild(e),document.documentElement.appendChild(ii),{rootContainer:ii,shadowRoot:Bs}},ge={wasDetailsOpen:Bt(!0),isInIframe:Bt(Tr&&window.self!==window.top),inspectState:Bt({kind:"uninitialized"}),monitor:Bt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:Bt(0),interactionListeningForRenders:null,changesListeners:new Map},Xe={instrumentation:null,componentAllowList:null,options:Bt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ge,version:aR.version};Tr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Xe.version);function oR(e){return e in Xe.options.value}var Gx=e=>{const n=[],r={};for(const i in e){if(!oR(i))continue;const s=e[i];switch(i){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?n.push(`- ${i} must be a boolean. Got "${s}"`):r[i]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[i]=s:n.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?n.push(`- ${i} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?n.push(`- ${i} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?n.push(`- ${i} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?n.push(`- ${i} must be a function. Got "${s}"`):r[i]=s;break;default:n.push(`- Unknown option "${i}"`)}}return n.length>0&&console.warn(`[React Scan] Invalid options:
${n.join(`
`)}`),r},sR=e=>{try{const n=Gx(e);if(Object.keys(n).length===0)return;const r="showToolbar"in n&&n.showToolbar!==void 0,i={...Xe.options.value,...n},{instrumentation:s}=Xe;s&&"enabled"in n&&(s.isPaused.value=n.enabled===!1),Xe.options.value=i;try{const c=Gr("react-scan-options")?.enabled;typeof c=="boolean"&&(i.enabled=c)}catch(c){Xe.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",c)}return bn("react-scan-options",i),r&&Zx(!!i.showToolbar),i}catch(n){Xe.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",n)}},lR=()=>Xe.options,Yc=null,Cb,qu=()=>{if(Yc!==null)return Yc;Cb??=pi();for(const e of Cb.renderers.values())A2(e)==="production"&&(Yc=!0);return Yc},cR=()=>{try{if(!Tr||!Xe.runInAllEnvironments&&qu()&&!Xe.options.value.dangerouslyForceRunInProduction)return;const e=Gr("react-scan-options");if(e){const r=Gx(e);Object.keys(r).length>0&&(Xe.options.value={...Xe.options.value,...r})}const n=lR();xE(()=>{Zx(!!n.value.showToolbar)}),!ge.monitor.value&&Tr&&setTimeout(()=>{O2()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){Xe.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},Zx=e=>{window.reactScanCleanupListeners?.();const n=WE(),r=uR();window.reactScanCleanupListeners=()=>{n(),r?.()};const i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i?.remove();return}i?.remove();const{shadowRoot:s}=iR();rR(s)},uR=()=>{try{const e=document.documentElement;return wC(e)}catch(e){Xe.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},dR=(e={})=>{sR(e),!(ge.isInIframe.value&&!Xe.options.value.allowInIframe&&!Xe.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||cR())},fR=new WeakSet,zh={exports:{}},Fs={},Dh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rb;function hR(){return Rb||(Rb=1,function(e){function n(x,N){var M=x.length;x.push(N);e:for(;0<M;){var V=M-1>>>1,C=x[V];if(0<s(C,N))x[V]=N,x[M]=C,M=V;else break e}}function r(x){return x.length===0?null:x[0]}function i(x){if(x.length===0)return null;var N=x[0],M=x.pop();if(M!==N){x[0]=M;e:for(var V=0,C=x.length,z=C>>>1;V<z;){var $=2*(V+1)-1,q=x[$],I=$+1,ie=x[I];if(0>s(q,M))I<C&&0>s(ie,q)?(x[V]=ie,x[I]=M,V=I):(x[V]=q,x[$]=M,V=$);else if(I<C&&0>s(ie,M))x[V]=ie,x[I]=M,V=I;else break e}}return N}function s(x,N){var M=x.sortIndex-N.sortIndex;return M!==0?M:x.id-N.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],y=1,m=null,b=3,w=!1,S=!1,T=!1,R=!1,E=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(x){for(var N=r(p);N!==null;){if(N.callback===null)i(p);else if(N.startTime<=x)i(p),N.sortIndex=N.expirationTime,n(h,N);else break;N=r(p)}}function F(x){if(T=!1,U(x),!S)if(r(h)!==null)S=!0,B||(B=!0,te());else{var N=r(p);N!==null&&j(F,N.startTime-x)}}var B=!1,ee=-1,W=5,Z=-1;function J(){return R?!0:!(e.unstable_now()-Z<W)}function re(){if(R=!1,B){var x=e.unstable_now();Z=x;var N=!0;try{e:{S=!1,T&&(T=!1,A(ee),ee=-1),w=!0;var M=b;try{t:{for(U(x),m=r(h);m!==null&&!(m.expirationTime>x&&J());){var V=m.callback;if(typeof V=="function"){m.callback=null,b=m.priorityLevel;var C=V(m.expirationTime<=x);if(x=e.unstable_now(),typeof C=="function"){m.callback=C,U(x),N=!0;break t}m===r(h)&&i(h),U(x)}else i(h);m=r(h)}if(m!==null)N=!0;else{var z=r(p);z!==null&&j(F,z.startTime-x),N=!1}}break e}finally{m=null,b=M,w=!1}N=void 0}}finally{N?te():B=!1}}}var te;if(typeof L=="function")te=function(){L(re)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,fe=le.port2;le.port1.onmessage=re,te=function(){fe.postMessage(null)}}else te=function(){E(re,0)};function j(x,N){ee=E(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(x){switch(b){case 1:case 2:case 3:var N=3;break;default:N=b}var M=b;b=N;try{return x()}finally{b=M}},e.unstable_requestPaint=function(){R=!0},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var M=b;b=x;try{return N()}finally{b=M}},e.unstable_scheduleCallback=function(x,N,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,x){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=M+C,x={id:y++,callback:N,priorityLevel:x,startTime:M,expirationTime:C,sortIndex:-1},M>V?(x.sortIndex=M,n(p,x),r(h)===null&&x===r(p)&&(T?(A(ee),ee=-1):T=!0,j(F,M-V))):(x.sortIndex=C,n(h,x),S||w||(S=!0,B||(B=!0,te()))),x},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(x){var N=b;return function(){var M=b;b=N;try{return x.apply(this,arguments)}finally{b=M}}}}(Lh)),Lh}var Nb;function pR(){return Nb||(Nb=1,Dh.exports=hR()),Dh.exports}var jh={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ab;function mR(){if(Ab)return rn;Ab=1;var e=wl();function n(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(h,p,y){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:m==null?null:""+m,children:h,containerInfo:p,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,rn.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return c(h,p,null,y)},rn.flushSync=function(h){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=y,i.d.f()}},rn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},rn.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},rn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,m=f(y,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:m,integrity:b,fetchPriority:w}):y==="script"&&i.d.X(h,{crossOrigin:m,integrity:b,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},rn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},rn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,m=f(y,p.crossOrigin);i.d.L(h,y,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},rn.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},rn.requestFormReset=function(h){i.d.r(h)},rn.unstable_batchedUpdates=function(h,p){return h(p)},rn.useFormState=function(h,p,y){return u.H.useFormState(h,p,y)},rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},rn.version="19.1.0",rn}var Ob;function Qx(){if(Ob)return jh.exports;Ob=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),jh.exports=mR(),jh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function gR(){if(Mb)return Fs;Mb=1;var e=pR(),n=wl(),r=Qx();function i(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var a=t,o=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(o=a.return),t=a.return;while(t)}return a.tag===3?o:null}function u(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function f(t){if(c(t)!==t)throw Error(i(188))}function h(t){var a=t.alternate;if(!a){if(a=c(t),a===null)throw Error(i(188));return a!==t?null:t}for(var o=t,l=a;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return f(d),t;if(g===l)return f(d),a;g=g.sibling}throw Error(i(188))}if(o.return!==l.return)o=d,l=g;else{for(var _=!1,k=d.child;k;){if(k===o){_=!0,o=d,l=g;break}if(k===l){_=!0,l=d,o=g;break}k=k.sibling}if(!_){for(k=g.child;k;){if(k===o){_=!0,o=g,l=d;break}if(k===l){_=!0,l=g,o=d;break}k=k.sibling}if(!_)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:a}function p(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=p(t),a!==null)return a;t=t.sibling}return null}var y=Object.assign,m=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=re&&t[re]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case R:return"Profiler";case T:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case Z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case L:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case U:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ee:return a=t.displayName||null,a!==null?a:fe(t.type)||"Memo";case W:a=t._payload,t=t._init;try{return fe(t(a))}catch{}}return null}var j=Array.isArray,x=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},V=[],C=-1;function z(t){return{current:t}}function $(t){0>C||(t.current=V[C],V[C]=null,C--)}function q(t,a){C++,V[C]=t.current,t.current=a}var I=z(null),ie=z(null),K=z(null),he=z(null);function ue(t,a){switch(q(K,a),q(ie,t),q(I,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?qy(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=qy(a),t=Yy(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(I),q(I,t)}function be(){$(I),$(ie),$(K)}function me(t){t.memoizedState!==null&&q(he,t);var a=I.current,o=Yy(a,t.type);a!==o&&(q(ie,t),q(I,o))}function Ue(t){ie.current===t&&($(I),$(ie)),he.current===t&&($(he),As._currentValue=M)}var Ve=Object.prototype.hasOwnProperty,dt=e.unstable_scheduleCallback,gt=e.unstable_cancelCallback,_n=e.unstable_shouldYield,dn=e.unstable_requestPaint,Ze=e.unstable_now,fn=e.unstable_getCurrentPriorityLevel,en=e.unstable_ImmediatePriority,La=e.unstable_UserBlockingPriority,Er=e.unstable_NormalPriority,ze=e.unstable_LowPriority,nt=e.unstable_IdlePriority,ja=e.log,_i=e.unstable_setDisableYieldValue,Ln=null,Xt=null;function Wn(t){if(typeof ja=="function"&&_i(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Ln,t)}catch{}}var Gt=Math.clz32?Math.clz32:Wr,Qr=Math.log,Tl=Math.LN2;function Wr(t){return t>>>=0,t===0?32:31-(Qr(t)/Tl|0)|0}var Si=256,ki=4194304;function dr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ua(t,a,o){var l=t.pendingLanes;if(l===0)return 0;var d=0,g=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var k=l&134217727;return k!==0?(l=k&~g,l!==0?d=dr(l):(_&=k,_!==0?d=dr(_):o||(o=k&~t,o!==0&&(d=dr(o))))):(k=l&~g,k!==0?d=dr(k):_!==0?d=dr(_):o||(o=l&~t,o!==0&&(d=dr(o)))),d===0?0:a!==0&&a!==d&&(a&g)===0&&(g=d&-d,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:d}function Ha(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Bo(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kn(){var t=Si;return Si<<=1,(Si&4194048)===0&&(Si=256),t}function El(){var t=ki;return ki<<=1,(ki&62914560)===0&&(ki=4194304),t}function Fo(t){for(var a=[],o=0;31>o;o++)a.push(t);return a}function Kr(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Cl(t,a,o,l,d,g){var _=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var k=t.entanglements,O=t.expirationTimes,X=t.hiddenUpdates;for(o=_&~o;0<o;){var ne=31-Gt(o),oe=1<<ne;k[ne]=0,O[ne]=-1;var G=X[ne];if(G!==null)for(X[ne]=null,ne=0;ne<G.length;ne++){var Q=G[ne];Q!==null&&(Q.lane&=-536870913)}o&=~oe}l!==0&&Oe(t,l,0),g!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=g&~(_&~a))}function Oe(t,a,o){t.pendingLanes|=a,t.suspendedLanes&=~a;var l=31-Gt(a);t.entangledLanes|=a,t.entanglements[l]=t.entanglements[l]|1073741824|o&4194090}function xt(t,a){var o=t.entangledLanes|=a;for(t=t.entanglements;o;){var l=31-Gt(o),d=1<<l;d&a|t[l]&a&&(t[l]|=a),o&=~d}}function At(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ba(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:d0(t.type))}function Lt(t,a){var o=N.p;try{return N.p=t,a()}finally{N.p=o}}var _t=Math.random().toString(36).slice(2),St="__reactFiber$"+_t,lt="__reactProps$"+_t,Ft="__reactContainer$"+_t,Ti="__reactEvents$"+_t,Cr="__reactListeners$"+_t,Mm="__reactHandles$"+_t,zm="__reactResources$"+_t,Po="__reactMarker$"+_t;function ed(t){delete t[St],delete t[lt],delete t[Ti],delete t[Cr],delete t[Mm]}function Ei(t){var a=t[St];if(a)return a;for(var o=t.parentNode;o;){if(a=o[Ft]||o[St]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(t=Qy(t);t!==null;){if(o=t[St])return o;t=Qy(t)}return a}t=o,o=t.parentNode}return null}function Ci(t){if(t=t[St]||t[Ft]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function $o(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(i(33))}function Ri(t){var a=t[zm];return a||(a=t[zm]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Pt(t){t[Po]=!0}var Dm=new Set,Lm={};function Fa(t,a){Ni(t,a),Ni(t+"Capture",a)}function Ni(t,a){for(Lm[t]=a,t=0;t<a.length;t++)Dm.add(a[t])}var q1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jm={},Um={};function Y1(t){return Ve.call(Um,t)?!0:Ve.call(jm,t)?!1:q1.test(t)?Um[t]=!0:(jm[t]=!0,!1)}function Rl(t,a,o){if(Y1(a))if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+o)}}function Nl(t,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+o)}}function Rr(t,a,o,l){if(l===null)t.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(a,o,""+l)}}var td,Hm;function Ai(t){if(td===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);td=a&&a[1]||"",Hm=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+td+t+Hm}var nd=!1;function rd(t,a){if(!t||nd)return"";nd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(Q){var G=Q}Reflect.construct(t,[],oe)}else{try{oe.call()}catch(Q){G=Q}t.call(oe.prototype)}}else{try{throw Error()}catch(Q){G=Q}(oe=t())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(Q){if(Q&&G&&typeof Q.stack=="string")return[Q.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=l.DetermineComponentFrameRoot(),_=g[0],k=g[1];if(_&&k){var O=_.split(`
`),X=k.split(`
`);for(d=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;d<X.length&&!X[d].includes("DetermineComponentFrameRoot");)d++;if(l===O.length||d===X.length)for(l=O.length-1,d=X.length-1;1<=l&&0<=d&&O[l]!==X[d];)d--;for(;1<=l&&0<=d;l--,d--)if(O[l]!==X[d]){if(l!==1||d!==1)do if(l--,d--,0>d||O[l]!==X[d]){var ne=`
`+O[l].replace(" at new "," at ");return t.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",t.displayName)),ne}while(1<=l&&0<=d);break}}}finally{nd=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?Ai(o):""}function X1(t){switch(t.tag){case 26:case 27:case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 15:return rd(t.type,!1);case 11:return rd(t.type.render,!1);case 1:return rd(t.type,!0);case 31:return Ai("Activity");default:return""}}function Bm(t){try{var a="";do a+=X1(t),t=t.return;while(t);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function G1(t){var a=Fm(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),l=""+t[a];if(!t.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return d.call(this)},set:function(_){l=""+_,g.call(this,_)}}),Object.defineProperty(t,a,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Al(t){t._valueTracker||(t._valueTracker=G1(t))}function Pm(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var o=a.getValue(),l="";return t&&(l=Fm(t)?t.checked?"true":"false":t.value),t=l,t!==o?(a.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Z1=/[\n"\\]/g;function Un(t){return t.replace(Z1,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ad(t,a,o,l,d,g,_,k){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),a!=null?_==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+jn(a)):t.value!==""+jn(a)&&(t.value=""+jn(a)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),a!=null?id(t,_,jn(a)):o!=null?id(t,_,jn(o)):l!=null&&t.removeAttribute("value"),d==null&&g!=null&&(t.defaultChecked=!!g),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?t.name=""+jn(k):t.removeAttribute("name")}function $m(t,a,o,l,d,g,_,k){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;o=o!=null?""+jn(o):"",a=a!=null?""+jn(a):o,k||a===t.value||(t.value=a),t.defaultValue=a}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=k?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function id(t,a,o){a==="number"&&Ol(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function Oi(t,a,o,l){if(t=t.options,a){a={};for(var d=0;d<o.length;d++)a["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=a.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+jn(o),a=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}a!==null||t[d].disabled||(a=t[d])}a!==null&&(a.selected=!0)}}function Im(t,a,o){if(a!=null&&(a=""+jn(a),a!==t.value&&(t.value=a),o==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=o!=null?""+jn(o):""}function Vm(t,a,o,l){if(a==null){if(l!=null){if(o!=null)throw Error(i(92));if(j(l)){if(1<l.length)throw Error(i(93));l=l[0]}o=l}o==null&&(o=""),a=o}o=jn(a),t.defaultValue=o,l=t.textContent,l===o&&l!==""&&l!==null&&(t.value=l)}function Mi(t,a){if(a){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=a;return}}t.textContent=a}var Q1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qm(t,a,o){var l=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":l?t.setProperty(a,o):typeof o!="number"||o===0||Q1.has(a)?a==="float"?t.cssFloat=o:t[a]=(""+o).trim():t[a]=o+"px"}function Ym(t,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(t=t.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in a)l=a[d],a.hasOwnProperty(d)&&o[d]!==l&&qm(t,d,l)}else for(var g in a)a.hasOwnProperty(g)&&qm(t,g,a[g])}function od(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(t){return K1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var sd=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zi=null,Di=null;function Xm(t){var a=Ci(t);if(a&&(t=a.stateNode)){var o=t[lt]||null;e:switch(t=a.stateNode,a.type){case"input":if(ad(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Un(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var l=o[a];if(l!==t&&l.form===t.form){var d=l[lt]||null;if(!d)throw Error(i(90));ad(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<o.length;a++)l=o[a],l.form===t.form&&Pm(l)}break e;case"textarea":Im(t,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Oi(t,!!o.multiple,a,!1)}}}var cd=!1;function Gm(t,a,o){if(cd)return t(a,o);cd=!0;try{var l=t(a);return l}finally{if(cd=!1,(zi!==null||Di!==null)&&(vc(),zi&&(a=zi,t=Di,Di=zi=null,Xm(a),t)))for(a=0;a<t.length;a++)Xm(t[a])}}function Io(t,a){var o=t.stateNode;if(o===null)return null;var l=o[lt]||null;if(l===null)return null;o=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=!1;if(Nr)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{ud=!1}var Jr=null,dd=null,zl=null;function Zm(){if(zl)return zl;var t,a=dd,o=a.length,l,d="value"in Jr?Jr.value:Jr.textContent,g=d.length;for(t=0;t<o&&a[t]===d[t];t++);var _=o-t;for(l=1;l<=_&&a[o-l]===d[g-l];l++);return zl=d.slice(t,1<l?1-l:void 0)}function Dl(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function Qm(){return!1}function hn(t){function a(o,l,d,g,_){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=g,this.target=_,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(o=t[k],this[k]=o?o(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ll:Qm,this.isPropagationStopped=Qm,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),a}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=hn(Pa),qo=y({},Pa,{view:0,detail:0}),J1=hn(qo),fd,hd,Yo,Ul=y({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(fd=t.screenX-Yo.screenX,hd=t.screenY-Yo.screenY):hd=fd=0,Yo=t),fd)},movementY:function(t){return"movementY"in t?t.movementY:hd}}),Wm=hn(Ul),e_=y({},Ul,{dataTransfer:0}),t_=hn(e_),n_=y({},qo,{relatedTarget:0}),pd=hn(n_),r_=y({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=hn(r_),i_=y({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o_=hn(i_),s_=y({},Pa,{data:0}),Km=hn(s_),l_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d_(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=u_[t])?!!a[t]:!1}function md(){return d_}var f_=y({},qo,{key:function(t){if(t.key){var a=l_[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h_=hn(f_),p_=y({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=hn(p_),m_=y({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),g_=hn(m_),v_=y({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=hn(v_),b_=y({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w_=hn(b_),x_=y({},Pa,{newState:0,oldState:0}),__=hn(x_),S_=[9,13,27,32],gd=Nr&&"CompositionEvent"in window,Xo=null;Nr&&"documentMode"in document&&(Xo=document.documentMode);var k_=Nr&&"TextEvent"in window&&!Xo,eg=Nr&&(!gd||Xo&&8<Xo&&11>=Xo),tg=" ",ng=!1;function rg(t,a){switch(t){case"keyup":return S_.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function T_(t,a){switch(t){case"compositionend":return ag(a);case"keypress":return a.which!==32?null:(ng=!0,tg);case"textInput":return t=a.data,t===tg&&ng?null:t;default:return null}}function E_(t,a){if(Li)return t==="compositionend"||!gd&&rg(t,a)?(t=Zm(),zl=dd=Jr=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return eg&&a.locale!=="ko"?null:a.data;default:return null}}var C_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!C_[t.type]:a==="textarea"}function og(t,a,o,l){zi?Di?Di.push(l):Di=[l]:zi=l,a=Sc(a,"onChange"),0<a.length&&(o=new jl("onChange","change",null,o,l),t.push({event:o,listeners:a}))}var Go=null,Zo=null;function R_(t){Fy(t,0)}function Hl(t){var a=$o(t);if(Pm(a))return t}function sg(t,a){if(t==="change")return a}var lg=!1;if(Nr){var vd;if(Nr){var yd="oninput"in document;if(!yd){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),yd=typeof cg.oninput=="function"}vd=yd}else vd=!1;lg=vd&&(!document.documentMode||9<document.documentMode)}function ug(){Go&&(Go.detachEvent("onpropertychange",dg),Zo=Go=null)}function dg(t){if(t.propertyName==="value"&&Hl(Zo)){var a=[];og(a,Zo,t,ld(t)),Gm(R_,a)}}function N_(t,a,o){t==="focusin"?(ug(),Go=a,Zo=o,Go.attachEvent("onpropertychange",dg)):t==="focusout"&&ug()}function A_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Zo)}function O_(t,a){if(t==="click")return Hl(a)}function M_(t,a){if(t==="input"||t==="change")return Hl(a)}function z_(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Sn=typeof Object.is=="function"?Object.is:z_;function Qo(t,a){if(Sn(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var o=Object.keys(t),l=Object.keys(a);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!Ve.call(a,d)||!Sn(t[d],a[d]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,a){var o=fg(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=a&&l>=a)return{node:o,offset:a-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=fg(o)}}function pg(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?pg(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function mg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Ol(t.document);a instanceof t.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)t=a.contentWindow;else break;a=Ol(t.document)}return a}function bd(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var D_=Nr&&"documentMode"in document&&11>=document.documentMode,ji=null,wd=null,Wo=null,xd=!1;function gg(t,a,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xd||ji==null||ji!==Ol(l)||(l=ji,"selectionStart"in l&&bd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wo&&Qo(Wo,l)||(Wo=l,l=Sc(wd,"onSelect"),0<l.length&&(a=new jl("onSelect","select",null,a,o),t.push({event:a,listeners:l}),a.target=ji)))}function $a(t,a){var o={};return o[t.toLowerCase()]=a.toLowerCase(),o["Webkit"+t]="webkit"+a,o["Moz"+t]="moz"+a,o}var Ui={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},_d={},vg={};Nr&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function Ia(t){if(_d[t])return _d[t];if(!Ui[t])return t;var a=Ui[t],o;for(o in a)if(a.hasOwnProperty(o)&&o in vg)return _d[t]=a[o];return t}var yg=Ia("animationend"),bg=Ia("animationiteration"),wg=Ia("animationstart"),L_=Ia("transitionrun"),j_=Ia("transitionstart"),U_=Ia("transitioncancel"),xg=Ia("transitionend"),_g=new Map,Sd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sd.push("scrollEnd");function Jn(t,a){_g.set(t,a),Fa(a,[t])}var Sg=new WeakMap;function Hn(t,a){if(typeof t=="object"&&t!==null){var o=Sg.get(t);return o!==void 0?o:(a={value:t,source:a,stack:Bm(a)},Sg.set(t,a),a)}return{value:t,source:a,stack:Bm(a)}}var Bn=[],Hi=0,kd=0;function Bl(){for(var t=Hi,a=kd=Hi=0;a<t;){var o=Bn[a];Bn[a++]=null;var l=Bn[a];Bn[a++]=null;var d=Bn[a];Bn[a++]=null;var g=Bn[a];if(Bn[a++]=null,l!==null&&d!==null){var _=l.pending;_===null?d.next=d:(d.next=_.next,_.next=d),l.pending=d}g!==0&&kg(o,d,g)}}function Fl(t,a,o,l){Bn[Hi++]=t,Bn[Hi++]=a,Bn[Hi++]=o,Bn[Hi++]=l,kd|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Td(t,a,o,l){return Fl(t,a,o,l),Pl(t)}function Bi(t,a){return Fl(t,null,null,a),Pl(t)}function kg(t,a,o){t.lanes|=o;var l=t.alternate;l!==null&&(l.lanes|=o);for(var d=!1,g=t.return;g!==null;)g.childLanes|=o,l=g.alternate,l!==null&&(l.childLanes|=o),g.tag===22&&(t=g.stateNode,t===null||t._visibility&1||(d=!0)),t=g,g=g.return;return t.tag===3?(g=t.stateNode,d&&a!==null&&(d=31-Gt(o),t=g.hiddenUpdates,l=t[d],l===null?t[d]=[a]:l.push(a),a.lane=o|536870912),g):null}function Pl(t){if(50<_s)throw _s=0,Mf=null,Error(i(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Fi={};function H_(t,a,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,a,o,l){return new H_(t,a,o,l)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ar(t,a){var o=t.alternate;return o===null?(o=kn(t.tag,a,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=a,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,a=t.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function Tg(t,a){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,a=o.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function $l(t,a,o,l,d,g){var _=0;if(l=t,typeof t=="function")Ed(t)&&(_=1);else if(typeof t=="string")_=FS(t,o,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Z:return t=kn(31,o,a,d),t.elementType=Z,t.lanes=g,t;case S:return Va(o.children,d,g,a);case T:_=8,d|=24;break;case R:return t=kn(12,o,a,d|2),t.elementType=R,t.lanes=g,t;case F:return t=kn(13,o,a,d),t.elementType=F,t.lanes=g,t;case B:return t=kn(19,o,a,d),t.elementType=B,t.lanes=g,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:case L:_=10;break e;case A:_=9;break e;case U:_=11;break e;case ee:_=14;break e;case W:_=16,l=null;break e}_=29,o=Error(i(130,t===null?"null":typeof t,"")),l=null}return a=kn(_,o,a,d),a.elementType=t,a.type=l,a.lanes=g,a}function Va(t,a,o,l){return t=kn(7,t,l,a),t.lanes=o,t}function Cd(t,a,o){return t=kn(6,t,null,a),t.lanes=o,t}function Rd(t,a,o){return a=kn(4,t.children!==null?t.children:[],t.key,a),a.lanes=o,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Pi=[],$i=0,Il=null,Vl=0,Fn=[],Pn=0,qa=null,Or=1,Mr="";function Ya(t,a){Pi[$i++]=Vl,Pi[$i++]=Il,Il=t,Vl=a}function Eg(t,a,o){Fn[Pn++]=Or,Fn[Pn++]=Mr,Fn[Pn++]=qa,qa=t;var l=Or;t=Mr;var d=32-Gt(l)-1;l&=~(1<<d),o+=1;var g=32-Gt(a)+d;if(30<g){var _=d-d%5;g=(l&(1<<_)-1).toString(32),l>>=_,d-=_,Or=1<<32-Gt(a)+d|o<<d|l,Mr=g+t}else Or=1<<g|o<<d|l,Mr=t}function Nd(t){t.return!==null&&(Ya(t,1),Eg(t,1,0))}function Ad(t){for(;t===Il;)Il=Pi[--$i],Pi[$i]=null,Vl=Pi[--$i],Pi[$i]=null;for(;t===qa;)qa=Fn[--Pn],Fn[Pn]=null,Mr=Fn[--Pn],Fn[Pn]=null,Or=Fn[--Pn],Fn[Pn]=null}var on=null,yt=null,Ke=!1,Xa=null,fr=!1,Od=Error(i(519));function Ga(t){var a=Error(i(418,""));throw es(Hn(a,t)),Od}function Cg(t){var a=t.stateNode,o=t.type,l=t.memoizedProps;switch(a[St]=t,a[lt]=l,o){case"dialog":Ie("cancel",a),Ie("close",a);break;case"iframe":case"object":case"embed":Ie("load",a);break;case"video":case"audio":for(o=0;o<ks.length;o++)Ie(ks[o],a);break;case"source":Ie("error",a);break;case"img":case"image":case"link":Ie("error",a),Ie("load",a);break;case"details":Ie("toggle",a);break;case"input":Ie("invalid",a),$m(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Al(a);break;case"select":Ie("invalid",a);break;case"textarea":Ie("invalid",a),Vm(a,l.value,l.defaultValue,l.children),Al(a)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||l.suppressHydrationWarning===!0||Vy(a.textContent,o)?(l.popover!=null&&(Ie("beforetoggle",a),Ie("toggle",a)),l.onScroll!=null&&Ie("scroll",a),l.onScrollEnd!=null&&Ie("scrollend",a),l.onClick!=null&&(a.onclick=kc),a=!0):a=!1,a||Ga(t)}function Rg(t){for(on=t.return;on;)switch(on.tag){case 5:case 13:fr=!1;return;case 27:case 3:fr=!0;return;default:on=on.return}}function Ko(t){if(t!==on)return!1;if(!Ke)return Rg(t),Ke=!0,!1;var a=t.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Gf(t.type,t.memoizedProps)),o=!o),o&&yt&&Ga(t),Rg(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(o=t.data,o==="/$"){if(a===0){yt=tr(t.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;t=t.nextSibling}yt=null}}else a===27?(a=yt,ma(t.type)?(t=Kf,Kf=null,yt=t):yt=a):yt=on?tr(t.stateNode.nextSibling):null;return!0}function Jo(){yt=on=null,Ke=!1}function Ng(){var t=Xa;return t!==null&&(gn===null?gn=t:gn.push.apply(gn,t),Xa=null),t}function es(t){Xa===null?Xa=[t]:Xa.push(t)}var Md=z(null),Za=null,zr=null;function ea(t,a,o){q(Md,a._currentValue),a._currentValue=o}function Dr(t){t._currentValue=Md.current,$(Md)}function zd(t,a,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),t===o)break;t=t.return}}function Dd(t,a,o,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var g=d.dependencies;if(g!==null){var _=d.child;g=g.firstContext;e:for(;g!==null;){var k=g;g=d;for(var O=0;O<a.length;O++)if(k.context===a[O]){g.lanes|=o,k=g.alternate,k!==null&&(k.lanes|=o),zd(g.return,o,t),l||(_=null);break e}g=k.next}}else if(d.tag===18){if(_=d.return,_===null)throw Error(i(341));_.lanes|=o,g=_.alternate,g!==null&&(g.lanes|=o),zd(_,o,t),_=null}else _=d.child;if(_!==null)_.return=d;else for(_=d;_!==null;){if(_===t){_=null;break}if(d=_.sibling,d!==null){d.return=_.return,_=d;break}_=_.return}d=_}}function ts(t,a,o,l){t=null;for(var d=a,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var _=d.alternate;if(_===null)throw Error(i(387));if(_=_.memoizedProps,_!==null){var k=d.type;Sn(d.pendingProps.value,_.value)||(t!==null?t.push(k):t=[k])}}else if(d===he.current){if(_=d.alternate,_===null)throw Error(i(387));_.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(As):t=[As])}d=d.return}t!==null&&Dd(a,t,o,l),a.flags|=262144}function ql(t){for(t=t.firstContext;t!==null;){if(!Sn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Za=t,zr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function tn(t){return Ag(Za,t)}function Yl(t,a){return Za===null&&Qa(t),Ag(t,a)}function Ag(t,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},zr===null){if(t===null)throw Error(i(308));zr=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else zr=zr.next=a;return o}var B_=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(o,l){t.push(l)}};this.abort=function(){a.aborted=!0,t.forEach(function(o){return o()})}},F_=e.unstable_scheduleCallback,P_=e.unstable_NormalPriority,jt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ld(){return{controller:new B_,data:new Map,refCount:0}}function ns(t){t.refCount--,t.refCount===0&&F_(P_,function(){t.controller.abort()})}var rs=null,jd=0,Ii=0,Vi=null;function $_(t,a){if(rs===null){var o=rs=[];jd=0,Ii=Bf(),Vi={status:"pending",value:void 0,then:function(l){o.push(l)}}}return jd++,a.then(Og,Og),a}function Og(){if(--jd===0&&rs!==null){Vi!==null&&(Vi.status="fulfilled");var t=rs;rs=null,Ii=0,Vi=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function I_(t,a){var o=[],l={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return t.then(function(){l.status="fulfilled",l.value=a;for(var d=0;d<o.length;d++)(0,o[d])(a)},function(d){for(l.status="rejected",l.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),l}var Mg=x.S;x.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&$_(t,a),Mg!==null&&Mg(t,a)};var Wa=z(null);function Ud(){var t=Wa.current;return t!==null?t:ct.pooledCache}function Xl(t,a){a===null?q(Wa,Wa.current):q(Wa,a.pool)}function zg(){var t=Ud();return t===null?null:{parent:jt._currentValue,pool:t}}var as=Error(i(460)),Dg=Error(i(474)),Gl=Error(i(542)),Hd={then:function(){}};function Lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zl(){}function jg(t,a,o){switch(o=t[o],o===void 0?t.push(a):o!==a&&(a.then(Zl,Zl),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Hg(t),t;default:if(typeof a.status=="string")a.then(Zl,Zl);else{if(t=ct,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=a,t.status="pending",t.then(function(l){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=l}},function(l){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Hg(t),t}throw is=a,as}}var is=null;function Ug(){if(is===null)throw Error(i(459));var t=is;return is=null,t}function Hg(t){if(t===as||t===Gl)throw Error(i(483))}var ta=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fd(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ra(t,a,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(et&2)!==0){var d=l.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a,a=Pl(t),kg(t,null,o),a}return Fl(t,l,a,o),Pl(t)}function os(t,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var l=a.lanes;l&=t.pendingLanes,o|=l,a.lanes=o,xt(t,o)}}function Pd(t,a){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var _={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?d=g=_:g=g.next=_,o=o.next}while(o!==null);g===null?d=g=a:g=g.next=a}else d=g=a;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:l.shared,callbacks:l.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=a:t.next=a,o.lastBaseUpdate=a}var $d=!1;function ss(){if($d){var t=Vi;if(t!==null)throw t}}function ls(t,a,o,l){$d=!1;var d=t.updateQueue;ta=!1;var g=d.firstBaseUpdate,_=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var O=k,X=O.next;O.next=null,_===null?g=X:_.next=X,_=O;var ne=t.alternate;ne!==null&&(ne=ne.updateQueue,k=ne.lastBaseUpdate,k!==_&&(k===null?ne.firstBaseUpdate=X:k.next=X,ne.lastBaseUpdate=O))}if(g!==null){var oe=d.baseState;_=0,ne=X=O=null,k=g;do{var G=k.lane&-536870913,Q=G!==k.lane;if(Q?(Ye&G)===G:(l&G)===G){G!==0&&G===Ii&&($d=!0),ne!==null&&(ne=ne.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var Ce=t,Te=k;G=a;var it=o;switch(Te.tag){case 1:if(Ce=Te.payload,typeof Ce=="function"){oe=Ce.call(it,oe,G);break e}oe=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=Te.payload,G=typeof Ce=="function"?Ce.call(it,oe,G):Ce,G==null)break e;oe=y({},oe,G);break e;case 2:ta=!0}}G=k.callback,G!==null&&(t.flags|=64,Q&&(t.flags|=8192),Q=d.callbacks,Q===null?d.callbacks=[G]:Q.push(G))}else Q={lane:G,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ne===null?(X=ne=Q,O=oe):ne=ne.next=Q,_|=G;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;Q=k,k=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);ne===null&&(O=oe),d.baseState=O,d.firstBaseUpdate=X,d.lastBaseUpdate=ne,g===null&&(d.shared.lanes=0),da|=_,t.lanes=_,t.memoizedState=oe}}function Bg(t,a){if(typeof t!="function")throw Error(i(191,t));t.call(a)}function Fg(t,a){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)Bg(o[t],a)}var qi=z(null),Ql=z(0);function Pg(t,a){t=Pr,q(Ql,t),q(qi,a),Pr=t|a.baseLanes}function Id(){q(Ql,Pr),q(qi,qi.current)}function Vd(){Pr=Ql.current,$(qi),$(Ql)}var aa=0,He=null,rt=null,Ot=null,Wl=!1,Yi=!1,Ka=!1,Kl=0,cs=0,Xi=null,V_=0;function kt(){throw Error(i(321))}function qd(t,a){if(a===null)return!1;for(var o=0;o<a.length&&o<t.length;o++)if(!Sn(t[o],a[o]))return!1;return!0}function Yd(t,a,o,l,d,g){return aa=g,He=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,x.H=t===null||t.memoizedState===null?kv:Tv,Ka=!1,g=o(l,d),Ka=!1,Yi&&(g=Ig(a,o,l,d)),$g(t),g}function $g(t){x.H=ac;var a=rt!==null&&rt.next!==null;if(aa=0,Ot=rt=He=null,Wl=!1,cs=0,Xi=null,a)throw Error(i(300));t===null||$t||(t=t.dependencies,t!==null&&ql(t)&&($t=!0))}function Ig(t,a,o,l){He=t;var d=0;do{if(Yi&&(Xi=null),cs=0,Yi=!1,25<=d)throw Error(i(301));if(d+=1,Ot=rt=null,t.updateQueue!=null){var g=t.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}x.H=W_,g=a(o,l)}while(Yi);return g}function q_(){var t=x.H,a=t.useState()[0];return a=typeof a.then=="function"?us(a):a,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(He.flags|=1024),a}function Xd(){var t=Kl!==0;return Kl=0,t}function Gd(t,a,o){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~o}function Zd(t){if(Wl){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Wl=!1}aa=0,Ot=rt=He=null,Yi=!1,cs=Kl=0,Xi=null}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?He.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Mt(){if(rt===null){var t=He.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var a=Ot===null?He.memoizedState:Ot.next;if(a!==null)Ot=a,rt=t;else{if(t===null)throw He.alternate===null?Error(i(467)):Error(i(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Ot===null?He.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Qd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(t){var a=cs;return cs+=1,Xi===null&&(Xi=[]),t=jg(Xi,t,a),a=He,(Ot===null?a.memoizedState:Ot.next)===null&&(a=a.alternate,x.H=a===null||a.memoizedState===null?kv:Tv),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return us(t);if(t.$$typeof===L)return tn(t)}throw Error(i(438,String(t)))}function Wd(t){var a=null,o=He.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var l=He.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=Qd(),He.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(t),l=0;l<t;l++)o[l]=J;return a.index++,o}function Lr(t,a){return typeof a=="function"?a(t):a}function ec(t){var a=Mt();return Kd(a,rt,t)}function Kd(t,a,o){var l=t.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=o;var d=t.baseQueue,g=l.pending;if(g!==null){if(d!==null){var _=d.next;d.next=g.next,g.next=_}a.baseQueue=d=g,l.pending=null}if(g=t.baseState,d===null)t.memoizedState=g;else{a=d.next;var k=_=null,O=null,X=a,ne=!1;do{var oe=X.lane&-536870913;if(oe!==X.lane?(Ye&oe)===oe:(aa&oe)===oe){var G=X.revertLane;if(G===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),oe===Ii&&(ne=!0);else if((aa&G)===G){X=X.next,G===Ii&&(ne=!0);continue}else oe={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},O===null?(k=O=oe,_=g):O=O.next=oe,He.lanes|=G,da|=G;oe=X.action,Ka&&o(g,oe),g=X.hasEagerState?X.eagerState:o(g,oe)}else G={lane:oe,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},O===null?(k=O=G,_=g):O=O.next=G,He.lanes|=oe,da|=oe;X=X.next}while(X!==null&&X!==a);if(O===null?_=g:O.next=k,!Sn(g,t.memoizedState)&&($t=!0,ne&&(o=Vi,o!==null)))throw o;t.memoizedState=g,t.baseState=_,t.baseQueue=O,l.lastRenderedState=g}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Jd(t){var a=Mt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,g=a.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do g=t(g,_.action),_=_.next;while(_!==d);Sn(g,a.memoizedState)||($t=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,l]}function Vg(t,a,o){var l=He,d=Mt(),g=Ke;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var _=!Sn((rt||d).memoizedState,o);_&&(d.memoizedState=o,$t=!0),d=d.queue;var k=Xg.bind(null,l,d,t);if(ds(2048,8,k,[t]),d.getSnapshot!==a||_||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,Gi(9,tc(),Yg.bind(null,l,d,o,a),null),ct===null)throw Error(i(349));g||(aa&124)!==0||qg(l,a,o)}return o}function qg(t,a,o){t.flags|=16384,t={getSnapshot:a,value:o},a=He.updateQueue,a===null?(a=Qd(),He.updateQueue=a,a.stores=[t]):(o=a.stores,o===null?a.stores=[t]:o.push(t))}function Yg(t,a,o,l){a.value=o,a.getSnapshot=l,Gg(a)&&Zg(t)}function Xg(t,a,o){return o(function(){Gg(a)&&Zg(t)})}function Gg(t){var a=t.getSnapshot;t=t.value;try{var o=a();return!Sn(t,o)}catch{return!0}}function Zg(t){var a=Bi(t,2);a!==null&&Nn(a,t,2)}function ef(t){var a=pn();if(typeof t=="function"){var o=t;if(t=o(),Ka){Wn(!0);try{o()}finally{Wn(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:t},a}function Qg(t,a,o,l){return t.baseState=o,Kd(t,rt,typeof l=="function"?l:Lr)}function Y_(t,a,o,l,d){if(rc(t))throw Error(i(485));if(t=a.action,t!==null){var g={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){g.listeners.push(_)}};x.T!==null?o(!0):g.isTransition=!1,l(g),o=a.pending,o===null?(g.next=a.pending=g,Wg(a,g)):(g.next=o.next,a.pending=o.next=g)}}function Wg(t,a){var o=a.action,l=a.payload,d=t.state;if(a.isTransition){var g=x.T,_={};x.T=_;try{var k=o(d,l),O=x.S;O!==null&&O(_,k),Kg(t,a,k)}catch(X){tf(t,a,X)}finally{x.T=g}}else try{g=o(d,l),Kg(t,a,g)}catch(X){tf(t,a,X)}}function Kg(t,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){Jg(t,a,l)},function(l){return tf(t,a,l)}):Jg(t,a,o)}function Jg(t,a,o){a.status="fulfilled",a.value=o,ev(a),t.state=o,a=t.pending,a!==null&&(o=a.next,o===a?t.pending=null:(o=o.next,a.next=o,Wg(t,o)))}function tf(t,a,o){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=o,ev(a),a=a.next;while(a!==l)}t.action=null}function ev(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function tv(t,a){return a}function nv(t,a){if(Ke){var o=ct.formState;if(o!==null){e:{var l=He;if(Ke){if(yt){t:{for(var d=yt,g=fr;d.nodeType!==8;){if(!g){d=null;break t}if(d=tr(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){yt=tr(d.nextSibling),l=d.data==="F!";break e}}Ga(l)}l=!1}l&&(a=o[0])}}return o=pn(),o.memoizedState=o.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tv,lastRenderedState:a},o.queue=l,o=xv.bind(null,He,l),l.dispatch=o,l=ef(!1),g=sf.bind(null,He,!1,l.queue),l=pn(),d={state:a,dispatch:null,action:t,pending:null},l.queue=d,o=Y_.bind(null,He,d,g,o),d.dispatch=o,l.memoizedState=t,[a,o,!1]}function rv(t){var a=Mt();return av(a,rt,t)}function av(t,a,o){if(a=Kd(t,a,tv)[0],t=ec(Lr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=us(a)}catch(_){throw _===as?Gl:_}else l=a;a=Mt();var d=a.queue,g=d.dispatch;return o!==a.memoizedState&&(He.flags|=2048,Gi(9,tc(),X_.bind(null,d,o),null)),[l,g,t]}function X_(t,a){t.action=a}function iv(t){var a=Mt(),o=rt;if(o!==null)return av(a,o,t);Mt(),a=a.memoizedState,o=Mt();var l=o.queue.dispatch;return o.memoizedState=t,[a,l,!1]}function Gi(t,a,o,l){return t={tag:t,create:o,deps:l,inst:a,next:null},a=He.updateQueue,a===null&&(a=Qd(),He.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,a.lastEffect=t),t}function tc(){return{destroy:void 0,resource:void 0}}function ov(){return Mt().memoizedState}function nc(t,a,o,l){var d=pn();l=l===void 0?null:l,He.flags|=t,d.memoizedState=Gi(1|a,tc(),o,l)}function ds(t,a,o,l){var d=Mt();l=l===void 0?null:l;var g=d.memoizedState.inst;rt!==null&&l!==null&&qd(l,rt.memoizedState.deps)?d.memoizedState=Gi(a,g,o,l):(He.flags|=t,d.memoizedState=Gi(1|a,g,o,l))}function sv(t,a){nc(8390656,8,t,a)}function lv(t,a){ds(2048,8,t,a)}function cv(t,a){return ds(4,2,t,a)}function uv(t,a){return ds(4,4,t,a)}function dv(t,a){if(typeof a=="function"){t=t();var o=a(t);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function fv(t,a,o){o=o!=null?o.concat([t]):null,ds(4,4,dv.bind(null,a,t),o)}function nf(){}function hv(t,a){var o=Mt();a=a===void 0?null:a;var l=o.memoizedState;return a!==null&&qd(a,l[1])?l[0]:(o.memoizedState=[t,a],t)}function pv(t,a){var o=Mt();a=a===void 0?null:a;var l=o.memoizedState;if(a!==null&&qd(a,l[1]))return l[0];if(l=t(),Ka){Wn(!0);try{t()}finally{Wn(!1)}}return o.memoizedState=[l,a],l}function rf(t,a,o){return o===void 0||(aa&1073741824)!==0?t.memoizedState=a:(t.memoizedState=o,t=vy(),He.lanes|=t,da|=t,o)}function mv(t,a,o,l){return Sn(o,a)?o:qi.current!==null?(t=rf(t,o,l),Sn(t,a)||($t=!0),t):(aa&42)===0?($t=!0,t.memoizedState=o):(t=vy(),He.lanes|=t,da|=t,a)}function gv(t,a,o,l,d){var g=N.p;N.p=g!==0&&8>g?g:8;var _=x.T,k={};x.T=k,sf(t,!1,a,o);try{var O=d(),X=x.S;if(X!==null&&X(k,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=I_(O,l);fs(t,a,ne,Rn(t))}else fs(t,a,l,Rn(t))}catch(oe){fs(t,a,{then:function(){},status:"rejected",reason:oe},Rn())}finally{N.p=g,x.T=_}}function G_(){}function af(t,a,o,l){if(t.tag!==5)throw Error(i(476));var d=vv(t).queue;gv(t,d,a,M,o===null?G_:function(){return yv(t),o(l)})}function vv(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:M},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:o},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function yv(t){var a=vv(t).next.queue;fs(t,a,{},Rn())}function of(){return tn(As)}function bv(){return Mt().memoizedState}function wv(){return Mt().memoizedState}function Z_(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var o=Rn();t=na(o);var l=ra(a,t,o);l!==null&&(Nn(l,a,o),os(l,a,o)),a={cache:Ld()},t.payload=a;return}a=a.return}}function Q_(t,a,o){var l=Rn();o={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},rc(t)?_v(a,o):(o=Td(t,a,o,l),o!==null&&(Nn(o,t,l),Sv(o,a,l)))}function xv(t,a,o){var l=Rn();fs(t,a,o,l)}function fs(t,a,o,l){var d={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(rc(t))_v(a,d);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var _=a.lastRenderedState,k=g(_,o);if(d.hasEagerState=!0,d.eagerState=k,Sn(k,_))return Fl(t,a,d,0),ct===null&&Bl(),!1}catch{}finally{}if(o=Td(t,a,d,l),o!==null)return Nn(o,t,l),Sv(o,a,l),!0}return!1}function sf(t,a,o,l){if(l={lane:2,revertLane:Bf(),action:l,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(a)throw Error(i(479))}else a=Td(t,o,l,2),a!==null&&Nn(a,t,2)}function rc(t){var a=t.alternate;return t===He||a!==null&&a===He}function _v(t,a){Yi=Wl=!0;var o=t.pending;o===null?a.next=a:(a.next=o.next,o.next=a),t.pending=a}function Sv(t,a,o){if((o&4194048)!==0){var l=a.lanes;l&=t.pendingLanes,o|=l,a.lanes=o,xt(t,o)}}var ac={readContext:tn,use:Jl,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},kv={readContext:tn,use:Jl,useCallback:function(t,a){return pn().memoizedState=[t,a===void 0?null:a],t},useContext:tn,useEffect:sv,useImperativeHandle:function(t,a,o){o=o!=null?o.concat([t]):null,nc(4194308,4,dv.bind(null,a,t),o)},useLayoutEffect:function(t,a){return nc(4194308,4,t,a)},useInsertionEffect:function(t,a){nc(4,2,t,a)},useMemo:function(t,a){var o=pn();a=a===void 0?null:a;var l=t();if(Ka){Wn(!0);try{t()}finally{Wn(!1)}}return o.memoizedState=[l,a],l},useReducer:function(t,a,o){var l=pn();if(o!==void 0){var d=o(a);if(Ka){Wn(!0);try{o(a)}finally{Wn(!1)}}}else d=a;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=Q_.bind(null,He,t),[l.memoizedState,t]},useRef:function(t){var a=pn();return t={current:t},a.memoizedState=t},useState:function(t){t=ef(t);var a=t.queue,o=xv.bind(null,He,a);return a.dispatch=o,[t.memoizedState,o]},useDebugValue:nf,useDeferredValue:function(t,a){var o=pn();return rf(o,t,a)},useTransition:function(){var t=ef(!1);return t=gv.bind(null,He,t.queue,!0,!1),pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,o){var l=He,d=pn();if(Ke){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),ct===null)throw Error(i(349));(Ye&124)!==0||qg(l,a,o)}d.memoizedState=o;var g={value:o,getSnapshot:a};return d.queue=g,sv(Xg.bind(null,l,g,t),[t]),l.flags|=2048,Gi(9,tc(),Yg.bind(null,l,g,o,a),null),o},useId:function(){var t=pn(),a=ct.identifierPrefix;if(Ke){var o=Mr,l=Or;o=(l&~(1<<32-Gt(l)-1)).toString(32)+o,a="«"+a+"R"+o,o=Kl++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=V_++,a="«"+a+"r"+o.toString(32)+"»";return t.memoizedState=a},useHostTransitionStatus:of,useFormState:nv,useActionState:nv,useOptimistic:function(t){var a=pn();a.memoizedState=a.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=sf.bind(null,He,!0,o),o.dispatch=a,[t,a]},useMemoCache:Wd,useCacheRefresh:function(){return pn().memoizedState=Z_.bind(null,He)}},Tv={readContext:tn,use:Jl,useCallback:hv,useContext:tn,useEffect:lv,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:ec,useRef:ov,useState:function(){return ec(Lr)},useDebugValue:nf,useDeferredValue:function(t,a){var o=Mt();return mv(o,rt.memoizedState,t,a)},useTransition:function(){var t=ec(Lr)[0],a=Mt().memoizedState;return[typeof t=="boolean"?t:us(t),a]},useSyncExternalStore:Vg,useId:bv,useHostTransitionStatus:of,useFormState:rv,useActionState:rv,useOptimistic:function(t,a){var o=Mt();return Qg(o,rt,t,a)},useMemoCache:Wd,useCacheRefresh:wv},W_={readContext:tn,use:Jl,useCallback:hv,useContext:tn,useEffect:lv,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:Jd,useRef:ov,useState:function(){return Jd(Lr)},useDebugValue:nf,useDeferredValue:function(t,a){var o=Mt();return rt===null?rf(o,t,a):mv(o,rt.memoizedState,t,a)},useTransition:function(){var t=Jd(Lr)[0],a=Mt().memoizedState;return[typeof t=="boolean"?t:us(t),a]},useSyncExternalStore:Vg,useId:bv,useHostTransitionStatus:of,useFormState:iv,useActionState:iv,useOptimistic:function(t,a){var o=Mt();return rt!==null?Qg(o,rt,t,a):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Wd,useCacheRefresh:wv},Zi=null,hs=0;function ic(t){var a=hs;return hs+=1,Zi===null&&(Zi=[]),jg(Zi,t,a)}function ps(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function oc(t,a){throw a.$$typeof===m?Error(i(525)):(t=Object.prototype.toString.call(a),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Ev(t){var a=t._init;return a(t._payload)}function Cv(t){function a(P,D){if(t){var Y=P.deletions;Y===null?(P.deletions=[D],P.flags|=16):Y.push(D)}}function o(P,D){if(!t)return null;for(;D!==null;)a(P,D),D=D.sibling;return null}function l(P){for(var D=new Map;P!==null;)P.key!==null?D.set(P.key,P):D.set(P.index,P),P=P.sibling;return D}function d(P,D){return P=Ar(P,D),P.index=0,P.sibling=null,P}function g(P,D,Y){return P.index=Y,t?(Y=P.alternate,Y!==null?(Y=Y.index,Y<D?(P.flags|=67108866,D):Y):(P.flags|=67108866,D)):(P.flags|=1048576,D)}function _(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function k(P,D,Y,ae){return D===null||D.tag!==6?(D=Cd(Y,P.mode,ae),D.return=P,D):(D=d(D,Y),D.return=P,D)}function O(P,D,Y,ae){var ye=Y.type;return ye===S?ne(P,D,Y.props.children,ae,Y.key):D!==null&&(D.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===W&&Ev(ye)===D.type)?(D=d(D,Y.props),ps(D,Y),D.return=P,D):(D=$l(Y.type,Y.key,Y.props,null,P.mode,ae),ps(D,Y),D.return=P,D)}function X(P,D,Y,ae){return D===null||D.tag!==4||D.stateNode.containerInfo!==Y.containerInfo||D.stateNode.implementation!==Y.implementation?(D=Rd(Y,P.mode,ae),D.return=P,D):(D=d(D,Y.children||[]),D.return=P,D)}function ne(P,D,Y,ae,ye){return D===null||D.tag!==7?(D=Va(Y,P.mode,ae,ye),D.return=P,D):(D=d(D,Y),D.return=P,D)}function oe(P,D,Y){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Cd(""+D,P.mode,Y),D.return=P,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case b:return Y=$l(D.type,D.key,D.props,null,P.mode,Y),ps(Y,D),Y.return=P,Y;case w:return D=Rd(D,P.mode,Y),D.return=P,D;case W:var ae=D._init;return D=ae(D._payload),oe(P,D,Y)}if(j(D)||te(D))return D=Va(D,P.mode,Y,null),D.return=P,D;if(typeof D.then=="function")return oe(P,ic(D),Y);if(D.$$typeof===L)return oe(P,Yl(P,D),Y);oc(P,D)}return null}function G(P,D,Y,ae){var ye=D!==null?D.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return ye!==null?null:k(P,D,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case b:return Y.key===ye?O(P,D,Y,ae):null;case w:return Y.key===ye?X(P,D,Y,ae):null;case W:return ye=Y._init,Y=ye(Y._payload),G(P,D,Y,ae)}if(j(Y)||te(Y))return ye!==null?null:ne(P,D,Y,ae,null);if(typeof Y.then=="function")return G(P,D,ic(Y),ae);if(Y.$$typeof===L)return G(P,D,Yl(P,Y),ae);oc(P,Y)}return null}function Q(P,D,Y,ae,ye){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return P=P.get(Y)||null,k(D,P,""+ae,ye);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case b:return P=P.get(ae.key===null?Y:ae.key)||null,O(D,P,ae,ye);case w:return P=P.get(ae.key===null?Y:ae.key)||null,X(D,P,ae,ye);case W:var Fe=ae._init;return ae=Fe(ae._payload),Q(P,D,Y,ae,ye)}if(j(ae)||te(ae))return P=P.get(Y)||null,ne(D,P,ae,ye,null);if(typeof ae.then=="function")return Q(P,D,Y,ic(ae),ye);if(ae.$$typeof===L)return Q(P,D,Y,Yl(D,ae),ye);oc(D,ae)}return null}function Ce(P,D,Y,ae){for(var ye=null,Fe=null,Se=D,Ee=D=0,Vt=null;Se!==null&&Ee<Y.length;Ee++){Se.index>Ee?(Vt=Se,Se=null):Vt=Se.sibling;var Qe=G(P,Se,Y[Ee],ae);if(Qe===null){Se===null&&(Se=Vt);break}t&&Se&&Qe.alternate===null&&a(P,Se),D=g(Qe,D,Ee),Fe===null?ye=Qe:Fe.sibling=Qe,Fe=Qe,Se=Vt}if(Ee===Y.length)return o(P,Se),Ke&&Ya(P,Ee),ye;if(Se===null){for(;Ee<Y.length;Ee++)Se=oe(P,Y[Ee],ae),Se!==null&&(D=g(Se,D,Ee),Fe===null?ye=Se:Fe.sibling=Se,Fe=Se);return Ke&&Ya(P,Ee),ye}for(Se=l(Se);Ee<Y.length;Ee++)Vt=Q(Se,P,Ee,Y[Ee],ae),Vt!==null&&(t&&Vt.alternate!==null&&Se.delete(Vt.key===null?Ee:Vt.key),D=g(Vt,D,Ee),Fe===null?ye=Vt:Fe.sibling=Vt,Fe=Vt);return t&&Se.forEach(function(wa){return a(P,wa)}),Ke&&Ya(P,Ee),ye}function Te(P,D,Y,ae){if(Y==null)throw Error(i(151));for(var ye=null,Fe=null,Se=D,Ee=D=0,Vt=null,Qe=Y.next();Se!==null&&!Qe.done;Ee++,Qe=Y.next()){Se.index>Ee?(Vt=Se,Se=null):Vt=Se.sibling;var wa=G(P,Se,Qe.value,ae);if(wa===null){Se===null&&(Se=Vt);break}t&&Se&&wa.alternate===null&&a(P,Se),D=g(wa,D,Ee),Fe===null?ye=wa:Fe.sibling=wa,Fe=wa,Se=Vt}if(Qe.done)return o(P,Se),Ke&&Ya(P,Ee),ye;if(Se===null){for(;!Qe.done;Ee++,Qe=Y.next())Qe=oe(P,Qe.value,ae),Qe!==null&&(D=g(Qe,D,Ee),Fe===null?ye=Qe:Fe.sibling=Qe,Fe=Qe);return Ke&&Ya(P,Ee),ye}for(Se=l(Se);!Qe.done;Ee++,Qe=Y.next())Qe=Q(Se,P,Ee,Qe.value,ae),Qe!==null&&(t&&Qe.alternate!==null&&Se.delete(Qe.key===null?Ee:Qe.key),D=g(Qe,D,Ee),Fe===null?ye=Qe:Fe.sibling=Qe,Fe=Qe);return t&&Se.forEach(function(KS){return a(P,KS)}),Ke&&Ya(P,Ee),ye}function it(P,D,Y,ae){if(typeof Y=="object"&&Y!==null&&Y.type===S&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case b:e:{for(var ye=Y.key;D!==null;){if(D.key===ye){if(ye=Y.type,ye===S){if(D.tag===7){o(P,D.sibling),ae=d(D,Y.props.children),ae.return=P,P=ae;break e}}else if(D.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===W&&Ev(ye)===D.type){o(P,D.sibling),ae=d(D,Y.props),ps(ae,Y),ae.return=P,P=ae;break e}o(P,D);break}else a(P,D);D=D.sibling}Y.type===S?(ae=Va(Y.props.children,P.mode,ae,Y.key),ae.return=P,P=ae):(ae=$l(Y.type,Y.key,Y.props,null,P.mode,ae),ps(ae,Y),ae.return=P,P=ae)}return _(P);case w:e:{for(ye=Y.key;D!==null;){if(D.key===ye)if(D.tag===4&&D.stateNode.containerInfo===Y.containerInfo&&D.stateNode.implementation===Y.implementation){o(P,D.sibling),ae=d(D,Y.children||[]),ae.return=P,P=ae;break e}else{o(P,D);break}else a(P,D);D=D.sibling}ae=Rd(Y,P.mode,ae),ae.return=P,P=ae}return _(P);case W:return ye=Y._init,Y=ye(Y._payload),it(P,D,Y,ae)}if(j(Y))return Ce(P,D,Y,ae);if(te(Y)){if(ye=te(Y),typeof ye!="function")throw Error(i(150));return Y=ye.call(Y),Te(P,D,Y,ae)}if(typeof Y.then=="function")return it(P,D,ic(Y),ae);if(Y.$$typeof===L)return it(P,D,Yl(P,Y),ae);oc(P,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,D!==null&&D.tag===6?(o(P,D.sibling),ae=d(D,Y),ae.return=P,P=ae):(o(P,D),ae=Cd(Y,P.mode,ae),ae.return=P,P=ae),_(P)):o(P,D)}return function(P,D,Y,ae){try{hs=0;var ye=it(P,D,Y,ae);return Zi=null,ye}catch(Se){if(Se===as||Se===Gl)throw Se;var Fe=kn(29,Se,null,P.mode);return Fe.lanes=ae,Fe.return=P,Fe}finally{}}}var Qi=Cv(!0),Rv=Cv(!1),$n=z(null),hr=null;function ia(t){var a=t.alternate;q(Ut,Ut.current&1),q($n,t),hr===null&&(a===null||qi.current!==null||a.memoizedState!==null)&&(hr=t)}function Nv(t){if(t.tag===22){if(q(Ut,Ut.current),q($n,t),hr===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(hr=t)}}else oa()}function oa(){q(Ut,Ut.current),q($n,$n.current)}function jr(t){$($n),hr===t&&(hr=null),$(Ut)}var Ut=z(0);function sc(t){for(var a=t;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Wf(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function lf(t,a,o,l){a=t.memoizedState,o=o(l,a),o=o==null?a:y({},a,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var cf={enqueueSetState:function(t,a,o){t=t._reactInternals;var l=Rn(),d=na(l);d.payload=a,o!=null&&(d.callback=o),a=ra(t,d,l),a!==null&&(Nn(a,t,l),os(a,t,l))},enqueueReplaceState:function(t,a,o){t=t._reactInternals;var l=Rn(),d=na(l);d.tag=1,d.payload=a,o!=null&&(d.callback=o),a=ra(t,d,l),a!==null&&(Nn(a,t,l),os(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var o=Rn(),l=na(o);l.tag=2,a!=null&&(l.callback=a),a=ra(t,l,o),a!==null&&(Nn(a,t,o),os(a,t,o))}};function Av(t,a,o,l,d,g,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,_):a.prototype&&a.prototype.isPureReactComponent?!Qo(o,l)||!Qo(d,g):!0}function Ov(t,a,o,l){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,l),a.state!==t&&cf.enqueueReplaceState(a,a.state,null)}function Ja(t,a){var o=a;if("ref"in a){o={};for(var l in a)l!=="ref"&&(o[l]=a[l])}if(t=t.defaultProps){o===a&&(o=y({},o));for(var d in t)o[d]===void 0&&(o[d]=t[d])}return o}var lc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Mv(t){lc(t)}function zv(t){console.error(t)}function Dv(t){lc(t)}function cc(t,a){try{var o=t.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Lv(t,a,o){try{var l=t.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function uf(t,a,o){return o=na(o),o.tag=3,o.payload={element:null},o.callback=function(){cc(t,a)},o}function jv(t){return t=na(t),t.tag=3,t}function Uv(t,a,o,l){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var g=l.value;t.payload=function(){return d(g)},t.callback=function(){Lv(a,o,l)}}var _=o.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Lv(a,o,l),typeof d!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})})}function K_(t,a,o,l,d){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=o.alternate,a!==null&&ts(a,o,d,!0),o=$n.current,o!==null){switch(o.tag){case 13:return hr===null?Df():o.alternate===null&&bt===0&&(bt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,l===Hd?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([l]):a.add(l),jf(t,l,d)),!1;case 22:return o.flags|=65536,l===Hd?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([l]):o.add(l)),jf(t,l,d)),!1}throw Error(i(435,o.tag))}return jf(t,l,d),Df(),!1}if(Ke)return a=$n.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,l!==Od&&(t=Error(i(422),{cause:l}),es(Hn(t,o)))):(l!==Od&&(a=Error(i(423),{cause:l}),es(Hn(a,o))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=Hn(l,o),d=uf(t.stateNode,l,d),Pd(t,d),bt!==4&&(bt=2)),!1;var g=Error(i(520),{cause:l});if(g=Hn(g,o),xs===null?xs=[g]:xs.push(g),bt!==4&&(bt=2),a===null)return!0;l=Hn(l,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,t=d&-d,o.lanes|=t,t=uf(o.stateNode,l,t),Pd(o,t),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fa===null||!fa.has(g))))return o.flags|=65536,d&=-d,o.lanes|=d,d=jv(d),Uv(d,t,o,l),Pd(o,d),!1}o=o.return}while(o!==null);return!1}var Hv=Error(i(461)),$t=!1;function Qt(t,a,o,l){a.child=t===null?Rv(a,null,o,l):Qi(a,t.child,o,l)}function Bv(t,a,o,l,d){o=o.render;var g=a.ref;if("ref"in l){var _={};for(var k in l)k!=="ref"&&(_[k]=l[k])}else _=l;return Qa(a),l=Yd(t,a,o,_,g,d),k=Xd(),t!==null&&!$t?(Gd(t,a,d),Ur(t,a,d)):(Ke&&k&&Nd(a),a.flags|=1,Qt(t,a,l,d),a.child)}function Fv(t,a,o,l,d){if(t===null){var g=o.type;return typeof g=="function"&&!Ed(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,Pv(t,a,g,l,d)):(t=$l(o.type,null,l,a,a.mode,d),t.ref=a.ref,t.return=a,a.child=t)}if(g=t.child,!yf(t,d)){var _=g.memoizedProps;if(o=o.compare,o=o!==null?o:Qo,o(_,l)&&t.ref===a.ref)return Ur(t,a,d)}return a.flags|=1,t=Ar(g,l),t.ref=a.ref,t.return=a,a.child=t}function Pv(t,a,o,l,d){if(t!==null){var g=t.memoizedProps;if(Qo(g,l)&&t.ref===a.ref)if($t=!1,a.pendingProps=l=g,yf(t,d))(t.flags&131072)!==0&&($t=!0);else return a.lanes=t.lanes,Ur(t,a,d)}return df(t,a,o,l,d)}function $v(t,a,o){var l=a.pendingProps,d=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=g!==null?g.baseLanes|o:o,t!==null){for(d=a.child=t.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;a.childLanes=g&~l}else a.childLanes=0,a.child=null;return Iv(t,a,l,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xl(a,g!==null?g.cachePool:null),g!==null?Pg(a,g):Id(),Nv(a);else return a.lanes=a.childLanes=536870912,Iv(t,a,g!==null?g.baseLanes|o:o,o)}else g!==null?(Xl(a,g.cachePool),Pg(a,g),oa(),a.memoizedState=null):(t!==null&&Xl(a,null),Id(),oa());return Qt(t,a,d,o),a.child}function Iv(t,a,o,l){var d=Ud();return d=d===null?null:{parent:jt._currentValue,pool:d},a.memoizedState={baseLanes:o,cachePool:d},t!==null&&Xl(a,null),Id(),Nv(a),t!==null&&ts(t,a,l,!0),null}function uc(t,a){var o=a.ref;if(o===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(t===null||t.ref!==o)&&(a.flags|=4194816)}}function df(t,a,o,l,d){return Qa(a),o=Yd(t,a,o,l,void 0,d),l=Xd(),t!==null&&!$t?(Gd(t,a,d),Ur(t,a,d)):(Ke&&l&&Nd(a),a.flags|=1,Qt(t,a,o,d),a.child)}function Vv(t,a,o,l,d,g){return Qa(a),a.updateQueue=null,o=Ig(a,l,o,d),$g(t),l=Xd(),t!==null&&!$t?(Gd(t,a,g),Ur(t,a,g)):(Ke&&l&&Nd(a),a.flags|=1,Qt(t,a,o,g),a.child)}function qv(t,a,o,l,d){if(Qa(a),a.stateNode===null){var g=Fi,_=o.contextType;typeof _=="object"&&_!==null&&(g=tn(_)),g=new o(l,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=cf,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=l,g.state=a.memoizedState,g.refs={},Bd(a),_=o.contextType,g.context=typeof _=="object"&&_!==null?tn(_):Fi,g.state=a.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(lf(a,o,_,l),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(_=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),_!==g.state&&cf.enqueueReplaceState(g,g.state,null),ls(a,l,g,d),ss(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(t===null){g=a.stateNode;var k=a.memoizedProps,O=Ja(o,k);g.props=O;var X=g.context,ne=o.contextType;_=Fi,typeof ne=="object"&&ne!==null&&(_=tn(ne));var oe=o.getDerivedStateFromProps;ne=typeof oe=="function"||typeof g.getSnapshotBeforeUpdate=="function",k=a.pendingProps!==k,ne||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k||X!==_)&&Ov(a,g,l,_),ta=!1;var G=a.memoizedState;g.state=G,ls(a,l,g,d),ss(),X=a.memoizedState,k||G!==X||ta?(typeof oe=="function"&&(lf(a,o,oe,l),X=a.memoizedState),(O=ta||Av(a,o,O,l,G,X,_))?(ne||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=X),g.props=l,g.state=X,g.context=_,l=O):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{g=a.stateNode,Fd(t,a),_=a.memoizedProps,ne=Ja(o,_),g.props=ne,oe=a.pendingProps,G=g.context,X=o.contextType,O=Fi,typeof X=="object"&&X!==null&&(O=tn(X)),k=o.getDerivedStateFromProps,(X=typeof k=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(_!==oe||G!==O)&&Ov(a,g,l,O),ta=!1,G=a.memoizedState,g.state=G,ls(a,l,g,d),ss();var Q=a.memoizedState;_!==oe||G!==Q||ta||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof k=="function"&&(lf(a,o,k,l),Q=a.memoizedState),(ne=ta||Av(a,o,ne,l,G,Q,O)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(X||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,Q,O),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,Q,O)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&G===t.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&G===t.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=Q),g.props=l,g.state=Q,g.context=O,l=ne):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&G===t.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&G===t.memoizedState||(a.flags|=1024),l=!1)}return g=l,uc(t,a),l=(a.flags&128)!==0,g||l?(g=a.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,t!==null&&l?(a.child=Qi(a,t.child,null,d),a.child=Qi(a,null,o,d)):Qt(t,a,o,d),a.memoizedState=g.state,t=a.child):t=Ur(t,a,d),t}function Yv(t,a,o,l){return Jo(),a.flags|=256,Qt(t,a,o,l),a.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:zg()}}function pf(t,a,o){return t=t!==null?t.childLanes&~o:0,a&&(t|=In),t}function Xv(t,a,o){var l=a.pendingProps,d=!1,g=(a.flags&128)!==0,_;if((_=g)||(_=t!==null&&t.memoizedState===null?!1:(Ut.current&2)!==0),_&&(d=!0,a.flags&=-129),_=(a.flags&32)!==0,a.flags&=-33,t===null){if(Ke){if(d?ia(a):oa(),Ke){var k=yt,O;if(O=k){e:{for(O=k,k=fr;O.nodeType!==8;){if(!k){k=null;break e}if(O=tr(O.nextSibling),O===null){k=null;break e}}k=O}k!==null?(a.memoizedState={dehydrated:k,treeContext:qa!==null?{id:Or,overflow:Mr}:null,retryLane:536870912,hydrationErrors:null},O=kn(18,null,null,0),O.stateNode=k,O.return=a,a.child=O,on=a,yt=null,O=!0):O=!1}O||Ga(a)}if(k=a.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return Wf(k)?a.lanes=32:a.lanes=536870912,null;jr(a)}return k=l.children,l=l.fallback,d?(oa(),d=a.mode,k=dc({mode:"hidden",children:k},d),l=Va(l,d,o,null),k.return=a,l.return=a,k.sibling=l,a.child=k,d=a.child,d.memoizedState=hf(o),d.childLanes=pf(t,_,o),a.memoizedState=ff,l):(ia(a),mf(a,k))}if(O=t.memoizedState,O!==null&&(k=O.dehydrated,k!==null)){if(g)a.flags&256?(ia(a),a.flags&=-257,a=gf(t,a,o)):a.memoizedState!==null?(oa(),a.child=t.child,a.flags|=128,a=null):(oa(),d=l.fallback,k=a.mode,l=dc({mode:"visible",children:l.children},k),d=Va(d,k,o,null),d.flags|=2,l.return=a,d.return=a,l.sibling=d,a.child=l,Qi(a,t.child,null,o),l=a.child,l.memoizedState=hf(o),l.childLanes=pf(t,_,o),a.memoizedState=ff,a=d);else if(ia(a),Wf(k)){if(_=k.nextSibling&&k.nextSibling.dataset,_)var X=_.dgst;_=X,l=Error(i(419)),l.stack="",l.digest=_,es({value:l,source:null,stack:null}),a=gf(t,a,o)}else if($t||ts(t,a,o,!1),_=(o&t.childLanes)!==0,$t||_){if(_=ct,_!==null&&(l=o&-o,l=(l&42)!==0?1:At(l),l=(l&(_.suspendedLanes|o))!==0?0:l,l!==0&&l!==O.retryLane))throw O.retryLane=l,Bi(t,l),Nn(_,t,l),Hv;k.data==="$?"||Df(),a=gf(t,a,o)}else k.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=O.treeContext,yt=tr(k.nextSibling),on=a,Ke=!0,Xa=null,fr=!1,t!==null&&(Fn[Pn++]=Or,Fn[Pn++]=Mr,Fn[Pn++]=qa,Or=t.id,Mr=t.overflow,qa=a),a=mf(a,l.children),a.flags|=4096);return a}return d?(oa(),d=l.fallback,k=a.mode,O=t.child,X=O.sibling,l=Ar(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,X!==null?d=Ar(X,d):(d=Va(d,k,o,null),d.flags|=2),d.return=a,l.return=a,l.sibling=d,a.child=l,l=d,d=a.child,k=t.child.memoizedState,k===null?k=hf(o):(O=k.cachePool,O!==null?(X=jt._currentValue,O=O.parent!==X?{parent:X,pool:X}:O):O=zg(),k={baseLanes:k.baseLanes|o,cachePool:O}),d.memoizedState=k,d.childLanes=pf(t,_,o),a.memoizedState=ff,l):(ia(a),o=t.child,t=o.sibling,o=Ar(o,{mode:"visible",children:l.children}),o.return=a,o.sibling=null,t!==null&&(_=a.deletions,_===null?(a.deletions=[t],a.flags|=16):_.push(t)),a.child=o,a.memoizedState=null,o)}function mf(t,a){return a=dc({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function dc(t,a){return t=kn(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gf(t,a,o){return Qi(a,t.child,null,o),t=mf(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Gv(t,a,o){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a),zd(t.return,a,o)}function vf(t,a,o,l,d){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=o,g.tailMode=d)}function Zv(t,a,o){var l=a.pendingProps,d=l.revealOrder,g=l.tail;if(Qt(t,a,l.children,o),l=Ut.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gv(t,o,a);else if(t.tag===19)Gv(t,o,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(q(Ut,l),d){case"forwards":for(o=a.child,d=null;o!==null;)t=o.alternate,t!==null&&sc(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=a.child,a.child=null):(d=o.sibling,o.sibling=null),vf(a,!1,d,o,g);break;case"backwards":for(o=null,d=a.child,a.child=null;d!==null;){if(t=d.alternate,t!==null&&sc(t)===null){a.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}vf(a,!0,o,null,g);break;case"together":vf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ur(t,a,o){if(t!==null&&(a.dependencies=t.dependencies),da|=a.lanes,(o&a.childLanes)===0)if(t!==null){if(ts(t,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(i(153));if(a.child!==null){for(t=a.child,o=Ar(t,t.pendingProps),a.child=o,o.return=a;t.sibling!==null;)t=t.sibling,o=o.sibling=Ar(t,t.pendingProps),o.return=a;o.sibling=null}return a.child}function yf(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function J_(t,a,o){switch(a.tag){case 3:ue(a,a.stateNode.containerInfo),ea(a,jt,t.memoizedState.cache),Jo();break;case 27:case 5:me(a);break;case 4:ue(a,a.stateNode.containerInfo);break;case 10:ea(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Xv(t,a,o):(ia(a),t=Ur(t,a,o),t!==null?t.sibling:null);ia(a);break;case 19:var d=(t.flags&128)!==0;if(l=(o&a.childLanes)!==0,l||(ts(t,a,o,!1),l=(o&a.childLanes)!==0),d){if(l)return Zv(t,a,o);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),q(Ut,Ut.current),l)break;return null;case 22:case 23:return a.lanes=0,$v(t,a,o);case 24:ea(a,jt,t.memoizedState.cache)}return Ur(t,a,o)}function Qv(t,a,o){if(t!==null)if(t.memoizedProps!==a.pendingProps)$t=!0;else{if(!yf(t,o)&&(a.flags&128)===0)return $t=!1,J_(t,a,o);$t=(t.flags&131072)!==0}else $t=!1,Ke&&(a.flags&1048576)!==0&&Eg(a,Vl,a.index);switch(a.lanes=0,a.tag){case 16:e:{t=a.pendingProps;var l=a.elementType,d=l._init;if(l=d(l._payload),a.type=l,typeof l=="function")Ed(l)?(t=Ja(l,t),a.tag=1,a=qv(null,a,l,t,o)):(a.tag=0,a=df(null,a,l,t,o));else{if(l!=null){if(d=l.$$typeof,d===U){a.tag=11,a=Bv(null,a,l,t,o);break e}else if(d===ee){a.tag=14,a=Fv(null,a,l,t,o);break e}}throw a=fe(l)||l,Error(i(306,a,""))}}return a;case 0:return df(t,a,a.type,a.pendingProps,o);case 1:return l=a.type,d=Ja(l,a.pendingProps),qv(t,a,l,d,o);case 3:e:{if(ue(a,a.stateNode.containerInfo),t===null)throw Error(i(387));l=a.pendingProps;var g=a.memoizedState;d=g.element,Fd(t,a),ls(a,l,null,o);var _=a.memoizedState;if(l=_.cache,ea(a,jt,l),l!==g.cache&&Dd(a,[jt],o,!0),ss(),l=_.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:_.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Yv(t,a,l,o);break e}else if(l!==d){d=Hn(Error(i(424)),a),es(d),a=Yv(t,a,l,o);break e}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(yt=tr(t.firstChild),on=a,Ke=!0,Xa=null,fr=!0,o=Rv(a,null,l,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Jo(),l===d){a=Ur(t,a,o);break e}Qt(t,a,l,o)}a=a.child}return a;case 26:return uc(t,a),t===null?(o=e0(a.type,null,a.pendingProps,null))?a.memoizedState=o:Ke||(o=a.type,t=a.pendingProps,l=Tc(K.current).createElement(o),l[St]=a,l[lt]=t,Kt(l,o,t),Pt(l),a.stateNode=l):a.memoizedState=e0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return me(a),t===null&&Ke&&(l=a.stateNode=Wy(a.type,a.pendingProps,K.current),on=a,fr=!0,d=yt,ma(a.type)?(Kf=d,yt=tr(l.firstChild)):yt=d),Qt(t,a,a.pendingProps.children,o),uc(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Ke&&((d=l=yt)&&(l=CS(l,a.type,a.pendingProps,fr),l!==null?(a.stateNode=l,on=a,yt=tr(l.firstChild),fr=!1,d=!0):d=!1),d||Ga(a)),me(a),d=a.type,g=a.pendingProps,_=t!==null?t.memoizedProps:null,l=g.children,Gf(d,g)?l=null:_!==null&&Gf(d,_)&&(a.flags|=32),a.memoizedState!==null&&(d=Yd(t,a,q_,null,null,o),As._currentValue=d),uc(t,a),Qt(t,a,l,o),a.child;case 6:return t===null&&Ke&&((t=o=yt)&&(o=RS(o,a.pendingProps,fr),o!==null?(a.stateNode=o,on=a,yt=null,t=!0):t=!1),t||Ga(a)),null;case 13:return Xv(t,a,o);case 4:return ue(a,a.stateNode.containerInfo),l=a.pendingProps,t===null?a.child=Qi(a,null,l,o):Qt(t,a,l,o),a.child;case 11:return Bv(t,a,a.type,a.pendingProps,o);case 7:return Qt(t,a,a.pendingProps,o),a.child;case 8:return Qt(t,a,a.pendingProps.children,o),a.child;case 12:return Qt(t,a,a.pendingProps.children,o),a.child;case 10:return l=a.pendingProps,ea(a,a.type,l.value),Qt(t,a,l.children,o),a.child;case 9:return d=a.type._context,l=a.pendingProps.children,Qa(a),d=tn(d),l=l(d),a.flags|=1,Qt(t,a,l,o),a.child;case 14:return Fv(t,a,a.type,a.pendingProps,o);case 15:return Pv(t,a,a.type,a.pendingProps,o);case 19:return Zv(t,a,o);case 31:return l=a.pendingProps,o=a.mode,l={mode:l.mode,children:l.children},t===null?(o=dc(l,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=Ar(t.child,l),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return $v(t,a,o);case 24:return Qa(a),l=tn(jt),t===null?(d=Ud(),d===null&&(d=ct,g=Ld(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=o),d=g),a.memoizedState={parent:l,cache:d},Bd(a),ea(a,jt,d)):((t.lanes&o)!==0&&(Fd(t,a),ls(a,null,null,o),ss()),d=t.memoizedState,g=a.memoizedState,d.parent!==l?(d={parent:l,cache:l},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),ea(a,jt,l)):(l=g.cache,ea(a,jt,l),l!==d.cache&&Dd(a,[jt],o,!0))),Qt(t,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Hr(t){t.flags|=4}function Wv(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!i0(a)){if(a=$n.current,a!==null&&((Ye&4194048)===Ye?hr!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||a!==hr))throw is=Hd,Dg;t.flags|=8192}}function fc(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?El():536870912,t.lanes|=a,eo|=a)}function ms(t,a){if(!Ke)switch(t.tailMode){case"hidden":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vt(t){var a=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(a)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,a}function eS(t,a,o){var l=a.pendingProps;switch(Ad(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(a),null;case 1:return vt(a),null;case 3:return o=a.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Dr(jt),be(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Ko(a)?Hr(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ng())),vt(a),null;case 26:return o=a.memoizedState,t===null?(Hr(a),o!==null?(vt(a),Wv(a,o)):(vt(a),a.flags&=-16777217)):o?o!==t.memoizedState?(Hr(a),vt(a),Wv(a,o)):(vt(a),a.flags&=-16777217):(t.memoizedProps!==l&&Hr(a),vt(a),a.flags&=-16777217),null;case 27:Ue(a),o=K.current;var d=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==l&&Hr(a);else{if(!l){if(a.stateNode===null)throw Error(i(166));return vt(a),null}t=I.current,Ko(a)?Cg(a):(t=Wy(d,l,o),a.stateNode=t,Hr(a))}return vt(a),null;case 5:if(Ue(a),o=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&Hr(a);else{if(!l){if(a.stateNode===null)throw Error(i(166));return vt(a),null}if(t=I.current,Ko(a))Cg(a);else{switch(d=Tc(K.current),t){case 1:t=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:t=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":t=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":t=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":t=d.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?d.createElement(o,{is:l.is}):d.createElement(o)}}t[St]=a,t[lt]=l;e:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)t.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break e;for(;d.sibling===null;){if(d.return===null||d.return===a)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=t;e:switch(Kt(t,o,l),o){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Hr(a)}}return vt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==l&&Hr(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(i(166));if(t=K.current,Ko(a)){if(t=a.stateNode,o=a.memoizedProps,l=null,d=on,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[St]=a,t=!!(t.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||Vy(t.nodeValue,o)),t||Ga(a)}else t=Tc(t).createTextNode(l),t[St]=a,a.stateNode=t}return vt(a),null;case 13:if(l=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Ko(a),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(i(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[St]=a}else Jo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;vt(a),d=!1}else d=Ng(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(jr(a),a):(jr(a),null)}if(jr(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=l!==null,t=t!==null&&t.memoizedState!==null,o){l=a.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool);var g=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(g=l.memoizedState.cachePool.pool),g!==d&&(l.flags|=2048)}return o!==t&&o&&(a.child.flags|=8192),fc(a,a.updateQueue),vt(a),null;case 4:return be(),t===null&&If(a.stateNode.containerInfo),vt(a),null;case 10:return Dr(a.type),vt(a),null;case 19:if($(Ut),d=a.memoizedState,d===null)return vt(a),null;if(l=(a.flags&128)!==0,g=d.rendering,g===null)if(l)ms(d,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(g=sc(t),g!==null){for(a.flags|=128,ms(d,!1),t=g.updateQueue,a.updateQueue=t,fc(a,t),a.subtreeFlags=0,t=o,o=a.child;o!==null;)Tg(o,t),o=o.sibling;return q(Ut,Ut.current&1|2),a.child}t=t.sibling}d.tail!==null&&Ze()>mc&&(a.flags|=128,l=!0,ms(d,!1),a.lanes=4194304)}else{if(!l)if(t=sc(g),t!==null){if(a.flags|=128,l=!0,t=t.updateQueue,a.updateQueue=t,fc(a,t),ms(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ke)return vt(a),null}else 2*Ze()-d.renderingStartTime>mc&&o!==536870912&&(a.flags|=128,l=!0,ms(d,!1),a.lanes=4194304);d.isBackwards?(g.sibling=a.child,a.child=g):(t=d.last,t!==null?t.sibling=g:a.child=g,d.last=g)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=Ze(),a.sibling=null,t=Ut.current,q(Ut,l?t&1|2:t&1),a):(vt(a),null);case 22:case 23:return jr(a),Vd(),l=a.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(o&536870912)!==0&&(a.flags&128)===0&&(vt(a),a.subtreeFlags&6&&(a.flags|=8192)):vt(a),o=a.updateQueue,o!==null&&fc(a,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==o&&(a.flags|=2048),t!==null&&$(Wa),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Dr(jt),vt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function tS(t,a){switch(Ad(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Dr(jt),be(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Ue(a),null;case 13:if(jr(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Jo()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return $(Ut),null;case 4:return be(),null;case 10:return Dr(a.type),null;case 22:case 23:return jr(a),Vd(),t!==null&&$(Wa),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Dr(jt),null;case 25:return null;default:return null}}function Kv(t,a){switch(Ad(a),a.tag){case 3:Dr(jt),be();break;case 26:case 27:case 5:Ue(a);break;case 4:be();break;case 13:jr(a);break;case 19:$(Ut);break;case 10:Dr(a.type);break;case 22:case 23:jr(a),Vd(),t!==null&&$(Wa);break;case 24:Dr(jt)}}function gs(t,a){try{var o=a.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var d=l.next;o=d;do{if((o.tag&t)===t){l=void 0;var g=o.create,_=o.inst;l=g(),_.destroy=l}o=o.next}while(o!==d)}}catch(k){ot(a,a.return,k)}}function sa(t,a,o){try{var l=a.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var g=d.next;l=g;do{if((l.tag&t)===t){var _=l.inst,k=_.destroy;if(k!==void 0){_.destroy=void 0,d=a;var O=o,X=k;try{X()}catch(ne){ot(d,O,ne)}}}l=l.next}while(l!==g)}}catch(ne){ot(a,a.return,ne)}}function Jv(t){var a=t.updateQueue;if(a!==null){var o=t.stateNode;try{Fg(a,o)}catch(l){ot(t,t.return,l)}}}function ey(t,a,o){o.props=Ja(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(l){ot(t,a,l)}}function vs(t,a){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof o=="function"?t.refCleanup=o(l):o.current=l}}catch(d){ot(t,a,d)}}function pr(t,a){var o=t.ref,l=t.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(d){ot(t,a,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){ot(t,a,d)}else o.current=null}function ty(t){var a=t.type,o=t.memoizedProps,l=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break e;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(d){ot(t,t.return,d)}}function bf(t,a,o){try{var l=t.stateNode;_S(l,t.type,o,a),l[lt]=a}catch(d){ot(t,t.return,d)}}function ny(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ma(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ny(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xf(t,a,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(t),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=kc));else if(l!==4&&(l===27&&ma(t.type)&&(o=t.stateNode,a=null),t=t.child,t!==null))for(xf(t,a,o),t=t.sibling;t!==null;)xf(t,a,o),t=t.sibling}function hc(t,a,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?o.insertBefore(t,a):o.appendChild(t);else if(l!==4&&(l===27&&ma(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(hc(t,a,o),t=t.sibling;t!==null;)hc(t,a,o),t=t.sibling}function ry(t){var a=t.stateNode,o=t.memoizedProps;try{for(var l=t.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);Kt(a,l,o),a[St]=t,a[lt]=o}catch(g){ot(t,t.return,g)}}var Br=!1,Tt=!1,_f=!1,ay=typeof WeakSet=="function"?WeakSet:Set,It=null;function nS(t,a){if(t=t.containerInfo,Yf=Oc,t=mg(t),bd(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var _=0,k=-1,O=-1,X=0,ne=0,oe=t,G=null;t:for(;;){for(var Q;oe!==o||d!==0&&oe.nodeType!==3||(k=_+d),oe!==g||l!==0&&oe.nodeType!==3||(O=_+l),oe.nodeType===3&&(_+=oe.nodeValue.length),(Q=oe.firstChild)!==null;)G=oe,oe=Q;for(;;){if(oe===t)break t;if(G===o&&++X===d&&(k=_),G===g&&++ne===l&&(O=_),(Q=oe.nextSibling)!==null)break;oe=G,G=oe.parentNode}oe=Q}o=k===-1||O===-1?null:{start:k,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Xf={focusedElem:t,selectionRange:o},Oc=!1,It=a;It!==null;)if(a=It,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,It=t;else for(;It!==null;){switch(a=It,g=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&g!==null){t=void 0,o=a,d=g.memoizedProps,g=g.memoizedState,l=o.stateNode;try{var Ce=Ja(o.type,d,o.elementType===o.type);t=l.getSnapshotBeforeUpdate(Ce,g),l.__reactInternalSnapshotBeforeUpdate=t}catch(Te){ot(o,o.return,Te)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,o=t.nodeType,o===9)Qf(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=a.sibling,t!==null){t.return=a.return,It=t;break}It=a.return}}function iy(t,a,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:la(t,o),l&4&&gs(5,o);break;case 1:if(la(t,o),l&4)if(t=o.stateNode,a===null)try{t.componentDidMount()}catch(_){ot(o,o.return,_)}else{var d=Ja(o.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(d,a,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ot(o,o.return,_)}}l&64&&Jv(o),l&512&&vs(o,o.return);break;case 3:if(la(t,o),l&64&&(t=o.updateQueue,t!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Fg(t,a)}catch(_){ot(o,o.return,_)}}break;case 27:a===null&&l&4&&ry(o);case 26:case 5:la(t,o),a===null&&l&4&&ty(o),l&512&&vs(o,o.return);break;case 12:la(t,o);break;case 13:la(t,o),l&4&&ly(t,o),l&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=dS.bind(null,o),NS(t,o))));break;case 22:if(l=o.memoizedState!==null||Br,!l){a=a!==null&&a.memoizedState!==null||Tt,d=Br;var g=Tt;Br=l,(Tt=a)&&!g?ca(t,o,(o.subtreeFlags&8772)!==0):la(t,o),Br=d,Tt=g}break;case 30:break;default:la(t,o)}}function oy(t){var a=t.alternate;a!==null&&(t.alternate=null,oy(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&ed(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ht=null,mn=!1;function Fr(t,a,o){for(o=o.child;o!==null;)sy(t,a,o),o=o.sibling}function sy(t,a,o){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Ln,o)}catch{}switch(o.tag){case 26:Tt||pr(o,a),Fr(t,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Tt||pr(o,a);var l=ht,d=mn;ma(o.type)&&(ht=o.stateNode,mn=!1),Fr(t,a,o),Es(o.stateNode),ht=l,mn=d;break;case 5:Tt||pr(o,a);case 6:if(l=ht,d=mn,ht=null,Fr(t,a,o),ht=l,mn=d,ht!==null)if(mn)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(o.stateNode)}catch(g){ot(o,a,g)}else try{ht.removeChild(o.stateNode)}catch(g){ot(o,a,g)}break;case 18:ht!==null&&(mn?(t=ht,Zy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),Ds(t)):Zy(ht,o.stateNode));break;case 4:l=ht,d=mn,ht=o.stateNode.containerInfo,mn=!0,Fr(t,a,o),ht=l,mn=d;break;case 0:case 11:case 14:case 15:Tt||sa(2,o,a),Tt||sa(4,o,a),Fr(t,a,o);break;case 1:Tt||(pr(o,a),l=o.stateNode,typeof l.componentWillUnmount=="function"&&ey(o,a,l)),Fr(t,a,o);break;case 21:Fr(t,a,o);break;case 22:Tt=(l=Tt)||o.memoizedState!==null,Fr(t,a,o),Tt=l;break;default:Fr(t,a,o)}}function ly(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ds(t)}catch(o){ot(a,a.return,o)}}function rS(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new ay),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new ay),a;default:throw Error(i(435,t.tag))}}function Sf(t,a){var o=rS(t);a.forEach(function(l){var d=fS.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}function Tn(t,a){var o=a.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l],g=t,_=a,k=_;e:for(;k!==null;){switch(k.tag){case 27:if(ma(k.type)){ht=k.stateNode,mn=!1;break e}break;case 5:ht=k.stateNode,mn=!1;break e;case 3:case 4:ht=k.stateNode.containerInfo,mn=!0;break e}k=k.return}if(ht===null)throw Error(i(160));sy(g,_,d),ht=null,mn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)cy(a,t),a=a.sibling}var er=null;function cy(t,a){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Tn(a,t),En(t),l&4&&(sa(3,t,t.return),gs(3,t),sa(5,t,t.return));break;case 1:Tn(a,t),En(t),l&512&&(Tt||o===null||pr(o,o.return)),l&64&&Br&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var d=er;if(Tn(a,t),En(t),l&512&&(Tt||o===null||pr(o,o.return)),l&4){var g=o!==null?o.memoizedState:null;if(l=t.memoizedState,o===null)if(l===null)if(t.stateNode===null){e:{l=t.type,o=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":g=d.getElementsByTagName("title")[0],(!g||g[Po]||g[St]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(l),d.head.insertBefore(g,d.querySelector("head > title"))),Kt(g,l,o),g[St]=t,Pt(g),l=g;break e;case"link":var _=r0("link","href",d).get(l+(o.href||""));if(_){for(var k=0;k<_.length;k++)if(g=_[k],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){_.splice(k,1);break t}}g=d.createElement(l),Kt(g,l,o),d.head.appendChild(g);break;case"meta":if(_=r0("meta","content",d).get(l+(o.content||""))){for(k=0;k<_.length;k++)if(g=_[k],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){_.splice(k,1);break t}}g=d.createElement(l),Kt(g,l,o),d.head.appendChild(g);break;default:throw Error(i(468,l))}g[St]=t,Pt(g),l=g}t.stateNode=l}else a0(d,t.type,t.stateNode);else t.stateNode=n0(d,l,t.memoizedProps);else g!==l?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,l===null?a0(d,t.type,t.stateNode):n0(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&bf(t,t.memoizedProps,o.memoizedProps)}break;case 27:Tn(a,t),En(t),l&512&&(Tt||o===null||pr(o,o.return)),o!==null&&l&4&&bf(t,t.memoizedProps,o.memoizedProps);break;case 5:if(Tn(a,t),En(t),l&512&&(Tt||o===null||pr(o,o.return)),t.flags&32){d=t.stateNode;try{Mi(d,"")}catch(Q){ot(t,t.return,Q)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,bf(t,d,o!==null?o.memoizedProps:d)),l&1024&&(_f=!0);break;case 6:if(Tn(a,t),En(t),l&4){if(t.stateNode===null)throw Error(i(162));l=t.memoizedProps,o=t.stateNode;try{o.nodeValue=l}catch(Q){ot(t,t.return,Q)}}break;case 3:if(Rc=null,d=er,er=Ec(a.containerInfo),Tn(a,t),er=d,En(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Ds(a.containerInfo)}catch(Q){ot(t,t.return,Q)}_f&&(_f=!1,uy(t));break;case 4:l=er,er=Ec(t.stateNode.containerInfo),Tn(a,t),En(t),er=l;break;case 12:Tn(a,t),En(t);break;case 13:Tn(a,t),En(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Nf=Ze()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sf(t,l)));break;case 22:d=t.memoizedState!==null;var O=o!==null&&o.memoizedState!==null,X=Br,ne=Tt;if(Br=X||d,Tt=ne||O,Tn(a,t),Tt=ne,Br=X,En(t),l&8192)e:for(a=t.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(o===null||O||Br||Tt||ei(t)),o=null,a=t;;){if(a.tag===5||a.tag===26){if(o===null){O=o=a;try{if(g=O.stateNode,d)_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{k=O.stateNode;var oe=O.memoizedProps.style,G=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;k.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Q){ot(O,O.return,Q)}}}else if(a.tag===6){if(o===null){O=a;try{O.stateNode.nodeValue=d?"":O.memoizedProps}catch(Q){ot(O,O.return,Q)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=t.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,Sf(t,o))));break;case 19:Tn(a,t),En(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sf(t,l)));break;case 30:break;case 21:break;default:Tn(a,t),En(t)}}function En(t){var a=t.flags;if(a&2){try{for(var o,l=t.return;l!==null;){if(ny(l)){o=l;break}l=l.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,g=wf(t);hc(t,g,d);break;case 5:var _=o.stateNode;o.flags&32&&(Mi(_,""),o.flags&=-33);var k=wf(t);hc(t,k,_);break;case 3:case 4:var O=o.stateNode.containerInfo,X=wf(t);xf(t,X,O);break;default:throw Error(i(161))}}catch(ne){ot(t,t.return,ne)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function uy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;uy(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function la(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)iy(t,a.alternate,a),a=a.sibling}function ei(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:sa(4,a,a.return),ei(a);break;case 1:pr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&ey(a,a.return,o),ei(a);break;case 27:Es(a.stateNode);case 26:case 5:pr(a,a.return),ei(a);break;case 22:a.memoizedState===null&&ei(a);break;case 30:ei(a);break;default:ei(a)}t=t.sibling}}function ca(t,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,d=t,g=a,_=g.flags;switch(g.tag){case 0:case 11:case 15:ca(d,g,o),gs(4,g);break;case 1:if(ca(d,g,o),l=g,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(X){ot(l,l.return,X)}if(l=g,d=l.updateQueue,d!==null){var k=l.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)Bg(O[d],k)}catch(X){ot(l,l.return,X)}}o&&_&64&&Jv(g),vs(g,g.return);break;case 27:ry(g);case 26:case 5:ca(d,g,o),o&&l===null&&_&4&&ty(g),vs(g,g.return);break;case 12:ca(d,g,o);break;case 13:ca(d,g,o),o&&_&4&&ly(d,g);break;case 22:g.memoizedState===null&&ca(d,g,o),vs(g,g.return);break;case 30:break;default:ca(d,g,o)}a=a.sibling}}function kf(t,a){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&ns(o))}function Tf(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&ns(t))}function mr(t,a,o,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)dy(t,a,o,l),a=a.sibling}function dy(t,a,o,l){var d=a.flags;switch(a.tag){case 0:case 11:case 15:mr(t,a,o,l),d&2048&&gs(9,a);break;case 1:mr(t,a,o,l);break;case 3:mr(t,a,o,l),d&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&ns(t)));break;case 12:if(d&2048){mr(t,a,o,l),t=a.stateNode;try{var g=a.memoizedProps,_=g.id,k=g.onPostCommit;typeof k=="function"&&k(_,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){ot(a,a.return,O)}}else mr(t,a,o,l);break;case 13:mr(t,a,o,l);break;case 23:break;case 22:g=a.stateNode,_=a.alternate,a.memoizedState!==null?g._visibility&2?mr(t,a,o,l):ys(t,a):g._visibility&2?mr(t,a,o,l):(g._visibility|=2,Wi(t,a,o,l,(a.subtreeFlags&10256)!==0)),d&2048&&kf(_,a);break;case 24:mr(t,a,o,l),d&2048&&Tf(a.alternate,a);break;default:mr(t,a,o,l)}}function Wi(t,a,o,l,d){for(d=d&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=t,_=a,k=o,O=l,X=_.flags;switch(_.tag){case 0:case 11:case 15:Wi(g,_,k,O,d),gs(8,_);break;case 23:break;case 22:var ne=_.stateNode;_.memoizedState!==null?ne._visibility&2?Wi(g,_,k,O,d):ys(g,_):(ne._visibility|=2,Wi(g,_,k,O,d)),d&&X&2048&&kf(_.alternate,_);break;case 24:Wi(g,_,k,O,d),d&&X&2048&&Tf(_.alternate,_);break;default:Wi(g,_,k,O,d)}a=a.sibling}}function ys(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=t,l=a,d=l.flags;switch(l.tag){case 22:ys(o,l),d&2048&&kf(l.alternate,l);break;case 24:ys(o,l),d&2048&&Tf(l.alternate,l);break;default:ys(o,l)}a=a.sibling}}var bs=8192;function Ki(t){if(t.subtreeFlags&bs)for(t=t.child;t!==null;)fy(t),t=t.sibling}function fy(t){switch(t.tag){case 26:Ki(t),t.flags&bs&&t.memoizedState!==null&&$S(er,t.memoizedState,t.memoizedProps);break;case 5:Ki(t);break;case 3:case 4:var a=er;er=Ec(t.stateNode.containerInfo),Ki(t),er=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=bs,bs=16777216,Ki(t),bs=a):Ki(t));break;default:Ki(t)}}function hy(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ws(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var l=a[o];It=l,my(l,t)}hy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)py(t),t=t.sibling}function py(t){switch(t.tag){case 0:case 11:case 15:ws(t),t.flags&2048&&sa(9,t,t.return);break;case 3:ws(t);break;case 12:ws(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,pc(t)):ws(t);break;default:ws(t)}}function pc(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var l=a[o];It=l,my(l,t)}hy(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:sa(8,a,a.return),pc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,pc(a));break;default:pc(a)}t=t.sibling}}function my(t,a){for(;It!==null;){var o=It;switch(o.tag){case 0:case 11:case 15:sa(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ns(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,It=l;else e:for(o=t;It!==null;){l=It;var d=l.sibling,g=l.return;if(oy(l),l===o){It=null;break e}if(d!==null){d.return=g,It=d;break e}It=g}}}var aS={getCacheForType:function(t){var a=tn(jt),o=a.data.get(t);return o===void 0&&(o=t(),a.data.set(t,o)),o}},iS=typeof WeakMap=="function"?WeakMap:Map,et=0,ct=null,$e=null,Ye=0,tt=0,Cn=null,ua=!1,Ji=!1,Ef=!1,Pr=0,bt=0,da=0,ti=0,Cf=0,In=0,eo=0,xs=null,gn=null,Rf=!1,Nf=0,mc=1/0,gc=null,fa=null,Wt=0,ha=null,to=null,no=0,Af=0,Of=null,gy=null,_s=0,Mf=null;function Rn(){if((et&2)!==0&&Ye!==0)return Ye&-Ye;if(x.T!==null){var t=Ii;return t!==0?t:Bf()}return Ba()}function vy(){In===0&&(In=(Ye&536870912)===0||Ke?Kn():536870912);var t=$n.current;return t!==null&&(t.flags|=32),In}function Nn(t,a,o){(t===ct&&(tt===2||tt===9)||t.cancelPendingCommit!==null)&&(ro(t,0),pa(t,Ye,In,!1)),Kr(t,o),((et&2)===0||t!==ct)&&(t===ct&&((et&2)===0&&(ti|=o),bt===4&&pa(t,Ye,In,!1)),gr(t))}function yy(t,a,o){if((et&6)!==0)throw Error(i(327));var l=!o&&(a&124)===0&&(a&t.expiredLanes)===0||Ha(t,a),d=l?lS(t,a):Lf(t,a,!0),g=l;do{if(d===0){Ji&&!l&&pa(t,a,0,!1);break}else{if(o=t.current.alternate,g&&!oS(o)){d=Lf(t,a,!1),g=!1;continue}if(d===2){if(g=a,t.errorRecoveryDisabledLanes&g)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){a=_;e:{var k=t;d=xs;var O=k.current.memoizedState.isDehydrated;if(O&&(ro(k,_).flags|=256),_=Lf(k,_,!1),_!==2){if(Ef&&!O){k.errorRecoveryDisabledLanes|=g,ti|=g,d=4;break e}g=gn,gn=d,g!==null&&(gn===null?gn=g:gn.push.apply(gn,g))}d=_}if(g=!1,d!==2)continue}}if(d===1){ro(t,0),pa(t,a,0,!0);break}e:{switch(l=t,g=d,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:pa(l,a,In,!ua);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(d=Nf+300-Ze(),10<d)){if(pa(l,a,In,!ua),Ua(l,0,!0)!==0)break e;l.timeoutHandle=Xy(by.bind(null,l,o,gn,gc,Rf,a,In,ti,eo,ua,g,2,-0,0),d);break e}by(l,o,gn,gc,Rf,a,In,ti,eo,ua,g,0,-0,0)}}break}while(!0);gr(t)}function by(t,a,o,l,d,g,_,k,O,X,ne,oe,G,Q){if(t.timeoutHandle=-1,oe=a.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Ns={stylesheets:null,count:0,unsuspend:PS},fy(a),oe=IS(),oe!==null)){t.cancelPendingCommit=oe(Ey.bind(null,t,a,g,o,l,d,_,k,O,ne,1,G,Q)),pa(t,g,_,!X);return}Ey(t,a,g,o,l,d,_,k,O)}function oS(t){for(var a=t;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var d=o[l],g=d.getSnapshot;d=d.value;try{if(!Sn(g(),d))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function pa(t,a,o,l){a&=~Cf,a&=~ti,t.suspendedLanes|=a,t.pingedLanes&=~a,l&&(t.warmLanes|=a),l=t.expirationTimes;for(var d=a;0<d;){var g=31-Gt(d),_=1<<g;l[g]=-1,d&=~_}o!==0&&Oe(t,o,a)}function vc(){return(et&6)===0?(Ss(0),!1):!0}function zf(){if($e!==null){if(tt===0)var t=$e.return;else t=$e,zr=Za=null,Zd(t),Zi=null,hs=0,t=$e;for(;t!==null;)Kv(t.alternate,t),t=t.return;$e=null}}function ro(t,a){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,kS(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),zf(),ct=t,$e=o=Ar(t.current,null),Ye=a,tt=0,Cn=null,ua=!1,Ji=Ha(t,a),Ef=!1,eo=In=Cf=ti=da=bt=0,gn=xs=null,Rf=!1,(a&8)!==0&&(a|=a&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=a;0<l;){var d=31-Gt(l),g=1<<d;a|=t[d],l&=~g}return Pr=a,Bl(),o}function wy(t,a){He=null,x.H=ac,a===as||a===Gl?(a=Ug(),tt=3):a===Dg?(a=Ug(),tt=4):tt=a===Hv?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Cn=a,$e===null&&(bt=1,cc(t,Hn(a,t.current)))}function xy(){var t=x.H;return x.H=ac,t===null?ac:t}function _y(){var t=x.A;return x.A=aS,t}function Df(){bt=4,ua||(Ye&4194048)!==Ye&&$n.current!==null||(Ji=!0),(da&134217727)===0&&(ti&134217727)===0||ct===null||pa(ct,Ye,In,!1)}function Lf(t,a,o){var l=et;et|=2;var d=xy(),g=_y();(ct!==t||Ye!==a)&&(gc=null,ro(t,a)),a=!1;var _=bt;e:do try{if(tt!==0&&$e!==null){var k=$e,O=Cn;switch(tt){case 8:zf(),_=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(a=!0);var X=tt;if(tt=0,Cn=null,ao(t,k,O,X),o&&Ji){_=0;break e}break;default:X=tt,tt=0,Cn=null,ao(t,k,O,X)}}sS(),_=bt;break}catch(ne){wy(t,ne)}while(!0);return a&&t.shellSuspendCounter++,zr=Za=null,et=l,x.H=d,x.A=g,$e===null&&(ct=null,Ye=0,Bl()),_}function sS(){for(;$e!==null;)Sy($e)}function lS(t,a){var o=et;et|=2;var l=xy(),d=_y();ct!==t||Ye!==a?(gc=null,mc=Ze()+500,ro(t,a)):Ji=Ha(t,a);e:do try{if(tt!==0&&$e!==null){a=$e;var g=Cn;t:switch(tt){case 1:tt=0,Cn=null,ao(t,a,g,1);break;case 2:case 9:if(Lg(g)){tt=0,Cn=null,ky(a);break}a=function(){tt!==2&&tt!==9||ct!==t||(tt=7),gr(t)},g.then(a,a);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:Lg(g)?(tt=0,Cn=null,ky(a)):(tt=0,Cn=null,ao(t,a,g,7));break;case 5:var _=null;switch($e.tag){case 26:_=$e.memoizedState;case 5:case 27:var k=$e;if(!_||i0(_)){tt=0,Cn=null;var O=k.sibling;if(O!==null)$e=O;else{var X=k.return;X!==null?($e=X,yc(X)):$e=null}break t}}tt=0,Cn=null,ao(t,a,g,5);break;case 6:tt=0,Cn=null,ao(t,a,g,6);break;case 8:zf(),bt=6;break e;default:throw Error(i(462))}}cS();break}catch(ne){wy(t,ne)}while(!0);return zr=Za=null,x.H=l,x.A=d,et=o,$e!==null?0:(ct=null,Ye=0,Bl(),bt)}function cS(){for(;$e!==null&&!_n();)Sy($e)}function Sy(t){var a=Qv(t.alternate,t,Pr);t.memoizedProps=t.pendingProps,a===null?yc(t):$e=a}function ky(t){var a=t,o=a.alternate;switch(a.tag){case 15:case 0:a=Vv(o,a,a.pendingProps,a.type,void 0,Ye);break;case 11:a=Vv(o,a,a.pendingProps,a.type.render,a.ref,Ye);break;case 5:Zd(a);default:Kv(o,a),a=$e=Tg(a,Pr),a=Qv(o,a,Pr)}t.memoizedProps=t.pendingProps,a===null?yc(t):$e=a}function ao(t,a,o,l){zr=Za=null,Zd(a),Zi=null,hs=0;var d=a.return;try{if(K_(t,d,a,o,Ye)){bt=1,cc(t,Hn(o,t.current)),$e=null;return}}catch(g){if(d!==null)throw $e=d,g;bt=1,cc(t,Hn(o,t.current)),$e=null;return}a.flags&32768?(Ke||l===1?t=!0:Ji||(Ye&536870912)!==0?t=!1:(ua=t=!0,(l===2||l===9||l===3||l===6)&&(l=$n.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ty(a,t)):yc(a)}function yc(t){var a=t;do{if((a.flags&32768)!==0){Ty(a,ua);return}t=a.return;var o=eS(a.alternate,a,Pr);if(o!==null){$e=o;return}if(a=a.sibling,a!==null){$e=a;return}$e=a=t}while(a!==null);bt===0&&(bt=5)}function Ty(t,a){do{var o=tS(t.alternate,t);if(o!==null){o.flags&=32767,$e=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(t=t.sibling,t!==null)){$e=t;return}$e=t=o}while(t!==null);bt=6,$e=null}function Ey(t,a,o,l,d,g,_,k,O){t.cancelPendingCommit=null;do bc();while(Wt!==0);if((et&6)!==0)throw Error(i(327));if(a!==null){if(a===t.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=kd,Cl(t,o,g,_,k,O),t===ct&&($e=ct=null,Ye=0),to=a,ha=t,no=o,Af=g,Of=d,gy=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hS(Er,function(){return Oy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,d=N.p,N.p=2,_=et,et|=4;try{nS(t,a,o)}finally{et=_,N.p=d,x.T=l}}Wt=1,Cy(),Ry(),Ny()}}function Cy(){if(Wt===1){Wt=0;var t=ha,a=to,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=x.T,x.T=null;var l=N.p;N.p=2;var d=et;et|=4;try{cy(a,t);var g=Xf,_=mg(t.containerInfo),k=g.focusedElem,O=g.selectionRange;if(_!==k&&k&&k.ownerDocument&&pg(k.ownerDocument.documentElement,k)){if(O!==null&&bd(k)){var X=O.start,ne=O.end;if(ne===void 0&&(ne=X),"selectionStart"in k)k.selectionStart=X,k.selectionEnd=Math.min(ne,k.value.length);else{var oe=k.ownerDocument||document,G=oe&&oe.defaultView||window;if(G.getSelection){var Q=G.getSelection(),Ce=k.textContent.length,Te=Math.min(O.start,Ce),it=O.end===void 0?Te:Math.min(O.end,Ce);!Q.extend&&Te>it&&(_=it,it=Te,Te=_);var P=hg(k,Te),D=hg(k,it);if(P&&D&&(Q.rangeCount!==1||Q.anchorNode!==P.node||Q.anchorOffset!==P.offset||Q.focusNode!==D.node||Q.focusOffset!==D.offset)){var Y=oe.createRange();Y.setStart(P.node,P.offset),Q.removeAllRanges(),Te>it?(Q.addRange(Y),Q.extend(D.node,D.offset)):(Y.setEnd(D.node,D.offset),Q.addRange(Y))}}}}for(oe=[],Q=k;Q=Q.parentNode;)Q.nodeType===1&&oe.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<oe.length;k++){var ae=oe[k];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}Oc=!!Yf,Xf=Yf=null}finally{et=d,N.p=l,x.T=o}}t.current=a,Wt=2}}function Ry(){if(Wt===2){Wt=0;var t=ha,a=to,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=x.T,x.T=null;var l=N.p;N.p=2;var d=et;et|=4;try{iy(t,a.alternate,a)}finally{et=d,N.p=l,x.T=o}}Wt=3}}function Ny(){if(Wt===4||Wt===3){Wt=0,dn();var t=ha,a=to,o=no,l=gy;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Wt=5:(Wt=0,to=ha=null,Ay(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(fa=null),Zt(o),a=a.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Ln,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=x.T,d=N.p,N.p=2,x.T=null;try{for(var g=t.onRecoverableError,_=0;_<l.length;_++){var k=l[_];g(k.value,{componentStack:k.stack})}}finally{x.T=a,N.p=d}}(no&3)!==0&&bc(),gr(t),d=t.pendingLanes,(o&4194090)!==0&&(d&42)!==0?t===Mf?_s++:(_s=0,Mf=t):_s=0,Ss(0)}}function Ay(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,ns(a)))}function bc(t){return Cy(),Ry(),Ny(),Oy()}function Oy(){if(Wt!==5)return!1;var t=ha,a=Af;Af=0;var o=Zt(no),l=x.T,d=N.p;try{N.p=32>o?32:o,x.T=null,o=Of,Of=null;var g=ha,_=no;if(Wt=0,to=ha=null,no=0,(et&6)!==0)throw Error(i(331));var k=et;if(et|=4,py(g.current),dy(g,g.current,_,o),et=k,Ss(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Ln,g)}catch{}return!0}finally{N.p=d,x.T=l,Ay(t,a)}}function My(t,a,o){a=Hn(o,a),a=uf(t.stateNode,a,2),t=ra(t,a,2),t!==null&&(Kr(t,2),gr(t))}function ot(t,a,o){if(t.tag===3)My(t,t,o);else for(;a!==null;){if(a.tag===3){My(a,t,o);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fa===null||!fa.has(l))){t=Hn(o,t),o=jv(2),l=ra(a,o,2),l!==null&&(Uv(o,l,a,t),Kr(l,2),gr(l));break}}a=a.return}}function jf(t,a,o){var l=t.pingCache;if(l===null){l=t.pingCache=new iS;var d=new Set;l.set(a,d)}else d=l.get(a),d===void 0&&(d=new Set,l.set(a,d));d.has(o)||(Ef=!0,d.add(o),t=uS.bind(null,t,a,o),a.then(t,t))}function uS(t,a,o){var l=t.pingCache;l!==null&&l.delete(a),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,ct===t&&(Ye&o)===o&&(bt===4||bt===3&&(Ye&62914560)===Ye&&300>Ze()-Nf?(et&2)===0&&ro(t,0):Cf|=o,eo===Ye&&(eo=0)),gr(t)}function zy(t,a){a===0&&(a=El()),t=Bi(t,a),t!==null&&(Kr(t,a),gr(t))}function dS(t){var a=t.memoizedState,o=0;a!==null&&(o=a.retryLane),zy(t,o)}function fS(t,a){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(a),zy(t,o)}function hS(t,a){return dt(t,a)}var wc=null,io=null,Uf=!1,xc=!1,Hf=!1,ni=0;function gr(t){t!==io&&t.next===null&&(io===null?wc=io=t:io=io.next=t),xc=!0,Uf||(Uf=!0,mS())}function Ss(t,a){if(!Hf&&xc){Hf=!0;do for(var o=!1,l=wc;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var g=0;else{var _=l.suspendedLanes,k=l.pingedLanes;g=(1<<31-Gt(42|t)+1)-1,g&=d&~(_&~k),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,Uy(l,g))}else g=Ye,g=Ua(l,l===ct?g:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(g&3)===0||Ha(l,g)||(o=!0,Uy(l,g));l=l.next}while(o);Hf=!1}}function pS(){Dy()}function Dy(){xc=Uf=!1;var t=0;ni!==0&&(SS()&&(t=ni),ni=0);for(var a=Ze(),o=null,l=wc;l!==null;){var d=l.next,g=Ly(l,a);g===0?(l.next=null,o===null?wc=d:o.next=d,d===null&&(io=o)):(o=l,(t!==0||(g&3)!==0)&&(xc=!0)),l=d}Ss(t)}function Ly(t,a){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,g=t.pendingLanes&-62914561;0<g;){var _=31-Gt(g),k=1<<_,O=d[_];O===-1?((k&o)===0||(k&l)!==0)&&(d[_]=Bo(k,a)):O<=a&&(t.expiredLanes|=k),g&=~k}if(a=ct,o=Ye,o=Ua(t,t===a?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,o===0||t===a&&(tt===2||tt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&gt(l),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Ha(t,o)){if(a=o&-o,a===t.callbackPriority)return a;switch(l!==null&&gt(l),Zt(o)){case 2:case 8:o=La;break;case 32:o=Er;break;case 268435456:o=nt;break;default:o=Er}return l=jy.bind(null,t),o=dt(o,l),t.callbackPriority=a,t.callbackNode=o,a}return l!==null&&l!==null&&gt(l),t.callbackPriority=2,t.callbackNode=null,2}function jy(t,a){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(bc()&&t.callbackNode!==o)return null;var l=Ye;return l=Ua(t,t===ct?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(yy(t,l,a),Ly(t,Ze()),t.callbackNode!=null&&t.callbackNode===o?jy.bind(null,t):null)}function Uy(t,a){if(bc())return null;yy(t,a,!0)}function mS(){TS(function(){(et&6)!==0?dt(en,pS):Dy()})}function Bf(){return ni===0&&(ni=Kn()),ni}function Hy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ml(""+t)}function By(t,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,t.id&&o.setAttribute("form",t.id),a.parentNode.insertBefore(o,a),t=new FormData(t),o.parentNode.removeChild(o),t}function gS(t,a,o,l,d){if(a==="submit"&&o&&o.stateNode===d){var g=Hy((d[lt]||null).action),_=l.submitter;_&&(a=(a=_[lt]||null)?Hy(a.formAction):_.getAttribute("formAction"),a!==null&&(g=a,_=null));var k=new jl("action","action",null,l,d);t.push({event:k,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ni!==0){var O=_?By(d,_):new FormData(d);af(o,{pending:!0,data:O,method:d.method,action:g},null,O)}}else typeof g=="function"&&(k.preventDefault(),O=_?By(d,_):new FormData(d),af(o,{pending:!0,data:O,method:d.method,action:g},g,O))},currentTarget:d}]})}}for(var Ff=0;Ff<Sd.length;Ff++){var Pf=Sd[Ff],vS=Pf.toLowerCase(),yS=Pf[0].toUpperCase()+Pf.slice(1);Jn(vS,"on"+yS)}Jn(yg,"onAnimationEnd"),Jn(bg,"onAnimationIteration"),Jn(wg,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(L_,"onTransitionRun"),Jn(j_,"onTransitionStart"),Jn(U_,"onTransitionCancel"),Jn(xg,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks));function Fy(t,a){a=(a&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var g=void 0;if(a)for(var _=l.length-1;0<=_;_--){var k=l[_],O=k.instance,X=k.currentTarget;if(k=k.listener,O!==g&&d.isPropagationStopped())break e;g=k,d.currentTarget=X;try{g(d)}catch(ne){lc(ne)}d.currentTarget=null,g=O}else for(_=0;_<l.length;_++){if(k=l[_],O=k.instance,X=k.currentTarget,k=k.listener,O!==g&&d.isPropagationStopped())break e;g=k,d.currentTarget=X;try{g(d)}catch(ne){lc(ne)}d.currentTarget=null,g=O}}}}function Ie(t,a){var o=a[Ti];o===void 0&&(o=a[Ti]=new Set);var l=t+"__bubble";o.has(l)||(Py(a,t,2,!1),o.add(l))}function $f(t,a,o){var l=0;a&&(l|=4),Py(o,t,l,a)}var _c="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[_c]){t[_c]=!0,Dm.forEach(function(o){o!=="selectionchange"&&(bS.has(o)||$f(o,!1,t),$f(o,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[_c]||(a[_c]=!0,$f("selectionchange",!1,a))}}function Py(t,a,o,l){switch(d0(a)){case 2:var d=YS;break;case 8:d=XS;break;default:d=rh}o=d.bind(null,a,o,t),d=void 0,!ud||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(a,o,{capture:!0,passive:d}):t.addEventListener(a,o,!0):d!==void 0?t.addEventListener(a,o,{passive:d}):t.addEventListener(a,o,!1)}function Vf(t,a,o,l,d){var g=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var k=l.stateNode.containerInfo;if(k===d)break;if(_===4)for(_=l.return;_!==null;){var O=_.tag;if((O===3||O===4)&&_.stateNode.containerInfo===d)return;_=_.return}for(;k!==null;){if(_=Ei(k),_===null)return;if(O=_.tag,O===5||O===6||O===26||O===27){l=g=_;continue e}k=k.parentNode}}l=l.return}Gm(function(){var X=g,ne=ld(o),oe=[];e:{var G=_g.get(t);if(G!==void 0){var Q=jl,Ce=t;switch(t){case"keypress":if(Dl(o)===0)break e;case"keydown":case"keyup":Q=h_;break;case"focusin":Ce="focus",Q=pd;break;case"focusout":Ce="blur",Q=pd;break;case"beforeblur":case"afterblur":Q=pd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=g_;break;case yg:case bg:case wg:Q=a_;break;case xg:Q=y_;break;case"scroll":case"scrollend":Q=J1;break;case"wheel":Q=w_;break;case"copy":case"cut":case"paste":Q=o_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Jm;break;case"toggle":case"beforetoggle":Q=__}var Te=(a&4)!==0,it=!Te&&(t==="scroll"||t==="scrollend"),P=Te?G!==null?G+"Capture":null:G;Te=[];for(var D=X,Y;D!==null;){var ae=D;if(Y=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||Y===null||P===null||(ae=Io(D,P),ae!=null&&Te.push(Ts(D,ae,Y))),it)break;D=D.return}0<Te.length&&(G=new Q(G,Ce,null,o,ne),oe.push({event:G,listeners:Te}))}}if((a&7)===0){e:{if(G=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",G&&o!==sd&&(Ce=o.relatedTarget||o.fromElement)&&(Ei(Ce)||Ce[Ft]))break e;if((Q||G)&&(G=ne.window===ne?ne:(G=ne.ownerDocument)?G.defaultView||G.parentWindow:window,Q?(Ce=o.relatedTarget||o.toElement,Q=X,Ce=Ce?Ei(Ce):null,Ce!==null&&(it=c(Ce),Te=Ce.tag,Ce!==it||Te!==5&&Te!==27&&Te!==6)&&(Ce=null)):(Q=null,Ce=X),Q!==Ce)){if(Te=Wm,ae="onMouseLeave",P="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(Te=Jm,ae="onPointerLeave",P="onPointerEnter",D="pointer"),it=Q==null?G:$o(Q),Y=Ce==null?G:$o(Ce),G=new Te(ae,D+"leave",Q,o,ne),G.target=it,G.relatedTarget=Y,ae=null,Ei(ne)===X&&(Te=new Te(P,D+"enter",Ce,o,ne),Te.target=Y,Te.relatedTarget=it,ae=Te),it=ae,Q&&Ce)t:{for(Te=Q,P=Ce,D=0,Y=Te;Y;Y=oo(Y))D++;for(Y=0,ae=P;ae;ae=oo(ae))Y++;for(;0<D-Y;)Te=oo(Te),D--;for(;0<Y-D;)P=oo(P),Y--;for(;D--;){if(Te===P||P!==null&&Te===P.alternate)break t;Te=oo(Te),P=oo(P)}Te=null}else Te=null;Q!==null&&$y(oe,G,Q,Te,!1),Ce!==null&&it!==null&&$y(oe,it,Ce,Te,!0)}}e:{if(G=X?$o(X):window,Q=G.nodeName&&G.nodeName.toLowerCase(),Q==="select"||Q==="input"&&G.type==="file")var ye=sg;else if(ig(G))if(lg)ye=M_;else{ye=A_;var Fe=N_}else Q=G.nodeName,!Q||Q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?X&&od(X.elementType)&&(ye=sg):ye=O_;if(ye&&(ye=ye(t,X))){og(oe,ye,o,ne);break e}Fe&&Fe(t,G,X),t==="focusout"&&X&&G.type==="number"&&X.memoizedProps.value!=null&&id(G,"number",G.value)}switch(Fe=X?$o(X):window,t){case"focusin":(ig(Fe)||Fe.contentEditable==="true")&&(ji=Fe,wd=X,Wo=null);break;case"focusout":Wo=wd=ji=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,gg(oe,o,ne);break;case"selectionchange":if(D_)break;case"keydown":case"keyup":gg(oe,o,ne)}var Se;if(gd)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Li?rg(t,o)&&(Ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(eg&&o.locale!=="ko"&&(Li||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Li&&(Se=Zm()):(Jr=ne,dd="value"in Jr?Jr.value:Jr.textContent,Li=!0)),Fe=Sc(X,Ee),0<Fe.length&&(Ee=new Km(Ee,t,null,o,ne),oe.push({event:Ee,listeners:Fe}),Se?Ee.data=Se:(Se=ag(o),Se!==null&&(Ee.data=Se)))),(Se=k_?T_(t,o):E_(t,o))&&(Ee=Sc(X,"onBeforeInput"),0<Ee.length&&(Fe=new Km("onBeforeInput","beforeinput",null,o,ne),oe.push({event:Fe,listeners:Ee}),Fe.data=Se)),gS(oe,t,X,o,ne)}Fy(oe,a)})}function Ts(t,a,o){return{instance:t,listener:a,currentTarget:o}}function Sc(t,a){for(var o=a+"Capture",l=[];t!==null;){var d=t,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=Io(t,o),d!=null&&l.unshift(Ts(t,d,g)),d=Io(t,a),d!=null&&l.push(Ts(t,d,g))),t.tag===3)return l;t=t.return}return[]}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $y(t,a,o,l,d){for(var g=a._reactName,_=[];o!==null&&o!==l;){var k=o,O=k.alternate,X=k.stateNode;if(k=k.tag,O!==null&&O===l)break;k!==5&&k!==26&&k!==27||X===null||(O=X,d?(X=Io(o,g),X!=null&&_.unshift(Ts(o,X,O))):d||(X=Io(o,g),X!=null&&_.push(Ts(o,X,O)))),o=o.return}_.length!==0&&t.push({event:a,listeners:_})}var wS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function Iy(t){return(typeof t=="string"?t:""+t).replace(wS,`
`).replace(xS,"")}function Vy(t,a){return a=Iy(a),Iy(t)===a}function kc(){}function at(t,a,o,l,d,g){switch(o){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Mi(t,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Mi(t,""+l);break;case"className":Nl(t,"class",l);break;case"tabIndex":Nl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(t,o,l);break;case"style":Ym(t,l,g);break;case"data":if(a!=="object"){Nl(t,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||o!=="href")){t.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(o);break}l=Ml(""+l),t.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&at(t,a,"name",d.name,d,null),at(t,a,"formEncType",d.formEncType,d,null),at(t,a,"formMethod",d.formMethod,d,null),at(t,a,"formTarget",d.formTarget,d,null)):(at(t,a,"encType",d.encType,d,null),at(t,a,"method",d.method,d,null),at(t,a,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(o);break}l=Ml(""+l),t.setAttribute(o,l);break;case"onClick":l!=null&&(t.onclick=kc);break;case"onScroll":l!=null&&Ie("scroll",t);break;case"onScrollEnd":l!=null&&Ie("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(i(60));t.innerHTML=o}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}o=Ml(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,""+l):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":l===!0?t.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,l):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(o,l):t.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(o):t.setAttribute(o,l);break;case"popover":Ie("beforetoggle",t),Ie("toggle",t),Rl(t,"popover",l);break;case"xlinkActuate":Rr(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Rr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Rr(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Rr(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Rr(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Rr(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Rr(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Rr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Rr(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Rl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=W1.get(o)||o,Rl(t,o,l))}}function qf(t,a,o,l,d,g){switch(o){case"style":Ym(t,l,g);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(i(60));t.innerHTML=o}}break;case"children":typeof l=="string"?Mi(t,l):(typeof l=="number"||typeof l=="bigint")&&Mi(t,""+l);break;case"onScroll":l!=null&&Ie("scroll",t);break;case"onScrollEnd":l!=null&&Ie("scrollend",t);break;case"onClick":l!=null&&(t.onclick=kc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lm.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),a=o.slice(2,d?o.length-7:void 0),g=t[lt]||null,g=g!=null?g[o]:null,typeof g=="function"&&t.removeEventListener(a,g,d),typeof l=="function")){typeof g!="function"&&g!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(a,l,d);break e}o in t?t[o]=l:l===!0?t.setAttribute(o,""):Rl(t,o,l)}}}function Kt(t,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",t),Ie("load",t);var l=!1,d=!1,g;for(g in o)if(o.hasOwnProperty(g)){var _=o[g];if(_!=null)switch(g){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:at(t,a,g,_,o,null)}}d&&at(t,a,"srcSet",o.srcSet,o,null),l&&at(t,a,"src",o.src,o,null);return;case"input":Ie("invalid",t);var k=g=_=d=null,O=null,X=null;for(l in o)if(o.hasOwnProperty(l)){var ne=o[l];if(ne!=null)switch(l){case"name":d=ne;break;case"type":_=ne;break;case"checked":O=ne;break;case"defaultChecked":X=ne;break;case"value":g=ne;break;case"defaultValue":k=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,a));break;default:at(t,a,l,ne,o,null)}}$m(t,g,k,O,X,_,d,!1),Al(t);return;case"select":Ie("invalid",t),l=_=g=null;for(d in o)if(o.hasOwnProperty(d)&&(k=o[d],k!=null))switch(d){case"value":g=k;break;case"defaultValue":_=k;break;case"multiple":l=k;default:at(t,a,d,k,o,null)}a=g,o=_,t.multiple=!!l,a!=null?Oi(t,!!l,a,!1):o!=null&&Oi(t,!!l,o,!0);return;case"textarea":Ie("invalid",t),g=d=l=null;for(_ in o)if(o.hasOwnProperty(_)&&(k=o[_],k!=null))switch(_){case"value":l=k;break;case"defaultValue":d=k;break;case"children":g=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(i(91));break;default:at(t,a,_,k,o,null)}Vm(t,l,d,g),Al(t);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(l=o[O],l!=null))switch(O){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:at(t,a,O,l,o,null)}return;case"dialog":Ie("beforetoggle",t),Ie("toggle",t),Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":Ie("load",t);break;case"video":case"audio":for(l=0;l<ks.length;l++)Ie(ks[l],t);break;case"image":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"embed":case"source":case"link":Ie("error",t),Ie("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in o)if(o.hasOwnProperty(X)&&(l=o[X],l!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:at(t,a,X,l,o,null)}return;default:if(od(a)){for(ne in o)o.hasOwnProperty(ne)&&(l=o[ne],l!==void 0&&qf(t,a,ne,l,o,void 0));return}}for(k in o)o.hasOwnProperty(k)&&(l=o[k],l!=null&&at(t,a,k,l,o,null))}function _S(t,a,o,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,_=null,k=null,O=null,X=null,ne=null;for(Q in o){var oe=o[Q];if(o.hasOwnProperty(Q)&&oe!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":O=oe;default:l.hasOwnProperty(Q)||at(t,a,Q,null,l,oe)}}for(var G in l){var Q=l[G];if(oe=o[G],l.hasOwnProperty(G)&&(Q!=null||oe!=null))switch(G){case"type":g=Q;break;case"name":d=Q;break;case"checked":X=Q;break;case"defaultChecked":ne=Q;break;case"value":_=Q;break;case"defaultValue":k=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,a));break;default:Q!==oe&&at(t,a,G,Q,l,oe)}}ad(t,_,k,O,X,ne,g,d);return;case"select":Q=_=k=G=null;for(g in o)if(O=o[g],o.hasOwnProperty(g)&&O!=null)switch(g){case"value":break;case"multiple":Q=O;default:l.hasOwnProperty(g)||at(t,a,g,null,l,O)}for(d in l)if(g=l[d],O=o[d],l.hasOwnProperty(d)&&(g!=null||O!=null))switch(d){case"value":G=g;break;case"defaultValue":k=g;break;case"multiple":_=g;default:g!==O&&at(t,a,d,g,l,O)}a=k,o=_,l=Q,G!=null?Oi(t,!!o,G,!1):!!l!=!!o&&(a!=null?Oi(t,!!o,a,!0):Oi(t,!!o,o?[]:"",!1));return;case"textarea":Q=G=null;for(k in o)if(d=o[k],o.hasOwnProperty(k)&&d!=null&&!l.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:at(t,a,k,null,l,d)}for(_ in l)if(d=l[_],g=o[_],l.hasOwnProperty(_)&&(d!=null||g!=null))switch(_){case"value":G=d;break;case"defaultValue":Q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==g&&at(t,a,_,d,l,g)}Im(t,G,Q);return;case"option":for(var Ce in o)if(G=o[Ce],o.hasOwnProperty(Ce)&&G!=null&&!l.hasOwnProperty(Ce))switch(Ce){case"selected":t.selected=!1;break;default:at(t,a,Ce,null,l,G)}for(O in l)if(G=l[O],Q=o[O],l.hasOwnProperty(O)&&G!==Q&&(G!=null||Q!=null))switch(O){case"selected":t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:at(t,a,O,G,l,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)G=o[Te],o.hasOwnProperty(Te)&&G!=null&&!l.hasOwnProperty(Te)&&at(t,a,Te,null,l,G);for(X in l)if(G=l[X],Q=o[X],l.hasOwnProperty(X)&&G!==Q&&(G!=null||Q!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,a));break;default:at(t,a,X,G,l,Q)}return;default:if(od(a)){for(var it in o)G=o[it],o.hasOwnProperty(it)&&G!==void 0&&!l.hasOwnProperty(it)&&qf(t,a,it,void 0,l,G);for(ne in l)G=l[ne],Q=o[ne],!l.hasOwnProperty(ne)||G===Q||G===void 0&&Q===void 0||qf(t,a,ne,G,l,Q);return}}for(var P in o)G=o[P],o.hasOwnProperty(P)&&G!=null&&!l.hasOwnProperty(P)&&at(t,a,P,null,l,G);for(oe in l)G=l[oe],Q=o[oe],!l.hasOwnProperty(oe)||G===Q||G==null&&Q==null||at(t,a,oe,G,l,Q)}var Yf=null,Xf=null;function Tc(t){return t.nodeType===9?t:t.ownerDocument}function qy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yy(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Gf(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Zf=null;function SS(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var Xy=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,Gy=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof Gy<"u"?function(t){return Gy.resolve(null).then(t).catch(ES)}:Xy;function ES(t){setTimeout(function(){throw t})}function ma(t){return t==="head"}function Zy(t,a){var o=a,l=0,d=0;do{var g=o.nextSibling;if(t.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<l&&8>l){o=l;var _=t.ownerDocument;if(o&1&&Es(_.documentElement),o&2&&Es(_.body),o&4)for(o=_.head,Es(o),_=o.firstChild;_;){var k=_.nextSibling,O=_.nodeName;_[Po]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&_.rel.toLowerCase()==="stylesheet"||o.removeChild(_),_=k}}if(d===0){t.removeChild(g),Ds(a);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:l=o.charCodeAt(0)-48;else l=0;o=g}while(o);Ds(a)}function Qf(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Qf(o),ed(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function CS(t,a,o,l){for(;t.nodeType===1;){var d=o;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Po])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(g=t.getAttribute("rel"),g==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(g!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(g=t.getAttribute("src"),(g!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===g)return t}else return t;if(t=tr(t.nextSibling),t===null)break}return null}function RS(t,a,o){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=tr(t.nextSibling),t===null))return null;return t}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function NS(t,a){var o=t.ownerDocument;if(t.data!=="$?"||o.readyState==="complete")a();else{var l=function(){a(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function tr(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var Kf=null;function Qy(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return t;a--}else o==="/$"&&a++}t=t.previousSibling}return null}function Wy(t,a,o){switch(a=Tc(o),t){case"html":if(t=a.documentElement,!t)throw Error(i(452));return t;case"head":if(t=a.head,!t)throw Error(i(453));return t;case"body":if(t=a.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}function Es(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ed(t)}var Vn=new Map,Ky=new Set;function Ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $r=N.d;N.d={f:AS,r:OS,D:MS,C:zS,L:DS,m:LS,X:US,S:jS,M:HS};function AS(){var t=$r.f(),a=vc();return t||a}function OS(t){var a=Ci(t);a!==null&&a.tag===5&&a.type==="form"?yv(a):$r.r(t)}var so=typeof document>"u"?null:document;function Jy(t,a,o){var l=so;if(l&&typeof a=="string"&&a){var d=Un(a);d='link[rel="'+t+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Ky.has(d)||(Ky.add(d),t={rel:t,crossOrigin:o,href:a},l.querySelector(d)===null&&(a=l.createElement("link"),Kt(a,"link",t),Pt(a),l.head.appendChild(a)))}}function MS(t){$r.D(t),Jy("dns-prefetch",t,null)}function zS(t,a){$r.C(t,a),Jy("preconnect",t,a)}function DS(t,a,o){$r.L(t,a,o);var l=so;if(l&&t&&a){var d='link[rel="preload"][as="'+Un(a)+'"]';a==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Un(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Un(o.imageSizes)+'"]')):d+='[href="'+Un(t)+'"]';var g=d;switch(a){case"style":g=lo(t);break;case"script":g=co(t)}Vn.has(g)||(t=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:t,as:a},o),Vn.set(g,t),l.querySelector(d)!==null||a==="style"&&l.querySelector(Cs(g))||a==="script"&&l.querySelector(Rs(g))||(a=l.createElement("link"),Kt(a,"link",t),Pt(a),l.head.appendChild(a)))}}function LS(t,a){$r.m(t,a);var o=so;if(o&&t){var l=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+Un(l)+'"][href="'+Un(t)+'"]',g=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=co(t)}if(!Vn.has(g)&&(t=y({rel:"modulepreload",href:t},a),Vn.set(g,t),o.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Rs(g)))return}l=o.createElement("link"),Kt(l,"link",t),Pt(l),o.head.appendChild(l)}}}function jS(t,a,o){$r.S(t,a,o);var l=so;if(l&&t){var d=Ri(l).hoistableStyles,g=lo(t);a=a||"default";var _=d.get(g);if(!_){var k={loading:0,preload:null};if(_=l.querySelector(Cs(g)))k.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":a},o),(o=Vn.get(g))&&Jf(t,o);var O=_=l.createElement("link");Pt(O),Kt(O,"link",t),O._p=new Promise(function(X,ne){O.onload=X,O.onerror=ne}),O.addEventListener("load",function(){k.loading|=1}),O.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Cc(_,a,l)}_={type:"stylesheet",instance:_,count:1,state:k},d.set(g,_)}}}function US(t,a){$r.X(t,a);var o=so;if(o&&t){var l=Ri(o).hoistableScripts,d=co(t),g=l.get(d);g||(g=o.querySelector(Rs(d)),g||(t=y({src:t,async:!0},a),(a=Vn.get(d))&&eh(t,a),g=o.createElement("script"),Pt(g),Kt(g,"link",t),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function HS(t,a){$r.M(t,a);var o=so;if(o&&t){var l=Ri(o).hoistableScripts,d=co(t),g=l.get(d);g||(g=o.querySelector(Rs(d)),g||(t=y({src:t,async:!0,type:"module"},a),(a=Vn.get(d))&&eh(t,a),g=o.createElement("script"),Pt(g),Kt(g,"link",t),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function e0(t,a,o,l){var d=(d=K.current)?Ec(d):null;if(!d)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=lo(o.href),o=Ri(d).hoistableStyles,l=o.get(a),l||(l={type:"style",instance:null,count:0,state:null},o.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=lo(o.href);var g=Ri(d).hoistableStyles,_=g.get(t);if(_||(d=d.ownerDocument||d,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(t,_),(g=d.querySelector(Cs(t)))&&!g._p&&(_.instance=g,_.state.loading=5),Vn.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Vn.set(t,o),g||BS(d,t,o,_.state))),a&&l===null)throw Error(i(528,""));return _}if(a&&l!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=co(o),o=Ri(d).hoistableScripts,l=o.get(a),l||(l={type:"script",instance:null,count:0,state:null},o.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function lo(t){return'href="'+Un(t)+'"'}function Cs(t){return'link[rel="stylesheet"]['+t+"]"}function t0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function BS(t,a,o,l){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=t.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Kt(a,"link",o),Pt(a),t.head.appendChild(a))}function co(t){return'[src="'+Un(t)+'"]'}function Rs(t){return"script[async]"+t}function n0(t,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var l=t.querySelector('style[data-href~="'+Un(o.href)+'"]');if(l)return a.instance=l,Pt(l),l;var d=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Pt(l),Kt(l,"style",d),Cc(l,o.precedence,t),a.instance=l;case"stylesheet":d=lo(o.href);var g=t.querySelector(Cs(d));if(g)return a.state.loading|=4,a.instance=g,Pt(g),g;l=t0(o),(d=Vn.get(d))&&Jf(l,d),g=(t.ownerDocument||t).createElement("link"),Pt(g);var _=g;return _._p=new Promise(function(k,O){_.onload=k,_.onerror=O}),Kt(g,"link",l),a.state.loading|=4,Cc(g,o.precedence,t),a.instance=g;case"script":return g=co(o.src),(d=t.querySelector(Rs(g)))?(a.instance=d,Pt(d),d):(l=o,(d=Vn.get(g))&&(l=y({},o),eh(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),Pt(d),Kt(d,"link",l),t.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Cc(l,o.precedence,t));return a.instance}function Cc(t,a,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,g=d,_=0;_<l.length;_++){var k=l[_];if(k.dataset.precedence===a)g=k;else if(g!==d)break}g?g.parentNode.insertBefore(t,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(t,a.firstChild))}function Jf(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function eh(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Rc=null;function r0(t,a,o){if(Rc===null){var l=new Map,d=Rc=new Map;d.set(o,l)}else d=Rc,l=d.get(o),l||(l=new Map,d.set(o,l));if(l.has(t))return l;for(l.set(t,null),o=o.getElementsByTagName(t),d=0;d<o.length;d++){var g=o[d];if(!(g[Po]||g[St]||t==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var _=g.getAttribute(a)||"";_=t+_;var k=l.get(_);k?k.push(g):l.set(_,[g])}}return l}function a0(t,a,o){t=t.ownerDocument||t,t.head.insertBefore(o,a==="title"?t.querySelector("head > title"):null)}function FS(t,a,o){if(o===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function i0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ns=null;function PS(){}function $S(t,a,o){if(Ns===null)throw Error(i(475));var l=Ns;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=lo(o.href),g=t.querySelector(Cs(d));if(g){t=g._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Nc.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=g,Pt(g);return}g=t.ownerDocument||t,o=t0(o),(d=Vn.get(d))&&Jf(o,d),g=g.createElement("link"),Pt(g);var _=g;_._p=new Promise(function(k,O){_.onload=k,_.onerror=O}),Kt(g,"link",o),a.instance=g}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Nc.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}function IS(){if(Ns===null)throw Error(i(475));var t=Ns;return t.stylesheets&&t.count===0&&th(t,t.stylesheets),0<t.count?function(a){var o=setTimeout(function(){if(t.stylesheets&&th(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o)}}:null}function Nc(){if(this.count--,this.count===0){if(this.stylesheets)th(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ac=null;function th(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ac=new Map,a.forEach(VS,t),Ac=null,Nc.call(t))}function VS(t,a){if(!(a.state.loading&4)){var o=Ac.get(t);if(o)var l=o.get(null);else{o=new Map,Ac.set(t,o);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var _=d[g];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(o.set(_.dataset.precedence,_),l=_)}l&&o.set(null,l)}d=a.instance,_=d.getAttribute("data-precedence"),g=o.get(_)||l,g===l&&o.set(null,d),o.set(_,d),this.count++,l=Nc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),g?g.parentNode.insertBefore(d,g.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),a.state.loading|=4}}var As={$$typeof:L,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function qS(t,a,o,l,d,g,_,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.hiddenUpdates=Fo(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function o0(t,a,o,l,d,g,_,k,O,X,ne,oe){return t=new qS(t,a,o,_,k,O,X,oe),a=1,g===!0&&(a|=24),g=kn(3,null,null,a),t.current=g,g.stateNode=t,a=Ld(),a.refCount++,t.pooledCache=a,a.refCount++,g.memoizedState={element:l,isDehydrated:o,cache:a},Bd(g),t}function s0(t){return t?(t=Fi,t):Fi}function l0(t,a,o,l,d,g){d=s0(d),l.context===null?l.context=d:l.pendingContext=d,l=na(a),l.payload={element:o},g=g===void 0?null:g,g!==null&&(l.callback=g),o=ra(t,l,a),o!==null&&(Nn(o,t,a),os(o,t,a))}function c0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<a?o:a}}function nh(t,a){c0(t,a),(t=t.alternate)&&c0(t,a)}function u0(t){if(t.tag===13){var a=Bi(t,67108864);a!==null&&Nn(a,t,67108864),nh(t,67108864)}}var Oc=!0;function YS(t,a,o,l){var d=x.T;x.T=null;var g=N.p;try{N.p=2,rh(t,a,o,l)}finally{N.p=g,x.T=d}}function XS(t,a,o,l){var d=x.T;x.T=null;var g=N.p;try{N.p=8,rh(t,a,o,l)}finally{N.p=g,x.T=d}}function rh(t,a,o,l){if(Oc){var d=ah(l);if(d===null)Vf(t,a,l,Mc,o),f0(t,l);else if(ZS(d,t,a,o,l))l.stopPropagation();else if(f0(t,l),a&4&&-1<GS.indexOf(t)){for(;d!==null;){var g=Ci(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var _=dr(g.pendingLanes);if(_!==0){var k=g;for(k.pendingLanes|=2,k.entangledLanes|=2;_;){var O=1<<31-Gt(_);k.entanglements[1]|=O,_&=~O}gr(g),(et&6)===0&&(mc=Ze()+500,Ss(0))}}break;case 13:k=Bi(g,2),k!==null&&Nn(k,g,2),vc(),nh(g,2)}if(g=ah(l),g===null&&Vf(t,a,l,Mc,o),g===d)break;d=g}d!==null&&l.stopPropagation()}else Vf(t,a,l,null,o)}}function ah(t){return t=ld(t),ih(t)}var Mc=null;function ih(t){if(Mc=null,t=Ei(t),t!==null){var a=c(t);if(a===null)t=null;else{var o=a.tag;if(o===13){if(t=u(a),t!==null)return t;t=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Mc=t,null}function d0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fn()){case en:return 2;case La:return 8;case Er:case ze:return 32;case nt:return 268435456;default:return 32}default:return 32}}var oh=!1,ga=null,va=null,ya=null,Os=new Map,Ms=new Map,ba=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f0(t,a){switch(t){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Os.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ms.delete(a.pointerId)}}function zs(t,a,o,l,d,g){return t===null||t.nativeEvent!==g?(t={blockedOn:a,domEventName:o,eventSystemFlags:l,nativeEvent:g,targetContainers:[d]},a!==null&&(a=Ci(a),a!==null&&u0(a)),t):(t.eventSystemFlags|=l,a=t.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),t)}function ZS(t,a,o,l,d){switch(a){case"focusin":return ga=zs(ga,t,a,o,l,d),!0;case"dragenter":return va=zs(va,t,a,o,l,d),!0;case"mouseover":return ya=zs(ya,t,a,o,l,d),!0;case"pointerover":var g=d.pointerId;return Os.set(g,zs(Os.get(g)||null,t,a,o,l,d)),!0;case"gotpointercapture":return g=d.pointerId,Ms.set(g,zs(Ms.get(g)||null,t,a,o,l,d)),!0}return!1}function h0(t){var a=Ei(t.target);if(a!==null){var o=c(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){t.blockedOn=a,Lt(t.priority,function(){if(o.tag===13){var l=Rn();l=At(l);var d=Bi(o,l);d!==null&&Nn(d,o,l),nh(o,l)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var o=ah(t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);sd=l,o.target.dispatchEvent(l),sd=null}else return a=Ci(o),a!==null&&u0(a),t.blockedOn=o,!1;a.shift()}return!0}function p0(t,a,o){zc(t)&&o.delete(a)}function QS(){oh=!1,ga!==null&&zc(ga)&&(ga=null),va!==null&&zc(va)&&(va=null),ya!==null&&zc(ya)&&(ya=null),Os.forEach(p0),Ms.forEach(p0)}function Dc(t,a){t.blockedOn===a&&(t.blockedOn=null,oh||(oh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,QS)))}var Lc=null;function m0(t){Lc!==t&&(Lc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Lc===t&&(Lc=null);for(var a=0;a<t.length;a+=3){var o=t[a],l=t[a+1],d=t[a+2];if(typeof l!="function"){if(ih(l||o)===null)continue;break}var g=Ci(o);g!==null&&(t.splice(a,3),a-=3,af(g,{pending:!0,data:d,method:o.method,action:l},l,d))}}))}function Ds(t){function a(O){return Dc(O,t)}ga!==null&&Dc(ga,t),va!==null&&Dc(va,t),ya!==null&&Dc(ya,t),Os.forEach(a),Ms.forEach(a);for(var o=0;o<ba.length;o++){var l=ba[o];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ba.length&&(o=ba[0],o.blockedOn===null);)h0(o),o.blockedOn===null&&ba.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var d=o[l],g=o[l+1],_=d[lt]||null;if(typeof g=="function")_||m0(o);else if(_){var k=null;if(g&&g.hasAttribute("formAction")){if(d=g,_=g[lt]||null)k=_.formAction;else if(ih(d)!==null)continue}else k=_.action;typeof k=="function"?o[l+1]=k:(o.splice(l,3),l-=3),m0(o)}}}function sh(t){this._internalRoot=t}jc.prototype.render=sh.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,l=Rn();l0(o,l,t,a,null,null)},jc.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;l0(t.current,2,null,t,null,null),vc(),a[Ft]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var a=Ba();t={blockedOn:null,target:t,priority:a};for(var o=0;o<ba.length&&a!==0&&a<ba[o].priority;o++);ba.splice(o,0,t),o===0&&h0(t)}};var g0=n.version;if(g0!=="19.1.0")throw Error(i(527,g0,"19.1.0"));N.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=h(a),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var WS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{Ln=Uc.inject(WS),Xt=Uc}catch{}}return Fs.createRoot=function(t,a){if(!s(t))throw Error(i(299));var o=!1,l="",d=Mv,g=zv,_=Dv,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks)),a=o0(t,1,!1,null,null,o,l,d,g,_,k,null),t[Ft]=a.current,If(t),new sh(a)},Fs.hydrateRoot=function(t,a,o){if(!s(t))throw Error(i(299));var l=!1,d="",g=Mv,_=zv,k=Dv,O=null,X=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(_=o.onCaughtError),o.onRecoverableError!==void 0&&(k=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(O=o.unstable_transitionCallbacks),o.formState!==void 0&&(X=o.formState)),a=o0(t,1,!0,a,o??null,l,d,g,_,k,O,X),a.context=s0(null),o=a.current,l=Rn(),l=At(l),d=na(l),d.callback=null,ra(o,d,l),o=l,a.current.lanes=o,Kr(a,o),gr(a),t[Ft]=a.current,If(t),new jc(a)},Fs.version="19.1.0",Fs}var zb;function vR(){if(zb)return zh.exports;zb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),zh.exports=gR(),zh.exports}var yR=vR();function Wx(e){if(Array.isArray(e))return e.flatMap(y=>Wx(y));if(typeof e!="string")return[];const n=[];let r=0,i,s,c,u,f;const h=()=>{for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length},p=()=>(s=e.charAt(r),s!=="="&&s!==";"&&s!==",");for(;r<e.length;){for(i=r,f=!1;h();)if(s=e.charAt(r),s===","){for(c=r,r+=1,h(),u=r;r<e.length&&p();)r+=1;r<e.length&&e.charAt(r)==="="?(f=!0,r=u,n.push(e.slice(i,c)),i=r):r=c+1}else r+=1;(!f||r>=e.length)&&n.push(e.slice(i,e.length))}return n}function bR(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function wR(...e){return e.reduce((n,r)=>{const i=bR(r);for(const[s,c]of i.entries())s==="set-cookie"?Wx(c).forEach(f=>n.append("set-cookie",f)):n.set(s,c);return n},new Headers)}var xR="Invariant failed";function Zn(e,n){if(!e)throw new Error(xR)}function kp(e){return e[e.length-1]}function _R(e){return typeof e=="function"}function di(e,n){return _R(e)?e(n):e}function Tp(e,n){return n.reduce((r,i)=>(r[i]=e[i],r),{})}function Yn(e,n){if(e===n)return e;const r=n,i=jb(e)&&jb(r);if(i||Db(e)&&Db(r)){const s=i?e:Object.keys(e).concat(Object.getOwnPropertySymbols(e)),c=s.length,u=i?r:Object.keys(r).concat(Object.getOwnPropertySymbols(r)),f=u.length,h=i?[]:{};let p=0;for(let y=0;y<f;y++){const m=i?y:u[y];(!i&&s.includes(m)||i)&&e[m]===void 0&&r[m]===void 0?(h[m]=void 0,p++):(h[m]=Yn(e[m],r[m]),h[m]===e[m]&&e[m]!==void 0&&p++)}return c===f&&p===c?e:h}return r}function Db(e){return Xr(e)&&Object.getOwnPropertyNames(e).length===Object.keys(e).length}function Xr(e){if(!Lb(e))return!1;const n=e.constructor;if(typeof n>"u")return!0;const r=n.prototype;return!(!Lb(r)||!r.hasOwnProperty("isPrototypeOf"))}function Lb(e){return Object.prototype.toString.call(e)==="[object Object]"}function jb(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Ub(e,n){let r=Object.keys(e);return n&&(r=r.filter(i=>e[i]!==void 0)),r}function To(e,n,r){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(Xr(e)&&Xr(n)){const i=r?.ignoreUndefined??!0,s=Ub(e,i),c=Ub(n,i);return!r?.partial&&s.length!==c.length?!1:c.every(u=>To(e[u],n[u],r))}return Array.isArray(e)&&Array.isArray(n)?e.length!==n.length?!1:!e.some((i,s)=>!To(i,n[s],r)):!1}function go(e){let n,r;const i=new Promise((s,c)=>{n=s,r=c});return i.status="pending",i.resolve=s=>{i.status="resolved",i.value=s,n(s),e?.(s)},i.reject=s=>{i.status="rejected",r(s)},i}const cn={stringify:e=>JSON.stringify(e,function(r,i){const s=this[r],c=Xc.find(u=>u.stringifyCondition(s));return c?c.stringify(s):i}),parse:e=>JSON.parse(e,function(r,i){const s=this[r];if(Xr(s)){const c=Xc.find(u=>u.parseCondition(s));if(c)return c.parse(s)}return i}),encode:e=>{if(Array.isArray(e))return e.map(r=>cn.encode(r));if(Xr(e))return Object.fromEntries(Object.entries(e).map(([r,i])=>[r,cn.encode(i)]));const n=Xc.find(r=>r.stringifyCondition(e));return n?n.stringify(e):e},decode:e=>{if(Xr(e)){const n=Xc.find(r=>r.parseCondition(e));if(n)return n.parse(e)}return Array.isArray(e)?e.map(n=>cn.decode(n)):Xr(e)?Object.fromEntries(Object.entries(e).map(([n,r])=>[n,cn.decode(r)])):e}},Ps=(e,n,r,i)=>({key:e,stringifyCondition:n,stringify:s=>({[`$${e}`]:r(s)}),parseCondition:s=>Object.hasOwn(s,`$${e}`),parse:s=>i(s[`$${e}`])}),Xc=[Ps("undefined",e=>e===void 0,()=>0,()=>{}),Ps("date",e=>e instanceof Date,e=>e.toISOString(),e=>new Date(e)),Ps("error",e=>e instanceof Error,e=>({...e,message:e.message,stack:void 0,cause:e.cause}),e=>Object.assign(new Error(e.message),e)),Ps("formData",e=>e instanceof FormData,e=>{const n={};return e.forEach((r,i)=>{const s=n[i];s!==void 0?Array.isArray(s)?s.push(r):n[i]=[s,r]:n[i]=r}),n},e=>{const n=new FormData;return Object.entries(e).forEach(([r,i])=>{Array.isArray(i)?i.forEach(s=>n.append(r,s)):n.append(r,i)}),n}),Ps("bigint",e=>typeof e=="bigint",e=>e.toString(),e=>BigInt(e))];async function SR(e){var n,r,i;Zn((n=window.__TSR_SSR__)==null?void 0:n.dehydrated);const{manifest:s,dehydratedData:c,lastMatchId:u}=cn.parse(window.__TSR_SSR__.dehydrated);e.ssr={manifest:s,serializer:cn},e.clientSsr={getStreamedValue:p=>{var y;if(e.isServer)return;const m=(y=window.__TSR_SSR__)==null?void 0:y.streamedValues[p];if(m)return m.parsed||(m.parsed=e.ssr.serializer.parse(m.value)),m.parsed}};const f=e.matchRoutes(e.state.location),h=Promise.all(f.map(p=>{const y=e.looseRoutesById[p.routeId];return e.loadRouteChunk(y)}));return f.forEach(p=>{var y;const m=window.__TSR_SSR__.matches.find(b=>b.id===p.id);if(m)return Object.assign(p,m),m.__beforeLoadContext&&(p.__beforeLoadContext=e.ssr.serializer.parse(m.__beforeLoadContext)),m.loaderData&&(p.loaderData=e.ssr.serializer.parse(m.loaderData)),m.error&&(p.error=e.ssr.serializer.parse(m.error)),(y=p.extracted)==null||y.forEach(b=>{Ep(p,["loaderData",...b.path],b.value)}),p}),e.__store.setState(p=>({...p,matches:f})),await((i=(r=e.options).hydrate)==null?void 0:i.call(r,c)),await Promise.all(e.state.matches.map(async p=>{var y,m,b,w,S,T;const R=e.looseRoutesById[p.routeId],E=e.state.matches[p.index-1],A=E?.context??e.options.context??{},L={deps:p.loaderDeps,params:p.params,context:A,location:e.state.location,navigate:ee=>e.navigate({...ee,_fromLocation:e.state.location}),buildLocation:e.buildLocation,cause:p.cause,abortController:p.abortController,preload:!1,matches:f};p.__routeContext=((m=(y=R.options).context)==null?void 0:m.call(y,L))??{},p.context={...A,...p.__routeContext,...p.__beforeLoadContext};const U={matches:e.state.matches,match:p,params:p.params,loaderData:p.loaderData},F=await((w=(b=R.options).head)==null?void 0:w.call(b,U)),B=await((T=(S=R.options).scripts)==null?void 0:T.call(S,U));p.meta=F?.meta,p.links=F?.links,p.headScripts=F?.scripts,p.scripts=B})),f[f.length-1].id!==u?await Promise.all([h,e.load()]):h}function Ep(e,n,r){n.length===1&&(e[n[0]]=r);const[i,...s]=n;Array.isArray(e)?Ep(e[Number(i)],s,r):Xr(e)&&Ep(e[i],s,r)}const kR="modulepreload",TR=function(e){return"/"+e},Hb={},un=function(n,r,i){let s=Promise.resolve();if(r&&r.length>0){let h=function(p){return Promise.all(p.map(y=>Promise.resolve(y).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=u?.nonce||u?.getAttribute("nonce");s=h(r.map(p=>{if(p=TR(p),p in Hb)return;Hb[p]=!0;const y=p.endsWith(".css"),m=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${m}`))return;const b=document.createElement("link");if(b.rel=y?"stylesheet":kR,y||(b.as="script"),b.crossOrigin="",b.href=p,f&&b.setAttribute("nonce",f),document.head.appendChild(b),y)return new Promise((w,S)=>{b.addEventListener("load",w),b.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return s.then(u=>{for(const f of u||[])f.status==="rejected"&&c(f.reason);return n().catch(c)})};const Eo=new WeakMap,lu=new WeakMap,Tu={current:[]};let Uh=!1,Js=0;const qs=new Set,Gc=new Map;function Kx(e){const n=Array.from(e).sort((r,i)=>r instanceof Co&&r.options.deps.includes(i)?1:i instanceof Co&&i.options.deps.includes(r)?-1:0);for(const r of n){if(Tu.current.includes(r))continue;Tu.current.push(r),r.recompute();const i=lu.get(r);if(i)for(const s of i){const c=Eo.get(s);c&&Kx(c)}}}function ER(e){e.listeners.forEach(n=>n({prevVal:e.prevState,currentVal:e.state}))}function CR(e){e.listeners.forEach(n=>n({prevVal:e.prevState,currentVal:e.state}))}function Jx(e){if(Js>0&&!Gc.has(e)&&Gc.set(e,e.prevState),qs.add(e),!(Js>0)&&!Uh)try{for(Uh=!0;qs.size>0;){const n=Array.from(qs);qs.clear();for(const r of n){const i=Gc.get(r)??r.prevState;r.prevState=i,ER(r)}for(const r of n){const i=Eo.get(r);i&&(Tu.current.push(r),Kx(i))}for(const r of n){const i=Eo.get(r);if(i)for(const s of i)CR(s)}}}finally{Uh=!1,Tu.current=[],Gc.clear()}}function Bb(e){Js++;try{e()}finally{if(Js--,Js===0){const n=Array.from(qs)[0];n&&Jx(n)}}}function RR(e){return typeof e=="function"}class Cp{constructor(n,r){this.listeners=new Set,this.subscribe=i=>{var s,c;this.listeners.add(i);const u=(c=(s=this.options)==null?void 0:s.onSubscribe)==null?void 0:c.call(s,i,this);return()=>{this.listeners.delete(i),u?.()}},this.prevState=n,this.state=n,this.options=r}setState(n){var r,i,s;this.prevState=this.state,(r=this.options)!=null&&r.updateFn?this.state=this.options.updateFn(this.prevState)(n):RR(n)?this.state=n(this.prevState):this.state=n,(s=(i=this.options)==null?void 0:i.onUpdate)==null||s.call(i),Jx(this)}}class Co{constructor(n){this.listeners=new Set,this._subscriptions=[],this.lastSeenDepValues=[],this.getDepVals=()=>{const r=[],i=[];for(const s of this.options.deps)r.push(s.prevState),i.push(s.state);return this.lastSeenDepValues=i,{prevDepVals:r,currDepVals:i,prevVal:this.prevState??void 0}},this.recompute=()=>{var r,i;this.prevState=this.state;const{prevDepVals:s,currDepVals:c,prevVal:u}=this.getDepVals();this.state=this.options.fn({prevDepVals:s,currDepVals:c,prevVal:u}),(i=(r=this.options).onUpdate)==null||i.call(r)},this.checkIfRecalculationNeededDeeply=()=>{for(const c of this.options.deps)c instanceof Co&&c.checkIfRecalculationNeededDeeply();let r=!1;const i=this.lastSeenDepValues,{currDepVals:s}=this.getDepVals();for(let c=0;c<s.length;c++)if(s[c]!==i[c]){r=!0;break}r&&this.recompute()},this.mount=()=>(this.registerOnGraph(),this.checkIfRecalculationNeededDeeply(),()=>{this.unregisterFromGraph();for(const r of this._subscriptions)r()}),this.subscribe=r=>{var i,s;this.listeners.add(r);const c=(s=(i=this.options).onSubscribe)==null?void 0:s.call(i,r,this);return()=>{this.listeners.delete(r),c?.()}},this.options=n,this.state=n.fn({prevDepVals:void 0,prevVal:void 0,currDepVals:this.getDepVals().currDepVals})}registerOnGraph(n=this.options.deps){for(const r of n)if(r instanceof Co)r.registerOnGraph(),this.registerOnGraph(r.options.deps);else if(r instanceof Cp){let i=Eo.get(r);i||(i=new Set,Eo.set(r,i)),i.add(this);let s=lu.get(this);s||(s=new Set,lu.set(this,s)),s.add(r)}}unregisterFromGraph(n=this.options.deps){for(const r of n)if(r instanceof Co)this.unregisterFromGraph(r.options.deps);else if(r instanceof Cp){const i=Eo.get(r);i&&i.delete(this);const s=lu.get(this);s&&s.delete(r)}}}const Na="__TSR_index",Fb="popstate",Pb="beforeunload";function e1(e){let n=e.getLocation();const r=new Set,i=u=>{n=e.getLocation(),r.forEach(f=>f({location:n,action:u}))},s=u=>{e.notifyOnIndexChange??!0?i(u):n=e.getLocation()},c=async({task:u,navigateOpts:f,...h})=>{var p,y;if(f?.ignoreBlocker??!1){u();return}const b=((p=e.getBlockers)==null?void 0:p.call(e))??[],w=h.type==="PUSH"||h.type==="REPLACE";if(typeof document<"u"&&b.length&&w)for(const S of b){const T=cl(h.path,h.state);if(await S.blockerFn({currentLocation:n,nextLocation:T,action:h.type})){(y=e.onBlocked)==null||y.call(e);return}}u()};return{get location(){return n},get length(){return e.getLength()},subscribers:r,subscribe:u=>(r.add(u),()=>{r.delete(u)}),push:(u,f,h)=>{const p=n.state[Na];f=Rp(p+1,f),c({task:()=>{e.pushState(u,f),i({type:"PUSH"})},navigateOpts:h,type:"PUSH",path:u,state:f})},replace:(u,f,h)=>{const p=n.state[Na];f=Rp(p,f),c({task:()=>{e.replaceState(u,f),i({type:"REPLACE"})},navigateOpts:h,type:"REPLACE",path:u,state:f})},go:(u,f)=>{c({task:()=>{e.go(u),s({type:"GO",index:u})},navigateOpts:f,type:"GO"})},back:u=>{c({task:()=>{e.back(u?.ignoreBlocker??!1),s({type:"BACK"})},navigateOpts:u,type:"BACK"})},forward:u=>{c({task:()=>{e.forward(u?.ignoreBlocker??!1),s({type:"FORWARD"})},navigateOpts:u,type:"FORWARD"})},canGoBack:()=>n.state[Na]!==0,createHref:u=>e.createHref(u),block:u=>{var f;if(!e.setBlockers)return()=>{};const h=((f=e.getBlockers)==null?void 0:f.call(e))??[];return e.setBlockers([...h,u]),()=>{var p,y;const m=((p=e.getBlockers)==null?void 0:p.call(e))??[];(y=e.setBlockers)==null||y.call(e,m.filter(b=>b!==u))}},flush:()=>{var u;return(u=e.flush)==null?void 0:u.call(e)},destroy:()=>{var u;return(u=e.destroy)==null?void 0:u.call(e)},notify:i}}function Rp(e,n){n||(n={});const r=vm();return{...n,key:r,__TSR_key:r,[Na]:e}}function NR(e){var n,r;const i=typeof document<"u"?window:void 0,s=i.history.pushState,c=i.history.replaceState;let u=[];const f=()=>u,h=J=>u=J,p=J=>J,y=()=>cl(`${i.location.pathname}${i.location.search}${i.location.hash}`,i.history.state);if(!((n=i.history.state)!=null&&n.__TSR_key)&&!((r=i.history.state)!=null&&r.key)){const J=vm();i.history.replaceState({[Na]:0,key:J,__TSR_key:J},"")}let m=y(),b,w=!1,S=!1,T=!1,R=!1;const E=()=>m;let A,L;const U=()=>{A&&(Z._ignoreSubscribers=!0,(A.isPush?i.history.pushState:i.history.replaceState)(A.state,"",A.href),Z._ignoreSubscribers=!1,A=void 0,L=void 0,b=void 0)},F=(J,re,te)=>{const le=p(re);L||(b=m),m=cl(re,te),A={href:le,state:te,isPush:A?.isPush||J==="push"},L||(L=Promise.resolve().then(()=>U()))},B=J=>{m=y(),Z.notify({type:J})},ee=async()=>{if(S){S=!1;return}const J=y(),re=J.state[Na]-m.state[Na],te=re===1,le=re===-1,fe=!te&&!le||w;w=!1;const j=fe?"GO":le?"BACK":"FORWARD",x=fe?{type:"GO",index:re}:{type:le?"BACK":"FORWARD"};if(T)T=!1;else{const N=f();if(typeof document<"u"&&N.length){for(const M of N)if(await M.blockerFn({currentLocation:m,nextLocation:J,action:j})){S=!0,i.history.go(1),Z.notify(x);return}}}m=y(),Z.notify(x)},W=J=>{if(R){R=!1;return}let re=!1;const te=f();if(typeof document<"u"&&te.length)for(const le of te){const fe=le.enableBeforeUnload??!0;if(fe===!0){re=!0;break}if(typeof fe=="function"&&fe()===!0){re=!0;break}}if(re)return J.preventDefault(),J.returnValue=""},Z=e1({getLocation:E,getLength:()=>i.history.length,pushState:(J,re)=>F("push",J,re),replaceState:(J,re)=>F("replace",J,re),back:J=>(J&&(T=!0),R=!0,i.history.back()),forward:J=>{J&&(T=!0),R=!0,i.history.forward()},go:J=>{w=!0,i.history.go(J)},createHref:J=>p(J),flush:U,destroy:()=>{i.history.pushState=s,i.history.replaceState=c,i.removeEventListener(Pb,W,{capture:!0}),i.removeEventListener(Fb,ee)},onBlocked:()=>{b&&m!==b&&(m=b)},getBlockers:f,setBlockers:h,notifyOnIndexChange:!1});return i.addEventListener(Pb,W,{capture:!0}),i.addEventListener(Fb,ee),i.history.pushState=function(...J){const re=s.apply(i.history,J);return Z._ignoreSubscribers||B("PUSH"),re},i.history.replaceState=function(...J){const re=c.apply(i.history,J);return Z._ignoreSubscribers||B("REPLACE"),re},Z}function AR(e={initialEntries:["/"]}){const n=e.initialEntries;let r=e.initialIndex?Math.min(Math.max(e.initialIndex,0),n.length-1):n.length-1;const i=n.map((c,u)=>Rp(u,void 0));return e1({getLocation:()=>cl(n[r],i[r]),getLength:()=>n.length,pushState:(c,u)=>{r<n.length-1&&(n.splice(r+1),i.splice(r+1)),i.push(u),n.push(c),r=Math.max(n.length-1,0)},replaceState:(c,u)=>{i[r]=u,n[r]=c},back:()=>{r=Math.max(r-1,0)},forward:()=>{r=Math.min(r+1,n.length-1)},go:c=>{r=Math.min(Math.max(r+c,0),n.length-1)},createHref:c=>c})}function cl(e,n){const r=e.indexOf("#"),i=e.indexOf("?"),s=vm();return{href:e,pathname:e.substring(0,r>0?i>0?Math.min(r,i):r:i>0?i:e.length),hash:r>-1?e.substring(r):"",search:i>-1?e.slice(i,r===-1?void 0:r):"",state:n||{[Na]:0,key:s,__TSR_key:s}}}function vm(){return(Math.random()+1).toString(36).substring(7)}function Sr(e){return Yu(e.filter(n=>n!==void 0).join("/"))}function Yu(e){return e.replace(/\/{2,}/g,"/")}function ym(e){return e==="/"?e:e.replace(/^\/{1,}/,"")}function Ao(e){return e==="/"?e:e.replace(/\/{1,}$/,"")}function Hh(e){return Ao(ym(e))}function Eu(e,n){return e?.endsWith("/")&&e!=="/"&&e!==`${n}/`?e.slice(0,-1):e}function OR(e,n,r){return Eu(e,r)===Eu(n,r)}function MR({basepath:e,base:n,to:r,trailingSlash:i="never",caseSensitive:s}){var c,u;n=Cu(e,n,s),r=Cu(e,r,s);let f=Oo(n);const h=Oo(r);f.length>1&&((c=kp(f))==null?void 0:c.value)==="/"&&f.pop(),h.forEach((m,b)=>{m.value==="/"?b?b===h.length-1&&f.push(m):f=[m]:m.value===".."?f.pop():m.value==="."||f.push(m)}),f.length>1&&(((u=kp(f))==null?void 0:u.value)==="/"?i==="never"&&f.pop():i==="always"&&f.push({type:"pathname",value:"/"}));const p=f.map(m=>{if(m.type==="param"){const b=m.value.substring(1);if(m.prefixSegment&&m.suffixSegment)return`${m.prefixSegment}{$${b}}${m.suffixSegment}`;if(m.prefixSegment)return`${m.prefixSegment}{$${b}}`;if(m.suffixSegment)return`{$${b}}${m.suffixSegment}`}if(m.type==="wildcard"){if(m.prefixSegment&&m.suffixSegment)return`${m.prefixSegment}{$}${m.suffixSegment}`;if(m.prefixSegment)return`${m.prefixSegment}{$}`;if(m.suffixSegment)return`{$}${m.suffixSegment}`}return m.value}),y=Sr([e,...p]);return Yu(y)}const zR=/^\$.{1,}$/,DR=/^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,LR=/^\$$/,jR=/^(.*?)\{\$\}(.*)$/;function Oo(e){if(!e)return[];e=Yu(e);const n=[];if(e.slice(0,1)==="/"&&(e=e.substring(1),n.push({type:"pathname",value:"/"})),!e)return n;const r=e.split("/").filter(Boolean);return n.push(...r.map(i=>{const s=i.match(jR);if(s){const u=s[1],f=s[2];return{type:"wildcard",value:"$",prefixSegment:u||void 0,suffixSegment:f||void 0}}const c=i.match(DR);if(c){const u=c[1],f=c[2],h=c[3];return{type:"param",value:""+f,prefixSegment:u||void 0,suffixSegment:h||void 0}}return zR.test(i)?{type:"param",value:"$"+i.substring(1),prefixSegment:void 0,suffixSegment:void 0}:LR.test(i)?{type:"wildcard",value:"$",prefixSegment:void 0,suffixSegment:void 0}:{type:"pathname",value:i.includes("%25")?i.split("%25").map(u=>decodeURI(u)).join("%25"):decodeURI(i)}})),e.slice(-1)==="/"&&(e=e.substring(1),n.push({type:"pathname",value:"/"})),n}function Bh({path:e,params:n,leaveWildcards:r,leaveParams:i,decodeCharMap:s}){const c=Oo(e);function u(y){const m=n[y],b=typeof m=="string";return["*","_splat"].includes(y)?b?encodeURI(m):m:b?UR(m,s):m}let f=!1;const h={},p=Sr(c.map(y=>{if(y.type==="wildcard"){h._splat=n._splat;const m=y.prefixSegment||"",b=y.suffixSegment||"",w=u("_splat");return r?`${m}${y.value}${w??""}${b}`:`${m}${w}${b}`}if(y.type==="param"){const m=y.value.substring(1);!f&&!(m in n)&&(f=!0),h[m]=n[m];const b=y.prefixSegment||"",w=y.suffixSegment||"";if(i){const S=u(y.value);return`${b}${y.value}${S??""}${w}`}return`${b}${u(m)??"undefined"}${w}`}return y.value}));return{usedParams:h,interpolatedPath:p,isMissingParams:f}}function UR(e,n){let r=encodeURIComponent(e);if(n)for(const[i,s]of n)r=r.replaceAll(i,s);return r}function Np(e,n,r){const i=HR(e,n,r);if(!(r.to&&!i))return i??{}}function Cu(e,n,r=!1){const i=r?e:e.toLowerCase(),s=r?n:n.toLowerCase();switch(!0){case i==="/":return n;case s===i:return"";case n.length<e.length:return n;case s[i.length]!=="/":return n;case s.startsWith(i):return n.slice(e.length);default:return n}}function HR(e,n,r){if(e!=="/"&&!n.startsWith(e))return;n=Cu(e,n,r.caseSensitive);const i=Cu(e,`${r.to??"$"}`,r.caseSensitive),s=Oo(n),c=Oo(i);n.startsWith("/")||s.unshift({type:"pathname",value:"/"}),i.startsWith("/")||c.unshift({type:"pathname",value:"/"});const u={};return(()=>{var h;for(let p=0;p<Math.max(s.length,c.length);p++){const y=s[p],m=c[p],b=p>=s.length-1,w=p>=c.length-1;if(m){if(m.type==="wildcard"){const S=s.slice(p);let T;if(m.prefixSegment||m.suffixSegment){if(!y)return!1;const R=m.prefixSegment||"",E=m.suffixSegment||"",A=y.value;if("prefixSegment"in m&&!A.startsWith(R)||"suffixSegment"in m&&!((h=s[s.length-1])!=null&&h.value.endsWith(E)))return!1;let L=decodeURI(Sr(S.map(U=>U.value)));R&&L.startsWith(R)&&(L=L.slice(R.length)),E&&L.endsWith(E)&&(L=L.slice(0,L.length-E.length)),T=L}else T=decodeURI(Sr(S.map(R=>R.value)));return u["*"]=T,u._splat=T,!0}if(m.type==="pathname"){if(m.value==="/"&&!y?.value)return!0;if(y){if(r.caseSensitive){if(m.value!==y.value)return!1}else if(m.value.toLowerCase()!==y.value.toLowerCase())return!1}}if(!y)return!1;if(m.type==="param"){if(y.value==="/")return!1;let S;if(m.prefixSegment||m.suffixSegment){const T=m.prefixSegment||"",R=m.suffixSegment||"",E=y.value;if(T&&!E.startsWith(T)||R&&!E.endsWith(R))return!1;let A=E;T&&A.startsWith(T)&&(A=A.slice(T.length)),R&&A.endsWith(R)&&(A=A.slice(0,A.length-R.length)),S=decodeURIComponent(A)}else S=decodeURIComponent(y.value);u[m.value.substring(1)]=S}}if(!b&&w)return u["**"]=Sr(s.slice(p+1).map(S=>S.value)),!!r.fuzzy&&m?.value!=="/"}return!0})()?u:void 0}function wn(e){return!!e?.isNotFound}function BR(){try{if(typeof window<"u"&&typeof window.sessionStorage=="object")return window.sessionStorage}catch{return}}const Ru="tsr-scroll-restoration-v1_3",FR=(e,n)=>{let r;return(...i)=>{r||(r=setTimeout(()=>{e(...i),r=null},n))}};function PR(){const e=BR();if(!e)return;const n=e.getItem(Ru);let r=n?JSON.parse(n):{};return{state:r,set:i=>(r=di(i,r)||r,e.setItem(Ru,JSON.stringify(r)))}}const Fh=PR(),Ap=e=>e.state.__TSR_key||e.href;function $R(e){const n=[];let r;for(;r=e.parentNode;)n.unshift(`${e.tagName}:nth-child(${[].indexOf.call(r.children,e)+1})`),e=r;return`${n.join(" > ")}`.toLowerCase()}let Nu=!1;function t1(e,n,r,i,s){var c;let u;try{u=JSON.parse(sessionStorage.getItem(e)||"{}")}catch(p){console.error(p);return}const f=n||((c=window.history.state)==null?void 0:c.key),h=u[f];Nu=!0,(()=>{if(i&&h){for(const y in h){const m=h[y];if(y==="window")window.scrollTo({top:m.scrollY,left:m.scrollX,behavior:r});else if(y){const b=document.querySelector(y);b&&(b.scrollLeft=m.scrollX,b.scrollTop=m.scrollY)}}return}const p=window.location.hash.split("#")[1];if(p){const y=(window.history.state||{}).__hashScrollIntoViewOptions??!0;if(y){const m=document.getElementById(p);m&&m.scrollIntoView(y)}return}["window",...s?.filter(y=>y!=="window")??[]].forEach(y=>{const m=y==="window"?window:typeof y=="function"?y():document.querySelector(y);m&&m.scrollTo({top:0,left:0,behavior:r})})})(),Nu=!1}function IR(e,n){if(Fh===void 0||((e.options.scrollRestoration??!1)&&(e.isScrollRestoring=!0),typeof document>"u"||e.isScrollRestorationSetup))return;e.isScrollRestorationSetup=!0,Nu=!1;const i=e.options.getScrollRestorationKey||Ap;window.history.scrollRestoration="manual";const s=c=>{if(Nu||!e.isScrollRestoring)return;let u="";if(c.target===document||c.target===window)u="window";else{const h=c.target.getAttribute("data-scroll-restoration-id");h?u=`[data-scroll-restoration-id="${h}"]`:u=$R(c.target)}const f=i(e.state.location);Fh.set(h=>{const p=h[f]=h[f]||{},y=p[u]=p[u]||{};if(u==="window")y.scrollX=window.scrollX||0,y.scrollY=window.scrollY||0;else if(u){const m=document.querySelector(u);m&&(y.scrollX=m.scrollLeft||0,y.scrollY=m.scrollTop||0)}return h})};typeof document<"u"&&document.addEventListener("scroll",FR(s,100),!0),e.subscribe("onRendered",c=>{const u=i(c.toLocation);if(!e.resetNextScroll){e.resetNextScroll=!0;return}t1(Ru,u,e.options.scrollRestorationBehavior||void 0,e.isScrollRestoring||void 0,e.options.scrollToTopSelectors||void 0),e.isScrollRestoring&&Fh.set(f=>(f[u]=f[u]||{},f))})}function VR(e){if(typeof document<"u"&&document.querySelector){const n=e.state.location.state.__hashScrollIntoViewOptions??!0;if(n&&e.state.location.hash!==""){const r=document.getElementById(e.state.location.hash);r&&r.scrollIntoView(n)}}}function n1(e,n){const r=Object.entries(e).flatMap(([s,c])=>Array.isArray(c)?c.map(u=>[s,String(u)]):[[s,String(c)]]);return""+new URLSearchParams(r).toString()}function Ph(e){return e?e==="false"?!1:e==="true"?!0:+e*0===0&&+e+""===e?+e:e:""}function qR(e,n){const r=e;return[...new URLSearchParams(r).entries()].reduce((c,[u,f])=>{const h=c[u];return h==null?c[u]=Ph(f):c[u]=Array.isArray(h)?[...h,Ph(f)]:[h,Ph(f)],c},{})}const YR=GR(JSON.parse),XR=ZR(JSON.stringify,JSON.parse);function GR(e){return n=>{n.substring(0,1)==="?"&&(n=n.substring(1));const r=qR(n);for(const i in r){const s=r[i];if(typeof s=="string")try{r[i]=e(s)}catch{}}return r}}function ZR(e,n){function r(i){if(typeof i=="object"&&i!==null)try{return e(i)}catch{}else if(typeof i=="string"&&typeof n=="function")try{return n(i),e(i)}catch{}return i}return i=>{i={...i},Object.keys(i).forEach(c=>{const u=i[c];typeof u>"u"||u===void 0?delete i[c]:i[c]=r(u)});const s=n1(i).toString();return s?`?${s}`:""}}const Xn="__root__";function Xu(e){if(e.statusCode=e.statusCode||e.code||307,!e.reloadDocument)try{new URL(`${e.href}`),e.reloadDocument=!0}catch{}const n=new Headers(e.headers||{});e.href&&n.get("Location")===null&&n.set("Location",e.href);const r=new Response(null,{status:e.statusCode,headers:n});if(r.options=e,e.throw)throw r;return r}function vn(e){return e instanceof Response&&!!e.options}function QR(e){if(typeof e=="object"&&e.isSerializedRedirect)return Xu(e)}function WR(e){return e instanceof Error?{name:e.name,message:e.message}:{data:e}}function fi(e){const n=e.resolvedLocation,r=e.location,i=n?.pathname!==r.pathname,s=n?.href!==r.href,c=n?.hash!==r.hash;return{fromLocation:n,toLocation:r,pathChanged:i,hrefChanged:s,hashChanged:c}}class KR{constructor(n){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.startTransition=r=>r(),this.isShell=!1,this.update=r=>{var i;r.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");const s=this.options;this.options={...this.options,...r},this.isServer=this.options.isServer??typeof document>"u",this.pathParamsDecodeCharMap=this.options.pathParamsAllowedCharacters?new Map(this.options.pathParamsAllowedCharacters.map(c=>[encodeURIComponent(c),c])):void 0,(!this.basepath||r.basepath&&r.basepath!==s.basepath)&&(r.basepath===void 0||r.basepath===""||r.basepath==="/"?this.basepath="/":this.basepath=`/${Hh(r.basepath)}`),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.history=this.options.history??(this.isServer?AR({initialEntries:[this.basepath||"/"]}):NR()),this.latestLocation=this.parseLocation()),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),this.__store||(this.__store=new Cp(e4(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,cachedMatches:this.state.cachedMatches.filter(c=>!["redirected"].includes(c.status))}}}),IR(this)),typeof window<"u"&&"CSS"in window&&typeof((i=window.CSS)==null?void 0:i.supports)=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)")),this.latestLocation.search.__TSS_SHELL&&(this.isShell=!0)},this.buildRouteTree=()=>{const{routesById:r,routesByPath:i,flatRoutes:s}=t4({routeTree:this.routeTree,initRoute:(u,f)=>{u.init({originalIndex:f,defaultSsr:this.options.defaultSsr})}});this.routesById=r,this.routesByPath=i,this.flatRoutes=s;const c=this.options.notFoundRoute;c&&(c.init({originalIndex:99999999999,defaultSsr:this.options.defaultSsr}),this.routesById[c.id]=c)},this.subscribe=(r,i)=>{const s={eventType:r,fn:i};return this.subscribers.add(s),()=>{this.subscribers.delete(s)}},this.emit=r=>{this.subscribers.forEach(i=>{i.eventType===r.type&&i.fn(r)})},this.parseLocation=(r,i)=>{const s=({pathname:h,search:p,hash:y,state:m})=>{const b=this.options.parseSearch(p),w=this.options.stringifySearch(b);return{pathname:h,searchStr:w,search:Yn(r?.search,b),hash:y.split("#").reverse()[0]??"",href:`${h}${w}${y}`,state:Yn(r?.state,m)}},c=s(i??this.history.location),{__tempLocation:u,__tempKey:f}=c.state;if(u&&(!f||f===this.tempLocationKey)){const h=s(u);return h.state.key=c.state.key,h.state.__TSR_key=c.state.__TSR_key,delete h.state.__tempLocation,{...h,maskedLocation:c}}return c},this.resolvePathWithBase=(r,i)=>MR({basepath:this.basepath,base:r,to:Yu(i),trailingSlash:this.options.trailingSlash,caseSensitive:this.options.caseSensitive}),this.matchRoutes=(r,i,s)=>typeof r=="string"?this.matchRoutesInternal({pathname:r,search:i},s):this.matchRoutesInternal(r,i),this.getMatchedRoutes=(r,i)=>n4({pathname:r,routePathname:i,basepath:this.basepath,caseSensitive:this.options.caseSensitive,routesByPath:this.routesByPath,routesById:this.routesById,flatRoutes:this.flatRoutes}),this.cancelMatch=r=>{const i=this.getMatch(r);i&&(i.abortController.abort(),clearTimeout(i.pendingTimeout))},this.cancelMatches=()=>{var r;(r=this.state.pendingMatches)==null||r.forEach(i=>{this.cancelMatch(i.id)})},this.buildLocation=r=>{const i=(c={})=>{var u;const f=c._fromLocation||this.latestLocation,h=this.matchRoutes(f,{_buildLocation:!0}),p=kp(h);let y=p.fullPath;c.unsafeRelative==="path"?y=f.pathname:c.to&&c.from&&(y=c.from,[...h].reverse().find(ee=>ee.fullPath===y||ee.fullPath===Sr([y,"/"]))||console.warn(`Could not find match for from: ${c.from}`));const m=p.search,b={...p.params},w=c.to?this.resolvePathWithBase(y,`${c.to}`):this.resolvePathWithBase(y,".");let S=(c.params??!0)===!0?b:{...b,...di(c.params,b)};const T=this.matchRoutes(w,{},{_buildLocation:!0}).map(B=>this.looseRoutesById[B.routeId]);Object.keys(S).length>0&&T.map(B=>{var ee;return((ee=B.options.params)==null?void 0:ee.stringify)??B.options.stringifyParams}).filter(Boolean).forEach(B=>{S={...S,...B(S)}});const R=Bh({path:w,params:S??{},leaveWildcards:!1,leaveParams:r.leaveParams,decodeCharMap:this.pathParamsDecodeCharMap}).interpolatedPath;let E=m;if(r._includeValidateSearch&&((u=this.options.search)!=null&&u.strict)){let B={};T.forEach(ee=>{try{ee.options.validateSearch&&(B={...B,...Op(ee.options.validateSearch,{...B,...E})??{}})}catch{}}),E=B}E=r4({search:E,dest:c,destRoutes:T,_includeValidateSearch:r._includeValidateSearch}),E=Yn(m,E);const A=this.options.stringifySearch(E),L=c.hash===!0?f.hash:c.hash?di(c.hash,f.hash):void 0,U=L?`#${L}`:"";let F=c.state===!0?f.state:c.state?di(c.state,f.state):{};return F=Yn(f.state,F),{pathname:R,search:E,searchStr:A,state:F,hash:L??"",href:`${R}${A}${U}`,unmaskOnReload:c.unmaskOnReload}},s=(c={},u)=>{var f;const h=i(c);let p=u?i(u):void 0;if(!p){let y={};const m=(f=this.options.routeMasks)==null?void 0:f.find(b=>{const w=Np(this.basepath,h.pathname,{to:b.from,caseSensitive:!1,fuzzy:!1});return w?(y=w,!0):!1});if(m){const{from:b,...w}=m;u={...Tp(r,["from"]),...w,params:y},p=i(u)}}if(p){const y=i(u);h.maskedLocation=y}return h};return r.mask?s(r,{...Tp(r,["from"]),...r.mask}):s(r)},this.commitLocation=({viewTransition:r,ignoreBlocker:i,...s})=>{const c=()=>{const h=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];h.forEach(y=>{s.state[y]=this.latestLocation.state[y]});const p=To(s.state,this.latestLocation.state);return h.forEach(y=>{delete s.state[y]}),p},u=this.latestLocation.href===s.href,f=this.commitLocationPromise;if(this.commitLocationPromise=go(()=>{f?.resolve()}),u&&c())this.load();else{let{maskedLocation:h,hashScrollIntoView:p,...y}=s;h&&(y={...h,state:{...h.state,__tempKey:void 0,__tempLocation:{...y,search:y.searchStr,state:{...y.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(y.unmaskOnReload??this.options.unmaskOnReload??!1)&&(y.state.__tempKey=this.tempLocationKey)),y.state.__hashScrollIntoViewOptions=p??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=r,this.history[s.replace?"replace":"push"](y.href,y.state,{ignoreBlocker:i})}return this.resetNextScroll=s.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:r,resetScroll:i,hashScrollIntoView:s,viewTransition:c,ignoreBlocker:u,href:f,...h}={})=>{if(f){const y=this.history.location.state.__TSR_index,m=cl(f,{__TSR_index:r?y:y+1});h.to=m.pathname,h.search=this.options.parseSearch(m.search),h.hash=m.hash.slice(1)}const p=this.buildLocation({...h,_includeValidateSearch:!0});return this.commitLocation({...p,viewTransition:c,replace:r,resetScroll:i,hashScrollIntoView:s,ignoreBlocker:u})},this.navigate=({to:r,reloadDocument:i,href:s,...c})=>{if(!i&&s)try{new URL(`${s}`),i=!0}catch{}if(i){if(!s){const u=this.buildLocation({to:r,...c});s=this.history.createHref(u.href)}c.replace?window.location.replace(s):window.location.href=s;return}return this.buildAndCommitLocation({...c,href:s,to:r})},this.beforeLoad=()=>{if(this.cancelMatches(),this.latestLocation=this.parseLocation(this.latestLocation),this.isServer){const i=this.buildLocation({to:this.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});if(Hh(this.latestLocation.href)!==Hh(i.href))throw Xu({href:i.href})}const r=this.matchRoutes(this.latestLocation);this.__store.setState(i=>({...i,status:"pending",isLoading:!0,location:this.latestLocation,pendingMatches:r,cachedMatches:i.cachedMatches.filter(s=>r.find(u=>u.id===s.id)?s.status==="success"&&(s.isFetching||s.loaderData!==void 0):!0)}))},this.load=async r=>{let i,s,c;for(c=new Promise(u=>{this.startTransition(async()=>{var f;try{this.beforeLoad();const h=this.latestLocation,p=this.state.resolvedLocation;this.state.redirect||this.emit({type:"onBeforeNavigate",...fi({resolvedLocation:p,location:h})}),this.emit({type:"onBeforeLoad",...fi({resolvedLocation:p,location:h})}),await this.loadMatches({sync:r?.sync,matches:this.state.pendingMatches,location:h,onReady:async()=>{this.startViewTransition(async()=>{let y,m,b;Bb(()=>{this.__store.setState(w=>{const S=w.matches,T=w.pendingMatches||w.matches;return y=S.filter(R=>!T.find(E=>E.id===R.id)),m=T.filter(R=>!S.find(E=>E.id===R.id)),b=S.filter(R=>T.find(E=>E.id===R.id)),{...w,isLoading:!1,loadedAt:Date.now(),matches:T,pendingMatches:void 0,cachedMatches:[...w.cachedMatches,...y.filter(R=>R.status!=="error")]}}),this.clearExpiredCache()}),[[y,"onLeave"],[m,"onEnter"],[b,"onStay"]].forEach(([w,S])=>{w.forEach(T=>{var R,E;(E=(R=this.looseRoutesById[T.routeId].options)[S])==null||E.call(R,T)})})})}})}catch(h){vn(h)?(i=h,this.isServer||this.navigate({...i.options,replace:!0,ignoreBlocker:!0})):wn(h)&&(s=h),this.__store.setState(p=>({...p,statusCode:i?i.status:s?404:p.matches.some(y=>y.status==="error")?500:200,redirect:i}))}this.latestLoadPromise===c&&((f=this.commitLocationPromise)==null||f.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),u()})}),this.latestLoadPromise=c,await c;this.latestLoadPromise&&c!==this.latestLoadPromise;)await this.latestLoadPromise;this.hasNotFoundMatch()&&this.__store.setState(u=>({...u,statusCode:404}))},this.startViewTransition=r=>{const i=this.shouldViewTransition??this.options.defaultViewTransition;if(delete this.shouldViewTransition,i&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let s;if(typeof i=="object"&&this.isViewTransitionTypesSupported){const c=this.latestLocation,u=this.state.resolvedLocation,f=typeof i.types=="function"?i.types(fi({resolvedLocation:u,location:c})):i.types;s={update:r,types:f}}else s=r;document.startViewTransition(s)}else r()},this.updateMatch=(r,i)=>{var s;let c;const u=(s=this.state.pendingMatches)==null?void 0:s.find(y=>y.id===r),f=this.state.matches.find(y=>y.id===r),h=this.state.cachedMatches.find(y=>y.id===r),p=u?"pendingMatches":f?"matches":h?"cachedMatches":"";return p&&this.__store.setState(y=>{var m;return{...y,[p]:(m=y[p])==null?void 0:m.map(b=>b.id===r?c=i(b):b)}}),c},this.getMatch=r=>[...this.state.cachedMatches,...this.state.pendingMatches??[],...this.state.matches].find(i=>i.id===r),this.loadMatches=async({location:r,matches:i,preload:s,onReady:c,updateMatch:u=this.updateMatch,sync:f})=>{let h,p=!1;const y=async()=>{p||(p=!0,await c?.())},m=w=>!!(s&&!this.state.matches.find(S=>S.id===w)),b=(w,S)=>{var T,R,E,A;if(vn(S)||wn(S)){if(vn(S)&&S.redirectHandled&&!S.options.reloadDocument)throw S;if((T=w.beforeLoadPromise)==null||T.resolve(),(R=w.loaderPromise)==null||R.resolve(),u(w.id,L=>({...L,status:vn(S)?"redirected":wn(S)?"notFound":"error",isFetching:!1,error:S,beforeLoadPromise:void 0,loaderPromise:void 0})),S.routeId||(S.routeId=w.routeId),(E=w.loadPromise)==null||E.resolve(),vn(S))throw p=!0,S.options._fromLocation=r,S.redirectHandled=!0,S=this.resolveRedirect(S),S;if(wn(S))throw this._handleNotFound(i,S,{updateMatch:u}),(A=this.serverSsr)==null||A.onMatchSettled({router:this,match:this.getMatch(w.id)}),S}};try{await new Promise((w,S)=>{(async()=>{var T,R,E,A;try{const L=(B,ee,W)=>{var Z,J;const{id:re,routeId:te}=i[B],le=this.looseRoutesById[te];if(ee instanceof Promise)throw ee;ee.routerCode=W,h=h??B,b(this.getMatch(re),ee);try{(J=(Z=le.options).onError)==null||J.call(Z,ee)}catch(fe){ee=fe,b(this.getMatch(re),ee)}u(re,fe=>{var j,x;return(j=fe.beforeLoadPromise)==null||j.resolve(),(x=fe.loadPromise)==null||x.resolve(),{...fe,error:ee,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController,beforeLoadPromise:void 0}})};for(const[B,{id:ee,routeId:W}]of i.entries()){const Z=this.getMatch(ee),J=(T=i[B-1])==null?void 0:T.id,re=this.looseRoutesById[W],te=re.options.pendingMs??this.options.defaultPendingMs,le=!!(c&&!this.isServer&&!m(ee)&&(re.options.loader||re.options.beforeLoad||$b(re))&&typeof te=="number"&&te!==1/0&&(re.options.pendingComponent??((R=this.options)==null?void 0:R.defaultPendingComponent)));let fe=!0;if((Z.beforeLoadPromise||Z.loaderPromise)&&(le&&setTimeout(()=>{try{y()}catch{}},te),await Z.beforeLoadPromise,fe=this.getMatch(ee).status==="error"),fe){try{u(ee,he=>{const ue=he.loadPromise;return{...he,loadPromise:go(()=>{ue?.resolve()}),beforeLoadPromise:go()}});const j=new AbortController;let x;le&&(x=setTimeout(()=>{try{y()}catch{}},te));const{paramsError:N,searchError:M}=this.getMatch(ee);N&&L(B,N,"PARSE_PARAMS"),M&&L(B,M,"VALIDATE_SEARCH");const V=()=>J?this.getMatch(J).context:this.options.context??{};u(ee,he=>({...he,isFetching:"beforeLoad",fetchCount:he.fetchCount+1,abortController:j,pendingTimeout:x,context:{...V(),...he.__routeContext}}));const{search:C,params:z,context:$,cause:q}=this.getMatch(ee),I=m(ee),ie={search:C,abortController:j,params:z,preload:I,context:$,location:r,navigate:he=>this.navigate({...he,_fromLocation:r}),buildLocation:this.buildLocation,cause:I?"preload":q,matches:i},K=await((A=(E=re.options).beforeLoad)==null?void 0:A.call(E,ie))??{};(vn(K)||wn(K))&&L(B,K,"BEFORE_LOAD"),u(ee,he=>({...he,__beforeLoadContext:K,context:{...V(),...he.__routeContext,...K},abortController:j}))}catch(j){L(B,j,"BEFORE_LOAD")}u(ee,j=>{var x;return(x=j.beforeLoadPromise)==null||x.resolve(),{...j,beforeLoadPromise:void 0,isFetching:!1}})}}const U=i.slice(0,h),F=[];U.forEach(({id:B,routeId:ee},W)=>{F.push((async()=>{const{loaderPromise:Z}=this.getMatch(B);let J=!1,re=!1;if(Z){await Z;const te=this.getMatch(B);te.error&&b(te,te.error)}else{const te=F[W-1],le=this.looseRoutesById[ee],fe=()=>{const{params:I,loaderDeps:ie,abortController:K,context:he,cause:ue}=this.getMatch(B),be=m(B);return{params:I,deps:ie,preload:!!be,parentMatchPromise:te,abortController:K,context:he,location:r,navigate:me=>this.navigate({...me,_fromLocation:r}),cause:be?"preload":ue,route:le}},j=Date.now()-this.getMatch(B).updatedAt,x=m(B),N=x?le.options.preloadStaleTime??this.options.defaultPreloadStaleTime??3e4:le.options.staleTime??this.options.defaultStaleTime??0,M=le.options.shouldReload,V=typeof M=="function"?M(fe()):M;u(B,I=>({...I,loaderPromise:go(),preload:!!x&&!this.state.matches.find(ie=>ie.id===B)}));const C=async()=>{var I,ie,K,he,ue,be;const me=this.getMatch(B);if(!me)return;const Ue={matches:i,match:me,params:me.params,loaderData:me.loaderData},Ve=await((ie=(I=le.options).head)==null?void 0:ie.call(I,Ue)),dt=Ve?.meta,gt=Ve?.links,_n=Ve?.scripts,dn=await((he=(K=le.options).scripts)==null?void 0:he.call(K,Ue)),Ze=await((be=(ue=le.options).headers)==null?void 0:be.call(ue,Ue));return{meta:dt,links:gt,headScripts:_n,headers:Ze,scripts:dn}},z=async()=>{var I,ie,K,he,ue;try{const be=async()=>{const me=this.getMatch(B);me.minPendingPromise&&await me.minPendingPromise};try{this.loadRouteChunk(le),u(B,Ve=>({...Ve,isFetching:"loader"}));const me=await((ie=(I=le.options).loader)==null?void 0:ie.call(I,fe()));b(this.getMatch(B),me),await le._lazyPromise,await be(),await le._componentsPromise,u(B,Ve=>({...Ve,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),loaderData:me}));const Ue=await C();u(B,Ve=>({...Ve,...Ue}))}catch(me){let Ue=me;await be(),b(this.getMatch(B),me);try{(he=(K=le.options).onError)==null||he.call(K,me)}catch(dt){Ue=dt,b(this.getMatch(B),dt)}const Ve=await C();u(B,dt=>({...dt,error:Ue,status:"error",isFetching:!1,...Ve}))}(ue=this.serverSsr)==null||ue.onMatchSettled({router:this,match:this.getMatch(B)})}catch(be){const me=await C();u(B,Ue=>({...Ue,loaderPromise:void 0,...me})),b(this.getMatch(B),be)}},{status:$,invalid:q}=this.getMatch(B);if(J=$==="success"&&(q||(V??j>N)),!(x&&le.options.preload===!1))if(J&&!f)re=!0,(async()=>{try{await z();const{loaderPromise:I,loadPromise:ie}=this.getMatch(B);I?.resolve(),ie?.resolve(),u(B,K=>({...K,loaderPromise:void 0}))}catch(I){vn(I)&&await this.navigate(I.options)}})();else if($!=="success"||J&&f)await z();else{const I=await C();u(B,ie=>({...ie,...I}))}}if(!re){const{loaderPromise:te,loadPromise:le}=this.getMatch(B);te?.resolve(),le?.resolve()}return u(B,te=>({...te,isFetching:re?te.isFetching:!1,loaderPromise:re?te.loaderPromise:void 0,invalid:!1})),this.getMatch(B)})())}),await Promise.all(F),w()}catch(L){S(L)}})()}),await y()}catch(w){if(vn(w)||wn(w))throw wn(w)&&!s&&await y(),w}return i},this.invalidate=r=>{const i=s=>{var c;return((c=r?.filter)==null?void 0:c.call(r,s))??!0?{...s,invalid:!0,...r?.forcePending||s.status==="error"?{status:"pending",error:void 0}:{}}:s};return this.__store.setState(s=>{var c;return{...s,matches:s.matches.map(i),cachedMatches:s.cachedMatches.map(i),pendingMatches:(c=s.pendingMatches)==null?void 0:c.map(i)}}),this.shouldViewTransition=!1,this.load({sync:r?.sync})},this.resolveRedirect=r=>(r.options.href||(r.options.href=this.buildLocation(r.options).href,r.headers.set("Location",r.options.href)),r.headers.get("Location")||r.headers.set("Location",r.options.href),r),this.clearCache=r=>{const i=r?.filter;i!==void 0?this.__store.setState(s=>({...s,cachedMatches:s.cachedMatches.filter(c=>!i(c))})):this.__store.setState(s=>({...s,cachedMatches:[]}))},this.clearExpiredCache=()=>{const r=i=>{const s=this.looseRoutesById[i.routeId];if(!s.options.loader)return!0;const c=(i.preload?s.options.preloadGcTime??this.options.defaultPreloadGcTime:s.options.gcTime??this.options.defaultGcTime)??5*60*1e3;return!(i.status!=="error"&&Date.now()-i.updatedAt<c)};this.clearCache({filter:r})},this.loadRouteChunk=r=>(r._lazyPromise===void 0&&(r.lazyFn?r._lazyPromise=r.lazyFn().then(i=>{const{id:s,...c}=i.options;Object.assign(r.options,c)}):r._lazyPromise=Promise.resolve()),r._componentsPromise===void 0&&(r._componentsPromise=r._lazyPromise.then(()=>Promise.all(r1.map(async i=>{const s=r.options[i];s?.preload&&await s.preload()})))),r._componentsPromise),this.preloadRoute=async r=>{const i=this.buildLocation(r);let s=this.matchRoutes(i,{throwOnError:!0,preload:!0,dest:r});const c=new Set([...this.state.matches,...this.state.pendingMatches??[]].map(f=>f.id)),u=new Set([...c,...this.state.cachedMatches.map(f=>f.id)]);Bb(()=>{s.forEach(f=>{u.has(f.id)||this.__store.setState(h=>({...h,cachedMatches:[...h.cachedMatches,f]}))})});try{return s=await this.loadMatches({matches:s,location:i,preload:!0,updateMatch:(f,h)=>{c.has(f)?s=s.map(p=>p.id===f?h(p):p):this.updateMatch(f,h)}}),s}catch(f){if(vn(f))return f.options.reloadDocument?void 0:await this.preloadRoute({...f.options,_fromLocation:i});wn(f)||console.error(f);return}},this.matchRoute=(r,i)=>{const s={...r,to:r.to?this.resolvePathWithBase(r.from||"",r.to):void 0,params:r.params||{},leaveParams:!0},c=this.buildLocation(s);if(i?.pending&&this.state.status!=="pending")return!1;const f=(i?.pending===void 0?!this.state.isLoading:i.pending)?this.latestLocation:this.state.resolvedLocation||this.state.location,h=Np(this.basepath,f.pathname,{...i,to:c.pathname});return!h||r.params&&!To(h,r.params,{partial:!0})?!1:h&&(i?.includeSearch??!0)?To(f.search,c.search,{partial:!0})?h:!1:h},this._handleNotFound=(r,i,{updateMatch:s=this.updateMatch}={})=>{var c;const u=this.routesById[i.routeId??""]??this.routeTree,f={};for(const p of r)f[p.routeId]=p;!u.options.notFoundComponent&&((c=this.options)!=null&&c.defaultNotFoundComponent)&&(u.options.notFoundComponent=this.options.defaultNotFoundComponent),Zn(u.options.notFoundComponent);const h=f[u.id];Zn(h,"Could not find match for route: "+u.id),s(h.id,p=>({...p,status:"notFound",error:i,isFetching:!1})),i.routerCode==="BEFORE_LOAD"&&u.parentRoute&&(i.routeId=u.parentRoute.id,this._handleNotFound(r,i,{updateMatch:s}))},this.hasNotFoundMatch=()=>this.__store.state.matches.some(r=>r.status==="notFound"||r.globalNotFound),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...n,caseSensitive:n.caseSensitive??!1,notFoundMode:n.notFoundMode??"fuzzy",stringifySearch:n.stringifySearch??XR,parseSearch:n.parseSearch??YR}),typeof document<"u"&&(window.__TSR_ROUTER__=this)}get state(){return this.__store.state}get looseRoutesById(){return this.routesById}matchRoutesInternal(n,r){var i;const{foundRoute:s,matchedRoutes:c,routeParams:u}=this.getMatchedRoutes(n.pathname,(i=r?.dest)==null?void 0:i.to);let f=!1;(s?s.path!=="/"&&u["**"]:Ao(n.pathname))&&(this.options.notFoundRoute?c.push(this.options.notFoundRoute):f=!0);const h=(()=>{if(f){if(this.options.notFoundMode!=="root")for(let b=c.length-1;b>=0;b--){const w=c[b];if(w.children)return w.id}return Xn}})(),p=c.map(b=>{var w;let S;const T=((w=b.options.params)==null?void 0:w.parse)??b.options.parseParams;if(T)try{const R=T(u);Object.assign(u,R)}catch(R){if(S=new JR(R.message,{cause:R}),r?.throwOnError)throw S;return S}}),y=[],m=b=>b?.id?b.context??this.options.context??{}:this.options.context??{};return c.forEach((b,w)=>{var S,T;const R=y[w-1],[E,A,L]=(()=>{const fe=R?.search??n.search,j=R?._strictSearch??{};try{const x=Op(b.options.validateSearch,{...fe})??{};return[{...fe,...x},{...j,...x},void 0]}catch(x){let N=x;if(x instanceof Au||(N=new Au(x.message,{cause:x})),r?.throwOnError)throw N;return[fe,{},N]}})(),U=((T=(S=b.options).loaderDeps)==null?void 0:T.call(S,{search:E}))??"",F=U?JSON.stringify(U):"",{usedParams:B,interpolatedPath:ee}=Bh({path:b.fullPath,params:u,decodeCharMap:this.pathParamsDecodeCharMap}),W=Bh({path:b.id,params:u,leaveWildcards:!0,decodeCharMap:this.pathParamsDecodeCharMap}).interpolatedPath+F,Z=this.getMatch(W),J=this.state.matches.find(fe=>fe.routeId===b.id),re=J?"stay":"enter";let te;if(Z)te={...Z,cause:re,params:J?Yn(J.params,u):u,_strictParams:B,search:Yn(J?J.search:Z.search,E),_strictSearch:A};else{const fe=b.options.loader||b.options.beforeLoad||b.lazyFn||$b(b)?"pending":"success";te={id:W,index:w,routeId:b.id,params:J?Yn(J.params,u):u,_strictParams:B,pathname:Sr([this.basepath,ee]),updatedAt:Date.now(),search:J?Yn(J.search,E):E,_strictSearch:A,searchError:void 0,status:fe,isFetching:!1,error:void 0,paramsError:p[w],__routeContext:{},__beforeLoadContext:{},context:{},abortController:new AbortController,fetchCount:0,cause:re,loaderDeps:J?Yn(J.loaderDeps,U):U,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:b.options.staticData||{},loadPromise:go(),fullPath:b.fullPath}}r?.preload||(te.globalNotFound=h===b.id),te.searchError=L;const le=m(R);te.context={...le,...te.__routeContext,...te.__beforeLoadContext},y.push(te)}),y.forEach((b,w)=>{var S,T;const R=this.looseRoutesById[b.routeId];if(!this.getMatch(b.id)&&r?._buildLocation!==!0){const A=y[w-1],L=m(A),U={deps:b.loaderDeps,params:b.params,context:L,location:n,navigate:F=>this.navigate({...F,_fromLocation:n}),buildLocation:this.buildLocation,cause:b.cause,abortController:b.abortController,preload:!!b.preload,matches:y};b.__routeContext=((T=(S=R.options).context)==null?void 0:T.call(S,U))??{},b.context={...L,...b.__routeContext,...b.__beforeLoadContext}}}),y}}class Au extends Error{}class JR extends Error{}function e4(e){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:e,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200}}function Op(e,n){if(e==null)return{};if("~standard"in e){const r=e["~standard"].validate(n);if(r instanceof Promise)throw new Au("Async validation not supported");if(r.issues)throw new Au(JSON.stringify(r.issues,void 0,2),{cause:r});return r.value}return"parse"in e?e.parse(n):typeof e=="function"?e(n):{}}const r1=["component","errorComponent","pendingComponent","notFoundComponent"];function $b(e){var n;for(const r of r1)if((n=e.options[r])!=null&&n.preload)return!0;return!1}function t4({routeTree:e,initRoute:n}){const r={},i={},s=h=>{h.forEach((p,y)=>{n?.(p,y);const m=r[p.id];if(Zn(!m,`Duplicate routes found with id: ${String(p.id)}`),r[p.id]=p,!p.isRoot&&p.path){const w=Ao(p.fullPath);(!i[w]||p.fullPath.endsWith("/"))&&(i[w]=p)}const b=p.children;b?.length&&s(b)})};s([e]);const c=[];Object.values(r).forEach((h,p)=>{var y;if(h.isRoot||!h.path)return;const m=ym(h.fullPath),b=Oo(m);for(;b.length>1&&((y=b[0])==null?void 0:y.value)==="/";)b.shift();const w=b.map(S=>S.value==="/"?.75:S.type==="param"&&S.prefixSegment&&S.suffixSegment?.55:S.type==="param"&&S.prefixSegment?.52:S.type==="param"&&S.suffixSegment?.51:S.type==="param"?.5:S.type==="wildcard"&&S.prefixSegment&&S.suffixSegment?.3:S.type==="wildcard"&&S.prefixSegment?.27:S.type==="wildcard"&&S.suffixSegment?.26:S.type==="wildcard"?.25:1);c.push({child:h,trimmed:m,parsed:b,index:p,scores:w})});const f=c.sort((h,p)=>{const y=Math.min(h.scores.length,p.scores.length);for(let m=0;m<y;m++)if(h.scores[m]!==p.scores[m])return p.scores[m]-h.scores[m];if(h.scores.length!==p.scores.length)return p.scores.length-h.scores.length;for(let m=0;m<y;m++)if(h.parsed[m].value!==p.parsed[m].value)return h.parsed[m].value>p.parsed[m].value?1:-1;return h.index-p.index}).map((h,p)=>(h.child.rank=p,h.child));return{routesById:r,routesByPath:i,flatRoutes:f}}function n4({pathname:e,routePathname:n,basepath:r,caseSensitive:i,routesByPath:s,routesById:c,flatRoutes:u}){let f={};const h=Ao(e),p=w=>{var S;return Np(r,h,{to:w.fullPath,caseSensitive:((S=w.options)==null?void 0:S.caseSensitive)??i,fuzzy:!0})};let y=n!==void 0?s[n]:void 0;y?f=p(y):y=u.find(w=>{const S=p(w);return S?(f=S,!0):!1});let m=y||c[Xn];const b=[m];for(;m.parentRoute;)m=m.parentRoute,b.unshift(m);return{matchedRoutes:b,routeParams:f,foundRoute:y}}function r4({search:e,dest:n,destRoutes:r,_includeValidateSearch:i}){const s=r.reduce((f,h)=>{var p;const y=[];if("search"in h.options)(p=h.options.search)!=null&&p.middlewares&&y.push(...h.options.search.middlewares);else if(h.options.preSearchFilters||h.options.postSearchFilters){const m=({search:b,next:w})=>{let S=b;"preSearchFilters"in h.options&&h.options.preSearchFilters&&(S=h.options.preSearchFilters.reduce((R,E)=>E(R),b));const T=w(S);return"postSearchFilters"in h.options&&h.options.postSearchFilters?h.options.postSearchFilters.reduce((R,E)=>E(R),T):T};y.push(m)}if(i&&h.options.validateSearch){const m=({search:b,next:w})=>{const S=w(b);try{return{...S,...Op(h.options.validateSearch,S)??{}}}catch{return S}};y.push(m)}return f.concat(y)},[])??[],c=({search:f})=>n.search?n.search===!0?f:di(n.search,f):{};s.push(c);const u=(f,h)=>{if(f>=s.length)return h;const p=s[f];return p({search:h,next:m=>u(f+1,m)})};return u(0,e)}const _r=Symbol.for("TSR_DEFERRED_PROMISE");function a4(e,n){const r=e;return r[_r]||(r[_r]={status:"pending"},r.then(i=>{r[_r].status="success",r[_r].data=i}).catch(i=>{r[_r].status="error",r[_r].error={data:WR(i),__isServerError:!0}})),r}const i4="Error preloading route! ☝️";class a1{constructor(n){if(this.init=r=>{var i,s;this.originalIndex=r.originalIndex;const c=this.options,u=!c?.path&&!c?.id;this.parentRoute=(s=(i=this.options).getParentRoute)==null?void 0:s.call(i),u?this._path=Xn:this.parentRoute||Zn(!1);let f=u?Xn:c?.path;f&&f!=="/"&&(f=ym(f));const h=c?.id||f;let p=u?Xn:Sr([this.parentRoute.id===Xn?"":this.parentRoute.id,h]);f===Xn&&(f="/"),p!==Xn&&(p=Sr(["/",p]));const y=p===Xn?"/":Sr([this.parentRoute.fullPath,f]);this._path=f,this._id=p,this._fullPath=y,this._to=y,this._ssr=c?.ssr??r.defaultSsr??!0},this.clone=r=>{this._path=r._path,this._id=r._id,this._fullPath=r._fullPath,this._to=r._to,this._ssr=r._ssr,this.options.getParentRoute=r.options.getParentRoute,this.children=r.children},this.addChildren=r=>this._addFileChildren(r),this._addFileChildren=r=>(Array.isArray(r)&&(this.children=r),typeof r=="object"&&r!==null&&(this.children=Object.values(r)),this),this._addFileTypes=()=>this,this.updateLoader=r=>(Object.assign(this.options,r),this),this.update=r=>(Object.assign(this.options,r),this),this.lazy=r=>(this.lazyFn=r,this),this.options=n||{},this.isRoot=!n?.getParentRoute,n?.id&&n?.path)throw new Error("Route cannot have both an 'id' and a 'path' option.")}get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}get ssr(){return this._ssr}}class o4 extends a1{constructor(n){super(n)}}const s4=[];function hi(e,n){const r=n||e||{};return typeof r.method>"u"&&(r.method="GET"),{options:r,middleware:i=>hi(void 0,Object.assign(r,{middleware:i})),validator:i=>hi(void 0,Object.assign(r,{validator:i})),type:i=>hi(void 0,Object.assign(r,{type:i})),handler:(...i)=>{const[s,c]=i;Object.assign(r,{...s,extractedFn:s,serverFn:c});const u=[...r.middleware||[],p4(r)];return Object.assign(async f=>Ib(u,"client",{...s,...r,data:f?.data,headers:f?.headers,signal:f?.signal,context:{}}).then(h=>{if(r.response==="full")return h;if(h.error)throw h.error;return h.result}),{...s,__executeServer:async(f,h)=>{const p=f instanceof FormData?u4(f):f;p.type=typeof r.type=="function"?r.type(p):r.type;const y={...s,...p,signal:h},m=()=>Ib(u,"server",y).then(b=>({result:b.result,error:b.error,context:b.sendContext}));if(y.type==="static"){let b;if(or?.getItem&&(b=await or.getItem(y)),b||(b=await m().then(w=>({ctx:w,error:null})).catch(w=>({ctx:void 0,error:w})),or?.setItem&&await or.setItem(y,b)),Zn(b),b.error)throw b.error;return b.ctx}return m()}})}}}async function Ib(e,n,r){const i=d4([...s4,...e]),s=async c=>{const u=i.shift();if(!u)return c;u.options.validator&&(n!=="client"||u.options.validateClient)&&(c.data=await h4(u.options.validator,c.data));const f=n==="client"?u.options.client:u.options.server;return f?f4(f,c,async h=>s(h).catch(p=>{if(vn(p)||wn(p))return{...h,error:p};throw p})):s(c)};return s({...r,headers:r.headers||{},sendContext:r.sendContext||{},context:r.context||{}})}let or;function l4(e){const n=or;return or=typeof e=="function"?e():e,()=>{or=n}}async function c4(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-1",n);return Array.from(new Uint8Array(r)).map(c=>c.toString(16).padStart(2,"0")).join("")}l4(()=>{const e=async(i,s)=>`/__tsr/staticServerFnCache/${await c4(`${i.functionId}__${s}`)}.json`,n=i=>JSON.stringify(i??"",(u,f)=>f&&typeof f=="object"&&!Array.isArray(f)?Object.keys(f).sort().reduce((h,p)=>(h[p]=f[p],h),{}):f).replace(/[/\\?%*:|"<>]/g,"-").replace(/\s+/g,"_"),r=typeof document<"u"?new Map:null;return{getItem:async i=>{if(typeof document>"u"){const s=n(i.data),c=await e(i,s),u="/home/debian/actions-runner/tanstack-start-template/_work/tanstack-start-template/tanstack-start-template/apps/tanstack-start-template/.output/public",{promises:f}=await un(async()=>{const{promises:b}=await import("node:fs");return{promises:b}},[]),p=(await un(()=>import("node:path"),[])).join(u,c),[y,m]=await f.readFile(p,"utf-8").then(b=>[cn.parse(b),null]).catch(b=>[null,b]);if(m&&m.code!=="ENOENT")throw m;return y}},setItem:async(i,s)=>{const{promises:c}=await un(async()=>{const{promises:m}=await import("node:fs");return{promises:m}},[]),u=await un(()=>import("node:path"),[]),f=n(i.data),h=await e(i,f),y=u.join("/home/debian/actions-runner/tanstack-start-template/_work/tanstack-start-template/tanstack-start-template/apps/tanstack-start-template/.output/public",h);await c.mkdir(u.dirname(y),{recursive:!0}),await c.writeFile(y,cn.stringify(s))},fetchItem:async i=>{const s=n(i.data),c=await e(i,s);let u=r?.get(c);return u||(u=await fetch(c,{method:"GET"}).then(f=>f.text()).then(f=>cn.parse(f)),r?.set(c,u)),u}}});function u4(e){const n=e.get("__TSR_CONTEXT");if(e.delete("__TSR_CONTEXT"),typeof n!="string")return{context:{},data:e};try{return{context:cn.parse(n),data:e}}catch{return{data:e}}}function d4(e){const n=new Set,r=[],i=s=>{s.forEach(c=>{c.options.middleware&&i(c.options.middleware),n.has(c)||(n.add(c),r.push(c))})};return i(e),r}const f4=async(e,n,r)=>e({...n,next:async(i={})=>r({...n,...i,context:{...n.context,...i.context},sendContext:{...n.sendContext,...i.sendContext??{}},headers:wR(n.headers,i.headers),result:i.result!==void 0?i.result:n.response==="raw"?i:n.result,error:i.error??n.error})});function h4(e,n){if(e==null)return{};if("~standard"in e){const r=e["~standard"].validate(n);if(r instanceof Promise)throw new Error("Async validation not supported");if(r.issues)throw new Error(JSON.stringify(r.issues,void 0,2));return r.value}if("parse"in e)return e.parse(n);if(typeof e=="function")return e(n);throw new Error("Invalid validator type!")}function p4(e){return{_types:void 0,options:{validator:e.validator,validateClient:e.validateClient,client:async({next:n,sendContext:r,...i})=>{var s;const c={...i,context:r,type:typeof i.type=="function"?i.type(i):i.type};if(i.type==="static"&&typeof document<"u"){Zn(or);const f=await or.fetchItem(c);if(f){if(f.error)throw f.error;return n(f.ctx)}`${c.functionId}${JSON.stringify(c.data)}`}const u=await((s=e.extractedFn)==null?void 0:s.call(e,c));return n(u)},server:async({next:n,...r})=>{var i;const s=await((i=e.serverFn)==null?void 0:i.call(e,r));return n({...r,result:s})}}}}function Ys(e,n){const r={type:"function",...n||e};return{options:r,middleware:i=>Ys({},Object.assign(r,{middleware:i})),validator:i=>Ys({},Object.assign(r,{validator:i})),client:i=>Ys({},Object.assign(r,{client:i})),server:i=>Ys({},Object.assign(r,{server:i}))}}function m4({promise:e}){const n=a4(e);if(n[_r].status==="pending")throw n;if(n[_r].status==="error")throw n[_r].error;return[n[_r].data,n]}function g4(e){const n=se.jsx(v4,{...e});return e.fallback?se.jsx(we.Suspense,{fallback:e.fallback,children:n}):n}function v4(e){const[n]=m4(e);return e.children(n)}function bm(e){const n=e.errorComponent??_l;return se.jsx(y4,{getResetKey:e.getResetKey,onCatch:e.onCatch,children:({error:r,reset:i})=>r?we.createElement(n,{error:r,reset:i}):e.children})}class y4 extends we.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(n){return{resetKey:n.getResetKey()}}static getDerivedStateFromError(n){return{error:n}}reset(){this.setState({error:null})}componentDidUpdate(n,r){r.error&&r.resetKey!==this.state.resetKey&&this.reset()}componentDidCatch(n,r){this.props.onCatch&&this.props.onCatch(n,r)}render(){return this.props.children({error:this.state.resetKey!==this.props.getResetKey()?null:this.state.error,reset:()=>{this.reset()}})}}function _l({error:e}){const[n,r]=we.useState(!1);return se.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[se.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[se.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),se.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>r(i=>!i),children:n?"Hide Error":"Show Error"})]}),se.jsx("div",{style:{height:".25rem"}}),n?se.jsx("div",{children:se.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:e.message?se.jsx("code",{children:e.message}):null})}):null]})}function b4({children:e,fallback:n=null}){return w4()?se.jsx(de.Fragment,{children:e}):se.jsx(de.Fragment,{children:n})}function w4(){return de.useSyncExternalStore(x4,()=>!0,()=>!1)}function x4(){return()=>{}}var $h={exports:{}},Ih={},Vh={exports:{}},qh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb;function _4(){if(Vb)return qh;Vb=1;var e=wl();function n(m,b){return m===b&&(m!==0||1/m===1/b)||m!==m&&b!==b}var r=typeof Object.is=="function"?Object.is:n,i=e.useState,s=e.useEffect,c=e.useLayoutEffect,u=e.useDebugValue;function f(m,b){var w=b(),S=i({inst:{value:w,getSnapshot:b}}),T=S[0].inst,R=S[1];return c(function(){T.value=w,T.getSnapshot=b,h(T)&&R({inst:T})},[m,w,b]),s(function(){return h(T)&&R({inst:T}),m(function(){h(T)&&R({inst:T})})},[m]),u(w),w}function h(m){var b=m.getSnapshot;m=m.value;try{var w=b();return!r(m,w)}catch{return!0}}function p(m,b){return b()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:f;return qh.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,qh}var qb;function S4(){return qb||(qb=1,Vh.exports=_4()),Vh.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yb;function k4(){if(Yb)return Ih;Yb=1;var e=wl(),n=S4();function r(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var i=typeof Object.is=="function"?Object.is:r,s=n.useSyncExternalStore,c=e.useRef,u=e.useEffect,f=e.useMemo,h=e.useDebugValue;return Ih.useSyncExternalStoreWithSelector=function(p,y,m,b,w){var S=c(null);if(S.current===null){var T={hasValue:!1,value:null};S.current=T}else T=S.current;S=f(function(){function E(B){if(!A){if(A=!0,L=B,B=b(B),w!==void 0&&T.hasValue){var ee=T.value;if(w(ee,B))return U=ee}return U=B}if(ee=U,i(L,B))return ee;var W=b(B);return w!==void 0&&w(ee,W)?(L=B,ee):(L=B,U=W)}var A=!1,L,U,F=m===void 0?null:m;return[function(){return E(y())},F===null?void 0:function(){return E(F())}]},[y,m,b,w]);var R=s(p,S[0],S[1]);return u(function(){T.hasValue=!0,T.value=R},[R]),h(R),R},Ih}var Xb;function T4(){return Xb||(Xb=1,$h.exports=k4()),$h.exports}var E4=T4();function C4(e,n=r=>r){return E4.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,n,R4)}function R4(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(const[i,s]of e)if(!n.has(i)||!Object.is(s,n.get(i)))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(const i of e)if(!n.has(i))return!1;return!0}const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!1;for(let i=0;i<r.length;i++)if(!Object.prototype.hasOwnProperty.call(n,r[i])||!Object.is(e[r[i]],n[r[i]]))return!1;return!0}const Yh=we.createContext(null);function i1(){return typeof document>"u"?Yh:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=Yh,Yh)}function xn(e){const n=we.useContext(i1());return e?.warn,n}function Nt(e){const n=xn({warn:e?.router===void 0}),r=e?.router||n,i=we.useRef(void 0);return C4(r.__store,s=>{if(e?.select){if(e.structuralSharing??r.options.defaultStructuralSharing){const c=Yn(i.current,e.select(s));return i.current=c,c}return e.select(s)}return s})}const Gu=we.createContext(void 0),N4=we.createContext(void 0);function Mn(e){const n=we.useContext(e.from?N4:Gu);return Nt({select:i=>{const s=i.matches.find(c=>e.from?e.from===c.routeId:c.id===n);if(Zn(!((e.shouldThrow??!0)&&!s),`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),s!==void 0)return e.select?e.select(s):s},structuralSharing:e.structuralSharing})}function wm(e){return Mn({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:n=>e.select?e.select(n.loaderData):n.loaderData})}function xm(e){const{select:n,...r}=e;return Mn({...r,select:i=>n?n(i.loaderDeps):i.loaderDeps})}function _m(e){return Mn({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:n=>e.select?e.select(n.params):n.params})}function Sm(e){return Mn({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:n=>e.select?e.select(n.search):n.search})}function km(e){const{navigate:n,state:r}=xn(),i=Mn({strict:!1,select:s=>s.index});return we.useCallback(s=>{const c=s.from??e?.from??r.matches[i].fullPath;return n({...s,from:c})},[e?.from,n])}var o1=Qx();const A4=Pp(o1),Xs=typeof window<"u"?we.useLayoutEffect:we.useEffect;function Xh(e){const n=we.useRef({value:e,prev:null}),r=n.current.value;return e!==r&&(n.current={value:e,prev:r}),n.current.prev}function O4(e,n,r={},i={}){const s=we.useRef(typeof IntersectionObserver=="function"),c=we.useRef(null);return we.useEffect(()=>{if(!(!e.current||!s.current||i.disabled))return c.current=new IntersectionObserver(([u])=>{n(u)},r),c.current.observe(e.current),()=>{var u;(u=c.current)==null||u.disconnect()}},[n,r,i.disabled,e]),c.current}function M4(e){const n=we.useRef(null);return we.useImperativeHandle(e,()=>n.current,[]),n}function z4(e,n){const r=xn(),[i,s]=we.useState(!1),c=we.useRef(!1),u=M4(n),{activeProps:f=()=>({className:"active"}),inactiveProps:h=()=>({}),activeOptions:p,to:y,preload:m,preloadDelay:b,hashScrollIntoView:w,replace:S,startTransition:T,resetScroll:R,viewTransition:E,children:A,target:L,disabled:U,style:F,className:B,onClick:ee,onFocus:W,onMouseEnter:Z,onMouseLeave:J,onTouchStart:re,ignoreBlocker:te,...le}=e,{params:fe,search:j,hash:x,state:N,mask:M,reloadDocument:V,unsafeRelative:C,...z}=le,$=we.useMemo(()=>{try{return new URL(`${y}`),"external"}catch{}return"internal"},[y]),q=Nt({select:ze=>ze.location.search,structuralSharing:!0}),I=Mn({strict:!1,select:ze=>ze.fullPath}),ie=e.from??I;e={...e,from:ie};const K=we.useMemo(()=>r.buildLocation(e),[r,e,q]),he=we.useMemo(()=>e.reloadDocument?!1:m??r.options.defaultPreload,[r.options.defaultPreload,m,e.reloadDocument]),ue=b??r.options.defaultPreloadDelay??0,be=Nt({select:ze=>{if(p?.exact){if(!OR(ze.location.pathname,K.pathname,r.basepath))return!1}else{const nt=Eu(ze.location.pathname,r.basepath).split("/");if(!Eu(K.pathname,r.basepath).split("/").every((Ln,Xt)=>Ln===nt[Xt]))return!1}return(p?.includeSearch??!0)&&!To(ze.location.search,K.search,{partial:!p?.exact,ignoreUndefined:!p?.explicitUndefined})?!1:p?.includeHash?ze.location.hash===K.hash:!0}}),me=we.useCallback(()=>{r.preloadRoute(e).catch(ze=>{console.warn(ze),console.warn(i4)})},[e,r]),Ue=we.useCallback(ze=>{ze?.isIntersecting&&me()},[me]);if(O4(u,Ue,{rootMargin:"100px"},{disabled:!!U||he!=="viewport"}),Xs(()=>{c.current||!U&&he==="render"&&(me(),c.current=!0)},[U,me,he]),$==="external")return{...z,ref:u,type:$,href:y,...A&&{children:A},...L&&{target:L},...U&&{disabled:U},...F&&{style:F},...B&&{className:B},...ee&&{onClick:ee},...W&&{onFocus:W},...Z&&{onMouseEnter:Z},...J&&{onMouseLeave:J},...re&&{onTouchStart:re}};const Ve=ze=>{if(!U&&!D4(ze)&&!ze.defaultPrevented&&(!L||L==="_self")&&ze.button===0){ze.preventDefault(),o1.flushSync(()=>{s(!0)});const nt=r.subscribe("onResolved",()=>{nt(),s(!1)});return r.navigate({...e,replace:S,resetScroll:R,hashScrollIntoView:w,startTransition:T,viewTransition:E,ignoreBlocker:te})}},dt=ze=>{U||he&&me()},gt=dt,_n=ze=>{if(U)return;const nt=ze.target||{};if(he){if(nt.preloadTimeout)return;ue?nt.preloadTimeout=setTimeout(()=>{nt.preloadTimeout=null,me()},ue):me()}},dn=ze=>{if(U)return;const nt=ze.target||{};nt.preloadTimeout&&(clearTimeout(nt.preloadTimeout),nt.preloadTimeout=null)},Ze=ze=>nt=>{var ja;(ja=nt.persist)==null||ja.call(nt),ze.filter(Boolean).forEach(_i=>{nt.defaultPrevented||_i(nt)})},fn=be?di(f,{})??{}:{},en=be?{}:di(h,{}),La=[B,fn.className,en.className].filter(Boolean).join(" "),Er={...F,...fn.style,...en.style};return{...z,...fn,...en,href:U?void 0:K.maskedLocation?r.history.createHref(K.maskedLocation.href):r.history.createHref(K.href),ref:u,onClick:Ze([ee,Ve]),onFocus:Ze([W,dt]),onMouseEnter:Ze([Z,_n]),onMouseLeave:Ze([J,dn]),onTouchStart:Ze([re,gt]),disabled:!!U,target:L,...Object.keys(Er).length&&{style:Er},...La&&{className:La},...U&&{role:"link","aria-disabled":!0},...be&&{"data-status":"active","aria-current":"page"},...i&&{"data-transitioning":"transitioning"}}}const ul=we.forwardRef((e,n)=>{const{_asChild:r,...i}=e,{type:s,ref:c,...u}=z4(i,n),f=typeof i.children=="function"?i.children({isActive:u["data-status"]==="active"}):i.children;return typeof r>"u"&&delete u.disabled,we.createElement(r||"a",{...u,ref:c},f)});function D4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}let L4=class extends a1{constructor(n){super(n),this.useMatch=r=>Mn({select:r?.select,from:this.id,structuralSharing:r?.structuralSharing}),this.useRouteContext=r=>Mn({...r,from:this.id,select:i=>r?.select?r.select(i.context):i.context}),this.useSearch=r=>Sm({select:r?.select,structuralSharing:r?.structuralSharing,from:this.id}),this.useParams=r=>_m({select:r?.select,structuralSharing:r?.structuralSharing,from:this.id}),this.useLoaderDeps=r=>xm({...r,from:this.id}),this.useLoaderData=r=>wm({...r,from:this.id}),this.useNavigate=()=>km({from:this.fullPath}),this.Link=de.forwardRef((r,i)=>se.jsx(ul,{ref:i,from:this.fullPath,...r})),this.$$typeof=Symbol.for("react.memo")}};function j4(e){return new L4(e)}function U4(){return e=>B4(e)}class H4 extends o4{constructor(n){super(n),this.useMatch=r=>Mn({select:r?.select,from:this.id,structuralSharing:r?.structuralSharing}),this.useRouteContext=r=>Mn({...r,from:this.id,select:i=>r?.select?r.select(i.context):i.context}),this.useSearch=r=>Sm({select:r?.select,structuralSharing:r?.structuralSharing,from:this.id}),this.useParams=r=>_m({select:r?.select,structuralSharing:r?.structuralSharing,from:this.id}),this.useLoaderDeps=r=>xm({...r,from:this.id}),this.useLoaderData=r=>wm({...r,from:this.id}),this.useNavigate=()=>km({from:this.fullPath}),this.Link=de.forwardRef((r,i)=>se.jsx(ul,{ref:i,from:this.fullPath,...r})),this.$$typeof=Symbol.for("react.memo")}}function B4(e){return new H4(e)}function an(e){return typeof e=="object"?new Gb(e,{silent:!0}).createRoute(e):new Gb(e,{silent:!0}).createRoute}class Gb{constructor(n,r){this.path=n,this.createRoute=i=>{this.silent;const s=j4(i);return s.isRoot=!1,s},this.silent=r?.silent}}class Zb{constructor(n){this.useMatch=r=>Mn({select:r?.select,from:this.options.id,structuralSharing:r?.structuralSharing}),this.useRouteContext=r=>Mn({from:this.options.id,select:i=>r?.select?r.select(i.context):i.context}),this.useSearch=r=>Sm({select:r?.select,structuralSharing:r?.structuralSharing,from:this.options.id}),this.useParams=r=>_m({select:r?.select,structuralSharing:r?.structuralSharing,from:this.options.id}),this.useLoaderDeps=r=>xm({...r,from:this.options.id}),this.useLoaderData=r=>wm({...r,from:this.options.id}),this.useNavigate=()=>{const r=xn();return km({from:r.routesById[this.options.id].fullPath})},this.options=n,this.$$typeof=Symbol.for("react.memo")}}function Qb(e){return typeof e=="object"?new Zb(e):n=>new Zb({id:e,...n})}function F4(e){const n=Nt({select:r=>`not-found-${r.location.pathname}-${r.status}`});return se.jsx(bm,{getResetKey:()=>n,onCatch:(r,i)=>{var s;if(wn(r))(s=e.onCatch)==null||s.call(e,r,i);else throw r},errorComponent:({error:r})=>{var i;if(wn(r))return(i=e.fallback)==null?void 0:i.call(e,r);throw r},children:e.children})}function P4(){return se.jsx("p",{children:"Not Found"})}function vo(e){return se.jsx(se.Fragment,{children:e.children})}function s1(e,n,r){return n.options.notFoundComponent?se.jsx(n.options.notFoundComponent,{data:r}):e.options.defaultNotFoundComponent?se.jsx(e.options.defaultNotFoundComponent,{data:r}):se.jsx(P4,{})}var Gh,Wb;function $4(){if(Wb)return Gh;Wb=1;const e={},n=e.hasOwnProperty,r=(W,Z)=>{for(const J in W)n.call(W,J)&&Z(J,W[J])},i=(W,Z)=>(Z&&r(Z,(J,re)=>{W[J]=re}),W),s=(W,Z)=>{const J=W.length;let re=-1;for(;++re<J;)Z(W[re])},c=W=>"\\u"+("0000"+W).slice(-4),u=(W,Z)=>{let J=W.toString(16);return Z?J:J.toUpperCase()},f=e.toString,h=Array.isArray,p=W=>typeof Buffer=="function"&&Buffer.isBuffer(W),y=W=>f.call(W)=="[object Object]",m=W=>typeof W=="string"||f.call(W)=="[object String]",b=W=>typeof W=="number"||f.call(W)=="[object Number]",w=W=>typeof W=="bigint",S=W=>typeof W=="function",T=W=>f.call(W)=="[object Map]",R=W=>f.call(W)=="[object Set]",E={"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},A=/[\\\b\f\n\r\t]/,L=/[0-9]/,U=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,F=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,B=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,ee=(W,Z)=>{const J=()=>{N=x,++Z.indentLevel,x=Z.indent.repeat(Z.indentLevel)},re={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"	",indentLevel:0,__inline1__:!1,__inline2__:!1},te=Z&&Z.json;te&&(re.quotes="double",re.wrap=!0),Z=i(re,Z),Z.quotes!="single"&&Z.quotes!="double"&&Z.quotes!="backtick"&&(Z.quotes="single");const le=Z.quotes=="double"?'"':Z.quotes=="backtick"?"`":"'",fe=Z.compact,j=Z.lowercaseHex;let x=Z.indent.repeat(Z.indentLevel),N="";const M=Z.__inline1__,V=Z.__inline2__,C=fe?"":`
`;let z,$=!0;const q=Z.numbers=="binary",I=Z.numbers=="octal",ie=Z.numbers=="decimal",K=Z.numbers=="hexadecimal";if(te&&W&&S(W.toJSON)&&(W=W.toJSON()),!m(W)){if(T(W))return W.size==0?"new Map()":(fe||(Z.__inline1__=!0,Z.__inline2__=!1),"new Map("+ee(Array.from(W),Z)+")");if(R(W))return W.size==0?"new Set()":"new Set("+ee(Array.from(W),Z)+")";if(p(W))return W.length==0?"Buffer.from([])":"Buffer.from("+ee(Array.from(W),Z)+")";if(h(W))return z=[],Z.wrap=!0,M&&(Z.__inline1__=!1,Z.__inline2__=!0),V||J(),s(W,ue=>{$=!1,V&&(Z.__inline2__=!1),z.push((fe||V?"":x)+ee(ue,Z))}),$?"[]":V?"["+z.join(", ")+"]":"["+C+z.join(","+C)+C+(fe?"":N)+"]";if(b(W)||w(W)){if(te)return JSON.stringify(Number(W));let ue;if(ie)ue=String(W);else if(K){let be=W.toString(16);j||(be=be.toUpperCase()),ue="0x"+be}else q?ue="0b"+W.toString(2):I&&(ue="0o"+W.toString(8));return w(W)?ue+"n":ue}else return w(W)?te?JSON.stringify(Number(W)):W+"n":y(W)?(z=[],Z.wrap=!0,J(),r(W,(ue,be)=>{$=!1,z.push((fe?"":x)+ee(ue,Z)+":"+(fe?"":" ")+ee(be,Z))}),$?"{}":"{"+C+z.join(","+C)+C+(fe?"":N)+"}"):te?JSON.stringify(W)||"null":String(W)}const he=Z.escapeEverything?F:B;return z=W.replace(he,(ue,be,me,Ue,Ve,dt)=>{if(be){if(Z.minimal)return be;const _n=be.charCodeAt(0),dn=be.charCodeAt(1);if(Z.es6){const Ze=(_n-55296)*1024+dn-56320+65536;return"\\u{"+u(Ze,j)+"}"}return c(u(_n,j))+c(u(dn,j))}if(me)return c(u(me.charCodeAt(0),j));if(ue=="\0"&&!te&&!L.test(dt.charAt(Ve+1)))return"\\0";if(Ue)return Ue==le||Z.escapeEverything?"\\"+Ue:Ue;if(A.test(ue))return E[ue];if(Z.minimal&&!U.test(ue))return ue;const gt=u(ue.charCodeAt(0),j);return te||gt.length>2?c(gt):"\\x"+("00"+gt).slice(-2)}),le=="`"&&(z=z.replace(/\$\{/g,"\\${")),Z.isScriptContext&&(z=z.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,te?"\\u003C!--":"\\x3C!--")),Z.wrap&&(z=le+z+le),z};return ee.version="3.0.2",Gh=ee,Gh}$4();function I4({children:e,log:n}){return typeof document<"u"?null:se.jsx("script",{className:"tsr-once",dangerouslySetInnerHTML:{__html:[e,"",'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()'].filter(Boolean).join(`
`)}})}function V4(){const e=xn(),r=(e.options.getScrollRestorationKey||Ap)(e.latestLocation),i=r!==Ap(e.latestLocation)?r:null;return!e.isScrollRestoring||!e.isServer?null:se.jsx(I4,{children:`(${t1.toString()})(${JSON.stringify(Ru)},${JSON.stringify(i)}, undefined, true)`,log:!1})}const l1=we.memo(function({matchId:n}){var r,i;const s=xn(),c=Nt({select:A=>{var L;return(L=A.matches.find(U=>U.id===n))==null?void 0:L.routeId}});Zn(c);const u=s.routesById[c],f=u.options.pendingComponent??s.options.defaultPendingComponent,h=f?se.jsx(f,{}):null,p=u.options.errorComponent??s.options.defaultErrorComponent,y=u.options.onCatch??s.options.defaultOnCatch,m=u.isRoot?u.options.notFoundComponent??((r=s.options.notFoundRoute)==null?void 0:r.options.component):u.options.notFoundComponent,b=(!u.isRoot||u.options.wrapInSuspense)&&(u.options.wrapInSuspense??f??((i=u.options.errorComponent)==null?void 0:i.preload))?we.Suspense:vo,w=p?bm:vo,S=m?F4:vo,T=Nt({select:A=>A.loadedAt}),R=Nt({select:A=>{var L;const U=A.matches.findIndex(F=>F.id===n);return(L=A.matches[U-1])==null?void 0:L.routeId}}),E=u.isRoot?u.options.shellComponent??vo:vo;return se.jsxs(E,{children:[se.jsx(Gu.Provider,{value:n,children:se.jsx(b,{fallback:h,children:se.jsx(w,{getResetKey:()=>T,errorComponent:p||_l,onCatch:(A,L)=>{if(wn(A))throw A;y?.(A,L)},children:se.jsx(S,{fallback:A=>{if(!m||A.routeId&&A.routeId!==c||!A.routeId&&!u.isRoot)throw A;return we.createElement(m,A)},children:se.jsx(Y4,{matchId:n})})})})}),R===Xn&&s.options.scrollRestoration?se.jsxs(se.Fragment,{children:[se.jsx(q4,{}),se.jsx(V4,{})]}):null]})});function q4(){const e=xn(),n=we.useRef(void 0);return se.jsx("script",{suppressHydrationWarning:!0,ref:r=>{r&&(n.current===void 0||n.current.href!==e.latestLocation.href)&&(e.emit({type:"onRendered",...fi(e.state)}),n.current=e.latestLocation)}},e.latestLocation.state.__TSR_key)}const Y4=we.memo(function({matchId:n}){var r,i,s;const c=xn(),{match:u,key:f,routeId:h}=Nt({select:b=>{const w=b.matches.findIndex(L=>L.id===n),S=b.matches[w],T=S.routeId,R=c.routesById[T].options.remountDeps??c.options.defaultRemountDeps,E=R?.({routeId:T,loaderDeps:S.loaderDeps,params:S._strictParams,search:S._strictSearch});return{key:E?JSON.stringify(E):void 0,routeId:T,match:Tp(S,["id","status","error"])}},structuralSharing:!0}),p=c.routesById[h],y=we.useMemo(()=>{const b=p.options.component??c.options.defaultComponent;return b?se.jsx(b,{},f):se.jsx(Tm,{})},[f,p.options.component,c.options.defaultComponent]),m=(p.options.errorComponent??c.options.defaultErrorComponent)||_l;if(u.status==="notFound")return Zn(wn(u.error)),s1(c,p,u.error);if(u.status==="redirected")throw Zn(vn(u.error)),(r=c.getMatch(u.id))==null?void 0:r.loadPromise;if(u.status==="error"){if(c.isServer)return se.jsx(m,{error:u.error,reset:void 0,info:{componentStack:""}});throw u.error}if(u.status==="pending"){const b=p.options.pendingMinMs??c.options.defaultPendingMinMs;if(b&&!((i=c.getMatch(u.id))!=null&&i.minPendingPromise)&&!c.isServer){const w=go();Promise.resolve().then(()=>{c.updateMatch(u.id,S=>({...S,minPendingPromise:w}))}),setTimeout(()=>{w.resolve(),c.updateMatch(u.id,S=>({...S,minPendingPromise:void 0}))},b)}throw(s=c.getMatch(u.id))==null?void 0:s.loadPromise}return y}),Tm=we.memo(function(){const n=xn(),r=we.useContext(Gu),i=Nt({select:p=>{var y;return(y=p.matches.find(m=>m.id===r))==null?void 0:y.routeId}}),s=n.routesById[i],c=Nt({select:p=>{const m=p.matches.find(b=>b.id===r);return Zn(m),m.globalNotFound}}),u=Nt({select:p=>{var y;const m=p.matches,b=m.findIndex(w=>w.id===r);return(y=m[b+1])==null?void 0:y.id}}),f=n.options.defaultPendingComponent?se.jsx(n.options.defaultPendingComponent,{}):null;if(n.isShell)return se.jsx(we.Suspense,{fallback:f,children:se.jsx(X4,{})});if(c)return s1(n,s,void 0);if(!u)return null;const h=se.jsx(l1,{matchId:u});return r===Xn?se.jsx(we.Suspense,{fallback:f,children:h}):h});function X4(){throw new Error("ShellBoundaryError")}function G4(e){return typeof e?.message!="string"?!1:e.message.startsWith("Failed to fetch dynamically imported module")||e.message.startsWith("error loading dynamically imported module")||e.message.startsWith("Importing a module script failed")}function ur(e,n,r){let i,s,c,u;const f=()=>typeof document>"u"&&r?.()===!1?(s=()=>null,Promise.resolve()):(i||(i=e().then(p=>{i=void 0,s=p[n]}).catch(p=>{if(c=p,G4(c)&&c instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){const y=`tanstack_router_reload:${c.message}`;sessionStorage.getItem(y)||(sessionStorage.setItem(y,"1"),u=!0)}})),i),h=function(y){if(u)throw window.location.reload(),new Promise(()=>{});if(c)throw c;if(!s)throw f();return r?.()===!1?se.jsx(b4,{fallback:se.jsx(Tm,{}),children:we.createElement(s,y)}):we.createElement(s,y)};return h.preload=f,h}function Z4(){const e=xn(),n=we.useRef({router:e,mounted:!1}),r=Nt({select:({isLoading:m})=>m}),[i,s]=we.useState(!1),c=Nt({select:m=>m.matches.some(b=>b.status==="pending"),structuralSharing:!0}),u=Xh(r),f=r||i||c,h=Xh(f),p=r||c,y=Xh(p);return e.isServer||(e.startTransition=m=>{s(!0),we.startTransition(()=>{m(),s(!1)})}),we.useEffect(()=>{const m=e.history.subscribe(e.load),b=e.buildLocation({to:e.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return Ao(e.latestLocation.href)!==Ao(b.href)&&e.commitLocation({...b,replace:!0}),()=>{m()}},[e,e.history]),Xs(()=>{if(typeof window<"u"&&e.clientSsr||n.current.router===e&&n.current.mounted)return;n.current={router:e,mounted:!0},(async()=>{try{await e.load()}catch(b){console.error(b)}})()},[e]),Xs(()=>{u&&!r&&e.emit({type:"onLoad",...fi(e.state)})},[u,e,r]),Xs(()=>{y&&!p&&e.emit({type:"onBeforeRouteMount",...fi(e.state)})},[p,y,e]),Xs(()=>{h&&!f&&(e.emit({type:"onResolved",...fi(e.state)}),e.__store.setState(m=>({...m,status:"idle",resolvedLocation:m.location})),VR(e))},[f,h,e]),null}function Q4(){const e=xn(),n=e.options.defaultPendingComponent?se.jsx(e.options.defaultPendingComponent,{}):null,r=e.isServer||typeof document<"u"&&e.clientSsr?vo:we.Suspense,i=se.jsxs(r,{fallback:n,children:[se.jsx(Z4,{}),se.jsx(W4,{})]});return e.options.InnerWrap?se.jsx(e.options.InnerWrap,{children:i}):i}function W4(){const e=Nt({select:r=>{var i;return(i=r.matches[0])==null?void 0:i.id}}),n=Nt({select:r=>r.loadedAt});return se.jsx(Gu.Provider,{value:e,children:se.jsx(bm,{getResetKey:()=>n,errorComponent:_l,onCatch:r=>{r.message||r.toString()},children:e?se.jsx(l1,{matchId:e}):null})})}const K4=e=>new J4(e);class J4 extends KR{constructor(n){super(n)}}typeof globalThis<"u"?(globalThis.createFileRoute=an,globalThis.createLazyFileRoute=Qb):typeof window<"u"&&(window.createFileRoute=an,window.createFileRoute=Qb);function eN({router:e,children:n,...r}){Object.keys(r).length>0&&e.update({...e.options,...r,context:{...e.options.context,...r.context}});const i=i1(),s=se.jsx(i.Provider,{value:e,children:n});return e.options.Wrap?se.jsx(e.options.Wrap,{children:s}):s}function tN({router:e,...n}){return se.jsx(eN,{router:e,...n,children:se.jsx(Q4,{})})}function c1({tag:e,attrs:n,children:r}){switch(e){case"title":return se.jsx("title",{...n,suppressHydrationWarning:!0,children:r});case"meta":return se.jsx("meta",{...n,suppressHydrationWarning:!0});case"link":return se.jsx("link",{...n,suppressHydrationWarning:!0});case"style":return se.jsx("style",{...n,dangerouslySetInnerHTML:{__html:r}});case"script":return se.jsx(nN,{attrs:n,children:r});default:return null}}function nN({attrs:e,children:n}){return we.useEffect(()=>{if(e?.src){const r=document.createElement("script");for(const[i,s]of Object.entries(e))i!=="suppressHydrationWarning"&&s!==void 0&&s!==!1&&r.setAttribute(i,typeof s=="boolean"?"":String(s));return document.head.appendChild(r),()=>{r.parentNode&&r.parentNode.removeChild(r)}}if(typeof n=="string"){const r=document.createElement("script");if(r.textContent=n,e)for(const[i,s]of Object.entries(e))i!=="suppressHydrationWarning"&&s!==void 0&&s!==!1&&r.setAttribute(i,typeof s=="boolean"?"":String(s));return document.head.appendChild(r),()=>{r.parentNode&&r.parentNode.removeChild(r)}}},[e,n]),e?.src&&typeof e.src=="string"?se.jsx("script",{...e,suppressHydrationWarning:!0}):typeof n=="string"?se.jsx("script",{...e,dangerouslySetInnerHTML:{__html:n},suppressHydrationWarning:!0}):null}const rN=()=>{const e=xn(),n=Nt({select:u=>u.matches.map(f=>f.meta).filter(Boolean)}),r=we.useMemo(()=>{const u=[],f={};let h;return[...n].reverse().forEach(p=>{[...p].reverse().forEach(y=>{if(y)if(y.title)h||(h={tag:"title",children:y.title});else{const m=y.name??y.property;if(m){if(f[m])return;f[m]=!0}u.push({tag:"meta",attrs:{...y}})}})}),h&&u.push(h),u.reverse(),u},[n]),i=Nt({select:u=>{var f;const h=u.matches.map(m=>m.links).filter(Boolean).flat(1).map(m=>({tag:"link",attrs:{...m}})),p=(f=e.ssr)==null?void 0:f.manifest,y=u.matches.map(m=>{var b;return((b=p?.routes[m.routeId])==null?void 0:b.assets)??[]}).filter(Boolean).flat(1).filter(m=>m.tag==="link").map(m=>({tag:"link",attrs:{...m.attrs,suppressHydrationWarning:!0}}));return[...h,...y]},structuralSharing:!0}),s=Nt({select:u=>{const f=[];return u.matches.map(h=>e.looseRoutesById[h.routeId]).forEach(h=>{var p,y,m,b;return(b=(m=(y=(p=e.ssr)==null?void 0:p.manifest)==null?void 0:y.routes[h.id])==null?void 0:m.preloads)==null?void 0:b.filter(Boolean).forEach(w=>{f.push({tag:"link",attrs:{rel:"modulepreload",href:w}})})}),f},structuralSharing:!0}),c=Nt({select:u=>u.matches.map(f=>f.headScripts).flat(1).filter(Boolean).map(({children:f,...h})=>({tag:"script",attrs:{...h},children:f})),structuralSharing:!0});return iN([...r,...s,...i,...c],u=>JSON.stringify(u))};function aN(){return rN().map(n=>we.createElement(c1,{...n,key:`tsr-meta-${JSON.stringify(n)}`}))}function iN(e,n){const r=new Set;return e.filter(i=>{const s=n(i);return r.has(s)?!1:(r.add(s),!0)})}const oN=()=>{const e=xn(),n=Nt({select:s=>{var c;const u=[],f=(c=e.ssr)==null?void 0:c.manifest;return f?(s.matches.map(h=>e.looseRoutesById[h.routeId]).forEach(h=>{var p,y;return(y=(p=f.routes[h.id])==null?void 0:p.assets)==null?void 0:y.filter(m=>m.tag==="script").forEach(m=>{u.push({tag:"script",attrs:m.attrs,children:m.children})})}),u):[]},structuralSharing:!0}),{scripts:r}=Nt({select:s=>({scripts:s.matches.map(c=>c.scripts).flat(1).filter(Boolean).map(({children:c,...u})=>({tag:"script",attrs:{...u,suppressHydrationWarning:!0},children:c}))}),structuralSharing:!0}),i=[...r,...n];return se.jsx(se.Fragment,{children:i.map((s,c)=>we.createElement(c1,{...s,key:`tsr-scripts-${s.tag}-${c}`}))})};let Zc;function sN(e){return Zc||(e.router.state.matches.length?Zc=Promise.resolve():Zc=SR(e.router)),se.jsx(g4,{promise:Zc,children:()=>se.jsx(tN,{router:e.router})})}var Zu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Qu=typeof window>"u"||"Deno"in globalThis;function On(){}function lN(e,n){return typeof e=="function"?e(n):e}function cN(e){return typeof e=="number"&&e>=0&&e!==1/0}function uN(e,n){return Math.max(e+(n||0)-Date.now(),0)}function Mp(e,n){return typeof e=="function"?e(n):e}function dN(e,n){return typeof e=="function"?e(n):e}function Kb(e,n){const{type:r="all",exact:i,fetchStatus:s,predicate:c,queryKey:u,stale:f}=e;if(u){if(i){if(n.queryHash!==Em(u,n.options))return!1}else if(!dl(n.queryKey,u))return!1}if(r!=="all"){const h=n.isActive();if(r==="active"&&!h||r==="inactive"&&h)return!1}return!(typeof f=="boolean"&&n.isStale()!==f||s&&s!==n.state.fetchStatus||c&&!c(n))}function Jb(e,n){const{exact:r,status:i,predicate:s,mutationKey:c}=e;if(c){if(!n.options.mutationKey)return!1;if(r){if(vi(n.options.mutationKey)!==vi(c))return!1}else if(!dl(n.options.mutationKey,c))return!1}return!(i&&n.state.status!==i||s&&!s(n))}function Em(e,n){return(n?.queryKeyHashFn||vi)(e)}function vi(e){return JSON.stringify(e,(n,r)=>zp(r)?Object.keys(r).sort().reduce((i,s)=>(i[s]=r[s],i),{}):r)}function dl(e,n){return e===n?!0:typeof e!=typeof n?!1:e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(n).every(r=>dl(e[r],n[r])):!1}function u1(e,n){if(e===n)return e;const r=ew(e)&&ew(n);if(r||zp(e)&&zp(n)){const i=r?e:Object.keys(e),s=i.length,c=r?n:Object.keys(n),u=c.length,f=r?[]:{},h=new Set(i);let p=0;for(let y=0;y<u;y++){const m=r?y:c[y];(!r&&h.has(m)||r)&&e[m]===void 0&&n[m]===void 0?(f[m]=void 0,p++):(f[m]=u1(e[m],n[m]),f[m]===e[m]&&e[m]!==void 0&&p++)}return s===u&&p===s?e:f}return n}function nO(e,n){if(!n||Object.keys(e).length!==Object.keys(n).length)return!1;for(const r in e)if(e[r]!==n[r])return!1;return!0}function ew(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function zp(e){if(!tw(e))return!1;const n=e.constructor;if(n===void 0)return!0;const r=n.prototype;return!(!tw(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function tw(e){return Object.prototype.toString.call(e)==="[object Object]"}function fN(e){return new Promise(n=>{setTimeout(n,e)})}function hN(e,n,r){return typeof r.structuralSharing=="function"?r.structuralSharing(e,n):r.structuralSharing!==!1?u1(e,n):n}function pN(e,n,r=0){const i=[...e,n];return r&&i.length>r?i.slice(1):i}function mN(e,n,r=0){const i=[n,...e];return r&&i.length>r?i.slice(0,-1):i}var Cm=Symbol();function d1(e,n){return!e.queryFn&&n?.initialPromise?()=>n.initialPromise:!e.queryFn||e.queryFn===Cm?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function rO(e,n){return typeof e=="function"?e(...n):!!e}var gN=class extends Zu{#e;#t;#n;constructor(){super(),this.#n=e=>{if(!Qu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},f1=new gN,vN=class extends Zu{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(!Qu&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(r=>{r(e)}))}isOnline(){return this.#e}},Ou=new vN;function yN(){let e,n;const r=new Promise((s,c)=>{e=s,n=c});r.status="pending",r.catch(()=>{});function i(s){Object.assign(r,s),delete r.resolve,delete r.reject}return r.resolve=s=>{i({status:"fulfilled",value:s}),e(s)},r.reject=s=>{i({status:"rejected",reason:s}),n(s)},r}function bN(e){let n;if(e.then(r=>(n=r,r),On)?.catch(On),n!==void 0)return{data:n}}function wN(e){return Math.min(1e3*2**e,3e4)}function h1(e){return(e??"online")==="online"?Ou.isOnline():!0}var p1=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Zh(e){return e instanceof p1}function m1(e){let n=!1,r=0,i=!1,s;const c=yN(),u=T=>{i||(b(new p1(T)),e.abort?.())},f=()=>{n=!0},h=()=>{n=!1},p=()=>f1.isFocused()&&(e.networkMode==="always"||Ou.isOnline())&&e.canRun(),y=()=>h1(e.networkMode)&&e.canRun(),m=T=>{i||(i=!0,e.onSuccess?.(T),s?.(),c.resolve(T))},b=T=>{i||(i=!0,e.onError?.(T),s?.(),c.reject(T))},w=()=>new Promise(T=>{s=R=>{(i||p())&&T(R)},e.onPause?.()}).then(()=>{s=void 0,i||e.onContinue?.()}),S=()=>{if(i)return;let T;const R=r===0?e.initialPromise:void 0;try{T=R??e.fn()}catch(E){T=Promise.reject(E)}Promise.resolve(T).then(m).catch(E=>{if(i)return;const A=e.retry??(Qu?0:3),L=e.retryDelay??wN,U=typeof L=="function"?L(r,E):L,F=A===!0||typeof A=="number"&&r<A||typeof A=="function"&&A(r,E);if(n||!F){b(E);return}r++,e.onFail?.(r,E),fN(U).then(()=>p()?void 0:w()).then(()=>{n?b(E):S()})})};return{promise:c,cancel:u,continue:()=>(s?.(),c),cancelRetry:f,continueRetry:h,canStart:y,start:()=>(y()?S():w().then(S),c)}}var xN=e=>setTimeout(e,0);function _N(){let e=[],n=0,r=f=>{f()},i=f=>{f()},s=xN;const c=f=>{n?e.push(f):s(()=>{r(f)})},u=()=>{const f=e;e=[],f.length&&s(()=>{i(()=>{f.forEach(h=>{r(h)})})})};return{batch:f=>{let h;n++;try{h=f()}finally{n--,n||u()}return h},batchCalls:f=>(...h)=>{c(()=>{f(...h)})},schedule:c,setNotifyFunction:f=>{r=f},setBatchNotifyFunction:f=>{i=f},setScheduler:f=>{s=f}}}var ln=_N(),g1=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),cN(this.gcTime)&&(this.#e=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Qu?1/0:5*60*1e3))}clearGcTimeout(){this.#e&&(clearTimeout(this.#e),this.#e=void 0)}},SN=class extends g1{#e;#t;#n;#a;#r;#o;#s;constructor(e){super(),this.#s=!1,this.#o=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#a=e.client,this.#n=this.#a.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=TN(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(e){this.options={...this.#o,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(e,n){const r=hN(this.state.data,e,this.options);return this.#i({data:r,type:"success",dataUpdatedAt:n?.updatedAt,manual:n?.manual}),r}setState(e,n){this.#i({type:"setState",state:e,setStateOptions:n})}cancel(e){const n=this.#r?.promise;return this.#r?.cancel(e),n?n.then(On).catch(On):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>dN(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Cm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Mp(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!uN(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(n=>n.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.observers.find(n=>n.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.#r&&(this.#s?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#i({type:"invalidate"})}fetch(e,n){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&n?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(this.#s=!0,r.signal)})},s=()=>{const h=d1(this.options,n),y=(()=>{const m={client:this.#a,queryKey:this.queryKey,meta:this.meta};return i(m),m})();return this.#s=!1,this.options.persister?this.options.persister(h,y,this):h(y)},u=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:s};return i(h),h})();this.options.behavior?.onFetch(u,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==u.fetchOptions?.meta)&&this.#i({type:"fetch",meta:u.fetchOptions?.meta});const f=h=>{Zh(h)&&h.silent||this.#i({type:"error",error:h}),Zh(h)||(this.#n.config.onError?.(h,this),this.#n.config.onSettled?.(this.state.data,h,this)),this.scheduleGc()};return this.#r=m1({initialPromise:n?.initialPromise,fn:u.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{if(h===void 0){f(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(p){f(p);return}this.#n.config.onSuccess?.(h,this),this.#n.config.onSettled?.(h,this.state.error,this),this.scheduleGc()},onError:f,onFail:(h,p)=>{this.#i({type:"failed",failureCount:h,error:p})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode,canRun:()=>!0}),this.#r.start()}#i(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...kN(r.data,this.options),fetchMeta:e.meta??null};case"success":return this.#t=void 0,{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=e.error;return Zh(i)&&i.revert&&this.#t?{...this.#t,fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),ln.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:e})})}};function kN(e,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:h1(n.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function TN(e){const n=typeof e.initialData=="function"?e.initialData():e.initialData,r=n!==void 0,i=r?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:r?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var EN=class extends Zu{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,n,r){const i=n.queryKey,s=n.queryHash??Em(i,n);let c=this.get(s);return c||(c=new SN({client:e,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(c)),c}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=this.#e.get(e.queryHash);n&&(e.destroy(),n===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){ln.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Kb(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Kb(e,r)):n}notify(e){ln.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){ln.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){ln.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},CN=class extends g1{#e;#t;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.mutationCache,this.#e=[],this.state=e.state||RN(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(n=>n!==e),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){const n=()=>{this.#a({type:"continue"})};this.#n=m1({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(s,c)=>{this.#a({type:"failed",failureCount:s,error:c})},onPause:()=>{this.#a({type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const r=this.state.status==="pending",i=!this.#n.canStart();try{if(r)n();else{this.#a({type:"pending",variables:e,isPaused:i}),await this.#t.config.onMutate?.(e,this);const c=await this.options.onMutate?.(e);c!==this.state.context&&this.#a({type:"pending",context:c,variables:e,isPaused:i})}const s=await this.#n.start();return await this.#t.config.onSuccess?.(s,e,this.state.context,this),await this.options.onSuccess?.(s,e,this.state.context),await this.#t.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,e,this.state.context),this.#a({type:"success",data:s}),s}catch(s){try{throw await this.#t.config.onError?.(s,e,this.state.context,this),await this.options.onError?.(s,e,this.state.context),await this.#t.config.onSettled?.(void 0,s,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,s,e,this.state.context),s}finally{this.#a({type:"error",error:s})}}finally{this.#t.runNext(this)}}#a(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ln.batch(()=>{this.#e.forEach(r=>{r.onMutationUpdate(e)}),this.#t.notify({mutation:this,type:"updated",action:e})})}};function RN(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var NN=class extends Zu{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,n,r){const i=new CN({mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){this.#e.add(e);const n=Qc(e);if(typeof n=="string"){const r=this.#t.get(n);r?r.push(e):this.#t.set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const n=Qc(e);if(typeof n=="string"){const r=this.#t.get(n);if(r)if(r.length>1){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}else r[0]===e&&this.#t.delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=Qc(e);if(typeof n=="string"){const i=this.#t.get(n)?.find(s=>s.state.status==="pending");return!i||i===e}else return!0}runNext(e){const n=Qc(e);return typeof n=="string"?this.#t.get(n)?.find(i=>i!==e&&i.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){ln.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Jb(n,r))}findAll(e={}){return this.getAll().filter(n=>Jb(e,n))}notify(e){ln.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return ln.batch(()=>Promise.all(e.map(n=>n.continue().catch(On))))}};function Qc(e){return e.options.scope?.id}function nw(e){return{onFetch:(n,r)=>{const i=n.options,s=n.fetchOptions?.meta?.fetchMore?.direction,c=n.state.data?.pages||[],u=n.state.data?.pageParams||[];let f={pages:[],pageParams:[]},h=0;const p=async()=>{let y=!1;const m=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(n.signal.aborted?y=!0:n.signal.addEventListener("abort",()=>{y=!0}),n.signal)})},b=d1(n.options,n.fetchOptions),w=async(S,T,R)=>{if(y)return Promise.reject();if(T==null&&S.pages.length)return Promise.resolve(S);const A=(()=>{const B={client:n.client,queryKey:n.queryKey,pageParam:T,direction:R?"backward":"forward",meta:n.options.meta};return m(B),B})(),L=await b(A),{maxPages:U}=n.options,F=R?mN:pN;return{pages:F(S.pages,L,U),pageParams:F(S.pageParams,T,U)}};if(s&&c.length){const S=s==="backward",T=S?AN:rw,R={pages:c,pageParams:u},E=T(i,R);f=await w(R,E,S)}else{const S=e??c.length;do{const T=h===0?u[0]??i.initialPageParam:rw(i,f);if(h>0&&T==null)break;f=await w(f,T),h++}while(h<S)}return f};n.options.persister?n.fetchFn=()=>n.options.persister?.(p,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},r):n.fetchFn=p}}}function rw(e,{pages:n,pageParams:r}){const i=n.length-1;return n.length>0?e.getNextPageParam(n[i],n,r[i],r):void 0}function AN(e,{pages:n,pageParams:r}){return n.length>0?e.getPreviousPageParam?.(n[0],n,r[0],r):void 0}var ON=class{#e;#t;#n;#a;#r;#o;#s;#i;constructor(e={}){this.#e=e.queryCache||new EN,this.#t=e.mutationCache||new NN,this.#n=e.defaultOptions||{},this.#a=new Map,this.#r=new Map,this.#o=0}mount(){this.#o++,this.#o===1&&(this.#s=f1.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#i=Ou.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#o--,this.#o===0&&(this.#s?.(),this.#s=void 0,this.#i?.(),this.#i=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const n=this.defaultQueryOptions({queryKey:e});return this.#e.get(n.queryHash)?.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),r=this.#e.build(this,n),i=r.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime(Mp(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(i))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.defaultQueryOptions({queryKey:e}),c=this.#e.get(i.queryHash)?.state.data,u=lN(n,c);if(u!==void 0)return this.#e.build(this,i).setData(u,{...r,manual:!0})}setQueriesData(e,n,r){return ln.batch(()=>this.#e.findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e){const n=this.defaultQueryOptions({queryKey:e});return this.#e.get(n.queryHash)?.state}removeQueries(e){const n=this.#e;ln.batch(()=>{n.findAll(e).forEach(r=>{n.remove(r)})})}resetQueries(e,n){const r=this.#e;return ln.batch(()=>(r.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const r={revert:!0,...n},i=ln.batch(()=>this.#e.findAll(e).map(s=>s.cancel(r)));return Promise.all(i).then(On).catch(On)}invalidateQueries(e,n={}){return ln.batch(()=>(this.#e.findAll(e).forEach(r=>{r.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},n)))}refetchQueries(e,n={}){const r={...n,cancelRefetch:n.cancelRefetch??!0},i=ln.batch(()=>this.#e.findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let c=s.fetch(void 0,r);return r.throwOnError||(c=c.catch(On)),s.state.fetchStatus==="paused"?Promise.resolve():c}));return Promise.all(i).then(On)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const r=this.#e.build(this,n);return r.isStaleByTime(Mp(n.staleTime,r))?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(On).catch(On)}fetchInfiniteQuery(e){return e.behavior=nw(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(On).catch(On)}ensureInfiniteQueryData(e){return e.behavior=nw(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ou.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,n){this.#a.set(vi(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...this.#a.values()],r={};return n.forEach(i=>{dl(e,i.queryKey)&&Object.assign(r,i.defaultOptions)}),r}setMutationDefaults(e,n){this.#r.set(vi(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...this.#r.values()],r={};return n.forEach(i=>{dl(e,i.mutationKey)&&Object.assign(r,i.defaultOptions)}),r}defaultQueryOptions(e){if(e._defaulted)return e;const n={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Em(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Cm&&(n.enabled=!1),n}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};function v1(e){return e}function MN(e){return{mutationKey:e.options.mutationKey,state:e.state,...e.options.scope&&{scope:e.options.scope},...e.meta&&{meta:e.meta}}}function zN(e,n,r){return{dehydratedAt:Date.now(),state:{...e.state,...e.state.data!==void 0&&{data:n(e.state.data)}},queryKey:e.queryKey,queryHash:e.queryHash,...e.state.status==="pending"&&{promise:e.promise?.then(n).catch(i=>r(i)?Promise.reject(new Error("redacted")):Promise.reject(i))},...e.meta&&{meta:e.meta}}}function DN(e){return e.state.isPaused}function LN(e){return e.state.status==="success"}function jN(e){return!0}function aw(e,n={}){const r=n.shouldDehydrateMutation??e.getDefaultOptions().dehydrate?.shouldDehydrateMutation??DN,i=e.getMutationCache().getAll().flatMap(h=>r(h)?[MN(h)]:[]),s=n.shouldDehydrateQuery??e.getDefaultOptions().dehydrate?.shouldDehydrateQuery??LN,c=n.shouldRedactErrors??e.getDefaultOptions().dehydrate?.shouldRedactErrors??jN,u=n.serializeData??e.getDefaultOptions().dehydrate?.serializeData??v1,f=e.getQueryCache().getAll().flatMap(h=>s(h)?[zN(h,u,c)]:[]);return{mutations:i,queries:f}}function iw(e,n,r){if(typeof n!="object"||n===null)return;const i=e.getMutationCache(),s=e.getQueryCache(),c=e.getDefaultOptions().hydrate?.deserializeData??v1,u=n.mutations||[],f=n.queries||[];u.forEach(({state:h,...p})=>{i.build(e,{...e.getDefaultOptions().hydrate?.mutations,...r?.defaultOptions?.mutations,...p},h)}),f.forEach(({queryKey:h,state:p,queryHash:y,meta:m,promise:b,dehydratedAt:w})=>{const S=b?bN(b):void 0,T=p.data===void 0?S?.data:p.data,R=T===void 0?T:c(T);let E=s.get(y);const A=E?.state.status==="pending",L=E?.state.fetchStatus==="fetching";if(E){const U=S&&w!==void 0&&w>E.state.dataUpdatedAt;if(p.dataUpdatedAt>E.state.dataUpdatedAt||U){const{fetchStatus:F,...B}=p;E.setState({...B,data:R})}}else E=s.build(e,{...e.getDefaultOptions().hydrate?.queries,...r?.defaultOptions?.queries,queryKey:h,queryHash:y,meta:m},{...p,data:R,fetchStatus:"idle",status:R!==void 0?"success":p.status});b&&!A&&!L&&(w===void 0||w>E.state.dataUpdatedAt)&&E.fetch(void 0,{initialPromise:Promise.resolve(b).then(c)})})}var y1=we.createContext(void 0),aO=e=>{const n=we.useContext(y1);if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},UN=({client:e,children:n})=>(we.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),se.jsx(y1.Provider,{value:e,children:n}));function HN(e,n,r){const i=new Set,s=new Set,c=n.getDefaultOptions();n.setDefaultOptions({...c,queries:{...c.queries,_experimental_beforeQuery:f=>{var h,p;(p=(h=c.queries)==null?void 0:h._experimental_beforeQuery)==null||p.call(h,f);const y=f.queryKeyHashFn||vi;if(e.isServer){if(i.has(y(f.queryKey)))return;if(i.add(y(f.queryKey)),n.getQueryData(f.queryKey)!==void 0){f.__skipInjection=!0;return}}else{const m=e.clientSsr.getStreamedValue("__QueryClient__"+y(f.queryKey));m&&!m.hydrated&&(m.hydrated=!0,iw(n,m))}},_experimental_afterQuery:(f,h)=>{var p,y;const m=f.queryKeyHashFn||vi;e.isServer&&!f.__skipInjection&&n.getQueryData(f.queryKey)!==void 0&&!s.has(m(f.queryKey))&&(s.add(m(f.queryKey)),e.serverSsr.streamValue("__QueryClient__"+m(f.queryKey),aw(n,{shouldDehydrateMutation:()=>!1,shouldDehydrateQuery:b=>m(b.queryKey)===m(f.queryKey)}))),(y=(p=c.queries)==null?void 0:p._experimental_afterQuery)==null||y.call(p,f,h)}}});{const f=n.getMutationCache().config;n.getMutationCache().config={...f,onError:(p,y,m,b)=>{var w;return vn(p)?(p.options._fromLocation=e.state.location,e.navigate(e.resolveRedirect(p).options)):(w=f.onError)==null?void 0:w.call(f,p,y,m,b)}};const h=n.getQueryCache().config;n.getQueryCache().config={...h,onError:(p,y)=>{var m;return vn(p)?(p.options._fromLocation=e.state.location,e.navigate(e.resolveRedirect(p).options)):(m=h.onError)==null?void 0:m.call(h,p,y)}}}const u=e.options;return e.options={...e.options,dehydrate:()=>{var f;return{...(f=u.dehydrate)==null?void 0:f.call(u),dehydratedQueryClient:aw(n)}},hydrate:f=>{var h;(h=u.hydrate)==null||h.call(u,f),iw(n,f.dehydratedQueryClient)},context:{...u.context,queryClient:n},Wrap:({children:f})=>{const h=we.Fragment,p=u.Wrap||we.Fragment;return se.jsx(h,{children:se.jsx(UN,{client:n,children:se.jsx(p,{children:f})})})}},e}const BN=function(){return null},FN={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,TSS_APP_BASE:"/",TSS_OUTPUT_PUBLIC_DIR:"/home/debian/actions-runner/tanstack-start-template/_work/tanstack-start-template/tanstack-start-template/apps/tanstack-start-template/.output/public",TSS_SERVER_FN_BASE:"/_serverFn",VITE_LOG_LEVEL:"info"};function b1(){return console.log("here",import.meta),{serverEnv:void 0,clientEnv:FN}}var $s={exports:{}},Qh,ow;function PN(){if(ow)return Qh;ow=1;function e(r){try{return JSON.stringify(r)}catch{return'"[Circular]"'}}Qh=n;function n(r,i,s){var c=s&&s.stringify||e,u=1;if(typeof r=="object"&&r!==null){var f=i.length+u;if(f===1)return r;var h=new Array(f);h[0]=c(r);for(var p=1;p<f;p++)h[p]=c(i[p]);return h.join(" ")}if(typeof r!="string")return r;var y=i.length;if(y===0)return r;for(var m="",b=1-u,w=-1,S=r&&r.length||0,T=0;T<S;){if(r.charCodeAt(T)===37&&T+1<S){switch(w=w>-1?w:0,r.charCodeAt(T+1)){case 100:case 102:if(b>=y||i[b]==null)break;w<T&&(m+=r.slice(w,T)),m+=Number(i[b]),w=T+2,T++;break;case 105:if(b>=y||i[b]==null)break;w<T&&(m+=r.slice(w,T)),m+=Math.floor(Number(i[b])),w=T+2,T++;break;case 79:case 111:case 106:if(b>=y||i[b]===void 0)break;w<T&&(m+=r.slice(w,T));var R=typeof i[b];if(R==="string"){m+="'"+i[b]+"'",w=T+2,T++;break}if(R==="function"){m+=i[b].name||"<anonymous>",w=T+2,T++;break}m+=c(i[b]),w=T+2,T++;break;case 115:if(b>=y)break;w<T&&(m+=r.slice(w,T)),m+=String(i[b]),w=T+2,T++;break;case 37:w<T&&(m+=r.slice(w,T)),m+="%",w=T+2,T++,b--;break}++b}++T}return w===-1?r:(w<S&&(m+=r.slice(w)),m)}return Qh}var sw;function $N(){if(sw)return $s.exports;sw=1;const e=PN();$s.exports=y;const n=fe().console||{},r={mapHttpRequest:ee,mapHttpResponse:ee,wrapRequestSerializer:W,wrapResponseSerializer:W,wrapErrorSerializer:W,req:ee,res:ee,err:F,errWithCause:F};function i(j,x){return j==="silent"?1/0:x.levels.values[j]}const s=Symbol("pino.logFuncs"),c=Symbol("pino.hierarchy"),u={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function f(j,x){const N={logger:x,parent:j[c]};x[c]=N}function h(j,x,N){const M={};x.forEach(V=>{M[V]=N[V]?N[V]:n[V]||n[u[V]||"log"]||Z}),j[s]=M}function p(j,x){return Array.isArray(j)?j.filter(function(M){return M!=="!stdSerializers.err"}):j===!0?Object.keys(x):!1}function y(j){j=j||{},j.browser=j.browser||{};const x=j.browser.transmit;if(x&&typeof x.send!="function")throw Error("pino: transmit option must have a send function");const N=j.browser.write||n;j.browser.write&&(j.browser.asObject=!0);const M=j.serializers||{},V=p(j.browser.serialize,M);let C=j.browser.serialize;Array.isArray(j.browser.serialize)&&j.browser.serialize.indexOf("!stdSerializers.err")>-1&&(C=!1);const z=Object.keys(j.customLevels||{}),$=["error","fatal","warn","info","debug","trace"].concat(z);typeof N=="function"&&$.forEach(function(me){N[me]=N}),(j.enabled===!1||j.browser.disabled)&&(j.level="silent");const q=j.level||"info",I=Object.create(N);I.log||(I.log=Z),h(I,$,N),f({},I),Object.defineProperty(I,"levelVal",{get:K}),Object.defineProperty(I,"level",{get:he,set:ue});const ie={transmit:x,serialize:V,asObject:j.browser.asObject,asObjectBindingsOnly:j.browser.asObjectBindingsOnly,formatters:j.browser.formatters,levels:$,timestamp:B(j),messageKey:j.messageKey||"msg",onChild:j.onChild||Z};I.levels=m(j),I.level=q,I.isLevelEnabled=function(me){return this.levels.values[me]?this.levels.values[me]>=this.levels.values[this.level]:!1},I.setMaxListeners=I.getMaxListeners=I.emit=I.addListener=I.on=I.prependListener=I.once=I.prependOnceListener=I.removeListener=I.removeAllListeners=I.listeners=I.listenerCount=I.eventNames=I.write=I.flush=Z,I.serializers=M,I._serialize=V,I._stdErrSerialize=C,I.child=function(...me){return be.call(this,ie,...me)},x&&(I._logEvent=U());function K(){return i(this.level,this)}function he(){return this._level}function ue(me){if(me!=="silent"&&!this.levels.values[me])throw Error("unknown level "+me);this._level=me,S(this,ie,I,"error"),S(this,ie,I,"fatal"),S(this,ie,I,"warn"),S(this,ie,I,"info"),S(this,ie,I,"debug"),S(this,ie,I,"trace"),z.forEach(Ue=>{S(this,ie,I,Ue)})}function be(me,Ue,Ve){if(!Ue)throw new Error("missing bindings for child Pino");Ve=Ve||{},V&&Ue.serializers&&(Ve.serializers=Ue.serializers);const dt=Ve.serializers;if(V&&dt){var gt=Object.assign({},M,dt),_n=j.browser.serialize===!0?Object.keys(gt):V;delete Ue.serializers,A([Ue],_n,gt,this._stdErrSerialize)}function dn(fn){this._childLevel=(fn._childLevel|0)+1,this.bindings=Ue,gt&&(this.serializers=gt,this._serialize=_n),x&&(this._logEvent=U([].concat(fn._logEvent.bindings,Ue)))}dn.prototype=this;const Ze=new dn(this);return f(this,Ze),Ze.child=function(...fn){return be.call(this,me,...fn)},Ze.level=Ve.level||this.level,me.onChild(Ze),Ze}return I}function m(j){const x=j.customLevels||{},N=Object.assign({},y.levels.values,x),M=Object.assign({},y.levels.labels,b(x));return{values:N,labels:M}}function b(j){const x={};return Object.keys(j).forEach(function(N){x[j[N]]=N}),x}y.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},y.stdSerializers=r,y.stdTimeFunctions=Object.assign({},{nullTime:J,epochTime:re,unixTime:te,isoTime:le});function w(j){const x=[];j.bindings&&x.push(j.bindings);let N=j[c];for(;N.parent;)N=N.parent,N.logger.bindings&&x.push(N.logger.bindings);return x.reverse()}function S(j,x,N,M){if(Object.defineProperty(j,M,{value:i(j.level,N)>i(M,N)?Z:N[s][M],writable:!0,enumerable:!0,configurable:!0}),j[M]===Z){if(!x.transmit)return;const C=x.transmit.level||j.level,z=i(C,N);if(i(M,N)<z)return}j[M]=R(j,x,N,M);const V=w(j);V.length!==0&&(j[M]=T(V,j[M]))}function T(j,x){return function(){return x.apply(this,[...j,...arguments])}}function R(j,x,N,M){return function(V){return function(){const z=x.timestamp(),$=new Array(arguments.length),q=Object.getPrototypeOf&&Object.getPrototypeOf(this)===n?n:this;for(var I=0;I<$.length;I++)$[I]=arguments[I];var ie=!1;if(x.serialize&&(A($,this._serialize,this.serializers,this._stdErrSerialize),ie=!0),x.asObject||x.formatters?V.call(q,...E(this,M,$,z,x)):V.apply(q,$),x.transmit){const K=x.transmit.level||j._level,he=i(K,N),ue=i(M,N);if(ue<he)return;L(this,{ts:z,methodLevel:M,methodValue:ue,transmitValue:N.levels.values[x.transmit.level||j._level],send:x.transmit.send,val:i(j._level,N)},$,ie)}}}(j[s][M])}function E(j,x,N,M,V){const{level:C,log:z=K=>K}=V.formatters||{},$=N.slice();let q=$[0];const I={};let ie=(j._childLevel|0)+1;if(ie<1&&(ie=1),M&&(I.time=M),C){const K=C(x,j.levels.values[x]);Object.assign(I,K)}else I.level=j.levels.values[x];if(V.asObjectBindingsOnly){if(q!==null&&typeof q=="object")for(;ie--&&typeof $[0]=="object";)Object.assign(I,$.shift());return[z(I),...$]}else{if(q!==null&&typeof q=="object"){for(;ie--&&typeof $[0]=="object";)Object.assign(I,$.shift());q=$.length?e($.shift(),$):void 0}else typeof q=="string"&&(q=e($.shift(),$));return q!==void 0&&(I[V.messageKey]=q),[z(I)]}}function A(j,x,N,M){for(const V in j)if(M&&j[V]instanceof Error)j[V]=y.stdSerializers.err(j[V]);else if(typeof j[V]=="object"&&!Array.isArray(j[V])&&x)for(const C in j[V])x.indexOf(C)>-1&&C in N&&(j[V][C]=N[C](j[V][C]))}function L(j,x,N,M=!1){const V=x.send,C=x.ts,z=x.methodLevel,$=x.methodValue,q=x.val,I=j._logEvent.bindings;M||A(N,j._serialize||Object.keys(j.serializers),j.serializers,j._stdErrSerialize===void 0?!0:j._stdErrSerialize),j._logEvent.ts=C,j._logEvent.messages=N.filter(function(ie){return I.indexOf(ie)===-1}),j._logEvent.level.label=z,j._logEvent.level.value=$,V(z,j._logEvent,q),j._logEvent=U(I)}function U(j){return{ts:0,messages:[],bindings:j||[],level:{label:"",value:0}}}function F(j){const x={type:j.constructor.name,msg:j.message,stack:j.stack};for(const N in j)x[N]===void 0&&(x[N]=j[N]);return x}function B(j){return typeof j.timestamp=="function"?j.timestamp:j.timestamp===!1?J:re}function ee(){return{}}function W(j){return j}function Z(){}function J(){return!1}function re(){return Date.now()}function te(){return Math.round(Date.now()/1e3)}function le(){return new Date(Date.now()).toISOString()}function fe(){function j(x){return typeof x<"u"&&x}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return j(self)||j(window)||j(this)||{}}}return $s.exports.default=y,$s.exports.pino=y,$s.exports}var IN=$N();const VN=Pp(IN);function Sl(){const{clientEnv:e}=b1();return{logger:VN({level:e?.VITE_LOG_LEVEL??"info"})}}const{logger:qN}=Sl();function w1({error:e}){const n=xn(),r=Mn({strict:!1,select:i=>i.id===Xn});return qN.error(e),se.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4",children:[se.jsx(_l,{error:e}),se.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[se.jsx("button",{onClick:()=>{n.invalidate()},className:"rounded-sm bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700",children:"Try Again"}),r?se.jsx(ul,{to:"/",className:"rounded-sm bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700",children:"Home"}):se.jsx(ul,{to:"/",className:"rounded-sm bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700",onClick:i=>{i.preventDefault(),window.history.back()},children:"Go Back"})]})]})}function x1({children:e}){return se.jsxs("div",{className:"space-y-2 p-2",children:[se.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:e||se.jsx("p",{children:"The page you are looking for does not exist."})}),se.jsxs("p",{className:"flex flex-wrap items-center gap-2",children:[se.jsx("button",{onClick:()=>window.history.back(),className:"rounded-sm bg-emerald-500 px-2 py-1 text-sm font-black uppercase text-white",children:"Go back"}),se.jsx(ul,{to:"/",className:"rounded-sm bg-cyan-600 px-2 py-1 text-sm font-black uppercase text-white",children:"Start Over"})]})]})}var YN=(e,n,r,i,s,c,u,f)=>{let h=document.documentElement,p=["light","dark"];function y(w){(Array.isArray(e)?e:[e]).forEach(S=>{let T=S==="class",R=T&&c?s.map(E=>c[E]||E):s;T?(h.classList.remove(...R),h.classList.add(c&&c[w]?c[w]:w)):h.setAttribute(S,w)}),m(w)}function m(w){f&&p.includes(w)&&(h.style.colorScheme=w)}function b(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(i)y(i);else try{let w=localStorage.getItem(n)||r,S=u&&w==="system"?b():w;y(S)}catch{}},XN=we.createContext(void 0),GN={setTheme:e=>{},themes:[]},ZN=()=>{var e;return(e=we.useContext(XN))!=null?e:GN};we.memo(({forcedTheme:e,storageKey:n,attribute:r,enableSystem:i,enableColorScheme:s,defaultTheme:c,value:u,themes:f,nonce:h,scriptProps:p})=>{let y=JSON.stringify([r,n,c,e,f,u,i,s]).slice(1,-1);return we.createElement("script",{...p,suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(${YN.toString()})(${y})`}})});function QN(e){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}const WN=e=>{switch(e){case"success":return eA;case"info":return nA;case"warning":return tA;case"error":return rA;default:return null}},KN=Array(12).fill(0),JN=({visible:e,className:n})=>de.createElement("div",{className:["sonner-loading-wrapper",n].filter(Boolean).join(" "),"data-visible":e},de.createElement("div",{className:"sonner-spinner"},KN.map((r,i)=>de.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),eA=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),tA=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),nA=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),rA=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),aA=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},de.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),de.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),iA=()=>{const[e,n]=de.useState(document.hidden);return de.useEffect(()=>{const r=()=>{n(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),e};let Dp=1;class oA{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{const r=this.subscribers.indexOf(n);this.subscribers.splice(r,1)}),this.publish=n=>{this.subscribers.forEach(r=>r(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var r;const{message:i,...s}=n,c=typeof n?.id=="number"||((r=n.id)==null?void 0:r.length)>0?n.id:Dp++,u=this.toasts.find(h=>h.id===c),f=n.dismissible===void 0?!0:n.dismissible;return this.dismissedToasts.has(c)&&this.dismissedToasts.delete(c),u?this.toasts=this.toasts.map(h=>h.id===c?(this.publish({...h,...n,id:c,title:i}),{...h,...n,id:c,dismissible:f,title:i}):h):this.addToast({title:i,...s,dismissible:f,id:c}),c},this.dismiss=n=>(n?(this.dismissedToasts.add(n),requestAnimationFrame(()=>this.subscribers.forEach(r=>r({id:n,dismiss:!0})))):this.toasts.forEach(r=>{this.subscribers.forEach(i=>i({id:r.id,dismiss:!0}))}),n),this.message=(n,r)=>this.create({...r,message:n}),this.error=(n,r)=>this.create({...r,message:n,type:"error"}),this.success=(n,r)=>this.create({...r,type:"success",message:n}),this.info=(n,r)=>this.create({...r,type:"info",message:n}),this.warning=(n,r)=>this.create({...r,type:"warning",message:n}),this.loading=(n,r)=>this.create({...r,type:"loading",message:n}),this.promise=(n,r)=>{if(!r)return;let i;r.loading!==void 0&&(i=this.create({...r,promise:n,type:"loading",message:r.loading,description:typeof r.description!="function"?r.description:void 0}));const s=Promise.resolve(n instanceof Function?n():n);let c=i!==void 0,u;const f=s.then(async p=>{if(u=["resolve",p],de.isValidElement(p))c=!1,this.create({id:i,type:"default",message:p});else if(lA(p)&&!p.ok){c=!1;const m=typeof r.error=="function"?await r.error(`HTTP error! status: ${p.status}`):r.error,b=typeof r.description=="function"?await r.description(`HTTP error! status: ${p.status}`):r.description,S=typeof m=="object"&&!de.isValidElement(m)?m:{message:m};this.create({id:i,type:"error",description:b,...S})}else if(p instanceof Error){c=!1;const m=typeof r.error=="function"?await r.error(p):r.error,b=typeof r.description=="function"?await r.description(p):r.description,S=typeof m=="object"&&!de.isValidElement(m)?m:{message:m};this.create({id:i,type:"error",description:b,...S})}else if(r.success!==void 0){c=!1;const m=typeof r.success=="function"?await r.success(p):r.success,b=typeof r.description=="function"?await r.description(p):r.description,S=typeof m=="object"&&!de.isValidElement(m)?m:{message:m};this.create({id:i,type:"success",description:b,...S})}}).catch(async p=>{if(u=["reject",p],r.error!==void 0){c=!1;const y=typeof r.error=="function"?await r.error(p):r.error,m=typeof r.description=="function"?await r.description(p):r.description,w=typeof y=="object"&&!de.isValidElement(y)?y:{message:y};this.create({id:i,type:"error",description:m,...w})}}).finally(()=>{c&&(this.dismiss(i),i=void 0),r.finally==null||r.finally.call(r)}),h=()=>new Promise((p,y)=>f.then(()=>u[0]==="reject"?y(u[1]):p(u[1])).catch(y));return typeof i!="string"&&typeof i!="number"?{unwrap:h}:Object.assign(i,{unwrap:h})},this.custom=(n,r)=>{const i=r?.id||Dp++;return this.create({jsx:n(i),id:i,...r}),i},this.getActiveToasts=()=>this.toasts.filter(n=>!this.dismissedToasts.has(n.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const yn=new oA,sA=(e,n)=>{const r=n?.id||Dp++;return yn.addToast({title:e,...n,id:r}),r},lA=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",cA=sA,uA=()=>yn.toasts,dA=()=>yn.getActiveToasts(),iO=Object.assign(cA,{success:yn.success,info:yn.info,warning:yn.warning,error:yn.error,custom:yn.custom,message:yn.message,promise:yn.promise,dismiss:yn.dismiss,loading:yn.loading},{getHistory:uA,getToasts:dA});QN("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Wc(e){return e.label!==void 0}const fA=3,hA="24px",pA="16px",lw=4e3,mA=356,gA=14,vA=45,yA=200;function vr(...e){return e.filter(Boolean).join(" ")}function bA(e){const[n,r]=e.split("-"),i=[];return n&&i.push(n),r&&i.push(r),i}const wA=e=>{var n,r,i,s,c,u,f,h,p;const{invert:y,toast:m,unstyled:b,interacting:w,setHeights:S,visibleToasts:T,heights:R,index:E,toasts:A,expanded:L,removeToast:U,defaultRichColors:F,closeButton:B,style:ee,cancelButtonStyle:W,actionButtonStyle:Z,className:J="",descriptionClassName:re="",duration:te,position:le,gap:fe,expandByDefault:j,classNames:x,icons:N,closeButtonAriaLabel:M="Close toast"}=e,[V,C]=de.useState(null),[z,$]=de.useState(null),[q,I]=de.useState(!1),[ie,K]=de.useState(!1),[he,ue]=de.useState(!1),[be,me]=de.useState(!1),[Ue,Ve]=de.useState(!1),[dt,gt]=de.useState(0),[_n,dn]=de.useState(0),Ze=de.useRef(m.duration||te||lw),fn=de.useRef(null),en=de.useRef(null),La=E===0,Er=E+1<=T,ze=m.type,nt=m.dismissible!==!1,ja=m.className||"",_i=m.descriptionClassName||"",Ln=de.useMemo(()=>R.findIndex(Oe=>Oe.toastId===m.id)||0,[R,m.id]),Xt=de.useMemo(()=>{var Oe;return(Oe=m.closeButton)!=null?Oe:B},[m.closeButton,B]),Wn=de.useMemo(()=>m.duration||te||lw,[m.duration,te]),Gt=de.useRef(0),Qr=de.useRef(0),Tl=de.useRef(0),Wr=de.useRef(null),[Si,ki]=le.split("-"),dr=de.useMemo(()=>R.reduce((Oe,xt,At)=>At>=Ln?Oe:Oe+xt.height,0),[R,Ln]),Ua=iA(),Ha=m.invert||y,Bo=ze==="loading";Qr.current=de.useMemo(()=>Ln*fe+dr,[Ln,dr]),de.useEffect(()=>{Ze.current=Wn},[Wn]),de.useEffect(()=>{I(!0)},[]),de.useEffect(()=>{const Oe=en.current;if(Oe){const xt=Oe.getBoundingClientRect().height;return dn(xt),S(At=>[{toastId:m.id,height:xt,position:m.position},...At]),()=>S(At=>At.filter(Zt=>Zt.toastId!==m.id))}},[S,m.id]),de.useLayoutEffect(()=>{if(!q)return;const Oe=en.current,xt=Oe.style.height;Oe.style.height="auto";const At=Oe.getBoundingClientRect().height;Oe.style.height=xt,dn(At),S(Zt=>Zt.find(Lt=>Lt.toastId===m.id)?Zt.map(Lt=>Lt.toastId===m.id?{...Lt,height:At}:Lt):[{toastId:m.id,height:At,position:m.position},...Zt])},[q,m.title,m.description,S,m.id,m.jsx,m.action,m.cancel]);const Kn=de.useCallback(()=>{K(!0),gt(Qr.current),S(Oe=>Oe.filter(xt=>xt.toastId!==m.id)),setTimeout(()=>{U(m)},yA)},[m,U,S,Qr]);de.useEffect(()=>{if(m.promise&&ze==="loading"||m.duration===1/0||m.type==="loading")return;let Oe;return L||w||Ua?(()=>{if(Tl.current<Gt.current){const Zt=new Date().getTime()-Gt.current;Ze.current=Ze.current-Zt}Tl.current=new Date().getTime()})():(()=>{Ze.current!==1/0&&(Gt.current=new Date().getTime(),Oe=setTimeout(()=>{m.onAutoClose==null||m.onAutoClose.call(m,m),Kn()},Ze.current))})(),()=>clearTimeout(Oe)},[L,w,m,ze,Ua,Kn]),de.useEffect(()=>{m.delete&&(Kn(),m.onDismiss==null||m.onDismiss.call(m,m))},[Kn,m.delete]);function El(){var Oe;if(N?.loading){var xt;return de.createElement("div",{className:vr(x?.loader,m==null||(xt=m.classNames)==null?void 0:xt.loader,"sonner-loader"),"data-visible":ze==="loading"},N.loading)}return de.createElement(JN,{className:vr(x?.loader,m==null||(Oe=m.classNames)==null?void 0:Oe.loader),visible:ze==="loading"})}const Fo=m.icon||N?.[ze]||WN(ze);var Kr,Cl;return de.createElement("li",{tabIndex:0,ref:en,className:vr(J,ja,x?.toast,m==null||(n=m.classNames)==null?void 0:n.toast,x?.default,x?.[ze],m==null||(r=m.classNames)==null?void 0:r[ze]),"data-sonner-toast":"","data-rich-colors":(Kr=m.richColors)!=null?Kr:F,"data-styled":!(m.jsx||m.unstyled||b),"data-mounted":q,"data-promise":!!m.promise,"data-swiped":Ue,"data-removed":ie,"data-visible":Er,"data-y-position":Si,"data-x-position":ki,"data-index":E,"data-front":La,"data-swiping":he,"data-dismissible":nt,"data-type":ze,"data-invert":Ha,"data-swipe-out":be,"data-swipe-direction":z,"data-expanded":!!(L||j&&q),style:{"--index":E,"--toasts-before":E,"--z-index":A.length-E,"--offset":`${ie?dt:Qr.current}px`,"--initial-height":j?"auto":`${_n}px`,...ee,...m.style},onDragEnd:()=>{ue(!1),C(null),Wr.current=null},onPointerDown:Oe=>{Bo||!nt||(fn.current=new Date,gt(Qr.current),Oe.target.setPointerCapture(Oe.pointerId),Oe.target.tagName!=="BUTTON"&&(ue(!0),Wr.current={x:Oe.clientX,y:Oe.clientY}))},onPointerUp:()=>{var Oe,xt,At;if(be||!nt)return;Wr.current=null;const Zt=Number(((Oe=en.current)==null?void 0:Oe.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ba=Number(((xt=en.current)==null?void 0:xt.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Lt=new Date().getTime()-((At=fn.current)==null?void 0:At.getTime()),_t=V==="x"?Zt:Ba,St=Math.abs(_t)/Lt;if(Math.abs(_t)>=vA||St>.11){gt(Qr.current),m.onDismiss==null||m.onDismiss.call(m,m),$(V==="x"?Zt>0?"right":"left":Ba>0?"down":"up"),Kn(),me(!0);return}else{var lt,Ft;(lt=en.current)==null||lt.style.setProperty("--swipe-amount-x","0px"),(Ft=en.current)==null||Ft.style.setProperty("--swipe-amount-y","0px")}Ve(!1),ue(!1),C(null)},onPointerMove:Oe=>{var xt,At,Zt;if(!Wr.current||!nt||((xt=window.getSelection())==null?void 0:xt.toString().length)>0)return;const Lt=Oe.clientY-Wr.current.y,_t=Oe.clientX-Wr.current.x;var St;const lt=(St=e.swipeDirections)!=null?St:bA(le);!V&&(Math.abs(_t)>1||Math.abs(Lt)>1)&&C(Math.abs(_t)>Math.abs(Lt)?"x":"y");let Ft={x:0,y:0};const Ti=Cr=>1/(1.5+Math.abs(Cr)/20);if(V==="y"){if(lt.includes("top")||lt.includes("bottom"))if(lt.includes("top")&&Lt<0||lt.includes("bottom")&&Lt>0)Ft.y=Lt;else{const Cr=Lt*Ti(Lt);Ft.y=Math.abs(Cr)<Math.abs(Lt)?Cr:Lt}}else if(V==="x"&&(lt.includes("left")||lt.includes("right")))if(lt.includes("left")&&_t<0||lt.includes("right")&&_t>0)Ft.x=_t;else{const Cr=_t*Ti(_t);Ft.x=Math.abs(Cr)<Math.abs(_t)?Cr:_t}(Math.abs(Ft.x)>0||Math.abs(Ft.y)>0)&&Ve(!0),(At=en.current)==null||At.style.setProperty("--swipe-amount-x",`${Ft.x}px`),(Zt=en.current)==null||Zt.style.setProperty("--swipe-amount-y",`${Ft.y}px`)}},Xt&&!m.jsx&&ze!=="loading"?de.createElement("button",{"aria-label":M,"data-disabled":Bo,"data-close-button":!0,onClick:Bo||!nt?()=>{}:()=>{Kn(),m.onDismiss==null||m.onDismiss.call(m,m)},className:vr(x?.closeButton,m==null||(i=m.classNames)==null?void 0:i.closeButton)},(Cl=N?.close)!=null?Cl:aA):null,(ze||m.icon||m.promise)&&m.icon!==null&&(N?.[ze]!==null||m.icon)?de.createElement("div",{"data-icon":"",className:vr(x?.icon,m==null||(s=m.classNames)==null?void 0:s.icon)},m.promise||m.type==="loading"&&!m.icon?m.icon||El():null,m.type!=="loading"?Fo:null):null,de.createElement("div",{"data-content":"",className:vr(x?.content,m==null||(c=m.classNames)==null?void 0:c.content)},de.createElement("div",{"data-title":"",className:vr(x?.title,m==null||(u=m.classNames)==null?void 0:u.title)},m.jsx?m.jsx:typeof m.title=="function"?m.title():m.title),m.description?de.createElement("div",{"data-description":"",className:vr(re,_i,x?.description,m==null||(f=m.classNames)==null?void 0:f.description)},typeof m.description=="function"?m.description():m.description):null),de.isValidElement(m.cancel)?m.cancel:m.cancel&&Wc(m.cancel)?de.createElement("button",{"data-button":!0,"data-cancel":!0,style:m.cancelButtonStyle||W,onClick:Oe=>{Wc(m.cancel)&&nt&&(m.cancel.onClick==null||m.cancel.onClick.call(m.cancel,Oe),Kn())},className:vr(x?.cancelButton,m==null||(h=m.classNames)==null?void 0:h.cancelButton)},m.cancel.label):null,de.isValidElement(m.action)?m.action:m.action&&Wc(m.action)?de.createElement("button",{"data-button":!0,"data-action":!0,style:m.actionButtonStyle||Z,onClick:Oe=>{Wc(m.action)&&(m.action.onClick==null||m.action.onClick.call(m.action,Oe),!Oe.defaultPrevented&&Kn())},className:vr(x?.actionButton,m==null||(p=m.classNames)==null?void 0:p.actionButton)},m.action.label):null)};function cw(){if(typeof window>"u"||typeof document>"u")return"ltr";const e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function xA(e,n){const r={};return[e,n].forEach((i,s)=>{const c=s===1,u=c?"--mobile-offset":"--offset",f=c?pA:hA;function h(p){["top","right","bottom","left"].forEach(y=>{r[`${u}-${y}`]=typeof p=="number"?`${p}px`:p})}typeof i=="number"||typeof i=="string"?h(i):typeof i=="object"?["top","right","bottom","left"].forEach(p=>{i[p]===void 0?r[`${u}-${p}`]=f:r[`${u}-${p}`]=typeof i[p]=="number"?`${i[p]}px`:i[p]}):h(f)}),r}const _A=de.forwardRef(function(n,r){const{invert:i,position:s="bottom-right",hotkey:c=["altKey","KeyT"],expand:u,closeButton:f,className:h,offset:p,mobileOffset:y,theme:m="light",richColors:b,duration:w,style:S,visibleToasts:T=fA,toastOptions:R,dir:E=cw(),gap:A=gA,icons:L,containerAriaLabel:U="Notifications"}=n,[F,B]=de.useState([]),ee=de.useMemo(()=>Array.from(new Set([s].concat(F.filter(z=>z.position).map(z=>z.position)))),[F,s]),[W,Z]=de.useState([]),[J,re]=de.useState(!1),[te,le]=de.useState(!1),[fe,j]=de.useState(m!=="system"?m:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),x=de.useRef(null),N=c.join("+").replace(/Key/g,"").replace(/Digit/g,""),M=de.useRef(null),V=de.useRef(!1),C=de.useCallback(z=>{B($=>{var q;return(q=$.find(I=>I.id===z.id))!=null&&q.delete||yn.dismiss(z.id),$.filter(({id:I})=>I!==z.id)})},[]);return de.useEffect(()=>yn.subscribe(z=>{if(z.dismiss){requestAnimationFrame(()=>{B($=>$.map(q=>q.id===z.id?{...q,delete:!0}:q))});return}setTimeout(()=>{A4.flushSync(()=>{B($=>{const q=$.findIndex(I=>I.id===z.id);return q!==-1?[...$.slice(0,q),{...$[q],...z},...$.slice(q+1)]:[z,...$]})})})}),[F]),de.useEffect(()=>{if(m!=="system"){j(m);return}if(m==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?j("dark"):j("light")),typeof window>"u")return;const z=window.matchMedia("(prefers-color-scheme: dark)");try{z.addEventListener("change",({matches:$})=>{j($?"dark":"light")})}catch{z.addListener(({matches:q})=>{try{j(q?"dark":"light")}catch(I){console.error(I)}})}},[m]),de.useEffect(()=>{F.length<=1&&re(!1)},[F]),de.useEffect(()=>{const z=$=>{var q;if(c.every(K=>$[K]||$.code===K)){var ie;re(!0),(ie=x.current)==null||ie.focus()}$.code==="Escape"&&(document.activeElement===x.current||(q=x.current)!=null&&q.contains(document.activeElement))&&re(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[c]),de.useEffect(()=>{if(x.current)return()=>{M.current&&(M.current.focus({preventScroll:!0}),M.current=null,V.current=!1)}},[x.current]),de.createElement("section",{ref:r,"aria-label":`${U} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},ee.map((z,$)=>{var q;const[I,ie]=z.split("-");return F.length?de.createElement("ol",{key:z,dir:E==="auto"?cw():E,tabIndex:-1,ref:x,className:h,"data-sonner-toaster":!0,"data-sonner-theme":fe,"data-y-position":I,"data-x-position":ie,style:{"--front-toast-height":`${((q=W[0])==null?void 0:q.height)||0}px`,"--width":`${mA}px`,"--gap":`${A}px`,...S,...xA(p,y)},onBlur:K=>{V.current&&!K.currentTarget.contains(K.relatedTarget)&&(V.current=!1,M.current&&(M.current.focus({preventScroll:!0}),M.current=null))},onFocus:K=>{K.target instanceof HTMLElement&&K.target.dataset.dismissible==="false"||V.current||(V.current=!0,M.current=K.relatedTarget)},onMouseEnter:()=>re(!0),onMouseMove:()=>re(!0),onMouseLeave:()=>{te||re(!1)},onDragEnd:()=>re(!1),onPointerDown:K=>{K.target instanceof HTMLElement&&K.target.dataset.dismissible==="false"||le(!0)},onPointerUp:()=>le(!1)},F.filter(K=>!K.position&&$===0||K.position===z).map((K,he)=>{var ue,be;return de.createElement(wA,{key:K.id,icons:L,index:he,toast:K,defaultRichColors:b,duration:(ue=R?.duration)!=null?ue:w,className:R?.className,descriptionClassName:R?.descriptionClassName,invert:i,visibleToasts:T,closeButton:(be=R?.closeButton)!=null?be:f,interacting:te,position:z,style:R?.style,unstyled:R?.unstyled,classNames:R?.classNames,cancelButtonStyle:R?.cancelButtonStyle,actionButtonStyle:R?.actionButtonStyle,closeButtonAriaLabel:R?.closeButtonAriaLabel,removeToast:C,toasts:F.filter(me=>me.position==K.position),heights:W.filter(me=>me.position==K.position),setHeights:Z,expandByDefault:u,gap:A,expanded:J,swipeDirections:n.swipeDirections})})):null}))}),SA=({...e})=>{const{theme:n="system"}=ZN();return se.jsx(_A,{theme:n,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800",description:"group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",actionButton:"group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 font-medium dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",cancelButton:"group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 font-medium dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400"}},...e})},kA="/assets/app-DBNnlMnv.css",TA=({title:e,description:n,keywords:r,image:i})=>[{title:e},{name:"description",content:n},{name:"keywords",content:r},{name:"og:type",content:"website"},{name:"og:title",content:e},{name:"og:description",content:n},...i?[{name:"twitter:image",content:i},{name:"twitter:card",content:"summary_large_image"},{name:"og:image",content:i}]:[]];var EA=Object.defineProperty,CA=Object.defineProperties,RA=Object.getOwnPropertyDescriptors,uw=Object.getOwnPropertySymbols,NA=Object.prototype.hasOwnProperty,AA=Object.prototype.propertyIsEnumerable,dw=(e,n,r)=>n in e?EA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,ir=(e,n)=>{for(var r in n||(n={}))NA.call(n,r)&&dw(e,r,n[r]);if(uw)for(var r of uw(n))AA.call(n,r)&&dw(e,r,n[r]);return e},xr=(e,n)=>CA(e,RA(n)),OA=class extends Error{constructor(e,n,r){super(n||e.toString(),{cause:r}),this.status=e,this.statusText=n,this.error=r}},MA=async(e,n)=>{var r,i,s,c,u,f;let h=n||{};const p={onRequest:[n?.onRequest],onResponse:[n?.onResponse],onSuccess:[n?.onSuccess],onError:[n?.onError],onRetry:[n?.onRetry]};if(!n||!n?.plugins)return{url:e,options:h,hooks:p};for(const y of n?.plugins||[]){if(y.init){const m=await((r=y.init)==null?void 0:r.call(y,e.toString(),n));h=m.options||h,e=m.url}p.onRequest.push((i=y.hooks)==null?void 0:i.onRequest),p.onResponse.push((s=y.hooks)==null?void 0:s.onResponse),p.onSuccess.push((c=y.hooks)==null?void 0:c.onSuccess),p.onError.push((u=y.hooks)==null?void 0:u.onError),p.onRetry.push((f=y.hooks)==null?void 0:f.onRetry)}return{url:e,options:h,hooks:p}},fw=class{constructor(e){this.options=e}shouldAttemptRetry(e,n){return this.options.shouldRetry?Promise.resolve(e<this.options.attempts&&this.options.shouldRetry(n)):Promise.resolve(e<this.options.attempts)}getDelay(){return this.options.delay}},zA=class{constructor(e){this.options=e}shouldAttemptRetry(e,n){return this.options.shouldRetry?Promise.resolve(e<this.options.attempts&&this.options.shouldRetry(n)):Promise.resolve(e<this.options.attempts)}getDelay(e){return Math.min(this.options.maxDelay,this.options.baseDelay*2**e)}};function DA(e){if(typeof e=="number")return new fw({type:"linear",attempts:e,delay:1e3});switch(e.type){case"linear":return new fw(e);case"exponential":return new zA(e);default:throw new Error("Invalid retry strategy")}}var LA=async e=>{const n={},r=async i=>typeof i=="function"?await i():i;if(e?.auth){if(e.auth.type==="Bearer"){const i=await r(e.auth.token);if(!i)return n;n.authorization=`Bearer ${i}`}else if(e.auth.type==="Basic"){const i=r(e.auth.username),s=r(e.auth.password);if(!i||!s)return n;n.authorization=`Basic ${btoa(`${i}:${s}`)}`}else if(e.auth.type==="Custom"){const i=r(e.auth.value);if(!i)return n;n.authorization=`${r(e.auth.prefix)} ${i}`}}return n},jA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function UA(e){const n=e.headers.get("content-type"),r=new Set(["image/svg","application/xml","application/xhtml","application/html"]);if(!n)return"json";const i=n.split(";").shift()||"";return jA.test(i)?"json":r.has(i)||i.startsWith("text/")?"text":"blob"}function HA(e){try{return JSON.parse(e),!0}catch{return!1}}function _1(e){if(e===void 0)return!1;const n=typeof e;return n==="string"||n==="number"||n==="boolean"||n===null?!0:n!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}function hw(e){try{return JSON.parse(e)}catch{return e}}function pw(e){return typeof e=="function"}function BA(e){if(e?.customFetchImpl)return e.customFetchImpl;if(typeof globalThis<"u"&&pw(globalThis.fetch))return globalThis.fetch;if(typeof window<"u"&&pw(window.fetch))return window.fetch;throw new Error("No fetch implementation found")}async function FA(e){const n=new Headers(e?.headers),r=await LA(e);for(const[i,s]of Object.entries(r||{}))n.set(i,s);if(!n.has("content-type")){const i=PA(e?.body);i&&n.set("content-type",i)}return n}function PA(e){return _1(e)?"application/json":null}function $A(e){if(!e?.body)return null;const n=new Headers(e?.headers);if(_1(e.body)&&!n.has("content-type")){for(const[r,i]of Object.entries(e?.body))i instanceof Date&&(e.body[r]=i.toISOString());return JSON.stringify(e.body)}return e.body}function IA(e,n){var r;if(n?.method)return n.method.toUpperCase();if(e.startsWith("@")){const i=(r=e.split("@")[1])==null?void 0:r.split("/")[0];return k1.includes(i)?i.toUpperCase():n?.body?"POST":"GET"}return n?.body?"POST":"GET"}function VA(e,n){let r;return!e?.signal&&e?.timeout&&(r=setTimeout(()=>n?.abort(),e?.timeout)),{abortTimeout:r,clearTimeout:()=>{r&&clearTimeout(r)}}}var qA=class S1 extends Error{constructor(n,r){super(r||JSON.stringify(n,null,2)),this.issues=n,Object.setPrototypeOf(this,S1.prototype)}};async function cu(e,n){let r=await e["~standard"].validate(n);if(r.issues)throw new qA(r.issues);return r.value}var k1=["get","post","put","patch","delete"],YA=e=>({id:"apply-schema",name:"Apply Schema",version:"1.0.0",async init(n,r){var i,s,c,u;const f=((s=(i=e.plugins)==null?void 0:i.find(h=>{var p;return(p=h.schema)!=null&&p.config?n.startsWith(h.schema.config.baseURL||"")||n.startsWith(h.schema.config.prefix||""):!1}))==null?void 0:s.schema)||e.schema;if(f){let h=n;(c=f.config)!=null&&c.prefix&&h.startsWith(f.config.prefix)&&(h=h.replace(f.config.prefix,""),f.config.baseURL&&(n=n.replace(f.config.prefix,f.config.baseURL))),(u=f.config)!=null&&u.baseURL&&h.startsWith(f.config.baseURL)&&(h=h.replace(f.config.baseURL,""));const p=f.schema[h];if(p){let y=xr(ir({},r),{method:p.method,output:p.output});return r?.disableValidation||(y=xr(ir({},y),{body:p.input?await cu(p.input,r?.body):r?.body,params:p.params?await cu(p.params,r?.params):r?.params,query:p.query?await cu(p.query,r?.query):r?.query})),{url:n,options:y}}}return{url:n,options:r}}}),XA=e=>{async function n(r,i){const s=xr(ir(ir({},e),i),{plugins:[...e?.plugins||[],YA(e||{})]});if(e?.catchAllError)try{return await Lp(r,s)}catch(c){return{data:null,error:{status:500,statusText:"Fetch Error",message:"Fetch related error. Captured by catchAllError option. See error property for more details.",error:c}}}return await Lp(r,s)}return n};function GA(e,n){let{baseURL:r,params:i,query:s}=n||{query:{},params:{},baseURL:""},c=e.startsWith("http")?e.split("/").slice(0,3).join("/"):r||"";if(e.startsWith("@")){const m=e.toString().split("@")[1].split("/")[0];k1.includes(m)&&(e=e.replace(`@${m}/`,"/"))}c.endsWith("/")||(c+="/");let[u,f]=e.replace(c,"").split("?");const h=new URLSearchParams(f);for(const[m,b]of Object.entries(s||{}))b!=null&&h.set(m,String(b));if(i)if(Array.isArray(i)){const m=u.split("/").filter(b=>b.startsWith(":"));for(const[b,w]of m.entries()){const S=i[b];u=u.replace(w,S)}}else for(const[m,b]of Object.entries(i))u=u.replace(`:${m}`,String(b));u=u.split("/").map(encodeURIComponent).join("/"),u.startsWith("/")&&(u=u.slice(1));let p=h.toString();return p=p.length>0?`?${p}`.replace(/\+/g,"%20"):"",c.startsWith("http")?new URL(`${u}${p}`,c):`${c}${u}${p}`}var Lp=async(e,n)=>{var r,i,s,c,u,f,h,p;const{hooks:y,url:m,options:b}=await MA(e,n),w=BA(b),S=new AbortController,T=(r=b.signal)!=null?r:S.signal,R=GA(m,b),E=$A(b),A=await FA(b),L=IA(m,b);let U=xr(ir({},b),{url:R,headers:A,body:E,method:L,signal:T});for(const le of y.onRequest)if(le){const fe=await le(U);fe instanceof Object&&(U=fe)}("pipeTo"in U&&typeof U.pipeTo=="function"||typeof((i=n?.body)==null?void 0:i.pipe)=="function")&&("duplex"in U||(U.duplex="half"));const{clearTimeout:F}=VA(b,S);let B=await w(U.url,U);F();const ee={response:B,request:U};for(const le of y.onResponse)if(le){const fe=await le(xr(ir({},ee),{response:(s=n?.hookOptions)!=null&&s.cloneResponse?B.clone():B}));fe instanceof Response?B=fe:fe instanceof Object&&(B=fe.response)}if(B.ok){if(!(U.method!=="HEAD"))return{data:"",error:null};const fe=UA(B),j={data:"",response:B,request:U};if(fe==="json"||fe==="text"){const x=await B.text(),M=await((c=U.jsonParser)!=null?c:hw)(x);j.data=M}else j.data=await B[fe]();U?.output&&U.output&&!U.disableValidation&&(j.data=await cu(U.output,j.data));for(const x of y.onSuccess)x&&await x(xr(ir({},j),{response:(u=n?.hookOptions)!=null&&u.cloneResponse?B.clone():B}));return n?.throw?j.data:{data:j.data,error:null}}const W=(f=n?.jsonParser)!=null?f:hw,Z=await B.text(),J=HA(Z),re=J?await W(Z):null,te={response:B,responseText:Z,request:U,error:xr(ir({},re),{status:B.status,statusText:B.statusText})};for(const le of y.onError)le&&await le(xr(ir({},te),{response:(h=n?.hookOptions)!=null&&h.cloneResponse?B.clone():B}));if(n?.retry){const le=DA(n.retry),fe=(p=n.retryAttempt)!=null?p:0;if(await le.shouldAttemptRetry(fe,B)){for(const x of y.onRetry)x&&await x(ee);const j=le.getDelay(fe);return await new Promise(x=>setTimeout(x,j)),await Lp(e,xr(ir({},n),{retryAttempt:fe+1}))}}if(n?.throw)throw new OA(B.status,B.statusText,J?re:Z);return{data:null,error:xr(ir({},re),{status:B.status,statusText:B.statusText})}},ZA={},QA={};const uu=Object.create(null),Is=e=>ZA||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?uu:globalThis),ka=new Proxy(uu,{get(e,n){return Is()[n]??uu[n]},has(e,n){const r=Is();return n in r||n in uu},set(e,n,r){const i=Is(!0);return i[n]=r,!0},deleteProperty(e,n){if(!n)return!1;const r=Is(!0);return delete r[n],!0},ownKeys(){const e=Is(!0);return Object.keys(e)}});function WA(e){return e?e!=="false":!1}const KA=typeof process<"u"&&QA&&"production"||"";KA==="test"||WA(ka.TEST);class JA extends Error{constructor(n,r){super(n),this.name="BetterAuthError",this.message=n,this.cause=r,this.stack=""}}function e5(e){try{return new URL(e).pathname!=="/"}catch{throw new JA(`Invalid base URL: ${e}. Please provide a valid base URL.`)}}function Wh(e,n="/api/auth"){return e5(e)?e:(n=n.startsWith("/")?n:`/${n}`,`${e.replace(/\/+$/,"")}${n}`)}function t5(e,n,r){if(e)return Wh(e,n);const i=ka.BETTER_AUTH_URL||ka.NEXT_PUBLIC_BETTER_AUTH_URL||ka.PUBLIC_BETTER_AUTH_URL||ka.NUXT_PUBLIC_BETTER_AUTH_URL||ka.NUXT_PUBLIC_AUTH_URL||(ka.BASE_URL!=="/"?ka.BASE_URL:void 0);if(i)return Wh(i,n);if(typeof window<"u"&&window.location)return Wh(window.location.origin,n)}let rr=[],Sa=0;const Kc=4;let T1=e=>{let n=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},lc:0,listen(i){return r.lc=n.push(i),()=>{for(let c=Sa+Kc;c<rr.length;)rr[c]===i?rr.splice(c,Kc):c+=Kc;let s=n.indexOf(i);~s&&(n.splice(s,1),--r.lc||r.off())}},notify(i,s){let c=!rr.length;for(let u of n)rr.push(u,r.value,i,s);if(c){for(Sa=0;Sa<rr.length;Sa+=Kc)rr[Sa](rr[Sa+1],rr[Sa+2],rr[Sa+3]);rr.length=0}},off(){},set(i){let s=r.value;s!==i&&(r.value=i,r.notify(s))},subscribe(i){let s=r.listen(i);return i(r.value),s},value:e};return r};const n5=5,Jc=6,eu=10;let r5=(e,n,r,i)=>(e.events=e.events||{},e.events[r+eu]||(e.events[r+eu]=i(s=>{e.events[r].reduceRight((c,u)=>(u(c),c),{shared:{},...s})})),e.events[r]=e.events[r]||[],e.events[r].push(n),()=>{let s=e.events[r],c=s.indexOf(n);s.splice(c,1),s.length||(delete e.events[r],e.events[r+eu](),delete e.events[r+eu])}),a5=1e3,i5=(e,n)=>r5(e,i=>{let s=n(i);s&&e.events[Jc].push(s)},n5,i=>{let s=e.listen;e.listen=(...u)=>(!e.lc&&!e.active&&(e.active=!0,i()),s(...u));let c=e.off;return e.events[Jc]=[],e.off=()=>{c(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let u of e.events[Jc])u();e.events[Jc]=[]}},a5)},()=>{e.listen=s,e.off=c}});function o5(e,n,r){let i=new Set(n).add(void 0);return e.listen((s,c,u)=>{i.has(u)&&r(s,c,u)})}const s5=typeof window>"u",l5=(e,n,r,i)=>{const s=T1({data:null,error:null,isPending:!0,isRefetching:!1,refetch:()=>c()}),c=()=>{const f=typeof i=="function"?i({data:s.get().data,error:s.get().error,isPending:s.get().isPending}):i;return r(n,{...f,async onSuccess(h){s.set({data:h.data,error:null,isPending:!1,isRefetching:!1,refetch:s.value.refetch}),await f?.onSuccess?.(h)},async onError(h){const{request:p}=h,y=typeof p.retry=="number"?p.retry:p.retry?.attempts,m=p.retryAttempt||0;y&&m<y||(s.set({error:h.error,data:null,isPending:!1,isRefetching:!1,refetch:s.value.refetch}),await f?.onError?.(h))},async onRequest(h){const p=s.get();s.set({isPending:p.data===null,data:p.data,error:null,isRefetching:!0,refetch:s.value.refetch}),await f?.onRequest?.(h)}})};e=Array.isArray(e)?e:[e];let u=!1;for(const f of e)f.subscribe(()=>{s5||(u?c():i5(s,()=>(setTimeout(()=>{c()},0),u=!0,()=>{s.off(),f.off()})))});return s},c5={proto:/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,constructor:/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,protoShort:/"__proto__"\s*:/,constructorShort:/"constructor"\s*:/},u5=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,mw={true:!0,false:!1,null:null,undefined:void 0,nan:Number.NaN,infinity:Number.POSITIVE_INFINITY,"-infinity":Number.NEGATIVE_INFINITY},d5=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;function f5(e){return e instanceof Date&&!isNaN(e.getTime())}function h5(e){const n=d5.exec(e);if(!n)return null;const[,r,i,s,c,u,f,h,p,y,m]=n;let b=new Date(Date.UTC(parseInt(r,10),parseInt(i,10)-1,parseInt(s,10),parseInt(c,10),parseInt(u,10),parseInt(f,10),h?parseInt(h.padEnd(3,"0"),10):0));if(p){const w=(parseInt(y,10)*60+parseInt(m,10))*(p==="+"?-1:1);b.setUTCMinutes(b.getUTCMinutes()+w)}return f5(b)?b:null}function p5(e,n={}){const{strict:r=!1,warnings:i=!1,reviver:s,parseDates:c=!0}=n;if(typeof e!="string")return e;const u=e.trim();if(u[0]==='"'&&u.endsWith('"')&&!u.slice(1,-1).includes('"'))return u.slice(1,-1);const f=u.toLowerCase();if(f.length<=9&&f in mw)return mw[f];if(!u5.test(u)){if(r)throw new SyntaxError("[better-json] Invalid JSON");return e}if(Object.entries(c5).some(([p,y])=>{const m=y.test(u);return m&&i&&console.warn(`[better-json] Detected potential prototype pollution attempt using ${p} pattern`),m})&&r)throw new Error("[better-json] Potential prototype pollution attempt detected");try{return JSON.parse(u,(y,m)=>{if(y==="__proto__"||y==="constructor"&&m&&typeof m=="object"&&"prototype"in m){i&&console.warn(`[better-json] Dropping "${y}" key to prevent prototype pollution`);return}if(c&&typeof m=="string"){const b=h5(m);if(b)return b}return s?s(y,m):m})}catch(p){if(r)throw p;return e}}function m5(e,n={strict:!0}){return p5(e,n)}const g5={id:"redirect",name:"Redirect",hooks:{onSuccess(e){if(e.data?.url&&e.data?.redirect&&typeof window<"u"&&window.location&&window.location)try{window.location.href=e.data.url}catch{}}}};function v5(e){const n=T1(!1);return{session:l5(n,"/get-session",e,{method:"GET"}),$sessionSignal:n}}const y5=e=>{const n="credentials"in Request.prototype,r=t5(e?.baseURL,e?.basePath),i=e?.plugins?.flatMap(w=>w.fetchPlugins).filter(w=>w!==void 0)||[],s=XA({baseURL:r,...n?{credentials:"include"}:{},method:"GET",jsonParser(w){return w?m5(w,{strict:!1}):null},customFetchImpl:async(w,S)=>{try{return await fetch(w,S)}catch{return Response.error()}},...e?.fetchOptions,plugins:e?.disableDefaultFetchPlugins?[...e?.fetchOptions?.plugins||[],...i]:[g5,...e?.fetchOptions?.plugins||[],...i]}),{$sessionSignal:c,session:u}=v5(s),f=e?.plugins||[];let h={},p={$sessionSignal:c,session:u},y={"/sign-out":"POST","/revoke-sessions":"POST","/revoke-other-sessions":"POST","/delete-user":"POST"};const m=[{signal:"$sessionSignal",matcher(w){return w==="/sign-out"||w==="/update-user"||w.startsWith("/sign-in")||w.startsWith("/sign-up")||w==="/delete-user"||w==="/verify-email"}}];for(const w of f)w.getAtoms&&Object.assign(p,w.getAtoms?.(s)),w.pathMethods&&Object.assign(y,w.pathMethods),w.atomListeners&&m.push(...w.atomListeners);const b={notify:w=>{p[w].set(!p[w].get())},listen:(w,S)=>{p[w].subscribe(S)},atoms:p};for(const w of f)w.getActions&&Object.assign(h,w.getActions?.(s,b,e));return{pluginsActions:h,pluginsAtoms:p,pluginPathMethods:y,atomListeners:m,$fetch:s,$store:b}};function b5(e,n,r){const i=n[e],{fetchOptions:s,query:c,...u}=r||{};return i||(s?.method?s.method:u&&Object.keys(u).length>0?"POST":"GET")}function w5(e,n,r,i,s){function c(u=[]){return new Proxy(function(){},{get(f,h){const p=[...u,h];let y=e;for(const m of p)if(y&&typeof y=="object"&&m in y)y=y[m];else{y=void 0;break}return typeof y=="function"?y:c(p)},apply:async(f,h,p)=>{const y="/"+u.map(A=>A.replace(/[A-Z]/g,L=>`-${L.toLowerCase()}`)).join("/"),m=p[0]||{},b=p[1]||{},{query:w,fetchOptions:S,...T}=m,R={...b,...S},E=b5(y,r,m);return await n(y,{...R,body:E==="GET"?void 0:{...T,...R?.body||{}},query:w||R?.query,method:E,async onSuccess(A){await R?.onSuccess?.(A);const L=s?.find(B=>B.matcher(y));if(!L)return;const U=i[L.signal];if(!U)return;const F=U.get();setTimeout(()=>{U.set(!F)},10)}})}})}return c()}function x5(e,n={}){let r=we.useRef(e.get());const{keys:i,deps:s=[e,i]}=n;let c=we.useCallback(f=>{const h=p=>{r.current!==p&&(r.current=p,f())};return h(e.value),i?.length?o5(e,i,h):e.listen(h)},s),u=()=>r.current;return we.useSyncExternalStore(c,u,u)}function _5(e){return`use${S5(e)}`}function S5(e){return e.charAt(0).toUpperCase()+e.slice(1)}function k5(e){const{pluginPathMethods:n,pluginsActions:r,pluginsAtoms:i,$fetch:s,$store:c,atomListeners:u}=y5(e);let f={};for(const[y,m]of Object.entries(i))f[_5(y)]=()=>x5(m);const h={...r,...f,$fetch:s,$store:c};return w5(h,s,n,i,u)}const T5=e=>({id:"additional-fields-client",$InferServerPlugin:{}}),E1="user",{logger:C1}=Sl(),{serverEnv:E5}=b1(),C5=k5({baseURL:E5?.PUBLIC_BASEURL,plugins:[T5()]}),R5={queryKey:[E1],staleTime:3*60*1e3,queryFn:()=>(C1.info("Re-fetching session"),C5.getSession({query:{disableCookieCache:!1,disableRefresh:!0}}))};async function oO(e,n){C1.info("Invalidating auth cache"),await n.invalidateQueries({queryKey:[E1]}),e.invalidate()}const{logger:N5}=Sl(),A5=async e=>{const r=(await e.fetchQuery(R5))?.data?.user;return N5.info("Session retrieved",r?.email),r},Wu=U4()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},...TA({title:"Starter",description:"TanStack generic webapp starter."})],links:[{rel:"stylesheet",href:kA},{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"manifest",href:"/site.webmanifest",color:"#fffff"},{rel:"icon",href:"/favicon.ico"}]}),beforeLoad:async({context:e})=>({user:await A5(e.queryClient)}),errorComponent:e=>se.jsx(w1,{...e}),notFoundComponent:()=>se.jsx(x1,{}),component:O5});function O5(){return se.jsxs("html",{children:[se.jsx("head",{children:se.jsx(aN,{})}),se.jsxs("body",{children:[se.jsx("main",{className:"h-screen",children:se.jsx(Tm,{})}),se.jsx(SA,{}),se.jsx(BN,{position:"bottom-right"}),se.jsx(oN,{})]})]})}const M5=()=>un(()=>import("./sandbox-9i_kViuc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),R1=an("/sandbox")({component:ur(M5,"component",()=>R1.ssr)}),z5=()=>un(()=>import("./_navbar-DzcfMZ3B.js"),__vite__mapDeps([8,2,1,5,6,4,7,9])),N1=an("/_navbar")({component:ur(z5,"component",()=>N1.ssr)});var We;(function(e){e.assertEqual=s=>{};function n(s){}e.assertIs=n;function r(s){throw new Error}e.assertNever=r,e.arrayToEnum=s=>{const c={};for(const u of s)c[u]=u;return c},e.getValidEnumValues=s=>{const c=e.objectKeys(s).filter(f=>typeof s[s[f]]!="number"),u={};for(const f of c)u[f]=s[f];return e.objectValues(u)},e.objectValues=s=>e.objectKeys(s).map(function(c){return s[c]}),e.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const c=[];for(const u in s)Object.prototype.hasOwnProperty.call(s,u)&&c.push(u);return c},e.find=(s,c)=>{for(const u of s)if(c(u))return u},e.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function i(s,c=" | "){return s.map(u=>typeof u=="string"?`'${u}'`:u).join(c)}e.joinValues=i,e.jsonStringifyReplacer=(s,c)=>typeof c=="bigint"?c.toString():c})(We||(We={}));var gw;(function(e){e.mergeShapes=(n,r)=>({...n,...r})})(gw||(gw={}));const xe=We.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ta=e=>{switch(typeof e){case"undefined":return xe.undefined;case"string":return xe.string;case"number":return Number.isNaN(e)?xe.nan:xe.number;case"boolean":return xe.boolean;case"function":return xe.function;case"bigint":return xe.bigint;case"symbol":return xe.symbol;case"object":return Array.isArray(e)?xe.array:e===null?xe.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?xe.promise:typeof Map<"u"&&e instanceof Map?xe.map:typeof Set<"u"&&e instanceof Set?xe.set:typeof Date<"u"&&e instanceof Date?xe.date:xe.object;default:return xe.unknown}},ce=We.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Zr extends Error{get errors(){return this.issues}constructor(n){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=n}format(n){const r=n||function(c){return c.message},i={_errors:[]},s=c=>{for(const u of c.issues)if(u.code==="invalid_union")u.unionErrors.map(s);else if(u.code==="invalid_return_type")s(u.returnTypeError);else if(u.code==="invalid_arguments")s(u.argumentsError);else if(u.path.length===0)i._errors.push(r(u));else{let f=i,h=0;for(;h<u.path.length;){const p=u.path[h];h===u.path.length-1?(f[p]=f[p]||{_errors:[]},f[p]._errors.push(r(u))):f[p]=f[p]||{_errors:[]},f=f[p],h++}}};return s(this),i}static assert(n){if(!(n instanceof Zr))throw new Error(`Not a ZodError: ${n}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,We.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(n=r=>r.message){const r={},i=[];for(const s of this.issues)s.path.length>0?(r[s.path[0]]=r[s.path[0]]||[],r[s.path[0]].push(n(s))):i.push(n(s));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}}Zr.create=e=>new Zr(e);const jp=(e,n)=>{let r;switch(e.code){case ce.invalid_type:e.received===xe.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case ce.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,We.jsonStringifyReplacer)}`;break;case ce.unrecognized_keys:r=`Unrecognized key(s) in object: ${We.joinValues(e.keys,", ")}`;break;case ce.invalid_union:r="Invalid input";break;case ce.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${We.joinValues(e.options)}`;break;case ce.invalid_enum_value:r=`Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;break;case ce.invalid_arguments:r="Invalid function arguments";break;case ce.invalid_return_type:r="Invalid function return type";break;case ce.invalid_date:r="Invalid date";break;case ce.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:We.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case ce.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:r="Invalid input";break;case ce.too_big:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?r=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:r="Invalid input";break;case ce.custom:r="Invalid input";break;case ce.invalid_intersection_types:r="Intersection results could not be merged";break;case ce.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case ce.not_finite:r="Number must be finite";break;default:r=n.defaultError,We.assertNever(e)}return{message:r}};let D5=jp;function L5(){return D5}const j5=e=>{const{data:n,path:r,errorMaps:i,issueData:s}=e,c=[...r,...s.path||[]],u={...s,path:c};if(s.message!==void 0)return{...s,path:c,message:s.message};let f="";const h=i.filter(p=>!!p).slice().reverse();for(const p of h)f=p(u,{data:n,defaultError:f}).message;return{...s,path:c,message:f}};function pe(e,n){const r=L5(),i=j5({issueData:n,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===jp?void 0:jp].filter(s=>!!s)});e.common.issues.push(i)}class zn{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(n,r){const i=[];for(const s of r){if(s.status==="aborted")return Ne;s.status==="dirty"&&n.dirty(),i.push(s.value)}return{status:n.value,value:i}}static async mergeObjectAsync(n,r){const i=[];for(const s of r){const c=await s.key,u=await s.value;i.push({key:c,value:u})}return zn.mergeObjectSync(n,i)}static mergeObjectSync(n,r){const i={};for(const s of r){const{key:c,value:u}=s;if(c.status==="aborted"||u.status==="aborted")return Ne;c.status==="dirty"&&n.dirty(),u.status==="dirty"&&n.dirty(),c.value!=="__proto__"&&(typeof u.value<"u"||s.alwaysSet)&&(i[c.value]=u.value)}return{status:n.value,value:i}}}const Ne=Object.freeze({status:"aborted"}),Gs=e=>({status:"dirty",value:e}),Qn=e=>({status:"valid",value:e}),vw=e=>e.status==="aborted",yw=e=>e.status==="dirty",Mo=e=>e.status==="valid",Mu=e=>typeof Promise<"u"&&e instanceof Promise;var _e;(function(e){e.errToObj=n=>typeof n=="string"?{message:n}:n||{},e.toString=n=>typeof n=="string"?n:n?.message})(_e||(_e={}));class za{constructor(n,r,i,s){this._cachedPath=[],this.parent=n,this.data=r,this._path=i,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const bw=(e,n)=>{if(Mo(n))return{success:!0,data:n.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new Zr(e.common.issues);return this._error=r,this._error}}};function Pe(e){if(!e)return{};const{errorMap:n,invalid_type_error:r,required_error:i,description:s}=e;if(n&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return n?{errorMap:n,description:s}:{errorMap:(u,f)=>{const{message:h}=e;return u.code==="invalid_enum_value"?{message:h??f.defaultError}:typeof f.data>"u"?{message:h??i??f.defaultError}:u.code!=="invalid_type"?{message:f.defaultError}:{message:h??r??f.defaultError}},description:s}}class Ge{get description(){return this._def.description}_getType(n){return Ta(n.data)}_getOrReturnCtx(n,r){return r||{common:n.parent.common,data:n.data,parsedType:Ta(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}_processInputParams(n){return{status:new zn,ctx:{common:n.parent.common,data:n.data,parsedType:Ta(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}}_parseSync(n){const r=this._parse(n);if(Mu(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(n){const r=this._parse(n);return Promise.resolve(r)}parse(n,r){const i=this.safeParse(n,r);if(i.success)return i.data;throw i.error}safeParse(n,r){const i={common:{issues:[],async:r?.async??!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Ta(n)},s=this._parseSync({data:n,path:i.path,parent:i});return bw(i,s)}"~validate"(n){const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Ta(n)};if(!this["~standard"].async)try{const i=this._parseSync({data:n,path:[],parent:r});return Mo(i)?{value:i.value}:{issues:r.common.issues}}catch(i){i?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:n,path:[],parent:r}).then(i=>Mo(i)?{value:i.value}:{issues:r.common.issues})}async parseAsync(n,r){const i=await this.safeParseAsync(n,r);if(i.success)return i.data;throw i.error}async safeParseAsync(n,r){const i={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:Ta(n)},s=this._parse({data:n,path:i.path,parent:i}),c=await(Mu(s)?s:Promise.resolve(s));return bw(i,c)}refine(n,r){const i=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,c)=>{const u=n(s),f=()=>c.addIssue({code:ce.custom,...i(s)});return typeof Promise<"u"&&u instanceof Promise?u.then(h=>h?!0:(f(),!1)):u?!0:(f(),!1)})}refinement(n,r){return this._refinement((i,s)=>n(i)?!0:(s.addIssue(typeof r=="function"?r(i,s):r),!1))}_refinement(n){return new Do({schema:this,typeName:Ae.ZodEffects,effect:{type:"refinement",refinement:n}})}superRefine(n){return this._refinement(n)}constructor(n){this.spa=this.safeParseAsync,this._def=n,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return Aa.create(this,this._def)}nullable(){return Lo.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return kr.create(this)}promise(){return ju.create(this,this._def)}or(n){return Du.create([this,n],this._def)}and(n){return Lu.create(this,n,this._def)}transform(n){return new Do({...Pe(this._def),schema:this,typeName:Ae.ZodEffects,effect:{type:"transform",transform:n}})}default(n){const r=typeof n=="function"?n:()=>n;return new Hp({...Pe(this._def),innerType:this,defaultValue:r,typeName:Ae.ZodDefault})}brand(){return new i3({typeName:Ae.ZodBranded,type:this,...Pe(this._def)})}catch(n){const r=typeof n=="function"?n:()=>n;return new Bp({...Pe(this._def),innerType:this,catchValue:r,typeName:Ae.ZodCatch})}describe(n){const r=this.constructor;return new r({...this._def,description:n})}pipe(n){return Rm.create(this,n)}readonly(){return Fp.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const U5=/^c[^\s-]{8,}$/i,H5=/^[0-9a-z]+$/,B5=/^[0-9A-HJKMNP-TV-Z]{26}$/i,F5=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,P5=/^[a-z0-9_-]{21}$/i,$5=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,I5=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,V5=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,q5="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Kh;const Y5=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,X5=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,G5=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Z5=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Q5=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,W5=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,A1="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",K5=new RegExp(`^${A1}$`);function O1(e){let n="[0-5]\\d";e.precision?n=`${n}\\.\\d{${e.precision}}`:e.precision==null&&(n=`${n}(\\.\\d+)?`);const r=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${n})${r}`}function J5(e){return new RegExp(`^${O1(e)}$`)}function e3(e){let n=`${A1}T${O1(e)}`;const r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),n=`${n}(${r.join("|")})`,new RegExp(`^${n}$`)}function t3(e,n){return!!((n==="v4"||!n)&&Y5.test(e)||(n==="v6"||!n)&&G5.test(e))}function n3(e,n){if(!$5.test(e))return!1;try{const[r]=e.split("."),i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),s=JSON.parse(atob(i));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||n&&s.alg!==n)}catch{return!1}}function r3(e,n){return!!((n==="v4"||!n)&&X5.test(e)||(n==="v6"||!n)&&Z5.test(e))}class Ca extends Ge{_parse(n){if(this._def.coerce&&(n.data=String(n.data)),this._getType(n)!==xe.string){const c=this._getOrReturnCtx(n);return pe(c,{code:ce.invalid_type,expected:xe.string,received:c.parsedType}),Ne}const i=new zn;let s;for(const c of this._def.checks)if(c.kind==="min")n.data.length<c.value&&(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),i.dirty());else if(c.kind==="max")n.data.length>c.value&&(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),i.dirty());else if(c.kind==="length"){const u=n.data.length>c.value,f=n.data.length<c.value;(u||f)&&(s=this._getOrReturnCtx(n,s),u?pe(s,{code:ce.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}):f&&pe(s,{code:ce.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}),i.dirty())}else if(c.kind==="email")V5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"email",code:ce.invalid_string,message:c.message}),i.dirty());else if(c.kind==="emoji")Kh||(Kh=new RegExp(q5,"u")),Kh.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"emoji",code:ce.invalid_string,message:c.message}),i.dirty());else if(c.kind==="uuid")F5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"uuid",code:ce.invalid_string,message:c.message}),i.dirty());else if(c.kind==="nanoid")P5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"nanoid",code:ce.invalid_string,message:c.message}),i.dirty());else if(c.kind==="cuid")U5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"cuid",code:ce.invalid_string,message:c.message}),i.dirty());else if(c.kind==="cuid2")H5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"cuid2",code:ce.invalid_string,message:c.message}),i.dirty());else if(c.kind==="ulid")B5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"ulid",code:ce.invalid_string,message:c.message}),i.dirty());else if(c.kind==="url")try{new URL(n.data)}catch{s=this._getOrReturnCtx(n,s),pe(s,{validation:"url",code:ce.invalid_string,message:c.message}),i.dirty()}else c.kind==="regex"?(c.regex.lastIndex=0,c.regex.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"regex",code:ce.invalid_string,message:c.message}),i.dirty())):c.kind==="trim"?n.data=n.data.trim():c.kind==="includes"?n.data.includes(c.value,c.position)||(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.invalid_string,validation:{includes:c.value,position:c.position},message:c.message}),i.dirty()):c.kind==="toLowerCase"?n.data=n.data.toLowerCase():c.kind==="toUpperCase"?n.data=n.data.toUpperCase():c.kind==="startsWith"?n.data.startsWith(c.value)||(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.invalid_string,validation:{startsWith:c.value},message:c.message}),i.dirty()):c.kind==="endsWith"?n.data.endsWith(c.value)||(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.invalid_string,validation:{endsWith:c.value},message:c.message}),i.dirty()):c.kind==="datetime"?e3(c).test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.invalid_string,validation:"datetime",message:c.message}),i.dirty()):c.kind==="date"?K5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.invalid_string,validation:"date",message:c.message}),i.dirty()):c.kind==="time"?J5(c).test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.invalid_string,validation:"time",message:c.message}),i.dirty()):c.kind==="duration"?I5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"duration",code:ce.invalid_string,message:c.message}),i.dirty()):c.kind==="ip"?t3(n.data,c.version)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"ip",code:ce.invalid_string,message:c.message}),i.dirty()):c.kind==="jwt"?n3(n.data,c.alg)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"jwt",code:ce.invalid_string,message:c.message}),i.dirty()):c.kind==="cidr"?r3(n.data,c.version)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"cidr",code:ce.invalid_string,message:c.message}),i.dirty()):c.kind==="base64"?Q5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"base64",code:ce.invalid_string,message:c.message}),i.dirty()):c.kind==="base64url"?W5.test(n.data)||(s=this._getOrReturnCtx(n,s),pe(s,{validation:"base64url",code:ce.invalid_string,message:c.message}),i.dirty()):We.assertNever(c);return{status:i.value,value:n.data}}_regex(n,r,i){return this.refinement(s=>n.test(s),{validation:r,code:ce.invalid_string,..._e.errToObj(i)})}_addCheck(n){return new Ca({...this._def,checks:[...this._def.checks,n]})}email(n){return this._addCheck({kind:"email",..._e.errToObj(n)})}url(n){return this._addCheck({kind:"url",..._e.errToObj(n)})}emoji(n){return this._addCheck({kind:"emoji",..._e.errToObj(n)})}uuid(n){return this._addCheck({kind:"uuid",..._e.errToObj(n)})}nanoid(n){return this._addCheck({kind:"nanoid",..._e.errToObj(n)})}cuid(n){return this._addCheck({kind:"cuid",..._e.errToObj(n)})}cuid2(n){return this._addCheck({kind:"cuid2",..._e.errToObj(n)})}ulid(n){return this._addCheck({kind:"ulid",..._e.errToObj(n)})}base64(n){return this._addCheck({kind:"base64",..._e.errToObj(n)})}base64url(n){return this._addCheck({kind:"base64url",..._e.errToObj(n)})}jwt(n){return this._addCheck({kind:"jwt",..._e.errToObj(n)})}ip(n){return this._addCheck({kind:"ip",..._e.errToObj(n)})}cidr(n){return this._addCheck({kind:"cidr",..._e.errToObj(n)})}datetime(n){return typeof n=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:n}):this._addCheck({kind:"datetime",precision:typeof n?.precision>"u"?null:n?.precision,offset:n?.offset??!1,local:n?.local??!1,..._e.errToObj(n?.message)})}date(n){return this._addCheck({kind:"date",message:n})}time(n){return typeof n=="string"?this._addCheck({kind:"time",precision:null,message:n}):this._addCheck({kind:"time",precision:typeof n?.precision>"u"?null:n?.precision,..._e.errToObj(n?.message)})}duration(n){return this._addCheck({kind:"duration",..._e.errToObj(n)})}regex(n,r){return this._addCheck({kind:"regex",regex:n,..._e.errToObj(r)})}includes(n,r){return this._addCheck({kind:"includes",value:n,position:r?.position,..._e.errToObj(r?.message)})}startsWith(n,r){return this._addCheck({kind:"startsWith",value:n,..._e.errToObj(r)})}endsWith(n,r){return this._addCheck({kind:"endsWith",value:n,..._e.errToObj(r)})}min(n,r){return this._addCheck({kind:"min",value:n,..._e.errToObj(r)})}max(n,r){return this._addCheck({kind:"max",value:n,..._e.errToObj(r)})}length(n,r){return this._addCheck({kind:"length",value:n,..._e.errToObj(r)})}nonempty(n){return this.min(1,_e.errToObj(n))}trim(){return new Ca({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ca({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ca({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(n=>n.kind==="datetime")}get isDate(){return!!this._def.checks.find(n=>n.kind==="date")}get isTime(){return!!this._def.checks.find(n=>n.kind==="time")}get isDuration(){return!!this._def.checks.find(n=>n.kind==="duration")}get isEmail(){return!!this._def.checks.find(n=>n.kind==="email")}get isURL(){return!!this._def.checks.find(n=>n.kind==="url")}get isEmoji(){return!!this._def.checks.find(n=>n.kind==="emoji")}get isUUID(){return!!this._def.checks.find(n=>n.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(n=>n.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(n=>n.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(n=>n.kind==="cuid2")}get isULID(){return!!this._def.checks.find(n=>n.kind==="ulid")}get isIP(){return!!this._def.checks.find(n=>n.kind==="ip")}get isCIDR(){return!!this._def.checks.find(n=>n.kind==="cidr")}get isBase64(){return!!this._def.checks.find(n=>n.kind==="base64")}get isBase64url(){return!!this._def.checks.find(n=>n.kind==="base64url")}get minLength(){let n=null;for(const r of this._def.checks)r.kind==="min"&&(n===null||r.value>n)&&(n=r.value);return n}get maxLength(){let n=null;for(const r of this._def.checks)r.kind==="max"&&(n===null||r.value<n)&&(n=r.value);return n}}Ca.create=e=>new Ca({checks:[],typeName:Ae.ZodString,coerce:e?.coerce??!1,...Pe(e)});function a3(e,n){const r=(e.toString().split(".")[1]||"").length,i=(n.toString().split(".")[1]||"").length,s=r>i?r:i,c=Number.parseInt(e.toFixed(s).replace(".","")),u=Number.parseInt(n.toFixed(s).replace(".",""));return c%u/10**s}class fl extends Ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(n){if(this._def.coerce&&(n.data=Number(n.data)),this._getType(n)!==xe.number){const c=this._getOrReturnCtx(n);return pe(c,{code:ce.invalid_type,expected:xe.number,received:c.parsedType}),Ne}let i;const s=new zn;for(const c of this._def.checks)c.kind==="int"?We.isInteger(n.data)||(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.invalid_type,expected:"integer",received:"float",message:c.message}),s.dirty()):c.kind==="min"?(c.inclusive?n.data<c.value:n.data<=c.value)&&(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.too_small,minimum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),s.dirty()):c.kind==="max"?(c.inclusive?n.data>c.value:n.data>=c.value)&&(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.too_big,maximum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),s.dirty()):c.kind==="multipleOf"?a3(n.data,c.value)!==0&&(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.not_multiple_of,multipleOf:c.value,message:c.message}),s.dirty()):c.kind==="finite"?Number.isFinite(n.data)||(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.not_finite,message:c.message}),s.dirty()):We.assertNever(c);return{status:s.value,value:n.data}}gte(n,r){return this.setLimit("min",n,!0,_e.toString(r))}gt(n,r){return this.setLimit("min",n,!1,_e.toString(r))}lte(n,r){return this.setLimit("max",n,!0,_e.toString(r))}lt(n,r){return this.setLimit("max",n,!1,_e.toString(r))}setLimit(n,r,i,s){return new fl({...this._def,checks:[...this._def.checks,{kind:n,value:r,inclusive:i,message:_e.toString(s)}]})}_addCheck(n){return new fl({...this._def,checks:[...this._def.checks,n]})}int(n){return this._addCheck({kind:"int",message:_e.toString(n)})}positive(n){return this._addCheck({kind:"min",value:0,inclusive:!1,message:_e.toString(n)})}negative(n){return this._addCheck({kind:"max",value:0,inclusive:!1,message:_e.toString(n)})}nonpositive(n){return this._addCheck({kind:"max",value:0,inclusive:!0,message:_e.toString(n)})}nonnegative(n){return this._addCheck({kind:"min",value:0,inclusive:!0,message:_e.toString(n)})}multipleOf(n,r){return this._addCheck({kind:"multipleOf",value:n,message:_e.toString(r)})}finite(n){return this._addCheck({kind:"finite",message:_e.toString(n)})}safe(n){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:_e.toString(n)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:_e.toString(n)})}get minValue(){let n=null;for(const r of this._def.checks)r.kind==="min"&&(n===null||r.value>n)&&(n=r.value);return n}get maxValue(){let n=null;for(const r of this._def.checks)r.kind==="max"&&(n===null||r.value<n)&&(n=r.value);return n}get isInt(){return!!this._def.checks.find(n=>n.kind==="int"||n.kind==="multipleOf"&&We.isInteger(n.value))}get isFinite(){let n=null,r=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(n===null||i.value<n)&&(n=i.value)}return Number.isFinite(r)&&Number.isFinite(n)}}fl.create=e=>new fl({checks:[],typeName:Ae.ZodNumber,coerce:e?.coerce||!1,...Pe(e)});class hl extends Ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(n){if(this._def.coerce)try{n.data=BigInt(n.data)}catch{return this._getInvalidInput(n)}if(this._getType(n)!==xe.bigint)return this._getInvalidInput(n);let i;const s=new zn;for(const c of this._def.checks)c.kind==="min"?(c.inclusive?n.data<c.value:n.data<=c.value)&&(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.too_small,type:"bigint",minimum:c.value,inclusive:c.inclusive,message:c.message}),s.dirty()):c.kind==="max"?(c.inclusive?n.data>c.value:n.data>=c.value)&&(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.too_big,type:"bigint",maximum:c.value,inclusive:c.inclusive,message:c.message}),s.dirty()):c.kind==="multipleOf"?n.data%c.value!==BigInt(0)&&(i=this._getOrReturnCtx(n,i),pe(i,{code:ce.not_multiple_of,multipleOf:c.value,message:c.message}),s.dirty()):We.assertNever(c);return{status:s.value,value:n.data}}_getInvalidInput(n){const r=this._getOrReturnCtx(n);return pe(r,{code:ce.invalid_type,expected:xe.bigint,received:r.parsedType}),Ne}gte(n,r){return this.setLimit("min",n,!0,_e.toString(r))}gt(n,r){return this.setLimit("min",n,!1,_e.toString(r))}lte(n,r){return this.setLimit("max",n,!0,_e.toString(r))}lt(n,r){return this.setLimit("max",n,!1,_e.toString(r))}setLimit(n,r,i,s){return new hl({...this._def,checks:[...this._def.checks,{kind:n,value:r,inclusive:i,message:_e.toString(s)}]})}_addCheck(n){return new hl({...this._def,checks:[...this._def.checks,n]})}positive(n){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:_e.toString(n)})}negative(n){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:_e.toString(n)})}nonpositive(n){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:_e.toString(n)})}nonnegative(n){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:_e.toString(n)})}multipleOf(n,r){return this._addCheck({kind:"multipleOf",value:n,message:_e.toString(r)})}get minValue(){let n=null;for(const r of this._def.checks)r.kind==="min"&&(n===null||r.value>n)&&(n=r.value);return n}get maxValue(){let n=null;for(const r of this._def.checks)r.kind==="max"&&(n===null||r.value<n)&&(n=r.value);return n}}hl.create=e=>new hl({checks:[],typeName:Ae.ZodBigInt,coerce:e?.coerce??!1,...Pe(e)});class ww extends Ge{_parse(n){if(this._def.coerce&&(n.data=!!n.data),this._getType(n)!==xe.boolean){const i=this._getOrReturnCtx(n);return pe(i,{code:ce.invalid_type,expected:xe.boolean,received:i.parsedType}),Ne}return Qn(n.data)}}ww.create=e=>new ww({typeName:Ae.ZodBoolean,coerce:e?.coerce||!1,...Pe(e)});class zu extends Ge{_parse(n){if(this._def.coerce&&(n.data=new Date(n.data)),this._getType(n)!==xe.date){const c=this._getOrReturnCtx(n);return pe(c,{code:ce.invalid_type,expected:xe.date,received:c.parsedType}),Ne}if(Number.isNaN(n.data.getTime())){const c=this._getOrReturnCtx(n);return pe(c,{code:ce.invalid_date}),Ne}const i=new zn;let s;for(const c of this._def.checks)c.kind==="min"?n.data.getTime()<c.value&&(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.too_small,message:c.message,inclusive:!0,exact:!1,minimum:c.value,type:"date"}),i.dirty()):c.kind==="max"?n.data.getTime()>c.value&&(s=this._getOrReturnCtx(n,s),pe(s,{code:ce.too_big,message:c.message,inclusive:!0,exact:!1,maximum:c.value,type:"date"}),i.dirty()):We.assertNever(c);return{status:i.value,value:new Date(n.data.getTime())}}_addCheck(n){return new zu({...this._def,checks:[...this._def.checks,n]})}min(n,r){return this._addCheck({kind:"min",value:n.getTime(),message:_e.toString(r)})}max(n,r){return this._addCheck({kind:"max",value:n.getTime(),message:_e.toString(r)})}get minDate(){let n=null;for(const r of this._def.checks)r.kind==="min"&&(n===null||r.value>n)&&(n=r.value);return n!=null?new Date(n):null}get maxDate(){let n=null;for(const r of this._def.checks)r.kind==="max"&&(n===null||r.value<n)&&(n=r.value);return n!=null?new Date(n):null}}zu.create=e=>new zu({checks:[],coerce:e?.coerce||!1,typeName:Ae.ZodDate,...Pe(e)});class xw extends Ge{_parse(n){if(this._getType(n)!==xe.symbol){const i=this._getOrReturnCtx(n);return pe(i,{code:ce.invalid_type,expected:xe.symbol,received:i.parsedType}),Ne}return Qn(n.data)}}xw.create=e=>new xw({typeName:Ae.ZodSymbol,...Pe(e)});class _w extends Ge{_parse(n){if(this._getType(n)!==xe.undefined){const i=this._getOrReturnCtx(n);return pe(i,{code:ce.invalid_type,expected:xe.undefined,received:i.parsedType}),Ne}return Qn(n.data)}}_w.create=e=>new _w({typeName:Ae.ZodUndefined,...Pe(e)});class Sw extends Ge{_parse(n){if(this._getType(n)!==xe.null){const i=this._getOrReturnCtx(n);return pe(i,{code:ce.invalid_type,expected:xe.null,received:i.parsedType}),Ne}return Qn(n.data)}}Sw.create=e=>new Sw({typeName:Ae.ZodNull,...Pe(e)});class kw extends Ge{constructor(){super(...arguments),this._any=!0}_parse(n){return Qn(n.data)}}kw.create=e=>new kw({typeName:Ae.ZodAny,...Pe(e)});class Tw extends Ge{constructor(){super(...arguments),this._unknown=!0}_parse(n){return Qn(n.data)}}Tw.create=e=>new Tw({typeName:Ae.ZodUnknown,...Pe(e)});class Da extends Ge{_parse(n){const r=this._getOrReturnCtx(n);return pe(r,{code:ce.invalid_type,expected:xe.never,received:r.parsedType}),Ne}}Da.create=e=>new Da({typeName:Ae.ZodNever,...Pe(e)});class Ew extends Ge{_parse(n){if(this._getType(n)!==xe.undefined){const i=this._getOrReturnCtx(n);return pe(i,{code:ce.invalid_type,expected:xe.void,received:i.parsedType}),Ne}return Qn(n.data)}}Ew.create=e=>new Ew({typeName:Ae.ZodVoid,...Pe(e)});class kr extends Ge{_parse(n){const{ctx:r,status:i}=this._processInputParams(n),s=this._def;if(r.parsedType!==xe.array)return pe(r,{code:ce.invalid_type,expected:xe.array,received:r.parsedType}),Ne;if(s.exactLength!==null){const u=r.data.length>s.exactLength.value,f=r.data.length<s.exactLength.value;(u||f)&&(pe(r,{code:u?ce.too_big:ce.too_small,minimum:f?s.exactLength.value:void 0,maximum:u?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),i.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(pe(r,{code:ce.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),i.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(pe(r,{code:ce.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((u,f)=>s.type._parseAsync(new za(r,u,r.path,f)))).then(u=>zn.mergeArray(i,u));const c=[...r.data].map((u,f)=>s.type._parseSync(new za(r,u,r.path,f)));return zn.mergeArray(i,c)}get element(){return this._def.type}min(n,r){return new kr({...this._def,minLength:{value:n,message:_e.toString(r)}})}max(n,r){return new kr({...this._def,maxLength:{value:n,message:_e.toString(r)}})}length(n,r){return new kr({...this._def,exactLength:{value:n,message:_e.toString(r)}})}nonempty(n){return this.min(1,n)}}kr.create=(e,n)=>new kr({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Ae.ZodArray,...Pe(n)});function yo(e){if(e instanceof zt){const n={};for(const r in e.shape){const i=e.shape[r];n[r]=Aa.create(yo(i))}return new zt({...e._def,shape:()=>n})}else return e instanceof kr?new kr({...e._def,type:yo(e.element)}):e instanceof Aa?Aa.create(yo(e.unwrap())):e instanceof Lo?Lo.create(yo(e.unwrap())):e instanceof yi?yi.create(e.items.map(n=>yo(n))):e}class zt extends Ge{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const n=this._def.shape(),r=We.objectKeys(n);return this._cached={shape:n,keys:r},this._cached}_parse(n){if(this._getType(n)!==xe.object){const p=this._getOrReturnCtx(n);return pe(p,{code:ce.invalid_type,expected:xe.object,received:p.parsedType}),Ne}const{status:i,ctx:s}=this._processInputParams(n),{shape:c,keys:u}=this._getCached(),f=[];if(!(this._def.catchall instanceof Da&&this._def.unknownKeys==="strip"))for(const p in s.data)u.includes(p)||f.push(p);const h=[];for(const p of u){const y=c[p],m=s.data[p];h.push({key:{status:"valid",value:p},value:y._parse(new za(s,m,s.path,p)),alwaysSet:p in s.data})}if(this._def.catchall instanceof Da){const p=this._def.unknownKeys;if(p==="passthrough")for(const y of f)h.push({key:{status:"valid",value:y},value:{status:"valid",value:s.data[y]}});else if(p==="strict")f.length>0&&(pe(s,{code:ce.unrecognized_keys,keys:f}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const y of f){const m=s.data[y];h.push({key:{status:"valid",value:y},value:p._parse(new za(s,m,s.path,y)),alwaysSet:y in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const p=[];for(const y of h){const m=await y.key,b=await y.value;p.push({key:m,value:b,alwaysSet:y.alwaysSet})}return p}).then(p=>zn.mergeObjectSync(i,p)):zn.mergeObjectSync(i,h)}get shape(){return this._def.shape()}strict(n){return _e.errToObj,new zt({...this._def,unknownKeys:"strict",...n!==void 0?{errorMap:(r,i)=>{const s=this._def.errorMap?.(r,i).message??i.defaultError;return r.code==="unrecognized_keys"?{message:_e.errToObj(n).message??s}:{message:s}}}:{}})}strip(){return new zt({...this._def,unknownKeys:"strip"})}passthrough(){return new zt({...this._def,unknownKeys:"passthrough"})}extend(n){return new zt({...this._def,shape:()=>({...this._def.shape(),...n})})}merge(n){return new zt({unknownKeys:n._def.unknownKeys,catchall:n._def.catchall,shape:()=>({...this._def.shape(),...n._def.shape()}),typeName:Ae.ZodObject})}setKey(n,r){return this.augment({[n]:r})}catchall(n){return new zt({...this._def,catchall:n})}pick(n){const r={};for(const i of We.objectKeys(n))n[i]&&this.shape[i]&&(r[i]=this.shape[i]);return new zt({...this._def,shape:()=>r})}omit(n){const r={};for(const i of We.objectKeys(this.shape))n[i]||(r[i]=this.shape[i]);return new zt({...this._def,shape:()=>r})}deepPartial(){return yo(this)}partial(n){const r={};for(const i of We.objectKeys(this.shape)){const s=this.shape[i];n&&!n[i]?r[i]=s:r[i]=s.optional()}return new zt({...this._def,shape:()=>r})}required(n){const r={};for(const i of We.objectKeys(this.shape))if(n&&!n[i])r[i]=this.shape[i];else{let c=this.shape[i];for(;c instanceof Aa;)c=c._def.innerType;r[i]=c}return new zt({...this._def,shape:()=>r})}keyof(){return M1(We.objectKeys(this.shape))}}zt.create=(e,n)=>new zt({shape:()=>e,unknownKeys:"strip",catchall:Da.create(),typeName:Ae.ZodObject,...Pe(n)});zt.strictCreate=(e,n)=>new zt({shape:()=>e,unknownKeys:"strict",catchall:Da.create(),typeName:Ae.ZodObject,...Pe(n)});zt.lazycreate=(e,n)=>new zt({shape:e,unknownKeys:"strip",catchall:Da.create(),typeName:Ae.ZodObject,...Pe(n)});class Du extends Ge{_parse(n){const{ctx:r}=this._processInputParams(n),i=this._def.options;function s(c){for(const f of c)if(f.result.status==="valid")return f.result;for(const f of c)if(f.result.status==="dirty")return r.common.issues.push(...f.ctx.common.issues),f.result;const u=c.map(f=>new Zr(f.ctx.common.issues));return pe(r,{code:ce.invalid_union,unionErrors:u}),Ne}if(r.common.async)return Promise.all(i.map(async c=>{const u={...r,common:{...r.common,issues:[]},parent:null};return{result:await c._parseAsync({data:r.data,path:r.path,parent:u}),ctx:u}})).then(s);{let c;const u=[];for(const h of i){const p={...r,common:{...r.common,issues:[]},parent:null},y=h._parseSync({data:r.data,path:r.path,parent:p});if(y.status==="valid")return y;y.status==="dirty"&&!c&&(c={result:y,ctx:p}),p.common.issues.length&&u.push(p.common.issues)}if(c)return r.common.issues.push(...c.ctx.common.issues),c.result;const f=u.map(h=>new Zr(h));return pe(r,{code:ce.invalid_union,unionErrors:f}),Ne}}get options(){return this._def.options}}Du.create=(e,n)=>new Du({options:e,typeName:Ae.ZodUnion,...Pe(n)});function Up(e,n){const r=Ta(e),i=Ta(n);if(e===n)return{valid:!0,data:e};if(r===xe.object&&i===xe.object){const s=We.objectKeys(n),c=We.objectKeys(e).filter(f=>s.indexOf(f)!==-1),u={...e,...n};for(const f of c){const h=Up(e[f],n[f]);if(!h.valid)return{valid:!1};u[f]=h.data}return{valid:!0,data:u}}else if(r===xe.array&&i===xe.array){if(e.length!==n.length)return{valid:!1};const s=[];for(let c=0;c<e.length;c++){const u=e[c],f=n[c],h=Up(u,f);if(!h.valid)return{valid:!1};s.push(h.data)}return{valid:!0,data:s}}else return r===xe.date&&i===xe.date&&+e==+n?{valid:!0,data:e}:{valid:!1}}class Lu extends Ge{_parse(n){const{status:r,ctx:i}=this._processInputParams(n),s=(c,u)=>{if(vw(c)||vw(u))return Ne;const f=Up(c.value,u.value);return f.valid?((yw(c)||yw(u))&&r.dirty(),{status:r.value,value:f.data}):(pe(i,{code:ce.invalid_intersection_types}),Ne)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([c,u])=>s(c,u)):s(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Lu.create=(e,n,r)=>new Lu({left:e,right:n,typeName:Ae.ZodIntersection,...Pe(r)});class yi extends Ge{_parse(n){const{status:r,ctx:i}=this._processInputParams(n);if(i.parsedType!==xe.array)return pe(i,{code:ce.invalid_type,expected:xe.array,received:i.parsedType}),Ne;if(i.data.length<this._def.items.length)return pe(i,{code:ce.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ne;!this._def.rest&&i.data.length>this._def.items.length&&(pe(i,{code:ce.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const c=[...i.data].map((u,f)=>{const h=this._def.items[f]||this._def.rest;return h?h._parse(new za(i,u,i.path,f)):null}).filter(u=>!!u);return i.common.async?Promise.all(c).then(u=>zn.mergeArray(r,u)):zn.mergeArray(r,c)}get items(){return this._def.items}rest(n){return new yi({...this._def,rest:n})}}yi.create=(e,n)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new yi({items:e,typeName:Ae.ZodTuple,rest:null,...Pe(n)})};class Cw extends Ge{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(n){const{status:r,ctx:i}=this._processInputParams(n);if(i.parsedType!==xe.map)return pe(i,{code:ce.invalid_type,expected:xe.map,received:i.parsedType}),Ne;const s=this._def.keyType,c=this._def.valueType,u=[...i.data.entries()].map(([f,h],p)=>({key:s._parse(new za(i,f,i.path,[p,"key"])),value:c._parse(new za(i,h,i.path,[p,"value"]))}));if(i.common.async){const f=new Map;return Promise.resolve().then(async()=>{for(const h of u){const p=await h.key,y=await h.value;if(p.status==="aborted"||y.status==="aborted")return Ne;(p.status==="dirty"||y.status==="dirty")&&r.dirty(),f.set(p.value,y.value)}return{status:r.value,value:f}})}else{const f=new Map;for(const h of u){const p=h.key,y=h.value;if(p.status==="aborted"||y.status==="aborted")return Ne;(p.status==="dirty"||y.status==="dirty")&&r.dirty(),f.set(p.value,y.value)}return{status:r.value,value:f}}}}Cw.create=(e,n,r)=>new Cw({valueType:n,keyType:e,typeName:Ae.ZodMap,...Pe(r)});class pl extends Ge{_parse(n){const{status:r,ctx:i}=this._processInputParams(n);if(i.parsedType!==xe.set)return pe(i,{code:ce.invalid_type,expected:xe.set,received:i.parsedType}),Ne;const s=this._def;s.minSize!==null&&i.data.size<s.minSize.value&&(pe(i,{code:ce.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&i.data.size>s.maxSize.value&&(pe(i,{code:ce.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());const c=this._def.valueType;function u(h){const p=new Set;for(const y of h){if(y.status==="aborted")return Ne;y.status==="dirty"&&r.dirty(),p.add(y.value)}return{status:r.value,value:p}}const f=[...i.data.values()].map((h,p)=>c._parse(new za(i,h,i.path,p)));return i.common.async?Promise.all(f).then(h=>u(h)):u(f)}min(n,r){return new pl({...this._def,minSize:{value:n,message:_e.toString(r)}})}max(n,r){return new pl({...this._def,maxSize:{value:n,message:_e.toString(r)}})}size(n,r){return this.min(n,r).max(n,r)}nonempty(n){return this.min(1,n)}}pl.create=(e,n)=>new pl({valueType:e,minSize:null,maxSize:null,typeName:Ae.ZodSet,...Pe(n)});class Rw extends Ge{get schema(){return this._def.getter()}_parse(n){const{ctx:r}=this._processInputParams(n);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}Rw.create=(e,n)=>new Rw({getter:e,typeName:Ae.ZodLazy,...Pe(n)});class Nw extends Ge{_parse(n){if(n.data!==this._def.value){const r=this._getOrReturnCtx(n);return pe(r,{received:r.data,code:ce.invalid_literal,expected:this._def.value}),Ne}return{status:"valid",value:n.data}}get value(){return this._def.value}}Nw.create=(e,n)=>new Nw({value:e,typeName:Ae.ZodLiteral,...Pe(n)});function M1(e,n){return new zo({values:e,typeName:Ae.ZodEnum,...Pe(n)})}class zo extends Ge{_parse(n){if(typeof n.data!="string"){const r=this._getOrReturnCtx(n),i=this._def.values;return pe(r,{expected:We.joinValues(i),received:r.parsedType,code:ce.invalid_type}),Ne}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(n.data)){const r=this._getOrReturnCtx(n),i=this._def.values;return pe(r,{received:r.data,code:ce.invalid_enum_value,options:i}),Ne}return Qn(n.data)}get options(){return this._def.values}get enum(){const n={};for(const r of this._def.values)n[r]=r;return n}get Values(){const n={};for(const r of this._def.values)n[r]=r;return n}get Enum(){const n={};for(const r of this._def.values)n[r]=r;return n}extract(n,r=this._def){return zo.create(n,{...this._def,...r})}exclude(n,r=this._def){return zo.create(this.options.filter(i=>!n.includes(i)),{...this._def,...r})}}zo.create=M1;class Aw extends Ge{_parse(n){const r=We.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(n);if(i.parsedType!==xe.string&&i.parsedType!==xe.number){const s=We.objectValues(r);return pe(i,{expected:We.joinValues(s),received:i.parsedType,code:ce.invalid_type}),Ne}if(this._cache||(this._cache=new Set(We.getValidEnumValues(this._def.values))),!this._cache.has(n.data)){const s=We.objectValues(r);return pe(i,{received:i.data,code:ce.invalid_enum_value,options:s}),Ne}return Qn(n.data)}get enum(){return this._def.values}}Aw.create=(e,n)=>new Aw({values:e,typeName:Ae.ZodNativeEnum,...Pe(n)});class ju extends Ge{unwrap(){return this._def.type}_parse(n){const{ctx:r}=this._processInputParams(n);if(r.parsedType!==xe.promise&&r.common.async===!1)return pe(r,{code:ce.invalid_type,expected:xe.promise,received:r.parsedType}),Ne;const i=r.parsedType===xe.promise?r.data:Promise.resolve(r.data);return Qn(i.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}}ju.create=(e,n)=>new ju({type:e,typeName:Ae.ZodPromise,...Pe(n)});class Do extends Ge{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ae.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(n){const{status:r,ctx:i}=this._processInputParams(n),s=this._def.effect||null,c={addIssue:u=>{pe(i,u),u.fatal?r.abort():r.dirty()},get path(){return i.path}};if(c.addIssue=c.addIssue.bind(c),s.type==="preprocess"){const u=s.transform(i.data,c);if(i.common.async)return Promise.resolve(u).then(async f=>{if(r.value==="aborted")return Ne;const h=await this._def.schema._parseAsync({data:f,path:i.path,parent:i});return h.status==="aborted"?Ne:h.status==="dirty"||r.value==="dirty"?Gs(h.value):h});{if(r.value==="aborted")return Ne;const f=this._def.schema._parseSync({data:u,path:i.path,parent:i});return f.status==="aborted"?Ne:f.status==="dirty"||r.value==="dirty"?Gs(f.value):f}}if(s.type==="refinement"){const u=f=>{const h=s.refinement(f,c);if(i.common.async)return Promise.resolve(h);if(h instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return f};if(i.common.async===!1){const f=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return f.status==="aborted"?Ne:(f.status==="dirty"&&r.dirty(),u(f.value),{status:r.value,value:f.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(f=>f.status==="aborted"?Ne:(f.status==="dirty"&&r.dirty(),u(f.value).then(()=>({status:r.value,value:f.value}))))}if(s.type==="transform")if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Mo(u))return Ne;const f=s.transform(u.value,c);if(f instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:f}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>Mo(u)?Promise.resolve(s.transform(u.value,c)).then(f=>({status:r.value,value:f})):Ne);We.assertNever(s)}}Do.create=(e,n,r)=>new Do({schema:e,typeName:Ae.ZodEffects,effect:n,...Pe(r)});Do.createWithPreprocess=(e,n,r)=>new Do({schema:n,effect:{type:"preprocess",transform:e},typeName:Ae.ZodEffects,...Pe(r)});class Aa extends Ge{_parse(n){return this._getType(n)===xe.undefined?Qn(void 0):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}}Aa.create=(e,n)=>new Aa({innerType:e,typeName:Ae.ZodOptional,...Pe(n)});class Lo extends Ge{_parse(n){return this._getType(n)===xe.null?Qn(null):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}}Lo.create=(e,n)=>new Lo({innerType:e,typeName:Ae.ZodNullable,...Pe(n)});class Hp extends Ge{_parse(n){const{ctx:r}=this._processInputParams(n);let i=r.data;return r.parsedType===xe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}Hp.create=(e,n)=>new Hp({innerType:e,typeName:Ae.ZodDefault,defaultValue:typeof n.default=="function"?n.default:()=>n.default,...Pe(n)});class Bp extends Ge{_parse(n){const{ctx:r}=this._processInputParams(n),i={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Mu(s)?s.then(c=>({status:"valid",value:c.status==="valid"?c.value:this._def.catchValue({get error(){return new Zr(i.common.issues)},input:i.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Zr(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Bp.create=(e,n)=>new Bp({innerType:e,typeName:Ae.ZodCatch,catchValue:typeof n.catch=="function"?n.catch:()=>n.catch,...Pe(n)});class Ow extends Ge{_parse(n){if(this._getType(n)!==xe.nan){const i=this._getOrReturnCtx(n);return pe(i,{code:ce.invalid_type,expected:xe.nan,received:i.parsedType}),Ne}return{status:"valid",value:n.data}}}Ow.create=e=>new Ow({typeName:Ae.ZodNaN,...Pe(e)});class i3 extends Ge{_parse(n){const{ctx:r}=this._processInputParams(n),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}}class Rm extends Ge{_parse(n){const{status:r,ctx:i}=this._processInputParams(n);if(i.common.async)return(async()=>{const c=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return c.status==="aborted"?Ne:c.status==="dirty"?(r.dirty(),Gs(c.value)):this._def.out._parseAsync({data:c.value,path:i.path,parent:i})})();{const s=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?Ne:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:i.path,parent:i})}}static create(n,r){return new Rm({in:n,out:r,typeName:Ae.ZodPipeline})}}class Fp extends Ge{_parse(n){const r=this._def.innerType._parse(n),i=s=>(Mo(s)&&(s.value=Object.freeze(s.value)),s);return Mu(r)?r.then(s=>i(s)):i(r)}unwrap(){return this._def.innerType}}Fp.create=(e,n)=>new Fp({innerType:e,typeName:Ae.ZodReadonly,...Pe(n)});var Ae;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(Ae||(Ae={}));const z1=Ca.create;Da.create;kr.create;const D1=zt.create;Du.create;Lu.create;yi.create;zo.create;ju.create;Aa.create;Lo.create;const o3=e=>{const n="input"in e?e.input:"input",r="output"in e?e.output:"output",i="schema"in e?e.schema._input:e._input,s="schema"in e?e.schema._output:e._output;return{types:{input:n==="output"?s:i,output:r==="input"?i:s},parse:c=>"schema"in e?e.schema.parse(c):e.parse(c)}},s3=an("/_auth")({validateSearch:o3(D1({redirect:z1().default("/").transform(e=>decodeURIComponent(e))})),beforeLoad:async({context:e,search:n})=>{if(e.user)throw Xu({to:n.redirect,replace:!0})}}),l3=()=>un(()=>import("./index-lzJ_ZsAT.js"),__vite__mapDeps([10,1])),L1=an("/_navbar/")({component:ur(l3,"component",()=>L1.ssr)}),c3=an("/_navbar/_authed")({beforeLoad:async({context:e,location:n})=>{if(!e.user)throw Xu({to:"/login",search:{redirect:n.href}});return e}}),u3=()=>un(()=>import("./signup-RL0W0qxu.js"),__vite__mapDeps([11,2,1,12,3,9,6,7])),j1=an("/_auth/signup")({component:ur(u3,"component",()=>j1.ssr)}),d3=()=>un(()=>import("./password-reset-kO5d7GMI.js"),__vite__mapDeps([13,12,3,1,9,6,2,7])),U1=an("/_auth/password-reset")({validateSearch:D1({token:z1()}),component:ur(d3,"component",()=>U1.ssr)}),f3=()=>un(()=>import("./password-forgot-DptWxm09.js"),__vite__mapDeps([14,12,3,1,9,6,2,7])),H1=an("/_auth/password-forgot")({component:ur(f3,"component",()=>H1.ssr)}),h3=()=>un(()=>import("./login-DFHXHo9l.js"),__vite__mapDeps([15,2,1,12,3,9,6,7])),B1=an("/_auth/login")({component:ur(h3,"component",()=>B1.ssr)}),p3=()=>un(()=>import("./new-C3VPhW3C.js"),__vite__mapDeps([16,12,3,1,9,6,2,7])),F1=an("/_navbar/_authed/recipe/new")({component:ur(p3,"component",()=>F1.ssr)});async function m3(e,n,r){const i=n[0];if(Xr(i)&&i.method){const s=i,c=s.data instanceof FormData?"formData":"payload",u=new Headers({"x-tsr-redirect":"manual",...c==="payload"?{"content-type":"application/json",accept:"application/json"}:{},...s.headers instanceof Headers?Object.fromEntries(s.headers.entries()):s.headers});if(s.method==="GET"){const f=n1({payload:cn.stringify({data:s.data,context:s.context})});f&&(e.includes("?")?e+=`&${f}`:e+=`?${f}`)}return e.includes("?")?e+="&createServerFn":e+="?createServerFn",s.response==="raw"&&(e+="&raw"),await Mw(()=>r(e,{method:s.method,headers:u,signal:s.signal,...g3(s)}))}return await Mw(()=>r(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n),redirect:"manual"}))}function g3(e){return e.method==="POST"?e.data instanceof FormData?(e.data.set("__TSR_CONTEXT",cn.stringify(e.context)),{body:e.data}):{body:cn.stringify({data:e.data??null,context:e.context})}:{}}async function Mw(e){var n;const r=await(async()=>{try{return await e()}catch(i){if(i instanceof Response)return i;throw i}})();if(!r.ok){const i=r.headers.get("content-type");throw i&&i.includes("application/json")?cn.decode(await r.json()):new Error(await r.text())}if((n=r.headers.get("content-type"))!=null&&n.includes("application/json")){let i=cn.decode(await r.json());const s=QR(i);if(s&&(i=s),vn(i)||wn(i)||i instanceof Error)throw i;return i}return r}function zw(e){return e.replace(/^\/|\/$/g,"")}const Ku=(e,n)=>{const r=zw("/"),i=zw(n),s=`${r?`/${r}`:""}/${i}/${e}`;return Object.assign((...u)=>m3(s,u,fetch),{url:s,functionId:e})},Ju=Ys({type:"function"}),v3=Ku("src_api_recipes_ts--fetchRecipe_createServerFn_handler","/_serverFn"),y3=hi({method:"GET"}).middleware([Ju]).handler(v3),b3=Ku("src_api_recipes_ts--fetchRecipeTitles_createServerFn_handler","/_serverFn"),w3=hi({method:"GET"}).middleware([Ju]).handler(b3),x3=Ku("src_api_recipes_ts--createRecipe_createServerFn_handler","/_serverFn"),sO=hi({method:"POST"}).middleware([Ju]).handler(x3),_3=Ku("src_api_recipes_ts--deleteRecipe_createServerFn_handler","/_serverFn"),lO=hi({method:"POST"}).middleware([Ju]).handler(_3),S3=()=>un(()=>import("./_sidebar-CUQSjSFU.js"),__vite__mapDeps([17,1,2,7])),{logger:k3}=Sl(),P1=an("/_navbar/_authed/recipe/_sidebar")({staleTime:3e4,loader:async()=>(k3.info("Loading all recipes..."),await w3()),component:ur(S3,"component",()=>P1.ssr)}),T3=()=>un(()=>import("./index-Bu9Zfe2s.js"),__vite__mapDeps([18,2,1])),$1=an("/_navbar/_authed/recipe/_sidebar/")({component:ur(T3,"component",()=>$1.ssr)});function E3(e){return{staleTime:3e4,queryKey:C3(e),queryFn:()=>y3({data:e})}}function C3(e){return["recipeId",e]}const R3=()=>un(()=>import("./_recipeId-D89y1CYw.js"),__vite__mapDeps([19,2,1,5,6,7])),{logger:N3}=Sl(),I1=an("/_navbar/_authed/recipe/_sidebar/$recipeId")({loader:({context:e,params:{recipeId:n}})=>{N3.info("Loader recipe ",n),e.queryClient.prefetchQuery(E3(n))},component:ur(R3,"component",()=>I1.ssr)}),A3=an("/_navbar/_authed/recipe")(),O3=R1.update({id:"/sandbox",path:"/sandbox",getParentRoute:()=>Wu}),Nm=N1.update({id:"/_navbar",getParentRoute:()=>Wu}),kl=s3.update({id:"/_auth",getParentRoute:()=>Wu}),M3=L1.update({id:"/",path:"/",getParentRoute:()=>Nm}),V1=c3.update({id:"/_authed",getParentRoute:()=>Nm}),z3=j1.update({id:"/signup",path:"/signup",getParentRoute:()=>kl}),D3=U1.update({id:"/password-reset",path:"/password-reset",getParentRoute:()=>kl}),L3=H1.update({id:"/password-forgot",path:"/password-forgot",getParentRoute:()=>kl}),j3=B1.update({id:"/login",path:"/login",getParentRoute:()=>kl}),Am=A3.update({id:"/recipe",path:"/recipe",getParentRoute:()=>V1}),U3=F1.update({id:"/new",path:"/new",getParentRoute:()=>Am}),Om=P1.update({id:"/_sidebar",getParentRoute:()=>Am}),H3=$1.update({id:"/",path:"/",getParentRoute:()=>Om}),B3=I1.update({id:"/$recipeId",path:"/$recipeId",getParentRoute:()=>Om}),F3={AuthLoginRoute:j3,AuthPasswordForgotRoute:L3,AuthPasswordResetRoute:D3,AuthSignupRoute:z3},P3=kl._addFileChildren(F3),$3={NavbarAuthedRecipeSidebarRecipeIdRoute:B3,NavbarAuthedRecipeSidebarIndexRoute:H3},I3=Om._addFileChildren($3),V3={NavbarAuthedRecipeSidebarRoute:I3,NavbarAuthedRecipeNewRoute:U3},q3=Am._addFileChildren(V3),Y3={NavbarAuthedRecipeRoute:q3},X3=V1._addFileChildren(Y3),G3={NavbarAuthedRoute:X3,NavbarIndexRoute:M3},Z3=Nm._addFileChildren(G3),Q3={AuthRoute:P3,NavbarRoute:Z3,SandboxRoute:O3},W3=Wu._addFileChildren(Q3)._addFileTypes();function K3(){const e=new ON,n=K4({routeTree:W3,context:{queryClient:e},defaultPreload:"intent",defaultErrorComponent:w1,defaultNotFoundComponent:()=>se.jsx(x1,{}),scrollRestoration:!0});return HN(n,e)}dR({enabled:!0});const J3=K3();yR.hydrateRoot(document,se.jsx(sN,{router:J3}));export{On as A,Qu as B,cN as C,Co as D,uN as E,f1 as F,kN as G,hN as H,ln as I,rO as J,aO as K,ul as L,I1 as M,E3 as N,Tm as O,lO as P,eO as Q,de as R,Cp as S,o1 as a,A4 as b,N1 as c,C5 as d,Sl as e,j1 as f,U1 as g,H1 as h,oO as i,se as j,B1 as k,F1 as l,sO as m,Bb as n,D1 as o,C4 as p,P1 as q,we as r,z1 as s,iO as t,xn as u,Zu as v,yN as w,dN as x,nO as y,Mp as z};
