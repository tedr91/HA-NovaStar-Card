var ve=globalThis,ge=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),De=new WeakMap,G=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ge&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&De.set(t,e))}return e}toString(){return this.cssText}},Te=c=>new G(typeof c=="string"?c:c+"",void 0,we),fe=(c,...e)=>{let t=c.length===1?c[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+c[i+1],c[0]);return new G(t,c,we)},Ue=(c,e)=>{if(ge)c.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),s=ve.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,c.appendChild(r)}},xe=ge?c=>c:c=>c instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Te(t)})(c):c;var{is:st,defineProperty:it,getOwnPropertyDescriptor:nt,getOwnPropertyNames:ot,getOwnPropertySymbols:at,getPrototypeOf:ct}=Object,ye=globalThis,Fe=ye.trustedTypes,dt=Fe?Fe.emptyScript:"",lt=ye.reactiveElementPolyfillSupport,J=(c,e)=>c,Se={toAttribute(c,e){switch(e){case Boolean:c=c?dt:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c)}return c},fromAttribute(c,e){let t=c;switch(e){case Boolean:t=c!==null;break;case Number:t=c===null?null:Number(c);break;case Object:case Array:try{t=JSON.parse(c)}catch{t=null}}return t}},Ve=(c,e)=>!st(c,e),je={attribute:!0,type:String,converter:Se,reflect:!1,useDefault:!1,hasChanged:Ve};Symbol.metadata??=Symbol("metadata"),ye.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=je){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&it(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){let{get:s,set:i}=nt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let o=s?.call(this);i?.call(this,n),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??je}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let e=ct(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let t=this.properties,r=[...ot(t),...at(t)];for(let s of r)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let s of r)t.unshift(xe(s))}else e!==void 0&&t.push(xe(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ue(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Se).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Se;this._$Em=s;let o=n.fromAttribute(t,i.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,r,s=!1,i){if(e!==void 0){let n=this.constructor;if(s===!1&&(i=this[e]),r??=n.getPropertyOptions(e),!((r.hasChanged??Ve)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:i},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:n}=i,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,i,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[J("elementProperties")]=new Map,A[J("finalized")]=new Map,lt?.({ReactiveElement:A}),(ye.reactiveElementVersions??=[]).push("2.1.2");var Me=globalThis,qe=c=>c,me=Me.trustedTypes,We=me?me.createPolicy("lit-html",{createHTML:c=>c}):void 0,Qe="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,Ze="?"+P,ht=`<${Ze}>`,O=document,Z=()=>O.createComment(""),ee=c=>c===null||typeof c!="object"&&typeof c!="function",Re=Array.isArray,ut=c=>Re(c)||typeof c?.[Symbol.iterator]=="function",Ae=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Ye=/>/g,R=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Ge=/"/g,et=/^(?:script|style|textarea|title)$/i,Ne=c=>(e,...t)=>({_$litType$:c,strings:e,values:t}),v=Ne(1),se=Ne(2),$t=Ne(3),I=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Je=new WeakMap,N=O.createTreeWalker(O,129);function tt(c,e){if(!Re(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(e):e}var pt=(c,e)=>{let t=c.length-1,r=[],s,i=e===2?"<svg>":e===3?"<math>":"",n=Q;for(let o=0;o<t;o++){let a=c[o],d,u,l=-1,f=0;for(;f<a.length&&(n.lastIndex=f,u=n.exec(a),u!==null);)f=n.lastIndex,n===Q?u[1]==="!--"?n=Ke:u[1]!==void 0?n=Ye:u[2]!==void 0?(et.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=R):u[3]!==void 0&&(n=R):n===R?u[0]===">"?(n=s??Q,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?R:u[3]==='"'?Ge:Xe):n===Ge||n===Xe?n=R:n===Ke||n===Ye?n=Q:(n=R,s=void 0);let y=n===R&&c[o+1].startsWith("/>")?" ":"";i+=n===Q?a+ht:l>=0?(r.push(d),a.slice(0,l)+Qe+a.slice(l)+P+y):a+P+(l===-2?o:y)}return[tt(c,i+(c[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},te=class c{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,n=0,o=e.length-1,a=this.parts,[d,u]=pt(e,t);if(this.el=c.createElement(d,r),N.currentNode=this.el.content,t===2||t===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=N.nextNode())!==null&&a.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let l of s.getAttributeNames())if(l.endsWith(Qe)){let f=u[n++],y=s.getAttribute(l).split(P),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:b[2],strings:y,ctor:b[1]==="."?Ce:b[1]==="?"?Le:b[1]==="@"?ke:U}),s.removeAttribute(l)}else l.startsWith(P)&&(a.push({type:6,index:i}),s.removeAttribute(l));if(et.test(s.tagName)){let l=s.textContent.split(P),f=l.length-1;if(f>0){s.textContent=me?me.emptyScript:"";for(let y=0;y<f;y++)s.append(l[y],Z()),N.nextNode(),a.push({type:2,index:++i});s.append(l[f],Z())}}}else if(s.nodeType===8)if(s.data===Ze)a.push({type:2,index:i});else{let l=-1;for(;(l=s.data.indexOf(P,l+1))!==-1;)a.push({type:7,index:i}),l+=P.length-1}i++}}static createElement(e,t){let r=O.createElement("template");return r.innerHTML=e,r}};function T(c,e,t=c,r){if(e===I)return e;let s=r!==void 0?t._$Co?.[r]:t._$Cl,i=ee(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(c),s._$AT(c,t,r)),r!==void 0?(t._$Co??=[])[r]=s:t._$Cl=s),s!==void 0&&(e=T(c,s._$AS(c,e.values),s,r)),e}var Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??O).importNode(t,!0);N.currentNode=s;let i=N.nextNode(),n=0,o=0,a=r[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new re(i,i.nextSibling,this,e):a.type===1?d=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(d=new Pe(i,this,e)),this._$AV.push(d),a=r[++o]}n!==a?.index&&(i=N.nextNode(),n++)}return N.currentNode=O,s}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},re=class c{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),ee(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==I&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ut(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=te.createElement(tt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{let i=new Ee(s,this),n=i.u(this.options);i.p(t),this.T(n),this._$AH=i}}_$AC(e){let t=Je.get(e.strings);return t===void 0&&Je.set(e.strings,t=new te(e)),t}k(e){Re(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,s=0;for(let i of e)s===t.length?t.push(r=new c(this.O(Z()),this.O(Z()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=qe(e).nextSibling;qe(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(e,t=this,r,s){let i=this.strings,n=!1;if(i===void 0)e=T(this,e,t,0),n=!ee(e)||e!==this._$AH&&e!==I,n&&(this._$AH=e);else{let o=e,a,d;for(e=i[0],a=0;a<i.length-1;a++)d=T(this,o[r+a],t,a),d===I&&(d=this._$AH[a]),n||=!ee(d)||d!==this._$AH[a],d===h?e=h:e!==h&&(e+=(d??"")+i[a+1]),this._$AH[a]=d}n&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ce=class extends U{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Le=class extends U{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},ke=class extends U{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??h)===I)return;let r=this._$AH,s=e===h&&r!==h||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==h&&(r===h||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Pe=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}};var vt=Me.litHtmlPolyfillSupport;vt?.(te,re),(Me.litHtmlVersions??=[]).push("3.3.2");var rt=(c,e,t)=>{let r=t?.renderBefore??e,s=r._$litPart$;if(s===void 0){let i=t?.renderBefore??null;r._$litPart$=s=new re(e.insertBefore(Z(),i),i,void 0,t??{})}return s._$AI(c),s};var Oe=globalThis,E=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};E._$litElement$=!0,E.finalized=!0,Oe.litElementHydrateSupport?.({LitElement:E});var gt=Oe.litElementPolyfillSupport;gt?.({LitElement:E});(Oe.litElementVersions??=[]).push("4.2.2");var Ie=class c extends E{static LAYOUT_BUILD_MARKER="v1.0.20-1-gd561069-dirty";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";activeLayerSourceChooser;presetChooserOpen=!1;presetAnchorRect;layerAnchorRect;static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(e){let t=this._hass;this._hass=e;let r=this.buildRelevantStateSignature(e),s=r!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=r,(t!==e||s)&&this.requestUpdate("hass",t)}setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",header:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState(),this.syncChooserPopovers()}syncChooserPopovers(){let e=this.renderRoot,t=e.getElementById("nova-preset-popover");t&&this.presetChooserOpen&&!t.matches(":popover-open")&&(t.showPopover?.(),this.positionChooserPopover(t,this.presetAnchorRect));let r=e.getElementById("nova-layer-popover");r&&this.activeLayerSourceChooser&&!r.matches(":popover-open")&&(r.showPopover?.(),this.positionChooserPopover(r,this.layerAnchorRect))}positionChooserPopover(e,t){let s=window.innerWidth,i=window.innerHeight,n=e.getBoundingClientRect();if(e.style.position="fixed",e.style.margin="0",!t){e.style.left=`${Math.round((s-n.width)/2)}px`,e.style.top=`${Math.round((i-n.height)/2)}px`;return}let o=t.right-n.width;o=Math.max(8,Math.min(o,s-n.width-8));let a=t.bottom+8;a+n.height>i-8&&t.top-8-n.height>=8&&(a=t.top-8-n.height),a=Math.max(8,Math.min(a,i-n.height-8)),e.style.left=`${Math.round(o)}px`,e.style.top=`${Math.round(a)}px`}render(){if(!this.config)return v`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return v`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let e=this.getEntityId("controller_entity");if(!e){let k=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return v`<ha-card><div class="content">${k}</div></ha-card>`}let t=this.hass.states[e];if(!t)return v`<ha-card><div class="content">Entity not found: ${e}</div></ha-card>`;let r=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),i=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),o=this.getEntityId("status_entity"),a=this.getEntityId("brightness_entity"),d=this.getEntityId("temperature_entity"),u=this.hass.states[r],f=(this.optimisticPowerState??u?.state)==="on",y=!!u&&!f,b=o?this.hass.states[o]:void 0,C=s?this.hass.states[s]:void 0,ie=i?this.hass.states[i]:void 0,g=n?this.hass.states[n]:void 0,m=a?this.hass.states[a]:void 0,$=d?this.hass.states[d]:void 0,M=m?Number.parseFloat(m.state):Number.NaN,F=m?this.readNumberAttribute(m,"min",0):0,j=m?this.readNumberAttribute(m,"max",100):100,V=m?this.readNumberAttribute(m,"step",1):1,ne=!!m&&Number.isFinite(M),q=m?this.readStringAttribute(m,"unit_of_measurement")??"":"",oe=this.readStringListAttribute(C,"options"),w=this.arrangePresets(oe),W=C?this.resolveSelectedOption(C,oe):"",z=this.readLayoutPayload(ie,g),K=b?`${t.state} (${b.state})`:t.state,ae=$?this.readStringAttribute($,"unit_of_measurement")??"":"",H=this.getDisplayMode(),ce=this.getThemeMode(),L=H==="compact",x=H==="detailed",de=this.config.show_header_in_compact===!0,le=!L||de,p=L&&!de,he=this.config.header??"Novastar H Series",S=["content",`content--${H}`,p?"content--bare":""].filter(Boolean).join(" "),_=!x&&!!u,B=!x&&!!$,ue=!x&&ne,Y=_||B||ue,be=this.getTemperatureSeverity($?.state),_e=this.getLayoutColorStyle();return v`
      <ha-card
        class="nova-card nova-card--${H} nova-card--theme-${ce} ${f?"is-on":"is-off"}"
        style=${_e}
      >
        ${le?v`
              <div class="header-row">
                <div class="header-lead">
                  <div class="header">${he}</div>
                </div>
                <div class="header-actions">
                  ${Y?v`
                        <div class="header-status">
                          ${_?v`<span
                                class="status-dot ${f?"status-dot--on":"status-dot--off"}"
                                title=${K}
                              ></span>`:h}
                          ${B?v`<span
                                class="status-dot ${f?`status-dot--temp-${be}`:"status-dot--off"}"
                                title=${`Temperature: ${$?.state??""}`}
                              ></span>`:h}
                          ${ue?this.renderHeaderBrightnessToggle(F,j,V,M,y,q):h}
                        </div>
                      `:h}
                  ${u?this.renderPowerButton(f):h}
                </div>
              </div>
            `:h}
        <div class=${S}>
          ${x?v`
                <div class="row">
                  <span class="label">Status</span>
                  <span class="value status-value status-value--${f?"on":"off"}">${K}</span>
                </div>
                ${$?v`
                      <div class="row">
                        <span class="label">Temperature</span>
                        <span class="value">${$.state}${ae}</span>
                      </div>
                    `:h}
                ${m?v`
                      <div class="row input-row">
                        <span class="label">Brightness</span>
                        ${ne?this.renderBrightnessControl(F,j,V,M,y,q):v`<span class="value">${m.state}${q}</span>`}
                      </div>
                    `:h}
              `:h}
          ${!L&&C?this.renderPresetArea(w,W,y,x,C):h}
          ${z?x?v`
                  <div class="layout-area">
                    <div class="preset-heading">Layout and Inputs</div>
                    ${this.renderLayoutPreview(z,p)}
                  </div>
                `:this.renderLayoutPreview(z,p):L?v`<div class="row"><span class="label">Layout</span><span class="value">Unavailable</span></div>`:h}
          ${x&&this.config.show_card_version===!0?this.renderVersionFooter():h}
        </div>
        ${this.presetChooserOpen&&C&&w.length>0?this.renderPresetChooser(w,W,y):h}
      </ha-card>
    `}getDisplayMode(){let e=this.config?.display_mode;return e==="detailed"||e==="compact"?e:"standard"}getThemeMode(){return this.config?.theme==="ha"?"ha":"nova"}getTemperatureSeverity(e){let t=(e??"").trim().toLowerCase();return t==="normal"?"normal":t==="warning"?"warning":t==="critical"?"critical":"unknown"}resolveConfigColor(e){if(typeof e!="string")return;let t=e.trim();if(t){if(/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t)||/^(rgb|rgba|hsl|hsla)\(/i.test(t))return t;if(/^[a-z]+(-[a-z]+)*$/i.test(t))return`var(--${t}-color)`}}getLayoutColorStyle(){let e=[],t=this.resolveConfigColor(this.config?.screen_color);t&&e.push(`--nova-layer: ${t};`);let r=this.resolveConfigColor(this.config?.screen_background_color);return r&&e.push(`--nova-screen: ${r};`),e.join(" ")}renderPowerButton(e){return v`
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
    `}renderHeaderBrightnessToggle(e,t,r,s,i,n){let o=t-e||1,a=Math.max(0,Math.min(100,Math.round((s-e)/o*100))),d=n?`${Math.round(s)}${n}`:`${a}%`;return v`
      <button
        type="button"
        class="icon-button"
        id="nova-brightness-anchor"
        popovertarget="nova-brightness-popover"
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
        id="nova-brightness-popover"
        class="brightness-popover"
        popover
        @beforetoggle=${this.handleBrightnessPopoverToggle}
      >
        <span class="brightness-popover-value">${d}</span>
        <input
          class="brightness-slider-vertical"
          type="range"
          orient="vertical"
          min=${e}
          max=${t}
          step=${r}
          data-unit=${n}
          style=${`--nova-brightness-fill:${a}%`}
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
    `}handleBrightnessPopoverToggle=e=>{if(e.newState!=="open")return;let r=this.renderRoot,s=r.getElementById("nova-brightness-anchor"),i=r.getElementById("nova-brightness-popover");if(!s||!i)return;let n=s.getBoundingClientRect();i.style.top=`${Math.round(n.bottom+8)}px`,i.style.left="auto",i.style.right=`${Math.round(window.innerWidth-n.right)}px`};handleBrightnessInput=e=>{let t=e.target,r=Number.parseFloat(t.min),s=Number.parseFloat(t.max),i=Number.parseFloat(t.value);if(!Number.isFinite(i))return;let n=Number.isFinite(r)?r:0,a=(Number.isFinite(s)?s:100)-n||1,d=Math.max(0,Math.min(100,Math.round((i-n)/a*100)));t.style.setProperty("--nova-brightness-fill",`${d}%`);let l=t.closest(".brightness-popover")?.querySelector(".brightness-popover-value");if(l){let f=t.dataset.unit??"";l.textContent=f?`${Math.round(i)}${f}`:`${d}%`}};renderBrightnessControl(e,t,r,s,i,n){let o=t-e||1,a=Math.max(0,Math.min(100,Math.round((s-e)/o*100))),d=n?`${Math.round(s)}${n}`:`${a}%`;return v`
      <div class="brightness-control" style=${`--nova-brightness-fill:${a}%`}>
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
        <span class="brightness-value">${d}</span>
      </div>
    `}renderPresetArea(e,t,r,s,i){if(e.length===0)return v`
        <div class="preset-area">
          ${s?v`<div class="preset-heading">Presets</div>`:h}
          <div class="row"><span class="value">${i.state}</span></div>
        </div>
      `;let n=!s&&e.length>5,o=s||!n?e:e.slice(0,4);return v`
      <div class="preset-area">
        ${s?v`<div class="preset-heading">Presets</div>`:h}
        <div class="preset-grid" role="group" aria-label="Presets">
          ${o.map(a=>{let d=this.optionEquals(a,t);return v`
              <button
                type="button"
                class="preset-button ${d?"preset-button--active":""}"
                ?disabled=${r}
                aria-pressed=${d?"true":"false"}
                title=${a}
                @click=${()=>this.handlePresetButtonClick(a)}
              ><span class="preset-button-label">${a}</span></button>
            `})}
          ${n?v`
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
              `:h}
        </div>
      </div>
    `}renderPresetChooser(e,t,r){return v`
      <div
        id="nova-preset-popover"
        class="nova-popover"
        popover
        @toggle=${this.handlePresetPopoverToggle}
      >
        <div class="nova-popover-title">Select Preset</div>
        <div class="nova-popover-options">
          ${e.map(s=>v`
            <button
              type="button"
              class="nova-popover-option ${this.optionEquals(s,t)?"selected":""}"
              ?disabled=${r}
              @click=${()=>this.handlePresetChooserOptionClick(s)}
            >${s}</button>
          `)}
        </div>
      </div>
    `}handlePresetPopoverToggle=e=>{e.newState==="closed"&&this.presetChooserOpen&&(this.presetChooserOpen=!1,this.requestUpdate())};openPresetChooser=e=>{let t=e.currentTarget;this.presetAnchorRect=t?.getBoundingClientRect(),this.presetChooserOpen=!0,this.requestUpdate()};closePresetChooser=()=>{this.presetChooserOpen=!1,this.requestUpdate()};async handlePresetChooserOptionClick(e){this.presetChooserOpen=!1,this.requestUpdate(),await this.handlePresetButtonClick(e)}renderVersionFooter(){return v`<div class="version-footer">${c.LAYOUT_BUILD_MARKER}</div>`}static styles=fe`
    :host {
      /* Nova design language — the default look (independent of the HA theme) */
      --nova-accent: #3d8bfd;
      --nova-on-accent: #ffffff;
      --nova-text: #e8ecf3;
      --nova-muted: #93a0b5;
      --nova-divider: rgba(255, 255, 255, 0.12);
      --nova-surface: #1c2130;
      --nova-surface-2: #262c3c;
      --nova-success: #41b85f;
      --nova-info: #5ab4ff;
      --nova-warning: #f5a524;
      --nova-danger: #e5484d;
      --nova-screen: #0b0c10;
      --nova-layer: color-mix(in srgb, var(--nova-accent) 16%, #8e97a6);
      --nova-radius: 16px;
      --nova-radius-sm: 14px;
      --nova-pill: 999px;
      --nova-gap: 14px;
      --nova-touch: 44px;
      display: block;
    }

    /* theme: ha — follow the Home Assistant theme instead */
    .nova-card--theme-ha {
      --nova-accent: var(--primary-color, #2196f3);
      --nova-on-accent: var(--text-primary-color, #ffffff);
      --nova-text: var(--primary-text-color, #1c1c1c);
      --nova-muted: var(--secondary-text-color, #6f6f6f);
      --nova-divider: var(--divider-color, rgba(120, 120, 120, 0.22));
      --nova-surface: var(--ha-card-background, var(--card-background-color, #ffffff));
      --nova-surface-2: color-mix(in srgb, var(--nova-surface) 84%, var(--nova-text) 16%);
      --nova-success: var(--success-color, #43a047);
      --nova-info: var(--info-color, #4dabf5);
      --nova-warning: var(--warning-color, #f5a524);
      --nova-danger: var(--error-color, #e5484d);
      --nova-radius: var(--ha-card-border-radius, 12px);
      --nova-radius-sm: min(var(--ha-card-border-radius, 12px), 14px);
    }

    ha-card {
      overflow: hidden;
      position: relative;
    }

    /* Nova mode paints its own card surface so it looks identical under any HA theme */
    ha-card.nova-card--theme-nova {
      background: var(--nova-surface);
      border: 1px solid var(--nova-divider);
      color: var(--nova-text);
      --ha-card-border-radius: var(--nova-radius);
    }

    .header-row {
      align-items: center;
      display: flex;
      gap: var(--nova-gap);
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
      background: var(--nova-success);
      box-shadow: 0 0 8px color-mix(in srgb, var(--nova-success) 70%, transparent);
    }

    .status-dot--off {
      background: color-mix(in srgb, var(--nova-muted) 55%, transparent);
    }

    .status-dot--temp-normal {
      background: var(--nova-info);
      box-shadow: 0 0 8px color-mix(in srgb, var(--nova-info) 70%, transparent);
    }

    .status-dot--temp-warning {
      background: var(--nova-warning);
      box-shadow: 0 0 8px color-mix(in srgb, var(--nova-warning) 70%, transparent);
    }

    .status-dot--temp-critical {
      background: var(--nova-danger);
      box-shadow: 0 0 8px color-mix(in srgb, var(--nova-danger) 70%, transparent);
    }

    .status-dot--temp-unknown {
      background: color-mix(in srgb, var(--nova-muted) 55%, transparent);
    }

    .power-button {
      align-items: center;
      background: var(--nova-surface-2);
      border: 1px solid var(--nova-divider);
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
      box-sizing: border-box;
      color: color-mix(in srgb, var(--nova-text) 60%, transparent);
      cursor: pointer;
      display: inline-flex;
      flex: none;
      height: 38px;
      justify-content: center;
      padding: 0;
      transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.08s ease;
      width: 38px;
      -webkit-tap-highlight-color: transparent;
    }

    .power-button:hover {
      border-color: color-mix(in srgb, var(--nova-accent) 45%, var(--nova-divider));
    }

    .power-button:active {
      transform: scale(0.94);
    }

    .power-button:focus-visible {
      outline: 2px solid var(--nova-accent);
      outline-offset: 2px;
    }

    .power-button-icon {
      fill: currentColor;
      height: 20px;
      width: 20px;
    }

    .power-button--on {
      background:
        radial-gradient(circle at 30% 26%,
          color-mix(in srgb, var(--nova-accent) 76%, #ffffff) 8%,
          color-mix(in srgb, var(--nova-accent) 90%, #000000) 100%);
      border-color: color-mix(in srgb, var(--nova-accent) 55%, #ffffff);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--nova-accent) 35%, transparent),
        0 0 16px color-mix(in srgb, var(--nova-accent) 38%, transparent),
        0 2px 8px rgba(0, 0, 0, 0.28),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
      color: var(--nova-on-accent);
    }

    .header-actions {
      align-items: center;
      display: inline-flex;
      flex: none;
      gap: 10px;
    }

    .icon-button {
      align-items: center;
      background: transparent;
      border: none;
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--nova-muted);
      cursor: pointer;
      display: inline-flex;
      flex: none;
      height: 30px;
      justify-content: center;
      padding: 0;
      transition: color 0.2s ease, transform 0.08s ease;
      width: 30px;
      -webkit-tap-highlight-color: transparent;
    }

    .icon-button:hover {
      color: var(--nova-text);
    }

    .icon-button:active {
      transform: scale(0.9);
    }

    .icon-button:focus-visible {
      outline: 2px solid var(--nova-accent);
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
      background: var(--nova-surface);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
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
      color: var(--nova-text);
      font-size: 0.85rem;
      font-weight: 600;
    }

    .brightness-popover-icon {
      color: var(--nova-muted);
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
        var(--nova-accent) 0%,
        var(--nova-accent) var(--nova-brightness-fill, 50%),
        color-mix(in srgb, var(--nova-text) 18%, transparent) var(--nova-brightness-fill, 50%),
        color-mix(in srgb, var(--nova-text) 18%, transparent) 100%
      );
      border-radius: var(--nova-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: var(--nova-surface);
      border: 1px solid color-mix(in srgb, var(--nova-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      margin-left: -8px;
      width: 22px;
    }

    .brightness-slider-vertical::-moz-range-track {
      background: color-mix(in srgb, var(--nova-text) 18%, transparent);
      border-radius: var(--nova-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-moz-range-progress {
      background: var(--nova-accent);
      border-radius: var(--nova-pill);
      width: 6px;
    }

    .brightness-slider-vertical::-moz-range-thumb {
      background: var(--nova-surface);
      border: 1px solid color-mix(in srgb, var(--nova-text) 20%, transparent);
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
      gap: var(--nova-gap);
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
      color: var(--nova-muted);
      font-size: 0.95rem;
      font-weight: 500;
    }

    .value {
      color: var(--nova-text);
      font-weight: 600;
      text-align: right;
      text-transform: capitalize;
    }

    .status-value {
      align-items: center;
      border-radius: var(--nova-radius-sm);
      display: inline-flex;
      font-size: 0.85rem;
      gap: 6px;
      padding: 4px 12px;
      text-transform: none;
    }

    .status-value--on {
      background: color-mix(in srgb, var(--nova-success) 16%, transparent);
      color: color-mix(in srgb, var(--nova-success) 78%, var(--nova-text));
    }

    .status-value--off {
      background: color-mix(in srgb, var(--nova-muted) 16%, transparent);
      color: var(--nova-muted);
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
      color: var(--nova-muted);
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
      background: var(--nova-surface-2);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      color: var(--nova-text);
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
      border-color: color-mix(in srgb, var(--nova-accent) 50%, var(--nova-divider));
    }

    .preset-button:active {
      transform: scale(0.96);
    }

    .preset-button:focus-visible {
      outline: 2px solid var(--nova-accent);
      outline-offset: 2px;
    }

    .preset-button--active {
      background: var(--nova-accent);
      border-color: color-mix(in srgb, var(--nova-accent) 60%, #ffffff);
      box-shadow: 0 2px 10px color-mix(in srgb, var(--nova-accent) 35%, transparent);
      color: var(--nova-on-accent);
    }

    .preset-button:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .preset-button--more {
      align-items: center;
      color: var(--nova-muted);
      justify-content: center;
    }

    .preset-button--more:hover {
      color: var(--nova-text);
    }

    .preset-more-icon {
      fill: currentColor;
      height: 26px;
      width: 26px;
    }

    .brightness-control {
      align-items: center;
      background: var(--nova-surface-2);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      box-sizing: border-box;
      display: flex;
      flex: 1 1 auto;
      gap: 12px;
      min-height: var(--nova-touch);
      padding: 0 16px;
      width: 100%;
    }

    .brightness-icon {
      color: var(--nova-muted);
      fill: currentColor;
      flex: none;
      height: 20px;
      width: 20px;
    }

    .brightness-value {
      color: var(--nova-text);
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
      height: var(--nova-touch);
      margin: 0;
      width: 100%;
    }

    .brightness-slider::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        var(--nova-accent) 0%,
        var(--nova-accent) var(--nova-brightness-fill, 50%),
        color-mix(in srgb, var(--nova-text) 18%, transparent) var(--nova-brightness-fill, 50%),
        color-mix(in srgb, var(--nova-text) 18%, transparent) 100%
      );
      border-radius: var(--nova-pill);
      height: 6px;
    }

    .brightness-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: var(--nova-surface);
      border: 1px solid color-mix(in srgb, var(--nova-text) 20%, transparent);
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      height: 22px;
      margin-top: -8px;
      width: 22px;
    }

    .brightness-slider::-moz-range-track {
      background: color-mix(in srgb, var(--nova-text) 18%, transparent);
      border-radius: var(--nova-pill);
      height: 6px;
    }

    .brightness-slider::-moz-range-progress {
      background: var(--nova-accent);
      border-radius: var(--nova-pill);
      height: 6px;
    }

    .brightness-slider::-moz-range-thumb {
      background: var(--nova-surface);
      border: 1px solid color-mix(in srgb, var(--nova-text) 20%, transparent);
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
      border-radius: var(--nova-radius-sm);
      position: relative;
    }

    .layout-title {
      color: var(--nova-muted);
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .layout-canvas {
      background: var(--nova-screen);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      display: block;
      width: 100%;
    }

    .layout-preview--compact .layout-canvas {
      border-radius: 0;
    }

    .layout-screen {
      fill: var(--nova-screen);
      stroke: color-mix(in srgb, var(--nova-text) 22%, #3a3a3a);
    }

    .layout-layer {
      fill: var(--nova-layer);
      fill-opacity: 1;
      stroke: color-mix(in srgb, var(--nova-accent) 55%, #8893a0);
    }

    .layout-layer-hitbox {
      cursor: pointer;
    }

    .layout-label {
      fill: var(--nova-text);
      font-family: inherit;
      font-size: 9px;
      pointer-events: none;
    }

    .layout-empty {
      fill: color-mix(in srgb, #ffffff 65%, transparent);
      font-family: inherit;
      font-size: 14px;
    }

    .version-footer {
      color: var(--nova-muted);
      font-size: 0.72rem;
      letter-spacing: 0.02em;
      opacity: 0.7;
      text-align: right;
    }

    .nova-popover {
      background: var(--nova-surface);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      inset: auto;
      margin: 0;
      max-width: min(300px, 92vw);
      min-width: 200px;
      padding: 8px;
      position: fixed;
    }

    .nova-popover::backdrop {
      background: transparent;
    }

    .nova-popover-title {
      color: var(--nova-muted);
      font-size: 0.8rem;
      font-weight: 600;
      padding: 4px 8px 8px;
    }

    .nova-popover-options {
      display: grid;
      gap: 6px;
      max-height: min(50vh, 320px);
      overflow: auto;
    }

    .nova-popover-option {
      align-items: center;
      background: var(--nova-surface-2);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      color: var(--nova-text);
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

    .nova-popover-option:hover {
      border-color: color-mix(in srgb, var(--nova-accent) 45%, var(--nova-divider));
    }

    .nova-popover-option.selected {
      background: color-mix(in srgb, var(--nova-accent) 14%, transparent);
      border-color: var(--nova-accent);
      box-shadow: inset 0 0 0 1px var(--nova-accent);
    }

    .nova-popover-option:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `;renderLayoutPreview(e,t=!1){let r=e.screenWidth,s=e.screenHeight,i=this.fitLayersToViewport(e.layers,r,s).sort((g,m)=>g.z-m.z),n="#000000",o="#4a4a4a",a="#d9d9d9",d="#808080",u="#ffffff",l=this.getLayerSourceRows(),f=this.getLayerSourceLabelMap(),y=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",b=this.hass?.states[y],C=this.optimisticPowerState??b?.state,ie=!!b&&C!=="on";return v`
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
          ${i.length===0?se`<text class="layout-empty" x=${r/2} y=${s/2} text-anchor="middle" dominant-baseline="middle">No layers detected</text>`:h}
          ${i.map((g,m)=>{let $=this.resolveLayerSourceRow(l,g.id,m),M=this.resolveLayerSourceLabel(f,g.id,m)??g.source?.trim()??g.id,F=g.x+g.width/2,j=g.y+g.height/2,V=Math.min(g.width,g.height),ne=Math.max(54,r*.017),q=Math.max(V*.14,ne),oe=Math.max(24,g.height*.38),w=Math.min(q,oe),W=Math.max(18,w*.35),z=Math.max(32,g.width*.9),K=Math.max(1,Math.floor((z-W*2)/Math.max(1,w*.62))),ae=M.length<=K?M:`${M.slice(0,Math.max(1,K-1))}\u2026`,H=ae.length*w*.62,ce=Math.min(z,H+W*2),L=Math.max(28,w*1.35),x=F-ce/2,de=j-L/2,le=Math.max(6,L*.25),p=Math.max(51,Math.min(138,V*.27)),he=Math.max(10,p*.22),S=Math.max(g.x+4,g.x+g.width-p-he),_=Math.min(g.y+he,g.y+g.height-p-4),B=S+p*.22,ue=_+p*.34,Y=p*.18,be=p*.32,_e=[`${B+Y},${_+p*.26}`,`${S+p*.68},${_+p*.16}`,`${S+p*.68},${_+p*.84}`,`${B+Y},${_+p*.74}`].join(" "),k=S+p*.7,D=_+p*.5,He=g.audioOpen===!0,Be=g.audioOpen===!1,X=He?"var(--success-color, #43a047)":Be?"var(--secondary-text-color, #8a8a8a)":"color-mix(in srgb, var(--secondary-text-color, #8a8a8a) 55%, transparent)",pe=!!$&&!ie;return se`
              <g>
                <rect
                  class="layout-layer"
                  x=${g.x}
                  y=${g.y}
                  width=${g.width}
                  height=${g.height}
                  fill=${a}
                  stroke=${d}
                  stroke-width="3"
                ></rect>
                <g>
                  <rect
                    x=${S}
                    y=${_}
                    width=${p}
                    height=${p}
                    rx=${p*.22}
                    ry=${p*.22}
                    fill="#111111"
                    fill-opacity="0.8"
                  ></rect>
                  <rect
                    x=${B}
                    y=${ue}
                    width=${Y}
                    height=${be}
                    fill=${X}
                  ></rect>
                  <polygon points=${_e} fill=${X}></polygon>
                  ${He?se`
                      <path
                        d=${`M ${k} ${D-p*.13} Q ${k+p*.12} ${D} ${k} ${D+p*.13}`}
                        fill="none"
                        stroke=${X}
                        stroke-width=${p*.06}
                        stroke-linecap="round"
                      ></path>
                      <path
                        d=${`M ${k+p*.1} ${D-p*.22} Q ${k+p*.28} ${D} ${k+p*.1} ${D+p*.22}`}
                        fill="none"
                        stroke=${X}
                        stroke-width=${p*.06}
                        stroke-linecap="round"
                      ></path>
                    `:h}
                  ${Be?se`
                      <line
                        x1=${S+p*.7}
                        y1=${_+p*.24}
                        x2=${S+p*.92}
                        y2=${_+p*.76}
                        stroke=${X}
                        stroke-width=${p*.08}
                        stroke-linecap="round"
                      ></line>
                    `:h}
                </g>
                <rect
                  class=${pe?"layout-layer-hitbox":""}
                  x=${x}
                  y=${de}
                  width=${ce}
                  height=${L}
                  rx=${le}
                  ry=${le}
                  fill="#111111"
                  fill-opacity="0.82"
                  @click=${pe?$e=>this.openLayerSourceChooser($,$e):h}
                ></rect>
                <text
                  class=${pe?"layout-layer-hitbox":""}
                  x=${F}
                  y=${j}
                  font-weight="700"
                  style=${`fill:${u};font-size:${w}px;font-family:inherit;`}
                  text-anchor="middle"
                  dominant-baseline="middle"
                  @click=${pe?$e=>this.openLayerSourceChooser($,$e):h}
                >${ae}</text>
              </g>
            `})}
        </svg>
        ${this.activeLayerSourceChooser?this.renderLayerSourceChooser(ie):h}
      </div>
    `}getLayerSourceLabelMap(){let e=new Map;for(let t of this.getLayerSourceRows()){let r=this.resolveSelectedOption(t.entity,t.options).trim();r&&e.set(t.layerNumber,r)}return e}resolveLayerSourceLabel(e,t,r){let s=[],i=Number.parseInt(t,10);Number.isFinite(i)&&(s.push(i),s.push(i+1)),s.push(r),s.push(r+1);for(let n of s){let o=e.get(n)?.trim();if(o)return o}}resolveLayerSourceRow(e,t,r){let s=[],i=Number.parseInt(t,10);Number.isFinite(i)&&(s.push(i),s.push(i+1)),s.push(r),s.push(r+1);for(let n of s){let o=e.find(a=>a.layerNumber===n);if(o)return o}return e[r]}renderLayerSourceChooser(e){let t=this.activeLayerSourceChooser;return t?v`
      <div
        id="nova-layer-popover"
        class="nova-popover"
        popover
        @toggle=${this.handleLayerPopoverToggle}
      >
        <div class="nova-popover-title">Layer ${t.layerNumber} Source</div>
        <div class="nova-popover-options">
          ${t.options.map(r=>v`
            <button
              type="button"
              class="nova-popover-option ${this.optionEquals(r,t.selectedOption)?"selected":""}"
              ?disabled=${e}
              @click=${()=>this.handleLayerSourceModalOptionClick(r)}
            >${r}</button>
          `)}
        </div>
      </div>
    `:h}handleLayerPopoverToggle=e=>{e.newState==="closed"&&this.activeLayerSourceChooser&&this.closeLayerSourceChooser()};openLayerSourceChooser(e,t){if(!e)return;let r=t?.currentTarget;this.layerAnchorRect=r?.getBoundingClientRect(),this.activeLayerSourceChooser={entityId:e.entityId,layerNumber:e.layerNumber,options:e.options,selectedOption:this.resolveSelectedOption(e.entity,e.options)},this.requestUpdate()}closeLayerSourceChooser=()=>{this.activeLayerSourceChooser=void 0,this.requestUpdate()};async handleLayerSourceModalOptionClick(e){let t=this.activeLayerSourceChooser,r=e.trim();!t||!r||(await this.selectLayerSourceOption(t.entityId,r),this.closeLayerSourceChooser())}fitLayersToViewport(e,t,r){return e.length===0?[]:e.map(s=>{if(!Number.isFinite(s.x)||!Number.isFinite(s.y)||!Number.isFinite(s.width)||!Number.isFinite(s.height)||s.width<=0||s.height<=0)return;let i=Math.max(0,s.x),n=Math.max(0,s.y),o=Math.min(t,s.x+s.width),a=Math.min(r,s.y+s.height),d=o-i,u=a-n;if(!(d<=0||u<=0))return{...s,x:i,y:n,width:d,height:u}}).filter(s=>!!s)}readNumberAttribute(e,t,r){let s=e.attributes[t];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let i=Number.parseFloat(s);if(Number.isFinite(i))return i}return r}readStringListAttribute(e,t){if(!e)return[];let r=e.attributes[t];return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}resolveSelectedOption(e,t){let r=e.state?.trim(),s=[r,this.readStringAttribute(e,"current_option"),this.readStringAttribute(e,"selected_option"),this.readStringAttribute(e,"source"),this.readStringAttribute(e,"current_source")].filter(i=>!!i);for(let i of s){let n=t.find(d=>d===i);if(n)return n;let o=i.toLowerCase(),a=t.find(d=>d.toLowerCase()===o);if(a)return a}return r??""}readStringAttribute(e,t){let r=e.attributes[t];return typeof r!="string"?void 0:r.trim()||void 0}optionEquals(e,t){if(e===t)return!0;let r=e.trim().toLowerCase(),s=t.trim().toLowerCase();return r===s}sortedEqual(e,t){if(e.length!==t.length)return!1;let r=n=>n.map(o=>o.trim().toLowerCase()).sort(),s=r(e),i=r(t);return s.every((n,o)=>n===i[o])}arrangePresets(e){let t=this.config?.preset_order;if(!Array.isArray(t)||t.length===0)return e;let r=this.config?.preset_baseline;if(Array.isArray(r)&&r.length>0&&!this.sortedEqual(r,e))return e;let s=[],i=new Set;for(let n of t){let o=e.find(a=>!i.has(a)&&this.optionEquals(a,n));o&&(s.push(o),i.add(o))}return s.length>0?s:e}readLayoutPayload(e,t){if(!e||!t){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!e,hasLayersEntity:!!t});return}let r=this.readFirstScreen(e);if(!r){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let s=this.readFiniteNumber(r.width??r.w),i=this.readFiniteNumber(r.height??r.h);if(!s||!i||s<=0||i<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:s,screenHeight:i,firstScreen:r});return}let n=this.readLayersCollection(t),o=n.map((a,d)=>this.normalizeLayoutLayer(a,d)).filter(a=>!!a);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:o.length,screenWidth:s,screenHeight:i}),{screenWidth:s,screenHeight:i,layers:o}}readFirstScreen(e){let t=[e.state,e.attributes.screens,e.attributes.screen_list,e.attributes.screen,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let r of t){let s=this.parseStructuredValue(r);if(Array.isArray(s)&&s.length>0){let o=this.asRecord(s[0]);if(o)return o}let i=this.asRecord(s);if(!i)continue;let n=i.screens;if(Array.isArray(n)&&n.length>0){let o=this.asRecord(n[0]);if(o)return o}if(this.readFiniteNumber(i.width??i.w)&&this.readFiniteNumber(i.height??i.h))return i}if(this.readFiniteNumber(e.attributes.width??e.attributes.w)&&this.readFiniteNumber(e.attributes.height??e.attributes.h))return e.attributes}readLayersCollection(e){let t=[e.state,e.attributes.layers,e.attributes.layer_list,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let r of t){let s=this.parseStructuredValue(r);if(Array.isArray(s))return s;let i=this.asRecord(s);if(!i)continue;if(Array.isArray(i.layers))return i.layers;if(Array.isArray(i.layer_list))return i.layer_list;let n=this.asRecord(i.result);if(n&&Array.isArray(n.layers))return n.layers;let o=this.asRecord(i.data);if(o&&Array.isArray(o.layers))return o.layers;let a=Object.values(i).map(d=>this.asRecord(d)).filter(d=>!!d).filter(d=>!!this.asRecord(d.general)&&!!this.asRecord(d.window));if(a.length>0)return a;if(this.asRecord(i.general)&&this.asRecord(i.window))return[i]}return[]}parseStructuredValue(e){if(typeof e!="string")return e;try{return JSON.parse(e)}catch{return e}}asRecord(e){if(!(!e||typeof e!="object"||Array.isArray(e)))return e}readFiniteNumber(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Number.parseFloat(e);if(Number.isFinite(t))return t}}normalizeLayoutLayer(e,t){let r=this.asRecord(e);if(!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:t,value:e});return}let s=this.asRecord(r.general),i=this.asRecord(r.window),n=this.asRecord(r.audioStatus);if(!s||!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:t,hasGeneral:!!s,hasWindow:!!i,layer:r});return}let o=this.readFiniteNumber(i.width),a=this.readFiniteNumber(i.height),d=this.readFiniteNumber(i.x)??0,u=this.readFiniteNumber(i.y)??0;if(!o||!a||o<=0||a<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:t,width:o,height:a,windowData:i});return}let l=s.layerId;if(typeof l!="string"&&typeof l!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:t,layerId:l,general:s});return}let f=this.readFiniteNumber(s.zorder);if(f===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:t,zorder:s.zorder,general:s});return}let y=typeof s.name=="string"?s.name:void 0,b=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:t,layerId:l,x:d,y:u,width:o,height:a,zValue:f,source:y,audioOpen:b}),{id:String(l),x:d,y:u,width:o,height:a,z:f,source:y,audioOpen:b}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(e,t){if(this.isLayoutDebugEnabled()){if(t===void 0){console.debug("[NovastarCard][layout]",e);return}console.debug("[NovastarCard][layout]",e,t)}}buildRelevantStateSignature(e){if(!e)return"";let t=new Set,r=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of r){let o=this.config?.[n];o&&t.add(o);let a=this.resolvedEntities[n];a&&t.add(a)}t.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(e.states))s.test(n)&&t.add(n);return Array.from(t).sort().map(n=>{let o=e.states[n];if(!o)return`${n}:missing`;let a=this.readStringListAttribute(o,"options").join("|"),d=this.readStringAttribute(o,"current_option")??"",u=this.readStringAttribute(o,"selected_option")??"",l=this.readStringAttribute(o,"source")??"",f=this.readStringAttribute(o,"current_source")??"";return`${n}:${o.state}:${a}:${d}:${u}:${l}:${f}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(e){await new Promise(t=>{window.setTimeout(()=>t(),e)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(e=>({entityId:e,entity:this.hass?.states[e]})).filter(e=>!!e.entity).map(e=>{let t=this.readStringListAttribute(e.entity,"options");return{...e,options:t,layerNumber:this.getLayerNumber(e.entityId)}}).filter(e=>e.options.length>0&&e.entity.state!=="unavailable"&&e.entity.state!=="unknown").sort((e,t)=>e.layerNumber-t.layerNumber):[]}getLayerSourceEntityIds(){let e=/^select\..*_layer_\d+_source$/,t=this.resolvedLayerSourceEntities,r=this.hass?Object.keys(this.hass.states).filter(s=>e.test(s)):[];return t.length===0?r:r.length===0?t:Array.from(new Set([...t,...r]))}getLayerNumber(e){let t=e.match(/_layer_(\d+)_source$/);if(!t)return Number.MAX_SAFE_INTEGER;let r=Number.parseInt(t[1],10);return Number.isFinite(r)?r:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(e){if(!this.hass)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",r=this.hass.states[t];if(r&&r.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let i=e.target,n=Number.parseFloat(i.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t)return;let s=(this.optimisticPowerState??t.state)!=="on";this.optimisticPowerState=s?"on":"off",this.requestUpdate();let i=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",i,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetButtonClick(e){if(!this.hass)return;let t=this.getEntityId("preset_entity"),r=e.trim();!t||!r||(await this.hass.callService?.("select","select_option",{entity_id:t,option:r}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(e){if(!this.hass)return;let t=e.target,r=t.dataset.entityId,s=t.value?.trim();!r||!s||await this.selectLayerSourceOption(r,s)}async selectLayerSourceOption(e,t){this.hass&&await this.hass.callService?.("select","select_option",{entity_id:e,option:t})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t){this.optimisticPowerState=void 0;return}t.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(e){let t=this.config?.[e];if(t&&t.trim())return t;let r=this.resolvedEntities[e];if(r&&r.trim())return r}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let e=this.config.device_id?.trim();if(!e){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==e&&!(this.resolvedDeviceId===e&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=e;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let r=t.filter(o=>{if(!o||typeof o!="object")return!1;let a=o;return a.device_id===e&&!a.disabled_by&&!a.hidden_by&&typeof a.entity_id=="string"}).map(o=>o.entity_id),s=/^select\..*_layer_\d+_source$/,i=r.filter(o=>s.test(o)).sort((o,a)=>this.getLayerNumber(o)-this.getLayerNumber(a)),n={power_entity:this.pickEntity(r,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(r,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(r,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(r,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(r,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(r,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(r,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(r,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(r,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(r,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=i,this.resolvedDeviceId=e,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===e&&(this.resolvingDeviceId=void 0)}}}pickEntity(e,t,r){for(let s of t){let i=e.find(n=>s.test(n));if(i)return i}for(let s of r){let i=`${s}.`,n=e.find(o=>o.startsWith(i));if(n)return n}}},ft={header:"Header",display_mode:"Display mode",theme:"Theme styling",show_header_in_compact:"Show header in Compact mode",show_card_version:"Show card version",preset_order:"Preset order",screen_color:"Screen color",screen_background_color:"Screen background color",device_id:"Device",power_entity:"Power entity",preset_entity:"Preset selection entity",screens_entity:"Screens entity",layers_entity:"Layers entity",controller_entity:"Controller entity",status_entity:"Status entity",brightness_entity:"Brightness entity",temperature_entity:"Temperature entity"},ze=class extends E{hass;config={type:"custom:novastar-h-series-card"};attemptedAutoDeviceDefault=!1;presetOptions=[];presetOptionsKey;resolvedPresetEntityId;resolvingPresetKey;presetsResetNotice=!1;static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t,this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensurePresetOptions(),this.maybeResetStalePresetOrder()}render(){if(!this.hass)return h;let e={display_mode:"standard",theme:"nova",...this.config};return v`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this.buildSchema()}
        .computeLabel=${this.computeLabel}
        .computeHelper=${this.computeHelper}
        @value-changed=${this.handleValueChanged}
      ></ha-form>
    `}buildSchema(){let e=this.config.display_mode??"standard",t=!!(this.config.power_entity||this.config.preset_entity||this.config.screens_entity||this.config.layers_entity||this.config.controller_entity||this.config.status_entity||this.config.brightness_entity||this.config.temperature_entity),r=[{name:"header",selector:{text:{placeholder:"Novastar H Series"}}},{name:"display_mode",required:!0,selector:{select:{mode:"dropdown",options:[{value:"detailed",label:"Detailed"},{value:"standard",label:"Standard"},{value:"compact",label:"Compact"}]}}},{name:"theme",required:!0,selector:{select:{mode:"dropdown",options:[{value:"nova",label:"Nova (default)"},{value:"ha",label:"Home Assistant theme"}]}}},{name:"screen_color",selector:{ui_color:{}}},{name:"screen_background_color",selector:{ui_color:{}}}];return e==="compact"&&r.push({name:"show_header_in_compact",selector:{boolean:{}}}),e==="detailed"&&r.push({name:"show_card_version",selector:{boolean:{}}}),this.presetOptions.length>0&&r.push({name:"preset_order",selector:{select:{multiple:!0,reorder:!0,options:this.presetOptions.map(s=>({value:s,label:s}))}}}),r.push({name:"device_id",selector:{device:{filter:{integration:"novastar_h"}}}}),r.push({name:"",type:"expandable",title:"Override entities",flatten:!0,expanded:t,schema:[{name:"power_entity",selector:{entity:{}}},{name:"preset_entity",selector:{entity:{}}},{name:"screens_entity",selector:{entity:{}}},{name:"layers_entity",selector:{entity:{}}},{name:"controller_entity",selector:{entity:{}}},{name:"status_entity",selector:{entity:{}}},{name:"brightness_entity",selector:{entity:{}}},{name:"temperature_entity",selector:{entity:{}}}]}),r}computeLabel=e=>ft[e.name]??e.name;computeHelper=e=>{if(e.name!=="preset_order")return"";if(this.presetOptions.length===0)return"Select a device to load its presets.";let t="Drag to reorder. Remove a preset to hide it. Clear the field to show every preset again.";return this.presetsResetNotice?`Presets changed on the device, so your custom order was reset. ${t}`:t};handleValueChanged=e=>{e.stopPropagation();let t={...e.detail.value};t.type="custom:novastar-h-series-card",t.display_mode==="standard"&&delete t.display_mode,t.theme==="nova"&&delete t.theme,t.show_header_in_compact!==!0&&delete t.show_header_in_compact,t.show_card_version!==!0&&delete t.show_card_version,this.reconcilePresetOrder(t);let r=["header","device_id","power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let s of r){let i=t[s];(i==null||typeof i=="string"&&i.trim()==="")&&delete t[s]}this.config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))};reconcilePresetOrder(e){if(this.presetOptions.length===0){Array.isArray(this.config.preset_order)&&this.config.preset_order.length>0?(e.preset_order=this.config.preset_order,Array.isArray(this.config.preset_baseline)&&this.config.preset_baseline.length>0?e.preset_baseline=this.config.preset_baseline:delete e.preset_baseline):(delete e.preset_order,delete e.preset_baseline);return}let t=this.normalizePresetOrder(e.preset_order);t.length===0||this.listSequenceEqual(t,this.presetOptions)?(delete e.preset_order,delete e.preset_baseline):(e.preset_order=t,e.preset_baseline=[...this.presetOptions]),this.presetsResetNotice=!1}normalizePresetOrder(e){if(!Array.isArray(e))return[];let t=[],r=new Set;for(let s of e){if(typeof s!="string")continue;let i=s.trim().toLowerCase(),n=this.presetOptions.find(a=>a.trim().toLowerCase()===i);if(!n)continue;let o=n.toLowerCase();r.has(o)||(r.add(o),t.push(n))}return t}async ensurePresetOptions(){if(!this.hass)return;let e=this.config.preset_entity?.trim()??"",t=this.config.device_id?.trim()??"",r=`${e}|${t}`;if(r!==this.presetOptionsKey&&(this.presetOptionsKey=r,this.resolvedPresetEntityId=e||void 0,!e&&t&&this.hass.callWS&&this.resolvingPresetKey!==r)){this.resolvingPresetKey=r;try{let a=await this.hass.callWS({type:"config/entity_registry/list"});if(this.presetOptionsKey===r&&Array.isArray(a)){let d=a.filter(u=>{if(!u||typeof u!="object")return!1;let l=u;return l.device_id===t&&!l.disabled_by&&!l.hidden_by&&typeof l.entity_id=="string"}).map(u=>u.entity_id);this.resolvedPresetEntityId=d.find(u=>/_preset$/.test(u))??d.find(u=>u.startsWith("select."))}}catch{}finally{this.resolvingPresetKey===r&&(this.resolvingPresetKey=void 0)}}let s=this.resolvedPresetEntityId,n=(s?this.hass.states[s]:void 0)?.attributes?.options,o=Array.isArray(n)?n.filter(a=>typeof a=="string"):[];this.listSequenceEqual(o,this.presetOptions)||(this.presetOptions=o,this.requestUpdate())}maybeResetStalePresetOrder(){if(this.presetOptions.length===0)return;let e=this.config.preset_order,t=this.config.preset_baseline;if(!Array.isArray(e)||e.length===0||!Array.isArray(t)||t.length===0||this.nameSetEqual(t,this.presetOptions))return;let r={...this.config,type:"custom:novastar-h-series-card"};delete r.preset_order,delete r.preset_baseline,this.config=r,this.presetsResetNotice=!0,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}listSequenceEqual(e,t){return e.length===t.length&&e.every((r,s)=>r===t[s])}nameSetEqual(e,t){if(e.length!==t.length)return!1;let r=n=>n.map(o=>o.trim().toLowerCase()).sort(),s=r(e),i=r(t);return s.every((n,o)=>n===i[o])}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let t=e.filter(s=>{if(!s||typeof s!="object")return!1;let i=s;return i.platform==="novastar_h"&&typeof i.device_id=="string"&&!i.disabled_by&&!i.hidden_by}).map(s=>s.device_id)[0];if(!t)return;let r={...this.config,type:"custom:novastar-h-series-card",device_id:t};this.config=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}catch{}}}static styles=fe`
    ha-form {
      display: block;
    }
  `};try{customElements.define("novastar-h-series-card",Ie)}catch{}try{customElements.define("novastar-h-series-card-editor",ze)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{Ie as NovastarHSeriesCard};
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
