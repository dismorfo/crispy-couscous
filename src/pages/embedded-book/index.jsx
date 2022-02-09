import { Link, useParams } from 'react-router-dom';
import Book from '../../components/Book';

export default function EmbeddedBook() {
  let { identifier } = useParams();
  return (
    <>
      <Book identifier={identifier}/>
    </>
  );
}
