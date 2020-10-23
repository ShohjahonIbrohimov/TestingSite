import React from 'react';
import prezImage from '../../assets/home/prezident-img.jpg'

const RoundPic = ({ borderColor, imgName, width }) => {

    const style = {
        backgroundImage: `url(${prezImage})`,
        border: `5px solid ${borderColor}`,
        width: `${width}px`,
        height: `${width}px`
    }

    return (
        <div className='round-pic' style={style}>
        </div>
    )
}

export default RoundPic
