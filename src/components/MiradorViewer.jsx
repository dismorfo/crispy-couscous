import React, { useEffect } from "react";
import Mirador from '../../node_modules/mirador/dist/mirador.min.js';
import miradorImageToolsPlugin from '../../node_modules/mirador-image-tools/umd/mirador-image-tools.min.js';


export default function MiradorViewer(props) {

  const { identifier = '', resourceType = 'books' } = props;

  const endpoint = process.env.REACT_APP_API_VIEWER;

  const manifestId = `${endpoint}/${resourceType}/${identifier}/manifest.json`;

  const miradorPlugins = [...miradorImageToolsPlugin];

  const canvasIndexValue = 0;
  // uuid
  // https://www.npmjs.com/package/uuid
  const uuid = 'demo';

  const config = {
      id: uuid, //uuid,
      workspaceControlPanel: {
        enabled: false,
      },
      workspace: { 
        isWorkspaceAddVisible: false,
        allowNewWindows: false,
      },
      language: 'en',
      windows: [
        {
          manifestId: manifestId,
          imageToolsEnabled: true,
          imageToolsOpen: false,
          canvasIndex: canvasIndexValue,
          view: 'single',
        }
      ],
      window: {
        allowClose: false,
        defaultSideBarPanel: 'info',
        sideBarOpenByDefault: true, 
        showLocalePicker: true,
        hideWindowTitle: true,
      }
  }

  useEffect(() => {
      Mirador.viewer(config, miradorPlugins);
    })

  return (
    <div className="mirador-viewer">
      <div id={config.id}></div>
    </div>
  );
}

