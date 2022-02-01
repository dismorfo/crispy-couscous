import React, { useState, useEffect } from 'react';
// import createPersistedState from 'use-persisted-state';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BrowseItem from './BrowseItem';

// const useResState = createPersistedState('res');
// const useRes = initialRes => {
//   const [res, setRes] = useResState(initialRes);
//   return {
//     res,
//     increment: () => setRes(currentRes => currentRes + 1),
//     decrement: () => setRes(currentRes => currentRes - 1),
//   };
// };

export default function ItemList(props) {

  const [ data, setData ] = useState({ numFound: 0, start: 0, docs: []});
  
  // eslint-disable-next-line
  // const [res, setRes] = useResState({});

  const { collection, rows, page } = props;

  useEffect(() => {
    const fetchData = async () => {
      const viewerUrl = 'https://sites.dlib.nyu.edu/viewer';
      const apiUrl = `${viewerUrl}/api/v1/objects?collection=${collection}&rows=${rows}&start=${page}`;
      fetch(apiUrl).then((res) => res.json()).then((res) => {
        const response = res.response;
        setData(response);
      });
    };
    fetchData();
  }, [collection, rows, page]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <BrowseItem documents={data.docs}/>
      </Grid>
    </Box>
  );
}
