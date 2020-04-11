class ShopItem {
  constructor(entity) {
    Object.assign(this, {
      brand: '',
      title: '',
      description: '',
      descriptionFull: '',
      price: 399,
      currency: '£'
    }, entity);
  }   
}

export default ShopItem;