import{Q as h}from"./QPage.a91bca65.js";import{_ as g}from"./ShipsDiv.79bc0f25.js";import{I as c,a0 as S,r as _,a1 as B,a as r,K as a,L as k,M as b,V as n,R as u,S as I,Q as s,X as i,N as v,_ as y,U as p}from"./index.95dc757e.js";import"./render.e5caeb2c.js";import"./QBtn.327974d0.js";const x={key:0},E={style:{display:"grid","grid-template-columns":"3fr 1fr",gap:"10px"}},M={style:{"text-align":"left","vertical-align":"top","white-space":"pre-wrap"}},N={style:{margin:"auto"}},C=["src"],A=c({name:"ShipModPage",__name:"ShipModPage",setup(V){const f=S();let o=_(f.params.id);B(async t=>{o.value=t.params.id});const l=r(()=>p().getShipModById(o.value)),d=r(()=>{var t,e;return p().getShipsByIds((e=(t=l.value)==null?void 0:t.shipIds)!=null?e:[])}),m=r(()=>{var t,e;return p().getShipsByIds((e=(t=l.value)==null?void 0:t.variantIds)!=null?e:[])});return(t,e)=>(a(),k(h,null,{default:b(()=>[l.value===void 0?(a(),n("h2",x,"ShipSystem id:"+u(I(o))+" not found.",1)):(a(),n(i,{key:1},[s("h4",null,u(l.value.name),1),s("div",E,[s("span",M,u(l.value.description),1),s("div",N,[s("img",{style:{"background-color":"black"},decoding:"async",src:l.value.icon},null,8,C)])]),e[2]||(e[2]=s("br",null,null,-1)),e[3]||(e[3]=s("br",null,null,-1)),d.value.length>0?(a(),n(i,{key:0},[e[0]||(e[0]=s("h4",null,"\u88AB\u7528\u4E8E\u8230\u8239\u8239\u4F53",-1)),v(g,{ships:d.value},null,8,["ships"])],64)):y("",!0),m.value.length>0?(a(),n(i,{key:1},[e[1]||(e[1]=s("h4",null,"\u88AB\u7528\u4E8E\u8230\u8239\u88C5\u914D",-1)),v(g,{ships:m.value},null,8,["ships"])],64)):y("",!0),e[4]||(e[4]=s("br",null,null,-1)),e[5]||(e[5]=s("br",null,null,-1)),s("pre",null,[s("code",null,u(JSON.stringify(l.value,null,2)),1)])],64))]),_:1}))}});export{A as default};
