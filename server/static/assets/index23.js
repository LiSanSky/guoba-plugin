var e=(e,r,t)=>new Promise(((a,n)=>{var o=e=>{try{s(t.next(e))}catch(r){n(r)}},i=e=>{try{s(t.throw(e))}catch(r){n(r)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,i);s((t=t.apply(e,r)).next())}));import{a as r,b as t,e8 as a,r as n,e as o,o as i,i as s,j as l,k as m,z as u,bV as d,eN as p,eO as c}from"./index.js";import{P as j}from"./index12.js";import g from"./QuickNav2.js";import f from"./SaleRadar2.js";import h from"./PluginsCard.js";import y from"./DynamicInfo2.js";import v from"./WorkbenchHeader2.js";import{u as w}from"./index24.js";import"./index14.js";import"./onMountedOrActivated.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./transButton.js";import"./data3.js";import"./index3.js";import"./FullscreenOutlined.js";import"./GPluginModal.js";import"./index13.js";import"./get.js";import"./MarkdownViewer.js";import"./guoba.js";import"./BasicForm.js";import"./index2.js";import"./_baseIteratee.js";import"./index4.js";import"./index5.js";import"./useFormItem.js";import"./download.js";import"./index6.js";import"./index7.js";import"./uniqBy.js";import"./useForm.js";import"./common.js";const x=t({components:{Card:a,PageWrapper:j,QuickNav:g,SaleRadar:f,PluginsCard:h,DynamicInfo:y,WorkbenchHeader:v},setup(){const r=w(),t=n(!0),a=n({}),o=n(""),i=n([]);function s(){return e(this,null,(function*(){a.value=yield p.getHomeData().catch(console.error)}))}function l(){return e(this,null,(function*(){i.value=yield r.getPlugins().catch(console.error)}))}function m(){return e(this,null,(function*(){try{let{ok:e,result:r,message:t}=yield c.getCityWeather();o.value=e?r.weather:t}catch(e){o.value=e.message||e}}))}return function(){e(this,null,(function*(){try{t.value=!0,yield Promise.all([s(),l(),m()])}finally{t.value=!1}}))}(),{homeData:a,weather:o,plugins:i,loading:t}}}),P={class:"lg:flex"},k={class:"lg:w-7/10 w-full !mr-4 enter-y"},C={class:"lg:w-3/10 w-full enter-y"};var b=r(x,[["render",function(e,r,t,a,n,p){const c=o("WorkbenchHeader"),j=o("PluginsCard");o("DynamicInfo");const g=o("QuickNav");o("Card");const f=o("SaleRadar"),h=o("PageWrapper");return i(),s(h,null,{headerContent:l((()=>[m(c,{data:e.homeData,weather:e.weather},null,8,["data","weather"])])),default:l((()=>[u("div",P,[u("div",k,[m(j,{plugins:e.plugins,loading:e.loading,class:"enter-y"},null,8,["plugins","loading"]),d("",!0)]),u("div",C,[m(g,{loading:e.loading,class:"enter-y"},null,8,["loading"]),d("",!0),m(f,{loading:e.loading,class:"!my-4 enter-y"},null,8,["loading"])])])])),_:1})}]]);export{b as default};
