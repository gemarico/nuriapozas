import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button, Form, Col, Tabs, Tab, OverlayTrigger, Tooltip } from "react-bootstrap";
import Draggable from "react-draggable";
import * as firebase from "firebase";
import Alert from "react-bootstrap/Alert";
import Client from "shopify-buy";
import { DivStyle, DivFrame, ImgStyle } from "./Platos.style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
var enlace = "";
var imagenes = [];
var link;
var productos = [];
var input = [];
var pru = 'url("img/fondoPlato.png")';
const Platos = forwardRef((props, ref) => {
	const [ value, setValue ] = useState(false);
	const [ fondo, setFondo ] = useState("");
	const [ coor, setCoor ] = useState("");
	const [ top, setTop ] = useState("0px");
	const [ left, setLeft ] = useState("0px");
	const [ show, setShow ] = useState(false);
	const client = Client.buildClient({
		domain: "nuria-pozas.myshopify.com",
		storefrontAccessToken: "c23d72381b2e48034a6cb4d8bca27ad8"
	});
	var data = null;

	var config = {
		apiKey: "AIzaSyDEjGJmen7XuwDCFqveAH8kJ4Fhk65Ewpo",
		authDomain: "nuriapozas.firebaseapp.com",
		databaseURL: "https://nuriapozas.firebaseio.com",
		projectId: "nuriapozas",
		storageBucket: "nuriapozas.appspot.com",
		messagingSenderId: "1017937514584",
		appId: "1:1017937514584:web:9a88c4c9d003441c61ba2d",
		measurementId: "G-HVEQ3WDZS1"
	};
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}
	const db = firebase.firestore();

	var storage = firebase.storage();
	// Create a root reference

	const links = [
		{
			id: "prueba",
			link: "36127397609636"
		},
		{
			id: "prueba2",
			link: "36196470456484"
		},
		{
			id: "prueba3",
			link: "36196478288036"
		},
		{
			id: "prueba4",
			link: "36196485759140"
		}
	];

	const showToast = (name, xX, xY, w, h) => {
		setValue(true);
		document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
		document.getElementById("move").style.transform = "translate(" + xY + "px," + xX + "px)";
		document.getElementById("move").style.width = w;
		document.getElementById("move").style.height = h;
		data = links.filter((item) => item.id === name);
		if (name !== "") {
			enlace = data[0].link;
		}
		if (name === "") {
			enlace = null;
		}
	};

	const setFondoA = (fondo) => {
		document.getElementById("fondo").style.backgroundImage = fondo;
	};

	const zoomOut = () => {
		let str = document.getElementById("move").style.height.toString();
		var alturaAux = str.replace("px", "");
		var alturaNew = parseInt(alturaAux) - 20;
		document.getElementById("move").style.height = alturaNew + "px";
		let str2 = document.getElementById("move").style.width.toString();
		var anchoAux = str2.replace("px", "");
		var anchoNew = parseInt(anchoAux) - 20;
		document.getElementById("move").style.width = anchoNew + "px";
	};

	const zoomIn = () => {
		let str = document.getElementById("move").style.height.toString();
		var alturaAux = str.replace("px", "");
		var alturaNew = parseInt(alturaAux) + 20;
		document.getElementById("move").style.height = alturaNew + "px";
		let str2 = document.getElementById("move").style.width.toString();
		var anchoAux = str2.replace("px", "");
		var anchoNew = parseInt(anchoAux) + 20;
		document.getElementById("move").style.width = anchoNew + "px";
	};

	const crearProducto = (name, index) => {
		const page = document.getElementById("fondo");
		html2canvas(page, {
			backgroundColor: null,
			useCORS: true,
			allowTaint: false,
			scrollY: -window.scrollY
		}).then((canvas) => {
			var imgData = canvas.toDataURL("image/png", 1.0);
			if (name === null) {
				productos[index] = null;
			} else {
				var a = links.filter((item) => item.id === name);
				productos[index] = {
					variantId: Buffer.from("gid://shopify/ProductVariant/" + a[0].link).toString("base64"),
					quantity: 1,
					imagen: imgData
				};
			}

			console.log(productos);
		});
	};

	const redirect = () => {
		var x = productos.filter((item) => item === null);
		console.log(x);
		if (document.getElementById("img").getAttribute("src") === "" || enlace === null || x[0] === null) {
			setShow(true);
			document.getElementById("tramitar").disabled = true;
		} else {
			var ventana = "";
			const page = document.getElementById("fondo");
			html2canvas(page, {
				backgroundColor: null,
				useCORS: true,
				allowTaint: false,
				scrollY: -window.scrollY
			}).then((canvas) => {
				var imgData = canvas.toDataURL("image/png", 1.0);

				if (enlace !== null) {
					productos[productos.length] = {
						variantId: Buffer.from("gid://shopify/ProductVariant/" + enlace).toString("base64"),
						quantity: 1,
						imagen: imgData
					};
					console.log(productos);
				}
			});
			client.checkout.create().then((checkout) => {
				var lineItemsToAdd = [];
				for (var i = 0; i < productos.length; i++) {
					var id = makeid();
					//uploadImagenes(productos[i].imagen, id);
					lineItemsToAdd.push({
						variantId: productos[i].variantId,
						quantity: productos[i].quantity,
						customAttributes: [
							{
								key: "Link",
								value:
									"https://firebasestorage.googleapis.com/v0/b/nuriapozas.appspot.com/o/" +
									id +
									"?alt=media"
							}
						]
					});
				}
				client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((e) => {
					console.log(productos);
					window.parent.location.href = e.webUrl;
				});
			});
		}
	};
	const makeid = () => {
		var result = "";
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = 12;
		for (var i = 0; i < charactersLength; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const uploadImagenes = (imagen, id) => {
		var storageRef = firebase.storage().ref().child(id);
		var uploadTask = storageRef.putString(imagen, "data_url");
		var e;
		uploadTask.on(
			"state_changed",
			function(snapshot) {
				var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
					case firebase.storage.TaskState.PAUSED: // or 'paused'
						console.log("Upload is paused");
						break;
					case firebase.storage.TaskState.RUNNING: // or 'running'
						console.log("Upload is running");
						break;
				}
			},
			function(error) {},
			function() {
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					e = downloadURL;
				});
			}
		);
		return Promise.resolve(e);
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast,
			setFondoA: setFondoA,
			crearProducto: crearProducto
		};
	});

	const setCoordinates = (e, data) => {
		setCoor(data);
	};

	const getCoordinates = () => {
		return coor;
	};

	return (
		<div id="fer">
			<Alert show={show} onClose={() => setShow(false)} transition variant="dark" dismissible fade="true">
				Antes de añadir al carrito, selecciona un dibujo y muévelo por la pieza. Puedes hacerlo más grande o más
				pequeño.
			</Alert>
			<Button id="tramitar" variant="outline-dark" onClick={redirect} disabled={enlace === null ? "true" : ""}>
				TRAMITAR VAJILLA
			</Button>

			<OverlayTrigger placement="top" overlay={<Tooltip>Aumenta el tamaño</Tooltip>}>
				<Button id="zoom" className="pepe" variant="outline-dark" onClick={zoomIn}>
					<i id="iconZoom" className="fa fa-search-plus fa-lg" />
				</Button>
			</OverlayTrigger>
			<OverlayTrigger placement="top" overlay={<Tooltip>Disminuye el tamaño</Tooltip>}>
				<Button id="zoomMinus" className="pepe" variant="outline-dark" onClick={zoomOut}>
					<i id="iconZoom" className="fa fa-search-minus fa-lg" />
				</Button>
			</OverlayTrigger>
			<DivStyle
				style={{
					backgroundImage: { pru }
				}}
				id="fondo"
			>
				<Draggable onStop={setCoordinates}>
					<DivFrame
						id="move"
						style={{
							height: "300px",
							width: "300px"
						}}
					>
						<ImgStyle id="img" draggable={false} src="" alt="" />
					</DivFrame>
				</Draggable>
			</DivStyle>
		</div>
	);
});

export default Platos;
