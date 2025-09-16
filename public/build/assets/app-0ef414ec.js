var Da=!1,Ua=!1,wi=[];function eg(t){tg(t)}function tg(t){wi.includes(t)||wi.push(t),ng()}function Eu(t){let e=wi.indexOf(t);e!==-1&&wi.splice(e,1)}function ng(){!Ua&&!Da&&(Da=!0,queueMicrotask(ig))}function ig(){Da=!1,Ua=!0;for(let t=0;t<wi.length;t++)wi[t]();wi.length=0,Ua=!1}var ds,fs,sr,Mu,Fa=!0;function sg(t){Fa=!1,t(),Fa=!0}function rg(t){ds=t.reactive,sr=t.release,fs=e=>t.effect(e,{scheduler:n=>{Fa?eg(n):n()}}),Mu=t.raw}function Yc(t){fs=t}function og(t){let e=()=>{};return[i=>{let s=fs(i);return t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(r=>r())}),t._x_effects.add(s),e=()=>{s!==void 0&&(t._x_effects.delete(s),sr(s))},s},()=>{e()}]}var yu=[],Su=[],wu=[];function ag(t){wu.push(t)}function bu(t,e){typeof e=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,Su.push(e))}function lg(t){yu.push(t)}function cg(t,e,n){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(n)}function Tu(t,e){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([n,i])=>{(e===void 0||e.includes(n))&&(i.forEach(s=>s()),delete t._x_attributeCleanups[n])})}var Yl=new MutationObserver(jl),$l=!1;function ql(){Yl.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),$l=!0}function Au(){hg(),Yl.disconnect(),$l=!1}var Is=[],Zo=!1;function hg(){Is=Is.concat(Yl.takeRecords()),Is.length&&!Zo&&(Zo=!0,queueMicrotask(()=>{ug(),Zo=!1}))}function ug(){jl(Is),Is.length=0}function wt(t){if(!$l)return t();Au();let e=t();return ql(),e}var Zl=!1,ao=[];function dg(){Zl=!0}function fg(){Zl=!1,jl(ao),ao=[]}function jl(t){if(Zl){ao=ao.concat(t);return}let e=[],n=[],i=new Map,s=new Map;for(let r=0;r<t.length;r++)if(!t[r].target._x_ignoreMutationObserver&&(t[r].type==="childList"&&(t[r].addedNodes.forEach(o=>o.nodeType===1&&e.push(o)),t[r].removedNodes.forEach(o=>o.nodeType===1&&n.push(o))),t[r].type==="attributes")){let o=t[r].target,a=t[r].attributeName,l=t[r].oldValue,c=()=>{i.has(o)||i.set(o,[]),i.get(o).push({name:a,value:o.getAttribute(a)})},h=()=>{s.has(o)||s.set(o,[]),s.get(o).push(a)};o.hasAttribute(a)&&l===null?c():o.hasAttribute(a)?(h(),c()):h()}s.forEach((r,o)=>{Tu(o,r)}),i.forEach((r,o)=>{yu.forEach(a=>a(o,r))});for(let r of n)if(!e.includes(r)&&(Su.forEach(o=>o(r)),r._x_cleanups))for(;r._x_cleanups.length;)r._x_cleanups.pop()();e.forEach(r=>{r._x_ignoreSelf=!0,r._x_ignore=!0});for(let r of e)n.includes(r)||r.isConnected&&(delete r._x_ignoreSelf,delete r._x_ignore,wu.forEach(o=>o(r)),r._x_ignore=!0,r._x_ignoreSelf=!0);e.forEach(r=>{delete r._x_ignoreSelf,delete r._x_ignore}),e=null,n=null,i=null,s=null}function Cu(t){return or(rs(t))}function rr(t,e,n){return t._x_dataStack=[e,...rs(n||t)],()=>{t._x_dataStack=t._x_dataStack.filter(i=>i!==e)}}function $c(t,e){let n=t._x_dataStack[0];Object.entries(e).forEach(([i,s])=>{n[i]=s})}function rs(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?rs(t.host):t.parentNode?rs(t.parentNode):[]}function or(t){let e=new Proxy({},{ownKeys:()=>Array.from(new Set(t.flatMap(n=>Object.keys(n)))),has:(n,i)=>t.some(s=>s.hasOwnProperty(i)),get:(n,i)=>(t.find(s=>{if(s.hasOwnProperty(i)){let r=Object.getOwnPropertyDescriptor(s,i);if(r.get&&r.get._x_alreadyBound||r.set&&r.set._x_alreadyBound)return!0;if((r.get||r.set)&&r.enumerable){let o=r.get,a=r.set,l=r;o=o&&o.bind(e),a=a&&a.bind(e),o&&(o._x_alreadyBound=!0),a&&(a._x_alreadyBound=!0),Object.defineProperty(s,i,{...l,get:o,set:a})}return!0}return!1})||{})[i],set:(n,i,s)=>{let r=t.find(o=>o.hasOwnProperty(i));return r?r[i]=s:t[t.length-1][i]=s,!0}});return e}function Ru(t){let e=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,n=(i,s="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([r,{value:o,enumerable:a}])=>{if(a===!1||o===void 0)return;let l=s===""?r:`${s}.${r}`;typeof o=="object"&&o!==null&&o._x_interceptor?i[r]=o.initialize(t,l,r):e(o)&&o!==i&&!(o instanceof Element)&&n(o,l)})};return n(t)}function Lu(t,e=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(i,s,r){return t(this.initialValue,()=>pg(i,s),o=>Na(i,s,o),s,r)}};return e(n),i=>{if(typeof i=="object"&&i!==null&&i._x_interceptor){let s=n.initialize.bind(n);n.initialize=(r,o,a)=>{let l=i.initialize(r,o,a);return n.initialValue=l,s(r,o,a)}}else n.initialValue=i;return n}}function pg(t,e){return e.split(".").reduce((n,i)=>n[i],t)}function Na(t,e,n){if(typeof e=="string"&&(e=e.split(".")),e.length===1)t[e[0]]=n;else{if(e.length===0)throw error;return t[e[0]]||(t[e[0]]={}),Na(t[e[0]],e.slice(1),n)}}var Pu={};function pn(t,e){Pu[t]=e}function Oa(t,e){return Object.entries(Pu).forEach(([n,i])=>{Object.defineProperty(t,`$${n}`,{get(){let[s,r]=Nu(e);return s={interceptor:Lu,...s},bu(e,r),i(e,s)},enumerable:!1})}),t}function mg(t,e,n,...i){try{return n(...i)}catch(s){js(s,t,e)}}function js(t,e,n=void 0){Object.assign(t,{el:e,expression:n}),console.warn(`Alpine Expression Error: ${t.message}

${n?'Expression: "'+n+`"

`:""}`,e),setTimeout(()=>{throw t},0)}var Kr=!0;function gg(t){let e=Kr;Kr=!1,t(),Kr=e}function Ji(t,e,n={}){let i;return Ft(t,e)(s=>i=s,n),i}function Ft(...t){return Iu(...t)}var Iu=Du;function vg(t){Iu=t}function Du(t,e){let n={};Oa(n,t);let i=[n,...rs(t)];if(typeof e=="function")return _g(i,e);let s=Eg(i,e,t);return mg.bind(null,t,e,s)}function _g(t,e){return(n=()=>{},{scope:i={},params:s=[]}={})=>{let r=e.apply(or([i,...t]),s);lo(n,r)}}var jo={};function xg(t,e){if(jo[t])return jo[t];let n=Object.getPrototypeOf(async function(){}).constructor,i=/^[\n\s]*if.*\(.*\)/.test(t)||/^(let|const)\s/.test(t)?`(async()=>{ ${t} })()`:t,r=(()=>{try{return new n(["__self","scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`)}catch(o){return js(o,e,t),Promise.resolve()}})();return jo[t]=r,r}function Eg(t,e,n){let i=xg(e,n);return(s=()=>{},{scope:r={},params:o=[]}={})=>{i.result=void 0,i.finished=!1;let a=or([r,...t]);if(typeof i=="function"){let l=i(i,a).catch(c=>js(c,n,e));i.finished?(lo(s,i.result,a,o,n),i.result=void 0):l.then(c=>{lo(s,c,a,o,n)}).catch(c=>js(c,n,e)).finally(()=>i.result=void 0)}}}function lo(t,e,n,i,s){if(Kr&&typeof e=="function"){let r=e.apply(n,i);r instanceof Promise?r.then(o=>lo(t,o,n,i)).catch(o=>js(o,s,e)):t(r)}else typeof e=="object"&&e instanceof Promise?e.then(r=>t(r)):t(e)}var Kl="x-";function ps(t=""){return Kl+t}function Mg(t){Kl=t}var Ba={};function vt(t,e){return Ba[t]=e,{before(n){if(!Ba[n]){console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");return}const i=yi.indexOf(n)??yi.indexOf("DEFAULT");i>=0&&yi.splice(i,0,t)}}}function Jl(t,e,n){if(e=Array.from(e),t._x_virtualDirectives){let r=Object.entries(t._x_virtualDirectives).map(([a,l])=>({name:a,value:l})),o=Uu(r);r=r.map(a=>o.find(l=>l.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),e=e.concat(r)}let i={};return e.map(zu((r,o)=>i[r]=o)).filter(Hu).map(wg(i,n)).sort(bg).map(r=>Sg(t,r))}function Uu(t){return Array.from(t).map(zu()).filter(e=>!Hu(e))}var za=!1,Cs=new Map,Fu=Symbol();function yg(t){za=!0;let e=Symbol();Fu=e,Cs.set(e,[]);let n=()=>{for(;Cs.get(e).length;)Cs.get(e).shift()();Cs.delete(e)},i=()=>{za=!1,n()};t(n),i()}function Nu(t){let e=[],n=a=>e.push(a),[i,s]=og(t);return e.push(s),[{Alpine:lr,effect:i,cleanup:n,evaluateLater:Ft.bind(Ft,t),evaluate:Ji.bind(Ji,t)},()=>e.forEach(a=>a())]}function Sg(t,e){let n=()=>{},i=Ba[e.type]||n,[s,r]=Nu(t);cg(t,e.original,r);let o=()=>{t._x_ignore||t._x_ignoreSelf||(i.inline&&i.inline(t,e,s),i=i.bind(i,t,e,s),za?Cs.get(Fu).push(i):i())};return o.runCleanups=r,o}var Ou=(t,e)=>({name:n,value:i})=>(n.startsWith(t)&&(n=n.replace(t,e)),{name:n,value:i}),Bu=t=>t;function zu(t=()=>{}){return({name:e,value:n})=>{let{name:i,value:s}=ku.reduce((r,o)=>o(r),{name:e,value:n});return i!==e&&t(i,e),{name:i,value:s}}}var ku=[];function Ql(t){ku.push(t)}function Hu({name:t}){return Vu().test(t)}var Vu=()=>new RegExp(`^${Kl}([^:^.]+)\\b`);function wg(t,e){return({name:n,value:i})=>{let s=n.match(Vu()),r=n.match(/:([a-zA-Z0-9\-:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=e||t[n]||n;return{type:s?s[1]:null,value:r?r[1]:null,modifiers:o.map(l=>l.replace(".","")),expression:i,original:a}}}var ka="DEFAULT",yi=["ignore","ref","data","id","radio","tabs","switch","disclosure","menu","listbox","combobox","bind","init","for","mask","model","modelable","transition","show","if",ka,"teleport"];function bg(t,e){let n=yi.indexOf(t.type)===-1?ka:t.type,i=yi.indexOf(e.type)===-1?ka:e.type;return yi.indexOf(n)-yi.indexOf(i)}function Ds(t,e,n={}){t.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function ti(t,e){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(s=>ti(s,e));return}let n=!1;if(e(t,()=>n=!0),n)return;let i=t.firstElementChild;for(;i;)ti(i,e),i=i.nextElementSibling}function os(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}function Tg(){document.body||os("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Ds(document,"alpine:init"),Ds(document,"alpine:initializing"),ql(),ag(e=>ni(e,ti)),bu(e=>Zu(e)),lg((e,n)=>{Jl(e,n).forEach(i=>i())});let t=e=>!yo(e.parentElement,!0);Array.from(document.querySelectorAll(Xu())).filter(t).forEach(e=>{ni(e)}),Ds(document,"alpine:initialized")}var ec=[],Gu=[];function Wu(){return ec.map(t=>t())}function Xu(){return ec.concat(Gu).map(t=>t())}function Yu(t){ec.push(t)}function $u(t){Gu.push(t)}function yo(t,e=!1){return So(t,n=>{if((e?Xu():Wu()).some(s=>n.matches(s)))return!0})}function So(t,e){if(t){if(e(t))return t;if(t._x_teleportBack&&(t=t._x_teleportBack),!!t.parentElement)return So(t.parentElement,e)}}function Ag(t){return Wu().some(e=>t.matches(e))}var qu=[];function Cg(t){qu.push(t)}function ni(t,e=ti,n=()=>{}){yg(()=>{e(t,(i,s)=>{n(i,s),qu.forEach(r=>r(i,s)),Jl(i,i.attributes).forEach(r=>r()),i._x_ignore&&s()})})}function Zu(t){ti(t,e=>Tu(e))}var Ha=[],tc=!1;function nc(t=()=>{}){return queueMicrotask(()=>{tc||setTimeout(()=>{Va()})}),new Promise(e=>{Ha.push(()=>{t(),e()})})}function Va(){for(tc=!1;Ha.length;)Ha.shift()()}function Rg(){tc=!0}function ic(t,e){return Array.isArray(e)?qc(t,e.join(" ")):typeof e=="object"&&e!==null?Lg(t,e):typeof e=="function"?ic(t,e()):qc(t,e)}function qc(t,e){let n=s=>s.split(" ").filter(r=>!t.classList.contains(r)).filter(Boolean),i=s=>(t.classList.add(...s),()=>{t.classList.remove(...s)});return e=e===!0?e="":e||"",i(n(e))}function Lg(t,e){let n=a=>a.split(" ").filter(Boolean),i=Object.entries(e).flatMap(([a,l])=>l?n(a):!1).filter(Boolean),s=Object.entries(e).flatMap(([a,l])=>l?!1:n(a)).filter(Boolean),r=[],o=[];return s.forEach(a=>{t.classList.contains(a)&&(t.classList.remove(a),o.push(a))}),i.forEach(a=>{t.classList.contains(a)||(t.classList.add(a),r.push(a))}),()=>{o.forEach(a=>t.classList.add(a)),r.forEach(a=>t.classList.remove(a))}}function wo(t,e){return typeof e=="object"&&e!==null?Pg(t,e):Ig(t,e)}function Pg(t,e){let n={};return Object.entries(e).forEach(([i,s])=>{n[i]=t.style[i],i.startsWith("--")||(i=Dg(i)),t.style.setProperty(i,s)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{wo(t,n)}}function Ig(t,e){let n=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",n||"")}}function Dg(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ga(t,e=()=>{}){let n=!1;return function(){n?e.apply(this,arguments):(n=!0,t.apply(this,arguments))}}vt("transition",(t,{value:e,modifiers:n,expression:i},{evaluate:s})=>{typeof i=="function"&&(i=s(i)),i?Ug(t,i,e):Fg(t,n,e)});function Ug(t,e,n){ju(t,ic,""),{enter:s=>{t._x_transition.enter.during=s},"enter-start":s=>{t._x_transition.enter.start=s},"enter-end":s=>{t._x_transition.enter.end=s},leave:s=>{t._x_transition.leave.during=s},"leave-start":s=>{t._x_transition.leave.start=s},"leave-end":s=>{t._x_transition.leave.end=s}}[n](e)}function Fg(t,e,n){ju(t,wo);let i=!e.includes("in")&&!e.includes("out")&&!n,s=i||e.includes("in")||["enter"].includes(n),r=i||e.includes("out")||["leave"].includes(n);e.includes("in")&&!i&&(e=e.filter((f,b)=>b<e.indexOf("out"))),e.includes("out")&&!i&&(e=e.filter((f,b)=>b>e.indexOf("out")));let o=!e.includes("opacity")&&!e.includes("scale"),a=o||e.includes("opacity"),l=o||e.includes("scale"),c=a?0:1,h=l?Ms(e,"scale",95)/100:1,d=Ms(e,"delay",0),u=Ms(e,"origin","center"),m="opacity, transform",v=Ms(e,"duration",150)/1e3,x=Ms(e,"duration",75)/1e3,p="cubic-bezier(0.4, 0.0, 0.2, 1)";s&&(t._x_transition.enter.during={transformOrigin:u,transitionDelay:d,transitionProperty:m,transitionDuration:`${v}s`,transitionTimingFunction:p},t._x_transition.enter.start={opacity:c,transform:`scale(${h})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),r&&(t._x_transition.leave.during={transformOrigin:u,transitionDelay:d,transitionProperty:m,transitionDuration:`${x}s`,transitionTimingFunction:p},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:c,transform:`scale(${h})`})}function ju(t,e,n={}){t._x_transition||(t._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(i=()=>{},s=()=>{}){Wa(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,s)},out(i=()=>{},s=()=>{}){Wa(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,s)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,n,i){const s=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let r=()=>s(n);if(e){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(n):r():t._x_transition?t._x_transition.in(n):r();return}t._x_hidePromise=t._x_transition?new Promise((o,a)=>{t._x_transition.out(()=>{},()=>o(i)),t._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(i),queueMicrotask(()=>{let o=Ku(t);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(t)):s(()=>{let a=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(a)]).then(([h])=>h());return delete l._x_hidePromise,delete l._x_hideChildren,c};a(t).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function Ku(t){let e=t.parentNode;if(e)return e._x_hidePromise?e:Ku(e)}function Wa(t,e,{during:n,start:i,end:s}={},r=()=>{},o=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(i).length===0&&Object.keys(s).length===0){r(),o();return}let a,l,c;Ng(t,{start(){a=e(t,i)},during(){l=e(t,n)},before:r,end(){a(),c=e(t,s)},after:o,cleanup(){l(),c()}})}function Ng(t,e){let n,i,s,r=Ga(()=>{wt(()=>{n=!0,i||e.before(),s||(e.end(),Va()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:Ga(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();r()}),finish:r},wt(()=>{e.start(),e.during()}),Rg(),requestAnimationFrame(()=>{if(n)return;let o=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),wt(()=>{e.before()}),i=!0,requestAnimationFrame(()=>{n||(wt(()=>{e.end()}),Va(),setTimeout(t._x_transitioning.finish,o+a),s=!0)})})}function Ms(t,e,n){if(t.indexOf(e)===-1)return n;const i=t[t.indexOf(e)+1];if(!i||e==="scale"&&isNaN(i))return n;if(e==="duration"){let s=i.match(/([0-9]+)ms/);if(s)return s[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[i,t[t.indexOf(e)+2]].join(" "):i}var co=!1;function ar(t,e=()=>{}){return(...n)=>co?e(...n):t(...n)}function Og(t){return(...e)=>co&&t(...e)}function Bg(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),co=!0,kg(()=>{zg(e)}),co=!1}function zg(t){let e=!1;ni(t,(i,s)=>{ti(i,(r,o)=>{if(e&&Ag(r))return o();e=!0,s(r,o)})})}function kg(t){let e=fs;Yc((n,i)=>{let s=e(n);return sr(s),()=>{}}),t(),Yc(e)}function Ju(t,e,n,i=[]){switch(t._x_bindings||(t._x_bindings=ds({})),t._x_bindings[e]=n,e=i.includes("camel")?$g(e):e,e){case"value":Hg(t,n);break;case"style":Gg(t,n);break;case"class":Vg(t,n);break;default:Wg(t,e,n);break}}function Hg(t,e){if(t.type==="radio")t.attributes.value===void 0&&(t.value=e),window.fromModel&&(t.checked=Zc(t.value,e));else if(t.type==="checkbox")Number.isInteger(e)?t.value=e:!Number.isInteger(e)&&!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?t.value=String(e):Array.isArray(e)?t.checked=e.some(n=>Zc(n,t.value)):t.checked=!!e;else if(t.tagName==="SELECT")Yg(t,e);else{if(t.value===e)return;t.value=e}}function Vg(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=ic(t,e)}function Gg(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=wo(t,e)}function Wg(t,e,n){[null,void 0,!1].includes(n)&&qg(e)?t.removeAttribute(e):(Qu(e)&&(n=e),Xg(t,e,n))}function Xg(t,e,n){t.getAttribute(e)!=n&&t.setAttribute(e,n)}function Yg(t,e){const n=[].concat(e).map(i=>i+"");Array.from(t.options).forEach(i=>{i.selected=n.includes(i.value)})}function $g(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function Zc(t,e){return t==e}function Qu(t){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(t)}function qg(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function Zg(t,e,n){if(t._x_bindings&&t._x_bindings[e]!==void 0)return t._x_bindings[e];let i=t.getAttribute(e);return i===null?typeof n=="function"?n():n:i===""?!0:Qu(e)?!![e,"true"].includes(i):i}function ed(t,e){var n;return function(){var i=this,s=arguments,r=function(){n=null,t.apply(i,s)};clearTimeout(n),n=setTimeout(r,e)}}function td(t,e){let n;return function(){let i=this,s=arguments;n||(t.apply(i,s),n=!0,setTimeout(()=>n=!1,e))}}function jg(t){t(lr)}var vi={},jc=!1;function Kg(t,e){if(jc||(vi=ds(vi),jc=!0),e===void 0)return vi[t];vi[t]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&vi[t].init(),Ru(vi[t])}function Jg(){return vi}var nd={};function Qg(t,e){let n=typeof e!="function"?()=>e:e;t instanceof Element?id(t,n()):nd[t]=n}function ev(t){return Object.entries(nd).forEach(([e,n])=>{Object.defineProperty(t,e,{get(){return(...i)=>n(...i)}})}),t}function id(t,e,n){let i=[];for(;i.length;)i.pop()();let s=Object.entries(e).map(([o,a])=>({name:o,value:a})),r=Uu(s);s=s.map(o=>r.find(a=>a.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),Jl(t,s,n).map(o=>{i.push(o.runCleanups),o()})}var sd={};function tv(t,e){sd[t]=e}function nv(t,e){return Object.entries(sd).forEach(([n,i])=>{Object.defineProperty(t,n,{get(){return(...s)=>i.bind(e)(...s)},enumerable:!1})}),t}var iv={get reactive(){return ds},get release(){return sr},get effect(){return fs},get raw(){return Mu},version:"3.11.1",flushAndStopDeferringMutations:fg,dontAutoEvaluateFunctions:gg,disableEffectScheduling:sg,startObservingMutations:ql,stopObservingMutations:Au,setReactivityEngine:rg,closestDataStack:rs,skipDuringClone:ar,onlyDuringClone:Og,addRootSelector:Yu,addInitSelector:$u,addScopeToNode:rr,deferMutations:dg,mapAttributes:Ql,evaluateLater:Ft,interceptInit:Cg,setEvaluator:vg,mergeProxies:or,findClosest:So,closestRoot:yo,destroyTree:Zu,interceptor:Lu,transition:Wa,setStyles:wo,mutateDom:wt,directive:vt,throttle:td,debounce:ed,evaluate:Ji,initTree:ni,nextTick:nc,prefixed:ps,prefix:Mg,plugin:jg,magic:pn,store:Kg,start:Tg,clone:Bg,bound:Zg,$data:Cu,walk:ti,data:tv,bind:Qg},lr=iv;function sv(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}var rv=Object.freeze({}),rd=Object.assign,ov=Object.prototype.hasOwnProperty,bo=(t,e)=>ov.call(t,e),bi=Array.isArray,Us=t=>od(t)==="[object Map]",av=t=>typeof t=="string",sc=t=>typeof t=="symbol",To=t=>t!==null&&typeof t=="object",lv=Object.prototype.toString,od=t=>lv.call(t),ad=t=>od(t).slice(8,-1),rc=t=>av(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cv=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hv=cv(t=>t.charAt(0).toUpperCase()+t.slice(1)),ld=(t,e)=>t!==e&&(t===t||e===e),Xa=new WeakMap,ys=[],vn,Ti=Symbol("iterate"),Ya=Symbol("Map key iterate");function uv(t){return t&&t._isEffect===!0}function dv(t,e=rv){uv(t)&&(t=t.raw);const n=mv(t,e);return e.lazy||n(),n}function fv(t){t.active&&(cd(t),t.options.onStop&&t.options.onStop(),t.active=!1)}var pv=0;function mv(t,e){const n=function(){if(!n.active)return t();if(!ys.includes(n)){cd(n);try{return vv(),ys.push(n),vn=n,t()}finally{ys.pop(),hd(),vn=ys[ys.length-1]}}};return n.id=pv++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}function cd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}var as=!0,oc=[];function gv(){oc.push(as),as=!1}function vv(){oc.push(as),as=!0}function hd(){const t=oc.pop();as=t===void 0?!0:t}function dn(t,e,n){if(!as||vn===void 0)return;let i=Xa.get(t);i||Xa.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=new Set),s.has(vn)||(s.add(vn),vn.deps.push(s),vn.options.onTrack&&vn.options.onTrack({effect:vn,target:t,type:e,key:n}))}function ii(t,e,n,i,s,r){const o=Xa.get(t);if(!o)return;const a=new Set,l=h=>{h&&h.forEach(d=>{(d!==vn||d.allowRecurse)&&a.add(d)})};if(e==="clear")o.forEach(l);else if(n==="length"&&bi(t))o.forEach((h,d)=>{(d==="length"||d>=i)&&l(h)});else switch(n!==void 0&&l(o.get(n)),e){case"add":bi(t)?rc(n)&&l(o.get("length")):(l(o.get(Ti)),Us(t)&&l(o.get(Ya)));break;case"delete":bi(t)||(l(o.get(Ti)),Us(t)&&l(o.get(Ya)));break;case"set":Us(t)&&l(o.get(Ti));break}const c=h=>{h.options.onTrigger&&h.options.onTrigger({effect:h,target:t,key:n,type:e,newValue:i,oldValue:s,oldTarget:r}),h.options.scheduler?h.options.scheduler(h):h()};a.forEach(c)}var _v=sv("__proto__,__v_isRef,__isVue"),ud=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(sc)),xv=Ao(),Ev=Ao(!1,!0),Mv=Ao(!0),yv=Ao(!0,!0),ho={};["includes","indexOf","lastIndexOf"].forEach(t=>{const e=Array.prototype[t];ho[t]=function(...n){const i=at(this);for(let r=0,o=this.length;r<o;r++)dn(i,"get",r+"");const s=e.apply(i,n);return s===-1||s===!1?e.apply(i,n.map(at)):s}});["push","pop","shift","unshift","splice"].forEach(t=>{const e=Array.prototype[t];ho[t]=function(...n){gv();const i=e.apply(this,n);return hd(),i}});function Ao(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&r===(t?e?Iv:Td:e?Pv:bd).get(i))return i;const o=bi(i);if(!t&&o&&bo(ho,s))return Reflect.get(ho,s,r);const a=Reflect.get(i,s,r);return(sc(s)?ud.has(s):_v(s))||(t||dn(i,"get",s),e)?a:$a(a)?!o||!rc(s)?a.value:a:To(a)?t?Ad(a):hc(a):a}}var Sv=dd(),wv=dd(!0);function dd(t=!1){return function(n,i,s,r){let o=n[i];if(!t&&(s=at(s),o=at(o),!bi(n)&&$a(o)&&!$a(s)))return o.value=s,!0;const a=bi(n)&&rc(i)?Number(i)<n.length:bo(n,i),l=Reflect.set(n,i,s,r);return n===at(r)&&(a?ld(s,o)&&ii(n,"set",i,s,o):ii(n,"add",i,s)),l}}function bv(t,e){const n=bo(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&ii(t,"delete",e,void 0,i),s}function Tv(t,e){const n=Reflect.has(t,e);return(!sc(e)||!ud.has(e))&&dn(t,"has",e),n}function Av(t){return dn(t,"iterate",bi(t)?"length":Ti),Reflect.ownKeys(t)}var fd={get:xv,set:Sv,deleteProperty:bv,has:Tv,ownKeys:Av},pd={get:Mv,set(t,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}};rd({},fd,{get:Ev,set:wv});rd({},pd,{get:yv});var ac=t=>To(t)?hc(t):t,lc=t=>To(t)?Ad(t):t,cc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function Ro(t,e,n=!1,i=!1){t=t.__v_raw;const s=at(t),r=at(e);e!==r&&!n&&dn(s,"get",e),!n&&dn(s,"get",r);const{has:o}=Co(s),a=i?cc:n?lc:ac;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Lo(t,e=!1){const n=this.__v_raw,i=at(n),s=at(t);return t!==s&&!e&&dn(i,"has",t),!e&&dn(i,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Po(t,e=!1){return t=t.__v_raw,!e&&dn(at(t),"iterate",Ti),Reflect.get(t,"size",t)}function md(t){t=at(t);const e=at(this);return Co(e).has.call(e,t)||(e.add(t),ii(e,"add",t,t)),this}function gd(t,e){e=at(e);const n=at(this),{has:i,get:s}=Co(n);let r=i.call(n,t);r?wd(n,i,t):(t=at(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ld(e,o)&&ii(n,"set",t,e,o):ii(n,"add",t,e),this}function vd(t){const e=at(this),{has:n,get:i}=Co(e);let s=n.call(e,t);s?wd(e,n,t):(t=at(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&ii(e,"delete",t,void 0,r),o}function _d(){const t=at(this),e=t.size!==0,n=Us(t)?new Map(t):new Set(t),i=t.clear();return e&&ii(t,"clear",void 0,void 0,n),i}function Io(t,e){return function(i,s){const r=this,o=r.__v_raw,a=at(o),l=e?cc:t?lc:ac;return!t&&dn(a,"iterate",Ti),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Sr(t,e,n){return function(...i){const s=this.__v_raw,r=at(s),o=Us(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),h=n?cc:e?lc:ac;return!e&&dn(r,"iterate",l?Ya:Ti),{next(){const{value:d,done:u}=c.next();return u?{value:d,done:u}:{value:a?[h(d[0]),h(d[1])]:h(d),done:u}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${hv(t)} operation ${n}failed: target is readonly.`,at(this))}return t==="delete"?!1:this}}var xd={get(t){return Ro(this,t)},get size(){return Po(this)},has:Lo,add:md,set:gd,delete:vd,clear:_d,forEach:Io(!1,!1)},Ed={get(t){return Ro(this,t,!1,!0)},get size(){return Po(this)},has:Lo,add:md,set:gd,delete:vd,clear:_d,forEach:Io(!1,!0)},Md={get(t){return Ro(this,t,!0)},get size(){return Po(this,!0)},has(t){return Lo.call(this,t,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Io(!0,!1)},yd={get(t){return Ro(this,t,!0,!0)},get size(){return Po(this,!0)},has(t){return Lo.call(this,t,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Io(!0,!0)},Cv=["keys","values","entries",Symbol.iterator];Cv.forEach(t=>{xd[t]=Sr(t,!1,!1),Md[t]=Sr(t,!0,!1),Ed[t]=Sr(t,!1,!0),yd[t]=Sr(t,!0,!0)});function Sd(t,e){const n=e?t?yd:Ed:t?Md:xd;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(bo(n,s)&&s in i?n:i,s,r)}var Rv={get:Sd(!1,!1)},Lv={get:Sd(!0,!1)};function wd(t,e,n){const i=at(n);if(i!==n&&e.call(t,i)){const s=ad(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var bd=new WeakMap,Pv=new WeakMap,Td=new WeakMap,Iv=new WeakMap;function Dv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uv(t){return t.__v_skip||!Object.isExtensible(t)?0:Dv(ad(t))}function hc(t){return t&&t.__v_isReadonly?t:Cd(t,!1,fd,Rv,bd)}function Ad(t){return Cd(t,!0,pd,Lv,Td)}function Cd(t,e,n,i,s){if(!To(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Uv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function at(t){return t&&at(t.__v_raw)||t}function $a(t){return Boolean(t&&t.__v_isRef===!0)}pn("nextTick",()=>nc);pn("dispatch",t=>Ds.bind(Ds,t));pn("watch",(t,{evaluateLater:e,effect:n})=>(i,s)=>{let r=e(i),o=!0,a,l=n(()=>r(c=>{JSON.stringify(c),o?a=c:queueMicrotask(()=>{s(c,a),a=c}),o=!1}));t._x_effects.delete(l)});pn("store",Jg);pn("data",t=>Cu(t));pn("root",t=>yo(t));pn("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=or(Fv(t))),t._x_refs_proxy));function Fv(t){let e=[],n=t;for(;n;)n._x_refs&&e.push(n._x_refs),n=n.parentNode;return e}var Ko={};function Rd(t){return Ko[t]||(Ko[t]=0),++Ko[t]}function Nv(t,e){return So(t,n=>{if(n._x_ids&&n._x_ids[e])return!0})}function Ov(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=Rd(e))}pn("id",t=>(e,n=null)=>{let i=Nv(t,e),s=i?i._x_ids[e]:Rd(e);return n?`${e}-${s}-${n}`:`${e}-${s}`});pn("el",t=>t);Ld("Focus","focus","focus");Ld("Persist","persist","persist");function Ld(t,e,n){pn(e,i=>os(`You can't use [$${directiveName}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,i))}function Bv({get:t,set:e},{get:n,set:i}){let s=!0,r,o,a=fs(()=>{let l,c;s?(l=t(),i(l),c=n(),s=!1):(l=t(),c=n(),o=JSON.stringify(l),JSON.stringify(c),o!==r?(c=n(),i(l),c=l):(e(c),l=c)),r=JSON.stringify(l),JSON.stringify(c)});return()=>{sr(a)}}vt("modelable",(t,{expression:e},{effect:n,evaluateLater:i,cleanup:s})=>{let r=i(e),o=()=>{let h;return r(d=>h=d),h},a=i(`${e} = __placeholder`),l=h=>a(()=>{},{scope:{__placeholder:h}}),c=o();l(c),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let h=t._x_model.get,d=t._x_model.set,u=Bv({get(){return h()},set(m){d(m)}},{get(){return o()},set(m){l(m)}});s(u)})});var zv=document.createElement("div");vt("teleport",(t,{modifiers:e,expression:n},{cleanup:i})=>{t.tagName.toLowerCase()!=="template"&&os("x-teleport can only be used on a <template> tag",t);let s=ar(()=>document.querySelector(n),()=>zv)();s||os(`Cannot find x-teleport element for selector: "${n}"`);let r=t.content.cloneNode(!0).firstElementChild;t._x_teleport=r,r._x_teleportBack=t,t._x_forwardEvents&&t._x_forwardEvents.forEach(o=>{r.addEventListener(o,a=>{a.stopPropagation(),t.dispatchEvent(new a.constructor(a.type,a))})}),rr(r,{},t),wt(()=>{e.includes("prepend")?s.parentNode.insertBefore(r,s):e.includes("append")?s.parentNode.insertBefore(r,s.nextSibling):s.appendChild(r),ni(r),r._x_ignore=!0}),i(()=>r.remove())});var Pd=()=>{};Pd.inline=(t,{modifiers:e},{cleanup:n})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,n(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};vt("ignore",Pd);vt("effect",(t,{expression:e},{effect:n})=>n(Ft(t,e)));function qa(t,e,n,i){let s=t,r=l=>i(l),o={},a=(l,c)=>h=>c(l,h);if(n.includes("dot")&&(e=kv(e)),n.includes("camel")&&(e=Hv(e)),n.includes("passive")&&(o.passive=!0),n.includes("capture")&&(o.capture=!0),n.includes("window")&&(s=window),n.includes("document")&&(s=document),n.includes("prevent")&&(r=a(r,(l,c)=>{c.preventDefault(),l(c)})),n.includes("stop")&&(r=a(r,(l,c)=>{c.stopPropagation(),l(c)})),n.includes("self")&&(r=a(r,(l,c)=>{c.target===t&&l(c)})),(n.includes("away")||n.includes("outside"))&&(s=document,r=a(r,(l,c)=>{t.contains(c.target)||c.target.isConnected!==!1&&(t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&l(c))})),n.includes("once")&&(r=a(r,(l,c)=>{l(c),s.removeEventListener(e,r,o)})),r=a(r,(l,c)=>{Gv(e)&&Wv(c,n)||l(c)}),n.includes("debounce")){let l=n[n.indexOf("debounce")+1]||"invalid-wait",c=uo(l.split("ms")[0])?Number(l.split("ms")[0]):250;r=ed(r,c)}if(n.includes("throttle")){let l=n[n.indexOf("throttle")+1]||"invalid-wait",c=uo(l.split("ms")[0])?Number(l.split("ms")[0]):250;r=td(r,c)}return s.addEventListener(e,r,o),()=>{s.removeEventListener(e,r,o)}}function kv(t){return t.replace(/-/g,".")}function Hv(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function uo(t){return!Array.isArray(t)&&!isNaN(t)}function Vv(t){return[" ","_"].includes(t)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Gv(t){return["keydown","keyup"].includes(t)}function Wv(t,e){let n=e.filter(r=>!["window","document","prevent","stop","once"].includes(r));if(n.includes("debounce")){let r=n.indexOf("debounce");n.splice(r,uo((n[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let r=n.indexOf("throttle");n.splice(r,uo((n[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Kc(t.key).includes(n[0]))return!1;const s=["ctrl","shift","alt","meta","cmd","super"].filter(r=>n.includes(r));return n=n.filter(r=>!s.includes(r)),!(s.length>0&&s.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),t[`${o}Key`])).length===s.length&&Kc(t.key).includes(n[0]))}function Kc(t){if(!t)return[];t=Vv(t);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"=",minus:"-",underscore:"_"};return e[t]=t,Object.keys(e).map(n=>{if(e[n]===t)return n}).filter(n=>n)}vt("model",(t,{modifiers:e,expression:n},{effect:i,cleanup:s})=>{let r=t;e.includes("parent")&&(r=t.parentNode);let o=Ft(r,n),a;typeof n=="string"?a=Ft(r,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?a=Ft(r,`${n()} = __placeholder`):a=()=>{};let l=()=>{let u;return o(m=>u=m),Jc(u)?u.get():u},c=u=>{let m;o(v=>m=v),Jc(m)?m.set(u):a(()=>{},{scope:{__placeholder:u}})};typeof n=="string"&&t.type==="radio"&&wt(()=>{t.hasAttribute("name")||t.setAttribute("name",n)});var h=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)||e.includes("lazy")?"change":"input";let d=qa(t,h,e,u=>{c(Xv(t,e,u,l()))});if(t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=d,s(()=>t._x_removeModelListeners.default()),t.form){let u=qa(t.form,"reset",[],m=>{nc(()=>t._x_model&&t._x_model.set(t.value))});s(()=>u())}t._x_model={get(){return l()},set(u){c(u)}},t._x_forceModelUpdate=u=>{u=u===void 0?l():u,u===void 0&&typeof n=="string"&&n.match(/\./)&&(u=""),window.fromModel=!0,wt(()=>Ju(t,"value",u)),delete window.fromModel},i(()=>{let u=l();e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(u)})});function Xv(t,e,n,i){return wt(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return typeof n.detail<"u"?n.detail:n.target.value;if(t.type==="checkbox")if(Array.isArray(i)){let s=e.includes("number")?Jo(n.target.value):n.target.value;return n.target.checked?i.concat([s]):i.filter(r=>!Yv(r,s))}else return n.target.checked;else{if(t.tagName.toLowerCase()==="select"&&t.multiple)return e.includes("number")?Array.from(n.target.selectedOptions).map(s=>{let r=s.value||s.text;return Jo(r)}):Array.from(n.target.selectedOptions).map(s=>s.value||s.text);{let s=n.target.value;return e.includes("number")?Jo(s):e.includes("trim")?s.trim():s}}})}function Jo(t){let e=t?parseFloat(t):null;return $v(e)?e:t}function Yv(t,e){return t==e}function $v(t){return!Array.isArray(t)&&!isNaN(t)}function Jc(t){return t!==null&&typeof t=="object"&&typeof t.get=="function"&&typeof t.set=="function"}vt("cloak",t=>queueMicrotask(()=>wt(()=>t.removeAttribute(ps("cloak")))));$u(()=>`[${ps("init")}]`);vt("init",ar((t,{expression:e},{evaluate:n})=>typeof e=="string"?!!e.trim()&&n(e,{},!1):n(e,{},!1)));vt("text",(t,{expression:e},{effect:n,evaluateLater:i})=>{let s=i(e);n(()=>{s(r=>{wt(()=>{t.textContent=r})})})});vt("html",(t,{expression:e},{effect:n,evaluateLater:i})=>{let s=i(e);n(()=>{s(r=>{wt(()=>{t.innerHTML=r,t._x_ignoreSelf=!0,ni(t),delete t._x_ignoreSelf})})})});Ql(Ou(":",Bu(ps("bind:"))));vt("bind",(t,{value:e,modifiers:n,expression:i,original:s},{effect:r})=>{if(!e){let a={};ev(a),Ft(t,i)(c=>{id(t,c,s)},{scope:a});return}if(e==="key")return qv(t,i);let o=Ft(t,i);r(()=>o(a=>{a===void 0&&typeof i=="string"&&i.match(/\./)&&(a=""),wt(()=>Ju(t,e,a,n))}))});function qv(t,e){t._x_keyExpression=e}Yu(()=>`[${ps("data")}]`);vt("data",ar((t,{expression:e},{cleanup:n})=>{e=e===""?"{}":e;let i={};Oa(i,t);let s={};nv(s,i);let r=Ji(t,e,{scope:s});r===void 0&&(r={}),Oa(r,t);let o=ds(r);Ru(o);let a=rr(t,o);o.init&&Ji(t,o.init),n(()=>{o.destroy&&Ji(t,o.destroy),a()})}));vt("show",(t,{modifiers:e,expression:n},{effect:i})=>{let s=Ft(t,n);t._x_doHide||(t._x_doHide=()=>{wt(()=>{t.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{wt(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display")})});let r=()=>{t._x_doHide(),t._x_isShown=!1},o=()=>{t._x_doShow(),t._x_isShown=!0},a=()=>setTimeout(o),l=Ga(d=>d?o():r(),d=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,d,o,r):d?a():r()}),c,h=!0;i(()=>s(d=>{!h&&d===c||(e.includes("immediate")&&(d?a():r()),l(d),c=d,h=!1)}))});vt("for",(t,{expression:e},{effect:n,cleanup:i})=>{let s=jv(e),r=Ft(t,s.items),o=Ft(t,t._x_keyExpression||"index");t._x_prevKeys=[],t._x_lookup={},n(()=>Zv(t,s,r,o)),i(()=>{Object.values(t._x_lookup).forEach(a=>a.remove()),delete t._x_prevKeys,delete t._x_lookup})});function Zv(t,e,n,i){let s=o=>typeof o=="object"&&!Array.isArray(o),r=t;n(o=>{Kv(o)&&o>=0&&(o=Array.from(Array(o).keys(),p=>p+1)),o===void 0&&(o=[]);let a=t._x_lookup,l=t._x_prevKeys,c=[],h=[];if(s(o))o=Object.entries(o).map(([p,f])=>{let b=Qc(e,f,p,o);i(S=>h.push(S),{scope:{index:p,...b}}),c.push(b)});else for(let p=0;p<o.length;p++){let f=Qc(e,o[p],p,o);i(b=>h.push(b),{scope:{index:p,...f}}),c.push(f)}let d=[],u=[],m=[],v=[];for(let p=0;p<l.length;p++){let f=l[p];h.indexOf(f)===-1&&m.push(f)}l=l.filter(p=>!m.includes(p));let x="template";for(let p=0;p<h.length;p++){let f=h[p],b=l.indexOf(f);if(b===-1)l.splice(p,0,f),d.push([x,p]);else if(b!==p){let S=l.splice(p,1)[0],E=l.splice(b-1,1)[0];l.splice(p,0,E),l.splice(b,0,S),u.push([S,E])}else v.push(f);x=f}for(let p=0;p<m.length;p++){let f=m[p];a[f]._x_effects&&a[f]._x_effects.forEach(Eu),a[f].remove(),a[f]=null,delete a[f]}for(let p=0;p<u.length;p++){let[f,b]=u[p],S=a[f],E=a[b],C=document.createElement("div");wt(()=>{E.after(C),S.after(E),E._x_currentIfEl&&E.after(E._x_currentIfEl),C.before(S),S._x_currentIfEl&&S.after(S._x_currentIfEl),C.remove()}),$c(E,c[h.indexOf(b)])}for(let p=0;p<d.length;p++){let[f,b]=d[p],S=f==="template"?r:a[f];S._x_currentIfEl&&(S=S._x_currentIfEl);let E=c[b],C=h[b],R=document.importNode(r.content,!0).firstElementChild;rr(R,ds(E),r),wt(()=>{S.after(R),ni(R)}),typeof C=="object"&&os("x-for key cannot be an object, it must be a string or an integer",r),a[C]=R}for(let p=0;p<v.length;p++)$c(a[v[p]],c[h.indexOf(v[p])]);r._x_prevKeys=h})}function jv(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,s=t.match(i);if(!s)return;let r={};r.items=s[2].trim();let o=s[1].replace(n,"").trim(),a=o.match(e);return a?(r.item=o.replace(e,"").trim(),r.index=a[1].trim(),a[2]&&(r.collection=a[2].trim())):r.item=o,r}function Qc(t,e,n,i){let s={};return/^\[.*\]$/.test(t.item)&&Array.isArray(e)?t.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,a)=>{s[o]=e[a]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&typeof e=="object"?t.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{s[o]=e[o]}):s[t.item]=e,t.index&&(s[t.index]=n),t.collection&&(s[t.collection]=i),s}function Kv(t){return!Array.isArray(t)&&!isNaN(t)}function Id(){}Id.inline=(t,{expression:e},{cleanup:n})=>{let i=yo(t);i._x_refs||(i._x_refs={}),i._x_refs[e]=t,n(()=>delete i._x_refs[e])};vt("ref",Id);vt("if",(t,{expression:e},{effect:n,cleanup:i})=>{let s=Ft(t,e),r=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let a=t.content.cloneNode(!0).firstElementChild;return rr(a,{},t),wt(()=>{t.after(a),ni(a)}),t._x_currentIfEl=a,t._x_undoIf=()=>{ti(a,l=>{l._x_effects&&l._x_effects.forEach(Eu)}),a.remove(),delete t._x_currentIfEl},a},o=()=>{t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)};n(()=>s(a=>{a?r():o()})),i(()=>t._x_undoIf&&t._x_undoIf())});vt("id",(t,{expression:e},{evaluate:n})=>{n(e).forEach(s=>Ov(t,s))});Ql(Ou("@",Bu(ps("on:"))));vt("on",ar((t,{value:e,modifiers:n,expression:i},{cleanup:s})=>{let r=i?Ft(t,i):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let o=qa(t,e,n,a=>{r(()=>{},{scope:{$event:a},params:[a]})});s(()=>o())}));Do("Collapse","collapse","collapse");Do("Intersect","intersect","intersect");Do("Focus","trap","focus");Do("Mask","mask","mask");function Do(t,e,n){vt(e,i=>os(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,i))}lr.setEvaluator(Du);lr.setReactivityEngine({reactive:hc,effect:dv,release:fv,raw:at});var Jv=lr,Dd=Jv;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="179",Qv=0,eh=1,e_=2,Ud=1,t_=2,In=3,si=0,zt=1,Dn=2,Zn=0,Qi=1,th=2,nh=3,ih=4,n_=5,Ei=100,i_=101,s_=102,r_=103,o_=104,a_=200,l_=201,c_=202,h_=203,Za=204,ja=205,u_=206,d_=207,f_=208,p_=209,m_=210,g_=211,v_=212,__=213,x_=214,Ka=0,Ja=1,Qa=2,ls=3,el=4,tl=5,nl=6,il=7,Fd=0,E_=1,M_=2,jn=0,Nd=1,y_=2,S_=3,w_=4,b_=5,T_=6,A_=7,Od=300,cs=301,hs=302,sl=303,rl=304,Uo=306,ol=1e3,Si=1001,al=1002,un=1003,C_=1004,wr=1005,cn=1006,Qo=1007,qn=1008,On=1009,Bd=1010,zd=1011,Ks=1012,dc=1013,Ai=1014,Un=1015,cr=1016,fc=1017,pc=1018,Js=1020,kd=35902,Hd=1021,Vd=1022,hn=1023,Qs=1026,er=1027,Gd=1028,mc=1029,Wd=1030,gc=1031,vc=1033,Jr=33776,Qr=33777,eo=33778,to=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,vl=37810,_l=37811,xl=37812,El=37813,Ml=37814,yl=37815,Sl=37816,wl=37817,bl=37818,Tl=37819,Al=37820,Cl=37821,no=36492,Rl=36494,Ll=36495,Xd=36283,Pl=36284,Il=36285,Dl=36286,R_=3200,L_=3201,P_=0,I_=1,Yn="",Jt="srgb",Ci="srgb-linear",fo="linear",Ke="srgb",Pi=7680,sh=519,D_=512,U_=513,F_=514,Yd=515,N_=516,O_=517,B_=518,z_=519,rh=35044,oh="300 es",En=2e3,po=2001;class ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ah=1234567;const Fs=Math.PI/180,tr=180/Math.PI;function gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[t&255]+Ct[t>>8&255]+Ct[t>>16&255]+Ct[t>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[n&63|128]+Ct[n>>8&255]+"-"+Ct[n>>16&255]+Ct[n>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function ze(t,e,n){return Math.max(e,Math.min(n,t))}function _c(t,e){return(t%e+e)%e}function k_(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function H_(t,e,n){return t!==e?(n-t)/(e-t):0}function Ns(t,e,n){return(1-n)*t+n*e}function V_(t,e,n,i){return Ns(t,e,1-Math.exp(-n*i))}function G_(t,e=1){return e-Math.abs(_c(t,e*2)-e)}function W_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function X_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Y_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function $_(t,e){return t+Math.random()*(e-t)}function q_(t){return t*(.5-Math.random())}function Z_(t){t!==void 0&&(ah=t);let e=ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j_(t){return t*Fs}function K_(t){return t*tr}function J_(t){return(t&t-1)===0&&t!==0}function Q_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function e0(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function t0(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),m=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*v,l*m,a*c);break;case"YXY":t.set(l*m,a*h,l*v,a*c);break;case"ZYZ":t.set(l*v,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qe={DEG2RAD:Fs,RAD2DEG:tr,generateUUID:gs,clamp:ze,euclideanModulo:_c,mapLinear:k_,inverseLerp:H_,lerp:Ns,damp:V_,pingpong:G_,smoothstep:W_,smootherstep:X_,randInt:Y_,randFloat:$_,randFloatSpread:q_,seededRandom:Z_,degToRad:j_,radToDeg:K_,isPowerOfTwo:J_,ceilPowerOfTwo:Q_,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:Dt,denormalize:Yi};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vs{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=u,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==u||c!==m||h!==v){let p=1-a;const f=l*u+c*m+h*v+d*x,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,f*b);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const E=a*b;if(l=l*p+u*E,c=c*p+m*E,h=h*p+v*E,d=d*p+x*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],m=r[o+2],v=r[o+3];return e[n]=a*v+h*d+l*m-c*u,e[n+1]=l*v+h*u+c*d-a*m,e[n+2]=c*v+h*m+a*u-l*d,e[n+3]=h*v-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"YXZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"ZXY":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"ZYX":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"YZX":this._x=u*h*d+c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d-u*m*v;break;case"XZY":this._x=u*h*d-c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d+u*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*s+n*this._y,this._z=m*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,u=Math.sin(n*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this.z=ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this.z=ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new N,lh=new vs;let Ne=class $d{constructor(e,n,i,s,r,o,a,l,c){$d.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],v=i[8],x=s[0],p=s[3],f=s[6],b=s[1],S=s[4],E=s[7],C=s[2],R=s[5],L=s[8];return r[0]=o*x+a*b+l*C,r[3]=o*p+a*S+l*R,r[6]=o*f+a*E+l*L,r[1]=c*x+h*b+d*C,r[4]=c*p+h*S+d*R,r[7]=c*f+h*E+d*L,r[2]=u*x+m*b+v*C,r[5]=u*p+m*S+v*R,r[8]=u*f+m*E+v*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,v=n*d+i*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(h*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ta.makeScale(e,n)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,n){return this.premultiply(ta.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const ta=new Ne;function qd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function n0(){const t=nr("canvas");return t.style.display="block",t}const ch={};function es(t){t in ch||(ch[t]=!0,console.warn(t))}function i0(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const hh=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){const t={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ke&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ke&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?fo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ci]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:Ke,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),t}const He=s0();function Fn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ts(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ii;class r0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ii===void 0&&(Ii=nr("canvas")),Ii.width=e.width,Ii.height=e.height;const s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ii}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nr("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fn(n[i]/255)*255):n[i]=Fn(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(na(s[o].image)):r.push(na(s[o]))}else r=na(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function na(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;const ia=new N;class Nt extends ms{constructor(e=Nt.DEFAULT_IMAGE,n=Nt.DEFAULT_MAPPING,i=Si,s=Si,r=cn,o=qn,a=hn,l=On,c=Nt.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=gs(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Od;Nt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],v=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,E=(m+1)/2,C=(f+1)/2,R=(h+u)/4,L=(d+x)/4,U=(v+p)/4;return S>E&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=L/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=U/r),this.set(i,s,r,n),this}let b=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this.z=ze(this.z,e.z,n.z),this.w=ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this.z=ze(this.z,e,n),this.w=ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Nt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new xc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends l0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zd extends Nt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c0 extends Nt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),br.copy(i.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Tr.subVectors(this.max,Ss),Di.subVectors(e.a,Ss),Ui.subVectors(e.b,Ss),Fi.subVectors(e.c,Ss),Bn.subVectors(Ui,Di),zn.subVectors(Fi,Ui),ui.subVectors(Di,Fi);let n=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ui.z,ui.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ui.z,0,-ui.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ui.y,ui.x,0];return!sa(n,Di,Ui,Fi,Tr)||(n=[1,0,0,0,1,0,0,0,1],!sa(n,Di,Ui,Fi,Tr))?!1:(Ar.crossVectors(Bn,zn),n=[Ar.x,Ar.y,Ar.z],sa(n,Di,Ui,Fi,Tr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,br=new _s,Di=new N,Ui=new N,Fi=new N,Bn=new N,zn=new N,ui=new N,Ss=new N,Tr=new N,Ar=new N,di=new N;function sa(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){di.fromArray(t,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),c=n.dot(di),h=i.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const h0=new _s,ws=new N,ra=new N;class Ec{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):h0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const n=ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(ra)),this.expandByPoint(ws.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new N,oa=new N,Cr=new N,kn=new N,aa=new N,Rr=new N,la=new N;class jd{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=An.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,n),An.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){oa.copy(e).add(n).multiplyScalar(.5),Cr.copy(n).sub(e).normalize(),kn.copy(this.origin).sub(oa);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Cr),a=kn.dot(this.direction),l=-kn.dot(Cr),c=kn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,v;if(h>0)if(d=o*l-a,u=o*a-l,v=r*h,d>=0)if(u>=-v)if(u<=v){const x=1/h;d*=x,u*=x,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oa).addScaledVector(Cr,u),m}intersectSphere(e,n){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,n,i,s,r){aa.subVectors(n,e),Rr.subVectors(i,e),la.crossVectors(aa,Rr);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(Rr.crossVectors(kn,Rr));if(l<0)return null;const c=a*this.direction.dot(aa.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,s,r,o,a,l,c,h,d,u,m,v,x,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,d,u,m,v,x,p)}set(e,n,i,s,r,o,a,l,c,h,d,u,m,v,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=v,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,m=o*d,v=a*h,x=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=m+v*c,n[5]=u-x*c,n[9]=-a*l,n[2]=x-u*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,v=c*h,x=c*d;n[0]=u+x*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=m*a-v,n[6]=x+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,v=c*h,x=c*d;n[0]=u-x*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*h,n[9]=x-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*h,m=o*d,v=a*h,x=a*d;n[0]=l*h,n[4]=v*c-m,n[8]=u*c+x,n[1]=l*d,n[5]=x*c+u,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*h,n[4]=x-u*d,n[8]=v*d+m,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=m*d+v,n[10]=u-x*d}else if(e.order==="XZY"){const u=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+x,n[5]=o*h,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*h,n[10]=x*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u0,e,d0)}lookAt(e,n,i){const s=this.elements;return Gt.subVectors(e,n),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Hn.crossVectors(i,Gt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Hn.crossVectors(i,Gt)),Hn.normalize(),Lr.crossVectors(Gt,Hn),s[0]=Hn.x,s[4]=Lr.x,s[8]=Gt.x,s[1]=Hn.y,s[5]=Lr.y,s[9]=Gt.y,s[2]=Hn.z,s[6]=Lr.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],v=i[2],x=i[6],p=i[10],f=i[14],b=i[3],S=i[7],E=i[11],C=i[15],R=s[0],L=s[4],U=s[8],y=s[12],M=s[1],T=s[5],W=s[9],H=s[13],X=s[2],q=s[6],Y=s[10],Z=s[14],z=s[3],re=s[7],he=s[11],Me=s[15];return r[0]=o*R+a*M+l*X+c*z,r[4]=o*L+a*T+l*q+c*re,r[8]=o*U+a*W+l*Y+c*he,r[12]=o*y+a*H+l*Z+c*Me,r[1]=h*R+d*M+u*X+m*z,r[5]=h*L+d*T+u*q+m*re,r[9]=h*U+d*W+u*Y+m*he,r[13]=h*y+d*H+u*Z+m*Me,r[2]=v*R+x*M+p*X+f*z,r[6]=v*L+x*T+p*q+f*re,r[10]=v*U+x*W+p*Y+f*he,r[14]=v*y+x*H+p*Z+f*Me,r[3]=b*R+S*M+E*X+C*z,r[7]=b*L+S*T+E*q+C*re,r[11]=b*U+S*W+E*Y+C*he,r[15]=b*y+S*H+E*Z+C*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],v=e[3],x=e[7],p=e[11],f=e[15];return v*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*m-i*l*m)+x*(+n*l*m-n*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+p*(+n*c*d-n*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+f*(-s*a*h-n*l*d+n*a*u+s*o*d-i*o*u+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],v=e[12],x=e[13],p=e[14],f=e[15],b=d*p*c-x*u*c+x*l*m-a*p*m-d*l*f+a*u*f,S=v*u*c-h*p*c-v*l*m+o*p*m+h*l*f-o*u*f,E=h*x*c-v*d*c+v*a*m-o*x*m-h*a*f+o*d*f,C=v*d*l-h*x*l-v*a*u+o*x*u+h*a*p-o*d*p,R=n*b+i*S+s*E+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=b*L,e[1]=(x*u*r-d*p*r-x*s*m+i*p*m+d*s*f-i*u*f)*L,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*f+i*l*f)*L,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*m-i*l*m)*L,e[4]=S*L,e[5]=(h*p*r-v*u*r+v*s*m-n*p*m-h*s*f+n*u*f)*L,e[6]=(v*l*r-o*p*r-v*s*c+n*p*c+o*s*f-n*l*f)*L,e[7]=(o*u*r-h*l*r+h*s*c-n*u*c-o*s*m+n*l*m)*L,e[8]=E*L,e[9]=(v*d*r-h*x*r-v*i*m+n*x*m+h*i*f-n*d*f)*L,e[10]=(o*x*r-v*a*r+v*i*c-n*x*c-o*i*f+n*a*f)*L,e[11]=(h*a*r-o*d*r-h*i*c+n*d*c+o*i*m-n*a*m)*L,e[12]=C*L,e[13]=(h*x*s-v*d*s+v*i*u-n*x*u-h*i*p+n*d*p)*L,e[14]=(v*a*s-o*x*s-v*i*l+n*x*l+o*i*p-n*a*p)*L,e[15]=(o*d*s-h*a*s+h*i*l-n*d*l-o*i*u+n*a*u)*L,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,v=r*d,x=o*h,p=o*d,f=a*d,b=l*c,S=l*h,E=l*d,C=i.x,R=i.y,L=i.z;return s[0]=(1-(x+f))*C,s[1]=(m+E)*C,s[2]=(v-S)*C,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(u+f))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(v+S)*L,s[9]=(p-b)*L,s[10]=(1-(u+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const c=1/r,h=1/o,d=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,n.setFromRotationMatrix(nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=En,l=!1){const c=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),m=(i+s)/(i-s);let v,x;if(l)v=r/(o-r),x=o*r/(o-r);else if(a===En)v=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===po)v=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=En,l=!1){const c=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),m=-(i+s)/(i-s);let v,x;if(l)v=1/(o-r),x=o/(o-r);else if(a===En)v=-2/(o-r),x=-(o+r)/(o-r);else if(a===po)v=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ni=new N,nn=new pt,u0=new N(0,0,0),d0=new N(1,1,1),Hn=new N,Lr=new N,Gt=new N,dh=new pt,fh=new vs;class wn{constructor(e=0,n=0,i=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let f0=0;const ph=new N,Oi=new vs,Cn=new pt,Pr=new N,bs=new N,p0=new N,m0=new vs,mh=new N(1,0,0),gh=new N(0,1,0),vh=new N(0,0,1),_h={type:"added"},g0={type:"removed"},Bi={type:"childadded",child:null},ca={type:"childremoved",child:null};class Yt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new N,n=new wn,i=new vs,s=new N(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ne}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Oi.setFromAxisAngle(e,n),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,n){return Oi.setFromAxisAngle(e,n),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(vh,e)}translateOnAxis(e,n){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Pr.copy(e):Pr.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(bs,Pr,this.up):Cn.lookAt(Pr,bs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(g0),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new N(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new N,Rn=new N,ha=new N,Ln=new N,zi=new N,ki=new N,xh=new N,ua=new N,da=new N,fa=new N,pa=new ft,ma=new ft,ga=new ft;class ln{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),sn.subVectors(e,n),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){sn.subVectors(s,n),Rn.subVectors(i,n),ha.subVectors(e,n);const o=sn.dot(sn),a=sn.dot(Rn),l=sn.dot(ha),c=Rn.dot(Rn),h=Rn.dot(ha),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(c*l-a*h)*u,v=(o*h-a*l)*u;return r.set(1-m-v,v,m)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,i),ga.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pa,r.x),o.addScaledVector(ma,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(e,n,i,s){return sn.subVectors(i,n),Rn.subVectors(e,n),sn.cross(Rn).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),sn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,i),ki.subVectors(r,i),ua.subVectors(e,i);const l=zi.dot(ua),c=ki.dot(ua);if(l<=0&&c<=0)return n.copy(i);da.subVectors(e,s);const h=zi.dot(da),d=ki.dot(da);if(h>=0&&d<=h)return n.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(zi,o);fa.subVectors(e,r);const m=zi.dot(fa),v=ki.dot(fa);if(v>=0&&m<=v)return n.copy(r);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ki,a);const p=h*v-m*d;if(p<=0&&d-h>=0&&m-v>=0)return xh.subVectors(r,s),a=(d-h)/(d-h+(m-v)),n.copy(s).addScaledVector(xh,a);const f=1/(p+x+u);return o=x*f,a=u*f,n.copy(i).addScaledVector(zi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function va(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Qe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=He.workingColorSpace){return this.r=e,this.g=n,this.b=i,He.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=He.workingColorSpace){if(e=_c(e,1),n=ze(n,0,1),i=ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=va(o,r,e+1/3),this.g=va(o,r,e),this.b=va(o,r,e-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(e,n=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jt){const i=Kd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return He.workingToColorSpace(Rt.copy(this),e),Math.round(ze(Rt.r*255,0,255))*65536+Math.round(ze(Rt.g*255,0,255))*256+Math.round(ze(Rt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=He.workingColorSpace){He.workingToColorSpace(Rt.copy(this),n);const i=Rt.r,s=Rt.g,r=Rt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=He.workingColorSpace){return He.workingToColorSpace(Rt.copy(this),n),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Jt){He.workingToColorSpace(Rt.copy(this),e);const n=Rt.r,i=Rt.g,s=Rt.b;return e!==Jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+n,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vn),e.getHSL(Ir);const i=Ns(Vn.h,Ir.h,n),s=Ns(Vn.s,Ir.s,n),r=Ns(Vn.l,Ir.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Rt=new Qe;Qe.NAMES=Kd;let v0=0;class Fo extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Qi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=ja,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==ja&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hr extends Fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new N,Dr=new Ze;let _0=0;class yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dr.fromBufferAttribute(this,n),Dr.applyMatrix3(e),this.setXY(n,Dr.x,Dr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class Jd extends yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Qd extends yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let x0=0;const jt=new pt,_a=new Yt,Hi=new N,Wt=new _s,Ts=new _s,Mt=new N;class li extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?Qd:Jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,n,i){return jt.makeTranslation(e,n,i),this.applyMatrix4(jt),this}scale(e,n,i){return jt.makeScale(e,n,i),this.applyMatrix4(jt),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Wt.min,Ts.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,Ts.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(Ts.min),Wt.expandByPoint(Ts.max))}Wt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Mt.add(Hi)),s=Math.max(s,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new N,l[U]=new N;const c=new N,h=new N,d=new N,u=new Ze,m=new Ze,v=new Ze,x=new N,p=new N;function f(U,y,M){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,U),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,M),h.sub(c),d.sub(c),m.sub(u),v.sub(u);const T=1/(m.x*v.y-v.x*m.y);isFinite(T)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(T),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(T),a[U].add(x),a[y].add(x),a[M].add(x),l[U].add(p),l[y].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,y=b.length;U<y;++U){const M=b[U],T=M.start,W=M.count;for(let H=T,X=T+W;H<X;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new N,E=new N,C=new N,R=new N;function L(U){C.fromBufferAttribute(s,U),R.copy(C);const y=a[U];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),E.crossVectors(R,y);const T=E.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,T)}for(let U=0,y=b.length;U<y;++U){const M=b[U],T=M.start,W=M.count;for(let H=T,X=T+W;H<X;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mt.fromBufferAttribute(e,n),Mt.normalize(),e.setXYZ(n,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let f=0;f<h;f++)u[v++]=c[m++]}return new yn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new pt,fi=new jd,Ur=new Ec,Mh=new N,Fr=new N,Nr=new N,Or=new N,xa=new N,Br=new N,yh=new N,zr=new N;class en extends Yt{constructor(e=new li,n=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(xa.fromBufferAttribute(d,e),o?Br.addScaledVector(xa,h):Br.addScaledVector(xa.sub(n),h))}n.add(Br)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(Ur.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ur,Mh)===null||fi.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(Eh.copy(r).invert(),fi.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fi)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const p=u[v],f=o[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,C=S;E<C;E+=3){const R=a.getX(E),L=a.getX(E+1),U=a.getX(E+2);s=kr(this,f,e,i,c,h,d,R,L,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const b=a.getX(p),S=a.getX(p+1),E=a.getX(p+2);s=kr(this,o,e,i,c,h,d,b,S,E),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const p=u[v],f=o[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,C=S;E<C;E+=3){const R=E,L=E+1,U=E+2;s=kr(this,f,e,i,c,h,d,R,L,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const b=p,S=p+1,E=p+2;s=kr(this,o,e,i,c,h,d,b,S,E),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function E0(t,e,n,i,s,r,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;zr.copy(a),zr.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zr);return c<n.near||c>n.far?null:{distance:c,point:zr.clone(),object:t}}function kr(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Fr),t.getVertexPosition(l,Nr),t.getVertexPosition(c,Or);const h=E0(t,e,n,i,Fr,Nr,Or,yh);if(h){const d=new N;ln.getBarycoord(yh,Fr,Nr,Or,d),s&&(h.uv=ln.getInterpolatedAttribute(s,a,l,c,d,new Ze)),r&&(h.uv1=ln.getInterpolatedAttribute(r,a,l,c,d,new Ze)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};ln.getNormal(Fr,Nr,Or,u.normal),h.face=u,h.barycoord=d}return h}class ur extends li{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(d,2));function v(x,p,f,b,S,E,C,R,L,U,y){const M=E/L,T=C/U,W=E/2,H=C/2,X=R/2,q=L+1,Y=U+1;let Z=0,z=0;const re=new N;for(let he=0;he<Y;he++){const Me=he*T-H;for(let Ue=0;Ue<q;Ue++){const rt=Ue*M-W;re[x]=rt*b,re[p]=Me*S,re[f]=X,c.push(re.x,re.y,re.z),re[x]=0,re[p]=0,re[f]=R>0?1:-1,h.push(re.x,re.y,re.z),d.push(Ue/L),d.push(1-he/U),Z+=1}}for(let he=0;he<U;he++)for(let Me=0;Me<L;Me++){const Ue=u+Me+q*he,rt=u+Me+q*(he+1),et=u+(Me+1)+q*(he+1),G=u+(Me+1)+q*he;l.push(Ue,rt,G),l.push(rt,et,G),z+=6}a.addGroup(m,z,y),m+=z,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Ut(t){const e={};for(let n=0;n<t.length;n++){const i=us(t[n]);for(const s in i)e[s]=i[s]}return e}function M0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ef(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const y0={clone:us,merge:Ut};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class tf extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new N,Sh=new Ze,wh=new Ze;class Qt extends tf{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,n){return this.getViewBounds(e,Sh,wh),n.subVectors(wh,Sh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vi=-90,Gi=1;class b0 extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(Vi,Gi,e,n);s.layers=this.layers,this.add(s);const r=new Qt(Vi,Gi,e,n);r.layers=this.layers,this.add(r);const o=new Qt(Vi,Gi,e,n);o.layers=this.layers,this.add(o);const a=new Qt(Vi,Gi,e,n);a.layers=this.layers,this.add(a);const l=new Qt(Vi,Gi,e,n);l.layers=this.layers,this.add(l);const c=new Qt(Vi,Gi,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(d,u,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class nf extends Nt{constructor(e=[],n=cs,i,s,r,o,a,l,c,h){super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T0 extends ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new nf(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ur(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Zn});r.uniforms.tEquirect.value=n;const o=new en(s,r),a=n.minFilter;return n.minFilter===qn&&(n.minFilter=cn),new b0(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Zi extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A0={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bh extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ma=new N,C0=new N,R0=new Ne;class _i{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Ma.subVectors(i,n).cross(C0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||R0.getNormalMatrix(e),s=this.coplanarPoint(Ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ec,L0=new Ze(.5,.5),Hr=new N;class yc{constructor(e=new _i,n=new _i,i=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=En,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],v=r[8],x=r[9],p=r[10],f=r[11],b=r[12],S=r[13],E=r[14],C=r[15];if(s[0].setComponents(c-o,m-h,f-v,C-b).normalize(),s[1].setComponents(c+o,m+h,f+v,C+b).normalize(),s[2].setComponents(c+a,m+d,f+x,C+S).normalize(),s[3].setComponents(c-a,m-d,f-x,C-S).normalize(),i)s[4].setComponents(l,u,p,E).normalize(),s[5].setComponents(c-l,m-u,f-p,C-E).normalize();else if(s[4].setComponents(c-l,m-u,f-p,C-E).normalize(),n===En)s[5].setComponents(c+l,m+u,f+p,C+E).normalize();else if(n===po)s[5].setComponents(l,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const n=L0.distanceTo(e.center);return pi.radius=.7071067811865476+n,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sf extends Nt{constructor(e,n,i=Ai,s,r,o,a=un,l=un,c,h=Qs,d=1){if(h!==Qs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class No extends li{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=n/l,m=[],v=[],x=[],p=[];for(let f=0;f<h;f++){const b=f*u-o;for(let S=0;S<c;S++){const E=S*d-r;v.push(E,-b,0),x.push(0,0,1),p.push(S/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const S=b+c*f,E=b+c*(f+1),C=b+1+c*(f+1),R=b+1+c*f;m.push(S,E,R),m.push(E,C,R)}this.setIndex(m),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.widthSegments,e.heightSegments)}}class dr extends li{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,u=new N,m=[],v=[],x=[],p=[];for(let f=0;f<=i;f++){const b=[],S=f/i;let E=0;f===0&&o===0?E=.5/n:f===i&&l===Math.PI&&(E=-.5/n);for(let C=0;C<=n;C++){const R=C/n;d.x=-e*Math.cos(s+R*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+S*a),v.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(R+E,1-S),b.push(c++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<n;b++){const S=h[f][b+1],E=h[f][b],C=h[f+1][b],R=h[f+1][b+1];(f!==0||o>0)&&m.push(S,E,R),(f!==i-1||l<Math.PI)&&m.push(E,C,R)}this.setIndex(m),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class P0 extends Fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends Fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kn={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class D0{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const U0=new D0;let Sc=class{constructor(e){this.manager=e!==void 0?e:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class F0 extends Error{constructor(e,n){super(e),this.response=n}}class N0 extends Sc{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(Pn[e]!==void 0){Pn[e].push({onLoad:n,onProgress:i,onError:s});return}Pn[e]=[],Pn[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Pn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=u?parseInt(u):0,v=m!==0;let x=0;const p=new ReadableStream({start(f){b();function b(){d.read().then(({done:S,value:E})=>{if(S)f.close();else{x+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:m});for(let R=0,L=h.length;R<L;R++){const U=h[R];U.onProgress&&U.onProgress(C)}f.enqueue(E),b()}},S=>{f.error(S)})}}});return new Response(p)}else throw new F0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(u);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Kn.add(`file:${e}`,c);const h=Pn[e];delete Pn[e];for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Pn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Wi=new WeakMap;class O0 extends Sc{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let d=Wi.get(o);d===void 0&&(d=[],Wi.set(o,d)),d.push({onLoad:n,onError:s})}return o}const a=nr("img");function l(){h(),n&&n(this);const d=Wi.get(this)||[];for(let u=0;u<d.length;u++){const m=d[u];m.onLoad&&m.onLoad(this)}Wi.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Kn.remove(`image:${e}`);const u=Wi.get(this)||[];for(let m=0;m<u.length;m++){const v=u[m];v.onError&&v.onError(d)}Wi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class B0 extends tf{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class z0 extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Th=new pt;class k0{constructor(e,n,i=0,s=1/0){this.ray=new jd(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(e,n=!0,i=[]){return Ul(e,this,i,n),i.sort(Ah),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ul(e[s],this,i,n);return i.sort(Ah),i}}function Ah(t,e){return t.distance-e.distance}function Ul(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Ul(r[o],e,n,!0)}}function Ch(t,e,n,i){const s=H0(i);switch(n){case Hd:return t*e;case Gd:return t*e/s.components*s.byteLength;case mc:return t*e/s.components*s.byteLength;case Wd:return t*e*2/s.components*s.byteLength;case gc:return t*e*2/s.components*s.byteLength;case Vd:return t*e*3/s.components*s.byteLength;case hn:return t*e*4/s.components*s.byteLength;case vc:return t*e*4/s.components*s.byteLength;case Jr:case Qr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(t,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(t,8)*Math.max(e,8)/2;case dl:case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case no:case Rl:case Ll:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xd:case Pl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Il:case Dl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function H0(t){switch(t){case On:case Bd:return{byteLength:1,components:1};case Ks:case zd:case cr:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case Ai:case dc:case Un:return{byteLength:4,components:1};case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rf(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function V0(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,h);else{d.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<d.length;m++){const v=d[u],x=d[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++u,d[u]=x)}d.length=u+1;for(let m=0,v=d.length;m<v;m++){const x=d[m];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ME=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:G0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:Y0,alphatest_fragment:$0,alphatest_pars_fragment:q0,aomap_fragment:Z0,aomap_pars_fragment:j0,batching_pars_vertex:K0,batching_vertex:J0,begin_vertex:Q0,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:sx,clipping_planes_pars_fragment:rx,clipping_planes_pars_vertex:ox,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:hx,color_vertex:ux,common:dx,cube_uv_reflection_fragment:fx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:gx,emissivemap_fragment:vx,emissivemap_pars_fragment:_x,colorspace_fragment:xx,colorspace_pars_fragment:Ex,envmap_fragment:Mx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Sx,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Fx,envmap_vertex:bx,fog_vertex:Tx,fog_pars_vertex:Ax,fog_fragment:Cx,fog_pars_fragment:Rx,gradientmap_pars_fragment:Lx,lightmap_pars_fragment:Px,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Dx,lights_pars_begin:Ux,lights_toon_fragment:Nx,lights_toon_pars_fragment:Ox,lights_phong_fragment:Bx,lights_phong_pars_fragment:zx,lights_physical_fragment:kx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:qx,map_fragment:Zx,map_pars_fragment:jx,map_particle_fragment:Kx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:eE,morphinstance_vertex:tE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:sE,morphtarget_vertex:rE,normal_fragment_begin:oE,normal_fragment_maps:aE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:hE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:vE,premultiplied_alpha_fragment:_E,project_vertex:xE,dithering_fragment:EE,dithering_pars_fragment:ME,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:bE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:CE,skinning_pars_vertex:RE,skinning_vertex:LE,skinnormal_vertex:PE,specularmap_fragment:IE,specularmap_pars_fragment:DE,tonemapping_fragment:UE,tonemapping_pars_fragment:FE,transmission_fragment:NE,transmission_pars_fragment:OE,uv_pars_fragment:BE,uv_pars_vertex:zE,uv_vertex:kE,worldpos_vertex:HE,background_vert:VE,background_frag:GE,backgroundCube_vert:WE,backgroundCube_frag:XE,cube_vert:YE,cube_frag:$E,depth_vert:qE,depth_frag:ZE,distanceRGBA_vert:jE,distanceRGBA_frag:KE,equirect_vert:JE,equirect_frag:QE,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:sM,meshlambert_frag:rM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:hM,meshphong_frag:uM,meshphysical_vert:dM,meshphysical_frag:fM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:vM,shadow_vert:_M,shadow_frag:xM,sprite_vert:EM,sprite_frag:MM},se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},xn={basic:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ut([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ut([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ut([se.points,se.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ut([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ut([se.common,se.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ut([se.sprite,se.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Ut([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Ut([se.lights,se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};xn.physical={uniforms:Ut([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Vr={r:0,b:0,g:0},mi=new wn,yM=new pt;function SM(t,e,n,i,s,r,o){const a=new Qe(0);let l=r===!0?0:1,c,h,d=null,u=0,m=null;function v(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?n:e).get(E)),E}function x(S){let E=!1;const C=v(S);C===null?f(a,l):C&&C.isColor&&(f(C,1),E=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(S,E){const C=v(E);C&&(C.isCubeTexture||C.mapping===Uo)?(h===void 0&&(h=new en(new ur(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:us(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mi.copy(E.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(mi)),h.material.toneMapped=He.getTransfer(C.colorSpace)!==Ke,(d!==C||u!==C.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,m=t.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new en(new No(2,2),new oi({name:"BackgroundMaterial",uniforms:us(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=He.getTransfer(C.colorSpace)!==Ke,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,m=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,E){S.getRGB(Vr,ef(t)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,E,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:x,addToRenderList:p,dispose:b}}function wM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(M,T,W,H,X){let q=!1;const Y=d(H,W,T);r!==Y&&(r=Y,c(r.object)),q=m(M,H,W,X),q&&v(M,H,W,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(M,T,W,H),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function d(M,T,W){const H=W.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let q=X[T.id];q===void 0&&(q={},X[T.id]=q);let Y=q[H];return Y===void 0&&(Y=u(l()),q[H]=Y),Y}function u(M){const T=[],W=[],H=[];for(let X=0;X<n;X++)T[X]=0,W[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,T,W,H){const X=r.attributes,q=T.attributes;let Y=0;const Z=W.getAttributes();for(const z in Z)if(Z[z].location>=0){const he=X[z];let Me=q[z];if(Me===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function v(M,T,W,H){const X={},q=T.attributes;let Y=0;const Z=W.getAttributes();for(const z in Z)if(Z[z].location>=0){let he=q[z];he===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),X[z]=Me,Y++}r.attributes=X,r.attributesNum=Y,r.index=H}function x(){const M=r.newAttributes;for(let T=0,W=M.length;T<W;T++)M[T]=0}function p(M){f(M,0)}function f(M,T){const W=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;W[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),X[M]!==T&&(t.vertexAttribDivisor(M,T),X[M]=T)}function b(){const M=r.newAttributes,T=r.enabledAttributes;for(let W=0,H=T.length;W<H;W++)T[W]!==M[W]&&(t.disableVertexAttribArray(W),T[W]=0)}function S(M,T,W,H,X,q,Y){Y===!0?t.vertexAttribIPointer(M,T,W,X,q):t.vertexAttribPointer(M,T,W,H,X,q)}function E(M,T,W,H){x();const X=H.attributes,q=W.getAttributes(),Y=T.defaultAttributeValues;for(const Z in q){const z=q[Z];if(z.location>=0){let re=X[Z];if(re===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const he=re.normalized,Me=re.itemSize,Ue=e.get(re);if(Ue===void 0)continue;const rt=Ue.buffer,et=Ue.type,G=Ue.bytesPerElement,oe=et===t.INT||et===t.UNSIGNED_INT||re.gpuType===dc;if(re.isInterleavedBufferAttribute){const ne=re.data,be=ne.stride,Te=re.offset;if(ne.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)f(z.location+Le,ne.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Le=0;Le<z.locationSize;Le++)p(z.location+Le);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let Le=0;Le<z.locationSize;Le++)S(z.location+Le,Me/z.locationSize,et,he,be*G,(Te+Me/z.locationSize*Le)*G,oe)}else{if(re.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)f(z.location+ne,re.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ne=0;ne<z.locationSize;ne++)p(z.location+ne);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let ne=0;ne<z.locationSize;ne++)S(z.location+ne,Me/z.locationSize,et,he,Me*G,Me/z.locationSize*ne*G,oe)}}else if(Y!==void 0){const he=Y[Z];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(z.location,he);break;case 3:t.vertexAttrib3fv(z.location,he);break;case 4:t.vertexAttrib4fv(z.location,he);break;default:t.vertexAttrib1fv(z.location,he)}}}}b()}function C(){U();for(const M in i){const T=i[M];for(const W in T){const H=T[W];for(const X in H)h(H[X].object),delete H[X];delete T[W]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const T=i[M.id];for(const W in T){const H=T[W];for(const X in H)h(H[X].object),delete H[X];delete T[W]}delete i[M.id]}function L(M){for(const T in i){const W=i[T];if(W[M.id]===void 0)continue;const H=W[M.id];for(const X in H)h(H[X].object),delete H[X];delete W[M.id]}}function U(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function bM(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v];n.update(m,i,1)}function l(c,h,d,u){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],h[v],u[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x]*u[x];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TM(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==hn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const U=L===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==On&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Un&&!U)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:C,maxSamples:R}}function AM(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new _i,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!s||v===null||v.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,S=b*4;let E=f.clippingState||null;l.value=E,E=h(v,u,S,m);for(let C=0;C!==S;++C)E[C]=n[C];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const f=m+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,E=m;S!==x;++S,E+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function CM(t){let e=new WeakMap;function n(o,a){return a===sl?o.mapping=cs:a===rl&&(o.mapping=hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sl||a===rl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new T0(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ji=4,Rh=[.125,.215,.35,.446,.526,.582],Mi=20,ya=new B0,Lh=new Qe;let Sa=null,wa=0,ba=0,Ta=!1;const xi=(1+Math.sqrt(5))/2,Xi=1/xi,Ph=[new N(-xi,Xi,0),new N(xi,Xi,0),new N(-Xi,0,xi),new N(Xi,0,xi),new N(0,xi,-Xi),new N(0,xi,Xi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],RM=new N;class Ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=RM}=r;Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,wa,ba),this._renderer.xr.enabled=Ta,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:cr,format:hn,colorSpace:Ci,depthBuffer:!1},s=Dh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(r)),this._blurMaterial=PM(r,e,n)}return s}_compileMaterial(e){const n=new en(this._lodPlanes[0],e);this._renderer.compile(n,ya)}_sceneToCubeUV(e,n,i,s,r){const l=new Qt(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(Lh),d.toneMapping=jn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new hr({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),p=new en(new ur,x);let f=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,f=!0):(x.color.copy(Lh),f=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const C=this._cubeSize;Gr(s,E*C,S>2?C:0,C,C),d.setRenderTarget(s),f&&d.render(p,l),d.render(e,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=u,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===cs||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ya)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ph[(s-r-1)%Ph.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new en(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),x=r/v,p=isFinite(r)?1+Math.floor(h*x):Mi;p>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);const f=[];let b=0;for(let L=0;L<Mi;++L){const U=L/x,y=Math.exp(-U*U/2);f.push(y),L===0?b+=y:L<p&&(b+=2*y)}for(let L=0;L<f.length;L++)f[L]=f[L]/b;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=v,u.mipInt.value=S-i;const E=this._sizeLods[s],C=3*E*(s>S-ji?s-S+ji:0),R=4*(this._cubeSize-E);Gr(n,C,R,3*E,2*E),l.setRenderTarget(n),l.render(d,ya)}}function LM(t){const e=[],n=[],i=[];let s=t;const r=t-ji+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-ji?l=Rh[o-t+ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,x=3,p=2,f=1,b=new Float32Array(x*v*m),S=new Float32Array(p*v*m),E=new Float32Array(f*v*m);for(let R=0;R<m;R++){const L=R%3*2/3-1,U=R>2?0:-1,y=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];b.set(y,x*v*R),S.set(u,p*v*R);const M=[R,R,R,R,R,R];E.set(M,f*v*R)}const C=new li;C.setAttribute("position",new yn(b,x)),C.setAttribute("uv",new yn(S,p)),C.setAttribute("faceIndex",new yn(E,f)),e.push(C),s>ji&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dh(t,e,n){const i=new ri(t,e,n);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function PM(t,e,n){const i=new Float32Array(Mi),s=new N(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Uh(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fh(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sl||l===rl,h=l===cs||l===hs;if(c||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Ih(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(n===null&&(n=new Ih(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function DM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&es("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function UM(t,e,n,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(d){const u=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let S=0,E=b.length;S<E;S+=3){const C=b[S+0],R=b[S+1],L=b[S+2];u.push(C,R,R,L,L,C)}}else if(v!==void 0){const b=v.array;x=v.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const C=S+0,R=S+1,L=S+2;u.push(C,R,R,L,L,C)}}else return;const p=new(qd(u)?Qd:Jd)(u,1);p.version=x;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function FM(t,e,n){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){t.drawElements(i,m,r,u*o),n.update(m,i,1)}function c(u,m,v){v!==0&&(t.drawElementsInstanced(i,m,r,u*o,v),n.update(m,i,v))}function h(u,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,u,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];n.update(p,i,1)}function d(u,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)c(u[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,u,0,x,0,v);let f=0;for(let b=0;b<v;b++)f+=m[b]*x[b];n.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function NM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function OM(t,e,n){const i=new WeakMap,s=new ft;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let M=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*R*4*d),U=new Zd(L,C,R,d);U.type=Un,U.needsUpdate=!0;const y=E*4;for(let T=0;T<d;T++){const W=f[T],H=b[T],X=S[T],q=C*R*4*T;for(let Y=0;Y<W.count;Y++){const Z=Y*y;v===!0&&(s.fromBufferAttribute(W,Y),L[q+Z+0]=s.x,L[q+Z+1]=s.y,L[q+Z+2]=s.z,L[q+Z+3]=0),x===!0&&(s.fromBufferAttribute(H,Y),L[q+Z+4]=s.x,L[q+Z+5]=s.y,L[q+Z+6]=s.z,L[q+Z+7]=0),p===!0&&(s.fromBufferAttribute(X,Y),L[q+Z+8]=s.x,L[q+Z+9]=s.y,L[q+Z+10]=s.z,L[q+Z+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:U,size:new Ze(C,R)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function BM(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const of=new Nt,Nh=new sf(1,1),af=new Zd,lf=new c0,cf=new nf,Oh=[],Bh=[],zh=new Float32Array(16),kh=new Float32Array(9),Hh=new Float32Array(4);function xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function _t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Oo(t,e){let n=Bh[e];n===void 0&&(n=new Int32Array(e),Bh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function HM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_t(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function VM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function GM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;Hh.set(i),t.uniformMatrix2fv(this.addr,!1,Hh),xt(n,i)}}function WM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;kh.set(i),t.uniformMatrix3fv(this.addr,!1,kh),xt(n,i)}}function XM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;zh.set(i),t.uniformMatrix4fv(this.addr,!1,zh),xt(n,i)}}function YM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $M(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function qM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function ZM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function jM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function QM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function ey(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Nh.compareFunction=Yd,r=Nh):r=of,n.setTexture2D(e||r,s)}function ty(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||lf,s)}function ny(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||cf,s)}function iy(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||af,s)}function sy(t){switch(t){case 5126:return zM;case 35664:return kM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return YM;case 35667:case 35671:return $M;case 35668:case 35672:return qM;case 35669:case 35673:return ZM;case 5125:return jM;case 36294:return KM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function ry(t,e){t.uniform1fv(this.addr,e)}function oy(t,e){const n=xs(e,this.size,2);t.uniform2fv(this.addr,n)}function ay(t,e){const n=xs(e,this.size,3);t.uniform3fv(this.addr,n)}function ly(t,e){const n=xs(e,this.size,4);t.uniform4fv(this.addr,n)}function cy(t,e){const n=xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hy(t,e){const n=xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uy(t,e){const n=xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dy(t,e){t.uniform1iv(this.addr,e)}function fy(t,e){t.uniform2iv(this.addr,e)}function py(t,e){t.uniform3iv(this.addr,e)}function my(t,e){t.uniform4iv(this.addr,e)}function gy(t,e){t.uniform1uiv(this.addr,e)}function vy(t,e){t.uniform2uiv(this.addr,e)}function _y(t,e){t.uniform3uiv(this.addr,e)}function xy(t,e){t.uniform4uiv(this.addr,e)}function Ey(t,e,n){const i=this.cache,s=e.length,r=Oo(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||of,r[o])}function My(t,e,n){const i=this.cache,s=e.length,r=Oo(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||lf,r[o])}function yy(t,e,n){const i=this.cache,s=e.length,r=Oo(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||cf,r[o])}function Sy(t,e,n){const i=this.cache,s=e.length,r=Oo(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||af,r[o])}function wy(t){switch(t){case 5126:return ry;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return vy;case 36295:return _y;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return Sy}}class by{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sy(n.type)}}class Ty{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wy(n.type)}}class Ay{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Vh(t,e){t.seq.push(e),t.map[e.id]=e}function Cy(t,e,n){const i=t.name,s=i.length;for(Aa.lastIndex=0;;){const r=Aa.exec(i),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vh(n,c===void 0?new by(a,t,e):new Ty(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Ay(a),Vh(n,d)),n=d}}}class io{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);Cy(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Gh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ry=37297;let Ly=0;function Py(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Wh=new Ne;function Iy(t){He._getMatrix(Wh,He.workingColorSpace,t);const e=`mat3( ${Wh.elements.map(n=>n.toFixed(4))} )`;switch(He.getTransfer(t)){case fo:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Py(t.getShaderSource(e),a)}else return r}function Dy(t,e){const n=Iy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Uy(t,e){let n;switch(e){case Nd:n="Linear";break;case y_:n="Reinhard";break;case S_:n="Cineon";break;case w_:n="ACESFilmic";break;case T_:n="AgX";break;case A_:n="Neutral";break;case b_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wr=new N;function Fy(){He.getLuminanceCoefficients(Wr);const t=Wr.x.toFixed(4),e=Wr.y.toFixed(4),n=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ny(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Oy(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function By(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Rs(t){return t!==""}function Yh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(t){return t.replace(zy,Hy)}const ky=new Map;function Hy(t,e){let n=De[e];if(n===void 0){const i=ky.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fl(n)}const Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(t){return t.replace(Vy,Gy)}function Gy(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wy(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Xy(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case cs:case hs:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yy(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function $y(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fd:e="ENVMAP_BLENDING_MULTIPLY";break;case E_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function qy(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Zy(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Wy(n),c=Xy(n),h=Yy(n),d=$y(n),u=qy(n),m=Ny(n),v=Oy(r),x=s.createProgram();let p,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Rs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(p=[Zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[Zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==jn?"#define TONE_MAPPING":"",n.toneMapping!==jn?De.tonemapping_pars_fragment:"",n.toneMapping!==jn?Uy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Dy("linearToOutputTexel",n.outputColorSpace),Fy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Fl(o),o=Yh(o,n),o=$h(o,n),a=Fl(a),a=Yh(a,n),a=$h(a,n),o=qh(o),a=qh(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+p+o,E=b+f+a,C=Gh(s,s.VERTEX_SHADER,S),R=Gh(s,s.FRAGMENT_SHADER,E);s.attachShader(x,C),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(T){if(t.debug.checkShaderErrors){const W=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(R)||"",q=W.trim(),Y=H.trim(),Z=X.trim();let z=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,C,R);else{const he=Xh(s,C,"vertex"),Me=Xh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+q+`
`+he+`
`+Me)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||Z==="")&&(re=!1);re&&(T.diagnostics={runnable:z,programLog:q,vertexShader:{log:Y,prefix:p},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(C),s.deleteShader(R),U=new io(s,x),y=By(s,x)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Ry)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let jy=0;class Ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Jy(e),n.set(e,i)),i}}class Jy{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}}function Qy(t,e,n,i,s,r,o){const a=new Mc,l=new Ky,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,T,W,H){const X=W.fog,q=H.geometry,Y=y.isMeshStandardMaterial?W.environment:null,Z=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),z=Z&&Z.mapping===Uo?Z.image.height:null,re=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=he!==void 0?he.length:0;let Ue=0;q.morphAttributes.position!==void 0&&(Ue=1),q.morphAttributes.normal!==void 0&&(Ue=2),q.morphAttributes.color!==void 0&&(Ue=3);let rt,et,G,oe;if(re){const Ye=xn[re];rt=Ye.vertexShader,et=Ye.fragmentShader}else rt=y.vertexShader,et=y.fragmentShader,l.update(y),G=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const ne=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Te=H.isInstancedMesh===!0,Le=H.isBatchedMesh===!0,ut=!!y.map,ke=!!y.matcap,A=!!Z,nt=!!y.aoMap,Se=!!y.lightMap,Xe=!!y.bumpMap,Ee=!!y.normalMap,ot=!!y.displacementMap,fe=!!y.emissiveMap,Fe=!!y.metalnessMap,Et=!!y.roughnessMap,dt=y.anisotropy>0,w=y.clearcoat>0,g=y.dispersion>0,F=y.iridescence>0,V=y.sheen>0,j=y.transmission>0,k=dt&&!!y.anisotropyMap,xe=w&&!!y.clearcoatMap,te=w&&!!y.clearcoatNormalMap,ge=w&&!!y.clearcoatRoughnessMap,ve=F&&!!y.iridescenceMap,Q=F&&!!y.iridescenceThicknessMap,ce=V&&!!y.sheenColorMap,Ce=V&&!!y.sheenRoughnessMap,_e=!!y.specularMap,ae=!!y.specularColorMap,Ie=!!y.specularIntensityMap,P=j&&!!y.transmissionMap,ee=j&&!!y.thicknessMap,ie=!!y.gradientMap,de=!!y.alphaMap,K=y.alphaTest>0,$=!!y.alphaHash,me=!!y.extensions;let Pe=jn;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const it={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:et,defines:y.defines,customVertexShaderID:G,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Le,batchingColor:Le&&H._colorsTexture!==null,instancing:Te,instancingColor:Te&&H.instanceColor!==null,instancingMorph:Te&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ci,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:ke,envMap:A,envMapMode:A&&Z.mapping,envMapCubeUVHeight:z,aoMap:nt,lightMap:Se,bumpMap:Xe,normalMap:Ee,displacementMap:u&&ot,emissiveMap:fe,normalMapObjectSpace:Ee&&y.normalMapType===I_,normalMapTangentSpace:Ee&&y.normalMapType===P_,metalnessMap:Fe,roughnessMap:Et,anisotropy:dt,anisotropyMap:k,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,dispersion:g,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:Q,sheen:V,sheenColorMap:ce,sheenRoughnessMap:Ce,specularMap:_e,specularColorMap:ae,specularIntensityMap:Ie,transmission:j,transmissionMap:P,thicknessMap:ee,gradientMap:ie,opaque:y.transparent===!1&&y.blending===Qi&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:K,alphaHash:$,combine:y.combine,mapUv:ut&&x(y.map.channel),aoMapUv:nt&&x(y.aoMap.channel),lightMapUv:Se&&x(y.lightMap.channel),bumpMapUv:Xe&&x(y.bumpMap.channel),normalMapUv:Ee&&x(y.normalMap.channel),displacementMapUv:ot&&x(y.displacementMap.channel),emissiveMapUv:fe&&x(y.emissiveMap.channel),metalnessMapUv:Fe&&x(y.metalnessMap.channel),roughnessMapUv:Et&&x(y.roughnessMap.channel),anisotropyMapUv:k&&x(y.anisotropyMap.channel),clearcoatMapUv:xe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(y.sheenRoughnessMap.channel),specularMapUv:_e&&x(y.specularMap.channel),specularColorMapUv:ae&&x(y.specularColorMap.channel),specularIntensityMapUv:Ie&&x(y.specularIntensityMap.channel),transmissionMapUv:P&&x(y.transmissionMap.channel),thicknessMapUv:ee&&x(y.thicknessMap.channel),alphaMapUv:de&&x(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ee||dt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(ut||de),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&He.getTransfer(y.map.colorSpace)===Ke,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&He.getTransfer(y.emissiveMap.colorSpace)===Ke,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)M.push(T),M.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(b(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){const M=v[y.type];let T;if(M){const W=xn[M];T=y0.clone(W.uniforms)}else T=y.uniforms;return T}function C(y,M){let T;for(let W=0,H=h.length;W<H;W++){const X=h[W];if(X.cacheKey===M){T=X,++T.usedTimes;break}}return T===void 0&&(T=new Zy(t,M,y,r),h.push(T)),T}function R(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function L(y){l.remove(y)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:U}}function eS(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function tS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,u,m,v,x,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function a(d,u,m,v,x,p){const f=o(d,u,m,v,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):n.push(f)}function l(d,u,m,v,x,p){const f=o(d,u,m,v,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):n.unshift(f)}function c(d,u){n.length>1&&n.sort(d||tS),i.length>1&&i.sort(u||jh),s.length>1&&s.sort(u||jh)}function h(){for(let d=e,u=t.length;d<u;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function nS(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Kh,t.set(i,[o])):s>=r.length?(o=new Kh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function iS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Qe};break;case"SpotLight":n={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function sS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rS=0;function oS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aS(t){const e=new iS,n=sS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new pt,o=new pt;function a(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,v=0,x=0,p=0,f=0,b=0,S=0,E=0,C=0,R=0,L=0;c.sort(oS);for(let y=0,M=c.length;y<M;y++){const T=c[y],W=T.color,H=T.intensity,X=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=W.r*H,d+=W.g*H,u+=W.b*H;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(T.sh.coefficients[Y],H);L++}else if(T.isDirectionalLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Z=T.shadow,z=n.get(T);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=T.shadow.matrix,b++}i.directional[m]=Y,m++}else if(T.isSpotLight){const Y=e.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(W).multiplyScalar(H),Y.distance=X,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,i.spot[x]=Y;const Z=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,Z.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[x]=Z.matrix,T.castShadow){const z=n.get(T);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=q,E++}x++}else if(T.isRectAreaLight){const Y=e.get(T);Y.color.copy(W).multiplyScalar(H),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=Y,p++}else if(T.isPointLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const Z=T.shadow,z=n.get(T);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=T.shadow.matrix,S++}i.point[v]=Y,v++}else if(T.isHemisphereLight){const Y=e.get(T);Y.skyColor.copy(T.color).multiplyScalar(H),Y.groundColor.copy(T.groundColor).multiplyScalar(H),i.hemi[f]=Y,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const U=i.hash;(U.directionalLength!==m||U.pointLength!==v||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==f||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==E||U.numSpotMaps!==C||U.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,U.directionalLength=m,U.pointLength=v,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=f,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=E,U.numSpotMaps=C,U.numLightProbes=L,i.version=rS++)}function l(c,h){let d=0,u=0,m=0,v=0,x=0;const p=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const S=c[f];if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(S.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Jh(t){const e=new aS(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lS(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Jh(t),e.set(s,[a])):r>=o.length?(a=new Jh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uS(t,e,n){let i=new yc;const s=new Ze,r=new Ze,o=new ft,a=new P0({depthPacking:L_}),l=new I0,c={},h=n.maxTextureSize,d={[si]:zt,[zt]:si,[Dn]:Dn},u=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:cS,fragmentShader:hS}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new li;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new en(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let f=this.type;this.render=function(R,L,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const y=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Zn),W.buffers.depth.getReversed()?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=f!==In&&this.type===In,X=f===In&&this.type!==In;for(let q=0,Y=R.length;q<Y;q++){const Z=R[q],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const re=z.getFrameExtents();if(s.multiply(re),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,z.mapSize.y=r.y)),z.map===null||H===!0||X===!0){const Me=this.type!==In?{minFilter:un,magFilter:un}:{};z.map!==null&&z.map.dispose(),z.map=new ri(s.x,s.y,Me),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const he=z.getViewportCount();for(let Me=0;Me<he;Me++){const Ue=z.getViewport(Me);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),W.viewport(o),z.updateMatrices(Z,Me),i=z.getFrustum(),E(L,U,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===In&&b(z,U),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(y,M,T)};function b(R,L){const U=e.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ri(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(L,null,U,u,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(L,null,U,m,x,null)}function S(R,L,U,y){let M=null;const T=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=U.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const W=M.uuid,H=L.uuid;let X=c[W];X===void 0&&(X={},c[W]=X);let q=X[H];q===void 0&&(q=M.clone(),X[H]=q,L.addEventListener("dispose",C)),M=q}if(M.visible=L.visible,M.wireframe=L.wireframe,y===In?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=U}return M}function E(R,L,U,y,M){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===In)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const H=e.update(R),X=R.material;if(Array.isArray(X)){const q=H.groups;for(let Y=0,Z=q.length;Y<Z;Y++){const z=q[Y],re=X[z.materialIndex];if(re&&re.visible){const he=S(R,re,y,M);R.onBeforeShadow(t,R,L,U,H,he,z),t.renderBufferDirect(U,null,H,he,R,z),R.onAfterShadow(t,R,L,U,H,he,z)}}}else if(X.visible){const q=S(R,X,y,M);R.onBeforeShadow(t,R,L,U,H,q,null),t.renderBufferDirect(U,null,H,q,R,null),R.onAfterShadow(t,R,L,U,H,q,null)}}const W=R.children;for(let H=0,X=W.length;H<X;H++)E(W[H],L,U,y,M)}function C(R){R.target.removeEventListener("dispose",C);for(const U in c){const y=c[U],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const dS={[Ka]:Ja,[Qa]:nl,[el]:il,[ls]:tl,[Ja]:Ka,[nl]:Qa,[il]:el,[tl]:ls};function fS(t,e){function n(){let P=!1;const ee=new ft;let ie=null;const de=new ft(0,0,0,0);return{setMask:function(K){ie!==K&&!P&&(t.colorMask(K,K,K,K),ie=K)},setLocked:function(K){P=K},setClear:function(K,$,me,Pe,it){it===!0&&(K*=Pe,$*=Pe,me*=Pe),ee.set(K,$,me,Pe),de.equals(ee)===!1&&(t.clearColor(K,$,me,Pe),de.copy(ee))},reset:function(){P=!1,ie=null,de.set(-1,0,0,0)}}}function i(){let P=!1,ee=!1,ie=null,de=null,K=null;return{setReversed:function($){if(ee!==$){const me=e.get("EXT_clip_control");$?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ee=$;const Pe=K;K=null,this.setClear(Pe)}},getReversed:function(){return ee},setTest:function($){$?ne(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function($){ie!==$&&!P&&(t.depthMask($),ie=$)},setFunc:function($){if(ee&&($=dS[$]),de!==$){switch($){case Ka:t.depthFunc(t.NEVER);break;case Ja:t.depthFunc(t.ALWAYS);break;case Qa:t.depthFunc(t.LESS);break;case ls:t.depthFunc(t.LEQUAL);break;case el:t.depthFunc(t.EQUAL);break;case tl:t.depthFunc(t.GEQUAL);break;case nl:t.depthFunc(t.GREATER);break;case il:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=$}},setLocked:function($){P=$},setClear:function($){K!==$&&(ee&&($=1-$),t.clearDepth($),K=$)},reset:function(){P=!1,ie=null,de=null,K=null,ee=!1}}}function s(){let P=!1,ee=null,ie=null,de=null,K=null,$=null,me=null,Pe=null,it=null;return{setTest:function(Ye){P||(Ye?ne(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Ye){ee!==Ye&&!P&&(t.stencilMask(Ye),ee=Ye)},setFunc:function(Ye,bn,gn){(ie!==Ye||de!==bn||K!==gn)&&(t.stencilFunc(Ye,bn,gn),ie=Ye,de=bn,K=gn)},setOp:function(Ye,bn,gn){($!==Ye||me!==bn||Pe!==gn)&&(t.stencilOp(Ye,bn,gn),$=Ye,me=bn,Pe=gn)},setLocked:function(Ye){P=Ye},setClear:function(Ye){it!==Ye&&(t.clearStencil(Ye),it=Ye)},reset:function(){P=!1,ee=null,ie=null,de=null,K=null,$=null,me=null,Pe=null,it=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,m=[],v=null,x=!1,p=null,f=null,b=null,S=null,E=null,C=null,R=null,L=new Qe(0,0,0),U=0,y=!1,M=null,T=null,W=null,H=null,X=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=Z>=2);let re=null,he={};const Me=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),rt=new ft().fromArray(Me),et=new ft().fromArray(Ue);function G(P,ee,ie,de){const K=new Uint8Array(4),$=t.createTexture();t.bindTexture(P,$),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let me=0;me<ie;me++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,K):t.texImage2D(ee+me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,K);return $}const oe={};oe[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(ls),Xe(!1),Ee(eh),ne(t.CULL_FACE),nt(Zn);function ne(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function be(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Te(P,ee){return d[P]!==ee?(t.bindFramebuffer(P,ee),d[P]=ee,P===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ee),P===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Le(P,ee){let ie=m,de=!1;if(P){ie=u.get(ee),ie===void 0&&(ie=[],u.set(ee,ie));const K=P.textures;if(ie.length!==K.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let $=0,me=K.length;$<me;$++)ie[$]=t.COLOR_ATTACHMENT0+$;ie.length=K.length,de=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,de=!0);de&&t.drawBuffers(ie)}function ut(P){return v!==P?(t.useProgram(P),v=P,!0):!1}const ke={[Ei]:t.FUNC_ADD,[i_]:t.FUNC_SUBTRACT,[s_]:t.FUNC_REVERSE_SUBTRACT};ke[r_]=t.MIN,ke[o_]=t.MAX;const A={[a_]:t.ZERO,[l_]:t.ONE,[c_]:t.SRC_COLOR,[Za]:t.SRC_ALPHA,[m_]:t.SRC_ALPHA_SATURATE,[f_]:t.DST_COLOR,[u_]:t.DST_ALPHA,[h_]:t.ONE_MINUS_SRC_COLOR,[ja]:t.ONE_MINUS_SRC_ALPHA,[p_]:t.ONE_MINUS_DST_COLOR,[d_]:t.ONE_MINUS_DST_ALPHA,[g_]:t.CONSTANT_COLOR,[v_]:t.ONE_MINUS_CONSTANT_COLOR,[__]:t.CONSTANT_ALPHA,[x_]:t.ONE_MINUS_CONSTANT_ALPHA};function nt(P,ee,ie,de,K,$,me,Pe,it,Ye){if(P===Zn){x===!0&&(be(t.BLEND),x=!1);return}if(x===!1&&(ne(t.BLEND),x=!0),P!==n_){if(P!==p||Ye!==y){if((f!==Ei||E!==Ei)&&(t.blendEquation(t.FUNC_ADD),f=Ei,E=Ei),Ye)switch(P){case Qi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.ONE,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ih:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Qi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case nh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,S=null,C=null,R=null,L.set(0,0,0),U=0,p=P,y=Ye}return}K=K||ee,$=$||ie,me=me||de,(ee!==f||K!==E)&&(t.blendEquationSeparate(ke[ee],ke[K]),f=ee,E=K),(ie!==b||de!==S||$!==C||me!==R)&&(t.blendFuncSeparate(A[ie],A[de],A[$],A[me]),b=ie,S=de,C=$,R=me),(Pe.equals(L)===!1||it!==U)&&(t.blendColor(Pe.r,Pe.g,Pe.b,it),L.copy(Pe),U=it),p=P,y=!1}function Se(P,ee){P.side===Dn?be(t.CULL_FACE):ne(t.CULL_FACE);let ie=P.side===zt;ee&&(ie=!ie),Xe(ie),P.blending===Qi&&P.transparent===!1?nt(Zn):nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const de=P.stencilWrite;a.setTest(de),de&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),fe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(P){M!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),M=P)}function Ee(P){P!==Qv?(ne(t.CULL_FACE),P!==T&&(P===eh?t.cullFace(t.BACK):P===e_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),T=P}function ot(P){P!==W&&(Y&&t.lineWidth(P),W=P)}function fe(P,ee,ie){P?(ne(t.POLYGON_OFFSET_FILL),(H!==ee||X!==ie)&&(t.polygonOffset(ee,ie),H=ee,X=ie)):be(t.POLYGON_OFFSET_FILL)}function Fe(P){P?ne(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function Et(P){P===void 0&&(P=t.TEXTURE0+q-1),re!==P&&(t.activeTexture(P),re=P)}function dt(P,ee,ie){ie===void 0&&(re===null?ie=t.TEXTURE0+q-1:ie=re);let de=he[ie];de===void 0&&(de={type:void 0,texture:void 0},he[ie]=de),(de.type!==P||de.texture!==ee)&&(re!==ie&&(t.activeTexture(ie),re=ie),t.bindTexture(P,ee||oe[P]),de.type=P,de.texture=ee)}function w(){const P=he[re];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{t.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{t.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(P){rt.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),rt.copy(P))}function Ce(P){et.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function _e(P,ee){let ie=c.get(ee);ie===void 0&&(ie=new WeakMap,c.set(ee,ie));let de=ie.get(P);de===void 0&&(de=t.getUniformBlockIndex(ee,P.name),ie.set(P,de))}function ae(P,ee){const de=c.get(ee).get(P);l.get(ee)!==de&&(t.uniformBlockBinding(ee,de,P.__bindingPointIndex),l.set(ee,de))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},re=null,he={},d={},u=new WeakMap,m=[],v=null,x=!1,p=null,f=null,b=null,S=null,E=null,C=null,R=null,L=new Qe(0,0,0),U=0,y=!1,M=null,T=null,W=null,H=null,X=null,rt.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:be,bindFramebuffer:Te,drawBuffers:Le,useProgram:ut,setBlending:nt,setMaterial:Se,setFlipSided:Xe,setCullFace:Ee,setLineWidth:ot,setPolygonOffset:fe,setScissorTest:Fe,activeTexture:Et,bindTexture:dt,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:ve,texImage3D:Q,updateUBOMapping:_e,uniformBlockBinding:ae,texStorage2D:te,texStorage3D:ge,texSubImage2D:V,texSubImage3D:j,compressedTexSubImage2D:k,compressedTexSubImage3D:xe,scissor:ce,viewport:Ce,reset:Ie}}function pS(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return m?new OffscreenCanvas(w,g):nr("canvas")}function x(w,g,F){let V=1;const j=dt(w);if((j.width>F||j.height>F)&&(V=F/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const k=Math.floor(V*j.width),xe=Math.floor(V*j.height);d===void 0&&(d=v(k,xe));const te=g?v(k,xe):d;return te.width=k,te.height=xe,te.getContext("2d").drawImage(w,0,0,k,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+k+"x"+xe+")."),te}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function p(w){return w.generateMipmaps}function f(w){t.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(w,g,F,V,j=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let k=g;if(g===t.RED&&(F===t.FLOAT&&(k=t.R32F),F===t.HALF_FLOAT&&(k=t.R16F),F===t.UNSIGNED_BYTE&&(k=t.R8)),g===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.R8UI),F===t.UNSIGNED_SHORT&&(k=t.R16UI),F===t.UNSIGNED_INT&&(k=t.R32UI),F===t.BYTE&&(k=t.R8I),F===t.SHORT&&(k=t.R16I),F===t.INT&&(k=t.R32I)),g===t.RG&&(F===t.FLOAT&&(k=t.RG32F),F===t.HALF_FLOAT&&(k=t.RG16F),F===t.UNSIGNED_BYTE&&(k=t.RG8)),g===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RG8UI),F===t.UNSIGNED_SHORT&&(k=t.RG16UI),F===t.UNSIGNED_INT&&(k=t.RG32UI),F===t.BYTE&&(k=t.RG8I),F===t.SHORT&&(k=t.RG16I),F===t.INT&&(k=t.RG32I)),g===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RGB8UI),F===t.UNSIGNED_SHORT&&(k=t.RGB16UI),F===t.UNSIGNED_INT&&(k=t.RGB32UI),F===t.BYTE&&(k=t.RGB8I),F===t.SHORT&&(k=t.RGB16I),F===t.INT&&(k=t.RGB32I)),g===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),F===t.UNSIGNED_INT&&(k=t.RGBA32UI),F===t.BYTE&&(k=t.RGBA8I),F===t.SHORT&&(k=t.RGBA16I),F===t.INT&&(k=t.RGBA32I)),g===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),g===t.RGBA){const xe=j?fo:He.getTransfer(V);F===t.FLOAT&&(k=t.RGBA32F),F===t.HALF_FLOAT&&(k=t.RGBA16F),F===t.UNSIGNED_BYTE&&(k=xe===Ke?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(w,g){let F;return w?g===null||g===Ai||g===Js?F=t.DEPTH24_STENCIL8:g===Un?F=t.DEPTH32F_STENCIL8:g===Ks&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ai||g===Js?F=t.DEPTH_COMPONENT24:g===Un?F=t.DEPTH_COMPONENT32F:g===Ks&&(F=t.DEPTH_COMPONENT16),F}function C(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==un&&w.minFilter!==cn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),U(g),g.isVideoTexture&&h.delete(g)}function L(w){const g=w.target;g.removeEventListener("dispose",L),M(g)}function U(w){const g=i.get(w);if(g.__webglInit===void 0)return;const F=w.source,V=u.get(F);if(V){const j=V[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(w),Object.keys(V).length===0&&u.delete(F)}i.remove(w)}function y(w){const g=i.get(w);t.deleteTexture(g.__webglTexture);const F=w.source,V=u.get(F);delete V[g.__cacheKey],o.memory.textures--}function M(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let j=0;j<g.__webglFramebuffer[V].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[V][j]);else t.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)t.deleteFramebuffer(g.__webglFramebuffer[V]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=w.textures;for(let V=0,j=F.length;V<j;V++){const k=i.get(F[V]);k.__webglTexture&&(t.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(F[V])}i.remove(w)}let T=0;function W(){T=0}function H(){const w=T;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),T+=1,w}function X(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function q(w,g){const F=i.get(w);if(w.isVideoTexture&&Fe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,w,g);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+g)}function Y(w,g){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){oe(F,w,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+g)}function Z(w,g){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){oe(F,w,g);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+g)}function z(w,g){const F=i.get(w);if(w.version>0&&F.__version!==w.version){ne(F,w,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+g)}const re={[ol]:t.REPEAT,[Si]:t.CLAMP_TO_EDGE,[al]:t.MIRRORED_REPEAT},he={[un]:t.NEAREST,[C_]:t.NEAREST_MIPMAP_NEAREST,[wr]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Qo]:t.LINEAR_MIPMAP_NEAREST,[qn]:t.LINEAR_MIPMAP_LINEAR},Me={[D_]:t.NEVER,[z_]:t.ALWAYS,[U_]:t.LESS,[Yd]:t.LEQUAL,[F_]:t.EQUAL,[B_]:t.GEQUAL,[N_]:t.GREATER,[O_]:t.NOTEQUAL};function Ue(w,g){if(g.type===Un&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===cn||g.magFilter===Qo||g.magFilter===wr||g.magFilter===qn||g.minFilter===cn||g.minFilter===Qo||g.minFilter===wr||g.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,re[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,re[g.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,re[g.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,he[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===un||g.minFilter!==wr&&g.minFilter!==qn||g.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function rt(w,g){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const V=g.source;let j=u.get(V);j===void 0&&(j={},u.set(V,j));const k=X(g);if(k!==w.__cacheKey){j[k]===void 0&&(j[k]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[k].usedTimes++;const xe=j[w.__cacheKey];xe!==void 0&&(j[w.__cacheKey].usedTimes--,xe.usedTimes===0&&y(g)),w.__cacheKey=k,w.__webglTexture=j[k].texture}return F}function et(w,g,F){return Math.floor(Math.floor(w/F)/g)}function G(w,g,F,V){const k=w.updateRanges;if(k.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,F,V,g.data);else{k.sort((Q,ce)=>Q.start-ce.start);let xe=0;for(let Q=1;Q<k.length;Q++){const ce=k[xe],Ce=k[Q],_e=ce.start+ce.count,ae=et(Ce.start,g.width,4),Ie=et(ce.start,g.width,4);Ce.start<=_e+1&&ae===Ie&&et(Ce.start+Ce.count-1,g.width,4)===ae?ce.count=Math.max(ce.count,Ce.start+Ce.count-ce.start):(++xe,k[xe]=Ce)}k.length=xe+1;const te=t.getParameter(t.UNPACK_ROW_LENGTH),ge=t.getParameter(t.UNPACK_SKIP_PIXELS),ve=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Q=0,ce=k.length;Q<ce;Q++){const Ce=k[Q],_e=Math.floor(Ce.start/4),ae=Math.ceil(Ce.count/4),Ie=_e%g.width,P=Math.floor(_e/g.width),ee=ae,ie=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Ie,P,ee,ie,F,V,g.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,te),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function oe(w,g,F){let V=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=t.TEXTURE_3D);const j=rt(w,g),k=g.source;n.bindTexture(V,w.__webglTexture,t.TEXTURE0+F);const xe=i.get(k);if(k.version!==xe.__version||j===!0){n.activeTexture(t.TEXTURE0+F);const te=He.getPrimaries(He.workingColorSpace),ge=g.colorSpace===Yn?null:He.getPrimaries(g.colorSpace),ve=g.colorSpace===Yn||te===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=x(g.image,!1,s.maxTextureSize);Q=Et(g,Q);const ce=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type);let _e=S(g.internalFormat,ce,Ce,g.colorSpace,g.isVideoTexture);Ue(V,g);let ae;const Ie=g.mipmaps,P=g.isVideoTexture!==!0,ee=xe.__version===void 0||j===!0,ie=k.dataReady,de=C(g,Q);if(g.isDepthTexture)_e=E(g.format===er,g.type),ee&&(P?n.texStorage2D(t.TEXTURE_2D,1,_e,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,_e,Q.width,Q.height,0,ce,Ce,null));else if(g.isDataTexture)if(Ie.length>0){P&&ee&&n.texStorage2D(t.TEXTURE_2D,de,_e,Ie[0].width,Ie[0].height);for(let K=0,$=Ie.length;K<$;K++)ae=Ie[K],P?ie&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ae.width,ae.height,ce,Ce,ae.data):n.texImage2D(t.TEXTURE_2D,K,_e,ae.width,ae.height,0,ce,Ce,ae.data);g.generateMipmaps=!1}else P?(ee&&n.texStorage2D(t.TEXTURE_2D,de,_e,Q.width,Q.height),ie&&G(g,Q,ce,Ce)):n.texImage2D(t.TEXTURE_2D,0,_e,Q.width,Q.height,0,ce,Ce,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,_e,Ie[0].width,Ie[0].height,Q.depth);for(let K=0,$=Ie.length;K<$;K++)if(ae=Ie[K],g.format!==hn)if(ce!==null)if(P){if(ie)if(g.layerUpdates.size>0){const me=Ch(ae.width,ae.height,g.format,g.type);for(const Pe of g.layerUpdates){const it=ae.data.subarray(Pe*me/ae.data.BYTES_PER_ELEMENT,(Pe+1)*me/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Pe,ae.width,ae.height,1,ce,it)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,Q.depth,ce,ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,_e,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,Q.depth,ce,Ce,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,_e,ae.width,ae.height,Q.depth,0,ce,Ce,ae.data)}else{P&&ee&&n.texStorage2D(t.TEXTURE_2D,de,_e,Ie[0].width,Ie[0].height);for(let K=0,$=Ie.length;K<$;K++)ae=Ie[K],g.format!==hn?ce!==null?P?ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ae.width,ae.height,ce,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,K,_e,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ie&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ae.width,ae.height,ce,Ce,ae.data):n.texImage2D(t.TEXTURE_2D,K,_e,ae.width,ae.height,0,ce,Ce,ae.data)}else if(g.isDataArrayTexture)if(P){if(ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,_e,Q.width,Q.height,Q.depth),ie)if(g.layerUpdates.size>0){const K=Ch(Q.width,Q.height,g.format,g.type);for(const $ of g.layerUpdates){const me=Q.data.subarray($*K/Q.data.BYTES_PER_ELEMENT,($+1)*K/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ce,Ce,me)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ce,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,ce,Ce,Q.data);else if(g.isData3DTexture)P?(ee&&n.texStorage3D(t.TEXTURE_3D,de,_e,Q.width,Q.height,Q.depth),ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ce,Q.data)):n.texImage3D(t.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,ce,Ce,Q.data);else if(g.isFramebufferTexture){if(ee)if(P)n.texStorage2D(t.TEXTURE_2D,de,_e,Q.width,Q.height);else{let K=Q.width,$=Q.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,_e,K,$,0,ce,Ce,null),K>>=1,$>>=1}}else if(Ie.length>0){if(P&&ee){const K=dt(Ie[0]);n.texStorage2D(t.TEXTURE_2D,de,_e,K.width,K.height)}for(let K=0,$=Ie.length;K<$;K++)ae=Ie[K],P?ie&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ce,Ce,ae):n.texImage2D(t.TEXTURE_2D,K,_e,ce,Ce,ae);g.generateMipmaps=!1}else if(P){if(ee){const K=dt(Q);n.texStorage2D(t.TEXTURE_2D,de,_e,K.width,K.height)}ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Ce,Q)}else n.texImage2D(t.TEXTURE_2D,0,_e,ce,Ce,Q);p(g)&&f(V),xe.__version=k.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ne(w,g,F){if(g.image.length!==6)return;const V=rt(w,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+F);const k=i.get(j);if(j.version!==k.__version||V===!0){n.activeTexture(t.TEXTURE0+F);const xe=He.getPrimaries(He.workingColorSpace),te=g.colorSpace===Yn?null:He.getPrimaries(g.colorSpace),ge=g.colorSpace===Yn||xe===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!ve&&!Q?ce[$]=x(g.image[$],!0,s.maxCubemapSize):ce[$]=Q?g.image[$].image:g.image[$],ce[$]=Et(g,ce[$]);const Ce=ce[0],_e=r.convert(g.format,g.colorSpace),ae=r.convert(g.type),Ie=S(g.internalFormat,_e,ae,g.colorSpace),P=g.isVideoTexture!==!0,ee=k.__version===void 0||V===!0,ie=j.dataReady;let de=C(g,Ce);Ue(t.TEXTURE_CUBE_MAP,g);let K;if(ve){P&&ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ie,Ce.width,Ce.height);for(let $=0;$<6;$++){K=ce[$].mipmaps;for(let me=0;me<K.length;me++){const Pe=K[me];g.format!==hn?_e!==null?P?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Pe.width,Pe.height,_e,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Pe.width,Pe.height,_e,ae,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ie,Pe.width,Pe.height,0,_e,ae,Pe.data)}}}else{if(K=g.mipmaps,P&&ee){K.length>0&&de++;const $=dt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ie,$.width,$.height)}for(let $=0;$<6;$++)if(Q){P?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,_e,ae,ce[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,ce[$].width,ce[$].height,0,_e,ae,ce[$].data);for(let me=0;me<K.length;me++){const it=K[me].image[$].image;P?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,it.width,it.height,_e,ae,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ie,it.width,it.height,0,_e,ae,it.data)}}else{P?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_e,ae,ce[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,_e,ae,ce[$]);for(let me=0;me<K.length;me++){const Pe=K[me];P?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,_e,ae,Pe.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ie,_e,ae,Pe.image[$])}}}p(g)&&f(t.TEXTURE_CUBE_MAP),k.__version=j.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function be(w,g,F,V,j,k){const xe=r.convert(F.format,F.colorSpace),te=r.convert(F.type),ge=S(F.internalFormat,xe,te,F.colorSpace),ve=i.get(g),Q=i.get(F);if(Q.__renderTarget=g,!ve.__hasExternalTextures){const ce=Math.max(1,g.width>>k),Ce=Math.max(1,g.height>>k);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,k,ge,ce,Ce,g.depth,0,xe,te,null):n.texImage2D(j,k,ge,ce,Ce,0,xe,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,Q.__webglTexture,0,ot(g)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,j,Q.__webglTexture,k),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(w,g,F){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){const V=g.depthTexture,j=V&&V.isDepthTexture?V.type:null,k=E(g.stencilBuffer,j),xe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=ot(g);fe(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,k,g.width,g.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,k,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,k,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,w)}else{const V=g.textures;for(let j=0;j<V.length;j++){const k=V[j],xe=r.convert(k.format,k.colorSpace),te=r.convert(k.type),ge=S(k.internalFormat,xe,te,k.colorSpace),ve=ot(g);F&&fe(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ge,g.width,g.height):fe(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,ge,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,ge,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const j=V.__webglTexture,k=ot(g);if(g.depthTexture.format===Qs)fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(g.depthTexture.format===er)fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ut(w){const g=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=V}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=w.texture.mipmaps;V&&V.length>0?Le(g.__webglFramebuffer[0],w):Le(g.__webglFramebuffer,w)}else if(F){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=t.createRenderbuffer(),Te(g.__webglDepthbuffer[V],w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,k)}}else{const V=w.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Te(g.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,k)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(w,g,F){const V=i.get(w);g!==void 0&&be(V.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&ut(w)}function A(w){const g=w.texture,F=i.get(w),V=i.get(g);w.addEventListener("dispose",L);const j=w.textures,k=w.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=g.version,o.memory.textures++),k){F.__webglFramebuffer=[];for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[te]=[];for(let ge=0;ge<g.mipmaps.length;ge++)F.__webglFramebuffer[te][ge]=t.createFramebuffer()}else F.__webglFramebuffer[te]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)F.__webglFramebuffer[te]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(xe)for(let te=0,ge=j.length;te<ge;te++){const ve=i.get(j[te]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&fe(w)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let te=0;te<j.length;te++){const ge=j[te];F.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[te]);const ve=r.convert(ge.format,ge.colorSpace),Q=r.convert(ge.type),ce=S(ge.internalFormat,ve,Q,ge.colorSpace,w.isXRRenderTarget===!0),Ce=ot(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ce,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,F.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(k){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,g);for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)be(F.__webglFramebuffer[te][ge],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge);else be(F.__webglFramebuffer[te],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(g)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let te=0,ge=j.length;te<ge;te++){const ve=j[te],Q=i.get(ve);let ce=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),Ue(ce,ve),be(F.__webglFramebuffer,w,ve,t.COLOR_ATTACHMENT0+te,ce,0),p(ve)&&f(ce)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(te=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,V.__webglTexture),Ue(te,g),g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)be(F.__webglFramebuffer[ge],w,g,t.COLOR_ATTACHMENT0,te,ge);else be(F.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,te,0);p(g)&&f(te),n.unbindTexture()}w.depthBuffer&&ut(w)}function nt(w){const g=w.textures;for(let F=0,V=g.length;F<V;F++){const j=g[F];if(p(j)){const k=b(w),xe=i.get(j).__webglTexture;n.bindTexture(k,xe),f(k),n.unbindTexture()}}}const Se=[],Xe=[];function Ee(w){if(w.samples>0){if(fe(w)===!1){const g=w.textures,F=w.width,V=w.height;let j=t.COLOR_BUFFER_BIT;const k=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(w),te=g.length>1;if(te)for(let ve=0;ve<g.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ge=w.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Q=i.get(g[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,F,V,0,0,F,V,j,t.NEAREST),l===!0&&(Se.length=0,Xe.length=0,Se.push(t.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Se.push(k),Xe.push(k),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Xe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let ve=0;ve<g.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Q=i.get(g[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Q,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function ot(w){return Math.min(s.maxSamples,w.samples)}function fe(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Fe(w){const g=o.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function Et(w,g){const F=w.colorSpace,V=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Ci&&F!==Yn&&(He.getTransfer(F)===Ke?(V!==hn||j!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=ke,this.setupRenderTarget=A,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=be,this.useMultisampledRTT=fe}function mS(t,e){function n(i,s=Yn){let r;const o=He.getTransfer(s);if(i===On)return t.UNSIGNED_BYTE;if(i===fc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===kd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bd)return t.BYTE;if(i===zd)return t.SHORT;if(i===Ks)return t.UNSIGNED_SHORT;if(i===dc)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===Un)return t.FLOAT;if(i===cr)return t.HALF_FLOAT;if(i===Hd)return t.ALPHA;if(i===Vd)return t.RGB;if(i===hn)return t.RGBA;if(i===Qs)return t.DEPTH_COMPONENT;if(i===er)return t.DEPTH_STENCIL;if(i===Gd)return t.RED;if(i===mc)return t.RED_INTEGER;if(i===Wd)return t.RG;if(i===gc)return t.RG_INTEGER;if(i===vc)return t.RGBA_INTEGER;if(i===Jr||i===Qr||i===eo||i===to)if(o===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===cl||i===hl||i===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===fl||i===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dl||i===fl)return o===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ml||i===gl||i===vl||i===_l||i===xl||i===El||i===Ml||i===yl||i===Sl||i===wl||i===bl||i===Tl||i===Al||i===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ml)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Al)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===Rl||i===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===no)return o===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===Pl||i===Il||i===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===no)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hf extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const gS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new hf(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new oi({vertexShader:gS,fragmentShader:vS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new No(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends ms{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,v=null;const x=new _S,p={},f=n.getContextAttributes();let b=null,S=null;const E=[],C=[],R=new Ze;let L=null;const U=new Qt;U.viewport=new ft;const y=new Qt;y.viewport=new ft;const M=[U,y],T=new z0;let W=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let oe=E[G];return oe===void 0&&(oe=new Ea,E[G]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(G){let oe=E[G];return oe===void 0&&(oe=new Ea,E[G]=oe),oe.getGripSpace()},this.getHand=function(G){let oe=E[G];return oe===void 0&&(oe=new Ea,E[G]=oe),oe.getHandSpace()};function X(G){const oe=C.indexOf(G.inputSource);if(oe===-1)return;const ne=E[oe];ne!==void 0&&(ne.update(G.inputSource,G.frame,c||o),ne.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Y);for(let G=0;G<E.length;G++){const oe=C[G];oe!==null&&(C[G]=null,E[G].disconnect(oe))}W=null,H=null,x.reset();for(const G in p)delete p[G];e.setRenderTarget(b),m=null,u=null,d=null,s=null,S=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,be=null,Te=null;f.depth&&(Te=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=f.stencil?er:Qs,be=f.stencil?Js:Ai);const Le={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:r};u=d.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new ri(u.textureWidth,u.textureHeight,{format:hn,type:On,depthTexture:new sf(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ri(m.framebufferWidth,m.framebufferHeight,{format:hn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(G){for(let oe=0;oe<G.removed.length;oe++){const ne=G.removed[oe],be=C.indexOf(ne);be>=0&&(C[be]=null,E[be].disconnect(ne))}for(let oe=0;oe<G.added.length;oe++){const ne=G.added[oe];let be=C.indexOf(ne);if(be===-1){for(let Le=0;Le<E.length;Le++)if(Le>=C.length){C.push(ne),be=Le;break}else if(C[Le]===null){C[Le]=ne,be=Le;break}if(be===-1)break}const Te=E[be];Te&&Te.connect(ne)}}const Z=new N,z=new N;function re(G,oe,ne){Z.setFromMatrixPosition(oe.matrixWorld),z.setFromMatrixPosition(ne.matrixWorld);const be=Z.distanceTo(z),Te=oe.projectionMatrix.elements,Le=ne.projectionMatrix.elements,ut=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),A=(Te[9]+1)/Te[5],nt=(Te[9]-1)/Te[5],Se=(Te[8]-1)/Te[0],Xe=(Le[8]+1)/Le[0],Ee=ut*Se,ot=ut*Xe,fe=be/(-Se+Xe),Fe=fe*-Se;if(oe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Te[10]===-1)G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Et=ut+fe,dt=ke+fe,w=Ee-Fe,g=ot+(be-Fe),F=A*ke/dt*Et,V=nt*ke/dt*Et;G.projectionMatrix.makePerspective(w,g,F,V,Et,dt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function he(G,oe){oe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(oe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let oe=G.near,ne=G.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(ne=x.depthFar)),T.near=y.near=U.near=oe,T.far=y.far=U.far=ne,(W!==T.near||H!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),W=T.near,H=T.far),T.layers.mask=G.layers.mask|6,U.layers.mask=T.layers.mask&3,y.layers.mask=T.layers.mask&5;const be=G.parent,Te=T.cameras;he(T,be);for(let Le=0;Le<Te.length;Le++)he(Te[Le],be);Te.length===2?re(T,U,y):T.projectionMatrix.copy(U.projectionMatrix),Me(G,T,be)};function Me(G,oe,ne){ne===null?G.matrix.copy(oe.matrixWorld):(G.matrix.copy(ne.matrixWorld),G.matrix.invert(),G.matrix.multiply(oe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=tr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)},this.getCameraTexture=function(G){return p[G]};let Ue=null;function rt(G,oe){if(h=oe.getViewerPose(c||o),v=oe,h!==null){const ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let be=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,be=!0);for(let ke=0;ke<ne.length;ke++){const A=ne[ke];let nt=null;if(m!==null)nt=m.getViewport(A);else{const Xe=d.getViewSubImage(u,A);nt=Xe.viewport,ke===0&&(e.setRenderTargetTextures(S,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(S))}let Se=M[ke];Se===void 0&&(Se=new Qt,Se.layers.enable(ke),Se.viewport=new ft,M[ke]=Se),Se.matrix.fromArray(A.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(A.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(nt.x,nt.y,nt.width,nt.height),ke===0&&(T.matrix.copy(Se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),be===!0&&T.cameras.push(Se)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const ke=d.getDepthInformation(ne[0]);ke&&ke.isValid&&ke.texture&&x.init(ke,s.renderState)}if(Te&&Te.includes("camera-access")&&(e.state.unbindTexture(),d))for(let ke=0;ke<ne.length;ke++){const A=ne[ke].camera;if(A){let nt=p[A];nt||(nt=new hf,p[A]=nt);const Se=d.getCameraImage(A);nt.sourceTexture=Se}}}for(let ne=0;ne<E.length;ne++){const be=C[ne],Te=E[ne];be!==null&&Te!==void 0&&Te.update(be,oe,c||o)}Ue&&Ue(G,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const et=new rf;et.setAnimationLoop(rt),this.setAnimationLoop=function(G){Ue=G},this.dispose=function(){}}}const gi=new wn,ES=new pt;function MS(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,ef(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,S,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,b,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===zt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===zt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),S=b.envMap,E=b.envMapRotation;S&&(p.envMap.value=S,gi.copy(E),gi.x*=-1,gi.y*=-1,gi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(gi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=S*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yS(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const E=S.program;i.uniformBlockBinding(b,E)}function c(b,S){let E=s[b.id];E===void 0&&(v(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(b,C);const R=e.render.frame;r[b.id]!==R&&(u(b),r[b.id]=R)}function h(b){const S=d();b.__bindingPointIndex=S;const E=t.createBuffer(),C=b.__size,R=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=s[b.id],E=b.uniforms,C=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let R=0,L=E.length;R<L;R++){const U=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,M=U.length;y<M;y++){const T=U[y];if(m(T,R,y,C)===!0){const W=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let q=0;q<H.length;q++){const Y=H[q],Z=x(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,W+X,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,S,E,C){const R=b.value,L=S+"_"+E;if(C[L]===void 0)return typeof R=="number"||typeof R=="boolean"?C[L]=R:C[L]=R.clone(),!0;{const U=C[L];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[L]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(b){const S=b.uniforms;let E=0;const C=16;for(let L=0,U=S.length;L<U;L++){const y=Array.isArray(S[L])?S[L]:[S[L]];for(let M=0,T=y.length;M<T;M++){const W=y[M],H=Array.isArray(W.value)?W.value:[W.value];for(let X=0,q=H.length;X<q;X++){const Y=H[X],Z=x(Y),z=E%C,re=z%Z.boundary,he=z+re;E+=re,he!==0&&C-he<Z.storage&&(E+=C-he),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=Z.storage}}}const R=E%C;return R>0&&(E+=C-R),b.__size=E,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const b in s)t.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class SS{constructor(e={}){const{canvas:n=n0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),x=new Int32Array(4);let p=null,f=null;const b=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=Jt;let R=0,L=0,U=null,y=-1,M=null;const T=new ft,W=new ft;let H=null;const X=new Qe(0);let q=0,Y=n.width,Z=n.height,z=1,re=null,he=null;const Me=new ft(0,0,Y,Z),Ue=new ft(0,0,Y,Z);let rt=!1;const et=new yc;let G=!1,oe=!1;const ne=new pt,be=new N,Te=new ft,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ke(){return U===null?z:1}let A=i;function nt(_,I){return n.getContext(_,I)}try{const _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uc}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",K,!1),A===null){const I="webgl2";if(A=nt(I,_),A===null)throw nt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Se,Xe,Ee,ot,fe,Fe,Et,dt,w,g,F,V,j,k,xe,te,ge,ve,Q,ce,Ce,_e,ae,Ie;function P(){Se=new DM(A),Se.init(),_e=new mS(A,Se),Xe=new TM(A,Se,e,_e),Ee=new fS(A,Se),Xe.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),ot=new NM(A),fe=new eS,Fe=new pS(A,Se,Ee,fe,Xe,_e,ot),Et=new CM(E),dt=new IM(E),w=new V0(A),ae=new wM(A,w),g=new UM(A,w,ot,ae),F=new BM(A,g,w,ot),Q=new OM(A,Xe,Fe),te=new AM(fe),V=new Qy(E,Et,dt,Se,Xe,ae,te),j=new MS(E,fe),k=new nS,xe=new lS(Se),ve=new SM(E,Et,dt,Ee,F,m,l),ge=new uS(E,F,Xe),Ie=new yS(A,ot,Xe,Ee),ce=new bM(A,Se,ot),Ce=new FM(A,Se,ot),ot.programs=V.programs,E.capabilities=Xe,E.extensions=Se,E.properties=fe,E.renderLists=k,E.shadowMap=ge,E.state=Ee,E.info=ot}P();const ee=new xS(E,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const _=Se.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Se.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(Y,Z,!1))},this.getSize=function(_){return _.set(Y,Z)},this.setSize=function(_,I,O=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=_,Z=I,n.width=Math.floor(_*z),n.height=Math.floor(I*z),O===!0&&(n.style.width=_+"px",n.style.height=I+"px"),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(Y*z,Z*z).floor()},this.setDrawingBufferSize=function(_,I,O){Y=_,Z=I,z=O,n.width=Math.floor(_*O),n.height=Math.floor(I*O),this.setViewport(0,0,_,I)},this.getCurrentViewport=function(_){return _.copy(T)},this.getViewport=function(_){return _.copy(Me)},this.setViewport=function(_,I,O,B){_.isVector4?Me.set(_.x,_.y,_.z,_.w):Me.set(_,I,O,B),Ee.viewport(T.copy(Me).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(Ue)},this.setScissor=function(_,I,O,B){_.isVector4?Ue.set(_.x,_.y,_.z,_.w):Ue.set(_,I,O,B),Ee.scissor(W.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(_){Ee.setScissorTest(rt=_)},this.setOpaqueSort=function(_){re=_},this.setTransparentSort=function(_){he=_},this.getClearColor=function(_){return _.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,O=!0){let B=0;if(_){let D=!1;if(U!==null){const J=U.texture.format;D=J===vc||J===gc||J===mc}if(D){const J=U.texture.type,le=J===On||J===Ai||J===Ks||J===Js||J===fc||J===pc,pe=ve.getClearColor(),ue=ve.getClearAlpha(),Ae=pe.r,Re=pe.g,ye=pe.b;le?(v[0]=Ae,v[1]=Re,v[2]=ye,v[3]=ue,A.clearBufferuiv(A.COLOR,0,v)):(x[0]=Ae,x[1]=Re,x[2]=ye,x[3]=ue,A.clearBufferiv(A.COLOR,0,x))}else B|=A.COLOR_BUFFER_BIT}I&&(B|=A.DEPTH_BUFFER_BIT),O&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",K,!1),ve.dispose(),k.dispose(),xe.dispose(),fe.dispose(),Et.dispose(),dt.dispose(),F.dispose(),ae.dispose(),Ie.dispose(),V.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",gn),ee.removeEventListener("sessionend",kc),ci.stop()};function ie(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const _=ot.autoReset,I=ge.enabled,O=ge.autoUpdate,B=ge.needsUpdate,D=ge.type;P(),ot.autoReset=_,ge.enabled=I,ge.autoUpdate=O,ge.needsUpdate=B,ge.type=D}function K(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function $(_){const I=_.target;I.removeEventListener("dispose",$),me(I)}function me(_){Pe(_),fe.remove(_)}function Pe(_){const I=fe.get(_).programs;I!==void 0&&(I.forEach(function(O){V.releaseProgram(O)}),_.isShaderMaterial&&V.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,O,B,D,J){I===null&&(I=Le);const le=D.isMesh&&D.matrixWorld.determinant()<0,pe=qm(_,I,O,B,D);Ee.setMaterial(B,le);let ue=O.index,Ae=1;if(B.wireframe===!0){if(ue=g.getWireframeAttribute(O),ue===void 0)return;Ae=2}const Re=O.drawRange,ye=O.attributes.position;let Oe=Re.start*Ae,je=(Re.start+Re.count)*Ae;J!==null&&(Oe=Math.max(Oe,J.start*Ae),je=Math.min(je,(J.start+J.count)*Ae)),ue!==null?(Oe=Math.max(Oe,0),je=Math.min(je,ue.count)):ye!=null&&(Oe=Math.max(Oe,0),je=Math.min(je,ye.count));const ht=je-Oe;if(ht<0||ht===1/0)return;ae.setup(D,B,pe,O,ue);let st,tt=ce;if(ue!==null&&(st=w.get(ue),tt=Ce,tt.setIndex(st)),D.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*ke()),tt.setMode(A.LINES)):tt.setMode(A.TRIANGLES);else if(D.isLine){let we=B.linewidth;we===void 0&&(we=1),Ee.setLineWidth(we*ke()),D.isLineSegments?tt.setMode(A.LINES):D.isLineLoop?tt.setMode(A.LINE_LOOP):tt.setMode(A.LINE_STRIP)}else D.isPoints?tt.setMode(A.POINTS):D.isSprite&&tt.setMode(A.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))tt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const we=D._multiDrawStarts,lt=D._multiDrawCounts,We=D._multiDrawCount,Ht=ue?w.get(ue).bytesPerElement:1,Li=fe.get(B).currentProgram.getUniforms();for(let Vt=0;Vt<We;Vt++)Li.setValue(A,"_gl_DrawID",Vt),tt.render(we[Vt]/Ht,lt[Vt])}else if(D.isInstancedMesh)tt.renderInstances(Oe,ht,D.count);else if(O.isInstancedBufferGeometry){const we=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,lt=Math.min(O.instanceCount,we);tt.renderInstances(Oe,ht,lt)}else tt.render(Oe,ht)};function it(_,I,O){_.transparent===!0&&_.side===Dn&&_.forceSinglePass===!1?(_.side=zt,_.needsUpdate=!0,yr(_,I,O),_.side=si,_.needsUpdate=!0,yr(_,I,O),_.side=Dn):yr(_,I,O)}this.compile=function(_,I,O=null){O===null&&(O=_),f=xe.get(O),f.init(I),S.push(f),O.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),_!==O&&_.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const B=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let le=0;le<J.length;le++){const pe=J[le];it(pe,O,D),B.add(pe)}else it(J,O,D),B.add(J)}),f=S.pop(),B},this.compileAsync=function(_,I,O=null){const B=this.compile(_,I,O);return new Promise(D=>{function J(){if(B.forEach(function(le){fe.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){D(_);return}setTimeout(J,10)}Se.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ye=null;function bn(_){Ye&&Ye(_)}function gn(){ci.stop()}function kc(){ci.start()}const ci=new rf;ci.setAnimationLoop(bn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(_){Ye=_,ee.setAnimationLoop(_),_===null?ci.stop():ci.start()},ee.addEventListener("sessionstart",gn),ee.addEventListener("sessionend",kc),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(I),I=ee.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,I,U),f=xe.get(_,S.length),f.init(I),S.push(f),ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),et.setFromProjectionMatrix(ne,En,I.reversedDepth),oe=this.localClippingEnabled,G=te.init(this.clippingPlanes,oe),p=k.get(_,b.length),p.init(),b.push(p),ee.enabled===!0&&ee.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&$o(J,I,-1/0,E.sortObjects)}$o(_,I,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(re,he),ut=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ut&&ve.addToRenderList(p,_),this.info.render.frame++,G===!0&&te.beginShadows();const O=f.state.shadowsArray;ge.render(O,_,I),G===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,D=p.transmissive;if(f.setupLights(),I.isArrayCamera){const J=I.cameras;if(D.length>0)for(let le=0,pe=J.length;le<pe;le++){const ue=J[le];Vc(B,D,_,ue)}ut&&ve.render(_);for(let le=0,pe=J.length;le<pe;le++){const ue=J[le];Hc(p,_,ue,ue.viewport)}}else D.length>0&&Vc(B,D,_,I),ut&&ve.render(_),Hc(p,_,I);U!==null&&L===0&&(Fe.updateMultisampleRenderTarget(U),Fe.updateRenderTargetMipmap(U)),_.isScene===!0&&_.onAfterRender(E,_,I),ae.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],G===!0&&te.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function $o(_,I,O,B){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)O=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||et.intersectsSprite(_)){B&&Te.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ne);const le=F.update(_),pe=_.material;pe.visible&&p.push(_,le,pe,O,Te.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||et.intersectsObject(_))){const le=F.update(_),pe=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Te.copy(_.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Te.copy(le.boundingSphere.center)),Te.applyMatrix4(_.matrixWorld).applyMatrix4(ne)),Array.isArray(pe)){const ue=le.groups;for(let Ae=0,Re=ue.length;Ae<Re;Ae++){const ye=ue[Ae],Oe=pe[ye.materialIndex];Oe&&Oe.visible&&p.push(_,le,Oe,O,Te.z,ye)}}else pe.visible&&p.push(_,le,pe,O,Te.z,null)}}const J=_.children;for(let le=0,pe=J.length;le<pe;le++)$o(J[le],I,O,B)}function Hc(_,I,O,B){const D=_.opaque,J=_.transmissive,le=_.transparent;f.setupLightsView(O),G===!0&&te.setGlobalState(E.clippingPlanes,O),B&&Ee.viewport(T.copy(B)),D.length>0&&Mr(D,I,O),J.length>0&&Mr(J,I,O),le.length>0&&Mr(le,I,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Vc(_,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new ri(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?cr:On,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const J=f.state.transmissionRenderTarget[B.id],le=B.viewport||T;J.setSize(le.z*E.transmissionResolutionScale,le.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),ue=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(J),E.getClearColor(X),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),ut&&ve.render(O);const Re=E.toneMapping;E.toneMapping=jn;const ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),G===!0&&te.setGlobalState(E.clippingPlanes,B),Mr(_,O,B),Fe.updateMultisampleRenderTarget(J),Fe.updateRenderTargetMipmap(J),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let je=0,ht=I.length;je<ht;je++){const st=I[je],tt=st.object,we=st.geometry,lt=st.material,We=st.group;if(lt.side===Dn&&tt.layers.test(B.layers)){const Ht=lt.side;lt.side=zt,lt.needsUpdate=!0,Gc(tt,O,B,we,lt,We),lt.side=Ht,lt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Fe.updateMultisampleRenderTarget(J),Fe.updateRenderTargetMipmap(J))}E.setRenderTarget(pe,ue,Ae),E.setClearColor(X,q),ye!==void 0&&(B.viewport=ye),E.toneMapping=Re}function Mr(_,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,J=_.length;D<J;D++){const le=_[D],pe=le.object,ue=le.geometry,Ae=le.group;let Re=le.material;Re.allowOverride===!0&&B!==null&&(Re=B),pe.layers.test(O.layers)&&Gc(pe,I,O,ue,Re,Ae)}}function Gc(_,I,O,B,D,J){_.onBeforeRender(E,I,O,B,D,J),_.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(E,I,O,B,_,J),D.transparent===!0&&D.side===Dn&&D.forceSinglePass===!1?(D.side=zt,D.needsUpdate=!0,E.renderBufferDirect(O,I,B,D,_,J),D.side=si,D.needsUpdate=!0,E.renderBufferDirect(O,I,B,D,_,J),D.side=Dn):E.renderBufferDirect(O,I,B,D,_,J),_.onAfterRender(E,I,O,B,D,J)}function yr(_,I,O){I.isScene!==!0&&(I=Le);const B=fe.get(_),D=f.state.lights,J=f.state.shadowsArray,le=D.state.version,pe=V.getParameters(_,D.state,J,I,O),ue=V.getProgramCacheKey(pe);let Ae=B.programs;B.environment=_.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(_.isMeshStandardMaterial?dt:Et).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Ae===void 0&&(_.addEventListener("dispose",$),Ae=new Map,B.programs=Ae);let Re=Ae.get(ue);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===le)return Xc(_,pe),Re}else pe.uniforms=V.getUniforms(_),_.onBeforeCompile(pe,E),Re=V.acquireProgram(pe,ue),Ae.set(ue,Re),B.uniforms=pe.uniforms;const ye=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ye.clippingPlanes=te.uniform),Xc(_,pe),B.needsLights=jm(_),B.lightsStateVersion=le,B.needsLights&&(ye.ambientLightColor.value=D.state.ambient,ye.lightProbe.value=D.state.probe,ye.directionalLights.value=D.state.directional,ye.directionalLightShadows.value=D.state.directionalShadow,ye.spotLights.value=D.state.spot,ye.spotLightShadows.value=D.state.spotShadow,ye.rectAreaLights.value=D.state.rectArea,ye.ltc_1.value=D.state.rectAreaLTC1,ye.ltc_2.value=D.state.rectAreaLTC2,ye.pointLights.value=D.state.point,ye.pointLightShadows.value=D.state.pointShadow,ye.hemisphereLights.value=D.state.hemi,ye.directionalShadowMap.value=D.state.directionalShadowMap,ye.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ye.spotShadowMap.value=D.state.spotShadowMap,ye.spotLightMatrix.value=D.state.spotLightMatrix,ye.spotLightMap.value=D.state.spotLightMap,ye.pointShadowMap.value=D.state.pointShadowMap,ye.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Wc(_){if(_.uniformsList===null){const I=_.currentProgram.getUniforms();_.uniformsList=io.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function Xc(_,I){const O=fe.get(_);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function qm(_,I,O,B,D){I.isScene!==!0&&(I=Le),Fe.resetTextureUnits();const J=I.fog,le=B.isMeshStandardMaterial?I.environment:null,pe=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ci,ue=(B.isMeshStandardMaterial?dt:Et).get(B.envMap||le),Ae=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!O.morphAttributes.position,Oe=!!O.morphAttributes.normal,je=!!O.morphAttributes.color;let ht=jn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=E.toneMapping);const st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=st!==void 0?st.length:0,we=fe.get(B),lt=f.state.lights;if(G===!0&&(oe===!0||_!==M)){const It=_===M&&B.id===y;te.setState(B,_,It)}let We=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==lt.state.version||we.outputColorSpace!==pe||D.isBatchedMesh&&we.batching===!1||!D.isBatchedMesh&&we.batching===!0||D.isBatchedMesh&&we.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&we.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&we.instancing===!1||!D.isInstancedMesh&&we.instancing===!0||D.isSkinnedMesh&&we.skinning===!1||!D.isSkinnedMesh&&we.skinning===!0||D.isInstancedMesh&&we.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&we.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&we.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&we.instancingMorph===!1&&D.morphTexture!==null||we.envMap!==ue||B.fog===!0&&we.fog!==J||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Ae||we.vertexTangents!==Re||we.morphTargets!==ye||we.morphNormals!==Oe||we.morphColors!==je||we.toneMapping!==ht||we.morphTargetsCount!==tt)&&(We=!0):(We=!0,we.__version=B.version);let Ht=we.currentProgram;We===!0&&(Ht=yr(B,I,D));let Li=!1,Vt=!1,Es=!1;const ct=Ht.getUniforms(),qt=we.uniforms;if(Ee.useProgram(Ht.program)&&(Li=!0,Vt=!0,Es=!0),B.id!==y&&(y=B.id,Vt=!0),Li||M!==_){Ee.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ct.setValue(A,"projectionMatrix",_.projectionMatrix),ct.setValue(A,"viewMatrix",_.matrixWorldInverse);const Ot=ct.map.cameraPosition;Ot!==void 0&&Ot.setValue(A,be.setFromMatrixPosition(_.matrixWorld)),Xe.logarithmicDepthBuffer&&ct.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Vt=!0,Es=!0)}if(D.isSkinnedMesh){ct.setOptional(A,D,"bindMatrix"),ct.setOptional(A,D,"bindMatrixInverse");const It=D.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ct.setValue(A,"boneTexture",It.boneTexture,Fe))}D.isBatchedMesh&&(ct.setOptional(A,D,"batchingTexture"),ct.setValue(A,"batchingTexture",D._matricesTexture,Fe),ct.setOptional(A,D,"batchingIdTexture"),ct.setValue(A,"batchingIdTexture",D._indirectTexture,Fe),ct.setOptional(A,D,"batchingColorTexture"),D._colorsTexture!==null&&ct.setValue(A,"batchingColorTexture",D._colorsTexture,Fe));const Zt=O.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Q.update(D,O,Ht),(Vt||we.receiveShadow!==D.receiveShadow)&&(we.receiveShadow=D.receiveShadow,ct.setValue(A,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(qt.envMap.value=ue,qt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(qt.envMapIntensity.value=I.environmentIntensity),Vt&&(ct.setValue(A,"toneMappingExposure",E.toneMappingExposure),we.needsLights&&Zm(qt,Es),J&&B.fog===!0&&j.refreshFogUniforms(qt,J),j.refreshMaterialUniforms(qt,B,z,Z,f.state.transmissionRenderTarget[_.id]),io.upload(A,Wc(we),qt,Fe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(io.upload(A,Wc(we),qt,Fe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(A,"center",D.center),ct.setValue(A,"modelViewMatrix",D.modelViewMatrix),ct.setValue(A,"normalMatrix",D.normalMatrix),ct.setValue(A,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const It=B.uniformsGroups;for(let Ot=0,qo=It.length;Ot<qo;Ot++){const hi=It[Ot];Ie.update(hi,Ht),Ie.bind(hi,Ht)}}return Ht}function Zm(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function jm(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(_,I,O){const B=fe.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),fe.get(_.texture).__webglTexture=I,fe.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){const O=fe.get(_);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0};const Km=A.createFramebuffer();this.setRenderTarget=function(_,I=0,O=0){U=_,R=I,L=O;let B=!0,D=null,J=!1,le=!1;if(_){const ue=fe.get(_);if(ue.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Fe.setupRenderTarget(_);else if(ue.__hasExternalTextures)Fe.rebindTextures(_,fe.get(_.texture).__webglTexture,fe.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const ye=_.depthTexture;if(ue.__boundDepthTexture!==ye){if(ye!==null&&fe.has(ye)&&(_.width!==ye.image.width||_.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(_)}}const Ae=_.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Re=fe.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?D=Re[I][O]:D=Re[I],J=!0):_.samples>0&&Fe.useMultisampledRTT(_)===!1?D=fe.get(_).__webglMultisampledFramebuffer:Array.isArray(Re)?D=Re[O]:D=Re,T.copy(_.viewport),W.copy(_.scissor),H=_.scissorTest}else T.copy(Me).multiplyScalar(z).floor(),W.copy(Ue).multiplyScalar(z).floor(),H=rt;if(O!==0&&(D=Km),Ee.bindFramebuffer(A.FRAMEBUFFER,D)&&B&&Ee.drawBuffers(_,D),Ee.viewport(T),Ee.scissor(W),Ee.setScissorTest(H),J){const ue=fe.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,O)}else if(le){const ue=I;for(let Ae=0;Ae<_.textures.length;Ae++){const Re=fe.get(_.textures[Ae]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,O,ue)}}else if(_!==null&&O!==0){const ue=fe.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,O)}y=-1},this.readRenderTargetPixels=function(_,I,O,B,D,J,le,pe=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=fe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){Ee.bindFramebuffer(A.FRAMEBUFFER,ue);try{const Ae=_.textures[pe],Re=Ae.format,ye=Ae.type;if(!Xe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-B&&O>=0&&O<=_.height-D&&(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(I,O,B,D,_e.convert(Re),_e.convert(ye),J))}finally{const Ae=U!==null?fe.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(_,I,O,B,D,J,le,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=fe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(I>=0&&I<=_.width-B&&O>=0&&O<=_.height-D){Ee.bindFramebuffer(A.FRAMEBUFFER,ue);const Ae=_.textures[pe],Re=Ae.format,ye=Ae.type;if(!Xe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.bufferData(A.PIXEL_PACK_BUFFER,J.byteLength,A.STREAM_READ),_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(I,O,B,D,_e.convert(Re),_e.convert(ye),0);const je=U!==null?fe.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,je);const ht=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await i0(A,ht,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,J),A.deleteBuffer(Oe),A.deleteSync(ht),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,O=0){const B=Math.pow(2,-O),D=Math.floor(_.image.width*B),J=Math.floor(_.image.height*B),le=I!==null?I.x:0,pe=I!==null?I.y:0;Fe.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,le,pe,D,J),Ee.unbindTexture()};const Jm=A.createFramebuffer(),Qm=A.createFramebuffer();this.copyTextureToTexture=function(_,I,O=null,B=null,D=0,J=null){J===null&&(D!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=D,D=0):J=0);let le,pe,ue,Ae,Re,ye,Oe,je,ht;const st=_.isCompressedTexture?_.mipmaps[J]:_.image;if(O!==null)le=O.max.x-O.min.x,pe=O.max.y-O.min.y,ue=O.isBox3?O.max.z-O.min.z:1,Ae=O.min.x,Re=O.min.y,ye=O.isBox3?O.min.z:0;else{const Zt=Math.pow(2,-D);le=Math.floor(st.width*Zt),pe=Math.floor(st.height*Zt),_.isDataArrayTexture?ue=st.depth:_.isData3DTexture?ue=Math.floor(st.depth*Zt):ue=1,Ae=0,Re=0,ye=0}B!==null?(Oe=B.x,je=B.y,ht=B.z):(Oe=0,je=0,ht=0);const tt=_e.convert(I.format),we=_e.convert(I.type);let lt;I.isData3DTexture?(Fe.setTexture3D(I,0),lt=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Fe.setTexture2DArray(I,0),lt=A.TEXTURE_2D_ARRAY):(Fe.setTexture2D(I,0),lt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const We=A.getParameter(A.UNPACK_ROW_LENGTH),Ht=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Li=A.getParameter(A.UNPACK_SKIP_PIXELS),Vt=A.getParameter(A.UNPACK_SKIP_ROWS),Es=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,st.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,st.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ae),A.pixelStorei(A.UNPACK_SKIP_ROWS,Re),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ye);const ct=_.isDataArrayTexture||_.isData3DTexture,qt=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){const Zt=fe.get(_),It=fe.get(I),Ot=fe.get(Zt.__renderTarget),qo=fe.get(It.__renderTarget);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let hi=0;hi<ue;hi++)ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(_).__webglTexture,D,ye+hi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(I).__webglTexture,J,ht+hi)),A.blitFramebuffer(Ae,Re,le,pe,Oe,je,le,pe,A.DEPTH_BUFFER_BIT,A.NEAREST);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(D!==0||_.isRenderTargetTexture||fe.has(_)){const Zt=fe.get(_),It=fe.get(I);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,Jm),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Qm);for(let Ot=0;Ot<ue;Ot++)ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Zt.__webglTexture,D,ye+Ot):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Zt.__webglTexture,D),qt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,J,ht+Ot):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,It.__webglTexture,J),D!==0?A.blitFramebuffer(Ae,Re,le,pe,Oe,je,le,pe,A.COLOR_BUFFER_BIT,A.NEAREST):qt?A.copyTexSubImage3D(lt,J,Oe,je,ht+Ot,Ae,Re,le,pe):A.copyTexSubImage2D(lt,J,Oe,je,Ae,Re,le,pe);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else qt?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(lt,J,Oe,je,ht,le,pe,ue,tt,we,st.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(lt,J,Oe,je,ht,le,pe,ue,tt,st.data):A.texSubImage3D(lt,J,Oe,je,ht,le,pe,ue,tt,we,st):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,Oe,je,le,pe,tt,we,st.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,Oe,je,st.width,st.height,tt,st.data):A.texSubImage2D(A.TEXTURE_2D,J,Oe,je,le,pe,tt,we,st);A.pixelStorei(A.UNPACK_ROW_LENGTH,We),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ht),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Li),A.pixelStorei(A.UNPACK_SKIP_ROWS,Vt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Es),J===0&&I.generateMipmaps&&A.generateMipmap(lt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(_,I,O=null,B=null,D=0){return es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,I,O,B,D)},this.initRenderTarget=function(_){fe.get(_).__webglFramebuffer===void 0&&Fe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Fe.setTextureCube(_,0):_.isData3DTexture?Fe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Fe.setTexture2DArray(_,0):Fe.setTexture2D(_,0),Ee.unbindTexture()},this.resetState=function(){R=0,L=0,U=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),n.unpackColorSpace=He._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.14.0
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var wS=Object.defineProperty,bc=(t,e)=>{for(var n in e)wS(t,n,{get:e[n],enumerable:!0})},bt={};bc(bt,{ACTIONS:()=>gf,ANIMATION_MIN_DURATION:()=>Nl,CAPTURE_EVENTS_CLASS:()=>fr,CTRLZOOM_TIMEOUT:()=>mf,DBLCLICK_DELAY:()=>df,EASINGS:()=>so,ICONS:()=>fn,IDS:()=>Tt,KEY_CODES:()=>yt,LONGTOUCH_DELAY:()=>ff,MOVE_THRESHOLD:()=>uf,SPHERE_RADIUS:()=>Ri,TWOFINGERSOVERLAY_DELAY:()=>pf,VIEWER_DATA:()=>ai});var bS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,TS='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',AS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,CS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,RS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,LS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,PS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,IS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,DS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Nl=500,uf=4,df=300,ff=500,pf=100,mf=2e3,Ri=10,ai="photoSphereViewer",fr="psv--capture-event",gf=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(gf||{}),Tt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},yt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},fn={arrow:bS,close:TS,download:AS,fullscreenIn:CS,fullscreenOut:RS,info:LS,menu:PS,zoomIn:IS,zoomOut:DS},so={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},Ve={};bc(Ve,{Animation:()=>xo,Dynamic:()=>Ls,MultiDynamic:()=>zf,PressHandler:()=>Vo,Slider:()=>Hf,SliderDirection:()=>kf,addClasses:()=>Tc,angle:()=>_f,applyEulerInverse:()=>Hl,checkClosedShadowDom:()=>Of,checkStylesheet:()=>Nf,checkVersion:()=>Ic,cleanCssPosition:()=>Uf,clone:()=>zo,createTexture:()=>kl,cssPositionIsOrdered:()=>Pc,dasherize:()=>BS,deepEqual:()=>Pf,deepmerge:()=>Rf,distance:()=>vf,exitFullscreen:()=>Af,firstNonNull:()=>Xn,getAbortError:()=>Bl,getAngle:()=>Ef,getClosest:()=>yf,getConfigParser:()=>Ho,getElement:()=>Mf,getEventTarget:()=>mo,getMatchingTarget:()=>Sf,getPosition:()=>wf,getShortestArc:()=>xf,getStyleProperty:()=>Mn,getTouchData:()=>Ol,getXMPValue:()=>Xt,greatArcDistance:()=>FS,hasParent:()=>OS,invertResolvableBoolean:()=>ko,isAbortError:()=>Df,isEmpty:()=>Lf,isExtendedPosition:()=>Lc,isFullscreenEnabled:()=>bf,isNil:()=>St,isPlainObject:()=>Cc,keyPressMatch:()=>Ac,logWarn:()=>At,mergePanoData:()=>Bf,parseAngle:()=>_n,parsePoint:()=>zS,parseSpeed:()=>Ff,removeClasses:()=>NS,requestFullscreen:()=>Tf,resolveBoolean:()=>Rc,speedToDuration:()=>zl,sum:()=>US,throttle:()=>Cf,toggleClass:()=>Bo,wrap:()=>Os});function Os(t,e){let n=t%e;return n<0&&(n+=e),n}function US(t){return t.reduce((e,n)=>e+n,0)}function vf(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function _f(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function xf(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function Ef(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function FS([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const s=(n-t)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function Mf(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Bo(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function Tc(t,e){t.classList.add(...e.split(" ").filter(n=>!!n))}function NS(t,e){t.classList.remove(...e.split(" ").filter(n=>!!n))}function OS(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function yf(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function mo(t){return(t==null?void 0:t.composedPath()[0])||null}function Sf(t,e){return t?t.composedPath().find(n=>!(n instanceof HTMLElement)&&!(n instanceof SVGElement)?!1:n.matches(e)):null}function wf(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,n-=window.scrollY,{x:e,y:n}}function Mn(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function Ol(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:vf(e,n),angle:_f(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}var go;function bf(t,e=!1){return e?t===go:document.fullscreenElement===t}function Tf(t,e=!1){e?(go=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function Af(t=!1){t?(go.classList.remove("psv-fullscreen-emulation"),go=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Ac(t,e){let n,i=!1,s=!1,r=!1,o=!1;return e==="+"?n=e:e.split("+").forEach(a=>{switch(a){case"Shift":i=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":o=!0;break;case"Plus":n="+";break;case"Minus":n="-";break;default:n=a;break}}),i===t.shiftKey&&s===t.ctrlKey&&r===t.altKey&&o===t.metaKey&&n===t.key}function BS(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function Cf(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function Cc(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Rf(t,e){const n=e;return function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{o!=="__proto__"&&(typeof r[o]!="object"||!r[o]||!Cc(r[o])?s[o]=r[o]:r[o]!==n&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o])))})):s=r,s}(t,e)}function zo(t){return Rf(null,t)}function Lf(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function St(t){return t==null}function Xn(...t){for(const e of t)if(!St(e))return e;return null}function Pf(t,e){if(t===e)return!0;if(Qh(t)&&Qh(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!Pf(t[n],e[n]))return!1;return!0}else return!1}function Qh(t){return typeof t=="object"&&t!==null}var Ge=class If extends Error{constructor(e,n){var i;super(n&&n instanceof Error?`${e}: ${n.message}`:e),this.name="PSVError",(i=Error.captureStackTrace)==null||i.call(Error,this,If)}};function Rc(t,e){Cc(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function ko(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function Bl(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function Df(t){return(t==null?void 0:t.name)==="AbortError"}function At(t){console.warn(`PhotoSphereViewer: ${t}`)}function Lc(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0)}function Xt(t,e,n=!0){let i=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=t.match("GPano:"+e+'="(.*?)"'),i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var eu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vo=["left","center","right"],_o=["top","center","bottom"],tu=[...vo,..._o],Kt="center";function zS(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(eu[e[0]]?e=[e[0],Kt]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>eu[s]||s),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function Uf(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===Kt?t=[Kt,Kt]:vo.indexOf(t[0])!==-1?t=[Kt,t[0]]:_o.indexOf(t[0])!==-1&&(t=[t[0],Kt])),t.length!==2||tu.indexOf(t[0])===-1||tu.indexOf(t[1])===-1?(At(`Unparsable position ${t}`),null):!e&&t[0]===Kt&&t[1]===Kt?(At("Invalid position center center"),null):(n&&!Pc(t)&&(t=[t[1],t[0]]),t[1]===Kt&&vo.indexOf(t[0])!==-1&&(t=[Kt,t[0]]),t[0]===Kt&&_o.indexOf(t[1])!==-1&&(t=[t[1],Kt]),t)):null}function Pc(t){return _o.indexOf(t[0])!==-1&&vo.indexOf(t[1])!==-1}function Ff(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=qe.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Ge(`Unknown speed unit "${s}"`)}}else e=t;return e}function zl(t,e){if(typeof t!="number"){const n=Ff(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function _n(t,e=!1,n=e){let i;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Ge(`Unknown angle "${t}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=qe.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new Ge(`Unknown angle unit "${o}"`)}else i=r}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new Ge(`Unknown angle "${t}"`);return i=Os(e?i+Math.PI:i,Math.PI*2),e?qe.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function kl(t,e=!1){const n=new Nt(t);return n.needsUpdate=!0,n.minFilter=e?qn:cn,n.generateMipmaps=e,n.anisotropy=e?2:1,n}var nu=new vs;function Hl(t,e){nu.setFromEuler(e).invert(),t.applyQuaternion(nu)}function Ho(t,e){const n=function(i){const s=zo({...t,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:t[o]});else if(!(o in t)){At(`Unknown option ${o}`);continue}r[o]=a}return r};return n.defaults=t,n.parsers=e||{},n}function Nf(t,e){Mn(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Ic(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}function Of(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function Bf(t,e,n,i){const s={isEquirectangular:!0,fullWidth:Xn(n==null?void 0:n.fullWidth,i==null?void 0:i.fullWidth),fullHeight:Xn(n==null?void 0:n.fullHeight,i==null?void 0:i.fullHeight),croppedWidth:t,croppedHeight:e,croppedX:Xn(n==null?void 0:n.croppedX,i==null?void 0:i.croppedX),croppedY:Xn(n==null?void 0:n.croppedY,i==null?void 0:i.croppedY),poseHeading:Xn(n==null?void 0:n.poseHeading,i==null?void 0:i.poseHeading,0),posePitch:Xn(n==null?void 0:n.posePitch,i==null?void 0:i.posePitch,0),poseRoll:Xn(n==null?void 0:n.poseRoll,i==null?void 0:i.poseRoll,0),initialHeading:i==null?void 0:i.initialHeading,initialPitch:i==null?void 0:i.initialPitch,initialFov:i==null?void 0:i.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(t,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-t)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(At("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(At("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(At("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(At("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(At("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var xo=class{constructor(t){this.easing=so.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:so[t.easing]||so.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);n[i]=r}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(n[i]=s.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Ls=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Ge("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?Os(t,this.max):qe.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?Os(t,this.max):qe.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?Os(n,this.max):qe.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},zf=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},Vo=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},kf=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(kf||{}),Hf=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=qe.clamp((i.bottom-e)/i.height,0,1):s=qe.clamp((t-i.left)/i.width,0,1),this.listener({value:s,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},Je={};bc(Je,{BeforeAnimateEvent:()=>Dc,BeforeRenderEvent:()=>Bs,BeforeRotateEvent:()=>Zf,ClickEvent:()=>Jf,ConfigChangedEvent:()=>kt,DoubleClickEvent:()=>ip,FullscreenEvent:()=>zs,HideNotificationEvent:()=>ks,HideOverlayEvent:()=>hp,HidePanelEvent:()=>Jn,HideTooltipEvent:()=>mp,KeypressEvent:()=>Qn,LoadProgressEvent:()=>Ep,ObjectEnterEvent:()=>rm,ObjectEvent:()=>Go,ObjectHoverEvent:()=>hm,ObjectLeaveEvent:()=>Vl,PanoramaErrorEvent:()=>Cp,PanoramaLoadEvent:()=>Sp,PanoramaLoadedEvent:()=>ns,PositionUpdatedEvent:()=>Hs,ReadyEvent:()=>Gs,RenderEvent:()=>kp,RollUpdatedEvent:()=>Vs,ShowNotificationEvent:()=>Ws,ShowOverlayEvent:()=>Xp,ShowPanelEvent:()=>ei,ShowTooltipEvent:()=>jp,SizeUpdatedEvent:()=>Xs,StopAllEvent:()=>Ys,TransitionDoneEvent:()=>Pp,ViewerEvent:()=>$e,ZoomUpdatedEvent:()=>Nn});var pr=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},Vf=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},$e=class extends pr{},Gf=class Wf extends $e{constructor(e,n){super(Wf.type,!0),this.position=e,this.zoomLevel=n}};Gf.type="before-animate";var Dc=Gf,Xf=class Yf extends $e{constructor(e,n){super(Yf.type),this.timestamp=e,this.elapsed=n}};Xf.type="before-render";var Bs=Xf,$f=class qf extends $e{constructor(e){super(qf.type,!0),this.position=e}};$f.type="before-rotate";var Zf=$f,jf=class Kf extends $e{constructor(e){super(Kf.type),this.data=e}};jf.type="click";var Jf=jf,Qf=class ep extends $e{constructor(e){super(ep.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};Qf.type="config-changed";var kt=Qf,tp=class np extends $e{constructor(e){super(np.type),this.data=e}};tp.type="dblclick";var ip=tp,sp=class rp extends $e{constructor(e){super(rp.type),this.fullscreenEnabled=e}};sp.type="fullscreen";var zs=sp,op=class ap extends $e{constructor(e){super(ap.type),this.notificationId=e}};op.type="hide-notification";var ks=op,lp=class cp extends $e{constructor(e){super(cp.type),this.overlayId=e}};lp.type="hide-overlay";var hp=lp,up=class dp extends $e{constructor(e){super(dp.type),this.panelId=e}};up.type="hide-panel";var Jn=up,fp=class pp extends $e{constructor(e){super(pp.type),this.tooltipData=e}};fp.type="hide-tooltip";var mp=fp,gp=class vp extends $e{constructor(e,n){super(vp.type,!0),this.key=e,this.originalEvent=n}matches(e){return Ac(this.originalEvent,e)}};gp.type="key-press";var Qn=gp,_p=class xp extends $e{constructor(e){super(xp.type),this.progress=e}};_p.type="load-progress";var Ep=_p,Mp=class yp extends $e{constructor(e){super(yp.type),this.panorama=e}};Mp.type="panorama-load";var Sp=Mp,wp=class bp extends $e{constructor(e){super(bp.type),this.data=e}};wp.type="panorama-loaded";var ns=wp,Tp=class Ap extends $e{constructor(e,n){super(Ap.type),this.panorama=e,this.error=n}};Tp.type="panorama-error";var Cp=Tp,Rp=class Lp extends $e{constructor(e){super(Lp.type),this.completed=e}};Rp.type="transition-done";var Pp=Rp,Ip=class Dp extends $e{constructor(e){super(Dp.type),this.position=e}};Ip.type="position-updated";var Hs=Ip,Up=class Fp extends $e{constructor(e){super(Fp.type),this.roll=e}};Up.type="roll-updated";var Vs=Up,Np=class Op extends $e{constructor(){super(Op.type)}};Np.type="ready";var Gs=Np,Bp=class zp extends $e{constructor(){super(zp.type)}};Bp.type="render";var kp=Bp,Hp=class Vp extends $e{constructor(e){super(Vp.type),this.notificationId=e}};Hp.type="show-notification";var Ws=Hp,Gp=class Wp extends $e{constructor(e){super(Wp.type),this.overlayId=e}};Gp.type="show-overlay";var Xp=Gp,Yp=class $p extends $e{constructor(e){super($p.type),this.panelId=e}};Yp.type="show-panel";var ei=Yp,qp=class Zp extends $e{constructor(e,n){super(Zp.type),this.tooltip=e,this.tooltipData=n}};qp.type="show-tooltip";var jp=qp,Kp=class Jp extends $e{constructor(e){super(Jp.type),this.size=e}};Kp.type="size-updated";var Xs=Kp,Qp=class em extends $e{constructor(){super(em.type)}};Qp.type="stop-all";var Ys=Qp,tm=class nm extends $e{constructor(e){super(nm.type),this.zoomLevel=e}};tm.type="zoom-updated";var Nn=tm,Go=class extends $e{constructor(t,e,n,i,s){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=s}},im=class sm extends Go{constructor(e,n,i,s){super(sm.type,e,n,i,s)}};im.type="enter-object";var rm=im,om=class am extends Go{constructor(e,n,i,s){super(am.type,e,n,i,s)}};om.type="leave-object";var Vl=om,lm=class cm extends Go{constructor(e,n,i,s){super(cm.type,e,n,i,s)}};lm.type="hover-object";var hm=lm,Uc=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new Ge("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new Ge("Current adapter does not support texture coordinates.")}};Uc.supportsDownload=!1;function iu(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Uc)return Ic(e.id,e.VERSION,"5.14.0"),e}return null}var As=`${ai}_touchSupport`,Be={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=VS(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=kS();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=HS(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Be.isWebGLSupported)throw new Ge("WebGL 2 is not supported.");if(Be.maxTextureWidth===0)throw new Ge("Unable to detect system capabilities")}};function kS(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function HS(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;As in localStorage&&(t=localStorage[As]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[As]=!1,n(!1)},r=()=>{i(),localStorage[As]=!0,n(!0)},o=()=>{i(),localStorage[As]=t,n(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function VS(t){let e=t,n=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!n;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(n=!0)}catch{}r.width=0,r.height=0,n||(e/=2)}if(n)return e;throw new Ge("Unable to detect system capabilities")}var GS=Ho({resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!qe.isPowerOfTwo(t))throw new Ge("EquirectangularAdapter resolution must be power of two.");return t}}),Wo=class um extends Uc{static withConfig(e){return[um,e]}constructor(e,n){super(e),this.config=GS(n),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,n){if(St(e.textureX)||St(e.textureY))throw new Ge("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+n.croppedX)/n.fullWidth*Math.PI*2,s=(e.textureY+n.croppedY)/n.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,n){const i=e.yaw/Math.PI/2*n.fullWidth,s=e.pitch/Math.PI*n.fullHeight;let r=Math.round(e.yaw<Math.PI?i+n.fullWidth/2:i-n.fullWidth/2)-n.croppedX,o=Math.round(n.fullHeight/2-s)-n.croppedY;return(r<0||r>n.croppedWidth||o<0||o>n.croppedHeight)&&(r=o=void 0),{textureX:r,textureY:o}}async loadTexture(e,n=!0,i,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new Ge("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:i}:r={data:i,...e};const o=await this.viewer.textureLoader.loadFile(r.path,n?d=>this.viewer.textureLoader.dispatchProgress(d):null,r.path),a=s?await this.loadXMP(o):null,l=await this.viewer.textureLoader.blobToImage(o);typeof r.data=="function"&&(r.data=r.data(l,a));const c=Bf(l.width,l.height,r.data,a),h=this.createEquirectangularTexture(l);return{panorama:e,texture:h,panoData:c,cacheKey:r.path}}async loadXMP(e){const n=await this.loadBlobAsString(e),i=n.indexOf("<x:xmpmeta");if(i===-1)return null;const s=n.indexOf("</x:xmpmeta>",i);if(s===-1)return null;const r=n.substring(i,s);return r.includes("GPano:")?{fullWidth:Xt(r,"FullPanoWidthPixels"),fullHeight:Xt(r,"FullPanoHeightPixels"),croppedWidth:Xt(r,"CroppedAreaImageWidthPixels"),croppedHeight:Xt(r,"CroppedAreaImageHeightPixels"),croppedX:Xt(r,"CroppedAreaLeftPixels"),croppedY:Xt(r,"CroppedAreaTopPixels"),poseHeading:Xt(r,"PoseHeadingDegrees",!1),posePitch:Xt(r,"PosePitchDegrees",!1),poseRoll:Xt(r,"PoseRollDegrees",!1),initialHeading:Xt(r,"InitialViewHeadingDegrees",!1),initialPitch:Xt(r,"InitialViewPitchDegrees",!1),initialFov:Xt(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((n,i)=>{const s=new FileReader;s.onload=()=>n(s.result),s.onerror=i,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Be.maxTextureWidth){const n=Math.min(1,Be.maxCanvasWidth/e.width),i=new OffscreenCanvas(Math.floor(e.width*n),Math.floor(e.height*n)),s=i.getContext("2d");return this.config.blur&&(s.filter=`blur(${i.width/2048}px)`),s.drawImage(e,0,0,i.width,i.height),kl(i)}return kl(e)}createMesh(e){const n=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,o=new dr(Ri,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+n,i,s,r).scale(-1,1,1),a=new hr({depthTest:!1,depthWrite:!1});return new en(o,a)}setTexture(e,n){e.material.map=n.texture}setTextureOpacity(e,n){e.material.opacity=n,e.material.transparent=n<1}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Wo.id="equirectangular";Wo.VERSION="5.14.0";Wo.supportsDownload=!0;var dm=Wo,fm=class pm extends dm{static withConfig(e){return[pm,e]}constructor(e,n){super(e,{resolution:(n==null?void 0:n.resolution)??64,useXmpData:!1})}async loadTexture(e,n){const i=await super.loadTexture(e,n,null,!1);return i.panoData=null,i}createMesh(){const e=new dr(Ri,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),n=e.getAttribute("uv"),i=e.getAttribute("normal");for(let r=0;r<n.count;r++)for(let o=0;o<3;o++){const a=r*3+o,l=i.getX(a),c=i.getY(a),h=i.getZ(a),d=.947;if(r<n.count/6){const u=l===0&&h===0?1:Math.acos(c)/Math.sqrt(l*l+h*h)*(2/Math.PI);n.setXY(a,l*(d/4)*u+1/4,h*(d/2)*u+1/2)}else{const u=l===0&&h===0?1:Math.acos(-c)/Math.sqrt(l*l+h*h)*(2/Math.PI);n.setXY(a,-l*(d/4)*u+3/4,h*(d/2)*u+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new hr({depthTest:!1,depthWrite:!1});return new en(e,s)}};fm.id="dual-fisheye";fm.VERSION="5.14.0";var mn=class mm{constructor(e,n){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof mm?e.viewer:e,this.container=document.createElement(n.tagName??"div"),this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},WS=Ho({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Bt=class extends mn{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=WS(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===yt.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){Rc(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Bo(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,Tc(this.container.querySelector("svg"),"psv-button-svg")}},XS=class extends Bt{constructor(t,e){var n,i;super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(i=(n=e.content).attachViewer)==null||i.call(n,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},ir=class extends Bt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:fn.info}),this.mode=0,this.viewer.addEventListener(ks.type,this),this.viewer.addEventListener(Ws.type,this),this.viewer.addEventListener(Jn.type,this),this.viewer.addEventListener(ei.type,this),this.viewer.addEventListener(kt.type,this)}destroy(){this.viewer.removeEventListener(ks.type,this),this.viewer.removeEventListener(Ws.type,this),this.viewer.removeEventListener(Jn.type,this),this.viewer.removeEventListener(ei.type,this),this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){if(t instanceof kt){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof ks?e=this.mode===1:t instanceof Ws?e=this.mode===1&&t.notificationId!==Tt.DESCRIPTION:t instanceof Jn?e=this.mode===2:t instanceof ei&&(e=this.mode===2&&t.panelId!==Tt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Tt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Tt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Tt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Tt.DESCRIPTION,content:this.viewer.config.caption}))}};ir.id="description";var gm=class extends Bt{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:fn.download}),this.viewer.addEventListener(kt.type,this),this.viewer.addEventListener(ns.type,this)}destroy(){this.viewer.removeEventListener(kt.type,this),this.viewer.removeEventListener(ns.type,this),super.destroy()}handleEvent(t){t instanceof kt?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof ns&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};gm.id="download";var vm=class extends Bt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:fn.fullscreenIn,iconActive:fn.fullscreenOut}),this.viewer.addEventListener(zs.type,this)}destroy(){this.viewer.removeEventListener(zs.type,this),super.destroy()}handleEvent(t){t instanceof zs&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};vm.id="fullscreen";var YS="psvButton",$S=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${fn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,ro=class extends Bt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:fn.menu}),this.viewer.addEventListener(ei.type,this),this.viewer.addEventListener(Jn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(ei.type,this),this.viewer.removeEventListener(Jn.type,this),super.destroy()}handleEvent(t){t instanceof ei?this.toggleActive(t.panelId===Tt.MENU):t instanceof Jn&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Tt.MENU,content:$S(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?yf(t,".psv-panel-menu-item"):void 0,n=e?e.dataset[YS]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Tt.MENU)}};ro.id="menu";function qS(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return fn.arrow.replace("rotate(0",`rotate(${e}`)}var mr=class extends Bt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:qS(e)}),this.direction=e,this.handler=new Vo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===yt.Enter&&this.__onMouseDown();break;case"keyup":t.key===yt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return ko(Be.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};mr.groupId="move";var _m=class extends mr{constructor(t){super(t,1)}};_m.id="moveDown";var xm=class extends mr{constructor(t){super(t,2)}};xm.id="moveLeft";var Em=class extends mr{constructor(t){super(t,3)}};Em.id="moveRight";var Mm=class extends mr{constructor(t){super(t,0)}};Mm.id="moveUp";var Fc=class extends Bt{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new Vo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===yt.Enter&&this.__onMouseDown();break;case"keyup":t.key===yt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return ko(Be.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Fc.groupId="zoom";var ym=class extends Fc{constructor(t){super(t,fn.zoomIn,0)}};ym.id="zoomIn";var Sm=class extends Fc{constructor(t){super(t,fn.zoomOut,1)}};Sm.id="zoomOut";var Nc=class extends Bt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Hf(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(Mn(this.container,"max-width"),10),this.viewer.addEventListener(Nn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Gs.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Nn.type,this),this.viewer.removeEventListener(Gs.type,this),super.destroy()}handleEvent(t){t instanceof Nn?this.__moveZoomValue(t.zoomLevel):t instanceof Gs&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return ko(Be.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Nc.id="zoomRange";Nc.groupId="zoom";var wm=class extends Vf{constructor(t){super(),this.viewer=t}init(){}destroy(){}},Oc=class extends wm{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,s=n.readonlyOptions,r=n.id;for(let[o,a]of Object.entries(t)){if(!(o in i.defaults)){At(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){At(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};Oc.readonlyOptions=[];function Gl(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof wm)return Ic(e.id,e.VERSION,"5.14.0"),e}return null}var $t={panorama:null,container:null,adapter:[dm,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[yt.ArrowUp]:"ROTATE_UP",[yt.ArrowDown]:"ROTATE_DOWN",[yt.ArrowRight]:"ROTATE_RIGHT",[yt.ArrowLeft]:"ROTATE_LEFT",[yt.PageUp]:"ZOOM_IN",[yt.PageDown]:"ZOOM_OUT",[yt.Plus]:"ZOOM_IN",[yt.Minus]:"ZOOM_OUT"}},su={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Wl={container:t=>{if(!t)throw new Ge("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[iu(t[0]),t[1]]:t=[iu(t),null]:t=e,!t[0])throw new Ge("An undefined value was given for adapter.");if(!t[0].id)throw new Ge("Adapter has no id.");return t},defaultYaw:t=>_n(t),defaultPitch:t=>_n(t,!0),defaultZoomLvl:t=>qe.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(At("maxFov cannot be lower than minFov"),t=e.maxFov),qe.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),qe.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...$t.lang,...t}),fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,withCredentials:t=>typeof t=="boolean"?()=>t:typeof t=="function"?t:()=>!1,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[Gl(e[0]),e[1]]:e=[Gl(e),null],!e[0])throw new Ge(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new Ge(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?zo($t.navbar):typeof t=="string"?t.split(/[ ,]/):t},ZS=Ho($t,Wl),Ki=class extends Bt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(ir.id,!1))==null||t.autoSize(!0)}};Ki.id="caption";var Xl={},Eo={};function bm(t,e){if(!t.id)throw new Ge("Button id is required");if(Xl[t.id]=t,t.groupId&&(Eo[t.groupId]=Eo[t.groupId]||[]).push(t),e){const n=$t.navbar;switch(e){case"start":n.unshift(t.id);break;case"end":n.push(t.id);break;default:{const[i,s]=e.split(":"),r=n.indexOf(i);if(!i||!s||r===-1)throw new Ge(`Invalid defaultPosition ${e}`);n.splice(r+(s==="right"?1:0),0,t.id)}}}}[Sm,Nc,ym,ir,Ki,gm,vm,xm,Em,Mm,_m].forEach(t=>bm(t));var jS=class extends mn{constructor(t){super(t,{className:`psv-navbar ${fr}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(Ki.id)!==-1&&t.indexOf(ir.id)===-1&&t.splice(t.indexOf(Ki.id),0,ir.id),t.forEach(e=>{typeof e=="object"?new XS(this,e):Xl[e]?new Xl[e](this):Eo[e]?Eo[e].forEach(n=>{new n(this)}):At(`Unknown button ${e}`)}),new ro(this),this.children.forEach(e=>{e instanceof Bt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof Ki?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof Bt&&i.id===t);return!n&&e&&At(`button "${t}" not found in the navbar`),n}focusButton(t){var e,n;this.isVisible()&&((n=((e=this.getButton(t,!1))==null?void 0:e.container)||this.container.firstElementChild)==null||n.focus())}autoSize(){var i;this.children.forEach(s=>{s instanceof Bt&&s.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(s=>{s.isVisible()&&s instanceof Bt&&(e+=s.width,s.collapsable&&n.push(s))}),e!==0&&(t<e&&n.length>0?(n.forEach(s=>s.collapse()),this.collapsed=n,this.getButton(ro.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(ro.id).hide(!1)),(i=this.getButton(Ki.id,!1))==null||i.autoSize())}};Kn.enabled=!1;var $i={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){Kn.enabled&&(At("ThreeJS cache should be disabled"),Kn.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},KS=class extends mn{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Mn(this.loader,"color"),this.color=Mn(this.canvas,"color"),this.border=parseInt(Mn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Mn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(kt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){t instanceof kt&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){this.container.classList.remove("psv-loader--undefined");const e=qe.clamp(t,0,99.999)/100*Math.PI*2,n=this.size/2,i=n,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+n,a=-Math.cos(e)*r+n,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},JS=class extends mn{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Ge("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new Ws(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new ks(e))}}},QS=class extends mn{constructor(t){super(t,{className:`psv-overlay ${fr}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Qn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Qn.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof Qn&&this.isVisible()&&this.state.dismissible&&t.matches(yt.Escape)&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Ge("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Xp(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new hp(e))}}},ew=200,Ca="psv-panel-content--no-interaction",tw=class extends mn{constructor(t){super(t,{className:`psv-panel ${fr}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=fn.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Qn.type,this)}destroy(){this.viewer.removeEventListener(Qn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case Qn.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Ge("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Bo(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(mo(n))},this.state.keyHandler=n=>{n.key===yt.Enter&&t.clickHandler(mo(n))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new ei(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Jn(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Ca))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Ca)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.matches(yt.Escape)&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Ca)}__resize(t,e){const n=t,i=e,s=Math.max(ew,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=n,this.state.mouseY=i}},nw=class extends mn{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Ge("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new Ge("Initialized tooltip cannot be re-initialized");t.className&&Tc(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new jp(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(Mn(this.arrow,"border-top-width"),10),this.state.border=parseInt(Mn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var a;if(this.state.state!==1&&this.state.state!==3)throw new Ge("Uninitialized tooltip cannot be moved");t.box=t.box??((a=this.state.config)==null?void 0:a.box)??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:Uf(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const l=Pc(i.posClass);s&&(i.posClass[l?0:1]=s),r&&(i.posClass[l?1:0]=r),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new mp(this.state.data));const t=parseFloat(Mn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,s=t.height,r=e.left,o=t.width,a=n+this.state.border,l=e.box.width/2+n*2,c=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-c-s,t.left=r+a-o,t.arrowTop=s,t.arrowLeft=o-a-n;break;case"top-center":t.top=i-c-s,t.left=r-o/2,t.arrowTop=s,t.arrowLeft=o/2-n;break;case"top-right":t.top=i-c-s,t.left=r-a,t.arrowTop=s,t.arrowLeft=n;break;case"bottom-left":t.top=i+c,t.left=r+a-o,t.arrowTop=-n*2,t.arrowLeft=o-a-n;break;case"bottom-center":t.top=i+c,t.left=r-o/2,t.arrowTop=-n*2,t.arrowLeft=o/2-n;break;case"bottom-right":t.top=i+c,t.left=r-a,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+a-s,t.left=r-l-o,t.arrowTop=s-a-n,t.arrowLeft=o;break;case"center-left":t.top=i-s/2,t.left=r-l-o,t.arrowTop=s/2-n,t.arrowLeft=o;break;case"left-bottom":t.top=i-a,t.left=r-l-o,t.arrowTop=n,t.arrowLeft=o;break;case"right-top":t.top=i+a-s,t.left=r+l,t.arrowTop=s-a-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-s/2,t.left=r+l,t.arrowTop=s/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-a,t.left=r+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},iw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,gr=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},rn=new N,Xr=new wn(0,0,0,"ZXY"),sw=class extends gr{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return qe.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return qe.radToDeg(2*Math.atan(Math.tan(qe.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return qe.radToDeg(2*Math.atan(Math.tan(qe.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,n){const i=!St(e),s=!St(n),r={};let o=null;if(i){const a=this.viewer.getPosition(),l=xf(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+l},r.pitch={start:a.pitch,end:e.pitch},o=zl(t,Ef(a,e))}if(s){const a=this.viewer.getZoomLevel(),l=Math.abs(n-a);r.zoom={start:a,end:n},o===null&&(o=zl(t,Math.PI/4*l/100))}return o===null?typeof t=="number"?o=t:o=Nl:o=Math.max(Nl,o),{duration:o,properties:r}}getTransitionOptions(t){let e;const n=this.config.defaultTransition??$t.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...n}:typeof t.transition=="object"?e={...n,...t.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(t){var n;if(!((n=this.state.textureData)!=null&&n.panoData))throw new Ge("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!Xr.equals(this.viewer.renderer.panoramaPose)||!Xr.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,rn),rn.applyEuler(this.viewer.renderer.panoramaPose),rn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(rn)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Ge("Current adapter does not support texture coordinates or no texture has been loaded");return(!Xr.equals(this.viewer.renderer.panoramaPose)||!Xr.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,rn),Hl(rn,this.viewer.renderer.sphereCorrection),Hl(rn,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(rn)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=Ri){return e||(e=new N),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[ai]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,rn),this.vector3ToViewerCoords(rn)}isPointVisible(t){let e,n;if(t instanceof N)e=t,n=this.vector3ToViewerCoords(t);else if(Lc(t))e=this.sphericalCoordsToVector3(t,rn),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new Ge("Position is missing 'yaw' or 'pitch'");return{yaw:_n(t.yaw),pitch:_n(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:_n((t==null?void 0:t.pan)||0),tilt:_n((t==null?void 0:t.tilt)||0,!0),roll:_n((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:qe.degToRad((t==null?void 0:t.poseHeading)||0),tilt:qe.degToRad((t==null?void 0:t.posePitch)||0),roll:qe.degToRad((t==null?void 0:t.poseRoll)||0)}}cleanPanoramaOptions(t,e){return e!=null&&e.isEquirectangular&&(St(t.zoom)&&!St(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),St(t.position)&&!St(e.initialHeading)&&!St(e.initialPitch)&&(t={...t,position:{yaw:_n(e.initialHeading),pitch:_n(e.initialPitch,!0)}})),t}},rw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,ow=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Xo=class Tm{constructor(){this.$=Tm.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Xo.IDLE=0;Xo.CLICK=1;Xo.MOVING=2;var gt=Xo,aw=class extends gr{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new gt,this.keyHandler=new Vo,this.resizeObserver=new ResizeObserver(Cf(()=>this.viewer.autoSize(),50)),this.moveThreshold=uf*Be.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Bs.type,this),this.viewer.addEventListener(Ys.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Bs.type,this),this.viewer.removeEventListener(Ys.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case Bs.type:this.__applyMoveDelta();break;case Ys.type:this.__clearMoveDelta();break}if(!Sf(t,"."+fr))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===yt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Tt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Qn(t.key,t))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,n]of Object.entries(this.config.keyboardActions))if(Ac(t,e)){if(typeof n=="function")n(this.viewer,t);else{switch(n!=="ZOOM_IN"&&n!=="ZOOM_OUT"&&this.viewer.stopAll(),n){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(n)}t.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(gt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY,this.config.mousemove&&t.preventDefault()}__onMouseUp(t){this.step.is(gt.CLICK,gt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(gt.CLICK,gt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(gt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},ff))):t.touches.length===2&&(this.step.set(gt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(gt.CLICK,gt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(gt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Tt.TWO_FINGERS,image:rw,title:this.config.lang.twoFingers})},pf));else if(this.step.is(gt.CLICK,gt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Tt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Tt.CTRL_ZOOM,image:ow,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Tt.CTRL_ZOOM),mf);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new zs(t))}__resetMove(){this.step.set(gt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=Ol(t);this.step.set(gt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,n,i=!1){this.step.is(gt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,n,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(c=>c.object.userData[ai]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),h={rightclick:i,originalEvent:n,target:mo(n),clientX:t,clientY:e,viewerX:r,viewerY:o,yaw:c.yaw,pitch:c.pitch,objects:a.map(d=>d.object).filter(d=>!d.userData[ai])};try{const d=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,d)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new ip(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Jf(h)),this.data.dblclickData=zo(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},df))}}__handleObjectsEvents(t){if(!Lf(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=wf(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(t,r,n,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,Vl),this.state.objectsObservers[r]=null),o?s(a.object,r,hm):(this.state.objectsObservers[r]=a.object,s(a.object,r,rm))):o&&(s(o,r,Vl),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(gt.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(gt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(gt.MOVING)){const n=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(n/this.state.size.width)*qe.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*qe.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(gt.MOVING)){t.preventDefault();const e=Ol(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Be.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};He.enabled=!1;var Yr=new Ze,ru=new pt,ou=new _s,lw=class extends gr{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new SS(this.config.rendererParameters),this.renderer.setPixelRatio(Be.pixelRatio),this.renderer.outputColorSpace=Ci,this.renderer.toneMapping=Nd,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new bh,this.camera=new Qt(50,16/9,.1,2*Ri),this.camera.matrixAutoUpdate=!1;const e=new en(new dr(Ri).scale(-1,1,1),new hr({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[ai]:!0},this.scene.add(e),this.raycaster=new k0,this.frustum=new yc,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.viewer.addEventListener(Xs.type,this),this.viewer.addEventListener(Nn.type,this),this.viewer.addEventListener(Hs.type,this),this.viewer.addEventListener(Vs.type,this),this.viewer.addEventListener(kt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Xs.type,this),this.viewer.removeEventListener(Nn.type,this),this.viewer.removeEventListener(Hs.type,this),this.viewer.removeEventListener(Vs.type,this),this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){switch(t.type){case Xs.type:this.__onSizeUpdated();break;case Nn.type:this.__onZoomUpdated();break;case Hs.type:this.__onPositionUpdated();break;case Vs.type:this.__onPositionUpdated();break;case kt.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new Bs(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new kp))}setTexture(t){this.meshContainer||(this.meshContainer=new Zi,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}transition(t,e,n){const i=n.effect==="fade"||n.rotation,s=!St(e.position),r=!St(e.zoom),o=new Dc(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new Zi,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),s&&!n.rotation){const u=this.viewer.getPosition(),m=new N(0,1,0);a.rotateOnWorldAxis(m,o.position.yaw-u.yaw);const v=new N(0,1,0).cross(this.camera.getWorldDirection(new N)).normalize();a.rotateOnWorldAxis(v,o.position.pitch-u.pitch)}a.add(l),this.scene.add(a),this.renderer.setRenderTarget(new ri),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:c,properties:h}=this.viewer.dataHelper.getAnimationProperties(n.speed,n.rotation?o.position:null,i?o.zoomLevel:null),d=new xo({properties:{...h,opacity:{start:0,end:1}},duration:c,easing:"inOutCubic",onTick:u=>{switch(n.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,u.opacity);break;case"black":case"white":u.opacity<.5?this.renderer.toneMappingExposure=n.effect==="black"?qe.mapLinear(u.opacity,0,.5,1,0):qe.mapLinear(u.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=n.effect==="black"?qe.mapLinear(u.opacity,.5,1,0,1):qe.mapLinear(u.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&n.rotation&&this.viewer.dynamics.position.setValue({yaw:u.yaw,pitch:u.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(u.zoom),this.viewer.needsUpdate()}});return d.then(u=>{a.remove(l),this.scene.remove(a),u?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!n.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),d}getIntersections(t){var n;Yr.x=2*t.x/this.state.size.width-1,Yr.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(Yr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return(n=this.customRenderer)!=null&&n.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,Yr)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(ru.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(ru),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),ou.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(ou)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{var i;(i=n.map)==null||i.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(s=>{var r,o;(o=(r=s.value)==null?void 0:r.dispose)==null||o.call(r)}),n.dispose()};t.traverse(n=>{var i,s;(i=n.geometry)==null||i.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>{e(r)}):e(n.material)),n instanceof bh||(s=n.dispose)==null||s.call(n),n!==t&&this.cleanScene(n)})}},cw=class extends O0{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(t,e,n,i){const s=this._abortController.signal,r=super.load(t,l=>{a(),e(l)},n,l=>{if(a(),s.aborted){const c=new Error;c.name="AbortError",c.message="The operation was aborted.",i(c)}else i(l)});function o(){r.src=""}function a(){s.removeEventListener("abort",o,!1)}return s.addEventListener("abort",o,!1),r}},hw=class extends gr{constructor(t){super(t),this.fileLoader=new N0,this.fileLoader.setResponseType("blob"),this.imageLoader=new cw}destroy(){this.abortLoading(),super.destroy()}abortLoading(){var t,e;(e=(t=this.fileLoader).abort)==null||e.call(t),this.imageLoader.abort()}loadFile(t,e,n){const i=$i.get(t,n);if(i){if(i instanceof Blob)return e==null||e(100),Promise.resolve(i);$i.remove(t,n)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),this.fileLoader.setWithCredentials(this.config.withCredentials(t));let s=0;return e==null||e(s),this.fileLoader.loadAsync(t,r=>{if(r.lengthComputable){const o=r.loaded/r.total*100;o>s&&(s=o,e==null||e(s))}}).then(r=>(s=100,e==null||e(s),$i.add(t,n,r),r))}loadImage(t,e,n){const i=$i.get(t,n);return i?(e==null||e(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(t)),this.imageLoader.loadAsync(t).then(s=>($i.add(t,n,s),s))):this.loadFile(t,e,n).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new Ge("Current adapter does not support preload"))}dispatchProgress(t){this.viewer.loader.setProgress(t),this.viewer.dispatchEvent(new Ep(Math.round(t)))}},uw=class extends gr{constructor(t){super(t),this.zoom=new Ls(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Nn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new zf(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new Hs(e))},{yaw:new Ls(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Ls(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Ls(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Vs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(qe.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(qe.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},dw=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new N(0,0,Ri),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},Am=class extends Vf{constructor(t){var e,n,i;if(super(),this.plugins={},this.children=[],this.parent=Mf(t.container),!this.parent)throw new Ge('"container" element not found.');this.parent[ai]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Of(this.parent),Nf(this.container,"core"),this.state=new dw,this.config=ZS(t),this.__setSize(this.config.size),this.overlay=new QS(this);try{Be.load()}catch(s){console.error(s),this.showError(this.config.lang.webglError);return}$i.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new lw(this),this.textureLoader=new hw(this),this.eventsHandler=new aw(this),this.dataHelper=new sw(this),this.dynamics=new uw(this),(n=(e=this.adapter).init)==null||n.call(e),this.loader=new KS(this),this.navbar=new jS(this),this.panel=new tw(this),this.notification=new JS(this),this.autoSize(),this.setCursor(null),Rc(Be.isTouchEnabled,s=>{Bo(this.container,"psv--is-touch",s)}),this.config.plugins.forEach(([s,r])=>{this.plugins[s.id]=new s(this,r)});for(const s of Object.values(this.plugins))(i=s.init)==null||i.call(s);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var t,e,n,i,s,r;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[o,a]of Object.entries(this.plugins))a.destroy(),delete this.plugins[o];this.children.slice().forEach(o=>o.destroy()),this.children.length=0,(t=this.eventsHandler)==null||t.destroy(),(e=this.renderer)==null||e.destroy(),(n=this.textureLoader)==null||n.destroy(),(i=this.dataHelper)==null||i.destroy(),(s=this.adapter)==null||s.destroy(),(r=this.dynamics)==null||r.destroy(),this.parent.removeChild(this.container),delete this.parent[ai]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Gs)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=Gl(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return bf(this.parent,Be.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Xs(this.getSize())),this.navbar.autoSize())}setPanorama(t,e={}){var r;this.textureLoader.abortLoading(),(r=this.state.transitionAnimation)==null||r.cancel();const n=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=o=>{if(Df(o))return!1;if(this.loader.hide(),this.state.loadingPromise=null,o)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(o),this.dispatchEvent(new Cp(t,o)),o;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Sp(t));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(o=>{if(o.panorama!==this.config.panorama)throw this.adapter.disposeTexture(o),Bl();const a=this.dataHelper.cleanPanoramaOptions(e,o.panoData);return(!St(a.zoom)||!St(a.position))&&this.stopAll(),{textureData:o,cleanOptions:a}});return!n||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:o,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(o),this.renderer.setPanoramaPose(o.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new ns(o)),St(a.zoom)||this.zoom(a.zoom),St(a.position)||this.rotate(a.position)}).then(()=>i(),o=>i(o)):this.state.loadingPromise=s.then(({textureData:o,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new ns(o)),this.state.transitionAnimation=this.renderer.transition(o,a,n),this.state.transitionAnimation)).then(o=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Pp(o)),!o)throw Bl()}).then(()=>i(),o=>i(o)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in $t)){At(`Unknown option ${n}`);continue}if(n in su){At(su[n]);continue}switch(n in Wl&&(i=Wl[n](i,{rawConfig:e,defValue:$t[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Nn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new kt(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:Tt.ERROR,image:iw,title:t,dismissible:!1})}hideError(){this.overlay.hide(Tt.ERROR)}rotate(t){const e=new Zf(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=Lc(t),n=!St(t.zoom),i=new Dc(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return s?(this.state.animation=new xo({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),n&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new xo(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){["width","height"].forEach(e=>{t!=null&&t[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])})}enterFullscreen(){this.isFullscreenEnabled()||Tf(this.parent,Be.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Af(Be.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new nw(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new Ys),this.disableIdleTimer(),this.stopAnimation()}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cm="180",fw="",an="srgb",au="srgb-linear",lu="linear",Ra="srgb",Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const Rm=Math.PI/180,Lm=180/Math.PI;function pw(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[t&255]+Lt[t>>8&255]+Lt[t>>16&255]+Lt[t>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[n&63|128]+Lt[n>>8&255]+"-"+Lt[n>>16&255]+Lt[n>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function qi(t,e,n){return Math.max(e,Math.min(n,t))}function Bc(t,e){return(t%e+e)%e}function mw(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function gw(t,e,n){return t!==e?(n-t)/(e-t):0}function $s(t,e,n){return(1-n)*t+n*e}function vw(t,e,n,i){return $s(t,e,1-Math.exp(-n*i))}function _w(t,e=1){return e-Math.abs(Bc(t,e*2)-e)}function xw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Ew(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Mw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yw(t,e){return t+Math.random()*(e-t)}function Sw(t){return t*(.5-Math.random())}function ww(t){t!==void 0&&(cu=t);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bw(t){return t*Rm}function Tw(t){return t*Lm}function Aw(t){return(t&t-1)===0&&t!==0}function Cw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Rw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lw(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),m=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*d,l*u,a*c);break;case"YZY":t.set(l*u,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*u,a*h,a*c);break;case"XZX":t.set(a*h,l*v,l*m,a*c);break;case"YXY":t.set(l*m,a*h,l*v,a*c);break;case"ZYZ":t.set(l*v,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pw(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Iw(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mo={DEG2RAD:Rm,RAD2DEG:Lm,generateUUID:pw,clamp:qi,euclideanModulo:Bc,mapLinear:mw,inverseLerp:gw,lerp:$s,damp:vw,pingpong:_w,smoothstep:xw,smootherstep:Ew,randInt:Mw,randFloat:yw,randFloatSpread:Sw,seededRandom:ww,degToRad:bw,radToDeg:Tw,isPowerOfTwo:Aw,ceilPowerOfTwo:Cw,floorPowerOfTwo:Rw,setQuaternionFromProperEuler:Lw,normalize:Iw,denormalize:Pw};class vr{constructor(e,n,i,s,r,o,a,l,c){vr.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],v=i[8],x=s[0],p=s[3],f=s[6],b=s[1],S=s[4],E=s[7],C=s[2],R=s[5],L=s[8];return r[0]=o*x+a*b+l*C,r[3]=o*p+a*S+l*R,r[6]=o*f+a*E+l*L,r[1]=c*x+h*b+d*C,r[4]=c*p+h*S+d*R,r[7]=c*f+h*E+d*L,r[2]=u*x+m*b+v*C,r[5]=u*p+m*S+v*R,r[8]=u*f+m*E+v*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,v=n*d+i*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(h*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(La.makeScale(e,n)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,n){return this.premultiply(La.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new vr,hu={};function uu(t){t in hu||(hu[t]=!0,console.warn(t))}const du=new vr().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new vr().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dw(){const t={enabled:!0,workingColorSpace:au,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ra&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ra&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fw?lu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return uu("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return uu("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[au]:{primaries:e,whitePoint:i,transfer:lu,toXYZ:du,fromXYZ:fu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:Ra,toXYZ:du,fromXYZ:fu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),t}const on=Dw();function is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Pa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class zc{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=on.workingColorSpace){return this.r=e,this.g=n,this.b=i,on.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=on.workingColorSpace){if(e=Bc(e,1),n=qi(n,0,1),i=qi(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Pa(o,r,e+1/3),this.g=Pa(o,r,e),this.b=Pa(o,r,e-1/3)}return on.colorSpaceToWorking(this,s),this}setStyle(e,n=an){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=an){const i=Pm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return on.workingToColorSpace(Pt.copy(this),e),Math.round(qi(Pt.r*255,0,255))*65536+Math.round(qi(Pt.g*255,0,255))*256+Math.round(qi(Pt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=on.workingColorSpace){on.workingToColorSpace(Pt.copy(this),n);const i=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=on.workingColorSpace){return on.workingToColorSpace(Pt.copy(this),n),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=an){on.workingToColorSpace(Pt.copy(this),e);const n=Pt.r,i=Pt.g,s=Pt.b;return e!==an?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+n,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wn),e.getHSL($r);const i=$s(Wn.h,$r.h,n),s=$s(Wn.s,$r.s,n),r=$s(Wn.l,$r.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new zc;zc.NAMES=Pm;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cm);/*!
 * Photo Sphere Viewer / Gallery Plugin 5.14.0
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Uw=Object.defineProperty,Fw=(t,e)=>{for(var n in e)Uw(t,n,{get:e[n],enumerable:!0})},Nw={};Fw(Nw,{HideGalleryEvent:()=>Zs,ShowGalleryEvent:()=>qs});var Im=class Dm extends pr{constructor(e){super(Dm.type),this.fullscreen=e}};Im.type="show-gallery";var qs=Im,Um=class Fm extends pr{constructor(){super(Fm.type)}};Um.type="hide-gallery";var Zs=Um,Ow='<svg viewBox="185 115 330 330" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M186.7 326.7V163.3c0-15 8.3-23.3 23.3-23.3h210c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H210c-15 0-23.3-8.3-23.3-23.3zm70 70v-23.4H420c30.2 0 46.7-16.4 46.7-46.6V210H490c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H280c-15 0-23.3-8.3-23.3-23.3zm-23.8-105H397l-40-50.4-26.7 29.7-44.3-54.5zm106.7-76c9.6 0 17.8-7.8 17.8-17.2a18 18 0 0 0-17.8-17.8c-9.4 0-17.2 8.2-17.2 17.8 0 9.4 7.8 17.2 17.2 17.2z"/><!--Created by Wolf Böse from the Noun Project--></svg>',_r=class extends Bt{constructor(t){super(t,{className:"psv-gallery-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Ow}),this.plugin=this.viewer.getPlugin("gallery"),this.plugin&&(this.plugin.addEventListener(qs.type,this),this.plugin.addEventListener(Zs.type,this))}destroy(){this.plugin&&(this.plugin.removeEventListener(qs.type,this),this.plugin.removeEventListener(Zs.type,this)),super.destroy()}handleEvent(t){t instanceof qs?this.toggleActive(!0):t instanceof Zs&&this.toggleActive(!1)}isSupported(){return!!this.plugin}onClick(){this.plugin.toggle()}};_r.id="gallery";var Nm="psvGalleryItem",Om=Ve.dasherize(Nm),qr="psv-gallery-item--active",Bw=(t,e)=>`
${t.map(n=>`
<div class="psv-gallery-item" 
     data-${Om}="${n.id}"
     style="width:${e.width}px; aspect-ratio:${e.width/e.height};"
     tabindex="0">
    ${n.name?`<div class="psv-gallery-item-title"><span>${n.name}</span></div>`:""}
    <svg class="psv-gallery-item-thumb" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><use href="#psvGalleryBlankIcon"></use></svg>
    ${n.thumbnail?`<div class="psv-gallery-item-thumb" data-src="${n.thumbnail}"></div>`:""}
</div>
`).join("")}
`,pu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 0 50 100"><polygon fill="currentColor" points="24.66 99.31 25.34 100 75.34 50 25.34 0 24.66 0.69 24.66 22.64 52.01 50 24.66 77.36 24.66 99.31"/><!-- Created by Rainbow Designs from the Noun Project --></svg>
`,zw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <symbol id="psvGalleryBlankIcon" viewBox="0 0 200 200">
      <rect x="0" y="0" width="200" height="200" fill="#666"/>
      <g transform="scale(0.25) translate(25 20) " fill="#eee">
        <path d="M376 220.61c-85.84 0-155.39 69.56-155.39 155.39 0 85.84 69.56 155.39 155.39 155.39 85.84 0 155.39-69.56 155.39-155.39 0-85.84-69.56-155.39-155.39-155.39zm0 300.92c-80.41 0-145.53-65.12-145.53-145.53S295.59 230.47 376 230.47 521.53 295.59 521.53 376 456.41 521.53 376 521.53z"/>
        <path d="M467.27 300.03H284.74a18.21 18.21 0 0 0-18.25 18.25v115.43a18.21 18.21 0 0 0 18.25 18.26h182.53a18.21 18.21 0 0 0 18.25-18.26V318.28a18.2 18.2 0 0 0-18.25-18.25zm-190.91 18.25a8.64 8.64 0 0 1 8.39-8.38h182.53a8.64 8.64 0 0 1 8.38 8.38V413l-44.89-35.52c-.49-.5-.99-.5-1.48-.99h-2.46c-.5 0-1 0-1.48.5l-37.5 21.2-43.9-58.7-.5-.5s0-.48-.49-.48c0 0-.49 0-.49-.5-.49 0-.49-.49-.99-.49-.49 0-.49 0-.98-.49H337.53c-.5 0-.5.5-.99.5h-.49l-.5.48s-.48 0-.48.5l-58.7 65.12zM467.27 442.1H284.74a8.64 8.64 0 0 1-8.39-8.38v-15.3l63.15-68.07 42.92 57.22 1.48 1.48h.49c.5.5 1.48.5 1.97.5H388.83l38.47-21.72 46.37 36.5c.5.5 1.49 1 1.98 1v8.88c0 3.95-3.45 7.9-8.38 7.9z"/>
        <path d="M429.77 333.58a13.81 13.81 0 1 1-27.63 0 13.81 13.81 0 0 1 27.63 0"/>
      </g>
    </symbol>
  </defs>
</svg>`;function mu(t,e){let n;t.addEventListener("mousedown",()=>{e(),clearInterval(n),n=setInterval(()=>{t.style.pointerEvents==="none"?clearInterval(n):e()},500)}),t.addEventListener("mouseup",()=>{clearInterval(n)})}var kw=class extends mn{constructor(t,e){super(e,{className:`psv-gallery ${bt.CAPTURE_EVENTS_CLASS}`}),this.plugin=t,this.state={visible:!0,mousedown:!1,initMouse:null,mouse:null,itemMargin:null,breakpoint:null,scrollLeft:0,scrollTop:0,isAboveBreakpoint:null},this.container.innerHTML=zw,this.container.querySelector("svg").style.display="none";const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=bt.ICONS.close,this.container.appendChild(n),n.addEventListener("click",()=>this.plugin.hide()),this.items=document.createElement("div"),this.items.className="psv-gallery-container",this.container.appendChild(this.items),this.config.navigationArrows&&(this.arrowLeft=document.createElement("div"),this.arrowLeft.className="psv-gallery-arrow",this.arrowLeft.innerHTML=pu,this.container.appendChild(this.arrowLeft),this.arrowRight=document.createElement("div"),this.arrowRight.className="psv-gallery-arrow",this.arrowRight.innerHTML=pu,this.container.appendChild(this.arrowRight),mu(this.arrowLeft,()=>this.__scroll(-1)),mu(this.arrowRight,()=>this.__scroll(1))),this.state.itemMargin=parseInt(Ve.getStyleProperty(this.items,"padding-left"),10),this.state.breakpoint=parseInt(Ve.getStyleProperty(this.container,"--psv-gallery-breakpoint"),10),this.observer=new IntersectionObserver(i=>{i.forEach(s=>{if(s.intersectionRatio>0){const r=s.target;r.style.backgroundImage=`url("${r.dataset.src}")`,delete r.dataset.src,this.observer.unobserve(s.target)}})},{root:this.viewer.container}),this.viewer.addEventListener(Je.SizeUpdatedEvent.type,this),this.container.addEventListener("transitionend",this),this.container.addEventListener("keydown",this),this.items.addEventListener("wheel",this),this.items.addEventListener("scroll",this),this.items.addEventListener("mousedown",this),this.items.addEventListener("mousemove",this),this.items.addEventListener("click",this),window.addEventListener("mouseup",this),this.hide()}get isAboveBreakpoint(){return this.items.offsetWidth>this.state.breakpoint}get config(){return this.plugin.config}destroy(){window.removeEventListener("mouseup",this),this.viewer.removeEventListener(Je.SizeUpdatedEvent.type,this),this.observer.disconnect(),super.destroy()}handleEvent(t){switch(t.type){case"transitionend":this.isVisible()&&t.target===this.container&&this.__focusActiveOrFirst();break;case"keydown":if(this.isVisible())switch(t.key){case bt.KEY_CODES.Escape:this.plugin.hide();break;case bt.KEY_CODES.Enter:this.__click(t);break}break;case"wheel":{const e=t;this.__scroll(e.deltaY>0?1:-1),t.preventDefault();break}case"scroll":case Je.SizeUpdatedEvent.type:this.__updateArrows();break;case"mousedown":this.state.mousedown=!0,this.isAboveBreakpoint?this.state.initMouse=t.clientX:this.state.initMouse=t.clientY,this.state.mouse=this.state.initMouse;break;case"mousemove":if(this.state.mousedown)if(this.isAboveBreakpoint){const e=this.state.mouse-t.clientX;this.items.scrollLeft+=e,this.state.scrollLeft=this.items.scrollLeft,this.state.mouse=t.clientX}else{const e=this.state.mouse-t.clientY;this.items.scrollTop+=e,this.state.scrollTop=this.items.scrollTop,this.state.mouse=t.clientY}break;case"mouseup":this.state.mousedown=!1,this.state.mouse=null,t.preventDefault();break;case"click":{const e=this.isAboveBreakpoint?t.clientX:t.clientY;Math.abs(this.state.initMouse-e)<10&&this.__click(t);break}}}show(){this.container.classList.add("psv-gallery--open"),this.state.visible=!0}hide(){this.container.classList.remove("psv-gallery--open"),this.state.visible=!1,Ve.hasParent(document.activeElement,this.container)&&this.viewer.navbar.focusButton(_r.id)}setItems(t){this.items.innerHTML=Bw(t,this.plugin.config.thumbnailSize),this.observer&&(this.observer.disconnect(),this.items.querySelectorAll("[data-src]").forEach(e=>{this.observer.observe(e)})),this.__updateArrows()}setActive(t){const e=this.items.querySelector("."+qr);if(e==null||e.classList.remove(qr),t){const n=this.items.querySelector(`[data-${Om}="${t}"]`);n&&(n.classList.add(qr),this.items.scrollLeft=n.offsetLeft+n.clientWidth/2-this.items.clientWidth/2)}}__click(t){const e=Ve.getMatchingTarget(t,".psv-gallery-item");if(!e)return;const n=e.dataset[Nm];this.plugin.applyItem(n),this.setActive(n),(this.config.hideOnClick||!this.isAboveBreakpoint)&&this.hide()}__focusActiveOrFirst(){const t=this.items.querySelector("."+qr)??this.items.firstElementChild;t==null||t.focus()}__scroll(t){if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth,n=this.plugin.config.thumbnailSize.width+(this.state.itemMargin??0);this.state.scrollLeft=Mo.clamp(this.state.scrollLeft+t*n,0,e),t===-1&&this.state.scrollLeft<n*.8&&(this.state.scrollLeft=0),t===1&&this.state.scrollLeft>e-n*.8&&(this.state.scrollLeft=e),this.items.scroll({left:this.state.scrollLeft,behavior:"smooth"})}else{const e=this.items.scrollHeight-this.items.offsetHeight,n=this.items.querySelector(":first-child").offsetHeight*2+(this.state.itemMargin??0);this.state.scrollTop=Mo.clamp(this.state.scrollTop+t*n,0,e),t===-1&&this.state.scrollTop<n*.8&&(this.state.scrollTop=0),t===1&&this.state.scrollTop>e-n*.8&&(this.state.scrollTop=e),this.items.scroll({top:this.state.scrollTop,behavior:"smooth"})}}__updateArrows(){if(!this.config.navigationArrows)return;this.state.isAboveBreakpoint!==this.isAboveBreakpoint&&(Ve.toggleClass(this.arrowLeft,"psv-gallery-arrow--left",this.isAboveBreakpoint),Ve.toggleClass(this.arrowLeft,"psv-gallery-arrow--top",!this.isAboveBreakpoint),Ve.toggleClass(this.arrowRight,"psv-gallery-arrow--right",this.isAboveBreakpoint),Ve.toggleClass(this.arrowRight,"psv-gallery-arrow--bottom",!this.isAboveBreakpoint),this.state.isAboveBreakpoint=this.isAboveBreakpoint);const t=(e,n)=>{n?(e.style.opacity="1",e.style.pointerEvents="auto"):(e.style.opacity="0",e.style.pointerEvents="none")};if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth;t(this.arrowLeft,this.items.scrollLeft>50),t(this.arrowRight,this.items.scrollLeft<e-50)}else{const e=this.items.scrollHeight-this.items.offsetHeight;t(this.arrowLeft,this.items.scrollTop>50),t(this.arrowRight,this.items.scrollTop<e-50)}}},Hw=Ve.getConfigParser({items:[],navigationArrows:!0,visibleOnLoad:!1,hideOnClick:!0,thumbnailSize:{width:200,height:100}}),xr=class Bm extends Oc{constructor(e,n){super(e,n),this.items=[],this.gallery=new kw(this,this.viewer)}static withConfig(e){return[Bm,e]}init(){super.init(),Ve.checkStylesheet(this.viewer.container,"gallery-plugin"),this.map=this.viewer.getPlugin("map"),this.plan=this.viewer.getPlugin("plan"),this.viewer.addEventListener(Je.PanoramaLoadedEvent.type,this),this.viewer.addEventListener(Je.ShowPanelEvent.type,this),this.config.visibleOnLoad&&this.viewer.addEventListener(Je.ReadyEvent.type,()=>{this.items.length&&this.show()},{once:!0}),this.setItems(this.config.items),delete this.config.items,setTimeout(()=>this.__updateButton())}destroy(){this.viewer.removeEventListener(Je.PanoramaLoadedEvent.type,this),this.viewer.removeEventListener(Je.ShowPanelEvent.type,this),this.gallery.destroy(),super.destroy()}setOptions(e){super.setOptions(e),e.thumbnailSize&&this.gallery.setItems(this.items)}handleEvent(e){if(e instanceof Je.PanoramaLoadedEvent){const n=this.items.find(i=>Ve.deepEqual(i.panorama,e.data.panorama));this.currentId=n==null?void 0:n.id,this.gallery.setActive(this.currentId)}else e instanceof Je.ShowPanelEvent&&this.gallery.isVisible()&&this.hide()}show(){var e,n;return(e=this.map)==null||e.minimize(),(n=this.plan)==null||n.minimize(),this.dispatchEvent(new qs(!this.gallery.isAboveBreakpoint)),this.gallery.show()}hide(){return this.dispatchEvent(new Zs),this.gallery.hide()}toggle(){this.gallery.isVisible()?this.hide():this.show()}isVisible(){return this.gallery.isVisible()}setItems(e,n){if(e?e.forEach((i,s)=>{if(!i.id)throw new Ge(`Item ${s} has no "id".`);if(!i.panorama)throw new Ge(`Item "${i.id}" has no "panorama".`)}):e=[],this.handler=n,this.items=e.map(i=>({...i,id:`${i.id}`})),this.gallery.setItems(this.items),this.currentId){const i=this.items.find(s=>s.id===this.currentId);this.currentId=i==null?void 0:i.id,this.gallery.setActive(this.currentId)}this.items.length||this.gallery.hide(),this.__updateButton()}applyItem(e){if(e!==this.currentId){if(this.handler)this.handler(e);else{const n=this.items.find(i=>i.id===e);this.viewer.setPanorama(n.panorama,{caption:n.name,...n.options})}this.currentId=e}}__updateButton(){var e;(e=this.viewer.navbar.getButton(_r.id,!1))==null||e.toggle(this.items.length>0)}};xr.id="gallery";xr.VERSION="5.14.0";xr.configParser=Hw;xr.readonlyOptions=["items","navigationArrows","visibleOnLoad"];var zm=xr;$t.lang[_r.id]="Gallery";bm(_r,"caption:left");/*!
 * Photo Sphere Viewer / Map Plugin 5.14.0
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Vw=Object.defineProperty,Gw=(t,e)=>{for(var n in e)Vw(t,n,{get:e[n],enumerable:!0})},Ww={};Gw(Ww,{SelectHotspot:()=>Vm,ViewChanged:()=>Ps});var km=class Hm extends pr{constructor(e){super(Hm.type),this.hotspotId=e}};km.type="select-hotspot";var Vm=km,Gm=class Wm extends pr{constructor(e){super(Wm.type),this.view=e}};Gm.type="view-changed";var Ps=Gm,gu="map",Xw="__generated__",oo="__marker__",Zr=2,vu=4,Yw=10;function $w(t){const e=document.createElement("img");if(!t.includes("<svg"))e.src=t;else{if(!/<svg[^>]*width="/.test(t)&&t.includes("viewBox")){const[,,,i,s]=/viewBox="([0-9-]+) ([0-9-]+) ([0-9]+) ([0-9]+)"/.exec(t);t=t.replace("<svg",`<svg width="${i}px" height="${s}px"`)}const n=`data:image/svg+xml;base64,${window.btoa(t)}`;e.src=n}return e}function qw(t){return t?t.includes("<svg")?t:`<img src="${t}">`:""}function Zw(t,e,n){return{image:n?e.hoverImage??e.image??t.hoverImage??t.image:e.image??t.image,size:n?e.hoverSize??e.size??t.hoverSize??t.size:e.size??t.size,color:n?e.hoverColor??e.color??t.hoverColor??t.color:e.color??t.color,borderColor:n?e.hoverBorderColor??e.borderColor??t.hoverBorderColor??t.borderColor:e.borderColor??t.borderColor,borderSize:n?e.hoverBorderSize??e.borderSize??t.hoverBorderSize??t.borderSize:e.borderSize??t.borderSize}}function jw(t,e,n){return{x:(Math.cos(e)*t.x-Math.sin(e)*t.y)/n,y:(Math.sin(e)*t.x+Math.cos(e)*t.y)/n}}function _u(t,e,n){return{x:(Math.cos(-e)*t.x-Math.sin(-e)*t.y)*n,y:(Math.sin(-e)*t.x+Math.cos(-e)*t.y)*n}}function Ia(t,e,n,i,s="black"){t.shadowOffsetX=e*Be.pixelRatio,t.shadowOffsetY=n*Be.pixelRatio,t.shadowBlur=i*Be.pixelRatio,t.shadowColor=s}function xu(t,e,n){const i=e.width,s=e.height;Xm(t,e,-n/2,-(s/i*n)/2,n,s/i*n)}function Xm(t,e,n,i,s,r){t.drawImage(e,0,0,e.width,e.height,n*Be.pixelRatio,i*Be.pixelRatio,s*Be.pixelRatio,r*Be.pixelRatio)}function Kw(t,e){return`rgba(${t.slice(4,-1)},${e})`}var Jw='<svg viewBox="114 45 472 472" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M383.6 196a67.3 67.3 0 1 0-134.5.1 67.3 67.3 0 0 0 134.5-.1zm-100.8 0a33.6 33.6 0 1 1 67.3 0 33.6 33.6 0 0 1-67.3 0z"/><path d="M584 340.8a16.8 16.8 0 0 0-15.6-10.4H403.8c25.2-40.2 47-88 47-133.4A135 135 0 0 0 316.4 61.6 135 135 0 0 0 182 197c0 55.8 33 115.3 64.7 159.8L120.4 469a16.8 16.8 0 0 0 11.2 29.4H434c4.5 0 8.7-1.8 11.9-5l134.4-134.3c4.8-4.8 6.2-12 3.6-18.3zM215.5 197c0-56.1 45.2-101.8 100.8-101.8 55.6 0 100.8 45.6 100.8 101.8 0 65-57.1 144.2-100.8 192.8C273 341.7 215.6 262.3 215.6 197zM427 464.8H175.8l91.3-81.1a575.6 575.6 0 0 0 37.4 42.6 16.8 16.8 0 0 0 23.8 0c2.2-2.2 26.3-26.7 52.6-62.3h147z"/></g><!-- Created by Ayub Irawan from Noun Project --></svg>',jr={top:"bottom",bottom:"top",left:"right",right:"left"};function Qw(t,e){switch(e){case 1:return[jr[t[0]],jr[t[1]]];case 2:return[t[0],jr[t[1]]];case 3:return[jr[t[0]],t[1]];default:return t}}var Yo=class extends mn{constructor(t,e){super(t,{}),this.map=t,this.position=e}applyConfig(){this.container.className=`psv-map__button psv-map__button--${Qw(this.map.config.position,this.position).join("-")}`,this.update()}update(){}},eb=class extends Yo{constructor(t){super(t,0),this.container.addEventListener("click",e=>{t.toggleCollapse(),e.stopPropagation()})}applyConfig(){super.applyConfig(),this.container.classList.add("psv-map__button-close")}update(){this.container.innerHTML=this.map.collapsed?Jw:bt.ICONS.close,this.container.title=this.map.collapsed?this.viewer.config.lang.map:this.viewer.config.lang.close}},tb='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50,0L70,50L50,100L30,50Z M50,86L64,50L36,50Z" fill="currentColor"/></svg>',nb=class extends Yo{constructor(t){super(t,3),this.container.innerHTML=tb,this.container.querySelector("svg").style.width="80%",this.container.addEventListener("click",e=>{this.viewer.dynamics.position.goto({yaw:-t.config.rotation},2),e.stopPropagation()})}rotate(t){this.container.querySelector("svg").style.transform=`rotate3d(0, 0, 1, ${-t}rad)`}update(){this.container.title=this.viewer.config.lang.mapNorth}},ib='<svg viewBox="95 25 510 510" xmlns="http://www.w3.org/2000/svg"><path d="M604.2 39.8v481c0 7.8-6.1 14-14 14H358.4c-7.8 0-14-6.2-14-14s6.2-14 14-14h217.8v-453H123.8v216.7c0 7.8-6.2 14-14 14-7.9 0-14-6.2-14-14V39.8c0-7.9 6.1-14 14-14h481c7.3 0 13.4 6.1 13.4 14zm-304 304v176.4c0 7.9-6.2 14-14 14H109.8c-7.9 0-14-6.1-14-14V343.8c0-7.8 6.1-14 14-14h176.4c7.2 0 14 6.8 14 14zm-28 14H123.8v148.4h148.4zm215.6-195.4v79.5c0 7.9 6.1 14 14 14 7.8 0 14-6.1 14-14V128.2c0-7.8-6.2-14-14-14H388.6c-7.8 0-14 6.2-14 14 0 7.9 6.2 14 14 14h79L326.5 283.4a13.5 13.5 0 0 0 0 19.6c2.8 2.8 6.1 3.9 10 3.9 4 0 7.3-1.1 10.1-4z" fill="currentColor"/><!-- Created by Gregor Cresnar from Noun Project --></svg>',sb='<svg viewBox="95 25 510 510" xmlns="http://www.w3.org/2000/svg"><path d="M109.8 25.8h481c7.8 0 14 6.1 14 14v481c0 7.8-6.2 14-14 14H358.4c-7.8 0-14-6.2-14-14s6.2-14 14-14h217.8v-453H123.8v216.7c0 7.8-6.2 14-14 14-7.9 0-14-6.2-14-14V39.8c0-7.9 6.1-14 14-14zm176.4 508.4H109.8c-7.9 0-14-6.1-14-14V343.8c0-7.8 6.1-14 14-14h176.4c7.8 0 14 6.2 14 14v176.4c0 7.9-6.8 14-14 14zm-14-176.4H123.8v148.4h148.4zm64.4-191.5c-7.9 0-14 6.2-14 14v113.1c0 7.9 6.1 14 14 14h113c8 0 14-6.1 14-14s-6-14-14-14h-79.4l141-141a13.5 13.5 0 0 0 0-19.7 13.5 13.5 0 0 0-19.5 0L350.6 259.8v-79.5c0-7.8-6.2-14-14-14z" fill="currentColor"/><!-- Created by Gregor Cresnar from Noun Project --></svg>',rb={"bottom-left":0,"bottom-right":-90,"top-right":180,"top-left":90},ob=class extends Yo{constructor(t){super(t,1),this.container.addEventListener("click",e=>{t.toggleMaximized(),e.stopPropagation()})}update(){this.container.innerHTML=this.map.maximized?sb:ib,this.container.querySelector("svg").style.transform=`rotate3d(0, 0, 1, ${rb[this.map.config.position.join("-")]}deg)`,this.container.title=this.map.maximized?this.viewer.config.lang.mapMinimize:this.viewer.config.lang.mapMaximize}},ab='<svg viewBox="170 100 360 360" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M518.6 269h-18.5a150.8 150.8 0 0 0-138-137.9v-20.9c0-5.8-4.7-10.6-10.5-10.6h-3.2c-5.8 0-10.6 4.8-10.6 10.6v21A150.8 150.8 0 0 0 200 269h-18.5c-5.9 0-10.6 4.7-10.6 10.6v3.2c0 5.8 4.7 10.5 10.6 10.5h18.5c6 73.4 64.6 132 138 138v18.5c0 5.8 4.7 10.6 10.5 10.6h3.2c5.8 0 10.6-4.8 10.6-10.6v-18.6c73.3-5.9 132-64.5 137.9-137.9h18.5c5.9 0 10.6-4.7 10.6-10.5v-3.2c0-5.9-4.7-10.6-10.6-10.6zM362.2 414.4v-9.8c0-5.9-4.8-10.6-10.6-10.6h-3.2c-5.8 0-10.6 4.7-10.6 10.6v9.8a134 134 0 0 1-121-121h9.8c5.9 0 10.6-4.8 10.6-10.6v-3.2c0-5.9-4.7-10.6-10.6-10.6h-9.8a134 134 0 0 1 121-121v7.5c0 5.8 4.8 10.5 10.6 10.5h3.2c5.8 0 10.6-4.7 10.6-10.5V148a134 134 0 0 1 121 121h-9.8c-5.9 0-10.6 4.7-10.6 10.6v3.2c0 5.8 4.7 10.5 10.6 10.5h9.8a134 134 0 0 1-121 121z"/><path d="M355.4 222a6 6 0 0 0-10.7 0L291 320a8.3 8.3 0 0 0 9.7 12l39.2-11.7c6.6-2 13.6-2 20.2 0l39.2 11.7a8.3 8.3 0 0 0 9.7-12z"/></g><!-- Created by muhammad benani from Noun Project --></svg>',lb=class extends Yo{constructor(t){super(t,2),this.container.innerHTML=ab,this.container.querySelector("svg").style.width="80%",this.container.addEventListener("click",e=>{t.reset(),e.stopPropagation()})}update(){this.container.title=this.viewer.config.lang.mapReset}},cb='<svg viewBox="128 58 444 444" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M350 58.2a221.8 221.8 0 1 0 0 443.6 221.8 221.8 0 0 0 0-443.6zm130.3 252.7H219.7a31 31 0 1 1 0-61.8h260.6a31 31 0 1 1 0 61.8z"/><!-- Created by Iconika from Noun Project --></svg>',hb='<svg viewBox="143.8 73.8 412.5 412.5" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M350 73.8a206.2 206.2 0 1 0 0 412.4 206.2 206.2 0 0 0 0-412.4zm117.3 234H378v89.5a27.9 27.9 0 1 1-55.8 0V308h-89.4a27.9 27.9 0 1 1 0-55.8H322v-89.5a27.9 27.9 0 1 1 55.8 0v89.5h89.5a27.9 27.9 0 1 1 0 55.8z"/><!-- Created by Iconika from Noun Project --></svg>',ub=class extends mn{constructor(t){super(t,{className:"psv-map__toolbar"}),this.map=t,this.handler=new Ve.PressHandler(100),this.container.innerHTML=`${cb}<span class="psv-map__toolbar-text">100%</span>${hb}`,this.zoomIndicator=this.container.querySelector(".psv-map__toolbar-text");const e=this.container.querySelectorAll("svg");e[0].dataset.delta="-1",e[1].dataset.delta="1",this.container.addEventListener("mousedown",this),window.addEventListener("mouseup",this),this.container.addEventListener("touchstart",this),window.addEventListener("touchend",this)}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":case"touchstart":{const e=Ve.getMatchingTarget(t,"svg[data-delta]"),n=e==null?void 0:e.dataset.delta;n&&(cancelAnimationFrame(this.animation),this.handler.down(),this.time=performance.now(),this.animateZoom(parseInt(n,10)),t.preventDefault(),t.stopPropagation());break}case"mouseup":case"touchend":this.animation&&(this.handler.up(()=>{cancelAnimationFrame(this.animation),this.animation=null}),t.preventDefault(),t.stopPropagation());break}}setText(t){this.zoomIndicator.innerText=`${Math.round(Math.exp(t)*100)}%`}animateZoom(t){this.animation=requestAnimationFrame(e=>{this.map.zoom(t*(e-this.time)/1e3),this.time=e,this.animateZoom(t)})}},db=`<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="gradient">
            <stop offset="80%" stop-color="rgba(255, 255, 255, 0)"/>
            <stop offset="90%" stop-color="rgba(255, 255, 255, .5)"/>
        </radialGradient>
    </defs>
    <circle cx="250" cy="250" r="250" fill="url(#gradient)"/>
    <circle cx="250" cy="250" r="245" fill="none" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10"/>
    <g fill="#222">
        <rect x="1" y="248" width="18" height="4"/>
        <rect x="481" y="248" width="18" height="4"/>
        <rect x="248" y="1" width="4" height="18"/>
        <rect x="248" y="481" width="4" height="18"/>
    </g>
</svg>`,fb=`<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="gradient">
            <stop offset="5%" stop-color="rgba(255, 255, 255, .5)"/>
            <stop offset="10%" stop-color="rgba(255, 255, 255, 0)"/>
            <stop offset="90%" stop-color="rgba(255, 255, 255, 0)"/>
            <stop offset="95%" stop-color="rgba(255, 255, 255, .5)"/>
        </linearGradient>
        <linearGradient id="gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stop-color="rgba(255, 255, 255, .5)"/>
            <stop offset="10%" stop-color="rgba(255, 255, 255, 0)"/>
            <stop offset="90%" stop-color="rgba(255, 255, 255, 0)"/>
            <stop offset="95%" stop-color="rgba(255, 255, 255, .5)"/>
        </linearGradient>
    </defs>=
    <rect x="0" y="0" width="500" height="500" fill="url(#gradient)"/>
    <rect x="0" y="0" width="500" height="500" fill="url(#gradient2)"/>
    <rect x="5" y="5" width="490" height="490" fill="none" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10"/>
    <g fill="#222">
        <rect x="1" y="248" width="18" height="4"/>
        <rect x="481" y="248" width="18" height="4"/>
        <rect x="248" y="1" width="4" height="18"/>
        <rect x="248" y="481" width="4" height="18"/>
    </g>
</svg>`,pb=class extends mn{constructor(t,e){super(t,{className:`psv-map ${bt.CAPTURE_EVENTS_CLASS}`}),this.plugin=e,this.state={visible:!1,maximized:!1,collapsed:!1,galleryWasVisible:!1,imgScale:1,zoom:this.config.defaultZoom,offset:{x:0,y:0},mouseX:null,mouseY:null,mousedown:!1,pinchDist:0,pinchAngle:0,hotspotPos:{},hotspotId:null,hotspotTooltip:null,markers:[],forceRender:!1,needsUpdate:!1,renderLoop:null,images:{}};const n=document.createElement("div");n.className="psv-map__container",n.addEventListener("mousedown",this),window.addEventListener("mousemove",this),window.addEventListener("mouseup",this),n.addEventListener("touchstart",this),window.addEventListener("touchmove",this),window.addEventListener("touchend",this),n.addEventListener("wheel",this),t.addEventListener(Je.KeypressEvent.type,this),t.addEventListener(Je.ConfigChangedEvent.type,this),this.canvas=document.createElement("canvas"),this.__setCursor("move"),n.appendChild(this.canvas),this.overlay=document.createElement("div"),this.overlay.className="psv-map__overlay",n.appendChild(this.overlay),this.container.appendChild(n),this.container.addEventListener("transitionstart",this),this.container.addEventListener("transitionend",this),this.config.buttons.reset&&(this.resetButton=new lb(this)),this.config.buttons.maximize&&(this.maximizeButton=new ob(this)),this.config.buttons.close&&(this.closeButton=new eb(this)),this.config.buttons.north&&(this.compassButton=new nb(this)),this.zoomToolbar=new ub(this);const i=()=>{this.isVisible()&&(this.state.needsUpdate||this.state.forceRender)&&(this.render(),this.state.needsUpdate=!1),this.state.renderLoop=requestAnimationFrame(i)};i(),this.applyConfig(),this.hide(),this.config.visibleOnLoad||this.toggleCollapse()}get config(){return this.plugin.config}get maximized(){return this.state.maximized}get collapsed(){return this.state.collapsed}init(){var t,e;this.gallery=this.viewer.getPlugin("gallery"),(t=this.gallery)==null||t.addEventListener("show-gallery",this),(e=this.gallery)==null||e.addEventListener("hide-gallery",this)}destroy(){var t,e;this.canvas.width=0,this.canvas.height=0,window.removeEventListener("touchmove",this),window.removeEventListener("mousemove",this),window.removeEventListener("touchend",this),window.removeEventListener("mouseup",this),this.viewer.removeEventListener(Je.KeypressEvent.type,this),(t=this.gallery)==null||t.removeEventListener("show-gallery",this),(e=this.gallery)==null||e.removeEventListener("hide-gallery",this),cancelAnimationFrame(this.state.renderLoop),super.destroy()}handleEvent(t){var e,n,i,s,r;if(!Ve.getMatchingTarget(t,`.${bt.CAPTURE_EVENTS_CLASS}:not(.psv-map)`))switch(t.type){case Je.KeypressEvent.type:this.state.maximized&&(this.__onKeyPress(t),t.preventDefault());break;case Je.ConfigChangedEvent.type:t.containsOptions("lang")&&((e=this.resetButton)==null||e.update(),(n=this.closeButton)==null||n.update(),(i=this.compassButton)==null||i.update(),(s=this.maximizeButton)==null||s.update());break;case"mousedown":{const o=t;this.state.mouseX=o.clientX,this.state.mouseY=o.clientY,this.state.mousedown=!0,t.stopPropagation();break}case"touchstart":{const o=t;o.touches.length===1?(this.state.mouseX=o.touches[0].clientX,this.state.mouseY=o.touches[0].clientY,this.state.mousedown=!0):o.touches.length===2&&({distance:this.state.pinchDist,angle:this.state.pinchAngle,center:{x:this.state.mouseX,y:this.state.mouseY}}=Ve.getTouchData(o)),t.stopPropagation(),t.preventDefault();break}case"mousemove":{const o=t;this.state.mousedown?(this.__move(o.clientX,o.clientY),t.stopPropagation()):t.composedPath().includes(this.canvas)&&this.__handleHotspots(o.clientX,o.clientY);break}case"touchmove":{const o=t;if(this.state.mousedown&&o.touches.length===1)this.__move(o.touches[0].clientX,o.touches[0].clientY),t.stopPropagation();else if(this.state.mousedown&&o.touches.length===2){const a=Ve.getTouchData(o),l=(a.distance-this.state.pinchDist)/Be.pixelRatio;this.zoom(l/100),this.__move(a.center.x,a.center.y),this.state.maximized&&!this.config.static&&this.viewer.dynamics.position.step({yaw:this.state.pinchAngle-a.angle},0),{distance:this.state.pinchDist,angle:this.state.pinchAngle}=a,t.stopPropagation()}break}case"mouseup":case"touchend":{const o=((r=t.changedTouches)==null?void 0:r[0])||t;this.state.mousedown&&(this.state.mousedown=!1,t.stopPropagation()),t.composedPath().includes(this.canvas)&&this.__clickHotspot(o.clientX,o.clientY);break}case"wheel":{const o=t,a=o.deltaY/Math.abs(o.deltaY);o.ctrlKey?this.viewer.dynamics.position.step({yaw:a/10}):this.zoom(-a/10),t.stopPropagation(),t.preventDefault();break}case"transitionstart":this.state.forceRender=!0;break;case"transitionend":this.state.maximized||(this.overlay.style.display="",this.recenter()),this.state.forceRender=!1,this.update();break;case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":t.fullscreen||this.__onToggleGallery(!0);break}}applyConfig(){var t,e,n,i,s;this.container.classList.remove("psv-map--top-right","psv-map--top-left","psv-map--bottom-right","psv-map--bottom-left","psv-map--round","psv-map--square"),this.container.classList.add(`psv-map--${this.config.position.join("-")}`),this.container.classList.add(`psv-map--${this.config.shape}`),this.container.style.width=this.config.size,this.container.style.height=this.config.size,this.overlay.innerHTML=this.config.overlayImage===null?"":qw(this.config.overlayImage??(this.config.shape==="square"?fb:db)),(t=this.resetButton)==null||t.applyConfig(),(e=this.closeButton)==null||e.applyConfig(),(n=this.compassButton)==null||n.applyConfig(),(i=this.maximizeButton)==null||i.applyConfig(),this.config.static&&((s=this.compassButton)==null||s.rotate(0),this.overlay.style.transform=""),this.config.shape==="square"&&(this.overlay.style.transform=""),this.update()}isVisible(){return this.state.visible&&!this.state.collapsed}show(){super.show(),this.update(),this.state.maximized||(this.overlay.style.display="")}hide(){super.hide(),this.state.forceRender=!1}update(t=!0){this.state.needsUpdate=!0,t&&(this.state.hotspotPos={},this.__resetHotspot())}reload(t){delete this.state.images[this.config.imageUrl],this.config.imageUrl=t,this.state.imgScale=1,this.__loadImage(this.config.imageUrl,!0),this.recenter()}reset(){this.state.zoom=this.config.defaultZoom,this.recenter()}recenter(){this.state.offset.x=0,this.state.offset.y=0,this.update()}toggleCollapse(){var t;this.state.maximized&&this.toggleMaximized(!1),this.state.collapsed=!this.state.collapsed,Ve.toggleClass(this.container,"psv-map--collapsed",this.state.collapsed),this.state.collapsed?this.plugin.dispatchEvent(new Ps("closed")):(this.reset(),this.plugin.dispatchEvent(new Ps("normal"))),(t=this.closeButton)==null||t.update()}toggleMaximized(t=!0){var e,n,i;this.state.collapsed||(this.state.maximized=!this.state.maximized,Ve.toggleClass(this.container,"psv-map--maximized",this.state.maximized),this.state.maximized?(this.state.galleryWasVisible=(e=this.gallery)==null?void 0:e.isVisible(),(n=this.gallery)==null||n.hide(),this.overlay.style.display="none",this.plugin.dispatchEvent(new Ps("maximized"))):(this.state.galleryWasVisible&&this.gallery.show(),t&&this.plugin.dispatchEvent(new Ps("normal"))),(i=this.maximizeButton)==null||i.update())}zoom(t){this.setZoom(this.state.zoom+t)}setZoom(t){this.state.zoom=Mo.clamp(t,this.config.minZoom,this.config.maxZoom),this.update()}setMarkers(t){this.state.markers=t,this.update()}setActiveHotspot(t){this.state.hotspotId=t,this.update(!1)}render(){var p;if(!this.config.center)return;const t=this.__loadImage(this.config.imageUrl);if(!t)return;const e=this.viewer.getPosition().yaw,n=Math.exp(this.state.zoom)/this.state.imgScale,i={x:this.config.center.x*this.state.imgScale,y:this.config.center.y*this.state.imgScale},s={x:this.state.offset.x*this.state.imgScale,y:this.state.offset.y*this.state.imgScale},r=this.config.rotation,o=this.config.static?0:e+r;this.config.static||(this.config.shape==="round"&&(this.overlay.style.transform=`rotate(${-o}rad)`),(p=this.compassButton)==null||p.rotate(o)),this.zoomToolbar.setText(this.state.zoom),this.canvas.width=this.container.clientWidth*Be.pixelRatio,this.canvas.height=this.container.clientHeight*Be.pixelRatio;const a=Ve.getPosition(this.canvas),l=this.canvas.width,c=this.canvas.height,h=l/2/Be.pixelRatio,d=c/2/Be.pixelRatio,u=this.canvas.getContext("2d");u.clearRect(0,0,l,c);const m=t.width,v=t.height;u.save(),u.translate(l/2,c/2),u.rotate(-o),u.scale(n,n),Ia(u,0,0,Yw),Xm(u,t,-i.x-s.x,-i.y-s.y,m,v),u.restore(),[...this.config.hotspots,...this.state.markers].sort((f,b)=>this.state.hotspotId===f.id?1:this.state.hotspotId===b.id?-1:(f.zIndex??0)-(b.zIndex??0)).forEach(f=>{const b=this.state.hotspotId===f.id,S=Zw(this.config.spotStyle,f,b);let E;if(S.image){if(E=this.__loadImage(S.image),!E)return;!b&&(f.hoverImage||this.config.spotStyle.hoverImage)&&this.__loadImage(f.hoverImage||this.config.spotStyle.hoverImage,!1,!1)}const C={...s};if("yaw"in f&&"distance"in f){const y=Ve.parseAngle(f.yaw)+r;C.x+=Math.sin(-y)*f.distance*this.state.imgScale,C.y+=Math.cos(-y)*f.distance*this.state.imgScale}else if("x"in f&&"y"in f)C.x+=i.x-f.x*this.state.imgScale,C.y+=i.y-f.y*this.state.imgScale;else{Ve.logWarn(`Hotspot ${f.id} is missing position (yaw+distance or x+y)`);return}const R=_u(C,o,n),L=h-R.x,U=d-R.y;this.state.hotspotPos[f.id]={x:L+a.x,y:U+a.y,s:S.size},u.save(),u.translate(L*Be.pixelRatio,U*Be.pixelRatio),Ia(u,Zr,Zr,vu),E?xu(u,E,S.size):(u.fillStyle=S.color,u.beginPath(),u.arc(0,0,S.size*Be.pixelRatio/2,0,2*Math.PI),u.fill(),S.borderColor&&S.borderSize&&(u.shadowColor="transparent",u.strokeStyle=S.borderColor,u.lineWidth=S.borderSize,u.beginPath(),u.arc(0,0,(S.size+S.borderSize)*Be.pixelRatio/2,0,2*Math.PI),u.stroke())),u.restore()});const x=this.__loadImage(this.config.pinImage);if(x||this.config.coneColor&&this.config.coneSize){const f=_u(s,o,n),b=h-f.x,S=d-f.y,E=this.config.pinSize,C=this.config.static?e+r:0;if(u.save(),u.translate(b*Be.pixelRatio,S*Be.pixelRatio),u.rotate(C),this.config.coneColor&&this.config.coneSize){const R=Mo.degToRad(this.viewer.state.hFov),L=-Math.PI/2-R/2,U=L+R,y=this.config.coneSize*Be.pixelRatio,M=u.createRadialGradient(0,0,y/4,0,0,y);M.addColorStop(0,this.config.coneColor),M.addColorStop(1,Kw(this.config.coneColor,0)),u.beginPath(),u.moveTo(0,0),u.lineTo(Math.cos(L)*y,Math.sin(L)*y),u.arc(0,0,y,L,U,!1),u.lineTo(0,0),u.fillStyle=M,u.fill()}x&&(Ia(u,Zr,Zr,vu),xu(u,x,E)),u.restore()}}__move(t,e){const n=this.viewer.getPosition().yaw,i=Math.exp(this.state.zoom),s=jw({x:this.state.mouseX-t,y:this.state.mouseY-e},this.config.static?0:n+this.config.rotation,i);this.state.offset.x+=s.x,this.state.offset.y+=s.y,this.update(),this.state.mouseX=t,this.state.mouseY=e}__findHotspot(t,e){const n=this.config.spotStyle.size/2;let i=null;for(const[s,{x:r,y:o}]of Object.entries(this.state.hotspotPos))if(t>r-n&&t<r+n&&e>o-n&&e<o+n){i=s;break}return i}__handleHotspots(t,e){var i,s;const n=this.__findHotspot(t,e);if(this.state.hotspotId!==n){if(this.__resetHotspot(),n){let r;if(n.startsWith(oo)?r=(i=this.state.markers.find(({id:o})=>o===n))==null?void 0:i.tooltip:r=(s=this.config.hotspots.find(({id:o})=>o===n))==null?void 0:s.tooltip,r){typeof r=="string"&&(r={content:r});const o=this.state.hotspotPos[n],a=Ve.getPosition(this.viewer.container);this.state.hotspotTooltip=this.viewer.createTooltip({content:r.content,className:r.className,left:o.x-a.x,top:o.y-a.y,box:{width:o.s,height:o.s}})}}this.setActiveHotspot(n),this.__setCursor(n?"pointer":"move")}}__clickHotspot(t,e){const n=this.__findHotspot(t,e);if(n){if(this.plugin.dispatchEvent(new Vm(n)),n.startsWith(oo)){const i=n.substring(oo.length);this.viewer.getPlugin("markers").gotoMarker(i)}this.maximized&&this.config.minimizeOnHotspotClick&&this.toggleMaximized()}this.__resetHotspot()}__resetHotspot(){var t;(t=this.state.hotspotTooltip)==null||t.hide(),this.state.hotspotTooltip=null,this.state.hotspotId=null}__loadImage(t,e=!1,n=!0){if(!t)return null;if(!this.state.images[t]){const i=$w(t);return this.state.images[t]={loading:!0,value:i},i.onload=()=>{if(e&&Math.max(i.width,i.height)>Be.maxCanvasWidth){this.state.imgScale=Be.maxCanvasWidth/Math.max(i.width,i.height);const s=document.createElement("canvas");s.width=i.width*this.state.imgScale,s.height=i.height*this.state.imgScale,s.getContext("2d").drawImage(i,0,0,s.width,s.height),this.state.images[t].value=s}this.state.images[t].loading=!1,n&&this.update(!1),e&&this.show()},null}return this.state.images[t].loading?null:this.state.images[t].value}__onKeyPress(t){if(t.matches(bt.KEY_CODES.Escape)){this.toggleMaximized();return}if(!this.viewer.state.keyboardEnabled)return;let e=0,n=0,i=0;t.matches(bt.KEY_CODES.ArrowUp)&&(n=1),t.matches(bt.KEY_CODES.ArrowDown)&&(n=-1),t.matches(bt.KEY_CODES.ArrowLeft)&&(e=1),t.matches(bt.KEY_CODES.ArrowRight)&&(e=-1),t.matches(bt.KEY_CODES.Plus)&&(i=1),t.matches(bt.KEY_CODES.Minus)&&(i=-1),t.matches(bt.KEY_CODES.PageUp)&&(i=1),t.matches(bt.KEY_CODES.PageDown)&&(i=-1),(e||n)&&(this.state.mouseX=0,this.state.mouseY=0,this.__move(e*10,n*10)),i&&this.zoom(i/10)}__setCursor(t){this.canvas.style.cursor=t}__onToggleGallery(t){t?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+10+"px":this.container.style.marginBottom=""}},mb=`<svg viewBox="-20 -20 740 740" xmlns="http://www.w3.org/2000/svg">
    <circle cx="350" cy="350" r="190" fill="white"/>
    <circle cx="350" cy="350" r="150" fill="#1E78E6"/>
</svg>
`,gb=Ve.getConfigParser({imageUrl:null,center:null,rotation:0,shape:"round",size:"200px",position:["bottom","left"],visibleOnLoad:!0,overlayImage:void 0,pinImage:mb,pinSize:35,coneColor:"#1E78E6",coneSize:40,spotStyle:{size:15,image:null,color:"white",borderSize:0,borderColor:null,hoverSize:null,hoverImage:null,hoverColor:null,hoverBorderSize:4,hoverBorderColor:"rgba(255, 255, 255, 0.6)"},static:!1,defaultZoom:100,minZoom:20,maxZoom:200,hotspots:[],minimizeOnHotspotClick:!0,buttons:{maximize:!0,close:!0,reset:!0,north:!0}},{spotStyle:(t,{defValue:e})=>({...e,...t}),position:(t,{defValue:e})=>Ve.cleanCssPosition(t,{allowCenter:!1,cssOrder:!0})||e,rotation:t=>Ve.parseAngle(t),coneColor:t=>t?new zc(t).getStyle():null,defaultZoom:t=>Math.log(t/100),maxZoom:t=>Math.log(t/100),minZoom:t=>Math.log(t/100),buttons:(t,{defValue:e})=>({...e,...t})}),Er=class Ym extends Oc{static withConfig(e){return[Ym,e]}constructor(e,n){super(e,n),this.component=new pb(this.viewer,this)}init(){var e;super.init(),Ve.checkStylesheet(this.viewer.container,"map-plugin"),this.component.init(),this.markers=this.viewer.getPlugin("markers"),this.viewer.addEventListener(Je.PositionUpdatedEvent.type,this),this.viewer.addEventListener(Je.ZoomUpdatedEvent.type,this),this.viewer.addEventListener(Je.SizeUpdatedEvent.type,this),this.viewer.addEventListener(Je.ReadyEvent.type,this,{once:!0}),(e=this.markers)==null||e.addEventListener("set-markers",this),this.setHotspots(this.config.hotspots,!1)}destroy(){var e;this.viewer.removeEventListener(Je.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(Je.ZoomUpdatedEvent.type,this),this.viewer.removeEventListener(Je.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(Je.ReadyEvent.type,this),(e=this.markers)==null||e.removeEventListener("set-markers",this),this.component.destroy(),delete this.markers,super.destroy()}handleEvent(e){switch(e.type){case Je.ReadyEvent.type:this.component.reload(this.config.imageUrl);break;case Je.PositionUpdatedEvent.type:case Je.ZoomUpdatedEvent.type:this.component.update();break;case Je.SizeUpdatedEvent.type:this.component.maximized&&this.component.update();break;case"set-markers":this.component.setMarkers(this.__markersToHotspots(e.markers));break}}setOptions(e){super.setOptions(e),e.center&&this.component.recenter(),e.hotspots!==void 0&&this.setHotspots(e.hotspots),this.component.applyConfig()}hide(){this.component.hide()}show(){this.component.show()}setZoom(e){this.component.setZoom(Math.log(e/100))}close(){this.component.collapsed||this.component.toggleCollapse()}open(){this.component.collapsed&&this.component.toggleCollapse()}minimize(){this.component.maximized&&this.component.toggleMaximized()}maximize(){this.component.maximized||this.component.toggleMaximized()}setImage(e,n,i){Ve.isNil(i)||(this.config.rotation=Ve.parseAngle(i)),Ve.isNil(n)||(this.config.center=n),this.component.reload(e)}setCenter(e){this.config.center=e,this.component.recenter()}setHotspots(e,n=!0){const i=[];let s=1;e==null||e.forEach(r=>{r.id?i.includes(r.id)?Ve.logWarn(`Duplicated hotspot id "${r.id}`):i.push(r.id):r.id=Xw+s++}),this.config.hotspots=e||[],n&&this.component.update()}clearHotspots(){this.setHotspots(null)}setActiveHotspot(e){this.component.setActiveHotspot(e)}__markersToHotspots(e){return e.filter(n=>{var i;return(i=n.data)==null?void 0:i[gu]}).map(n=>{const i={...n.data[gu],id:oo+n.id,tooltip:n.config.tooltip};if("distance"in i)i.yaw=n.state.position.yaw;else if(!("x"in i)||!("y"in i))return Ve.logWarn(`Marker #${n.id} "map" data is missing position (distance or x+y)`),null;return i}).filter(n=>n)}};Er.id="map";Er.VERSION="5.14.0";Er.configParser=gb;Er.readonlyOptions=["imageUrl","visibleOnLoad","defaultZoom","buttons"];var $m=Er;$t.lang.map="Map";$t.lang.mapMaximize="Maximize";$t.lang.mapMinimize="Minimize";$t.lang.mapNorth="Go to north";$t.lang.mapReset="Reset";window.Alpine=Dd;Dd.start();window.PhotoSphereViewer={Viewer:Am,GalleryPlugin:zm,MapPlugin:$m};console.log("PSV loaded:",{Viewer:!!Am,GalleryPlugin:!!zm,MapPlugin:!!$m});
