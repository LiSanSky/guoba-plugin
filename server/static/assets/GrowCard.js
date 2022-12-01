var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,a,l)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;import{b as n,r as s,fp as r,G as i,x as u,v as d,w as c,H as p,fq as f,eb as m,a as y,o as v,f as g,m as b,N as x,a9 as V,F as w,h as S,i as j,j as h,k as N,l as O,dA as F,aj as $,ap as _,U as B,fr as E}from"./index.js";const P=V(y(n({name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator:t=>t>=0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(t,{emit:n}){const y=s(t.startVal),v=s(!1);let g=r(y);const b=i((()=>function(e){if(!e&&0!==e)return"";const{decimals:a,decimal:l,separator:o,suffix:n,prefix:s}=t;e=Number(e).toFixed(a);const r=(e+="").split(".");let i=r[0];const u=r.length>1?l+r[1]:"",d=/(\d+)(\d{3})/;if(o&&!m(o))for(;d.test(i);)i=i.replace(d,"$1"+o+"$2");return s+i+u+n}(u(g))));function x(){V(),y.value=t.endVal}function V(){g=r(y,((t,n)=>{for(var s in n||(n={}))a.call(n,s)&&o(t,s,n[s]);if(e)for(var s of e(n))l.call(n,s)&&o(t,s,n[s]);return t})({disabled:v,duration:t.duration,onFinished:()=>n("onFinished"),onStarted:()=>n("onStarted")},t.useEasing?{transition:f[t.transition]}:{}))}return d((()=>{y.value=t.startVal})),c([()=>t.startVal,()=>t.endVal],(()=>{t.autoplay&&x()})),p((()=>{t.autoplay&&x()})),{value:b,start:x,reset:function(){y.value=t.startVal,V()}}}}),[["render",function(t,e,a,l,o,n){return v(),g("span",{style:x({color:t.color})},b(t.value),5)}]])),k=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}],z={class:"md:flex"},C={class:"py-4 px-4 flex justify-between items-center"},G={class:"p-2 px-4 flex justify-between"},q=n({__name:"GrowCard",props:{loading:{type:Boolean}},setup:t=>(e,a)=>(v(),g("div",z,[(v(!0),g(w,null,S(u(k),((e,a)=>(v(),j(u(E),{key:e.title,size:"small",loading:t.loading,title:e.title,class:B(["md:w-1/4 w-full !md:mt-0",{"!md:mr-4":a+1<4,"!mt-4":a>0}])},{extra:h((()=>[N(u(F),{color:e.color},{default:h((()=>[O(b(e.action),1)])),_:2},1032,["color"])])),default:h((()=>[$("div",C,[N(u(P),{prefix:"$",startVal:1,endVal:e.value,class:"text-2xl"},null,8,["endVal"]),N(u(_),{icon:e.icon,size:40},null,8,["icon"])]),$("div",G,[$("span",null,"总"+b(e.title),1),N(u(P),{prefix:"$",startVal:1,endVal:e.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))]))});export{q as default};
