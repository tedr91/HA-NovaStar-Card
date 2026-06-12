var dt=globalThis,lt=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),Ht=new WeakMap,X=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(lt&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ht.set(e,t))}return t}toString(){return this.cssText}},Ot=o=>new X(typeof o=="string"?o:o+"",void 0,mt),ht=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new X(e,o,mt)},Dt=(o,t)=>{if(lt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=dt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,o.appendChild(s)}},bt=lt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Ot(e)})(o):o;var{is:se,defineProperty:re,getOwnPropertyDescriptor:ie,getOwnPropertyNames:ne,getOwnPropertySymbols:oe,getPrototypeOf:ae}=Object,ut=globalThis,zt=ut.trustedTypes,ce=zt?zt.emptyScript:"",de=ut.reactiveElementPolyfillSupport,G=(o,t)=>o,_t={toAttribute(o,t){switch(t){case Boolean:o=o?ce:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Tt=(o,t)=>!se(o,t),Bt={attribute:!0,type:String,converter:_t,reflect:!1,useDefault:!1,hasChanged:Tt};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&re(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=ie(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);i?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bt}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;let t=ae(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){let e=this.properties,s=[...ne(e),...oe(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(bt(r))}else t!==void 0&&e.push(bt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:_t).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:_t;this._$Em=r;let a=n.fromAttribute(e,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(t!==void 0){let n=this.constructor;if(r===!1&&(i=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??Tt)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:n}=i,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[G("elementProperties")]=new Map,w[G("finalized")]=new Map,de?.({ReactiveElement:w}),(ut.reactiveElementVersions??=[]).push("2.1.2");var Lt=globalThis,Ut=o=>o,pt=Lt.trustedTypes,Ft=pt?pt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yt="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,Xt="?"+L,le=`<${Xt}>`,H=document,Q=()=>H.createComment(""),Z=o=>o===null||typeof o!="object"&&typeof o!="function",Ct=Array.isArray,he=o=>Ct(o)||typeof o?.[Symbol.iterator]=="function",$t=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,jt=/>/g,R=RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,qt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,kt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),y=kt(1),st=kt(2),_e=kt(3),O=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),Kt=new WeakMap,I=H.createTreeWalker(H,129);function Jt(o,t){if(!Ct(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ft!==void 0?Ft.createHTML(t):t}var ue=(o,t)=>{let e=o.length-1,s=[],r,i=t===2?"<svg>":t===3?"<math>":"",n=J;for(let a=0;a<e;a++){let c=o[a],d,p,u=-1,g=0;for(;g<c.length&&(n.lastIndex=g,p=n.exec(c),p!==null);)g=n.lastIndex,n===J?p[1]==="!--"?n=Vt:p[1]!==void 0?n=jt:p[2]!==void 0?(Gt.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=R):p[3]!==void 0&&(n=R):n===R?p[0]===">"?(n=r??J,u=-1):p[1]===void 0?u=-2:(u=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?R:p[3]==='"'?qt:Wt):n===qt||n===Wt?n=R:n===Vt||n===jt?n=J:(n=R,r=void 0);let f=n===R&&o[a+1].startsWith("/>")?" ":"";i+=n===J?c+le:u>=0?(s.push(d),c.slice(0,u)+Yt+c.slice(u)+L+f):c+L+(u===-2?a:f)}return[Jt(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},tt=class o{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,n=0,a=t.length-1,c=this.parts,[d,p]=ue(t,e);if(this.el=o.createElement(d,s),I.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=I.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(Yt)){let g=p[n++],f=r.getAttribute(u).split(L),b=/([.?@])?(.*)/.exec(g);c.push({type:1,index:i,name:b[2],strings:f,ctor:b[1]==="."?xt:b[1]==="?"?St:b[1]==="@"?At:T}),r.removeAttribute(u)}else u.startsWith(L)&&(c.push({type:6,index:i}),r.removeAttribute(u));if(Gt.test(r.tagName)){let u=r.textContent.split(L),g=u.length-1;if(g>0){r.textContent=pt?pt.emptyScript:"";for(let f=0;f<g;f++)r.append(u[f],Q()),I.nextNode(),c.push({type:2,index:++i});r.append(u[g],Q())}}}else if(r.nodeType===8)if(r.data===Xt)c.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(L,u+1))!==-1;)c.push({type:7,index:i}),u+=L.length-1}i++}}static createElement(t,e){let s=H.createElement("template");return s.innerHTML=t,s}};function B(o,t,e=o,s){if(t===O)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,i=Z(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=B(o,r._$AS(o,t.values),r,s)),t}var wt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??H).importNode(e,!0);I.currentNode=r;let i=I.nextNode(),n=0,a=0,c=s[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new et(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new Et(i,this,t)),this._$AV.push(d),c=s[++a]}n!==c?.index&&(i=I.nextNode(),n++)}return I.currentNode=H,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},et=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),Z(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):he(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=tt.createElement(Jt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let i=new wt(r,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new tt(t)),e}k(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new o(this.O(Q()),this.O(Q()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Ut(t).nextSibling;Ut(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(t,e=this,s,r){let i=this.strings,n=!1;if(i===void 0)t=B(this,t,e,0),n=!Z(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{let a=t,c,d;for(t=i[0],c=0;c<i.length-1;c++)d=B(this,a[s+c],e,c),d===O&&(d=this._$AH[c]),n||=!Z(d)||d!==this._$AH[c],d===l?t=l:t!==l&&(t+=(d??"")+i[c+1]),this._$AH[c]=d}n&&!r&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},xt=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}},St=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}},At=class extends T{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??l)===O)return;let s=this._$AH,r=t===l&&s!==l||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==l&&(s===l||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Et=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}};var pe=Lt.litHtmlPolyfillSupport;pe?.(tt,et),(Lt.litHtmlVersions??=[]).push("3.3.2");var Qt=(o,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let i=e?.renderBefore??null;s._$litPart$=r=new et(t.insertBefore(Q(),i),i,void 0,e??{})}return r._$AI(o),r};var Nt=globalThis,x=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};x._$litElement$=!0,x.finalized=!0,Nt.litElementHydrateSupport?.({LitElement:x});var ve=Nt.litElementPolyfillSupport;ve?.({LitElement:x});(Nt.litElementVersions??=[]).push("4.2.2");var Mt=class o extends x{static LAYOUT_BUILD_MARKER="v1.0.9-1-gdd587c4-dirty";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";activeLayerSourceChooser;static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(t){let e=this._hass;this._hass=t;let s=this.buildRelevantStateSignature(t),r=s!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=s,(e!==t||r)&&this.requestUpdate("hass",e)}setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",header:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return y`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return y`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let _=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return y`<ha-card><div class="content">${_}</div></ha-card>`}let e=this.hass.states[t];if(!e)return y`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let s=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",r=this.getEntityId("preset_entity"),i=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),a=this.getEntityId("status_entity"),c=this.getEntityId("brightness_entity"),d=this.getEntityId("temperature_entity"),p=this.hass.states[s],g=(this.optimisticPowerState??p?.state)==="on",f=!!p&&!g,b=a?this.hass.states[a]:void 0,S=r?this.hass.states[r]:void 0,rt=i?this.hass.states[i]:void 0,v=n?this.hass.states[n]:void 0,m=c?this.hass.states[c]:void 0,A=d?this.hass.states[d]:void 0,C=m?Number.parseFloat(m.state):Number.NaN,U=m?this.readNumberAttribute(m,"min",0):0,F=m?this.readNumberAttribute(m,"max",100):100,V=m?this.readNumberAttribute(m,"step",1):1,it=!!m&&Number.isFinite(C),j=m?this.readStringAttribute(m,"unit_of_measurement")??"":"",k=this.readStringListAttribute(S,"options"),E=S?this.resolveSelectedOption(S,k):"",W=this.readLayoutPayload(rt,v),q=b?`${e.state} (${b.state})`:e.state,nt=A?this.readStringAttribute(A,"unit_of_measurement")??"":"",N=this.getDisplayMode(),vt=this.getThemeMode(),M=N==="compact",P=N==="detailed",ot=this.config.show_header_in_compact===!0,yt=!M||ot,K=M&&!ot,h=this.config.header??"Novastar H Series",at=["content",`content--${N}`,K?"content--bare":""].filter(Boolean).join(" ");return y`
      <ha-card class="nova-card nova-card--${N} nova-card--theme-${vt} ${g?"is-on":"is-off"}">
        ${yt?y`
              <div class="header-row">
                <div class="header-lead">
                  ${!P&&p?y`<span
                        class="status-dot ${g?"status-dot--on":"status-dot--off"}"
                        title=${q}
                      ></span>`:l}
                  <div class="header">${h}</div>
                </div>
                ${p?this.renderPowerButton(g):l}
              </div>
            `:l}
        <div class=${at}>
          ${M?l:P?y`
                  <div class="row">
                    <span class="label">Status</span>
                    <span class="value status-value status-value--${g?"on":"off"}">${q}</span>
                  </div>
                  ${A?y`
                        <div class="row">
                          <span class="label">Temperature</span>
                          <span class="value">${A.state}${nt}</span>
                        </div>
                      `:l}
                  ${m?y`
                        <div class="row input-row">
                          <span class="label">Brightness</span>
                          ${it?this.renderBrightnessControl(U,F,V,C,f,j):y`<span class="value">${m.state}${j}</span>`}
                        </div>
                      `:l}
                  ${S?y`
                        <div class="row input-row preset-row">
                          <span class="label">Preset</span>
                          ${k.length>0?this.renderPresetChips(k,E,f):y`<span class="value">${S.state}</span>`}
                        </div>
                      `:l}
                `:y`
                  ${it?y`<div class="standard-block">${this.renderBrightnessControl(U,F,V,C,f,j)}</div>`:l}
                  ${S&&k.length>0?y`<div class="standard-block standard-block--chips">${this.renderPresetChips(k,E,f)}</div>`:l}
                `}
          ${W?this.renderLayoutPreview(W,K):M?y`<div class="row"><span class="label">Layout</span><span class="value">Unavailable</span></div>`:l}
          ${P?this.renderVersionFooter():l}
        </div>
      </ha-card>
    `}getDisplayMode(){let t=this.config?.display_mode;return t==="detailed"||t==="compact"?t:"standard"}getThemeMode(){return this.config?.theme==="ha"?"ha":"nova"}renderPowerButton(t){return y`
      <button
        type="button"
        class="power-button ${t?"power-button--on":"power-button--off"}"
        role="switch"
        aria-checked=${t?"true":"false"}
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
    `}renderBrightnessControl(t,e,s,r,i,n){let a=e-t||1,c=Math.max(0,Math.min(100,Math.round((r-t)/a*100))),d=n?`${Math.round(r)}${n}`:`${c}%`;return y`
      <div class="brightness-control" style=${`--nova-brightness-fill:${c}%`}>
        <svg class="brightness-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-6a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zM4.93 4.93a1 1 0 0 1 1.41 0l1.06 1.06A1 1 0 0 1 5.99 7.4L4.93 6.34a1 1 0 0 1 0-1.41zm11.67 11.67a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17.5 0a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1zM4.93 19.07a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zM16.6 7.4a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41L18.01 7.4a1 1 0 0 1-1.41 0z"
          ></path>
        </svg>
        <input
          class="brightness-slider"
          type="range"
          min=${t}
          max=${e}
          step=${s}
          .value=${String(r)}
          .disabled=${i}
          ?disabled=${i}
          aria-label="Brightness"
          @change=${this.handleBrightnessChanged}
        />
        <span class="brightness-value">${d}</span>
      </div>
    `}renderPresetChips(t,e,s){return y`
      <div class="preset-chips" role="group" aria-label="Preset">
        ${t.map(r=>{let i=this.optionEquals(r,e);return y`
            <button
              type="button"
              class="preset-chip ${i?"preset-chip--active":""}"
              ?disabled=${s}
              aria-pressed=${i?"true":"false"}
              @click=${()=>this.handlePresetButtonClick(r)}
            >${r}</button>
          `})}
      </div>
    `}renderVersionFooter(){return y`<div class="version-footer">${o.LAYOUT_BUILD_MARKER}</div>`}static styles=ht`
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
  `;renderLayoutPreview(t,e=!1){let s=t.screenWidth,r=t.screenHeight,i=this.fitLayersToViewport(t.layers,s,r).sort((v,m)=>v.z-m.z),n="#000000",a="#4a4a4a",c="#d9d9d9",d="#808080",p="#ffffff",u=this.getLayerSourceRows(),g=this.getLayerSourceLabelMap(),f=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",b=this.hass?.states[f],S=this.optimisticPowerState??b?.state,rt=!!b&&S!=="on";return y`
      <div class=${e?"layout-preview layout-preview--compact":"layout-preview"}>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${s} ${r}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            class="layout-screen"
            x="0"
            y="0"
            width=${s}
            height=${r}
            fill=${n}
            stroke=${a}
            stroke-width="1"
          ></rect>
          ${i.length===0?st`<text class="layout-empty" x=${s/2} y=${r/2} text-anchor="middle" dominant-baseline="middle">No layers detected</text>`:l}
          ${i.map((v,m)=>{let A=this.resolveLayerSourceRow(u,v.id,m),C=this.resolveLayerSourceLabel(g,v.id,m)??v.source?.trim()??v.id,U=v.x+v.width/2,F=v.y+v.height/2,V=Math.min(v.width,v.height),it=Math.max(54,s*.017),j=Math.max(V*.14,it),k=Math.max(24,v.height*.38),E=Math.min(j,k),W=Math.max(18,E*.35),q=Math.max(32,v.width*.9),nt=Math.max(1,Math.floor((q-W*2)/Math.max(1,E*.62))),N=C.length<=nt?C:`${C.slice(0,Math.max(1,nt-1))}\u2026`,vt=N.length*E*.62,M=Math.min(q,vt+W*2),P=Math.max(28,E*1.35),ot=U-M/2,yt=F-P/2,K=Math.max(6,P*.25),h=Math.max(51,Math.min(138,V*.27)),at=Math.max(10,h*.22),_=Math.max(v.x+4,v.x+v.width-h-at),$=Math.min(v.y+at,v.y+v.height-h-4),gt=_+h*.22,Zt=$+h*.34,ft=h*.18,te=h*.32,ee=[`${gt+ft},${$+h*.26}`,`${_+h*.68},${$+h*.16}`,`${_+h*.68},${$+h*.84}`,`${gt+ft},${$+h*.74}`].join(" "),D=_+h*.7,z=$+h*.5,Rt=v.audioOpen===!0,It=v.audioOpen===!1,Y=Rt?"var(--success-color, #43a047)":It?"var(--secondary-text-color, #8a8a8a)":"color-mix(in srgb, var(--secondary-text-color, #8a8a8a) 55%, transparent)",ct=!!A&&!rt;return st`
              <g>
                <rect
                  class="layout-layer"
                  x=${v.x}
                  y=${v.y}
                  width=${v.width}
                  height=${v.height}
                  fill=${c}
                  stroke=${d}
                  stroke-width="3"
                ></rect>
                <g>
                  <rect
                    x=${_}
                    y=${$}
                    width=${h}
                    height=${h}
                    rx=${h*.22}
                    ry=${h*.22}
                    fill="#111111"
                    fill-opacity="0.8"
                  ></rect>
                  <rect
                    x=${gt}
                    y=${Zt}
                    width=${ft}
                    height=${te}
                    fill=${Y}
                  ></rect>
                  <polygon points=${ee} fill=${Y}></polygon>
                  ${Rt?st`
                      <path
                        d=${`M ${D} ${z-h*.13} Q ${D+h*.12} ${z} ${D} ${z+h*.13}`}
                        fill="none"
                        stroke=${Y}
                        stroke-width=${h*.06}
                        stroke-linecap="round"
                      ></path>
                      <path
                        d=${`M ${D+h*.1} ${z-h*.22} Q ${D+h*.28} ${z} ${D+h*.1} ${z+h*.22}`}
                        fill="none"
                        stroke=${Y}
                        stroke-width=${h*.06}
                        stroke-linecap="round"
                      ></path>
                    `:l}
                  ${It?st`
                      <line
                        x1=${_+h*.7}
                        y1=${$+h*.24}
                        x2=${_+h*.92}
                        y2=${$+h*.76}
                        stroke=${Y}
                        stroke-width=${h*.08}
                        stroke-linecap="round"
                      ></line>
                    `:l}
                </g>
                <rect
                  class=${ct?"layout-layer-hitbox":""}
                  x=${ot}
                  y=${yt}
                  width=${M}
                  height=${P}
                  rx=${K}
                  ry=${K}
                  fill="#111111"
                  fill-opacity="0.82"
                  @click=${ct?()=>this.openLayerSourceChooser(A):l}
                ></rect>
                <text
                  class=${ct?"layout-layer-hitbox":""}
                  x=${U}
                  y=${F}
                  font-weight="700"
                  style=${`fill:${p};font-size:${E}px;font-family:inherit;`}
                  text-anchor="middle"
                  dominant-baseline="middle"
                  @click=${ct?()=>this.openLayerSourceChooser(A):l}
                >${N}</text>
              </g>
            `})}
        </svg>
        ${this.activeLayerSourceChooser?this.renderLayerSourceChooser(rt):l}
      </div>
    `}getLayerSourceLabelMap(){let t=new Map;for(let e of this.getLayerSourceRows()){let s=this.resolveSelectedOption(e.entity,e.options).trim();s&&t.set(e.layerNumber,s)}return t}resolveLayerSourceLabel(t,e,s){let r=[],i=Number.parseInt(e,10);Number.isFinite(i)&&(r.push(i),r.push(i+1)),r.push(s),r.push(s+1);for(let n of r){let a=t.get(n)?.trim();if(a)return a}}resolveLayerSourceRow(t,e,s){let r=[],i=Number.parseInt(e,10);Number.isFinite(i)&&(r.push(i),r.push(i+1)),r.push(s),r.push(s+1);for(let n of r){let a=t.find(c=>c.layerNumber===n);if(a)return a}return t[s]}renderLayerSourceChooser(t){let e=this.activeLayerSourceChooser;return e?y`
      <div class="layer-source-modal" @click=${this.handleLayerSourceModalBackdropClick}>
        <div class="layer-source-modal-content" @click=${s=>s.stopPropagation()}>
          <div class="layer-source-modal-title">Layer ${e.layerNumber} Source</div>
          <div class="layer-source-modal-options">
            ${e.options.map(s=>y`
              <button
                type="button"
                class="layer-source-modal-option ${this.optionEquals(s,e.selectedOption)?"selected":""}"
                ?disabled=${t}
                @click=${()=>this.handleLayerSourceModalOptionClick(s)}
              >${s}</button>
            `)}
          </div>
          <div class="layer-source-modal-actions">
            <button type="button" class="layer-source-modal-close" @click=${this.closeLayerSourceChooser}>Close</button>
          </div>
        </div>
      </div>
    `:l}openLayerSourceChooser(t){t&&(this.activeLayerSourceChooser={entityId:t.entityId,layerNumber:t.layerNumber,options:t.options,selectedOption:this.resolveSelectedOption(t.entity,t.options)},this.requestUpdate())}closeLayerSourceChooser=()=>{this.activeLayerSourceChooser=void 0,this.requestUpdate()};handleLayerSourceModalBackdropClick=()=>{this.closeLayerSourceChooser()};async handleLayerSourceModalOptionClick(t){let e=this.activeLayerSourceChooser,s=t.trim();!e||!s||(await this.selectLayerSourceOption(e.entityId,s),this.closeLayerSourceChooser())}fitLayersToViewport(t,e,s){return t.length===0?[]:t.map(r=>{if(!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.width)||!Number.isFinite(r.height)||r.width<=0||r.height<=0)return;let i=Math.max(0,r.x),n=Math.max(0,r.y),a=Math.min(e,r.x+r.width),c=Math.min(s,r.y+r.height),d=a-i,p=c-n;if(!(d<=0||p<=0))return{...r,x:i,y:n,width:d,height:p}}).filter(r=>!!r)}readNumberAttribute(t,e,s){let r=t.attributes[e];if(typeof r=="number"&&Number.isFinite(r))return r;if(typeof r=="string"){let i=Number.parseFloat(r);if(Number.isFinite(i))return i}return s}readStringListAttribute(t,e){if(!t)return[];let s=t.attributes[e];return Array.isArray(s)?s.filter(r=>typeof r=="string"):[]}resolveSelectedOption(t,e){let s=t.state?.trim(),r=[s,this.readStringAttribute(t,"current_option"),this.readStringAttribute(t,"selected_option"),this.readStringAttribute(t,"source"),this.readStringAttribute(t,"current_source")].filter(i=>!!i);for(let i of r){let n=e.find(d=>d===i);if(n)return n;let a=i.toLowerCase(),c=e.find(d=>d.toLowerCase()===a);if(c)return c}return s??""}readStringAttribute(t,e){let s=t.attributes[e];return typeof s!="string"?void 0:s.trim()||void 0}optionEquals(t,e){if(t===e)return!0;let s=t.trim().toLowerCase(),r=e.trim().toLowerCase();return s===r}readLayoutPayload(t,e){if(!t||!e){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!t,hasLayersEntity:!!e});return}let s=this.readFirstScreen(t);if(!s){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let r=this.readFiniteNumber(s.width??s.w),i=this.readFiniteNumber(s.height??s.h);if(!r||!i||r<=0||i<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:r,screenHeight:i,firstScreen:s});return}let n=this.readLayersCollection(e),a=n.map((c,d)=>this.normalizeLayoutLayer(c,d)).filter(c=>!!c);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:a.length,screenWidth:r,screenHeight:i}),{screenWidth:r,screenHeight:i,layers:a}}readFirstScreen(t){let e=[t.state,t.attributes.screens,t.attributes.screen_list,t.attributes.screen,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let s of e){let r=this.parseStructuredValue(s);if(Array.isArray(r)&&r.length>0){let a=this.asRecord(r[0]);if(a)return a}let i=this.asRecord(r);if(!i)continue;let n=i.screens;if(Array.isArray(n)&&n.length>0){let a=this.asRecord(n[0]);if(a)return a}if(this.readFiniteNumber(i.width??i.w)&&this.readFiniteNumber(i.height??i.h))return i}if(this.readFiniteNumber(t.attributes.width??t.attributes.w)&&this.readFiniteNumber(t.attributes.height??t.attributes.h))return t.attributes}readLayersCollection(t){let e=[t.state,t.attributes.layers,t.attributes.layer_list,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let s of e){let r=this.parseStructuredValue(s);if(Array.isArray(r))return r;let i=this.asRecord(r);if(!i)continue;if(Array.isArray(i.layers))return i.layers;if(Array.isArray(i.layer_list))return i.layer_list;let n=this.asRecord(i.result);if(n&&Array.isArray(n.layers))return n.layers;let a=this.asRecord(i.data);if(a&&Array.isArray(a.layers))return a.layers;let c=Object.values(i).map(d=>this.asRecord(d)).filter(d=>!!d).filter(d=>!!this.asRecord(d.general)&&!!this.asRecord(d.window));if(c.length>0)return c;if(this.asRecord(i.general)&&this.asRecord(i.window))return[i]}return[]}parseStructuredValue(t){if(typeof t!="string")return t;try{return JSON.parse(t)}catch{return t}}asRecord(t){if(!(!t||typeof t!="object"||Array.isArray(t)))return t}readFiniteNumber(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){let e=Number.parseFloat(t);if(Number.isFinite(e))return e}}normalizeLayoutLayer(t,e){let s=this.asRecord(t);if(!s){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:e,value:t});return}let r=this.asRecord(s.general),i=this.asRecord(s.window),n=this.asRecord(s.audioStatus);if(!r||!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:e,hasGeneral:!!r,hasWindow:!!i,layer:s});return}let a=this.readFiniteNumber(i.width),c=this.readFiniteNumber(i.height),d=this.readFiniteNumber(i.x)??0,p=this.readFiniteNumber(i.y)??0;if(!a||!c||a<=0||c<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:e,width:a,height:c,windowData:i});return}let u=r.layerId;if(typeof u!="string"&&typeof u!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:e,layerId:u,general:r});return}let g=this.readFiniteNumber(r.zorder);if(g===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:e,zorder:r.zorder,general:r});return}let f=typeof r.name=="string"?r.name:void 0,b=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:e,layerId:u,x:d,y:p,width:a,height:c,zValue:g,source:f,audioOpen:b}),{id:String(u),x:d,y:p,width:a,height:c,z:g,source:f,audioOpen:b}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(t,e){if(this.isLayoutDebugEnabled()){if(e===void 0){console.debug("[NovastarCard][layout]",t);return}console.debug("[NovastarCard][layout]",t,e)}}buildRelevantStateSignature(t){if(!t)return"";let e=new Set,s=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of s){let a=this.config?.[n];a&&e.add(a);let c=this.resolvedEntities[n];c&&e.add(c)}e.add("switch.novastar_h2_power_screen_output");let r=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(t.states))r.test(n)&&e.add(n);return Array.from(e).sort().map(n=>{let a=t.states[n];if(!a)return`${n}:missing`;let c=this.readStringListAttribute(a,"options").join("|"),d=this.readStringAttribute(a,"current_option")??"",p=this.readStringAttribute(a,"selected_option")??"",u=this.readStringAttribute(a,"source")??"",g=this.readStringAttribute(a,"current_source")??"";return`${n}:${a.state}:${c}:${d}:${p}:${u}:${g}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(t){await new Promise(e=>{window.setTimeout(()=>e(),t)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(t=>({entityId:t,entity:this.hass?.states[t]})).filter(t=>!!t.entity).map(t=>{let e=this.readStringListAttribute(t.entity,"options");return{...t,options:e,layerNumber:this.getLayerNumber(t.entityId)}}).filter(t=>t.options.length>0&&t.entity.state!=="unavailable"&&t.entity.state!=="unknown").sort((t,e)=>t.layerNumber-e.layerNumber):[]}getLayerSourceEntityIds(){let t=/^select\..*_layer_\d+_source$/,e=this.resolvedLayerSourceEntities,s=this.hass?Object.keys(this.hass.states).filter(r=>t.test(r)):[];return e.length===0?s:s.length===0?e:Array.from(new Set([...e,...s]))}getLayerNumber(t){let e=t.match(/_layer_(\d+)_source$/);if(!e)return Number.MAX_SAFE_INTEGER;let s=Number.parseInt(e[1],10);return Number.isFinite(s)?s:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.hass.states[e];if(s&&s.state!=="on")return;let r=this.getEntityId("brightness_entity");if(!r)return;let i=t.target,n=Number.parseFloat(i.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:r,value:n})}async handlePowerToggle(){if(!this.hass)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e)return;let r=(this.optimisticPowerState??e.state)!=="on";this.optimisticPowerState=r?"on":"off",this.requestUpdate();let i=r?"turn_on":"turn_off";try{await this.hass.callService?.("switch",i,{entity_id:t})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetButtonClick(t){if(!this.hass)return;let e=this.getEntityId("preset_entity"),s=t.trim();!e||!s||(await this.hass.callService?.("select","select_option",{entity_id:e,option:s}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(t){if(!this.hass)return;let e=t.target,s=e.dataset.entityId,r=e.value?.trim();!s||!r||await this.selectLayerSourceOption(s,r)}async selectLayerSourceOption(t,e){this.hass&&await this.hass.callService?.("select","select_option",{entity_id:t,option:e})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e){this.optimisticPowerState=void 0;return}e.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let s=this.resolvedEntities[t];if(s&&s.trim())return s}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let s=e.filter(a=>{if(!a||typeof a!="object")return!1;let c=a;return c.device_id===t&&!c.disabled_by&&!c.hidden_by&&typeof c.entity_id=="string"}).map(a=>a.entity_id),r=/^select\..*_layer_\d+_source$/,i=s.filter(a=>r.test(a)).sort((a,c)=>this.getLayerNumber(a)-this.getLayerNumber(c)),n={power_entity:this.pickEntity(s,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(s,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(s,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(s,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(s,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(s,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(s,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(s,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(s,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(s,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=i,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,s){for(let r of e){let i=t.find(n=>r.test(n));if(i)return i}for(let r of s){let i=`${r}.`,n=t.find(a=>a.startsWith(i));if(n)return n}}},ye={header:"Header",display_mode:"Display mode",theme:"Theme styling",show_header_in_compact:"Show header in Compact mode",device_id:"Device",power_entity:"Power entity",preset_entity:"Preset selection entity",screens_entity:"Screens entity",layers_entity:"Layers entity",controller_entity:"Controller entity",status_entity:"Status entity",brightness_entity:"Brightness entity",temperature_entity:"Temperature entity"},Pt=class extends x{hass;config={type:"custom:novastar-h-series-card"};attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e,this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId()}render(){if(!this.hass)return l;let t={display_mode:"standard",theme:"nova",...this.config};return y`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${this.buildSchema()}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.handleValueChanged}
      ></ha-form>
    `}buildSchema(){let t=this.config.display_mode??"standard",e=!!(this.config.power_entity||this.config.preset_entity||this.config.screens_entity||this.config.layers_entity||this.config.controller_entity||this.config.status_entity||this.config.brightness_entity||this.config.temperature_entity),s=[{name:"header",selector:{text:{placeholder:"Novastar H Series"}}},{name:"display_mode",required:!0,selector:{select:{mode:"dropdown",options:[{value:"detailed",label:"Detailed"},{value:"standard",label:"Standard"},{value:"compact",label:"Compact"}]}}},{name:"theme",required:!0,selector:{select:{mode:"dropdown",options:[{value:"nova",label:"Nova (default)"},{value:"ha",label:"Home Assistant theme"}]}}}];return t==="compact"&&s.push({name:"show_header_in_compact",selector:{boolean:{}}}),s.push({name:"device_id",selector:{device:{filter:{integration:"novastar_h"}}}}),s.push({name:"",type:"expandable",title:"Override entities",flatten:!0,expanded:e,schema:[{name:"power_entity",selector:{entity:{}}},{name:"preset_entity",selector:{entity:{}}},{name:"screens_entity",selector:{entity:{}}},{name:"layers_entity",selector:{entity:{}}},{name:"controller_entity",selector:{entity:{}}},{name:"status_entity",selector:{entity:{}}},{name:"brightness_entity",selector:{entity:{}}},{name:"temperature_entity",selector:{entity:{}}}]}),s}computeLabel=t=>ye[t.name]??t.name;handleValueChanged=t=>{t.stopPropagation();let e={...t.detail.value};e.type="custom:novastar-h-series-card",e.display_mode==="standard"&&delete e.display_mode,e.theme==="nova"&&delete e.theme,e.show_header_in_compact!==!0&&delete e.show_header_in_compact;let s=["header","device_id","power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let r of s){let i=e[r];(i==null||typeof i=="string"&&i.trim()==="")&&delete e[r]}this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))};async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(r=>{if(!r||typeof r!="object")return!1;let i=r;return i.platform==="novastar_h"&&typeof i.device_id=="string"&&!i.disabled_by&&!i.hidden_by}).map(r=>r.device_id)[0];if(!e)return;let s={...this.config,type:"custom:novastar-h-series-card",device_id:e};this.config=s,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}catch{}}}static styles=ht`
    ha-form {
      display: block;
    }
  `};try{customElements.define("novastar-h-series-card",Mt)}catch{}try{customElements.define("novastar-h-series-card-editor",Pt)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{Mt as NovastarHSeriesCard};
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
