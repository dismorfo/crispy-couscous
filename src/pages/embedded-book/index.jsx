import { Link, useParams } from 'react-router-dom';
import Iframe from 'react-iframe'

function Book(props) { 
  const { identifier = '' } = props;

  console.log(identifier);

  const url = `https://objective-johnson-b22e71.netlify.app/books/${identifier}/1`
  return (
    <Iframe src={url}
            width="100%"
            height="750px"
            id="aBook"
            display="block"
            />
  )
}
export default function EmbeddedBook() {
  let { identifier } = useParams();
  return (
    <>
      <Book identifier={identifier}/>
      <p><Link to="/">Go to the home page</Link></p>
    </>
  );
}
