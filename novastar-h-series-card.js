var me=globalThis,be=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),Ke=new WeakMap,ie=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(be&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Ke.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ke.set(t,e))}return e}toString(){return this.cssText}},Xe=d=>new ie(typeof d=="string"?d:d+"",void 0,Le),_e=(d,...e)=>{let t=d.length===1?d[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+d[i+1],d[0]);return new ie(t,d,Le)},Ye=(d,e)=>{if(be)d.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),s=me.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,d.appendChild(r)}},ke=be?d=>d:d=>d instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Xe(t)})(d):d;var{is:bt,defineProperty:_t,getOwnPropertyDescriptor:$t,getOwnPropertyNames:wt,getOwnPropertySymbols:xt,getPrototypeOf:St}=Object,$e=globalThis,Ge=$e.trustedTypes,At=Ge?Ge.emptyScript:"",Et=$e.reactiveElementPolyfillSupport,ne=(d,e)=>d,Pe={toAttribute(d,e){switch(e){case Boolean:d=d?At:null;break;case Object:case Array:d=d==null?d:JSON.stringify(d)}return d},fromAttribute(d,e){let t=d;switch(e){case Boolean:t=d!==null;break;case Number:t=d===null?null:Number(d);break;case Object:case Array:try{t=JSON.parse(d)}catch{t=null}}return t}},Qe=(d,e)=>!bt(d,e),Je={attribute:!0,type:String,converter:Pe,reflect:!1,useDefault:!1,hasChanged:Qe};Symbol.metadata??=Symbol("metadata"),$e.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Je){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&_t(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){let{get:s,set:i}=$t(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let o=s?.call(this);i?.call(this,n),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Je}static _$Ei(){if(this.hasOwnProperty(ne("elementProperties")))return;let e=St(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne("properties"))){let t=this.properties,r=[...wt(t),...xt(t)];for(let s of r)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let s of r)t.unshift(ke(s))}else e!==void 0&&t.push(ke(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ye(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Pe).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Pe;this._$Em=s;let o=n.fromAttribute(t,i.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,r,s=!1,i){if(e!==void 0){let n=this.constructor;if(s===!1&&(i=this[e]),r??=n.getPropertyOptions(e),!((r.hasChanged??Qe)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:i},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:n}=i,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,i,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[ne("elementProperties")]=new Map,x[ne("finalized")]=new Map,Et?.({ReactiveElement:x}),($e.reactiveElementVersions??=[]).push("2.1.2");var He=globalThis,Ze=d=>d,we=He.trustedTypes,et=we?we.createPolicy("lit-html",{createHTML:d=>d}):void 0,ot="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+L,Ct=`<${at}>`,z=document,ae=()=>z.createComment(""),de=d=>d===null||typeof d!="object"&&typeof d!="function",Te=Array.isArray,Lt=d=>Te(d)||typeof d?.[Symbol.iterator]=="function",Me=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,rt=/>/g,I=RegExp(`>|${Me}(?:([^\\s"'>=/]+)(${Me}*=${Me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,dt=/^(?:script|style|textarea|title)$/i,Be=d=>(e,...t)=>({_$litType$:d,strings:e,values:t}),f=Be(1),k=Be(2),Ht=Be(3),H=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),nt=new WeakMap,O=z.createTreeWalker(z,129);function ct(d,e){if(!Te(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}var kt=(d,e)=>{let t=d.length-1,r=[],s,i=e===2?"<svg>":e===3?"<math>":"",n=oe;for(let o=0;o<t;o++){let a=d[o],c,h,u=-1,v=0;for(;v<a.length&&(n.lastIndex=v,h=n.exec(a),h!==null);)v=n.lastIndex,n===oe?h[1]==="!--"?n=tt:h[1]!==void 0?n=rt:h[2]!==void 0?(dt.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=I):h[3]!==void 0&&(n=I):n===I?h[0]===">"?(n=s??oe,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?I:h[3]==='"'?it:st):n===it||n===st?n=I:n===tt||n===rt?n=oe:(n=I,s=void 0);let y=n===I&&d[o+1].startsWith("/>")?" ":"";i+=n===oe?a+Ct:u>=0?(r.push(c),a.slice(0,u)+ot+a.slice(u)+L+y):a+L+(u===-2?o:y)}return[ct(d,i+(d[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},ce=class d{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,n=0,o=e.length-1,a=this.parts,[c,h]=kt(e,t);if(this.el=d.createElement(c,r),O.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=O.nextNode())!==null&&a.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(ot)){let v=h[n++],y=s.getAttribute(u).split(L),m=/([.?@])?(.*)/.exec(v);a.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?Ne:m[1]==="?"?Ie:m[1]==="@"?Oe:W}),s.removeAttribute(u)}else u.startsWith(L)&&(a.push({type:6,index:i}),s.removeAttribute(u));if(dt.test(s.tagName)){let u=s.textContent.split(L),v=u.length-1;if(v>0){s.textContent=we?we.emptyScript:"";for(let y=0;y<v;y++)s.append(u[y],ae()),O.nextNode(),a.push({type:2,index:++i});s.append(u[v],ae())}}}else if(s.nodeType===8)if(s.data===at)a.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(L,u+1))!==-1;)a.push({type:7,index:i}),u+=L.length-1}i++}}static createElement(e,t){let r=z.createElement("template");return r.innerHTML=e,r}};function q(d,e,t=d,r){if(e===H)return e;let s=r!==void 0?t._$Co?.[r]:t._$Cl,i=de(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(d),s._$AT(d,t,r)),r!==void 0?(t._$Co??=[])[r]=s:t._$Cl=s),s!==void 0&&(e=q(d,s._$AS(d,e.values),s,r)),e}var Re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??z).importNode(t,!0);O.currentNode=s;let i=O.nextNode(),n=0,o=0,a=r[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new le(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new ze(i,this,e)),this._$AV.push(c),a=r[++o]}n!==a?.index&&(i=O.nextNode(),n++)}return O.currentNode=z,s}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},le=class d{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),de(e)?e===l||e==null||e===""?(this._$AH!==l&&this._$AR(),this._$AH=l):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Lt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==l&&de(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ce.createElement(ct(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{let i=new Re(s,this),n=i.u(this.options);i.p(t),this.T(n),this._$AH=i}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new ce(e)),t}k(e){Te(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,s=0;for(let i of e)s===t.length?t.push(r=new d(this.O(ae()),this.O(ae()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=Ze(e).nextSibling;Ze(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,i){this.type=1,this._$AH=l,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=l}_$AI(e,t=this,r,s){let i=this.strings,n=!1;if(i===void 0)e=q(this,e,t,0),n=!de(e)||e!==this._$AH&&e!==H,n&&(this._$AH=e);else{let o=e,a,c;for(e=i[0],a=0;a<i.length-1;a++)c=q(this,o[r+a],t,a),c===H&&(c=this._$AH[a]),n||=!de(c)||c!==this._$AH[a],c===l?e=l:e!==l&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}n&&!s&&this.j(e)}j(e){e===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ne=class extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===l?void 0:e}},Ie=class extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==l)}},Oe=class extends W{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??l)===H)return;let r=this._$AH,s=e===l&&r!==l||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==l&&(r===l||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ze=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}};var Pt=He.litHtmlPolyfillSupport;Pt?.(ce,le),(He.litHtmlVersions??=[]).push("3.3.2");var lt=(d,e,t)=>{let r=t?.renderBefore??e,s=r._$litPart$;if(s===void 0){let i=t?.renderBefore??null;r._$litPart$=s=new le(e.insertBefore(ae(),i),i,void 0,t??{})}return s._$AI(d),s};var De=globalThis,S=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=lt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};S._$litElement$=!0,S.finalized=!0,De.litElementHydrateSupport?.({LitElement:S});var Mt=De.litElementPolyfillSupport;Mt?.({LitElement:S});(De.litElementVersions??=[]).push("4.2.2");var Ue=class d extends S{static LAYOUT_BUILD_MARKER="v1.0.31";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";activeLayerSourceChooser;presetChooserOpen=!1;presetAnchorRect;layerAnchorRect;static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(e){let t=this._hass;this._hass=e;let r=this.buildRelevantStateSignature(e),s=r!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=r,(t!==e||s)&&this.requestUpdate("hass",t)}setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",header:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState(),this.syncChooserPopovers()}syncChooserPopovers(){let e=this.renderRoot,t=e.getElementById("ted-preset-popover");t&&this.presetChooserOpen&&!t.matches(":popover-open")&&(t.showPopover?.(),this.positionChooserPopover(t,this.presetAnchorRect));let r=e.getElementById("ted-layer-popover");r&&this.activeLayerSourceChooser&&!r.matches(":popover-open")&&(r.showPopover?.(),this.positionChooserPopover(r,this.layerAnchorRect))}positionChooserPopover(e,t){let s=window.innerWidth,i=window.innerHeight,n=e.getBoundingClientRect();if(e.style.position="fixed",e.style.margin="0",!t){e.style.left=`${Math.round((s-n.width)/2)}px`,e.style.top=`${Math.round((i-n.height)/2)}px`;return}let o=t.right-n.width;o=Math.max(8,Math.min(o,s-n.width-8));let a=t.bottom+8;a+n.height>i-8&&t.top-8-n.height>=8&&(a=t.top-8-n.height),a=Math.max(8,Math.min(a,i-n.height-8)),e.style.left=`${Math.round(o)}px`,e.style.top=`${Math.round(a)}px`}render(){if(!this.config)return f`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return f`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let e=this.getEntityId("controller_entity");if(!e){let ye=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return f`<ha-card><div class="content">${ye}</div></ha-card>`}let t=this.hass.states[e];if(!t)return f`<ha-card><div class="content">Entity not found: ${e}</div></ha-card>`;let r=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),i=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),o=this.getEntityId("status_entity"),a=this.getEntityId("brightness_entity"),c=this.getEntityId("temperature_entity"),h=this.hass.states[r],v=(this.optimisticPowerState??h?.state)==="on",y=!!h&&!v,m=o?this.hass.states[o]:void 0,A=s?this.hass.states[s]:void 0,E=i?this.hass.states[i]:void 0,xe=n?this.hass.states[n]:void 0,p=a?this.hass.states[a]:void 0,_=c?this.hass.states[c]:void 0,C=p?Number.parseFloat(p.state):Number.NaN,T=p?this.readNumberAttribute(p,"min",0):0,K=p?this.readNumberAttribute(p,"max",100):100,B=p?this.readNumberAttribute(p,"step",1):1,X=!!p&&Number.isFinite(C),Y=p?this.readStringAttribute(p,"unit_of_measurement")??"":"",he=this.readStringListAttribute(A,"options"),G=this.arrangePresets(he),b=A?this.resolveSelectedOption(A,he):"",P=this.readLayoutPayload(E,xe),J=m?`${t.state} (${m.state})`:t.state,Q=_?this.readStringAttribute(_,"unit_of_measurement")??"":"",M=this.getDisplayMode(),Se=this.getThemeMode(),D=M==="compact",$=M==="detailed",U=this.config.show_header_in_compact===!0,R=!D||U,Z=D&&!U,ue=this.config.header??"Novastar H Series",pe=["content",`content--${M}`,Z?"content--bare":""].filter(Boolean).join(" "),ge=!$&&!!h,fe=!$&&!!_,ee=!$&&X,te=ge||fe||ee,ve=this.getTemperatureSeverity(_?.state),Ae=this.getLayoutColorStyle();return f`
      <ha-card
        class="ted-card ted-card--${M} ted-card--theme-${Se} ${v?"is-on":"is-off"}"
        style=${Ae}
      >
        ${R?f`
              <div class="header-row">
                <div class="header-lead">
                  <div class="header">${ue}</div>
                </div>
                <div class="header-actions">
                  ${te?f`
                        <div class="header-status">
                          ${ge?f`<span
                                class="status-dot ${v?"status-dot--on":"status-dot--off"}"
                                title=${J}
                              ></span>`:l}
                          ${fe?f`<span
                                class="status-dot ${v?`status-dot--temp-${ve}`:"status-dot--off"}"
                                title=${`Temperature: ${_?.state??""}`}
                              ></span>`:l}
                          ${ee?this.renderHeaderBrightnessToggle(T,K,B,C,y,Y):l}
                        </div>
                      `:l}
                  ${h?this.renderPowerButton(v):l}
                </div>
              </div>
            `:l}
        <div class=${pe}>
          ${$?f`
                <div class="row">
                  <span class="label">Status</span>
                  <span class="value status-value status-value--${v?"on":"off"}">${J}</span>
                </div>
                ${_?f`
                      <div class="row">
                        <span class="label">Temperature</span>
                        <span class="value">${_.state}${Q}</span>
                      </div>
                    `:l}
                ${p?f`
                      <div class="row input-row">
                        <span class="label">Brightness</span>
                        ${X?this.renderBrightnessControl(T,K,B,C,y,Y):f`<span class="value">${p.state}${Y}</span>`}
                      </div>
                    `:l}
              `:l}
          ${!D&&A?this.renderPresetArea(G,b,y,$,A):l}
          ${P?$?f`
                  <div class="layout-area">
                    <div class="preset-heading">Layout and Inputs</div>
                    ${this.renderLayoutPreview(P,Z)}
                  </div>
                `:this.renderLayoutPreview(P,Z):D?f`<div class="row"><span class="label">Layout</span><span class="value">Unavailable</span></div>`:l}
          ${$&&this.config.show_card_version===!0?this.renderVersionFooter():l}
        </div>
        ${this.presetChooserOpen&&A&&G.length>0?this.renderPresetChooser(G,b,y):l}
      </ha-card>
    `}getDisplayMode(){let e=this.config?.display_mode;return e==="detailed"||e==="compact"?e:"standard"}getThemeMode(){return this.config?.theme==="ha"?"ha":"ted-style"}getTemperatureSeverity(e){let t=(e??"").trim().toLowerCase();return t==="normal"?"normal":t==="warning"?"warning":t==="critical"?"critical":"unknown"}resolveConfigColor(e){if(typeof e!="string")return;let t=e.trim();if(t){if(/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t)||/^(rgb|rgba|hsl|hsla)\(/i.test(t))return t;if(/^[a-z]+(-[a-z]+)*$/i.test(t))return`var(--${t}-color)`}}getLayoutColorStyle(){let e=[],t=this.resolveConfigColor(this.config?.screen_color);t&&e.push(`--ted-theater-layer: ${t};`);let r=this.resolveConfigColor(this.config?.screen_background_color);return r&&e.push(`--ted-theater-screen: ${r};`),e.join(" ")}renderPowerButton(e){return f`
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
    `}renderHeaderBrightnessToggle(e,t,r,s,i,n){let o=t-e||1,a=Math.max(0,Math.min(100,Math.round((s-e)/o*100))),c=n?`${Math.round(s)}${n}`:`${a}%`;return f`
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
          step=${r}
          data-unit=${n}
          style=${`--ted-theater-brightness-fill:${a}%`}
          .value=${String(s)}
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
    `}handleBrightnessPopoverToggle=e=>{if(e.newState!=="open")return;let r=this.renderRoot,s=r.getElementById("ted-brightness-anchor"),i=r.getElementById("ted-brightness-popover");if(!s||!i)return;let n=s.getBoundingClientRect();i.style.top=`${Math.round(n.bottom+8)}px`,i.style.left="auto",i.style.right=`${Math.round(window.innerWidth-n.right)}px`};handleBrightnessInput=e=>{let t=e.target,r=Number.parseFloat(t.min),s=Number.parseFloat(t.max),i=Number.parseFloat(t.value);if(!Number.isFinite(i))return;let n=Number.isFinite(r)?r:0,a=(Number.isFinite(s)?s:100)-n||1,c=Math.max(0,Math.min(100,Math.round((i-n)/a*100)));t.style.setProperty("--ted-theater-brightness-fill",`${c}%`);let u=t.closest(".brightness-popover")?.querySelector(".brightness-popover-value");if(u){let v=t.dataset.unit??"";u.textContent=v?`${Math.round(i)}${v}`:`${c}%`}};renderBrightnessControl(e,t,r,s,i,n){let o=t-e||1,a=Math.max(0,Math.min(100,Math.round((s-e)/o*100))),c=n?`${Math.round(s)}${n}`:`${a}%`;return f`
      <div class="brightness-control" style=${`--ted-theater-brightness-fill:${a}%`}>
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
          step=${r}
          .value=${String(s)}
          .disabled=${i}
          ?disabled=${i}
          aria-label="Brightness"
          @change=${this.handleBrightnessChanged}
        />
        <span class="brightness-value">${c}</span>
      </div>
    `}renderPresetArea(e,t,r,s,i){if(e.length===0)return f`
        <div class="preset-area">
          ${s?f`<div class="preset-heading">Presets</div>`:l}
          <div class="row"><span class="value">${i.state}</span></div>
        </div>
      `;let n=!s&&e.length>5,o=s||!n?e:e.slice(0,4);return f`
      <div class="preset-area">
        ${s?f`<div class="preset-heading">Presets</div>`:l}
        <div class="preset-grid" role="group" aria-label="Presets">
          ${o.map(a=>{let c=this.optionEquals(a,t);return f`
              <button
                type="button"
                class="preset-button ${c?"preset-button--active":""}"
                ?disabled=${r}
                aria-pressed=${c?"true":"false"}
                title=${a}
                @click=${()=>this.handlePresetButtonClick(a)}
              ><span class="preset-button-label">${a}</span></button>
            `})}
          ${n?f`
                <button
                  type="button"
                  class="preset-button preset-button--more"
                  ?disabled=${r}
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
    `}renderPresetChooser(e,t,r){return f`
      <div
        id="ted-preset-popover"
        class="ted-popover"
        popover
        @toggle=${this.handlePresetPopoverToggle}
      >
        <div class="ted-popover-title">Select Preset</div>
        <div class="ted-popover-options">
          ${e.map(s=>f`
            <button
              type="button"
              class="ted-popover-option ${this.optionEquals(s,t)?"selected":""}"
              ?disabled=${r}
              @click=${()=>this.handlePresetChooserOptionClick(s)}
            >${s}</button>
          `)}
        </div>
      </div>
    `}handlePresetPopoverToggle=e=>{e.newState==="closed"&&this.presetChooserOpen&&(this.presetChooserOpen=!1,this.requestUpdate())};openPresetChooser=e=>{let t=e.currentTarget;this.presetAnchorRect=t?.getBoundingClientRect(),this.presetChooserOpen=!0,this.requestUpdate()};closePresetChooser=()=>{this.presetChooserOpen=!1,this.requestUpdate()};async handlePresetChooserOptionClick(e){this.presetChooserOpen=!1,this.requestUpdate(),await this.handlePresetButtonClick(e)}renderVersionFooter(){return f`<div class="version-footer">${d.LAYOUT_BUILD_MARKER}</div>`}static styles=_e`
    :host {
      /* "Ted's Home Theater" theme — Windows 11 Fluent (Mica dark).
         Mirrors tedr91/ha-windows11-theme's dark token set. */
      --ted-theater-accent: #4cc2ff;
      --ted-theater-on-accent: #000000;
      --ted-theater-text: #ffffff;
      --ted-theater-muted: rgba(255, 255, 255, 0.786);
      --ted-theater-divider: rgba(255, 255, 255, 0.0931);
      --ted-theater-surface: #2b2b2b;
      --ted-theater-surface-2: #383838;
      --ted-theater-success: #6ccb5f;
      --ted-theater-info: #5ab4ff;
      --ted-theater-warning: #f5a524;
      --ted-theater-danger: #ff99a4;
      --ted-theater-screen: var(--ted-theater-surface-2);
      --ted-theater-layer: #000000;
      --ted-theater-radius: 8px;
      --ted-theater-radius-sm: 4px;
      --ted-theater-pill: 999px;
      --ted-theater-gap: 14px;
      --ted-theater-touch: 44px;
      display: block;
      font-family: "Segoe UI Variable Text", "Segoe UI Variable", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    }

    /* theme: ha — follow the Home Assistant theme instead */
    .ted-card--theme-ha {
      --ted-theater-accent: var(--primary-color, #2196f3);
      --ted-theater-on-accent: var(--text-primary-color, #ffffff);
      --ted-theater-text: var(--primary-text-color, #1c1c1c);
      --ted-theater-muted: var(--secondary-text-color, #6f6f6f);
      --ted-theater-divider: var(--divider-color, rgba(120, 120, 120, 0.22));
      --ted-theater-surface: var(--ha-card-background, var(--card-background-color, #ffffff));
      --ted-theater-surface-2: color-mix(in srgb, var(--ted-theater-surface) 84%, var(--ted-theater-text) 16%);
      --ted-theater-screen: var(--ted-theater-surface-2);
      --ted-theater-success: var(--success-color, #43a047);
      --ted-theater-info: var(--info-color, #4dabf5);
      --ted-theater-warning: var(--warning-color, #f5a524);
      --ted-theater-danger: var(--error-color, #e5484d);
      --ted-theater-radius: var(--ha-card-border-radius, 12px);
      --ted-theater-radius-sm: var(--ha-border-radius-sm, min(var(--ha-card-border-radius, 12px), 14px));
      font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, inherit));
    }

    ha-card {
      overflow: hidden;
      position: relative;
    }

    /* Ted's Home Theater mode paints its own card surface so it looks identical under any HA theme */
    ha-card.ted-card--theme-ted-style {
      background: var(--ted-theater-surface);
      border: 1px solid var(--ted-theater-divider);
      color: var(--ted-theater-text);
      --ha-card-border-radius: var(--ted-theater-radius);
    }

    .header-row {
      align-items: center;
      display: flex;
      gap: var(--ted-theater-gap);
      justify-content: space-between;
      padding: 16px 16px 4px;
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
      background: var(--ted-theater-success);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-theater-success) 70%, transparent);
    }

    .status-dot--off {
      background: color-mix(in srgb, var(--ted-theater-muted) 55%, transparent);
    }

    .status-dot--temp-normal {
      background: var(--ted-theater-info);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-theater-info) 70%, transparent);
    }

    .status-dot--temp-warning {
      background: var(--ted-theater-warning);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-theater-warning) 70%, transparent);
    }

    .status-dot--temp-critical {
      background: var(--ted-theater-danger);
      box-shadow: 0 0 8px color-mix(in srgb, var(--ted-theater-danger) 70%, transparent);
    }

    .status-dot--temp-unknown {
      background: color-mix(in srgb, var(--ted-theater-muted) 55%, transparent);
    }

    .power-button {
      align-items: center;
      background: var(--ted-theater-surface-2);
      border: 1px solid var(--ted-theater-divider);
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
      box-sizing: border-box;
      color: color-mix(in srgb, var(--ted-theater-text) 60%, transparent);
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
      border-color: color-mix(in srgb, var(--ted-theater-accent) 45%, var(--ted-theater-divider));
    }

    .power-button:active {
      transform: scale(0.94);
    }

    .power-button:focus-visible {
      outline: 2px solid var(--ted-theater-accent);
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
          color-mix(in srgb, var(--ted-theater-accent) 76%, #ffffff) 8%,
          color-mix(in srgb, var(--ted-theater-accent) 90%, #000000) 100%);
      border-color: color-mix(in srgb, var(--ted-theater-accent) 55%, #ffffff);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--ted-theater-accent) 35%, transparent),
        0 0 16px color-mix(in srgb, var(--ted-theater-accent) 38%, transparent),
        0 2px 8px rgba(0, 0, 0, 0.28),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
      color: var(--ted-theater-on-accent);
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
      color: var(--ted-theater-muted);
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
      color: var(--ted-theater-text);
    }

    .icon-button:active {
      transform: scale(0.9);
    }

    .icon-button:focus-visible {
      outline: 2px solid var(--ted-theater-accent);
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
      background: var(--ted-theater-surface);
      border: 1px solid var(--ted-theater-divider);
      border-radius: var(--ted-theater-radius-sm);
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
      color: var(--ted-theater-text);
      font-size: 0.85rem;
      font-weight: 600;
    }

    .brightness-popover-icon {
      color: var(--ted-theater-muted);
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
        var(--ted-theater-accent) 0%,
        var(--ted-theater-accent) var(--ted-theater-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-theater-text) 18%, transparent) var(--ted-theater-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-theater-text) 18%, transparent) 100%
      );
      border-radius: var(--ted-theater-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: var(--ted-theater-surface);
      border: 1px solid color-mix(in srgb, var(--ted-theater-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      margin-left: -8px;
      width: 22px;
    }

    .brightness-slider-vertical::-moz-range-track {
      background: color-mix(in srgb, var(--ted-theater-text) 18%, transparent);
      border-radius: var(--ted-theater-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-moz-range-progress {
      background: var(--ted-theater-accent);
      border-radius: var(--ted-theater-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-moz-range-thumb {
      background: var(--ted-theater-surface);
      border: 1px solid color-mix(in srgb, var(--ted-theater-text) 20%, transparent);
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
      gap: var(--ted-theater-gap);
      padding: 16px;
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
      color: var(--ted-theater-muted);
      font-size: 0.95rem;
      font-weight: 500;
    }

    .value {
      color: var(--ted-theater-text);
      font-weight: 600;
      text-align: right;
      text-transform: capitalize;
    }

    .status-value {
      align-items: center;
      border-radius: var(--ted-theater-radius-sm);
      display: inline-flex;
      font-size: 0.85rem;
      gap: 6px;
      padding: 4px 12px;
      text-transform: none;
    }

    .status-value--on {
      background: color-mix(in srgb, var(--ted-theater-success) 16%, transparent);
      color: color-mix(in srgb, var(--ted-theater-success) 78%, var(--ted-theater-text));
    }

    .status-value--off {
      background: color-mix(in srgb, var(--ted-theater-muted) 16%, transparent);
      color: var(--ted-theater-muted);
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
      color: var(--ted-theater-muted);
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
      background: var(--ted-theater-surface-2);
      border: 1px solid var(--ted-theater-divider);
      border-radius: var(--ted-theater-radius-sm);
      color: var(--ted-theater-text);
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
      border-color: color-mix(in srgb, var(--ted-theater-accent) 50%, var(--ted-theater-divider));
    }

    .preset-button:active {
      transform: scale(0.96);
    }

    .preset-button:focus-visible {
      outline: 2px solid var(--ted-theater-accent);
      outline-offset: 2px;
    }

    .preset-button--active {
      background: var(--ted-theater-accent);
      border-color: color-mix(in srgb, var(--ted-theater-accent) 60%, #ffffff);
      box-shadow: 0 2px 10px color-mix(in srgb, var(--ted-theater-accent) 35%, transparent);
      color: var(--ted-theater-on-accent);
    }

    .preset-button:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .preset-button--more {
      align-items: center;
      color: var(--ted-theater-muted);
      justify-content: center;
    }

    .preset-button--more:hover {
      color: var(--ted-theater-text);
    }

    .preset-more-icon {
      fill: currentColor;
      height: 26px;
      width: 26px;
    }

    .brightness-control {
      align-items: center;
      background: var(--ted-theater-surface-2);
      border: 1px solid var(--ted-theater-divider);
      border-radius: var(--ted-theater-radius-sm);
      box-sizing: border-box;
      display: flex;
      flex: 1 1 auto;
      gap: 12px;
      min-height: var(--ted-theater-touch);
      padding: 0 16px;
      width: 100%;
    }

    .brightness-icon {
      color: var(--ted-theater-muted);
      fill: currentColor;
      flex: none;
      height: 20px;
      width: 20px;
    }

    .brightness-value {
      color: var(--ted-theater-text);
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
      height: var(--ted-theater-touch);
      margin: 0;
      width: 100%;
    }

    .brightness-slider::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        var(--ted-theater-accent) 0%,
        var(--ted-theater-accent) var(--ted-theater-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-theater-text) 18%, transparent) var(--ted-theater-brightness-fill, 50%),
        color-mix(in srgb, var(--ted-theater-text) 18%, transparent) 100%
      );
      border-radius: var(--ted-theater-pill);
      height: 6px;
    }

    .brightness-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: var(--ted-theater-surface);
      border: 1px solid color-mix(in srgb, var(--ted-theater-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      margin-top: -8px;
      width: 22px;
    }

    .brightness-slider::-moz-range-track {
      background: color-mix(in srgb, var(--ted-theater-text) 18%, transparent);
      border-radius: var(--ted-theater-pill);
      height: 6px;
    }

    .brightness-slider::-moz-range-progress {
      background: var(--ted-theater-accent);
      border-radius: var(--ted-theater-pill);
      height: 6px;
    }

    .brightness-slider::-moz-range-thumb {
      background: var(--ted-theater-surface);
      border: 1px solid color-mix(in srgb, var(--ted-theater-text) 20%, transparent);
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
      border-radius: var(--ted-theater-radius-sm);
      position: relative;
    }

    .layout-title {
      color: var(--ted-theater-muted);
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .layout-canvas {
      background: var(--ted-theater-screen);
      border: 1px solid var(--ted-theater-divider);
      border-radius: var(--ted-theater-radius-sm);
      display: block;
      width: 100%;
    }

    .layout-preview--compact .layout-canvas {
      border-radius: 0;
    }

    .layout-screen {
      fill: var(--ted-theater-screen);
      stroke: color-mix(in srgb, var(--ted-theater-text) 22%, #3a3a3a);
    }

    .layout-layer {
      fill: var(--ted-theater-layer);
      fill-opacity: 1;
      stroke: color-mix(in srgb, var(--ted-theater-accent) 55%, #8893a0);
    }

    .layout-layer-hitbox {
      cursor: pointer;
    }

    .layout-label {
      fill: var(--ted-theater-text);
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
      color: var(--ted-theater-muted);
      font-size: 0.72rem;
      letter-spacing: 0.02em;
      opacity: 0.7;
      text-align: right;
    }

    .ted-popover {
      background: var(--ted-theater-surface);
      border: 1px solid var(--ted-theater-divider);
      border-radius: var(--ted-theater-radius-sm);
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
      color: var(--ted-theater-muted);
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
      background: var(--ted-theater-surface-2);
      border: 1px solid var(--ted-theater-divider);
      border-radius: var(--ted-theater-radius-sm);
      color: var(--ted-theater-text);
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
      border-color: color-mix(in srgb, var(--ted-theater-accent) 45%, var(--ted-theater-divider));
    }

    .ted-popover-option.selected {
      background: color-mix(in srgb, var(--ted-theater-accent) 14%, transparent);
      border-color: var(--ted-theater-accent);
      box-shadow: inset 0 0 0 1px var(--ted-theater-accent);
    }

    .ted-popover-option:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `;labelMeasureContext;renderLayoutPreview(e,t=!1){let r=e.screenWidth,s=e.screenHeight,i=this.fitLayersToViewport(e.layers,r,s).sort((p,_)=>p.z-_.z),n="#000000",o="#4a4a4a",a="#d9d9d9",c="#808080",h="#ffffff",u=this.getLayerSourceRows(),v=this.getLayerSourceLabelMap(),y=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",m=this.hass?.states[y],A=this.optimisticPowerState??m?.state,E=!!m&&A!=="on",xe=Math.max(40,Math.min(s*.14,r*.1));return f`
      <div class=${t?"layout-preview layout-preview--compact":"layout-preview"}>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${r} ${s}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            class="layout-screen"
            x="0"
            y="0"
            width=${r}
            height=${s}
            fill=${n}
            stroke=${o}
            stroke-width="1"
          ></rect>
          ${!E&&i.length===0?k`<text class="layout-empty" x=${r/2} y=${s/2} text-anchor="middle" dominant-baseline="middle">No layers detected</text>`:l}
          <g class=${E?"layout-layers layout-layers--off":"layout-layers"}>
            ${i.map((p,_)=>{let C=this.resolveLayerSourceRow(u,p.id,_),T=this.resolveLayerSourceLabel(v,p.id,_)??p.source?.trim()??p.id,K=p.x+p.width/2,B=p.y+p.height/2,X=Math.min(p.width,p.height),Y=Math.max(54,r*.017),he=Math.max(X*.14,Y),G=Math.max(24,p.height*.38),b=Math.min(he,G),P=Math.max(18,b*.35),J=Math.max(32,p.width*.9),Q=b*.832/480,M=b*.72/320,Se=480*Q,D=b*.36,$=Se+D,U=J-P*2,R=U-$>=b*.62*2,Z=R?U-$:U,ue=Math.max(1,Math.floor(Z/Math.max(1,b*.62))),pe=T.length<=ue?T:`${T.slice(0,Math.max(1,ue-1))}\u2026`,ge=this.measureLabelWidth(pe,b)+2,fe=(R?$:0)+ge,ee=Math.min(J,fe+P*2),te=Math.max(28,b*1.35),ve=K-ee/2,Ae=B-te/2,ye=Math.max(6,te*.25),Ve=ve+P,ht=Ve-16*Q,ut=B-256*M,pt=R?Ve+$:K,gt=R?"start":"middle",ft=B+b*.1,g=Math.max(51,Math.min(138,X*.27)),je=Math.max(10,g*.22),N=Math.max(p.x+4,p.x+p.width-g-je),w=Math.min(p.y+je,p.y+p.height-g-4),Ee=N+g*.22,vt=w+g*.34,Ce=g*.18,yt=g*.32,mt=[`${Ee+Ce},${w+g*.26}`,`${N+g*.68},${w+g*.16}`,`${N+g*.68},${w+g*.84}`,`${Ee+Ce},${w+g*.74}`].join(" "),F=N+g*.7,V=w+g*.5,qe=p.audioOpen===!0,We=p.audioOpen===!1,re=qe?"var(--success-color, #43a047)":We?"var(--secondary-text-color, #8a8a8a)":"color-mix(in srgb, var(--secondary-text-color, #8a8a8a) 55%, transparent)",j=!!C&&!E;return k`
                <g>
                  <rect
                    class="layout-layer"
                    x=${p.x}
                    y=${p.y}
                    width=${p.width}
                    height=${p.height}
                    fill=${a}
                    stroke=${c}
                    stroke-width="3"
                  ></rect>
                  ${E?l:k`
                      <g>
                        <rect
                          x=${N}
                          y=${w}
                          width=${g}
                          height=${g}
                          rx=${g*.22}
                          ry=${g*.22}
                          fill="#111111"
                          fill-opacity="0.8"
                        ></rect>
                        <rect
                          x=${Ee}
                          y=${vt}
                          width=${Ce}
                          height=${yt}
                          fill=${re}
                        ></rect>
                        <polygon points=${mt} fill=${re}></polygon>
                        ${qe?k`
                            <path
                              d=${`M ${F} ${V-g*.13} Q ${F+g*.12} ${V} ${F} ${V+g*.13}`}
                              fill="none"
                              stroke=${re}
                              stroke-width=${g*.06}
                              stroke-linecap="round"
                            ></path>
                            <path
                              d=${`M ${F+g*.1} ${V-g*.22} Q ${F+g*.28} ${V} ${F+g*.1} ${V+g*.22}`}
                              fill="none"
                              stroke=${re}
                              stroke-width=${g*.06}
                              stroke-linecap="round"
                            ></path>
                          `:l}
                        ${We?k`
                            <line
                              x1=${N+g*.7}
                              y1=${w+g*.24}
                              x2=${N+g*.92}
                              y2=${w+g*.76}
                              stroke=${re}
                              stroke-width=${g*.08}
                              stroke-linecap="round"
                            ></line>
                          `:l}
                      </g>
                      <rect
                        class=${j?"layout-layer-hitbox":""}
                        x=${ve}
                        y=${Ae}
                        width=${ee}
                        height=${te}
                        rx=${ye}
                        ry=${ye}
                        fill="#111111"
                        fill-opacity="0.82"
                        @click=${j?se=>this.openLayerSourceChooser(C,se):l}
                      ></rect>
                      ${R?k`
                          <g
                            class=${j?"layout-layer-hitbox":""}
                            transform=${`translate(${ht} ${ut}) scale(${Q} ${M})`}
                            @click=${j?se=>this.openLayerSourceChooser(C,se):l}
                          >
                            <path d="M472 96H40a24.03 24.03 0 0 0-24 24v80h32v-72h416v256H48v-72H16v80a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V120a24.03 24.03 0 0 0-24-24" fill=${h}></path>
                            <path d="m212.687 323.078l22.626 22.627l90.511-90.509l-90.511-90.51l-22.626 22.628l51.881 51.882H16v31.999h248.569z" fill=${h}></path>
                          </g>
                        `:l}
                      <text
                        class=${j?"layout-layer-hitbox":""}
                        x=${pt}
                        y=${ft}
                        font-weight="700"
                        style=${`fill:${h};font-size:${b}px;font-family:inherit;`}
                        text-anchor=${gt}
                        dominant-baseline="middle"
                        @click=${j?se=>this.openLayerSourceChooser(C,se):l}
                      >${pe}</text>
                    `}
                </g>
              `})}
          </g>
          ${E?k`<text
                class="layout-off-label"
                x=${r/2}
                y=${s/2}
                text-anchor="middle"
                dominant-baseline="middle"
                style=${`font-size:${xe}px;`}
              >Screen Off</text>`:l}
        </svg>
        ${this.activeLayerSourceChooser?this.renderLayerSourceChooser(E):l}
      </div>
    `}measureLabelWidth(e,t){this.labelMeasureContext===void 0&&(this.labelMeasureContext=document.createElement("canvas").getContext("2d"));let r=this.labelMeasureContext;if(!r)return e.length*t*.55;let s="Roboto, Noto, sans-serif";try{let i=getComputedStyle(this).fontFamily;i&&(s=i)}catch{}return r.font=`700 ${t}px ${s}`,r.measureText(e).width}getLayerSourceLabelMap(){let e=new Map;for(let t of this.getLayerSourceRows()){let r=this.resolveSelectedOption(t.entity,t.options).trim();r&&e.set(t.layerNumber,r)}return e}resolveLayerSourceLabel(e,t,r){let s=[],i=Number.parseInt(t,10);Number.isFinite(i)&&(s.push(i),s.push(i+1)),s.push(r),s.push(r+1);for(let n of s){let o=e.get(n)?.trim();if(o)return o}}resolveLayerSourceRow(e,t,r){let s=[],i=Number.parseInt(t,10);Number.isFinite(i)&&(s.push(i),s.push(i+1)),s.push(r),s.push(r+1);for(let n of s){let o=e.find(a=>a.layerNumber===n);if(o)return o}return e[r]}renderLayerSourceChooser(e){let t=this.activeLayerSourceChooser;return t?f`
      <div
        id="ted-layer-popover"
        class="ted-popover"
        popover
        @toggle=${this.handleLayerPopoverToggle}
      >
        <div class="ted-popover-title">Layer ${t.layerNumber} Source</div>
        <div class="ted-popover-options">
          ${t.options.map(r=>f`
            <button
              type="button"
              class="ted-popover-option ${this.optionEquals(r,t.selectedOption)?"selected":""}"
              ?disabled=${e}
              @click=${()=>this.handleLayerSourceModalOptionClick(r)}
            >${r}</button>
          `)}
        </div>
      </div>
    `:l}handleLayerPopoverToggle=e=>{e.newState==="closed"&&this.activeLayerSourceChooser&&this.closeLayerSourceChooser()};openLayerSourceChooser(e,t){if(!e)return;let r=t?.currentTarget;this.layerAnchorRect=r?.getBoundingClientRect(),this.activeLayerSourceChooser={entityId:e.entityId,layerNumber:e.layerNumber,options:e.options,selectedOption:this.resolveSelectedOption(e.entity,e.options)},this.requestUpdate()}closeLayerSourceChooser=()=>{this.activeLayerSourceChooser=void 0,this.requestUpdate()};async handleLayerSourceModalOptionClick(e){let t=this.activeLayerSourceChooser,r=e.trim();!t||!r||(await this.selectLayerSourceOption(t.entityId,r),this.closeLayerSourceChooser())}fitLayersToViewport(e,t,r){return e.length===0?[]:e.map(s=>{if(!Number.isFinite(s.x)||!Number.isFinite(s.y)||!Number.isFinite(s.width)||!Number.isFinite(s.height)||s.width<=0||s.height<=0)return;let i=Math.max(0,s.x),n=Math.max(0,s.y),o=Math.min(t,s.x+s.width),a=Math.min(r,s.y+s.height),c=o-i,h=a-n;if(!(c<=0||h<=0))return{...s,x:i,y:n,width:c,height:h}}).filter(s=>!!s)}readNumberAttribute(e,t,r){let s=e.attributes[t];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let i=Number.parseFloat(s);if(Number.isFinite(i))return i}return r}readStringListAttribute(e,t){if(!e)return[];let r=e.attributes[t];return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}resolveSelectedOption(e,t){let r=e.state?.trim(),s=[r,this.readStringAttribute(e,"current_option"),this.readStringAttribute(e,"selected_option"),this.readStringAttribute(e,"source"),this.readStringAttribute(e,"current_source")].filter(i=>!!i);for(let i of s){let n=t.find(c=>c===i);if(n)return n;let o=i.toLowerCase(),a=t.find(c=>c.toLowerCase()===o);if(a)return a}return r??""}readStringAttribute(e,t){let r=e.attributes[t];return typeof r!="string"?void 0:r.trim()||void 0}optionEquals(e,t){if(e===t)return!0;let r=e.trim().toLowerCase(),s=t.trim().toLowerCase();return r===s}sortedEqual(e,t){if(e.length!==t.length)return!1;let r=n=>n.map(o=>o.trim().toLowerCase()).sort(),s=r(e),i=r(t);return s.every((n,o)=>n===i[o])}arrangePresets(e){let t=this.config?.preset_order;if(!Array.isArray(t)||t.length===0)return e;let r=this.config?.preset_baseline;if(Array.isArray(r)&&r.length>0&&!this.sortedEqual(r,e))return e;let s=[],i=new Set;for(let n of t){let o=e.find(a=>!i.has(a)&&this.optionEquals(a,n));o&&(s.push(o),i.add(o))}return s.length>0?s:e}readLayoutPayload(e,t){if(!e||!t){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!e,hasLayersEntity:!!t});return}let r=this.readFirstScreen(e);if(!r){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let s=this.readFiniteNumber(r.width??r.w),i=this.readFiniteNumber(r.height??r.h);if(!s||!i||s<=0||i<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:s,screenHeight:i,firstScreen:r});return}let n=this.readLayersCollection(t),o=n.map((a,c)=>this.normalizeLayoutLayer(a,c)).filter(a=>!!a);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:o.length,screenWidth:s,screenHeight:i}),{screenWidth:s,screenHeight:i,layers:o}}readFirstScreen(e){let t=[e.state,e.attributes.screens,e.attributes.screen_list,e.attributes.screen,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let r of t){let s=this.parseStructuredValue(r);if(Array.isArray(s)&&s.length>0){let o=this.asRecord(s[0]);if(o)return o}let i=this.asRecord(s);if(!i)continue;let n=i.screens;if(Array.isArray(n)&&n.length>0){let o=this.asRecord(n[0]);if(o)return o}if(this.readFiniteNumber(i.width??i.w)&&this.readFiniteNumber(i.height??i.h))return i}if(this.readFiniteNumber(e.attributes.width??e.attributes.w)&&this.readFiniteNumber(e.attributes.height??e.attributes.h))return e.attributes}readLayersCollection(e){let t=[e.state,e.attributes.layers,e.attributes.layer_list,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let r of t){let s=this.parseStructuredValue(r);if(Array.isArray(s))return s;let i=this.asRecord(s);if(!i)continue;if(Array.isArray(i.layers))return i.layers;if(Array.isArray(i.layer_list))return i.layer_list;let n=this.asRecord(i.result);if(n&&Array.isArray(n.layers))return n.layers;let o=this.asRecord(i.data);if(o&&Array.isArray(o.layers))return o.layers;let a=Object.values(i).map(c=>this.asRecord(c)).filter(c=>!!c).filter(c=>!!this.asRecord(c.general)&&!!this.asRecord(c.window));if(a.length>0)return a;if(this.asRecord(i.general)&&this.asRecord(i.window))return[i]}return[]}parseStructuredValue(e){if(typeof e!="string")return e;try{return JSON.parse(e)}catch{return e}}asRecord(e){if(!(!e||typeof e!="object"||Array.isArray(e)))return e}readFiniteNumber(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Number.parseFloat(e);if(Number.isFinite(t))return t}}normalizeLayoutLayer(e,t){let r=this.asRecord(e);if(!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:t,value:e});return}let s=this.asRecord(r.general),i=this.asRecord(r.window),n=this.asRecord(r.audioStatus);if(!s||!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:t,hasGeneral:!!s,hasWindow:!!i,layer:r});return}let o=this.readFiniteNumber(i.width),a=this.readFiniteNumber(i.height),c=this.readFiniteNumber(i.x)??0,h=this.readFiniteNumber(i.y)??0;if(!o||!a||o<=0||a<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:t,width:o,height:a,windowData:i});return}let u=s.layerId;if(typeof u!="string"&&typeof u!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:t,layerId:u,general:s});return}let v=this.readFiniteNumber(s.zorder);if(v===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:t,zorder:s.zorder,general:s});return}let y=typeof s.name=="string"?s.name:void 0,m=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:t,layerId:u,x:c,y:h,width:o,height:a,zValue:v,source:y,audioOpen:m}),{id:String(u),x:c,y:h,width:o,height:a,z:v,source:y,audioOpen:m}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(e,t){if(this.isLayoutDebugEnabled()){if(t===void 0){console.debug("[NovastarCard][layout]",e);return}console.debug("[NovastarCard][layout]",e,t)}}buildRelevantStateSignature(e){if(!e)return"";let t=new Set,r=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of r){let o=this.config?.[n];o&&t.add(o);let a=this.resolvedEntities[n];a&&t.add(a)}t.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(e.states))s.test(n)&&t.add(n);return Array.from(t).sort().map(n=>{let o=e.states[n];if(!o)return`${n}:missing`;let a=this.readStringListAttribute(o,"options").join("|"),c=this.readStringAttribute(o,"current_option")??"",h=this.readStringAttribute(o,"selected_option")??"",u=this.readStringAttribute(o,"source")??"",v=this.readStringAttribute(o,"current_source")??"";return`${n}:${o.state}:${a}:${c}:${h}:${u}:${v}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(e){await new Promise(t=>{window.setTimeout(()=>t(),e)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(e=>({entityId:e,entity:this.hass?.states[e]})).filter(e=>!!e.entity).map(e=>{let t=this.readStringListAttribute(e.entity,"options");return{...e,options:t,layerNumber:this.getLayerNumber(e.entityId)}}).filter(e=>e.options.length>0&&e.entity.state!=="unavailable"&&e.entity.state!=="unknown").sort((e,t)=>e.layerNumber-t.layerNumber):[]}getLayerSourceEntityIds(){let e=/^select\..*_layer_\d+_source$/,t=this.resolvedLayerSourceEntities,r=this.hass?Object.keys(this.hass.states).filter(s=>e.test(s)):[];return t.length===0?r:r.length===0?t:Array.from(new Set([...t,...r]))}getLayerNumber(e){let t=e.match(/_layer_(\d+)_source$/);if(!t)return Number.MAX_SAFE_INTEGER;let r=Number.parseInt(t[1],10);return Number.isFinite(r)?r:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(e){if(!this.hass)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",r=this.hass.states[t];if(r&&r.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let i=e.target,n=Number.parseFloat(i.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t)return;let s=(this.optimisticPowerState??t.state)!=="on";this.optimisticPowerState=s?"on":"off",this.requestUpdate();let i=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",i,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetButtonClick(e){if(!this.hass)return;let t=this.getEntityId("preset_entity"),r=e.trim();!t||!r||(await this.hass.callService?.("select","select_option",{entity_id:t,option:r}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(e){if(!this.hass)return;let t=e.target,r=t.dataset.entityId,s=t.value?.trim();!r||!s||await this.selectLayerSourceOption(r,s)}async selectLayerSourceOption(e,t){this.hass&&await this.hass.callService?.("select","select_option",{entity_id:e,option:t})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t){this.optimisticPowerState=void 0;return}t.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(e){let t=this.config?.[e];if(t&&t.trim())return t;let r=this.resolvedEntities[e];if(r&&r.trim())return r}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let e=this.config.device_id?.trim();if(!e){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==e&&!(this.resolvedDeviceId===e&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=e;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let r=t.filter(o=>{if(!o||typeof o!="object")return!1;let a=o;return a.device_id===e&&!a.disabled_by&&!a.hidden_by&&typeof a.entity_id=="string"}).map(o=>o.entity_id),s=/^select\..*_layer_\d+_source$/,i=r.filter(o=>s.test(o)).sort((o,a)=>this.getLayerNumber(o)-this.getLayerNumber(a)),n={power_entity:this.pickEntity(r,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(r,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(r,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(r,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(r,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(r,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(r,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(r,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(r,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(r,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=i,this.resolvedDeviceId=e,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===e&&(this.resolvingDeviceId=void 0)}}}pickEntity(e,t,r){for(let s of t){let i=e.find(n=>s.test(n));if(i)return i}for(let s of r){let i=`${s}.`,n=e.find(o=>o.startsWith(i));if(n)return n}}},Rt={header:"Name",display_mode:"Display mode",theme:"Theme styling",show_header_in_compact:"Show header in Compact mode",show_card_version:"Show card version",preset_order:"Preset order",screen_color:"Screen color",screen_background_color:"Screen background color",device_id:"Device",power_entity:"Power entity",preset_entity:"Preset selection entity",screens_entity:"Screens entity",layers_entity:"Layers entity",controller_entity:"Controller entity",status_entity:"Status entity",brightness_entity:"Brightness entity",temperature_entity:"Temperature entity"},Fe=class extends S{hass;config={type:"custom:novastar-h-series-card"};attemptedAutoDeviceDefault=!1;presetOptions=[];presetOptionsKey;resolvedPresetEntityId;resolvingPresetKey;presetsResetNotice=!1;static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t,this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensurePresetOptions(),this.maybeResetStalePresetOrder()}render(){if(!this.hass)return l;let e={display_mode:"standard",theme:"ted-style",...this.config};return f`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this.buildSchema()}
        .computeLabel=${this.computeLabel}
        .computeHelper=${this.computeHelper}
        @value-changed=${this.handleValueChanged}
      ></ha-form>
    `}buildSchema(){let e=this.config.display_mode??"standard",t=!!(this.config.power_entity||this.config.preset_entity||this.config.screens_entity||this.config.layers_entity||this.config.controller_entity||this.config.status_entity||this.config.brightness_entity||this.config.temperature_entity),r=[{name:"header",selector:{text:{placeholder:"Novastar H Series"}}},{name:"device_id",selector:{device:{filter:{integration:"novastar_h"}}}},{name:"display_mode",required:!0,selector:{select:{mode:"dropdown",options:[{value:"detailed",label:"Detailed"},{value:"standard",label:"Standard"},{value:"compact",label:"Compact"}]}}},{name:"theme",required:!0,selector:{select:{mode:"dropdown",options:[{value:"ted-style",label:"Ted's Home Theater (default)"},{value:"ha",label:"Home Assistant theme"}]}}},{name:"screen_color",selector:{ui_color:{}}},{name:"screen_background_color",selector:{ui_color:{}}}];return e==="compact"&&r.push({name:"show_header_in_compact",selector:{boolean:{}}}),e==="detailed"&&r.push({name:"show_card_version",selector:{boolean:{}}}),this.presetOptions.length>0&&r.push({name:"preset_order",selector:{select:{multiple:!0,reorder:!0,options:this.presetOptions.map(s=>({value:s,label:s}))}}}),r.push({name:"",type:"expandable",title:"Override entities",flatten:!0,expanded:t,schema:[{name:"power_entity",selector:{entity:{}}},{name:"preset_entity",selector:{entity:{}}},{name:"screens_entity",selector:{entity:{}}},{name:"layers_entity",selector:{entity:{}}},{name:"controller_entity",selector:{entity:{}}},{name:"status_entity",selector:{entity:{}}},{name:"brightness_entity",selector:{entity:{}}},{name:"temperature_entity",selector:{entity:{}}}]}),r}computeLabel=e=>Rt[e.name]??e.name;computeHelper=e=>{if(e.name!=="preset_order")return"";if(this.presetOptions.length===0)return"Select a device to load its presets.";let t="Drag to reorder. Remove a preset to hide it. Clear the field to show every preset again.";return this.presetsResetNotice?`Presets changed on the device, so your custom order was reset. ${t}`:t};handleValueChanged=e=>{e.stopPropagation();let t={...e.detail.value};t.type="custom:novastar-h-series-card",t.display_mode==="standard"&&delete t.display_mode,t.theme==="ted-style"&&delete t.theme,t.show_header_in_compact!==!0&&delete t.show_header_in_compact,t.show_card_version!==!0&&delete t.show_card_version,this.reconcilePresetOrder(t);let r=["header","device_id","power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let s of r){let i=t[s];(i==null||typeof i=="string"&&i.trim()==="")&&delete t[s]}this.config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))};reconcilePresetOrder(e){if(this.presetOptions.length===0){Array.isArray(this.config.preset_order)&&this.config.preset_order.length>0?(e.preset_order=this.config.preset_order,Array.isArray(this.config.preset_baseline)&&this.config.preset_baseline.length>0?e.preset_baseline=this.config.preset_baseline:delete e.preset_baseline):(delete e.preset_order,delete e.preset_baseline);return}let t=this.normalizePresetOrder(e.preset_order);t.length===0||this.listSequenceEqual(t,this.presetOptions)?(delete e.preset_order,delete e.preset_baseline):(e.preset_order=t,e.preset_baseline=[...this.presetOptions]),this.presetsResetNotice=!1}normalizePresetOrder(e){if(!Array.isArray(e))return[];let t=[],r=new Set;for(let s of e){if(typeof s!="string")continue;let i=s.trim().toLowerCase(),n=this.presetOptions.find(a=>a.trim().toLowerCase()===i);if(!n)continue;let o=n.toLowerCase();r.has(o)||(r.add(o),t.push(n))}return t}async ensurePresetOptions(){if(!this.hass)return;let e=this.config.preset_entity?.trim()??"",t=this.config.device_id?.trim()??"",r=`${e}|${t}`;if(r!==this.presetOptionsKey&&(this.presetOptionsKey=r,this.resolvedPresetEntityId=e||void 0,!e&&t&&this.hass.callWS&&this.resolvingPresetKey!==r)){this.resolvingPresetKey=r;try{let a=await this.hass.callWS({type:"config/entity_registry/list"});if(this.presetOptionsKey===r&&Array.isArray(a)){let c=a.filter(h=>{if(!h||typeof h!="object")return!1;let u=h;return u.device_id===t&&!u.disabled_by&&!u.hidden_by&&typeof u.entity_id=="string"}).map(h=>h.entity_id);this.resolvedPresetEntityId=c.find(h=>/_preset$/.test(h))??c.find(h=>h.startsWith("select."))}}catch{}finally{this.resolvingPresetKey===r&&(this.resolvingPresetKey=void 0)}}let s=this.resolvedPresetEntityId,n=(s?this.hass.states[s]:void 0)?.attributes?.options,o=Array.isArray(n)?n.filter(a=>typeof a=="string"):[];this.listSequenceEqual(o,this.presetOptions)||(this.presetOptions=o,this.requestUpdate())}maybeResetStalePresetOrder(){if(this.presetOptions.length===0)return;let e=this.config.preset_order,t=this.config.preset_baseline;if(!Array.isArray(e)||e.length===0||!Array.isArray(t)||t.length===0||this.nameSetEqual(t,this.presetOptions))return;let r={...this.config,type:"custom:novastar-h-series-card"};delete r.preset_order,delete r.preset_baseline,this.config=r,this.presetsResetNotice=!0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}listSequenceEqual(e,t){return e.length===t.length&&e.every((r,s)=>r===t[s])}nameSetEqual(e,t){if(e.length!==t.length)return!1;let r=n=>n.map(o=>o.trim().toLowerCase()).sort(),s=r(e),i=r(t);return s.every((n,o)=>n===i[o])}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let t=e.filter(s=>{if(!s||typeof s!="object")return!1;let i=s;return i.platform==="novastar_h"&&typeof i.device_id=="string"&&!i.disabled_by&&!i.hidden_by}).map(s=>s.device_id)[0];if(!t)return;let r={...this.config,type:"custom:novastar-h-series-card",device_id:t};this.config=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}catch{}}}static styles=_e`
    ha-form {
      display: block;
    }
  `};try{customElements.define("novastar-h-series-card",Ue)}catch{}try{customElements.define("novastar-h-series-card-editor",Fe)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{Ue as NovastarHSeriesCard};
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
