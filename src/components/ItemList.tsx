import React from 'react';

import { Grid } from '@material-ui/core';
import { useRecoilValue } from 'recoil';

import 'css/ItemList.css';
import AddButton from 'components/buttons/Add';
import RemoveButton from 'components/buttons/Remove';
import { Cart, CartState, MItems, MItemState } from 'recoil/atom';

const ItemList: React.VFC = () => {
  const mItemState: MItems = useRecoilValue(MItemState);
  const cartState: Cart  = useRecoilValue(CartState);

  return(
    <div className={'itemListContainer'}>
      <div className={'itemListCard'}>
        <div className={'itemListTitle'}>商品一覧</div>
        <div className={'itemList'}>
          {Object.entries(mItemState).map(([id, { itemNm, price }]) => (
            <Grid container className={'itemRow'}>
              <Grid item xs={5} sm={4}>
                {itemNm}
              </Grid>
              <Grid item xs={3} sm={4}>
                ¥{price}
              </Grid>
              <Grid item xs={4} sm={4}>
                <div className={'btnContainer'}>
                  <AddButton id={id} />
                  {cartState[id] && (<RemoveButton id={id} />)}
                </div>
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemList;