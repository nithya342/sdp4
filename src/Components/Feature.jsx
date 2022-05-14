import React from "react";
import Featurebox from "./Featurebox";
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';
function Feature(){
    return(
        <div id='features'>
            <div className='a-container'>
                <Featurebox image={featureimage} title='planning'/>
                <Featurebox image={featureimage1} title='Production'/>
                <Featurebox image={featureimage2} title='Strategies'/>
                   
            </div>

        </div>
    )
}
export default Feature;