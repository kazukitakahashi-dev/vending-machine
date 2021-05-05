import React from 'react';

import { Grid } from '@material-ui/core';

import 'App.css';
import ItemList from 'components/ItemList';
import ShippingList from 'components/ShippingList';
import CartList from 'components/CartList';

const App: React.VFC = () => {
  return(
    <>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <ItemList />
          <ShippingList />
        </Grid>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
      </Grid>
    </>
  )
}

export default App;