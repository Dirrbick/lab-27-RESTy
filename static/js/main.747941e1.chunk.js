(this["webpackJsonpcreate-react-app-davee"]=this["webpackJsonpcreate-react-app-davee"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),c=n(12),i=n.n(c),u=n(2),h=n(3),j=n(5),o=n(4);n(20),n(21);var l=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"RESTy"})})},d=n(8),b=n.n(d),O=n(13),p=n(14),m=n.n(p),x=(n(32),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).handleSubmit=function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.get("".concat(s.state.url));case 3:n=e.sent,s.props.update(n.headers,n.body.count,n.body.results),s.props.changeSubmit();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.handleUrlChange=function(e){var t=e.target.value;s.setState({url:t})},s.handleMethod=function(e){var t=e.target.value;s.setState({method:t})},s.state={url:"",method:"get"},s}return Object(h.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("main",{children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsx)("input",{className:"url-input",name:"url",required:!0,onChange:this.handleUrlChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"radio",children:[Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"get"}),Object(s.jsx)("label",{children:"GET"}),Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"post"}),Object(s.jsx)("label",{children:"POST"}),Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"put"}),Object(s.jsx)("label",{children:"PUT"}),Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"delete"}),Object(s.jsx)("label",{children:"DELETE"}),Object(s.jsx)("button",{type:"submit",children:"GO!"})]})]})})})}}]),n}(r.a.Component)),v=n(9),f=n.n(v),g=(n(33),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"results",children:[Object(s.jsx)("h1",{children:"Headers"}),Object(s.jsx)(f.a,{className:"json-pretty",src:this.props.headers}),Object(s.jsx)("h1",{children:"Results"}),Object(s.jsxs)("div",{children:["Results:",Object(s.jsx)(f.a,{className:"json-pretty",src:this.props.results})]})]})})}}]),n}(r.a.Component));n(34);var y=function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("h3",{children:"\xa9 Kory & Davee, Code Fellows 2020"})})})},S=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).changeSubmit=function(){s.setState({submit:!0})},s.update=function(e,t,n){s.setState({headers:e,count:t,results:n})},s.state={submit:!1,headers:"",count:0,results:[]},s}return Object(h.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(x,{changeSubmit:this.changeSubmit,update:this.update}),this.state.submit?Object(s.jsx)(g,{submit:this.state.submit,headers:this.state.headers,count:this.state.count,results:this.state.results}):Object(s.jsx)("div",{className:"results"}),";",Object(s.jsx)(y,{})]})}}]),n}(r.a.Component),C=document.getElementById("root");i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(S,{})}),C)}},[[35,1,2]]]);
//# sourceMappingURL=main.747941e1.chunk.js.map