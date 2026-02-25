var k=globalThis,H=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),Y=new WeakMap,w=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(H&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}},tt=r=>new w(typeof r=="string"?r:r+"",void 0,T),M=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new w(e,r,T)},et=(r,t)=>{if(H)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=k.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},V=H?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return tt(e)})(r):r;var{is:mt,defineProperty:_t,getOwnPropertyDescriptor:$t,getOwnPropertyNames:bt,getOwnPropertySymbols:At,getPrototypeOf:Et}=Object,O=globalThis,st=O.trustedTypes,Ct=st?st.emptyScript:"",St=O.reactiveElementPolyfillSupport,x=(r,t)=>r,B={toAttribute(r,t){switch(t){case Boolean:r=r?Ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>!mt(r,t),it={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:nt};Symbol.metadata??=Symbol("metadata"),O.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=$t(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let a=i?.call(this);n?.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties,s=[...bt(e),...At(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(V(i))}else t!==void 0&&e.push(V(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return et(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:B;this._$Em=i;let a=o.fromAttribute(e,n.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){let o=this.constructor;if(i===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??nt)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,n,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[x("elementProperties")]=new Map,v[x("finalized")]=new Map,St?.({ReactiveElement:v}),(O.reactiveElementVersions??=[]).push("2.1.2");var K=globalThis,rt=r=>r,U=K.trustedTypes,ot=U?U.createPolicy("lit-html",{createHTML:r=>r}):void 0,ut="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+m,wt=`<${pt}>`,b=document,D=()=>b.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",J=Array.isArray,xt=r=>J(r)||typeof r?.[Symbol.iterator]=="function",L=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ht=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,lt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Z=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=Z(1),Mt=Z(2),Ot=Z(3),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),dt=new WeakMap,$=b.createTreeWalker(b,129);function ft(r,t){if(!J(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}var Nt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=N;for(let a=0;a<e;a++){let h=r[a],l,u,c=-1,g=0;for(;g<h.length&&(o.lastIndex=g,u=o.exec(h),u!==null);)g=o.lastIndex,o===N?u[1]==="!--"?o=at:u[1]!==void 0?o=ht:u[2]!==void 0?(gt.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=_):u[3]!==void 0&&(o=_):o===_?u[0]===">"?(o=i??N,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?_:u[3]==='"'?lt:ct):o===lt||o===ct?o=_:o===at||o===ht?o=N:(o=_,i=void 0);let f=o===_&&r[a+1].startsWith("/>")?" ":"";n+=o===N?h+wt:c>=0?(s.push(l),h.slice(0,c)+ut+h.slice(c)+m+f):h+m+(c===-2?a:f)}return[ft(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},I=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,a=t.length-1,h=this.parts,[l,u]=Nt(t,e);if(this.el=r.createElement(l,s),$.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=$.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(ut)){let g=u[o++],f=i.getAttribute(c).split(m),E=/([.?@])?(.*)/.exec(g);h.push({type:1,index:n,name:E[2],strings:f,ctor:E[1]==="."?z:E[1]==="?"?W:E[1]==="@"?F:S}),i.removeAttribute(c)}else c.startsWith(m)&&(h.push({type:6,index:n}),i.removeAttribute(c));if(gt.test(i.tagName)){let c=i.textContent.split(m),g=c.length-1;if(g>0){i.textContent=U?U.emptyScript:"";for(let f=0;f<g;f++)i.append(c[f],D()),$.nextNode(),h.push({type:2,index:++n});i.append(c[g],D())}}}else if(i.nodeType===8)if(i.data===pt)h.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(m,c+1))!==-1;)h.push({type:7,index:n}),c+=m.length-1}n++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function C(r,t,e=r,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=P(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=C(r,i._$AS(r,t.values),i,s)),t}var j=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??b).importNode(e,!0);$.currentNode=i;let n=$.nextNode(),o=0,a=0,h=s[0];for(;h!==void 0;){if(o===h.index){let l;h.type===2?l=new R(n,n.nextSibling,this,t):h.type===1?l=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(l=new q(n,this,t)),this._$AV.push(l),h=s[++a]}o!==h?.index&&(n=$.nextNode(),o++)}return $.currentNode=b,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},R=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(ft(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new j(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new I(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(D()),this.O(D()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=rt(t).nextSibling;rt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=C(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{let a=t,h,l;for(t=n[0],h=0;h<n.length-1;h++)l=C(this,a[s+h],e,h),l===A&&(l=this._$AH[h]),o||=!P(l)||l!==this._$AH[h],l===d?t=d:t!==d&&(t+=(l??"")+n[h+1]),this._$AH[h]=l}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},z=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},W=class extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},F=class extends S{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??d)===A)return;let s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},q=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var Dt=K.litHtmlPolyfillSupport;Dt?.(I,R),(K.litHtmlVersions??=[]).push("3.3.2");var vt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new R(t.insertBefore(D(),n),n,void 0,e??{})}return i._$AI(r),i};var G=globalThis,y=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};y._$litElement$=!0,y.finalized=!0,G.litElementHydrateSupport?.({LitElement:y});var Pt=G.litElementPolyfillSupport;Pt?.({LitElement:y});(G.litElementVersions??=[]).push("4.2.2");var Q=class extends y{hass;config;resolvedEntities={};resolvedDeviceId;resolvingDeviceId;resolvedForHass;static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",title:"Novastar H Series"}}updated(){this.ensureResolvedEntities()}render(){if(!this.config)return p`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return p`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let yt=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return p`<ha-card><div class="content">${yt}</div></ha-card>`}let e=this.hass.states[t];if(!e)return p`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let s=this.getEntityId("status_entity"),i=this.getEntityId("brightness_entity"),n=this.getEntityId("temperature_entity"),o=s?this.hass.states[s]:void 0,a=i?this.hass.states[i]:void 0,h=n?this.hass.states[n]:void 0,l=a?Number.parseFloat(a.state):Number.NaN,u=a?this.readNumberAttribute(a,"min",0):0,c=a?this.readNumberAttribute(a,"max",100):100,g=a?this.readNumberAttribute(a,"step",1):1,f=a&&Number.isFinite(l),E=o?`${e.state} (${o.state})`:e.state;return p`
      <ha-card>
        <div class="header">${this.config.title??"Novastar H Series"}</div>
        <div class="content">
          <div class="row">
            <span class="label">Controller</span>
            <span class="value">${E}</span>
          </div>
          ${a?f?p`
                  <div class="brightness-row">
                    <div class="brightness-header">
                      <span class="label">Brightness</span>
                      <span class="value">${Math.round(l)}%</span>
                    </div>
                    <input
                      class="brightness-slider"
                      type="range"
                      min=${u}
                      max=${c}
                      step=${g}
                      .value=${String(l)}
                      @change=${this.handleBrightnessChanged}
                    />
                  </div>
                `:p`<div class="row"><span class="label">Brightness</span><span class="value">${a.state}</span></div>`:d}
          ${h?p`<div class="row"><span class="label">Temperature</span><span class="value">${h.state}</span></div>`:d}
        </div>
      </ha-card>
    `}static styles=M`
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

    .brightness-row {
      margin-bottom: 8px;
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
  `;readNumberAttribute(t,e,s){let i=t.attributes[e];if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"){let n=Number.parseFloat(i);if(Number.isFinite(n))return n}return s}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("brightness_entity");if(!e)return;let s=t.target,i=Number.parseFloat(s.value);Number.isFinite(i)&&await this.hass.callService?.("number","set_value",{entity_id:e,value:i})}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let s=this.resolvedEntities[t];if(s&&s.trim())return s}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let s=e.filter(n=>{if(!n||typeof n!="object")return!1;let o=n;return o.device_id===t&&!o.disabled_by&&!o.hidden_by&&typeof o.entity_id=="string"}).map(n=>n.entity_id),i={controller_entity:this.pickEntity(s,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(s,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(s,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(s,[/_temperature_status$/,/_temp_status$/],["sensor"])};i.controller_entity||=this.pickEntity(s,[/^media_player\./],["media_player"]),i.controller_entity||=this.pickEntity(s,[/_status$/],["sensor"]),this.resolvedEntities=i,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,s){for(let i of e){let n=t.find(o=>i.test(o));if(n)return n}for(let i of s){let n=`${i}.`,o=t.find(a=>a.startsWith(n));if(o)return o}}},X=class extends y{hass;config={type:"custom:novastar-h-series-card"};showOverrides=!1;localDeviceId;deviceNameById={};loadingDeviceNames=!1;attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1},showOverrides:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e,this.localDeviceId=e.device_id?.trim()||this.localDeviceId,this.showOverrides=!!(e.controller_entity||e.status_entity||e.brightness_entity||e.temperature_entity),this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensureDeviceNames()}render(){if(!this.hass)return d;let t=!!customElements.get("ha-device-picker"),e=this.config.device_id?.trim()||this.localDeviceId||"",s=this.getSelectedDeviceLabel(e);return p`
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
    `}handleOverridesToggle(t){let e=t.target;this.showOverrides=e.open}handleInputChanged(t){let e=t.target,s=e.configValue;if(!s)return;let i=e.value?.trim()??"";this.updateConfigValue(s,i)}handleEntityChanged(t){let s=t.target.configValue;if(!s||!t.detail||t.detail.value===void 0)return;let i=t.detail.value?.trim()??"";this.updateConfigValue(s,i)}updateConfigValue(t,e){if(t==="device_id"&&(this.localDeviceId=e||void 0),(this.config[t]??"")===e)return;let i={...this.config};e?i[t]=e:delete i[t],i.type||(i.type="custom:novastar-h-series-card"),i.controller_entity||(i.controller_entity=""),this.config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(s=>{if(!s||typeof s!="object")return!1;let i=s;return i.platform==="novastar_h"&&typeof i.device_id=="string"&&!i.disabled_by&&!i.hidden_by}).map(s=>s.device_id)[0];if(!e)return;this.localDeviceId=e,this.updateConfigValue("device_id",e)}catch{}}}async ensureDeviceNames(){if(!this.hass?.callWS||this.loadingDeviceNames)return;let t=this.config.device_id??this.localDeviceId;if(!(!t||this.deviceNameById[t])){this.loadingDeviceNames=!0;try{let e=await this.hass.callWS({type:"config/device_registry/list"});if(!Array.isArray(e))return;let s={...this.deviceNameById};for(let i of e){if(!i||typeof i!="object")continue;let n=i,o=n.id;if(typeof o!="string")continue;let a=n.name_by_user??n.name??n.model;typeof a=="string"&&a.trim()&&(s[o]=a.trim())}this.deviceNameById=s,this.requestUpdate()}catch{}finally{this.loadingDeviceNames=!1}}}getSelectedDeviceLabel(t){if(!t)return"";let e=this.deviceNameById[t];return e?`${e} (${t})`:t}static styles=M`
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
  `};try{customElements.define("novastar-h-series-card",Q)}catch{}try{customElements.define("novastar-h-series-card-editor",X)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{Q as NovastarHSeriesCard};
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
