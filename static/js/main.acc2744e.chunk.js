(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(22),s=c.n(a),n=c(7),i=(c(30),c(31),c(32),c(2)),b=c(15),j=c.n(b),l=c(3),r=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.q)().tabId,t=d.find((function(t){return t.id===e}));return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:d.map((function(t){var c=t.id,a=t.title;return Object(l.jsx)("li",{className:j()({"is-active":c===e}),"data-cy":"Tab",children:Object(l.jsx)(n.b,{to:"/tabs/".concat(c),"data-cy":"TabLink",children:a})},c)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===t||void 0===t?void 0:t.content)||"Please select a tab"})]})},h=function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{to:"/",className:h,children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:h,children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(r,{})}),Object(l.jsx)(i.b,{path:"/home",element:Object(l.jsx)(i.a,{to:"/"})}),Object(l.jsxs)(i.b,{path:"tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(o,{})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(o,{})})]}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.acc2744e.chunk.js.map