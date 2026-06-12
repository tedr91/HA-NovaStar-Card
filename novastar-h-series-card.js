var de=globalThis,le=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),Re=new WeakMap,X=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(le&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Re.set(t,e))}return e}toString(){return this.cssText}},He=a=>new X(typeof a=="string"?a:a+"",void 0,me),he=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[r+1],a[0]);return new X(t,a,me)},Oe=(a,e)=>{if(le)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=de.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,a.appendChild(i)}},be=le?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return He(t)})(a):a;var{is:it,defineProperty:st,getOwnPropertyDescriptor:rt,getOwnPropertyNames:nt,getOwnPropertySymbols:at,getPrototypeOf:ot}=Object,ue=globalThis,ze=ue.trustedTypes,ct=ze?ze.emptyScript:"",dt=ue.reactiveElementPolyfillSupport,G=(a,e)=>a,$e={toAttribute(a,e){switch(e){case Boolean:a=a?ct:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Te=(a,e)=>!it(a,e),Be={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:Te};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&st(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:r}=rt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let o=s?.call(this);r?.call(this,n),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Be}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;let e=ot(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){let t=this.properties,i=[...nt(t),...at(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(be(s))}else e!==void 0&&t.push(be(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:$e).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:$e;this._$Em=s;let o=n.fromAttribute(t,r.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){let n=this.constructor;if(s===!1&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??Te)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,r,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[G("elementProperties")]=new Map,x[G("finalized")]=new Map,dt?.({ReactiveElement:x}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ce=globalThis,Ue=a=>a,pe=Ce.trustedTypes,Ve=pe?pe.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ke="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Xe="?"+C,lt=`<${Xe}>`,R=document,Q=()=>R.createComment(""),Z=a=>a===null||typeof a!="object"&&typeof a!="function",ke=Array.isArray,ht=a=>ke(a)||typeof a?.[Symbol.iterator]=="function",_e=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,je=/>/g,P=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,qe=/"/g,Ge=/^(?:script|style|textarea|title)$/i,Le=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),v=Le(1),ie=Le(2),bt=Le(3),H=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),Ye=new WeakMap,D=R.createTreeWalker(R,129);function Je(a,e){if(!ke(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ve!==void 0?Ve.createHTML(e):e}var ut=(a,e)=>{let t=a.length-1,i=[],s,r=e===2?"<svg>":e===3?"<math>":"",n=J;for(let o=0;o<t;o++){let c=a[o],d,p,u=-1,f=0;for(;f<c.length&&(n.lastIndex=f,p=n.exec(c),p!==null);)f=n.lastIndex,n===J?p[1]==="!--"?n=Fe:p[1]!==void 0?n=je:p[2]!==void 0?(Ge.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=P):p[3]!==void 0&&(n=P):n===P?p[0]===">"?(n=s??J,u=-1):p[1]===void 0?u=-2:(u=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?P:p[3]==='"'?qe:We):n===qe||n===We?n=P:n===Fe||n===je?n=J:(n=P,s=void 0);let y=n===P&&a[o+1].startsWith("/>")?" ":"";r+=n===J?c+lt:u>=0?(i.push(d),c.slice(0,u)+Ke+c.slice(u)+C+y):c+C+(u===-2?o:y)}return[Je(a,r+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},ee=class a{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0,o=e.length-1,c=this.parts,[d,p]=ut(e,t);if(this.el=a.createElement(d,i),D.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=D.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(Ke)){let f=p[n++],y=s.getAttribute(u).split(C),b=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:b[2],strings:y,ctor:b[1]==="."?we:b[1]==="?"?Se:b[1]==="@"?Ee:T}),s.removeAttribute(u)}else u.startsWith(C)&&(c.push({type:6,index:r}),s.removeAttribute(u));if(Ge.test(s.tagName)){let u=s.textContent.split(C),f=u.length-1;if(f>0){s.textContent=pe?pe.emptyScript:"";for(let y=0;y<f;y++)s.append(u[y],Q()),D.nextNode(),c.push({type:2,index:++r});s.append(u[f],Q())}}}else if(s.nodeType===8)if(s.data===Xe)c.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(C,u+1))!==-1;)c.push({type:7,index:r}),u+=C.length-1}r++}}static createElement(e,t){let i=R.createElement("template");return i.innerHTML=e,i}};function B(a,e,t=a,i){if(e===H)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,r=Z(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(a),s._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=B(a,s._$AS(a,e.values),s,i)),e}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??R).importNode(t,!0);D.currentNode=s;let r=D.nextNode(),n=0,o=0,c=i[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new te(r,r.nextSibling,this,e):c.type===1?d=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(d=new Ae(r,this,e)),this._$AV.push(d),c=i[++o]}n!==c?.index&&(r=D.nextNode(),n++)}return D.currentNode=R,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},te=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),Z(e)?e===l||e==null||e===""?(this._$AH!==l&&this._$AR(),this._$AH=l):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ht(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==l&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ee.createElement(Je(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new xe(s,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=Ye.get(e.strings);return t===void 0&&Ye.set(e.strings,t=new ee(e)),t}k(e){ke(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new a(this.O(Q()),this.O(Q()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Ue(e).nextSibling;Ue(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=l,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(e,t=this,i,s){let r=this.strings,n=!1;if(r===void 0)e=B(this,e,t,0),n=!Z(e)||e!==this._$AH&&e!==H,n&&(this._$AH=e);else{let o=e,c,d;for(e=r[0],c=0;c<r.length-1;c++)d=B(this,o[i+c],t,c),d===H&&(d=this._$AH[c]),n||=!Z(d)||d!==this._$AH[c],d===l?e=l:e!==l&&(e+=(d??"")+r[c+1]),this._$AH[c]=d}n&&!s&&this.j(e)}j(e){e===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},we=class extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===l?void 0:e}},Se=class extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==l)}},Ee=class extends T{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??l)===H)return;let i=this._$AH,s=e===l&&i!==l||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==l&&(i===l||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ae=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}};var pt=Ce.litHtmlPolyfillSupport;pt?.(ee,te),(Ce.litHtmlVersions??=[]).push("3.3.2");var Qe=(a,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let r=t?.renderBefore??null;i._$litPart$=s=new te(e.insertBefore(Q(),r),r,void 0,t??{})}return s._$AI(a),s};var Ne=globalThis,w=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};w._$litElement$=!0,w.finalized=!0,Ne.litElementHydrateSupport?.({LitElement:w});var vt=Ne.litElementPolyfillSupport;vt?.({LitElement:w});(Ne.litElementVersions??=[]).push("4.2.2");var Ie=class a extends w{static LAYOUT_BUILD_MARKER="v1.0.8-1-g985a349-dirty";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";activeLayerSourceChooser;static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(e){let t=this._hass;this._hass=e;let i=this.buildRelevantStateSignature(e),s=i!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=i,(t!==e||s)&&this.requestUpdate("hass",t)}setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",header:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return v`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return v`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let e=this.getEntityId("controller_entity");if(!e){let $=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return v`<ha-card><div class="content">${$}</div></ha-card>`}let t=this.hass.states[e];if(!t)return v`<ha-card><div class="content">Entity not found: ${e}</div></ha-card>`;let i=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),r=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),o=this.getEntityId("status_entity"),c=this.getEntityId("brightness_entity"),d=this.getEntityId("temperature_entity"),p=this.hass.states[i],f=(this.optimisticPowerState??p?.state)==="on",y=!!p&&!f,b=o?this.hass.states[o]:void 0,S=s?this.hass.states[s]:void 0,se=r?this.hass.states[r]:void 0,g=n?this.hass.states[n]:void 0,m=c?this.hass.states[c]:void 0,E=d?this.hass.states[d]:void 0,k=m?Number.parseFloat(m.state):Number.NaN,U=m?this.readNumberAttribute(m,"min",0):0,V=m?this.readNumberAttribute(m,"max",100):100,F=m?this.readNumberAttribute(m,"step",1):1,re=!!m&&Number.isFinite(k),j=m?this.readStringAttribute(m,"unit_of_measurement")??"":"",L=this.readStringListAttribute(S,"options"),A=S?this.resolveSelectedOption(S,L):"",W=this.readLayoutPayload(se,g),q=b?`${t.state} (${b.state})`:t.state,ne=E?this.readStringAttribute(E,"unit_of_measurement")??"":"",N=this.getDisplayMode(),ve=this.getThemeMode(),I=N==="compact",M=N==="detailed",ae=this.config.show_header_in_compact===!0,ge=!I||ae,Y=I&&!ae,h=this.config.header??"Novastar H Series",oe=["content",`content--${N}`,Y?"content--bare":""].filter(Boolean).join(" ");return v`
      <ha-card class="nova-card nova-card--${N} nova-card--theme-${ve} ${f?"is-on":"is-off"}">
        ${ge?v`
              <div class="header-row">
                <div class="header-lead">
                  ${!M&&p?v`<span
                        class="status-dot ${f?"status-dot--on":"status-dot--off"}"
                        title=${q}
                      ></span>`:l}
                  <div class="header">${h}</div>
                </div>
                ${p?this.renderPowerButton(f):l}
              </div>
            `:l}
        <div class=${oe}>
          ${I?l:M?v`
                  <div class="row">
                    <span class="label">Status</span>
                    <span class="value status-value status-value--${f?"on":"off"}">${q}</span>
                  </div>
                  ${E?v`
                        <div class="row">
                          <span class="label">Temperature</span>
                          <span class="value">${E.state}${ne}</span>
                        </div>
                      `:l}
                  ${m?v`
                        <div class="row input-row">
                          <span class="label">Brightness</span>
                          ${re?this.renderBrightnessControl(U,V,F,k,y,j):v`<span class="value">${m.state}${j}</span>`}
                        </div>
                      `:l}
                  ${S?v`
                        <div class="row input-row preset-row">
                          <span class="label">Preset</span>
                          ${L.length>0?this.renderPresetChips(L,A,y):v`<span class="value">${S.state}</span>`}
                        </div>
                      `:l}
                `:v`
                  ${re?v`<div class="standard-block">${this.renderBrightnessControl(U,V,F,k,y,j)}</div>`:l}
                  ${S&&L.length>0?v`<div class="standard-block standard-block--chips">${this.renderPresetChips(L,A,y)}</div>`:l}
                `}
          ${W?this.renderLayoutPreview(W,Y):I?v`<div class="row"><span class="label">Layout</span><span class="value">Unavailable</span></div>`:l}
          ${M?this.renderVersionFooter():l}
        </div>
      </ha-card>
    `}getDisplayMode(){let e=this.config?.display_mode;return e==="detailed"||e==="compact"?e:"standard"}getThemeMode(){return this.config?.theme==="ha"?"ha":"nova"}renderPowerButton(e){return v`
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
    `}renderBrightnessControl(e,t,i,s,r,n){let o=t-e||1,c=Math.max(0,Math.min(100,Math.round((s-e)/o*100))),d=n?`${Math.round(s)}${n}`:`${c}%`;return v`
      <div class="brightness-control" style=${`--nova-brightness-fill:${c}%`}>
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
          step=${i}
          .value=${String(s)}
          .disabled=${r}
          ?disabled=${r}
          aria-label="Brightness"
          @change=${this.handleBrightnessChanged}
        />
        <span class="brightness-value">${d}</span>
      </div>
    `}renderPresetChips(e,t,i){return v`
      <div class="preset-chips" role="group" aria-label="Preset">
        ${e.map(s=>{let r=this.optionEquals(s,t);return v`
            <button
              type="button"
              class="preset-chip ${r?"preset-chip--active":""}"
              ?disabled=${i}
              aria-pressed=${r?"true":"false"}
              @click=${()=>this.handlePresetButtonClick(s)}
            >${s}</button>
          `})}
      </div>
    `}renderVersionFooter(){return v`<div class="version-footer">${a.LAYOUT_BUILD_MARKER}</div>`}static styles=he`
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
      --nova-screen: #0b0c10;
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
      --nova-radius: var(--ha-card-border-radius, 12px);
      --nova-radius-sm: min(var(--ha-card-border-radius, 12px), 14px);
    }

    ha-card {
      overflow: hidden;
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
      height: var(--nova-touch);
      justify-content: center;
      padding: 0;
      transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.08s ease;
      width: var(--nova-touch);
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
      height: 22px;
      width: 22px;
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

    .preset-row {
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .standard-block {
      display: flex;
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

    .preset-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .preset-chip {
      background: var(--nova-surface-2);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      color: var(--nova-text);
      cursor: pointer;
      font: inherit;
      font-size: 0.92rem;
      font-weight: 600;
      min-height: 38px;
      padding: 8px 16px;
      transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease, transform 0.08s ease;
      -webkit-tap-highlight-color: transparent;
    }

    .preset-chip:hover {
      border-color: color-mix(in srgb, var(--nova-accent) 50%, var(--nova-divider));
    }

    .preset-chip:active {
      transform: scale(0.96);
    }

    .preset-chip:focus-visible {
      outline: 2px solid var(--nova-accent);
      outline-offset: 2px;
    }

    .preset-chip--active {
      background: var(--nova-accent);
      border-color: color-mix(in srgb, var(--nova-accent) 60%, #ffffff);
      box-shadow: 0 2px 10px color-mix(in srgb, var(--nova-accent) 35%, transparent);
      color: var(--nova-on-accent);
    }

    .preset-chip:disabled {
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
      fill: color-mix(in srgb, var(--nova-accent) 14%, #c9d2dc);
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

    .layer-source-modal {
      align-items: center;
      backdrop-filter: blur(2px);
      background: rgba(0, 0, 0, 0.55);
      border-radius: var(--nova-radius-sm);
      display: flex;
      inset: 0;
      justify-content: center;
      padding: 16px;
      position: absolute;
      z-index: 2;
    }

    .layer-source-modal-content {
      background: var(--nova-surface);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius);
      box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
      color: var(--nova-text);
      max-width: min(440px, 96%);
      padding: 18px;
      width: 100%;
    }

    .layer-source-modal-title {
      font-size: 1.05rem;
      font-weight: 600;
      margin-bottom: 14px;
    }

    .layer-source-modal-options {
      display: grid;
      gap: 10px;
      max-height: 300px;
      overflow: auto;
    }

    .layer-source-modal-option {
      align-items: center;
      background: var(--nova-surface-2);
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      color: var(--nova-text);
      cursor: pointer;
      display: flex;
      font: inherit;
      font-size: 0.98rem;
      font-weight: 500;
      min-height: var(--nova-touch);
      padding: 10px 16px;
      text-align: left;
      transition: background 0.18s ease, border-color 0.18s ease;
      width: 100%;
    }

    .layer-source-modal-option:hover {
      border-color: color-mix(in srgb, var(--nova-accent) 45%, var(--nova-divider));
    }

    .layer-source-modal-option.selected {
      background: color-mix(in srgb, var(--nova-accent) 14%, transparent);
      border-color: var(--nova-accent);
      box-shadow: inset 0 0 0 1px var(--nova-accent);
    }

    .layer-source-modal-option:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .layer-source-modal-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    }

    .layer-source-modal-close {
      background: transparent;
      border: 1px solid var(--nova-divider);
      border-radius: var(--nova-radius-sm);
      color: var(--nova-text);
      cursor: pointer;
      font: inherit;
      font-weight: 600;
      min-height: 40px;
      padding: 8px 20px;
    }

    .layer-source-modal-close:hover {
      border-color: var(--nova-accent);
    }
  `;renderLayoutPreview(e,t=!1){let i=e.screenWidth,s=e.screenHeight,r=this.fitLayersToViewport(e.layers,i,s).sort((g,m)=>g.z-m.z),n="#000000",o="#4a4a4a",c="#d9d9d9",d="#808080",p="#ffffff",u=this.getLayerSourceRows(),f=this.getLayerSourceLabelMap(),y=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",b=this.hass?.states[y],S=this.optimisticPowerState??b?.state,se=!!b&&S!=="on";return v`
      <div class=${t?"layout-preview layout-preview--compact":"layout-preview"}>
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
            stroke=${o}
            stroke-width="1"
          ></rect>
          ${r.length===0?ie`<text class="layout-empty" x=${i/2} y=${s/2} text-anchor="middle" dominant-baseline="middle">No layers detected</text>`:l}
          ${r.map((g,m)=>{let E=this.resolveLayerSourceRow(u,g.id,m),k=this.resolveLayerSourceLabel(f,g.id,m)??g.source?.trim()??g.id,U=g.x+g.width/2,V=g.y+g.height/2,F=Math.min(g.width,g.height),re=Math.max(54,i*.017),j=Math.max(F*.14,re),L=Math.max(24,g.height*.38),A=Math.min(j,L),W=Math.max(18,A*.35),q=Math.max(32,g.width*.9),ne=Math.max(1,Math.floor((q-W*2)/Math.max(1,A*.62))),N=k.length<=ne?k:`${k.slice(0,Math.max(1,ne-1))}\u2026`,ve=N.length*A*.62,I=Math.min(q,ve+W*2),M=Math.max(28,A*1.35),ae=U-I/2,ge=V-M/2,Y=Math.max(6,M*.25),h=Math.max(51,Math.min(138,F*.27)),oe=Math.max(10,h*.22),$=Math.max(g.x+4,g.x+g.width-h-oe),_=Math.min(g.y+oe,g.y+g.height-h-4),fe=$+h*.22,Ze=_+h*.34,ye=h*.18,et=h*.32,tt=[`${fe+ye},${_+h*.26}`,`${$+h*.68},${_+h*.16}`,`${$+h*.68},${_+h*.84}`,`${fe+ye},${_+h*.74}`].join(" "),O=$+h*.7,z=_+h*.5,Pe=g.audioOpen===!0,De=g.audioOpen===!1,K=Pe?"var(--success-color, #43a047)":De?"var(--secondary-text-color, #8a8a8a)":"color-mix(in srgb, var(--secondary-text-color, #8a8a8a) 55%, transparent)",ce=!!E&&!se;return ie`
              <g>
                <rect
                  class="layout-layer"
                  x=${g.x}
                  y=${g.y}
                  width=${g.width}
                  height=${g.height}
                  fill=${c}
                  stroke=${d}
                  stroke-width="3"
                ></rect>
                <g>
                  <rect
                    x=${$}
                    y=${_}
                    width=${h}
                    height=${h}
                    rx=${h*.22}
                    ry=${h*.22}
                    fill="#111111"
                    fill-opacity="0.8"
                  ></rect>
                  <rect
                    x=${fe}
                    y=${Ze}
                    width=${ye}
                    height=${et}
                    fill=${K}
                  ></rect>
                  <polygon points=${tt} fill=${K}></polygon>
                  ${Pe?ie`
                      <path
                        d=${`M ${O} ${z-h*.13} Q ${O+h*.12} ${z} ${O} ${z+h*.13}`}
                        fill="none"
                        stroke=${K}
                        stroke-width=${h*.06}
                        stroke-linecap="round"
                      ></path>
                      <path
                        d=${`M ${O+h*.1} ${z-h*.22} Q ${O+h*.28} ${z} ${O+h*.1} ${z+h*.22}`}
                        fill="none"
                        stroke=${K}
                        stroke-width=${h*.06}
                        stroke-linecap="round"
                      ></path>
                    `:l}
                  ${De?ie`
                      <line
                        x1=${$+h*.7}
                        y1=${_+h*.24}
                        x2=${$+h*.92}
                        y2=${_+h*.76}
                        stroke=${K}
                        stroke-width=${h*.08}
                        stroke-linecap="round"
                      ></line>
                    `:l}
                </g>
                <rect
                  class=${ce?"layout-layer-hitbox":""}
                  x=${ae}
                  y=${ge}
                  width=${I}
                  height=${M}
                  rx=${Y}
                  ry=${Y}
                  fill="#111111"
                  fill-opacity="0.82"
                  @click=${ce?()=>this.openLayerSourceChooser(E):l}
                ></rect>
                <text
                  class=${ce?"layout-layer-hitbox":""}
                  x=${U}
                  y=${V}
                  font-weight="700"
                  style=${`fill:${p};font-size:${A}px;font-family:inherit;`}
                  text-anchor="middle"
                  dominant-baseline="middle"
                  @click=${ce?()=>this.openLayerSourceChooser(E):l}
                >${N}</text>
              </g>
            `})}
        </svg>
        ${this.activeLayerSourceChooser?this.renderLayerSourceChooser(se):l}
      </div>
    `}getLayerSourceLabelMap(){let e=new Map;for(let t of this.getLayerSourceRows()){let i=this.resolveSelectedOption(t.entity,t.options).trim();i&&e.set(t.layerNumber,i)}return e}resolveLayerSourceLabel(e,t,i){let s=[],r=Number.parseInt(t,10);Number.isFinite(r)&&(s.push(r),s.push(r+1)),s.push(i),s.push(i+1);for(let n of s){let o=e.get(n)?.trim();if(o)return o}}resolveLayerSourceRow(e,t,i){let s=[],r=Number.parseInt(t,10);Number.isFinite(r)&&(s.push(r),s.push(r+1)),s.push(i),s.push(i+1);for(let n of s){let o=e.find(c=>c.layerNumber===n);if(o)return o}return e[i]}renderLayerSourceChooser(e){let t=this.activeLayerSourceChooser;return t?v`
      <div class="layer-source-modal" @click=${this.handleLayerSourceModalBackdropClick}>
        <div class="layer-source-modal-content" @click=${i=>i.stopPropagation()}>
          <div class="layer-source-modal-title">Layer ${t.layerNumber} Source</div>
          <div class="layer-source-modal-options">
            ${t.options.map(i=>v`
              <button
                type="button"
                class="layer-source-modal-option ${this.optionEquals(i,t.selectedOption)?"selected":""}"
                ?disabled=${e}
                @click=${()=>this.handleLayerSourceModalOptionClick(i)}
              >${i}</button>
            `)}
          </div>
          <div class="layer-source-modal-actions">
            <button type="button" class="layer-source-modal-close" @click=${this.closeLayerSourceChooser}>Close</button>
          </div>
        </div>
      </div>
    `:l}openLayerSourceChooser(e){e&&(this.activeLayerSourceChooser={entityId:e.entityId,layerNumber:e.layerNumber,options:e.options,selectedOption:this.resolveSelectedOption(e.entity,e.options)},this.requestUpdate())}closeLayerSourceChooser=()=>{this.activeLayerSourceChooser=void 0,this.requestUpdate()};handleLayerSourceModalBackdropClick=()=>{this.closeLayerSourceChooser()};async handleLayerSourceModalOptionClick(e){let t=this.activeLayerSourceChooser,i=e.trim();!t||!i||(await this.selectLayerSourceOption(t.entityId,i),this.closeLayerSourceChooser())}fitLayersToViewport(e,t,i){return e.length===0?[]:e.map(s=>{if(!Number.isFinite(s.x)||!Number.isFinite(s.y)||!Number.isFinite(s.width)||!Number.isFinite(s.height)||s.width<=0||s.height<=0)return;let r=Math.max(0,s.x),n=Math.max(0,s.y),o=Math.min(t,s.x+s.width),c=Math.min(i,s.y+s.height),d=o-r,p=c-n;if(!(d<=0||p<=0))return{...s,x:r,y:n,width:d,height:p}}).filter(s=>!!s)}readNumberAttribute(e,t,i){let s=e.attributes[t];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let r=Number.parseFloat(s);if(Number.isFinite(r))return r}return i}readStringListAttribute(e,t){if(!e)return[];let i=e.attributes[t];return Array.isArray(i)?i.filter(s=>typeof s=="string"):[]}resolveSelectedOption(e,t){let i=e.state?.trim(),s=[i,this.readStringAttribute(e,"current_option"),this.readStringAttribute(e,"selected_option"),this.readStringAttribute(e,"source"),this.readStringAttribute(e,"current_source")].filter(r=>!!r);for(let r of s){let n=t.find(d=>d===r);if(n)return n;let o=r.toLowerCase(),c=t.find(d=>d.toLowerCase()===o);if(c)return c}return i??""}readStringAttribute(e,t){let i=e.attributes[t];return typeof i!="string"?void 0:i.trim()||void 0}optionEquals(e,t){if(e===t)return!0;let i=e.trim().toLowerCase(),s=t.trim().toLowerCase();return i===s}readLayoutPayload(e,t){if(!e||!t){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!e,hasLayersEntity:!!t});return}let i=this.readFirstScreen(e);if(!i){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let s=this.readFiniteNumber(i.width??i.w),r=this.readFiniteNumber(i.height??i.h);if(!s||!r||s<=0||r<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:s,screenHeight:r,firstScreen:i});return}let n=this.readLayersCollection(t),o=n.map((c,d)=>this.normalizeLayoutLayer(c,d)).filter(c=>!!c);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:o.length,screenWidth:s,screenHeight:r}),{screenWidth:s,screenHeight:r,layers:o}}readFirstScreen(e){let t=[e.state,e.attributes.screens,e.attributes.screen_list,e.attributes.screen,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let i of t){let s=this.parseStructuredValue(i);if(Array.isArray(s)&&s.length>0){let o=this.asRecord(s[0]);if(o)return o}let r=this.asRecord(s);if(!r)continue;let n=r.screens;if(Array.isArray(n)&&n.length>0){let o=this.asRecord(n[0]);if(o)return o}if(this.readFiniteNumber(r.width??r.w)&&this.readFiniteNumber(r.height??r.h))return r}if(this.readFiniteNumber(e.attributes.width??e.attributes.w)&&this.readFiniteNumber(e.attributes.height??e.attributes.h))return e.attributes}readLayersCollection(e){let t=[e.state,e.attributes.layers,e.attributes.layer_list,e.attributes.value,e.attributes.data,e.attributes.layout_json,e.attributes.layout,e.attributes.screen_layout];for(let i of t){let s=this.parseStructuredValue(i);if(Array.isArray(s))return s;let r=this.asRecord(s);if(!r)continue;if(Array.isArray(r.layers))return r.layers;if(Array.isArray(r.layer_list))return r.layer_list;let n=this.asRecord(r.result);if(n&&Array.isArray(n.layers))return n.layers;let o=this.asRecord(r.data);if(o&&Array.isArray(o.layers))return o.layers;let c=Object.values(r).map(d=>this.asRecord(d)).filter(d=>!!d).filter(d=>!!this.asRecord(d.general)&&!!this.asRecord(d.window));if(c.length>0)return c;if(this.asRecord(r.general)&&this.asRecord(r.window))return[r]}return[]}parseStructuredValue(e){if(typeof e!="string")return e;try{return JSON.parse(e)}catch{return e}}asRecord(e){if(!(!e||typeof e!="object"||Array.isArray(e)))return e}readFiniteNumber(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Number.parseFloat(e);if(Number.isFinite(t))return t}}normalizeLayoutLayer(e,t){let i=this.asRecord(e);if(!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:t,value:e});return}let s=this.asRecord(i.general),r=this.asRecord(i.window),n=this.asRecord(i.audioStatus);if(!s||!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:t,hasGeneral:!!s,hasWindow:!!r,layer:i});return}let o=this.readFiniteNumber(r.width),c=this.readFiniteNumber(r.height),d=this.readFiniteNumber(r.x)??0,p=this.readFiniteNumber(r.y)??0;if(!o||!c||o<=0||c<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:t,width:o,height:c,windowData:r});return}let u=s.layerId;if(typeof u!="string"&&typeof u!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:t,layerId:u,general:s});return}let f=this.readFiniteNumber(s.zorder);if(f===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:t,zorder:s.zorder,general:s});return}let y=typeof s.name=="string"?s.name:void 0,b=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:t,layerId:u,x:d,y:p,width:o,height:c,zValue:f,source:y,audioOpen:b}),{id:String(u),x:d,y:p,width:o,height:c,z:f,source:y,audioOpen:b}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(e,t){if(this.isLayoutDebugEnabled()){if(t===void 0){console.debug("[NovastarCard][layout]",e);return}console.debug("[NovastarCard][layout]",e,t)}}buildRelevantStateSignature(e){if(!e)return"";let t=new Set,i=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of i){let o=this.config?.[n];o&&t.add(o);let c=this.resolvedEntities[n];c&&t.add(c)}t.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(e.states))s.test(n)&&t.add(n);return Array.from(t).sort().map(n=>{let o=e.states[n];if(!o)return`${n}:missing`;let c=this.readStringListAttribute(o,"options").join("|"),d=this.readStringAttribute(o,"current_option")??"",p=this.readStringAttribute(o,"selected_option")??"",u=this.readStringAttribute(o,"source")??"",f=this.readStringAttribute(o,"current_source")??"";return`${n}:${o.state}:${c}:${d}:${p}:${u}:${f}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(e){await new Promise(t=>{window.setTimeout(()=>t(),e)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(e=>({entityId:e,entity:this.hass?.states[e]})).filter(e=>!!e.entity).map(e=>{let t=this.readStringListAttribute(e.entity,"options");return{...e,options:t,layerNumber:this.getLayerNumber(e.entityId)}}).filter(e=>e.options.length>0&&e.entity.state!=="unavailable"&&e.entity.state!=="unknown").sort((e,t)=>e.layerNumber-t.layerNumber):[]}getLayerSourceEntityIds(){let e=/^select\..*_layer_\d+_source$/,t=this.resolvedLayerSourceEntities,i=this.hass?Object.keys(this.hass.states).filter(s=>e.test(s)):[];return t.length===0?i:i.length===0?t:Array.from(new Set([...t,...i]))}getLayerNumber(e){let t=e.match(/_layer_(\d+)_source$/);if(!t)return Number.MAX_SAFE_INTEGER;let i=Number.parseInt(t[1],10);return Number.isFinite(i)?i:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(e){if(!this.hass)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",i=this.hass.states[t];if(i&&i.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let r=e.target,n=Number.parseFloat(r.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t)return;let s=(this.optimisticPowerState??t.state)!=="on";this.optimisticPowerState=s?"on":"off",this.requestUpdate();let r=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",r,{entity_id:e})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetButtonClick(e){if(!this.hass)return;let t=this.getEntityId("preset_entity"),i=e.trim();!t||!i||(await this.hass.callService?.("select","select_option",{entity_id:t,option:i}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(e){if(!this.hass)return;let t=e.target,i=t.dataset.entityId,s=t.value?.trim();!i||!s||await this.selectLayerSourceOption(i,s)}async selectLayerSourceOption(e,t){this.hass&&await this.hass.callService?.("select","select_option",{entity_id:e,option:t})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",t=this.hass.states[e];if(!t){this.optimisticPowerState=void 0;return}t.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(e){let t=this.config?.[e];if(t&&t.trim())return t;let i=this.resolvedEntities[e];if(i&&i.trim())return i}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let e=this.config.device_id?.trim();if(!e){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==e&&!(this.resolvedDeviceId===e&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=e;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let i=t.filter(o=>{if(!o||typeof o!="object")return!1;let c=o;return c.device_id===e&&!c.disabled_by&&!c.hidden_by&&typeof c.entity_id=="string"}).map(o=>o.entity_id),s=/^select\..*_layer_\d+_source$/,r=i.filter(o=>s.test(o)).sort((o,c)=>this.getLayerNumber(o)-this.getLayerNumber(c)),n={power_entity:this.pickEntity(i,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(i,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(i,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(i,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(i,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(i,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(i,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(i,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(i,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(i,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=r,this.resolvedDeviceId=e,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===e&&(this.resolvingDeviceId=void 0)}}}pickEntity(e,t,i){for(let s of t){let r=e.find(n=>s.test(n));if(r)return r}for(let s of i){let r=`${s}.`,n=e.find(o=>o.startsWith(r));if(n)return n}}},Me=class extends w{hass;config={type:"custom:novastar-h-series-card"};showOverrides=!1;localDeviceId;autoDetectedDeviceId;deviceNameById={};loadingDeviceNames=!1;attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1},showOverrides:{attribute:!1}};setConfig(e){let t={...e};t.type||="custom:novastar-h-series-card",this.config=t;let i=t.device_id?.trim();i&&(this.localDeviceId=i,this.autoDetectedDeviceId=i),this.showOverrides=!!(t.power_entity||t.preset_entity||t.screens_entity||t.layers_entity||t.controller_entity||t.status_entity||t.brightness_entity||t.temperature_entity),this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId(),this.ensureDeviceNames()}render(){if(!this.hass)return l;let e=!!customElements.get("ha-device-picker"),t=this.config.device_id?.trim()||this.localDeviceId||this.autoDetectedDeviceId||"",i=this.getSelectedDeviceLabel(t),s=(this.config.display_mode??"standard")==="compact",r=this.config.show_header_in_compact===!0;return v`
      <div class="editor">
        <ha-textfield
          label="Header"
          .value=${this.config.header??""}
          .configValue=${"header"}
          @input=${this.handleInputChanged}
        ></ha-textfield>
        <label class="select-label" for="display-mode-select">Display mode</label>
        <select
          id="display-mode-select"
          class="editor-select"
          .value=${this.config.display_mode??"standard"}
          .configValue=${"display_mode"}
          @change=${this.handleInputChanged}
        >
          <option value="detailed">Detailed</option>
          <option value="standard">Standard</option>
          <option value="compact">Compact</option>
        </select>
        <label class="checkbox-row">
          <input
            type="checkbox"
            .checked=${r}
            .disabled=${!s}
            ?disabled=${!s}
            .configValue=${"show_header_in_compact"}
            @change=${this.handleBooleanInputChanged}
          />
          <span>Show header in Compact mode</span>
        </label>
        <label class="select-label" for="theme-select">Theme styling</label>
        <select
          id="theme-select"
          class="editor-select"
          .value=${this.config.theme??"nova"}
          .configValue=${"theme"}
          @change=${this.handleInputChanged}
        >
          <option value="nova">Nova (default)</option>
          <option value="ha">Home Assistant theme</option>
        </select>
        ${e?v`
              <ha-device-picker
                .hass=${this.hass}
                label="Device picker (optional)"
                .value=${t}
                .configValue=${"device_id"}
                @value-changed=${this.handleEntityChanged}
              ></ha-device-picker>
            `:v`
              <ha-textfield
                label="Device ID"
                .value=${t}
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
    `}handleOverridesToggle(e){let t=e.target;this.showOverrides=t.open}handleInputChanged(e){let t=e.target,i=t.configValue;if(!i)return;let s=t.value?.trim()??"";this.updateConfigValue(i,s)}handleBooleanInputChanged(e){let t=e.target,i=t.configValue;i&&this.updateBooleanConfigValue(i,!!t.checked)}handleEntityChanged(e){let i=e.target.configValue;if(!i||!e.detail||e.detail.value===void 0)return;let s=e.detail.value?.trim()??"";this.updateConfigValue(i,s)}updateConfigValue(e,t){if(e==="device_id"&&(this.localDeviceId=t||void 0,this.autoDetectedDeviceId=t||this.autoDetectedDeviceId),(this.config[e]??"")===t)return;let s={...this.config},r=e==="display_mode"&&t==="standard"||e==="theme"&&t==="nova"?"":t;r?s[e]=r:delete s[e],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}updateBooleanConfigValue(e,t){if(this.config[e]===!0===t)return;let s={...this.config};t?s[e]=!0:delete s[e],s.type||(s.type="custom:novastar-h-series-card"),s.controller_entity||(s.controller_entity=""),this.config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let t=e.filter(i=>{if(!i||typeof i!="object")return!1;let s=i;return s.platform==="novastar_h"&&typeof s.device_id=="string"&&!s.disabled_by&&!s.hidden_by}).map(i=>i.device_id)[0];if(!t)return;this.autoDetectedDeviceId=t,this.localDeviceId=t,this.requestUpdate(),this.updateConfigValue("device_id",t)}catch{}}}async ensureDeviceNames(){if(!this.hass?.callWS||this.loadingDeviceNames)return;let e=this.config.device_id??this.localDeviceId;if(!(!e||this.deviceNameById[e])){this.loadingDeviceNames=!0;try{let t=await this.hass.callWS({type:"config/device_registry/list"});if(!Array.isArray(t))return;let i={...this.deviceNameById};for(let s of t){if(!s||typeof s!="object")continue;let r=s,n=r.id;if(typeof n!="string")continue;let o=r.name_by_user??r.name??r.model;typeof o=="string"&&o.trim()&&(i[n]=o.trim())}this.deviceNameById=i,this.requestUpdate()}catch{}finally{this.loadingDeviceNames=!1}}}getSelectedDeviceLabel(e){if(!e)return"Auto-detecting...";let t=this.deviceNameById[e];return t?`${t} (${e})`:e}static styles=he`
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
  `};try{customElements.define("novastar-h-series-card",Ie)}catch{}try{customElements.define("novastar-h-series-card-editor",Me)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{Ie as NovastarHSeriesCard};
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
