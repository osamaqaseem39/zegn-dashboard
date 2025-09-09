import{b as a}from"./main-d9b0538d.js";const o={list:async()=>(await a.get("/category")).data,getById:async e=>(await a.get(`/category/${e}`)).data,create:async e=>(await a.post("/category",e)).data,update:async(e,t)=>(await a.patch(`/category/${e}`,t)).data,remove:async e=>{await a.delete(`/category/${e}`)}};export{o as c};
//# sourceMappingURL=categoryApi-a292d658.js.map
