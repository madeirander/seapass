(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(195)},113:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(6),i=n.n(c),l=(n(113),n(71),n(39)),o=n(36),u=n(28);function d(){return r.a.createElement("div",null,r.a.createElement("p",null,"Home"))}function m(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("p",null,"Entry Detail for: ",t.params.id))}n(115);var s=n(104),y=(n(67),n(29)),E=(n(54),n(12)),h=n(91),p=n(92),b=n(105),v=n(93),f=n(42),k=n(106),g=n(37),S=n(94);function w(){return r.a.createElement("div",{className:"custom-thumb",style:{backgroundColor:"#7AB6E7",borderRadius:"5px",right:"0px"}})}function O(){return r.a.createElement("div",{className:"custom-track",style:{position:"absolute",width:"6px",right:"0px",bottom:"0px",top:"0px"}})}function C(e){var t=e.style,n=e.children,a=Object(g.a)(e,["style","children"]);return r.a.createElement("div",{style:t},r.a.createElement(S.Scrollbars,Object.assign({autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,renderThumbVertical:w,renderTrackVertical:O},a),n))}function I(e){var t=e.entry,n=Object(g.a)(e,["entry"]);return r.a.createElement(y.a.Item,n,r.a.createElement(o.c,{to:"/entry/".concat(t.catId,"/").concat(t.id)},r.a.createElement(E.a,{type:"file-text"})," ",t.name))}C.defaultProps={style:{}};var x=y.a.SubMenu;function M(e){var t=e.category,n=e.isSubMenuOpen,a=e.handleSubMenuClicked,c=Object(g.a)(e,["category","isSubMenuOpen","handleSubMenuClicked"]),i=n?"folder-open":"folder",l=t.entries.map(function(e){return r.a.createElement(I,{key:"/entry/".concat(e.catId,"/").concat(e.id),entry:e})});return r.a.createElement(x,Object.assign({title:r.a.createElement("span",null,r.a.createElement(E.a,{type:i}),t.name)},c,{onTitleClick:function(){return a("c".concat(t.id))}}),l)}var j=l.a.Sider;var K=function(e){function t(e){var n;Object(h.a)(this,t),n=Object(b.a)(this,Object(v.a)(t).call(this,e));var a,r=-1!==(a=e.location.pathname).indexOf("entry")?parseInt(a.split("/")[[a.split("/").length-2]],10):0;return n.state={activeSubMenuKeys:0!==r?["c".concat(r)]:[]},n.handleSubMenuClicked=n.handleSubMenuClicked.bind(Object(f.a)(n)),n.onAddEntryClicked=n.onAddEntryClicked.bind(Object(f.a)(n)),n}return Object(k.a)(t,e),Object(p.a)(t,[{key:"onAddEntryClicked",value:function(){this.setState({activeSubMenuKeys:[]})}},{key:"handleSubMenuClicked",value:function(e){this.setState(function(t){var n=t.activeSubMenuKeys,a=n.indexOf(e);return-1===a?n.push(e):n.splice(a,1),{activeSubMenuKeys:n}})}},{key:"render",value:function(){var e=this,t=this.state.activeSubMenuKeys,n=this.props,a=n.menuItems,c=n.location;console.log("activeSubMenuKeys",t);var i=a.map(function(n){var a=-1!==t.indexOf("c".concat(n.id));return r.a.createElement(M,{key:"c".concat(n.id),category:n,isSubMenuOpen:a,handleSubMenuClicked:e.handleSubMenuClicked})});return 0===i.length&&i.unshift(r.a.createElement(y.a.Item,{disabled:!0,key:"0"},r.a.createElement(E.a,{type:"exclamation"})," No entries found")),r.a.createElement(j,{className:"sidebar",width:250,style:{background:"#fff"}},r.a.createElement(C,{style:{height:"100%",borderRight:0}},r.a.createElement("div",{style:{padding:5,margin:5}},r.a.createElement(o.b,{to:"/new"},r.a.createElement(s.a,{onClick:this.onAddEntryClicked,type:"dashed",icon:"plus",size:"small",block:!0},"Add New"))),r.a.createElement(y.a,{selectedKeys:[c.pathname],openKeys:t,style:{borderRight:0},mode:"inline"},i)))}}]),t}(r.a.Component),T=Object(u.d)(K),N=(n(193),n(43));function A(){return r.a.createElement(N.a,{style:{margin:"16px 0"}},r.a.createElement(N.a.Item,null,"Home"),r.a.createElement(N.a.Item,null,"Category"),r.a.createElement(N.a.Item,null,"Entry"))}function H(){return r.a.createElement("div",null,r.a.createElement("p",null,"New Entry"))}var B=l.a.Content,R=[{id:1,name:"CategoryOne",entries:[{id:1,catId:1,name:"EntryOne",link:"one"},{id:2,catId:1,name:"EntryTwo",link:"two"},{id:3,catId:1,name:"EntryThree",link:"three"}]},{id:2,name:"CategoryTwo",entries:[{id:4,catId:2,name:"EntryFour",link:"four"},{id:5,catId:2,name:"EntryFive",link:"five"},{id:6,catId:2,name:"EntrySix",link:"six"}]},{id:3,name:"CategoryThree",entries:[{id:7,catId:3,name:"EntrySeven",link:"seven"},{id:8,catId:3,name:"EntryEight",link:"eight"},{id:9,catId:3,name:"EntryNine",link:"nine"}]}];var D=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{style:{height:"100vh"}},r.a.createElement(T,{menuItems:R}),r.a.createElement(l.a,{style:{padding:"0 24px 24px"}},r.a.createElement(A,null),r.a.createElement(B,{style:{background:"#fff",padding:24,margin:0,minHeight:280}},r.a.createElement(u.a,{exact:!0,path:"/",component:d}),r.a.createElement(u.a,{path:"/new",component:H}),r.a.createElement(u.a,{path:"/entry/:cat/:id",component:m})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.f4d82a94.chunk.js.map