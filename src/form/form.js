import React from 'react';

import './form.scss';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			url: '',
			method: 'get'
		};
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.getData({...this.state});
	};


	handleUrlChange = (e) => {
		const url = e.target.value;
		this.setState({ url: url });
	};


	handleMethod = (e) => {
		const method = e.target.value;
		this.setState({ method: method });
	};


	render() {
		return (
			<>
			<main>
				
				<form data-testid='urlForm' onSubmit={this.handleSubmit}>
					URL
					<input data-testid='urlInput' name="url" required onChange={this.handleUrlChange} />
					<button type="submit">GO!</button>
					<br></br>
					<br></br>
					<label>
						<input
							data-testid='selectGet'
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="get"
						/>
						<span>GET</span>
					</label>
					<label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="post"
						/>
						<span>POST</span>
					</label>
					<label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="put"
						/>
						<span>PUT</span>
					</label>
					<label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="delete"
						/>
						<span>DELETE</span>
					</label>
				</form>
			</main>
			</>
		);
	}
}

export default Form;
