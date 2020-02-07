import ShopActionTypes from './shop.types';

export const updataCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATA_COLLECTIONS,
  payload: collectionMap
})
