(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,a){e.exports=a(79)},63:function(e,t,a){},66:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),l=(a(63),a(66),a(17)),c=a(18),u=a(23),m=a(19),g=a(25),p=a(98),s=a(97),d=a(7),h=a(8);function b(){var e=Object(d.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tborder: none;\n\tbackground: none;\n"]);return b=function(){return e},e}var f=h.a.div(b()),y={color:"black",fontSize:"23px",letterSpacing:"3px",fontFamily:"Montserrat Light",fontWeight:650,marginTop:"5px",marginRight:"220px"},E={background:"transparent",marginTop:"10px"},v={color:"black",fontSize:"13px",fontFamily:"Montserrat Light",letterSpacing:"3px",fontWeight:650,marginTop:"13px",marginRight:"10px"},k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"mx-auto"},r.a.createElement(s.a,{style:E},r.a.createElement(s.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/",style:y},"NURIA POZAS"),r.a.createElement(s.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/",style:v},"HOME"),r.a.createElement(s.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/collections/all",style:v},"TIENDA"),r.a.createElement(s.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/pages/creatuvajilla",style:v},"VAJILLA A MEDIDA"),r.a.createElement(s.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/",style:v},"CURSOS"),r.a.createElement(s.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/cart",style:v},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-shopping-cart"})))))))}}]),t}(r.a.Component),x=a(39);function j(){var e=Object(d.a)(["\n\t\n\twidth: 100%;\n\theight: 100vh;\n\tbackground-color: white;\n\t\n\toverflow: hidden;\t\n}\n"]);return j=function(){return e},e}var I=h.a.div(j()),w=a(91),O=function(){return r.a.createElement("div",{style:{position:"absolute",display:"block",maxHeight:"auto",cursor:"grab"},onDragStart:function(e){e.dataTransfer.setDragImage(new Image,0,0),e.target.style.cursor="grab"},onDrag:function(e){e.target.style.cursor="grab";var t=document.getElementById("move"),a=parseInt(t.style.width)/2,n=parseInt(t.style.height)/2;t.style.left=e.clientX-a-parseInt(t.style.width)/2+"px",t.style.top=e.clientY-n-parseInt(t.style.height)/2+"px"},onDragOver:function(e){e.preventDefault()},draggable:!0},r.a.createElement("img",{style:{position:"relative",display:"block",maxWidth:"100%",maxHeight:"100%"},id:"img",draggable:!1,src:"",alt:""}))},C=a(54),L="",z=Object(n.forwardRef)(function(e,t){var a=Object(n.useState)(!1),i=Object(x.a)(a,2),o=(i[0],i[1]),l=Object(n.useState)(!1),c=Object(x.a)(l,2),u=c[0],m=c[1],g=null,p=[{id:"prueba",link:"http://nuria-pozas.myshopify.com/cart/add?id=36127397609636&quantity=1"},{id:"prueba2",link:"http://nuria-pozas.myshopify.com/cart/add?id=36196470456484&quantity=1"}],s=function(e){o(!0),document.getElementById("img").setAttribute("src","/nuriapozas/img/"+e+".png"),document.getElementById("img").getAttribute("src"),g=p.filter(function(t){return t.id===e}),L=g[0].link};return Object(n.useImperativeHandle)(t,function(){return{showToast:s}}),r.a.createElement(I,null,r.a.createElement("div",{style:{position:"absolute",backgroundColor:"black",backgroundImage:'url("img/fondoPlato.png")',backgroundPosition:"50% 50%",borderRadius:"50%",width:"600px",height:"600px",marginLeft:"10%",marginTop:"10%",justifyContent:"center",alignItems:"center",zIndex:"1",overflow:"hidden"},id:"fondo"},r.a.createElement("div",{style:{height:"500px",width:"500px"},id:"move"},r.a.createElement(O,null))),r.a.createElement("h2",{style:{height:"auto",fontFamily:"Montserrat Light",fontWeight:650,color:"black",marginTop:"40px",fontSize:"15px",backgroundColor:"none"}}," ","TU PLATO"," "),r.a.createElement("hr",null),r.a.createElement(C.a,{show:u,onClose:function(){return m(!1)},transition:!0,variant:"dark",dismissible:!0,fade:"true"},"Antes de a\xf1adir al carrito, selecciona un dibujo y mu\xe9velo por la pieza. Puedes hacerlo m\xe1s grande o m\xe1s peque\xf1o."),r.a.createElement(w.a,{style:{marginRight:"600px"},variant:"outline-dark",onClick:function(){if(""!==document.getElementById("img").getAttribute("src"))return window.parent.location.href=L;m(!0)}},"A\xd1ADIR AL CARRITO"),r.a.createElement(w.a,{id:"zoom",variant:"outline-dark",onClick:function(){var e=document.getElementById("move").style.height.toString().replace("px",""),t=parseInt(e)+20;document.getElementById("move").style.height=t+"px";var a=document.getElementById("move").style.width.toString().replace("px",""),n=parseInt(a)+20;document.getElementById("move").style.width=n+"px"}},r.a.createElement("i",{id:"iconZoom",className:"fa fa-search-plus fa-lg"})),r.a.createElement(w.a,{id:"zoomMinus",variant:"outline-dark",onClick:function(){var e=document.getElementById("move").style.height.toString().replace("px",""),t=parseInt(e)-20;document.getElementById("move").style.height=t+"px";var a=document.getElementById("move").style.width.toString().replace("px",""),n=parseInt(a)-20;document.getElementById("move").style.width=n+"px"}},r.a.createElement("i",{id:"iconZoom",className:"fa fa-search-minus fa-lg"})),r.a.createElement(w.a,{id:"zoomMinus",variant:"outline-dark",onClick:function(){document.getElementById("img").setAttribute("src",""),document.getElementById("move").style.top="0",document.getElementById("move").style.left="0",""}},r.a.createElement("i",{id:"iconZoom",className:"fa fa-trash fa-lg"})))});function A(){var e=Object(d.a)(["width: 100%;"]);return A=function(){return e},e}var B=h.a.div(A()),S=a(92),P=a(94),N=a(99),T=a(95);var R=function(){var e=Object(n.useRef)(null),t=Object(S.a)(function(e){return{root:{backgroundColor:"transparent"},gridList:{width:800,paddingBottom:"500px",paddingTop:"90px"},icon:{color:"rgba(255, 255, 255, 0.54)"}}});document.addEventListener("click",function(e){e.target.id},!1);var a=function(t){e.current.showToast(t.target.id)},i=t();return r.a.createElement("div",null,r.a.createElement("div",{className:"context"},r.a.createElement(z,{ref:e})),r.a.createElement("div",{className:"context"},r.a.createElement(B,null,r.a.createElement("div",{className:"context2",style:{overflow:"auto",height:"100vh"}},r.a.createElement("h2",{style:{height:"auto",fontFamily:"Montserrat Light",fontWeight:650,color:"black",marginTop:"40px",fontSize:"15px",backgroundColor:"none"}}," ","SELECCIONAR DIBUJO"),r.a.createElement("hr",null),r.a.createElement(P.a,{cellHeight:"300",cols:3,className:i.gridList,style:{marginLeft:"50px"}},[{img:"img/prueba.png",title:"Pi\xf1a",id:"prueba"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba4.png",title:"Nube",id:"prueba4"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"},{img:"img/prueba2.png",title:"Coral",id:"prueba2"},{img:"img/prueba3.png",title:"P\xe1jaros",id:"prueba3"}].map(function(e){return r.a.createElement(N.a,{key:e.img},r.a.createElement("img",{src:e.img,alt:e.title,id:e.id,class:"menu_links",onClick:a,draggable:"false"}),r.a.createElement(T.a,{title:e.title,style:{height:"auto",fontFamily:"Montserrat Light",backgroundColor:"none",color:"black"}}))}))))))};function D(){var e=Object(d.a)(["\n    height: 100%;\n"]);return D=function(){return e},e}var M=h.a.div(D()),W=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,r.a.createElement("div",null,r.a.createElement(R,null)))}}]),t}(r.a.Component);function _(){var e=Object(d.a)(["\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: grey;\n    color: white;\n    text-align: center;\n"]);return _=function(){return e},e}var F=h.a.footer(_()),H=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement("a",null,"Nuria Pozas Ceramic & Design 2020"))}}]),t}(r.a.Component);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(W,null),r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75),a(77);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[58,2,1]]]);
//# sourceMappingURL=main.acc26c86.chunk.js.map