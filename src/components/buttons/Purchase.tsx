import React from 'react';

import { Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

import 'css/buttons/Purchase.css';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { Cart, CartState, MessageState, Shipping, ShippingState } from 'recoil/atom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const PurchaseButton: React.VFC = () => {
  const setCartSate: SetterOrUpdater<Cart> = useSetRecoilState(CartState);
  const setShippingState: SetterOrUpdater<Shipping> = useSetRecoilState(ShippingState);
  const setMessageState: SetterOrUpdater<string> = useSetRecoilState(MessageState);

  return(
    <div className={'btnPurchase'}>
      <ThemeProvider theme={theme}>
        <Button
          variant={'contained'}
          color={'primary'}
          onClick={() => {
            setCartSate({});
            setShippingState({id: 's0002', price: 100});
            setMessageState('遊んでくれてありがとう！！！！！\n次は役立ちそうなの作ります笑');
          }}
        >
          購入する
        </Button>
      </ThemeProvider>
    </div>
  )
}

export default PurchaseButton;