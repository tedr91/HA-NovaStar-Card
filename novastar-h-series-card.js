var Qt=Object.create;var et=Object.defineProperty;var Xt=Object.getOwnPropertyDescriptor;var bt=(n,t)=>(t=Symbol[n])?t:Symbol.for("Symbol."+n),j=n=>{throw TypeError(n)};var Et=(n,t,e)=>t in n?et(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var _t=(n,t)=>et(n,"name",{value:t,configurable:!0});var st=n=>[,,,Qt(n?.[bt("metadata")]??null)],Ct=["class","method","getter","setter","accessor","field","value","get","set"],H=n=>n!==void 0&&typeof n!="function"?j("Function expected"):n,Yt=(n,t,e,s,i)=>({kind:Ct[n],name:t,metadata:s,addInitializer:r=>e._?j("Already initialized"):i.push(H(r||null))}),te=(n,t)=>Et(t,bt("metadata"),n[3]),$=(n,t,e,s)=>{for(var i=0,r=n[t>>1],o=r&&r.length;i<o;i++)t&1?r[i].call(e):s=r[i].call(e,s);return s},w=(n,t,e,s,i,r)=>{var o,h,l,c,p,a=t&7,f=!!(t&8),u=!!(t&16),E=a>3?n.length+1:a?f?1:2:0,$t=Ct[a+5],yt=a>3&&(n[E-1]=[]),Gt=n[E]||(n[E]=[]),m=a&&(!u&&!f&&(i=i.prototype),a<5&&(a>3||!u)&&Xt(a<4?i:{get[e](){return vt(this,r)},set[e](g){return At(this,r,g)}},e));a?u&&a<4&&_t(r,(a>2?"set ":a>1?"get ":"")+e):_t(i,e);for(var Y=s.length-1;Y>=0;Y--)c=Yt(a,e,l={},n[3],Gt),a&&(c.static=f,c.private=u,p=c.access={has:u?g=>ee(i,g):g=>e in g},a^3&&(p.get=u?g=>(a^1?vt:se)(g,i,a^4?r:m.get):g=>g[e]),a>2&&(p.set=u?(g,tt)=>At(g,i,tt,a^4?r:m.set):(g,tt)=>g[e]=tt)),h=(0,s[Y])(a?a<4?u?r:m[$t]:a>4?void 0:{get:m.get,set:m.set}:i,c),l._=1,a^4||h===void 0?H(h)&&(a>4?yt.unshift(h):a?u?r=h:m[$t]=h:i=h):typeof h!="object"||h===null?j("Object expected"):(H(o=h.get)&&(m.get=o),H(o=h.set)&&(m.set=o),H(o=h.init)&&yt.unshift(o));return a||te(n,i),m&&et(i,e,m),u?a^4?r:m:i},P=(n,t,e)=>Et(n,typeof t!="symbol"?t+"":t,e),it=(n,t,e)=>t.has(n)||j("Cannot "+e),ee=(n,t)=>Object(t)!==t?j('Cannot use the "in" operator on this value'):n.has(t),vt=(n,t,e)=>(it(n,t,"read from private field"),e?e.call(n):t.get(n));var At=(n,t,e,s)=>(it(n,t,"write to private field"),s?s.call(n,e):t.set(n,e),e),se=(n,t,e)=>(it(n,t,"access private method"),e);var K=globalThis,F=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),St=new WeakMap,V=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(F&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=St.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&St.set(e,t))}return t}toString(){return this.cssText}},xt=n=>new V(typeof n=="string"?n:n+"",void 0,nt),J=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new V(e,n,nt)},wt=(n,t)=>{if(F)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=K.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},rt=F?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return xt(e)})(n):n;var{is:ie,defineProperty:ne,getOwnPropertyDescriptor:re,getOwnPropertyNames:oe,getOwnPropertySymbols:ae,getPrototypeOf:he}=Object,Z=globalThis,Pt=Z.trustedTypes,le=Pt?Pt.emptyScript:"",ce=Z.reactiveElementPolyfillSupport,q=(n,t)=>n,L={toAttribute(n,t){switch(t){case Boolean:n=n?le:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},G=(n,t)=>!ie(n,t),Ut={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ne(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=re(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let h=i?.call(this);r?.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;let t=he(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){let e=this.properties,s=[...oe(e),...ae(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(rt(i))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:L).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:L;this._$Em=i;let h=o.fromAttribute(e,r.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let o=this.constructor;if(i===!1&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??G)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:o}=r,h=this[i];o!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,r,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[q("elementProperties")]=new Map,y[q("finalized")]=new Map,ce?.({ReactiveElement:y}),(Z.reactiveElementVersions??=[]).push("2.1.2");var pt=globalThis,Ot=n=>n,Q=pt.trustedTypes,Rt=Q?Q.createPolicy("lit-html",{createHTML:n=>n}):void 0,jt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+C,de=`<${Vt}>`,R=document,z=()=>R.createComment(""),B=n=>n===null||typeof n!="object"&&typeof n!="function",ut=Array.isArray,pe=n=>ut(n)||typeof n?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Mt=/>/g,U=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nt=/'/g,kt=/"/g,qt=/^(?:script|style|textarea|title)$/i,ft=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),_=ft(1),Ee=ft(2),Ce=ft(3),T=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Ht=new WeakMap,O=R.createTreeWalker(R,129);function Lt(n,t){if(!ut(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}var ue=(n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",o=D;for(let h=0;h<e;h++){let l=n[h],c,p,a=-1,f=0;for(;f<l.length&&(o.lastIndex=f,p=o.exec(l),p!==null);)f=o.lastIndex,o===D?p[1]==="!--"?o=Tt:p[1]!==void 0?o=Mt:p[2]!==void 0?(qt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=U):p[3]!==void 0&&(o=U):o===U?p[0]===">"?(o=i??D,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?U:p[3]==='"'?kt:Nt):o===kt||o===Nt?o=U:o===Tt||o===Mt?o=D:(o=U,i=void 0);let u=o===U&&n[h+1].startsWith("/>")?" ":"";r+=o===D?l+de:a>=0?(s.push(c),l.slice(0,a)+jt+l.slice(a)+C+u):l+C+(a===-2?h:u)}return[Lt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},I=class n{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,h=t.length-1,l=this.parts,[c,p]=ue(t,e);if(this.el=n.createElement(c,s),O.currentNode=this.el.content,e===2||e===3){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=O.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let a of i.getAttributeNames())if(a.endsWith(jt)){let f=p[o++],u=i.getAttribute(a).split(C),E=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:E[2],strings:u,ctor:E[1]==="."?ht:E[1]==="?"?lt:E[1]==="@"?ct:N}),i.removeAttribute(a)}else a.startsWith(C)&&(l.push({type:6,index:r}),i.removeAttribute(a));if(qt.test(i.tagName)){let a=i.textContent.split(C),f=a.length-1;if(f>0){i.textContent=Q?Q.emptyScript:"";for(let u=0;u<f;u++)i.append(a[u],z()),O.nextNode(),l.push({type:2,index:++r});i.append(a[f],z())}}}else if(i.nodeType===8)if(i.data===Vt)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(C,a+1))!==-1;)l.push({type:7,index:r}),a+=C.length-1}r++}}static createElement(t,e){let s=R.createElement("template");return s.innerHTML=t,s}};function M(n,t,e=n,s){if(t===T)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=B(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=M(n,i._$AS(n,t.values),i,s)),t}var at=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??R).importNode(e,!0);O.currentNode=i;let r=O.nextNode(),o=0,h=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new W(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new dt(r,this,t)),this._$AV.push(c),l=s[++h]}o!==l?.index&&(r=O.nextNode(),o++)}return O.currentNode=R,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},W=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),B(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(Lt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new at(i,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=Ht.get(t.strings);return e===void 0&&Ht.set(t.strings,e=new I(t)),e}k(t){ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new n(this.O(z()),this.O(z()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Ot(t).nextSibling;Ot(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=M(this,t,e,0),o=!B(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{let h=t,l,c;for(t=r[0],l=0;l<r.length-1;l++)c=M(this,h[s+l],e,l),c===T&&(c=this._$AH[l]),o||=!B(c)||c!==this._$AH[l],c===d?t=d:t!==d&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ht=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},lt=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},ct=class extends N{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??d)===T)return;let s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}};var fe=pt.litHtmlPolyfillSupport;fe?.(I,W),(pt.litHtmlVersions??=[]).push("3.3.2");var Dt=(n,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new W(t.insertBefore(z(),r),r,void 0,e??{})}return i._$AI(n),i};var gt=globalThis,v=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};v._$litElement$=!0,v.finalized=!0,gt.litElementHydrateSupport?.({LitElement:v});var ge=gt.litElementPolyfillSupport;ge?.({LitElement:v});(gt.litElementVersions??=[]).push("4.2.2");var mt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var me={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:G},$e=(n=me,t,e)=>{let{kind:s,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),s==="accessor"){let{name:o}=e;return{set(h){let l=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,l,n,!0,h)},init(h){return h!==void 0&&this.C(o,void 0,n,h),h}}}if(s==="setter"){let{name:o}=e;return function(h){let l=this[o];t.call(this,h),this.requestUpdate(o,l,n,!0,h)}}throw Error("Unsupported decorator location: "+s)};function k(n){return(t,e)=>typeof e=="object"?$e(n,t,e):((s,i,r)=>{let o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}var zt,Bt,It,Wt,A;Wt=[mt("novastar-h-series-card")];var S=class extends(It=v,Bt=[k({attribute:!1})],zt=[k({attribute:!1})],It){constructor(){super(...arguments);P(this,"hass",$(A,8,this)),$(A,11,this);P(this,"config",$(A,12,this)),$(A,15,this)}setConfig(e){if(!e?.controller_entity)throw new Error("A controller_entity is required for novastar-h-series-card.");this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series",controller_entity:""}}render(){if(!this.config)return _`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return _`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let e=this.hass.states[this.config.controller_entity];if(!e)return _`<ha-card><div class="content">Entity not found: ${this.config.controller_entity}</div></ha-card>`;let s=this.config.status_entity?this.hass.states[this.config.status_entity]:void 0,i=this.config.brightness_entity?this.hass.states[this.config.brightness_entity]:void 0,r=this.config.temperature_entity?this.hass.states[this.config.temperature_entity]:void 0;return _`
      <ha-card>
        <div class="header">${this.config.title??"Novastar H Series"}</div>
        <div class="content">
          <div class="row">
            <span class="label">Controller</span>
            <span class="value">${e.state}</span>
          </div>
          ${s?_`<div class="row"><span class="label">Status</span><span class="value">${s.state}</span></div>`:d}
          ${i?_`<div class="row"><span class="label">Brightness</span><span class="value">${i.state}</span></div>`:d}
          ${r?_`<div class="row"><span class="label">Temperature</span><span class="value">${r.state}</span></div>`:d}
        </div>
      </ha-card>
    `}};A=st(It),w(A,5,"hass",Bt,S),w(A,5,"config",zt,S),S=w(A,0,"NovastarHSeriesCard",Wt,S),P(S,"styles",J`
    .header {
      font-size: 1rem;
      font-weight: 600;
      padding: 16px 16px 0;
    }

    .content {
      padding: 16px;
    }

    .row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .row:last-child {
      margin-bottom: 0;
    }

    .label {
      color: var(--secondary-text-color);
      font-size: 0.95rem;
    }

    .value {
      font-weight: 500;
      text-transform: capitalize;
    }
  `),$(A,1,S);var Kt,Ft,Jt,Zt,b;Zt=[mt("novastar-h-series-card-editor")];var x=class extends(Jt=v,Ft=[k({attribute:!1})],Kt=[k({attribute:!1})],Jt){constructor(){super(...arguments);P(this,"hass",$(b,8,this)),$(b,11,this);P(this,"config",$(b,12,this,{type:"custom:novastar-h-series-card",controller_entity:""})),$(b,15,this)}setConfig(e){this.config={type:"custom:novastar-h-series-card",controller_entity:"",...e}}render(){return this.hass?_`
      <div class="editor">
        <ha-textfield
          label="Title"
          .value=${this.config.title??""}
          .configValue=${"title"}
          @input=${this.handleInputChanged}
        ></ha-textfield>
        <ha-entity-picker
          .hass=${this.hass}
          label="Controller entity (required)"
          .value=${this.config.controller_entity??""}
          .configValue=${"controller_entity"}
          @value-changed=${this.handleEntityChanged}
        ></ha-entity-picker>
        <ha-entity-picker
          .hass=${this.hass}
          label="Status entity (optional)"
          .value=${this.config.status_entity??""}
          .configValue=${"status_entity"}
          @value-changed=${this.handleEntityChanged}
        ></ha-entity-picker>
        <ha-entity-picker
          .hass=${this.hass}
          label="Brightness entity (optional)"
          .value=${this.config.brightness_entity??""}
          .configValue=${"brightness_entity"}
          @value-changed=${this.handleEntityChanged}
        ></ha-entity-picker>
        <ha-entity-picker
          .hass=${this.hass}
          label="Temperature entity (optional)"
          .value=${this.config.temperature_entity??""}
          .configValue=${"temperature_entity"}
          @value-changed=${this.handleEntityChanged}
        ></ha-entity-picker>
      </div>
    `:d}handleInputChanged(e){let s=e.target,i=s.configValue;if(!i)return;let r=s.value?.trim()??"";this.updateConfigValue(i,r)}handleEntityChanged(e){let i=e.target.configValue;if(!i)return;let r=e.detail.value?.trim()??"";this.updateConfigValue(i,r)}updateConfigValue(e,s){let i={...this.config};s?i[e]=s:delete i[e],i.type||(i.type="custom:novastar-h-series-card"),i.controller_entity||(i.controller_entity=""),this.config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}};b=st(Jt),w(b,5,"hass",Ft,x),w(b,5,"config",Kt,x),x=w(b,0,"NovastarHSeriesCardEditor",Zt,x),P(x,"styles",J`
    .editor {
      display: grid;
      gap: 12px;
      padding: 12px 0;
    }
  `),$(b,1,x);window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller."});export{S as NovastarHSeriesCard};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
