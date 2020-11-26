import Button from './button.js'
import AbstractList from './abstract-list.js'

export default class Cart extends AbstractList {
  constructor () {
    super()
    this.init()
  }

  init() {
    const block = document.createElement('div')
    block.classList.add('cart')

    const list = document.createElement('div')
    list.classList.add('cart-list')
    block.appendChild(list)

    const ButtonInstance = new Button('Cart', () => {
      list.classList.toggle('shown')
    })
    block.appendChild(ButtonInstance.getTemplate())

    const placeToRender = document.querySelector('header')
    if(placeToRender) {
      placeToRender.appendChild(block)
    }
  }

  render () {
    const placeToRender = document.querySelector('.cart-list')
    if (placeToRender) {
      placeToRender.innerHTML = ''
      if (this.items.length) {
        this.items.forEach(good => {
          good.render(placeToRender)
        })
      } else {
        placeToRender.innerHTML = 'Нет товаров в корзине!'
      }
    }
  }
}

// const CartInstance = new Cart()