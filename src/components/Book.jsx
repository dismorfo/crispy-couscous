import Iframe from 'react-iframe'

export default function Book(props) { 
  const { identifier = '' } = props;

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