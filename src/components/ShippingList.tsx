import React from 'react';

import { Grid, Tooltip } from '@material-ui/core';
import { useRecoilValue } from 'recoil';

import 'css/ShippingList.css';
import CheckButton from 'components/buttons/Check';
import { MShippings, MShippingState, Shipping, ShippingState } from 'recoil/atom';

const ShippingList: React.VFC = () => {
  const mShippingState: MShippings = useRecoilValue(MShippingState);
  const shippingState: Shipping = useRecoilValue(ShippingState);

  return(
    <div className={'shippingListContainer'}>
      <div className={'shippingListCard'}>
        <div className={'shippingListTitle'}>配送方法</div>
        <div className={'shippingList'}>
          {Object.entries(mShippingState).map(([id, { shippingNm, price, comment }]) => (
            <Grid container className={'shippingRow'}>
              <Tooltip title={comment}>
                <Grid item xs={5} sm={4}>
                  {shippingNm}
                </Grid>
              </Tooltip>
              <Grid item xs={5} sm={4}>
                ¥{price}
              </Grid>
              <Grid item xs={2} sm={4}>
                <div className={'btnContainer'}>
                  <CheckButton id={id} price={price} check={shippingState['id'] == id ? true : false} />
                </div>
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShippingList;