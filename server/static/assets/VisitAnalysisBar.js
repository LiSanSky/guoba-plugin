var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{u as s}from"./useECharts.js";import{b as i}from"./props.js";import{b as p,r as l,H as n,o as y,f as b,N as f}from"./index.js";const m=p({__name:"VisitAnalysisBar",props:((e,s)=>{for(var i in s||(s={}))r.call(s,i)&&o(e,i,s[i]);if(t)for(var i of t(s))a.call(s,i)&&o(e,i,s[i]);return e})({},i),setup(e){const t=l(null),{setOptions:r}=s(t);return n((()=>{r({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:[...new Array(12)].map(((e,t)=>`${t+1}月`))},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})})),(e,r)=>(y(),b("div",{ref_key:"chartRef",ref:t,style:f({height:e.height,width:e.width})},null,4))}});export{m as default};
