import React from "react";
function Featurebox(props){
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
             <div className='s-b-text'>
                 <h2>{props.title}</h2>
                 <p>loreumnjjjjjjjjjjjjjjjjjjdrsrgththyjukm</p>
             </div>

        </div>
    )
}
export default Featurebox;