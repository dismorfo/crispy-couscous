import Grid from '@mui/material/Grid';
import Item from './Item';

export default function BrowseItem(props) {
  return (
    <>
    {
      props.documents.map((document, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item document={document} />
        </Grid>
      ))
    }
    </>
  );
}
