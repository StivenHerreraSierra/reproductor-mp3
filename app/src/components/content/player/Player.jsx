import React from 'react';
import PlayerControls from './PlayerControls';
import SongCover from './SongCover';
import UploadButton from './UploadButton';

class Player extends React.Component {
    render() {
        return <div className="container__player">
	           <SongCover />
		   <PlayerControls />
		   <UploadButton />
	       </div>;
    }
}

export default Player;
