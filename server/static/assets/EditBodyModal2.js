import{a as e,b as l,r as a,fV as t,w as s,v as i,G as d,e as o,o as c,f as n,k as u,j as r,aj as m,i as p,bg as v,N as f,x as h,R as g,M as D,fj as x,F as y,l as b,ah as k,ai as I}from"./index.js";import{S as w}from"./index9.js";import L from"./SelectIconModal2.js";import"./IconUploader2.js";import"./esm.js";const _=e=>(k("data-v-c2ea8f2a"),e=e(),I(),e),j=[b(" 编辑内容 "),_((()=>m("span",{class:"tip"},"按住这里可拖动",-1)))],C={class:"p-4"},B={class:"row"},U=_((()=>m("div",null,"分组",-1))),M={class:"flex-1"},R={class:"row"},z=_((()=>m("div",null,"仅主人",-1))),V={class:"flex justify-between align-center flex-wrap"},$={class:"flex justify-start"},N={class:"flex flex-1 justify-end"},O=b("添加项目 "),S=b("添加分组"),A=b("删除该组"),E={key:0},F={class:"row"},G=_((()=>m("div",null,"标题",-1))),T={class:"flex-1"},q={class:"row"},H=_((()=>m("div",null,"描述",-1))),J={class:"flex-1"},K={class:"flex justify-between align-center"},P={class:"flex justify-start"},Q={class:"flex flex-1 justify-end"},W=b("添加项目"),X=b("删除该项");var Y=e(l({__name:"EditBodyModal",props:{helpList:Object,modelData:Object,iconB64List:Array},setup(e){const l=e,b=a(!1),k=()=>{let e=l.modelData.groupIndex;l.helpList.splice(e,0,{group:"未命名组别",list:[]}),l.modelData.group=l.helpList[e],l.modelData.cellIndex=l.modelData.cell=null},I=()=>{var e;let a=null!=(e=l.modelData.cellIndex)?e:0;l.helpList[l.modelData.groupIndex].list.splice(a,0,{icon:1,title:"未命名项目",desc:"请添加描述"}),l.modelData.cell=l.helpList[l.modelData.groupIndex].list[a],l.modelData.cellIndex=a},_=e=>{let a,t=l.helpList,s=l.modelData.groupIndex;a=t[s],t[s]=t[s+e],t[s+e]=a,l.modelData.groupIndex+=e},Y=e=>{let a,t=l.helpList[l.modelData.groupIndex].list,s=l.modelData.cellIndex;a=t[s],t[s]=t[s+e],t[s+e]=a,l.modelData.cellIndex+=e},Z=()=>{l.helpList.splice(l.modelData.groupIndex,1),l.modelData.show=!1},ee=()=>{l.helpList[l.modelData.groupIndex].list.splice(l.modelData.cellIndex,1),l.modelData.show=!1},le=()=>{b.value=!0},ae=a(null),{x:te,y:se,isDragging:ie}=t(ae),de=a(0),oe=a(0),ce=a(!1),ne=a(0),ue=a(0),re=a(0),me=a(0),pe=a({left:0,right:0,top:0,bottom:0});s([te,se],(()=>{if(!ce.value){de.value=te.value,oe.value=se.value;const e=document.body.getBoundingClientRect(),l=ae.value.getBoundingClientRect();pe.value.right=e.width-l.width,pe.value.bottom=e.height-l.height,re.value=ne.value,me.value=ue.value}ce.value=!0})),s(ie,(()=>{ie||(ce.value=!1)})),i((()=>{ce.value&&(ne.value=re.value+Math.min(Math.max(pe.value.left,te.value),pe.value.right)-de.value,ue.value=me.value+Math.min(Math.max(pe.value.top,se.value),pe.value.bottom)-oe.value)}));const ve=d((()=>({transform:`translate(${ne.value}px, ${ue.value}px)`})));return(l,a)=>{const t=o("a-input"),s=o("Icon"),i=o("a-button"),d=o("a-popconfirm"),te=o("a-divider");return c(),n(y,null,[u(h(D),{visible:e.modelData.show,"onUpdate:visible":a[8]||(a[8]=l=>e.modelData.show=l),closable:!1,footer:null,mask:!1},{title:r((()=>[m("div",{ref_key:"modalTitleRef",ref:ae,style:{width:"100%",cursor:"move",margin:"0"}},j,512)])),modalRender:r((({originVNode:e})=>[m("div",{style:f(h(ve))},[(c(),p(v(e)))],4)])),default:r((()=>[m("div",C,[m("div",B,[U,m("div",M,[u(t,{value:e.modelData.group.group,"onUpdate:value":a[0]||(a[0]=l=>e.modelData.group.group=l),placeholder:"分组"},null,8,["value"])])]),m("div",R,[z,u(h(w),{checked:e.modelData.group.auth,"onUpdate:checked":a[1]||(a[1]=l=>e.modelData.group.auth=l),checkedValue:"master","checked-children":"是","un-checked-children":"否"},null,8,["checked"])]),m("div",V,[m("div",$,[u(i,{class:"ml-4",disabled:0===e.modelData.groupIndex,type:"primary",shape:"circle",size:"medium",onClick:a[2]||(a[2]=e=>_(-1))},{default:r((()=>[u(s,{icon:"akar-icons:arrow-up"})])),_:1},8,["disabled"]),u(i,{class:"ml-4",disabled:e.modelData.groupIndex===e.helpList.length-1,type:"primary",shape:"circle",size:"medium",onClick:a[3]||(a[3]=e=>_(1))},{default:r((()=>[u(s,{icon:"akar-icons:arrow-down"})])),_:1},8,["disabled"])]),m("div",N,[e.modelData.cell?g("",!0):(c(),p(i,{key:0,class:"ml-4",onClick:I},{default:r((()=>[O])),_:1})),u(i,{class:"ml-4",type:"success",onClick:k},{default:r((()=>[S])),_:1}),u(d,{title:"确定删除？",onConfirm:Z},{default:r((()=>[u(i,{class:"ml-4",type:"default",danger:""},{default:r((()=>[A])),_:1})])),_:1})])]),e.modelData.cell?(c(),n("div",E,[u(te,{style:{margin:"16px 0"}}),m("div",{class:"icon",onClick:le,style:f(`background: url(${e.iconB64List[e.modelData.cell.icon]}) 0 0 no-repeat`)},null,4),m("div",F,[G,m("div",T,[u(t,{value:e.modelData.cell.title,"onUpdate:value":a[4]||(a[4]=l=>e.modelData.cell.title=l),placeholder:"标题"},null,8,["value"])])]),m("div",q,[H,m("div",J,[u(t,{value:e.modelData.cell.desc,"onUpdate:value":a[5]||(a[5]=l=>e.modelData.cell.desc=l),placeholder:"描述"},null,8,["value"])])]),m("div",K,[m("div",P,[u(i,{class:"ml-4",disabled:0===e.modelData.cellIndex,type:"primary",shape:"circle",size:"medium",onClick:a[6]||(a[6]=e=>Y(-1))},{default:r((()=>[u(s,{icon:"akar-icons:arrow-left"})])),_:1},8,["disabled"]),u(i,{class:"ml-4",disabled:e.modelData.cellIndex===e.helpList[e.modelData.groupIndex].list.length-1,type:"primary",shape:"circle",size:"medium",onClick:a[7]||(a[7]=e=>Y(1))},{default:r((()=>[u(s,{icon:"akar-icons:arrow-right"})])),_:1},8,["disabled"])]),m("div",Q,[u(i,{class:"ml-4",type:"success",onClick:I},{default:r((()=>[W])),_:1}),u(d,{title:"确定删除？",onConfirm:ee},{default:r((()=>[u(i,{class:"ml-4",type:"default",danger:""},{default:r((()=>[X])),_:1})])),_:1})])])])):g("",!0)])])),_:1},8,["visible"]),e.modelData.cell?(c(),p(L,{key:0,visible:b.value,"onUpdate:visible":a[9]||(a[9]=e=>b.value=e),cell:e.modelData.cell,"onUpdate:cell":a[10]||(a[10]=l=>e.modelData.cell=l),iconB64List:e.iconB64List,"onUpdate:iconB64List":a[11]||(a[11]=e=>x(iconB64List)?iconB64List.value=e:null)},null,8,["visible","cell","iconB64List"])):g("",!0)],64)}}}),[["__scopeId","data-v-c2ea8f2a"]]);export{Y as default};
