(this["webpackJsonponline-offline"]=this["webpackJsonponline-offline"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(7),s=n.n(o),r=(n(13),n(8)),u=n(3),a=(n.p,n(14),function(t){var e=Object(c.useState)(!0),n=Object(u.a)(e,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){var e=t?window.top:window;return console.log("USE_WINDOW_TOP::".concat(t)),e.addEventListener("offline",(function(){o(!1)})),e.addEventListener("online",(function(){o(!0)})),function(){console.log("UNLOAD EVENTS::".concat(t)),e.removeEventListener("offline",(function(){o(!1)})),e.removeEventListener("online",(function(){o(!0)}))}}),[t]),{onlineStatus:i}}),j=n(6),l=n.n(j),d=n(0);var b=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],i=e[1],o=a(n).onlineStatus,s=Object(c.useState)([]),j=Object(u.a)(s,2),b=j[0],f=j[1];return Object(c.useEffect)((function(){f((function(t){var e,n=Object(r.a)(t);return n.unshift({onlineStatus:o,statusTime:l()().toISOString(),count:((null===(e=n[0])||void 0===e?void 0:e.count)||0)+1}),n.slice(0,Math.min(n.length,100))}))}),[o]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"App-header",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:n,onChange:function(t){return i(t.target.checked)},type:"checkbox"})," Use Window Top"]}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Count"}),Object(d.jsx)("th",{children:"Time"}),Object(d.jsx)("th",{children:"Status"})]})}),Object(d.jsx)("tbody",{children:b.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.count}),Object(d.jsx)("td",{children:l()(t.statusTime).format("HH:mm:ss.SSS")}),Object(d.jsx)("td",{children:t.onlineStatus?"ONLINE":"OFFLINE"})]},t.statusTime)}))})]})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.fc88a083.chunk.js.map