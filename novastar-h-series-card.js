var dt=globalThis,lt=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),zt=new WeakMap,Y=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(lt&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&zt.set(e,t))}return t}toString(){return this.cssText}},Ht=o=>new Y(typeof o=="string"?o:o+"",void 0,mt),ht=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new Y(e,o,mt)},Ot=(o,t)=>{if(lt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),s=dt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)}},bt=lt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ht(e)})(o):o;var{is:re,defineProperty:se,getOwnPropertyDescriptor:ie,getOwnPropertyNames:ne,getOwnPropertySymbols:oe,getPrototypeOf:ae}=Object,ut=globalThis,Dt=ut.trustedTypes,ce=Dt?Dt.emptyScript:"",de=ut.reactiveElementPolyfillSupport,X=(o,t)=>o,_t={toAttribute(o,t){switch(t){case Boolean:o=o?ce:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Tt=(o,t)=>!re(o,t),Bt={attribute:!0,type:String,converter:_t,reflect:!1,useDefault:!1,hasChanged:Tt};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&se(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:i}=ie(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let a=s?.call(this);i?.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bt}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;let t=ae(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){let e=this.properties,r=[...ne(e),...oe(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(bt(s))}else t!==void 0&&e.push(bt(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:_t).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:_t;this._$Em=s;let a=n.fromAttribute(e,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,r,s=!1,i){if(t!==void 0){let n=this.constructor;if(s===!1&&(i=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??Tt)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:n}=i,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[X("elementProperties")]=new Map,x[X("finalized")]=new Map,de?.({ReactiveElement:x}),(ut.reactiveElementVersions??=[]).push("2.1.2");var Lt=globalThis,Ft=o=>o,pt=Lt.trustedTypes,Ut=pt?pt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Xt="?"+C,le=`<${Xt}>`,z=document,J=()=>z.createComment(""),Q=o=>o===null||typeof o!="object"&&typeof o!="function",Ct=Array.isArray,he=o=>Ct(o)||typeof o?.[Symbol.iterator]=="function",$t=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,jt=/>/g,R=RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,qt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,kt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=kt(1),et=kt(2),_e=kt(3),H=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Kt=new WeakMap,I=z.createTreeWalker(z,129);function Jt(o,t){if(!Ct(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}var ue=(o,t)=>{let e=o.length-1,r=[],s,i=t===2?"<svg>":t===3?"<math>":"",n=G;for(let a=0;a<e;a++){let c=o[a],d,p,l=-1,y=0;for(;y<c.length&&(n.lastIndex=y,p=n.exec(c),p!==null);)y=n.lastIndex,n===G?p[1]==="!--"?n=Vt:p[1]!==void 0?n=jt:p[2]!==void 0?(Gt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=R):p[3]!==void 0&&(n=R):n===R?p[0]===">"?(n=s??G,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?R:p[3]==='"'?qt:Wt):n===qt||n===Wt?n=R:n===Vt||n===jt?n=G:(n=R,s=void 0);let f=n===R&&o[a+1].startsWith("/>")?" ":"";i+=n===G?c+le:l>=0?(r.push(d),c.slice(0,l)+Yt+c.slice(l)+C+f):c+C+(l===-2?a:f)}return[Jt(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Z=class o{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,n=0,a=t.length-1,c=this.parts,[d,p]=ue(t,e);if(this.el=o.createElement(d,r),I.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=I.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let l of s.getAttributeNames())if(l.endsWith(Yt)){let y=p[n++],f=s.getAttribute(l).split(C),b=/([.?@])?(.*)/.exec(y);c.push({type:1,index:i,name:b[2],strings:f,ctor:b[1]==="."?wt:b[1]==="?"?St:b[1]==="@"?At:T}),s.removeAttribute(l)}else l.startsWith(C)&&(c.push({type:6,index:i}),s.removeAttribute(l));if(Gt.test(s.tagName)){let l=s.textContent.split(C),y=l.length-1;if(y>0){s.textContent=pt?pt.emptyScript:"";for(let f=0;f<y;f++)s.append(l[f],J()),I.nextNode(),c.push({type:2,index:++i});s.append(l[y],J())}}}else if(s.nodeType===8)if(s.data===Xt)c.push({type:2,index:i});else{let l=-1;for(;(l=s.data.indexOf(C,l+1))!==-1;)c.push({type:7,index:i}),l+=C.length-1}i++}}static createElement(t,e){let r=z.createElement("template");return r.innerHTML=t,r}};function B(o,t,e=o,r){if(t===H)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl,i=Q(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=B(o,s._$AS(o,t.values),s,r)),t}var xt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);I.currentNode=s;let i=I.nextNode(),n=0,a=0,c=r[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new tt(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new Et(i,this,t)),this._$AV.push(d),c=r[++a]}n!==c?.index&&(i=I.nextNode(),n++)}return I.currentNode=z,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},tt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),Q(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):he(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Z.createElement(Jt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{let i=new xt(s,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new Z(t)),e}k(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,s=0;for(let i of t)s===e.length?e.push(r=new o(this.O(J()),this.O(J()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Ft(t).nextSibling;Ft(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,e=this,r,s){let i=this.strings,n=!1;if(i===void 0)t=B(this,t,e,0),n=!Q(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{let a=t,c,d;for(t=i[0],c=0;c<i.length-1;c++)d=B(this,a[r+c],e,c),d===H&&(d=this._$AH[c]),n||=!Q(d)||d!==this._$AH[c],d===h?t=h:t!==h&&(t+=(d??"")+i[c+1]),this._$AH[c]=d}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},wt=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},St=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},At=class extends T{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??h)===H)return;let r=this._$AH,s=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==h&&(r===h||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Et=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}};var pe=Lt.litHtmlPolyfillSupport;pe?.(Z,tt),(Lt.litHtmlVersions??=[]).push("3.3.2");var Qt=(o,t,e)=>{let r=e?.renderBefore??t,s=r._$litPart$;if(s===void 0){let i=e?.renderBefore??null;r._$litPart$=s=new tt(t.insertBefore(J(),i),i,void 0,e??{})}return s._$AI(o),s};var Mt=globalThis,w=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};w._$litElement$=!0,w.finalized=!0,Mt.litElementHydrateSupport?.({LitElement:w});var ve=Mt.litElementPolyfillSupport;ve?.({LitElement:w});(Mt.litElementVersions??=[]).push("4.2.2");var Nt=class o extends w{static LAYOUT_BUILD_MARKER="v1.0.11-1-g091cbde-dirty";_hass;config;optimisticPowerState;resolvedEntities={};resolvedLayerSourceEntities=[];resolvedDeviceId;resolvingDeviceId;resolvedForHass;lastRelevantStateSignature="";activeLayerSourceChooser;static properties={hass:{attribute:!1,noAccessor:!0},config:{attribute:!1}};get hass(){return this._hass}set hass(t){let e=this._hass;this._hass=t;let r=this.buildRelevantStateSignature(t),s=r!==this.lastRelevantStateSignature;this.lastRelevantStateSignature=r,(e!==t||s)&&this.requestUpdate("hass",e)}setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e}getCardSize(){return 3}static async getConfigElement(){return document.createElement("novastar-h-series-card-editor")}static getStubConfig(){return{type:"custom:novastar-h-series-card",header:"Novastar H Series"}}updated(){this.ensureResolvedEntities(),this.syncOptimisticPowerState()}render(){if(!this.config)return g`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;if(!this.hass)return g`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;let t=this.getEntityId("controller_entity");if(!t){let _=this.config.device_id&&this.resolvingDeviceId===this.config.device_id?"Resolving entities for selected device...":"Set a device_id or controller_entity in card configuration.";return g`<ha-card><div class="content">${_}</div></ha-card>`}let e=this.hass.states[t];if(!e)return g`<ha-card><div class="content">Entity not found: ${t}</div></ha-card>`;let r=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",s=this.getEntityId("preset_entity"),i=this.getEntityId("screens_entity"),n=this.getEntityId("layers_entity"),a=this.getEntityId("status_entity"),c=this.getEntityId("brightness_entity"),d=this.getEntityId("temperature_entity"),p=this.hass.states[r],y=(this.optimisticPowerState??p?.state)==="on",f=!!p&&!y,b=a?this.hass.states[a]:void 0,S=s?this.hass.states[s]:void 0,rt=i?this.hass.states[i]:void 0,v=n?this.hass.states[n]:void 0,m=c?this.hass.states[c]:void 0,A=d?this.hass.states[d]:void 0,k=m?Number.parseFloat(m.state):Number.NaN,F=m?this.readNumberAttribute(m,"min",0):0,U=m?this.readNumberAttribute(m,"max",100):100,V=m?this.readNumberAttribute(m,"step",1):1,st=!!m&&Number.isFinite(k),j=m?this.readStringAttribute(m,"unit_of_measurement")??"":"",M=this.readStringListAttribute(S,"options"),E=S?this.resolveSelectedOption(S,M):"",W=this.readLayoutPayload(rt,v),q=b?`${e.state} (${b.state})`:e.state,it=A?this.readStringAttribute(A,"unit_of_measurement")??"":"",L=this.getDisplayMode(),vt=this.getThemeMode(),N=L==="compact",P=L==="detailed",gt=L==="standard",nt=this.config.show_header_in_compact===!0,ot=!N||nt,u=N&&!nt,at=this.config.header??"Novastar H Series",$=["content",`content--${L}`,u?"content--bare":""].filter(Boolean).join(" ");return g`
      <ha-card class="nova-card nova-card--${L} nova-card--theme-${vt} ${y?"is-on":"is-off"}">
        ${ot?g`
              <div class="header-row">
                <div class="header-lead">
                  ${!P&&p?g`<span
                        class="status-dot ${y?"status-dot--on":"status-dot--off"}"
                        title=${q}
                      ></span>`:h}
                  <div class="header">${at}</div>
                </div>
                <div class="header-actions">
                  ${gt&&st?this.renderHeaderBrightnessToggle(F,U,V,k,f,j):h}
                  ${p?this.renderPowerButton(y):h}
                </div>
              </div>
            `:h}
        <div class=${$}>
          ${N?h:P?g`
                  <div class="row">
                    <span class="label">Status</span>
                    <span class="value status-value status-value--${y?"on":"off"}">${q}</span>
                  </div>
                  ${A?g`
                        <div class="row">
                          <span class="label">Temperature</span>
                          <span class="value">${A.state}${it}</span>
                        </div>
                      `:h}
                  ${m?g`
                        <div class="row input-row">
                          <span class="label">Brightness</span>
                          ${st?this.renderBrightnessControl(F,U,V,k,f,j):g`<span class="value">${m.state}${j}</span>`}
                        </div>
                      `:h}
                  ${S?g`
                        <div class="row input-row preset-row">
                          <span class="label">Preset</span>
                          ${M.length>0?this.renderPresetChips(M,E,f):g`<span class="value">${S.state}</span>`}
                        </div>
                      `:h}
                `:g`
                  ${S&&M.length>0?g`<div class="standard-block standard-block--chips">${this.renderPresetChips(M,E,f)}</div>`:h}
                `}
          ${W?this.renderLayoutPreview(W,u):N?g`<div class="row"><span class="label">Layout</span><span class="value">Unavailable</span></div>`:h}
          ${P?this.renderVersionFooter():h}
        </div>
      </ha-card>
    `}getDisplayMode(){let t=this.config?.display_mode;return t==="detailed"||t==="compact"?t:"standard"}getThemeMode(){return this.config?.theme==="ha"?"ha":"nova"}renderPowerButton(t){return g`
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
    `}renderHeaderBrightnessToggle(t,e,r,s,i,n){let a=e-t||1,c=Math.max(0,Math.min(100,Math.round((s-t)/a*100))),d=n?`${Math.round(s)}${n}`:`${c}%`;return g`
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
          min=${t}
          max=${e}
          step=${r}
          data-unit=${n}
          style=${`--nova-brightness-fill:${c}%`}
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
    `}handleBrightnessPopoverToggle=t=>{if(t.newState!=="open")return;let r=this.renderRoot,s=r.getElementById("nova-brightness-anchor"),i=r.getElementById("nova-brightness-popover");if(!s||!i)return;let n=s.getBoundingClientRect();i.style.top=`${Math.round(n.bottom+8)}px`,i.style.left="auto",i.style.right=`${Math.round(window.innerWidth-n.right)}px`};handleBrightnessInput=t=>{let e=t.target,r=Number.parseFloat(e.min),s=Number.parseFloat(e.max),i=Number.parseFloat(e.value);if(!Number.isFinite(i))return;let n=Number.isFinite(r)?r:0,c=(Number.isFinite(s)?s:100)-n||1,d=Math.max(0,Math.min(100,Math.round((i-n)/c*100)));e.style.setProperty("--nova-brightness-fill",`${d}%`);let l=e.closest(".brightness-popover")?.querySelector(".brightness-popover-value");if(l){let y=e.dataset.unit??"";l.textContent=y?`${Math.round(i)}${y}`:`${d}%`}};renderBrightnessControl(t,e,r,s,i,n){let a=e-t||1,c=Math.max(0,Math.min(100,Math.round((s-t)/a*100))),d=n?`${Math.round(s)}${n}`:`${c}%`;return g`
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
          step=${r}
          .value=${String(s)}
          .disabled=${i}
          ?disabled=${i}
          aria-label="Brightness"
          @change=${this.handleBrightnessChanged}
        />
        <span class="brightness-value">${d}</span>
      </div>
    `}renderPresetChips(t,e,r){return g`
      <div class="preset-chips" role="group" aria-label="Preset">
        ${t.map(s=>{let i=this.optionEquals(s,e);return g`
            <button
              type="button"
              class="preset-chip ${i?"preset-chip--active":""}"
              ?disabled=${r}
              aria-pressed=${i?"true":"false"}
              @click=${()=>this.handlePresetButtonClick(s)}
            >${s}</button>
          `})}
      </div>
    `}renderVersionFooter(){return g`<div class="version-footer">${o.LAYOUT_BUILD_MARKER}</div>`}static styles=ht`
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

    .header-actions {
      align-items: center;
      display: inline-flex;
      flex: none;
      gap: 10px;
    }

    .icon-button {
      align-items: center;
      background: transparent;
      border: 1px solid var(--nova-divider);
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--nova-muted);
      cursor: pointer;
      display: inline-flex;
      flex: none;
      height: var(--nova-touch);
      justify-content: center;
      padding: 0;
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.08s ease;
      width: var(--nova-touch);
      -webkit-tap-highlight-color: transparent;
    }

    .icon-button:hover {
      border-color: color-mix(in srgb, var(--nova-accent) 45%, var(--nova-divider));
      color: var(--nova-text);
    }

    .icon-button:active {
      transform: scale(0.94);
    }

    .icon-button:focus-visible {
      outline: 2px solid var(--nova-accent);
      outline-offset: 2px;
    }

    .icon-button:disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .icon-button--active {
      background: color-mix(in srgb, var(--nova-accent) 16%, transparent);
      border-color: var(--nova-accent);
      color: var(--nova-accent);
    }

    .icon-button-icon {
      fill: currentColor;
      height: 20px;
      width: 20px;
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
  `;renderLayoutPreview(t,e=!1){let r=t.screenWidth,s=t.screenHeight,i=this.fitLayersToViewport(t.layers,r,s).sort((v,m)=>v.z-m.z),n="#000000",a="#4a4a4a",c="#d9d9d9",d="#808080",p="#ffffff",l=this.getLayerSourceRows(),y=this.getLayerSourceLabelMap(),f=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",b=this.hass?.states[f],S=this.optimisticPowerState??b?.state,rt=!!b&&S!=="on";return g`
      <div class=${e?"layout-preview layout-preview--compact":"layout-preview"}>
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
            stroke=${a}
            stroke-width="1"
          ></rect>
          ${i.length===0?et`<text class="layout-empty" x=${r/2} y=${s/2} text-anchor="middle" dominant-baseline="middle">No layers detected</text>`:h}
          ${i.map((v,m)=>{let A=this.resolveLayerSourceRow(l,v.id,m),k=this.resolveLayerSourceLabel(y,v.id,m)??v.source?.trim()??v.id,F=v.x+v.width/2,U=v.y+v.height/2,V=Math.min(v.width,v.height),st=Math.max(54,r*.017),j=Math.max(V*.14,st),M=Math.max(24,v.height*.38),E=Math.min(j,M),W=Math.max(18,E*.35),q=Math.max(32,v.width*.9),it=Math.max(1,Math.floor((q-W*2)/Math.max(1,E*.62))),L=k.length<=it?k:`${k.slice(0,Math.max(1,it-1))}\u2026`,vt=L.length*E*.62,N=Math.min(q,vt+W*2),P=Math.max(28,E*1.35),gt=F-N/2,nt=U-P/2,ot=Math.max(6,P*.25),u=Math.max(51,Math.min(138,V*.27)),at=Math.max(10,u*.22),$=Math.max(v.x+4,v.x+v.width-u-at),_=Math.min(v.y+at,v.y+v.height-u-4),yt=$+u*.22,Zt=_+u*.34,ft=u*.18,te=u*.32,ee=[`${yt+ft},${_+u*.26}`,`${$+u*.68},${_+u*.16}`,`${$+u*.68},${_+u*.84}`,`${yt+ft},${_+u*.74}`].join(" "),O=$+u*.7,D=_+u*.5,Rt=v.audioOpen===!0,It=v.audioOpen===!1,K=Rt?"var(--success-color, #43a047)":It?"var(--secondary-text-color, #8a8a8a)":"color-mix(in srgb, var(--secondary-text-color, #8a8a8a) 55%, transparent)",ct=!!A&&!rt;return et`
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
                    x=${$}
                    y=${_}
                    width=${u}
                    height=${u}
                    rx=${u*.22}
                    ry=${u*.22}
                    fill="#111111"
                    fill-opacity="0.8"
                  ></rect>
                  <rect
                    x=${yt}
                    y=${Zt}
                    width=${ft}
                    height=${te}
                    fill=${K}
                  ></rect>
                  <polygon points=${ee} fill=${K}></polygon>
                  ${Rt?et`
                      <path
                        d=${`M ${O} ${D-u*.13} Q ${O+u*.12} ${D} ${O} ${D+u*.13}`}
                        fill="none"
                        stroke=${K}
                        stroke-width=${u*.06}
                        stroke-linecap="round"
                      ></path>
                      <path
                        d=${`M ${O+u*.1} ${D-u*.22} Q ${O+u*.28} ${D} ${O+u*.1} ${D+u*.22}`}
                        fill="none"
                        stroke=${K}
                        stroke-width=${u*.06}
                        stroke-linecap="round"
                      ></path>
                    `:h}
                  ${It?et`
                      <line
                        x1=${$+u*.7}
                        y1=${_+u*.24}
                        x2=${$+u*.92}
                        y2=${_+u*.76}
                        stroke=${K}
                        stroke-width=${u*.08}
                        stroke-linecap="round"
                      ></line>
                    `:h}
                </g>
                <rect
                  class=${ct?"layout-layer-hitbox":""}
                  x=${gt}
                  y=${nt}
                  width=${N}
                  height=${P}
                  rx=${ot}
                  ry=${ot}
                  fill="#111111"
                  fill-opacity="0.82"
                  @click=${ct?()=>this.openLayerSourceChooser(A):h}
                ></rect>
                <text
                  class=${ct?"layout-layer-hitbox":""}
                  x=${F}
                  y=${U}
                  font-weight="700"
                  style=${`fill:${p};font-size:${E}px;font-family:inherit;`}
                  text-anchor="middle"
                  dominant-baseline="middle"
                  @click=${ct?()=>this.openLayerSourceChooser(A):h}
                >${L}</text>
              </g>
            `})}
        </svg>
        ${this.activeLayerSourceChooser?this.renderLayerSourceChooser(rt):h}
      </div>
    `}getLayerSourceLabelMap(){let t=new Map;for(let e of this.getLayerSourceRows()){let r=this.resolveSelectedOption(e.entity,e.options).trim();r&&t.set(e.layerNumber,r)}return t}resolveLayerSourceLabel(t,e,r){let s=[],i=Number.parseInt(e,10);Number.isFinite(i)&&(s.push(i),s.push(i+1)),s.push(r),s.push(r+1);for(let n of s){let a=t.get(n)?.trim();if(a)return a}}resolveLayerSourceRow(t,e,r){let s=[],i=Number.parseInt(e,10);Number.isFinite(i)&&(s.push(i),s.push(i+1)),s.push(r),s.push(r+1);for(let n of s){let a=t.find(c=>c.layerNumber===n);if(a)return a}return t[r]}renderLayerSourceChooser(t){let e=this.activeLayerSourceChooser;return e?g`
      <div class="layer-source-modal" @click=${this.handleLayerSourceModalBackdropClick}>
        <div class="layer-source-modal-content" @click=${r=>r.stopPropagation()}>
          <div class="layer-source-modal-title">Layer ${e.layerNumber} Source</div>
          <div class="layer-source-modal-options">
            ${e.options.map(r=>g`
              <button
                type="button"
                class="layer-source-modal-option ${this.optionEquals(r,e.selectedOption)?"selected":""}"
                ?disabled=${t}
                @click=${()=>this.handleLayerSourceModalOptionClick(r)}
              >${r}</button>
            `)}
          </div>
          <div class="layer-source-modal-actions">
            <button type="button" class="layer-source-modal-close" @click=${this.closeLayerSourceChooser}>Close</button>
          </div>
        </div>
      </div>
    `:h}openLayerSourceChooser(t){t&&(this.activeLayerSourceChooser={entityId:t.entityId,layerNumber:t.layerNumber,options:t.options,selectedOption:this.resolveSelectedOption(t.entity,t.options)},this.requestUpdate())}closeLayerSourceChooser=()=>{this.activeLayerSourceChooser=void 0,this.requestUpdate()};handleLayerSourceModalBackdropClick=()=>{this.closeLayerSourceChooser()};async handleLayerSourceModalOptionClick(t){let e=this.activeLayerSourceChooser,r=t.trim();!e||!r||(await this.selectLayerSourceOption(e.entityId,r),this.closeLayerSourceChooser())}fitLayersToViewport(t,e,r){return t.length===0?[]:t.map(s=>{if(!Number.isFinite(s.x)||!Number.isFinite(s.y)||!Number.isFinite(s.width)||!Number.isFinite(s.height)||s.width<=0||s.height<=0)return;let i=Math.max(0,s.x),n=Math.max(0,s.y),a=Math.min(e,s.x+s.width),c=Math.min(r,s.y+s.height),d=a-i,p=c-n;if(!(d<=0||p<=0))return{...s,x:i,y:n,width:d,height:p}}).filter(s=>!!s)}readNumberAttribute(t,e,r){let s=t.attributes[e];if(typeof s=="number"&&Number.isFinite(s))return s;if(typeof s=="string"){let i=Number.parseFloat(s);if(Number.isFinite(i))return i}return r}readStringListAttribute(t,e){if(!t)return[];let r=t.attributes[e];return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}resolveSelectedOption(t,e){let r=t.state?.trim(),s=[r,this.readStringAttribute(t,"current_option"),this.readStringAttribute(t,"selected_option"),this.readStringAttribute(t,"source"),this.readStringAttribute(t,"current_source")].filter(i=>!!i);for(let i of s){let n=e.find(d=>d===i);if(n)return n;let a=i.toLowerCase(),c=e.find(d=>d.toLowerCase()===a);if(c)return c}return r??""}readStringAttribute(t,e){let r=t.attributes[e];return typeof r!="string"?void 0:r.trim()||void 0}optionEquals(t,e){if(t===e)return!0;let r=t.trim().toLowerCase(),s=e.trim().toLowerCase();return r===s}readLayoutPayload(t,e){if(!t||!e){this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity",{hasScreensEntity:!!t,hasLayersEntity:!!e});return}let r=this.readFirstScreen(t);if(!r){this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");return}let s=this.readFiniteNumber(r.width??r.w),i=this.readFiniteNumber(r.height??r.h);if(!s||!i||s<=0||i<=0){this.logLayoutDebug("readLayoutPayload: invalid screen dimensions",{screenWidth:s,screenHeight:i,firstScreen:r});return}let n=this.readLayersCollection(e),a=n.map((c,d)=>this.normalizeLayoutLayer(c,d)).filter(c=>!!c);return this.logLayoutDebug("readLayoutPayload: parsed layers summary",{rawLayerCount:n.length,renderedLayerCount:a.length,screenWidth:s,screenHeight:i}),{screenWidth:s,screenHeight:i,layers:a}}readFirstScreen(t){let e=[t.state,t.attributes.screens,t.attributes.screen_list,t.attributes.screen,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let r of e){let s=this.parseStructuredValue(r);if(Array.isArray(s)&&s.length>0){let a=this.asRecord(s[0]);if(a)return a}let i=this.asRecord(s);if(!i)continue;let n=i.screens;if(Array.isArray(n)&&n.length>0){let a=this.asRecord(n[0]);if(a)return a}if(this.readFiniteNumber(i.width??i.w)&&this.readFiniteNumber(i.height??i.h))return i}if(this.readFiniteNumber(t.attributes.width??t.attributes.w)&&this.readFiniteNumber(t.attributes.height??t.attributes.h))return t.attributes}readLayersCollection(t){let e=[t.state,t.attributes.layers,t.attributes.layer_list,t.attributes.value,t.attributes.data,t.attributes.layout_json,t.attributes.layout,t.attributes.screen_layout];for(let r of e){let s=this.parseStructuredValue(r);if(Array.isArray(s))return s;let i=this.asRecord(s);if(!i)continue;if(Array.isArray(i.layers))return i.layers;if(Array.isArray(i.layer_list))return i.layer_list;let n=this.asRecord(i.result);if(n&&Array.isArray(n.layers))return n.layers;let a=this.asRecord(i.data);if(a&&Array.isArray(a.layers))return a.layers;let c=Object.values(i).map(d=>this.asRecord(d)).filter(d=>!!d).filter(d=>!!this.asRecord(d.general)&&!!this.asRecord(d.window));if(c.length>0)return c;if(this.asRecord(i.general)&&this.asRecord(i.window))return[i]}return[]}parseStructuredValue(t){if(typeof t!="string")return t;try{return JSON.parse(t)}catch{return t}}asRecord(t){if(!(!t||typeof t!="object"||Array.isArray(t)))return t}readFiniteNumber(t){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){let e=Number.parseFloat(t);if(Number.isFinite(e))return e}}normalizeLayoutLayer(t,e){let r=this.asRecord(t);if(!r){this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object",{index:e,value:t});return}let s=this.asRecord(r.general),i=this.asRecord(r.window),n=this.asRecord(r.audioStatus);if(!s||!i){this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window",{index:e,hasGeneral:!!s,hasWindow:!!i,layer:r});return}let a=this.readFiniteNumber(i.width),c=this.readFiniteNumber(i.height),d=this.readFiniteNumber(i.x)??0,p=this.readFiniteNumber(i.y)??0;if(!a||!c||a<=0||c<=0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions",{index:e,width:a,height:c,windowData:i});return}let l=s.layerId;if(typeof l!="string"&&typeof l!="number"){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId",{index:e,layerId:l,general:s});return}let y=this.readFiniteNumber(s.zorder);if(y===void 0){this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder",{index:e,zorder:s.zorder,general:s});return}let f=typeof s.name=="string"?s.name:void 0,b=n?.isOpen===void 0?void 0:!!n.isOpen;return this.logLayoutDebug("normalizeLayoutLayer: accepted",{index:e,layerId:l,x:d,y:p,width:a,height:c,zValue:y,source:f,audioOpen:b}),{id:String(l),x:d,y:p,width:a,height:c,z:y,source:f,audioOpen:b}}isLayoutDebugEnabled(){return this.config?.debug_layout===!0}logLayoutDebug(t,e){if(this.isLayoutDebugEnabled()){if(e===void 0){console.debug("[NovastarCard][layout]",t);return}console.debug("[NovastarCard][layout]",t,e)}}buildRelevantStateSignature(t){if(!t)return"";let e=new Set,r=["power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let n of r){let a=this.config?.[n];a&&e.add(a);let c=this.resolvedEntities[n];c&&e.add(c)}e.add("switch.novastar_h2_power_screen_output");let s=/^select\..*_layer_\d+_source$/;for(let n of Object.keys(t.states))s.test(n)&&e.add(n);return Array.from(e).sort().map(n=>{let a=t.states[n];if(!a)return`${n}:missing`;let c=this.readStringListAttribute(a,"options").join("|"),d=this.readStringAttribute(a,"current_option")??"",p=this.readStringAttribute(a,"selected_option")??"",l=this.readStringAttribute(a,"source")??"",y=this.readStringAttribute(a,"current_source")??"";return`${n}:${a.state}:${c}:${d}:${p}:${l}:${y}`}).join("||")}reloadLayerSources(){this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvingDeviceId=void 0,this.requestUpdate()}async waitFor(t){await new Promise(e=>{window.setTimeout(()=>e(),t)})}getLayerSourceRows(){return this.hass?this.getLayerSourceEntityIds().map(t=>({entityId:t,entity:this.hass?.states[t]})).filter(t=>!!t.entity).map(t=>{let e=this.readStringListAttribute(t.entity,"options");return{...t,options:e,layerNumber:this.getLayerNumber(t.entityId)}}).filter(t=>t.options.length>0&&t.entity.state!=="unavailable"&&t.entity.state!=="unknown").sort((t,e)=>t.layerNumber-e.layerNumber):[]}getLayerSourceEntityIds(){let t=/^select\..*_layer_\d+_source$/,e=this.resolvedLayerSourceEntities,r=this.hass?Object.keys(this.hass.states).filter(s=>t.test(s)):[];return e.length===0?r:r.length===0?e:Array.from(new Set([...e,...r]))}getLayerNumber(t){let e=t.match(/_layer_(\d+)_source$/);if(!e)return Number.MAX_SAFE_INTEGER;let r=Number.parseInt(e[1],10);return Number.isFinite(r)?r:Number.MAX_SAFE_INTEGER}async handleBrightnessChanged(t){if(!this.hass)return;let e=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",r=this.hass.states[e];if(r&&r.state!=="on")return;let s=this.getEntityId("brightness_entity");if(!s)return;let i=t.target,n=Number.parseFloat(i.value);Number.isFinite(n)&&await this.hass.callService?.("number","set_value",{entity_id:s,value:n})}async handlePowerToggle(){if(!this.hass)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e)return;let s=(this.optimisticPowerState??e.state)!=="on";this.optimisticPowerState=s?"on":"off",this.requestUpdate();let i=s?"turn_on":"turn_off";try{await this.hass.callService?.("switch",i,{entity_id:t})}catch{this.optimisticPowerState=void 0,this.requestUpdate()}}async handlePresetButtonClick(t){if(!this.hass)return;let e=this.getEntityId("preset_entity"),r=t.trim();!e||!r||(await this.hass.callService?.("select","select_option",{entity_id:e,option:r}),this.reloadLayerSources(),await this.waitFor(350),this.reloadLayerSources())}async handleLayerSourceChanged(t){if(!this.hass)return;let e=t.target,r=e.dataset.entityId,s=e.value?.trim();!r||!s||await this.selectLayerSourceOption(r,s)}async selectLayerSourceOption(t,e){this.hass&&await this.hass.callService?.("select","select_option",{entity_id:t,option:e})}syncOptimisticPowerState(){if(!this.hass||!this.optimisticPowerState)return;let t=this.getEntityId("power_entity")??"switch.novastar_h2_power_screen_output",e=this.hass.states[t];if(!e){this.optimisticPowerState=void 0;return}e.state===this.optimisticPowerState&&(this.optimisticPowerState=void 0)}getEntityId(t){let e=this.config?.[t];if(e&&e.trim())return e;let r=this.resolvedEntities[t];if(r&&r.trim())return r}async ensureResolvedEntities(){if(!this.hass||!this.config)return;let t=this.config.device_id?.trim();if(!t){(this.resolvedDeviceId||Object.keys(this.resolvedEntities).length>0)&&(this.resolvedEntities={},this.resolvedLayerSourceEntities=[],this.resolvedDeviceId=void 0,this.resolvedForHass=void 0,this.requestUpdate());return}if(this.hass.callWS&&this.resolvingDeviceId!==t&&!(this.resolvedDeviceId===t&&this.resolvedForHass===this.hass)){this.resolvingDeviceId=t;try{let e=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(e))return;let r=e.filter(a=>{if(!a||typeof a!="object")return!1;let c=a;return c.device_id===t&&!c.disabled_by&&!c.hidden_by&&typeof c.entity_id=="string"}).map(a=>a.entity_id),s=/^select\..*_layer_\d+_source$/,i=r.filter(a=>s.test(a)).sort((a,c)=>this.getLayerNumber(a)-this.getLayerNumber(c)),n={power_entity:this.pickEntity(r,[/_power_screen_output$/,/_screen_output$/],["switch"]),preset_entity:this.pickEntity(r,[/_preset$/,/_layer_\d+_source$/],["select"]),screens_entity:this.pickEntity(r,[/_screens$/],["sensor"]),layers_entity:this.pickEntity(r,[/_layers$/],["sensor"]),controller_entity:this.pickEntity(r,[/_device_status$/],["sensor"]),status_entity:this.pickEntity(r,[/_signal_status$/],["sensor"]),brightness_entity:this.pickEntity(r,[/_brightness$/],["number","sensor"]),temperature_entity:this.pickEntity(r,[/_temperature_status$/,/_temp_status$/],["sensor"])};n.controller_entity||=this.pickEntity(r,[/^media_player\./],["media_player"]),n.controller_entity||=this.pickEntity(r,[/_status$/],["sensor"]),this.resolvedEntities=n,this.resolvedLayerSourceEntities=i,this.resolvedDeviceId=t,this.resolvedForHass=this.hass,this.requestUpdate()}catch{}finally{this.resolvingDeviceId===t&&(this.resolvingDeviceId=void 0)}}}pickEntity(t,e,r){for(let s of e){let i=t.find(n=>s.test(n));if(i)return i}for(let s of r){let i=`${s}.`,n=t.find(a=>a.startsWith(i));if(n)return n}}},ge={header:"Header",display_mode:"Display mode",theme:"Theme styling",show_header_in_compact:"Show header in Compact mode",device_id:"Device",power_entity:"Power entity",preset_entity:"Preset selection entity",screens_entity:"Screens entity",layers_entity:"Layers entity",controller_entity:"Controller entity",status_entity:"Status entity",brightness_entity:"Brightness entity",temperature_entity:"Temperature entity"},Pt=class extends w{hass;config={type:"custom:novastar-h-series-card"};attemptedAutoDeviceDefault=!1;static properties={hass:{attribute:!1},config:{attribute:!1}};setConfig(t){let e={...t};e.type||="custom:novastar-h-series-card",this.config=e,this.attemptedAutoDeviceDefault=!1}updated(){this.ensureDefaultDeviceId()}render(){if(!this.hass)return h;let t={display_mode:"standard",theme:"nova",...this.config};return g`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${this.buildSchema()}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.handleValueChanged}
      ></ha-form>
    `}buildSchema(){let t=this.config.display_mode??"standard",e=!!(this.config.power_entity||this.config.preset_entity||this.config.screens_entity||this.config.layers_entity||this.config.controller_entity||this.config.status_entity||this.config.brightness_entity||this.config.temperature_entity),r=[{name:"header",selector:{text:{placeholder:"Novastar H Series"}}},{name:"display_mode",required:!0,selector:{select:{mode:"dropdown",options:[{value:"detailed",label:"Detailed"},{value:"standard",label:"Standard"},{value:"compact",label:"Compact"}]}}},{name:"theme",required:!0,selector:{select:{mode:"dropdown",options:[{value:"nova",label:"Nova (default)"},{value:"ha",label:"Home Assistant theme"}]}}}];return t==="compact"&&r.push({name:"show_header_in_compact",selector:{boolean:{}}}),r.push({name:"device_id",selector:{device:{filter:{integration:"novastar_h"}}}}),r.push({name:"",type:"expandable",title:"Override entities",flatten:!0,expanded:e,schema:[{name:"power_entity",selector:{entity:{}}},{name:"preset_entity",selector:{entity:{}}},{name:"screens_entity",selector:{entity:{}}},{name:"layers_entity",selector:{entity:{}}},{name:"controller_entity",selector:{entity:{}}},{name:"status_entity",selector:{entity:{}}},{name:"brightness_entity",selector:{entity:{}}},{name:"temperature_entity",selector:{entity:{}}}]}),r}computeLabel=t=>ge[t.name]??t.name;handleValueChanged=t=>{t.stopPropagation();let e={...t.detail.value};e.type="custom:novastar-h-series-card",e.display_mode==="standard"&&delete e.display_mode,e.theme==="nova"&&delete e.theme,e.show_header_in_compact!==!0&&delete e.show_header_in_compact;let r=["header","device_id","power_entity","preset_entity","screens_entity","layers_entity","controller_entity","status_entity","brightness_entity","temperature_entity"];for(let s of r){let i=e[s];(i==null||typeof i=="string"&&i.trim()==="")&&delete e[s]}this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))};async ensureDefaultDeviceId(){if(!(this.attemptedAutoDeviceDefault||!this.hass?.callWS)){if(this.config.device_id?.trim()){this.attemptedAutoDeviceDefault=!0;return}this.attemptedAutoDeviceDefault=!0;try{let t=await this.hass.callWS({type:"config/entity_registry/list"});if(!Array.isArray(t))return;let e=t.filter(s=>{if(!s||typeof s!="object")return!1;let i=s;return i.platform==="novastar_h"&&typeof i.device_id=="string"&&!i.disabled_by&&!i.hidden_by}).map(s=>s.device_id)[0];if(!e)return;let r={...this.config,type:"custom:novastar-h-series-card",device_id:e};this.config=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}catch{}}}static styles=ht`
    ha-form {
      display: block;
    }
  `};try{customElements.define("novastar-h-series-card",Nt)}catch{}try{customElements.define("novastar-h-series-card-editor",Pt)}catch{}window.customCards=window.customCards||[];window.customCards.push({type:"novastar-h-series-card",name:"Novastar H Series Card",description:"Displays core status information for a Novastar H Series controller from device or entity config."});export{Nt as NovastarHSeriesCard};
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
