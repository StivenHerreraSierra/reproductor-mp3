import React from 'react';

class UploadButton extends React.Component {
    render() {
        return <div>
                    <label>
		        <span className="upload--label"> Cargar canción </span>
                        <input type="file" className="upload--input" multiple accept="audio/*" />
		    </label>
               </div>;
    }
}

export default UploadButton;
