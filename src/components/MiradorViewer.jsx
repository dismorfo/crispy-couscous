import React, { useEffect } from "react";
import Mirador from 'mirador/dist/es/src/index';
import miradorImageToolsPlugin from 'mirador-image-tools/es/plugins/miradorImageToolsPlugin.js';


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
      },
      miradorPlugins,
  }

  useEffect(() => {
      Mirador.viewer(config, [...miradorImageToolsPlugin]);
    })

  return (
    <div className="mirador-viewer">
      <div id={config.id}></div>
    </div>
  );
}

