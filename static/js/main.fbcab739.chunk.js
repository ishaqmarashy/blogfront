(this.webpackJsonpblogfront=this.webpackJsonpblogfront||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(12),c=n.n(a),i=(n(17),n(2)),o=n(4),u=n(3),l=(n(18),n(9)),j=n.n(l),d=n(0),b=function(e){var t=e.setUser,n=e.SignInURL,r=e.SignUpURL,a=e.setUserName,c=Object(s.useState)(!0),l=Object(u.a)(c,2),b=l[0],p=l[1],m=Object(s.useState)(""),h=Object(u.a)(m,2),O=h[0],x=h[1],f=function(){var e=Object(o.a)(Object(i.a)().mark((function e(s){var r,c,o,u,l,d,b;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),r=s.target,c=r.username,o=r.password,!c||!o){e.next=13;break}return x("Attempting log-in..."),u=j()(o.value),l=JSON.stringify({username:c.value,password:u}),e.next=8,fetch(n,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:l});case 8:return d=e.sent,e.next=11,d.json();case 11:(b=e.sent)&&b.token?(window.localStorage.setItem("user",JSON.stringify({user:b.token,username:c.value})),x(""),a(c.value),t(b.token)):(x("Invalid credentials..."),setTimeout((function(){return x("")}),3e3));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n,s,a,c,o,u,l;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.target,s=n.username,a=n.password,c=n.confirm_password,!s||!a||c.value!==a.value){e.next=18;break}return e.prev=3,o=j()(a.value),u=JSON.stringify({username:s.value,password:o}),e.next=8,fetch(r,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:u});case 8:l=e.sent,200!==l.status?(x("Username is taken!"),setTimeout((function(){return x("")}),3e3)):(x("Sign-up sucessful!"),setTimeout((function(){return x("")}),3e3)),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(3),e.t0;case 16:e.next=20;break;case 18:x("Please Fill all fields and make sure password and password confirmation match..."),setTimeout((function(){return x("")}),3e3);case 20:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),w=Object(d.jsxs)("form",{className:"sign-in",onSubmit:f,children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username:\xa0"}),Object(d.jsx)("input",{id:"username",name:"username",type:"text"}),Object(d.jsx)("label",{htmlFor:"password",children:"Password:\xa0"}),Object(d.jsx)("input",{id:"password",name:"password",type:"password"}),Object(d.jsx)("button",{type:"submit",children:"Sign-In"}),Object(d.jsx)("div",{className:"error",children:O})]}),g=Object(d.jsxs)("form",{className:"sign-in",onSubmit:v,children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username:\xa0"}),Object(d.jsx)("input",{id:"username",name:"username",type:"text"}),Object(d.jsx)("label",{htmlFor:"password",children:"Password:\xa0"}),Object(d.jsx)("input",{id:"password",name:"password",type:"password"}),Object(d.jsx)("label",{htmlFor:"confirm_password",children:"Confirm Password:\xa0"}),Object(d.jsx)("input",{id:"confirm_password",name:"confirm_password",type:"password"}),Object(d.jsx)("button",{type:"submit",children:"Sign-Up"}),Object(d.jsx)("div",{className:"error",children:O})]});return Object(d.jsxs)("div",{className:"nav",children:[b?w:g,Object(d.jsx)("button",{className:"sign-out",onClick:function(e){e.preventDefault(),x(""),p(!b)},children:b?Object(d.jsx)(d.Fragment,{children:"Sign Up"}):Object(d.jsx)(d.Fragment,{children:"Sign In"})})]})};var p=function(e){var t=e.userName,n=e.handleSignout;return Object(d.jsxs)("div",{className:"nav",children:["Welcome ",t,"! ",Object(d.jsx)("button",{className:"sign-out",onClick:n,children:"Sign out"})]})},m=n(7);var h=function(e){var t=e.selectedPost,n=e.user,r=e.commentsURL,a=Object(s.useState)([]),c=Object(u.a)(a,2),l=c[0],j=c[1],b=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var s,a,c,o,u,d,b;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s=t.target,a=s.postid,c=s.text,a.value&&c.value){e.next=4;break}return e.abrupt("return");case 4:return o={userid:n,postid:a.value,text:c.value,date:new Date},e.next=7,fetch("".concat(r,"/").concat(a.value,"/comment"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(o)});case 7:return u=e.sent,d=u,e.next=11,u.json();case 11:b=e.sent,200===d.status&&j([b].concat(Object(m.a)(l)));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=Object(d.jsxs)("form",{className:"comment-form post",onSubmit:b,children:[Object(d.jsxs)("header",{className:"post-header",children:[" ",Object(d.jsxs)("label",{htmlFor:"postid",children:["Post ID:  \xa0",Object(d.jsx)("input",{readOnly:!0,type:"text",name:"postid",id:"postid",value:t._id})]}),Object(d.jsxs)("label",{htmlFor:"userid",children:["User: \xa0",Object(d.jsx)("input",{readOnly:!0,type:"text",name:"userid",id:"userid",value:t.userid})]}),Object(d.jsxs)("label",{htmlFor:"title",children:["Title: \xa0",Object(d.jsx)("input",{readOnly:!0,type:"text",name:"title",id:"title",value:t.title})]}),Object(d.jsxs)("label",{htmlFor:"date",children:["Date: \xa0",Object(d.jsx)("input",{readOnly:!0,type:"text",name:"date",id:"title",value:t.date})]})]}),Object(d.jsx)("textarea",{name:"text",id:"text"}),Object(d.jsx)("button",{id:"comment-button",type:"submit",children:"Add Comment"})]}),h=l?l.map((function(e){return Object(d.jsxs)("div",{className:"comment",children:[Object(d.jsxs)("div",{children:["Created By: ",e.userid]}),Object(d.jsxs)("div",{children:["Comment: ",e.text]}),Object(d.jsxs)("div",{children:["Date: ",e.date]})]},e._id)})):null;return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var s,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(r,"/").concat(t._id,"/comment"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}});case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,j(a.reverse());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,n,r]),Object(d.jsxs)(d.Fragment,{children:[p,Object(d.jsx)("div",{className:"comment-container",children:h})]})},O=function(e){var t=e.user,n=e.postsURL,r=Object(s.useState)([]),a=Object(u.a)(r,2),c=a[0],l=a[1],j=Object(s.useState)(""),b=Object(u.a)(j,2),p=b[0],O=b[1],x=Object(s.useState)(!0),f=Object(u.a)(x,2),v=f[0],w=f[1],g=Object(s.useState)(!0),y=Object(u.a)(g,2),N=y[0],S=y[1],k=function(){var e=Object(o.a)(Object(i.a)().mark((function e(s){var r,a,o,u,j,d,b;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),r=s.target,a=r.title,o=r.text,a.value&&o.value){e.next=4;break}return e.abrupt("return");case 4:return u={title:a.value,text:o.value},e.next=7,fetch(n,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(u)});case 7:return j=e.sent,d=j,e.next=11,j.json();case 11:b=e.sent,200===d.status&&l([b].concat(Object(m.a)(c)));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=c?c.map((function(e,t){return Object(d.jsxs)("div",{onClick:function(){return function(e){O(e),w(!1)}(e)},className:"post",children:[Object(d.jsxs)("header",{className:"post-header",children:[Object(d.jsxs)("div",{className:"author",children:["By: ",e.userid]}),"    ",Object(d.jsxs)("h3",{children:["Title: ",e.title]}),"     ",Object(d.jsxs)("div",{children:["Date: ",e.date]})]}),Object(d.jsxs)("div",{className:"post-body",children:[" ",e.text]})]},e._id)})):null,U=Object(d.jsxs)("form",{className:"post",onSubmit:k,children:[Object(d.jsxs)("header",{className:"create-post-header",children:[Object(d.jsx)("h5",{htmlFor:"title",children:"Title: "}),Object(d.jsx)("input",{type:"text",className:"title",name:"title"})]}),Object(d.jsx)("textarea",{className:"text",name:"text"}),Object(d.jsx)("button",{id:"post-button",type:"submit",children:"Create Post"})]});return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var s,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}});case 3:return s=e.sent,e.next=6,s.json();case 6:r=e.sent,l(r.reverse()),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,n]),Object(d.jsx)(d.Fragment,{children:v?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"posts-wrapper-header",children:[Object(d.jsxs)("h1",{className:"post-title",children:[" ",N?Object(d.jsx)(d.Fragment,{children:"Create a post"}):Object(d.jsx)(d.Fragment,{children:"Latest Post"})," "]}),Object(d.jsx)("button",{onClick:function(){S(!N)},className:"new-post",children:N?Object(d.jsx)(d.Fragment,{children:"Back"}):Object(d.jsx)(d.Fragment,{children:"New Post"})})]}),N&&U,F]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"new-post",onClick:function(e){e.preventDefault(),O(""),w(!0)},children:"Back"}),Object(d.jsx)(h,{selectedPost:p,user:t,commentsURL:"".concat(n)})]})})},x="https://unusual-handbag-fly.cyclic.cloud";var f=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),c=Object(u.a)(a,2),l=c[0],j=c[1],m=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.clear(),r("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("user"));e&&e.user&&e.username&&(r(e.user),j(e.username))}),[n]),Object(d.jsxs)("div",{className:"App",children:[n?Object(d.jsx)(p,{userName:l,handleSignout:m}):Object(d.jsx)(b,{setUser:r,setUserName:j,SignInURL:x,SignUpURL:"".concat(x,"/sign-up")}),Object(d.jsx)("header",{className:"App-header",children:n&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"posts-wrapper",children:Object(d.jsx)(O,{user:n,postsURL:"".concat(x,"/post")})})})})]})};n(22).config(),c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fbcab739.chunk.js.map