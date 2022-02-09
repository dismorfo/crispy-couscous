import { useParams } from 'react-router-dom';

export default function EmbeddedBook() {
  let { identifier } = useParams();
  return (
    <>
      <Book identifier={identifier}/>
    </>
  );
}
