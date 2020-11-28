(this.webpackJsonpcourseinfo=this.webpackJsonpcourseinfo||[]).push([[0],{16:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(15),c=t.n(u),l=t(1),o=t.n(l),i=t(3),s=t(4),m=function(e){var n=e.Query,t=e.handleQueryChange;return r.a.createElement("div",null,r.a.createElement("strong",null,"Filter shown with:")," \xa0",r.a.createElement("input",{name:"search",type:"text",onChange:t,value:n,placeholder:"Filter"}))},f=function(e){var n=e.addName,t=e.handleNameChange,a=e.handleNumberChange,u=e.NewName,c=e.NewNumber;return r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Contact"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"Name:"," ",r.a.createElement("input",{name:"name",value:u,placeholder:"name",onChange:t}),"\xa0\xa0Number:"," ",r.a.createElement("input",{name:"number",value:c,placeholder:"number",onChange:a}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add"))))},d=function(e){var n=e.Persons,t=e.Query,a=e.handleClick;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,""!==t?n.filter((function(e){return e.name===t})).map((function(e,n){return r.a.createElement("div",{key:n},e.name,": ",e.number)})):r.a.createElement("div",null,n.map((function(e,n){return r.a.createElement("div",{style:{lineHeight:"40px"},key:n},e.name,": ",e.number,"\xa0\xa0",r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))})))))},p=t(5),b=t.n(p),h="/api/persons",v=function(){var e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(h);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(h,n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(o.a.mark((function e(n,t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.a.put("".concat(h,"/").concat(n),t),e.abrupt("return",a.data);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),g={getAll:v,create:E,deleteData:function(){var e=Object(i.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(h,"/").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),update:w},y=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"errorMessage"},n)},N=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),p=l[0],b=l[1],h=Object(a.useState)(""),v=Object(s.a)(h,2),E=v[0],w=v[1],N=Object(a.useState)([]),k=Object(s.a)(N,2),j=k[0],x=k[1],O=Object(a.useState)(null),C=Object(s.a)(O,2),Q=C[0],S=C[1];function A(){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAll();case 2:n=e.sent,x(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){A()}),[]);var P=function(){var e=Object(i.a)(o.a.mark((function e(n){var a,r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=j.find((function(e){return e.name===t})),r=j.find((function(e){return e.number===p})),""===t||""===p){e.next=16;break}if(c={name:t,number:p,id:j.length+2},!a&&!r){e.next=10;break}window.confirm("".concat(t," is already added to phonebook, replace the old number with a new one ?"))&&(j.filter((function(e){return e.name===t||e.number===p})).map((function(e){var n={name:e.name,number:p,id:e.id};return g.update(e.id,n)})),A()),e.next=16;break;case 10:return e.next=12,g.create(c);case 12:l=e.sent,S("Added ".concat(l.name,".")),setTimeout((function(){S(null)}),2e3),x(j.concat(l));case 16:b(""),u("");case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(y,{message:Q}),r.a.createElement(m,{handleQueryChange:function(e){w(e.target.search=e.target.value)},Query:E}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f,{handleNameChange:function(e){u(e.target.name=e.target.value)},handleNumberChange:function(e){b(e.target.number=e.target.value)},NewName:t,NewNumber:p,addName:P}),r.a.createElement(d,{Persons:j,Query:E,handleClick:function(e){if(window.confirm("Delete ".concat(e.name," ?")))try{g.deleteData(e.id),A()}catch(n){console.log(n)}}}))};t(39);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.88170bcc.chunk.js.map