import React from 'react';

class SongCover extends React.Component {
    render() {
        return <div className="container__cover">
                    <img className="cover--img" src={require('../../../assets/vinyl.png')} alt="Cover canción" />
               </div>;
    }
}

export default SongCover;
