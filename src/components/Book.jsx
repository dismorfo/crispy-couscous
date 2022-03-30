import Iframe from 'react-iframe'

export default function Book(props) { 
  //const { identifier = '' } = props;

  const endpoint = process.env.REACT_APP_BOOK_URL;
  const url = `${endpoint}/${props.identifier}/1`;

  return (
    <div role="application">
      <Iframe src={url}
            width="100%"
            height="750px"
            id="aBook"
            display="block"
            />
    </div>
  )
}