import React from 'react';

import { Fab } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';

import 'css/buttons/Remove.css';
import { Cart, CartState } from 'recoil/atom';

interface Props {
  id: string;
}

const RemoveButton: React.VFC<Props> = (props) => {
  const cartState: Cart = useRecoilValue(CartState);
  const setCartState: SetterOrUpdater<Cart> = useSetRecoilState(CartState);

  return(
    <div className={'btnRemove'}>
      <Fab 
        size={'small'} 
        color={'secondary'} 
        aria-label={'remove'}
        onClick={() => {
          const copyCartState = {...cartState};
          if (!copyCartState[props.id]) {
            return
          } else
          if (copyCartState[props.id] == 1) {
            delete copyCartState[props.id];
            setCartState(copyCartState);
          } else {
            setCartState({...cartState, [props.id]: copyCartState[props.id] - 1});
          }
        }}
      >
        <RemoveIcon style={{ fontSize: 18 }} />
      </Fab>
    </div>
  )
}

export default RemoveButton;