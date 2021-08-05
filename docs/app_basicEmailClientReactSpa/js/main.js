(()=>{"use strict";var e,t={9879:(e,t,r)=>{var n=r(7294),a=r(3935),o=r(3727),l=r(5977),c=r(103),i=r(8575),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter((function(e){return e.dir===t}))},s=r(7977);function m(e){return n.createElement(s.Z,{pill:!0,variant:"dark"},e.count)}var f="select",d="replyMessage",y="newMessage",b="reply",p="submit",v="read",h="/home",E="/inbox",g="/outbox",w="/new",j="me@portfolio.co.uk",O=n.createContext(),S=n.createContext(),x=n.createContext(),C=n.createContext();function A(){var e=n.useContext(O),t=u(e.state.messages,E).length,r=u(e.state.messages,g).length;return n.createElement(n.Fragment,null,n.createElement("p",{id:"inboxCounter"},"You have ",n.createElement(m,{count:t})," message(s) in your inbox"),n.createElement("p",{id:"outboxCounter"},"You have ",n.createElement(m,{count:r})," message(s) in your outbox"))}var Z=r(682),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="";return t&&e&&(r=t===j?e:t),r};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){switch(t.type){case f:return{selectedThread:t.thread,selected:P(P({},e.selected),{},{id:t.item.id,to:t.item.to,from:t.item.from,subject:t.item.subject,time:t.item.time}),mode:v};case"deselectThread":return P(P({},e),{},{selected:{id:-1,to:"",from:"",subject:"",body:""},selectedThread:[],mode:""});case d:return P(P({},e),{},{mode:b,selected:P(P({},e.selected),{},{to:k(t.selected.from,t.selected.to),from:j,subject:t.selected.subject})});case y:return P(P({},e),{},{selectedThread:[],mode:y});case"resetMode":return P(P({},e),{},{mode:""});default:throw new Error}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e){var t,r,a=e.children,o=(t=(0,n.useReducer)(T,{selected:{id:-1,to:"",from:j,subject:"",body:"",time:0},selectedThread:[],mode:v,showModal:!1}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l={state:o[0],dispatch:o[1]};return n.createElement(S.Provider,{value:l},a)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function D(e){var t,r,a=e.children,o=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l={state:{show:o[0]},setShow:o[1]};return n.createElement(x.Provider,{value:l},a)}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function B(e){var t=e.children,r=n.useContext(O),a=n.useContext(S),o=n.useContext(x),l=(0,n.useCallback)((function(e){var t=window.innerWidth<768;if(e){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{from:"",to:"",subject:"",dir:""},r=[],n=function(e){var r=R(e.thread.split("_"),3),n=r[0],a=r[1],o=r[2];return(n===t.from||n===t.to)&&(a===t.to||a===t.from)&&o===t.subject&&e.time<=t.time};return""!==t.from&&""!==t.to&&""!==t.subject&&(r=e.filter((function(e){return t.dir===E?e.dir===E&&n(e):n(e)}))),r}(r.state.messages,e);a.dispatch({type:f,thread:n,item:e})}o.setShow(t)}),[r.state.messages]),c=(0,n.useMemo)((function(){return{selectListItemHandler:l}}),[l]);return n.createElement(C.Provider,{value:c},t)}function U(e){var t=e.children;return n.createElement(M,null,n.createElement(D,null,n.createElement(B,null,n.createElement(Z.Z,{fluid:!0,className:"py-4"},t))))}function W(e){var t=e.title,r=e.content;return n.createElement(n.Fragment,null,n.createElement("h1",null,t),n.createElement("p",null,r))}function $(){return n.createElement(U,null,n.createElement(W,{title:"Home",content:"A simple email client application. Send a new message or reply to an existing one. Context allows for state to be passed around the app."}),n.createElement(A,null))}var H=r(4051),q=r(1555),G=n.memo((function(e){return n.createElement("small",{id:"ageText"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t="today";return 1===e?"".concat(e," day ago"):e>1?"".concat(e," days ago"):t}(e.age))})),Y=n.memo((function(e){var t=e.item,r=e.active,a=n.useContext(C);return n.createElement("a",{href:"#",id:"id_".concat(t.id),onClick:function(e){e.preventDefault(),a.selectListItemHandler(t)},className:"list-group-item list-group-item-action ".concat(r?"active":""),"aria-current":"true"},n.createElement("div",{className:"d-flex w-100 justify-content-between"},n.createElement("p",{className:"mb-1"},t.from),n.createElement(G,{age:t.age})),n.createElement("p",{className:"mb-1"},t.subject),n.createElement("small",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:75,r=e;return e.length>=t&&(r=e.substring(0,t)),r}(t.body),"..."))}),(function(e,t){return e.active===t.active})),V=function(e,t){return"".concat(e.id,"_").concat(e.thread,"_").concat(t)};function z(e){return function(e){if(Array.isArray(e))return K(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||J(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){if(e){if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q=function(e){var t,r,a=n.useContext(O),o=n.useContext(S),l=(t=(0,n.useState)([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,r)||J(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],i=l[1],s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,a=z(e),o=u(t,r),l=0,c=e.length;l<n&&c<o.length;)a.push(o[c]),l++,c++;return a};return(0,n.useLayoutEffect)((function(){var t=s([],a.state.messages,e.dir);i(t)}),[a.state.messages]),n.createElement(n.Fragment,null,c.length>0&&n.createElement(n.Fragment,null,n.createElement("div",{id:"browserPane",className:"list-group"},c.map((function(e,t){var r=V(e,t);return n.createElement(Y,{index:t,item:e,key:r,active:o.state.selected.id===e.id})}))),n.createElement("button",{className:"btn btn-dark col-4 mt-5 offset-4",onClick:function(){var t=s(c,a.state.messages,e.dir,e.limit);t.length!==c.length&&i(t)}},"Load more")),0===c.length&&n.createElement("p",null,"You have no messages"))};function X(){var e=n.useContext(S);return n.createElement("div",{id:"readingPane"},e.state.selectedThread.map((function(e,t){var r=V(e,t),a=window.innerWidth>768||window.innerWidth<768&&t>0;return n.createElement("div",{key:r},t>0&&n.createElement("hr",null),n.createElement(G,{age:e.age}),n.createElement("p",{className:"mb-0"},n.createElement("strong",null,"From:")," ",n.createElement("span",{id:"fromText"},e.from)),n.createElement("p",{className:"mb-0"},n.createElement("strong",null,"To:")," ",n.createElement("span",{id:"toText"},e.to)),a&&n.createElement("p",{className:"mb-0"},n.createElement("strong",null,"Subject:")," ",n.createElement("span",{id:"subjectText"},e.subject)),n.createElement("div",{id:"bodyText",className:"mt-3"},e.body))})))}var ee=r(5005),te=r(2151);function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||ce(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||ce(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){if(e){if("string"==typeof e)return ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ie(e,t):void 0}}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ue="enqueueToast",se="dequeueToast",me="removeToastAtIndex",fe=n.createContext();function de(e,t){switch(t.type){case ue:var r=le(e.items);return r.unshift(t.item),ae(ae({},e),{},{items:r});case se:var n=le(e.items);return n.pop(),ae(ae({},e),{},{items:n});case me:var a=le(e.items);return a.splice(t.index,1),ae(ae({},e),{},{items:a});default:throw new Error}}function ye(e){return n.createElement(n.Fragment,null,e.items.map((function(e,t){return n.createElement(ve,{key:"toast_".concat(t),index:t,item:e})})))}function be(){var e=re((0,n.useState)(!1),2),t=e[0],r=e[1],a=re((0,n.useState)([]),2),o=a[0],l=a[1],c=n.useContext(fe);return(0,n.useEffect)((function(){l(c.state.items),r(c.state.items.length>0)}),[c.state.items]),n.createElement("div",{className:"toasts-container","aria-live":"polite","aria-atomic":"true",style:{visibility:t?"visible":"hidden"}},n.createElement("div",{className:"toasts-position"},n.createElement(ye,{items:o})))}function pe(e){var t=e.children,r=re((0,n.useReducer)(de,{items:[]}),2),a={state:r[0],dispatch:r[1]};return n.createElement(n.Fragment,null,n.createElement(fe.Provider,{value:a},t,n.createElement(be,null)))}function ve(e){var t=n.useContext(fe);return(0,n.useEffect)((function(){setTimeout((function(){t.dispatch({type:se})}),5e3)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",style:{opacity:1}},n.createElement("div",{className:"toast-header"},n.createElement("strong",{className:"mr-auto text-dark lead"},e.item.heading),n.createElement("a",{href:"#",onClick:function(r){return r.preventDefault()&t.dispatch({type:me,index:e.index})},className:"text-dark h3 mb-0"},n.createElement("i",{className:"bi bi-x"}))),n.createElement("div",{className:"toast-body"},e.item.body)))}function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ee(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ge(){var e=n.useContext(O),t=n.useContext(S),r=n.useContext(fe),a=n.useContext(x),o=he((0,n.useState)(!1),2),l=o[0],c=o[1],i=he((0,n.useState)(""),2),u=i[0],s=i[1],m=he((0,n.useState)(""),2),f=m[0],d=m[1],y=he((0,n.useState)(""),2),v=y[0],h=y[1];return(0,n.useLayoutEffect)((function(){t.state.mode===b&&(s(t.state.selected.to),d(t.state.selected.subject))}),[t.state.mode]),n.createElement(te.Z,{noValidate:!0,validated:l,onSubmit:function(t){if(t.preventDefault(),!1===t.currentTarget.checkValidity())c(!0),t.stopPropagation();else{var n=(new Date).getTime();c(!1),e.dispatch({type:p,item:{subject:f,thread:"".concat(j,"_").concat(u,"_").concat(f),id:10*Math.random(),from:j,to:u,body:v,age:0,dir:g,time:n}}),a.state.show&&a.setShow(!1),r.dispatch({type:ue,item:{heading:"Sent successfully!",body:"Your message RE: ".concat(f,", has now been sent.")}})}}},n.createElement(te.Z.Row,null,n.createElement(te.Z.Group,{as:q.Z},n.createElement(te.Z.Label,null,"From:"),n.createElement(te.Z.Control,{name:"from",id:"from",type:"text",value:j,readOnly:!0}),n.createElement(te.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(te.Z.Row,null,n.createElement(te.Z.Group,{as:q.Z},n.createElement(te.Z.Label,null,"To:"),n.createElement(te.Z.Control,{name:"to",id:"to",type:"text",value:u,onChange:function(e){return s(e.target.value)},required:!0}),n.createElement(te.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(te.Z.Row,null,n.createElement(te.Z.Group,{as:q.Z},n.createElement(te.Z.Label,null,"Subject:"),n.createElement(te.Z.Control,{name:"subject",id:"subject",type:"text",value:f,onChange:function(e){return d(e.target.value)},required:!0}),n.createElement(te.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(te.Z.Row,null,n.createElement(te.Z.Group,{as:q.Z},n.createElement(te.Z.Label,null,"Message:"),n.createElement(te.Z.Control,{name:"body",id:"body",as:"textarea",rows:3,value:v,onChange:function(e){return h(e.target.value)},required:!0}),n.createElement(te.Z.Control.Feedback,{type:"invalid"},"Please enter a value."))),n.createElement(te.Z.Row,null,n.createElement(te.Z.Group,{as:q.Z},n.createElement(ee.Z,{className:"float-right",id:"submit",variant:"dark",type:"submit"},"Submit"))))}function we(){return n.createElement(n.Fragment,null,n.createElement(ge,null),n.createElement(X,null))}function je(){return n.createElement(H.Z,null,n.createElement(q.Z,{lg:6},n.createElement(ge,null)))}function Oe(){var e=n.useContext(S);return n.createElement(H.Z,null,n.createElement(q.Z,null,e.state.mode===v&&n.createElement(X,null),e.state.mode===b&&n.createElement(we,null),e.state.mode===y&&n.createElement(je,null)))}var Se=r(61);function xe(){var e=n.useContext(S),t=n.useContext(x),r=function(){return t.setShow(!1)};return n.createElement(Se.Z,{show:t.state.show,onHide:r},n.createElement(Se.Z.Header,null,n.createElement(Se.Z.Title,{className:"display-4"},e.state.selected.subject),n.createElement(ee.Z,{variant:"link",className:"close",onClick:r},n.createElement("span",{className:"lr"},n.createElement("span",{className:"rl"})))),n.createElement(Se.Z.Body,null,n.createElement(Oe,null)),e.state.mode===v&&n.createElement(Se.Z.Footer,null,n.createElement(ee.Z,{id:"replyBtn",onClick:function(){return e.dispatch({type:d,selected:e.state.selected})}},"Reply"),n.createElement(ee.Z,{id:"closeBtn",variant:"dark",onClick:r},"Close")))}function Ce(){var e=n.useContext(S);return n.createElement(n.Fragment,null,e.state.mode===v&&e.state.selectedThread.length>0&&n.createElement(H.Z,{className:"justify-content-end"},n.createElement("button",{id:"desktopReplyBtn",className:"btn btn-sm btn-dark",onClick:function(){e.dispatch({type:d,selected:e.state.selected})}},n.createElement("i",{className:"bi bi-arrow-90deg-left"}))))}function Ae(e){return n.createElement(n.Fragment,null,n.createElement(H.Z,null,n.createElement(q.Z,null,n.createElement(Q,{dir:e.dir,limit:3})),n.createElement(q.Z,{className:"d-none d-md-block"},n.createElement(Ce,null),n.createElement(Oe,null))),n.createElement(xe,null))}function Ze(){return n.createElement(n.Fragment,null,n.createElement(H.Z,null,n.createElement(q.Z,null,n.createElement(Ae,{dir:E}))))}function ke(){return n.createElement(U,null,n.createElement(W,{title:"Inbox"}),n.createElement(Ze,null))}function Ne(){return n.createElement(U,null,n.createElement(W,{title:"New message"}),n.createElement(je,null))}function Pe(){return n.createElement(n.Fragment,null,n.createElement(H.Z,null,n.createElement(q.Z,null,n.createElement(Ae,{dir:g}))))}function Ie(){return n.createElement(U,null,n.createElement(W,{title:"Outbox"}),n.createElement(Pe,null))}var Te=function(){return n.createElement(o.UT,null,n.createElement(c.Z,{className:"pb-2 px-2 pt-3",id:"spaNavBar",bg:"dark",variant:"dark"},n.createElement(i.Z,{className:"mr-auto"},n.createElement(o.OL,{activeClassName:"active",className:"nav-link pb-3 pt-1 px-3",to:h},"Home"),n.createElement(o.OL,{activeClassName:"active",className:"nav-link pb-3 pt-1 px-3",to:E},"Inbox"),n.createElement(o.OL,{activeClassName:"active",className:"nav-link pb-3 pt-1 px-3",to:g},"Outbox"),n.createElement(o.OL,{activeClassName:"active",className:"nav-link pb-3 pt-1 px-3",to:w},"New"))),n.createElement(l.rs,null,n.createElement(l.AW,{exact:!0,path:"/"},n.createElement(l.l_,{to:h})),n.createElement(l.AW,{path:h},n.createElement($,null)),n.createElement(l.AW,{path:E},n.createElement(ke,null)),n.createElement(l.AW,{path:g},n.createElement(Ie,null)),n.createElement(l.AW,{path:w},n.createElement(Ne,null))))};function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){Le(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function De(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Re(e,t){switch(t.type){case p:var r=function(e){if(Array.isArray(e))return De(e)}(n=e.messages)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return De(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?De(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return r.unshift(t.item),Me(Me({},e),{},{messages:r});default:throw new Error}var n}var _e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(t-e+1)+e)};function Be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ue(e){var t,r,a=e.children,o=function(e){for(var t=[],r=["Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.","Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.","Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC"],n=["james@itservices.co.uk","anna@squaresource.co.uk","matt@mgelectricals.co.uk","sarah@the-coffee-shop.co.uk"],a=0;a<10;a++){var o=_e(0,2),l=n[_e(0,3)];t.push({id:a,from:l,to:j,subject:"Subject ".concat(a),thread:"".concat(l,"_").concat(j,"_Subject ").concat(a),body:r[o],age:0,read:!1,dir:E,time:(new Date).getTime()})}return t}(),l=(t=(0,n.useReducer)(Re,{messages:o}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return Be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Be(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c={state:l[0],dispatch:l[1]};return n.createElement(O.Provider,{value:c},a)}function We(){return n.createElement(pe,null,n.createElement(Ue,null,n.createElement(Te,null)))}a.render(n.createElement(We,null),document.getElementById("result"))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],c=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(c=!1,o<l&&(l=o));c&&(e.splice(u--,1),t=a())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,c,i]=r,u=0;for(a in c)n.o(c,a)&&(n.m[a]=c[a]);for(i&&i(n),t&&t(r);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[l[u]]=0;n.O()},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[736],(()=>n(9879)));a=n.O(a)})();