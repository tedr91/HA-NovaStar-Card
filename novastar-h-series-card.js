var j=globalThis,W=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),yt=new WeakMap,M=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(W&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&yt.set(e,t))}return t}toString(){return this.cssText}},gt=a=>new M(typeof a=="string"?a:a+"",void 0,Z),q=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[r+1],a[0]);return new M(e,a,Z)},ft=(a,t)=>{if(W)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=j.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,a.appendChild(i)}},Q=W?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return gt(e)})(a):a;var{is:Pt,defineProperty:Mt,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:Ht,getOwnPropertySymbols:Tt,getPrototypeOf:Ut}=Object,Y=globalThis,vt=Y.trustedTypes,zt=vt?vt.emptyScript:"",Vt=Y.reactiveElementPolyfillSupport,O=(a,t)=>a,tt={toAttribute(a,t){switch(t){case Boolean:a=a?zt:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},_t=(a,t)=>!Pt(a,t),mt={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:_t};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Mt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Ot(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let o=s?.call(this);r?.call(this,n),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let t=Ut(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let e=this.properties,i=[...Ht(e),...Tt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:tt).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:tt;this._$Em=s;let o=n.fromAttribute(e,r.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let n=this.constructor;if(s===!1&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??_t)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,r,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[O("elementProperties")]=new Map,b[O("finalized")]=new Map,Vt?.({ReactiveElement:b}),(Y.reactiveElementVersions??=[]).push("2.1.2");var ot=globalThis,bt=a=>a,X=ot.trustedTypes,$t=X?X.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ct="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+E,Bt=`<${Lt}>`,C=document,T=()=>C.createComment(""),U=a=>a===null||typeof a!="object"&&typeof a!="function",dt=Array.isArray,Ft=a=>dt(a)||typeof a?.[Symbol.iterator]=="function",et=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,Et=/>/g,S=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,St=/"/g,kt=/^(?:script|style|textarea|title)$/i,ct=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),f=ct(1),Jt=ct(2),Zt=ct(3),L=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),xt=new WeakMap,x=C.createTreeWalker(C,129);function Nt(a,t){if(!dt(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}var jt=(a,t)=>{let e=a.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",n=H;for(let o=0;o<e;o++){let d=a[o],c,p,h=-1,l=0;for(;l<d.length&&(n.lastIndex=l,p=n.exec(d),p!==null);)l=n.lastIndex,n===H?p[1]==="!--"?n=wt:p[1]!==void 0?n=Et:p[2]!==void 0?(kt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=S):p[3]!==void 0&&(n=S):n===S?p[0]===">"?(n=s??H,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?S:p[3]==='"'?St:At):n===St||n===At?n=S:n===wt||n===Et?n=H:(n=S,s=void 0);let y=n===S&&a[o+1].startsWith("/>")?" ":"";r+=n===H?d+Bt:h>=0?(i.push(c),d.slice(0,h)+Ct+d.slice(h)+E+y):d+E+(h===-2?o:y)}return[Nt(a,r+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},z=class a{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,d=this.parts,[c,p]=jt(t,e);if(this.el=a.createElement(c,i),x.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=x.nextNode())!==null&&d.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(Ct)){let l=p[n++],y=s.getAttribute(h).split(E),u=/([.?@])?(.*)/.exec(l);d.push({type:1,index:r,name:u[2],strings:y,ctor:u[1]==="."?st:u[1]==="?"?rt:u[1]==="@"?nt:I}),s.removeAttribute(h)}else h.startsWith(E)&&(d.push({type:6,index:r}),s.removeAttribute(h));if(kt.test(s.tagName)){let h=s.textContent.split(E),l=h.length-1;if(l>0){s.textContent=X?X.emptyScript:"";for(let y=0;y<l;y++)s.append(h[y],T()),x.nextNode(),d.push({type:2,index:++r});s.append(h[l],T())}}}else if(s.nodeType===8)if(s.data===Lt)d.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(E,h+1))!==-1;)d.push({type:7,index:r}),h+=E.length-1}r++}}static createElement(t,e){let i=C.createElement("template");return i.innerHTML=t,i}};function D(a,t,e=a,i){if(t===L)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=U(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(a),s._$AT(a,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=D(a,s._$AS(a,t.values),s,i)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??C).importNode(e,!0);x.currentNode=s;let r=x.nextNode(),n=0,o=0,d=i[0];for(;d!==void 0;){if(n===d.index){let c;d.type===2?c=new V(r,r.nextSibling,this,t):d.type===1?c=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(c=new at(r,this,t)),this._$AV.push(c),d=i[++o]}n!==d?.index&&(r=x.nextNode(),n++)}return x.currentNode=C,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},V=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),U(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=z.createElement(Nt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new it(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new z(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new a(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=bt(t).nextSibling;bt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(r===void 0)t=D(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{let o=t,d,c;for(t=r[0],d=0;d<r.length-1;d++)c=D(this,o[i+d],e,d),c===L&&(c=this._$AH[d]),n||=!U(c)||c!==this._$AH[d],c===g?t=g:t!==g&&(t+=(c??"")+r[d+1]),this._$AH[d]=c}n&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},rt=class extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},nt=class extends I{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??g)===L)return;let i=this._$AH,s=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var Wt=ot.litHtmlPolyfillSupport;Wt?.(z,V),(ot.litHtmlVersions??=[]).push("3.3.2");var Dt=(a,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new V(t.insertBefore(T(),r),r,void 0,e??{})}return s._$AI(a),s};var lt=globalThis,$=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};$._$litElement$=!0,$.finalized=!0,lt.litElementHydrateSupport?.({LitElement:$});var qt=lt.litElementPolyfillSupport;qt?.({LitElement:$});(lt.litElementVersions??=[]).push("4.2.2");var ht=class a extends ${static LAYOUT_BUILD_MARKER="v0.2.18";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(t){let e=this._hass;this._hass=t;let i=this.buildRelevantStateSignature(t),s=i!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=i,(e!==t||s)&&this.requestUpdate("hass",e)}setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return f`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return f`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let _=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return f`<ha-card><div class="content">${_}</div></ha-card>`}let e=this.hass.states[t];if(!e)return f`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let i=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),r=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),o=this.getEntityId("status_entity"),d=this.getEntityId("brightness_entity"),c=this.getEntityId("temperature_entity"),p=this.hass.states[i],l=(this.optimisticPowerState??p?.state)==="on",y=!!p&&!l,u=o?this.hass.states[o]:void 0,w=s?this.hass.states[s]:void 0,k=r?this.hass.states[r]:void 0,A=n?this.hass.states[n]:void 0,v=d?this.hass.states[d]:void 0,m=c?this.hass.states[c]:void 0,R=v?Number.parseFloat(v.state):Number.NaN,B=v?this.readNumberAttribute(v,"min",0):0,K=v?this.readNumberAttribute(v,"max",100):100,G=v?this.readNumberAttribute(v,"step",1):1,F=v&&Number.isFinite(R),N=this.readStringListAttribute(w,"options"),It=this.getLayerSourceRows(),pt=this.readLayoutPayload(k,A),Rt=u?`${e.state} (${u.state})`:e.state;return f`
      <ha-card>
        <div class="header-row">
          <div class="header">${this.config.title??"Novastar H Series"}</div>
          <div class="header-controls">
            ${v&&F?f`
                  <div class="header-brightness" title="Brightness">
                    <input
                      class="brightness-slider header-brightness-slider"
                      type="range"
                      min=${B}
                      max=${K}
                      step=${G}
                      .value=${String(R)}
                      .disabled=${y}
                      ?disabled=${y}
                      @change=${this.handleBrightnessChanged}
                    />
                  </div>
                `:g}
            ${p?f`
                  <label class="power-toggle" title="Toggle screen output">
                    <input
                      type="checkbox"
                      .checked=${l}
                      @change=${this.handlePowerToggle}
                    />
                    <span class="power-slider"></span>
                  </label>
                `:g}
          </div>
        </div>
        <div class="content">
          <div class="row">
            <span class="label">Status</span>
            <span class="value">${Rt}</span>
          </div>
          ${m?f`<div class="row"><span class="label">Temperature</span><span class="value">${m.state}</span></div>`:g}
          ${w?N.length>0?(()=>{let _=this.resolveSelectedOption(w,N);return f`
                    <div class="row input-row">
                      <span class="label">Preset</span>
                      <select
                        class="input-select"
                        .disabled=${y}
                        ?disabled=${y}
                        @change=${this.handlePresetSelectionChanged}
                      >
                        ${N.map(P=>f`
                          <option
                            .value=${P}
                            ?selected=${this.optionEquals(P,_)}
                          >${P}</option>
                        `)}
                      </select>
                    </div>
                  `})():f`<div class="row"><span class="label">Preset</span><span class="value">${w.state}</span></div>`:g}
          ${It.map(_=>{let P=this.resolveSelectedOption(_.entity,_.options);return f`
              <div class="row input-row">
                <span class="label">Layer ${_.layerNumber} Source</span>
                <select
                  class="input-select"
                  data-entity-id=${_.entityId}
                  .disabled=${y}
                  ?disabled=${y}
                  @change=${this.handleLayerSourceChanged}
                >
                  ${_.options.map(J=>f`
                    <option
                      .value=${J}
                      ?selected=${this.optionEquals(J,P)}
                    >${J}</option>
                  `)}
                </select>
              </div>
            `})}
          ${pt?this.renderLayoutPreview(pt):g}
          ${v?F?g:f`<div class="row"><span class="label">Brightness</span><span class="value">${v.state}</span></div>`:g}
        </div>
      </ha-card>
    `}static styles=q`
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
  `;renderLayoutPreview(t){let e=t.screenWidth,i=t.screenHeight,s=this.fitLayersToViewport(t.layers,e,i).sort((l,y)=>l.z-y.z),r="#000000",n="#4a4a4a",o="#d9d9d9",d="#808080",c="#ffffff",p=`layers: ${s.length}`,h=s.length===0?"geometry: none":`geometry: ${s.map((l,y)=>`${y}:${Math.round(l.x)},${Math.round(l.y)} ${Math.round(l.width)}x${Math.round(l.height)} z${l.z}`).join(" | ")}`;return f`
      <div class="layout-preview">
        <div class="layout-title">Screen Layout</div>
        <div class="layout-meta">layers: ${s.length} · ${a.LAYOUT_BUILD_MARKER}</div>
        <div class="layout-meta">${h}</div>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${e} ${i}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            class="layout-screen"
            x="0"
            y="0"
            width=${e}
            height=${i}
            fill=${r}
            stroke=${n}
            stroke-width="1"
            style=${`fill:${r};stroke:${n};stroke-width:1;`}
          ></rect>
          <rect
            x=${e*.1}
            y=${i*.1}
            width=${e*.25}
            height=${i*.15}
            fill="#ff00ff"
            stroke="#ffffff"
            stroke-width="3"
            style="fill:#ff00ff;stroke:#ffffff;stroke-width:3;"
          ></rect>
          <text
            x=${e*.1+8}
            y=${i*.1+20}
            fill="#ffffff"
            font-size="14"
            font-family="inherit"
          >TEST RECT</text>
          <text x="10" y="18" fill="#ffd54f" font-size="14" font-family="inherit">${p}</text>
          ${s.length===0?f`<text class="layout-empty" x=${e/2} y=${i/2}>No layers detected</text>`:g}
          ${s.map((l,y)=>{let u=l.source?.trim()||l.id,w=l.x+2,k=l.y+10,A=y*73%360,v=`hsla(${A}, 100%, 50%, 0.45)`,m=`hsl(${A}, 100%, 65%)`;return f`
              <g>
                <rect
                  class="layout-layer"
                  x=${l.x}
                  y=${l.y}
                  width=${l.width}
                  height=${l.height}
                  fill=${v}
                  stroke=${m}
                  stroke-width="3"
                  style=${`fill:${v};stroke:${m};stroke-width:3;`}
                ></rect>
                <text class="layout-label" x=${w} y=${k} fill=${c}>${u}</text>
              </g>
            `})}
        </svg>
        <div class="layout-version">${a.LAYOUT_BUILD_MARKER}</div>
      </div>
    `}fitLayersToViewport(t,e,i){if(t.length===0)return[];let s=Math.min(...t.map(u=>u.x)),r=Math.min(...t.map(u=>u.y)),n=Math.max(...t.map(u=>u.x+u.width)),o=Math.max(...t.map(u=>u.y+u.height)),d=n-s,c=o-r;if(d<=0||c<=0)return t.map(u=>({...u}));let p=e/d,h=i/c,l=Math.max(2,Math.min(e,i)*.01),y=Math.max(24,Math.min(e,i)*.1);return t.map((u,w)=>{let k=(u.x-s)*p,A=(u.y-r)*h,v=u.width*p,m=u.height*h;if(!Number.isFinite(k)||!Number.isFinite(A)||!Number.isFinite(v)||!Number.isFinite(m)||v<=0||m<=0){let F=Math.max(8,y*.15),N=8+w*F;return{...u,x:Math.min(N,Math.max(0,e-y)),y:Math.min(N,Math.max(0,i-y)),width:Math.min(y,e),height:Math.min(y,i)}}let R=Math.min(Math.max(k,0),Math.max(0,e-l)),B=Math.min(Math.max(A,0),Math.max(0,i-l)),K=Math.max(l,e-R),G=Math.max(l,i-B);return{...u,x:R,y:B,width:Math.min(Math.max(v,l),K),height:Math.min(Math.max(m,l),G)}})}readNumberAttribute(t,e,i){let s=t.attributes[e];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let r=Number.parseFloat(s);if(Number.isFinite(r))return r}return i}readStringListAttribute(t,e){if(!t)return[];let i=t.attributes[e];return Array.isArray(i)?i.filter(s=>typeof s=="string"):[]}resolveSelectedOption(t,e){let i=t.state?.trim(),s=[i,this.readStringAttribute(t,"current_option"),this.readStringAttribute(t,"selected_option"),this.readStringAttribute(t,"source"),this.readStringAttribute(t,"current_source")].filter(r=>!!r);for(let r of s){let n=e.find(c=>c===r);if(n)return n;let o=r.toLowerCase(),d=e.find(c=>c.toLowerCase()===o);if(d)return d}return i??""}readStringAttribute(t,e){let i=t.attributes[e];return typeof i!="string"?void 0:i.trim()||void 0}optionEquals(t,e){if(t===e)return!0;let i=t.trim().toLowerCase(),s=e.trim().toLowerCase();return i===s}readLayoutPayload(t,e){if(!t||!e){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!t,hasLayersEntity:!!e});return}let i=this.readFirstScreen(t);if(!i){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let s=this.readFiniteNumber(i.width??i.w),r=this.readFiniteNumber(i.height??i.h);if(!s||!r||s<=0||r<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:s,screenHeight:r,firstScreen:i});return}let n=this.readLayersCollection(e),o=n.map((d,c)=>this.normalizeLayoutLayer(d,c)).filter(d=>!!d);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:o.length,screenWidth:s,screenHeight:r}),{screenWidth:s,screenHeight:r,layers:o}}readFirstScreen(t){let e=[t.state,t.attributes.screens,t.attributes.screen_list,t.attributes.screen,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let i of e){let s=this.parseStructuredValue(i);if(Array.isArray(s)&&s.length>0){let o=this.asRecord(s[0]);if(o)return o}let r=this.asRecord(s);if(!r)continue;let n=r.screens;if(Array.isArray(n)&&n.length>0){let o=this.asRecord(n[0]);if(o)return o}if(this.readFiniteNumber(r.width??r.w)&&this.readFiniteNumber(r.height??r.h))return r}if(this.readFiniteNumber(t.attributes.width??t.attributes.w)&&this.readFiniteNumber(t.attributes.height??t.attributes.h))return t.attributes}readLayersCollection(t){let e=[t.state,t.attributes.layers,t.attributes.layer_list,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let i of e){let s=this.parseStructuredValue(i);if(Array.isArray(s))return s;let r=this.asRecord(s);if(!r)continue;if(Array.isArray(r.layers))return r.layers;if(Array.isArray(r.layer_list))return r.layer_list;let n=this.asRecord(r.result);if(n&&Array.isArray(n.layers))return n.layers;let o=this.asRecord(r.data);if(o&&Array.isArray(o.layers))return o.layers;let d=Object.values(r).map(c=>this.asRecord(c)).filter(c=>!!c).filter(c=>!!this.asRecord(c.general)&&!!this.asRecord(c.window));if(d.length>0)return d;if(this.asRecord(r.general)&&this.asRecord(r.window))return[r]}return[]}parseStructuredValue(t){if(typeof t!="string")return t;try{return JSON.parse(t)}catch{return t}}asRecord(t){if(!(!t||typeof t!="object"||Array.isArray(t)))return t}readFiniteNumber(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){let e=Number.parseFloat(t);if(Number.isFinite(e))return e}}normalizeLayoutLayer(t,e){let i=this.asRecord(t);if(!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:e,value:t});return}let s=this.asRecord(i.general),r=this.asRecord(i.window),n=this.asRecord(i.audioStatus);if(!s||!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:e,hasGeneral:!!s,hasWindow:!!r,layer:i});return}let o=this.readFiniteNumber(r.width),d=this.readFiniteNumber(r.height),c=this.readFiniteNumber(r.x)??0,p=this.readFiniteNumber(r.y)??0;if(!o||!d||o<=0||d<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:e,width:o,height:d,windowData:r});return}let h=s.layerId;if(typeof h!="string"&&typeof h!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:e,layerId:h,general:s});return}let l=this.readFiniteNumber(s.zorder);if(l===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:e,zorder:s.zorder,general:s});return}let y=typeof s.name=="string"?s.name:void 0,u=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:e,layerId:h,x:c,y:p,width:o,height:d,zValue:l,source:y,audioOpen:u}),{id:String(h),x:c,y:p,width:o,height:d,z:l,source:y,audioOpen:u}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(t,e){if(this.isLayoutDebugEnabled()){if(e===void 0){console.debug("[NovastarCard][layout]",t);return}console.debug("[NovastarCard][layout]",t,e)}}buildRelevantStateSignature(t){if(!t)return"";let e=new Set,i=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of i){let o=this.config?.[n];o&&e.add(o);let d=this.resolvedEntities[n];d&&e.add(d)}e.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(t.states))s.test(n)&&e.add(n);return Array.from(e).sort().map(n=>{let o=t.states[n];if(!o)return`${n}:missing`;let d=this.readStringListAttribute(o,"options").join("|"),c=this.readStringAttribute(o,"current_option")??"",p=this.readStringAttribute(o,"selected_option")??"",h=this.readStringAttribute(o,"source")??"",l=this.readStringAttribute(o,"current_source")??"";return`${n}:${o.state}:${d}:${c}:${p}:${h}:${l}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(t){await new Promise(e=>{window.setTimeout(()=>e(),t)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(t=>({entityId:t,entity:this.hass?.states[t]})).filter(t=>!!t.entity).map(t=>{let e=this.readStringListAttribute(t.entity,"options");return{...t,options:e,layerNumber:this.getLayerNumber(t.entityId)}}).filter(t=>t.options.length>0&&t.entity.state!=="unavailable"&&t.entity.state!=="unknown").sort((t,e)=>t.layerNumber-e.layerNumber):[]}getLayerSourceEntityIds(){let t=/^select\..*_layer_\d+_source$/,e=this.resolvedLayerSourceEntities,i=this.hass?Object.keys(this.hass.states).filter(s=>t.test(s)):[];return e.length===0?i:i.length===0?e:Array.from(new Set([...e,...i]))}getLayerNumber(t){let e=t.match(/_layer_(\d+)_source$/);if(!e)return Number.MAX_SAFE_INTEGER;let i=Number.parseInt(e[1],10);return Number.isFinite(i)?i:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",i=this.hass.states[e];if(i&&i.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let r=t.target,n=Number.parseFloat(r.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output";if(!this.hass.states[e])return;let s=t.target.checked;this.optimisticPowerState=s?"on":"off",this.requestUpdate();let r=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",r,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetSelectionChanged(t){if(!this.hass)return;let e=this.getEntityId("preset_entity");if(!e)return;let s=t.target.value?.trim();s&&(await this.hass.callService?.("select","select_option",{entity_id:e,option:s}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(t){if(!this.hass)return;let e=t.target,i=e.dataset.entityId,s=e.value?.trim();!i||!s||await this.hass.callService?.("select","select_option",{entity_id:i,option:s})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e){this.optimisticPowerState=void 0;return}e.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let i=this.resolvedEntities[t];if(i&&i.trim())return i}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let i=e.filter(o=>{if(!o||typeof o!="object")return!1;let d=o;return d.device_id===t&&!d.disabled_by&&!d.hidden_by&&typeof d.entity_id=="string"}).map(o=>o.entity_id),s=/^select\..*_layer_\d+_source$/,r=i.filter(o=>s.test(o)).sort((o,d)=>this.getLayerNumber(o)-this.getLayerNumber(d)),n={power_entity:this.pickEntity(i,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(i,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(i,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(i,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(i,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(i,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(i,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(i,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(i,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(i,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=r,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,i){for(let s of e){let r=t.find(n=>s.test(n));if(r)return r}for(let s of i){let r=`${s}.`,n=t.find(o=>o.startsWith(r));if(n)return n}}},ut=class extends ${hass;config={type:"custom:novastar-h-series-card"};showOverrides=!1;localDeviceId;autoDetectedDeviceId;deviceNameById={};loadingDeviceNames=!1;attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1},showOverrides:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e;let i=e.device_id?.trim();i&&(this.localDeviceId=i,this.autoDetectedDeviceId=i),this.showOverrides=!!(e.power_entity||e.preset_entity||e.screens_entity||e.layers_entity||e.controller_entity||e.status_entity||e.brightness_entity||e.temperature_entity),this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensureDeviceNames()}render(){if(!this.hass)return g;let t=!!customElements.get("ha-device-picker"),e=this.config.device_id?.trim()||this.localDeviceId||this.autoDetectedDeviceId||"",i=this.getSelectedDeviceLabel(e);return f`
      <div class="editor">
        <ha-textfield
          label="Title"
          .value=${this.config.title??""}
          .configValue=${"title"}
          @input=${this.handleInputChanged}
        ></ha-textfield>
        ${t?f`
              <ha-device-picker
                .hass=${this.hass}
                label="Device picker (optional)"
                .value=${e}
                .configValue=${"device_id"}
                @value-changed=${this.handleEntityChanged}
              ></ha-device-picker>
            `:f`
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
    `}handleOverridesToggle(t){let e=t.target;this.showOverrides=e.open}handleInputChanged(t){let e=t.target,i=e.configValue;if(!i)return;let s=e.value?.trim()??"";this.updateConfigValue(i,s)}handleEntityChanged(t){let i=t.target.configValue;if(!i||!t.detail||t.detail.value===void 0)return;let s=t.detail.value?.trim()??"";this.updateConfigValue(i,s)}updateConfigValue(t,e){if(t==="device_id"&&(this.localDeviceId=e||void 0,this.autoDetectedDeviceId=e||this.autoDetectedDeviceId),(this.config[t]??"")===e)return;let s={...this.config};e?s[t]=e:delete s[t],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(i=>{if(!i||typeof i!="object")return!1;let s=i;return s.platform==="novastar_h"&&typeof s.device_id=="string"&&!s.disabled_by&&!s.hidden_by}).map(i=>i.device_id)[0];if(!e)return;this.autoDetectedDeviceId=e,this.localDeviceId=e,this.requestUpdate(),this.updateConfigValue("device_id",e)}catch{}}}async ensureDeviceNames(){if(!this.hass?.callWS||this.loadingDeviceNames)return;let t=this.config.device_id??this.localDeviceId;if(!(!t||this.deviceNameById[t])){this.loadingDeviceNames=!0;try{let e=await this.hass.callWS({type:"config/device_registry/list"});if(!Array.isArray(e))return;let i={...this.deviceNameById};for(let s of e){if(!s||typeof s!="object")continue;let r=s,n=r.id;if(typeof n!="string")continue;let o=r.name_by_user??r.name??r.model;typeof o=="string"&&o.trim()&&(i[n]=o.trim())}this.deviceNameById=i,this.requestUpdate()}catch{}finally{this.loadingDeviceNames=!1}}}getSelectedDeviceLabel(t){if(!t)return"Auto-detecting...";let e=this.deviceNameById[t];return e?`${e} (${t})`:t}static styles=q`
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
  `};try{customElements.define("novastar-h-series-card",ht)}catch{}try{customElements.define("novastar-h-series-card-editor",ut)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{ht as NovastarHSeriesCard};
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
