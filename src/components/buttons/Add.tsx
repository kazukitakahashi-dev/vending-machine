import React from 'react';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';

import 'css/buttons/Add.css';
import { Cart, CartState, MessageState } from 'recoil/atom';

interface Props {
  id: string;
}

const AddButton: React.VFC<Props> = (props) => {
  const cartState: Cart = useRecoilValue(CartState);
  const setCartState: SetterOrUpdater<Cart> = useSetRecoilState(CartState);
  const setMessageState: SetterOrUpdater<string> = useSetRecoilState(MessageState);

  return(
    <div className={'btnAdd'}>
      <Fab
        size={'small'} 
        color={'primary'}
        aria-label={'add'}
        className={'btnAdd'}
        onClick={() => {
          setCartState({...cartState, [props.id]: (cartState[props.id] || 0) + 1});
          setMessageState('カートに商品がありません。');
        }}
      >
        <AddIcon style={{ fontSize: 18 }} />
      </Fab>
    </div>
  )
}

export default AddButton;