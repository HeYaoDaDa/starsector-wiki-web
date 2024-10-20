import{u as gt,a as wt,v as qt,c as Qe,g as Ct,b as Lt,Q as Tt}from"./QBtn.327974d0.js";import{c as P,a as f,h as L,r as x,i as Ze,o as U,b as N,n as Be,d as K,g as H,l as V,e as _e,f as D,j as de,w as C,k as kt,s as ze,H as Ae,m as O,p as xt,q as St,P as Et,t as Bt,u as _t,v as oe,x as pe,y as We,z as ge,A as Se,B as we,C as zt,D as et,E as $t,F as ne,G as Pt,I as Ot,J as Vt,K as Ht,L as Mt,M as B,N as E,O as j,Q as Dt,R as Qt}from"./index.95dc757e.js";import{h as I,a as tt,b as Fe,c as At}from"./render.e5caeb2c.js";var Wt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:o.value},I(l.default))}}),Ft=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:o.value,role:"toolbar"},I(l.default))}});function Rt(){const e=x(!Ze.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const lt=typeof ResizeObserver!="undefined",Re=lt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,i,t={width:-1,height:-1};function n(c){c===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),i){const{offsetWidth:c,offsetHeight:d}=i;(c!==t.width||d!==t.height)&&(t={width:c,height:d},l("resize",t))}}const{proxy:v}=H();if(v.trigger=n,lt===!0){let c;const d=a=>{i=v.$el.parentNode,i?(c=new ResizeObserver(n),c.observe(i),s()):a!==!0&&K(()=>{d(!0)})};return U(()=>{d()}),N(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),Be}else{let a=function(){o!==null&&(clearTimeout(o),o=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",n,V.passive),d=void 0)},w=function(){a(),i&&i.contentDocument&&(d=i.contentDocument.defaultView,d.addEventListener("resize",n,V.passive),s())};const{isHydrated:c}=Rt();let d;return U(()=>{K(()=>{i=v.$el,i&&w()})}),N(a),()=>{if(c.value===!0)return L("object",{class:"q--avoid-card-border",style:Re.style,tabindex:-1,type:"text/html",data:Re.url,"aria-hidden":"true",onLoad:w})}}}}),Nt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:i}}=H(),t=_e(de,D);if(t===D)return console.error("QHeader needs to be child of QLayout"),D;const n=x(parseInt(e.heightHint,10)),s=x(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||i.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?n.value:0;const u=n.value-t.scroll.value.position;return u>0?u:0}),d=f(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),a=f(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),w=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=f(()=>{const u=t.rows.value.top,b={};return u[0]==="l"&&t.left.space===!0&&(b[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(b[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function m(u,b){t.update("header",u,b)}function h(u,b){u.value!==b&&(u.value=b)}function S({height:u}){h(n,u),m("size",u)}function T(u){a.value===!0&&h(s,!0),o("focusin",u)}C(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),C(c,u=>{m("offset",u)}),C(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),C(s,u=>{t.animate(),o("reveal",u)}),C(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",c.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=tt(l.default,[]);return e.elevated===!0&&u.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(L(Ee,{debounce:0,onResize:S})),L("header",{class:w.value,style:q.value,onFocusin:T},u)}}}),It=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=f(()=>parseInt(e.lines,10)),i=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=f(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>L("div",{style:t.value,class:i.value},I(l.default))}}),ie=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:o.value},I(l.default))}});const $e={dark:{type:Boolean,default:null}};function Pe(e,l){return f(()=>e.dark===null?l.dark.isActive:e.dark)}var ae=P({name:"QItem",props:{...$e,...gt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:i}}=H(),t=Pe(e,i),{hasLink:n,linkAttrs:s,linkClass:v,linkTag:c,navigateOnClick:d}=wt(),a=x(null),w=x(null),q=f(()=>e.clickable===!0||n.value===!0||e.tag==="label"),m=f(()=>e.disable!==!0&&q.value===!0),h=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(n.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=f(()=>{if(e.insetLevel===void 0)return null;const b=i.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function T(b){m.value===!0&&(w.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),d(b))}function g(b){if(m.value===!0&&kt(b,[13,32])===!0){ze(b),b.qKeyEvent=!0;const y=new MouseEvent("click",b);y.qKeyEvent=!0,a.value.dispatchEvent(y)}o("keyup",b)}function u(){const b=tt(l.default,[]);return m.value===!0&&b.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:w})),b}return()=>{const b={ref:a,class:h.value,style:S.value,role:"listitem",onClick:T,onKeyup:g};return m.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,s.value)):q.value===!0&&(b["aria-disabled"]="true"),L(c.value,b,u())}}});const Xt=["ul","ol"];var Yt=P({name:"QList",props:{...$e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=H(),i=Pe(e,o.proxy.$q),t=f(()=>Xt.includes(e.tag)?null:"list"),n=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:n.value,role:t.value},I(l.default))}});function jt(e,l,o){let i;function t(){i!==void 0&&(Ae.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>o.value===!0,handler:l},Ae.add(i)}}}const Ut={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Kt=["beforeShow","show","beforeHide","hide"];function Gt({showing:e,canShow:l,hideOnRouteChange:o,handleShow:i,handleHide:t,processOnMount:n}){const s=H(),{props:v,emit:c,proxy:d}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(v.disable===!0||u!==void 0&&u.qAnchorHandled===!0||l!==void 0&&l(u)!==!0)return;const b=v["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!0),a=u,K(()=>{a===u&&(a=void 0)})),(v.modelValue===null||b===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),i!==void 0?i(u):c("show",u))}function h(u){if(v.disable===!0)return;const b=v["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!1),a=u,K(()=>{a===u&&(a=void 0)})),(v.modelValue===null||b===!1)&&S(u)}function S(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function T(u){v.disable===!0&&u===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:S)(a)}C(()=>v.modelValue,T),o!==void 0&&qt(s)===!0&&C(()=>d.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),n===!0&&U(()=>{T(v.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(d,g),g}const Jt=[Element,String],Zt=[null,document,document.body,document.scrollingElement,document.documentElement];function el(e,l){let o=Ct(l);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Zt.includes(o)?window:o}function ot(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function nt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let re;function qe(){if(re!==void 0)return re;const e=document.createElement("p"),l=document.createElement("div");Qe(e,{width:"100%",height:"200px"}),Qe(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const o=e.offsetWidth;l.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=l.clientWidth),l.remove(),re=o-i,re}function tl(e,l=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:l?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,Ce,Le,ee,Te=!1,Ne,Ie,Xe,R=null;function ll(e){ol(e)&&ze(e)}function ol(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const l=xt(e),o=e.shiftKey&&!e.deltaX,i=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||i?e.deltaY:e.deltaX;for(let n=0;n<l.length;n++){const s=l[n];if(tl(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ye(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ue(e){Te!==!0&&(Te=!0,requestAnimationFrame(()=>{Te=!1;const{height:l}=e.target,{clientHeight:o,scrollTop:i}=document.scrollingElement;(ee===void 0||l!==window.innerHeight)&&(ee=o-l,document.scrollingElement.scrollTop=i),i>ee&&(document.scrollingElement.scrollTop-=Math.ceil((i-ee)/8))}))}function je(e){const l=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(l);Ce=nt(window),Le=ot(window),Ne=l.style.left,Ie=l.style.top,Xe=window.location.href,l.style.left=`-${Ce}px`,l.style.top=`-${Le}px`,t!=="hidden"&&(t==="scroll"||l.scrollWidth>window.innerWidth)&&l.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||l.scrollHeight>window.innerHeight)&&l.classList.add("q-body--force-scrollbar-y"),l.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ue,V.passiveCapture),window.visualViewport.addEventListener("scroll",ue,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ye,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",ll,V.notPassive),e==="remove"&&(O.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ue,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ue,V.passiveCapture)):window.removeEventListener("scroll",Ye,V.passiveCapture)),l.classList.remove("q-body--prevent-scroll"),l.classList.remove("q-body--force-scrollbar-x"),l.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,l.style.left=Ne,l.style.top=Ie,window.location.href===Xe&&window.scrollTo(Ce,Le),ee=void 0)}function nl(e){let l="add";if(e===!0){if(Z++,R!==null){clearTimeout(R),R=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(l="remove",O.is.ios===!0&&O.is.nativeMobile===!0){R!==null&&clearTimeout(R),R=setTimeout(()=>{je(l),R=null},100);return}}je(l)}function il(){let e;return{preventBodyScroll(l){l!==e&&(e!==void 0||l===!0)&&(e=l,nl(l))}}}function al(){let e=null;const l=H();function o(){e!==null&&(clearTimeout(e),e=null)}return St(o),N(o),{removeTimeout:o,registerTimeout(i,t){o(),Lt(l)===!1&&(e=setTimeout(()=>{e=null,i()},t))}}}const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},rl=Object.keys(Oe);Oe.all=!0;function Ue(e){const l={};for(const o of rl)e[o]===!0&&(l[o]=!0);return Object.keys(l).length===0?Oe:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const ul=["INPUT","TEXTAREA"];function Ke(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&ul.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function sl(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Et.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ke(e,l,o){const i=Se(e);let t,n=i.left-l.event.x,s=i.top-l.event.y,v=Math.abs(n),c=Math.abs(s);const d=l.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",v>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&s>0?(t="down",v>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",v<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&n>0&&(t="right",v<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=n,v=0,n=0):(i.top-=s,c=0,s=0)}return{synthetic:a,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:i,direction:t,isFirst:l.event.isFirst,isFinal:o===!0,duration:Date.now()-l.event.time,distance:{x:v,y:c},offset:{x:n,y:s},delta:{x:i.left-l.event.lastX,y:i.top-l.event.lastY}}}}let dl=0;var xe=Bt({name:"touch-pan",beforeMount(e,{value:l,modifiers:o}){if(o.mouse!==!0&&O.has.touch!==!0)return;function i(n,s){o.mouse===!0&&s===!0?ze(n):(o.stop===!0&&ge(n),o.prevent===!0&&We(n))}const t={uid:"qvtp_"+dl++,handler:l,modifiers:o,direction:Ue(o),noop:Be,mouseStart(n){Ke(n,t)&&_t(n)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Ke(n,t)){const s=n.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(O.is.firefox===!0&&pe(e,!0),t.lastEvt=n,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&We(d),n.cancelBubble===!0&&ge(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}ge(n)}const{left:v,top:c}=Se(n);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(n){if(t.event===void 0)return;const s=Se(n),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=n;const d=t.event.mouse===!0,a=()=>{i(n,d);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),sl(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{S(),h()},50):S()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(n,t.event.mouse);const{payload:m,synthetic:h}=ke(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(n);return}const w=Math.abs(v),q=Math.abs(c);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&c<0||t.direction.down===!0&&w<q&&c>0||t.direction.left===!0&&w>q&&v<0||t.direction.right===!0&&w>q&&v>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(we(t,"temp"),O.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ke(n===void 0?t.lastEvt:n,t).payload);const{payload:v}=ke(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const n=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}O.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const o=e.__qtouchpan;o!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&o.end(),o.handler=l.value),o.direction=Ue(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),we(l,"main"),we(l,"temp"),O.is.firefox===!0&&pe(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});function se(e,l,o){return o<=l?l:Math.min(o,Math.max(l,e))}const Ge=150;var cl=P({name:"QDrawer",inheritAttrs:!1,props:{...Ut,...$e,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Kt,"onLayout","miniState"],setup(e,{slots:l,emit:o,attrs:i}){const t=H(),{proxy:{$q:n}}=t,s=Pe(e,n),{preventBodyScroll:v}=il(),{registerTimeout:c,removeTimeout:d}=al(),a=_e(de,D);if(a===D)return console.error("QDrawer needs to be child of QLayout"),D;let w,q=null,m;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),S=f(()=>e.mini===!0&&h.value!==!0),T=f(()=>S.value===!0?e.miniWidth:e.width),g=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=f(()=>e.persistent!==!0&&(h.value===!0||it.value===!0));function b(r,p){if(W(),r!==!1&&a.animate(),$(0),h.value===!0){const _=a.instances[te.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),Q(1),a.isContainer.value!==!0&&v(!0)}else Q(0),r!==!1&&he(!1);c(()=>{r!==!1&&he(!0),p!==!0&&o("show",r)},Ge)}function y(r,p){G(),r!==!1&&a.animate(),Q(0),$(X.value*T.value),be(),p!==!0?c(()=>{o("hide",r)},Ge):d()}const{show:k,hide:z}=Gt({showing:g,hideOnRouteChange:u,handleShow:b,handleHide:y}),{addToHistory:W,removeFromHistory:G}=jt(g,z,u),F={belowBreakpoint:h,hide:z},M=f(()=>e.side==="right"),X=f(()=>(n.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),Ve=x(0),Y=x(!1),ce=x(!1),He=x(T.value*X.value),te=f(()=>M.value===!0?"left":"right"),fe=f(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),ve=f(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")!==-1||n.platform.is.ios===!0&&a.isContainer.value===!0),J=f(()=>e.overlay===!1&&g.value===!0&&h.value===!1),it=f(()=>e.overlay===!0&&g.value===!0&&h.value===!1),at=f(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&Y.value===!1?" hidden":"")),rt=f(()=>({backgroundColor:`rgba(0,0,0,${Ve.value*.4})`})),Me=f(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ut=f(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),st=f(()=>{const r={};return a.header.space===!0&&Me.value===!1&&(ve.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&ut.value===!1&&(ve.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),dt=f(()=>{const r={width:`${T.value}px`,transform:`translateX(${He.value}px)`};return h.value===!0?r:Object.assign(r,st.value)}),ct=f(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),ft=f(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(ve.value===!0||J.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Me.value===!0?" q-drawer--top-padding":""))),vt=f(()=>{const r=n.lang.rtl===!0?e.side:te.value;return[[xe,yt,void 0,{[r]:!0,mouse:!0}]]}),mt=f(()=>{const r=n.lang.rtl===!0?te.value:e.side;return[[xe,De,void 0,{[r]:!0,mouse:!0}]]}),ht=f(()=>{const r=n.lang.rtl===!0?te.value:e.side;return[[xe,De,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){pt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(h,r=>{r===!0?(w=g.value,g.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?($(0),Q(0),be()):k(!1))}),C(()=>e.side,(r,p)=>{a.instances[p]===F&&(a.instances[p]=void 0,a[p].space=!1,a[p].offset=0),a.instances[r]=F,a[r].size=T.value,a[r].space=J.value,a[r].offset=fe.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),C(()=>e.behavior+e.breakpoint,me),C(a.isContainer,r=>{g.value===!0&&v(r!==!0),r===!0&&me()}),C(a.scrollbarWidth,()=>{$(g.value===!0?0:void 0)}),C(fe,r=>{A("offset",r)}),C(J,r=>{o("onLayout",r),A("space",r)}),C(M,()=>{$()}),C(T,r=>{$(),ye(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{ye(r,T.value)}),C(()=>n.lang.rtl,()=>{$()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(bt(),a.animate())}),C(S,r=>{o("miniState",r)});function $(r){r===void 0?K(()=>{r=g.value===!0?0:T.value,$(X.value*r)}):(a.isContainer.value===!0&&M.value===!0&&(h.value===!0||Math.abs(r)===T.value)&&(r+=X.value*a.scrollbarWidth.value),He.value=r)}function Q(r){Ve.value=r}function he(r){const p=r===!0?"remove":a.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function bt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,q=setTimeout(()=>{q=null,ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function yt(r){if(g.value!==!1)return;const p=T.value,_=se(r.distance.x,0,p);if(r.isFinal===!0){_>=Math.min(75,p)===!0?k():(a.animate(),Q(0),$(X.value*p)),Y.value=!1;return}$((n.lang.rtl===!0?M.value!==!0:M.value)?Math.max(p-_,0):Math.min(0,_-p)),Q(se(_/p,0,1)),r.isFirst===!0&&(Y.value=!0)}function De(r){if(g.value!==!0)return;const p=T.value,_=r.direction===e.side,le=(n.lang.rtl===!0?_!==!0:_)?se(r.distance.x,0,p):0;if(r.isFinal===!0){Math.abs(le)<Math.min(75,p)===!0?(a.animate(),Q(1),$(0)):z(),Y.value=!1;return}$(X.value*le),Q(se(1-le/p,0,1)),r.isFirst===!0&&(Y.value=!0)}function be(){v(!1),he(!0)}function A(r,p){a.update(e.side,r,p)}function pt(r,p){r.value!==p&&(r.value=p)}function ye(r,p){A("size",r===!0?e.miniWidth:p)}return a.instances[e.side]=F,ye(e.miniToOverlay,T.value),A("space",J.value),A("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),U(()=>{o("onLayout",J.value),o("miniState",S.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?b:y)(!1,!0)};if(a.totalWidth.value!==0){K(r);return}m=C(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?k(!1):r()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&be(),a.instances[e.side]===F&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(zt(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),vt.value)),r.push(Fe("div",{ref:"backdrop",class:at.value,style:rt.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>ht.value)));const p=S.value===!0&&l.mini!==void 0,_=[L("div",{...i,key:""+p,class:[ct.value,i.class]},p===!0?l.mini():I(l.default))];return e.elevated===!0&&g.value===!0&&_.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Fe("aside",{ref:"content",class:ft.value,style:dt.value},_,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>mt.value)),L("div",{class:"q-drawer-container"},r)}}}),fl=P({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=H(),i=_e(de,D);if(i===D)return console.error("QPageContainer needs to be child of QLayout"),D;et($t,!0);const t=f(()=>{const n={};return i.header.space===!0&&(n.paddingTop=`${i.header.size}px`),i.right.space===!0&&(n[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(n.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(n[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),n});return()=>L("div",{class:"q-page-container",style:t.value},I(l.default))}});const{passive:Je}=V,vl=["both","horizontal","vertical"];var ml=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>vl.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Jt},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,n;C(()=>e.scrollTarget,()=>{c(),v()});function s(){i!==null&&i();const w=Math.max(0,ot(t)),q=nt(t),m={top:w-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:w,left:q},o.directionChanged=o.direction!==h,o.delta=m,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),l("scroll",{...o})}function v(){t=el(n,e.scrollTarget),t.addEventListener("scroll",d,Je),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,Je),t=void 0)}function d(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:a}=H();return C(()=>a.$q.lang.rtl,s),U(()=>{n=a.$el.parentNode,v()}),N(()=>{i!==null&&i(),c()}),Object.assign(a,{trigger:d,getPosition:()=>o}),Be}}),hl=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:i}}=H(),t=x(null),n=x(i.screen.height),s=x(e.container===!0?0:i.screen.width),v=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),d=x(Ze.value===!0?0:qe()),a=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=f(()=>d.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=f(()=>d.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};v.value=k,e.onScroll!==void 0&&o("scroll",k)}}function S(y){const{height:k,width:z}=y;let W=!1;n.value!==k&&(W=!0,n.value=k,e.onScrollHeight!==void 0&&o("scrollHeight",k),g()),s.value!==z&&(W=!0,s.value=z),W===!0&&e.onResize!==void 0&&o("resize",y)}function T({height:y}){c.value!==y&&(c.value=y,g())}function g(){if(e.container===!0){const y=n.value>c.value?qe():0;d.value!==y&&(d.value=y)}}let u=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:d,totalWidth:f(()=>s.value+d.value),rows:f(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:v,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,k,z){b[y][k]=z}};if(et(de,b),qe()>0){let z=function(){y=null,k.classList.remove("hide-scrollbar")},W=function(){if(y===null){if(k.scrollHeight>i.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(z,300)},G=function(F){y!==null&&F==="remove"&&(clearTimeout(y),z()),window[`${F}EventListener`]("resize",W)},y=null;const k=document.body;C(()=>e.container!==!0?"add":"remove",G),e.container!==!0&&G("add"),Pt(()=>{G("remove")})}return()=>{const y=At(l.default,[L(ml,{onScroll:h}),L(Ee,{onResize:S})]),k=L("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(Ee,{onResize:T}),L("div",{class:"absolute-full",style:q.value},[L("div",{class:"scroll",style:m.value},[k])])]):k}}});const wl=Ot({name:"MainLayout",__name:"MainLayout",setup(e){const l=x(!1);function o(){l.value=!l.value}return(i,t)=>{const n=Vt("router-view");return Ht(),Mt(hl,{view:"lHh Lpr lFf"},{default:B(()=>[E(Nt,{elevated:""},{default:B(()=>[E(Ft,null,{default:B(()=>[E(Tt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:o}),E(Wt,null,{default:B(()=>t[1]||(t[1]=[j(" Quasar App ")])),_:1}),Dt("div",null,"Quasar v"+Qt(i.$q.version),1)]),_:1})]),_:1}),E(cl,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=s=>l.value=s),bordered:""},{default:B(()=>[E(Yt,null,{default:B(()=>[E(It,{header:""},{default:B(()=>t[2]||(t[2]=[j(" \u5206\u7C7B ")])),_:1}),E(ae,{clickable:"",to:{name:"ships"}},{default:B(()=>[E(ie,null,{default:B(()=>t[3]||(t[3]=[j(" \u8230\u8239\u6570\u636E ")])),_:1})]),_:1}),E(ae,{clickable:"",to:{name:"ship_systems"}},{default:B(()=>[E(ie,null,{default:B(()=>t[4]||(t[4]=[j(" \u6218\u672F\u7CFB\u7EDF ")])),_:1})]),_:1}),E(ae,{clickable:"",to:{name:"ship_mods"}},{default:B(()=>[E(ie,null,{default:B(()=>t[5]||(t[5]=[j(" \u8230\u8239\u63D2\u4EF6 ")])),_:1})]),_:1}),E(ae,{clickable:"",to:{name:"weapons"}},{default:B(()=>[E(ie,null,{default:B(()=>t[6]||(t[6]=[j(" \u6B66\u5668\u6570\u636E ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),E(fl,null,{default:B(()=>[E(n)]),_:1})]),_:1})}}});export{wl as default};
