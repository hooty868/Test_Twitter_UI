(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d338e"],{"5c9c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("form",{staticClass:"form-group w-100",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._m(0),e._m(1),a("div",{staticClass:"form-label-group"},[a("label",{attrs:{for:"account"}},[e._v("帳號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"},{name:"focus",rawName:"v-focus"}],staticClass:"form-input form-control",attrs:{id:"account",name:"account",type:"account",placeholder:"",autocomplete:"account",required:""},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}})]),a("div",{staticClass:"form-label-group"},[a("label",{attrs:{for:"name"}},[e._v("名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"",autocomplete:"username",requiredx:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-label-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group"},[a("label",{attrs:{for:"password"}},[e._v("密碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-input form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-label-group"},[a("label",{attrs:{for:"password-check"}},[e._v("密碼確認")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-input form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-submit btn-block mb-3",attrs:{type:"submit"}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signin"}},[e._v("取消")])],1)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo-container text-center"},[a("img",{staticClass:"logo",attrs:{src:"https://upload.cc/i1/2020/12/24/MLqwE5.png",alt:"Logo"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brand-container text-center"},[a("h1",{staticClass:"brand h3"},[e._v("建立你的帳號")])])}],o=(a("b0c0"),a("96cf"),a("1da1")),n=a("7696"),i=a("2fa3"),c={data:function(){return{account:"",name:"",email:"",password:"",passwordCheck:""}},methods:{handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.name&&e.email&&e.password&&e.passwordCheck){t.next=4;break}return i["a"].fire({icon:"warning",title:"請確認已填寫所有欄位"}),t.abrupt("return");case 4:if(e.password===e.passwordCheck){t.next=8;break}return i["a"].fire({icon:"warning",title:"兩次輸入的密碼不同"}),e.passwordCheck="",t.abrupt("return");case 8:return a={account:e.account,name:e.name,email:e.email,password:e.password,checkPassword:e.passwordCheck},t.next=11,n["a"].signUp(a);case 11:if(r=t.sent,s=r.data,"error"!==s.status){t.next=15;break}throw new Error(s.message);case 15:i["a"].fire({icon:"success",title:s.message}),e.$router.push("/signin"),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),i["a"].fire({icon:"warning",title:"無法註冊 - ".concat(t.t0.message)});case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))()}},directives:{focus:{inserted:function(e){e.focus()}}}},l=c,u=a("2877"),m=Object(u["a"])(l,r,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0d338e.270a19ea.js.map