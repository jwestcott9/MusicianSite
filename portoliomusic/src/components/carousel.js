import React from 'react';
import Carousel from 'react-image-carousel';
import "../stylesheets/main.scss";
function carousel (props){
    let images = [
        require( '../assets/images/11894575_10206643510380127_6646825434439638494_o.jpg'),
        require('../assets/images/12322458_10206734808702533_6043597001541078686_o.jpg')

    ]
    return (
        <> 
       
       <div className="my-carousel">
            <Carousel  
                        images={images} 
                        thumb={true}
                        loop={true}
                        autoplay={3000}/>
        </div>
        </>
    )
}


export default carousel;