export default class AbstractGoodItem {
  name = ''
  price = 0
  counter = 1
  _cartInstance = null

  constructor({ img, name, price }, CartInstance) {
    this.img = img
    this.name = name
    this.price = price
    this._cartInstance = CartInstance
  }

  render(placeToRender) {
    // заглушка, будет реализована в потомках
  }
}

