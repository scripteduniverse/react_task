(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),u=(n(17),n(3)),o=n.n(u),m=n(6),i=n(8),s=n(7),f=n(2),v=r.a.createContext(null),d=function(){return r.a.useContext(v)},E=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(f.a)(n,2),l=c[0],u=c[1];return r.a.createElement(v.Provider,{value:{cart:l,setCart:u}},t)},p=n(11),b=n.n(p),h=r.a.createContext(null),j=function(){return r.a.useContext(h)},g=function(e){var t=e.children,n=Object(a.useState)(30),c=Object(f.a)(n,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rate");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),setInterval(e,15e3)}),[]),r.a.createElement(h.Provider,{value:{rate:l,setRate:u}},t)},O=Object(a.memo)((function(e){var t=e.good,n=d().setCart,c=j().rate,l=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}(c);var u=Object(a.useCallback)((function(){n((function(e){var n=e.find((function(e){return e.name===t.name})),a=e.filter((function(e){return e.name!==t.name}));return[].concat(Object(s.a)(a),[n?Object(i.a)({},n,{amount:n.amount+1}):Object(i.a)({},t,{amount:1})])}))}),[]);return r.a.createElement("div",{className:"good"},r.a.createElement("div",null,r.a.createElement("p",{className:"name"},t.name,r.a.createElement("span",null,"(",t.inStock,")")),r.a.createElement("p",{className:b()({"red-text":c>l,"green-text":c<l,"black-text":c==l})},(t.price*c).toFixed()," \u0440\u0443\u0431.")),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:u},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))})),x=function(e){var t=e.group;return r.a.createElement("div",{className:"group"},r.a.createElement("h4",null,t.groupName),r.a.createElement("div",null,t.items.length?t.items.map((function(e,t){return r.a.createElement(O,{good:e,key:t})})):r.a.createElement("p",null,"\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438")))},y=r.a.createContext(null),k=function(){return r.a.useContext(y)},N=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(f.a)(n,2),l=c[0],u=c[1];return r.a.createElement(y.Provider,{value:{goods:l,setGoods:u}},t)},C=function(){var e=k(),t=e.goods,n=e.setGoods;return Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/goods");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),setInterval(e,15e3)}),[]),r.a.createElement("div",null,r.a.createElement("h2",{className:"goods-heading"},"\u0422\u043e\u0432\u0430\u0440\u044b"),t.map((function(e,t){return r.a.createElement(x,{group:e,key:t})})))},w=n(4),S=function(e){var t=e.item,n=d(),a=n.cart,c=n.setCart,l=j().rate,u=k().goods,o=function(){var e;return null===(e=a.find((function(e){return e.name===t.name})))||void 0===e?void 0:e.amount};return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,r.a.createElement("input",{type:"number",value:o(),onChange:function(e){var n=e.target.value;c((function(e){var a=Object(s.a)(e);return a.forEach((function(e){e.name===t.name&&(e.amount=0===+n?1:+n)})),a}))}}),o()>t.inStock?r.a.createElement("p",{className:"red"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e"):null),r.a.createElement("td",null,(function(){var e,n=0,a=Object(w.a)(u);try{for(a.s();!(e=a.n()).done;){var r=e.value.items.find((function(e){return e.name===t.name}));if(r){n=r.price;break}}}catch(c){a.e(c)}finally{a.f()}return n}()*l).toFixed()," \u0440\u0443\u0431./\u0448\u0442"),r.a.createElement("td",null,r.a.createElement("button",{className:"waves-effect waves-light btn-small red button-delete",onClick:function(){c((function(e){return e.filter((function(e){return e.name!==t.name}))}))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))},F=function(){var e=d().cart,t=k().goods,n=j().rate;return r.a.createElement("div",{className:"cart-container"},r.a.createElement("h2",{className:"cart-heading"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement("table",{className:"striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement("th",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement("th",null,"\u0426\u0435\u043d\u0430"),r.a.createElement("th",null))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(S,{item:e,key:e.name})})))),r.a.createElement("p",{className:"total-sum"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",function(){var a,r=0,c=Object(w.a)(t);try{for(c.s();!(a=c.n()).done;){var l,u=a.value,o=Object(w.a)(e);try{for(o.s();!(l=o.n()).done;){var m,i=l.value,s=Object(w.a)(u.items);try{for(s.s();!(m=s.n()).done;){var f=m.value;f.name==i.name&&(r+=f.price*i.amount)}}catch(v){s.e(v)}finally{s.f()}}}catch(v){o.e(v)}finally{o.f()}}}catch(v){c.e(v)}finally{c.f()}return r*n}().toFixed(1)," \u0440\u0443\u0431."))};var I=function(){return r.a.createElement(g,null,r.a.createElement(N,null,r.a.createElement(E,null,r.a.createElement("main",{className:"main-container"},r.a.createElement(C,null),r.a.createElement(F,null)))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3a95b714.chunk.js.map