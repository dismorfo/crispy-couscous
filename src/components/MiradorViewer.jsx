import React, { useEffect } from "react";
import Mirador from 'mirador/dist/es/src/index';
//import { miradorImageToolsPlugin } from 'mirador-image-tools';


export default function MiradorViewer(props) { 
    
  //const { identifier = '' } = props;
    
  const endpoint = process.env.REACT_APP_API_VIEWER;
  const manifestId = `${endpoint}/books/${props.identifier}/manifest.json`;

  const config = { 
      id: "demo", 
      windows: [{manifestId: manifestId }],
      window: { 
        allowMaximize: false,
      }
  }

  useEffect(() => {
      Mirador.viewer(config);
    })

  return (
    <>
      <div id={config.id}></div>
    </>
  ); 
    
}

