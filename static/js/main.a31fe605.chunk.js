(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(196)},114:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(6),c=n.n(r),l=(n(114),n(77),n(45)),o=n(40),d=n(29);function u(){return i.a.createElement("div",null,i.a.createElement("p",null,"Home"))}function s(e){var t=e.match;return i.a.createElement("div",null,i.a.createElement("p",null,"Entry Detail for: ",t.params.id))}n(116);var m=n(106),h=(n(73),n(30)),p=(n(60),n(12)),b=n(37),y=n(38),E=n(42),f=n(39),v=n(19),g=n(41),k=n(107),O=n(43),C=n(96),j=n(48),w=n.n(j);function S(){return i.a.createElement("div",{className:"custom-thumb",style:{backgroundColor:"#7AB6E7",borderRadius:"5px",right:"0px"}})}function M(){return i.a.createElement("div",{className:"custom-track",style:{position:"absolute",width:"6px",right:"0px",bottom:"0px",top:"0px"}})}var I=function(e){function t(e){var n,a;Object(b.a)(this,t);for(var i=arguments.length,r=new Array(i>1?i-1:0),c=1;c<i;c++)r[c-1]=arguments[c];return(a=Object(E.a)(this,(n=Object(f.a)(t)).call.apply(n,[this,e].concat(r)))).state={scrollTop:0,scrollHeight:0,clientHeight:0},a.handleUpdate=a.handleUpdate.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"handleUpdate",value:function(){var e=this.state,t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight,i=.05*Math.min(t,20),r=n-a,c=.05*(r-Math.max(t,r-20));w()(this.shadowTop,{opacity:i}),w()(this.shadowBottom,{opacity:c})}},{key:"render",value:function(){var e=this,t=this.props,n=t.style,a=Object(O.a)(t,["style"]),r=Object(k.a)({},n,{position:"relative"});return i.a.createElement("div",{style:r},i.a.createElement(C.Scrollbars,Object.assign({autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,renderThumbVertical:S,renderTrackVertical:M,onUpdate:this.handleUpdate},a)),i.a.createElement("div",{ref:function(t){e.shadowTop=t},style:{position:"absolute",top:0,left:0,right:0,height:10,background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)"}}),i.a.createElement("div",{ref:function(t){e.shadowBottom=t},style:{position:"absolute",bottom:0,left:0,right:0,height:10,background:"linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)"}}))}}]),t}(a.Component);function x(e){var t=e.entry,n=Object(O.a)(e,["entry"]);return i.a.createElement(h.a.Item,n,i.a.createElement(o.c,{to:"/entry/".concat(t.catId,"/").concat(t.id)},i.a.createElement(p.a,{type:"file-text"})," ",t.name))}I.defaultProps={style:{}};var T=h.a.SubMenu,H=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(f.a)(t).call(this,e))).state={isOpen:void 0!==e.isSubMenuOpen&&e.isSubMenuOpen},n.handleTitleClick=n.handleTitleClick.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(y.a)(t,[{key:"handleTitleClick",value:function(){var e=this.props,t=e.category,n=e.handleSubMenuClicked;this.setState(function(e){return{isOpen:!e.isOpen}}),n("c".concat(t.id))}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.isSubMenuOpen,a=(e.handleSubMenuClicked,Object(O.a)(e,["category","isSubMenuOpen","handleSubMenuClicked"])),r=this.state.isOpen&&n?"folder-open":"folder",c=t.entries.map(function(e){return i.a.createElement(x,{key:"/entry/".concat(e.catId,"/").concat(e.id),entry:e})});return i.a.createElement(T,Object.assign({title:i.a.createElement("span",null,i.a.createElement(p.a,{type:r}),t.name)},a,{onTitleClick:this.handleTitleClick}),c)}}]),t}(a.Component),A=l.a.Sider;var K=function(e){function t(e){var n;Object(b.a)(this,t),n=Object(E.a)(this,Object(f.a)(t).call(this,e));var a,i=-1!==(a=e.location.pathname).indexOf("entry")?parseInt(a.split("/")[[a.split("/").length-2]],10):0;return n.state={activeSubMenuKeys:0!==i?["c".concat(i)]:[]},n.handleSubMenuClicked=n.handleSubMenuClicked.bind(Object(v.a)(n)),n.onAddEntryClicked=n.onAddEntryClicked.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(y.a)(t,[{key:"onAddEntryClicked",value:function(){this.setState({activeSubMenuKeys:[]})}},{key:"handleSubMenuClicked",value:function(e){this.setState(function(t){var n=t.activeSubMenuKeys,a=n.indexOf(e);return-1===a?n.push(e):n.splice(a,1),{activeSubMenuKeys:n}})}},{key:"render",value:function(){var e=this,t=this.state.activeSubMenuKeys,n=this.props,a=n.menuItems,r=n.location,c=a.map(function(n){var a=-1!==t.indexOf("c".concat(n.id));return i.a.createElement(H,{key:"c".concat(n.id),category:n,isSubMenuOpen:a,handleSubMenuClicked:e.handleSubMenuClicked})});return 0===c.length&&c.unshift(i.a.createElement(h.a.Item,{disabled:!0,key:"0"},i.a.createElement(p.a,{type:"exclamation"})," No entries found")),i.a.createElement(A,{className:"sidebar",width:250,style:{background:"#fff"}},i.a.createElement(I,{style:{height:"100%",borderRight:0}},i.a.createElement("div",{style:{padding:5,margin:5}},i.a.createElement(o.b,{to:"/new"},i.a.createElement(m.a,{onClick:this.onAddEntryClicked,type:"dashed",icon:"plus",size:"small",block:!0},"Add New"))),i.a.createElement(h.a,{selectedKeys:[r.pathname],openKeys:t,style:{borderRight:0},mode:"inline"},c)))}}]),t}(i.a.Component),N=Object(d.d)(K),B=(n(194),n(49));function U(){return i.a.createElement(B.a,{style:{margin:"16px 0"}},i.a.createElement(B.a.Item,null,"Home"),i.a.createElement(B.a.Item,null,"Category"),i.a.createElement(B.a.Item,null,"Entry"))}function R(){return i.a.createElement("div",null,i.a.createElement("p",null,"New Entry"))}var D=l.a.Content,F=[{id:1,name:"CategoryOne",entries:[{id:1,catId:1,name:"EntryOne",link:"one"},{id:2,catId:1,name:"EntryTwo",link:"two"},{id:3,catId:1,name:"EntryThree",link:"three"}]},{id:2,name:"CategoryTwo",entries:[{id:4,catId:2,name:"EntryFour",link:"four"},{id:5,catId:2,name:"EntryFive",link:"five"},{id:6,catId:2,name:"EntrySix",link:"six"}]},{id:3,name:"CategoryThree",entries:[{id:7,catId:3,name:"EntrySeven",link:"seven"},{id:8,catId:3,name:"EntryEight",link:"eight"},{id:9,catId:3,name:"EntryNine",link:"nine"}]}];var J=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,{style:{height:"100vh"}},i.a.createElement(N,{menuItems:F}),i.a.createElement(l.a,{style:{padding:"0 24px 24px"}},i.a.createElement(U,null),i.a.createElement(D,{style:{background:"#fff",padding:24,margin:0,minHeight:280}},i.a.createElement(d.a,{exact:!0,path:"/",component:u}),i.a.createElement(d.a,{path:"/new",component:R}),i.a.createElement(d.a,{path:"/entry/:cat/:id",component:s})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,1,2]]]);
//# sourceMappingURL=main.a31fe605.chunk.js.map