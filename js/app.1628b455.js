(function(e){function t(t){for(var o,s,a=t[0],c=t[1],u=t[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var a=r[s];0!==n[a]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},s={app:0},n={app:0},i=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d365a":"ea931a07","chunk-4a2c813c":"f204f88c"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-4a2c813c":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0d365a":"31d6cfe0","chunk-4a2c813c":"cafa27eb"}[e]+".css",n=c.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===n))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===o||l===n)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete s[e],p.parentNode.removeChild(p),r(i)},p.href=n;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){s[e]=0})));var o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,r[1](d)}n[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"vendors~app"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"018c":function(e,t){e.exports=VueClipboard},"0304":function(e,t,r){e.exports=r.p+"img/minacode.a2c8bc93.jpg"},"37be":function(e,t,r){"use strict";r("3b6d")},3838:function(e,t){e.exports=Random},"3b6d":function(e,t,r){},"41a3":function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"d",(function(){return p})),r.d(t,"g",(function(){return g})),r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return b})),r.d(t,"h",(function(){return v})),r.d(t,"f",(function(){return y}));r("ac6a"),r("a481"),r("28a5");var o=r("b519"),s=r("daa3"),n=r("3581"),i=r.n(n);let a=null,c=null,u=null,l=new Proxy({},{get(e,t){if(a)return a[t];console.warn("use tim before init!!!")}});function d(e,t){a||(c=e,u=t,a=o["a"].create({SDKAppID:e}),a.setLogLevel(4),a.registerPlugin({"tim-upload-plugin":i.a}))}function p(){return btoa(c+"/"+u.split("").reverse().join(""))}function g(e,t,r){for(let o in t)e.off(o,t[o],r),e.on(o,t[o],r)}t["a"]=l;const m={};class f{constructor(e){this.bot=window.TIMC().create({SDKAppID:c}),this.groupId=e,this.name=e.replace("@TGS#","bot_"),this.init()}init(){this.bot.setLogLevel(4),this.bot.registerPlugin({"tim-upload-plugin":i.a}),g(this.bot,{[o["a"].EVENT.SDK_READY]:this.onReadyStateUpdate,[o["a"].EVENT.SDK_NOT_READY]:this.onReadyStateUpdate,[o["a"].EVENT.KICKED_OUT]:this.onKickedOut,[o["a"].EVENT.ERROR]:this.onSdkError,[o["a"].EVENT.MESSAGE_RECEIVED]:this.onMessageReceived},this)}enable(){return new Promise((e,t)=>{this.bot.login({userID:this.name,userSig:window.genTestUserSig(this.name,Number(c),u).userSig}).then(()=>{console.log("登录成功"),this.bot.joinGroup({groupID:this.groupId}).then(t=>e(t.data)).catch(e=>t(e))}).catch(e=>{console.log("登录失败",e),t(e)})})}disable(){return this.bot.logout()}logout(){return this.bot.logout()}setAvatar(e){return this.bot.updateMyProfile({avatar:e})}onReadyStateUpdate({name:e}){console.log("[bot]"+e);const t=e===o["a"].EVENT.SDK_READY;t&&this.bot.updateMyProfile({nick:"bot"})}onSdkError(e){console.log(e.data)}onKickedOut(e){console.log("sdk kick reason "+e.data.type)}onMessageReceived({data:e}){e.forEach(e=>Object(s["a"])(this.bot,e))}}function h(e){return m[e]||(m[e]=new f(e)),m[e].enable()}function b(e){return m[e]?m[e].disable():new Promise(e=>e())}function v(e,t){return m[e]?m[e].setAvatar(t):new Promise((e,t)=>t())}function y(){Object.values(m).forEach(e=>{e.logout()})}},5406:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("8bbf"),s=r.n(o),n=r("5f72"),i=r.n(n),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"avatar",class:"circle"===e.shape?"shape-circle":""},[r("img",{attrs:{src:e.avatarSrc}})])},c=[],u=r("f6e3"),l=r.n(u),d={props:{src:String,type:{type:String,default:"C2C"},shape:{type:String,default:"circle"}},computed:{avatarSrc:function(){let e=this.src;return/^(https:|http:|\/\/)/.test(e)?e:this.defaultSrc},defaultSrc:function(){switch(this.type){case"C2C":return"https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png";case"GROUP":return"https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-3.png";case this.TIM.TYPES.CONV_SYSTEM:return l.a;default:return"https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-1.png"}}}},p=d,g=(r("691c"),r("2877")),m=Object(g["a"])(p,a,c,!1,null,"bd1b31fe",null),f=m.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"container",attrs:{"element-loading-text":"正在拼命初始化……首次加载需要更多资源，请耐心等待","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e.isLogin?r("div",{staticClass:"chat-wrapper"},[r("Main")],1):r("div",{attrs:{id:"wrapper"}},[r("login",{key:e.initialAppid,attrs:{"initial-appid":e.initialAppid,"initial-secret":e.initialSecret},on:{submit:e.doLogin}}),e._m(0)],1)])},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"meta"},[e._v("意见/建议可移步 "),r("a",{attrs:{href:"https://github.com/paotuan/paotuan/issues",target:"_blank"}},[e._v("Github")]),e._v("，或加交流群：115699014")])}],v=(r("ac6a"),r("a481"),r("4917"),r("28a5"),r("bd86")),y=r("5880"),I=r.n(y),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-wrapper"},[r("img",{staticClass:"logo",attrs:{src:e.logo}}),r("el-form",{ref:"login",staticStyle:{width:"100%"},attrs:{"label-position":"left","label-width":"80px",rules:e.rules,model:e.form},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}}},[r("el-form-item",{attrs:{label:"平台ID",prop:"appid"}},[r("el-input",{attrs:{placeholder:"请输入平台ID",type:"text",clearable:""},model:{value:e.form.appid,callback:function(t){e.$set(e.form,"appid",t)},expression:"form.appid"}})],1),r("el-form-item",{attrs:{label:"Secret",prop:"secret"}},[r("el-input",{attrs:{placeholder:"请输入secret","show-password":""},model:{value:e.form.secret,callback:function(t){e.$set(e.form,"secret",t)},expression:"form.secret"}})],1),r("el-form-item",{attrs:{label:"QQ",prop:"userID"}},[r("el-input",{attrs:{placeholder:"请输入QQ号，请勿冒用",type:"text",clearable:""},model:{value:e.form.userID,callback:function(t){e.$set(e.form,"userID",t)},expression:"form.userID"}})],1)],1),r("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[r("el-checkbox",{model:{value:e.form.isRememberUin,callback:function(t){e.$set(e.form,"isRememberUin",t)},expression:"form.isRememberUin"}},[e._v("记住帐号")]),r("el-checkbox",{model:{value:e.form.isAutoLogin,callback:function(t){e.$set(e.form,"isAutoLogin",t)},expression:"form.isAutoLogin"}},[e._v("自动登录")])],1),r("el-button",{staticStyle:{width:"100%","margin-top":"6px"},attrs:{plain:"",type:"info"},on:{click:e.submit}},[e._v("登录\n  ")]),r("a",{attrs:{href:"https://docs.qq.com/doc/DSW1TdXhhSmdpamRX",target:"_blank"}},[e._v("使用指南与常见问题")]),r("el-popover",{attrs:{trigger:"click"}},[r("img",{attrs:{src:"https://s4.ax1x.com/2022/01/09/7APghQ.jpg",crossorigin:"anonymous"}}),r("a",{attrs:{slot:"reference",href:"#"},slot:"reference"},[e._v("小程序版本")])])],1)},E=[],S=r("a1d8"),C=r.n(S),D=r("0304"),O=r.n(D),M=r("be65"),P=r.n(M),w={name:"Login",components:{ElForm:n["Form"],ElFormItem:n["FormItem"],ElPopover:n["Popover"]},props:["initialAppid","initialSecret"],data(){const e=(e,t,r)=>{/^[0-9]{5,15}$/.test(t)?r():r(new Error("格式不正确"))};return{form:{appid:this.initialAppid,secret:this.initialSecret,userID:P.a.get("uin"),isRememberUin:!!P.a.get("uin"),isAutoLogin:"true"===P.a.get("autologin")},rules:{userID:[{required:!0,message:"请输入 QQ",trigger:"blur"},{validator:e,trigger:"blur"}],appid:[{required:!0,message:"请输入 APPID",trigger:"blur"}],secret:[{required:!0,message:"请输入 secret",trigger:"blur"}]},logo:C.a,minacode:O.a}},methods:{submit(){this.$refs["login"].validate(e=>{e&&this.$emit("submit",this.form)})}}},A=w,L=(r("816d"),Object(g["a"])(A,T,E,!1,null,"d48df26a",null)),N=L.exports,k=r("cf45"),R=r("41a3"),j=r("b519");function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={title:"paotuan",data(){return{loading:!0,initialAppid:"",initialSecret:"",invitedGroup:""}},components:{Login:N,Main:()=>r.e("chunk-4a2c813c").then(r.bind(null,"8d5d"))},computed:G({},Object(y["mapState"])({currentUserProfile:e=>e.user.currentUserProfile,currentConversation:e=>e.conversation.currentConversation,videoCall:e=>e.conversation.videoCall,audioCall:e=>e.conversation.audioCall,isLogin:e=>e.user.isLogin,isSDKReady:e=>e.user.isSDKReady,isBusy:e=>e.video.isBusy,userID:e=>e.user.userID,userSig:e=>e.user.userSig,sdkAppID:e=>e.user.sdkAppID})),mounted(){let e=new URLSearchParams(location.hash.startsWith("#/")?location.hash.substr(2):""),t=e.get("s")||P.a.get("s");this.invitedGroup=e.get("g")||"";let r=P.a.get("uin"),o="true"===P.a.get("autologin");try{[this.initialAppid,this.initialSecret]=atob(t).split("/").map((e,t)=>0===t?e:e.split("").reverse().join(""))}catch(s){console.log("invalid sig",t)}o&&this.initialAppid&&this.initialSecret&&r?this.doLogin({appid:this.initialAppid,secret:this.initialSecret,userID:r}):this.loading=!1,location.hash=""},methods:{initListener(){Object(R["g"])(this.tim,{[this.TIM.EVENT.SDK_READY]:this.onReadyStateUpdate,[this.TIM.EVENT.SDK_NOT_READY]:this.onReadyStateUpdate,[this.TIM.EVENT.KICKED_OUT]:this.onKickOut,[this.TIM.EVENT.ERROR]:this.onError,[this.TIM.EVENT.MESSAGE_RECEIVED]:this.onReceiveMessage,[this.TIM.EVENT.CONVERSATION_LIST_UPDATED]:this.onUpdateConversationList,[this.TIM.EVENT.GROUP_LIST_UPDATED]:this.onUpdateGroupList,[this.TIM.EVENT.NET_STATE_CHANGE]:this.onNetStateChange,[this.TIM.EVENT.MESSAGE_READ_BY_PEER]:this.onMessageReadByPeer},this)},onReceiveMessage({data:e}){this.handleAt(e),this.handleAddGroupTip(e),this.handleQuitGroupTip(e),this.$store.commit("pushCurrentMessageList",e),this.$store.dispatch("insertGameLogs",e),this.$store.dispatch("handleKPNote",e)},onError({data:e}){"Network Error"!==e.message&&this.$store.commit("showMessage",{message:e.message,type:"error"})},onMessageReadByPeer(){},onReadyStateUpdate({name:e}){const t=e===this.TIM.EVENT.SDK_READY;this.$store.commit("toggleIsSDKReady",t),t&&(this.tim.getMyProfile().then(({data:e})=>{this.$store.commit("updateCurrentUserProfile",e)}).catch(e=>{this.$store.commit("showMessage",{type:"error",message:e.message})}),this.$store.dispatch("getBlacklist"),this.invitedGroup?this.tim.joinGroup({groupID:"@TGS#"+this.invitedGroup}).then(()=>{this.$store.commit("showMessage",{type:"success",message:"邀请入群成功"})}).catch(e=>{console.log("invited failed",e),this.$store.commit("showMessage",{type:"error",message:"邀请入群失败"})}).finally(()=>{this.loading=!1}):this.loading=!1)},kickedOutReason(e){switch(e){case this.TIM.TYPES.KICKED_OUT_MULT_ACCOUNT:return"由于多实例登录";case this.TIM.TYPES.KICKED_OUT_MULT_DEVICE:return"由于多设备登录";case this.TIM.TYPES.KICKED_OUT_USERSIG_EXPIRED:return"由于 userSig 过期";default:return""}},checkoutNetState(e){switch(e){case this.TIM.TYPES.NET_STATE_CONNECTED:return{message:"已接入网络",type:"success"};case this.TIM.TYPES.NET_STATE_CONNECTING:return{message:"当前网络不稳定",type:"warning"};case this.TIM.TYPES.NET_STATE_DISCONNECTED:return{message:"当前网络不可用",type:"error"};default:return""}},onNetStateChange(e){this.$store.commit("showMessage",this.checkoutNetState(e.data.state))},onKickOut(e){this.$store.commit("showMessage",{message:this.kickedOutReason(e.data.type)+"被踢出，请重新登录。",type:"error"}),this.$store.commit("reset"),Object(R["f"])()},onUpdateConversationList(e){this.$store.commit("updateConversationList",e.data)},onUpdateGroupList(e){this.$store.commit("updateGroupList",e.data)},onReceiveGroupSystemNotice(e){const t=4===e.data.type,r="GROUP"+e.data.message.payload.groupProfile.groupID===this.currentConversation.conversationID;t&&r&&this.$store.commit("resetCurrentConversation"),Object(n["Notification"])({title:"新系统通知",message:Object(k["a"])(e.data.message),duration:3e3,onClick:()=>{const e="@TIM#SYSTEM";this.$store.dispatch("checkoutConversation",e)}})},handleAt(e){const t=e.filter(e=>e.type===this.TIM.TYPES.MSG_TEXT&&e.payload.text.includes("@"));for(let r=0;r<t.length;r++){const e=t[r],o=e.payload.text.match(/@\w+/g);o&&(o.includes("@"+this.currentUserProfile.userID)&&(this.$store.getters.hidden&&this.notifyMe(e),Object(n["Notification"])({title:`有人在群${e.conversationID.slice(5)}提到了你`,message:e.payload.text,duration:3e3}),this.$bus.$emit("new-messsage-at-me",{data:{conversationID:e.conversationID}})))}},selectConversation(e){e!==this.currentConversation.conversationID&&this.$store.dispatch("checkoutConversation",e)},notifyMe(e){"Notification"in window&&("granted"===window.Notification.permission?this.handleNotify(e):"denied"!==window.Notification.permission&&window.Notification.requestPermission().then(t=>{"granted"===t&&this.handleNotify(e)}))},handleNotify(e){const t=new window.Notification("有人提到了你",{icon:"https://webim-1252463788.file.myqcloud.com/demo/img/logo.dc3be0d4.png",body:e.payload.text});t.onclick=()=>{window.focus(),this.$store.dispatch("checkoutConversation",e.conversationID),t.close()}},handleAddGroupTip(e){const t=e.filter(e=>this.currentConversation.conversationID===e.conversationID&&e.type===this.TIM.TYPES.MSG_GRP_TIP&&e.payload.operationType===this.TIM.TYPES.GRP_TIP_MBR_JOIN);t.length>0&&this.$store.dispatch("getGroupMemberList",this.currentConversation.conversationID.replace("GROUP",""))},handleQuitGroupTip(e){const t=e.filter(e=>this.currentConversation.conversationID===e.conversationID&&e.type===this.TIM.TYPES.MSG_GRP_TIP&&(e.payload.operationType===this.TIM.TYPES.GRP_TIP_MBR_QUIT||e.payload.operationType===this.TIM.TYPES.GRP_TIP_MBR_KICKED_OUT));t.length>0&&t.forEach(e=>{(Array.isArray(e.payload.userIDList)||e.payload.userIDList.length>0)&&this.$store.commit("deleteGroupMemberList",e.payload.userIDList)})},async doLogin({appid:e,secret:t,userID:r,isRememberUin:o=!0,isAutoLogin:s=!0}){const n=Number(e);if(n<=0)return void this.$store.commit("showMessage",{message:"登录失败：参数不合法",type:"error"});this.loading=!0,await Object(j["b"])(),Object(R["e"])(e,t),this.initListener();const i=window.genTestUserSig(r,n,t).userSig;try{await this.tim.login({userID:r,userSig:i}),this.$store.commit("toggleIsLogin",!0),this.$store.commit("startComputeCurrent"),this.$store.commit({type:"GET_USER_INFO",userID:r,userSig:i,sdkAppID:e}),this.$store.commit("showMessage",{type:"success",message:"登录成功"}),P.a.set("s",btoa(e+"/"+t.split("").reverse().join("")),{expires:7}),P.a.set("autologin",s),o?P.a.set("uin",r,{expires:7}):P.a.remove("uin")}catch(a){this.loading=!1,this.$store.commit("showMessage",{message:"登录失败："+a.message,type:"error"})}}}},_=x,$=(r("37be"),r("f849"),Object(g["a"])(_,h,b,!1,null,"fe0872b6",null)),K=$.exports,Y=r("ed08");const B={state:{currentConversation:{},currentMessageList:[],nextReqMessageID:"",isCompleted:!1,conversationList:[],callingInfo:{memberList:[],type:"C2C"},audioCall:!1},getters:{toAccount:e=>{if(!e.currentConversation||!e.currentConversation.conversationID)return"";switch(e.currentConversation.type){case"C2C":return e.currentConversation.conversationID.replace("C2C","");case"GROUP":return e.currentConversation.conversationID.replace("GROUP","");default:return e.currentConversation.conversationID}},currentConversationType:e=>e.currentConversation&&e.currentConversation.type?e.currentConversation.type:"",totalUnreadCount:e=>{const t=e.conversationList.reduce((t,r)=>ae.getters.hidden||e.currentConversation.conversationID!==r.conversationID?t+r.unreadCount:t,0);return Object(Y["b"])(t),t},imgUrlList:e=>e.currentMessageList.filter(e=>e.type===j["a"].TYPES.MSG_IMAGE&&!e.isRevoked).map(e=>e.payload.imageInfoArray[0].url)},mutations:{setCallingList(e,t){e.callingInfo.memberList=t.memberList,e.callingInfo.type=t.type},showAudioCall(e,t){e.audioCall=t},updateCurrentConversation(e,t){e.currentConversation=t,e.currentMessageList=[],e.nextReqMessageID="",e.isCompleted=!1},updateConversationList(e,t){e.conversationList=t},resetCurrentConversation(e){e.currentConversation={}},pushCurrentMessageList(e,t){if(e.currentConversation.conversationID)if(Array.isArray(t)){const r=t.filter(t=>t.conversationID===e.currentConversation.conversationID);e.currentMessageList=[...e.currentMessageList,...r]}else t.conversationID===e.currentConversation.conversationID&&(e.currentMessageList=[...e.currentMessageList,t])},removeMessage(e,t){const r=e.currentMessageList.findIndex(({ID:e})=>e===t.ID);r>=0&&e.currentMessageList.splice(r,1)},reset(e){Object.assign(e,{currentConversation:{},currentMessageList:[],nextReqMessageID:"",isCompleted:!1,conversationList:[]})}},actions:{getMessageList(e,t){if(e.state.isCompleted)return void e.commit("showMessage",{message:"已经没有更多的历史消息了哦",type:"info"});const{nextReqMessageID:r,currentMessageList:o}=e.state;R["a"].getMessageList({conversationID:t,nextReqMessageID:r,count:15}).then(t=>{e.state.nextReqMessageID=t.data.nextReqMessageID,e.state.isCompleted=t.data.isCompleted,e.state.currentMessageList=[...t.data.messageList,...o]})},checkoutConversation(e,t){if(e.commit("resetCurrentMemberList"),e.state.currentConversation.conversationID){const t=e.state.currentConversation.conversationID;R["a"].setMessageRead({conversationID:t})}return R["a"].setMessageRead({conversationID:t}),R["a"].getConversationProfile(t).then(({data:r})=>(e.commit("updateCurrentConversation",r.conversation),e.dispatch("getMessageList",t),r.conversation.type===j["a"].TYPES.CONV_GROUP?(e.dispatch("initGame",r.conversation.groupProfile.groupID),e.dispatch("getGroupMemberList",r.conversation.groupProfile.groupID)):Promise.resolve()))}}};var V=B;const H={state:{groupList:[],currentMemberList:[],createGroupModelVisible:!1},getters:{hasGroupList:e=>e.groupList.length>0},mutations:{updateGroupList(e,t){e.groupList=t},updateCreateGroupModelVisible(e,t){e.createGroupModelVisible=t},updateCurrentMemberList(e,t){e.currentMemberList=t},deleteGroupMemeber(e,t){e.currentMemberList=e.currentMemberList.filter(e=>e.userID!==t)},deleteGroupMemberList(e,t){e.currentMemberList=e.currentMemberList.filter(e=>!t.includes(e.userID))},resetCurrentMemberList(e){e.currentMemberList=[]},reset(e){Object.assign(e,{groupList:[],currentMemberList:[],createGroupModelVisible:!1})}},actions:{updateGroupList(e,t){e.commit("updateGroupList",t)},getGroupMemberList(e,t){return R["a"].getGroupMemberList({groupID:t,offset:0,count:30}).then(t=>(e.commit("updateCurrentMemberList",t.data.memberList),t))}}};var q=H;const Q={state:{currentUserProfile:{},isLogin:!1,isSDKReady:!1,userID:0,userSig:"",sdkAppID:0},mutations:{updateCurrentUserProfile(e,t){e.currentUserProfile=t},toggleIsLogin(e,t){e.isLogin="undefined"===typeof t?!e.isLogin:t},toggleIsSDKReady(e,t){e.isSDKReady="undefined"===typeof t?!e.isSDKReady:t},reset(e){Object.assign(e,{currentUserProfile:{},isLogin:!1,isSDKReady:!1})},GET_USER_INFO(e,t){e.userID=t.userID,e.userSig=t.userSig,e.sdkAppID=t.sdkAppID}},actions:{logout(e){e.rootState.conversation.currentConversation.conversationID&&R["a"].setMessageRead({conversationID:e.rootState.conversation.currentConversation.conversationID}),R["a"].logout().then(()=>{e.commit("stopComputeCurrent"),e.commit("reset")})}}};var F=Q;const z={state:{friendList:[],createGroupModelVisible:!1},mutations:{upadteFriendList(e,t){e.friendList=t},reset(e){Object.assign(e,{friendList:[],createGroupModelVisible:!1})}}};var J=z;const W={state:{blacklist:[]},mutations:{updateBlacklist(e,t){e.blacklist=t},removeFromBlacklist(e,t){e.blacklist=e.blacklist.filter(e=>e.userID!==t)},reset(e){Object.assign(e,{blacklist:[]})}},actions:{getBlacklist(e){R["a"].getBlacklist().then(({data:t})=>{t.length>0&&R["a"].getUserProfile({userIDList:t}).then(({data:t})=>{e.commit("updateBlacklist",t)})})}}};var Z=W;r("6b54");function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const te={currentTab:"group",botEnabled:!1,logEnabled:!1,logs:[],bgm:{},notes:[],noteUnread:!1,cards:{},openedCards:["group","note","log"]},re=e=>(ne.state.list[e]||s.a.set(ne.state.list,e,JSON.parse(JSON.stringify(te))),ne.state.list[e]),oe=(e,t,r)=>{localStorage.setItem(`paotuan${e}-${t}`,JSON.stringify(r))},se=(e,t)=>{const r=localStorage.getItem(`paotuan${e}-${t}`);return r?JSON.parse(r):[]},ne={state:{list:{}},mutations:{initGame(e,t){s.a.set(e.list,t,JSON.parse(JSON.stringify(te))),e.list[t].notes=se("note",t),e.list[t].logs=se("log",t),e.list[t].cards=se("card",t)},toggleBotEnabled(e,{groupId:t,enabled:r}){re(t).botEnabled=r},toggleLogEnabled(e,{groupId:t,enabled:r}){re(t).logEnabled=r},insertLog(e,{groupId:t,log:r}){re(t).logs.push(r),oe("log",t,re(t).logs)},updateLogs(e,{groupId:t,logs:r}){re(t).logs=r,oe("log",t,r)},setGameBgm(e,{groupId:t,bgm:r}){re(t).bgm=r},addNote(e,{groupId:t,note:r}){re(t).notes.push(r),oe("note",t,re(t).notes)},updateNotes(e,{groupId:t,notes:r}){re(t).notes=r,oe("note",t,r)},setNoteUnread(e,{groupId:t,unread:r}){re(t).noteUnread=r},setCurrentTab(e,{groupId:t,tab:r}){re(t).currentTab=r},setUserCard(e,{groupId:t,userId:r,card:o}){s.a.set(re(t).cards,"o"+r,o),oe("card",t,ee(ee({},re(t).cards),{},{["o"+r]:o}))},setOpenedUserCards(e,{groupId:t,list:r}){re(t).openedCards=r},reset(e){Object.assign(e,{list:{}})}},actions:{initGame(e,t){e.state.list[t]||e.commit("initGame",t)},toggleBotEnabled(e,{groupId:t,enabled:r}){return new Promise((o,s)=>{(r?R["c"]:R["b"])(t).then(()=>{e.commit("toggleBotEnabled",{groupId:t,enabled:r}),o()}).catch(n=>{n.toString().includes("被邀请加入的用户已经是群成员")?(console.log("[bot.switch]already in group"),e.commit("toggleBotEnabled",{groupId:t,enabled:r}),o()):s(n)})})},insertGameLogs(e,t){t.filter(t=>t.conversationType===j["a"].TYPES.CONV_GROUP&&t.type===j["a"].TYPES.MSG_TEXT&&e.state.list[t.to]&&e.state.list[t.to].logEnabled).forEach(t=>{const r={id:t.ID,from:t.from,nick:t.nameCard||t.nick,time:t.time,content:t.payload.text};r.content.startsWith(".")||r.content.startsWith("。")||e.commit("insertLog",{groupId:t.to,log:r})})},handleKPNote(e,t){t.filter(e=>e.conversationType===j["a"].TYPES.CONV_GROUP&&e.priority===j["a"].TYPES.MSG_PRIORITY_HIGH).forEach(t=>{if(t.type===j["a"].TYPES.MSG_CUSTOM){const r=JSON.parse(t.payload.data);"bgm"===r.mtype?(e.commit("setGameBgm",{groupId:t.to,bgm:r.mdata}),e.dispatch("handleNoteUnread",t.to)):"card"===r.mtype&&e.commit("setUserCard",{groupId:t.to,userId:r.mdata.userId,card:r.mdata.card})}else t.type===j["a"].TYPES.MSG_TEXT?(e.commit("addNote",{groupId:t.to,note:{id:t.ID,type:t.type,payload:t.payload.text}}),e.dispatch("handleNoteUnread",t.to)):t.type===j["a"].TYPES.MSG_IMAGE&&(e.commit("addNote",{groupId:t.to,note:{id:t.ID,type:t.type,payload:t.payload.imageInfoArray[0].imageUrl}}),e.dispatch("handleNoteUnread",t.to))})},handleNoteUnread(e,t){"note"!==re(t).currentTab&&e.commit("setNoteUnread",{groupId:t,unread:!0})},openUserCard(e,{groupId:t,userId:r}){const o=re(t);return o.cards["o"+r]?(o.openedCards.includes(r)||e.commit("setOpenedUserCards",{groupId:t,list:[...o.openedCards,r]}),e.commit("setCurrentTab",{groupId:t,tab:r}),new Promise(e=>e())):new Promise((e,t)=>t())},closeUserCard(e,{groupId:t,userId:r}){const o=re(t);e.commit("setOpenedUserCards",{groupId:t,list:o.openedCards.filter(e=>e!==r)}),o.currentTab===r&&e.commit("setCurrentTab",{groupId:t,tab:"group"})}}};var ie=ne;s.a.use(I.a);var ae=new I.a.Store({state:{current:Date.now(),intervalID:0,message:void 0},getters:{hidden(e){e.current;return"function"!==typeof document.hasFocus?document.hidden:!document.hasFocus()}},mutations:{startComputeCurrent(e){e.intervalID=setInterval(()=>{e.current=Date.now()},500)},stopComputeCurrent(e){clearInterval(e.intervalID),e.intervalID=0},showMessage(e,t){e.message&&e.message.close(),e.message=Object(n["Message"])({message:t.message,type:t.type||"success",duration:t.duration||2e3,offset:40})}},modules:{conversation:V,group:q,friend:J,blacklist:Z,user:F,game:ie}}),ce=r("018c"),ue=r.n(ce);r("ed2c"),r("8e84");s.a.prototype.$bus=new s.a,s.a.prototype.tim=R["a"],s.a.prototype.TIM=j["a"],s.a.prototype.$store=ae,s.a.use(i.a),s.a.use(ue.a),s.a.component("avatar",f),new s.a({render:e=>e(K)}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5f72":function(e,t){e.exports=ELEMENT},"691c":function(e,t,r){"use strict";r("5406")},"816d":function(e,t,r){"use strict";r("b862")},"8bbf":function(e,t){e.exports=Vue},"8e84":function(e,t,r){},a1d8:function(e,t,r){e.exports=r.p+"img/logo.7ea2a7d2.png"},a352:function(e,t){e.exports=Sortable},b519:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));r("ac6a");var o=r("ed08");let s=null,n=new Proxy({},{get(e,t){if(s)return s[t];console.error("TIM SDK not loaded!")}});t["a"]=n;const i=new Promise(e=>{window.TIMC?e():Object(o["a"])("./tim-js.js",()=>{s=window.TIMC(),e()})}),a=new Promise(e=>{window.LibGenerateTestUserSig?e():Object(o["a"])("./libsig.min.js",()=>{window.genTestUserSig=(e,t,r)=>{const o=604800,s=new window.LibGenerateTestUserSig(t,r,o),n=s.genTestUserSig(e);return{SDKAppID:t,userSig:n}},e()})});function c(){return Promise.all([i,a])}},b862:function(e,t,r){},bd2d:function(e,t){e.exports=math},be65:function(e,t){e.exports=Cookies},cf45:function(e,t,r){"use strict";function o(e){const t=e.payload.groupProfile.name||e.payload.groupProfile.groupID;switch(e.payload.operationType){case 1:return`${e.payload.operatorID} 申请加入群组：${t}`;case 2:return"成功加入群组："+t;case 3:return`申请加入群组：${t}被拒绝`;case 4:return`你被管理员${e.payload.operatorID}踢出群组：${t}`;case 5:return`群：${t} 已被${e.payload.operatorID}解散`;case 6:return`${e.payload.operatorID}创建群：${t}`;case 7:return`${e.payload.operatorID}邀请你加群：${t}`;case 8:return"你退出群组："+t;case 9:return`你被${e.payload.operatorID}设置为群：${t}的管理员`;case 10:return`你被${e.payload.operatorID}撤销群：${t}的管理员身份`;case 255:return"自定义群系统通知: "+e.payload.userDefinedField}}r.d(t,"a",(function(){return o}))},daa3:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return p}));r("a481"),r("28a5"),r("ac6a");var o=r("b519"),s=r("8bbf"),n=r.n(s),i=r("ed08");let a=null;const c=new Promise(e=>{window.Random?e():Object(i["a"])("./random-js.umd.min.js",e)}),u=new Promise(e=>{window.math?e():Object(i["a"])("https://cdn.bootcdn.net/ajax/libs/mathjs/10.0.0/math.min.js",e)}),l=Promise.all([c,u]).then(()=>r.e("chunk-2d0d365a").then(r.t.bind(null,"5d1f",7)).then(({DiceRoll:e})=>a=e));function d(){return l}function p(e,t){if(t.conversationType===o["a"].TYPES.CONV_GROUP){const o=t.payload.text.trim();if(o.startsWith(".")||o.startsWith("。"))try{const[r,s]=o.substr(1).split(" "),n=new a(r),i=m(t.to,t.from,r,s,n.total);g(e,t.to,`${t.nameCard||t.nick||t.from} 🎲 ${s||""} ${n.output} ${i}`)}catch(r){}}}function g(e,t,r){let s=e.createTextMessage({to:t,conversationType:o["a"].TYPES.CONV_GROUP,payload:{text:r}});e.sendMessage(s)}function m(e,t,r,o,s){if(!o)return"";const i=n.a.prototype.$store.state.game.list[e];if(!i)return"";const a=i.cards["o"+t];if(!a)return"";if("理智"===o||"sc"===o||"SC"===o)return s<=a.basic.san?`≤ ${a.basic.san} 成功`:`> ${a.basic.san} 失败`;if("幸运"===o)return s<=a.basic.luck?`≤ ${a.basic.luck} 成功`:`> ${a.basic.luck} 失败`;if("灵感"===o)return s<=a.props["智力"]?`≤ ${a.props["智力"]} 成功`:`> ${a.props["智力"]} 失败`;const c=o.indexOf("困难")>=0,u=o.indexOf("极难")>=0||o.indexOf("极限")>=0;o=o.replace(/(困难|极难|极限)/g,""),"侦查"===o&&(o="侦察");let l=a.props[o]||a.skills[o];return l?1===s?"大成功":s>95?"大失败":(l=u?Math.floor(l/5):c?Math.floor(l/2):l,s<=l?`≤ ${l} 成功`:`> ${l} 失败`):""}},ed08:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return s}));r("a481"),r("386d");function o(e){const t=e>0;t?document.title.search(/\((.*?)\)/)>=0?document.title=document.title.replace(/\((.*?)\)/,`(${e>99?"99+":e})`):document.title=`(${e})${document.title}`:document.title=document.title.replace(/\((.*?)\)/,"")}function s(e,t){const r=document.createElement("script");r.addEventListener("load",t),r.src=e,e.startsWith("http")&&(r.crossOrigin="anonymous");const o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(r,o)}},ed2c:function(e,t,r){},f6e3:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACpCAMAAAHy0MbyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJYUExURQrBYAvBYRPDZhzGbCXIcSrJdSHHbxjFaQ7CYwzBYSnJdEzSi3bcpqLnw87z3+X47uj58Ov68uz68+n58ef579/36rzu05Djt2TYmz7OghnFai/KeIHfrcPw2OP47fz+/f////P8+Nb15K7ry1vVlBrFaw7CYlDTjqrqyPP899j15YrhsxDCZFfUksDv1vr+/C7KdyzKdq3qynLbo2HXmf7//rTszhTDZo/jtk7SjCjJc7nt0fX9+THLes3y3/3//oXgsA3CYjTMe5HjuA/CY8/z4IDfrRbEaLft0GbYnO779Pb9+cLv1x3GbNL04ub575zmv5flvEDPgzDLeaXoxIzitPD79TXMfB7GbeL47F7WlhLDZavqyfj9+03SjN326YvitEbQh3jdqO/79CLHcLHrzE/TjSPHcOT47vH79rHrzUvSivf9+vn++8zy3lXUkdf15SDHblnVk+D36ybIclrVlGfZnHjdpznNf1HTjhfEadv26I3itUfRiMfx26Pow0HPhJPkuZjlvMHv1zjNfkTQhWnZnhvFa8ry3TLLepXkurbt0Gvan4LfrknRiV/Wl9X05HHbo7/v1Z3mv8jx24jhskjRiTrNf8nx3Mvy3WLXmUfQh0XQhu3681LTj9n15ljVk2XYm6/ry+H37Or68bXsz2PYmjfMfW3aoLvu0zbMfTPLe77u1S7KeErRirDrzNr253fcpkPPhSvJdafpxr3u1N736n/frPL89o7itW/boWDXl3ndqJvmvvv+/Xveqsbx2tz26fT8+BHDZD3OgYTgr4fhsQAAAKRC35oAAADIdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9ppxxwAAAAlwSFlzAAAXEQAAFxEByibzPwAABVpJREFUaEPt2zuP2koUB3BaN1dCLikwols5fVb5Cim3QaxEtNomDdJKaHWbbaBASPcTUKVBShv6NNH6e2Uefxs/5u0H7NX5NXiOzwwjY+yxPR4N422MhYqEw/KFiDbiZ3UY0V7D1ThizDMiAmIcIkIURaycxlGEQCFLRvUvlDJ8/j+MP2OhTGymxoqxCDc2ioz6/mgo5hB1C39BtBZGkEFAQIiLERKiKN2xtc0ffpSkD1MsVhzxSZxgoydLlA2QKfyLmA7S4Buiaitk5RBWQ04BYTXkFBBWQ04BYTXkFA6IqyCl5AvWNGB9DVbWYW3NGWvVZGOZsb8X8i+MAiHe5rOFeYfMbcSuliQzlA3WSGUQ0fqGPAExHWRJvxFUwzk2h6gacnKIqiEnt0VYCTm5FcJKyMlVzrB1yMl9tFzTBn5ASgFxFWRc6I+YSCjDmoZGDzisq8PaKuWQR52qaTi/BKjB2jo28mZjb7k2TkRRLGv9lCcgTUdrkiQbpbZTVk5003VYH2X3lo4SQkiAN3EokhYbBNuqDFWkN6xqoTRWKmt5d2SJZhSQESQfAyohJwRa0ECSvzka0LhHmrcZGtBYI80b6usYR1kG7ARuRO1KH63d0D8GausFdfiAykbI9fAdNS0+Id2RU2cl1HCivHrQ8bgPihpuvqOSi/RxFRd4XSwyU1bEIndKUcVbym8fYplhBeNlswfWVIJuTXh35WIH7lhjvEHhAcEuRO9/ZKOrPSKEEEIIIVey+e+f8Wy8e3V4yuxuWb4AV02QCFO/rH9CvB3FLRPlbB5P6lsmWBnuBQ3VYXUwNNPg8NTPhA+o1Vr9eKb7UUgJUnt8WDFHTgDDXTkGSQHM97ncHt6ooAGN4NtctstZZHnbo74O0rxpHsgVkObtHvV1Qq+4be2G3hCndiVqV6J2pb7afUJ9HbcpYk316Xx15smAeqiuhzxPW9TWq8xQdmW9u+53J7VQ3Dc0CJgCa98KHJLd2c5tOaQ7QzUr46yoJpeNK3ndY85QyYXPcApV3KCOA9cfTZqglp1fu+7/utT9Z9NNoFJLj2s8nuBYZSxx1dKd919OTKxixLOiNC+OnnkJBdtUKzN+ALo8gub/byy2xVq6bMRKoR3WxekjllfsJw1+fl7H+pjEfHd65ztKV90did/q8hynw+lmomEIfi6mdEKr284nx02y7GlPU+4IIYQQQgghhBBisVxuNptOp4j0YpOt60/wF/MfN9nvHzt0UGH2OfTJUT9eTdMipPmt9Hhj2K4Vr6hwTYcFOuOiu3lUYZauWzZ31S3s90hD2F3vQKF4xdBudq3/3G90wFfoc+t2grYtN75Gf1/x5QEWaGJAL7YpBSah0w3C2SZWGI0HPzzoJ0+66GZ2rDuPV+tUWkyvDGKbvGOx7vbxn9UnfG+g1cDnirbdfUE7A6Hu9om62yfqbp+ou336YN1tMTjn4oFPwm5TR/U6m+flJOCKvSr8vZQA5ZlggQa8/jn7TMTU8ZpZ20ary7SLfMpiv9J2V2klsfuE3WBHfFcnMjTal32buwsKcfgbcQ463bRSfxeZ6Rpf0a2A9xtcTLo4fKn0soH3fAp6P/o4xfWw3+amPfzhetpzuR2+olv3fMp89+56HJ1F+4kCdpQTihVnuc/HB5TLDpOB75VJE9GjZKX6cow1Bx0xWkR4A+AB5ZIU58Gejq5hnnGUaxxCMdacnlC+EZP8qHwqvwyB/ZZF0xt7RSJdF4eN6Wl7PP7asoHmFNv2J5JuyVk3Wnu8yt/fKkq32Jwlq/tbflMmet/e/ZEdncZfj0Gvvw4s35ztXpkjhBBCCCGkrdHoLzv9X1u4OdoGAAAAAElFTkSuQmCC"},f849:function(e,t,r){"use strict";r("f955")},f955:function(e,t,r){}});