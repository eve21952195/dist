import{D as f,I as m}from"./DisplayItem-7a3dd878.js";import{_ as h,i as u,u as V,r as v,o as D,c as b,a as n,b as s,n as o,g as a,d as e,t as l,F as $}from"./index-799c5ac3.js";const P={class:"sumitBtn"},k={class:"small"},t="tradingPage.deposit",A={__name:"DepositForm",setup(g){const r=u("t"),i=u("inputBindProps"),p=u("fieldContent"),y={depositAmount:"required|min_value:50",remittanceName:"required|min:8"},{values:F,handleSubmit:x,resetForm:B}=V({validationSchema:y,initialValues:{}}),I=v(50),N=v(150),_=x(c=>{console.log(c),alert("验证通过时执行"),B()});return(c,d)=>(D(),b($,null,[n("form",{onSubmit:d[0]||(d[0]=(...S)=>e(_)&&e(_)(...S))},[s(f,o(a(e(p)("recipientName","王小明",t))),null,16),s(f,o(a(e(p)("recipientAccount","123456789",t))),null,16),s(m,o(a(e(i)("depositAmount","number","pleaseEnterTheDepositAmount",t))),null,16),s(m,o(a(e(i)("remittanceName","","pleaseEnterTheSenderName",t))),null,16),s(m,o(a(e(i)("transferRemark","","pleaseEnterTheTransferRemarks",t))),null,16),n("button",P,l(e(r)("common.button.submit")),1)],32),n("div",k,[n("p",null,l(e(r)(`${t}.label.tips`))+" :",1),n("p",null,l(e(r)(`${t}.content.tipsContent`,{min:c.$n(I.value,"currency"),max:c.$n(N.value,"currency")})),1)]),n("h3",null,"useForm-values: "+l(e(F)),1)],64))}},E=h(A,[["__scopeId","data-v-e54c20ff"]]);const T={class:"main-form"},w={__name:"DepositView",setup(g){return(r,i)=>(D(),b("div",T,[s(E)]))}},q=h(w,[["__scopeId","data-v-46a7870e"]]);export{q as default};
