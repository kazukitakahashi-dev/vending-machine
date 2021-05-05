import { atom, selector } from 'recoil';

export type MItems = {
  [key: string]: {
    itemNm: string,
    price: number
  }
}

export type MShippings = {
  [key: string]: {
    shippingNm: string,
    price: number,
    comment: string
  }
}

export type Cart = {
  [key: string]: number
}

export type Shipping = {
  id: string,
  price: number
}

export type Total = {
  itemTotal: number,
  shippingTotal: number,
  total: number,
}

export const MItemState = atom<MItems>({
  key: 'MItemState',
  default: {
    'i0001': {
      itemNm: 'お茶',
      price: 120
    },
    'i0002': {
      itemNm: 'コーヒー',
      price: 250
    },
    'i0003': {
      itemNm: 'コーラ',
      price: 200
    }
  }
});

export const MShippingState = atom<MShippings>({
  key: 'FeeList',
  default: {
    's0001': {
      shippingNm: '亀さん便',
      price: -100,
      comment: 'いつ届くかわかりません'
    },
    's0002': {
      shippingNm: '通常便',
      price: 100,
      comment: '1週間以内にお届けします'
    },
    's0003': {
      shippingNm: 'お急ぎ便',
      price: 200,
      comment: '2日以内にお届けします'
    },
    's0004': {
      shippingNm: 'どこでもドア便',
      price: 1000000,
      comment: '今届きます'
    }
  }
});

export const CartState = atom<Cart>({
  key: 'CartState',
  default: {}
});

export const ShippingState = atom<Shipping>({
  key: 'ShippingState',
  default: {
    id: 's0002',
    price: 100
  }
});

export const MessageState = atom<string>({
  key: 'MessageState',
  default: 'カートに商品がありません。'
})

export const TotalState = selector<Total>({
  key: 'TotalState',
  get: ({get}) => {
    const mItemState = get(MItemState);
    const cartState = get(CartState);
    const shippingState = get(ShippingState);

    const itemTotal = Object.entries(cartState).reduce((acc, [id, quantity]) => acc + mItemState[id].price * quantity, 0);
    const shippingTotal = shippingState['price'];

    return {
      itemTotal: itemTotal,
      shippingTotal: shippingTotal,
      total: itemTotal + shippingTotal
    }
  }
});