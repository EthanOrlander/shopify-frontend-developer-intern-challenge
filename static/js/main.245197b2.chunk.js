(this["webpackJsonpcreate-react-app-ts-react-testing"]=this["webpackJsonpcreate-react-app-ts-react-testing"]||[]).push([[0],{207:function(t,e,n){"use strict";n.r(e);var r,i,c,a,o,s=n(39),u=n.n(s),b=n(215),j=n(113),l=(n(120),n(3)),d=n(213),f=n(214),h=n(217),O=n(5),p=n(87),x=n(48),g=n(218),m=n(11),v=n(15),k=n(219),y=n(49),S=n(210),w=n(211),A=n(41),Y=n.n(A),P=n(0),D=n(4),M=y.a.div(r||(r=Object(x.a)(["\n  position: relative;\n"]))),I=y.a.img(i||(i=Object(x.a)(["\n  display: block;\n  width: 100%;\n  height: auto;\n"]))),L=y.a.div(c||(c=Object(x.a)(["\n  position: absolute;\n  top: 0;\n  background: rgb(0, 0, 0);\n  background: rgba(0, 0, 0, 0.5); /* Black see-through */\n  color: #f1f1f1;\n  width: 100%;\n  font-size: 20px;\n  padding: 20px;\n  text-align: center;\n"]))),N=y.a.div(a||(a=Object(x.a)(["\n  position: absolute;\n  bottom: 0;\n  background: rgb(0, 0, 0);\n  background: rgba(0, 0, 0, 0.5); /* Black see-through */\n  width: 100%;\n  font-size: 20px;\n  padding: 20px;\n  text-align: center;\n"]))),z=y.a.div(o||(o=Object(x.a)(["\n  position: relative;\n  float: right;\n"])));function E(t){var e=t.item,n=e.title,r=e.explanation,i=e.hdurl,c=e.url,a=e.date,o=t.liked,s=t.setLiked,u=function(){return s(!o)},b=Object(P.useState)(!1),j=Object(l.a)(b,2),d=j[0],f=j[1],h=Object(P.useCallback)((function(){return f((function(t){return!t}))}),[]),O=d?Object(D.jsx)(g.a,{content:"Image url copied to clipboard",onDismiss:h}):null,p=Object(D.jsxs)(M,{children:[Object(D.jsx)(I,{alt:n,width:"100%",height:"100%",style:{objectFit:"cover",objectPosition:"center",cursor:"pointer"},src:i||c,onDoubleClick:u}),Object(D.jsx)(L,{children:n}),Object(D.jsxs)(N,{children:[Object(D.jsx)(m.a,{icon:function(){return Object(D.jsx)(v.a,{source:function(){return Object(D.jsx)(S.a,{style:{fill:o?"red":"white"}})}})},accessibilityLabel:"Like",onClick:u,plain:!0}),Object(D.jsxs)(z,{children:[Object(D.jsx)(m.a,{icon:function(){return Object(D.jsx)(v.a,{source:function(){return Object(D.jsx)(w.a,{style:{fill:"white"}})}})},plain:!0,accessibilityLabel:"Share",onClick:function(){h(),navigator.clipboard.writeText(i||c)}}),O]})]})]});return Object(D.jsx)(k.a,{portrait:!0,title:Y()(a).format("MMM. D, YYYY"),description:r,children:p})}var B=n(216);function C(t){var e=t.title,n=t.description,r=t.status;return Object(D.jsx)(B.a,{title:e,status:r,children:Object(D.jsx)("p",{children:n})})}var F=n(90),U=n(114),J=n(220),_=n(221);function Q(){return Object(D.jsx)(F.a,{sectioned:!0,children:Object(D.jsxs)(U.a,{children:[Object(D.jsx)(J.a,{size:"small"}),Object(D.jsx)(_.a,{})]})})}function H(t){var e=t.page,n=Object(P.useState)(null),r=Object(l.a)(n,2),i=r[0],c=r[1],a=Object(P.useState)(!1),o=Object(l.a)(a,2),s=o[0],u=o[1],b=Object(P.useState)([]),j=Object(l.a)(b,2),d=j[0],f=j[1];if(Object(P.useEffect)((function(){var t=Y()().subtract(10*(e+1)-1,"d").format("YYYY-MM-DD"),n=Y()().subtract(10*e,"d").format("YYYY-MM-DD");u(!1);var r=new URLSearchParams({api_key:"IF48Q1mc5u5nwZMQHnbSmEDJU8kxlmCzzUABNfUF",start_date:t,end_date:n});fetch("https://api.nasa.gov/planetary/apod?".concat(r.toString())).then((function(t){if(t.ok)return t.json();var e="";if(403===t.status)e="Authentication error. Ensure you are using a valid API key";else e="Unrecognized error: NASA API response: ".concat(JSON.stringify(t));throw Error(e)})).then((function(t){u(!0),f((function(){return t.map((function(t){return{id:t.date,item:t,liked:!1}})).sort((function(t,e){return Y()(e.item.date).diff(Y()(t.item.date))}))}))}),(function(t){u(!0),c(t.message)})).catch((function(t){return c(t)}))}),[e]),i)return Object(D.jsx)(C,{title:"API Error",description:i,status:"critical"});if(s){var h=d.map((function(t){var e=t.id,n=t.item,r=t.liked;return Object(D.jsx)(E,{item:n,liked:r,setLiked:function(t){return function(t,e){f((function(n){return n.map((function(n){return n.id===t?Object(p.a)(Object(p.a)({},n),{},{liked:e}):n}))}))}(e,t)}},e)}));return Object(D.jsx)(D.Fragment,{children:h})}return Object(D.jsx)(D.Fragment,{children:Object(O.a)(Array(10)).map((function(t,e){return Object(D.jsx)(Q,{},e)}))})}function R(){var t=Object(P.useState)(0),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(D.jsx)(d.a,{children:Object(D.jsx)(f.a,{title:"Spacestagram",subtitle:"Brought to you by NASA's Astronomy Photo of the Day (APOD) API",narrowWidth:!0,pagination:{hasPrevious:n>0,hasNext:!0,onNext:function(){return r((function(t){return t+1}))},onPrevious:function(){return r((function(t){return t-1}))},accessibilityLabels:{next:"Next page",previous:"Previous page"}},children:Object(D.jsx)(h.a,{children:Object(D.jsx)(h.a.AnnotatedSection,{children:Object(D.jsx)(H,{page:n})})})})})}u.a.render(Object(D.jsx)(b.a,{i18n:j,theme:{colors:{surface:"#111213",onSurface:"#111213",interactive:"#2e72d2",secondary:"#111213",primary:"#3b5998",critical:"#d82c0d",warning:"#ffc453",highlight:"#5bcdda",success:"#008060",decorative:"#ffc96b"}},children:Object(D.jsx)(R,{})}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.245197b2.chunk.js.map