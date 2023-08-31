import React from "react";

const Loader: React.FC<{}> =()=> {

	//This just plain nothing much to said about here as it self explanatory 
    return(
        <div className="preloader">
		<div id="handle-preloader" className="handle-preloader">
			<div className="animation-preloader">
				<div className="spinner"></div>
				<div className="txt-loading">
                   <span data-text-preloader="t" className="letters-loading">T</span>
					<span data-text-preloader="a" className="letters-loading">A</span>
					<span data-text-preloader="x" className="letters-loading">X</span>
					<span data-text-preloader="i" className="letters-loading">I</span>
					<span data-text-preloader="a" className="letters-loading">A</span>
					<span data-text-preloader="r" className="letters-loading">R</span>    
				</div>
			</div>
		</div>
	</div>
    )
}
export default Loader;