import{c as a,an as e,v as s,G as u,a5 as l,q as n,a4 as v,x as t,a2 as o}from"./index.js";function i(i,r="value",c="change",m){const x=o(),d=null==x?void 0:x.emit,f=a({value:i[r]}),g=e(f);s((()=>{f.value=i[r]}));return[u({get:()=>f.value,set(a){l(a,g.value)||(f.value=a,n((()=>{null==d||d(c,a,...v(t(m))||[])})))}}),a=>{f.value=a},g]}export{i as u};
