import React from 'react';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

import 'css/buttons/Check.css';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';
import { MShippings, MShippingState, Shipping, ShippingState } from 'recoil/atom';

interface Props {
  id: string;
  price: number;
  check: boolean;
}

const CheckButton: React.VFC<Props> = (props) => {
  const mShippingState: MShippings = useRecoilValue(MShippingState);
  const shippingState: Shipping = useRecoilValue(ShippingState);
  const setShippingState: SetterOrUpdater<Shipping> = useSetRecoilState(ShippingState);

  return(
    <div className={'btnCheckContainer'}>
      {props.check ? (<CheckBoxIcon color={'primary'} style={{ fontSize: 22 }} />) : (
        <CheckBoxOutlineBlankOutlinedIcon 
        style={{ fontSize: 22 }} 
        onClick={() => {
          setShippingState({
            id: props.id,
            price: props.price
          });
        }}
      />
      )}
    </div>
  )
}

export default CheckButton;