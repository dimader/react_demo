(this.webpackJsonpreact_demo=this.webpackJsonpreact_demo||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(22),i=n.n(o),s=(n(28),n(29),n(3)),j=n(4),u=n(2),l=n(0);function a(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/hookoverview/counter",children:"Einfacher Z\xe4hler"}),Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/hookoverview/multicounter",children:"Mehrere einfache Z\xe4hler"}),Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/hookoverview/flexcounter",children:"Flexibele Anzahl Z\xe4hler"}),Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/hookoverview/switchflexcounter",children:"Umschaltbarer Flexibeler Z\xe4hler"})]})})})}function b(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("p",{children:["Z\xe4hler: ",n]}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n-1)},value:"c--"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n+1)},value:"c++"})]})}function d(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(b,{}),Object(l.jsx)(b,{}),Object(l.jsx)(b,{})]})}function O(){for(var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],o=[],i=0;i<n;i++)o.push(Object(l.jsx)(b,{}));return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("p",{children:["Anzahl: ",n]}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n-1)},value:"Anzahl --"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n+1)},value:"Anzahl ++"}),o]})}function h(){var e=Object(c.useState)("0"),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("p",{children:["Z\xe4hler: ",n]}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n+"-")},value:"c--"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n+"+")},value:"c++"})]})}function f(){for(var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),i=Object(u.a)(o,2),s=i[0],j=i[1],a=[],d=0;d<n;d++)s?a.push(Object(l.jsx)(h,{})):a.push(Object(l.jsx)(b,{}));return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("p",{children:["Anzahl: ",n," --- Komponenten-Art: ",s?"string":"number"," "]}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n-1)},value:"c--"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r(n+1)},value:"c++"}),Object(l.jsx)("input",{type:"button",onClick:function(){return j(!s)},value:"Switch"}),a]})}var x=n(6);function p(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/usestate/prevcounter",children:"Z\xe4hler mit funktionaler Aktualisierung"}),Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/usestate/statechange",children:"Aktualisierung mit komplexen Daten"}),Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/usestate/lazy",children:"Lazy initialisierung"})]})})})}function v(){console.log("--called--");var e=Object(c.useState)(1),t=Object(u.a)(e,2),n=t[0],r=t[1];return console.log("--Aktueller Count: "+n),Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("p",{children:"Konsole \xf6ffnen um Ausgabe zu sehen."}),Object(l.jsxs)("p",{children:["Z\xe4hler: ",n]}),Object(l.jsx)("input",{type:"button",onClick:function(){console.log("Event-Handler aktueller Count: "+n),r(n+1)},value:"1 setCount +1"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r((function(e){return console.log("Event-Handler aktueller Count: "+n),console.log("Event-Handler prev count: "+e),e+1}))},value:"2 setCount prev +1"}),Object(l.jsx)("input",{type:"button",onClick:function(){console.log("Event-Handler aktueller Count: "+n),r((function(e){return console.log("Event-Handler prev count: "+e),console.log("Event-Handler current count: "+n),e+1})),r((function(e){return console.log("Event-Handler prev count: "+e),console.log("Event-Handler current count: "+n),e+1}))},value:"3 doppelter setCount prev +1"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r((function(e){return console.log("Event-Handler aktueller Count: "+n),e}))},value:"4 setCount prev ohne \xc4nderung"})]})}function g(){console.log("--called--");var e=Object(c.useState)({first:"1",second:"2"}),t=Object(u.a)(e,2),n=t[0],r=t[1];return console.log("--Aktueller Zustand: data.first: "+n.first),Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("p",{children:"Konsole \xf6ffnen um Ausgabe zu sehen."}),Object(l.jsx)("p",{children:"\xc4nderungen am Zustand, eine Kopie wird erzeugt."}),Object(l.jsx)("input",{type:"button",onClick:function(){r(Object(x.a)(Object(x.a)({},n),{},{first:n.first+"1"}))},value:"1 - Zustand kopieren / +1"}),Object(l.jsx)("p",{children:"\xc4nderungen am Zustand ohne eine Kopie zu erzeugen."}),Object(l.jsx)("input",{type:"button",onClick:function(){n.first=n.first+"2",r(n)},value:"2 - Zustand direkt bearbeiten / +2"}),Object(l.jsx)("input",{type:"button",onClick:function(){r(n)},value:"3 - Zustand direkt bearbeiten / ohne \xc4nderungen"}),Object(l.jsx)("input",{type:"button",onClick:function(){var e={first:n.first,second:n.second};r(e)},value:"4 - Zustand kopieren komplett ohne \xc4nderungen"}),Object(l.jsx)("p",{children:"Funktionale Aktualisierung"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r((function(e){return Object(x.a)({},e)}))},value:"5 - Funktionale Aktualisierung / Neues Objekt ohne \xc4nderungen"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r((function(e){return e}))},value:"6 - Funktionale Aktualisierung / Original Objekt ohne \xc4nderungen"}),Object(l.jsx)("input",{type:"button",onClick:function(){return r((function(e){return e.first=e.first+"7",e}))},value:"7 - Funktionale Aktualisierung / Original Objekt mit \xc4nderung"})]})}function k(){console.log("--called LazyStateTest--");var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"button",onClick:function(){r((function(e){return!e}))},value:"Toggle"}),Object(l.jsx)("p",{}),n&&Object(l.jsx)(m,{}),!n&&Object(l.jsx)("p",{children:"Komponente ausgeblendet"})]})}function m(){console.log("--called LazyState--");var e=Object(c.useState)(1),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)((function(){return console.log("-- lazy state init"),[{name:"N1",age:41},{name:"N2",age:42},{name:"N3",age:43},{name:"N4",age:44}]})),i=Object(u.a)(o,2),s=i[0];i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:"Konsole \xf6ffnen um Ausgabe zu sehen."}),Object(l.jsxs)("p",{children:["Z\xe4hler: ",n]}),Object(l.jsx)("input",{type:"button",onClick:function(){r((function(e){return e+1}))},value:"Count"}),Object(l.jsx)("p",{}),s&&s.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)("p",{})," ",Object(l.jsx)("span",{children:e.name})," ",Object(l.jsx)("span",{children:e.age})," "]})}))]})}function C(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/useEffect/useeffect",children:"useEffect Lifecycle"}),Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/useEffect/useeffectdependencies",children:"useEffect Dependencies"})]})})})}function D(){console.log("-- UseEffectLifeCycle");var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(100),i=Object(u.a)(o,2),s=i[0],j=i[1];return Object(c.useEffect)((function(){console.log("-- UseEffectLifeCycle - useEffect")})),Object(c.useEffect)((function(){console.log("-- UseEffectLifeCycle - useEffect []")}),[]),Object(c.useEffect)((function(){console.log("-- UseEffectLifeCycle - useEffect [ count ]")}),[n]),console.log("-- UseEffectLifeCycle - return"),Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("p",{children:"Konsole \xf6ffnen um Ausgabe zu sehen."}),Object(l.jsxs)("p",{children:["Z\xe4hler: ",n," - Zweiter Z\xe4hler: ",s]}),Object(l.jsx)("input",{type:"button",onClick:function(){console.log("-- UseEffectLifeCycle - handleClick"),r(n+1)},value:"1 Count hochz\xe4hlen"}),Object(l.jsx)("input",{type:"button",onClick:function(){console.log("-- UseEffectLifeCycle - handleClick-Second"),j(s+1)},value:"2 Keine \xc4nderung der Abh\xe4ngigkeiten"})]})}function y(){console.log("-- UseEffectLifeCycle");var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1];return console.log("-- UseEffectLifeCycle - return"),Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("p",{children:"Konsole \xf6ffnen um Ausgabe zu sehen."}),Object(l.jsxs)("p",{children:["Z\xe4hler: ",n]}),Object(l.jsx)("input",{type:"button",onClick:function(){console.log("-- UseEffectLifeCycle - updateCount"),r(n+1)},value:"1 Count au\xdfen hochz\xe4hlen"}),Object(l.jsx)(E,{id:n})]})}function E(e){console.log("-- UseEffectLifeCycle");var t=Object(c.useState)(0),n=Object(u.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),j=s[0],a=s[1];return Object(c.useEffect)((function(){console.log("-- UseEffectLifeCycle - useEffect [ count ]"),a(""+r)}),[r]),Object(c.useEffect)((function(){console.log("-- UseEffectLifeCycle - useEffect [ props.id ]"),a(""+r)}),[e.id]),console.log("-- UseEffectLifeCycle - return"),Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("p",{children:["Z\xe4hler (innen): ",r]}),Object(l.jsxs)("p",{children:["Text (innen): ",j]}),Object(l.jsx)("input",{type:"button",onClick:function(){console.log("-- UseEffectLifeCycle - updateCount"),o(r+1)},value:"1 Count innen hochz\xe4hlen"})]})}var S=n(12),F=(n(21),n(11));function A(e,t,n){return console.log("create Task"),{id:e,description:t,dueDate:new Date,prio:n,done:!1}}function w(){return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{children:["----",Object(l.jsx)(s.c,{to:"/Tabelle",children:"Tabelle"}),"----",Object(l.jsx)(s.c,{to:"/Neu",children:"Erfassung"})]})})}function Z(e){return Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/Tabelle",children:Object(l.jsx)(z,{tableData:e.tableData,onDelete:e.onDelete,onDone:e.onDone})}),Object(l.jsx)(j.a,{path:"/Neu",children:Object(l.jsx)(T,{onSave:e.onSave})}),Object(l.jsxs)(j.a,{path:"/",children:[" ",Object(l.jsx)(z,{tableData:e.tableData,onDelete:e.onDelete,onDone:e.onDone})]})]})}function z(e){return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)("h1",{children:"Aufgaben Tabelle"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Aufgabe"}),Object(l.jsx)("th",{children:"Prio"}),Object(l.jsx)("th",{children:"Ziel Datum"}),Object(l.jsx)("th",{children:"Erledig?"}),Object(l.jsx)("th",{children:"Aktionen"}),Object(l.jsx)("th",{children:"Aktionen"}),e.tableData.map((function(t){return Object(l.jsx)(L,{task:t,onDeleteClick:e.onDelete,onDoneClick:e.onDone},t.id)}))]})]})}function L(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.task.id}),Object(l.jsx)("td",{children:e.task.description}),Object(l.jsx)("td",{children:e.task.prio}),Object(l.jsx)("td",{children:U(e.task.dueDate)})," ",Object(l.jsx)("td",{children:String(e.task.done)}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"button",onClick:function(){return e.onDeleteClick(e.task)},value:"L\xf6schen"})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"button",onClick:function(){return e.onDoneClick(e.task)},value:"Erledigt"})})]})}function T(e){var t=Object(j.f)(),n=Object(c.useState)((function(){return A(0,"",3)})),o=Object(u.a)(n,2),i=o[0],s=o[1],a=Object(c.useState)("Keine"),b=Object(u.a)(a,2),d=b[0],O=b[1],h=Object(c.useState)(!1),f=Object(u.a)(h,2),p=f[0],v=f[1],g=function(e){!function(e,t){var n=t.target,c=n.name;"checkbox"===n.type||"radio"===n.type?e((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(F.a)({},c,n.checked))})):"date"===n.type?e((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(F.a)({},c,new Date(n.value)))})):e((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(F.a)({},c,n.value))}))}(s,e)};r.a.useEffect((function(){k(i)}),[i]);var k=function(e){var t="";""===e.description&&(t+="Beschreibung darf nicht leer sein. ");var n=new Date;n.setHours(0,0,0,0),e.dueDate<n&&(t+="Datum darf nicht in der Vergangenheit liegen. "),O(t),v(""!==t)};return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)("h1",{children:"Aufgabe Erfassung"}),Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),void 0!==i&&e.onSave(i),t.push("/Tabelle")},children:[Object(l.jsx)("label",{htmlFor:"desc",children:"Aufgabe"})," ",Object(l.jsx)("input",{id:"desc",type:"text",name:"description",placeholder:"Deine Aufgabe...",value:null===i||void 0===i?void 0:i.description,onChange:g}),Object(l.jsx)("label",{htmlFor:"prio",children:"Priorit\xe4t"}),Object(l.jsxs)("select",{id:"prio",value:null===i||void 0===i?void 0:i.prio,onChange:function(e){return s(Object(x.a)(Object(x.a)({},i),{},{prio:parseInt(e.target.value)}))},children:[Object(l.jsx)("option",{value:"1",children:"1 - Wichtig"}),Object(l.jsx)("option",{value:"2",children:"2 - Irgendwie schon wichtig"}),Object(l.jsx)("option",{value:"3",children:"3 - Muss nicht, kann aber"})]}),Object(l.jsx)("label",{htmlFor:"dueDate",children:"Ziel-Datum"}),Object(l.jsx)("input",{name:"dueDate",type:"date",id:"dueDate",value:U(null===i||void 0===i?void 0:i.dueDate),onChange:g}),Object(l.jsx)("label",{htmlFor:"done",children:"Erledigt?"}),Object(l.jsx)("input",{name:"done",type:"checkbox",id:"done",checked:null===i||void 0===i?void 0:i.done,onChange:g}),Object(l.jsx)("p",{}),Object(l.jsx)("input",{type:"submit",value:"Erstellen",disabled:p}),Object(l.jsx)("p",{}),Object(l.jsxs)("span",{children:["Debug: ",null===i||void 0===i?void 0:i.description," - ",null===i||void 0===i?void 0:i.prio," - ",String(null===i||void 0===i?void 0:i.done)," "]}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{}),Object(l.jsxs)("span",{children:["Info: ",d]})]})]})]})}function U(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}function K(e,t,n){return console.log("create Task"),{id:e,description:t,dueDate:new Date,prio:n,done:!1}}function H(){return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{children:["----",Object(l.jsx)(s.c,{to:"/Tabelle",children:"Tabelle"}),"----",Object(l.jsx)(s.c,{to:"/Neu",children:"Erfassung"})]})})}function I(e){return Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/Tabelle",children:Object(l.jsx)(N,{tableData:e.tableData,onDelete:e.onDelete,onDone:e.onDone})}),Object(l.jsx)(j.a,{path:"/Neu",children:Object(l.jsx)(P,{onSave:e.onSave})}),Object(l.jsxs)(j.a,{path:"/",children:[" ",Object(l.jsx)(N,{tableData:e.tableData,onDelete:e.onDelete,onDone:e.onDone})]})]})}function N(e){return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)("h1",{children:"Aufgaben Tabelle"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Aufgabe"}),Object(l.jsx)("th",{children:"Prio"}),Object(l.jsx)("th",{children:"Ziel Datum"}),Object(l.jsx)("th",{children:"Erledig?"}),Object(l.jsx)("th",{children:"Aktionen"}),Object(l.jsx)("th",{children:"Aktionen"}),e.tableData.map((function(t){return Object(l.jsx)(M,{task:t,onDeleteClick:e.onDelete,onDoneClick:e.onDone},t.id)}))]})]})}function M(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.task.id}),Object(l.jsx)("td",{children:e.task.description}),Object(l.jsx)("td",{children:e.task.prio}),Object(l.jsx)("td",{children:R(e.task.dueDate)})," ",Object(l.jsx)("td",{children:String(e.task.done)}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"button",onClick:function(){return e.onDeleteClick(e.task)},value:"L\xf6schen"})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"button",onClick:function(){return e.onDoneClick(e.task)},value:"Erledigt"})})]})}function P(e){var t=Object(j.f)(),n=Object(c.useRef)(null),o=Object(c.useRef)(null),i=Object(c.useRef)(null),s=Object(c.useRef)(null);return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)("h1",{children:"Aufgabe Erfassung (Uncontrolled)"}),Object(l.jsxs)("form",{onSubmit:function(c){var r,j,u,l;c.preventDefault();var a=K(0,"",3);a.description=(null===(r=n.current)||void 0===r?void 0:r.value)||"",a.prio=parseInt((null===(j=o.current)||void 0===j?void 0:j.value)||"3"),a.dueDate=new Date((null===(u=i.current)||void 0===u?void 0:u.value)||""),a.done=(null===(l=s.current)||void 0===l?void 0:l.checked)||!1,e.onSave(a),t.push("/Tabelle")},children:[Object(l.jsx)("label",{htmlFor:"desc",children:"Aufgabe"})," ",Object(l.jsx)("input",{id:"desc",type:"text",name:"description",placeholder:"Deine Aufgabe...",ref:n}),Object(l.jsx)("label",{htmlFor:"prio",children:"Priorit\xe4t"}),Object(l.jsxs)("select",{id:"prio",ref:o,children:[Object(l.jsx)("option",{value:"1",children:"1 - Wichtig"}),Object(l.jsx)("option",{value:"2",children:"2 - Irgendwie schon wichtig"}),Object(l.jsx)("option",{value:"3",children:"3 - Muss nicht, kann aber"})]}),Object(l.jsx)("label",{htmlFor:"dueDate",children:"Ziel-Datum"}),Object(l.jsx)("input",{name:"dueDate",type:"date",id:"dueDate",ref:i}),Object(l.jsx)("label",{htmlFor:"done",children:"Erledigt?"}),Object(l.jsx)("input",{name:"done",type:"checkbox",id:"done",ref:s}),Object(l.jsx)("p",{}),Object(l.jsx)("input",{type:"submit",value:"Erstellen"}),Object(l.jsx)("p",{})]})]})}function R(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}var B=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.a.Fragment,{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/",children:"Zur\xfcck zur \xdcbersicht"}),Object(l.jsxs)(j.c,{children:[W.map((function(e){return Object(l.jsx)(j.a,{path:e.path,component:e.component})})),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(Y,{})})]})]})})})},W=[{decs:"Task Verwaltung",path:"/task",component:function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=r.a.useState(0),i=Object(u.a)(o,2),j=i[0],a=i[1];return r.a.useEffect((function(){c([A(-1,"React Kurs Erstellen",1),A(-2,"Kaffee trinken",2)])}),[]),Object(l.jsx)(r.a.Fragment,{children:Object(l.jsxs)(s.a,{children:["    ",Object(l.jsx)(w,{}),Object(l.jsx)(Z,{tableData:n,onSave:function(e){e.id=j,a(j+1),c([].concat(Object(S.a)(n),[e]))},onDelete:function(e){c(n.filter((function(t){return t.id!==e.id})))},onDone:function(e){var t=Object(S.a)(n),r=t.findIndex((function(t){return t.id===e.id}));t[r].done=!0,c(t)}})]})})}},{decs:"Task Verwaltung (Uncontrolled)",path:"/taskuncontrolled",component:function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=r.a.useState(0),i=Object(u.a)(o,2),j=i[0],a=i[1];return r.a.useEffect((function(){c([K(-1,"React Kurs Erstellen",1),K(-2,"Kaffee trinken",2)])}),[]),Object(l.jsx)(r.a.Fragment,{children:Object(l.jsxs)(s.b,{children:["    ",Object(l.jsx)(H,{}),Object(l.jsx)(I,{tableData:n,onSave:function(e){e.id=j,a(j+1),c([].concat(Object(S.a)(n),[e]))},onDelete:function(e){c(n.filter((function(t){return t.id!==e.id})))},onDone:function(e){var t=Object(S.a)(n),r=t.findIndex((function(t){return t.id===e.id}));t[r].done=!0,c(t)}})]})})}},{decs:"Converter",path:"/converter",component:function(){var e=Object(c.useState)("Bitcoin"),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)("1.0"),s=Object(u.a)(i,2),j=s[0],a=s[1],b=Object(c.useState)("1.0"),d=Object(u.a)(b,2),O=d[0],h=d[1],f=Object(c.useState)(""),x=Object(u.a)(f,2),p=x[0],v=x[1];return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsxs)("div",{className:"Converter",children:[Object(l.jsx)("label",{children:"Crypto-Name:"}),Object(l.jsx)("input",{type:"text",name:"name",value:n,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("label",{children:"aktueller Wechselkurs:"}),Object(l.jsx)("input",{type:"text",name:"kurs",value:j,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("label",{children:"Anzahl Coins:"}),Object(l.jsx)("input",{type:"text",name:"name",value:O,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){return function(){var e=parseFloat(j)*parseFloat(O);v(e.toString())}()},children:"Berechnen"})]}),Object(l.jsx)("p",{}),Object(l.jsxs)("label",{children:["Mit dem Wechselkurs von ",j," sind deine ",n,"-Coins heute ",p,"\u20ac Wert."]})]})}},{decs:"Event Demo",path:"/events",component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{}),[1,2,3,4,5,6].map((function(e){return Object(l.jsxs)("button",{onClick:function(){return t=e,void console.log("clicked: "+t);var t},children:["Click ",e]})}))]})}},{decs:"Effect Demo",path:"/effect",component:function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){document.title="You clicked ".concat(n," times")})),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["You clicked ",n," times"]}),Object(l.jsx)("button",{onClick:function(){return r(n+1)},children:"Click me"})]})}},{decs:"Hook State Demos",path:"/hookoverview",component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/hookoverview",children:"Zur\xfcck zu Hooks"}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/hookoverview/counter",component:b}),Object(l.jsx)(j.a,{path:"/hookoverview/multicounter",component:d}),Object(l.jsx)(j.a,{path:"/hookoverview/flexcounter",component:O}),Object(l.jsx)(j.a,{path:"/hookoverview/switchflexcounter",component:f}),Object(l.jsx)(j.a,{path:"/hookoverview",component:a})]})]})}},{decs:"useState Demos",path:"/usestate",component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/usestate",children:"Zur\xfcck zu useState"}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/usestate/prevcounter",component:v}),Object(l.jsx)(j.a,{path:"/usestate/statechange",component:g}),Object(l.jsx)(j.a,{path:"/usestate/lazy",component:k}),Object(l.jsx)(j.a,{path:"/usestate",component:p})]})]})}},{decs:"useEffect Demos",path:"/useEffect",component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:"/useEffect",children:"Zur\xfcck zu useEffect"}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/useEffect/useeffect",component:D}),Object(l.jsx)(j.a,{path:"/useEffect/useeffectdependencies",component:y}),Object(l.jsx)(j.a,{path:"/useEffect",component:C})]})]})}}];function Y(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"\xdcbersicht"}),Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:W.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{}),Object(l.jsx)(s.c,{to:e.path,children:e.decs})," "]})}))})})]})}var V=function(){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)(B,{})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root")),J()}},[[36,1,2]]]);
//# sourceMappingURL=main.e0ea8fde.chunk.js.map