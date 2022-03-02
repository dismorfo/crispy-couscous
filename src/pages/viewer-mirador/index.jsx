import { useParams } from 'react-router-dom';

import MiradorViewer from '../../components/MiradorViewer';

export default function EmbeddedBook() {
  let { identifier } = useParams();

  return (
      <MiradorViewer identifier={identifier} />
  )
}
