(this["webpackJsonponline-offline"]=this["webpackJsonponline-offline"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var i=e(1),c=e.n(i),o=e(6),s=e.n(o),r=(e(13),e(8)),u=e(4),d=(e.p,e(14),function(){var t=Object(i.useState)(!0),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(i.useEffect)((function(){return window.addEventListener("offline",(function(){c(!1)})),window.addEventListener("online",(function(){c(!0)})),function(){window.removeEventListener("offline",(function(){c(!1)})),window.removeEventListener("online",(function(){c(!0)}))}}),[]),{onlineStatus:e}}),a=e(7),j=e.n(a),l=e(0);var f=function(){var t=d().onlineStatus,n=Object(i.useState)([]),e=Object(u.a)(n,2),c=e[0],o=e[1];return Object(i.useEffect)((function(){o((function(n){var e,i=Object(r.a)(n);return i.unshift({onlineStatus:t,statusTime:j()().toISOString(),count:((null===(e=i[0])||void 0===e?void 0:e.count)||0)+1}),i.slice(0,Math.min(i.length,100))}))}),[t]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"App-header",children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("thead",{children:[Object(l.jsx)("th",{children:"Count"}),Object(l.jsx)("th",{children:"Time"}),Object(l.jsx)("th",{children:"Status"})]}),Object(l.jsx)("tbody",{children:c.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.count}),Object(l.jsx)("td",{children:t.statusTime}),Object(l.jsx)("td",{children:t.onlineStatus?"ONLINE":"OFFLINE"})]},t.statusTime)}))})]})})})},b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,i=n.getFID,c=n.getFCP,o=n.getLCP,s=n.getTTFB;e(t),i(t),c(t),o(t),s(t)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.51a9c366.chunk.js.map