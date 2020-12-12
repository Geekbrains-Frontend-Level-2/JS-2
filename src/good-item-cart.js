
export default class GoodItemInCart extends GoodItem {
  constructor(props) {
    super(props)
  }

  render(placeToRender) {
    const placeToRender = document.querySelector('.cart-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('cart-good')
      block.innerHTML = `${this.name} = ${this.price} * ${this.counter}`
      placeToRender.appendChild(block)
    }
  }
}