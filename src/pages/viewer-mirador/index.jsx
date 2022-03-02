import { useParams } from 'react-router-dom';

import Book from "../../components/Book"

export default function ViewerMirador() {
  let { identifier } = useParams();
  
  return (
    <>
      <Book identifier={identifier} />
    </>
  )
}

