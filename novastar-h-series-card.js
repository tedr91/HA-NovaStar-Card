var M=globalThis,T=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),ct=new WeakMap,N=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(T&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ct.set(e,t))}return t}toString(){return this.cssText}},lt=a=>new N(typeof a=="string"?a:a+"",void 0,j),U=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[r+1],a[0]);return new N(e,a,j)},ht=(a,t)=>{if(T)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,a.appendChild(s)}},W=T?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return lt(e)})(a):a;var{is:Rt,defineProperty:Ht,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:Mt,getOwnPropertySymbols:Tt,getPrototypeOf:Ut}=Object,B=globalThis,ut=B.trustedTypes,Bt=ut?ut.emptyScript:"",zt=B.reactiveElementPolyfillSupport,k=(a,t)=>a,q={toAttribute(a,t){switch(t){case Boolean:a=a?Bt:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},yt=(a,t)=>!Rt(a,t),pt={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ht(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Ot(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let o=i?.call(this);r?.call(this,n),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let t=Ut(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let e=this.properties,s=[...Mt(e),...Tt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(W(i))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:q;this._$Em=i;let o=n.fromAttribute(e,r.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??yt)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,o=this[i];n!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,r,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[k("elementProperties")]=new Map,_[k("finalized")]=new Map,zt?.({ReactiveElement:_}),(B.reactiveElementVersions??=[]).push("2.1.2");var Q=globalThis,gt=a=>a,z=Q.trustedTypes,ft=z?z.createPolicy("lit-html",{createHTML:a=>a}):void 0,wt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Et="?"+$,Vt=`<${Et}>`,A=document,D=()=>A.createComment(""),P=a=>a===null||typeof a!="object"&&typeof a!="function",tt=Array.isArray,Ft=a=>tt(a)||typeof a?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,mt=/>/g,w=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,bt=/"/g,At=/^(?:script|style|textarea|title)$/i,et=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),p=et(1),Jt=et(2),Zt=et(3),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),$t=new WeakMap,E=A.createTreeWalker(A,129);function St(a,t){if(!tt(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(t):t}var jt=(a,t)=>{let e=a.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",n=I;for(let o=0;o<e;o++){let d=a[o],c,u,l=-1,y=0;for(;y<d.length&&(n.lastIndex=y,u=n.exec(d),u!==null);)y=n.lastIndex,n===I?u[1]==="!--"?n=vt:u[1]!==void 0?n=mt:u[2]!==void 0?(At.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=w):u[3]!==void 0&&(n=w):n===w?u[0]===">"?(n=i??I,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?w:u[3]==='"'?bt:_t):n===bt||n===_t?n=w:n===vt||n===mt?n=I:(n=w,i=void 0);let g=n===w&&a[o+1].startsWith("/>")?" ":"";r+=n===I?d+Vt:l>=0?(s.push(c),d.slice(0,l)+wt+d.slice(l)+$+g):d+$+(l===-2?o:g)}return[St(a,r+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},R=class a{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0,o=t.length-1,d=this.parts,[c,u]=jt(t,e);if(this.el=a.createElement(c,s),E.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=E.nextNode())!==null&&d.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(wt)){let y=u[n++],g=i.getAttribute(l).split($),v=/([.?@])?(.*)/.exec(y);d.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?Y:v[1]==="?"?G:v[1]==="@"?J:C}),i.removeAttribute(l)}else l.startsWith($)&&(d.push({type:6,index:r}),i.removeAttribute(l));if(At.test(i.tagName)){let l=i.textContent.split($),y=l.length-1;if(y>0){i.textContent=z?z.emptyScript:"";for(let g=0;g<y;g++)i.append(l[g],D()),E.nextNode(),d.push({type:2,index:++r});i.append(l[y],D())}}}else if(i.nodeType===8)if(i.data===Et)d.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)d.push({type:7,index:r}),l+=$.length-1}r++}}static createElement(t,e){let s=A.createElement("template");return s.innerHTML=t,s}};function x(a,t,e=a,s){if(t===S)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=P(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(a),i._$AT(a,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=x(a,i._$AS(a,t.values),i,s)),t}var X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??A).importNode(e,!0);E.currentNode=i;let r=E.nextNode(),n=0,o=0,d=s[0];for(;d!==void 0;){if(n===d.index){let c;d.type===2?c=new H(r,r.nextSibling,this,t):d.type===1?c=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(c=new Z(r,this,t)),this._$AV.push(c),d=s[++o]}n!==d?.index&&(r=E.nextNode(),n++)}return E.currentNode=A,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},H=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),P(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(St(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new X(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new R(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new a(this.O(D()),this.O(D()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=gt(t).nextSibling;gt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=x(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{let o=t,d,c;for(t=r[0],d=0;d<r.length-1;d++)c=x(this,o[s+d],e,d),c===S&&(c=this._$AH[d]),n||=!P(c)||c!==this._$AH[d],c===h?t=h:t!==h&&(t+=(c??"")+r[d+1]),this._$AH[d]=c}n&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Y=class extends C{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},G=class extends C{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},J=class extends C{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??h)===S)return;let s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Z=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var Wt=Q.litHtmlPolyfillSupport;Wt?.(R,H),(Q.litHtmlVersions??=[]).push("3.3.2");var xt=(a,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new H(t.insertBefore(D(),r),r,void 0,e??{})}return i._$AI(a),i};var st=globalThis,b=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};b._$litElement$=!0,b.finalized=!0,st.litElementHydrateSupport?.({LitElement:b});var qt=st.litElementPolyfillSupport;qt?.({LitElement:b});(st.litElementVersions??=[]).push("4.2.2");var it=class a extends b{static LAYOUT_BUILD_MARKER="wm-2026-02-25-1";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(t){let e=this._hass;this._hass=t;let s=this.buildRelevantStateSignature(t),i=s!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=s,(e!==t||i)&&this.requestUpdate("hass",e)}setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return p`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return p`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let m=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return p`<ha-card><div class="content">${m}</div></ha-card>`}let e=this.hass.states[t];if(!e)return p`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let s=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",i=this.getEntityId("preset_entity"),r=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),o=this.getEntityId("status_entity"),d=this.getEntityId("brightness_entity"),c=this.getEntityId("temperature_entity"),u=this.hass.states[s],y=(this.optimisticPowerState??u?.state)==="on",g=!!u&&!y,v=o?this.hass.states[o]:void 0,O=i?this.hass.states[i]:void 0,Ct=r?this.hass.states[r]:void 0,Lt=n?this.hass.states[n]:void 0,f=d?this.hass.states[d]:void 0,nt=c?this.hass.states[c]:void 0,at=f?Number.parseFloat(f.state):Number.NaN,Nt=f?this.readNumberAttribute(f,"min",0):0,kt=f?this.readNumberAttribute(f,"max",100):100,It=f?this.readNumberAttribute(f,"step",1):1,ot=f&&Number.isFinite(at),V=this.readStringListAttribute(O,"options"),Dt=this.getLayerSourceRows(),dt=this.readLayoutPayload(Ct,Lt),Pt=v?`${e.state} (${v.state})`:e.state;return p`
      <ha-card>
        <div class="header-row">
          <div class="header">${this.config.title??"Novastar H Series"}</div>
          <div class="header-controls">
            ${f&&ot?p`
                  <div class="header-brightness" title="Brightness">
                    <input
                      class="brightness-slider header-brightness-slider"
                      type="range"
                      min=${Nt}
                      max=${kt}
                      step=${It}
                      .value=${String(at)}
                      .disabled=${g}
                      ?disabled=${g}
                      @change=${this.handleBrightnessChanged}
                    />
                  </div>
                `:h}
            ${u?p`
                  <label class="power-toggle" title="Toggle screen output">
                    <input
                      type="checkbox"
                      .checked=${y}
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
            <span class="value">${Pt}</span>
          </div>
          ${nt?p`<div class="row"><span class="label">Temperature</span><span class="value">${nt.state}</span></div>`:h}
          ${O?V.length>0?(()=>{let m=this.resolveSelectedOption(O,V);return p`
                    <div class="row input-row">
                      <span class="label">Preset</span>
                      <select
                        class="input-select"
                        .disabled=${g}
                        ?disabled=${g}
                        @change=${this.handlePresetSelectionChanged}
                      >
                        ${V.map(L=>p`
                          <option
                            .value=${L}
                            ?selected=${this.optionEquals(L,m)}
                          >${L}</option>
                        `)}
                      </select>
                    </div>
                  `})():p`<div class="row"><span class="label">Preset</span><span class="value">${O.state}</span></div>`:h}
          ${Dt.map(m=>{let L=this.resolveSelectedOption(m.entity,m.options);return p`
              <div class="row input-row">
                <span class="label">Layer ${m.layerNumber} Source</span>
                <select
                  class="input-select"
                  data-entity-id=${m.entityId}
                  .disabled=${g}
                  ?disabled=${g}
                  @change=${this.handleLayerSourceChanged}
                >
                  ${m.options.map(F=>p`
                    <option
                      .value=${F}
                      ?selected=${this.optionEquals(F,L)}
                    >${F}</option>
                  `)}
                </select>
              </div>
            `})}
          ${dt?this.renderLayoutPreview(dt):h}
          ${f?ot?h:p`<div class="row"><span class="label">Brightness</span><span class="value">${f.state}</span></div>`:h}
        </div>
      </ha-card>
    `}static styles=U`
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
      position: relative;
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
  `;renderLayoutPreview(t){let e=t.screenWidth,s=t.screenHeight,i=[...t.layers].sort((r,n)=>r.z-n.z);return p`
      <div class="layout-preview">
        <div class="layout-title">Screen Layout</div>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${e} ${s}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect class="layout-screen" x="0" y="0" width=${e} height=${s}></rect>
          ${i.length===0?p`<text class="layout-empty" x=${e/2} y=${s/2}>No layers detected</text>`:h}
          ${i.map(r=>{let n=r.source?.trim()||r.id,o=r.x+2,d=r.y+10;return p`
              <g>
                <rect
                  class="layout-layer"
                  x=${r.x}
                  y=${r.y}
                  width=${r.width}
                  height=${r.height}
                ></rect>
                <text class="layout-label" x=${o} y=${d}>${n}</text>
              </g>
            `})}
        </svg>
        <div class="layout-version">${a.LAYOUT_BUILD_MARKER}</div>
      </div>
    `}readNumberAttribute(t,e,s){let i=t.attributes[e];if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"){let r=Number.parseFloat(i);if(Number.isFinite(r))return r}return s}readStringListAttribute(t,e){if(!t)return[];let s=t.attributes[e];return Array.isArray(s)?s.filter(i=>typeof i=="string"):[]}resolveSelectedOption(t,e){let s=t.state?.trim(),i=[s,this.readStringAttribute(t,"current_option"),this.readStringAttribute(t,"selected_option"),this.readStringAttribute(t,"source"),this.readStringAttribute(t,"current_source")].filter(r=>!!r);for(let r of i){let n=e.find(c=>c===r);if(n)return n;let o=r.toLowerCase(),d=e.find(c=>c.toLowerCase()===o);if(d)return d}return s??""}readStringAttribute(t,e){let s=t.attributes[e];return typeof s!="string"?void 0:s.trim()||void 0}optionEquals(t,e){if(t===e)return!0;let s=t.trim().toLowerCase(),i=e.trim().toLowerCase();return s===i}readLayoutPayload(t,e){if(!t||!e){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!t,hasLayersEntity:!!e});return}let s=this.readFirstScreen(t);if(!s){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let i=this.readFiniteNumber(s.width??s.w),r=this.readFiniteNumber(s.height??s.h);if(!i||!r||i<=0||r<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:i,screenHeight:r,firstScreen:s});return}let n=this.readLayersCollection(e),o=n.map((d,c)=>this.normalizeLayoutLayer(d,c)).filter(d=>!!d);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:o.length,screenWidth:i,screenHeight:r}),{screenWidth:i,screenHeight:r,layers:o}}readFirstScreen(t){let e=[t.state,t.attributes.screens,t.attributes.screen_list,t.attributes.screen,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let s of e){let i=this.parseStructuredValue(s);if(Array.isArray(i)&&i.length>0){let o=this.asRecord(i[0]);if(o)return o}let r=this.asRecord(i);if(!r)continue;let n=r.screens;if(Array.isArray(n)&&n.length>0){let o=this.asRecord(n[0]);if(o)return o}if(this.readFiniteNumber(r.width??r.w)&&this.readFiniteNumber(r.height??r.h))return r}if(this.readFiniteNumber(t.attributes.width??t.attributes.w)&&this.readFiniteNumber(t.attributes.height??t.attributes.h))return t.attributes}readLayersCollection(t){let e=[t.state,t.attributes.layers,t.attributes.layer_list,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let s of e){let i=this.parseStructuredValue(s);if(Array.isArray(i))return i;let r=this.asRecord(i);if(!r)continue;if(Array.isArray(r.layers))return r.layers;if(Array.isArray(r.layer_list))return r.layer_list;let n=this.asRecord(r.result);if(n&&Array.isArray(n.layers))return n.layers;let o=this.asRecord(r.data);if(o&&Array.isArray(o.layers))return o.layers;let d=Object.values(r).map(c=>this.asRecord(c)).filter(c=>!!c).filter(c=>!!this.asRecord(c.general)&&!!this.asRecord(c.window));if(d.length>0)return d;if(this.asRecord(r.general)&&this.asRecord(r.window))return[r]}return[]}parseStructuredValue(t){if(typeof t!="string")return t;try{return JSON.parse(t)}catch{return t}}asRecord(t){if(!(!t||typeof t!="object"||Array.isArray(t)))return t}readFiniteNumber(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){let e=Number.parseFloat(t);if(Number.isFinite(e))return e}}normalizeLayoutLayer(t,e){let s=this.asRecord(t);if(!s){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:e,value:t});return}let i=this.asRecord(s.general),r=this.asRecord(s.window),n=this.asRecord(s.audioStatus);if(!i||!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:e,hasGeneral:!!i,hasWindow:!!r,layer:s});return}let o=this.readFiniteNumber(r.width),d=this.readFiniteNumber(r.height),c=this.readFiniteNumber(r.x)??0,u=this.readFiniteNumber(r.y)??0;if(!o||!d||o<=0||d<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:e,width:o,height:d,windowData:r});return}let l=i.layerId;if(typeof l!="string"&&typeof l!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:e,layerId:l,general:i});return}let y=this.readFiniteNumber(i.zorder);if(y===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:e,zorder:i.zorder,general:i});return}let g=typeof i.name=="string"?i.name:void 0,v=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:e,layerId:l,x:c,y:u,width:o,height:d,zValue:y,source:g,audioOpen:v}),{id:String(l),x:c,y:u,width:o,height:d,z:y,source:g,audioOpen:v}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(t,e){if(this.isLayoutDebugEnabled()){if(e===void 0){console.debug("[NovastarCard][layout]",t);return}console.debug("[NovastarCard][layout]",t,e)}}buildRelevantStateSignature(t){if(!t)return"";let e=new Set,s=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of s){let o=this.config?.[n];o&&e.add(o);let d=this.resolvedEntities[n];d&&e.add(d)}e.add("switch.novastar_h2_power_screen_output");let i=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(t.states))i.test(n)&&e.add(n);return Array.from(e).sort().map(n=>{let o=t.states[n];if(!o)return`${n}:missing`;let d=this.readStringListAttribute(o,"options").join("|"),c=this.readStringAttribute(o,"current_option")??"",u=this.readStringAttribute(o,"selected_option")??"",l=this.readStringAttribute(o,"source")??"",y=this.readStringAttribute(o,"current_source")??"";return`${n}:${o.state}:${d}:${c}:${u}:${l}:${y}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(t){await new Promise(e=>{window.setTimeout(()=>e(),t)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(t=>({entityId:t,entity:this.hass?.states[t]})).filter(t=>!!t.entity).map(t=>{let e=this.readStringListAttribute(t.entity,"options");return{...t,options:e,layerNumber:this.getLayerNumber(t.entityId)}}).filter(t=>t.options.length>0&&t.entity.state!=="unavailable"&&t.entity.state!=="unknown").sort((t,e)=>t.layerNumber-e.layerNumber):[]}getLayerSourceEntityIds(){let t=/^select\..*_layer_\d+_source$/,e=this.resolvedLayerSourceEntities,s=this.hass?Object.keys(this.hass.states).filter(i=>t.test(i)):[];return e.length===0?s:s.length===0?e:Array.from(new Set([...e,...s]))}getLayerNumber(t){let e=t.match(/_layer_(\d+)_source$/);if(!e)return Number.MAX_SAFE_INTEGER;let s=Number.parseInt(e[1],10);return Number.isFinite(s)?s:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.hass.states[e];if(s&&s.state!=="on")return;let i=this.getEntityId("brightness_entity");if(!i)return;let r=t.target,n=Number.parseFloat(r.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:i,value:n})}async handlePowerToggle(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output";if(!this.hass.states[e])return;let i=t.target.checked;this.optimisticPowerState=i?"on":"off",this.requestUpdate();let r=i?"turn_on":"turn_off";try{await this.hass.callService?.("switch",r,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetSelectionChanged(t){if(!this.hass)return;let e=this.getEntityId("preset_entity");if(!e)return;let i=t.target.value?.trim();i&&(await this.hass.callService?.("select","select_option",{entity_id:e,option:i}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(t){if(!this.hass)return;let e=t.target,s=e.dataset.entityId,i=e.value?.trim();!s||!i||await this.hass.callService?.("select","select_option",{entity_id:s,option:i})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e){this.optimisticPowerState=void 0;return}e.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let s=this.resolvedEntities[t];if(s&&s.trim())return s}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let s=e.filter(o=>{if(!o||typeof o!="object")return!1;let d=o;return d.device_id===t&&!d.disabled_by&&!d.hidden_by&&typeof d.entity_id=="string"}).map(o=>o.entity_id),i=/^select\..*_layer_\d+_source$/,r=s.filter(o=>i.test(o)).sort((o,d)=>this.getLayerNumber(o)-this.getLayerNumber(d)),n={power_entity:this.pickEntity(s,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(s,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(s,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(s,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(s,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(s,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(s,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(s,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(s,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(s,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=r,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,s){for(let i of e){let r=t.find(n=>i.test(n));if(r)return r}for(let i of s){let r=`${i}.`,n=t.find(o=>o.startsWith(r));if(n)return n}}},rt=class extends b{hass;config={type:"custom:novastar-h-series-card"};showOverrides=!1;localDeviceId;autoDetectedDeviceId;deviceNameById={};loadingDeviceNames=!1;attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1},showOverrides:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e;let s=e.device_id?.trim();s&&(this.localDeviceId=s,this.autoDetectedDeviceId=s),this.showOverrides=!!(e.power_entity||e.preset_entity||e.screens_entity||e.layers_entity||e.controller_entity||e.status_entity||e.brightness_entity||e.temperature_entity),this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensureDeviceNames()}render(){if(!this.hass)return h;let t=!!customElements.get("ha-device-picker"),e=this.config.device_id?.trim()||this.localDeviceId||this.autoDetectedDeviceId||"",s=this.getSelectedDeviceLabel(e);return p`
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
          .value=${s}
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
    `}handleOverridesToggle(t){let e=t.target;this.showOverrides=e.open}handleInputChanged(t){let e=t.target,s=e.configValue;if(!s)return;let i=e.value?.trim()??"";this.updateConfigValue(s,i)}handleEntityChanged(t){let s=t.target.configValue;if(!s||!t.detail||t.detail.value===void 0)return;let i=t.detail.value?.trim()??"";this.updateConfigValue(s,i)}updateConfigValue(t,e){if(t==="device_id"&&(this.localDeviceId=e||void 0,this.autoDetectedDeviceId=e||this.autoDetectedDeviceId),(this.config[t]??"")===e)return;let i={...this.config};e?i[t]=e:delete i[t],i.type||(i.type="custom:novastar-h-series-card"),i.controller_entity||(i.controller_entity=""),this.config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(s=>{if(!s||typeof s!="object")return!1;let i=s;return i.platform==="novastar_h"&&typeof i.device_id=="string"&&!i.disabled_by&&!i.hidden_by}).map(s=>s.device_id)[0];if(!e)return;this.autoDetectedDeviceId=e,this.localDeviceId=e,this.requestUpdate(),this.updateConfigValue("device_id",e)}catch{}}}async ensureDeviceNames(){if(!this.hass?.callWS||this.loadingDeviceNames)return;let t=this.config.device_id??this.localDeviceId;if(!(!t||this.deviceNameById[t])){this.loadingDeviceNames=!0;try{let e=await this.hass.callWS({type:"config/device_registry/list"});if(!Array.isArray(e))return;let s={...this.deviceNameById};for(let i of e){if(!i||typeof i!="object")continue;let r=i,n=r.id;if(typeof n!="string")continue;let o=r.name_by_user??r.name??r.model;typeof o=="string"&&o.trim()&&(s[n]=o.trim())}this.deviceNameById=s,this.requestUpdate()}catch{}finally{this.loadingDeviceNames=!1}}}getSelectedDeviceLabel(t){if(!t)return"Auto-detecting...";let e=this.deviceNameById[t];return e?`${e} (${t})`:t}static styles=U`
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
  `};try{customElements.define("novastar-h-series-card",it)}catch{}try{customElements.define("novastar-h-series-card-editor",rt)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{it as NovastarHSeriesCard};
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
