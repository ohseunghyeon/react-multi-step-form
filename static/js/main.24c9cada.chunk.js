(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){e.exports={h1:"Form_h1__eJhDf",section:"Form_section__2qOPr",item:"Form_item__3odcD",item__title:"Form_item__title__2kgTT",error:"Form_error__Qtzrm"}},,,,,,function(e){e.exports={formId:1,title:"\uc0ac\ubb34\uc2e4 \ub300\uccad\uc18c \uc694\uccad\uc11c \ud3fc",items:[{itemId:1,title:"\uc6d0\ud558\ub294 \uccad\uc18c \uc2a4\ud0c0\uc77c\uc740 \ubb34\uc5c7\uc778\uac00\uc694?",formType:1,options:[{id:1,text:"\uc2a4\ud300\uccad\uc18c"},{id:2,text:"\uc9c4\uacf5\uccad\uc18c\uae30\ub85c \uccad\uc18c"},{id:3,text:"\uc4f0\ub808\uae30 \ube44\uc6b0\uae30"}]},{itemId:2,title:"\uba87\uc2dc\uac04 \uccad\uc18c\ub97c \uc6d0\ud558\uc2dc\ub098\uc694?",formType:2,options:[{id:3,text:"30\ubd84"},{id:4,text:"1\uc2dc\uac04"},{id:5,text:"2\uc2dc\uac04"}]},{itemId:3,title:"\ucd94\uac00\ub85c \uc6d0\ud558\uc2dc\ub294 \uccad\uc18c \uc2a4\ud0c0\uc77c\uc774 \uc788\ub098\uc694? \uc9c1\uc811 \uc785\ub825\ud574\uc8fc\uc138\uc694",formType:3,options:[]},{itemId:4,title:"\ub124\ubc88\uc9f8 \uc9c8\ubb38\uc785\ub2c8\ub2e4",formType:4,options:[{id:6,text:"\uccab\ubc88\uc9f8 \uc140\ub809\ud2b8\ubc15\uc2a4 \uc9c8\ubb38 \uc785\ub2c8\ub2e4"},{id:7,text:"\ub450\ubc88\uc9f8 \uc140\ub809\ud2b8\ubc15\uc2a4 \ub2f5\ubcc0 \uc785\ub2c8\ub2e4"},{id:8,text:"\uc138\ubc88\uc9f8 \uc140\ub809\ud2b8\ubc15\uc2a4 \ub2f5\ubcc0 \uc785\ub2c8\ub2e4"}]}]}},function(e,t,n){e.exports={nav:"FormNav_nav__2rb3P"}},function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(7),u=n.n(r),o=(n(17),n(4)),c=n(2),l=n(3),m=n.n(l),s=n(5),d=n.n(s),f=n(8),v=n(9),p=n(1);function h(e){var t=e.formType,n=e.itemId,r=e.options,u=e.title;return{formType:t,itemId:n,options:r,title:u,value:[],copyWithValues:function(e){var t=e.value,n=e.checked,i=Object(o.a)(this.value);return i[Number(t)]=n,Object(p.a)({},this,{value:i})},validate:function(){return this.value.includes(!0)},getSubmitData:function(){return{id:n,answer:this.value.reduce(function(e,t,n){return t&&e.push(r.filter(function(e){return e.id===n})[0].text),e},[]).join()}},render:function(e){var t=this;return a.a.createElement(i.Fragment,null,this.options.map(function(n){return a.a.createElement("label",{key:n.id},a.a.createElement("input",{type:"checkbox",name:t.itemId,value:n.id,checked:!!t.value[n.id],onChange:e}),n.text)}))}}}function b(e){var t=e.formType,n=e.itemId,r=e.options,u=e.title;return{formType:t,itemId:n,options:r,title:u,value:r[0].id,copyWithValues:function(e){var t=e.value;return Object(p.a)({},this,{value:Number(t)})},validate:function(){return!!this.value},getSubmitData:function(){var e=this;return{id:n,answer:r.filter(function(t){return t.id===e.value})[0].text}},render:function(e){var t=this;return a.a.createElement(i.Fragment,null,this.options.map(function(n){return a.a.createElement("label",{key:n.id},a.a.createElement("input",{type:"radio",name:t.itemId,value:n.id,onChange:e,checked:t.value===n.id}),n.text)}))}}}function x(e){var t=e.formType,n=e.itemId,i=e.options,r=e.title;return{formType:t,itemId:n,options:i,title:r,value:"",copyWithValues:function(e){var t=e.value;return Object(p.a)({},this,{value:t})},validate:function(){return!!this.value},getSubmitData:function(){return{id:n,answer:this.value}},render:function(e){return a.a.createElement("textarea",{style:{width:"100%",height:"50px"},type:"text",name:this.itemId,onChange:e,value:this.value})}}}function y(e){var t=e.formType,n=e.itemId,i=e.options,r=e.title;return{formType:t,itemId:n,options:i,title:r,value:i[0].id,copyWithValues:function(e){var t=e.value;return Object(p.a)({},this,{value:Number(t)})},validate:function(){return!!this.value},getSubmitData:function(){var e=this;return{id:n,answer:i.filter(function(t){return t.id===e.value})[0].text}},render:function(e){return a.a.createElement("select",{name:this.itemId,onChange:e,value:this.value},this.options.map(function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.text)}))}}}var E=n(10),_=n.n(E);n(19);function I(e){var t=e.onClick,n=e.disabled,i=e.text;return a.a.createElement("button",{className:"btn",onClick:t,disabled:n},i)}function g(e){var t=e.step,n=e.setStep,i=e.lastStep,r=e.checkValidation,u=e.handleSubmit;return a.a.createElement("div",{className:_.a.nav},a.a.createElement(I,{onClick:function(){return n(function(e){return e-1})},disabled:t<1,text:"\uc774\uc804"}),t!==i&&a.a.createElement(I,{onClick:function(){return r()&&n(function(e){return e+1})},disabled:t>i-1,text:"\ub2e4\uc74c"}),t===i&&a.a.createElement(I,{onClick:function(){return r()&&u()},disabled:t!==i,text:"\uc81c\ucd9c"}))}function k(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],u=function(e){var t=Object(i.useState)({}),n=Object(c.a)(t,2),a=n[0],r=n[1];return Object(i.useEffect)(function(){!function(){var t=Object(f.a)(d.a.mark(function t(){var n,i;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=v).items=n.items.sort(function(e,t){return e.itemId>t.itemId}),i=[null,h,b,x,y],e(n.items.map(function(e){return i[e.formType](e)})),r(n);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e]),[a,r]}(r),l=Object(c.a)(u,1)[0],s=Object(i.useState)(0),p=Object(c.a)(s,2),E=p[0],_=p[1],I=Object(i.useState)(!1),k=Object(c.a)(I,2),O=k[0],j=k[1];if(!l.items)return!1;return a.a.createElement(i.Fragment,null,a.a.createElement("header",null,a.a.createElement("h1",{className:m.a.h1},l.title)),a.a.createElement("main",{className:m.a.section},a.a.createElement("div",{className:m.a.item},a.a.createElement("h2",{className:m.a.item__title},n[E].title),n[E].render(function(e){var t=Object(o.a)(n);t[E]=n[E].copyWithValues({value:e.target.value,checked:e.target.checked}),r(t)})),O&&a.a.createElement("div",{className:m.a.error},"\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"),a.a.createElement(g,{step:E,setStep:_,lastStep:l.items.length-1,checkValidation:function(){return n[E].validate()?(j(!1),!0):(j(!0),!1)},handleSubmit:function(){var e={id:l.formId,items:n.map(function(e){return e.getSubmitData()})};console.log(JSON.stringify(e,null,2))}})))}var O=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,null))};u.a.render(a.a.createElement(O,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.24c9cada.chunk.js.map