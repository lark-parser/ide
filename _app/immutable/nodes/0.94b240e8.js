import{S as se,i as le,s as re,C as ae,k as f,a as y,q as T,l as _,m as h,h as n,c as j,r as O,D as ne,n as o,b as I,E as a,F as oe,G as ue,H as ce,g as ie,d as fe,I as Z,J as ee}from"../chunks/index.ff588ce8.js";const _e=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:_e},Symbol.toStringTag,{value:"Module"}));function de(p){let t,r,s,c;return{c(){t=f("button"),r=T("full screen"),this.h()},l(l){t=_(l,"BUTTON",{class:!0});var i=h(t);r=O(i,"full screen"),i.forEach(n),this.h()},h(){o(t,"class","button is-text")},m(l,i){I(l,t,i),a(t,r),s||(c=Z(t,"click",p[1]),s=!0)},p:ee,d(l){l&&n(t),s=!1,c()}}}function me(p){let t,r,s,c;return{c(){t=f("button"),r=T("exit full screen"),this.h()},l(l){t=_(l,"BUTTON",{class:!0});var i=h(t);r=O(i,"exit full screen"),i.forEach(n),this.h()},h(){o(t,"class","button is-text")},m(l,i){I(l,t,i),a(t,r),s||(c=Z(t,"click",p[2]),s=!0)},p:ee,d(l){l&&n(t),s=!1,c()}}}function he(p){let t,r,s,c,l,i,R,u,V,$,k,B,M,q,P,C,g,G,H,v,w,F,x,N,A;function z(e,m){return e[0]?me:de}let S=z(p),b=S(p);const U=p[4].default,d=ae(U,p,p[3],null);return{c(){t=f("header"),r=f("nav"),s=f("div"),c=f("a"),l=f("img"),R=y(),u=f("a"),V=T("docs"),$=y(),k=f("a"),B=T("source"),M=y(),q=f("a"),P=T("parser"),C=y(),g=f("div"),G=T("Parser IDE"),H=y(),v=f("div"),b.c(),w=y(),F=f("main"),d&&d.c(),x=y(),N=f("footer"),this.h()},l(e){t=_(e,"HEADER",{});var m=h(t);r=_(m,"NAV",{class:!0});var D=h(r);s=_(D,"DIV",{id:!0,class:!0});var E=h(s);c=_(E,"A",{});var J=h(c);l=_(J,"IMG",{src:!0,alt:!0,class:!0}),J.forEach(n),R=j(E),u=_(E,"A",{href:!0,target:!0});var L=h(u);V=O(L,"docs"),L.forEach(n),$=j(E),k=_(E,"A",{href:!0,target:!0});var K=h(k);B=O(K,"source"),K.forEach(n),M=j(E),q=_(E,"A",{href:!0,target:!0});var Q=h(q);P=O(Q,"parser"),Q.forEach(n),E.forEach(n),C=j(D),g=_(D,"DIV",{id:!0,class:!0});var W=h(g);G=O(W,"Parser IDE"),W.forEach(n),H=j(D),v=_(D,"DIV",{id:!0,class:!0});var X=h(v);b.l(X),X.forEach(n),D.forEach(n),m.forEach(n),w=j(e),F=_(e,"MAIN",{class:!0});var Y=h(F);d&&d.l(Y),Y.forEach(n),x=j(e),N=_(e,"FOOTER",{});var te=h(N);te.forEach(n),this.h()},h(){ne(l.src,i="lark-logo.png")||o(l,"src",i),o(l,"alt","lark logo"),o(l,"class","svelte-qsbq8j"),o(u,"href","https://lark-parser.readthedocs.io/en/latest/"),o(u,"target","_blank"),o(k,"href","https://github.com/lark-parser/ide"),o(k,"target","_blank"),o(q,"href","https://github.com/lark-parser/lark"),o(q,"target","_blank"),o(s,"id","home"),o(s,"class","svelte-qsbq8j"),o(g,"id","title"),o(g,"class","svelte-qsbq8j"),o(v,"id","right-panel"),o(v,"class","svelte-qsbq8j"),o(r,"class","svelte-qsbq8j"),o(F,"class","svelte-qsbq8j")},m(e,m){I(e,t,m),a(t,r),a(r,s),a(s,c),a(c,l),a(s,R),a(s,u),a(u,V),a(s,$),a(s,k),a(k,B),a(s,M),a(s,q),a(q,P),a(r,C),a(r,g),a(g,G),a(r,H),a(r,v),b.m(v,null),I(e,w,m),I(e,F,m),d&&d.m(F,null),I(e,x,m),I(e,N,m),A=!0},p(e,[m]){S===(S=z(e))&&b?b.p(e,m):(b.d(1),b=S(e),b&&(b.c(),b.m(v,null))),d&&d.p&&(!A||m&8)&&oe(d,U,e,e[3],A?ce(U,e[3],m,null):ue(e[3]),null)},i(e){A||(ie(d,e),A=!0)},o(e){fe(d,e),A=!1},d(e){e&&n(t),b.d(),e&&n(w),e&&n(F),d&&d.d(e),e&&n(x),e&&n(N)}}}function pe(p,t,r){let{$$slots:s={},$$scope:c}=t,l=!1;function i(){let u=document.getElementsByTagName("body")[0];u.requestFullscreen?u.requestFullscreen():u.webkitRequestFullscreen?u.webkitRequestFullscreen():u.msRequestFullscreen&&u.msRequestFullscreen(),r(0,l=!0)}function R(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),r(0,l=!1)}return p.$$set=u=>{"$$scope"in u&&r(3,c=u.$$scope)},[l,i,R,c,s]}class Ee extends se{constructor(t){super(),le(this,t,pe,he,re,{})}}export{Ee as component,ve as universal};
