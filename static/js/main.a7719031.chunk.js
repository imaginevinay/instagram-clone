(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(2),c=a.n(s),o=a(15),i=a.n(o),r=(a(52),a(10)),l=(a(53),a(54),a(91)),m=a(92),d=a(87),u=a(90),p=a(21),j=p.a.initializeApp({apiKey:"AIzaSyCDB0ULlw9XChy-QkNQdORZp8_WzFloDq4",authDomain:"instagram-clone-react-5b90b.firebaseapp.com",databaseURL:"https://instagram-clone-react-5b90b.firebaseio.com",projectId:"instagram-clone-react-5b90b",storageBucket:"instagram-clone-react-5b90b.appspot.com",messagingSenderId:"496672111910",appId:"1:496672111910:web:233ca74fa58481dbfbd5e7",measurementId:"G-D8X359FMEW"}).firestore(),b=p.a.auth(),g=p.a.storage();a(59);function h(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var O=Object(d.a)((function(e){return{paper:{display:"flex",flexDirection:"column",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root:{width:"100%"},chooseFile_button:{backgroundColor:"#0095f6"}}}));var f=function(e){var t=e.username,a=Object(s.useState)(""),c=Object(r.a)(a,2),o=c[0],i=c[1],d=Object(s.useState)(0),b=Object(r.a)(d,2),f=b[0],x=b[1],v=Object(s.useState)(null),N=Object(r.a)(v,2),_=N[0],y=N[1],S=O(),C=Object(s.useState)(h),w=Object(r.a)(C,1)[0],k=Object(s.useState)(!1),U=Object(r.a)(k,2),I=U[0],F=U[1],D=function(){F(!1)};return Object(n.jsxs)("div",{className:"image_upload",children:[Object(n.jsx)(l.a,{variant:"contained",size:"small",color:"primary",className:S.chooseFile_button,onClick:function(){F(!0)},children:"Add a new post"}),Object(n.jsx)(u.a,{open:I,onClose:D,children:Object(n.jsxs)("div",{style:w,className:S.paper,children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{src:"https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"",className:"app_header_img"})}),Object(n.jsx)(m.a,{className:"caption",type:"text",placeholder:"Enter a caption...",onChange:function(e){return i(e.target.value)},value:o}),Object(n.jsxs)("div",{className:"file_upload",children:[Object(n.jsx)(m.a,{classes:{root:S.root},type:"file",onChange:function(e){e.target.files[0]&&y(e.target.files[0])}}),Object(n.jsx)("progress",{className:"progress_bar",value:f,max:"100"})]}),Object(n.jsx)("div",{className:"upload_button",children:Object(n.jsx)(l.a,{variant:"contained",size:"small",color:"primary",className:S.chooseFile_button,onClick:function(){g.ref("images/".concat(_.name)).put(_).on("state_changed",(function(e){var t=100*Math.round(e.bytesTransferred/e.totalBytes);x(t)}),(function(e){console.log(e),alert(e.message)}),(function(){g.ref("images").child(_.name).getDownloadURL().then((function(e){j.collection("posts").add({caption:o,timestamp:p.a.firestore.FieldValue.serverTimestamp(),imageUrl:e,userName:t}),x(0),i(""),y(null),D()}))}))},children:"Upload"})})]})})]})};var x=function(e){var t=e.auth,a=e.user,s=e.signIn,c=e.signUp;return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("img",{className:"logo",src:"https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),(null===a||void 0===a?void 0:a.displayName)?Object(n.jsx)(f,{username:a.displayName}):Object(n.jsx)("p",{className:"loginText",children:"You need to login to upload posts."}),a?Object(n.jsx)(l.a,{onClick:function(){return t.signOut()},children:"Logout"}):Object(n.jsxs)("div",{className:"app_loginContainer",children:[Object(n.jsx)(l.a,{onClick:function(){return s(!0)},children:"Sign In"}),Object(n.jsx)(l.a,{onClick:function(){return c(!0)},children:"Sign Up"})]})]})},v=(a(64),a(93)),N=a(35),_=a.n(N),y=a(43),S=a.n(y)()({prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"%d sec",minute:"1 m",minutes:"%d m",hour:"1 h",hours:"%d h",day:"1 d",days:"%d d",month:"1 mo",months:"%d mos",year:"1 y",years:"%d ys",wordSeparator:" "});var C=function(e){var t=e.user,a=e.postId,c=e.userName,o=e.caption,i=e.imageUrl,l=e.timeStamp,m=Object(s.useState)([]),d=Object(r.a)(m,2),u=d[0],b=d[1],g=Object(s.useState)(""),h=Object(r.a)(g,2),O=h[0],f=h[1];return Object(s.useEffect)((function(){var e;return a&&(e=j.collection("posts").doc(a).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[a]),Object(n.jsxs)("div",{className:"post",children:[Object(n.jsxs)("div",{className:"post_header",children:[Object(n.jsx)(v.a,{className:"post_avatar",alt:c,src:"/static/images/avatar/1.jpg"}),Object(n.jsx)("h3",{children:c}),Object(n.jsx)("span",{className:"time_stamp postTimeStamp",children:Object(n.jsx)(_.a,{date:l.toDate(),formatter:S,minPeriod:60,maxPeriod:60})})]}),Object(n.jsx)("img",{className:"post_image",alt:"",src:i}),Object(n.jsxs)("h4",{className:"post_caption",children:[Object(n.jsxs)("strong",{children:[c," :"]})," ",o]}),Object(n.jsx)("div",{className:"commentSection",children:u.map((function(e){return Object(n.jsxs)("div",{className:"commentBoxMain",children:[Object(n.jsx)("div",{className:"commentBox_avatar",children:Object(n.jsx)(v.a,{className:"post_avatar",alt:e.userName,src:"/static/images/avatar/1.jpg"})}),Object(n.jsxs)("div",{className:"commentTextSection",children:[Object(n.jsxs)("div",{className:"commentContainer",children:[Object(n.jsx)("strong",{children:e.userName}),Object(n.jsx)("p",{className:"user_comment",children:e.text})]}),(null===e||void 0===e?void 0:e.timestamp)?Object(n.jsx)("span",{className:"time_stamp",children:Object(n.jsx)(_.a,{date:e.timestamp.toDate(),formatter:S,minPeriod:60,maxPeriod:60})}):Object(n.jsx)("span",{})]})]})}))}),(null===t||void 0===t?void 0:t.displayName)?Object(n.jsxs)("form",{className:"comments_box",children:[Object(n.jsx)("input",{className:"post_comments",type:"text",placeholder:"Add comments ...",value:O,onChange:function(e){f(e.target.value)}}),Object(n.jsx)("button",{className:"post_button",type:"submit",onClick:function(e){e.preventDefault(),j.collection("posts").doc(a).collection("comments").add({text:O,userName:t.displayName,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),f("")},disabled:!O,children:"Post"})]}):Object(n.jsx)("span",{})]})},w=Object(d.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},margin:{backgroundColor:"#0095f6",margin:"10px auto",width:"50%",textAlign:"center"}}}));function k(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var U=function(){var e=w(),t=Object(s.useState)([]),a=Object(r.a)(t,2),c=a[0],o=a[1],i=Object(s.useState)(k),d=Object(r.a)(i,1)[0],p=Object(s.useState)(""),g=Object(r.a)(p,2),h=g[0],O=g[1],f=Object(s.useState)(""),v=Object(r.a)(f,2),N=v[0],_=v[1],y=Object(s.useState)(""),S=Object(r.a)(y,2),U=S[0],I=S[1],F=Object(s.useState)(null),D=Object(r.a)(F,2),P=D[0],A=D[1],E=Object(s.useState)(!1),B=Object(r.a)(E,2),T=B[0],z=B[1],L=Object(s.useState)(!1),M=Object(r.a)(L,2),W=M[0],R=M[1];return Object(s.useEffect)((function(){var e=b.onAuthStateChanged((function(t){return A(t||null),function(){e()}}))}),[P,N]),Object(s.useEffect)((function(){j.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(u.a,{open:T,onClose:function(){z(!1)},children:Object(n.jsxs)("div",{style:d,className:e.paper,children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{src:"https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"",className:"app_header_img"})}),Object(n.jsxs)("form",{className:"app_signUp",children:[Object(n.jsx)(m.a,{placeholder:"Username",type:"text",value:N,onChange:function(e){return _(e.target.value)}}),Object(n.jsx)(m.a,{placeholder:"Email",type:"text",value:h,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)(m.a,{placeholder:"Password",type:"password",value:U,onChange:function(e){return I(e.target.value)}}),Object(n.jsx)(l.a,{variant:"contained",size:"small",color:"primary",className:e.margin,type:"submit",onClick:function(e){e.preventDefault(),b.createUserWithEmailAndPassword(h,U).then((function(e){var t=e.user.updateProfile({displayName:N});return console.log("updated user",t),window.location.reload(!1),t})).catch((function(e){return alert(e.message)})),z(!1)},children:"Sign Up"})]})]})}),Object(n.jsx)(u.a,{open:W,onClose:function(){R(!1)},children:Object(n.jsxs)("div",{style:d,className:e.paper,children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{src:"https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"",className:"app_header_img"})}),Object(n.jsxs)("form",{className:"app_signUp",children:[Object(n.jsx)(m.a,{placeholder:"Email",type:"text",value:h,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)(m.a,{placeholder:"Password",type:"password",value:U,onChange:function(e){return I(e.target.value)}}),Object(n.jsx)(l.a,{variant:"contained",size:"small",color:"primary",className:e.margin,type:"submit",onClick:function(e){e.preventDefault(),b.signInWithEmailAndPassword(h,U).catch((function(e){return alert(e.message)})),R(!1)},children:"Sign In"})]})]})}),Object(n.jsx)(x,{auth:b,user:P,signIn:R,signUp:z}),Object(n.jsx)("div",{className:"app_posts",children:Object(n.jsx)("div",{className:"app_posts_left",children:c.map((function(e){var t=e.id,a=e.post;return Object(n.jsx)(C,{user:P,postId:t,imageUrl:a.imageUrl,userName:a.userName,caption:a.caption,timeStamp:a.timestamp},t)}))})})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),I()}},[[67,1,2]]]);
//# sourceMappingURL=main.a7719031.chunk.js.map