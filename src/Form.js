import React from 'react';

const Form = ({submit, City, Country}) => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 mt-3 mb-3">
					<input 
					placeholder="Enter city name"
					className="form-control"
					onChange={City}
					/>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 mt-3 mb-3">
					<input 
					placeholder="Enter country name"
					className="form-control"
					onChange={Country}
					/>
				</div>
				<div>
					<button className="btn btn-light ml-3" onClick={submit}> Check Weather</button>
				</div>
			</div>
		</div>
	)
}

export default Form