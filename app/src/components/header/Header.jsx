import '../../App.css';
import React from 'react';

class Header extends React.Component {
	render() {
	return <header className="App-header">
          <h1><a className="header__item" href="#">  Reproductor </a></h1>
          <h2><a className="header__item yellow" href="#">  GitHub </a></h2>
        </header>
	;
    }
}

export default Header;
