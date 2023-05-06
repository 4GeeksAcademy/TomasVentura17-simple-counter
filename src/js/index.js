//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SimpleCounter.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


//render your react application
let counterTime = 0;
setInterval(() => {
	const seis = Math.floor((counterTime / 100000) % 10);
	const cinco = Math.floor((counterTime / 10000) % 10);
	const cuatro = Math.floor((counterTime / 1000) % 10);
	const tres = Math.floor((counterTime / 100) % 10);
	const dos = Math.floor((counterTime / 10) % 10);
	const uno = Math.floor((counterTime / 1) % 10);

	counterTime++;
	ReactDOM.render(
		<SecondsCounter
		
			sextoNumero={seis}
			quintoNumero={cinco}
			cuartoNumero={cuatro}
			tercerNumero={tres}
			segundoNumero={dos}
			primerNumero={uno}
		/>,
		document.querySelector("#app")
	);
}, 1000);
