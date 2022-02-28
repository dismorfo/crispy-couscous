import React, { useEffect } from "react";
import Mirador from 'mirador/dist/es/src/index';
//import { miradorImageToolsPlugin } from 'mirador-image-tools';


export default function MiradorViewer(props) { 
    
    
    useEffect(() => {
        Mirador.viewer(props.config);
    })

    
    return ( 
        <div id={props.config.id}></div>
    )
    
}

