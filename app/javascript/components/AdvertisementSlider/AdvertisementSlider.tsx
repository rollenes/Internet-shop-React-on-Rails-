import React from 'react'

import '../../../assets/stylesheets/advertisementSlider.scss'


const AdvertisementSlider = () => {

    const PNG1 = require('../../../assets/images/PictureSlider1.jpg')

    return(
        <div className="advertisement-slider-container">
            <img src={PNG1} alt="Ressssssssklasma 1" className="picture"/>
        </div>
    )
}

export default AdvertisementSlider