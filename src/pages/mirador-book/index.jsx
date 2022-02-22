import { useParams } from 'react-router-dom';

import MiradorBook from '../../components/MiradorBook';

export default function EmbeddedMiradorBook() {
  let { identifier } = useParams();
    
  const endpoint = process.env.REACT_APP_API_VIEWER;
  const manifestId = `${endpoint}/books/${identifier}/manifest.json`;

  return (
    <>
      <MiradorBook config={{ id: "demo", windows: [{manifestId: manifestId }]}}/>
    </>
  );
}

