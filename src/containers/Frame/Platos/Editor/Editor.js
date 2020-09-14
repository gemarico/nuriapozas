import React from "react";

export const Ball = () => {
	function handleOnDragStart(event) {
		event.dataTransfer.setDragImage(new Image(), 0, 0);
		event.target.style.cursor = "grab";
	}

	function handleOnDragEnter(event) {
		event.target.style.cursor = "grab";
	}

	function movement(e) {
		e.target.style.cursor = "grab";

		var div = document.getElementById("move");
		console.log(div.style.width);
		var medidaw = parseInt(div.style.width) / 2 + 350;
		var medidah = parseInt(div.style.height) / 2;
		div.style.left = e.clientX - medidaw + "px";
		div.style.top = e.clientY - medidah + "px";
	}

	function dragFinito(e) {
		e.preventDefault();
	}

	const imgStyle = {
		position: "relative",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%"
	};
	return (
		<div
			style={{
				position: "absolute",
				display: "block",
				maxWidth: "auto",
				maxHeight: "auto",
				cursor: "grab"
			}}
			onDragStart={handleOnDragStart}
			onDrag={movement}
			onDragOver={dragFinito}
			draggable={true}
		>
			<img style={imgStyle} id="img" draggable={false} src="" alt="" />
		</div>
	);
};
export default Ball;
