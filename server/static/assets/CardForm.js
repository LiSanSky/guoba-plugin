var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;import{a as l,b as d,p as s,Q as p,r as c,G as m,e as u,o as f,i as y,j,aj as v,m as b,f as C,R as g,k as x,F as k,U as w,u as F}from"./index.js";import{B as _}from"./BasicForm.js";import"./index2.js";/* empty css      *//* empty css                                                      */import"./index5.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index4.js";import"./index9.js";import"./useFormItem.js";import"./transButton.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index6.js";import"./uniqBy.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";const O=d({name:"CardForm",components:{BasicForm:_},props:{card:s.object.isRequired.type,form:s.object.isRequired.type,isDefault:s.bool.def(!1),allowFold:s.bool.def(!1),defaultFold:s.bool.def(!1)},emits:["redo","submit","addCard","delCard"],setup(e,{emit:l}){const{createPrompt:d}=F(),{prefixCls:s}=p("card-form"),u=c(!!e.defaultFold),f=m((()=>{return r=e.card,t=e.form,r.title.replace(/{{([^}]+)}}/g,((e,o)=>new Function("card","form",`return ${o}`)(r,t)));var r,t})),y=m((()=>{var r,t;return null!=(t=null==(r=e.card)?void 0:r.addBtnText)?t:"新增"}));return{emit:l,prefixCls:s,folded:u,cardTitle:f,addBtnText:y,onClickTitle:function(){e.allowFold&&(u.value=!u.value)},onAddCard:function(){var s,p;d((p=((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&i(e,t,r[t]);if(o)for(var t of o(r))n.call(r,t)&&i(e,t,r[t]);return e})({title:y.value,required:!0},null==(s=e.card)?void 0:s.promptProps),r(p,t({onOk(r){return t=this,o=null,a=function*(){l("addCard",{form:e.form,key:r})},new Promise(((e,r)=>{var n=e=>{try{l(a.next(e))}catch(t){r(t)}},i=e=>{try{l(a.throw(e))}catch(t){r(t)}},l=r=>r.done?e(r.value):Promise.resolve(r.value).then(n,i);l((a=a.apply(t,o)).next())}));var t,o,a}}))))},onRemoveCard:function(){l("delCard",{form:e.form})}}}}),P={key:0,style:{"margin-left":"8px"}},B={style:{"text-align":"center"}},T=v("span",null,"保存",-1),h=v("span",null,"删除当前配置",-1);var R=l(O,[["render",function(e,r,t,o,a,n){const i=u("icon"),l=u("a-tooltip"),d=u("BasicForm"),s=u("a-button"),p=u("a-divider"),c=u("a-popconfirm"),m=u("a-spin"),F=u("a-card");return f(),y(F,{class:w([e.prefixCls,{"allow-fold":e.allowFold,folded:e.folded}]),bordered:!1},{title:j((()=>[v("div",{class:"card-title",onClick:r[0]||(r[0]=(...r)=>e.onClickTitle&&e.onClickTitle(...r))},[v("span",null,b(e.cardTitle),1),e.allowFold?(f(),C("span",P,[e.folded?(f(),y(i,{key:0,icon:"ant-design:caret-down"})):(f(),y(i,{key:1,icon:"ant-design:caret-up"}))])):g("",!0)])])),extra:j((()=>[x(l,{title:"刷新"},{default:j((()=>[x(i,{icon:"ant-design:redo",style:{cursor:"pointer"},onClick:r[1]||(r[1]=()=>e.emit("redo",e.form))})])),_:1})])),default:j((()=>[x(m,{spinning:e.form.loading},{default:j((()=>[x(d,{onRegister:e.form.register},null,8,["onRegister"]),v("div",B,[x(s,{type:"primary","pre-icon":"ant-design:save",onClick:r[2]||(r[2]=()=>e.emit("submit",e.form))},{default:j((()=>[T])),_:1}),e.isDefault?(f(),C(k,{key:0},[x(p,{type:"vertical"}),e.card.allowAdd?(f(),y(s,{key:0,"pre-icon":"ant-design:plus",onClick:e.onAddCard},{default:j((()=>[v("span",null,b(e.addBtnText),1)])),_:1},8,["onClick"])):g("",!0)],64)):(f(),C(k,{key:1},[x(p,{type:"vertical"}),x(c,{title:"确定要删除当前配置吗？",onConfirm:e.onRemoveCard},{default:j((()=>[e.card.allowDel?(f(),y(s,{key:0,"pre-icon":"ant-design:minus",danger:""},{default:j((()=>[h])),_:1})):g("",!0)])),_:1},8,["onConfirm"])],64))])])),_:1},8,["spinning"])])),_:1},8,["class"])}]]);export{R as default};
