import{b as a,r as e,w as t,o as s,i,j as o,aj as l,N as r,x as d,fr as n}from"./index.js";import{u as m}from"./useECharts.js";const h=a({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(a){const h=a,u=e(null),{setOptions:f}=m(u);return t((()=>h.loading),(()=>{h.loading||f({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})}),{immediate:!0}),(e,t)=>(s(),i(d(n),{title:"销售统计",loading:a.loading},{default:o((()=>[l("div",{ref_key:"chartRef",ref:u,style:r({width:a.width,height:a.height})},null,4)])),_:1},8,["loading"]))}});export{h as default};
