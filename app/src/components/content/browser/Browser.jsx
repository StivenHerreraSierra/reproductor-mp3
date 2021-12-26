import '../../../App.css';
import React from 'react';

class Browser extends React.Component {
	constructor(props) {
	    super(props);
            this.state = {input: ""};

	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({input: event.target.value});
	}

	render() {
		return <div className="container__browser">
			<input type="text" value={this.state.input} onChange={this.handleChange} className="browser--input" />
	           <button className="browser--button"></button>
	        </div>
	;
    } 
}

export default Browser;
