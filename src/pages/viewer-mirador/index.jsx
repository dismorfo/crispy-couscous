import { useParams } from 'react-router-dom';

import MiradorViewer from '../../components/MiradorViewer'

export default function ViewerMirador() {
  let { identifier } = useParams();
    
  const endpoint = process.env.REACT_APP_API_VIEWER;
  const manifestId = `${endpoint}/books/${identifier}/manifest.json`;

  return (
    <>
      <MiradorViewer config={{ id: "demo", windows: [{manifestId: manifestId }]}}/>
    </>
    
  );
}

