import{c8 as e,r as t,v as n,x as i}from"./index.js";import{u as o}from"./useWindowSizeFn.js";const a=Symbol();const r=t(0),s=t(0);function u(){return{headerHeightRef:r,footerHeightRef:s,setHeaderHeight:function(e){r.value=e},setFooterHeight:function(e){s.value=e}}}function h(){const u=t(window.innerHeight),h=t(window.innerHeight),c=n((()=>i(u)-i(r)-i(s)||0));o((()=>{u.value=window.innerHeight}),100,{immediate:!0}),e({contentHeight:c,setPageHeight:function(e){return t=this,n=null,i=function*(){h.value=e},new Promise(((e,o)=>{var a=e=>{try{s(i.next(e))}catch(t){o(t)}},r=e=>{try{s(i.throw(e))}catch(t){o(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,r);s((i=i.apply(t,n)).next())}));var t,n,i},pageHeight:h},a,{native:!0})}export{u as a,h as u};
