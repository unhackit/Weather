import React from 'react';
import './Weather.css'

const Weather = ({displayCity, displayCountry, temperature, humidity, pressure, wind, main}) => {
	return(
		<div className="container">
			<div className="row mt-4 d-flex justify-content-center">
				<div className="card border-0" style={{width: "320px"}}>
				  <div className="card-body">
				    <div className="card-title text-center" style={{borderBottom: '1px solid #00b3ec'}}>
				    	<p>{displayCity}, {displayCountry}</p>
				    </div>
				    <div className="card-text">
				    	<div className="text-center pb-4">
				    		<h5>{main}</h5>
				    		<h3>{temperature}&deg;</h3>
				    	</div>
				    	<div className="row mt-3">
				    		<div className="col-lg-12 shadow pt-2 pb-2 mb-4 rounded text-center">
				    			<p><b>Wind:</b> {wind} km/h</p>
				    		</div>
				    		<div className="col-lg-12 shadow pt-2 pb-2 mb-4 rounded text-center">
				    			<p><b>Humidity:</b> {humidity}: g/m3</p>
				    		</div>
				    		<div className="col-lg-12 shadow pt-2 pb-2 mb-4 rounded text-center">
				    			<p><b>Pressure:</b> {pressure} pa</p>
				    		</div>
				    	</div>
				    </div>
				  </div>
				</div>
			</div>
		</div>
	)
}

export default Weather