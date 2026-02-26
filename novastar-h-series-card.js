var tt=globalThis,et=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),Ct=new WeakMap,B=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(et&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ct.set(e,t))}return t}toString(){return this.cssText}},Lt=o=>new B(typeof o=="string"?o:o+"",void 0,ct),it=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new B(e,o,ct)},kt=(o,t)=>{if(et)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=tt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},lt=et?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Lt(e)})(o):o;var{is:Yt,defineProperty:Kt,getOwnPropertyDescriptor:Gt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Qt,getPrototypeOf:Zt}=Object,st=globalThis,Nt=st.trustedTypes,te=Nt?Nt.emptyScript:"",ee=st.reactiveElementPolyfillSupport,z=(o,t)=>o,ht={toAttribute(o,t){switch(t){case Boolean:o=o?te:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Dt=(o,t)=>!Yt(o,t),It={attribute:!0,type:String,converter:ht,reflect:!1,useDefault:!1,hasChanged:Dt};Symbol.metadata??=Symbol("metadata"),st.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=It){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Kt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Gt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let a=s?.call(this);r?.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??It}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;let t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){let e=this.properties,i=[...Jt(e),...Qt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(lt(s))}else t!==void 0&&e.push(lt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:ht).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ht;this._$Em=s;let a=n.fromAttribute(e,r.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let n=this.constructor;if(s===!1&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??Dt)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[z("elementProperties")]=new Map,_[z("finalized")]=new Map,ee?.({ReactiveElement:_}),(st.reactiveElementVersions??=[]).push("2.1.2");var mt=globalThis,Pt=o=>o,rt=mt.trustedTypes,Rt=rt?rt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Bt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+S,ie=`<${zt}>`,N=document,V=()=>N.createComment(""),j=o=>o===null||typeof o!="object"&&typeof o!="function",$t=Array.isArray,se=o=>$t(o)||typeof o?.[Symbol.iterator]=="function",ut=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mt=/-->/g,Ht=/>/g,L=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Tt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,bt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),f=bt(1),X=bt(2),he=bt(3),I=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ut=new WeakMap,k=N.createTreeWalker(N,129);function Vt(o,t){if(!$t(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}var re=(o,t)=>{let e=o.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",n=F;for(let a=0;a<e;a++){let d=o[a],l,u,c=-1,g=0;for(;g<d.length&&(n.lastIndex=g,u=n.exec(d),u!==null);)g=n.lastIndex,n===F?u[1]==="!--"?n=Mt:u[1]!==void 0?n=Ht:u[2]!==void 0?(Ft.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=L):u[3]!==void 0&&(n=L):n===L?u[0]===">"?(n=s??F,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,l=u[1],n=u[3]===void 0?L:u[3]==='"'?Tt:Ot):n===Tt||n===Ot?n=L:n===Mt||n===Ht?n=F:(n=L,s=void 0);let y=n===L&&o[a+1].startsWith("/>")?" ":"";r+=n===F?d+ie:c>=0?(i.push(l),d.slice(0,c)+Bt+d.slice(c)+S+y):d+S+(c===-2?a:y)}return[Vt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},W=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,a=t.length-1,d=this.parts,[l,u]=re(t,e);if(this.el=o.createElement(l,i),k.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=k.nextNode())!==null&&d.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let c of s.getAttributeNames())if(c.endsWith(Bt)){let g=u[n++],y=s.getAttribute(c).split(S),m=/([.?@])?(.*)/.exec(g);d.push({type:1,index:r,name:m[2],strings:y,ctor:m[1]==="."?gt:m[1]==="?"?yt:m[1]==="@"?ft:H}),s.removeAttribute(c)}else c.startsWith(S)&&(d.push({type:6,index:r}),s.removeAttribute(c));if(Ft.test(s.tagName)){let c=s.textContent.split(S),g=c.length-1;if(g>0){s.textContent=rt?rt.emptyScript:"";for(let y=0;y<g;y++)s.append(c[y],V()),k.nextNode(),d.push({type:2,index:++r});s.append(c[g],V())}}}else if(s.nodeType===8)if(s.data===zt)d.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(S,c+1))!==-1;)d.push({type:7,index:r}),c+=S.length-1}r++}}static createElement(t,e){let i=N.createElement("template");return i.innerHTML=t,i}};function M(o,t,e=o,i){if(t===I)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=j(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=M(o,s._$AS(o,t.values),s,i)),t}var pt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);k.currentNode=s;let r=k.nextNode(),n=0,a=0,d=i[0];for(;d!==void 0;){if(n===d.index){let l;d.type===2?l=new q(r,r.nextSibling,this,t):d.type===1?l=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(l=new vt(r,this,t)),this._$AV.push(l),d=i[++a]}n!==d?.index&&(r=k.nextNode(),n++)}return k.currentNode=N,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},q=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),j(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=W.createElement(Vt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new pt(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=Ut.get(t.strings);return e===void 0&&Ut.set(t.strings,e=new W(t)),e}k(t){$t(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new o(this.O(V()),this.O(V()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Pt(t).nextSibling;Pt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(r===void 0)t=M(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{let a=t,d,l;for(t=r[0],d=0;d<r.length-1;d++)l=M(this,a[i+d],e,d),l===I&&(l=this._$AH[d]),n||=!j(l)||l!==this._$AH[d],l===p?t=p:t!==p&&(t+=(l??"")+r[d+1]),this._$AH[d]=l}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},gt=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},yt=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},ft=class extends H{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??p)===I)return;let i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},vt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}};var ne=mt.litHtmlPolyfillSupport;ne?.(W,q),(mt.litHtmlVersions??=[]).push("3.3.2");var jt=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new q(t.insertBefore(V(),r),r,void 0,e??{})}return s._$AI(o),s};var _t=globalThis,w=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};w._$litElement$=!0,w.finalized=!0,_t.litElementHydrateSupport?.({LitElement:w});var oe=_t.litElementPolyfillSupport;oe?.({LitElement:w});(_t.litElementVersions??=[]).push("4.2.2");var wt=class extends w{static LAYOUT_BUILD_MARKER="v0.2.30";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(t){let e=this._hass;this._hass=t;let i=this.buildRelevantStateSignature(t),s=i!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=i,(e!==t||s)&&this.requestUpdate("hass",e)}setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return f`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return f`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let $=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return f`<ha-card><div class="content">${$}</div></ha-card>`}let e=this.hass.states[t];if(!e)return f`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let i=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),r=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),a=this.getEntityId("status_entity"),d=this.getEntityId("brightness_entity"),l=this.getEntityId("temperature_entity"),u=this.hass.states[i],g=(this.optimisticPowerState??u?.state)==="on",y=!!u&&!g,m=a?this.hass.states[a]:void 0,x=s?this.hass.states[s]:void 0,Y=r?this.hass.states[r]:void 0,nt=n?this.hass.states[n]:void 0,v=d?this.hass.states[d]:void 0,K=l?this.hass.states[l]:void 0,E=v?Number.parseFloat(v.state):Number.NaN,G=v?this.readNumberAttribute(v,"min",0):0,J=v?this.readNumberAttribute(v,"max",100):100,Q=v?this.readNumberAttribute(v,"step",1):1,O=v&&Number.isFinite(E),T=this.readStringListAttribute(x,"options"),Z=this.getLayerSourceRows(),D=this.readLayoutPayload(Y,nt),ot=m?`${e.state} (${m.state})`:e.state;return f`
      <ha-card>
        <div class="header-row">
          <div class="header">${this.config.title??"Novastar H Series"}</div>
          <div class="header-controls">
            ${v&&O?f`
                  <div class="header-brightness" title="Brightness">
                    <input
                      class="brightness-slider header-brightness-slider"
                      type="range"
                      min=${G}
                      max=${J}
                      step=${Q}
                      .value=${String(E)}
                      .disabled=${y}
                      ?disabled=${y}
                      @change=${this.handleBrightnessChanged}
                    />
                  </div>
                `:p}
            ${u?f`
                  <label class="power-toggle" title="Toggle screen output">
                    <input
                      type="checkbox"
                      .checked=${g}
                      @change=${this.handlePowerToggle}
                    />
                    <span class="power-slider"></span>
                  </label>
                `:p}
          </div>
        </div>
        <div class="content">
          <div class="row">
            <span class="label">Status</span>
            <span class="value">${ot}</span>
          </div>
          ${K?f`<div class="row"><span class="label">Temperature</span><span class="value">${K.state}</span></div>`:p}
          ${x?T.length>0?(()=>{let $=this.resolveSelectedOption(x,T);return f`
                    <div class="row input-row">
                      <span class="label">Preset</span>
                      <select
                        class="input-select"
                        .disabled=${y}
                        ?disabled=${y}
                        @change=${this.handlePresetSelectionChanged}
                      >
                        ${T.map(A=>f`
                          <option
                            .value=${A}
                            ?selected=${this.optionEquals(A,$)}
                          >${A}</option>
                        `)}
                      </select>
                    </div>
                  `})():f`<div class="row"><span class="label">Preset</span><span class="value">${x.state}</span></div>`:p}
          ${Z.map($=>{let A=this.resolveSelectedOption($.entity,$.options);return f`
              <div class="row input-row">
                <span class="label">Layer ${$.layerNumber} Source</span>
                <select
                  class="input-select"
                  data-entity-id=${$.entityId}
                  .disabled=${y}
                  ?disabled=${y}
                  @change=${this.handleLayerSourceChanged}
                >
                  ${$.options.map(h=>f`
                    <option
                      .value=${h}
                      ?selected=${this.optionEquals(h,A)}
                    >${h}</option>
                  `)}
                </select>
              </div>
            `})}
          ${D?this.renderLayoutPreview(D):p}
          ${v?O?p:f`<div class="row"><span class="label">Brightness</span><span class="value">${v.state}</span></div>`:p}
        </div>
      </ha-card>
    `}static styles=it`
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
  `;renderLayoutPreview(t){let e=t.screenWidth,i=t.screenHeight,s=this.fitLayersToViewport(t.layers,e,i).sort((c,g)=>c.z-g.z),r="#000000",n="#4a4a4a",a="#d9d9d9",d="#808080",l="#ffffff",u=this.getLayerSourceLabelMap();return f`
      <div class="layout-preview">
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
          ${s.length===0?X`<text class="layout-empty" x=${e/2} y=${i/2}>No layers detected</text>`:p}
          ${s.map((c,g)=>{let y=this.resolveLayerSourceLabel(u,c.id,g)??c.source?.trim()??c.id,m=c.x+c.width/2,x=c.y+c.height/2,Y=Math.min(c.width,c.height),nt=Math.max(54,e*.017),v=Math.max(Y*.14,nt),K=Math.max(24,c.height*.38),E=Math.min(v,K),G=Math.max(18,E*.35),J=Math.max(32,c.width*.9),Q=Math.max(1,Math.floor((J-G*2)/Math.max(1,E*.62))),O=y.length<=Q?y:`${y.slice(0,Math.max(1,Q-1))}\u2026`,T=O.length*E*.62,Z=Math.min(J,T+G*2),D=Math.max(28,E*1.35),ot=m-Z/2,$=x-D/2,A=Math.max(6,D*.25),h=Math.max(51,Math.min(138,Y*.27)),At=Math.max(10,h*.22),C=Math.max(c.x+4,c.x+c.width-h-At),b=Math.min(c.y+At,c.y+c.height-h-4),at=C+h*.22,Wt=b+h*.34,dt=h*.18,qt=h*.32,Xt=[`${at+dt},${b+h*.26}`,`${C+h*.68},${b+h*.16}`,`${C+h*.68},${b+h*.84}`,`${at+dt},${b+h*.74}`].join(" "),P=C+h*.7,R=b+h*.5,St=c.audioOpen===!0,xt=c.audioOpen===!1,U=St?"#66bb6a":xt?"#d3d3d3":"#bdbdbd";return X`
              <g>
                <rect
                  class="layout-layer"
                  x=${c.x}
                  y=${c.y}
                  width=${c.width}
                  height=${c.height}
                  fill=${a}
                  stroke=${d}
                  stroke-width="3"
                  style=${`fill:${a};stroke:${d};stroke-width:3;`}
                ></rect>
                <g>
                  <rect
                    x=${C}
                    y=${b}
                    width=${h}
                    height=${h}
                    rx=${h*.22}
                    ry=${h*.22}
                    fill="#111111"
                    fill-opacity="0.8"
                  ></rect>
                  <rect
                    x=${at}
                    y=${Wt}
                    width=${dt}
                    height=${qt}
                    fill=${U}
                  ></rect>
                  <polygon points=${Xt} fill=${U}></polygon>
                  ${St?X`
                      <path
                        d=${`M ${P} ${R-h*.13} Q ${P+h*.12} ${R} ${P} ${R+h*.13}`}
                        fill="none"
                        stroke=${U}
                        stroke-width=${h*.06}
                        stroke-linecap="round"
                      ></path>
                      <path
                        d=${`M ${P+h*.1} ${R-h*.22} Q ${P+h*.28} ${R} ${P+h*.1} ${R+h*.22}`}
                        fill="none"
                        stroke=${U}
                        stroke-width=${h*.06}
                        stroke-linecap="round"
                      ></path>
                    `:p}
                  ${xt?X`
                      <line
                        x1=${C+h*.7}
                        y1=${b+h*.24}
                        x2=${C+h*.92}
                        y2=${b+h*.76}
                        stroke=${U}
                        stroke-width=${h*.08}
                        stroke-linecap="round"
                      ></line>
                    `:p}
                </g>
                <rect
                  x=${ot}
                  y=${$}
                  width=${Z}
                  height=${D}
                  rx=${A}
                  ry=${A}
                  fill="#111111"
                  fill-opacity="0.82"
                ></rect>
                <text
                  x=${m}
                  y=${x}
                  font-weight="700"
                  style=${`fill:${l};font-size:${E}px;font-family:inherit;`}
                  text-anchor="middle"
                  dominant-baseline="middle"
                >${O}</text>
              </g>
            `})}
        </svg>
      </div>
    `}getLayerSourceLabelMap(){let t=new Map;for(let e of this.getLayerSourceRows()){let i=this.resolveSelectedOption(e.entity,e.options).trim();i&&t.set(e.layerNumber,i)}return t}resolveLayerSourceLabel(t,e,i){let s=[],r=Number.parseInt(e,10);Number.isFinite(r)&&(s.push(r),s.push(r+1)),s.push(i),s.push(i+1);for(let n of s){let a=t.get(n)?.trim();if(a)return a}}fitLayersToViewport(t,e,i){return t.length===0?[]:t.map(s=>{if(!Number.isFinite(s.x)||!Number.isFinite(s.y)||!Number.isFinite(s.width)||!Number.isFinite(s.height)||s.width<=0||s.height<=0)return;let r=Math.max(0,s.x),n=Math.max(0,s.y),a=Math.min(e,s.x+s.width),d=Math.min(i,s.y+s.height),l=a-r,u=d-n;if(!(l<=0||u<=0))return{...s,x:r,y:n,width:l,height:u}}).filter(s=>!!s)}readNumberAttribute(t,e,i){let s=t.attributes[e];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let r=Number.parseFloat(s);if(Number.isFinite(r))return r}return i}readStringListAttribute(t,e){if(!t)return[];let i=t.attributes[e];return Array.isArray(i)?i.filter(s=>typeof s=="string"):[]}resolveSelectedOption(t,e){let i=t.state?.trim(),s=[i,this.readStringAttribute(t,"current_option"),this.readStringAttribute(t,"selected_option"),this.readStringAttribute(t,"source"),this.readStringAttribute(t,"current_source")].filter(r=>!!r);for(let r of s){let n=e.find(l=>l===r);if(n)return n;let a=r.toLowerCase(),d=e.find(l=>l.toLowerCase()===a);if(d)return d}return i??""}readStringAttribute(t,e){let i=t.attributes[e];return typeof i!="string"?void 0:i.trim()||void 0}optionEquals(t,e){if(t===e)return!0;let i=t.trim().toLowerCase(),s=e.trim().toLowerCase();return i===s}readLayoutPayload(t,e){if(!t||!e){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!t,hasLayersEntity:!!e});return}let i=this.readFirstScreen(t);if(!i){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let s=this.readFiniteNumber(i.width??i.w),r=this.readFiniteNumber(i.height??i.h);if(!s||!r||s<=0||r<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:s,screenHeight:r,firstScreen:i});return}let n=this.readLayersCollection(e),a=n.map((d,l)=>this.normalizeLayoutLayer(d,l)).filter(d=>!!d);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:a.length,screenWidth:s,screenHeight:r}),{screenWidth:s,screenHeight:r,layers:a}}readFirstScreen(t){let e=[t.state,t.attributes.screens,t.attributes.screen_list,t.attributes.screen,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let i of e){let s=this.parseStructuredValue(i);if(Array.isArray(s)&&s.length>0){let a=this.asRecord(s[0]);if(a)return a}let r=this.asRecord(s);if(!r)continue;let n=r.screens;if(Array.isArray(n)&&n.length>0){let a=this.asRecord(n[0]);if(a)return a}if(this.readFiniteNumber(r.width??r.w)&&this.readFiniteNumber(r.height??r.h))return r}if(this.readFiniteNumber(t.attributes.width??t.attributes.w)&&this.readFiniteNumber(t.attributes.height??t.attributes.h))return t.attributes}readLayersCollection(t){let e=[t.state,t.attributes.layers,t.attributes.layer_list,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let i of e){let s=this.parseStructuredValue(i);if(Array.isArray(s))return s;let r=this.asRecord(s);if(!r)continue;if(Array.isArray(r.layers))return r.layers;if(Array.isArray(r.layer_list))return r.layer_list;let n=this.asRecord(r.result);if(n&&Array.isArray(n.layers))return n.layers;let a=this.asRecord(r.data);if(a&&Array.isArray(a.layers))return a.layers;let d=Object.values(r).map(l=>this.asRecord(l)).filter(l=>!!l).filter(l=>!!this.asRecord(l.general)&&!!this.asRecord(l.window));if(d.length>0)return d;if(this.asRecord(r.general)&&this.asRecord(r.window))return[r]}return[]}parseStructuredValue(t){if(typeof t!="string")return t;try{return JSON.parse(t)}catch{return t}}asRecord(t){if(!(!t||typeof t!="object"||Array.isArray(t)))return t}readFiniteNumber(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){let e=Number.parseFloat(t);if(Number.isFinite(e))return e}}normalizeLayoutLayer(t,e){let i=this.asRecord(t);if(!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:e,value:t});return}let s=this.asRecord(i.general),r=this.asRecord(i.window),n=this.asRecord(i.audioStatus);if(!s||!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:e,hasGeneral:!!s,hasWindow:!!r,layer:i});return}let a=this.readFiniteNumber(r.width),d=this.readFiniteNumber(r.height),l=this.readFiniteNumber(r.x)??0,u=this.readFiniteNumber(r.y)??0;if(!a||!d||a<=0||d<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:e,width:a,height:d,windowData:r});return}let c=s.layerId;if(typeof c!="string"&&typeof c!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:e,layerId:c,general:s});return}let g=this.readFiniteNumber(s.zorder);if(g===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:e,zorder:s.zorder,general:s});return}let y=typeof s.name=="string"?s.name:void 0,m=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:e,layerId:c,x:l,y:u,width:a,height:d,zValue:g,source:y,audioOpen:m}),{id:String(c),x:l,y:u,width:a,height:d,z:g,source:y,audioOpen:m}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(t,e){if(this.isLayoutDebugEnabled()){if(e===void 0){console.debug("[NovastarCard][layout]",t);return}console.debug("[NovastarCard][layout]",t,e)}}buildRelevantStateSignature(t){if(!t)return"";let e=new Set,i=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of i){let a=this.config?.[n];a&&e.add(a);let d=this.resolvedEntities[n];d&&e.add(d)}e.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(t.states))s.test(n)&&e.add(n);return Array.from(e).sort().map(n=>{let a=t.states[n];if(!a)return`${n}:missing`;let d=this.readStringListAttribute(a,"options").join("|"),l=this.readStringAttribute(a,"current_option")??"",u=this.readStringAttribute(a,"selected_option")??"",c=this.readStringAttribute(a,"source")??"",g=this.readStringAttribute(a,"current_source")??"";return`${n}:${a.state}:${d}:${l}:${u}:${c}:${g}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(t){await new Promise(e=>{window.setTimeout(()=>e(),t)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(t=>({entityId:t,entity:this.hass?.states[t]})).filter(t=>!!t.entity).map(t=>{let e=this.readStringListAttribute(t.entity,"options");return{...t,options:e,layerNumber:this.getLayerNumber(t.entityId)}}).filter(t=>t.options.length>0&&t.entity.state!=="unavailable"&&t.entity.state!=="unknown").sort((t,e)=>t.layerNumber-e.layerNumber):[]}getLayerSourceEntityIds(){let t=/^select\..*_layer_\d+_source$/,e=this.resolvedLayerSourceEntities,i=this.hass?Object.keys(this.hass.states).filter(s=>t.test(s)):[];return e.length===0?i:i.length===0?e:Array.from(new Set([...e,...i]))}getLayerNumber(t){let e=t.match(/_layer_(\d+)_source$/);if(!e)return Number.MAX_SAFE_INTEGER;let i=Number.parseInt(e[1],10);return Number.isFinite(i)?i:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",i=this.hass.states[e];if(i&&i.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let r=t.target,n=Number.parseFloat(r.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output";if(!this.hass.states[e])return;let s=t.target.checked;this.optimisticPowerState=s?"on":"off",this.requestUpdate();let r=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",r,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetSelectionChanged(t){if(!this.hass)return;let e=this.getEntityId("preset_entity");if(!e)return;let s=t.target.value?.trim();s&&(await this.hass.callService?.("select","select_option",{entity_id:e,option:s}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(t){if(!this.hass)return;let e=t.target,i=e.dataset.entityId,s=e.value?.trim();!i||!s||await this.hass.callService?.("select","select_option",{entity_id:i,option:s})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e){this.optimisticPowerState=void 0;return}e.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let i=this.resolvedEntities[t];if(i&&i.trim())return i}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let i=e.filter(a=>{if(!a||typeof a!="object")return!1;let d=a;return d.device_id===t&&!d.disabled_by&&!d.hidden_by&&typeof d.entity_id=="string"}).map(a=>a.entity_id),s=/^select\..*_layer_\d+_source$/,r=i.filter(a=>s.test(a)).sort((a,d)=>this.getLayerNumber(a)-this.getLayerNumber(d)),n={power_entity:this.pickEntity(i,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(i,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(i,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(i,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(i,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(i,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(i,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(i,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(i,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(i,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=r,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,i){for(let s of e){let r=t.find(n=>s.test(n));if(r)return r}for(let s of i){let r=`${s}.`,n=t.find(a=>a.startsWith(r));if(n)return n}}},Et=class extends w{hass;config={type:"custom:novastar-h-series-card"};showOverrides=!1;localDeviceId;autoDetectedDeviceId;deviceNameById={};loadingDeviceNames=!1;attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1},showOverrides:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e;let i=e.device_id?.trim();i&&(this.localDeviceId=i,this.autoDetectedDeviceId=i),this.showOverrides=!!(e.power_entity||e.preset_entity||e.screens_entity||e.layers_entity||e.controller_entity||e.status_entity||e.brightness_entity||e.temperature_entity),this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensureDeviceNames()}render(){if(!this.hass)return p;let t=!!customElements.get("ha-device-picker"),e=this.config.device_id?.trim()||this.localDeviceId||this.autoDetectedDeviceId||"",i=this.getSelectedDeviceLabel(e);return f`
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
    `}handleOverridesToggle(t){let e=t.target;this.showOverrides=e.open}handleInputChanged(t){let e=t.target,i=e.configValue;if(!i)return;let s=e.value?.trim()??"";this.updateConfigValue(i,s)}handleEntityChanged(t){let i=t.target.configValue;if(!i||!t.detail||t.detail.value===void 0)return;let s=t.detail.value?.trim()??"";this.updateConfigValue(i,s)}updateConfigValue(t,e){if(t==="device_id"&&(this.localDeviceId=e||void 0,this.autoDetectedDeviceId=e||this.autoDetectedDeviceId),(this.config[t]??"")===e)return;let s={...this.config};e?s[t]=e:delete s[t],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(i=>{if(!i||typeof i!="object")return!1;let s=i;return s.platform==="novastar_h"&&typeof s.device_id=="string"&&!s.disabled_by&&!s.hidden_by}).map(i=>i.device_id)[0];if(!e)return;this.autoDetectedDeviceId=e,this.localDeviceId=e,this.requestUpdate(),this.updateConfigValue("device_id",e)}catch{}}}async ensureDeviceNames(){if(!this.hass?.callWS||this.loadingDeviceNames)return;let t=this.config.device_id??this.localDeviceId;if(!(!t||this.deviceNameById[t])){this.loadingDeviceNames=!0;try{let e=await this.hass.callWS({type:"config/device_registry/list"});if(!Array.isArray(e))return;let i={...this.deviceNameById};for(let s of e){if(!s||typeof s!="object")continue;let r=s,n=r.id;if(typeof n!="string")continue;let a=r.name_by_user??r.name??r.model;typeof a=="string"&&a.trim()&&(i[n]=a.trim())}this.deviceNameById=i,this.requestUpdate()}catch{}finally{this.loadingDeviceNames=!1}}}getSelectedDeviceLabel(t){if(!t)return"Auto-detecting...";let e=this.deviceNameById[t];return e?`${e} (${t})`:t}static styles=it`
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
  `};try{customElements.define("novastar-h-series-card",wt)}catch{}try{customElements.define("novastar-h-series-card-editor",Et)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{wt as NovastarHSeriesCard};
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
