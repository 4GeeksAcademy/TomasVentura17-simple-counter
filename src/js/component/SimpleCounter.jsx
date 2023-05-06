import React from "react";


 const SecondsCounter = props => {
	return (
		<div className="container-fluid p-0">
			<div className=" d-flex justify-content-center rounded">
				<div className=" px-2 rounded mx-1">
					<i className="far fa-clock"></i>
				</div>
				<div className="sextoNumero  px-2 rounded mx-1 border border-dark">
					{props.sextoNumero}
				</div>
				<div className="quintoNumero  px-2 rounded mx-1 border border-dark">
					{props.quintoNumero}
				</div>
				<div className="cuartoNumero  px-2 rounded mx-1 border border-dark">
					{props.cuartoNumero}
				</div>
				<div className="tercerNumero  px-2 rounded mx-1 border border-dark">
					{props.tercerNumero}
				</div>
				<div className="segundoNumero  px-2 rounded mx-1 border border-dark">
					{props.segundoNumero}
				</div>
				<div className="primerNumero px-2 rounded mx-1 border border-dark">
					{props.primerNumero}
				</div>
			</div>
		</div>
	);
};

export default SecondsCounter;