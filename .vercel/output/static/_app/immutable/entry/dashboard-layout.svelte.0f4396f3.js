import{S as p,i as c,s as d,C as $,k as h,y as g,a as v,l as y,m as b,z as S,c as k,h as u,b as C,A as D,D as M,E as w,F as z,G as A,g as f,d as m,B as E,o as P}from"../chunks/index.8015430d.js";import{s as _}from"../chunks/superbaseClient.4f021c0e.js";import{M as q,s as B,k as F,z as G,d as I,e as L,D as U,u as V}from"../chunks/floating-ui.dom.browser.min.ea0482c6.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.3f362358.js";function j(l){let s,a,r,n;a=new q({});const o=l[1].default,e=$(o,l,l[0],null);return{c(){s=h("div"),g(a.$$.fragment),r=v(),e&&e.c()},l(t){s=y(t,"DIV",{});var i=b(s);S(a.$$.fragment,i),r=k(i),e&&e.l(i),i.forEach(u)},m(t,i){C(t,s,i),D(a,s,null),M(s,r),e&&e.m(s,null),n=!0},p(t,[i]){e&&e.p&&(!n||i&1)&&w(e,o,t,t[0],n?A(o,t[0],i,null):z(t[0]),null)},i(t){n||(f(a.$$.fragment,t),f(e,t),n=!0)},o(t){m(a.$$.fragment,t),m(e,t),n=!1},d(t){t&&u(s),E(a),e&&e.d(t)}}}function H(l,s,a){let{$$slots:r={},$$scope:n}=s;return P(()=>{_.auth.getSession().then(({data:o})=>{o.session}),_.auth.onAuthStateChange((o,e)=>{})}),B.set({computePosition:F,autoUpdate:G,flip:I,shift:L,offset:U,arrow:V}),l.$$set=o=>{"$$scope"in o&&a(0,n=o.$$scope)},[n,r]}class Q extends p{constructor(s){super(),c(this,s,H,j,d,{})}}export{Q as default};
