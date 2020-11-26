import Button from './button.js'

import './style.css'

class AbstractList {
  items = []

  constructor(item = []) {
   this.item = []
  }

  add(item) {
    const findedItem = this.items.find((fitem) => {
      return fitem.name === item.name
    })

    const addedPromise = new Promise(resolve => {
      if(findedItem) {
      findedItem.counter++
    } else {
      this.items.push(item)
    }
    resolve()
    })
    
    addedPromise.then(this.render.bind(this))
  }

  remove() {

  }

  render() {
    console.log(this.items);
    this.items.forEach(good => {
      good.render()
    })
  }
}

class List extends AbstractList  {
  _cartInstance = null
  _pageCounter = 1
  constructor (CartInstance) {
    super()
    this._cartInstance = CartInstance

     this.initShowMoreBtn()

    let goodsPromise = this.fetchGoods()
    goodsPromise.then(() => {
      this.render()
    })
  }

  initShowMoreBtn() {
    const btn = document.querySelector('.show-more');
    btn.addEventListener('click', () => {
      this.fetchGoods()
        .then(() => {
          this.render()
        })
    })
  }

  hideShowMoreBtn() {
    const btn = document.querySelector('.show-more')
    btn.remove()
  }

  fetchGoods() {
    const result = fetch(`/database/page${this._pageCounter}.json`);
    return result
    .then(res => {
      return res.json()
    })
    .then(data => {
      this._pageCounter++
      this.items.push(...data.data.map(cur => {
        return new GoodItem(cur, this._cartInstance)
      }))
    })
    .catch(e => {
      this.hideShowMoreBtn()
      console.log(e)
    })
  }

  render () {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      placeToRender.innerHTML = ''
      this.items.forEach(good => {
        good.render(placeToRender)
      })
    }
  }
}

class Cart extends AbstractList {
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

class GoodItem {
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
  onBlockClick() {
    console.log('Add!');

    const PlaceToAdd = document.querySelector('.cart')
    if (PlaceToAdd) {
      const block = document.createElement('div')
      block.classList.add('good-cart')
      block.innerHTML = `<img class="good-img" src="${this.img}"><p class="good-info">Product: ${this.name}<br>Price: ${this.price}</p>`
      PlaceToAdd.appendChild(block)
    }
  }
  

  render() {
    const placeToRender = document.querySelector('.goods-list')
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

class GoodItemInCart extends GoodItem {
  constructor(props) {
    super(props)
  }

  render() {
    const placeToRender = document.querySelector('.cart-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('cart-good')
      block.innerHTML = `${this.name} = ${this.price} * ${this.counter}`
      placeToRender.appendChild(block)
    }
  }
}

const CartInstance = new Cart()
const ListInstance = new List(CartInstance)