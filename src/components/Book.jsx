import Iframe from 'react-iframe'

export default function Book(props) { 
  const { identifier = '' } = props;

  const endpoint = process.env.REACT_APP_BOOK_URL;
  const url = `${endpoint}/${identifier}/1`;

  return (
    <Iframe src={url}
            width="100%"
            height="750px"
            id="aBook"
            display="block"
            />
  )
}