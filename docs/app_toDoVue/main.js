(()=>{"use strict";var t,e={721:(t,e,r)=>{var n=r(934);new(r.n(n)())({el:"#result",data:{name:"",counter:0,counterLimit:10,items:[]},methods:{addItem:function(){this.name.length>0&&this.counter<this.counterLimit&&(this.items.push(this.name),this.name="",this.counter=this.counter+1)},deleteItem:function(t){var e=Number(t.target.dataset.index);this.items.splice(e,1),this.counter=this.counter-1}}})}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var s=1/0;for(c=0;c<t.length;c++){for(var[r,o,i]=t[c],a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[s,a,u]=r,l=0;for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n);for(e&&e(r);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[s[l]]=0;return n.O(c)},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[736],(()=>n(721)));o=n.O(o)})();