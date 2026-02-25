var O=globalThis,M=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),Y=new WeakMap,S=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(M&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}},tt=n=>new S(typeof n=="string"?n:n+"",void 0,L),R=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new S(e,n,L)},et=(n,t)=>{if(M)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},D=M?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return tt(e)})(n):n;var{is:_t,defineProperty:mt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:vt,getOwnPropertySymbols:At,getPrototypeOf:Et}=Object,k=globalThis,st=k.trustedTypes,bt=st?st.emptyScript:"",Ct=k.reactiveElementPolyfillSupport,w=(n,t)=>n,z={toAttribute(n,t){switch(t){case Boolean:n=n?bt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},nt=(n,t)=>!_t(n,t),it={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:nt};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&mt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=yt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let c=i?.call(this);r?.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let e=this.properties,s=[...vt(e),...At(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(D(i))}else t!==void 0&&e.push(D(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return et(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:z).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:z;this._$Em=i;let c=o.fromAttribute(e,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let o=this.constructor;if(i===!1&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??nt)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:o}=r,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[w("elementProperties")]=new Map,f[w("finalized")]=new Map,Ct?.({ReactiveElement:f}),(k.reactiveElementVersions??=[]).push("2.1.2");var F=globalThis,rt=n=>n,V=F.trustedTypes,ot=V?V.createPolicy("lit-html",{createHTML:n=>n}):void 0,pt="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+m,St=`<${ut}>`,A=document,P=()=>A.createComment(""),N=n=>n===null||typeof n!="object"&&typeof n!="function",J=Array.isArray,wt=n=>J(n)||typeof n?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ht=/>/g,y=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ct=/"/g,ft=/^(?:script|style|textarea|title)$/i,Z=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),g=Z(1),Mt=Z(2),Rt=Z(3),E=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),dt=new WeakMap,v=A.createTreeWalker(A,129);function gt(n,t){if(!J(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}var xt=(n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",o=x;for(let c=0;c<e;c++){let a=n[c],d,p,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===x?p[1]==="!--"?o=at:p[1]!==void 0?o=ht:p[2]!==void 0?(ft.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=i??x,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?y:p[3]==='"'?ct:lt):o===ct||o===lt?o=y:o===at||o===ht?o=x:(o=y,i=void 0);let _=o===y&&n[c+1].startsWith("/>")?" ":"";r+=o===x?a+St:h>=0?(s.push(d),a.slice(0,h)+pt+a.slice(h)+m+_):a+m+(h===-2?c:_)}return[gt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},H=class n{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,c=t.length-1,a=this.parts,[d,p]=xt(t,e);if(this.el=n.createElement(d,s),v.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(pt)){let u=p[o++],_=i.getAttribute(h).split(m),T=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:T[2],strings:_,ctor:T[1]==="."?I:T[1]==="?"?q:T[1]==="@"?W:C}),i.removeAttribute(h)}else h.startsWith(m)&&(a.push({type:6,index:r}),i.removeAttribute(h));if(ft.test(i.tagName)){let h=i.textContent.split(m),u=h.length-1;if(u>0){i.textContent=V?V.emptyScript:"";for(let _=0;_<u;_++)i.append(h[_],P()),v.nextNode(),a.push({type:2,index:++r});i.append(h[u],P())}}}else if(i.nodeType===8)if(i.data===ut)a.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(m,h+1))!==-1;)a.push({type:7,index:r}),h+=m.length-1}r++}}static createElement(t,e){let s=A.createElement("template");return s.innerHTML=t,s}};function b(n,t,e=n,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=N(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=b(n,i._$AS(n,t.values),i,s)),t}var B=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??A).importNode(e,!0);v.currentNode=i;let r=v.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new U(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new K(r,this,t)),this._$AV.push(d),a=s[++c]}o!==a?.index&&(r=v.nextNode(),o++)}return v.currentNode=A,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},U=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),N(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(gt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new B(i,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new H(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new n(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=rt(t).nextSibling;rt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=b(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let c=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=b(this,c[s+a],e,a),d===E&&(d=this._$AH[a]),o||=!N(d)||d!==this._$AH[a],d===l?t=l:t!==l&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!i&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},I=class extends C{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}},q=class extends C{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}},W=class extends C{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??l)===E)return;let s=this._$AH,i=t===l&&s!==l||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==l&&(s===l||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},K=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}};var Pt=F.litHtmlPolyfillSupport;Pt?.(H,U),(F.litHtmlVersions??=[]).push("3.3.2");var $t=(n,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new U(t.insertBefore(P(),r),r,void 0,e??{})}return i._$AI(n),i};var G=globalThis,$=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};$._$litElement$=!0,$.finalized=!0,G.litElementHydrateSupport?.({LitElement:$});var Nt=G.litElementPolyfillSupport;Nt?.({LitElement:$});(G.litElementVersions??=[]).push("4.2.2");var Q=class extends ${hass;config;static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(t){if(!t?.controller_entity)throw new Error("A controller_entity is required for novastar-h-series-card.");this.config=t}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series",controller_entity:""}}render(){if(!this.config)return g`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return g`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.hass.states[this.config.controller_entity];if(!t)return g`<ha-card><div class="content">Entity not found: ${this.config.controller_entity}</div></ha-card>`;let e=this.config.status_entity?this.hass.states[this.config.status_entity]:void 0,s=this.config.brightness_entity?this.hass.states[this.config.brightness_entity]:void 0,i=this.config.temperature_entity?this.hass.states[this.config.temperature_entity]:void 0;return g`
      <ha-card>
        <div class="header">${this.config.title??"Novastar H Series"}</div>
        <div class="content">
          <div class="row">
            <span class="label">Controller</span>
            <span class="value">${t.state}</span>
          </div>
          ${e?g`<div class="row"><span class="label">Status</span><span class="value">${e.state}</span></div>`:l}
          ${s?g`<div class="row"><span class="label">Brightness</span><span class="value">${s.state}</span></div>`:l}
          ${i?g`<div class="row"><span class="label">Temperature</span><span class="value">${i.state}</span></div>`:l}
        </div>
      </ha-card>
    `}static styles=R`
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
  `},X=class extends ${hass;config={type:"custom:novastar-h-series-card",controller_entity:""};static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",e.controller_entity||="",this.config=e}render(){return this.hass?g`
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
    `:l}handleInputChanged(t){let e=t.target,s=e.configValue;if(!s)return;let i=e.value?.trim()??"";this.updateConfigValue(s,i)}handleEntityChanged(t){let s=t.target.configValue;if(!s)return;let i=t.detail.value?.trim()??"";this.updateConfigValue(s,i)}updateConfigValue(t,e){let s={...this.config};e?s[t]=e:delete s[t],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}static styles=R`
    .editor {
      display: grid;
      gap: 12px;
      padding: 12px 0;
    }
  `};customElements.get("novastar-h-series-card")||customElements.define("novastar-h-series-card",Q);customElements.get("novastar-h-series-card-editor")||customElements.define("novastar-h-series-card-editor",X);window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller."});export{Q as NovastarHSeriesCard};
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
