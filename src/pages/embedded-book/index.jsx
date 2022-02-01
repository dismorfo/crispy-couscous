import { Link, useParams } from 'react-router-dom';

export default function EmbeddedBook() {
  let { identifier } = useParams();
  return (
    <>
      <p>Book {identifier} here.</p>
      <p><Link to="/">Go to the home page</Link></p>
    </>
  );
}
