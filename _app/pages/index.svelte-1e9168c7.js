var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,s=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&o(e,n,t[n]);if(l)for(var n of l(t))a.call(t,n)&&o(e,n,t[n]);return e},c=(e,l)=>t(e,n(l));import{S as i,i as u,s as h,e as d,c as f,a as p,d as v,b as m,f as g,F as $,r as y,u as k,w as E,x as _,t as b,g as x,h as P,K as w,l as I,k as L,n as D,j as N,m as O,o as V,v as A,L as j,M as T,J as S,N as q,O as C,A as R,P as B,Q as U,R as M,T as J,U as K,V as W,W as G,X as H,Y as X,Z as F,_ as Q}from"../chunks/vendor-be96c903.js";function Y(e,t,n){const l=e.slice();return l[4]=t[n],l}function Z(e){let t,n;return{c(){t=d("code"),n=b(e[0]),this.h()},l(l){t=f(l,"CODE",{class:!0});var r=p(t);n=x(r,e[0]),r.forEach(v),this.h()},h(){m(t,"class","svelte-sgqldn")},m(e,l){g(e,t,l),$(t,n)},p(e,t){1&t&&P(n,e[0])},i:w,o:w,d(e){e&&v(t)}}}function z(e){let t,n,l,r;const a=[te,ee],o=[];function s(e,t){return e[0].children.length?0:1}return t=s(e),n=o[t]=a[t](e),{c(){n.c(),l=I()},l(e){n.l(e),l=I()},m(e,n){o[t].m(e,n),g(e,l,n),r=!0},p(e,r){let c=t;t=s(e),t===c?o[t].p(e,r):(y(),k(o[c],1,1,(()=>{o[c]=null})),E(),n=o[t],n?n.p(e,r):(n=o[t]=a[t](e),n.c()),_(n,1),n.m(l.parentNode,l))},i(e){r||(_(n),r=!0)},o(e){k(n),r=!1},d(e){o[t].d(e),e&&v(l)}}}function ee(e){let t,n,l,r,a=e[0].data+"";return{c(){t=d("span"),n=d("span"),l=L(),r=b(a),this.h()},l(e){t=f(e,"SPAN",{});var o=p(t);n=f(o,"SPAN",{class:!0}),p(n).forEach(v),l=D(o),r=x(o,a),o.forEach(v),this.h()},h(){m(n,"class","no-arrow svelte-sgqldn")},m(e,a){g(e,t,a),$(t,n),$(t,l),$(t,r)},p(e,t){1&t&&a!==(a=e[0].data+"")&&P(r,a)},i:w,o:w,d(e){e&&v(t)}}}function te(e){let t,n,l,r,a,o,s,c,i,u,h,w=e[0].data+"",N=e[1]&&ne(e);return{c(){t=d("span"),n=d("span"),l=b("▶"),r=L(),a=d("span"),o=b(w),s=L(),N&&N.c(),c=I(),this.h()},l(e){t=f(e,"SPAN",{});var i=p(t);n=f(i,"SPAN",{class:!0});var u=p(n);l=x(u,"▶"),u.forEach(v),r=D(i),a=f(i,"SPAN",{class:!0});var h=p(a);o=x(h,w),h.forEach(v),i.forEach(v),s=D(e),N&&N.l(e),c=I(),this.h()},h(){m(n,"class","arrow svelte-sgqldn"),T(n,"arrowDown",e[2]),m(a,"class","label svelte-sgqldn")},m(d,f){g(d,t,f),$(t,n),$(n,l),$(t,r),$(t,a),$(a,o),g(d,s,f),N&&N.m(d,f),g(d,c,f),i=!0,u||(h=S(t,"click",e[3]),u=!0)},p(e,t){4&t&&T(n,"arrowDown",e[2]),(!i||1&t)&&w!==(w=e[0].data+"")&&P(o,w),e[1]?N?(N.p(e,t),2&t&&_(N,1)):(N=ne(e),N.c(),_(N,1),N.m(c.parentNode,c)):N&&(y(),k(N,1,1,(()=>{N=null})),E())},i(e){i||(_(N),i=!0)},o(e){k(N),i=!1},d(e){e&&v(t),e&&v(s),N&&N.d(e),e&&v(c),u=!1,h()}}}function ne(e){let t,n,l=[...e[0].children],r=[];for(let o=0;o<l.length;o+=1)r[o]=le(Y(e,l,o));const a=e=>k(r[e],1,1,(()=>{r[e]=null}));return{c(){t=d("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=f(e,"DIV",{class:!0});var n=p(t);for(let t=0;t<r.length;t+=1)r[t].l(n);n.forEach(v),this.h()},h(){m(t,"class","children")},m(e,l){g(e,t,l);for(let n=0;n<r.length;n+=1)r[n].m(t,null);n=!0},p(e,n){if(1&n){let o;for(l=[...e[0].children],o=0;o<l.length;o+=1){const a=Y(e,l,o);r[o]?(r[o].p(a,n),_(r[o],1)):(r[o]=le(a),r[o].c(),_(r[o],1),r[o].m(t,null))}for(y(),o=l.length;o<r.length;o+=1)a(o);E()}},i(e){if(!n){for(let e=0;e<l.length;e+=1)_(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)k(r[t]);n=!1},d(e){e&&v(t),j(r,e)}}}function le(e){let t,n;return t=new oe({props:{tree:e[4]}}),{c(){N(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,l){V(t,e,l),n=!0},p(e,n){const l={};1&n&&(l.tree=e[4]),t.$set(l)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function re(e){let t,n,l,r,a;const o=[z,Z],s=[];function c(e,t){return"Tree"===e[0].type?0:1}return l=c(e),r=s[l]=o[l](e),{c(){t=d("ul"),n=d("li"),r.c(),this.h()},l(e){t=f(e,"UL",{class:!0});var l=p(t);n=f(l,"LI",{});var a=p(n);r.l(a),a.forEach(v),l.forEach(v),this.h()},h(){m(t,"class","svelte-sgqldn")},m(e,r){g(e,t,r),$(t,n),s[l].m(n,null),a=!0},p(e,[t]){let a=l;l=c(e),l===a?s[l].p(e,t):(y(),k(s[a],1,1,(()=>{s[a]=null})),E(),r=s[l],r?r.p(e,t):(r=s[l]=o[l](e),r.c()),_(r,1),r.m(n,null))},i(e){a||(_(r),a=!0)},o(e){k(r),a=!1},d(e){e&&v(t),s[l].d()}}}function ae(e,t,n){let l,{tree:r}=t,a=!0;return e.$$set=e=>{"tree"in e&&n(0,r=e.tree)},e.$$.update=()=>{2&e.$$.dirty&&n(2,l=a)},[r,a,l,()=>{n(1,a=!a)}]}class oe extends i{constructor(e){super(),u(this,e,ae,re,h,{tree:0})}}function se(e){let t;return{c(){t=d("div"),this.h()},l(e){t=f(e,"DIV",{style:!0}),p(t).forEach(v),this.h()},h(){q(t,"height","80vh"),q(t,"border","1px solid grey")},m(n,l){g(n,t,l),e[3](t)},p:w,i:w,o:w,d(n){n&&v(t),e[3](null)}}}function ce(e,t,n){const l=C();let r,a,{text:o=""}=t;const s={value:o,language:"ruby",automaticLayout:!0};return R((()=>{require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs"}}),require(["vs/editor/editor.main"],(e=>{r=e.editor.create(a,s),n(1,o=r.getModel().getValue()),r.getModel().onDidChangeContent((e=>{n(1,o=r.getModel().getValue())})),l("ready",{})}))})),e.$$set=e=>{"text"in e&&n(1,o=e.text)},[a,o,function(e){if(r)return r.getModel().setValue(e)},function(e){B[e?"unshift":"push"]((()=>{a=e,n(0,a)}))}]}class ie extends i{constructor(e){super(),u(this,e,ce,se,h,{text:1,set_text:2})}get set_text(){return this.$$.ctx[2]}}function ue(e){let t,n,l,r,a,o,s,c,i,u,h,y,k,E,_,P,I,N,O,V,A,j,T,q;return{c(){t=d("div"),n=d("div"),l=d("div"),r=b("Parser:"),a=L(),o=d("div"),s=d("input"),c=L(),i=d("label"),u=b("Earley"),h=L(),y=d("div"),k=d("input"),E=L(),_=d("label"),P=b("LALR(1)"),I=L(),N=d("div"),O=d("input"),V=L(),A=d("label"),j=b("Keep all tokens"),this.h()},l(e){t=f(e,"DIV",{id:!0,class:!0});var d=p(t);n=f(d,"DIV",{class:!0});var m=p(n);l=f(m,"DIV",{});var g=p(l);r=x(g,"Parser:"),g.forEach(v),a=D(m),o=f(m,"DIV",{});var $=p(o);s=f($,"INPUT",{type:!0,id:!0,name:!0}),c=D($),i=f($,"LABEL",{for:!0});var b=p(i);u=x(b,"Earley"),b.forEach(v),$.forEach(v),h=D(m),y=f(m,"DIV",{});var w=p(y);k=f(w,"INPUT",{type:!0,id:!0,name:!0}),E=D(w),_=f(w,"LABEL",{for:!0});var L=p(_);P=x(L,"LALR(1)"),L.forEach(v),w.forEach(v),m.forEach(v),I=D(d),N=f(d,"DIV",{class:!0});var T=p(N);O=f(T,"INPUT",{type:!0,id:!0}),V=D(T),A=f(T,"LABEL",{for:!0});var S=p(A);j=x(S,"Keep all tokens"),S.forEach(v),T.forEach(v),d.forEach(v),this.h()},h(){m(s,"type","radio"),m(s,"id","earley"),m(s,"name","parser"),s.__value="earley",s.value=s.__value,s.checked=!0,e[6][0].push(s),m(i,"for","earley"),m(k,"type","radio"),m(k,"id","lalr"),m(k,"name","parser"),k.__value="lalr",k.value=k.__value,e[6][0].push(k),m(_,"for","lalr"),m(n,"class","option svelte-lws3ey"),m(O,"type","checkbox"),m(O,"id","keep_all_tokens"),m(A,"for","keep_all_tokens"),m(N,"class","option svelte-lws3ey"),m(t,"id","options"),m(t,"class","svelte-lws3ey")},m(d,f){g(d,t,f),$(t,n),$(n,l),$(l,r),$(n,a),$(n,o),$(o,s),s.checked=s.__value===e[0],$(o,c),$(o,i),$(i,u),$(n,h),$(n,y),$(y,k),k.checked=k.__value===e[0],$(y,E),$(y,_),$(_,P),$(t,I),$(t,N),$(N,O),O.checked=e[1],$(N,V),$(N,A),$(A,j),T||(q=[S(s,"input",e[2]),S(s,"change",e[5]),S(k,"input",e[2]),S(k,"change",e[7]),S(O,"change",e[8]),S(O,"input",e[3])],T=!0)},p(e,[t]){1&t&&(s.checked=s.__value===e[0]),1&t&&(k.checked=k.__value===e[0]),2&t&&(O.checked=e[1])},i:w,o:w,d(n){n&&v(t),e[6][0].splice(e[6][0].indexOf(s),1),e[6][0].splice(e[6][0].indexOf(k),1),T=!1,U(q)}}}function he(e,t,n){let l,r,{options:a}=t;return e.$$set=e=>{"options"in e&&n(4,a=e.options)},e.$$.update=()=>{16&e.$$.dirty&&a&&(n(0,l=a.parser),n(1,r=a.keep_all_tokens))},[l,r,function(e){setTimeout((()=>{n(4,a=c(s({},a),{parser:l}))}))},function(e){setTimeout((()=>{n(4,a=c(s({},a),{keep_all_tokens:r}))}))},a,function(){l=this.__value,n(0,l)},[[]],function(){l=this.__value,n(0,l)},function(){r=this.checked,n(1,r)}]}class de extends i{constructor(e){super(),u(this,e,he,ue,h,{options:4})}}function fe(e,t,n){const l=e.slice();return l[24]=t[n],l}function pe(e,t,n){const l=e.slice();return l[27]=t[n],l}function ve(e){let t,n,l,r,a=e[27].title+"";return{c(){t=d("option"),n=b(a),l=L(),this.h()},l(e){t=f(e,"OPTION",{});var r=p(t);n=x(r,a),l=D(r),r.forEach(v),this.h()},h(){t.__value=r=e[27].name,t.value=t.__value},m(e,r){g(e,t,r),$(t,n),$(t,l)},p:w,d(e){e&&v(t)}}}function me(e){let t,n,l=e[6],r=[];for(let a=0;a<l.length;a+=1)r[a]=$e(fe(e,l,a));return{c(){t=b("Please wait, loading...\n\t\t"),n=d("ul");for(let e=0;e<r.length;e+=1)r[e].c()},l(e){t=x(e,"Please wait, loading...\n\t\t"),n=f(e,"UL",{});var l=p(n);for(let t=0;t<r.length;t+=1)r[t].l(l);l.forEach(v)},m(e,l){g(e,t,l),g(e,n,l);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(e,t){if(64&t){let a;for(l=e[6],a=0;a<l.length;a+=1){const o=fe(e,l,a);r[a]?r[a].p(o,t):(r[a]=$e(o),r[a].c(),r[a].m(n,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=l.length}},i:w,o:w,d(e){e&&v(t),e&&v(n),j(r,e)}}}function ge(e){let t,n,l,r={ctx:e,current:null,token:null,hasCatch:!0,pending:we,then:ke,catch:ye,error:24,blocks:[,,,]};return F(n=e[3],r),{c(){t=I(),r.block.c()},l(e){t=I(),r.block.l(e)},m(e,n){g(e,t,n),r.block.m(e,r.anchor=n),r.mount=()=>t.parentNode,r.anchor=t,l=!0},p(t,l){e=t,r.ctx=e,8&l&&n!==(n=e[3])&&F(n,r)||Q(r,e,l)},i(e){l||(_(r.block),l=!0)},o(e){for(let t=0;t<3;t+=1){const e=r.blocks[t];k(e)}l=!1},d(e){e&&v(t),r.block.d(e),r.token=null,r=null}}}function $e(e){let t,n,l=e[24]+"";return{c(){t=d("li"),n=b(l)},l(e){t=f(e,"LI",{});var r=p(t);n=x(r,l),r.forEach(v)},m(e,l){g(e,t,l),$(t,n)},p(e,t){64&t&&l!==(l=e[24]+"")&&P(n,l)},d(e){e&&v(t)}}}function ye(e){let t,n,l=e[24]+"";return{c(){t=d("pre"),n=b(l)},l(e){t=f(e,"PRE",{});var r=p(t);n=x(r,l),r.forEach(v)},m(e,l){g(e,t,l),$(t,n)},p(e,t){8&t&&l!==(l=e[24]+"")&&P(n,l)},i:w,o:w,d(e){e&&v(t)}}}function ke(e){let t,n,l,r={ctx:e,current:null,token:null,hasCatch:!0,pending:Pe,then:_e,catch:Ee,value:23,error:24,blocks:[,,,]};return F(n=e[5],r),{c(){t=I(),r.block.c()},l(e){t=I(),r.block.l(e)},m(e,n){g(e,t,n),r.block.m(e,r.anchor=n),r.mount=()=>t.parentNode,r.anchor=t,l=!0},p(t,l){e=t,r.ctx=e,32&l&&n!==(n=e[5])&&F(n,r)||Q(r,e,l)},i(e){l||(_(r.block),l=!0)},o(e){for(let t=0;t<3;t+=1){const e=r.blocks[t];k(e)}l=!1},d(e){e&&v(t),r.block.d(e),r.token=null,r=null}}}function Ee(e){let t,n,l=e[24]+"";return{c(){t=d("pre"),n=b(l)},l(e){t=f(e,"PRE",{});var r=p(t);n=x(r,l),r.forEach(v)},m(e,l){g(e,t,l),$(t,n)},p(e,t){32&t&&l!==(l=e[24]+"")&&P(n,l)},i:w,o:w,d(e){e&&v(t)}}}function _e(e){let t,n,l,r;const a=[xe,be],o=[];function s(e,t){return e[23]?0:1}return t=s(e),n=o[t]=a[t](e),{c(){n.c(),l=I()},l(e){n.l(e),l=I()},m(e,n){o[t].m(e,n),g(e,l,n),r=!0},p(e,r){let c=t;t=s(e),t===c?o[t].p(e,r):(y(),k(o[c],1,1,(()=>{o[c]=null})),E(),n=o[t],n?n.p(e,r):(n=o[t]=a[t](e),n.c()),_(n,1),n.m(l.parentNode,l))},i(e){r||(_(n),r=!0)},o(e){k(n),r=!1},d(e){o[t].d(e),e&&v(l)}}}function be(e){let t;return{c(){t=b("No result")},l(e){t=x(e,"No result")},m(e,n){g(e,t,n)},p:w,i:w,o:w,d(e){e&&v(t)}}}function xe(e){let t,n;return t=new oe({props:{tree:e[23]}}),{c(){N(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,l){V(t,e,l),n=!0},p(e,n){const l={};32&n&&(l.tree=e[23]),t.$set(l)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function Pe(e){let t;return{c(){t=b("Parsing...")},l(e){t=x(e,"Parsing...")},m(e,n){g(e,t,n)},p:w,i:w,o:w,d(e){e&&v(t)}}}function we(e){let t;return{c(){t=b("Building Parser...")},l(e){t=x(e,"Building Parser...")},m(e,n){g(e,t,n)},p:w,i:w,o:w,d(e){e&&v(t)}}}function Ie(e){let t,n,l,r,a,o,s,c,i,u,h,P,w,I,T,q,C,R,X,F,Q,Y,Z,z,ee;function te(t){e[12](t)}let ne={};void 0!==e[1]&&(ne.options=e[1]),a=new de({props:ne}),B.push((()=>M(a,"options",te)));let le=e[9],re=[];for(let d=0;d<le.length;d+=1)re[d]=ve(pe(e,le,d));function ae(t){e[15](t)}let oe={id:"grammar"};void 0!==e[0]&&(oe.text=e[0]),T=new ie({props:oe}),e[14](T),B.push((()=>M(T,"text",ae))),T.$on("ready",e[10]);const se=[ge,me],ce=[];function ue(e,t){return e[4]?0:1}return Q=ue(e),Y=ce[Q]=se[Q](e),{c(){t=L(),n=d("section"),l=d("div"),r=d("div"),N(a.$$.fragment),s=L(),c=d("div"),i=d("div"),u=d("div"),h=b("Load Grammar:"),P=L(),w=d("select");for(let e=0;e<re.length;e+=1)re[e].c();I=L(),N(T.$$.fragment),C=L(),R=d("textarea"),X=L(),F=d("div"),Y.c(),this.h()},l(e){J('[data-svelte="svelte-3fm5e0"]',document.head).forEach(v),t=D(e),n=f(e,"SECTION",{id:!0,class:!0});var o=p(n);l=f(o,"DIV",{id:!0,class:!0});var d=p(l);r=f(d,"DIV",{id:!0,class:!0});var m=p(r);O(a.$$.fragment,m),m.forEach(v),s=D(d),c=f(d,"DIV",{id:!0,class:!0});var g=p(c);i=f(g,"DIV",{class:!0});var $=p(i);u=f($,"DIV",{});var y=p(u);h=x(y,"Load Grammar:"),y.forEach(v),P=D($),w=f($,"SELECT",{class:!0});var k=p(w);for(let t=0;t<re.length;t+=1)re[t].l(k);k.forEach(v),$.forEach(v),g.forEach(v),I=D(d),O(T.$$.fragment,d),d.forEach(v),C=D(o),R=f(o,"TEXTAREA",{id:!0,class:!0}),p(R).forEach(v),X=D(o),F=f(o,"DIV",{id:!0,class:!0});var E=p(F);Y.l(E),E.forEach(v),o.forEach(v),this.h()},h(){document.title="Lark IDE",m(r,"id","options"),m(r,"class","svelte-99vlcc"),m(w,"class","svelte-99vlcc"),void 0===e[7]&&K((()=>e[13].call(w))),m(i,"class","option svelte-99vlcc"),m(c,"id","load-grammar"),m(c,"class","svelte-99vlcc"),m(l,"id","grammar_pane"),m(l,"class","svelte-99vlcc"),m(R,"id","text"),m(R,"class","svelte-99vlcc"),m(F,"id","output"),m(F,"class","svelte-99vlcc"),m(n,"id","ide"),m(n,"class","svelte-99vlcc")},m(o,d){g(o,t,d),g(o,n,d),$(n,l),$(l,r),V(a,r,null),$(l,s),$(l,c),$(c,i),$(i,u),$(u,h),$(i,P),$(i,w);for(let e=0;e<re.length;e+=1)re[e].m(w,null);W(w,e[7]),$(l,I),V(T,l,null),$(n,C),$(n,R),G(R,e[2]),$(n,X),$(n,F),ce[Q].m(F,null),Z=!0,z||(ee=[S(w,"change",e[13]),S(w,"change",e[11]),S(R,"input",e[16])],z=!0)},p(e,[t]){const n={};if(!o&&2&t&&(o=!0,n.options=e[1],H((()=>o=!1))),a.$set(n),512&t){let n;for(le=e[9],n=0;n<le.length;n+=1){const l=pe(e,le,n);re[n]?re[n].p(l,t):(re[n]=ve(l),re[n].c(),re[n].m(w,null))}for(;n<re.length;n+=1)re[n].d(1);re.length=le.length}640&t&&W(w,e[7]);const l={};!q&&1&t&&(q=!0,l.text=e[0],H((()=>q=!1))),T.$set(l),4&t&&G(R,e[2]);let r=Q;Q=ue(e),Q===r?ce[Q].p(e,t):(y(),k(ce[r],1,1,(()=>{ce[r]=null})),E(),Y=ce[Q],Y?Y.p(e,t):(Y=ce[Q]=se[Q](e),Y.c()),_(Y,1),Y.m(F,null))},i(e){Z||(_(a.$$.fragment,e),_(T.$$.fragment,e),_(Y),Z=!0)},o(e){k(a.$$.fragment,e),k(T.$$.fragment,e),k(Y),Z=!1},d(l){l&&v(t),l&&v(n),A(a),j(re,l),e[14](null),A(T),ce[Q].d(),z=!1,U(ee)}}}const Le=!0;function De(e,t,n){var l=this&&this.__awaiter||function(e,t,n,l){return new(n||(n=Promise))((function(r,a){function o(e){try{c(l.next(e))}catch(t){a(t)}}function s(e){try{c(l.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((l=l.apply(e,t||[])).next())}))};const r={parser:"earley",keep_all_tokens:!1},a=[{title:"Blank",name:"blank",text:""},{title:"(easy) Hello World",name:"hello",text:"Hello, World!"},{title:"(easy) JSON parser",name:"json",text:'{"this": ["is", "JSON"]}',options:{parser:"lalr"}},{title:"(easy) Calculator",name:"calc",text:"20 / (13 - 6) + 1",options:{parser:"lalr"}}];let o,s,c,{grammar:i,options:u,text:h}=a[1];u=u||r;let d,f=[];function p(){c.globals.set("grammar",i),c.globals.set("options",u),n(3,o=c.runPythonAsync("parser = lark.Lark(grammar, **options.to_py())"))}let v,m="hello";function g(){return l(this,void 0,void 0,(function*(){if(console.log("Loading grammar",m),"blank"===m)return n(2,h=""),n(0,i=""),v.set_text(""),void n(1,u=r);let e=yield fetch("grammars/"+m+".lark");if(e.ok){n(0,i=yield e.text()),v.set_text(i);for(let e of a)if(e.name===m){n(2,h=e.text),n(1,u=e.options||r);break}}}))}return e.$$.update=()=>{var t;18&e.$$.dirty&&c&&u&&p(),17&e.$$.dirty&&c&&i&&(clearTimeout(d),d=setTimeout(p,500)),28&e.$$.dirty&&n(5,s=c&&o&&(t=h,c.globals.set("text",t),c.runPythonAsync("parser.parse(text)")))},[i,u,h,o,c,s,f,m,v,a,function(){return l(this,void 0,void 0,(function*(){var e,t;g(),c||(e=e=>{n(4,c=e)},(t=e=>{n(6,f=[...f,e])})&&t("Loading Pyodide"),require(["https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js"],(n=>{n.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.0/full/"}).then((async n=>{console.log("Pyodide loaded",n),t&&t("Installing micropip"),await n.loadPackage("micropip"),t&&t("Downloading & Installing Lark"),await n.runPythonAsync("import micropip; await micropip.install('lark-parser');"),n.runPython("import lark"),e(n),console.log("Ready!",n)}))})))}))},g,function(e){u=e,n(1,u)},function(){m=X(this),n(7,m),n(9,a)},function(e){B[e?"unshift":"push"]((()=>{v=e,n(8,v)}))},function(e){i=e,n(0,i)},function(){h=this.value,n(2,h)}]}class Ne extends i{constructor(e){super(),u(this,e,De,Ie,h,{})}}export{Ne as default,Le as prerender};