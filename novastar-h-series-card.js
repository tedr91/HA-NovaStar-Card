var nt=globalThis,ot=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),Dt=new WeakMap,j=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ot&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Dt.set(e,t))}return t}toString(){return this.cssText}},Rt=o=>new j(typeof o=="string"?o:o+"",void 0,pt),at=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new j(e,o,pt)},Mt=(o,t)=>{if(ot)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=nt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},yt=ot?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Rt(e)})(o):o;var{is:ie,defineProperty:se,getOwnPropertyDescriptor:re,getOwnPropertyNames:ne,getOwnPropertySymbols:oe,getPrototypeOf:ae}=Object,ct=globalThis,Ot=ct.trustedTypes,ce=Ot?Ot.emptyScript:"",de=ct.reactiveElementPolyfillSupport,W=(o,t)=>o,gt={toAttribute(o,t){switch(t){case Boolean:o=o?ce:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Tt=(o,t)=>!ie(o,t),Ht={attribute:!0,type:String,converter:gt,reflect:!1,useDefault:!1,hasChanged:Tt};Symbol.metadata??=Symbol("metadata"),ct.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&se(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=re(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let a=s?.call(this);r?.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ht}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let t=ae(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let e=this.properties,i=[...ne(e),...oe(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(yt(s))}else t!==void 0&&e.push(yt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:gt).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:gt;this._$Em=s;let a=n.fromAttribute(e,r.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let n=this.constructor;if(s===!1&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??Tt)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[W("elementProperties")]=new Map,_[W("finalized")]=new Map,de?.({ReactiveElement:_}),(ct.reactiveElementVersions??=[]).push("2.1.2");var wt=globalThis,Bt=o=>o,dt=wt.trustedTypes,Ut=dt?dt.createPolicy("lit-html",{createHTML:o=>o}):void 0,qt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Xt="?"+x,le=`<${Xt}>`,k=document,X=()=>k.createComment(""),Y=o=>o===null||typeof o!="object"&&typeof o!="function",St=Array.isArray,he=o=>St(o)||typeof o?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Vt=/>/g,C=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,jt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,xt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=xt(1),J=xt(2),be=xt(3),N=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),Wt=new WeakMap,L=k.createTreeWalker(k,129);function Kt(o,t){if(!St(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}var ue=(o,t)=>{let e=o.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",n=q;for(let a=0;a<e;a++){let c=o[a],d,p,h=-1,f=0;for(;f<c.length&&(n.lastIndex=f,p=n.exec(c),p!==null);)f=n.lastIndex,n===q?p[1]==="!--"?n=zt:p[1]!==void 0?n=Vt:p[2]!==void 0?(Yt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=C):p[3]!==void 0&&(n=C):n===C?p[0]===">"?(n=s??q,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?C:p[3]==='"'?jt:Ft):n===jt||n===Ft?n=C:n===zt||n===Vt?n=q:(n=C,s=void 0);let v=n===C&&o[a+1].startsWith("/>")?" ":"";r+=n===q?c+le:h>=0?(i.push(d),c.slice(0,h)+qt+c.slice(h)+x+v):c+x+(h===-2?a:v)}return[Kt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},K=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,a=t.length-1,c=this.parts,[d,p]=ue(t,e);if(this.el=o.createElement(d,i),L.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=L.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(qt)){let f=p[n++],v=s.getAttribute(h).split(x),b=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:b[2],strings:v,ctor:b[1]==="."?mt:b[1]==="?"?bt:b[1]==="@"?$t:T}),s.removeAttribute(h)}else h.startsWith(x)&&(c.push({type:6,index:r}),s.removeAttribute(h));if(Yt.test(s.tagName)){let h=s.textContent.split(x),f=h.length-1;if(f>0){s.textContent=dt?dt.emptyScript:"";for(let v=0;v<f;v++)s.append(h[v],X()),L.nextNode(),c.push({type:2,index:++r});s.append(h[f],X())}}}else if(s.nodeType===8)if(s.data===Xt)c.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(x,h+1))!==-1;)c.push({type:7,index:r}),h+=x.length-1}r++}}static createElement(t,e){let i=k.createElement("template");return i.innerHTML=t,i}};function H(o,t,e=o,i){if(t===N)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=Y(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=H(o,s._$AS(o,t.values),s,i)),t}var vt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);L.currentNode=s;let r=L.nextNode(),n=0,a=0,c=i[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new G(r,r.nextSibling,this,t):c.type===1?d=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(d=new _t(r,this,t)),this._$AV.push(d),c=i[++a]}n!==c?.index&&(r=L.nextNode(),n++)}return L.currentNode=k,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},G=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),Y(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):he(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=K.createElement(Kt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new vt(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=Wt.get(t.strings);return e===void 0&&Wt.set(t.strings,e=new K(t)),e}k(t){St(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new o(this.O(X()),this.O(X()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Bt(t).nextSibling;Bt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(r===void 0)t=H(this,t,e,0),n=!Y(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{let a=t,c,d;for(t=r[0],c=0;c<r.length-1;c++)d=H(this,a[i+c],e,c),d===N&&(d=this._$AH[c]),n||=!Y(d)||d!==this._$AH[c],d===l?t=l:t!==l&&(t+=(d??"")+r[c+1]),this._$AH[c]=d}n&&!s&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mt=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}},bt=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}},$t=class extends T{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??l)===N)return;let i=this._$AH,s=t===l&&i!==l||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==l&&(i===l||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_t=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}};var pe=wt.litHtmlPolyfillSupport;pe?.(K,G),(wt.litHtmlVersions??=[]).push("3.3.2");var Gt=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new G(t.insertBefore(X(),r),r,void 0,e??{})}return s._$AI(o),s};var Et=globalThis,w=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};w._$litElement$=!0,w.finalized=!0,Et.litElementHydrateSupport?.({LitElement:w});var ye=Et.litElementPolyfillSupport;ye?.({LitElement:w});(Et.litElementVersions??=[]).push("4.2.2");var At=class extends w{static LAYOUT_BUILD_MARKER="v1.0.6";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";activeLayerSourceChooser;static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(t){let e=this._hass;this._hass=t;let i=this.buildRelevantStateSignature(t),s=i!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=i,(e!==t||s)&&this.requestUpdate("hass",e)}setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return g`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return g`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let R=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return g`<ha-card><div class="content">${R}</div></ha-card>`}let e=this.hass.states[t];if(!e)return g`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let i=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),r=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),a=this.getEntityId("status_entity"),c=this.getEntityId("brightness_entity"),d=this.getEntityId("temperature_entity"),p=this.hass.states[i],f=(this.optimisticPowerState??p?.state)==="on",v=!!p&&!f,b=a?this.hass.states[a]:void 0,I=s?this.hass.states[s]:void 0,Q=r?this.hass.states[r]:void 0,y=n?this.hass.states[n]:void 0,m=c?this.hass.states[c]:void 0,P=d?this.hass.states[d]:void 0,D=m?Number.parseFloat(m.state):Number.NaN,Z=m?this.readNumberAttribute(m,"min",0):0,tt=m?this.readNumberAttribute(m,"max",100):100,et=m?this.readNumberAttribute(m,"step",1):1,it=m&&Number.isFinite(D),B=this.readStringListAttribute(I,"options"),st=this.readLayoutPayload(Q,y),E=b?`${e.state} (${b.state})`:e.state,S=this.getDisplayMode()==="layout",U=this.config.show_title_in_layout===!0,z=S&&!U;return g`
      <ha-card>
        ${S&&!U?l:g`
              <div class="header-row">
                <div class="header">${this.config.title??"Novastar H Series"}</div>
                <div class="header-controls">
                  ${m&&it?g`
                        <div class="header-brightness" title="Brightness">
                          <input
                            class="brightness-slider header-brightness-slider"
                            type="range"
                            min=${Z}
                            max=${tt}
                            step=${et}
                            .value=${String(D)}
                            .disabled=${v}
                            ?disabled=${v}
                            @change=${this.handleBrightnessChanged}
                          />
                        </div>
                      `:l}
                  ${p?g`
                        <label class="power-toggle" title="Toggle screen output">
                          <input
                            type="checkbox"
                            .checked=${f}
                            @change=${this.handlePowerToggle}
                          />
                          <span class="power-slider"></span>
                        </label>
                      `:l}
                </div>
              </div>
            `}
        <div class=${z?"content content--compact":"content"}>
          ${S?l:g`
                <div class="row">
                  <span class="label">Status</span>
                  <span class="value">${E}</span>
                </div>
                ${P?g`<div class="row"><span class="label">Temperature</span><span class="value">${P.state}</span></div>`:l}
                ${I?B.length>0?(()=>{let R=this.resolveSelectedOption(I,B);return g`
                          <div class="row input-row">
                            <span class="label">Preset</span>
                            <select
                              class="input-select"
                              .disabled=${v}
                              ?disabled=${v}
                              @change=${this.handlePresetSelectionChanged}
                            >
                              ${B.map(V=>g`
                                <option
                                  .value=${V}
                                  ?selected=${this.optionEquals(V,R)}
                                >${V}</option>
                              `)}
                            </select>
                          </div>
                        `})():g`<div class="row"><span class="label">Preset</span><span class="value">${I.state}</span></div>`:l}
              `}
          ${st?this.renderLayoutPreview(st,z):S?g`<div class="row"><span class="label">Layout</span><span class="value">Unavailable</span></div>`:l}
          ${S?l:m?it?l:g`<div class="row"><span class="label">Brightness</span><span class="value">${m.state}</span></div>`:l}
        </div>
      </ha-card>
    `}getDisplayMode(){return this.config?.display_mode==="layout"?"layout":"full"}static styles=at`
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

    .content--compact {
      padding-top: 16px;
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
      position: relative;
    }

    .layout-preview--compact {
      margin-top: 0;
      border-top: none;
      padding-top: 0;
    }

    .layout-meta {
      color: #9e9e9e;
      font-size: 12px;
      margin-bottom: 6px;
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
      fill: #000000;
      stroke: #4a4a4a;
      stroke-width: 1;
    }

    .layout-layer {
      fill: #d9d9d9;
      fill-opacity: 1;
      stroke: #808080;
      stroke-width: 1;
    }

    .layout-layer-hitbox {
      cursor: pointer;
    }

    .layer-source-modal {
      align-items: center;
      background: rgba(0, 0, 0, 0.45);
      border-radius: 6px;
      display: flex;
      inset: 12px 0 0;
      justify-content: center;
      padding: 12px;
      position: absolute;
      z-index: 2;
    }

    .layer-source-modal-content {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 10px;
      box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
      color: var(--primary-text-color);
      max-width: min(420px, 96%);
      padding: 12px;
      width: 100%;
    }

    .layer-source-modal-title {
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .layer-source-modal-options {
      display: grid;
      gap: 8px;
      max-height: 260px;
      overflow: auto;
    }

    .layer-source-modal-option {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      color: var(--primary-text-color);
      cursor: pointer;
      font: inherit;
      padding: 8px 10px;
      text-align: left;
      width: 100%;
    }

    .layer-source-modal-option.selected {
      border-color: var(--primary-color);
      box-shadow: inset 0 0 0 1px var(--primary-color);
    }

    .layer-source-modal-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }

    .layer-source-modal-close {
      background: transparent;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      color: var(--primary-text-color);
      cursor: pointer;
      font: inherit;
      padding: 6px 10px;
    }

    .layout-version {
      bottom: 14px;
      color: #9e9e9e;
      font-size: 10px;
      position: absolute;
      right: 10px;
    }

    .layout-label {
      fill: var(--primary-text-color);
      font-size: 9px;
      font-family: inherit;
      pointer-events: none;
    }

    .layout-empty {
      fill: #bdbdbd;
      font-size: 14px;
      font-family: inherit;
      text-anchor: middle;
      dominant-baseline: middle;
    }
  `;renderLayoutPreview(t,e=!1){let i=t.screenWidth,s=t.screenHeight,r=this.fitLayersToViewport(t.layers,i,s).sort((y,m)=>y.z-m.z),n="#000000",a="#4a4a4a",c="#d9d9d9",d="#808080",p="#ffffff",h=this.getLayerSourceRows(),f=this.getLayerSourceLabelMap(),v=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",b=this.hass?.states[v],I=this.optimisticPowerState??b?.state,Q=!!b&&I!=="on";return g`
      <div class=${e?"layout-preview layout-preview--compact":"layout-preview"}>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${i} ${s}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            class="layout-screen"
            x="0"
            y="0"
            width=${i}
            height=${s}
            fill=${n}
            stroke=${a}
            stroke-width="1"
            style=${`fill:${n};stroke:${a};stroke-width:1;`}
          ></rect>
          ${r.length===0?J`<text class="layout-empty" x=${i/2} y=${s/2}>No layers detected</text>`:l}
          ${r.map((y,m)=>{let P=this.resolveLayerSourceRow(h,y.id,m),D=this.resolveLayerSourceLabel(f,y.id,m)??y.source?.trim()??y.id,Z=y.x+y.width/2,tt=y.y+y.height/2,et=Math.min(y.width,y.height),it=Math.max(54,i*.017),B=Math.max(et*.14,it),st=Math.max(24,y.height*.38),E=Math.min(B,st),S=Math.max(18,E*.35),U=Math.max(32,y.width*.9),z=Math.max(1,Math.floor((U-S*2)/Math.max(1,E*.62))),R=D.length<=z?D:`${D.slice(0,Math.max(1,z-1))}\u2026`,V=R.length*E*.62,Lt=Math.min(U,V+S*2),lt=Math.max(28,E*1.35),Jt=Z-Lt/2,Qt=tt-lt/2,kt=Math.max(6,lt*.25),u=Math.max(51,Math.min(138,et*.27)),Nt=Math.max(10,u*.22),A=Math.max(y.x+4,y.x+y.width-u-Nt),$=Math.min(y.y+Nt,y.y+y.height-u-4),ht=A+u*.22,Zt=$+u*.34,ut=u*.18,te=u*.32,ee=[`${ht+ut},${$+u*.26}`,`${A+u*.68},${$+u*.16}`,`${A+u*.68},${$+u*.84}`,`${ht+ut},${$+u*.74}`].join(" "),M=A+u*.7,O=$+u*.5,It=y.audioOpen===!0,Pt=y.audioOpen===!1,F=It?"#66bb6a":Pt?"#858585":"#bdbdbd",rt=!!P&&!Q;return J`
              <g>
                <rect
                  class="layout-layer"
                  x=${y.x}
                  y=${y.y}
                  width=${y.width}
                  height=${y.height}
                  fill=${c}
                  stroke=${d}
                  stroke-width="3"
                  style=${`fill:${c};stroke:${d};stroke-width:3;`}
                ></rect>
                <g>
                  <rect
                    x=${A}
                    y=${$}
                    width=${u}
                    height=${u}
                    rx=${u*.22}
                    ry=${u*.22}
                    fill="#111111"
                    fill-opacity="0.8"
                  ></rect>
                  <rect
                    x=${ht}
                    y=${Zt}
                    width=${ut}
                    height=${te}
                    fill=${F}
                  ></rect>
                  <polygon points=${ee} fill=${F}></polygon>
                  ${It?J`
                      <path
                        d=${`M ${M} ${O-u*.13} Q ${M+u*.12} ${O} ${M} ${O+u*.13}`}
                        fill="none"
                        stroke=${F}
                        stroke-width=${u*.06}
                        stroke-linecap="round"
                      ></path>
                      <path
                        d=${`M ${M+u*.1} ${O-u*.22} Q ${M+u*.28} ${O} ${M+u*.1} ${O+u*.22}`}
                        fill="none"
                        stroke=${F}
                        stroke-width=${u*.06}
                        stroke-linecap="round"
                      ></path>
                    `:l}
                  ${Pt?J`
                      <line
                        x1=${A+u*.7}
                        y1=${$+u*.24}
                        x2=${A+u*.92}
                        y2=${$+u*.76}
                        stroke=${F}
                        stroke-width=${u*.08}
                        stroke-linecap="round"
                      ></line>
                    `:l}
                </g>
                <rect
                  class=${rt?"layout-layer-hitbox":""}
                  x=${Jt}
                  y=${Qt}
                  width=${Lt}
                  height=${lt}
                  rx=${kt}
                  ry=${kt}
                  fill="#111111"
                  fill-opacity="0.82"
                  @click=${rt?()=>this.openLayerSourceChooser(P):l}
                ></rect>
                <text
                  class=${rt?"layout-layer-hitbox":""}
                  x=${Z}
                  y=${tt}
                  font-weight="700"
                  style=${`fill:${p};font-size:${E}px;font-family:inherit;`}
                  text-anchor="middle"
                  dominant-baseline="middle"
                  @click=${rt?()=>this.openLayerSourceChooser(P):l}
                >${R}</text>
              </g>
            `})}
        </svg>
        ${this.activeLayerSourceChooser?this.renderLayerSourceChooser(Q):l}
      </div>
    `}getLayerSourceLabelMap(){let t=new Map;for(let e of this.getLayerSourceRows()){let i=this.resolveSelectedOption(e.entity,e.options).trim();i&&t.set(e.layerNumber,i)}return t}resolveLayerSourceLabel(t,e,i){let s=[],r=Number.parseInt(e,10);Number.isFinite(r)&&(s.push(r),s.push(r+1)),s.push(i),s.push(i+1);for(let n of s){let a=t.get(n)?.trim();if(a)return a}}resolveLayerSourceRow(t,e,i){let s=[],r=Number.parseInt(e,10);Number.isFinite(r)&&(s.push(r),s.push(r+1)),s.push(i),s.push(i+1);for(let n of s){let a=t.find(c=>c.layerNumber===n);if(a)return a}return t[i]}renderLayerSourceChooser(t){let e=this.activeLayerSourceChooser;return e?g`
      <div class="layer-source-modal" @click=${this.handleLayerSourceModalBackdropClick}>
        <div class="layer-source-modal-content" @click=${i=>i.stopPropagation()}>
          <div class="layer-source-modal-title">Layer ${e.layerNumber} Source</div>
          <div class="layer-source-modal-options">
            ${e.options.map(i=>g`
              <button
                type="button"
                class="layer-source-modal-option ${this.optionEquals(i,e.selectedOption)?"selected":""}"
                ?disabled=${t}
                @click=${()=>this.handleLayerSourceModalOptionClick(i)}
              >${i}</button>
            `)}
          </div>
          <div class="layer-source-modal-actions">
            <button type="button" class="layer-source-modal-close" @click=${this.closeLayerSourceChooser}>Close</button>
          </div>
        </div>
      </div>
    `:l}openLayerSourceChooser(t){t&&(this.activeLayerSourceChooser={entityId:t.entityId,layerNumber:t.layerNumber,options:t.options,selectedOption:this.resolveSelectedOption(t.entity,t.options)},this.requestUpdate())}closeLayerSourceChooser=()=>{this.activeLayerSourceChooser=void 0,this.requestUpdate()};handleLayerSourceModalBackdropClick=()=>{this.closeLayerSourceChooser()};async handleLayerSourceModalOptionClick(t){let e=this.activeLayerSourceChooser,i=t.trim();!e||!i||(await this.selectLayerSourceOption(e.entityId,i),this.closeLayerSourceChooser())}fitLayersToViewport(t,e,i){return t.length===0?[]:t.map(s=>{if(!Number.isFinite(s.x)||!Number.isFinite(s.y)||!Number.isFinite(s.width)||!Number.isFinite(s.height)||s.width<=0||s.height<=0)return;let r=Math.max(0,s.x),n=Math.max(0,s.y),a=Math.min(e,s.x+s.width),c=Math.min(i,s.y+s.height),d=a-r,p=c-n;if(!(d<=0||p<=0))return{...s,x:r,y:n,width:d,height:p}}).filter(s=>!!s)}readNumberAttribute(t,e,i){let s=t.attributes[e];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let r=Number.parseFloat(s);if(Number.isFinite(r))return r}return i}readStringListAttribute(t,e){if(!t)return[];let i=t.attributes[e];return Array.isArray(i)?i.filter(s=>typeof s=="string"):[]}resolveSelectedOption(t,e){let i=t.state?.trim(),s=[i,this.readStringAttribute(t,"current_option"),this.readStringAttribute(t,"selected_option"),this.readStringAttribute(t,"source"),this.readStringAttribute(t,"current_source")].filter(r=>!!r);for(let r of s){let n=e.find(d=>d===r);if(n)return n;let a=r.toLowerCase(),c=e.find(d=>d.toLowerCase()===a);if(c)return c}return i??""}readStringAttribute(t,e){let i=t.attributes[e];return typeof i!="string"?void 0:i.trim()||void 0}optionEquals(t,e){if(t===e)return!0;let i=t.trim().toLowerCase(),s=e.trim().toLowerCase();return i===s}readLayoutPayload(t,e){if(!t||!e){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!t,hasLayersEntity:!!e});return}let i=this.readFirstScreen(t);if(!i){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let s=this.readFiniteNumber(i.width??i.w),r=this.readFiniteNumber(i.height??i.h);if(!s||!r||s<=0||r<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:s,screenHeight:r,firstScreen:i});return}let n=this.readLayersCollection(e),a=n.map((c,d)=>this.normalizeLayoutLayer(c,d)).filter(c=>!!c);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:a.length,screenWidth:s,screenHeight:r}),{screenWidth:s,screenHeight:r,layers:a}}readFirstScreen(t){let e=[t.state,t.attributes.screens,t.attributes.screen_list,t.attributes.screen,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let i of e){let s=this.parseStructuredValue(i);if(Array.isArray(s)&&s.length>0){let a=this.asRecord(s[0]);if(a)return a}let r=this.asRecord(s);if(!r)continue;let n=r.screens;if(Array.isArray(n)&&n.length>0){let a=this.asRecord(n[0]);if(a)return a}if(this.readFiniteNumber(r.width??r.w)&&this.readFiniteNumber(r.height??r.h))return r}if(this.readFiniteNumber(t.attributes.width??t.attributes.w)&&this.readFiniteNumber(t.attributes.height??t.attributes.h))return t.attributes}readLayersCollection(t){let e=[t.state,t.attributes.layers,t.attributes.layer_list,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let i of e){let s=this.parseStructuredValue(i);if(Array.isArray(s))return s;let r=this.asRecord(s);if(!r)continue;if(Array.isArray(r.layers))return r.layers;if(Array.isArray(r.layer_list))return r.layer_list;let n=this.asRecord(r.result);if(n&&Array.isArray(n.layers))return n.layers;let a=this.asRecord(r.data);if(a&&Array.isArray(a.layers))return a.layers;let c=Object.values(r).map(d=>this.asRecord(d)).filter(d=>!!d).filter(d=>!!this.asRecord(d.general)&&!!this.asRecord(d.window));if(c.length>0)return c;if(this.asRecord(r.general)&&this.asRecord(r.window))return[r]}return[]}parseStructuredValue(t){if(typeof t!="string")return t;try{return JSON.parse(t)}catch{return t}}asRecord(t){if(!(!t||typeof t!="object"||Array.isArray(t)))return t}readFiniteNumber(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){let e=Number.parseFloat(t);if(Number.isFinite(e))return e}}normalizeLayoutLayer(t,e){let i=this.asRecord(t);if(!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:e,value:t});return}let s=this.asRecord(i.general),r=this.asRecord(i.window),n=this.asRecord(i.audioStatus);if(!s||!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:e,hasGeneral:!!s,hasWindow:!!r,layer:i});return}let a=this.readFiniteNumber(r.width),c=this.readFiniteNumber(r.height),d=this.readFiniteNumber(r.x)??0,p=this.readFiniteNumber(r.y)??0;if(!a||!c||a<=0||c<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:e,width:a,height:c,windowData:r});return}let h=s.layerId;if(typeof h!="string"&&typeof h!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:e,layerId:h,general:s});return}let f=this.readFiniteNumber(s.zorder);if(f===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:e,zorder:s.zorder,general:s});return}let v=typeof s.name=="string"?s.name:void 0,b=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:e,layerId:h,x:d,y:p,width:a,height:c,zValue:f,source:v,audioOpen:b}),{id:String(h),x:d,y:p,width:a,height:c,z:f,source:v,audioOpen:b}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(t,e){if(this.isLayoutDebugEnabled()){if(e===void 0){console.debug("[NovastarCard][layout]",t);return}console.debug("[NovastarCard][layout]",t,e)}}buildRelevantStateSignature(t){if(!t)return"";let e=new Set,i=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of i){let a=this.config?.[n];a&&e.add(a);let c=this.resolvedEntities[n];c&&e.add(c)}e.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(t.states))s.test(n)&&e.add(n);return Array.from(e).sort().map(n=>{let a=t.states[n];if(!a)return`${n}:missing`;let c=this.readStringListAttribute(a,"options").join("|"),d=this.readStringAttribute(a,"current_option")??"",p=this.readStringAttribute(a,"selected_option")??"",h=this.readStringAttribute(a,"source")??"",f=this.readStringAttribute(a,"current_source")??"";return`${n}:${a.state}:${c}:${d}:${p}:${h}:${f}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(t){await new Promise(e=>{window.setTimeout(()=>e(),t)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(t=>({entityId:t,entity:this.hass?.states[t]})).filter(t=>!!t.entity).map(t=>{let e=this.readStringListAttribute(t.entity,"options");return{...t,options:e,layerNumber:this.getLayerNumber(t.entityId)}}).filter(t=>t.options.length>0&&t.entity.state!=="unavailable"&&t.entity.state!=="unknown").sort((t,e)=>t.layerNumber-e.layerNumber):[]}getLayerSourceEntityIds(){let t=/^select\..*_layer_\d+_source$/,e=this.resolvedLayerSourceEntities,i=this.hass?Object.keys(this.hass.states).filter(s=>t.test(s)):[];return e.length===0?i:i.length===0?e:Array.from(new Set([...e,...i]))}getLayerNumber(t){let e=t.match(/_layer_(\d+)_source$/);if(!e)return Number.MAX_SAFE_INTEGER;let i=Number.parseInt(e[1],10);return Number.isFinite(i)?i:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",i=this.hass.states[e];if(i&&i.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let r=t.target,n=Number.parseFloat(r.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output";if(!this.hass.states[e])return;let s=t.target.checked;this.optimisticPowerState=s?"on":"off",this.requestUpdate();let r=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",r,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetSelectionChanged(t){if(!this.hass)return;let e=this.getEntityId("preset_entity");if(!e)return;let s=t.target.value?.trim();s&&(await this.hass.callService?.("select","select_option",{entity_id:e,option:s}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(t){if(!this.hass)return;let e=t.target,i=e.dataset.entityId,s=e.value?.trim();!i||!s||await this.selectLayerSourceOption(i,s)}async selectLayerSourceOption(t,e){this.hass&&await this.hass.callService?.("select","select_option",{entity_id:t,option:e})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e){this.optimisticPowerState=void 0;return}e.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let i=this.resolvedEntities[t];if(i&&i.trim())return i}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let i=e.filter(a=>{if(!a||typeof a!="object")return!1;let c=a;return c.device_id===t&&!c.disabled_by&&!c.hidden_by&&typeof c.entity_id=="string"}).map(a=>a.entity_id),s=/^select\..*_layer_\d+_source$/,r=i.filter(a=>s.test(a)).sort((a,c)=>this.getLayerNumber(a)-this.getLayerNumber(c)),n={power_entity:this.pickEntity(i,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(i,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(i,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(i,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(i,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(i,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(i,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(i,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(i,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(i,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=r,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,i){for(let s of e){let r=t.find(n=>s.test(n));if(r)return r}for(let s of i){let r=`${s}.`,n=t.find(a=>a.startsWith(r));if(n)return n}}},Ct=class extends w{hass;config={type:"custom:novastar-h-series-card"};showOverrides=!1;localDeviceId;autoDetectedDeviceId;deviceNameById={};loadingDeviceNames=!1;attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1},showOverrides:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e;let i=e.device_id?.trim();i&&(this.localDeviceId=i,this.autoDetectedDeviceId=i),this.showOverrides=!!(e.power_entity||e.preset_entity||e.screens_entity||e.layers_entity||e.controller_entity||e.status_entity||e.brightness_entity||e.temperature_entity),this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensureDeviceNames()}render(){if(!this.hass)return l;let t=!!customElements.get("ha-device-picker"),e=this.config.device_id?.trim()||this.localDeviceId||this.autoDetectedDeviceId||"",i=this.getSelectedDeviceLabel(e),s=(this.config.display_mode??"full")==="layout",r=this.config.show_title_in_layout===!0;return g`
      <div class="editor">
        <ha-textfield
          label="Title"
          .value=${this.config.title??""}
          .configValue=${"title"}
          @input=${this.handleInputChanged}
        ></ha-textfield>
        <label class="select-label" for="display-mode-select">Display mode</label>
        <select
          id="display-mode-select"
          class="editor-select"
          .value=${this.config.display_mode??"full"}
          .configValue=${"display_mode"}
          @change=${this.handleInputChanged}
        >
          <option value="full">Full</option>
          <option value="layout">Layout only</option>
        </select>
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${r}
            .disabled=${!s}
            ?disabled=${!s}
            .configValue=${"show_title_in_layout"}
            @change=${this.handleBooleanInputChanged}
          />
          <span>Show title bar in layout mode</span>
        </label>
        ${t?g`
              <ha-device-picker
                .hass=${this.hass}
                label="Device picker (optional)"
                .value=${e}
                .configValue=${"device_id"}
                @value-changed=${this.handleEntityChanged}
              ></ha-device-picker>
            `:g`
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
              label="Screens entity (optional override)"
              .value=${this.config.screens_entity??""}
              .configValue=${"screens_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Layers entity (optional override)"
              .value=${this.config.layers_entity??""}
              .configValue=${"layers_entity"}
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
    `}handleOverridesToggle(t){let e=t.target;this.showOverrides=e.open}handleInputChanged(t){let e=t.target,i=e.configValue;if(!i)return;let s=e.value?.trim()??"";this.updateConfigValue(i,s)}handleBooleanInputChanged(t){let e=t.target,i=e.configValue;i&&this.updateBooleanConfigValue(i,!!e.checked)}handleEntityChanged(t){let i=t.target.configValue;if(!i||!t.detail||t.detail.value===void 0)return;let s=t.detail.value?.trim()??"";this.updateConfigValue(i,s)}updateConfigValue(t,e){if(t==="device_id"&&(this.localDeviceId=e||void 0,this.autoDetectedDeviceId=e||this.autoDetectedDeviceId),(this.config[t]??"")===e)return;let s={...this.config},r=t==="display_mode"&&e==="full"?"":e;r?s[t]=r:delete s[t],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}updateBooleanConfigValue(t,e){if(this.config[t]===!0===e)return;let s={...this.config};e?s[t]=!0:delete s[t],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(i=>{if(!i||typeof i!="object")return!1;let s=i;return s.platform==="novastar_h"&&typeof s.device_id=="string"&&!s.disabled_by&&!s.hidden_by}).map(i=>i.device_id)[0];if(!e)return;this.autoDetectedDeviceId=e,this.localDeviceId=e,this.requestUpdate(),this.updateConfigValue("device_id",e)}catch{}}}async ensureDeviceNames(){if(!this.hass?.callWS||this.loadingDeviceNames)return;let t=this.config.device_id??this.localDeviceId;if(!(!t||this.deviceNameById[t])){this.loadingDeviceNames=!0;try{let e=await this.hass.callWS({type:"config/device_registry/list"});if(!Array.isArray(e))return;let i={...this.deviceNameById};for(let s of e){if(!s||typeof s!="object")continue;let r=s,n=r.id;if(typeof n!="string")continue;let a=r.name_by_user??r.name??r.model;typeof a=="string"&&a.trim()&&(i[n]=a.trim())}this.deviceNameById=i,this.requestUpdate()}catch{}finally{this.loadingDeviceNames=!1}}}getSelectedDeviceLabel(t){if(!t)return"Auto-detecting...";let e=this.deviceNameById[t];return e?`${e} (${t})`:t}static styles=at`
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

    .select-label {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      margin-bottom: -6px;
    }

    .editor-select {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      color: var(--primary-text-color);
      font: inherit;
      padding: 6px 8px;
      width: 100%;
    }

    .checkbox-row {
      align-items: center;
      color: var(--primary-text-color);
      display: inline-flex;
      font-size: 0.95rem;
      gap: 8px;
    }

    .checkbox-row input {
      margin: 0;
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
  `};try{customElements.define("novastar-h-series-card",At)}catch{}try{customElements.define("novastar-h-series-card-editor",Ct)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{At as NovastarHSeriesCard};
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
