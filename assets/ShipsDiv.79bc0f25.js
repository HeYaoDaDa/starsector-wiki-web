import{Q as g}from"./QBtn.327974d0.js";import{I as h,Y as r,K as i,V as o,W as m,X as l,Q as t,R as u,S as v,Z as y,L as S,M as D,_ as k}from"./index.95dc757e.js";const B={class:"items"},C={class:"item_img_section"},R=["src"],x=h({name:"ShipsDiv",__name:"ShipsDiv",props:{ships:{}},setup(c){const d=[r.FRIGATE,r.DESTROYER,r.CRUISER,r.CAPITAL_SHIP];function p(a){return c.ships.filter(s=>s.size==a).sort((s,e)=>s.id.localeCompare(e.id))}function f(a){return c.ships.filter(s=>s.size==a).length>0}return(a,s)=>(i(),o(l,null,m(d,e=>{var _;return i(),o(l,{key:e},[f(e)?(i(),o(l,{key:0},[t("h4",null,u((_=v(y).get(e))!=null?_:e),1),t("div",B,[(i(!0),o(l,null,m(p(e),n=>(i(),S(g,{flat:"",class:"item",key:n.id,to:{name:"ship",params:{id:n.id}}},{default:D(()=>[t("div",null,[t("div",C,[t("img",{decoding:"async",src:n.sprite},null,8,R)]),t("span",null,u(n.getDisplayName()),1)])]),_:2},1032,["to"]))),128))])],64)):k("",!0)],64)}),64))}});export{x as _};
