(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(189)},137:function(e,t,a){},140:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),i=a.n(r),l=(a(137),a(140),a(100)),c=a(101),s=a(124),u=a(102),d=a(125),m=a(15),p=a(224),g=a(190),b=a(16),f=a(12),h=a(103),E=a(126),v=a(191),y=a(56),k=a.n(y),x=a(57),w=a.n(x);function j(){var e=Object(m.a)(["\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\tli {\n\t\tpadding: 18px 10px;\n\t}\n\t@media (max-width: 768px) {\n\t\tflex-flow: column nowrap;\n\t\tbackground-color: #ffffff;\n\t\tposition: fixed;\n\t\ttransform: ",";\n\t\ttop: 0;\n\t\tright: 0;\n\t\theight: 100vh;\n\t\twidth: 300px;\n\t\tpadding-top: 3.5rem;\n\t\ttransition: transform 0.3s ease-in-out;\n\t\tli {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\tz-index: 2;\n"]);return j=function(){return e},e}var I=b.a.ul(j(),function(e){return e.open?"translateX(0)":"translateX(100%)"}),O={color:"black",fontSize:"14px",letterSpacing:"2px",fontWeight:630,marginTop:"20px",marginRight:"10px"},z=k.a.buildClient({domain:"nuria-pozas.myshopify.com",storefrontAccessToken:"c23d72381b2e48034a6cb4d8bca27ad8"}),B=!1,C=w.a.UI.init(z),S=function(e){var t=e.open,a=Object(n.useState)(!1),r=Object(f.a)(a,2),i=r[0],l=r[1],c=Object(n.useRef)(null);return o.a.createElement(I,{open:t},o.a.createElement(g.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/",style:O},"HOME"),o.a.createElement(g.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/collections/all",style:O},"TIENDA"),o.a.createElement(g.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/pages/creatuvajilla",style:O},"VAJILLA A MEDIDA"),o.a.createElement(g.a.Link,{ref:c,target:"_parent",href:"",style:{color:"black",fontSize:"14px",marginTop:"20px",marginRight:"10px",padding:"5px"}},o.a.createElement("div",null,o.a.createElement("i",{className:"fa fa-shopping-cart  fa-lg",onClick:function(){void 0===C.components.cart[0]||null===C.components.cart[0]?(l(!0),setTimeout(function(){l(!1)},1e3)):(l(!1),B?(C.components.cart[0].isVisible=!1,B=!1):(setTimeout(function(){C.openCart()},5),B=!0))}}))),o.a.createElement(v.a,{target:c.current,show:i,placement:"right"},function(e){e.placement,e.arrowProps,e.show,e.popper;var t=Object(E.a)(e,["placement","arrowProps","show","popper"]);return o.a.createElement("div",Object.assign({},t,{style:Object(h.a)({backgroundColor:"white",padding:"2px 10px",color:"black",borderRadius:3},t.style)}),"Tu carrito est\xe1 vac\xedo")}))};function N(){var e=Object(m.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return N=function(){return e},e}var T=b.a.div(N(),function(e){return e.open?"#ccc":"#333"},function(e){return e.open?"rotate(45deg)":"rotate(0)"},function(e){return e.open?"translateX(100%)":"translateX(0)"},function(e){return e.open?0:1},function(e){return e.open?"rotate(-45deg)":"rotate(0)"}),A=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{open:a,onClick:function(){return r(!a)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(S,{open:a}))};function P(){var e=Object(m.a)(["\n\tbackground: transparent;\n\tmargin: 10px;\n\twidth: 100%;\n\theight: 55px;\n\tpadding: 0 20px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t.logo {\n\t\tpadding: 15px 0;\n\t}\n\tz-index: 1;\n"]);return P=function(){return e},e}var M={color:"black",fontSize:"25px",letterSpacing:"3px",fontWeight:600,marginTop:"5px",marginRight:"220px"},L=b.a.nav(P()),R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(p.a,null,o.a.createElement("div",{className:"mx-auto"},o.a.createElement(L,null,o.a.createElement(g.a.Link,{target:"_parent",href:"https://nuria-pozas.myshopify.com/",style:M},"NURIA POZAS"),o.a.createElement(A,null)))))}}]),t}(o.a.Component),D=a(55),q=a(111),U=a(227),F=a(210),_=a(211),H=a(114),W=a.n(H),X=a(33);function Z(){var e=Object(m.a)(["\n\ttop: 0px;\n\tleft: 0px;\n"]);return Z=function(){return e},e}function J(){var e=Object(m.a)(["\n\tmax-width: 100%;\n\tmax-height: 100%;\n\tcursor: move;\n"]);return J=function(){return e},e}function G(){var e=Object(m.a)(["\n\tposition: relative;\n\tdisplay: block;\n\tbackground-position: 50% 38%;\n\tbackground-color: white;\n\tbackground-size: 113%;\n\tborder-radius: 60%;\n\twidth: 60%;\n\theight: 60%;\n\tpadding-top: 60%;\n\tmargin: auto;\n\tobject-fit: cover;\n\tz-index: 1;\n\toverflow: hidden;\n"]);return G=function(){return e},e}var K=b.a.div(G()),V=b.a.img(J()),Y=b.a.div(Z()),Q=a(115),$=a.n(Q),ee=(a(162),""),te=0,ae=[],ne=Object(n.forwardRef)(function(e,t){var a=Object(n.useState)(!1),r=Object(f.a)(a,2),i=(r[0],r[1]),l=Object(n.useState)(""),c=Object(f.a)(l,2),s=(c[0],c[1],Object(n.useState)([])),u=Object(f.a)(s,2),d=u[0],m=u[1],p=Object(n.useState)(),g=Object(f.a)(p,2),b=(g[0],g[1]),h=Object(n.useState)("0px"),E=Object(f.a)(h,2),v=(E[0],E[1],Object(n.useState)(!1)),y=Object(f.a)(v,2),x=(y[0],y[1],k.a.buildClient({domain:"nuria-pozas.myshopify.com",storefrontAccessToken:"c23d72381b2e48034a6cb4d8bca27ad8"})),j=null,I=w.a.UI.init(x);X.apps.length||X.initializeApp({apiKey:"AIzaSyDEjGJmen7XuwDCFqveAH8kJ4Fhk65Ewpo",authDomain:"nuriapozas.firebaseapp.com",databaseURL:"https://nuriapozas.firebaseio.com",projectId:"nuriapozas",storageBucket:"nuriapozas.appspot.com",messagingSenderId:"1017937514584",appId:"1:1017937514584:web:9a88c4c9d003441c61ba2d",measurementId:"G-HVEQ3WDZS1"});X.firestore(),X.storage();var O=[{id:"prueba2",link:"5740167921828"},{id:"prueba3",link:"5740579913892"},{id:"prueba4",link:"5740555632804"},{id:"prueba5",link:"5740573851812"},{id:"prueba6",link:"5740184535204"},{id:"prueba7",link:"5740552650916"},{id:"prueba8",link:"5679030698148"},{id:"prueba9",link:"5740560646308"},{id:"prueba10",link:"5740576833700"},{id:"prueba11",link:"5740544589988"},{id:"prueba12",link:"5740172640420"},{id:"prueba13",link:"5740565037220"},{id:"prueba14",link:"5740541608100"},{id:"prueba15",link:"5740549111972"},{id:"prueba16",link:"5740583092388"},{id:"prueba17",link:"5740569067684"},{id:"prueba19",link:"5740587384996"},{id:"prueba20",link:"5740591186084"}],z=[{id:"prueba2",link:"5740168708260"},{id:"prueba3",link:"5740578865316"},{id:"prueba4",link:"5740553732260"},{id:"prueba5",link:"5740572049572"},{id:"prueba6",link:"5740185551012"},{id:"prueba7",link:"5740553207972"},{id:"prueba8",link:"5740149932196"},{id:"prueba9",link:"5740561465508"},{id:"prueba10",link:"5740577718436"},{id:"prueba11",link:"5740545573028"},{id:"prueba12",link:"5740174966948"},{id:"prueba13",link:"5740563955876"},{id:"prueba14",link:"5740535677092"},{id:"prueba15",link:"5740546523300"},{id:"prueba16",link:"5740584108196"},{id:"prueba17",link:"5740570017956"},{id:"prueba19",link:"5740586434724"},{id:"prueba20",link:"5740592300196"}],B=[{id:"prueba2",link:"5740159172772"},{id:"prueba3",link:"5740581355684"},{id:"prueba4",link:"5740556648612"},{id:"prueba5",link:"5740575129764"},{id:"prueba6",link:"5740182634660"},{id:"prueba7",link:"5740551176356"},{id:"prueba8",link:"5740151898276"},{id:"prueba9",link:"5740558450852"},{id:"prueba10",link:"5740575948964"},{id:"prueba11",link:"5740543574180"},{id:"prueba12",link:"5740154257572"},{id:"prueba13",link:"5740566708388"},{id:"prueba14",link:"5740542296228"},{id:"prueba15",link:"5740550193316"},{id:"prueba16",link:"5740582142116"},{id:"prueba17",link:"5740567953572"},{id:"prueba19",link:"5740588302500"},{id:"prueba20",link:"5740589744292"}],C=function(e,t,a,n,o,r,l){if(i(!0),document.getElementById("img").setAttribute("src",""),document.getElementById("img").setAttribute("src","/nuriapozas/img/"+e+".png"),1===l);else{void 0===r?te=0:(te=r.slice(7,-4),te=parseInt(te),isNaN(te)&&(te=0),document.getElementById("move").style.transform=r),document.getElementById("move").style.width=n,document.getElementById("move").style.height=o,document.getElementById("move2").style.transform="translate("+a+"px,"+t+"px)",document.getElementById("move2").style.width=n,document.getElementById("move2").style.height=o,b(l),""===e?ee=null:(j=d.filter(function(t){return t.id===e}),""!==e&&void 0!==j&&(ee=j[0].link));var c=A();ae.push({key:c,img:null}),s=c,u=ee,document.getElementById("carrito").innerHTML="",I.createComponent("product",{id:u,customAttributes:{key:"Link de imagen",value:"https://firebasestorage.googleapis.com/v0/b/nuriapozas.appspot.com/o/"+s+"?alt=media"},node:document.getElementById("carrito"),moneyFormat:"%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",options:{product:{events:{addVariantToCart:function(e){N(s),document.getElementById("img").setAttribute("src",""),document.getElementById("carrito").innerHTML=""}},contents:{img:!1,title:!1,price:!1},styles:{product:{"@media (min-width: 601px)":{"max-width":"calc(25% - 20px)","margin-left":"20px","margin-bottom":"50px"}},button:{"font-family":"Montserrat, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px",color:"white",":hover":{color:"#000000","background-color":"#e6e6e6"},"background-color":"black",":focus":{"background-color":"#e6e6e6"}},quantityInput:{"font-size":"16px","padding-top":"16px","padding-bottom":"16px"}},order:["img","title","price","options","quantity","button"],text:{button:"A\xf1adir al carrito"},googleFonts:["Montserrat"]},productSet:{styles:{products:{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},modalProduct:{contents:{img:!1,imgWithCarousel:!0,button:!1,buttonWithQuantity:!0},styles:{product:{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},button:{"font-family":"Montserrat, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px",color:"#e9ecef",":hover":{color:"#000000","background-color":"#e6e6e6"},"background-color":"#e9ecef",":focus":{"background-color":"#e6e6e6"}},quantityInput:{"font-size":"16px","padding-top":"16px","padding-bottom":"16px"}},googleFonts:["Montserrat"],text:{button:"A\xf1adir al carrito"}},cart:{events:{openCheckout:function(e){console.log(ae),T()}},styles:{button:{"font-family":"Montserrat, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px",top:"0px",color:"#000000",":hover":{color:"#000000","background-color":"#e6e6e6"},"background-color":"#ffffff",":focus":{"background-color":"#e6e6e6"}},title:{color:"#252424"},header:{color:"#252424"},lineItems:{color:"#252424"},subtotalText:{color:"#252424"},subtotal:{color:"#252424"},notice:{color:"#252424"},currency:{color:"#252424"},close:{color:"#252424",":hover":{color:"#252424"}},empty:{color:"#252424"},noteDescription:{color:"#252424"},discountText:{color:"#252424"},discountIcon:{fill:"#252424"},discountAmount:{color:"#252424"}},text:{title:"Carrito",total:"Subtotal",empty:"Tu carrito est\xe1 vac\xedo",button:"TRAMITAR",notice:"Los costes de env\xedo o descuentos ser\xe1n calculados en el momento del pago."},popup:!1,googleFonts:["Montserrat"]},toggle:{styles:{toggle:{visibility:"hidden","font-family":"Montserrat, sans-serif","background-color":"#e9ecef",":hover":{"background-color":"#e6e6e6"},":focus":{"background-color":"#e6e6e6"}},count:{visibility:"hidden","font-size":"16px",color:"#000000",":hover":{color:"#000000"}},iconPath:{visibility:"hidden",fill:"#000000"}},googleFonts:["Montserrat"]},lineItem:{order:["image","title","variantTitle","quantity","price","priceWithDiscounts"],styles:{variantTitle:{color:"#252424"},title:{color:"#252424"},price:{color:"#252424"},fullPrice:{color:"#252424"},discount:{color:"#252424"},discountIcon:{fill:"#252424"},quantity:{color:"#252424"},quantityIncrement:{color:"#252424","border-color":"#252424"},quantityDecrement:{color:"#252424","border-color":"#252424"},quantityInput:{color:"#252424","border-color":"#252424"}}}}})}var s,u},S=function(e){"1"===e?(m(O),document.getElementById("fondo").style.backgroundImage="url('img/fondoPlato.png')"):"2"===e?(m(z),document.getElementById("fondo").style.backgroundImage="url('img/fondoPlato.png')"):"3"===e&&(m(B),document.getElementById("fondo").style.backgroundImage="url('img/cuenco.png')")},N=function(e){var t=document.getElementById("fondo");$()(t,{backgroundColor:null,useCORS:!0,allowTaint:!1,scrollY:-window.scrollY}).then(function(t){var a=t.toDataURL("image/png",1),n=ae.findIndex(function(t){return t.key===e});ae[n].img=a})},T=function(){for(var e=0;e<ae.length;e++)M(ae[e].img,ae[e].key)},A=function(){for(var e="",t=0;t<12;t++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(12*Math.random()));return e},P=function(){setTimeout(function(){I.openCart()},3e3)},M=function(e,t){if(null!==e){var a,n=X.storage().ref().child(t).putString(e,"data_url");return n.on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case X.storage.TaskState.PAUSED:console.log("Upload is paused");break;case X.storage.TaskState.RUNNING:console.log("Upload is running")}},function(e){},function(){n.snapshot.ref.getDownloadURL().then(function(e){a=e})}),Promise.resolve(a)}};return Object(n.useImperativeHandle)(t,function(){return{showToast:C,setFondoA:S,abrir:P}}),o.a.createElement("div",{id:"fer"},o.a.createElement(U.a,{placement:"top",overlay:o.a.createElement(F.a,null,"Aumenta el tama\xf1o")},o.a.createElement(_.a,{id:"zoom",className:"pepe",variant:"outline-dark",onClick:function(){var e=document.getElementById("move").style.height.toString().replace("px",""),t=parseInt(e)+20;document.getElementById("move").style.height=t+"px";var a=document.getElementById("move").style.width.toString().replace("px",""),n=parseInt(a)+20;document.getElementById("move").style.width=n+"px"}},o.a.createElement("i",{id:"iconZoom",className:"fa fa-search-plus fa-lg"}))),o.a.createElement(U.a,{placement:"top",overlay:o.a.createElement(F.a,null,"Disminuye el tama\xf1o")},o.a.createElement(_.a,{id:"zoom1",className:"pepe",variant:"outline-dark",onClick:function(){var e=document.getElementById("move").style.height.toString().replace("px",""),t=parseInt(e)-20;document.getElementById("move").style.height=t+"px";var a=document.getElementById("move").style.width.toString().replace("px",""),n=parseInt(a)-20;document.getElementById("move").style.width=n+"px"}},o.a.createElement("i",{id:"iconZoom",className:"fa fa-search-minus fa-lg"}))),o.a.createElement(U.a,{placement:"top",overlay:o.a.createElement(F.a,null,"Rota izquierda")},o.a.createElement(_.a,{id:"zoomMinus",className:"pepe",variant:"outline-dark",onClick:function(){te-=20,document.getElementById("move").style.transform="rotate("+te+"deg)"}},o.a.createElement("i",{id:"iconZoom",className:"fa fa-undo fa-lg"}))),o.a.createElement(U.a,{placement:"top",overlay:o.a.createElement(F.a,null,"Rota derecha")},o.a.createElement(_.a,{id:"zoomMinus",className:"pepe",variant:"outline-dark",onClick:function(){te+=20,document.getElementById("move").style.transform="rotate("+te+"deg)"}},o.a.createElement("i",{id:"iconZoom",className:"fa fa-repeat fa-lg"}))),o.a.createElement(K,{style:{backgroundImage:{pru:'url("img/fondoPlato.png")'},backgroundColor:"white"},id:"fondo"},o.a.createElement(W.a,{handle:"#img"},o.a.createElement("div",{id:"move2",style:{top:"0px",left:"0px",height:"300px",width:"300px",position:"absolute"}},o.a.createElement(Y,{id:"move",style:{height:"300px",width:"300px"}},o.a.createElement(V,{id:"img",draggable:!1,src:"",alt:""}))))),o.a.createElement("div",{id:"carrito"}))}),oe=a(228),re=a(217),ie=a(218),le=a(219),ce=a(225),se=a(220),ue=a(212),de=a(221),me=a(226),pe=a(222),ge=a(214),be=a(215),fe=a(216);function he(){var e=Object(m.a)(["\n\tposition: relative;\n\twidth: 100%;\n\tjustify-content: space-around;\n\tbackground-color: transparent;\n"]);return he=function(){return e},e}function Ee(){var e=Object(m.a)(["\n\tposition: relative;\n\tdisplay: block;\n\toverflow: hidden;\n\theight: auto;\n\tdisplay: block;\n\twidth: 100%;\n"]);return Ee=function(){return e},e}function ve(){var e=Object(m.a)(["\n\tposition: relative;\n\toverflow: auto;\n\theight: 100vh;\n\tdisplay: block;\n\twidth: 100%;\n"]);return ve=function(){return e},e}function ye(){var e=Object(m.a)(["\n\t\xba: relative;\n\tfont-weight: 600;\n\tcolor: black;\n\tmargin-top: 40px;\n\tfont-size: 15px;\n\tletter-spacing: 2px;\n\n\tbackground-color: none;\n"]);return ye=function(){return e},e}function ke(){var e=Object(m.a)(["\n\tposition: relative;\n\tfont-weight: 600;\n\tcolor: black;\n\tmargin-top: 40px;\n\tfont-size: 15px;\n\tletter-spacing: 2px;\n\tbackground-color: none;\n"]);return ke=function(){return e},e}function xe(){var e=Object(m.a)(["\n\tposition: static;\n\toverflow: auto;\n\theight: 100%;\n\twidth: 100%;\n"]);return xe=function(){return e},e}function we(){var e=Object(m.a)(["\n\tposition: relative;\n\tdisplay: block;\n\tbackground-position: 50% 50%;\n\tbackground-size: cover;\n\tborder-radius: 50%;\n\twidth: 60%;\n\theight: auto;\n\tpadding-top: 60%;\n\tmargin: auto;\n\tmargin-bottom: 2%;\n\tobject-fit: cover;\n\tz-index: 1;\n\toverflow: hidden;\n"]);return we=function(){return e},e}b.a.div(we());var je=b.a.div(xe()),Ie=(b.a.h2(ke()),b.a.h2(ye())),Oe=b.a.div(ve()),ze=b.a.div(Ee()),Be=b.a.div(he());var Ce=function(){var e={opacity:"0.4",pointerEvents:"none",overflowX:"hidden"},t=Object(n.useRef)(null),a=Object(n.useState)(!0),r=Object(f.a)(a,2),i=r[0],l=r[1],c=Object(n.useState)(!1),s=Object(f.a)(c,2),u=s[0],d=s[1],m=Object(n.useState)(0),p=Object(f.a)(m,2),g=(p[0],p[1],Object(n.useState)(e)),b=Object(f.a)(g,2),h=(b[0],b[1]),E=Object(n.useState)(e),v=Object(f.a)(E,2),y=v[0],k=v[1],x=Object(n.useState)(1),w=Object(f.a)(x,2),j=w[0],I=w[1],O=Object(n.useState)(0),z=Object(f.a)(O,2),B=z[0],C=(z[1],Object(n.useState)(1)),S=Object(f.a)(C,2),N=S[0],T=S[1],A=Object(n.useState)(),P=Object(f.a)(A,2),M=P[0],L=(P[1],Object(n.useState)([])),R=Object(f.a)(L,2),H=R[0],W=R[1],X=Object(ue.a)(function(e){return{gridList:{position:"relative",justifyContent:"space-around",overflow:"auto",backgroundColor:"transparent",width:"50%",height:"auto",paddingBottom:"30%",paddingTop:"5px",overflowX:"hidden"},icon:{color:"rgba(255, 255, 255, 0.54)"}}});document.addEventListener("click",function(e){e.target.id},!1);var Z=function(e){document.getElementById("move2").style.transform="translate(0px,0px)",document.getElementById("move").style.transform="translate(0px,0px)";var a={name:e.target.id,top:0,left:0,width:"300px",height:"300px",angle:"rotate(000 deg)"},n=H;n[B]=a,W(n),t.current.showToast(e.target.id,a.top,a.left,a.width,a.height,a.angle,M)},J=function(a){l(!1),I(2),k(e=null),t.current.setFondoA(a.target.id)},G=X();return o.a.createElement(je,{className:"first"},o.a.createElement(q.a,{steps:[{target:".second",disableBeacon:!0,content:"Selecciona el tipo pieza haciendo click en la imagen correspondiente.\n\nUna vez seleccionada te llevar\xe1 a la p\xe1gina de personalizaci\xf3n."},{target:"body",disableBeacon:!0,content:"Aqui es donde podr\xe1s personalizar la pieza."},{target:".third",disableBeacon:!0,content:"Primero selecciona un dibujo haciendo click sobre su imagen."},{target:".four",disableBeacon:!0,content:"Una vez seleccionado un dibujo puedes moverlo por la pieza a tu gusto. Pulsa el bot\xf3n que aparecer\xe1 debajo de la pieza para a\xf1adir al carrito."},{target:"#zoom",disableBeacon:!0,content:"Puedes girar, aumentar y disminuir el tama\xf1o del dibujo con estos controles."},{target:"#trash",disableBeacon:!0,content:"Tambi\xe9n puedes eliminar el dise\xf1o aqu\xed o haciendo click en otra imagen."},{target:"#back",disableBeacon:!0,content:"Para escoger otro tipo de pieza pulsa atr\xe1s. \xa1Personaliza tantas como quieras!"}],run:u,continuous:!0,showProgress:!0,showSkipButton:!0,key:N,callback:function(a){"step:after"===a.type&&1===a.index&&t.current.showToast("prueba4",0,0,"500px","500px",1,1),1===a.index&&(l(!1),I(2),k(e=null),document.getElementById("fondo").style.backgroundImage="url('img/fondoPlato.png')"),"finished"===a.status&&(l(!0),h(e),I(1),k(e={opacity:"0.4",pointerEvents:"none"}),t.current.showToast(""))},styles:{options:{arrowColor:"#e9ecef",backgroundColor:"#e9ecef",whiteSpace:"pre-line",primaryColor:"#000",textColor:"black",spotlightShadow:"0 0 15px rgba(0, 0, 0, 0.5)",zIndex:1e3}}}),o.a.createElement(ge.a,{fluid:!0},o.a.createElement(be.a,null,o.a.createElement(fe.a,null,o.a.createElement(ge.a,{fluid:!0},o.a.createElement(oe.a,{defaultActiveKey:"1",activeKey:j,id:"uncontrolled-tab-example",style:{marginTop:"75px"}},o.a.createElement(re.a,{eventKey:"1",tabClassName:"d-none",title:"Elige",className:"second2"},o.a.createElement(ie.a,{fluid:!0,style:{marginTop:"10px"}},o.a.createElement(ge.a,null,o.a.createElement("h2",null,"Crea tu propia vajilla personalizada"," ",o.a.createElement(le.a,{variant:"secondary"},"\xa1Nuevos dise\xf1os!")),o.a.createElement("p",null,"*El producto est\xe1 hecho a mano, por tanto recibir\xe1s una aproximaci\xf3n al dise\xf1o mostrado."),o.a.createElement(U.a,{placement:"top",overlay:o.a.createElement(F.a,null,"Empezar tutorial")},o.a.createElement(_.a,{variant:"outline-dark",onClick:function(){T(N+1),d(!0)}},"\xbfComo funciona?"))),o.a.createElement("div",{style:{marginTop:"20px"}},o.a.createElement(ge.a,{className:"second"},o.a.createElement(be.a,null,o.a.createElement(fe.a,{xs:12,md:4},o.a.createElement(U.a,{trigger:"hover",placement:"bottom",overlay:o.a.createElement(ce.a,null,o.a.createElement(ce.a.Title,{as:"h3"},"Plato llano grande"),o.a.createElement(ce.a.Content,null,"Medida aproximada de 27cm"," "))},o.a.createElement("div",null,o.a.createElement("h6",null,o.a.createElement(le.a,{variant:"dark",style:{top:"45%",left:"38%",position:"absolute",cursor:"pointer"},onClick:J,id:"1"},"Plato 27cm")),o.a.createElement(se.a,{src:"img/fondoPlato27Peq.png",onClick:J,id:"1",style:{cursor:"pointer"},rounded:!0})))),o.a.createElement(fe.a,{xs:12,md:4},o.a.createElement(U.a,{trigger:"hover",placement:"bottom",overlay:o.a.createElement(ce.a,null,o.a.createElement(ce.a.Title,{as:"h3"},"Plato llano mediano"),o.a.createElement(ce.a.Content,null,"Medida aproximada de 22cm"," "))},o.a.createElement("div",null,o.a.createElement("h6",null,o.a.createElement(le.a,{variant:"dark",style:{top:"45%",left:"38%",position:"absolute",cursor:"pointer"},onClick:J,id:"2"},"Plato 22cm")),o.a.createElement(se.a,{src:"img/fondoPlato22Peq.png",onClick:J,id:"2",style:{cursor:"pointer",marginTop:"10px"},rounded:!0})))),o.a.createElement(fe.a,{xs:12,md:4},o.a.createElement(U.a,{trigger:"hover",placement:"bottom",overlay:o.a.createElement(ce.a,null,o.a.createElement(ce.a.Title,{as:"h3"},"Cuenco"),o.a.createElement(ce.a.Content,null,"Medida aproximada de 15cm"," "))},o.a.createElement("div",null,o.a.createElement("h6",null,o.a.createElement(le.a,{variant:"dark",style:{top:"45%",left:"38%",position:"absolute",cursor:"pointer"},onClick:J,id:"3"},"Cuenco 15cm")),o.a.createElement(se.a,{src:"img/cuencoPeq.png",onClick:J,id:"3",style:{cursor:"pointer",marginTop:"20px"},rounded:!0}))))))))),o.a.createElement(re.a,{eventKey:"2",tabClassName:"d-none",hidden:i,title:"Dise\xf1a"},o.a.createElement(U.a,{placement:"top",overlay:o.a.createElement(F.a,null,"Atr\xe1s")},o.a.createElement("i",{className:"fa fa-arrow-left fa-2x",hidden:i,id:"back",style:{border:"black",cursor:"pointer",marginRight:"90%",marginTop:"10px"},onClick:function(){I(1),k(e)}})),o.a.createElement(U.a,{placement:"top",overlay:o.a.createElement(F.a,null,"Elimina el dise\xf1o")},o.a.createElement(_.a,{id:"trash",className:"pepe",variant:"outline-dark",onClick:function(){document.getElementById("img").setAttribute("src",""),document.getElementById("move2").style.transform="translate(0px,0px)",document.getElementById("move").style.transform="translate(0px,0px)",document.getElementById("carrito").innerHTML=""}},o.a.createElement("i",{id:"iconZoom",className:"fa fa-trash fa-lg"}))),o.a.createElement(ze,{className:"four"},o.a.createElement(ne,{ref:t})))))),o.a.createElement(fe.a,{id:"colnoscroll"},o.a.createElement(ge.a,{fluid:!0,id:"cara"},o.a.createElement(Ie,null," SELECCIONAR DIBUJO "),o.a.createElement("hr",null),o.a.createElement(Oe,{id:"context2",style:y},o.a.createElement(Be,null,o.a.createElement(de.a,Object(D.a)({cellHeight:"300",cols:3,className:G.gridList},"className","third"),[{img:"img/prueba4.png",title:"Medusa azul",id:"prueba4",colection:"Minimalista"},{img:"img/prueba9.png",title:"Medusa negra",id:"prueba9",colection:"Minimalista"},{img:"img/prueba13.png",title:"Medusa amarilla",id:"prueba13",colection:"Minimalista"},{img:"img/prueba17.png",title:"Medusa rosada",id:"prueba17",colection:"Minimalista"},{img:"img/prueba3.png",title:"Faro",id:"prueba3",colection:"Salitre"},{img:"img/prueba16.png",title:"Orca",id:"prueba16",colection:"Salitre"},{img:"img/prueba19.png",title:"Ping\xfcino",id:"prueba19",colection:"Salitre"},{img:"img/prueba20.png",title:"Cangrejo",id:"prueba20",colection:"Salitre"},{img:"img/prueba7.png",title:"Ciervo",id:"prueba7",colection:"C\xe9rvidos"},{img:"img/prueba8.png",title:"Cebolla",id:"prueba8",colection:"Bocados"},{img:"img/prueba12.png",title:"Guindilla",id:"prueba12",colection:"Bocados"},{img:"img/prueba14.png",title:"Setas",id:"prueba14",colection:"Bocados"},{img:"img/prueba5.png",title:"Luna llena",id:"prueba5",colection:"Noche"},{img:"img/prueba10.png",title:"Luna creciente",id:"prueba10",colection:"Noche"},{img:"img/prueba2.png",title:"Nen\xfafar",id:"prueba2",colection:"Bot\xe1nica"},{img:"img/prueba6.png",title:"Olivo",id:"prueba6",colection:"Bot\xe1nica"},{img:"img/prueba11.png",title:"Calas",id:"prueba11",colection:"Bot\xe1nica"},{img:"img/prueba15.png",title:"Blue",id:"prueba15",colection:"Bot\xe1nica"}].map(function(e){return o.a.createElement(me.a,{key:e.img},o.a.createElement("img",{src:e.img,alt:e.title,id:e.id,class:"menu_links",onClick:Z,draggable:"false"}),o.a.createElement(pe.a,{title:e.title,subtitle:e.colection,style:{height:"auto",backgroundColor:"none",color:"black"}}))})))))))))},Se=a(34),Ne=function(){return o.a.createElement(Se.e,{color:"blue",className:"font-small pt-4 mt-4"},o.a.createElement("hr",{style:{width:"50px",marginBottom:"70px",marginLeft:"50%",height:"2px",border:"none",backgroundColor:"black"}}),o.a.createElement(Se.d,{fluid:!0,className:"text-center text-md-left",style:{marginBottom:"70px"}},o.a.createElement(Se.j,null,o.a.createElement(Se.c,{md:"2",style:{marginLeft:"20%",marginRight:"0px",padding:"none"}},o.a.createElement("ul",null,o.a.createElement("li",{className:"list-unstyled"},o.a.createElement("a",{href:"https://nuriapozasceramic.com/policies/terms-of-service"},"T\xe9rminos del servicio")),o.a.createElement("li",{className:"list-unstyled"},o.a.createElement("a",{href:"https://nuriapozasceramic.com/policies/refund-policy"},"Pol\xedtica de reembolso")),o.a.createElement("li",{className:"list-unstyled"},o.a.createElement("a",{href:"https://nuriapozasceramic.com/policies/legal-notice"},"Aviso legal")),o.a.createElement("li",{className:"list-unstyled"},o.a.createElement("a",{href:"https://nuriapozasceramic.com/policies/privacy-policy"},"Pol\xedtica de privacidad")))),o.a.createElement(Se.c,{md:"2",style:{padding:"none"}},o.a.createElement("ul",null,o.a.createElement("li",{className:"list-unstyled"},o.a.createElement("a",{href:"https://www.facebook.com/nuriapozasceramica"}," ",o.a.createElement("i",{class:"fa fa-facebook-f"}," ")," Facebook")),o.a.createElement("li",{className:"list-unstyled"},o.a.createElement("a",{href:"https://www.instagram.com/nuria_pozas/?hl=es"}," ",o.a.createElement("i",{class:"fa fa-instagram"}," ")," Instagram")))),o.a.createElement(Se.c,{md:"2",style:{padding:"none",justifyItems:"right"}},o.a.createElement(Se.d,{fluid:!0,id:"fff"},"\xa9 ",(new Date).getFullYear(),o.a.createElement("a",{href:"https://www.nuriapozasceramic.com"},", Nuria Pozas ")),o.a.createElement("img",{src:"img/pago.PNG",draggable:"false"})))))};var Te=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(R,null),o.a.createElement(Ce,null),o.a.createElement(Ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(185),a(187);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[132,2,1]]]);
//# sourceMappingURL=main.ee32f126.chunk.js.map