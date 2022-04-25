import React, { useEffect } from "react";
import Mirador from 'mirador/dist/es/src/index';
import CustomSidePanel from 'custom-panel/es/components/index'
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import { v4 as uuidv4 } from 'uuid';


export default function MiradorViewer(props) {

  const { identifier = '', resourceType = 'books' } = props;

  const endpoint = process.env.REACT_APP_API_VIEWER;

  const manifestId = `${endpoint}/${resourceType}/${identifier}/manifest.json`;

  const canvasIndexValue = 0;
  
  const uuid = "viewer-" + uuidv4();
  

  const config = {
      id: uuid, 
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
      translations: { 
        en: { 
          openCompanionWindow_CustomKey1: 'This is a moo'
        }
      }
  }

  useEffect(() => {
      Mirador.viewer(config, [
        ...miradorImageToolsPlugin, CustomSidePanel
      ]);
    })

  return (
    <div className="mirador-viewer">
      <div id={config.id}></div>
    </div>
  );
}

