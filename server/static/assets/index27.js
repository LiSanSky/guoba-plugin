import{B as e}from"./TableImg.js";import{a as i}from"./BasicForm.js";import{u as o}from"./useTable.js";import{P as t}from"./index14.js";import{u as s}from"./index2.js";import{columns as n}from"./plugins.data.js";import{u as r}from"./index26.js";import{G as a}from"./GPluginModal.js";import{a as l,b as m,c as d,e as p,o as u,i as c,j,k as g,R as f,l as b,aj as x}from"./index.js";/* empty css      */import"./index4.js";import"./index9.js";import"./merge.js";import"./upperFirst.js";import"./_baseIteratee.js";import"./get.js";import"./useWindowSizeFn.js";import"./onMountedOrActivated.js";import"./sortable.esm.js";import"./RedoOutlined.js";import"./FullscreenOutlined.js";import"./scrollTo.js";import"./index21.js";import"./index22.js";import"./index5.js";import"./find.js";import"./useFormItem.js";import"./transButton.js";import"./download.js";import"./index7.js";import"./index6.js";import"./uniqBy.js";import"./index16.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./guoba.js";import"./index15.js";import"./MarkdownViewer.js";import"./common.js";const h=m({name:"Plugins",components:{BasicTable:e,PageWrapper:t,GPluginModal:a,TableAction:i},setup(){const e=r(),[i,{openModal:t}]=s(),a=d({}),[l,{reload:m,updateTableDataRecord:p}]=o({title:"插件列表",api:()=>e.getPlugins(),rowKey:"id",columns:n,showTableSetting:!0,bordered:!0,canResize:!1,pagination:!0,indexColumnProps:{title:"#"},actionColumn:{width:80,title:"操作",dataIndex:"action"}});return{registerTable:l,registerModal:i,handleEdit:function(e){t(!0,{plugin:e})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:i}){if(e){p(i.id,i)}else m()},handleView:function(e){t(!0,{plugin:e})},searchInfo:a}}}),w=b(" 插件列表来源： "),T=x("a",{href:"https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index",target:"_blank"}," Yunzai-Bot插件索引 ",-1);var P=l(h,[["render",function(e,i,o,t,s,n){const r=p("TableAction"),a=p("BasicTable"),l=p("GPluginModal"),m=p("PageWrapper");return u(),c(m,{title:"插件管理"},{headerContent:j((()=>[w,T])),default:j((()=>[g(a,{onRegister:e.registerTable,searchInfo:e.searchInfo},{bodyCell:j((({column:i,record:o})=>["action"===i.key?(u(),c(r,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看插件详情",onClick:e.handleView.bind(null,o)}]},null,8,["actions"])):f("",!0)])),_:1},8,["onRegister","searchInfo"]),g(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})}]]);export{P as default};
