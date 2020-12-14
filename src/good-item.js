import AbstractGoodItem from './a-good-item.js'
import Button from './button.js'
import GoodItemInCart from './good-item-cart.js'

export default class GoodItem extends AbstractGoodItem {
  constructor(...props) {
    super(...props)
  }

  render(placeToRender) {
    placeToRender = placeToRender || document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('good-card')
      block.innerHTML = `<img class="good-img" src="${this.img}"><p class="good-info">Product: ${this.name}<br>Price: ${this.price}</p>
      <div class="btn-wrp"</div>`
      placeToRender.appendChild(block)
      
      const AddButton = new Button('Add to cart', () => {
        this._cartInstance.add(new GoodItemInCart(this))
      })
      block.querySelector('.btn-wrp').appendChild(AddButton.getTemplate())
    }
  }
}

