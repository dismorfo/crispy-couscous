import React, { useEffect } from "react";
import Mirador from 'mirador/dist/es/src/index';
//import { miradorImageToolsPlugin } from 'mirador-image-tools';


export default function MiradorViewer(props) {

  const { identifier = '', resourceType = 'books' } = props;

  const endpoint = process.env.REACT_APP_API_VIEWER;

  const manifestId = `${endpoint}/${resourceType}/${identifier}/manifest.json`;

  // uuid
  // https://www.npmjs.com/package/uuid
  const uuid = 'demo';

  const config = {
      id: uuid, //uuid
      windows: [{manifestId: manifestId }],
      window: {
        allowMaximize: false,
        allowClose: true
      }
  }

  useEffect(() => {
      Mirador.viewer(config);
    })

  return (
    <div className="mirador-viewer">
      <div id={config.id}></div>
    </div>
  );
}

