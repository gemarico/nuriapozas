import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "react-bootstrap";
import Ball from "./Editor/Editor";
import Alert from "react-bootstrap/Alert";
import Client from "shopify-buy";
import { DivStyle } from "./Platos.style";

var enlace = "";
const Platos = forwardRef((props, ref) => {
	const [value, setValue] = useState(false);
	const [show, setShow] = useState(false);
	const client = Client.buildClient({
		domain: "nuria-pozas.myshopify.com",
		storefrontAccessToken: "c23d72381b2e48034a6cb4d8bca27ad8"
	});
	var data = null;
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
			link: "36196470456484"
		},
		{
			id: "prueba4",
			link: "36196470456484"
		}
	];
	const showToast = (name) => {
		setValue(true);
		document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
		data = links.filter((item) => item.id === name);
		enlace = data[0].link;
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

	const deleteImage = () => {
		document.getElementById("img").setAttribute("src", "");
		document.getElementById("move").style.top = "0";
		document.getElementById("move").style.left = "0";
	};
	const redirect = () => {
		if (document.getElementById("img").getAttribute("src") === "") {
			setShow(true);
		} else {
			const input = {
				lineItems: [
					{
						variantId: Buffer.from("gid://shopify/ProductVariant/" + enlace).toString("base64"),
						quantity: 1,
						customAttributes: [
							{
								key: "Visualiza aquí: ",
								value:
									"https://www.alambique.com/1546-large_default/bandeja-plato-redonda-para-tarta-bagatelle.jpg"
							}
						]
					}
				],
				note: "https://www.alambique.com/1546-large_default/bandeja-plato-redonda-para-tarta-bagatelle.jpg"
			};
			client.checkout.create(input).then((checkout) => {
				window.parent.location.href = checkout.webUrl;
			});
		}
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast
		};
	});

	return (
		<div>
			<Alert show={show} onClose={() => setShow(false)} transition variant="dark" dismissible fade="true">
				Antes de añadir al carrito, selecciona un dibujo y muévelo por la pieza. Puedes hacerlo más grande o más
				pequeño.
			</Alert>
			<Button style={{ marginRight: "50%" }} variant="outline-dark" onClick={redirect}>
				TRAMITAR VAJILLA
			</Button>
			<Button id="trash" variant="outline-dark" onClick={deleteImage}>
				<i id="iconZoom" className="fa fa-trash fa-lg" />
			</Button>
			<Button id="zoom" variant="outline-dark" onClick={zoomIn}>
				<i id="iconZoom" className="fa fa-search-plus fa-lg" />
			</Button>
			<Button id="zoomMinus" variant="outline-dark" onClick={zoomOut}>
				<i id="iconZoom" className="fa fa-search-minus fa-lg" />
			</Button>
			<DivStyle
				style={{
					backgroundImage: 'url("img/fondoPlato.png")',
				}}
				id="fondo"
			>
				<Ball />
			</DivStyle>

		</div>
	);
});

export default Platos;
