(this.webpackJsonpmy_youtube_test=this.webpackJsonpmy_youtube_test||[]).push([[0],{104:function(e,t,n){e.exports={logoContainer:"Header_logoContainer__1o1NC",navlink:"Header_navlink__2FvtX"}},105:function(e,t,n){e.exports={searchTitle:"SearchScreen_searchTitle__1D0RW"}},144:function(e,t,n){e.exports={viewsCount:"VideoPreviewItem_viewsCount__2prU_",videoLink:"VideoPreviewItem_videoLink__2JEpJ",channelLink:"VideoPreviewItem_channelLink__2tGt7"}},145:function(e,t,n){e.exports={itemTitle:"FavoritesList_itemTitle__CWd_f",editLink:"FavoritesList_editLink__17xZj",deleteLink:"FavoritesList_deleteLink__2ERs6"}},185:function(e){e.exports=JSON.parse('[{"username":"admin","password":"admin","id":1},{"username":"user","password":"user","id":2}]')},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),i=n.n(r),c=n(26),s=n(51),o=n(85),l=n(177),u=n(178),d=n(20),j="SET_IS_LOGGED_IN",b="SET_USER",h="SEARCH_VIDEOS_SUCCESS",O="SEARCH_VIDEOS_FAILURE",f="SEARCH_VIDEOS_STARTED",p="SET_SEARCH_QUERY",m="SET_FAVORITES",v="SET_SAVED_FAVORITES",x="DELETE_FAVORITE",y="EDIT_FAVORITE",g="SEARCH_VIDEOS_STATS_SUCCESS",S="SEARCH_VIDEOS_STATS_FAILURE",_="SEARCH_VIDEOS_STATS_STARTED",w="SRH_LOGOUT",I={videos:[],totalCount:0,isLoading:!1,query:"",listOfVideos:"",queryStatus:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),{},{queryStatus:"pending",isLoading:!0});case h:return Object(d.a)(Object(d.a)({},e),{},{totalCount:t.payload.pageInfo.totalResults,videos:t.payload.items.map((function(e){return{videoId:e.id.videoId,title:e.snippet.channelTitle,description:e.snippet.description,thumbnail:{width:e.snippet.thumbnails.medium.width,height:e.snippet.thumbnails.medium.height,thumbnail:e.snippet.thumbnails.medium.url}}})),listOfVideos:t.payload.items.map((function(e){return e.id.videoId})).join(","),queryStatus:"fulfilled",isLoading:!1});case p:return Object(d.a)(Object(d.a)({},e),{},{query:t.payload.query});case O:return Object(d.a)(Object(d.a)({},e),{},{queryStatus:"rejected",isLoading:!1});case _:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case S:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1});case w:return Object(d.a)(Object(d.a)({},e),I);case g:return Object(d.a)(Object(d.a)({},e),{},{videos:e.videos.map((function(e){var n;return e.viewCount=null===(n=t.payload.items.filter((function(t){return t.id===e.videoId}))[0])||void 0===n?void 0:n.statistics.viewCount,e}))});default:return e}},C={username:localStorage.getItem("authUser")||null,isLoggedIn:!!localStorage.getItem("authToken")},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:t.payload,username:""});case b:return Object(d.a)(Object(d.a)({},e),{},{username:t.payload,isLoggedIn:!0});default:return e}},L=n(91),E={favorites:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(d.a)(Object(d.a)({},e),{},{favorites:[].concat(Object(L.a)(e.favorites),[t.payload])});case v:return Object(d.a)(Object(d.a)({},e),{},{favorites:t.payload});case x:return Object(d.a)(Object(d.a)({},e),{},{favorites:e.favorites.filter((function(e){return e.id!==t.payload.id}))});case y:return Object(d.a)(Object(d.a)({},e),{},{favorites:e.favorites.map((function(e){return e.id===t.payload.id?t.payload:e}))});default:return e}},q=Object(o.combineReducers)({youtubeSearch:k,user:T,favorites:R}),N=Object(o.createStore)(q,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(u.a))),F=n(295),V=n(93),A=n(53),P=n(24),B=function(e){return{type:j,payload:e}},D=n(188),U=n(6),H=function(e){var t=e.width,n=void 0===t?88:t,a=e.height,r=void 0===a?88:a;return Object(U.jsxs)("svg",{width:n,height:r,viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(U.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M59.1488 43.5667L24.683 60.9559V79.399L59.1488 62.0098V43.5667Z",fill:"#1390E5"}),Object(U.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z",fill:"#1180CB"}),Object(U.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M59.1488 8.79071L24.683 26.1799V44.623L59.1488 27.2338V8.79071Z",fill:"#35A2EC"})]})},M=n(305),J=n(45),z=n.n(J),Z=n(71),W=n(153),G=n.n(W),K=G.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",key:"AIzaSyAOUR5aAwh25sij8yxZK-dTY2a4fHbDQjo",q:"",maxResults:12,order:"date",resultsPerPage:50}}),Q=function(){var e=Object(Z.a)(z.a.mark((function e(t){var n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("/search",{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(Z.a)(z.a.mark((function e(t){var n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://www.googleapis.com/youtube/v3/videos?key=".concat("AIzaSyAOUR5aAwh25sij8yxZK-dTY2a4fHbDQjo","&fields=items(snippet(title,channelTitle,publishedAt),id,statistics(viewCount))&part=snippet,statistics&id=").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e){return function(){var t=Object(Z.a)(z.a.mark((function t(n){var a;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n($()),t.prev=1,t.next=4,Q(e);case 4:return a=t.sent,t.abrupt("return",n(te(a)));case 8:t.prev=8,t.t0=t.catch(1),n(ee());case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},$=function(){return{type:f}},ee=function(e){return{type:O,payload:{err:e}}},te=function(e){return{type:h,payload:e}},ne=function(e){return{type:p,payload:e}},ae=function(){return{type:_}},re=function(e){return{type:S,payload:{err:e}}},ie=function(e){return{type:g,payload:e}},ce=n(104),se=n.n(ce),oe=function(){var e=Object(c.b)(),t=Object(P.g)().pathname,n=function(){localStorage.removeItem("authToken"),localStorage.removeItem("authUser"),e({type:w}),e(B(!1))};return Object(U.jsx)("div",{children:Object(U.jsxs)(V.a,{align:"middle",wrap:!1,children:[Object(U.jsx)(A.a,{flex:"none",children:Object(U.jsx)("div",{className:se.a.logoContainer,children:Object(U.jsx)(H,{width:44,height:44})})}),Object(U.jsx)(A.a,{flex:"auto",children:Object(U.jsxs)(M.a,{theme:"light",mode:"horizontal",selectedKeys:[t],children:[Object(U.jsx)(M.a.Item,{children:Object(U.jsx)(s.b,{className:se.a.navlink,to:"/",children:"\u041f\u043e\u0438\u0441\u043a"})},"/"),Object(U.jsx)(M.a.Item,{children:Object(U.jsx)(s.b,{className:se.a.navlink,to:"/favorites",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})},"/favorites")]})}),Object(U.jsx)(A.a,{flex:"none",children:Object(U.jsx)(M.a,{mode:"horizontal",style:{borderColor:"transparent"},children:Object(U.jsx)(M.a.Item,{children:Object(U.jsx)(s.b,{className:se.a.navlink,to:"/login",onClick:function(){return n()},children:"\u0412\u044b\u0439\u0442\u0438"})},"/login")})})]})})},le=n(297),ue=n(303),de=n(75),je=function(e){var t=e.onSubmit,n=e.initialValues;return Object(U.jsx)("div",{children:Object(U.jsxs)(le.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:n,layout:"vertical",onFinish:t,autoComplete:"off",children:[Object(U.jsx)(le.a.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"username",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f!"}],children:Object(U.jsx)(ue.a,{})}),Object(U.jsx)(le.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(U.jsx)(ue.a.Password,{})}),Object(U.jsx)(le.a.Item,{wrapperCol:{offset:8,span:16},children:Object(U.jsx)(de.a,{type:"primary",htmlType:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})})]})})},be=n(296),he=n(300),Oe=n(298),fe=n(144),pe=n.n(fe),me=new Intl.NumberFormat("ru"),ve=function(e){var t=e.video;return Object(U.jsx)("div",{children:Object(U.jsx)(be.a,{bodyStyle:{padding:0},style:{width:245,backgroundColor:"transparent",border:"none"},cover:Object(U.jsx)(he.a.Link,{href:"https://www.youtube.com/watch?v=".concat(t.videoId),target:"_blank",children:Object(U.jsx)(Oe.a,{preview:!1,width:245,height:138,fallback:"../../image/NoPreview.svg",src:t.thumbnail.thumbnail,alt:"Video preview"})}),children:Object(U.jsx)(be.a.Meta,{description:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(he.a.Paragraph,{ellipsis:{rows:2,expandable:!1},style:{marginBottom:8},children:Object(U.jsxs)(he.a.Link,{className:pe.a.videoLink,href:"https://www.youtube.com/watch?v=".concat(t.videoId),target:"_blank",children:[t.title," | ",t.description]})}),Object(U.jsxs)(he.a.Text,{className:pe.a.viewsCount,style:{color:"rgba(23, 23, 25, 0.3)"},children:[Object(U.jsx)(he.a.Link,{className:pe.a.channelLink,href:"https://www.youtube.com/channel/".concat(t.channelId),target:"_blank",style:{color:"rgba(23, 23, 25, 0.3)"},children:t.channelTitle}),Object(U.jsx)("br",{}),Number(t.viewCount)/1e3>=1?"".concat(me.format(Math.round(Number(t.viewCount)/1e3))," \u0442\u044b\u0441. \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"):"".concat(t.viewCount," \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432")]})]})})})})},xe=n(57),ye=n(102),ge=n(301),Se=function(e){var t=e.initialValues,n=e.onCancel,r=e.onSubmit,i=e.editMode,c=void 0!==i&&i,s=le.a.useForm(),o=Object(xe.a)(s,1)[0],l=Object(a.useMemo)((function(){return c?{cancelBtn:"\u041d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c",okBtn:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}:{cancelBtn:"\u041d\u0435 c\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c",okBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}}),[c]);return Object(a.useEffect)((function(){return o.resetFields()}),[o,t]),Object(U.jsxs)(le.a,{form:o,name:"saveForm",id:"saveForm",onFinish:r,initialValues:t,preserve:!1,children:[Object(U.jsx)(le.a.Item,{name:"query",label:"\u0417\u0430\u043f\u0440\u043e\u0441",children:Object(U.jsx)(ue.a,{disabled:!c})}),Object(U.jsx)(le.a.Item,{name:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",children:Object(U.jsx)(ue.a,{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})}),Object(U.jsx)(le.a.Item,{name:"order",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e",hasFeedback:!0,rules:[{required:!0,message:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e ..."}],children:Object(U.jsxs)(ye.a,{placeholder:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",children:[Object(U.jsx)(ye.a.Option,{value:"date",children:"\u0434\u0430\u0442\u0435"}),Object(U.jsx)(ye.a.Option,{value:"rating",children:"\u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"}),Object(U.jsx)(ye.a.Option,{value:"relevance",children:"\u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438"}),Object(U.jsx)(ye.a.Option,{value:"title",children:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"}),Object(U.jsx)(ye.a.Option,{value:"viewCount",children:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"})]})}),Object(U.jsx)(le.a.Item,{name:"resultsPerPage",children:Object(U.jsx)(ge.a,{min:12,max:50})}),Object(U.jsx)(de.a,{onClick:n,children:l.cancelBtn}),Object(U.jsx)(de.a,{htmlType:"submit",type:"primary",children:l.okBtn})]})},_e=n(306),we=n(307),Ie=n(308),ke=n(73),Ce=n.n(ke),Te=new Intl.NumberFormat("ru"),Le=function(){var e=Object(c.c)((function(e){return e.youtubeSearch})),t=Object(c.c)((function(e){return e.youtubeSearch.videos})),n=Object(a.useState)("list"),r=Object(xe.a)(n,2),i=r[0],s=r[1];return Object(U.jsxs)("div",{className:Ce.a.container,children:[Object(U.jsxs)(V.a,{className:Ce.a.searchInfoContainer,children:[Object(U.jsxs)(A.a,{flex:"auto",children:[Object(U.jsx)(he.a.Text,{className:Ce.a.queryTitle,children:"\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"}),Object(U.jsx)(he.a.Text,{className:Ce.a.queryTitle,strong:!0,children:"\xab".concat(e.query,"\xbb")}),Object(U.jsx)(he.a.Text,{className:Ce.a.videosCount,style:{color:"rgba(23, 23, 25, 0.3)"},children:Te.format(e.totalCount)})]}),Object(U.jsx)(A.a,{flex:"60px",children:Object(U.jsxs)(_e.b,{children:[Object(U.jsx)(we.a,{style:{fontSize:24,color:"list"===i?"rgb(0,0,0)":"rgba(23, 23, 25, 0.3)"},disabled:"list"===i,onClick:function(){return s("list")}}),Object(U.jsx)(Ie.a,{style:{fontSize:24,color:"cards"===i?"rgb(0,0,0)":"rgba(23, 23, 25, 0.3)"},disabled:"cards"===i,onClick:function(){return s("cards")}})]})})]}),Object(U.jsx)("ul",{className:"list"===i?Ce.a.videoList:Ce.a.videoCards,children:t.map((function(e){return Object(U.jsx)(ve,{style:{display:"flex",justifyContent:"spaceBetween"},video:e},e.thumbnail.thumbnail)}))})]})},Ee=n(302),Re=n(299),qe=n(103),Ne=function(e){return JSON.parse(localStorage.getItem(e))},Fe=n(145),Ve=n.n(Fe),Ae=Ee.a.confirm,Pe=function(e){var t=e.setIsModalVisible,n=e.setActiveFavorite,a=Object(c.b)(),r=Object(P.f)(),i=Object(c.c)((function(e){return e.favorites})).favorites,s=Object(c.c)((function(e){return e.user})),o=function(e,t){Ae({title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \xab".concat(e,"\xbb \u0438\u0437 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e\xbb?"),icon:Object(U.jsx)(qe.a,{}),okText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",onOk:function(){var e;a((e={id:t,username:s.username},{type:x,payload:e})),function(e,t){var n=Ne(e);n&&localStorage.setItem(e,JSON.stringify(n.filter((function(e){return e.id!==t}))))}(s.username,t)}})},l=function(e){Ae({title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 ?",content:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(he.a.Text,{style:{display:"block",marginBottom:5},children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: \xab",e.title,"\xbb"]}),Object(U.jsxs)(he.a.Text,{style:{display:"block",marginBottom:5},children:["\u0417\u0430\u043f\u0440\u043e\u0441: \xab",e.query,"\xbb"]}),Object(U.jsxs)(he.a.Text,{style:{display:"block",marginBottom:5},children:["\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430: \xab",{relevance:"\u041f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438",title:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",date:"\u041f\u043e \u0434\u0430\u0442\u0435",viewCount:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432",rating:"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"}[e.order],"\xbb"]}),Object(U.jsxs)(he.a.Text,{style:{display:"block"},children:["Max \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0434\u0435\u043e: \xab",e.resultsPerPage,"\xbb"]})]}),okText:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c",cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",icon:Object(U.jsx)(qe.a,{}),onOk:function(){!function(e){var t=i.filter((function(t){return t.id===e}))[0];a(ne({query:t.query})),a(X({q:t.query,order:t.order?t.order:"relevance",resultsPerPage:t.resultsPerPage,maxResults:t.resultsPerPage})),r.push("/")}(e.id)}})};return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(Re.b,{dataSource:i,renderItem:function(e){return Object(U.jsx)(Re.b.Item,{style:{flexWrap:"nowrap",backgroundColor:"#ffffff"},actions:[Object(U.jsx)("a",{className:Ve.a.editLink,onClick:function(){n(i.filter((function(t){return t.id===e.id}))[0]),t(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"},"list-loadmore-edit"),Object(U.jsx)("a",{className:Ve.a.deleteLink,onClick:function(){return o(e.query,e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"},"list-loadmore-more")],children:Object(U.jsx)(he.a.Paragraph,{className:Ve.a.itemTitle,style:{margin:0},ellipsis:{rows:1,expandable:!1},onClick:function(){return l(e)},children:e.query})},e.id)}})})},Be=n(304),De=n(185);var Ue=function(){var e=Object(P.f)(),t=Object(c.b)();return Object(U.jsx)(V.a,{justify:"center",align:"middle",style:{height:"100vh"},children:Object(U.jsx)(A.a,{xs:{span:23},sm:{span:22},md:{span:22},lg:{span:20},xxl:{span:16},style:{maxWidth:510},children:Object(U.jsx)(je,{initialValues:{username:"",password:""},onSubmit:function(n){var a=function(e){var t=De.find((function(t){return t.username===e.username}));return t&&t.password===e.password?{username:t.username,token:Object(Be.a)()}:null}(n);if(!a)return D.b.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"),localStorage.removeItem("authToken"),void localStorage.removeItem("authUser");localStorage.setItem("authToken",a.token),localStorage.setItem("authUser",a.username),t(B(!0)),t({type:b,payload:a.username}),e.push("/")}})})})},He=n(58),Me=n(309),Je=n(310),ze=n(105),Ze=n.n(ze),We=he.a.Title,Ge=ue.a.Search,Ke=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.youtubeSearch})),n=Object(c.c)((function(e){return e.user})).username,r=Object(c.c)((function(e){return e.favorites})).favorites,i=Object(a.useState)(),o=Object(xe.a)(i,2),l=o[0],u=o[1],j=Object(a.useState)(!1),b=Object(xe.a)(j,2),h=b[0],O=b[1],f=Object(P.f)();Object(a.useEffect)((function(){var n;"fulfilled"===t.queryStatus&&e((n=t.listOfVideos,function(){var e=Object(Z.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ae()),e.prev=1,e.next=4,Y(n);case 4:return a=e.sent,e.abrupt("return",t(ie(a)));case 8:e.prev=8,e.t0=e.catch(1),t(re());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,t.queryStatus,t.listOfVideos]);var p=function(){var t=Object(Z.a)(z.a.mark((function t(){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e(X({q:l}));case 4:e(ne({query:l}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(t){var a=Object(Be.a)();e(function(e){return{type:m,payload:e}}(Object(d.a)(Object(d.a)({},t),{},{username:n,id:a}))),function(e,t){var n=Ne(e)||[];localStorage.setItem(e,JSON.stringify([].concat(Object(L.a)(n),[t])))}(n,Object(d.a)(Object(d.a)({},t),{},{id:a})),O(!1)},x=t.query?r.filter((function(e){return e.query.trim()===t.query.trim()})).length?Object(U.jsx)(He.a,{style:{visibility:t.videos.length?"visible":"hidden"},placement:"bottom",trigger:"hover",color:"#ffffff",title:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(he.a.Text,{strong:!0,style:{display:"block",marginBottom:15},children:"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435\xbb"}),Object(U.jsx)(s.b,{style:{marginTop:15},to:"/favorites",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435\xbb"})]}),children:Object(U.jsx)(Me.a,{className:Ze.a.icon,style:{color:"#1890FF",visibility:t.videos.length?"visible":"hidden"},onClick:function(){return f.push("/favorites")}})}):Object(U.jsx)(Je.a,{className:Ze.a.icon,style:{color:"#1890FF",visibility:t.videos.length?"visible":"hidden"},onClick:function(){return O(!0)}}):Object(U.jsx)("span",{});return Object(U.jsxs)("div",{children:[Object(U.jsx)(We,{className:Ze.a.searchTitle,children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(U.jsx)("div",{className:"searchContainer",children:Object(U.jsx)(Ge,{className:Ze.a.search,placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",enterButton:"\u041d\u0430\u0439\u0442\u0438",size:"large",onSearch:p,suffix:x,onChange:function(e){return u(e.target.value)},defaultValue:t.query,value:l})}),Object(U.jsx)(Ee.a,{title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441",visible:h,footer:null,onCancel:function(){return O(!1)},children:Object(U.jsx)(Se,{initialValues:{id:"",query:t.query,title:"",order:null,resultsPerPage:12},onCancel:function(){return O(!1)},onSubmit:function(e){return v(e)}})}),t.query?Object(U.jsx)(Le,{}):null]})},Qe=n(94),Ye=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})).username,n=Object(c.c)((function(e){return e.favorites})).favorites,r=Object(a.useState)(!1),i=Object(xe.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)({id:"",title:"",query:"",order:"relevance",resultsPerPage:12}),u=Object(xe.a)(l,2),j=u[0],b=u[1];Object(a.useEffect)((function(){n.length&&localStorage.setItem(t,JSON.stringify(Object(L.a)(n)))}),[n]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(V.a,{justify:"center",children:Object(U.jsxs)(A.a,{xs:{span:23},sm:{span:22},md:{span:22},lg:{span:20},xxl:{span:16},children:[Object(U.jsx)("h2",{style:{textAlign:"center",fontSize:"36px",paddingBottom:"40px"},children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),n.length?Object(U.jsx)(Pe,{setActiveFavorite:b,setIsModalVisible:o}):Object(U.jsx)(V.a,{justify:"center",children:Object(U.jsx)(A.a,{flex:"auto",children:Object(U.jsx)(Qe.a,{description:"\u0423 \u0412\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."})})})]})}),Object(U.jsxs)(Ee.a,{title:null,visible:s,closable:!1,footer:null,onCancel:function(){return o(!1)},children:[Object(U.jsx)("h3",{style:{textAlign:"center",fontSize:18,margin:0,padding:"15px 0 35px"},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(U.jsx)(Se,{initialValues:{id:j.id,title:j.title,query:j.query,order:j.order,resultsPerPage:j.resultsPerPage},editMode:!0,onSubmit:function(n){var a;e((a=Object(d.a)(Object(d.a)({},n),{},{username:t,id:j.id}),{type:y,payload:a})),o(!1)},onCancel:function(){return o(!1)}})]})]})},Xe=function(){return Object(U.jsx)(U.Fragment,{children:"NotFoundScreen"})},$e=function(){return function(){var e=Object(P.g)().pathname,t=Object(c.c)((function(e){return e.user})).isLoggedIn,n=Object(P.f)();t||"/login"===e||n.push("/login")}(),Object(U.jsxs)(P.c,{children:[Object(U.jsx)(P.a,{exact:!0,path:"/login",component:Ue}),Object(U.jsx)(P.a,{exact:!0,path:"/",component:Ke}),Object(U.jsx)(P.a,{exact:!0,path:"/favorites",component:Ye}),Object(U.jsx)(P.a,{path:"*",component:Xe})]})};n(291);var et=function(){var e=Object(c.c)((function(e){return e.user})),t=Object(c.b)();return Object(a.useEffect)((function(){if(e.isLoggedIn){var n=localStorage.getItem(e.username);n&&t(function(e){return{type:v,payload:e}}(JSON.parse(n)))}}),[e.isLoggedIn]),Object(U.jsxs)(F.a,{style:{minHeight:"100vh"},children:[e.isLoggedIn&&Object(U.jsx)(F.a.Header,{style:{backgroundColor:"#FFF"},children:Object(U.jsx)(oe,{})}),Object(U.jsx)(F.a.Content,{children:Object(U.jsx)(V.a,{justify:"center",children:Object(U.jsx)(A.a,{span:22,children:Object(U.jsx)($e,{})})})})]})};n(292);i.a.render(Object(U.jsx)(c.a,{store:N,children:Object(U.jsx)(s.a,{children:Object(U.jsx)(et,{})})}),document.getElementById("root"))},73:function(e,t,n){e.exports={searchInfoContainer:"SearchResults_searchInfoContainer__1-MH8",videoList:"SearchResults_videoList__nTP2y",videoCards:"SearchResults_videoCards__BFrn9",videoListItem:"SearchResults_videoListItem__3IN9w",queryTitle:"SearchResults_queryTitle__jZlpl",videosCount:"SearchResults_videosCount__3WXkb",viewsCount:"SearchResults_viewsCount__2URgK",videoLink:"SearchResults_videoLink__1NmO3",channelLink:"SearchResults_channelLink__CnRyI"}}},[[293,1,2]]]);
//# sourceMappingURL=main.0cfefb3b.chunk.js.map