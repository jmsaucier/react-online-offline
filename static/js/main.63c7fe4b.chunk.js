(this["webpackJsonponline-offline"]=this["webpackJsonponline-offline"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var i=e(1),c=e.n(i),s=e(6),o=e.n(s),r=(e(13),e(8)),u=e(4),a=(e.p,e(14),function(){var t=Object(i.useState)(!0),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(i.useEffect)((function(){return window.addEventListener("offline",(function(){c(!1)})),window.addEventListener("online",(function(){c(!0)})),function(){window.removeEventListener("offline",(function(){c(!1)})),window.removeEventListener("online",(function(){c(!0)}))}}),[]),{onlineStatus:e}}),f=e(7),j=e.n(f),l=e(0);var d=function(){var t=a().onlineStatus,n=Object(i.useState)([]),e=Object(u.a)(n,2),c=e[0],s=e[1];return Object(i.useEffect)((function(){s((function(n){var e=Object(r.a)(n);return e.unshift({onlineStatus:t,statusTime:j()().toISOString()}),e.slice(0,Math.min(e.length,10))}))}),[t]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("thead",{children:[Object(l.jsx)("th",{children:"Time"}),Object(l.jsx)("th",{children:"Status"})]}),Object(l.jsx)("tbody",{children:c.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.statusTime}),Object(l.jsx)("td",{children:t.onlineStatus})]},t.statusTime)}))})]})})},b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,i=n.getFID,c=n.getFCP,s=n.getLCP,o=n.getTTFB;e(t),i(t),c(t),s(t),o(t)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.63c7fe4b.chunk.js.map