var O=globalThis,M=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),ct=new WeakMap,P=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(M&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(e,t))}return t}toString(){return this.cssText}},dt=o=>new P(typeof o=="string"?o:o+"",void 0,F),T=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new P(e,o,F)},lt=(o,t)=>{if(M)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},j=M?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return dt(e)})(o):o;var{is:Lt,defineProperty:Dt,getOwnPropertyDescriptor:Rt,getOwnPropertyNames:Ht,getOwnPropertySymbols:Ot,getPrototypeOf:Mt}=Object,U=globalThis,ht=U.trustedTypes,Tt=ht?ht.emptyScript:"",Ut=U.reactiveElementPolyfillSupport,I=(o,t)=>o,W={toAttribute(o,t){switch(t){case Boolean:o=o?Tt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},pt=(o,t)=>!Lt(o,t),ut={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:pt};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Dt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Rt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let c=s?.call(this);r?.call(this,n),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ut}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let e=this.properties,i=[...Ht(e),...Ot(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(j(s))}else t!==void 0&&e.push(j(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:W).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:W;this._$Em=s;let c=n.fromAttribute(e,r.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let n=this.constructor;if(s===!1&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??pt)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,c=this[s];n!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[I("elementProperties")]=new Map,_[I("finalized")]=new Map,Ut?.({ReactiveElement:_}),(U.reactiveElementVersions??=[]).push("2.1.2");var Z=globalThis,gt=o=>o,B=Z.trustedTypes,yt=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,bt="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,wt="?"+b,Bt=`<${wt}>`,A=document,L=()=>A.createComment(""),D=o=>o===null||typeof o!="object"&&typeof o!="function",Q=Array.isArray,Vt=o=>Q(o)||typeof o?.[Symbol.iterator]=="function",q=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,vt=/>/g,w=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,_t=/"/g,Et=/^(?:script|style|textarea|title)$/i,tt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=tt(1),Jt=tt(2),Gt=tt(3),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),$t=new WeakMap,E=A.createTreeWalker(A,129);function At(o,t){if(!Q(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}var zt=(o,t)=>{let e=o.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",n=k;for(let c=0;c<e;c++){let a=o[c],d,u,l=-1,g=0;for(;g<a.length&&(n.lastIndex=g,u=n.exec(a),u!==null);)g=n.lastIndex,n===k?u[1]==="!--"?n=ft:u[1]!==void 0?n=vt:u[2]!==void 0?(Et.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=w):u[3]!==void 0&&(n=w):n===w?u[0]===">"?(n=s??k,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?w:u[3]==='"'?_t:mt):n===_t||n===mt?n=w:n===ft||n===vt?n=k:(n=w,s=void 0);let f=n===w&&o[c+1].startsWith("/>")?" ":"";r+=n===k?a+Bt:l>=0?(i.push(d),a.slice(0,l)+bt+a.slice(l)+b+f):a+b+(l===-2?c:f)}return[At(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},R=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,c=t.length-1,a=this.parts,[d,u]=zt(t,e);if(this.el=o.createElement(d,i),E.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=E.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let l of s.getAttributeNames())if(l.endsWith(bt)){let g=u[n++],f=s.getAttribute(l).split(b),v=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:v[2],strings:f,ctor:v[1]==="."?X:v[1]==="?"?J:v[1]==="@"?G:C}),s.removeAttribute(l)}else l.startsWith(b)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(Et.test(s.tagName)){let l=s.textContent.split(b),g=l.length-1;if(g>0){s.textContent=B?B.emptyScript:"";for(let f=0;f<g;f++)s.append(l[f],L()),E.nextNode(),a.push({type:2,index:++r});s.append(l[g],L())}}}else if(s.nodeType===8)if(s.data===wt)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(b,l+1))!==-1;)a.push({type:7,index:r}),l+=b.length-1}r++}}static createElement(t,e){let i=A.createElement("template");return i.innerHTML=t,i}};function x(o,t,e=o,i){if(t===S)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=D(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=x(o,s._$AS(o,t.values),s,i)),t}var K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??A).importNode(e,!0);E.currentNode=s;let r=E.nextNode(),n=0,c=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new H(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Y(r,this,t)),this._$AV.push(d),a=i[++c]}n!==a?.index&&(r=E.nextNode(),n++)}return E.currentNode=A,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},H=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),D(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=R.createElement(At(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new K(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new R(t)),e}k(t){Q(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new o(this.O(L()),this.O(L()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=gt(t).nextSibling;gt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(r===void 0)t=x(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{let c=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=x(this,c[i+a],e,a),d===S&&(d=this._$AH[a]),n||=!D(d)||d!==this._$AH[a],d===h?t=h:t!==h&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},X=class extends C{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},J=class extends C{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},G=class extends C{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??h)===S)return;let i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Y=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var Ft=Z.litHtmlPolyfillSupport;Ft?.(R,H),(Z.litHtmlVersions??=[]).push("3.3.2");var St=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new H(t.insertBefore(L(),r),r,void 0,e??{})}return s._$AI(o),s};var et=globalThis,$=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=St(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};$._$litElement$=!0,$.finalized=!0,et.litElementHydrateSupport?.({LitElement:$});var jt=et.litElementPolyfillSupport;jt?.({LitElement:$});(et.litElementVersions??=[]).push("4.2.2");var it=class extends ${_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(t){let e=this._hass;this._hass=t;let i=this.buildRelevantStateSignature(t),s=i!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=i,(e!==t||s)&&this.requestUpdate("hass",e)}setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return p`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return p`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let m=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return p`<ha-card><div class="content">${m}</div></ha-card>`}let e=this.hass.states[t];if(!e)return p`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let i=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),r=this.getEntityId("layout_entity"),n=this.getEntityId("status_entity"),c=this.getEntityId("brightness_entity"),a=this.getEntityId("temperature_entity"),d=this.hass.states[i],l=(this.optimisticPowerState??d?.state)==="on",g=!!d&&!l,f=n?this.hass.states[n]:void 0,v=s?this.hass.states[s]:void 0,xt=r?this.hass.states[r]:void 0,y=c?this.hass.states[c]:void 0,rt=a?this.hass.states[a]:void 0,nt=y?Number.parseFloat(y.state):Number.NaN,Ct=y?this.readNumberAttribute(y,"min",0):0,Nt=y?this.readNumberAttribute(y,"max",100):100,Pt=y?this.readNumberAttribute(y,"step",1):1,ot=y&&Number.isFinite(nt),V=this.readStringListAttribute(v,"options"),It=this.getLayerSourceRows(),at=this.readLayoutPayload(xt),kt=f?`${e.state} (${f.state})`:e.state;return p`
      <ha-card>
        <div class="header-row">
          <div class="header">${this.config.title??"Novastar H Series"}</div>
          <div class="header-controls">
            ${y&&ot?p`
                  <div class="header-brightness" title="Brightness">
                    <input
                      class="brightness-slider header-brightness-slider"
                      type="range"
                      min=${Ct}
                      max=${Nt}
                      step=${Pt}
                      .value=${String(nt)}
                      .disabled=${g}
                      ?disabled=${g}
                      @change=${this.handleBrightnessChanged}
                    />
                  </div>
                `:h}
            ${d?p`
                  <label class="power-toggle" title="Toggle screen output">
                    <input
                      type="checkbox"
                      .checked=${l}
                      @change=${this.handlePowerToggle}
                    />
                    <span class="power-slider"></span>
                  </label>
                `:h}
          </div>
        </div>
        <div class="content">
          <div class="row">
            <span class="label">Status</span>
            <span class="value">${kt}</span>
          </div>
          ${rt?p`<div class="row"><span class="label">Temperature</span><span class="value">${rt.state}</span></div>`:h}
          ${v?V.length>0?(()=>{let m=this.resolveSelectedOption(v,V);return p`
                    <div class="row input-row">
                      <span class="label">Preset</span>
                      <select
                        class="input-select"
                        .disabled=${g}
                        ?disabled=${g}
                        @change=${this.handlePresetSelectionChanged}
                      >
                        ${V.map(N=>p`
                          <option
                            .value=${N}
                            ?selected=${this.optionEquals(N,m)}
                          >${N}</option>
                        `)}
                      </select>
                    </div>
                  `})():p`<div class="row"><span class="label">Preset</span><span class="value">${v.state}</span></div>`:h}
          ${It.map(m=>{let N=this.resolveSelectedOption(m.entity,m.options);return p`
              <div class="row input-row">
                <span class="label">Layer ${m.layerNumber} Source</span>
                <select
                  class="input-select"
                  data-entity-id=${m.entityId}
                  .disabled=${g}
                  ?disabled=${g}
                  @change=${this.handleLayerSourceChanged}
                >
                  ${m.options.map(z=>p`
                    <option
                      .value=${z}
                      ?selected=${this.optionEquals(z,N)}
                    >${z}</option>
                  `)}
                </select>
              </div>
            `})}
          ${at?this.renderLayoutPreview(at):h}
          ${y?ot?h:p`<div class="row"><span class="label">Brightness</span><span class="value">${y.state}</span></div>`:h}
        </div>
      </ha-card>
    `}static styles=T`
    .header-row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 16px 16px 0;
    }

    .header {
      font-size: 1rem;
      font-weight: 600;
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

    .brightness-row {
      margin-bottom: 8px;
    }

    .header-controls {
      align-items: center;
      display: inline-flex;
      gap: 10px;
      min-height: 24px;
    }

    .header-brightness {
      align-items: center;
      display: inline-flex;
      min-width: 120px;
    }

    .header-brightness-slider {
      width: 120px;
    }

    .brightness-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .brightness-slider {
      box-sizing: border-box;
      width: 100%;
    }

    .brightness-slider:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .power-toggle {
      display: inline-flex;
      height: 22px;
      position: relative;
      width: 40px;
    }

    .power-toggle input {
      height: 0;
      opacity: 0;
      width: 0;
    }

    .power-slider {
      background-color: var(--disabled-color);
      border-radius: 999px;
      cursor: pointer;
      inset: 0;
      position: absolute;
      transition: 0.2s;
    }

    .power-slider::before {
      background-color: var(--card-background-color);
      border-radius: 50%;
      content: "";
      height: 16px;
      left: 3px;
      position: absolute;
      top: 3px;
      transition: 0.2s;
      width: 16px;
    }

    .power-toggle input:checked + .power-slider {
      background-color: var(--success-color, var(--primary-color));
    }

    .power-toggle input:checked + .power-slider::before {
      transform: translateX(18px);
    }

    .input-row {
      align-items: center;
    }

    .input-select {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      color: var(--primary-text-color);
      font: inherit;
      max-width: 60%;
      min-width: 140px;
      padding: 4px 8px;
    }

    .input-select:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .layout-preview {
      margin-top: 12px;
      border-top: 1px solid var(--divider-color);
      padding-top: 12px;
    }

    .layout-title {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .layout-canvas {
      width: 100%;
      display: block;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 6px;
    }

    .layout-screen {
      fill: none;
      stroke: var(--divider-color);
      stroke-width: 1;
    }

    .layout-layer {
      fill: var(--primary-color);
      fill-opacity: 0.2;
      stroke: var(--primary-color);
      stroke-width: 1;
    }

    .layout-label {
      fill: var(--primary-text-color);
      font-size: 9px;
      font-family: inherit;
      pointer-events: none;
    }
  `;renderLayoutPreview(t){let e=t.screenWidth,i=t.screenHeight,s=[...t.layers].sort((r,n)=>r.z-n.z);return p`
      <div class="layout-preview">
        <div class="layout-title">Screen Layout</div>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${e} ${i}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect class="layout-screen" x="0" y="0" width=${e} height=${i}></rect>
          ${s.map(r=>{let n=r.source?.trim()||r.id,c=r.x+2,a=r.y+10;return p`
              <g>
                <rect
                  class="layout-layer"
                  x=${r.x}
                  y=${r.y}
                  width=${r.width}
                  height=${r.height}
                ></rect>
                <text class="layout-label" x=${c} y=${a}>${n}</text>
              </g>
            `})}
        </svg>
      </div>
    `}readNumberAttribute(t,e,i){let s=t.attributes[e];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let r=Number.parseFloat(s);if(Number.isFinite(r))return r}return i}readStringListAttribute(t,e){if(!t)return[];let i=t.attributes[e];return Array.isArray(i)?i.filter(s=>typeof s=="string"):[]}resolveSelectedOption(t,e){let i=t.state?.trim(),s=[i,this.readStringAttribute(t,"current_option"),this.readStringAttribute(t,"selected_option"),this.readStringAttribute(t,"source"),this.readStringAttribute(t,"current_source")].filter(r=>!!r);for(let r of s){let n=e.find(d=>d===r);if(n)return n;let c=r.toLowerCase(),a=e.find(d=>d.toLowerCase()===c);if(a)return a}return i??""}readStringAttribute(t,e){let i=t.attributes[e];return typeof i!="string"?void 0:i.trim()||void 0}optionEquals(t,e){if(t===e)return!0;let i=t.trim().toLowerCase(),s=e.trim().toLowerCase();return i===s}readLayoutPayload(t){if(!t)return;let e=t.attributes.layout_json??t.attributes.layout??t.attributes.screen_layout,i=this.parseLayoutPayload(e);if(!i)return;let s=this.asRecord(i.screen)??this.asRecord(i.canvas),r=this.readFiniteNumber(i.screenWidth??i.width??s?.width??s?.w),n=this.readFiniteNumber(i.screenHeight??i.height??s?.height??s?.h);if(!r||!n||r<=0||n<=0)return;let a=(Array.isArray(i.layers)?i.layers:[]).map((d,u)=>this.normalizeLayoutLayer(d,u)).filter(d=>!!d);return{screenWidth:r,screenHeight:n,layers:a}}parseLayoutPayload(t){if(t){if(typeof t=="string")try{let e=JSON.parse(t);return this.asRecord(e)}catch{return}return this.asRecord(t)}}asRecord(t){if(!(!t||typeof t!="object"||Array.isArray(t)))return t}readFiniteNumber(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){let e=Number.parseFloat(t);if(Number.isFinite(e))return e}}normalizeLayoutLayer(t,e){let i=this.asRecord(t);if(!i)return;let s=this.readFiniteNumber(i.width??i.w),r=this.readFiniteNumber(i.height??i.h),n=this.readFiniteNumber(i.x)??0,c=this.readFiniteNumber(i.y)??0;if(!s||!r||s<=0||r<=0)return;let a=typeof i.source=="string"?i.source:typeof i.name=="string"?i.name:void 0,d=i.visible===void 0?!0:!!i.visible;if(d)return{id:typeof i.id=="string"?i.id:`Layer ${e+1}`,x:n,y:c,width:s,height:r,z:this.readFiniteNumber(i.z)??e,source:a,visible:d}}buildRelevantStateSignature(t){if(!t)return"";let e=new Set,i=["power_entity","preset_entity","layout_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of i){let c=this.config?.[n];c&&e.add(c);let a=this.resolvedEntities[n];a&&e.add(a)}e.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(t.states))s.test(n)&&e.add(n);return Array.from(e).sort().map(n=>{let c=t.states[n];if(!c)return`${n}:missing`;let a=this.readStringListAttribute(c,"options").join("|"),d=this.readStringAttribute(c,"current_option")??"",u=this.readStringAttribute(c,"selected_option")??"",l=this.readStringAttribute(c,"source")??"",g=this.readStringAttribute(c,"current_source")??"";return`${n}:${c.state}:${a}:${d}:${u}:${l}:${g}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(t){await new Promise(e=>{window.setTimeout(()=>e(),t)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(t=>({entityId:t,entity:this.hass?.states[t]})).filter(t=>!!t.entity).map(t=>{let e=this.readStringListAttribute(t.entity,"options");return{...t,options:e,layerNumber:this.getLayerNumber(t.entityId)}}).filter(t=>t.options.length>0&&t.entity.state!=="unavailable"&&t.entity.state!=="unknown").sort((t,e)=>t.layerNumber-e.layerNumber):[]}getLayerSourceEntityIds(){let t=/^select\..*_layer_\d+_source$/,e=this.resolvedLayerSourceEntities,i=this.hass?Object.keys(this.hass.states).filter(s=>t.test(s)):[];return e.length===0?i:i.length===0?e:Array.from(new Set([...e,...i]))}getLayerNumber(t){let e=t.match(/_layer_(\d+)_source$/);if(!e)return Number.MAX_SAFE_INTEGER;let i=Number.parseInt(e[1],10);return Number.isFinite(i)?i:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",i=this.hass.states[e];if(i&&i.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let r=t.target,n=Number.parseFloat(r.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output";if(!this.hass.states[e])return;let s=t.target.checked;this.optimisticPowerState=s?"on":"off",this.requestUpdate();let r=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",r,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetSelectionChanged(t){if(!this.hass)return;let e=this.getEntityId("preset_entity");if(!e)return;let s=t.target.value?.trim();s&&(await this.hass.callService?.("select","select_option",{entity_id:e,option:s}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(t){if(!this.hass)return;let e=t.target,i=e.dataset.entityId,s=e.value?.trim();!i||!s||await this.hass.callService?.("select","select_option",{entity_id:i,option:s})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e){this.optimisticPowerState=void 0;return}e.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let i=this.resolvedEntities[t];if(i&&i.trim())return i}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let i=e.filter(c=>{if(!c||typeof c!="object")return!1;let a=c;return a.device_id===t&&!a.disabled_by&&!a.hidden_by&&typeof a.entity_id=="string"}).map(c=>c.entity_id),s=/^select\..*_layer_\d+_source$/,r=i.filter(c=>s.test(c)).sort((c,a)=>this.getLayerNumber(c)-this.getLayerNumber(a)),n={power_entity:this.pickEntity(i,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(i,[/_preset$/,/_layer_\d+_source$/],["select"]),controller_entity:this.pickEntity(i,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(i,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(i,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(i,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(i,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(i,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=r,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,i){for(let s of e){let r=t.find(n=>s.test(n));if(r)return r}for(let s of i){let r=`${s}.`,n=t.find(c=>c.startsWith(r));if(n)return n}}},st=class extends ${hass;config={type:"custom:novastar-h-series-card"};showOverrides=!1;localDeviceId;autoDetectedDeviceId;deviceNameById={};loadingDeviceNames=!1;attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1},showOverrides:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e;let i=e.device_id?.trim();i&&(this.localDeviceId=i,this.autoDetectedDeviceId=i),this.showOverrides=!!(e.power_entity||e.preset_entity||e.layout_entity||e.controller_entity||e.status_entity||e.brightness_entity||e.temperature_entity),this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensureDeviceNames()}render(){if(!this.hass)return h;let t=!!customElements.get("ha-device-picker"),e=this.config.device_id?.trim()||this.localDeviceId||this.autoDetectedDeviceId||"",i=this.getSelectedDeviceLabel(e);return p`
      <div class="editor">
        <ha-textfield
          label="Title"
          .value=${this.config.title??""}
          .configValue=${"title"}
          @input=${this.handleInputChanged}
        ></ha-textfield>
        ${t?p`
              <ha-device-picker
                .hass=${this.hass}
                label="Device picker (optional)"
                .value=${e}
                .configValue=${"device_id"}
                @value-changed=${this.handleEntityChanged}
              ></ha-device-picker>
            `:p`
              <ha-textfield
                label="Device ID"
                .value=${e}
                .configValue=${"device_id"}
                @input=${this.handleInputChanged}
              ></ha-textfield>
              <div class="helper">Device picker is unavailable in this Home Assistant frontend. Manually enter Device ID of novastar_h device above (note: auto-defaults to first available novastar_h device).</div>
            `}
        <ha-textfield
          class="readonly"
          label="Selected Device ID"
          .value=${i}
          readonly
        ></ha-textfield>
        <details class="overrides" .open=${this.showOverrides} @toggle=${this.handleOverridesToggle}>
          <summary>Override Entities</summary>
          <div class="overrides-content">
            <ha-entity-picker
              .hass=${this.hass}
              label="Power entity (optional override)"
              .value=${this.config.power_entity??""}
              .configValue=${"power_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Preset selection entity (optional override)"
              .value=${this.config.preset_entity??""}
              .configValue=${"preset_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Layout entity (optional)"
              .value=${this.config.layout_entity??""}
              .configValue=${"layout_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Controller entity (optional override)"
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
        </details>
      </div>
    `}handleOverridesToggle(t){let e=t.target;this.showOverrides=e.open}handleInputChanged(t){let e=t.target,i=e.configValue;if(!i)return;let s=e.value?.trim()??"";this.updateConfigValue(i,s)}handleEntityChanged(t){let i=t.target.configValue;if(!i||!t.detail||t.detail.value===void 0)return;let s=t.detail.value?.trim()??"";this.updateConfigValue(i,s)}updateConfigValue(t,e){if(t==="device_id"&&(this.localDeviceId=e||void 0,this.autoDetectedDeviceId=e||this.autoDetectedDeviceId),(this.config[t]??"")===e)return;let s={...this.config};e?s[t]=e:delete s[t],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(i=>{if(!i||typeof i!="object")return!1;let s=i;return s.platform==="novastar_h"&&typeof s.device_id=="string"&&!s.disabled_by&&!s.hidden_by}).map(i=>i.device_id)[0];if(!e)return;this.autoDetectedDeviceId=e,this.localDeviceId=e,this.requestUpdate(),this.updateConfigValue("device_id",e)}catch{}}}async ensureDeviceNames(){if(!this.hass?.callWS||this.loadingDeviceNames)return;let t=this.config.device_id??this.localDeviceId;if(!(!t||this.deviceNameById[t])){this.loadingDeviceNames=!0;try{let e=await this.hass.callWS({type:"config/device_registry/list"});if(!Array.isArray(e))return;let i={...this.deviceNameById};for(let s of e){if(!s||typeof s!="object")continue;let r=s,n=r.id;if(typeof n!="string")continue;let c=r.name_by_user??r.name??r.model;typeof c=="string"&&c.trim()&&(i[n]=c.trim())}this.deviceNameById=i,this.requestUpdate()}catch{}finally{this.loadingDeviceNames=!1}}}getSelectedDeviceLabel(t){if(!t)return"Auto-detecting...";let e=this.deviceNameById[t];return e?`${e} (${t})`:t}static styles=T`
    .editor {
      display: grid;
      gap: 12px;
      padding: 12px 0;
    }

    .helper {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
    }

    .readonly {
      opacity: 0.9;
    }

    .overrides {
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      padding: 8px 12px;
    }

    .overrides summary {
      cursor: pointer;
      font-weight: 500;
      user-select: none;
    }

    .overrides-content {
      display: grid;
      gap: 12px;
      margin-top: 12px;
    }
  `};try{customElements.define("novastar-h-series-card",it)}catch{}try{customElements.define("novastar-h-series-card-editor",st)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{it as NovastarHSeriesCard};
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
