import{w as t,S as e,i as s,s as n,t as r,e as a,c as o,a as i,b as l,d as c,f as h,g as d,h as u,j as g,n as f,k as E,l as m}from"./vendor.94f965a6.js";class p extends WebSocket{constructor(e,s){super(e,s),this.state=t(this.CLOSED),this.state.set(this.CONNECTING);const n=()=>{this.state.set(this.OPEN)},r=()=>{a()},a=()=>{this.state.set(this.CLOSED),this.removeEventListener("open",n),this.removeEventListener("error",r),this.removeEventListener("close",a)};this.addEventListener("open",n),this.addEventListener("error",r),this.addEventListener("close",a)}}function v(t,e,s){const n=t.slice();return n[4]=e[s],n}function L(t){let e,s,n=t[4]+"";return{c(){e=r(n),s=a("br")},l(t){e=o(t,n),s=i(t,"BR",{})},m(t,n){l(t,e,n),l(t,s,n)},p(t,s){1&s&&n!==(n=t[4]+"")&&c(e,n)},d(t){t&&h(e),t&&h(s)}}}function b(t){let e,s,n,m,p,b,S,N,T=t[0],w=[];for(let r=0;r<T.length;r+=1)w[r]=L(v(t,T,r));return{c(){e=r("STATE: "),s=r(t[1]),n=d(),m=a("br"),p=r("\nMessages\n"),b=a("br"),S=d();for(let t=0;t<w.length;t+=1)w[t].c();N=u()},l(r){e=o(r,"STATE: "),s=o(r,t[1]),n=g(r),m=i(r,"BR",{}),p=o(r,"\nMessages\n"),b=i(r,"BR",{}),S=g(r);for(let t=0;t<w.length;t+=1)w[t].l(r);N=u()},m(t,r){l(t,e,r),l(t,s,r),l(t,n,r),l(t,m,r),l(t,p,r),l(t,b,r),l(t,S,r);for(let e=0;e<w.length;e+=1)w[e].m(t,r);l(t,N,r)},p(t,[e]){if(2&e&&c(s,t[1]),1&e){let s;for(T=t[0],s=0;s<T.length;s+=1){const n=v(t,T,s);w[s]?w[s].p(n,e):(w[s]=L(n),w[s].c(),w[s].m(N.parentNode,N))}for(;s<w.length;s+=1)w[s].d(1);w.length=T.length}},i:f,o:f,d(t){t&&h(e),t&&h(s),t&&h(n),t&&h(m),t&&h(p),t&&h(b),t&&h(S),E(w,t),t&&h(N)}}}function S(t,e,s){let n,r=[];const a=new p(`ws://127.0.0.1:8080/chat/${location.hash.substr(1)}`),o=a.state;return m(t,o,(t=>s(1,n=t))),o.subscribe((t=>{console.log("state:",t)})),a.addEventListener("message",(t=>{r.push(t.data),s(0,r)})),[r,n,o]}new class extends e{constructor(t){super(),s(this,t,S,b,n,{})}}({target:document.getElementById("app")});
