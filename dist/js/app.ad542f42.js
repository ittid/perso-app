(function(t){function e(e){for(var M,L,n=e[0],u=e[1],r=e[2],c=0,j=[];c<n.length;c++)L=n[c],Object.prototype.hasOwnProperty.call(a,L)&&a[L]&&j.push(a[L][0]),a[L]=0;for(M in u)Object.prototype.hasOwnProperty.call(u,M)&&(t[M]=u[M]);o&&o(e);while(j.length)j.shift()();return i.push.apply(i,r||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],M=!0,L=1;L<s.length;L++){var u=s[L];0!==a[u]&&(M=!1)}M&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var M={},a={app:0},i=[];function L(t){return n.p+"js/"+({about:"about",articles:"articles",newsletter:"newsletter"}[t]||t)+"."+{about:"264fb129",articles:"70c27646",newsletter:"f9bfc811"}[t]+".js"}function n(e){if(M[e])return M[e].exports;var s=M[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var M=new Promise((function(e,M){s=a[t]=[e,M]}));e.push(s[2]=M);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.src=L(t);var r=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(c);var s=a[t];if(0!==s){if(s){var M=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;r.message="Loading chunk "+t+" failed.\n("+M+": "+i+")",r.name="ChunkLoadError",r.type=M,r.request=i,s[1](r)}a[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},n.m=t,n.c=M,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var M in t)n.d(s,M,function(e){return t[e]}.bind(null,M));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var o=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},3773:function(t,e,s){"use strict";var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"posts"},t._l(t.posts,(function(e){return s("div",{staticClass:"post_cont"},[s("a",{attrs:{href:e.url,target:"_blank"}},[s("div",{staticClass:"each"},[s("div",{staticClass:"img_wrapper"},[s("img",{attrs:{src:e.urlToImage}})]),s("div",{staticClass:"title"},[s("h2",[t._v(t._s(e.title))]),s("div",{staticClass:"datetime"},[t._v(t._s(e.publishedAt))])]),t._m(0,!0)])])])})),0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category"},[s("span",{staticClass:"btn label"},[t._v("label")])])}],i=s("bc3a"),L=s.n(i),n={name:"Articles",data:function(){return{posts:[],errors:[]}},created:function(){var t=this;L.a.get("https://newsapi.org/v2/everything?q=apple&from=2022-06-05&to=2022-06-05&sortBy=popularity&apiKey=53245c35f8b643869eaa84a31a394e64").then((function(e){t.posts=e.data.articles})).catch((function(e){t.errors.push(e)}))}},u=n,r=s("2877"),c=Object(r["a"])(u,M,a,!1,null,null,null);e["a"]=c.exports},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var M=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("div",{attrs:{id:"main-content"}},[s("router-view")],1),s("Footer")],1)},i=[],L=function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("div",{staticClass:"nav"},[M("div",{staticClass:"header"},[M("div",{staticClass:"brand"},[M("router-link",{attrs:{to:"/"}},[M("img",{staticClass:"favicon",attrs:{src:s("69a4")}}),M("span",{staticClass:"text"},[t._v("aHnaine.dev")])])],1),M("div",{staticClass:"links"},[M("ul",[M("router-link",{attrs:{to:"/me",tag:"li",exact:""}},[M("a",[t._v("About")])]),M("router-link",{attrs:{to:"/blog",tag:"li"}},[M("a",[t._v("Articles")])]),M("router-link",{attrs:{to:"/newsletter",tag:"li"}},[M("a",[t._v("Newsletter")])])],1)]),M("div",{staticClass:"swt"},[M("button",{staticClass:"light-switcher",on:{click:t.changeTheme}},[M("img",{staticClass:"theme-color",attrs:{id:"svg-chng",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+"}})])])])])},n=[],u={name:"Header",methods:{handleSCroll:function(){var t=document.querySelector(".nav");window.scrollY>5?t.className="nav nav-scroll":t.className="nav"},changeTheme:function(){var t=document.getElementById("svg-chng"),e=document.getElementsByTagName("BODY")[0],s=document.getElementById("nav");"dark"==e.className?t.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg==":t.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+",e.classList.toggle("dark"),s.classList.toggle("dark")}},created:function(){window.addEventListener("scroll",this.handleSCroll)},destroyed:function(){window.removeEventListener("scroll",this.handleSCroll)}},r=u,c=s("2877"),o=Object(c["a"])(r,L,n,!1,null,null,null),j=o.exports,l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"links"},[s("ul",[s("router-link",{attrs:{to:"/",tag:"li",exact:""}},[s("a",[t._v("Home")])]),s("router-link",{attrs:{to:"/rss",tag:"li"}},[s("a",[t._v("RSS")])]),s("router-link",{attrs:{to:"/newsletter",tag:"li"}},[s("a",[t._v("Newsletter")])])],1)]),s("div",{staticClass:"resource"},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])},w=[],N={name:"Footer"},D=N,y=Object(c["a"])(D,l,w,!1,null,null,null),g=y.exports,C={el:"#app",name:"App",components:{Header:j,Footer:g}},T=C,I=Object(c["a"])(T,a,i,!1,null,null,null),d=I.exports,x=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("section",{staticClass:"lead"},[s("div",{staticClass:"elevator"},[s("h1",[t._v("Hey I'm ittid 👋")]),t._m(0),s("div",{staticClass:"social"},[s("strong",[t._v("GitHub: "),s("a",{attrs:{href:t.items.html_url,target:"_black"}},[t._v(t._s(t.items.login))])])])]),s("div",{staticClass:"newsletter-section"},[s("img",{attrs:{src:t.items.avatar_url}}),t._m(1),s("a",{staticClass:"button",attrs:{href:"#"}},[t._v("Subscribe")])])]),s("section",{staticClass:"content"},[s("h2",[t._v("Latest Articles"),s("router-link",{staticClass:"view_all btn",attrs:{to:"/blog",tag:"a"}},[s("span",[t._v("view all")])])],1),s("Articles")],1),s("Project")],1)},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Passionate about JavaScript, Vue, and Open Source Project at GitHub & i'm creating open source projects using:"),s("br"),t._v("JavaScript & Vue.js")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("Email Newsletter")]),s("p",[t._v("I write tutorials. Get an update when something new comes out by signing up below!")])])}],m=s("bc3a"),p=s.n(m),E=s("3773"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"content"},[s("h2",[t._v("Open Source Projects")]),s("div",{staticClass:"project"},t._l(t.projects,(function(e){return s("div",{staticClass:"each"},[s("h2",[s("a",{staticClass:"project-link",attrs:{href:e.html_url,target:"_blank"}},[s("span",{staticClass:"p-icon"},[t._v("💾")]),s("div",{staticClass:"p-title"},[t._v(t._s(e.name))])])]),s("p",[t._v(t._s(e.description))]),s("div",{staticClass:"source"},[s("a",{staticClass:"btn prj",attrs:{href:e.html_url,target:"_blank"}},[t._v("source")])])])})),0)])},f=[],S={name:"Project",data:function(){return{projects:[],errors:[]}},created:function(){var t=this;p.a.get("https://api.github.com/users/ittid/repos").then((function(e){t.projects=e.data})).catch((function(e){t.errors.push(e)}))}},b=S,h=Object(c["a"])(b,v,f,!1,null,null,null),Y=h.exports,O={data:function(){return{items:[],errors:[]}},created:function(){var t=this;p.a.get("https://api.github.com/users/ittid/repos").then((function(e){t.items=e.data[0].owner})).catch((function(e){t.errors.push(e)}))},components:{Articles:E["a"],Project:Y}},Q=O,k=Object(c["a"])(Q,z,A,!1,null,null,null),_=k.exports;M["a"].use(x["a"]);var G=[{path:"/",name:"Home",component:_},{path:"/me",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/blog",name:"Articles",component:function(){return s.e("articles").then(s.bind(null,"fd3f"))}},{path:"/newsletter",name:"newsletter",component:function(){return s.e("newsletter").then(s.bind(null,"e134"))}}],Z=new x["a"]({mode:"history",base:"/",routes:G}),U=Z,P=s("2f62");M["a"].use(P["a"]);var H=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=s("ecee"),B=s("f2d1"),W=s("ad3d");s("681a"),s("c1c3"),s("f5df1");R["c"].add(B["b"],B["c"],B["a"]),M["a"].component("font-awesome-icon",W["a"]),M["a"].prototype.$axios=p.a,M["a"].config.productionTip=!1,new M["a"]({router:U,store:H,render:function(t){return t(d)}}).$mount("#app")},"681a":function(t,e,s){},"69a4":function(t,e,s){t.exports=s.p+"img/logo.7d563114.png"},c1c3:function(t,e,s){}});
//# sourceMappingURL=app.ad542f42.js.map