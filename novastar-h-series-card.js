var tt="novastar",we="v1.0.34";function st(){console.info(`%c NOVASTAR-CARD %c ${we} `,"color: white; background: #4cc2ff; font-weight: 700;","color: #4cc2ff; background: white; font-weight: 700;")}var xe=globalThis,Se=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),rt=new WeakMap,ae=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Se&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=rt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&rt.set(t,e))}return e}toString(){return this.cssText}},it=d=>new ae(typeof d=="string"?d:d+"",void 0,Te),I=(d,...e)=>{let t=d.length===1?d[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+d[i+1],d[0]);return new ae(t,d,Te)},nt=(d,e)=>{if(Se)d.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),r=xe.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,d.appendChild(s)}},ze=Se?d=>d:d=>d instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return it(t)})(d):d;var{is:Rt,defineProperty:Nt,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:It,getOwnPropertySymbols:Tt,getPrototypeOf:zt}=Object,Ae=globalThis,ot=Ae.trustedTypes,Ht=ot?ot.emptyScript:"",Dt=Ae.reactiveElementPolyfillSupport,de=(d,e)=>d,He={toAttribute(d,e){switch(e){case Boolean:d=d?Ht:null;break;case Object:case Array:d=d==null?d:JSON.stringify(d)}return d},fromAttribute(d,e){let t=d;switch(e){case Boolean:t=d!==null;break;case Number:t=d===null?null:Number(d);break;case Object:case Array:try{t=JSON.parse(d)}catch{t=null}}return t}},dt=(d,e)=>!Rt(d,e),at={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:dt};Symbol.metadata??=Symbol("metadata"),Ae.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=at){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Nt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:i}=Ot(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){let o=r?.call(this);i?.call(this,n),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??at}static _$Ei(){if(this.hasOwnProperty(de("elementProperties")))return;let e=zt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(de("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(de("properties"))){let t=this.properties,s=[...It(t),...Tt(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(ze(r))}else e!==void 0&&t.push(ze(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:He).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:He;this._$Em=r;let o=n.fromAttribute(t,i.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,s,r=!1,i){if(e!==void 0){let n=this.constructor;if(r===!1&&(i=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??dt)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:n}=i,o=this[r];n!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,i,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[de("elementProperties")]=new Map,S[de("finalized")]=new Map,Dt?.({ReactiveElement:S}),(Ae.reactiveElementVersions??=[]).push("2.1.2");var je=globalThis,ct=d=>d,Ee=je.trustedTypes,lt=Ee?Ee.createPolicy("lit-html",{createHTML:d=>d}):void 0,ft="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,mt="?"+L,Bt=`<${mt}>`,H=document,le=()=>H.createComment(""),he=d=>d===null||typeof d!="object"&&typeof d!="function",We=Array.isArray,Ft=d=>We(d)||typeof d?.[Symbol.iterator]=="function",De=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,pt=/>/g,T=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,gt=/"/g,vt=/^(?:script|style|textarea|title)$/i,Ke=d=>(e,...t)=>({_$litType$:d,strings:e,values:t}),h=Ke(1),k=Ke(2),es=Ke(3),D=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),yt=new WeakMap,z=H.createTreeWalker(H,129);function bt(d,e){if(!We(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(e):e}var Ut=(d,e)=>{let t=d.length-1,s=[],r,i=e===2?"<svg>":e===3?"<math>":"",n=ce;for(let o=0;o<t;o++){let a=d[o],c,p,u=-1,f=0;for(;f<a.length&&(n.lastIndex=f,p=n.exec(a),p!==null);)f=n.lastIndex,n===ce?p[1]==="!--"?n=ht:p[1]!==void 0?n=pt:p[2]!==void 0?(vt.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=T):p[3]!==void 0&&(n=T):n===T?p[0]===">"?(n=r??ce,u=-1):p[1]===void 0?u=-2:(u=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?T:p[3]==='"'?gt:ut):n===gt||n===ut?n=T:n===ht||n===pt?n=ce:(n=T,r=void 0);let m=n===T&&d[o+1].startsWith("/>")?" ":"";i+=n===ce?a+Bt:u>=0?(s.push(c),a.slice(0,u)+ft+a.slice(u)+L+m):a+L+(u===-2?o:m)}return[bt(d,i+(d[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},pe=class d{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,n=0,o=e.length-1,a=this.parts,[c,p]=Ut(e,t);if(this.el=d.createElement(c,s),z.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=z.nextNode())!==null&&a.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(ft)){let f=p[n++],m=r.getAttribute(u).split(L),v=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:v[2],strings:m,ctor:v[1]==="."?Fe:v[1]==="?"?Ue:v[1]==="@"?Ve:Y}),r.removeAttribute(u)}else u.startsWith(L)&&(a.push({type:6,index:i}),r.removeAttribute(u));if(vt.test(r.tagName)){let u=r.textContent.split(L),f=u.length-1;if(f>0){r.textContent=Ee?Ee.emptyScript:"";for(let m=0;m<f;m++)r.append(u[m],le()),z.nextNode(),a.push({type:2,index:++i});r.append(u[f],le())}}}else if(r.nodeType===8)if(r.data===mt)a.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(L,u+1))!==-1;)a.push({type:7,index:i}),u+=L.length-1}i++}}static createElement(e,t){let s=H.createElement("template");return s.innerHTML=e,s}};function K(d,e,t=d,s){if(e===D)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl,i=he(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(d),r._$AT(d,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=K(d,r._$AS(d,e.values),r,s)),e}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??H).importNode(t,!0);z.currentNode=r;let i=z.nextNode(),n=0,o=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new ue(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new qe(i,this,e)),this._$AV.push(c),a=s[++o]}n!==a?.index&&(i=z.nextNode(),n++)}return z.currentNode=H,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},ue=class d{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),he(e)?e===l||e==null||e===""?(this._$AH!==l&&this._$AR(),this._$AH=l):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ft(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==l&&he(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=pe.createElement(bt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new Be(r,this),n=i.u(this.options);i.p(t),this.T(n),this._$AH=i}}_$AC(e){let t=yt.get(e.strings);return t===void 0&&yt.set(e.strings,t=new pe(e)),t}k(e){We(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let i of e)r===t.length?t.push(s=new d(this.O(le()),this.O(le()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=ct(e).nextSibling;ct(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Y=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=l,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(e,t=this,s,r){let i=this.strings,n=!1;if(i===void 0)e=K(this,e,t,0),n=!he(e)||e!==this._$AH&&e!==D,n&&(this._$AH=e);else{let o=e,a,c;for(e=i[0],a=0;a<i.length-1;a++)c=K(this,o[s+a],t,a),c===D&&(c=this._$AH[a]),n||=!he(c)||c!==this._$AH[a],c===l?e=l:e!==l&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}n&&!r&&this.j(e)}j(e){e===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fe=class extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===l?void 0:e}},Ue=class extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==l)}},Ve=class extends Y{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??l)===D)return;let s=this._$AH,r=e===l&&s!==l||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==l&&(s===l||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qe=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}};var Vt=je.litHtmlPolyfillSupport;Vt?.(pe,ue),(je.litHtmlVersions??=[]).push("3.3.2");var _t=(d,e,t)=>{let s=t?.renderBefore??e,r=s._$litPart$;if(r===void 0){let i=t?.renderBefore??null;s._$litPart$=r=new ue(e.insertBefore(le(),i),i,void 0,t??{})}return r._$AI(d),r};var Ye=globalThis,w=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_t(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};w._$litElement$=!0,w.finalized=!0,Ye.litElementHydrateSupport?.({LitElement:w});var qt=Ye.litElementPolyfillSupport;qt?.({LitElement:w});(Ye.litElementVersions??=[]).push("4.2.2");function $t(d){window.customCards=window.customCards||[],!window.customCards.some(e=>e.type===d.type)&&window.customCards.push(d)}var wt=I`
  :host {
    /* Default "Ted's Home Theater" theme — Windows 11 Fluent (Mica dark).
       Mirrors tedr91/ha-windows11-theme's dark token set. */
    --ted-style-accent: #4cc2ff;
    --ted-style-on-accent: #000000;
    --ted-style-text: #ffffff;
    --ted-style-muted: rgba(255, 255, 255, 0.786);
    --ted-style-divider: rgba(255, 255, 255, 0.0931);
    --ted-style-surface: #2b2b2b;
    --ted-style-surface-2: #383838;
    --ted-style-success: #6ccb5f;
    --ted-style-info: #5ab4ff;
    --ted-style-warning: #f5a524;
    --ted-style-danger: #ff99a4;
    --ted-style-screen: var(--ted-style-surface-2);
    --ted-style-layer: #000000;
    --ted-style-radius: 8px;
    --ted-style-radius-sm: 4px;
    --ted-style-pill: 999px;
    --ted-style-gap: 14px;
    --ted-style-touch: 44px;
    display: block;
    font-family: "Segoe UI Variable Text", "Segoe UI Variable", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  }

  /* theme: ha — follow the Home Assistant theme instead */
  .ted-card--theme-ha {
    --ted-style-accent: var(--primary-color, #2196f3);
    --ted-style-on-accent: var(--text-primary-color, #ffffff);
    --ted-style-text: var(--primary-text-color, #1c1c1c);
    --ted-style-muted: var(--secondary-text-color, #6f6f6f);
    --ted-style-divider: var(--divider-color, rgba(120, 120, 120, 0.22));
    --ted-style-surface: var(--ha-card-background, var(--card-background-color, #ffffff));
    --ted-style-surface-2: color-mix(in srgb, var(--ted-style-surface) 84%, var(--ted-style-text) 16%);
    --ted-style-screen: var(--ted-style-surface-2);
    --ted-style-success: var(--success-color, #43a047);
    --ted-style-info: var(--info-color, #4dabf5);
    --ted-style-warning: var(--warning-color, #f5a524);
    --ted-style-danger: var(--error-color, #e5484d);
    --ted-style-radius: var(--ha-card-border-radius, 12px);
    --ted-style-radius-sm: var(--ha-border-radius-sm, min(var(--ha-card-border-radius, 12px), 14px));
    font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, inherit));
  }

  /* Ted's Home Theater mode paints its own card surface so it looks identical under any HA theme */
  ha-card.ted-card--theme-ted-style {
    background: var(--ted-style-surface);
    border: 1px solid var(--ted-style-divider);
    color: var(--ted-style-text);
    --ha-card-border-radius: var(--ted-style-radius);
  }

  /* Brushed-metal sheen overlay (sits just above the card background). */
  .ted-brushed {
    position: absolute;
    inset: 0;
    z-index: -3;
    pointer-events: none;
    opacity: 0.5;
    mix-blend-mode: overlay;
  }
  .ted-brushed-svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,xt=h`
  <div class="ted-brushed" aria-hidden="true">
    <svg class="ted-brushed-svg" preserveAspectRatio="none">
      <filter id="ted-brushed-filter" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012 0.74"
          numOctaves="2"
          stitchTiles="stitch"
          result="n"
        ></feTurbulence>
        <feColorMatrix in="n" type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#ted-brushed-filter)"></rect>
    </svg>
  </div>
`;var Ce=`${tt}-h-series-card`,St=`${Ce}-editor`,At="Novastar H Series Card",Et="Displays core status information for a Novastar H Series controller from device or entity config.";var Xe=[{id:"presets",label:"Presets",icon:"mdi:view-grid"},{id:"layout",label:"Layout preview",icon:"mdi:monitor-dashboard"}],Le=Xe.map(d=>d.id);function X(d){let e=[],t=new Set;if(Array.isArray(d))for(let s of d)Le.includes(s)&&!t.has(s)&&(e.push(s),t.add(s));for(let s of Le)t.has(s)||e.push(s);return e}var Ge=class d extends w{static LAYOUT_BUILD_MARKER=we;_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";activeLayerSourceChooser;presetChooserOpen=!1;presetAnchorRect;layerAnchorRect;static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(e){let t=this._hass;this._hass=e;let s=this.buildRelevantStateSignature(e),r=s!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=s,(t!==e||r)&&this.requestUpdate("hass",t)}setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",header:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState(),this.syncChooserPopovers()}syncChooserPopovers(){let e=this.renderRoot,t=e.getElementById("ted-preset-popover");t&&this.presetChooserOpen&&!t.matches(":popover-open")&&(t.showPopover?.(),this.positionChooserPopover(t,this.presetAnchorRect));let s=e.getElementById("ted-layer-popover");s&&this.activeLayerSourceChooser&&!s.matches(":popover-open")&&(s.showPopover?.(),this.positionChooserPopover(s,this.layerAnchorRect))}positionChooserPopover(e,t){let r=window.innerWidth,i=window.innerHeight,n=e.getBoundingClientRect();if(e.style.position="fixed",e.style.margin="0",!t){e.style.left=`${Math.round((r-n.width)/2)}px`,e.style.top=`${Math.round((i-n.height)/2)}px`;return}let o=t.right-n.width;o=Math.max(8,Math.min(o,r-n.width-8));let a=t.bottom+8;a+n.height>i-8&&t.top-8-n.height>=8&&(a=t.top-8-n.height),a=Math.max(8,Math.min(a,i-n.height-8)),e.style.left=`${Math.round(o)}px`,e.style.top=`${Math.round(a)}px`}render(){if(!this.config)return h`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return h`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let e=this.getEntityId("controller_entity");if(!e){let N=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return h`<ha-card><div class="content">${N}</div></ha-card>`}let t=this.hass.states[e];if(!t)return h`<ha-card><div class="content">Entity not found: ${e}</div></ha-card>`;let s=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",r=this.getEntityId("preset_entity"),i=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),o=this.getEntityId("status_entity"),a=this.getEntityId("brightness_entity"),c=this.getEntityId("temperature_entity"),p=this.hass.states[s],f=(this.optimisticPowerState??p?.state)==="on",m=!!p&&!f,v=o?this.hass.states[o]:void 0,A=r?this.hass.states[r]:void 0,E=i?this.hass.states[i]:void 0,ke=n?this.hass.states[n]:void 0,g=a?this.hass.states[a]:void 0,_=c?this.hass.states[c]:void 0,C=g?Number.parseFloat(g.state):Number.NaN,B=g?this.readNumberAttribute(g,"min",0):0,G=g?this.readNumberAttribute(g,"max",100):100,F=g?this.readNumberAttribute(g,"step",1):1,J=!!g&&Number.isFinite(C),Q=g?this.readStringAttribute(g,"unit_of_measurement")??"":"",ge=this.readStringListAttribute(A,"options"),Z=this.arrangePresets(ge),b=A?this.resolveSelectedOption(A,ge):"",P=this.readLayoutPayload(E,ke),ee=v?`${t.state} (${v.state})`:t.state,te=_?this.readStringAttribute(_,"unit_of_measurement")??"":"",M=this.getDisplayMode(),Pe=this.getThemeMode(),U=M==="compact",$=M==="detailed",V=this.config.show_header_in_compact===!0,R=!U||V,se=U&&!V,ye=this.config.header??"Novastar H Series",fe=["content",`content--${M}`,se?"content--bare":""].filter(Boolean).join(" "),me=!$&&!!p,ve=!$&&!!_,re=!$&&J,ie=me||ve||re,be=this.getTemperatureSeverity(_?.state),Me=this.getLayoutColorStyle(),_e=this.config.show_presets!==!1,$e=this.config.show_layout!==!1,Re=X(this.config.section_order),Ne=N=>N==="presets"?!U&&A&&_e?this.renderPresetArea(Z,b,m,$,A):l:$e?P?$?h`
              <div class="layout-area">
                <div class="preset-heading">Layout and Inputs</div>
                ${this.renderLayoutPreview(P,se)}
              </div>
            `:this.renderLayoutPreview(P,se):U?h`<div class="row"><span class="label">Layout</span><span class="value">Unavailable</span></div>`:l:l;return h`
      <ha-card
        class="ted-card ted-card--${M} ted-card--theme-${Pe} ${f?"is-on":"is-off"}"
        style=${Me}
      >
        ${this.config.brushed!==!1?xt:l}
        ${R?h`
              <div class="header-row">
                <div class="header-lead">
                  <div class="header">${ye}</div>
                </div>
                <div class="header-actions">
                  ${ie?h`
                        <div class="header-status">
                          ${me?h`<span
                                class="status-dot ${f?"status-dot--on":"status-dot--off"}"
                                title=${ee}
                              ></span>`:l}
                          ${ve?h`<span
                                class="status-dot ${f?`status-dot--temp-${be}`:"status-dot--off"}"
                                title=${`Temperature: ${_?.state??""}`}
                              ></span>`:l}
                          ${re?this.renderHeaderBrightnessToggle(B,G,F,C,m,Q):l}
                        </div>
                      `:l}
                  ${p?this.renderPowerButton(f):l}
                </div>
              </div>
            `:l}
        <div class=${fe}>
          ${$?h`
                <div class="row">
                  <span class="label">Status</span>
                  <span class="value status-value status-value--${f?"on":"off"}">${ee}</span>
                </div>
                ${_?h`
                      <div class="row">
                        <span class="label">Temperature</span>
                        <span class="value">${_.state}${te}</span>
                      </div>
                    `:l}
                ${g?h`
                      <div class="row input-row">
                        <span class="label">Brightness</span>
                        ${J?this.renderBrightnessControl(B,G,F,C,m,Q):h`<span class="value">${g.state}${Q}</span>`}
                      </div>
                    `:l}
              `:l}
          ${Re.map(N=>Ne(N))}
          ${$&&this.config.show_card_version===!0?this.renderVersionFooter():l}
        </div>
        ${this.presetChooserOpen&&A&&Z.length>0?this.renderPresetChooser(Z,b,m):l}
      </ha-card>
    `}getDisplayMode(){let e=this.config?.display_mode;return e==="detailed"||e==="compact"?e:"standard"}getThemeMode(){return this.config?.theme==="ha"?"ha":"ted-style"}getTemperatureSeverity(e){let t=(e??"").trim().toLowerCase();return t==="normal"?"normal":t==="warning"?"warning":t==="critical"?"critical":"unknown"}resolveConfigColor(e){if(typeof e!="string")return;let t=e.trim();if(t){if(/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t)||/^(rgb|rgba|hsl|hsla)\(/i.test(t))return t;if(/^[a-z]+(-[a-z]+)*$/i.test(t))return`var(--${t}-color)`}}getLayoutColorStyle(){let e=[],t=this.resolveConfigColor(this.config?.screen_color);t&&e.push(`--ted-style-layer: ${t};`);let s=this.resolveConfigColor(this.config?.screen_background_color);return s&&e.push(`--ted-style-screen: ${s};`),e.join(" ")}renderPowerButton(e){return h`
      <button
        type="button"
        class="power-button ${e?"power-button--on":"power-button--off"}"
        role="switch"
        aria-checked=${e?"true":"false"}
        aria-label="Toggle screen output"
        title="Toggle screen output"
        @click=${this.handlePowerToggle}
      >
        <svg class="power-button-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm5.66 2.93a1 1 0 0 1 1.41 0 9 9 0 1 1-12.73 0 1 1 0 1 1 1.41 1.42 7 7 0 1 0 9.9 0 1 1 0 0 1 0-1.42z"
          ></path>
        </svg>
      </button>
    `}renderHeaderBrightnessToggle(e,t,s,r,i,n){let o=t-e||1,a=Math.max(0,Math.min(100,Math.round((r-e)/o*100))),c=n?`${Math.round(r)}${n}`:`${a}%`;return h`
      <button
        type="button"
        class="icon-button"
        id="ted-brightness-anchor"
        popovertarget="ted-brightness-popover"
        aria-label="Adjust brightness"
        title="Adjust brightness"
        ?disabled=${i}
      >
        <svg class="icon-button-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-6a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zM4.93 4.93a1 1 0 0 1 1.41 0l1.06 1.06A1 1 0 0 1 5.99 7.4L4.93 6.34a1 1 0 0 1 0-1.41zm11.67 11.67a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17.5 0a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1zM4.93 19.07a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zM16.6 7.4a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41L18.01 7.4a1 1 0 0 1-1.41 0z"
          ></path>
        </svg>
      </button>
      <div
        id="ted-brightness-popover"
        class="brightness-popover"
        popover
        @beforetoggle=${this.handleBrightnessPopoverToggle}
      >
        <span class="brightness-popover-value">${c}</span>
        <input
          class="brightness-slider-vertical"
          type="range"
          orient="vertical"
          min=${e}
          max=${t}
          step=${s}
          data-unit=${n}
          style=${`--ted-style-brightness-fill:${a}%`}
          .value=${String(r)}
          .disabled=${i}
          ?disabled=${i}
          aria-label="Brightness"
          @input=${this.handleBrightnessInput}
          @change=${this.handleBrightnessChanged}
        />
        <svg class="brightness-popover-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-6a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zM4.93 4.93a1 1 0 0 1 1.41 0l1.06 1.06A1 1 0 0 1 5.99 7.4L4.93 6.34a1 1 0 0 1 0-1.41zm11.67 11.67a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17.5 0a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1zM4.93 19.07a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zM16.6 7.4a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41L18.01 7.4a1 1 0 0 1-1.41 0z"
          ></path>
        </svg>
      </div>
    `}handleBrightnessPopoverToggle=e=>{if(e.newState!=="open")return;let s=this.renderRoot,r=s.getElementById("ted-brightness-anchor"),i=s.getElementById("ted-brightness-popover");if(!r||!i)return;let n=r.getBoundingClientRect();i.style.top=`${Math.round(n.bottom+8)}px`,i.style.left="auto",i.style.right=`${Math.round(window.innerWidth-n.right)}px`};handleBrightnessInput=e=>{let t=e.target,s=Number.parseFloat(t.min),r=Number.parseFloat(t.max),i=Number.parseFloat(t.value);if(!Number.isFinite(i))return;let n=Number.isFinite(s)?s:0,a=(Number.isFinite(r)?r:100)-n||1,c=Math.max(0,Math.min(100,Math.round((i-n)/a*100)));t.style.setProperty("--ted-style-brightness-fill",`${c}%`);let u=t.closest(".brightness-popover")?.querySelector(".brightness-popover-value");if(u){let f=t.dataset.unit??"";u.textContent=f?`${Math.round(i)}${f}`:`${c}%`}};renderBrightnessControl(e,t,s,r,i,n){let o=t-e||1,a=Math.max(0,Math.min(100,Math.round((r-e)/o*100))),c=n?`${Math.round(r)}${n}`:`${a}%`;return h`
      <div class="brightness-control" style=${`--ted-style-brightness-fill:${a}%`}>
        <svg class="brightness-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-6a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zM4.93 4.93a1 1 0 0 1 1.41 0l1.06 1.06A1 1 0 0 1 5.99 7.4L4.93 6.34a1 1 0 0 1 0-1.41zm11.67 11.67a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17.5 0a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1zM4.93 19.07a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zM16.6 7.4a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41L18.01 7.4a1 1 0 0 1-1.41 0z"
          ></path>
        </svg>
        <input
          class="brightness-slider"
          type="range"
          min=${e}
          max=${t}
          step=${s}
          .value=${String(r)}
          .disabled=${i}
          ?disabled=${i}
          aria-label="Brightness"
          @change=${this.handleBrightnessChanged}
        />
        <span class="brightness-value">${c}</span>
      </div>
    `}renderPresetArea(e,t,s,r,i){if(e.length===0)return h`
        <div class="preset-area">
          ${r?h`<div class="preset-heading">Presets</div>`:l}
          <div class="row"><span class="value">${i.state}</span></div>
        </div>
      `;let n=!r&&e.length>5,o=r||!n?e:e.slice(0,4);return h`
      <div class="preset-area">
        ${r?h`<div class="preset-heading">Presets</div>`:l}
        <div class="preset-grid" role="group" aria-label="Presets">
          ${o.map(a=>{let c=this.optionEquals(a,t);return h`
              <button
                type="button"
                class="preset-button ${c?"preset-button--active":""}"
                ?disabled=${s}
                aria-pressed=${c?"true":"false"}
                title=${a}
                @click=${()=>this.handlePresetButtonClick(a)}
              ><span class="preset-button-label">${a}</span></button>
            `})}
          ${n?h`
                <button
                  type="button"
                  class="preset-button preset-button--more"
                  ?disabled=${s}
                  aria-haspopup="true"
                  aria-expanded=${this.presetChooserOpen?"true":"false"}
                  aria-label="Show all presets"
                  title="Show all presets"
                  @click=${this.openPresetChooser}
                >
                  <svg class="preset-more-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </button>
              `:l}
        </div>
      </div>
    `}renderPresetChooser(e,t,s){return h`
      <div
        id="ted-preset-popover"
        class="ted-popover"
        popover
        @toggle=${this.handlePresetPopoverToggle}
      >
        <div class="ted-popover-title">Select Preset</div>
        <div class="ted-popover-options">
          ${e.map(r=>h`
            <button
              type="button"
              class="ted-popover-option ${this.optionEquals(r,t)?"selected":""}"
              ?disabled=${s}
              @click=${()=>this.handlePresetChooserOptionClick(r)}
            >${r}</button>
          `)}
        </div>
      </div>
    `}handlePresetPopoverToggle=e=>{e.newState==="closed"&&this.presetChooserOpen&&(this.presetChooserOpen=!1,this.requestUpdate())};openPresetChooser=e=>{let t=e.currentTarget;this.presetAnchorRect=t?.getBoundingClientRect(),this.presetChooserOpen=!0,this.requestUpdate()};closePresetChooser=()=>{this.presetChooserOpen=!1,this.requestUpdate()};async handlePresetChooserOptionClick(e){this.presetChooserOpen=!1,this.requestUpdate(),await this.handlePresetButtonClick(e)}renderVersionFooter(){return h`<div class="version-footer">${d.LAYOUT_BUILD_MARKER}</div>`}static styles=[wt,I`
    ha-card {
      overflow: hidden;
      position: relative;
      /* Establish a stacking context so the brushed sheen (z-index: -3) sits
         above the card background but below the card content. */
      isolation: isolate;
    }

    .header-row {
      align-items: center;
      display: flex;
      gap: var(--ted-style-gap);
      justify-content: space-between;
      padding: 16px 16px 4px;
      /* Sit above the brushed sheen (z-index: -3) so it never blends onto the header. */
      position: relative;
      z-index: 1;
    }

    .header-lead {
      align-items: center;
      display: inline-flex;
      gap: 10px;
      min-width: 0;
    }

    .header-status {
      align-items: center;
      display: inline-flex;
      flex: none;
      gap: 8px;
    }

    .header {
      font-size: 1.15rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .status-dot {
      border-radius: 50%;
      flex: none;
      height: 10px;
      transition: background-color 0.25s ease, box-shadow 0.25s ease;
      width: 10px;
    }

    .status-dot--on {
      background: var(--ted-style-success);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-style-success) 70%, transparent);
    }

    .status-dot--off {
      background: color-mix(in srgb, var(--ted-style-muted) 55%, transparent);
    }

    .status-dot--temp-normal {
      background: var(--ted-style-info);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-style-info) 70%, transparent);
    }

    .status-dot--temp-warning {
      background: var(--ted-style-warning);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-style-warning) 70%, transparent);
    }

    .status-dot--temp-critical {
      background: var(--ted-style-danger);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-style-danger) 70%, transparent);
    }

    .status-dot--temp-unknown {
      background: color-mix(in srgb, var(--ted-style-muted) 55%, transparent);
    }

    .power-button {
      align-items: center;
      background: var(--ted-style-surface-2);
      border: 1px solid var(--ted-style-divider);
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
      box-sizing: border-box;
      color: color-mix(in srgb, var(--ted-style-text) 60%, transparent);
      cursor: pointer;
      display: inline-flex;
      flex: none;
      height: 30px;
      justify-content: center;
      padding: 0;
      transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.08s ease;
      width: 30px;
      -webkit-tap-highlight-color: transparent;
    }

    .power-button:hover {
      border-color: color-mix(in srgb, var(--ted-style-accent) 45%, var(--ted-style-divider));
    }

    .power-button:active {
      transform: scale(0.94);
    }

    .power-button:focus-visible {
      outline: 2px solid var(--ted-style-accent);
      outline-offset: 2px;
    }

    .power-button-icon {
      fill: currentColor;
      height: 16px;
      width: 16px;
    }

    .power-button--on {
      background:
        radial-gradient(circle at 30% 26%,
          color-mix(in srgb, var(--ted-style-accent) 76%, #ffffff) 8%,
          color-mix(in srgb, var(--ted-style-accent) 90%, #000000) 100%);
      border-color: color-mix(in srgb, var(--ted-style-accent) 55%, #ffffff);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--ted-style-accent) 35%, transparent),
        0 0 16px color-mix(in srgb, var(--ted-style-accent) 38%, transparent),
        0 2px 8px rgba(0, 0, 0, 0.28),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
      color: var(--ted-style-on-accent);
    }

    .header-actions {
      align-items: center;
      display: inline-flex;
      flex: none;
      gap: 14px;
    }

    .icon-button {
      align-items: center;
      background: transparent;
      border: none;
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--ted-style-muted);
      cursor: pointer;
      display: inline-flex;
      flex: none;
      height: 30px;
      justify-content: center;
      margin-left: 6px;
      padding: 0;
      transition: color 0.2s ease, transform 0.08s ease;
      width: 30px;
      -webkit-tap-highlight-color: transparent;
    }

    .icon-button:hover {
      color: var(--ted-style-text);
    }

    .icon-button:active {
      transform: scale(0.9);
    }

    .icon-button:focus-visible {
      outline: 2px solid var(--ted-style-accent);
      outline-offset: 2px;
    }

    .icon-button:disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .icon-button-icon {
      fill: currentColor;
      height: 18px;
      width: 18px;
    }

    .brightness-popover {
      background: var(--ted-style-surface);
      border: 1px solid var(--ted-style-divider);
      border-radius: var(--ted-style-radius-sm);
      box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
      box-sizing: border-box;
      inset: auto;
      margin: 0;
      padding: 14px 12px;
      position: fixed;
    }

    .brightness-popover:popover-open {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .brightness-popover::backdrop {
      background: transparent;
    }

    .brightness-popover-value {
      color: var(--ted-style-text);
      font-size: 0.85rem;
      font-weight: 600;
    }

    .brightness-popover-icon {
      color: var(--ted-style-muted);
      fill: currentColor;
      height: 18px;
      width: 18px;
    }

    .brightness-slider-vertical {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      direction: rtl;
      height: 150px;
      margin: 0;
      width: 28px;
      writing-mode: vertical-lr;
    }

    .brightness-slider-vertical::-webkit-slider-runnable-track {
      background: linear-gradient(
        to top,
        var(--ted-style-accent) 0%,
        var(--ted-style-accent) var(--ted-style-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-style-text) 18%, transparent) var(--ted-style-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-style-text) 18%, transparent) 100%
      );
      border-radius: var(--ted-style-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: var(--ted-style-surface);
      border: 1px solid color-mix(in srgb, var(--ted-style-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      margin-left: -8px;
      width: 22px;
    }

    .brightness-slider-vertical::-moz-range-track {
      background: color-mix(in srgb, var(--ted-style-text) 18%, transparent);
      border-radius: var(--ted-style-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-moz-range-progress {
      background: var(--ted-style-accent);
      border-radius: var(--ted-style-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-moz-range-thumb {
      background: var(--ted-style-surface);
      border: 1px solid color-mix(in srgb, var(--ted-style-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      width: 22px;
    }

    .brightness-slider-vertical:disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: var(--ted-style-gap);
      padding: 16px;
      /* Sit above the brushed sheen (z-index: -3) so it never blends onto the controls. */
      position: relative;
      z-index: 1;
    }

    .content--standard {
      gap: 16px;
    }

    .content--bare {
      gap: 0;
      padding: 0;
    }

    .row {
      align-items: center;
      display: flex;
      gap: 12px;
      justify-content: space-between;
      min-height: 28px;
    }

    .label {
      color: var(--ted-style-muted);
      font-size: 0.95rem;
      font-weight: 500;
    }

    .value {
      color: var(--ted-style-text);
      font-weight: 600;
      text-align: right;
      text-transform: capitalize;
    }

    .status-value {
      align-items: center;
      border-radius: var(--ted-style-radius-sm);
      display: inline-flex;
      font-size: 0.85rem;
      gap: 6px;
      padding: 4px 12px;
      text-transform: none;
    }

    .status-value--on {
      background: color-mix(in srgb, var(--ted-style-success) 16%, transparent);
      color: color-mix(in srgb, var(--ted-style-success) 78%, var(--ted-style-text));
    }

    .status-value--off {
      background: color-mix(in srgb, var(--ted-style-muted) 16%, transparent);
      color: var(--ted-style-muted);
    }

    .input-row {
      align-items: center;
    }

    .preset-area,
    .layout-area {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .preset-heading {
      color: var(--ted-style-muted);
      font-size: 0.95rem;
      font-weight: 500;
    }

    .preset-grid {
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(5, 1fr);
    }

    .preset-button {
      align-items: flex-start;
      aspect-ratio: 1 / 1;
      /* Opaque base + themed tint so the brushed sheen can never show through the button. */
      background-color: var(--ted-style-surface);
      background-image: linear-gradient(var(--ted-style-surface-2), var(--ted-style-surface-2));
      border: 1px solid var(--ted-style-divider);
      border-radius: var(--ted-style-radius-sm);
      color: var(--ted-style-text);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      font: inherit;
      font-size: 0.82rem;
      font-weight: 600;
      justify-content: flex-end;
      line-height: 1.15;
      overflow: hidden;
      padding: 8px;
      text-align: left;
      transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease, transform 0.08s ease;
      word-break: break-word;
      -webkit-tap-highlight-color: transparent;
    }

    .preset-button:hover {
      border-color: color-mix(in srgb, var(--ted-style-accent) 50%, var(--ted-style-divider));
    }

    .preset-button:active {
      transform: scale(0.96);
    }

    .preset-button:focus-visible {
      outline: 2px solid var(--ted-style-accent);
      outline-offset: 2px;
    }

    .preset-button--active {
      background: var(--ted-style-accent);
      border-color: color-mix(in srgb, var(--ted-style-accent) 60%, #ffffff);
      box-shadow: 0 2px 10px color-mix(in srgb, var(--ted-style-accent) 35%, transparent);
      color: var(--ted-style-on-accent);
    }

    .preset-button:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .preset-button--more {
      align-items: center;
      color: var(--ted-style-muted);
      justify-content: center;
    }

    .preset-button--more:hover {
      color: var(--ted-style-text);
    }

    .preset-more-icon {
      fill: currentColor;
      height: 26px;
      width: 26px;
    }

    .brightness-control {
      align-items: center;
      background: var(--ted-style-surface-2);
      border: 1px solid var(--ted-style-divider);
      border-radius: var(--ted-style-radius-sm);
      box-sizing: border-box;
      display: flex;
      flex: 1 1 auto;
      gap: 12px;
      min-height: var(--ted-style-touch);
      padding: 0 16px;
      width: 100%;
    }

    .brightness-icon {
      color: var(--ted-style-muted);
      fill: currentColor;
      flex: none;
      height: 20px;
      width: 20px;
    }

    .brightness-value {
      color: var(--ted-style-text);
      flex: none;
      font-size: 0.9rem;
      font-weight: 600;
      min-width: 42px;
      text-align: right;
    }

    .brightness-slider {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      box-sizing: border-box;
      flex: 1 1 auto;
      height: var(--ted-style-touch);
      margin: 0;
      width: 100%;
    }

    .brightness-slider::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        var(--ted-style-accent) 0%,
        var(--ted-style-accent) var(--ted-style-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-style-text) 18%, transparent) var(--ted-style-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-style-text) 18%, transparent) 100%
      );
      border-radius: var(--ted-style-pill);
      height: 6px;
    }

    .brightness-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: var(--ted-style-surface);
      border: 1px solid color-mix(in srgb, var(--ted-style-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      margin-top: -8px;
      width: 22px;
    }

    .brightness-slider::-moz-range-track {
      background: color-mix(in srgb, var(--ted-style-text) 18%, transparent);
      border-radius: var(--ted-style-pill);
      height: 6px;
    }

    .brightness-slider::-moz-range-progress {
      background: var(--ted-style-accent);
      border-radius: var(--ted-style-pill);
      height: 6px;
    }

    .brightness-slider::-moz-range-thumb {
      background: var(--ted-style-surface);
      border: 1px solid color-mix(in srgb, var(--ted-style-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      width: 22px;
    }

    .brightness-slider:disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .preset-button:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .layout-preview {
      border-radius: var(--ted-style-radius-sm);
      position: relative;
    }

    .layout-title {
      color: var(--ted-style-muted);
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .layout-canvas {
      background: var(--ted-style-screen);
      border: 1px solid var(--ted-style-divider);
      border-radius: var(--ted-style-radius-sm);
      display: block;
      width: 100%;
    }

    .layout-preview--compact .layout-canvas {
      border-radius: 0;
    }

    .layout-screen {
      fill: var(--ted-style-screen);
      stroke: color-mix(in srgb, var(--ted-style-text) 22%, #3a3a3a);
    }

    .layout-layer {
      fill: var(--ted-style-layer);
      fill-opacity: 1;
      stroke: color-mix(in srgb, var(--ted-style-accent) 55%, #8893a0);
    }

    .layout-layer-hitbox {
      cursor: pointer;
    }

    .layout-label {
      fill: var(--ted-style-text);
      font-family: inherit;
      font-size: 9px;
      pointer-events: none;
    }

    .layout-empty {
      fill: color-mix(in srgb, #ffffff 65%, transparent);
      font-family: inherit;
      font-size: 14px;
    }

    .layout-layers--off {
      opacity: 0.15;
    }

    .layout-off-label {
      fill: color-mix(in srgb, #ffffff 80%, transparent);
      font-family: inherit;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    .version-footer {
      color: var(--ted-style-muted);
      font-size: 0.72rem;
      letter-spacing: 0.02em;
      opacity: 0.7;
      text-align: right;
    }

    .ted-popover {
      background: var(--ted-style-surface);
      border: 1px solid var(--ted-style-divider);
      border-radius: var(--ted-style-radius-sm);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      inset: auto;
      margin: 0;
      max-width: min(300px, 92vw);
      min-width: 200px;
      padding: 8px;
      position: fixed;
    }

    .ted-popover::backdrop {
      background: transparent;
    }

    .ted-popover-title {
      color: var(--ted-style-muted);
      font-size: 0.8rem;
      font-weight: 600;
      padding: 4px 8px 8px;
    }

    .ted-popover-options {
      display: grid;
      gap: 6px;
      max-height: min(50vh, 320px);
      overflow: auto;
    }

    .ted-popover-option {
      align-items: center;
      background: var(--ted-style-surface-2);
      border: 1px solid var(--ted-style-divider);
      border-radius: var(--ted-style-radius-sm);
      color: var(--ted-style-text);
      cursor: pointer;
      display: flex;
      font: inherit;
      font-size: 0.95rem;
      font-weight: 500;
      min-height: 40px;
      padding: 8px 14px;
      text-align: left;
      transition: background 0.18s ease, border-color 0.18s ease;
      width: 100%;
    }

    .ted-popover-option:hover {
      border-color: color-mix(in srgb, var(--ted-style-accent) 45%, var(--ted-style-divider));
    }

    .ted-popover-option.selected {
      background: color-mix(in srgb, var(--ted-style-accent) 14%, transparent);
      border-color: var(--ted-style-accent);
      box-shadow: inset 0 0 0 1px var(--ted-style-accent);
    }

    .ted-popover-option:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `];labelMeasureContext;renderLayoutPreview(e,t=!1){let s=e.screenWidth,r=e.screenHeight,i=this.fitLayersToViewport(e.layers,s,r).sort((g,_)=>g.z-_.z),n="#000000",o="#4a4a4a",a="#d9d9d9",c="#808080",p="#ffffff",u=this.getLayerSourceRows(),f=this.getLayerSourceLabelMap(),m=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",v=this.hass?.states[m],A=this.optimisticPowerState??v?.state,E=!!v&&A!=="on",ke=Math.max(40,Math.min(r*.14,s*.1));return h`
      <div class=${t?"layout-preview layout-preview--compact":"layout-preview"}>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${s} ${r}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            class="layout-screen"
            x="0"
            y="0"
            width=${s}
            height=${r}
            fill=${n}
            stroke=${o}
            stroke-width="1"
          ></rect>
          ${!E&&i.length===0?k`<text class="layout-empty" x=${s/2} y=${r/2} text-anchor="middle" dominant-baseline="middle">No layers detected</text>`:l}
          <g class=${E?"layout-layers layout-layers--off":"layout-layers"}>
            ${i.map((g,_)=>{let C=this.resolveLayerSourceRow(u,g.id,_),B=this.resolveLayerSourceLabel(f,g.id,_)??g.source?.trim()??g.id,G=g.x+g.width/2,F=g.y+g.height/2,J=Math.min(g.width,g.height),Q=Math.max(54,s*.017),ge=Math.max(J*.14,Q),Z=Math.max(24,g.height*.38),b=Math.min(ge,Z),P=Math.max(18,b*.35),ee=Math.max(32,g.width*.9),te=b*.832/480,M=b*.72/320,Pe=480*te,U=b*.36,$=Pe+U,V=ee-P*2,R=V-$>=b*.62*2,se=R?V-$:V,ye=Math.max(1,Math.floor(se/Math.max(1,b*.62))),fe=B.length<=ye?B:`${B.slice(0,Math.max(1,ye-1))}\u2026`,me=this.measureLabelWidth(fe,b)+2,ve=(R?$:0)+me,re=Math.min(ee,ve+P*2),ie=Math.max(28,b*1.35),be=G-re/2,Me=F-ie/2,_e=Math.max(6,ie*.25),$e=be+P,Re=$e-16*te,Ne=F-256*M,N=R?$e+$:G,Ct=R?"start":"middle",Lt=F+b*.1,y=Math.max(51,Math.min(138,J*.27)),Qe=Math.max(10,y*.22),O=Math.max(g.x+4,g.x+g.width-y-Qe),x=Math.min(g.y+Qe,g.y+g.height-y-4),Oe=O+y*.22,kt=x+y*.34,Ie=y*.18,Pt=y*.32,Mt=[`${Oe+Ie},${x+y*.26}`,`${O+y*.68},${x+y*.16}`,`${O+y*.68},${x+y*.84}`,`${Oe+Ie},${x+y*.74}`].join(" "),q=O+y*.7,j=x+y*.5,Ze=g.audioOpen===!0,et=g.audioOpen===!1,ne=Ze?"var(--success-color, #43a047)":et?"var(--secondary-text-color, #8a8a8a)":"color-mix(in srgb, var(--secondary-text-color, #8a8a8a) 55%, transparent)",W=!!C&&!E;return k`
                <g>
                  <rect
                    class="layout-layer"
                    x=${g.x}
                    y=${g.y}
                    width=${g.width}
                    height=${g.height}
                    fill=${a}
                    stroke=${c}
                    stroke-width="3"
                  ></rect>
                  ${E?l:k`
                      <g>
                        <rect
                          x=${O}
                          y=${x}
                          width=${y}
                          height=${y}
                          rx=${y*.22}
                          ry=${y*.22}
                          fill="#111111"
                          fill-opacity="0.8"
                        ></rect>
                        <rect
                          x=${Oe}
                          y=${kt}
                          width=${Ie}
                          height=${Pt}
                          fill=${ne}
                        ></rect>
                        <polygon points=${Mt} fill=${ne}></polygon>
                        ${Ze?k`
                            <path
                              d=${`M ${q} ${j-y*.13} Q ${q+y*.12} ${j} ${q} ${j+y*.13}`}
                              fill="none"
                              stroke=${ne}
                              stroke-width=${y*.06}
                              stroke-linecap="round"
                            ></path>
                            <path
                              d=${`M ${q+y*.1} ${j-y*.22} Q ${q+y*.28} ${j} ${q+y*.1} ${j+y*.22}`}
                              fill="none"
                              stroke=${ne}
                              stroke-width=${y*.06}
                              stroke-linecap="round"
                            ></path>
                          `:l}
                        ${et?k`
                            <line
                              x1=${O+y*.7}
                              y1=${x+y*.24}
                              x2=${O+y*.92}
                              y2=${x+y*.76}
                              stroke=${ne}
                              stroke-width=${y*.08}
                              stroke-linecap="round"
                            ></line>
                          `:l}
                      </g>
                      <rect
                        class=${W?"layout-layer-hitbox":""}
                        x=${be}
                        y=${Me}
                        width=${re}
                        height=${ie}
                        rx=${_e}
                        ry=${_e}
                        fill="#111111"
                        fill-opacity="0.82"
                        @click=${W?oe=>this.openLayerSourceChooser(C,oe):l}
                      ></rect>
                      ${R?k`
                          <g
                            class=${W?"layout-layer-hitbox":""}
                            transform=${`translate(${Re} ${Ne}) scale(${te} ${M})`}
                            @click=${W?oe=>this.openLayerSourceChooser(C,oe):l}
                          >
                            <path d="M472 96H40a24.03 24.03 0 0 0-24 24v80h32v-72h416v256H48v-72H16v80a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V120a24.03 24.03 0 0 0-24-24" fill=${p}></path>
                            <path d="m212.687 323.078l22.626 22.627l90.511-90.509l-90.511-90.51l-22.626 22.628l51.881 51.882H16v31.999h248.569z" fill=${p}></path>
                          </g>
                        `:l}
                      <text
                        class=${W?"layout-layer-hitbox":""}
                        x=${N}
                        y=${Lt}
                        font-weight="700"
                        style=${`fill:${p};font-size:${b}px;font-family:inherit;`}
                        text-anchor=${Ct}
                        dominant-baseline="middle"
                        @click=${W?oe=>this.openLayerSourceChooser(C,oe):l}
                      >${fe}</text>
                    `}
                </g>
              `})}
          </g>
          ${E?k`<text
                class="layout-off-label"
                x=${s/2}
                y=${r/2}
                text-anchor="middle"
                dominant-baseline="middle"
                style=${`font-size:${ke}px;`}
              >Screen Off</text>`:l}
        </svg>
        ${this.activeLayerSourceChooser?this.renderLayerSourceChooser(E):l}
      </div>
    `}measureLabelWidth(e,t){this.labelMeasureContext===void 0&&(this.labelMeasureContext=document.createElement("canvas").getContext("2d"));let s=this.labelMeasureContext;if(!s)return e.length*t*.55;let r="Roboto, Noto, sans-serif";try{let i=getComputedStyle(this).fontFamily;i&&(r=i)}catch{}return s.font=`700 ${t}px ${r}`,s.measureText(e).width}getLayerSourceLabelMap(){let e=new Map;for(let t of this.getLayerSourceRows()){let s=this.resolveSelectedOption(t.entity,t.options).trim();s&&e.set(t.layerNumber,s)}return e}resolveLayerSourceLabel(e,t,s){let r=[],i=Number.parseInt(t,10);Number.isFinite(i)&&(r.push(i),r.push(i+1)),r.push(s),r.push(s+1);for(let n of r){let o=e.get(n)?.trim();if(o)return o}}resolveLayerSourceRow(e,t,s){let r=[],i=Number.parseInt(t,10);Number.isFinite(i)&&(r.push(i),r.push(i+1)),r.push(s),r.push(s+1);for(let n of r){let o=e.find(a=>a.layerNumber===n);if(o)return o}return e[s]}renderLayerSourceChooser(e){let t=this.activeLayerSourceChooser;return t?h`
      <div
        id="ted-layer-popover"
        class="ted-popover"
        popover
        @toggle=${this.handleLayerPopoverToggle}
      >
        <div class="ted-popover-title">Layer ${t.layerNumber} Source</div>
        <div class="ted-popover-options">
          ${t.options.map(s=>h`
            <button
              type="button"
              class="ted-popover-option ${this.optionEquals(s,t.selectedOption)?"selected":""}"
              ?disabled=${e}
              @click=${()=>this.handleLayerSourceModalOptionClick(s)}
            >${s}</button>
          `)}
        </div>
      </div>
    `:l}handleLayerPopoverToggle=e=>{e.newState==="closed"&&this.activeLayerSourceChooser&&this.closeLayerSourceChooser()};openLayerSourceChooser(e,t){if(!e)return;let s=t?.currentTarget;this.layerAnchorRect=s?.getBoundingClientRect(),this.activeLayerSourceChooser={entityId:e.entityId,layerNumber:e.layerNumber,options:e.options,selectedOption:this.resolveSelectedOption(e.entity,e.options)},this.requestUpdate()}closeLayerSourceChooser=()=>{this.activeLayerSourceChooser=void 0,this.requestUpdate()};async handleLayerSourceModalOptionClick(e){let t=this.activeLayerSourceChooser,s=e.trim();!t||!s||(await this.selectLayerSourceOption(t.entityId,s),this.closeLayerSourceChooser())}fitLayersToViewport(e,t,s){return e.length===0?[]:e.map(r=>{if(!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.width)||!Number.isFinite(r.height)||r.width<=0||r.height<=0)return;let i=Math.max(0,r.x),n=Math.max(0,r.y),o=Math.min(t,r.x+r.width),a=Math.min(s,r.y+r.height),c=o-i,p=a-n;if(!(c<=0||p<=0))return{...r,x:i,y:n,width:c,height:p}}).filter(r=>!!r)}readNumberAttribute(e,t,s){let r=e.attributes[t];if(typeof r=="number"&&Number.isFinite(r))return r;if(typeof r=="string"){let i=Number.parseFloat(r);if(Number.isFinite(i))return i}return s}readStringListAttribute(e,t){if(!e)return[];let s=e.attributes[t];return Array.isArray(s)?s.filter(r=>typeof r=="string"):[]}resolveSelectedOption(e,t){let s=e.state?.trim(),r=[s,this.readStringAttribute(e,"current_option"),this.readStringAttribute(e,"selected_option"),this.readStringAttribute(e,"source"),this.readStringAttribute(e,"current_source")].filter(i=>!!i);for(let i of r){let n=t.find(c=>c===i);if(n)return n;let o=i.toLowerCase(),a=t.find(c=>c.toLowerCase()===o);if(a)return a}return s??""}readStringAttribute(e,t){let s=e.attributes[t];return typeof s!="string"?void 0:s.trim()||void 0}optionEquals(e,t){if(e===t)return!0;let s=e.trim().toLowerCase(),r=t.trim().toLowerCase();return s===r}sortedEqual(e,t){if(e.length!==t.length)return!1;let s=n=>n.map(o=>o.trim().toLowerCase()).sort(),r=s(e),i=s(t);return r.every((n,o)=>n===i[o])}arrangePresets(e){let t=this.config?.preset_order;if(!Array.isArray(t)||t.length===0)return e;let s=this.config?.preset_baseline;if(Array.isArray(s)&&s.length>0&&!this.sortedEqual(s,e))return e;let r=[],i=new Set;for(let n of t){let o=e.find(a=>!i.has(a)&&this.optionEquals(a,n));o&&(r.push(o),i.add(o))}return r.length>0?r:e}readLayoutPayload(e,t){if(!e||!t){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!e,hasLayersEntity:!!t});return}let s=this.readFirstScreen(e);if(!s){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let r=this.readFiniteNumber(s.width??s.w),i=this.readFiniteNumber(s.height??s.h);if(!r||!i||r<=0||i<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:r,screenHeight:i,firstScreen:s});return}let n=this.readLayersCollection(t),o=n.map((a,c)=>this.normalizeLayoutLayer(a,c)).filter(a=>!!a);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:o.length,screenWidth:r,screenHeight:i}),{screenWidth:r,screenHeight:i,layers:o}}readFirstScreen(e){let t=[e.state,e.attributes.screens,e.attributes.screen_list,e.attributes.screen,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let s of t){let r=this.parseStructuredValue(s);if(Array.isArray(r)&&r.length>0){let o=this.asRecord(r[0]);if(o)return o}let i=this.asRecord(r);if(!i)continue;let n=i.screens;if(Array.isArray(n)&&n.length>0){let o=this.asRecord(n[0]);if(o)return o}if(this.readFiniteNumber(i.width??i.w)&&this.readFiniteNumber(i.height??i.h))return i}if(this.readFiniteNumber(e.attributes.width??e.attributes.w)&&this.readFiniteNumber(e.attributes.height??e.attributes.h))return e.attributes}readLayersCollection(e){let t=[e.state,e.attributes.layers,e.attributes.layer_list,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let s of t){let r=this.parseStructuredValue(s);if(Array.isArray(r))return r;let i=this.asRecord(r);if(!i)continue;if(Array.isArray(i.layers))return i.layers;if(Array.isArray(i.layer_list))return i.layer_list;let n=this.asRecord(i.result);if(n&&Array.isArray(n.layers))return n.layers;let o=this.asRecord(i.data);if(o&&Array.isArray(o.layers))return o.layers;let a=Object.values(i).map(c=>this.asRecord(c)).filter(c=>!!c).filter(c=>!!this.asRecord(c.general)&&!!this.asRecord(c.window));if(a.length>0)return a;if(this.asRecord(i.general)&&this.asRecord(i.window))return[i]}return[]}parseStructuredValue(e){if(typeof e!="string")return e;try{return JSON.parse(e)}catch{return e}}asRecord(e){if(!(!e||typeof e!="object"||Array.isArray(e)))return e}readFiniteNumber(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Number.parseFloat(e);if(Number.isFinite(t))return t}}normalizeLayoutLayer(e,t){let s=this.asRecord(e);if(!s){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:t,value:e});return}let r=this.asRecord(s.general),i=this.asRecord(s.window),n=this.asRecord(s.audioStatus);if(!r||!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:t,hasGeneral:!!r,hasWindow:!!i,layer:s});return}let o=this.readFiniteNumber(i.width),a=this.readFiniteNumber(i.height),c=this.readFiniteNumber(i.x)??0,p=this.readFiniteNumber(i.y)??0;if(!o||!a||o<=0||a<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:t,width:o,height:a,windowData:i});return}let u=r.layerId;if(typeof u!="string"&&typeof u!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:t,layerId:u,general:r});return}let f=this.readFiniteNumber(r.zorder);if(f===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:t,zorder:r.zorder,general:r});return}let m=typeof r.name=="string"?r.name:void 0,v=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:t,layerId:u,x:c,y:p,width:o,height:a,zValue:f,source:m,audioOpen:v}),{id:String(u),x:c,y:p,width:o,height:a,z:f,source:m,audioOpen:v}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(e,t){if(this.isLayoutDebugEnabled()){if(t===void 0){console.debug("[NovastarCard][layout]",e);return}console.debug("[NovastarCard][layout]",e,t)}}buildRelevantStateSignature(e){if(!e)return"";let t=new Set,s=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of s){let o=this.config?.[n];o&&t.add(o);let a=this.resolvedEntities[n];a&&t.add(a)}t.add("switch.novastar_h2_power_screen_output");let r=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(e.states))r.test(n)&&t.add(n);return Array.from(t).sort().map(n=>{let o=e.states[n];if(!o)return`${n}:missing`;let a=this.readStringListAttribute(o,"options").join("|"),c=this.readStringAttribute(o,"current_option")??"",p=this.readStringAttribute(o,"selected_option")??"",u=this.readStringAttribute(o,"source")??"",f=this.readStringAttribute(o,"current_source")??"";return`${n}:${o.state}:${a}:${c}:${p}:${u}:${f}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(e){await new Promise(t=>{window.setTimeout(()=>t(),e)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(e=>({entityId:e,entity:this.hass?.states[e]})).filter(e=>!!e.entity).map(e=>{let t=this.readStringListAttribute(e.entity,"options");return{...e,options:t,layerNumber:this.getLayerNumber(e.entityId)}}).filter(e=>e.options.length>0&&e.entity.state!=="unavailable"&&e.entity.state!=="unknown").sort((e,t)=>e.layerNumber-t.layerNumber):[]}getLayerSourceEntityIds(){let e=/^select\..*_layer_\d+_source$/,t=this.resolvedLayerSourceEntities,s=this.hass?Object.keys(this.hass.states).filter(r=>e.test(r)):[];return t.length===0?s:s.length===0?t:Array.from(new Set([...t,...s]))}getLayerNumber(e){let t=e.match(/_layer_(\d+)_source$/);if(!t)return Number.MAX_SAFE_INTEGER;let s=Number.parseInt(t[1],10);return Number.isFinite(s)?s:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(e){if(!this.hass)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.hass.states[t];if(s&&s.state!=="on")return;let r=this.getEntityId("brightness_entity");if(!r)return;let i=e.target,n=Number.parseFloat(i.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:r,value:n})}async handlePowerToggle(){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t)return;let r=(this.optimisticPowerState??t.state)!=="on";this.optimisticPowerState=r?"on":"off",this.requestUpdate();let i=r?"turn_on":"turn_off";try{await this.hass.callService?.("switch",i,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetButtonClick(e){if(!this.hass)return;let t=this.getEntityId("preset_entity"),s=e.trim();!t||!s||(await this.hass.callService?.("select","select_option",{entity_id:t,option:s}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(e){if(!this.hass)return;let t=e.target,s=t.dataset.entityId,r=t.value?.trim();!s||!r||await this.selectLayerSourceOption(s,r)}async selectLayerSourceOption(e,t){this.hass&&await this.hass.callService?.("select","select_option",{entity_id:e,option:t})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t){this.optimisticPowerState=void 0;return}t.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(e){let t=this.config?.[e];if(t&&t.trim())return t;let s=this.resolvedEntities[e];if(s&&s.trim())return s}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let e=this.config.device_id?.trim();if(!e){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==e&&!(this.resolvedDeviceId===e&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=e;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let s=t.filter(o=>{if(!o||typeof o!="object")return!1;let a=o;return a.device_id===e&&!a.disabled_by&&!a.hidden_by&&typeof a.entity_id=="string"}).map(o=>o.entity_id),r=/^select\..*_layer_\d+_source$/,i=s.filter(o=>r.test(o)).sort((o,a)=>this.getLayerNumber(o)-this.getLayerNumber(a)),n={power_entity:this.pickEntity(s,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(s,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(s,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(s,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(s,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(s,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(s,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(s,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(s,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(s,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=i,this.resolvedDeviceId=e,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===e&&(this.resolvingDeviceId=void 0)}}}pickEntity(e,t,s){for(let r of t){let i=e.find(n=>r.test(n));if(i)return i}for(let r of s){let i=`${r}.`,n=e.find(o=>o.startsWith(i));if(n)return n}}};try{customElements.define(Ce,Ge)}catch{}$t({type:Ce,name:At,description:Et});function jt(){try{return typeof customElements<"u"&&customElements.get("ha-dropdown")!==void 0}catch{return!1}}var Wt={header:"Name",display_mode:"Display mode",theme:"Theme styling",show_header_in_compact:"Show header in Compact mode",show_card_version:"Show card version",show_presets:"Show presets",show_layout:"Show layout preview",preset_order:"Preset order",brushed:"Brushed effect",screen_color:"Screen color",screen_background_color:"Screen background color",device_id:"Device",power_entity:"Power entity",preset_entity:"Preset selection entity",screens_entity:"Screens entity",layers_entity:"Layers entity",controller_entity:"Controller entity",status_entity:"Status entity",brightness_entity:"Brightness entity",temperature_entity:"Temperature entity"},Je=class extends w{hass;config={type:"custom:novastar-h-series-card"};attemptedAutoDeviceDefault=!1;presetOptions=[];presetOptionsKey;resolvedPresetEntityId;resolvingPresetKey;presetsResetNotice=!1;expandedPanels={};static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t,this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensurePresetOptions(),this.maybeResetStalePresetOrder()}render(){if(!this.hass)return l;let e={display_mode:"standard",theme:"ted-style",brushed:!0,show_presets:!0,show_layout:!0,...this.config},t=X(this.config.section_order);return h`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${this.baseSchema()}
          .computeLabel=${this.computeLabel}
          @value-changed=${this.handleFormChanged}
        ></ha-form>

        ${this.renderGroup("visual","Visual","mdi:palette",!1,h`
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${this.visualSchema()}
            .computeLabel=${this.computeLabel}
            @value-changed=${this.handleFormChanged}
          ></ha-form>
        `)}

        ${this.renderGroup("sections","Card sections","mdi:view-dashboard-outline",!0,h`
          <div class="section-list">
            ${t.map((s,r)=>this.renderSectionRow(s,r,t.length,e))}
          </div>
        `)}

        ${this.renderGroup("advanced","Advanced","mdi:cog",!1,h`
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${this.advancedSchema()}
            .computeLabel=${this.computeLabel}
            @value-changed=${this.handleFormChanged}
          ></ha-form>
        `)}
      </div>
    `}renderGroup(e,t,s,r,i){return h`
      <ha-expansion-panel
        outlined
        .expanded=${this.isPanelExpanded(e,r)}
        @expanded-changed=${n=>this.handlePanelToggle(e,n)}
      >
        <div slot="header" class="panel-header">
          <ha-icon icon=${s}></ha-icon>
          <span>${t}</span>
        </div>
        <div class="panel-content">${i}</div>
      </ha-expansion-panel>
    `}renderSectionRow(e,t,s,r){let i=Xe.find(a=>a.id===e),n=`section-${e}`,o=e==="presets"?this.presetsSectionContent(r):this.layoutSectionContent(r);return h`
      <ha-expansion-panel
        outlined
        .expanded=${this.isPanelExpanded(n,!1)}
        @expanded-changed=${a=>this.handlePanelToggle(n,a)}
      >
        <div slot="header" class="section-row-header">
          <ha-icon icon=${i?.icon??"mdi:tune"}></ha-icon>
          <span class="section-row-title">${i?.label??e}</span>
          ${this.renderSectionMenu(e,t,s)}
        </div>
        <div class="panel-content">${o}</div>
      </ha-expansion-panel>
    `}renderSectionMenu(e,t,s){let r=t===0,i=t===s-1,n=h`
      <ha-icon-button slot="trigger" label="Reorder section">
        <ha-icon icon="mdi:dots-vertical"></ha-icon>
      </ha-icon-button>
    `;return jt()?h`
        <ha-dropdown
          @click=${this.stopPropagation}
          @closed=${this.stopPropagation}
        >
          ${n}
          <ha-dropdown-item ?disabled=${r} @click=${()=>this.moveSection(e,-1)}>
            <ha-icon slot="icon" icon="mdi:arrow-up"></ha-icon>
            Move up
          </ha-dropdown-item>
          <ha-dropdown-item ?disabled=${i} @click=${()=>this.moveSection(e,1)}>
            <ha-icon slot="icon" icon="mdi:arrow-down"></ha-icon>
            Move down
          </ha-dropdown-item>
        </ha-dropdown>
      `:h`
      <ha-button-menu
        corner="BOTTOM_START"
        menuCorner="START"
        fixed
        @click=${this.stopPropagation}
        @closed=${this.stopPropagation}
      >
        ${n}
        <mwc-list-item graphic="icon" ?disabled=${r} @click=${()=>this.moveSection(e,-1)}>
          <ha-icon slot="graphic" icon="mdi:arrow-up"></ha-icon>
          Move up
        </mwc-list-item>
        <mwc-list-item graphic="icon" ?disabled=${i} @click=${()=>this.moveSection(e,1)}>
          <ha-icon slot="graphic" icon="mdi:arrow-down"></ha-icon>
          Move down
        </mwc-list-item>
      </ha-button-menu>
    `}presetsSectionContent(e){let t=[{name:"show_presets",selector:{boolean:{}}}];return this.config.show_presets!==!1&&this.presetOptions.length>0&&t.push({name:"preset_order",selector:{select:{multiple:!0,reorder:!0,options:this.presetOptions.map(s=>({value:s,label:s}))}}}),h`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .computeLabel=${this.computeLabel}
        .computeHelper=${this.computeHelper}
        @value-changed=${this.handleFormChanged}
      ></ha-form>
    `}layoutSectionContent(e){let t=[{name:"show_layout",selector:{boolean:{}}}];return h`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.handleFormChanged}
      ></ha-form>
    `}baseSchema(){return[{name:"header",selector:{text:{placeholder:"Novastar H Series"}}},{name:"device_id",selector:{device:{filter:{integration:"novastar_h"}}}}]}visualSchema(){return[{name:"display_mode",required:!0,selector:{select:{mode:"dropdown",options:[{value:"detailed",label:"Detailed"},{value:"standard",label:"Standard"},{value:"compact",label:"Compact"}]}}},{name:"theme",required:!0,selector:{select:{mode:"dropdown",options:[{value:"ted-style",label:"Ted's Home Theater (default)"},{value:"ha",label:"Home Assistant theme"}]}}},{name:"brushed",selector:{boolean:{}}},{name:"screen_color",selector:{ui_color:{}}},{name:"screen_background_color",selector:{ui_color:{}}}]}advancedSchema(){let e=this.config.display_mode??"standard",t=!!(this.config.power_entity||this.config.preset_entity||this.config.screens_entity||this.config.layers_entity||this.config.controller_entity||this.config.status_entity||this.config.brightness_entity||this.config.temperature_entity),s=[];return e==="compact"&&s.push({name:"show_header_in_compact",selector:{boolean:{}}}),e==="detailed"&&s.push({name:"show_card_version",selector:{boolean:{}}}),s.push({name:"",type:"expandable",title:"Override entities",flatten:!0,expanded:t,schema:[{name:"power_entity",selector:{entity:{}}},{name:"preset_entity",selector:{entity:{}}},{name:"screens_entity",selector:{entity:{}}},{name:"layers_entity",selector:{entity:{}}},{name:"controller_entity",selector:{entity:{}}},{name:"status_entity",selector:{entity:{}}},{name:"brightness_entity",selector:{entity:{}}},{name:"temperature_entity",selector:{entity:{}}}]}),s}computeLabel=e=>Wt[e.name]??e.name;computeHelper=e=>{if(e.name!=="preset_order")return"";if(this.presetOptions.length===0)return"Select a device to load its presets.";let t="Drag to reorder. Remove a preset to hide it. Clear the field to show every preset again.";return this.presetsResetNotice?`Presets changed on the device, so your custom order was reset. ${t}`:t};handleFormChanged=e=>{e.stopPropagation(),this.commitConfig({...e.detail.value})};stopPropagation=e=>{e.stopPropagation()};isPanelExpanded(e,t){return e in this.expandedPanels?this.expandedPanels[e]:t}handlePanelToggle(e,t){let s=t.target?.expanded;typeof s=="boolean"&&(this.expandedPanels={...this.expandedPanels,[e]:s})}moveSection(e,t){let s=X(this.config.section_order),r=s.indexOf(e),i=r+t;if(r<0||i<0||i>=s.length)return;let n=[...s];[n[r],n[i]]=[n[i],n[r]],this.commitConfig({...this.config,section_order:n})}commitConfig(e){let t={...e};t.type="custom:novastar-h-series-card",t.display_mode==="standard"&&delete t.display_mode,t.theme==="ted-style"&&delete t.theme,t.show_header_in_compact!==!0&&delete t.show_header_in_compact,t.show_card_version!==!0&&delete t.show_card_version,t.show_presets!==!1&&delete t.show_presets,t.show_layout!==!1&&delete t.show_layout,t.brushed!==!1&&delete t.brushed,(!Array.isArray(t.section_order)||this.listSequenceEqual(X(t.section_order),Le))&&delete t.section_order,this.reconcilePresetOrder(t);let s=["header","device_id","power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let r of s){let i=t[r];(i==null||typeof i=="string"&&i.trim()==="")&&delete t[r]}this.config=t,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}reconcilePresetOrder(e){if(this.presetOptions.length===0){Array.isArray(this.config.preset_order)&&this.config.preset_order.length>0?(e.preset_order=this.config.preset_order,Array.isArray(this.config.preset_baseline)&&this.config.preset_baseline.length>0?e.preset_baseline=this.config.preset_baseline:delete e.preset_baseline):(delete e.preset_order,delete e.preset_baseline);return}let t=this.normalizePresetOrder(e.preset_order);t.length===0||this.listSequenceEqual(t,this.presetOptions)?(delete e.preset_order,delete e.preset_baseline):(e.preset_order=t,e.preset_baseline=[...this.presetOptions]),this.presetsResetNotice=!1}normalizePresetOrder(e){if(!Array.isArray(e))return[];let t=[],s=new Set;for(let r of e){if(typeof r!="string")continue;let i=r.trim().toLowerCase(),n=this.presetOptions.find(a=>a.trim().toLowerCase()===i);if(!n)continue;let o=n.toLowerCase();s.has(o)||(s.add(o),t.push(n))}return t}async ensurePresetOptions(){if(!this.hass)return;let e=this.config.preset_entity?.trim()??"",t=this.config.device_id?.trim()??"",s=`${e}|${t}`;if(s!==this.presetOptionsKey&&(this.presetOptionsKey=s,this.resolvedPresetEntityId=e||void 0,!e&&t&&this.hass.callWS&&this.resolvingPresetKey!==s)){this.resolvingPresetKey=s;try{let a=await this.hass.callWS({type:"config/entity_registry/list"});if(this.presetOptionsKey===s&&Array.isArray(a)){let c=a.filter(p=>{if(!p||typeof p!="object")return!1;let u=p;return u.device_id===t&&!u.disabled_by&&!u.hidden_by&&typeof u.entity_id=="string"}).map(p=>p.entity_id);this.resolvedPresetEntityId=c.find(p=>/_preset$/.test(p))??c.find(p=>p.startsWith("select."))}}catch{}finally{this.resolvingPresetKey===s&&(this.resolvingPresetKey=void 0)}}let r=this.resolvedPresetEntityId,n=(r?this.hass.states[r]:void 0)?.attributes?.options,o=Array.isArray(n)?n.filter(a=>typeof a=="string"):[];this.listSequenceEqual(o,this.presetOptions)||(this.presetOptions=o,this.requestUpdate())}maybeResetStalePresetOrder(){if(this.presetOptions.length===0)return;let e=this.config.preset_order,t=this.config.preset_baseline;if(!Array.isArray(e)||e.length===0||!Array.isArray(t)||t.length===0||this.nameSetEqual(t,this.presetOptions))return;let s={...this.config,type:"custom:novastar-h-series-card"};delete s.preset_order,delete s.preset_baseline,this.config=s,this.presetsResetNotice=!0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}listSequenceEqual(e,t){return e.length===t.length&&e.every((s,r)=>s===t[r])}nameSetEqual(e,t){if(e.length!==t.length)return!1;let s=n=>n.map(o=>o.trim().toLowerCase()).sort(),r=s(e),i=s(t);return r.every((n,o)=>n===i[o])}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let t=e.filter(r=>{if(!r||typeof r!="object")return!1;let i=r;return i.platform==="novastar_h"&&typeof i.device_id=="string"&&!i.disabled_by&&!i.hidden_by}).map(r=>r.device_id)[0];if(!t)return;let s={...this.config,type:"custom:novastar-h-series-card",device_id:t};this.config=s,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}catch{}}}static styles=I`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    ha-form {
      display: block;
    }

    ha-expansion-panel {
      --expansion-panel-content-padding: 0;
      border-radius: 6px;
    }

    .panel-header {
      align-items: center;
      display: flex;
      font-weight: 500;
      gap: 10px;
    }

    .panel-header ha-icon {
      color: var(--secondary-text-color);
    }

    .panel-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px 16px 16px;
    }

    .section-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section-row-header {
      align-items: center;
      display: flex;
      gap: 10px;
      width: 100%;
    }

    .section-row-header ha-icon {
      color: var(--secondary-text-color);
      flex: none;
    }

    .section-row-title {
      flex: 1 1 auto;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .section-row-header ha-button-menu,
    .section-row-header ha-dropdown {
      flex: none;
      margin: -8px 0;
    }
  `};try{customElements.define(St,Je)}catch{}st();
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
*/
