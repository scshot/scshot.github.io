(this.webpackJsonpscshot=this.webpackJsonpscshot||[]).push([[0],{19:function(t,e,i){},20:function(t,e,i){},31:function(t,e){},32:function(t,e){},33:function(t,e){},37:function(t,e,i){"use strict";i.r(e);var a=i(1),s=i.n(a),n=i(7),c=i.n(n),r=i(8),o=i(9),d=i(10),l=i(3),u=i(14),h=i(13),v=(i(19),i(20),i(39)),j=i(11),p=i.n(j),m=(i(22),i(23),i(12)),g=i.n(m),b=i(0),f=function(t){Object(u.a)(i,t);var e=Object(h.a)(i);function i(t){var a;return Object(o.a)(this,i),(a=e.call(this,t)).editorRef=s.a.createRef(),a.video=s.a.createRef(),a.active=!1,a.state={mode:"start",export:"",img:""},p()(Object(l.a)(a)),a}return Object(d.a)(i,[{key:"capture",value:function(){var t=this;navigator.mediaDevices.getDisplayMedia({video:{cursor:"never"},audio:!1}).then((function(e){t.active=!0,t.video.current.srcObject=e,e.oninactive=function(){t.active=!1,"capture"===t.state.mode&&t.setState({mode:"start"})},t.setState({mode:"capture"})}))}},{key:"stop",value:function(){this.video.current.srcObject.getTracks().forEach((function(t){return t.stop()})),this.video.current.srcObject=null}},{key:"take",value:function(){var t=this,e=document.createElement("canvas");e.width=this.video.current.videoWidth,e.height=this.video.current.videoHeight,e.getContext("2d").drawImage(this.video.current,0,0,e.width,e.height);var i=e.toDataURL();this.editor.ui.initializeImgUrl=i,this.editor._mainAction().reset(),setTimeout((function(){return t.editor.ui._initMenu()})),this.setState({mode:"editor"})}},{key:"back",value:function(){this.setState({mode:this.active?"capture":"start"})}},{key:"copy",value:function(){this.editor._graphics._canvas.lowerCanvasEl.toBlob((function(t){navigator.clipboard.write([new window.ClipboardItem(Object(r.a)({},t.type,t))])}),"image/png",1)}},{key:"canvasUpdate",value:function(){console.log("update"),this.setState({export:this.editor.toDataURL()})}},{key:"componentDidMount",value:function(){this.editor=this.editorRef.current.getInstance(),window.editor=this.editor,this.editor._graphics._canvas.upperCanvasEl.addEventListener("contextmenu",(function(t){return t.preventDefault()})),this.editor.on("undoStackChanged",this.canvasUpdate),this.editor.on("redoStackChanged",this.canvasUpdate)}},{key:"render",value:function(){var t=this,e=function(e){return e===t.state.mode?"":"none"};return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)("div",{id:"margin",style:{display:"editor"===this.state.mode?"none":""}}),Object(b.jsxs)("div",{className:"parent",style:{display:"editor"===this.state.mode?"none":""},children:[Object(b.jsxs)("div",{style:{display:e("start")},id:"start",children:[Object(b.jsx)("h1",{children:"SCShot"}),Object(b.jsx)("p",{children:"Take Screenshots online without installing anything and there's a built-in editor."}),Object(b.jsxs)(v.a,{variant:"primary",onClick:this.capture,children:[Object(b.jsx)("img",{className:"icon",src:"imgs/desktop-outline.svg",alt:""}),"\xa0 Start Screen Capture"]})]}),Object(b.jsxs)("div",{style:{display:e("capture")},id:"capture",children:[Object(b.jsxs)("div",{id:"captureButtons",children:[Object(b.jsxs)(v.a,{variant:"secondary",onClick:this.capture,children:[Object(b.jsx)("img",{className:"icon",src:"imgs/refresh-outline.svg",alt:""}),"\xa0 New Screen Capture"]}),Object(b.jsxs)(v.a,{variant:"danger",onClick:this.stop,children:[Object(b.jsx)("img",{className:"icon",src:"imgs/stop-circle-outline.svg",alt:""}),"\xa0 Stop Capture"]}),Object(b.jsxs)(v.a,{variant:"primary",onClick:this.take,id:"take",children:[Object(b.jsx)("img",{className:"icon",src:"imgs/desktop-outline.svg",alt:""}),"\xa0 Take Screenshot"]})]}),Object(b.jsx)("video",{ref:this.video,autoPlay:!0})]})]}),Object(b.jsxs)("div",{className:"editor",style:{display:e("editor")},children:[Object(b.jsxs)("div",{className:"editor-header",children:[Object(b.jsxs)(v.a,{variant:"secondary",onClick:this.back,children:[Object(b.jsx)("img",{className:"icon",src:"imgs/arrow-back-outline.svg",alt:""}),"\xa0 Back"]}),Object(b.jsxs)(v.a,{variant:"primary",className:"export",href:this.state.export,download:!0,children:[Object(b.jsx)("img",{className:"icon",src:"imgs/save-outline.svg",alt:""}),"\xa0 Save"]}),Object(b.jsxs)(v.a,{variant:"primary",className:"export",onClick:this.copy,children:[Object(b.jsx)("img",{className:"icon",src:"imgs/clipboard-outline.svg",alt:""}),"\xa0 Copy to Clipboard"]})]}),Object(b.jsx)("div",{className:"direct",children:Object(b.jsx)(g.a,{includeUI:{initMenu:"crop",loadImage:{path:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",name:"Screenshot"},uiSize:{width:"100%",height:"100%"},menuBarPosition:"bottom"},selectionStyle:{cornerSize:20,rotatingPointOffset:70},usageStatistics:!1,ref:this.editorRef})})]})]})}}]),i}(a.Component),O=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,40)).then((function(e){var i=e.getCLS,a=e.getFID,s=e.getFCP,n=e.getLCP,c=e.getTTFB;i(t),a(t),s(t),n(t),c(t)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),O()}},[[37,1,2]]]);
//# sourceMappingURL=main.2c5cdf46.chunk.js.map