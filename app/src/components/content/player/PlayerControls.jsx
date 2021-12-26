import '../../../App.css';
import React from 'react';

class PlayerControls extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
            volume: 0
	};

	this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({volume: event.target.value});
    }

    render() {
	    return <div className="container__controls">
		    <button className="player--volume-button" >
			<img src={require("../../../assets/back.png")} alt="Anterior" />
		    </button>
		    <button className="player--volume-button">
			<img src={require("../../../assets/start.png")} alt="Reproducir" />
		    </button>
		    <button className="player--volume-button">
			<img src={require("../../../assets/forward.png")} alt="Siguiente" />
		    </button>
		    <div className="player--volume">
			<label>
		            <span className="player--volume-label">{this.state.volume}%</span>
			    <input className="player--volume-slider" type="range" max="100" min="0" step="1" value={this.state.volume} onChange={this.changeHandler}/>
                        </label>
		    </div>
	           </div>;
  
    }
}

export default PlayerControls;
