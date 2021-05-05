import React from 'react';

import { Grid } from '@material-ui/core';
import { useRecoilValue } from 'recoil';

import 'css/CartList.css';
import { Cart, CartState, MessageState, MItems, MItemState, Total, TotalState } from 'recoil/atom';
import PurchaseButton from './buttons/Purchase';

const CartList: React.VFC = () => {
  const mItemState: MItems  = useRecoilValue(MItemState);
  const cartState: Cart = useRecoilValue(CartState);
  const messageState: string = useRecoilValue(MessageState);
  const totalState: Total = useRecoilValue(TotalState);

  return(
    <div className={'cartListContainer'}>
      <div className={'cartListCard'}>
        <div className={'cartListTitle'}>カート</div>
        <div className={'cartList'}>
          {Object.keys(cartState).length == 0 ? (<div><strong>{messageState}</strong></div>) : (
            <Grid container>
              <Grid item xs={12} sm={9}>
                {Object.entries(cartState).map(([id, quantity]) => (
                  <div className='cartRow'>
                    {mItemState[id].itemNm} ×{quantity}
                  </div>
                ))}
                <div>
                  <h4>合計</h4>
                  <p>商品代金 : {totalState.itemTotal}</p>
                  <p>配送料金 : {totalState.shippingTotal}</p>
                  <p><strong>合計金額 : {totalState.total}</strong></p>
                </div>
              </Grid>
              <Grid item xs={12} sm={3} className={'purchaseContainer'}>
                <PurchaseButton />
              </Grid>
            </Grid>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartList;