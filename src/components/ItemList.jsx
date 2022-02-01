import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Item from '../components/Item';

export default function ItemList(props) {
  
  const [loading, setLoading] = useState(true);

  const [ data, setData ] = useState({ numFound: 0, start: 0, docs: []});
  
  const collection = 'io';

  const { rows, page }  = props;

  const viewerUrl = 'https://sites.dlib.nyu.edu/viewer';

  const apiUrl = `${viewerUrl}/api/v1/objects?collection=${collection}&rows=${rows}&start=${page * rows}`;

  // https://www.robinwieruch.de/react-hooks-fetch-data/
  useEffect(() => {
    const fetchData = async () => {
      fetch(apiUrl).then((res) => res.json()).then((res) => {
        const response = res.response;
        setData(response);
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            data.docs.map((document, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item document={document} />
              </Grid>
            ))
          }
        </Grid>     
      </Box>
    </>
  );
}
